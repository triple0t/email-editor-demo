<?php

namespace EmailEditorDemo;

use MailPoet\EmailEditor\Engine\Settings_Controller;
use MailPoet\EmailEditor\Engine\Theme_Controller;

class EmailEditorPageRenderer
{

  private Settings_Controller $settingsController;

  private Theme_Controller $themeController;

  private Cdn_Asset_Url $cdnAssetUrl;

  public function __construct(
    Settings_Controller $settingsController,
    Cdn_Asset_Url $cdnAssetUrl,
    Theme_Controller $themeController,
  ) {
    $this->settingsController = $settingsController;
    $this->cdnAssetUrl = $cdnAssetUrl;
    $this->themeController = $themeController;
  }

  public function render()
  {
    $postId = isset($_GET['post']) ? intval($_GET['post']) : 0;
    $post = get_post($postId);
    if (!$post instanceof \WP_Post || $post->post_type !== EmailEditorDemoIntegration::MAILPOET_EMAIL_POST_TYPE) { // phpcs:ignore Squiz.NamingConventions.ValidVariableName.MemberNotCamelCaps
      return;
    }

    if (defined('EMAIL_EDITOR_DEMO_USE_DEV_BUILD') && EMAIL_EDITOR_DEMO_USE_DEV_BUILD) {
      // using dev build
      $assetsParams = require EMAIL_EDITOR_DEMO_PATH . '/packages/js/email-editor/build/index.asset.php';

      wp_enqueue_script(
        'mailpoet_email_editor',
        EMAIL_EDITOR_DEMO_URL . '/packages/js/email-editor/build/index.js',
        $assetsParams['dependencies'],
        $assetsParams['version'],
        true
      );
      wp_enqueue_style(
        'mailpoet_email_editor',
        EMAIL_EDITOR_DEMO_URL . '/packages/js/email-editor/build/index.css',
        [],
        $assetsParams['version']
      );
    } else {
      $assetsParams = require EMAIL_EDITOR_DEMO_PATH . '/build/index.asset.php';

      wp_enqueue_script(
        'mailpoet_email_editor',
        EMAIL_EDITOR_DEMO_URL . '/build/index.js',
        $assetsParams['dependencies'],
        $assetsParams['version'],
        true
      );
      wp_enqueue_style(
        'mailpoet_email_editor',
        EMAIL_EDITOR_DEMO_URL . '/build/index.css',
        [],
        $assetsParams['version']
      );
    }


    $jsonAPIRoot = rtrim(esc_url_raw(admin_url('admin-ajax.php')), '/');
    $token = wp_create_nonce('mailpoet_token');
    $apiVersion = 'v1';
    $currentUserEmail = wp_get_current_user()->user_email;
    wp_localize_script(
      'mailpoet_email_editor',
      'MailPoetEmailEditor',
      [
        'json_api_root' => esc_js($jsonAPIRoot),
        'api_token' => esc_js($token),
        'api_version' => esc_js($apiVersion),
        'cdn_url' => esc_js($this->cdnAssetUrl->generate_cdn_url("")),
        'is_premium_plugin_active' => false,
        'current_wp_user_email' => esc_js($currentUserEmail),
        'editor_settings' => $this->settingsController->get_settings(),
        'editor_theme' => $this->themeController->get_theme()->get_raw_data(),
        'urls' => [
          'listings' => admin_url('edit.php?post_type=' . EmailEditorDemoIntegration::MAILPOET_EMAIL_POST_TYPE),
        ],
      ]
    );

    // Load CSS from Post Editor
    wp_enqueue_style('wp-edit-post');
    // Load CSS for the format library - used for example in popover
    wp_enqueue_style('wp-format-library');

    // Enqueue media library scripts
    wp_enqueue_media();

    require_once ABSPATH . 'wp-admin/admin-header.php';
    echo '<div id="mailpoet-email-editor" class="block-editor block-editor__container hide-if-no-js"></div>';
  }
}
