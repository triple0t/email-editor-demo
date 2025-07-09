<?php

namespace EmailEditorDemo;

use Automattic\WooCommerce\EmailEditor\Engine\Settings_Controller;
use Automattic\WooCommerce\EmailEditor\Engine\Theme_Controller;
use Automattic\WooCommerce\EmailEditor\Engine\User_Theme;

class EmailEditorPageRenderer
{

	private Settings_Controller $settingsController;

	private Theme_Controller $themeController;

	private User_Theme $userTheme;

	public function __construct(
		Settings_Controller $settingsController,
		Theme_Controller $themeController,
		User_Theme $userTheme,
	) {
		$this->settingsController = $settingsController;
		$this->themeController = $themeController;
		$this->userTheme = $userTheme;
	}

	public function render()
	{
		$postId = isset($_GET['post']) ? intval($_GET['post']) : 0;
		$post = get_post($postId);
		$currentPostType = $post->post_type;
		if (!$post instanceof \WP_Post || $currentPostType !== EmailEditorDemoIntegration::EMAIL_POST_TYPE) { // phpcs:ignore Squiz.NamingConventions.ValidVariableName.MemberNotCamelCaps
			return;
		}

		// using production build
		$fileName = 'index';
		$assetsParams = require_once EMAIL_EDITOR_DEMO_PATH . "/build/{$fileName}.asset.php";

		wp_enqueue_script(
			'email_editor_demo',
			EMAIL_EDITOR_DEMO_URL . "/build/{$fileName}.js",
			$assetsParams['dependencies'],
			$assetsParams['version'],
			true
		);
		wp_enqueue_style(
			'email_editor_demo',
			EMAIL_EDITOR_DEMO_URL . "/build/style-{$fileName}.css",
			[],
			$assetsParams['version']
		);

		$currentUserEmail = wp_get_current_user()->user_email;
		wp_localize_script(
			'email_editor_demo',
			'WooCommerceEmailEditor',
			[
				'current_post_type' => esc_js($currentPostType),
				'current_post_id' => $post->ID,
				'current_wp_user_email' => esc_js($currentUserEmail),
				'editor_settings' => $this->settingsController->get_settings(),
				'editor_theme' => $this->themeController->get_base_theme()->get_raw_data(),
				'user_theme_post_id' => $this->userTheme->get_user_theme_post()->ID,
				'urls' => [
					'listings' => admin_url('edit.php?post_type=' . EmailEditorDemoIntegration::EMAIL_POST_TYPE),
					'send' => admin_url('edit.php?post_type=' . EmailEditorDemoIntegration::EMAIL_POST_TYPE),
					'back' => admin_url('edit.php?post_type=' . EmailEditorDemoIntegration::EMAIL_POST_TYPE),
				],
			]
		);

		// Load CSS from Post Editor
		wp_enqueue_style('wp-edit-post');
		// Load CSS for the format library - used for example in popover
		wp_enqueue_style('wp-format-library');

		// Enqueue media library scripts
		wp_enqueue_media();

		$this->preloadRestApiData($post);

		// Preload server-registered block schemas to avoid warning about missing block titles.
		// See: https://github.com/WordPress/WordPress/blob/753817d462955eb4e40a89034b7b7c375a1e43f3/wp-admin/edit-form-blocks.php#L144C1-L148C3.
		wp_add_inline_script(
			'wp-blocks',
			sprintf( 'wp.blocks.unstable__bootstrapServerSideBlockDefinitions( %s );', wp_json_encode( get_block_editor_server_block_settings() ) )
		);

		require_once ABSPATH . 'wp-admin/admin-header.php';
		echo '<div id="email-editor-demo-container" class="block-editor block-editor__container hide-if-no-js"></div>';
	}

	private function preloadRestApiData(\WP_Post $post): void
	{
		$currentPostType = $post->post_type;
		$userThemePostId = $this->userTheme->get_user_theme_post()->ID;
		$templateSlug = get_post_meta($post->ID, '_wp_page_template', true);
		$routes = [
			"/wp/v2/{$currentPostType}/" . intval($post->ID) . '?context=edit',
			"/wp/v2/types/{$currentPostType}?context=edit",
			'/wp/v2/global-styles/' . intval($userThemePostId) . '?context=edit', // Global email styles
			'/wp/v2/block-patterns/patterns',
			'/wp/v2/templates?context=edit',
			'/wp/v2/block-patterns/categories',
			'/wp/v2/settings',
			'/wp/v2/types?context=view',
			'/wp/v2/taxonomies?context=view',
		];

		if ($templateSlug) {
			$routes[] = "/wp/v2/templates/lookup?slug={$templateSlug}";
		} else {
			$routes[] = "/wp/v2/{$currentPostType}?context=edit&per_page=30&status=publish,sent";
		}

		// Preload the data for the specified routes
		$preloadData = array_reduce(
			$routes,
			'rest_preload_api_request',
			[]
		);

		// Add inline script to set up preloading middleware
		wp_add_inline_script(
			'wp-blocks',
			sprintf(
				'wp.apiFetch.use( wp.apiFetch.createPreloadingMiddleware( %s ) );',
				wp_json_encode($preloadData)
			)
		);
	}
}
