<?php

declare(strict_types=1);

namespace EmailEditorDemo;

use MailPoet\EmailEditor\Container;
use MailPoet\EmailEditor\Engine\Dependency_Check;
use MailPoet\EmailEditor\Engine\Email_Api_Controller;
use MailPoet\EmailEditor\Engine\Email_Editor;
use MailPoet\EmailEditor\Engine\Patterns\Patterns;
use MailPoet\EmailEditor\Engine\PersonalizationTags\Personalization_Tags_Registry;
use MailPoet\EmailEditor\Engine\Personalizer;
use MailPoet\EmailEditor\Engine\Renderer\ContentRenderer\Blocks_Registry;
use MailPoet\EmailEditor\Engine\Renderer\ContentRenderer\Content_Renderer;
use MailPoet\EmailEditor\Engine\Renderer\ContentRenderer\Postprocessors\Highlighting_Postprocessor;
use MailPoet\EmailEditor\Engine\Renderer\ContentRenderer\Postprocessors\Variables_Postprocessor;
use MailPoet\EmailEditor\Engine\Renderer\ContentRenderer\Preprocessors\Blocks_Width_Preprocessor;
use MailPoet\EmailEditor\Engine\Renderer\ContentRenderer\Preprocessors\Cleanup_Preprocessor;
use MailPoet\EmailEditor\Engine\Renderer\ContentRenderer\Preprocessors\Spacing_Preprocessor;
use MailPoet\EmailEditor\Engine\Renderer\ContentRenderer\Preprocessors\Typography_Preprocessor;
use MailPoet\EmailEditor\Engine\Renderer\ContentRenderer\Process_Manager;
use MailPoet\EmailEditor\Engine\Renderer\Renderer;
use MailPoet\EmailEditor\Engine\Settings_Controller;
use MailPoet\EmailEditor\Engine\Templates\Templates;
use MailPoet\EmailEditor\Engine\Theme_Controller;
use MailPoet\EmailEditor\Engine\User_Theme;
use MailPoet\EmailEditor\Integrations\Core\Initializer;
use MailPoet\EmailEditor\Engine\Send_Preview_Email;


class Base
{
  /**
   * The DI container.
   *
   * @var Container
   */
  public Container $di_container;

  public static $instance;

  public function __construct()
  {
    $this->initContainer();
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

  /**
   * Initialize the DI container.
   */
  protected function initContainer(): void
  {
    $container = new Container();
    // Start: MailPoet plugin dependencies.
    $container->set(
			Initializer::class,
			function () {
				return new Initializer();
			}
		);
		// End: MailPoet plugin dependencies.
		$container->set(
			Theme_Controller::class,
			function () {
				return new Theme_Controller();
			}
		);
		$container->set(
			User_Theme::class,
			function () {
				return new User_Theme();
			}
		);
		$container->set(
			Settings_Controller::class,
			function ( $container ) {
				return new Settings_Controller( $container->get( Theme_Controller::class ) );
			}
		);
		$container->set(
			Settings_Controller::class,
			function ( $container ) {
				return new Settings_Controller( $container->get( Theme_Controller::class ) );
			}
		);
		$container->set(
			Templates::class,
			function () {
				return new Templates();
			}
		);
		$container->set(
			Patterns::class,
			function () {
				return new Patterns();
			}
		);
		$container->set(
			Cleanup_Preprocessor::class,
			function () {
				return new Cleanup_Preprocessor();
			}
		);
		$container->set(
			Blocks_Width_Preprocessor::class,
			function () {
				return new Blocks_Width_Preprocessor();
			}
		);
		$container->set(
			Typography_Preprocessor::class,
			function ( $container ) {
				return new Typography_Preprocessor( $container->get( Settings_Controller::class ) );
			}
		);
		$container->set(
			Spacing_Preprocessor::class,
			function () {
				return new Spacing_Preprocessor();
			}
		);
		$container->set(
			Highlighting_Postprocessor::class,
			function () {
				return new Highlighting_Postprocessor();
			}
		);
		$container->set(
			Variables_Postprocessor::class,
			function ( $container ) {
				return new Variables_Postprocessor( $container->get( Theme_Controller::class ) );
			}
		);
		$container->set(
			Process_Manager::class,
			function ( $container ) {
				return new Process_Manager(
					$container->get( Cleanup_Preprocessor::class ),
					$container->get( Blocks_Width_Preprocessor::class ),
					$container->get( Typography_Preprocessor::class ),
					$container->get( Spacing_Preprocessor::class ),
					$container->get( Highlighting_Postprocessor::class ),
					$container->get( Variables_Postprocessor::class ),
				);
			}
		);
		$container->set(
			Blocks_Registry::class,
			function () {
				return new Blocks_Registry();
			}
		);
		$container->set(
			Content_Renderer::class,
			function ( $container ) {
				return new Content_Renderer(
					$container->get( Process_Manager::class ),
					$container->get( Blocks_Registry::class ),
					$container->get( Settings_Controller::class ),
					$container->get( Theme_Controller::class ),
				);
			}
		);
		$container->set(
			Renderer::class,
			function ( $container ) {
				return new Renderer(
					$container->get( Content_Renderer::class ),
					$container->get( Templates::class ),
					$container->get( Theme_Controller::class ),
				);
			}
		);
		$container->set(
			Personalization_Tags_Registry::class,
			function () {
				return new Personalization_Tags_Registry();
			}
		);
		$container->set(
			Personalizer::class,
			function ( $container ) {
				return new Personalizer(
					$container->get( Personalization_Tags_Registry::class ),
				);
			}
		);
		$container->set(
			Send_Preview_Email::class,
			function ( $container ) {
				return new Send_Preview_Email(
					$container->get( Renderer::class ),
					$container->get( Personalizer::class ),
				);
			}
		);
		$container->set(
			Email_Api_Controller::class,
			function ( $container ) {
				return new Email_Api_Controller(
					$container->get( Personalization_Tags_Registry::class ),
				);
			}
		);
		$container->set(
			Dependency_Check::class,
			function () {
				return new Dependency_Check();
			}
		);
		$container->set(
			Email_Editor::class,
			function ( $container ) {
				return new Email_Editor(
					$container->get( Email_Api_Controller::class ),
					$container->get( Templates::class ),
					$container->get( Patterns::class ),
					$container->get( Settings_Controller::class ),
					$container->get( Send_Preview_Email::class ),
					$container->get( Personalization_Tags_Registry::class ),
				);
			}
		);

    // End: Email editor dependencies.

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

    $this->di_container = $container;
  }
}
