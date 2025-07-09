<?php declare(strict_types = 1);

namespace EmailEditorDemo\Templates;

use Automattic\WooCommerce\EmailEditor\Engine\Templates\Template;
use Automattic\WooCommerce\EmailEditor\Engine\Templates\Templates_Registry;
use EmailEditorDemo\EmailEditorDemoIntegration;

class TemplatesController {

	/**
	 * The prefix used for the template names.
	 *
	 * The email editor removes post types from registered templates that do not have the prefix 'mailpoet'.
	 * This prevents the templates from showing up in the email editor template selector.
	 * @var string
	 */
//   private string $templatePrefix = 'mailpoet'; // TODO: We need to add upstream support for this.
  private string $templatePrefix = 'emaileditordemo';


  public function initialize() {
   add_filter('woocommerce_email_editor_register_templates', [$this, 'registerTemplates']);
  }

  public function registerTemplates(Templates_Registry $templatesRegistry) {
	$templates = [];
    $templates[] = new Newsletter();
    $templates[] = new SimpleLight();

    foreach ($templates as $template) {
	  $theTemplate = new Template(
		$this->templatePrefix,
		$template->getSlug(),
		$template->getTitle(),
		$template->getDescription(),
		$template->getContent(),
		[EmailEditorDemoIntegration::EMAIL_POST_TYPE]
	  );
	  $templatesRegistry->register($theTemplate);
    }

	return $templatesRegistry;
  }
}
