<?php

namespace EmailEditorDemo;

use Automattic\WooCommerce\EmailEditor\Email_Editor_Container;


class Initializer
{
	/** @var EmailEditorDemoIntegration */
	private $demoEditorIntegration;

	public function __construct(
		EmailEditorDemoIntegration $mailpoetEmailEditorIntegration,
	) {
		$this->demoEditorIntegration = $mailpoetEmailEditorIntegration;
	}

	public function init()
	{

		add_action('init', [
			$this,
			'initialize',
		]);

		$this->demoEditorIntegration->initialize();
		Email_Editor_Container::init();
	}

	public function initialize()
	{
		$this->createDemoPost();
	}

	public function createDemoPost()
	{
		// current impplementation does not work with new post.
		// we need a post to be created in order to use the email editor

		// check if a new post is needed
		$args = [
			'post_type' => EmailEditorDemoIntegration::EMAIL_POST_TYPE,
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
			'post_type' => EmailEditorDemoIntegration::EMAIL_POST_TYPE,
		];
		wp_insert_post($post);
	}
}
