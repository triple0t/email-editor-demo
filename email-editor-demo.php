<?php
declare(strict_types = 1);

namespace EmailEditorDemo;

/**
 * Plugin Name:       Mailpoet Email Editor Demo
 * Description:       An example Demo of how to use the MailPoet Email Editor.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            MailPoet
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       email-editor-demo
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'EMAIL_EDITOR_DEMO_PATH', dirname( __FILE__ ) );
define( 'EMAIL_EDITOR_DEMO_URL', plugins_url( '', __FILE__ ) );

// When using dev build e.g wp-scripts start
define( 'EMAIL_EDITOR_DEMO_USE_DEV_BUILD', false );

// Autoloader
require_once __DIR__ . '/packages/php/email-editor/vendor/autoload.php';

// Base
require_once __DIR__ . '/core/base.php';

// Initializer
$initializer = Base::getService( Initializer::class );
$initializer->init();
