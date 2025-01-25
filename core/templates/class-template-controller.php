<?php declare(strict_types = 1);

namespace EmailEditorDemo\Templates;

use EmailEditorDemo\EmailEditorDemoIntegration;

class TemplatesController {

	/**
	 * The prefix used for the template names.
	 *
	 * The email editor removes post types from registered templates that do not have the prefix 'mailpoet'.
	 * This prevents the templates from showing up in the email editor template selector.
	 * @var string
	 */
  private string $templatePrefix = 'mailpoet'; // TODO: We need to add upstream support for this.
//   private string $templatePrefix = 'emaileditordemo';


  public function initialize() {
   add_action('mailpoet_email_editor_register_templates', [$this, 'registerTemplates'], 10, 0);
  }

  public function registerTemplates() {
	$templates = [];
    $templates[] = new Newsletter();
    $templates[] = new SimpleLight();

    foreach ($templates as $template) {
	  $templateName = $this->templatePrefix . '//' . $template->getSlug();

	  if (\WP_Block_Templates_Registry::get_instance()->is_registered($templateName)) {
		// skip registration if the template was already registered.
		continue;
	  }

	  register_block_template(
		$templateName,
		[
		  'title' => $template->getTitle(),
		  'description' => $template->getDescription(),
		  'content' => $template->getContent(),
		  'post_types' => [EmailEditorDemoIntegration::MAILPOET_EMAIL_POST_TYPE],
		]
	  );
    }
  }
}
