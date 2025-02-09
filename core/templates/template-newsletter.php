<?php declare(strict_types = 1);

namespace EmailEditorDemo\Templates;

class Newsletter {
  public function getSlug(): string {
    return 'demonewsletter';
  }

  public function getTitle(): string {
    return __('DemoNewsletter', 'email-editor-demo');
  }

  public function getDescription(): string {
    return __('DemoNewsletter', 'email-editor-demo');
  }

  public function getContent(): string {
    // translators: This is a text used in a footer on an email <!--[mailpoet/site-title]--> will be replaced with the site title.
    $footerText = __('You received this email because you are subscribed to the <!--[mailpoet/site-title]-->', 'email-editor-demo');
    return '<!-- wp:group {"backgroundColor":"white","layout":{"type":"constrained"},"lock":{"move":false,"remove":false}} -->
      <div class="wp-block-group has-white-background-color has-background">
        <!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|30","bottom":"var:preset|spacing|10","left":"var:preset|spacing|20","right":"var:preset|spacing|20"}}}} -->
        <div
          class="wp-block-group"
          style="
            padding-top: var(--wp--preset--spacing--30);
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
        <!-- wp:group {"style":{"spacing":{"padding":{"right":"var:preset|spacing|20","left":"var:preset|spacing|20","top":"var:preset|spacing|10","bottom":"var:preset|spacing|10"}}}} -->
        <div
          class="wp-block-group"
          style="
            padding-top: var(--wp--preset--spacing--10);
            padding-right: var(--wp--preset--spacing--20);
            padding-bottom: var(--wp--preset--spacing--10);
            padding-left: var(--wp--preset--spacing--20);
          "
            >
          <!-- wp:paragraph {"align":"center","fontSize":"small","style":{"border":{"top":{"color":"var:preset|color|cyan-bluish-gray","width":"1px","style":"solid"},"right":{},"bottom":{},"left":{}},"spacing":{"padding":{"top":"var:preset|spacing|20","bottom":"var:preset|spacing|20"}},"color":{"text":"#787c82"},"elements":{"link":{"color":{"text":"#787c82"}}}}} -->
          <p
            class="has-text-align-center has-text-color has-link-color has-small-font-size"
            style="
              border-top-color: var(--wp--preset--color--cyan-bluish-gray);
              border-top-style: solid;
              border-top-width: 1px;
              color: #787c82;
              padding-top: var(--wp--preset--spacing--20);
              padding-bottom: var(--wp--preset--spacing--20);
            "
              >' . $footerText . '<br /><a data-link-href="[mailpoet/subscription-unsubscribe-url]" contenteditable="false" style="text-decoration: underline;" class="mailpoet-email-editor__personalization-tags-link">' . __('Unsubscribe', 'email-editor-demo') . '</a> | <a data-link-href="[mailpoet/subscription-manage-url]" contenteditable="false" style="text-decoration: underline;" class="mailpoet-email-editor__personalization-tags-link">' . __('Manage subscription', 'email-editor-demo') . '</a>
          </p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:group -->'; // we can now remove the subscription_unsubscribe_url shortcode.
  }
}
