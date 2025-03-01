<?php

namespace EmailEditorDemo;

use MailPoet\EmailEditor\Engine\PersonalizationTags\Personalization_Tag;
use MailPoet\EmailEditor\Engine\PersonalizationTags\Personalization_Tags_Registry;
use EmailEditorDemo\Patterns\PatternsController;
use EmailEditorDemo\Templates\TemplatesController;

class EmailEditorDemoIntegration
{

  const MAILPOET_EMAIL_POST_TYPE = 'editor_demo_mail';

  private EmailEditorPageRenderer $editorPageRenderer;

	private PatternsController $patternsController;

	private TemplatesController $templatesController;

  public function __construct(
    EmailEditorPageRenderer $editorPageRenderer,
		PatternsController $patternsController,
    TemplatesController $templatesController,
  ) {
    $this->editorPageRenderer = $editorPageRenderer;
		$this->patternsController = $patternsController;
    $this->templatesController = $templatesController;
  }

  public function initialize(): void
  {
    add_filter('mailpoet_email_editor_post_types', [$this, 'addEmailPostType']);
    add_filter('mailpoet_is_email_editor_page', [$this, 'isEditorPage'], 10, 1);
    add_filter('replace_editor', [$this, 'replaceEditor'], 10, 2);
		// register patterns
		$this->patternsController->registerPatterns();
		// register templates
    $this->templatesController->initialize();
		$this->registerPersonalizationTags();
  }

  public function addEmailPostType(array $postTypes): array
  {
    $postTypes[] = [
      'name' => self::MAILPOET_EMAIL_POST_TYPE,
      'args' => [
        'labels' => [
          'name' => __('Emails', 'email-editor-demo'),
          'singular_name' => __('Email', 'email-editor-demo'),
          'add_new_item' => __('Add New Email', 'email-editor-demo'),
          'edit_item' => __('Edit Email', 'email-editor-demo'),
          'new_item' => __('New Email', 'email-editor-demo'),
          'view_item' => __('View Email', 'email-editor-demo'),
          'search_items' => __('Search Emails', 'email-editor-demo')
        ],
        'rewrite' => ['slug' => self::MAILPOET_EMAIL_POST_TYPE],
        'supports' => ['title', 'editor'],
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'show_in_rest' => true
      ],
    ];
    return $postTypes;
  }

  public function isEditorPage(bool $isEditorPage): bool
  {
    if ($isEditorPage) {
      return $isEditorPage;
    }

    // We need to check early if we are on the email editor page. The check runs early so we can't use current_screen() here.
    if (is_admin() && isset($_GET['post']) && isset($_GET['action']) && $_GET['action'] === 'edit') {
      $post = get_post((int)$_GET['post']);
      return $post && $post->post_type === self::MAILPOET_EMAIL_POST_TYPE; // phpcs:ignore Squiz.NamingConventions.ValidVariableName.MemberNotCamelCaps
    }

    return false;
  }

  public function replaceEditor($replace, $post)
  {
    $currentScreen = get_current_screen();
    if ($post->post_type === self::MAILPOET_EMAIL_POST_TYPE && $currentScreen) { // phpcs:ignore Squiz.NamingConventions.ValidVariableName.MemberNotCamelCaps
      $this->editorPageRenderer->render();
      return true;
    }
    return $replace;
  }

	public function registerPersonalizationTags() {
		add_filter('mailpoet_email_editor_register_personalization_tags', function( Personalization_Tags_Registry $registry ): Personalization_Tags_Registry {
			$registry->register(new Personalization_Tag(
        __('Email', 'email-editor-demo'),
        'mailpoet/subscriber-email', // testing using mailpoet -- not working
        __('Subscriber', 'email-editor-demo'),
        function (array $context, array $args = []): string {
					return $context['recipient_email'] ?? '';
				},
      ));

      // Site Personalization Tags
      $registry->register(new Personalization_Tag(
        __('Site Title', 'email-editor-demo'),
        'mailpoet/site-title',
        __('Site', 'email-editor-demo'), // testing using mailpoet -- not working
        function (array $context, array $args = []): string {
					return htmlspecialchars_decode(get_bloginfo('name'));
				},
      ));
      $registry->register(new Personalization_Tag(
        __('Homepage URL', 'email-editor-demo'),
        'mailpoet/site-homepage-url',
        __('Site', 'email-editor-demo'), // testing using mailpoet -- not working
        function (array $context, array $args = []): string {
					return get_bloginfo('url');
				},
      ));
			return $registry;
		});
	}
}
