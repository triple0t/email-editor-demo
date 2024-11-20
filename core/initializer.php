<?php

namespace EmailEditorDemo;

use MailPoet\EmailEditor\Engine\Email_Editor;
use MailPoet\EmailEditor\Integrations\Core\Initializer as CoreEmailEditorIntegration;


class Initializer
{

  /** @var Email_Editor */
  private $emailEditor;

  /** @var EmailEditorDemoIntegration */
  private $mailpoetEmailEditorIntegration;

  /** @var CoreEmailEditorIntegration */
  private $coreEmailEditorIntegration;

  public function __construct(
    Email_Editor $emailEditor,
    EmailEditorDemoIntegration $mailpoetEmailEditorIntegration,
    CoreEmailEditorIntegration $coreEmailEditorIntegration,
  ) {
    $this->emailEditor = $emailEditor;
    $this->mailpoetEmailEditorIntegration = $mailpoetEmailEditorIntegration;
    $this->coreEmailEditorIntegration = $coreEmailEditorIntegration;
  }

  public function init()
  {

    add_action('init', [
      $this,
      'initialize',
    ]);

    add_filter('mailpoet_email_editor_initialized', [
      $this,
      'setupEmailEditorIntegrations',
    ]);
  }

  public function initialize()
  {
    $this->emailEditor->initialize();
    $this->createDemoPost();
  }

  public function createDemoPost()
  {
    // current impplementation does not work with new post.
    // we need a post to be created in order to use the email editor

    // check if a new post is needed
    $args = [
      'post_type' => EmailEditorDemoIntegration::MAILPOET_EMAIL_POST_TYPE,
      'post_status' => 'draft',
      'posts_per_page' => 1,
    ];
    $posts = get_posts($args);
    if (!empty($posts)) {
      return;
    }

    $post = [
      'post_title' => __('New Email', 'email-editor-demo'),
      'post_content' => '',
      'post_status' => 'draft',
      'post_type' => EmailEditorDemoIntegration::MAILPOET_EMAIL_POST_TYPE,
    ];
    wp_insert_post($post);
  }

  public function setupEmailEditorIntegrations()
  {
    $this->mailpoetEmailEditorIntegration->initialize();
    $this->coreEmailEditorIntegration->initialize();
  }
}
