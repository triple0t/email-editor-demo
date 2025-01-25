<?php declare(strict_types = 1);

namespace EmailEditorDemo\Patterns;

use MailPoet\EmailEditor\Engine\Patterns\Abstract_Pattern;

/**
 * Pattern with blockTypes: core/post-content.
 */
class OneColumnPostContentPattern extends Abstract_Pattern {
	public $name = '1-column-content-core-post-content';
	public $block_types = ['core/post-content']; 	// required
	public $template_types = ['email-template']; 	// required
	public $categories = ['email-contents'];  		// optional

	public $namespace = 'email-editor-demo';		// required

	public function get_content(): string {
	  return '
	  <!-- wp:group {"style":{"spacing":{"padding":{"right":"var:preset|spacing|20","left":"var:preset|spacing|20"}}},"layout":{"type":"constrained"}} -->
	  <div class="wp-block-group" style="padding-right:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--20)"><!-- wp:heading -->
	  <h2 class="wp-block-heading">' . __('1 column layout for blockTypes: core/post-content', 'email-editor-demo') . '</h2>
	  <!-- /wp:heading -->

	  <!-- wp:paragraph -->
	  <p>' . __('A one-column layout is great for simplified and concise content, like announcements or newsletters with brief updates. Drag blocks to add content and customize your styles from the styles panel on the top right.', 'email-editor-demo') . '</p>
	  <!-- /wp:paragraph -->

	  <!-- wp:image -->
	  <figure class="wp-block-image"><img alt=""/></figure>
	  <!-- /wp:image -->

	  <!-- wp:buttons -->
	  <div class="wp-block-buttons"><!-- wp:button -->
	  <div class="wp-block-button"><a class="wp-block-button__link wp-element-button">' . __('Add button text', 'email-editor-demo') . '</a></div>
	  <!-- /wp:button --></div>
	  <!-- /wp:buttons --></div>
	  <!-- /wp:group -->
	  ';
	}

	public function get_title(): string {
	  /* translators: Name of a content pattern used as starting content of an email */
	  return __('1 Column core/post-content', 'email-editor-demo');
	}
  }
