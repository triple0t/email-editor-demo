<?php

namespace EmailEditorDemo;

class EmailEditorDemoIntegration
{

  const MAILPOET_EMAIL_POST_TYPE = 'mailpoet_email';

  private EmailEditorPageRenderer $editorPageRenderer;

  private EmailEditorDemoApiController $emailApiController;

  public function __construct(
    EmailEditorPageRenderer $editorPageRenderer,
    EmailEditorDemoApiController $emailApiController,
  ) {
    $this->editorPageRenderer = $editorPageRenderer;
    $this->emailApiController = $emailApiController;
  }

  public function initialize(): void
  {
    add_filter('mailpoet_email_editor_post_types', [$this, 'addEmailPostType']);
    add_filter('mailpoet_is_email_editor_page', [$this, 'isEditorPage'], 10, 1);
    add_filter('replace_editor', [$this, 'replaceEditor'], 10, 2);
    $this->extendEmailPostApi();
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

  public function extendEmailPostApi() {
    register_rest_field(self::MAILPOET_EMAIL_POST_TYPE, 'mailpoet_data', [
      'get_callback' => [$this->emailApiController, 'getEmailData'],
      'update_callback' => [$this->emailApiController, 'saveEmailData'],
      'schema' => $this->emailApiController->getEmailDataSchema(),
    ]);
  }
}
