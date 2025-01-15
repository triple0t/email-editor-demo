<?php
/**
 * This file used to be part of the MailPoet plugin.
 *
 * The EmailEditorPageRenderer class and JS (packages/js/email-editor/src/store/settings.ts) still requires the Cdn_Asset_Url class
 */

declare(strict_types = 1);
namespace EmailEditorDemo;

/**
 * Class for CDN asset URL.
 */
class Cdn_Asset_Url {
	/**
	 * URL for CDN assets.
	 */
	const CDN_URL = 'https://ps.w.org/mailpoet/';
	/**
	 * Base URL for assets.
	 *
	 * @var string
	 */
	private $base_url;

	/**
	 * Cdn_Asset_Url constructor.
	 *
	 * @param string $base_url - Base URL for assets.
	 */
	public function __construct(
		string $base_url
	) {
		$this->base_url = $base_url;
	}

	/**
	 * Generate CDN URL for assets.
	 *
	 * @param string $path - Path for assets.
	 * @return string
	 */
	public function generate_cdn_url( $path ) {
		$use_cdn = true;
		return ( $use_cdn ? self::CDN_URL : $this->base_url . '/plugin_repository/' ) . "assets/$path";
	}
}
