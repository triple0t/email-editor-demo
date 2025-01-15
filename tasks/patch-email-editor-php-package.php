<?php declare(strict_types = 1);

// throw exception if anything fails
set_error_handler(function ($severity, $message, $file, $line) {
  throw new ErrorException($message, 0, $severity, $file, $line);
});

echo "Pacthing files \n";


$replacements = [
  // The patch can be removed once the issue is fixed in upstream MailPoet repo
  // patch the use of MailPoetVendor library
  [
    'file' => __DIR__ . '/../packages/php/email-editor/src/Engine/Renderer/class-renderer.php',
    'find' => [
      'use MailPoetVendor\Html2Text\Html2Text;',
	  'use MailPoetVendor\Pelago\Emogrifier\CssInliner;'
    ],
    'replace' => [
      'use Html2Text\Html2Text;',
	  'use Pelago\Emogrifier\CssInliner;'
    ],
  ],
  [
    'file' => __DIR__ . '/../packages/php/email-editor/src/Engine/Renderer/ContentRenderer/class-content-renderer.php',
    'find' => [
	  'use MailPoetVendor\Pelago\Emogrifier\CssInliner;'
    ],
    'replace' => [
	  'use Pelago\Emogrifier\CssInliner;'
    ],
  ],
];

// Apply replacements
foreach ($replacements as $singleFile) {
  echo "Pacthing file: {$singleFile['file']} \n";
  $data = file_get_contents($singleFile['file']);
  $data = str_replace($singleFile['find'], $singleFile['replace'], $data);
  file_put_contents($singleFile['file'], $data);
}

echo "Patch done. \n";
