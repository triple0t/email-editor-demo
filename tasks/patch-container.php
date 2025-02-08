<?php

// Define the file path where MailPoetTest class is located
$filePath = __DIR__ . '/../packages/php/email-editor/tests/integration/_bootstrap.php';

// Read the file content
$fileContent = file_get_contents($filePath);

// We are doing this because we want to reuse the container defination in the email editor package
// we need to patch up the file for our use case
// this will save us time and effort spent on updating the base.php file

// remove or replace the require content
$replacement = [
	  'find' => [
		'declare(strict_types = 1);', // replace this line
		'use Codeception\Stub;', // remove this line
		'use MailPoet\EmailEditor\Integrations\MailPoet\Blocks\BlockTypesController;', // remove this line - file does not exist
		'$console = new \Codeception\Lib\Console\Output( array() );', // remove this line
		'$console->writeln( \'Loading WP core... (\' . $wp_load_file . \')\' );', // remove this line
		'require_once $wp_load_file;', // remove this line
		"require_once __DIR__ . '/../../../../../mailpoet/lib/EmailEditor/Integrations/MailPoet/MailPoetCssInliner.php';", // remove this line
		'abstract class MailPoetTest extends \Codeception\TestCase\Test {', // replace this line
		'parent::setUp();', // remove this line - parent class does not exist
		'parent::_after();', // remove this line - parent class does not exist
		'$this->assertEmpty( $errors, \'HTML is not valid: \' . $html );', // remove this line
		'return Stub::copy( $instance, $overrides );', // remove this line
		'$container->set(
			BlockTypesController::class,
			function () {
				return $this->createMock( BlockTypesController::class );
			}
		);', // remove this block
		"new \MailPoet\EmailEditor\Integrations\MailPoet\MailPoetCssInliner(),", // replace this line
	  ],
	  'replace' => [
		'declare(strict_types=1);

namespace EmailEditorDemo;',
		'// removed',
		'// removed',
		'// removed',
		'// removed',
		'// removed',
		'// removed',
		'abstract class MailPoetEmailEditorContainerDefinition {',
		'// removed',
		'// removed',
		'// removed',
		'// removed',
		'// removed',
		"new \EmailEditorDemo\EditorDemoCssInliner(),",
	  ],
  ];

$updatedData = str_replace($replacement['find'], $replacement['replace'], $fileContent);

$containerDefinitionFile = __DIR__ . '/../core/email-editor-container-definition.php';

file_put_contents($containerDefinitionFile, $updatedData);

echo "Container definition file created. \n";

