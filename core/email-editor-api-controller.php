<?php

declare(strict_types=1);

namespace EmailEditorDemo;

class EmailEditorDemoApiController
{


  /**
   * @param array $postEmailData - WP_Post data
   * @return array - MailPoet specific email data that will be attached to the post API response
   */
  public function getEmailData($postEmailData): array
  {
    $post = get_post($postEmailData['id']);
    return [
      'id' => $post->ID,
      'subject' => $post->post_title,
      'preheader' =>  '',
      'preview_url' => '',
      'deleted_at' => '',
    ];
  }

  /**
   * Update MailPoet specific data we store with Emails.
   */
  public function saveEmailData(array $data, \WP_Post $emailPost): void
  {
    // We don't need to save anything for this demo
  }

  public function trashEmail(\WP_Post $wpPost)
  {
    // We don't need to do anything for this demo
  }

  public function getEmailDataSchema(): array
  {
    return [
      'id' => 'string',
      'subject' => 'string',
      'preheader' => 'string',
      'preview_url' => 'string',
      'deleted_at' => 'string'
    ];
  }
}
