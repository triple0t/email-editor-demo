<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit3ec3d68813951a5994b8185678e256db
{
    public static $files = array (
        'a4a119a56e50fbb293281d9a48007e0e' => __DIR__ . '/..' . '/symfony/polyfill-php80/bootstrap.php',
        'ba6018d54244eae1ca1c3c65edf949d6' => __DIR__ . '/../..' . '/src/exceptions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Symfony\\Polyfill\\Php80\\' => 23,
            'Symfony\\Component\\CssSelector\\' => 30,
            'Sabberworm\\CSS\\' => 15,
        ),
        'P' => 
        array (
            'Pelago\\Emogrifier\\' => 18,
        ),
        'H' => 
        array (
            'Html2Text\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Symfony\\Polyfill\\Php80\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-php80',
        ),
        'Symfony\\Component\\CssSelector\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/css-selector',
        ),
        'Sabberworm\\CSS\\' => 
        array (
            0 => __DIR__ . '/..' . '/sabberworm/php-css-parser/src',
        ),
        'Pelago\\Emogrifier\\' => 
        array (
            0 => __DIR__ . '/..' . '/pelago/emogrifier/src',
        ),
        'Html2Text\\' => 
        array (
            0 => __DIR__ . '/..' . '/soundasleep/html2text/src',
        ),
    );

    public static $classMap = array (
        'Attribute' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/Attribute.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'EmailEditorDemo\\Base' => __DIR__ . '/../..' . '/../../../core/base.php',
        'EmailEditorDemo\\Cdn_Asset_Url' => __DIR__ . '/../..' . '/../../../core/class-cdn-asset-url.php',
        'EmailEditorDemo\\EmailEditorDemoApiController' => __DIR__ . '/../..' . '/../../../core/email-editor-api-controller.php',
        'EmailEditorDemo\\EmailEditorDemoIntegration' => __DIR__ . '/../..' . '/../../../core/email-editor-demo-integration.php',
        'EmailEditorDemo\\EmailEditorPageRenderer' => __DIR__ . '/../..' . '/../../../core/email-editor-page-renderer.php',
        'EmailEditorDemo\\Initializer' => __DIR__ . '/../..' . '/../../../core/initializer.php',
        'MailPoetUnitTest' => __DIR__ . '/../..' . '/tests/unit/_bootstrap.php',
        'MailPoet\\EmailEditor\\AccessDeniedException' => __DIR__ . '/../..' . '/src/exceptions.php',
        'MailPoet\\EmailEditor\\ConflictException' => __DIR__ . '/../..' . '/src/exceptions.php',
        'MailPoet\\EmailEditor\\Container' => __DIR__ . '/../..' . '/src/class-container.php',
        'MailPoet\\EmailEditor\\Container_Test' => __DIR__ . '/../..' . '/tests/unit/Container_Test.php',
        'MailPoet\\EmailEditor\\Engine\\Dependency_Check' => __DIR__ . '/../..' . '/src/Engine/class-dependency-check.php',
        'MailPoet\\EmailEditor\\Engine\\Email_Api_Controller' => __DIR__ . '/../..' . '/src/Engine/class-email-api-controller.php',
        'MailPoet\\EmailEditor\\Engine\\Email_Editor' => __DIR__ . '/../..' . '/src/Engine/class-email-editor.php',
        'MailPoet\\EmailEditor\\Engine\\Email_Styles_Schema' => __DIR__ . '/../..' . '/src/Engine/class-email-styles-schema.php',
        'MailPoet\\EmailEditor\\Engine\\Patterns\\Abstract_Pattern' => __DIR__ . '/../..' . '/src/Engine/Patterns/class-abstract-pattern.php',
        'MailPoet\\EmailEditor\\Engine\\Patterns\\Patterns' => __DIR__ . '/../..' . '/src/Engine/Patterns/class-patterns.php',
        'MailPoet\\EmailEditor\\Engine\\PersonalizationTags\\HTML_Tag_Processor' => __DIR__ . '/../..' . '/src/Engine/PersonalizationTags/class-html-tag-processor.php',
        'MailPoet\\EmailEditor\\Engine\\PersonalizationTags\\Personalization_Tag' => __DIR__ . '/../..' . '/src/Engine/PersonalizationTags/class-personalization-tag.php',
        'MailPoet\\EmailEditor\\Engine\\PersonalizationTags\\Personalization_Tags_Registry' => __DIR__ . '/../..' . '/src/Engine/PersonalizationTags/class-personalization-tags-registry.php',
        'MailPoet\\EmailEditor\\Engine\\Personalizer' => __DIR__ . '/../..' . '/src/Engine/class-personalizer.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\ContentRenderer\\Block_Renderer' => __DIR__ . '/../..' . '/src/Engine/Renderer/ContentRenderer/class-block-renderer.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\ContentRenderer\\Blocks_Parser' => __DIR__ . '/../..' . '/src/Engine/Renderer/ContentRenderer/class-blocks-parser.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\ContentRenderer\\Blocks_Registry' => __DIR__ . '/../..' . '/src/Engine/Renderer/ContentRenderer/class-blocks-registry.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\ContentRenderer\\Content_Renderer' => __DIR__ . '/../..' . '/src/Engine/Renderer/ContentRenderer/class-content-renderer.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\ContentRenderer\\Layout\\Flex_Layout_Renderer' => __DIR__ . '/../..' . '/src/Engine/Renderer/ContentRenderer/Layout/class-flex-layout-renderer.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\ContentRenderer\\Postprocessors\\Highlighting_Postprocessor' => __DIR__ . '/../..' . '/src/Engine/Renderer/ContentRenderer/Postprocessors/class-highlighting-postprocessor.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\ContentRenderer\\Postprocessors\\Postprocessor' => __DIR__ . '/../..' . '/src/Engine/Renderer/ContentRenderer/Postprocessors/interface-postprocessor.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\ContentRenderer\\Postprocessors\\Variables_Postprocessor' => __DIR__ . '/../..' . '/src/Engine/Renderer/ContentRenderer/Postprocessors/class-variables-postprocessor.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\ContentRenderer\\Preprocessors\\Blocks_Width_Preprocessor' => __DIR__ . '/../..' . '/src/Engine/Renderer/ContentRenderer/Preprocessors/class-blocks-width-preprocessor.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\ContentRenderer\\Preprocessors\\Cleanup_Preprocessor' => __DIR__ . '/../..' . '/src/Engine/Renderer/ContentRenderer/Preprocessors/class-cleanup-preprocessor.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\ContentRenderer\\Preprocessors\\Preprocessor' => __DIR__ . '/../..' . '/src/Engine/Renderer/ContentRenderer/Preprocessors/interface-preprocessor.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\ContentRenderer\\Preprocessors\\Spacing_Preprocessor' => __DIR__ . '/../..' . '/src/Engine/Renderer/ContentRenderer/Preprocessors/class-spacing-preprocessor.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\ContentRenderer\\Preprocessors\\Typography_Preprocessor' => __DIR__ . '/../..' . '/src/Engine/Renderer/ContentRenderer/Preprocessors/class-typography-preprocessor.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\ContentRenderer\\Process_Manager' => __DIR__ . '/../..' . '/src/Engine/Renderer/ContentRenderer/class-process-manager.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\Postprocessors\\Highlighting_Postprocessor_Test' => __DIR__ . '/../..' . '/tests/unit/Engine/Renderer/Postprocessors/Highlighting_Postprocessor_Test.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\Postprocessors\\Variables_Postprocessor_Test' => __DIR__ . '/../..' . '/tests/unit/Engine/Renderer/Postprocessors/Variables_Postprocessor_Test.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\Preprocessors\\Blocks_Width_Preprocessor_Test' => __DIR__ . '/../..' . '/tests/unit/Engine/Renderer/Preprocessors/Blocks_Width_Preprocessor_Test.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\Preprocessors\\Cleanup_Preprocessor_Test' => __DIR__ . '/../..' . '/tests/unit/Engine/Renderer/Preprocessors/Cleanup_Preprocessor_Test.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\Preprocessors\\Spacing_Preprocessor_Test' => __DIR__ . '/../..' . '/tests/unit/Engine/Renderer/Preprocessors/Spacing_Preprocessor_Test.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\Preprocessors\\Typography_Preprocessor_Test' => __DIR__ . '/../..' . '/tests/unit/Engine/Renderer/Preprocessors/Typography_Preprocessor_Test.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\Process_Manager_Test' => __DIR__ . '/../..' . '/tests/unit/Engine/Renderer/Process_Manager_Test.php',
        'MailPoet\\EmailEditor\\Engine\\Renderer\\Renderer' => __DIR__ . '/../..' . '/src/Engine/Renderer/class-renderer.php',
        'MailPoet\\EmailEditor\\Engine\\Send_Preview_Email' => __DIR__ . '/../..' . '/src/Engine/class-send-preview-email.php',
        'MailPoet\\EmailEditor\\Engine\\Settings_Controller' => __DIR__ . '/../..' . '/src/Engine/class-settings-controller.php',
        'MailPoet\\EmailEditor\\Engine\\Settings_Controller_Test' => __DIR__ . '/../..' . '/tests/unit/Engine/Settings_Controller_Test.php',
        'MailPoet\\EmailEditor\\Engine\\Templates\\Templates' => __DIR__ . '/../..' . '/src/Engine/Templates/class-templates.php',
        'MailPoet\\EmailEditor\\Engine\\Theme_Controller' => __DIR__ . '/../..' . '/src/Engine/class-theme-controller.php',
        'MailPoet\\EmailEditor\\Engine\\User_Theme' => __DIR__ . '/../..' . '/src/Engine/class-user-theme.php',
        'MailPoet\\EmailEditor\\Exception' => __DIR__ . '/../..' . '/src/exceptions.php',
        'MailPoet\\EmailEditor\\HttpAwareException' => __DIR__ . '/../..' . '/src/exceptions.php',
        'MailPoet\\EmailEditor\\Integrations\\Core\\Initializer' => __DIR__ . '/../..' . '/src/Integrations/Core/class-initializer.php',
        'MailPoet\\EmailEditor\\Integrations\\Core\\Renderer\\Blocks\\Abstract_Block_Renderer' => __DIR__ . '/../..' . '/src/Integrations/Core/Renderer/Blocks/class-abstract-block-renderer.php',
        'MailPoet\\EmailEditor\\Integrations\\Core\\Renderer\\Blocks\\Button' => __DIR__ . '/../..' . '/src/Integrations/Core/Renderer/Blocks/class-button.php',
        'MailPoet\\EmailEditor\\Integrations\\Core\\Renderer\\Blocks\\Buttons' => __DIR__ . '/../..' . '/src/Integrations/Core/Renderer/Blocks/class-buttons.php',
        'MailPoet\\EmailEditor\\Integrations\\Core\\Renderer\\Blocks\\Column' => __DIR__ . '/../..' . '/src/Integrations/Core/Renderer/Blocks/class-column.php',
        'MailPoet\\EmailEditor\\Integrations\\Core\\Renderer\\Blocks\\Columns' => __DIR__ . '/../..' . '/src/Integrations/Core/Renderer/Blocks/class-columns.php',
        'MailPoet\\EmailEditor\\Integrations\\Core\\Renderer\\Blocks\\Fallback' => __DIR__ . '/../..' . '/src/Integrations/Core/Renderer/Blocks/class-fallback.php',
        'MailPoet\\EmailEditor\\Integrations\\Core\\Renderer\\Blocks\\Group' => __DIR__ . '/../..' . '/src/Integrations/Core/Renderer/Blocks/class-group.php',
        'MailPoet\\EmailEditor\\Integrations\\Core\\Renderer\\Blocks\\Image' => __DIR__ . '/../..' . '/src/Integrations/Core/Renderer/Blocks/class-image.php',
        'MailPoet\\EmailEditor\\Integrations\\Core\\Renderer\\Blocks\\List_Block' => __DIR__ . '/../..' . '/src/Integrations/Core/Renderer/Blocks/class-list-block.php',
        'MailPoet\\EmailEditor\\Integrations\\Core\\Renderer\\Blocks\\List_Item' => __DIR__ . '/../..' . '/src/Integrations/Core/Renderer/Blocks/class-list-item.php',
        'MailPoet\\EmailEditor\\Integrations\\Core\\Renderer\\Blocks\\Text' => __DIR__ . '/../..' . '/src/Integrations/Core/Renderer/Blocks/class-text.php',
        'MailPoet\\EmailEditor\\Integrations\\Utils\\Dom_Document_Helper' => __DIR__ . '/../..' . '/src/Integrations/Utils/class-dom-document-helper.php',
        'MailPoet\\EmailEditor\\Integrations\\Utils\\Dom_Document_Helper_Test' => __DIR__ . '/../..' . '/tests/unit/Integrations/Utils/Dom_Document_Helper_Test.php',
        'MailPoet\\EmailEditor\\InvalidStateException' => __DIR__ . '/../..' . '/src/exceptions.php',
        'MailPoet\\EmailEditor\\NewsletterProcessingException' => __DIR__ . '/../..' . '/src/exceptions.php',
        'MailPoet\\EmailEditor\\NotFoundException' => __DIR__ . '/../..' . '/src/exceptions.php',
        'MailPoet\\EmailEditor\\RuntimeException' => __DIR__ . '/../..' . '/src/exceptions.php',
        'MailPoet\\EmailEditor\\Simple_Service' => __DIR__ . '/../..' . '/tests/unit/Container_Test.php',
        'MailPoet\\EmailEditor\\Singleton_Service' => __DIR__ . '/../..' . '/tests/unit/Container_Test.php',
        'MailPoet\\EmailEditor\\UnexpectedValueException' => __DIR__ . '/../..' . '/src/exceptions.php',
        'MailPoet\\EmailEditor\\Validator\\Builder' => __DIR__ . '/../..' . '/src/Validator/class-builder.php',
        'MailPoet\\EmailEditor\\Validator\\Schema' => __DIR__ . '/../..' . '/src/Validator/class-schema.php',
        'MailPoet\\EmailEditor\\Validator\\Schema\\Any_Of_Schema' => __DIR__ . '/../..' . '/src/Validator/Schema/class-any-of-schema.php',
        'MailPoet\\EmailEditor\\Validator\\Schema\\Array_Schema' => __DIR__ . '/../..' . '/src/Validator/Schema/class-array-schema.php',
        'MailPoet\\EmailEditor\\Validator\\Schema\\Boolean_Schema' => __DIR__ . '/../..' . '/src/Validator/Schema/class-boolean-schema.php',
        'MailPoet\\EmailEditor\\Validator\\Schema\\Integer_Schema' => __DIR__ . '/../..' . '/src/Validator/Schema/class-integer-schema.php',
        'MailPoet\\EmailEditor\\Validator\\Schema\\Null_Schema' => __DIR__ . '/../..' . '/src/Validator/Schema/class-null-schema.php',
        'MailPoet\\EmailEditor\\Validator\\Schema\\Number_Schema' => __DIR__ . '/../..' . '/src/Validator/Schema/class-number-schema.php',
        'MailPoet\\EmailEditor\\Validator\\Schema\\Object_Schema' => __DIR__ . '/../..' . '/src/Validator/Schema/class-object-schema.php',
        'MailPoet\\EmailEditor\\Validator\\Schema\\One_Of_Schema' => __DIR__ . '/../..' . '/src/Validator/Schema/class-one-of-schema.php',
        'MailPoet\\EmailEditor\\Validator\\Schema\\String_Schema' => __DIR__ . '/../..' . '/src/Validator/Schema/class-string-schema.php',
        'MailPoet\\EmailEditor\\Validator\\Validation_Exception' => __DIR__ . '/../..' . '/src/Validator/class-validation-exception.php',
        'MailPoet\\EmailEditor\\Validator\\Validator' => __DIR__ . '/../..' . '/src/Validator/class-validator.php',
        'PersonalizationTagsRegistryTest' => __DIR__ . '/../..' . '/tests/unit/Engine/PersonalizationTags/Personalization_Tags_Registry_Test.php',
        'PhpToken' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/PhpToken.php',
        'Stringable' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/Stringable.php',
        'UnhandledMatchError' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/UnhandledMatchError.php',
        'ValueError' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/ValueError.php',
        'WP_Theme_JSON' => __DIR__ . '/../..' . '/tests/unit/_stubs.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit3ec3d68813951a5994b8185678e256db::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit3ec3d68813951a5994b8185678e256db::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit3ec3d68813951a5994b8185678e256db::$classMap;

        }, null, ClassLoader::class);
    }
}
