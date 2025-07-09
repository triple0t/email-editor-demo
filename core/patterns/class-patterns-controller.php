<?php

declare(strict_types=1);

namespace EmailEditorDemo\Patterns;

class PatternsController
{

	public function initialize()
	{
		add_action('init', [$this, 'registerPatterns']);
	}

	public function registerPatterns(): void
	{
		$patterns = [];
		$patterns[] = new OneColumnPostContentPattern();
		foreach ($patterns as $pattern) {
			register_block_pattern($pattern->get_namespace() . '/' . $pattern->get_name(), $pattern->get_properties());
		}
	}
}
