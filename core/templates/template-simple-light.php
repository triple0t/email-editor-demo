<?php declare(strict_types = 1);

namespace EmailEditorDemo\Templates;

class SimpleLight {

  public function getSlug(): string {
    return 'simplelight';
  }

  public function getTitle(): string {
    return __('SimpleLight', 'email-editor-demo');
  }

  public function getDescription(): string {
    return __('SimpleLight template', 'email-editor-demo');
  }

  public function getContent(): string {
    return '<!-- wp:group {"backgroundColor":"white","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|20","right":"var:preset|spacing|20"}}},"layout":{"type":"constrained"}} -->
<div
  class="wp-block-group has-white-background-color has-background"
  style="
    padding-top: var(--wp--preset--spacing--10);
    padding-right: var(--wp--preset--spacing--20);
    padding-bottom: var(--wp--preset--spacing--10);
    padding-left: var(--wp--preset--spacing--20);
  "
>
  <!-- wp:image {"width":"130px","sizeSlug":"large"} -->
  <figure class="wp-block-image size-large is-resized">
    <img
      src="https://ps.w.org/mailpoet/assets/email-editor/your-logo-placeholder.png"
      alt="Your Logo"
      style="width: 130px"
    />
  </figure>
  <!-- /wp:image -->
</div>
<!-- /wp:group -->

<!-- wp:post-content {"lock":{"move":false,"remove":false},"layout":{"type":"default"}} /-->

<!-- wp:group {"backgroundColor":"white","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|20","right":"var:preset|spacing|20"}}},"layout":{"type":"constrained"}} -->
<div
  class="wp-block-group has-white-background-color has-background"
  style="
    padding-top: var(--wp--preset--spacing--10);
    padding-right: var(--wp--preset--spacing--20);
    padding-bottom: var(--wp--preset--spacing--10);
    padding-left: var(--wp--preset--spacing--20);
  "
>
  <!-- wp:paragraph {"fontSize":"small"} -->
  <p class="has-small-font-size">
    You received this email because you are subscribed to the [site:title]
  </p>
  <!-- /wp:paragraph -->

  <!-- wp:paragraph {"fontSize":"small"} -->
  <p class="has-small-font-size">
    <a href="[link:subscription_unsubscribe_url]">Unsubscribe</a> |
    <a href="[link:subscription_manage_url]">Manage subscription</a>
  </p>
  <!-- /wp:paragraph -->
</div>
<!-- /wp:group -->';  // we can now remove the subscription_unsubscribe_url shortcode.
  }
}
