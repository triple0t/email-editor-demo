<?php

declare(strict_types=1);

namespace EmailEditorDemo;

use MailPoet\EmailEditor\Engine\Email_Editor;
use MailPoet\EmailEditor\Engine\Settings_Controller;
use MailPoet\EmailEditor\Engine\Theme_Controller;
use MailPoet\EmailEditor\Engine\User_Theme;
use MailPoet\EmailEditor\Integrations\Core\Initializer;

// The MailPoetEmailEditorContainerDefinition is a clone of packages/php/email-editor/tests/integration/_bootstrap.php file
// We are using this file to define the DI container for the email editor package
class Base extends MailPoetEmailEditorContainerDefinition
{
  public static $instance;

  public function __construct()
  {
    $this->setupBase();
  }

  /**
   * Get a service from the DI container.
   *
   * @param string $service_name The name of the service to get.
   * @return mixed The service.
   */
  public static function getService(string $service_name)
  {
    if (self::$instance === null) {
      self::$instance = new Base();
      return self::$instance->di_container->get($service_name);
    }
    return self::$instance->di_container->get($service_name);
  }

  public function setupBase() {
	$this->initContainer();
	$this->extendInitContainer();
  }

  /**
   * Initialize the DI container.
   */
  public function extendInitContainer(): void
  {
	$container = $this->di_container;

    $container->set(
      EmailEditorDemoApiController::class,
      function () {
        return new EmailEditorDemoApiController();
      }
    );

	$container->set(
      Cdn_Asset_Url::class,
      function () {
        return new Cdn_Asset_Url('');
      }
    );

	$container->set(
		\EmailEditorDemo\Patterns\PatternsController::class,
		function () {
		  return new \EmailEditorDemo\Patterns\PatternsController();
		}
	);

	$container->set(
		\EmailEditorDemo\Templates\TemplatesController::class,
		function () {
		  return new \EmailEditorDemo\Templates\TemplatesController();
		}
	);

    $container->set(
      EmailEditorPageRenderer::class,
      function ($container) {
        return new EmailEditorPageRenderer(
          $container->get(Settings_Controller::class),
          $container->get(Cdn_Asset_Url::class),
          $container->get(Theme_Controller::class),
          $container->get(User_Theme::class)
        );
      }
    );

    $container->set(
      EmailEditorDemoIntegration::class,
      function ($container) {
        return new EmailEditorDemoIntegration(
          $container->get(EmailEditorPageRenderer::class),
          $container->get(EmailEditorDemoApiController::class),
          $container->get(\EmailEditorDemo\Patterns\PatternsController::class),
          $container->get(\EmailEditorDemo\Templates\TemplatesController::class),
        );
      }
    );

    $container->set(
      \EmailEditorDemo\Initializer::class,
      function ($container) {
        return new \EmailEditorDemo\Initializer(
          $container->get(Email_Editor::class),
          $container->get(EmailEditorDemoIntegration::class),
          $container->get(Initializer::class),
        );
      }
    );
  }
}
