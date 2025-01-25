<?php declare(strict_types = 1);

// throw exception if anything fails
set_error_handler(function ($severity, $message, $file, $line) {
  throw new ErrorException($message, 0, $severity, $file, $line);
});

echo "Pacthing composer.json file. \n";
echo "This script will add the required third party library and also remove the composer.lock file. \n";

$composerJsonFilePath = __DIR__ . '/../packages/php/email-editor/composer.json';

$composerJson = file_get_contents($composerJsonFilePath);

if (str_contains($composerJson, 'pelago/emogrifier') && str_contains($composerJson, 'soundasleep/html2text')) {
	// file already patched. skip
	echo "composer.json file already patched. skipping... \n";
	exit;
}


$replacements = [
  // The patch can be removed once the issue is fixed in upstream MailPoet repo
  [
    'file' => $composerJsonFilePath,
    'find' => [
      '"src/"',
	  '"autoload-dev": {
    "classmap": [
      "tests/unit/"
    ]
  },',
  '"php": ">=7.4"'
    ],
    'replace' => [
		'"src/",
			"../../../core/"', // add the Demo plugin files for autoloading
'"autoload-dev": {
    "classmap": [
      "tests/unit/"
    ]
  },
	"repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/mailpoet/html2text"
    }
  ],',
  '"php": ">=7.4",
		"pelago/emogrifier": "7.2.0",
		"soundasleep/html2text": "dev-master"'
    ],
  ],
];

// Apply replacements
foreach ($replacements as $singleFile) {
  $data = file_get_contents($singleFile['file']);
  $data = str_replace($singleFile['find'], $singleFile['replace'], $data);
  file_put_contents($singleFile['file'], $data);
}

echo "Patch done. \n";

// Check for and delete the composer.lock
// This is done to allow composer install the new packages
$composerLockFilePath = __DIR__ . '/../packages/php/email-editor/composer.lock';

if (!file_exists($composerLockFilePath)) {
  exit;
}
echo "Deleting composer.lock file. \n";
unlink($composerLockFilePath);

echo "All done. \n";
