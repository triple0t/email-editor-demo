
## Email Editor Demo

This plugin shows a working demo of the WooCommerce Email Editor

The main editor package library is split into two packages
* `JS` -> [/packages/js/email-editor](https://github.com/woocommerce/woocommerce/tree/trunk/packages/js/email-editor)
* `PHP` -> [/packages/php/email-editor](https://github.com/woocommerce/woocommerce/tree/trunk/packages/php/email-editor)


Try it out at: [WordPress Playground](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/triple0t/email-editor-demo/refs/heads/main/blueprint.json)

The PHP Integration files are located at [/core](/core) while the JS is located at [/src](/src)

### How to use

* Download this Repo as a zip
* Upload to the WordPress site
* Activate the plugin
* Visit `wp-admin/edit.php?post_type=editor_demo_mail`, edit the draft post


### Development

**Note**: Ensure you have `npm` and `composer` in your system path

* Run npm install: -> `npm install`
* To run the watch server: -> `npm run start`.
* If you update the php files, and need to update the autoloader -> `npm run dev:dump-autoload`

You may pull the latests Email editor package from
JS: https://www.npmjs.com/package/@woocommerce/email-editor
PHP: https://packagist.org/packages/woocommerce/email-editor


