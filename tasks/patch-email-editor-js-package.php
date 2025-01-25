<?php declare(strict_types = 1);

// throw exception if anything fails
set_error_handler(function ($severity, $message, $file, $line) {
  throw new ErrorException($message, 0, $severity, $file, $line);
});

echo "Pacthing JS package \n";

// Check for and delete the .babelrc file
// We need to figure out why the presence of this file causes runtime error when loading the editor
$babelrcFilePath = __DIR__ . '/../packages/js/email-editor/.babelrc';

if (file_exists($babelrcFilePath)) {
	echo "Deleting .babelrc file. \n";
	unlink($babelrcFilePath);
}


echo "All done. \n";
