<?php

declare(strict_types=1);

namespace EmailEditorDemo;

use Automattic\WooCommerce\EmailEditor\Container;
use Automattic\WooCommerce\EmailEditor\Email_Editor_Container;
use Automattic\WooCommerce\EmailEditor\Engine\Email_Editor;
use Automattic\WooCommerce\EmailEditor\Engine\Settings_Controller;
use Automattic\WooCommerce\EmailEditor\Engine\Theme_Controller;
use Automattic\WooCommerce\EmailEditor\Engine\User_Theme;
use Automattic\WooCommerce\EmailEditor\Integrations\Core\Initializer;

class Base
{
	public static $instance;

	public Container $di_container;

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

	public function setupBase()
	{
		$this->di_container = $this->extendInitContainer();
	}

	/**
	 * Initialize the DI container.
	 */
	public function extendInitContainer(): Container
	{
		$container = Email_Editor_Container::container();

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
					$container->get(\EmailEditorDemo\Patterns\PatternsController::class),
					$container->get(\EmailEditorDemo\Templates\TemplatesController::class),
				);
			}
		);

		$container->set(
			\EmailEditorDemo\Initializer::class,
			function ($container) {
				return new \EmailEditorDemo\Initializer(
					$container->get(EmailEditorDemoIntegration::class),
				);
			}
		);

		return $container;
	}
}
