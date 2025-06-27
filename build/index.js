/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/block-edit.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/blocks/core/block-edit.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterSetUrlAttribute: () => (/* binding */ filterSetUrlAttribute)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);

/**
 * External dependencies
 */


const setUrlAttribute = (BlockEdit) => (props) => {
    const { setAttributes } = props;
    const wrappedSetAttributes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((attributes) => {
        // Remove the `http://` prefix that is being set automatically by the link control.
        if (attributes?.url &&
            attributes.url?.startsWith('http://[')) {
            attributes.url = attributes.url.replace('http://[', '[');
        }
        setAttributes(attributes);
    }, [setAttributes]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, { ...props, setAttributes: wrappedSetAttributes }));
};
function filterSetUrlAttribute() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'woocommerce-email-editor/filter-set-url-attribute', setUrlAttribute);
}



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/button.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/blocks/core/button.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enhanceButtonBlock: () => (/* binding */ enhanceButtonBlock)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Disables Styles for button
 * Currently we are not able to read these styles in renderer
 */
function enhanceButtonBlock() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'woocommerce-email-editor/change-button', (settings, name) => {
        if (name === 'core/button') {
            return { ...settings, styles: [] };
        }
        return settings;
    });
}



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/buttons.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/blocks/core/buttons.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enhanceButtonsBlock: () => (/* binding */ enhanceButtonsBlock)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Switch layout to reduced flex email layout
 * Email render engine can't handle full flex layout se we need to switch to reduced flex layout
 */
function enhanceButtonsBlock() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'woocommerce-email-editor/change-buttons', (settings, name) => {
        if (name === 'core/buttons') {
            return {
                ...settings,
                supports: {
                    ...settings.supports,
                    layout: false, // disable block editor's layouts
                    // enable MailPoet's reduced flex email layout
                    __experimentalEmailFlexLayout: true, // eslint-disable-line
                },
            };
        }
        return settings;
    });
}



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/column.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/blocks/core/column.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enhanceColumnBlock: () => (/* binding */ enhanceColumnBlock)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

function enhanceColumnBlock() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'woocommerce-email-editor/change-column', (settings, name) => {
        if (name === 'core/column') {
            return {
                ...settings,
                supports: {
                    ...settings.supports,
                    background: {
                        backgroundImage: true,
                    },
                },
            };
        }
        return settings;
    });
}



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/columns.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/blocks/core/columns.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deactivateStackOnMobile: () => (/* binding */ deactivateStackOnMobile),
/* harmony export */   disableColumnsLayout: () => (/* binding */ disableColumnsLayout),
/* harmony export */   enhanceColumnsBlock: () => (/* binding */ enhanceColumnsBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies
 */



const columnsEditCallback = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)((BlockEdit) => function alterBlocksEdits(props) {
    if (props.name !== 'core/columns') {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, { ...props });
    }
    // CSS sets opacity by the class is-disabled by the toggle component from the Gutenberg package
    // To deactivating the input we use CSS pointer-events because we want to avoid JavaScript hacks
    const deactivateToggleCss = `
      .components-panel__body .components-toggle-control .components-form-toggle { opacity: 0.3; }
      .components-panel__body .components-toggle-control .components-form-toggle__input { pointer-events: none; }
      .components-panel__body .components-toggle-control label { pointer-events: none; }
    `;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, { ...props }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", { children: deactivateToggleCss }) })] }));
}, 'columnsEditCallback');
function deactivateStackOnMobile() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('editor.BlockEdit', 'woocommerce-email-editor/deactivate-stack-on-mobile', columnsEditCallback);
}
/**
 * Disables layout support for columns and column blocks because
 * the default layout `flex` add gaps between columns that it is not possible to support in emails.
 */
function disableColumnsLayout() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('blocks.registerBlockType', 'woocommerce-email-editor/disable-columns-layout', (settings, name) => {
        if (name === 'core/columns' || name === 'core/column') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return {
                ...settings,
                supports: {
                    ...settings.supports,
                    layout: false,
                },
            };
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return settings;
    });
}
function enhanceColumnsBlock() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('blocks.registerBlockType', 'woocommerce-email-editor/change-columns', (settings, name) => {
        if (name === 'core/columns') {
            return {
                ...settings,
                supports: {
                    ...settings.supports,
                    background: {
                        backgroundImage: true,
                    },
                },
            };
        }
        return settings;
    });
}



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/general-block-support.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/blocks/core/general-block-support.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alterSupportConfiguration: () => (/* binding */ alterSupportConfiguration)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Disables Shadow Support for all blocks
 * Currently we are not able to read these styles in renderer
 */
function alterSupportConfiguration() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'woocommerce-email-editor/block-support', (settings) => {
        if (settings.supports?.shadow) {
            return {
                ...settings,
                supports: { ...settings.supports, shadow: false },
            };
        }
        return settings;
    });
}



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/group.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/blocks/core/group.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableGroupVariations: () => (/* binding */ disableGroupVariations)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Disables layout support for group blocks because the default layout `flex` add gaps between columns that it is not possible to support in emails.
 */
function disableGroupVariations() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'woocommerce-email-editor/disable-group-variations', (settings, name) => {
        if (name === 'core/group') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return {
                ...settings,
                variations: settings.variations.filter((variation) => variation.name === 'group'),
                supports: {
                    ...settings.supports,
                    layout: false,
                },
            };
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return settings;
    });
}



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/image.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/blocks/core/image.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableImageFilter: () => (/* binding */ disableImageFilter),
/* harmony export */   hideExpandOnClick: () => (/* binding */ hideExpandOnClick)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies
 */



const imageEditCallback = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)((BlockEdit) => function alterBlocksEdits(props) {
    if (props.name !== 'core/image') {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, { ...props });
    }
    // Because we cannot support displaying the modal with image after clicking in the email we have to hide the toggle
    const deactivateToggleCss = `
        .components-tools-panel .components-toggle-control { display: none; }
      `;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, { ...props }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", { children: deactivateToggleCss }) })] }));
}, 'imageEditCallback');
/**
 * Because CSS property filter is not supported in almost 50% of email clients we have to disable it
 */
function disableImageFilter() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('blocks.registerBlockType', 'woocommerce-email-editor/deactivate-image-filter', (settings, name) => {
        if (name === 'core/image') {
            return {
                ...settings,
                supports: {
                    ...settings.supports,
                    filter: {
                        duetone: false,
                    },
                },
            };
        }
        return settings;
    });
}
function hideExpandOnClick() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('editor.BlockEdit', 'woocommerce-email-editor/hide-expand-on-click', imageEditCallback);
}



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/move-to-trash.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/blocks/core/move-to-trash.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modifyMoveToTrashAction: () => (/* binding */ modifyMoveToTrashAction)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _private_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../private-apis */ "./node_modules/@woocommerce/email-editor/build-module/private-apis/index.js");
/* harmony import */ var _components_header_trash_email_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/trash-email-post */ "./node_modules/@woocommerce/email-editor/build-module/components/header/trash-email-post.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


const removeDefaultMoveToTrashActionAddCustom = (postType) => {
    // Remove the default move to trash action.
    (0,_private_apis__WEBPACK_IMPORTED_MODULE_1__.unregisterEntityAction)('postType', postType, 'move-to-trash');
    // Add the custom trash email post action.
    (0,_private_apis__WEBPACK_IMPORTED_MODULE_1__.registerEntityAction)('postType', postType, (0,_components_header_trash_email_post__WEBPACK_IMPORTED_MODULE_2__["default"])());
};
function modifyMoveToTrashAction() {
    // Available in WordPress 6.8+
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addAction)('core.registerPostTypeSchema', 'woocommerce-email-editor/modify-move-to-trash-action', (postType) => {
        removeDefaultMoveToTrashActionAddCustom(postType);
    });
    // Support for WordPress 6.7+
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addAction)('core.registerPostTypeActions', 'woocommerce-email-editor/modify-move-to-trash-action', (postType) => {
        removeDefaultMoveToTrashActionAddCustom(postType);
    });
}



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/post-content.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/blocks/core/post-content.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enhancePostContentBlock: () => (/* binding */ enhancePostContentBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies
 */



function Placeholder({ layoutClassNames }) {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({ className: layoutClassNames });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ...blockProps, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('This is the Content block.', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('It will display all the blocks in the email content, which might be only simple text paragraphs. You can enrich your message with images, incorporate data through tables, explore different layout designs with columns, or use any other block type.', 'woocommerce') })] }));
}
// Curried function to add a custom placeholder to the post content block, or just use the original Edit component.
function PostContentEdit(OriginalEditComponent) {
    return function Edit({ context, __unstableLayoutClassNames: layoutClassNames, }) {
        const { postId: contextPostId, postType: contextPostType } = context;
        const hasContent = contextPostId && contextPostType;
        if (hasContent) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OriginalEditComponent, { context,
                __unstableLayoutClassNames: layoutClassNames }));
        }
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Placeholder, { layoutClassNames: layoutClassNames });
    };
}
function enhancePostContentBlock() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.registerBlockType', 'woocommerce-email-editor/change-post-content', (settings, name) => {
        if (name === 'core/post-content') {
            return {
                ...settings,
                edit: PostContentEdit(settings.edit),
            };
        }
        return settings;
    });
}



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/quote.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/blocks/core/quote.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enhanceQuoteBlock: () => (/* binding */ enhanceQuoteBlock)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Remove the styles and alignment control support for the Quote block.
 */
function enhanceQuoteBlock() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'woocommerce-email-editor/change-quote', (settings, name) => {
        if (name === 'core/quote') {
            return {
                ...settings,
                styles: [],
                supports: {
                    ...settings.supports,
                    align: [],
                },
            };
        }
        return settings;
    });
}



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/rich-text.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/blocks/core/rich-text.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activatePersonalizationTagsReplacing: () => (/* binding */ activatePersonalizationTagsReplacing),
/* harmony export */   disableCertainRichTextFormats: () => (/* binding */ disableCertainRichTextFormats),
/* harmony export */   extendRichTextFormats: () => (/* binding */ extendRichTextFormats)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_personalization_tags_rich_text_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/personalization-tags/rich-text-utils */ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/rich-text-utils.js");
/* harmony import */ var _components_personalization_tags_personalization_tags_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/personalization-tags/personalization-tags-modal */ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/personalization-tags-modal.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _components_personalization_tags_personalization_tags_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/personalization-tags/personalization-tags-popover */ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/personalization-tags-popover.js");
/* harmony import */ var _components_personalization_tags_personalization_tags_link_popover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/personalization-tags/personalization-tags-link-popover */ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/personalization-tags-link-popover.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */








/**
 * Internal dependencies
 */






/**
 * Disable Rich text formats we currently cannot support
 * Note: This will remove its support for all blocks in the email editor e.g., p, h1,h2, etc
 */
function disableCertainRichTextFormats() {
    // remove support for inline image - We can't use it
    (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.unregisterFormatType)('core/image');
    // remove support for Inline code - Not well formatted
    (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.unregisterFormatType)('core/code');
    // remove support for Language - Not supported for now
    (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.unregisterFormatType)('core/language');
}
/**
 * A button to the rich text editor to open modal with registered personalization tags.
 *
 * @param root0
 * @param root0.contentRef
 */
function PersonalizationTagsButton({ contentRef }) {
    const [isModalOpened, setIsModalOpened] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const selectedBlockId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)((select) => select('core/block-editor').getSelectedBlockClientId());
    const { updateBlockAttributes } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)('core/block-editor');
    // Get the current block attributes
    const blockAttributes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)((select) => {
        const attributes = select('core/block-editor').getBlockAttributes(selectedBlockId);
        return attributes;
    });
    // Some blocks, such as the Button block, store the content in `text` attribute.
    const blockContentKey = 'text' in blockAttributes ? 'text' : 'content';
    // After first saving the content does not have property originalHTML, so we need to check for content as well
    const blockContent = blockAttributes?.[blockContentKey]?.originalHTML ||
        blockAttributes?.[blockContentKey] ||
        '';
    const handleInsert = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useCallback)((tag, linkText) => {
        let { start, end } = (0,_components_personalization_tags_rich_text_utils__WEBPACK_IMPORTED_MODULE_9__.getCursorPosition)(contentRef, blockContent);
        let updatedContent = '';
        // When we pass linkText, we want to insert the tag as a link
        if (linkText) {
            let richTextValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.create)({ html: blockContent });
            // Insert the new text into the current selection or at the cursor
            richTextValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.insert)(richTextValue, linkText, start, end);
            end = start + linkText.length;
            // The link is inserted via registered format type to avoid breaking the content
            richTextValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.applyFormat)(richTextValue, {
                type: 'woocommerce-email-editor/link-shortcode',
                // @ts-expect-error attributes property is missing in build type for WPFormat type
                attributes: {
                    'data-link-href': tag,
                    contenteditable: 'false',
                    style: 'text-decoration: underline;',
                },
            }, start, end);
            updatedContent = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.toHTMLString)({ value: richTextValue });
        }
        else {
            let richTextValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.create)({ html: blockContent });
            richTextValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.insert)(richTextValue, (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.create)({ html: `<!--${tag}-->&nbsp;` }), // Add a non-breaking space to avoid an issue when WP renderer removes blog containing only a comment
            start, end);
            updatedContent = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.toHTMLString)({ value: richTextValue });
        }
        updateBlockAttributes(selectedBlockId, {
            [blockContentKey]: updatedContent,
        });
    }, [
        blockContent,
        blockContentKey,
        contentRef,
        selectedBlockId,
        updateBlockAttributes,
    ]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, { icon: "shortcode", title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Personalization Tags', 'woocommerce'), onClick: () => {
                        setIsModalOpened(true);
                        (0,_events__WEBPACK_IMPORTED_MODULE_10__.recordEvent)('block_controls_personalization_tags_button_clicked');
                    } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_personalization_tags_personalization_tags_popover__WEBPACK_IMPORTED_MODULE_11__.PersonalizationTagsPopover, { contentRef: contentRef, onUpdate: (originalTag, updatedTag) => {
                        // When we update the tag, we need to add brackets to the tag, because the popover removes them
                        const updatedContent = blockContent.replace(`<!--[${originalTag}]-->`, `<!--[${updatedTag}]-->`);
                        updateBlockAttributes(selectedBlockId, {
                            [blockContentKey]: updatedContent,
                        });
                    } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_personalization_tags_personalization_tags_link_popover__WEBPACK_IMPORTED_MODULE_12__.PersonalizationTagsLinkPopover, { contentRef: contentRef, onUpdate: (htmlElement, newTag, newText) => {
                        const oldTag = htmlElement
                            .getAttribute('data-link-href')
                            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                        const regex = new RegExp(`<a([^>]*?)data-link-href="${oldTag}"([^>]*?)>${htmlElement.textContent}</a>`, 'gi');
                        // Replace the matched link with the new link
                        const updatedContent = blockContent.replace(regex, (_, beforeAttrs, afterAttrs) => {
                            // Construct the new <a> tag
                            return `<a${beforeAttrs}data-link-href="${newTag}"${afterAttrs}>${newText}</a>`;
                        });
                        updateBlockAttributes(selectedBlockId, {
                            content: updatedContent,
                        });
                    } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_personalization_tags_personalization_tags_modal__WEBPACK_IMPORTED_MODULE_13__.PersonalizationTagsModal, { isOpened: isModalOpened, onInsert: (value, linkText) => {
                        handleInsert(value, linkText);
                        setIsModalOpened(false);
                    }, closeCallback: () => setIsModalOpened(false), canInsertLink: true, openedBy: "block-controls" })] }) }));
}
/**
 * Extend the rich text formats with a button for personalization tags.
 */
function extendRichTextFormats() {
    (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.registerFormatType)('woocommerce-email-editor/shortcode', {
        name: 'woocommerce-email-editor/shortcode',
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Personalization Tags', 'woocommerce'),
        className: 'woocommerce-email-editor-personalization-tags',
        tagName: 'span',
        // @ts-expect-error attributes property is missing in build type for WPFormat type
        attributes: {},
        edit: PersonalizationTagsButton,
    });
    // Register format type for using personalization tags as link attributes
    (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.registerFormatType)('woocommerce-email-editor/link-shortcode', {
        name: 'woocommerce-email-editor/link-shortcode',
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Personalization Tags Link', 'woocommerce'),
        className: 'woocommerce-email-editor-personalization-tags-link',
        tagName: 'a',
        // @ts-expect-error attributes property is missing in build type for WPFormat type
        attributes: {
            'data-link-href': 'data-link-href',
            contenteditable: 'contenteditable',
            style: 'style',
        },
        edit: null,
    });
}
const personalizationTagsLiveContentUpdate = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__.createHigherOrderComponent)((BlockEdit) => (props) => {
    const { attributes, setAttributes, name } = props;
    const { content } = attributes;
    // Fetch the personalization tags list
    const list = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)((select) => select(_store__WEBPACK_IMPORTED_MODULE_14__.storeName).getPersonalizationTagsList(), []);
    // Memoized function to replace content tags
    const updateContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
        if (!content) {
            return '';
        }
        return (0,_components_personalization_tags_rich_text_utils__WEBPACK_IMPORTED_MODULE_9__.replacePersonalizationTagsWithHTMLComments)(content, list);
    }, [content, list]);
    // Handle content updates
    const handleSetAttributes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useCallback)((newAttributes) => {
        if (newAttributes.content !== undefined) {
            const replacedContent = (0,_components_personalization_tags_rich_text_utils__WEBPACK_IMPORTED_MODULE_9__.replacePersonalizationTagsWithHTMLComments)(newAttributes.content, list);
            setAttributes({
                ...newAttributes,
                content: replacedContent,
            });
        }
        else {
            setAttributes(newAttributes);
        }
    }, [list, setAttributes]);
    // Only process supported blocks
    if (name === 'core/paragraph' ||
        name === 'core/heading' ||
        name === 'core/list-item') {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, { ...props, attributes: {
                ...attributes,
                content: updateContent(),
            }, setAttributes: handleSetAttributes }));
    }
    // Return default for unsupported blocks
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, { ...props });
}, 'personalizationTagsLiveContentUpdate');
/**
 * Replace written personalization tags with HTML comments in real-time.
 */
function activatePersonalizationTagsReplacing() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__.addFilter)('editor.BlockEdit', 'woocommerce-email-editor/with-live-content-update', personalizationTagsLiveContentUpdate);
}



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/social-links.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/blocks/core/social-links.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enhanceSocialLinksBlock: () => (/* binding */ enhanceSocialLinksBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);

/**
 * External dependencies
 */




// Add support for top social networks
const supportedVariations = [
    'behance',
    'bluesky',
    'chain', // Link
    'discord',
    'facebook',
    'feed',
    'github',
    'gravatar',
    'instagram',
    'linkedin',
    'mail',
    'mastodon',
    'medium',
    'patreon',
    'pinterest',
    'reddit',
    'spotify',
    'telegram',
    'threads',
    'tiktok',
    'tumblr',
    'twitch',
    'twitter',
    'vimeo',
    'wordpress',
    'whatsapp',
    'x',
    'youtube',
];
function unregisterBlockVariations() {
    // Remove unsupported social links
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('blocks.registerBlockType', 'woocommerce-email-editor/disable-social-link-variations', (settings, name) => {
        if (name === 'core/social-link') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return {
                ...settings,
                variations: settings.variations.filter((variation) => supportedVariations.includes(variation.name)),
                supports: {
                    ...settings.supports,
                    layout: false,
                },
            };
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return settings;
    });
}
function registerCustomSocialLinksBlockVariation() {
    // Register a custom variation for the social links block
    // This variation is used to display the social links in the email editor by automatically adding some preset social links
    const socialLinksVariations = [
        {
            // @ts-expect-error Type not complete.
            name: 'core/social-link',
            attributes: {
                service: 'wordpress',
                url: 'https://wordpress.org',
            },
        },
        {
            // @ts-expect-error Type not complete.
            name: 'core/social-link',
            attributes: {
                service: 'facebook',
                url: 'https://www.facebook.com/WordPress/',
            },
        },
        {
            // @ts-expect-error Type not complete.
            name: 'core/social-link',
            attributes: {
                service: 'x',
                url: 'https://x.com/WordPress',
            },
        },
    ];
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockVariation)('core/social-links', {
        name: 'social-links-default',
        title: 'Social Icons',
        attributes: {
            openInNewTab: true,
            showLabels: false,
            align: 'center',
            className: 'is-style-logos-only', // use logo-only style as the default because it's the most common use case and it looks nice on all email clients.
        },
        isDefault: true, // set this as the default variation
        innerBlocks: socialLinksVariations,
    });
}
const disableIconColor = (BlockEdit) => (props) => {
    if (props.name !== 'core/social-links') {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, { ...props });
    }
    // we are doing this because we don't want to show the icon color picker in the social links block (we can't change png image color)
    // and there isn't a great way to remove the icon color from the core block attributes
    // eslint-disable-next-line @wordpress/i18n-text-domain -- using core label.
    const labelText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Icon color');
    const customCss = `
		.block-editor-tools-panel-color-gradient-settings__item:has([title="${labelText}"]) {
			display: none !important;
		}
		.block-editor-tools-panel-color-gradient-settings__item:nth-child(2 of .block-editor-tools-panel-color-gradient-settings__item){
			border-top:1px solid #ddd;
			border-top-left-radius:2px;
			border-top-right-radius:2px;
		}
		`;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, { ...props }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, { group: "color", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", { children: customCss }) })] }));
};
function removeSocialLinksIconColor() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('editor.BlockEdit', 'woocommerce-email-editor/disable-social-links-icon-color', disableIconColor);
}
/**
 * Enhances the social links and social link blocks
 */
function enhanceSocialLinksBlock() {
    unregisterBlockVariations();
    registerCustomSocialLinksBlockVariation();
    removeSocialLinksIconColor();
}



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/blocks/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/blocks/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initBlocks: () => (/* binding */ initBlocks)
/* harmony export */ });
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_column__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/column */ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/column.js");
/* harmony import */ var _core_columns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/columns */ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/columns.js");
/* harmony import */ var _core_post_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/post-content */ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/post-content.js");
/* harmony import */ var _core_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/group */ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/group.js");
/* harmony import */ var _core_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/image */ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/image.js");
/* harmony import */ var _core_rich_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/rich-text */ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/rich-text.js");
/* harmony import */ var _core_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/button */ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/button.js");
/* harmony import */ var _core_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/buttons */ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/buttons.js");
/* harmony import */ var _core_general_block_support__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/general-block-support */ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/general-block-support.js");
/* harmony import */ var _core_quote__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/quote */ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/quote.js");
/* harmony import */ var _core_block_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/block-edit */ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/block-edit.js");
/* harmony import */ var _core_social_links__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/social-links */ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/social-links.js");
/* harmony import */ var _core_move_to_trash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/move-to-trash */ "./node_modules/@woocommerce/email-editor/build-module/blocks/core/move-to-trash.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */













function initBlocks() {
    (0,_core_block_edit__WEBPACK_IMPORTED_MODULE_1__.filterSetUrlAttribute)();
    (0,_core_columns__WEBPACK_IMPORTED_MODULE_2__.deactivateStackOnMobile)();
    (0,_core_image__WEBPACK_IMPORTED_MODULE_3__.hideExpandOnClick)();
    (0,_core_image__WEBPACK_IMPORTED_MODULE_3__.disableImageFilter)();
    (0,_core_rich_text__WEBPACK_IMPORTED_MODULE_4__.disableCertainRichTextFormats)();
    (0,_core_columns__WEBPACK_IMPORTED_MODULE_2__.disableColumnsLayout)();
    (0,_core_group__WEBPACK_IMPORTED_MODULE_5__.disableGroupVariations)();
    (0,_core_button__WEBPACK_IMPORTED_MODULE_6__.enhanceButtonBlock)();
    (0,_core_buttons__WEBPACK_IMPORTED_MODULE_7__.enhanceButtonsBlock)();
    (0,_core_column__WEBPACK_IMPORTED_MODULE_8__.enhanceColumnBlock)();
    (0,_core_columns__WEBPACK_IMPORTED_MODULE_2__.enhanceColumnsBlock)();
    (0,_core_post_content__WEBPACK_IMPORTED_MODULE_9__.enhancePostContentBlock)();
    (0,_core_quote__WEBPACK_IMPORTED_MODULE_10__.enhanceQuoteBlock)();
    (0,_core_rich_text__WEBPACK_IMPORTED_MODULE_4__.extendRichTextFormats)();
    (0,_core_rich_text__WEBPACK_IMPORTED_MODULE_4__.activatePersonalizationTagsReplacing)();
    (0,_core_general_block_support__WEBPACK_IMPORTED_MODULE_11__.alterSupportConfiguration)();
    (0,_core_social_links__WEBPACK_IMPORTED_MODULE_12__.enhanceSocialLinksBlock)();
    (0,_core_move_to_trash__WEBPACK_IMPORTED_MODULE_13__.modifyMoveToTrashAction)();
    (0,_wordpress_block_library__WEBPACK_IMPORTED_MODULE_0__.registerCoreBlocks)();
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/block-editor/editor.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/block-editor/editor.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InnerEditor: () => (/* binding */ InnerEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/commands */ "@wordpress/commands");
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_commands__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _hooks_use_navigate_to_entity_record__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-navigate-to-entity-record */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-navigate-to-entity-record.js");
/* harmony import */ var _private_apis__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../private-apis */ "./node_modules/@woocommerce/email-editor/build-module/private-apis/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-email-css.js");
/* harmony import */ var _template_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../template-select */ "./node_modules/@woocommerce/email-editor/build-module/components/template-select/template-selection.js");
/* harmony import */ var _styles_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles-sidebar */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/styles-sidebar.js");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../preview */ "./node_modules/@woocommerce/email-editor/build-module/components/preview/send-preview.js");
/* harmony import */ var _more_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../more-menu */ "./node_modules/@woocommerce/email-editor/build-module/components/more-menu/more-menu.js");
/* harmony import */ var _sidebar_settings_panel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../sidebar/settings-panel */ "./node_modules/@woocommerce/email-editor/build-module/components/sidebar/settings-panel.js");
/* harmony import */ var _sidebar_template_settings_panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../sidebar/template-settings-panel */ "./node_modules/@woocommerce/email-editor/build-module/components/sidebar/template-settings-panel.js");
/* harmony import */ var _hacks_publish_save__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../hacks/publish-save */ "./node_modules/@woocommerce/email-editor/build-module/hacks/publish-save.js");
/* harmony import */ var _notices__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../notices */ "./node_modules/@woocommerce/email-editor/build-module/components/notices/notices.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../sidebar */ "./node_modules/@woocommerce/email-editor/build-module/components/sidebar/block-compatibility-warnings.js");
/* harmony import */ var _header_back_button_content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../header/back-button-content */ "./node_modules/@woocommerce/email-editor/build-module/components/header/back-button-content.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */





// eslint-disable-next-line @woocommerce/dependency-group

/**
 * Internal dependencies
 */















function InnerEditor({ postId: initialPostId, postType: initialPostType, settings, }) {
    const { currentPost, onNavigateToEntityRecord, onNavigateToPreviousEntityRecord, } = (0,_hooks_use_navigate_to_entity_record__WEBPACK_IMPORTED_MODULE_7__.useNavigateToEntityRecord)(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    initialPostId, 
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    initialPostType, 'post-only');
    // isFullScreenForced – comes from settings and cannot be changed by the user
    // isFullscreenEnabled – indicates if a user has enabled fullscreen mode
    const { post, template, isFullscreenEnabled } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)((select) => {
        const { getEntityRecord } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
        const { getEditedPostTemplate } = select(_store__WEBPACK_IMPORTED_MODULE_8__.storeName);
        const postObject = getEntityRecord('postType', currentPost.postType, currentPost.postId);
        return {
            template: currentPost.postType !== 'wp_template'
                ? getEditedPostTemplate()
                : null,
            post: postObject,
            isFullscreenEnabled: select(_store__WEBPACK_IMPORTED_MODULE_8__.storeName).isFeatureActive('fullscreenMode'),
        };
    }, [currentPost.postType, currentPost.postId]);
    const { isFullScreenForced, displaySendEmailButton } = settings;
    // @ts-expect-error Type is missing in @types/wordpress__editor
    const { removeEditorPanel } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.store);
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        removeEditorPanel('post-status');
    }, [removeEditorPanel]);
    const [styles] = (0,_hooks__WEBPACK_IMPORTED_MODULE_9__.useEmailCss)();
    const editorSettings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    () => ({
        ...settings,
        onNavigateToEntityRecord,
        onNavigateToPreviousEntityRecord,
        defaultRenderingMode: currentPost.postType === 'wp_template'
            ? 'post-only'
            : 'template-locked',
        supportsTemplateMode: true,
    }), [
        settings,
        onNavigateToEntityRecord,
        onNavigateToPreviousEntityRecord,
        currentPost.postType,
    ]);
    if (!post || (currentPost.postType !== 'wp_template' && !template)) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "spinner-container", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, { style: { width: '80px', height: '80px' } }) }));
    }
    (0,_events__WEBPACK_IMPORTED_MODULE_10__.recordEventOnce)('editor_layout_loaded');
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SlotFillProvider, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.ErrorBoundary, { canCopyContent: true, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_commands__WEBPACK_IMPORTED_MODULE_5__.CommandMenu, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_private_apis__WEBPACK_IMPORTED_MODULE_11__.Editor, { postId: currentPost.postId, postType: currentPost.postType, settings: editorSettings, templateId: template && template.id, styles: styles, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.AutosaveMonitor, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.LocalAutosaveMonitor, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.UnsavedChangesWarning, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.EditorKeyboardShortcutsRegister, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.PostLockedModal, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_template_select__WEBPACK_IMPORTED_MODULE_12__.TemplateSelection, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_sidebar__WEBPACK_IMPORTED_MODULE_13__.StylesSidebar, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_preview__WEBPACK_IMPORTED_MODULE_14__.SendPreview, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_private_apis__WEBPACK_IMPORTED_MODULE_11__.FullscreenMode, { isActive: isFullScreenForced || isFullscreenEnabled }), (isFullScreenForced || isFullscreenEnabled) && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_header_back_button_content__WEBPACK_IMPORTED_MODULE_15__.BackButtonContent, {})), !isFullScreenForced && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_more_menu__WEBPACK_IMPORTED_MODULE_16__.MoreMenu, {}), currentPost.postType === 'wp_template' ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_sidebar_template_settings_panel__WEBPACK_IMPORTED_MODULE_17__.TemplateSettingsPanel, {})) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_sidebar_settings_panel__WEBPACK_IMPORTED_MODULE_18__.SettingsPanel, {})), displaySendEmailButton && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hacks_publish_save__WEBPACK_IMPORTED_MODULE_19__.PublishSave, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_notices__WEBPACK_IMPORTED_MODULE_20__.EditorNotices, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_sidebar__WEBPACK_IMPORTED_MODULE_21__.BlockCompatibilityWarnings, {})] })] }) }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/header/back-button-content.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/header/back-button-content.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackButtonContent: () => (/* binding */ BackButtonContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/wordpress.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/arrow-left.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _private_apis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../private-apis */ "./node_modules/@woocommerce/email-editor/build-module/private-apis/index.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



const toggleHomeIconVariants = {
    edit: {
        opacity: 0,
        scale: 0.2,
    },
    hover: {
        opacity: 1,
        scale: 1,
        clipPath: 'inset( 22% round 2px )',
    },
};
const siteIconVariants = {
    edit: {
        clipPath: 'inset(0% round 0px)',
    },
    hover: {
        clipPath: 'inset( 22% round 2px )',
    },
    tap: {
        clipPath: 'inset(0% round 0px)',
    },
};
/**
 * Back button content component with animation effects.
 */
const BackButtonContent = () => {
    const { urls } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)((select) => ({
        urls: select(_store__WEBPACK_IMPORTED_MODULE_5__.storeName).getUrls(),
    }), []);
    function backAction() {
        if (urls.listings) {
            window.location.href = urls.back;
        }
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_private_apis__WEBPACK_IMPORTED_MODULE_6__.BackButton, { children: ({ length }) => length <= 1 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__unstableMotion.div, { className: "woocommerce-email-editor__view-mode-toggle", transition: {
                duration: 0.2,
            }, animate: "edit", initial: "edit", whileHover: "hover", whileTap: "tap", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Close editor', 'woocommerce'), showTooltip: true, tooltipPosition: "middle right", onClick: () => {
                        (0,_events__WEBPACK_IMPORTED_MODULE_7__.recordEvent)('header_close_button_clicked');
                        const action = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('woocommerce_email_editor_close_action_callback', backAction);
                        action();
                    }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__unstableMotion.div, { variants: siteIconVariants, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "woocommerce-email-editor__view-mode-toggle-icon", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"], { className: "woocommerce-email-editor-icon__icon", icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"], size: 48 }) }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__unstableMotion.div, { className: "woocommerce-email-editor-icon", variants: toggleHomeIconVariants, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"], { icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"] }) })] })) }));
};


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/header/send-button.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/header/send-button.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SendButton: () => (/* binding */ SendButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */


function SendButton() {
    const { isDirty } = (0,_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.useEntitiesSavedStatesIsDirty)();
    const { hasEmptyContent, isEmailSent, urls } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)((select) => ({
        hasEmptyContent: select(_store__WEBPACK_IMPORTED_MODULE_6__.storeName).hasEmptyContent(),
        isEmailSent: select(_store__WEBPACK_IMPORTED_MODULE_6__.storeName).isEmailSent(),
        urls: select(_store__WEBPACK_IMPORTED_MODULE_6__.storeName).getUrls(),
    }), []);
    function sendAction() {
        if (urls.send) {
            window.location.href = urls.send;
        }
    }
    const isDisabled = hasEmptyContent || isEmailSent || isDirty;
    const label = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('woocommerce_email_editor_send_button_label', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Send', 'woocommerce'));
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "primary", size: "compact", onClick: () => {
            (0,_events__WEBPACK_IMPORTED_MODULE_7__.recordEvent)('header_send_button_clicked');
            const action = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('woocommerce_email_editor_send_action_callback', sendAction);
            action();
        }, disabled: isDisabled, "data-automation-id": "email_editor_send_button", children: label }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/header/trash-email-post.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/header/trash-email-post.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/trash.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */









/**
 * Internal dependencies
 */


function getItemTitle(item) {
    if (typeof item.title === 'string') {
        return (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_7__.decodeEntities)(item.title);
    }
    if (item.title && 'rendered' in item.title) {
        return (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_7__.decodeEntities)(item.title.rendered);
    }
    if (item.title && 'raw' in item.title) {
        return (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_7__.decodeEntities)(item.title.raw);
    }
    return '';
}
function getModalTitle(items, shouldPermanentlyDelete) {
    if (shouldPermanentlyDelete) {
        return items.length > 1
            ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
            // translators: %d: number of items to delete.
            (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('Are you sure you want to permanently delete %d item?', 'Are you sure you want to permanently delete %d items?', items.length, 'woocommerce'), items.length)
            : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
            // translators: %s: The post's title
            (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Are you sure you want to permanently delete "%s"?', 'woocommerce'), (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_7__.decodeEntities)(getItemTitle(items[0])));
    }
    return items.length > 1
        ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
        // translators: %d: The number of items (2 or more).
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('Are you sure you want to move %d item to the trash ?', 'Are you sure you want to move %d items to the trash ?', items.length, 'woocommerce'), items.length)
        : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
        // translators: %s: The item's title.
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Are you sure you want to move "%s" to the trash?', 'woocommerce'), getItemTitle(items[0]));
}
const getTrashEmailPostAction = () => {
    const shouldPermanentlyDelete = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__.applyFilters)('woocommerce_email_editor_trash_modal_should_permanently_delete', false);
    /**
     * Trash email post action.
     * A custom action to permanently delete or move to trash email posts.
     * Cloned from core: https://github.com/WordPress/gutenberg/blob/da7adc0975d4736e555c7f81b8820b0cc4439d6c/packages/fields/src/actions/permanently-delete-post.tsx
     */
    const trashEmailPost = {
        id: 'trash-email-post',
        label: shouldPermanentlyDelete
            ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Permanently delete', 'woocommerce')
            : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Move to trash', 'woocommerce'),
        supportsBulk: true,
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
        isEligible(item) {
            if (item.type === 'wp_template' ||
                item.type === 'wp_template_part' ||
                item.type === 'wp_block') {
                return false;
            }
            const { permissions } = item;
            return permissions?.delete;
        },
        hideModalHeader: true,
        modalFocusOnMount: 'firstContentElement',
        RenderModal: ({ items, closeModal, onActionPerformed }) => {
            const [isBusy, setIsBusy] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
            const { createSuccessNotice, createErrorNotice } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store);
            const { deleteEntityRecord } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
            const { urls } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)((select) => ({
                urls: select(_store__WEBPACK_IMPORTED_MODULE_10__.storeName).getUrls(),
            }), []);
            const goToListings = () => {
                if (urls?.listings) {
                    window.location.href = urls.listings;
                }
            };
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalVStack, { spacing: "5", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalText, { children: getModalTitle(items, shouldPermanentlyDelete) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalHStack, { justify: "right", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, { variant: "tertiary", onClick: () => {
                                    closeModal?.();
                                    (0,_events__WEBPACK_IMPORTED_MODULE_11__.recordEvent)('trash_modal_cancel_button_clicked');
                                }, disabled: isBusy, __next40pxDefaultSize: true, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cancel', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, { variant: "primary", onClick: async () => {
                                    (0,_events__WEBPACK_IMPORTED_MODULE_11__.recordEvent)('trash_modal_move_to_trash_button_clicked');
                                    setIsBusy(true);
                                    const promiseResult = await Promise.allSettled(items.map((post) => deleteEntityRecord('postType', post.type, post.id, { force: shouldPermanentlyDelete }, { throwOnError: true })));
                                    // If all the promises were fulfilled with success.
                                    if (promiseResult.every(({ status }) => status === 'fulfilled')) {
                                        let successMessage;
                                        if (promiseResult.length === 1) {
                                            successMessage = shouldPermanentlyDelete
                                                ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
                                                /* translators: The posts's title. */
                                                (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('"%s" permanently deleted.', 'woocommerce'), getItemTitle(items[0]))
                                                : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
                                                /* translators: The item's title. */
                                                (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('"%s" moved to the trash.', 'woocommerce'), getItemTitle(items[0]));
                                        }
                                        else {
                                            successMessage = shouldPermanentlyDelete
                                                ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The items were permanently deleted.', 'woocommerce')
                                                : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
                                                /* translators: The number of items. */
                                                (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('%s item moved to the trash.', '%s items moved to the trash.', items.length, 'woocommerce'), items.length);
                                        }
                                        createSuccessNotice(successMessage, {
                                            type: 'snackbar',
                                            id: 'trash-email-post-action',
                                        });
                                        onActionPerformed?.(items);
                                        goToListings();
                                    }
                                    else {
                                        // If there was at lease one failure.
                                        let errorMessage;
                                        // If we were trying to permanently delete a single post.
                                        if (promiseResult.length === 1) {
                                            const typedError = promiseResult[0];
                                            if (typedError.reason?.message) {
                                                errorMessage =
                                                    typedError.reason.message;
                                            }
                                            else {
                                                errorMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('An error occurred while performing the action.', 'woocommerce');
                                            }
                                            // If we were trying to permanently delete multiple posts
                                        }
                                        else {
                                            const errorMessages = new Set();
                                            const failedPromises = promiseResult.filter(({ status }) => status === 'rejected');
                                            for (const failedPromise of failedPromises) {
                                                const typedError = failedPromise;
                                                if (typedError.reason?.message) {
                                                    errorMessages.add(typedError.reason.message);
                                                }
                                            }
                                            if (errorMessages.size === 0) {
                                                errorMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('An error occurred while performing the action.', 'woocommerce');
                                            }
                                            else if (errorMessages.size === 1) {
                                                errorMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
                                                /* translators: %s: an error message */
                                                (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('An error occurred while performing the action: %s', 'woocommerce'), [...errorMessages][0]);
                                            }
                                            else {
                                                errorMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
                                                /* translators: %s: a list of comma separated error messages */
                                                (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Some errors occurred while performing the action: %s', 'woocommerce'), [...errorMessages].join(','));
                                            }
                                        }
                                        (0,_events__WEBPACK_IMPORTED_MODULE_11__.recordEvent)('trash_modal_move_to_trash_error', {
                                            errorMessage,
                                        });
                                        createErrorNotice(errorMessage, {
                                            type: 'snackbar',
                                        });
                                    }
                                    setIsBusy(false);
                                    closeModal?.();
                                }, isBusy: isBusy, disabled: isBusy, __next40pxDefaultSize: true, children: shouldPermanentlyDelete
                                    ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Delete permanently', 'woocommerce')
                                    : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Move to trash', 'woocommerce') })] })] }));
        },
    };
    return trashEmailPost;
};
/**
 * Delete action for PostWithPermissions.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTrashEmailPostAction);


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/more-menu/more-menu.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/more-menu/more-menu.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoreMenu: () => (/* binding */ MoreMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _private_apis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../private-apis */ "./node_modules/@woocommerce/email-editor/build-module/private-apis/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const MoreMenu = () => {
    const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useViewportMatch)('large');
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: isLargeViewport && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_private_apis__WEBPACK_IMPORTED_MODULE_5__.ViewMoreMenuGroup, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__.PreferenceToggleMenuItem, { scope: _store__WEBPACK_IMPORTED_MODULE_6__.storeName, name: "fullscreenMode", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fullscreen mode', 'woocommerce'), info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show and hide the admin user interface', 'woocommerce'), messageActivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fullscreen mode activated.', 'woocommerce'), messageDeactivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fullscreen mode deactivated.', 'woocommerce'), shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__.displayShortcut.secondary('f') }) })) }));
};


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/notices/notices.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/notices/notices.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorNotices: () => (/* binding */ EditorNotices)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _validation_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation-notices */ "./node_modules/@woocommerce/email-editor/build-module/components/notices/validation-notices.js");
/* harmony import */ var _snackbars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snackbars */ "./node_modules/@woocommerce/email-editor/build-module/components/notices/snackbars.js");
/* harmony import */ var _hacks_notices_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hacks/notices-slot */ "./node_modules/@woocommerce/email-editor/build-module/hacks/notices-slot.js");

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



// See: https://github.com/WordPress/gutenberg/blob/5be0ec4153c3adf9f0f2513239f4f7a358ba7948/packages/editor/src/components/editor-notices/index.js
function EditorNotices() {
    const { notices } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)((select) => ({
        notices: select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store).getNotices('email-editor'),
    }), []);
    const { removeNotice } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store);
    const dismissibleNotices = notices.filter(({ isDismissible, type }) => isDismissible && type === 'default');
    const nonDismissibleNotices = notices.filter(({ isDismissible, type }) => !isDismissible && type === 'default');
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_hacks_notices_slot__WEBPACK_IMPORTED_MODULE_4__.NoticesSlot, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.NoticeList, { notices: nonDismissibleNotices, className: "components-editor-notices__pinned" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.NoticeList, { notices: dismissibleNotices, className: "components-editor-notices__dismissible", onRemove: (id) => removeNotice(id, 'email-editor') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_validation_notices__WEBPACK_IMPORTED_MODULE_5__.ValidationNotices, {})] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_snackbars__WEBPACK_IMPORTED_MODULE_6__.EditorSnackbars, { context: "global" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_snackbars__WEBPACK_IMPORTED_MODULE_6__.EditorSnackbars, { context: "email-editor" })] }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/notices/snackbars.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/notices/snackbars.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorSnackbars: () => (/* binding */ EditorSnackbars)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);

/**
 * External dependencies
 */





// See: https://github.com/WordPress/gutenberg/blob/2788a9cf8b8149be3ee52dd15ce91fa55815f36a/packages/editor/src/components/editor-snackbars/index.js
function EditorSnackbars({ context = 'email-editor' }) {
    const { notices } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)((select) => ({
        notices: select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store).getNotices(context),
    }), [context]);
    // Some global notices are not suitable for the email editor context
    // This map allows us to change the content of the notice
    const globalNoticeChangeMap = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        return {
            'site-editor-save-success': {
                content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email design updated.', 'woocommerce'),
                removeActions: true,
            },
            'editor-save': {
                content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email saved.', 'woocommerce'),
                removeActions: false,
                contentCheck: (notice) => {
                    // eslint-disable-next-line @wordpress/i18n-text-domain
                    return notice.content.includes((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Post updated.')); // It is intentionally without domain to match core translation
                },
            },
        };
    }, []);
    const { removeNotice } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store);
    const snackbarNotices = notices
        .filter(({ type }) => type === 'snackbar')
        .map((notice) => {
        if (!globalNoticeChangeMap[notice.id]) {
            return notice;
        }
        if (globalNoticeChangeMap[notice.id].contentCheck &&
            !globalNoticeChangeMap[notice.id].contentCheck(notice)) {
            return notice;
        }
        return {
            ...notice,
            content: globalNoticeChangeMap[notice.id].content,
            spokenMessage: globalNoticeChangeMap[notice.id].content,
            actions: globalNoticeChangeMap[notice.id].removeActions
                ? []
                : notice.actions,
        };
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SnackbarList, { notices: snackbarNotices, className: "components-editor-notices__snackbar", onRemove: (id) => removeNotice(id, context) }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/notices/validation-notices.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/notices/validation-notices.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationNotices: () => (/* binding */ ValidationNotices)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-validation-notices.js");

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

function ValidationNotices() {
    const { notices } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useValidationNotices)();
    if (notices.length === 0) {
        return null;
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, { status: "error", className: "woocommerce-email-editor-validation-errors components-editor-notices__pinned", isDismissible: false, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fix errors to continue:', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { children: notices.map(({ id, content, actions }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: [content, actions.length > 0
                                ? actions.map(({ label, onClick }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, { onClick: onClick, variant: "link", children: label }, label)))
                                : null] }, id))) })] }) }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/category-menu.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/category-menu.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryMenu: () => (/* binding */ CategoryMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies
 */



const CategoryMenu = ({ groupedTags, activeCategory, onCategorySelect, }) => {
    const getMenuItemClass = (category) => category === activeCategory
        ? 'woocommerce-personalization-tags-modal-menu-item-active'
        : '';
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, { className: "woocommerce-personalization-tags-modal-menu", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, { onClick: () => onCategorySelect(null), className: getMenuItemClass(null), children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('All', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "woocommerce-personalization-tags-modal-menu-separator", "aria-hidden": "true", role: "presentation", "data-testid": "woocommerce-personalization-tags-modal-menu-separator" }), Object.keys(groupedTags).map((category, index, array) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, { onClick: () => onCategorySelect(category), className: getMenuItemClass(category), children: category }), index < array.length - 1 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "woocommerce-personalization-tags-modal-menu-separator", "aria-hidden": "true", role: "presentation", "data-testid": "woocommerce-personalization-tags-modal-menu-separator" }))] }, category)))] }));
};



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/category-section.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/category-section.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategorySection: () => (/* binding */ CategorySection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);

/**
 * External dependencies
 */




const CategorySection = ({ groupedTags, activeCategory, onInsert, canInsertLink, closeCallback, openLinkModal, }) => {
    const { updateBlockAttributes } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
    const selectedBlockId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)((select) => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store).getSelectedBlockClientId());
    const selectedBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)((select) => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store).getBlock(selectedBlockId));
    const canSetURL = ['core/button'].includes(selectedBlock?.name);
    const categoriesToRender = activeCategory === null
        ? Object.entries(groupedTags) // Render all categories
        : [[activeCategory, groupedTags[activeCategory] || []]]; // Render only one selected category
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: categoriesToRender.map(([category, items]) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "woocommerce-personalization-tags-modal-category", children: category }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "woocommerce-personalization-tags-modal-category-group", children: items.map((item) => {
                        // Detects if the personalization tag is expected to return a URL by checking the token name,
                        // since personalization tags lack explicit return type definitions.
                        const isURLTag = /\burl\b/.test(item.token);
                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "woocommerce-personalization-tags-modal-category-group-item", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "woocommerce-personalization-tags-modal-item-text", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: item.name }), item.valueToInsert] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                    }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "link", onClick: () => {
                                                if (onInsert) {
                                                    onInsert(item.valueToInsert, false);
                                                }
                                            }, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Insert', 'woocommerce') }), canSetURL && isURLTag && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "link", onClick: () => {
                                                updateBlockAttributes(selectedBlockId, {
                                                    url: item.valueToInsert,
                                                });
                                                closeCallback();
                                            }, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Set as URL', 'woocommerce') })), category ===
                                            (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link', 'woocommerce') &&
                                            canInsertLink && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "link", onClick: () => {
                                                    closeCallback();
                                                    openLinkModal(item);
                                                }, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Insert as link', 'woocommerce') }) }))] })] }, item.token));
                    }) })] }, category))) }));
};



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/link-modal.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/link-modal.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkModal: () => (/* binding */ LinkModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies
 */



const LinkModal = ({ onInsert, isOpened, closeCallback, tag }) => {
    const [linkText, setLinkText] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link', 'woocommerce'));
    if (!isOpened) {
        return null;
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, { size: "small", title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Insert Link', 'woocommerce'), onRequestClose: closeCallback, className: "woocommerce-personalization-tags-modal", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Text', 'woocommerce'), value: linkText, onChange: setLinkText }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, { isPrimary: true, onClick: () => {
                    if (onInsert) {
                        onInsert(tag.token, linkText);
                    }
                }, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Insert', 'woocommerce') })] }));
};



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/personalization-tags-link-popover.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/personalization-tags-link-popover.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalizationTagsLinkPopover: () => (/* binding */ PersonalizationTagsLinkPopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */

const PersonalizationTagsLinkPopover = ({ contentRef, onUpdate, }) => {
    const [isPopoverVisible, setIsPopoverVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [linkElement, setLinkElement] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [linkText, setLinkText] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [linkHref, setLinkHref] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const list = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)((select) => select(_store__WEBPACK_IMPORTED_MODULE_5__.storeName).getPersonalizationTagsList(), []);
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!contentRef || !contentRef.current) {
            return undefined;
        }
        const container = contentRef.current;
        // Handle clicks within the referenced container
        const handleContainerClick = (event) => {
            const target = event.target;
            const element = target.closest('a[data-link-href]');
            if (element) {
                // Remove brackets from the text content for better user experience
                setLinkElement(element);
                setLinkHref(element.getAttribute('data-link-href') || '');
                setLinkText(element.textContent || '');
                setIsPopoverVisible(true);
            }
        };
        // Add the event listener to the container
        container.addEventListener('click', handleContainerClick);
        // Cleanup function to remove the event listener on unmount
        return () => {
            container.removeEventListener('click', handleContainerClick);
        };
    }, [contentRef]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: isPopoverVisible && linkElement && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Popover, { position: "bottom left", onClose: () => setIsPopoverVisible(false), anchor: linkElement, className: "woocommerce-personalization-tag-popover", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "woocommerce-personalization-tag-popover-content", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Text', 'woocommerce'), value: linkText, onChange: (value) => setLinkText(value), __nextHasNoMarginBottom // To avoid warning about deprecation in console
                        : true, __next40pxDefaultSize: true, autoComplete: "off" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, { __next40pxDefaultSize: true, __nextHasNoMarginBottom: true, label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link tag', 'woocommerce'), value: linkHref, onChange: (value) => {
                            setLinkHref(value);
                        }, options: list
                            .filter((tag) => {
                            return (tag.category ===
                                (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link', 'woocommerce'));
                        })
                            .map((tag) => {
                            return {
                                label: tag.name,
                                value: tag.token,
                            };
                        }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "woocommerce-personalization-tag-popover-content-buttons", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, { isTertiary: true, onClick: () => {
                                    setIsPopoverVisible(false);
                                }, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cancel', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, { isPrimary: true, onClick: () => {
                                    setIsPopoverVisible(false);
                                    onUpdate(linkElement, linkHref, linkText);
                                }, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Update link', 'woocommerce') })] })] }) })) }));
};



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/personalization-tags-modal.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/personalization-tags-modal.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalizationTagsModal: () => (/* binding */ PersonalizationTagsModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _category_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category-menu */ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/category-menu.js");
/* harmony import */ var _category_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category-section */ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/category-section.js");
/* harmony import */ var _link_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./link-modal */ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/link-modal.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */





const PersonalizationTagsModal = ({ onInsert, isOpened, closeCallback, canInsertLink = false, openedBy = '', }) => {
    const [activeCategory, setActiveCategory] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [searchQuery, setSearchQuery] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
    const [selectedTag, setSelectedTag] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [isLinkModalOpened, setIsLinkModalOpened] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const list = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)((select) => select(_store__WEBPACK_IMPORTED_MODULE_5__.storeName).getPersonalizationTagsList(), []);
    if (isLinkModalOpened) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_link_modal__WEBPACK_IMPORTED_MODULE_6__.LinkModal, { onInsert: (tag, linkText) => {
                onInsert(tag, linkText);
                setIsLinkModalOpened(false);
            }, isOpened: isLinkModalOpened, closeCallback: () => setIsLinkModalOpened(false), tag: selectedTag }));
    }
    if (!isOpened) {
        return null;
    }
    (0,_events__WEBPACK_IMPORTED_MODULE_7__.recordEventOnce)('personalization_tags_modal_opened', { openedBy });
    const groupedTags = list.reduce((groups, item) => {
        const { category, name, token } = item;
        if (!searchQuery ||
            name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            token.toLowerCase().includes(searchQuery.toLowerCase())) {
            if (!groups[category]) {
                groups[category] = [];
            }
            groups[category].push(item);
        }
        return groups;
    }, {});
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, { size: "medium", title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Personalization Tags', 'woocommerce'), onRequestClose: () => {
            closeCallback();
            (0,_events__WEBPACK_IMPORTED_MODULE_7__.recordEvent)('personalization_tags_modal_closed', {
                openedBy,
            });
        }, className: "woocommerce-personalization-tags-modal", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Insert personalization tags to dynamically fill in information and personalize your emails.', 'woocommerce'), ' ', (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, { href: "https://kb.mailpoet.com/article/435-a-guide-to-personalisation-tags-for-tailored-newsletters#list", onClick: () => (0,_events__WEBPACK_IMPORTED_MODULE_7__.recordEvent)('personalization_tags_modal_learn_more_link_clicked', { openedBy }), children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Learn more', 'woocommerce') })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SearchControl, { onChange: (theSearchQuery) => {
                    setSearchQuery(theSearchQuery);
                    (0,_events__WEBPACK_IMPORTED_MODULE_7__.recordEventOnce)('personalization_tags_modal_search_control_input_updated', { openedBy });
                }, value: searchQuery }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_category_menu__WEBPACK_IMPORTED_MODULE_8__.CategoryMenu, { groupedTags: groupedTags, activeCategory: activeCategory, onCategorySelect: (category) => {
                    setActiveCategory(category);
                    (0,_events__WEBPACK_IMPORTED_MODULE_7__.recordEvent)('personalization_tags_modal_category_menu_clicked', {
                        category,
                        openedBy,
                    });
                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_category_section__WEBPACK_IMPORTED_MODULE_9__.CategorySection, { groupedTags: groupedTags, activeCategory: activeCategory, onInsert: (insertedTag) => {
                    onInsert(insertedTag);
                    (0,_events__WEBPACK_IMPORTED_MODULE_7__.recordEvent)('personalization_tags_modal_tag_insert_button_clicked', {
                        insertedTag,
                        activeCategory,
                        openedBy,
                    });
                }, closeCallback: closeCallback, canInsertLink: canInsertLink, openLinkModal: (tag) => {
                    setSelectedTag(tag);
                    setIsLinkModalOpened(true);
                } })] }));
};



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/personalization-tags-popover.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/personalization-tags-popover.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalizationTagsPopover: () => (/* binding */ PersonalizationTagsPopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies
 */



/**
 * Component to display a popover with a text control to update personalization tags.
 * The popover is displayed when a user clicks on a personalization tag in the editor.
 *
 * @param root0
 * @param root0.contentRef Reference to the container where the popover should be displayed
 * @param root0.onUpdate   Callback to update the personalization tag
 */
const PersonalizationTagsPopover = ({ contentRef, onUpdate, }) => {
    const [isPopoverVisible, setIsPopoverVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [anchor, setAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [updatedValue, setUpdatedValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [originalValue, setOriginalValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!contentRef || !contentRef.current) {
            return undefined;
        }
        const container = contentRef.current;
        // Handle clicks within the referenced container
        const handleContainerClick = (event) => {
            const target = event.target;
            const commentSpan = target.closest('span[data-rich-text-comment]');
            if (commentSpan) {
                // Remove brackets from the text content for better user experience
                const textContent = commentSpan.innerText.replace(/^\[|\]$/g, '');
                setOriginalValue(textContent);
                setUpdatedValue(textContent);
                setAnchor(commentSpan);
                setIsPopoverVisible(true);
            }
        };
        // Add the event listener to the container
        container.addEventListener('click', handleContainerClick);
        // Cleanup function to remove the event listener on unmount
        return () => {
            container.removeEventListener('click', handleContainerClick);
        };
    }, [contentRef]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: isPopoverVisible && anchor && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, { position: "bottom right", onClose: () => setIsPopoverVisible(false), anchor: anchor, className: "woocommerce-personalization-tag-popover", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "woocommerce-personalization-tag-popover-content", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Personalization Tag', 'woocommerce'), value: updatedValue, onChange: (value) => setUpdatedValue(value), __nextHasNoMarginBottom // To avoid warning about deprecation in console
                        : true, __next40pxDefaultSize: true }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "woocommerce-personalization-tag-popover-content-buttons", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, { isTertiary: true, onClick: () => {
                                    setIsPopoverVisible(false);
                                }, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cancel', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, { isPrimary: true, onClick: () => {
                                    onUpdate(originalValue, updatedValue);
                                    setIsPopoverVisible(false);
                                }, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Update', 'woocommerce') })] })] }) })) }));
};



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/rich-text-utils.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/rich-text-utils.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCursorPosition: () => (/* binding */ getCursorPosition),
/* harmony export */   replacePersonalizationTagsWithHTMLComments: () => (/* binding */ replacePersonalizationTagsWithHTMLComments)
/* harmony export */ });
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__);

function getChildElement(rootElement) {
    let currentElement = rootElement;
    while (currentElement && currentElement?.children?.length > 0) {
        // Traverse into the first child element
        currentElement = currentElement.children[0];
    }
    return currentElement;
}
function findReplacementIndex(element, replacements) {
    // Iterate over the replacements array
    for (const [index, replacement] of replacements.entries()) {
        if (!replacement) {
            continue;
        }
        const { attributes } = replacement;
        if (element.getAttribute('data-rich-text-comment') ===
            attributes['data-rich-text-comment']) {
            return index;
        }
    }
    return null; // Return null if no match is found
}
/**
 * Find the latest index of the format that matches the element.
 *
 * @param element
 * @param formats
 */
function findLatestFormatIndex(element, formats) {
    let latestFormatIndex = null;
    for (const [index, formatList] of formats.entries()) {
        if (!formatList) {
            continue;
        }
        // Check each format within the format list at the current index
        for (const format of formatList) {
            if (
            // @ts-expect-error attributes property is missing in build type for RichTextFormatList type
            format?.attributes &&
                element.tagName.toLowerCase() ===
                    // @ts-expect-error tagName property is missing in build type for RichTextFormatList type
                    format.tagName?.toLowerCase() &&
                element.getAttribute('data-link-href') ===
                    // @ts-expect-error attributes property is missing in build type for RichTextFormatList type
                    format?.attributes['data-link-href']) {
                latestFormatIndex = index;
            }
        }
    }
    return latestFormatIndex;
}
/**
 * Retrieves the cursor position within a RichText component.
 * Calculates the offset in plain text while accounting for HTML tags and comments.
 *
 * @param {React.RefObject<HTMLElement>} richTextRef - Reference to the RichText component.
 * @param {string}                       content     - The plain text content of the block.
 * @return {{ start: number, end: number } | null} - The cursor position as start and end offsets.
 */
const getCursorPosition = (richTextRef, content) => {
    const selection = richTextRef.current.ownerDocument.defaultView.getSelection();
    if (!selection.rangeCount) {
        return {
            start: 0,
            end: 0,
        };
    }
    const range = selection.getRangeAt(0);
    if (selection.anchorNode.previousSibling === null) {
        return {
            start: selection.anchorOffset,
            end: selection.anchorOffset + range.toString().length,
        };
    }
    const richTextValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.create)({ html: content });
    let previousSibling = selection.anchorNode.previousSibling;
    previousSibling = getChildElement(previousSibling);
    const formatIndex = findLatestFormatIndex(previousSibling, richTextValue.formats);
    if (formatIndex !== null) {
        return {
            start: formatIndex + selection.anchorOffset + 1, // We need to add 1 for the format length
            end: formatIndex + selection.anchorOffset + range.toString().length,
        };
    }
    const replacementIndex = findReplacementIndex(previousSibling, richTextValue.replacements);
    if (replacementIndex !== null) {
        return {
            start: replacementIndex + selection.anchorOffset + 1, // We need to add 1 for the replacement length
            end: replacementIndex +
                selection.anchorOffset +
                range.toString().length,
        };
    }
    // fallback for placing the value at the end of the rich text
    return {
        start: richTextValue.text.length,
        end: richTextValue.text.length + range.toString().length,
    };
};
/**
 * Replace registered personalization tags with HTML comments in content.
 *
 * @param content string The content to replace the tags in.
 * @param tags    PersonalizationTag[] The tags to replace in the content.
 */
const replacePersonalizationTagsWithHTMLComments = (content, tags) => {
    tags.forEach((tag) => {
        // Skip if the token is not in the content
        if (!content.includes(tag.token.slice(0, tag.token.length - 1))) {
            return;
        }
        // Match the token with optional attributes like [mailpoet/subscriber-firstname default="user"]
        const baseToken = tag.token
            .substring(1, tag.token.length - 1)
            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape base token and remove brackets
        const regex = new RegExp(`(?<!<!--)(?<!["'])\\[(${baseToken}(\\s[^\\]]*)?)\\](?!-->)`, // Match token not inside quotes (attributes)
        'g');
        content = content.replace(regex, (match) => {
            // Use the exact text inside the brackets for the replacement
            return `<!--${match}-->`;
        });
    });
    return content;
};



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/rich-text-with-button.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/rich-text-with-button.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RichTextWithButton: () => (/* binding */ RichTextWithButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _personalization_tags_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./personalization-tags-modal */ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/personalization-tags-modal.js");
/* harmony import */ var _rich_text_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rich-text-utils */ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/rich-text-utils.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _personalization_tags_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./personalization-tags-popover */ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/personalization-tags-popover.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");







/**
 * Internal dependencies
 */





function RichTextWithButton({ label, labelSuffix, help, placeholder, attributeName, attributeValue, updateProperty = () => { }, }) {
    const [selectionRange, setSelectionRange] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [isModalOpened, setIsModalOpened] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const list = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)((select) => select(_store__WEBPACK_IMPORTED_MODULE_7__.storeName).getPersonalizationTagsList(), []);
    const richTextRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const handleInsertPersonalizationTag = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)((tagName, currentValue, currentSelectionRange) => {
        // Ensure selection range is within bounds
        const start = currentSelectionRange?.start ?? currentValue.length;
        const end = currentSelectionRange?.end ?? currentValue.length;
        let richTextValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.create)({ html: currentValue });
        richTextValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.insert)(richTextValue, (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.create)({ html: `<!--${tagName}-->` }), start, end);
        const updatedValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.toHTMLString)({ value: richTextValue });
        // Update the corresponding property
        updateProperty(attributeName, updatedValue);
        setSelectionRange(null);
    }, [attributeName, updateProperty]);
    const finalLabel = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: label }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, { className: "woocommerce-settings-panel-personalization-tags-button", icon: "shortcode", title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Personalization Tags', 'woocommerce'), onClick: () => {
                    setIsModalOpened(true);
                    (0,_events__WEBPACK_IMPORTED_MODULE_8__.recordEvent)('rich_text_with_button_personalization_tags_shortcode_icon_clicked', {
                        attributeName,
                        label,
                    });
                } }), labelSuffix] }));
    if (!attributeName) {
        return null;
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, { id: "" // See https://github.com/mailpoet/mailpoet/pull/6089#discussion_r1952126850 to understand why the ID is empty
        , label: finalLabel, className: `woocommerce-settings-panel-${attributeName}-text`, help: help, __nextHasNoMarginBottom // To avoid warning about deprecation in console
        : true, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_personalization_tags_modal__WEBPACK_IMPORTED_MODULE_9__.PersonalizationTagsModal, { isOpened: isModalOpened, onInsert: (value) => {
                    handleInsertPersonalizationTag(value, attributeValue ?? '', selectionRange);
                    setIsModalOpened(false);
                    (0,_events__WEBPACK_IMPORTED_MODULE_8__.recordEvent)('rich_text_with_button_personalization_tags_inserted', {
                        attributeName,
                        value,
                    });
                }, closeCallback: () => setIsModalOpened(false), openedBy: "RichTextWithButton-BaseControl" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_personalization_tags_popover__WEBPACK_IMPORTED_MODULE_10__.PersonalizationTagsPopover, { contentRef: richTextRef, onUpdate: (originalTag, updatedTag) => {
                    const currentValue = attributeValue ?? '';
                    // When we update the tag, we need to add brackets to the tag, because the popover removes them
                    const updatedContent = currentValue.replace(`<!--[${originalTag}]-->`, `<!--[${updatedTag}]-->`);
                    updateProperty(attributeName, updatedContent);
                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, { ref: richTextRef, className: "woocommerce-settings-panel-richtext", placeholder: placeholder, onFocus: () => {
                    setSelectionRange((0,_rich_text_utils__WEBPACK_IMPORTED_MODULE_11__.getCursorPosition)(richTextRef, attributeValue ?? ''));
                }, onKeyUp: () => {
                    setSelectionRange((0,_rich_text_utils__WEBPACK_IMPORTED_MODULE_11__.getCursorPosition)(richTextRef, attributeValue ?? ''));
                }, onClick: () => {
                    setSelectionRange((0,_rich_text_utils__WEBPACK_IMPORTED_MODULE_11__.getCursorPosition)(richTextRef, attributeValue ?? ''));
                }, onChange: (value) => {
                    value = (0,_rich_text_utils__WEBPACK_IMPORTED_MODULE_11__.replacePersonalizationTagsWithHTMLComments)(value ?? '', list);
                    updateProperty(attributeName, value);
                    (0,_events__WEBPACK_IMPORTED_MODULE_8__.recordEventOnce)('rich_text_with_button_input_field_updated', {
                        attributeName,
                    });
                }, value: attributeValue ?? '', "data-automation-id": `email_${attributeName}` })] }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/preview/send-preview-email.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/preview/send-preview-email.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SendPreviewEmail: () => (/* binding */ SendPreviewEmail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/types.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */








/**
 * Internal dependencies
 */


function RawSendPreviewEmail() {
    const sendToRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const { requestSendingNewsletterPreview, togglePreviewModal, updateSendPreviewEmail, } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_8__.storeName);
    const { toEmail: previewToEmail, isSendingPreviewEmail, sendingPreviewStatus, isModalOpened, errorMessage, } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)((select) => select(_store__WEBPACK_IMPORTED_MODULE_8__.storeName).getPreviewState(), []);
    const handleSendPreviewEmail = () => {
        void requestSendingNewsletterPreview(previewToEmail);
    };
    const sendingMethodConfigurationLink = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__.applyFilters)('woocommerce_email_editor_check_sending_method_configuration_link', `https://www.mailpoet.com/blog/mailpoet-smtp-plugin/?utm_source=woocommerce_email_editor&utm_medium=plugin&utm_source_platform=${_store__WEBPACK_IMPORTED_MODULE_8__.editorCurrentPostType}`), []);
    const closeCallback = () => {
        (0,_events__WEBPACK_IMPORTED_MODULE_9__.recordEvent)('send_preview_email_modal_closed');
        void togglePreviewModal(false);
    };
    // We use this effect to focus on the input field when the modal is opened
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
        if (isModalOpened) {
            sendToRef.current?.focus();
            (0,_events__WEBPACK_IMPORTED_MODULE_9__.recordEvent)('send_preview_email_modal_opened');
        }
    }, [isModalOpened]);
    if (!isModalOpened) {
        return null;
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, { className: "woocommerce-send-preview-email", title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Send a test email', 'woocommerce'), onRequestClose: closeCallback, focusOnMount: false, children: [sendingPreviewStatus === _store__WEBPACK_IMPORTED_MODULE_10__.SendingPreviewStatus.ERROR ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "woocommerce-send-preview-modal-notice-error", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Sorry, we were unable to send this email.', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: errorMessage &&
                            (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(
                            // translators: %s is an error message.
                            (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Error: %s', 'woocommerce'), errorMessage) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: sendingMethodConfigurationLink &&
                                    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Please check your <link>sending method configuration</link> with your hosting provider.', 'woocommerce'), {
                                        link: (
                                        // eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/control-has-associated-label
                                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: sendingMethodConfigurationLink, target: "_blank", rel: "noopener noreferrer", onClick: () => (0,_events__WEBPACK_IMPORTED_MODULE_9__.recordEvent)('send_preview_email_modal_check_sending_method_configuration_link_clicked') })),
                                    }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Or, sign up for MailPoet Sending Service to easily send emails. <link>Sign up for free</link>', 'woocommerce'), {
                                    link: (
                                    // eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/control-has-associated-label
                                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: `https://account.mailpoet.com/?s=1&g=1&utm_source=woocommerce_email_editor&utm_medium=plugin&utm_source_platform=${_store__WEBPACK_IMPORTED_MODULE_8__.editorCurrentPostType}`, target: "_blank", rel: "noopener noreferrer", onClick: () => (0,_events__WEBPACK_IMPORTED_MODULE_9__.recordEvent)('send_preview_email_modal_sign_up_for_mailpoet_sending_service_link_clicked') }, "sign-up-for-free")),
                                }) })] })] })) : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Send yourself a test email to test how your email would look like in different email apps.', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Send to', 'woocommerce'), onChange: (email) => {
                    void updateSendPreviewEmail(email);
                    (0,_events__WEBPACK_IMPORTED_MODULE_9__.recordEventOnce)('send_preview_email_modal_send_to_field_updated');
                }, onKeyDown: (event) => {
                    const { keyCode } = event;
                    if (keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.ENTER) {
                        event.preventDefault();
                        handleSendPreviewEmail();
                        (0,_events__WEBPACK_IMPORTED_MODULE_9__.recordEvent)('send_preview_email_modal_send_to_field_key_code_enter');
                    }
                }, className: "woocommerce-send-preview-email__send-to-field", value: previewToEmail, type: "email", ref: sendToRef, required: true, __next40pxDefaultSize: true, __nextHasNoMarginBottom: true }), sendingPreviewStatus === _store__WEBPACK_IMPORTED_MODULE_10__.SendingPreviewStatus.SUCCESS ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { className: "woocommerce-send-preview-modal-notice-success", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"], { icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"], style: { fill: '#4AB866' } }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Test email sent successfully!', 'woocommerce')] })) : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "woocommerce-send-preview-modal-footer", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "tertiary", onClick: () => {
                            (0,_events__WEBPACK_IMPORTED_MODULE_9__.recordEvent)('send_preview_email_modal_close_button_clicked');
                            closeCallback();
                        }, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cancel', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "primary", onClick: () => {
                            handleSendPreviewEmail();
                            (0,_events__WEBPACK_IMPORTED_MODULE_9__.recordEvent)('send_preview_email_modal_send_test_email_button_clicked');
                        }, disabled: isSendingPreviewEmail || !(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.isEmail)(previewToEmail), children: isSendingPreviewEmail
                            ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Sending…', 'woocommerce')
                            : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Send test email', 'woocommerce') })] })] }));
}
const SendPreviewEmail = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.memo)(RawSendPreviewEmail);


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/preview/send-preview.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/preview/send-preview.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SendPreview: () => (/* binding */ SendPreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/constants */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _send_preview_email__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./send-preview-email */ "./node_modules/@woocommerce/email-editor/build-module/components/preview/send-preview-email.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */



// eslint-disable-next-line @woocommerce/dependency-group

/**
 * Internal dependencies
 */



function SendPreview() {
    const { togglePreviewModal } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store_constants__WEBPACK_IMPORTED_MODULE_4__.storeName);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PluginPreviewMenuItem, { icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"], onClick: () => {
                    (0,_events__WEBPACK_IMPORTED_MODULE_6__.recordEvent)('header_preview_dropdown_send_test_email_selected');
                    togglePreviewModal(true);
                }, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Send a test email', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_send_preview_email__WEBPACK_IMPORTED_MODULE_7__.SendPreviewEmail, {})] }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/sidebar/block-compatibility-warnings.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/sidebar/block-compatibility-warnings.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockCompatibilityWarnings: () => (/* binding */ BlockCompatibilityWarnings),
/* harmony export */   hasBackgroundImageSupport: () => (/* binding */ hasBackgroundImageSupport)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);

/**
 * External dependencies
 */




const hasBackgroundImageSupport = (nameOrType) => {
    const backgroundSupport = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getBlockSupport)(nameOrType, // @ts-expect-error not yet supported in the types
    'background');
    return backgroundSupport && backgroundSupport?.backgroundImage !== false;
};
function BlockCompatibilityWarnings() {
    // Select the currently selected block
    const selectedBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)((sel) => sel('core/block-editor').getSelectedBlock(), []);
    // Check if the selected block has enabled border configuration
    const hasBorderSupport = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.hasBlockSupport)(selectedBlock?.name, 
    // @ts-expect-error Border is not yet supported in the types
    'border', false) ||
        // We can remove the check for __experimentalBorder after we support WordPress 6.8+.
        (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.hasBlockSupport)(selectedBlock?.name, 
        // @ts-expect-error Border is not yet supported in the types
        '__experimentalBorder', false);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [hasBorderSupport && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Fill, { name: "InspectorControlsBorder", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, { className: "woocommerce-grid-full-width", status: "warning", isDismissible: false, children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Border display may vary or be unsupported in some email clients.', 'woocommerce'), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Units other than pixels (px) lack support in old email clients.', 'woocommerce')] }) })), hasBackgroundImageSupport(selectedBlock?.name) && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Fill, { name: "InspectorControlsBackground", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, { className: "woocommerce-grid-full-width", status: "warning", isDismissible: false, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select a background color for email clients that do not support background images.', 'woocommerce') }) }))] }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/sidebar/edit-template-modal.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/sidebar/edit-template-modal.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditTemplateModal: () => (/* binding */ EditTemplateModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


function EditTemplateModal({ close }) {
    (0,_events__WEBPACK_IMPORTED_MODULE_5__.recordEventOnce)('edit_template_modal_opened');
    const { onNavigateToEntityRecord, template } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)((sel) => {
        const { getEditorSettings } = sel(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.store);
        const editorSettings = getEditorSettings();
        return {
            onNavigateToEntityRecord: 
            // @ts-expect-error onNavigateToEntityRecord type is not defined
            editorSettings.onNavigateToEntityRecord,
            template: sel(_store__WEBPACK_IMPORTED_MODULE_6__.storeName).getCurrentTemplate(),
        };
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, { size: "medium", onRequestClose: close, __experimentalHideHeader: true, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This template is used by multiple emails. Any changes made would affect other emails on the site. Are you sure you want to edit the template?', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, { justify: 'end', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "tertiary", onClick: () => {
                                (0,_events__WEBPACK_IMPORTED_MODULE_5__.recordEvent)('edit_template_modal_cancel_button_clicked');
                                close();
                            }, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel', 'woocommerce') }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "primary", onClick: () => {
                                (0,_events__WEBPACK_IMPORTED_MODULE_5__.recordEvent)('edit_template_modal_continue_button_clicked', { templateId: template.id });
                                onNavigateToEntityRecord({
                                    postId: template.id,
                                    postType: 'wp_template',
                                });
                            }, disabled: !template.id, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit template', 'woocommerce') }) })] })] }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/sidebar/settings-panel.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/sidebar/settings-panel.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPanel: () => (/* binding */ SettingsPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _personalization_tags_rich_text_with_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../personalization-tags/rich-text-with-button */ "./node_modules/@woocommerce/email-editor/build-module/components/personalization-tags/rich-text-with-button.js");
/* harmony import */ var _template_selection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template-selection */ "./node_modules/@woocommerce/email-editor/build-module/components/sidebar/template-selection.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */



// eslint-disable-next-line @woocommerce/dependency-group

/**
 * Internal dependencies
 */



const tracking = {
    recordEvent: _events__WEBPACK_IMPORTED_MODULE_5__.recordEvent,
    recordEventOnce: _events__WEBPACK_IMPORTED_MODULE_5__.recordEventOnce,
    debouncedRecordEvent: _events__WEBPACK_IMPORTED_MODULE_5__.debouncedRecordEvent,
};
function SettingsPanel() {
    const SidebarExtensionComponent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('woocommerce_email_editor_setting_sidebar_extension_component', _personalization_tags_rich_text_with_button__WEBPACK_IMPORTED_MODULE_6__.RichTextWithButton, tracking), []);
    const EmailStatusComponent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('woocommerce_email_editor_setting_sidebar_email_status_component', () => null, tracking), []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.PluginDocumentSettingPanel, { name: "email-settings-panel", title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'woocommerce'), className: "woocommerce-email-editor__settings-panel", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EmailStatusComponent, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_template_selection__WEBPACK_IMPORTED_MODULE_7__.TemplateSelection, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.ErrorBoundary, { canCopyContent: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SidebarExtensionComponent, {}) })] }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/sidebar/template-selection.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/sidebar/template-selection.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateSelection: () => (/* binding */ TemplateSelection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _edit_template_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-template-modal */ "./node_modules/@woocommerce/email-editor/build-module/components/sidebar/edit-template-modal.js");
/* harmony import */ var _template_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../template-select */ "./node_modules/@woocommerce/email-editor/build-module/components/template-select/select-modal.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-preview-templates.js");

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */





function TemplateSelection() {
    const { template, currentEmailContent, canUpdateTemplates } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)((select) => {
        return {
            template: select(_store__WEBPACK_IMPORTED_MODULE_5__.storeName).getCurrentTemplate(),
            currentEmailContent: select(_store__WEBPACK_IMPORTED_MODULE_5__.storeName).getEditedEmailContent(),
            canUpdateTemplates: select(_store__WEBPACK_IMPORTED_MODULE_5__.storeName).canUserEditTemplates(),
        };
    }, []);
    const [templates] = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.usePreviewTemplates)('swap');
    const [isEditTemplateModalOpen, setEditTemplateModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [isSelectTemplateModalOpen, setSelectTemplateModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [template && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, { justify: 'start', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, { className: "editor-post-panel__row-label", children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, { children: [!(templates?.length > 1 || canUpdateTemplates) && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: template?.title }), (templates?.length > 1 ||
                                    canUpdateTemplates) && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, { icon: null, text: template?.title, toggleProps: {
                                        variant: 'tertiary',
                                    }, label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template actions', 'woocommerce'), onToggle: (isOpen) => (0,_events__WEBPACK_IMPORTED_MODULE_7__.recordEvent)('sidebar_template_actions_clicked', {
                                        currentTemplate: template?.title,
                                        isOpen,
                                    }), children: ({ onClose }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [canUpdateTemplates && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, { onClick: () => {
                                                    (0,_events__WEBPACK_IMPORTED_MODULE_7__.recordEvent)('sidebar_template_actions_edit_template_clicked');
                                                    setEditTemplateModalOpen(true);
                                                    onClose();
                                                }, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Edit template', 'woocommerce') })), templates?.length > 1 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, { onClick: () => {
                                                    (0,_events__WEBPACK_IMPORTED_MODULE_7__.recordEvent)('sidebar_template_actions_swap_template_clicked');
                                                    setSelectTemplateModalOpen(true);
                                                    onClose();
                                                }, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Swap template', 'woocommerce') }))] })) }))] })] }) })), isEditTemplateModalOpen && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_edit_template_modal__WEBPACK_IMPORTED_MODULE_8__.EditTemplateModal, { close: () => {
                    (0,_events__WEBPACK_IMPORTED_MODULE_7__.recordEvent)('edit_template_modal_closed');
                    return setEditTemplateModalOpen(false);
                } })), isSelectTemplateModalOpen && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_template_select__WEBPACK_IMPORTED_MODULE_9__.SelectTemplateModal, { onSelectCallback: () => setSelectTemplateModalOpen(false), closeCallback: () => setSelectTemplateModalOpen(false), previewContent: currentEmailContent }))] }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/sidebar/template-settings-panel.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/sidebar/template-settings-panel.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateSettingsPanel: () => (/* binding */ TemplateSettingsPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */


// eslint-disable-next-line @woocommerce/dependency-group

/**
 * Internal dependencies
 */

const tracking = {
    recordEvent: _events__WEBPACK_IMPORTED_MODULE_4__.recordEvent,
    recordEventOnce: _events__WEBPACK_IMPORTED_MODULE_4__.recordEventOnce,
    debouncedRecordEvent: _events__WEBPACK_IMPORTED_MODULE_4__.debouncedRecordEvent,
};
function TemplateSettingsPanel() {
    // Allow plugins to add custom template sections
    const templateSections = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('woocommerce_email_editor_template_sections', [], tracking);
    if (templateSections.length === 0) {
        return null;
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PluginDocumentSettingPanel, { name: "template-settings-panel", title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'woocommerce'), className: "woocommerce-email-editor__settings-panel", children: templateSections.map((section) => (
        // @ts-expect-error Type for ErrorBoundary is outdated in @types/wordpress__editor
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.ErrorBoundary, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: section.render() }, section.id) }, `error-boundary-${section.id}`))) }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/navigator.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/navigator.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Navigator: () => (/* binding */ Navigator)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This is a temporary solution we can drop after we stop supporting WordPress 6.7.
 * Navigator was added in WordPress 6.8.
 */
/**
 * External dependencies
 */

const Navigator = _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Navigator || _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalNavigatorProvider;
if (!_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Navigator) {
    Navigator.Screen = _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalNavigatorScreen;
    Navigator.BackButton = _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalNavigatorBackButton;
}



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/panels/dimensions-panel.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/panels/dimensions-panel.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DimensionsPanel: () => (/* binding */ DimensionsPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-email-styles.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */



// eslint-disable-next-line

/**
 * Internal dependencies
 */


function DimensionsPanel() {
    const [availableUnits] = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useSettings)('spacing.units');
    const units = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUseCustomUnits)({
        availableUnits,
    });
    const { styles, defaultStyles, updateStyleProp } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useEmailStyles)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToolsPanel, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dimensions', 'woocommerce'), resetAll: () => {
            updateStyleProp(['spacing'], defaultStyles.spacing);
            (0,_events__WEBPACK_IMPORTED_MODULE_6__.recordEvent)('styles_sidebar_screen_layout_dimensions_reset_all_selected');
        }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToolsPanelItem, { isShownByDefault: true, hasValue: () => !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(styles.spacing.padding, defaultStyles.spacing.padding), label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'woocommerce'), onDeselect: () => {
                    updateStyleProp(['spacing', 'padding'], defaultStyles.spacing.padding);
                    (0,_events__WEBPACK_IMPORTED_MODULE_6__.recordEvent)('styles_sidebar_screen_layout_dimensions_padding_reset_clicked');
                }, className: "tools-panel-item-spacing", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalSpacingSizesControl, { allowReset: true, values: styles.spacing.padding, onChange: (value) => {
                        updateStyleProp(['spacing', 'padding'], value);
                        (0,_events__WEBPACK_IMPORTED_MODULE_6__.debouncedRecordEvent)('styles_sidebar_screen_layout_dimensions_padding_updated', { value });
                    }, label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'woocommerce'), sides: [
                        'horizontal',
                        'vertical',
                        'top',
                        'left',
                        'right',
                        'bottom',
                    ], units: units }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToolsPanelItem, { isShownByDefault: true, label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block spacing', 'woocommerce'), hasValue: () => styles.spacing.blockGap !== defaultStyles.spacing.blockGap, onDeselect: () => {
                    updateStyleProp(['spacing', 'blockGap'], defaultStyles.spacing.blockGap);
                    (0,_events__WEBPACK_IMPORTED_MODULE_6__.recordEvent)('styles_sidebar_screen_layout_dimensions_block_spacing_reset_clicked');
                }, className: "tools-panel-item-spacing", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalSpacingSizesControl, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block spacing', 'woocommerce'), min: 0, onChange: (value) => {
                        updateStyleProp(['spacing', 'blockGap'], value.top);
                        (0,_events__WEBPACK_IMPORTED_MODULE_6__.debouncedRecordEvent)('styles_sidebar_screen_layout_dimensions_block_spacing_updated', { value });
                    }, showSideInLabel: false, sides: ['top'], values: { top: styles.spacing.blockGap }, allowReset: true }) })] }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/panels/typography-element-panel.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/panels/typography-element-panel.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_CONTROLS: () => (/* binding */ DEFAULT_CONTROLS),
/* harmony export */   TypographyElementPanel: () => (/* binding */ TypographyElementPanel),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-email-styles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/utils.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */



// eslint-disable-next-line

/**
 * Internal dependencies
 */



const DEFAULT_CONTROLS = {
    fontFamily: true,
    fontSize: true,
    fontAppearance: true,
    lineHeight: true,
    letterSpacing: false,
    textTransform: false,
    textDecoration: false,
    writingMode: true,
    textColumns: true,
};
function TypographyElementPanel({ element, headingLevel, defaultControls = DEFAULT_CONTROLS, }) {
    const [fontSizes, blockLevelFontFamilies] = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useSettings)('typography.fontSizes', 'typography.fontFamilies');
    // Ref: https://github.com/WordPress/gutenberg/issues/59778
    const fontFamilies = blockLevelFontFamilies?.default || [];
    const { styles, defaultStyles, updateStyleProp } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useEmailStyles)();
    const elementStyles = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getElementStyles)(styles, element, headingLevel);
    const defaultElementStyles = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getElementStyles)(defaultStyles, element, headingLevel);
    const { fontFamily, fontSize, fontStyle, fontWeight, lineHeight, letterSpacing, textDecoration, textTransform, } = elementStyles.typography;
    const { fontFamily: defaultFontFamily, fontSize: defaultFontSize, fontStyle: defaultFontStyle, fontWeight: defaultFontWeight, lineHeight: defaultLineHeight, letterSpacing: defaultLetterSpacing, textDecoration: defaultTextDecoration, textTransform: defaultTextTransform, } = defaultElementStyles.typography;
    const hasFontFamily = () => fontFamily !== defaultFontFamily;
    const hasFontSize = () => fontSize !== defaultFontSize;
    const hasFontAppearance = () => fontWeight !== defaultFontWeight || fontStyle !== defaultFontStyle;
    const hasLineHeight = () => lineHeight !== defaultLineHeight;
    const hasLetterSpacing = () => letterSpacing !== defaultLetterSpacing;
    const hasTextDecoration = () => textDecoration !== defaultTextDecoration;
    const hasTextTransform = () => textTransform !== defaultTextTransform;
    const showToolFontSize = element !== 'heading' || headingLevel !== 'heading';
    const updateElementStyleProp = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((path, newValue) => {
        if (element === 'heading') {
            updateStyleProp(['elements', headingLevel, ...path], newValue);
        }
        else if (element === 'text') {
            updateStyleProp([...path], newValue);
        }
        else {
            updateStyleProp(['elements', element, ...path], newValue);
        }
    }, [element, updateStyleProp, headingLevel]);
    const setLetterSpacing = (newValue) => {
        updateElementStyleProp(['typography', 'letterSpacing'], newValue);
        (0,_events__WEBPACK_IMPORTED_MODULE_7__.debouncedRecordEvent)('styles_sidebar_screen_typography_element_panel_set_letter_spacing', {
            element,
            newValue,
            selectedDefaultLetterSpacing: newValue === defaultLetterSpacing,
        });
    };
    const setLineHeight = (newValue) => {
        updateElementStyleProp(['typography', 'lineHeight'], newValue);
        (0,_events__WEBPACK_IMPORTED_MODULE_7__.debouncedRecordEvent)('styles_sidebar_screen_typography_element_panel_set_line_height', {
            element,
            newValue,
            selectedDefaultLineHeight: newValue === defaultLineHeight,
        });
    };
    const setFontSize = (newValue) => {
        updateElementStyleProp(['typography', 'fontSize'], newValue);
        (0,_events__WEBPACK_IMPORTED_MODULE_7__.debouncedRecordEvent)('styles_sidebar_screen_typography_element_panel_set_font_size', {
            element,
            headingLevel,
            newValue,
            selectedDefaultFontSize: newValue === defaultFontSize,
        });
    };
    const setFontFamily = (newValue) => {
        updateElementStyleProp(['typography', 'fontFamily'], newValue);
        (0,_events__WEBPACK_IMPORTED_MODULE_7__.debouncedRecordEvent)('styles_sidebar_screen_typography_element_panel_set_font_family', {
            element,
            newValue,
            selectedDefaultFontFamily: newValue === defaultFontFamily,
        });
    };
    const setTextDecoration = (newValue) => {
        updateElementStyleProp(['typography', 'textDecoration'], newValue);
        (0,_events__WEBPACK_IMPORTED_MODULE_7__.debouncedRecordEvent)('styles_sidebar_screen_typography_element_panel_set_text_decoration', {
            element,
            newValue,
            selectedDefaultTextDecoration: newValue === defaultTextDecoration,
        });
    };
    const setTextTransform = (newValue) => {
        updateElementStyleProp(['typography', 'textTransform'], newValue);
        (0,_events__WEBPACK_IMPORTED_MODULE_7__.debouncedRecordEvent)('styles_sidebar_screen_typography_element_panel_set_text_transform', {
            element,
            newValue,
            selectedDefaultTextTransform: newValue === defaultTextTransform,
        });
    };
    const setFontAppearance = ({ fontStyle: newFontStyle, fontWeight: newFontWeight, }) => {
        updateElementStyleProp(['typography', 'fontStyle'], newFontStyle);
        updateElementStyleProp(['typography', 'fontWeight'], newFontWeight);
        (0,_events__WEBPACK_IMPORTED_MODULE_7__.debouncedRecordEvent)('styles_sidebar_screen_typography_element_panel_set_font_appearance', {
            element,
            newFontStyle,
            newFontWeight,
            selectedDefaultFontStyle: newFontStyle === defaultFontStyle,
            selectedDefaultFontWeight: newFontWeight === defaultFontWeight,
        });
    };
    const resetAll = () => {
        updateElementStyleProp(['typography'], defaultElementStyles.typography);
        (0,_events__WEBPACK_IMPORTED_MODULE_7__.recordEvent)('styles_sidebar_screen_typography_element_panel_reset_all_styles_selected', {
            element,
            headingLevel,
        });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanel, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'woocommerce'), resetAll: resetAll, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanelItem, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font family', 'woocommerce'), hasValue: hasFontFamily, onDeselect: () => setFontFamily(defaultFontFamily), isShownByDefault: defaultControls.fontFamily, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalFontFamilyControl, { value: fontFamily, onChange: setFontFamily, size: "__unstable-large", fontFamilies: fontFamilies, __nextHasNoMarginBottom: true }) }), showToolFontSize && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanelItem, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font size', 'woocommerce'), hasValue: hasFontSize, onDeselect: () => setFontSize(defaultFontSize), isShownByDefault: defaultControls.fontSize, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, { value: fontSize, onChange: setFontSize, fontSizes: fontSizes, disableCustomFontSizes: false, withReset: false, withSlider: true, size: "__unstable-large", __nextHasNoMarginBottom: true }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanelItem, { className: "single-column", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Appearance', 'woocommerce'), hasValue: hasFontAppearance, onDeselect: () => {
                    setFontAppearance({
                        fontStyle: defaultFontStyle,
                        fontWeight: defaultFontWeight,
                    });
                }, isShownByDefault: defaultControls.fontAppearance, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalFontAppearanceControl, { value: {
                        fontStyle,
                        fontWeight,
                    }, onChange: setFontAppearance, hasFontStyles: true, hasFontWeights: true, size: "__unstable-large" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanelItem, { className: "single-column", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Line height', 'woocommerce'), hasValue: hasLineHeight, onDeselect: () => setLineHeight(defaultLineHeight), isShownByDefault: defaultControls.lineHeight, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.LineHeightControl, { __nextHasNoMarginBottom: true, __unstableInputWidth: "auto", value: lineHeight, onChange: setLineHeight, size: "__unstable-large" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanelItem, { className: "single-column", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Letter spacing', 'woocommerce'), hasValue: hasLetterSpacing, onDeselect: () => setLetterSpacing(defaultLetterSpacing), isShownByDefault: defaultControls.letterSpacing, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalLetterSpacingControl, { value: letterSpacing, onChange: setLetterSpacing, size: "__unstable-large", __unstableInputWidth: "auto" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanelItem, { className: "single-column", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text decoration', 'woocommerce'), hasValue: hasTextDecoration, onDeselect: () => setTextDecoration(defaultTextDecoration), isShownByDefault: defaultControls.textDecoration, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalTextDecorationControl, { value: textDecoration, onChange: setTextDecoration, size: "__unstable-large", __unstableInputWidth: "auto" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanelItem, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Letter case', 'woocommerce'), hasValue: hasTextTransform, onDeselect: () => setTextTransform(defaultTextTransform), isShownByDefault: defaultControls.textTransform, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalTextTransformControl, { value: textTransform, onChange: setTextTransform, showNone: true, isBlock: true, size: "__unstable-large", __nextHasNoMarginBottom: true }) })] }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypographyElementPanel);


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/panels/typography-panel.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/panels/typography-panel.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypographyPanel: () => (/* binding */ TypographyPanel),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-email-styles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/utils.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function ElementItem({ element, label }) {
    const { styles } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useEmailStyles)();
    const elementStyles = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getElementStyles)(styles, element, null, true);
    const { fontFamily, fontStyle, fontWeight, letterSpacing, textDecoration, textTransform, } = elementStyles.typography;
    const textColor = elementStyles.color?.text || 'inherit';
    const background = elementStyles.color?.background || '#f0f0f0';
    const navigationButtonLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    // translators: %s: is a subset of Typography, e.g., 'text' or 'links'.
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography %s styles', 'woocommerce'), label);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItem, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorButton, { path: `/typography/${element}`, "aria-label": navigationButtonLabel, onClick: () => (0,_events__WEBPACK_IMPORTED_MODULE_5__.recordEvent)('styles_sidebar_screen_typography_button_click', {
                element,
                label,
                path: `typography/${element}`,
            }), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, { justify: "flex-start", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, { className: "edit-site-global-styles-screen-typography__indicator", style: {
                            fontFamily: fontFamily ?? 'serif',
                            background,
                            color: textColor,
                            fontStyle: fontStyle ?? 'normal',
                            fontWeight: fontWeight ?? 'normal',
                            letterSpacing: letterSpacing ?? 'normal',
                            textDecoration: textDecoration ??
                                (element === 'link' ? 'underline' : 'none'),
                            textTransform: textTransform ?? 'none',
                        }, children: "Aa" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, { children: label })] }) }) }));
}
function TypographyPanel() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card, { size: "small", variant: "primary", isBorderless: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, { spacing: 3, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHeading, { level: 3, className: "edit-site-global-styles-subtitle", children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Elements', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItemGroup, { isBordered: true, isSeparated: true, size: "small", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ElementItem, { element: "text", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ElementItem, { element: "link", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Links', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ElementItem, { element: "heading", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Headings', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ElementItem, { element: "button", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Buttons', 'woocommerce') })] })] }) }) }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypographyPanel);


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/previews/typography-preview.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/previews/typography-preview.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TypographyPreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-email-styles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/utils.js");

/**
 * Internal dependencies
 */


function TypographyPreview({ element, headingLevel, }) {
    const { styles } = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useEmailStyles)();
    const elementStyles = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getElementStyles)(styles, element, headingLevel, true);
    const { fontFamily, fontSize, fontStyle, fontWeight, lineHeight, letterSpacing, textDecoration, textTransform, } = elementStyles.typography;
    const textColor = elementStyles.color?.text || 'inherit';
    const background = elementStyles.color?.background || '#f0f0f0';
    const extraStyles = element === 'link'
        ? {
            textDecoration: textDecoration ?? 'underline',
        }
        : {};
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "edit-site-typography-preview", style: {
            fontFamily: fontFamily ?? 'serif',
            background,
            color: textColor,
            lineHeight,
            fontSize,
            fontStyle,
            fontWeight,
            letterSpacing,
            textDecoration,
            textTransform,
            ...extraStyles,
        }, children: "Aa" }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/preview.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/preview.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Preview: () => (/* binding */ Preview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-email-styles.js");
/* harmony import */ var _style_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../style-variables */ "./node_modules/@woocommerce/email-editor/build-module/style-variables.js");

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const firstFrame = {
    start: {
        scale: 1,
        opacity: 1,
    },
    hover: {
        scale: 0,
        opacity: 0,
    },
};
const midFrame = {
    hover: {
        opacity: 1,
    },
    start: {
        opacity: 0.5,
    },
};
const secondFrame = {
    hover: {
        scale: 1,
        opacity: 1,
    },
    start: {
        scale: 0,
        opacity: 0,
    },
};
const normalizedHeight = 152;
const normalizedColorSwatchSize = 32;
/**
 * Component to render the styles preview based on the component from the site editor:
 * https://github.com/WordPress/gutenberg/blob/5c7c4e7751df5e05fc70a354cd0d81414ac9c7e7/packages/edit-site/src/components/global-styles/preview-styles.js
 *
 * @param root0
 * @param root0.label
 * @param root0.isFocused
 * @param root0.withHoverView
 */
function Preview({ label, isFocused, withHoverView, }) {
    const { colors } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)((select) => ({
        colors: select(_store__WEBPACK_IMPORTED_MODULE_4__.storeName).getPaletteColors(),
    }), []);
    const paletteColors = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => colors.theme.concat(colors.default), [colors]);
    const { styles } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useEmailStyles)();
    const { backgroundColor, headingColor, textColorPaletteObject, buttonBackgroundColorPaletteObject, } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
        const backgroundCol = (0,_style_variables__WEBPACK_IMPORTED_MODULE_6__.getCompressedVariableValue)(styles?.color?.background) || 'white';
        const textCol = (0,_style_variables__WEBPACK_IMPORTED_MODULE_6__.getCompressedVariableValue)(styles?.color?.text) || 'black';
        const headingCol = (0,_style_variables__WEBPACK_IMPORTED_MODULE_6__.getCompressedVariableValue)(styles?.elements?.h1?.color?.text) ||
            textCol;
        const linkColor = (0,_style_variables__WEBPACK_IMPORTED_MODULE_6__.getCompressedVariableValue)(styles?.elements?.link?.color?.text) ||
            headingCol;
        const buttonBackgroundCol = (0,_style_variables__WEBPACK_IMPORTED_MODULE_6__.getCompressedVariableValue)(styles?.elements?.button?.color?.background) || linkColor;
        const textColorPaletteObj = paletteColors.find(({ color }) => color.toLowerCase() === textCol.toLowerCase());
        const buttonBackgroundColorPaletteObj = paletteColors.find(({ color }) => color.toLowerCase() === buttonBackgroundCol.toLowerCase());
        return {
            backgroundColor: backgroundCol,
            headingColor: headingCol,
            buttonBackgroundColor: buttonBackgroundCol,
            textColorPaletteObject: textColorPaletteObj,
            buttonBackgroundColorPaletteObject: buttonBackgroundColorPaletteObj,
        };
    }, [styles, paletteColors]);
    const headingFontWeight = styles?.elements?.heading?.typography?.fontWeight || 'inherit';
    const headingFontFamily = styles?.elements?.heading?.typography?.fontFamily || 'inherit';
    // We pick the colors for the highlighted colors the same way as the site editor
    // https://github.com/WordPress/gutenberg/blob/7b3850b6a39ce45948f09efe750451c6323a4613/packages/edit-site/src/components/global-styles/hooks.js#L83-L95
    const highlightedColors = [
        ...(textColorPaletteObject ? [textColorPaletteObject] : []),
        ...(buttonBackgroundColorPaletteObject
            ? [buttonBackgroundColorPaletteObject]
            : []),
        ...paletteColors,
    ]
        .filter(({ color }) => color.toLowerCase() !== backgroundColor.toLowerCase())
        .slice(0, 2);
    const ratio = 1;
    // When is set label, the preview animates the hover state and displays the label
    const [isHovered, setIsHovered] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__unstableMotion.div, { style: {
                height: normalizedHeight * ratio,
                width: '100%',
                background: backgroundColor,
                cursor: withHoverView ? 'pointer' : undefined,
            }, initial: "start", animate: (isHovered || isFocused) && label ? 'hover' : 'start', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__unstableMotion.div, { variants: firstFrame, style: {
                        height: '100%',
                        overflow: 'hidden',
                    }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHStack, { spacing: 10 * ratio, justify: "center", style: {
                            height: '100%',
                            overflow: 'hidden',
                        }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__unstableMotion.div, { style: {
                                    fontFamily: headingFontFamily,
                                    fontSize: 65 * ratio,
                                    color: headingColor,
                                    fontWeight: headingFontWeight,
                                }, animate: { scale: 1, opacity: 1 }, initial: { scale: 0.1, opacity: 0 }, transition: { delay: 0.3, type: 'tween' }, children: "Aa" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalVStack, { spacing: 4 * ratio, children: highlightedColors.map(({ slug, color }, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__unstableMotion.div, { style: {
                                        height: normalizedColorSwatchSize *
                                            ratio,
                                        width: normalizedColorSwatchSize *
                                            ratio,
                                        background: color,
                                        borderRadius: (normalizedColorSwatchSize *
                                            ratio) /
                                            2,
                                    }, animate: {
                                        scale: 1,
                                        opacity: 1,
                                    }, initial: {
                                        scale: 0.1,
                                        opacity: 0,
                                    }, transition: {
                                        delay: index === 1 ? 0.2 : 0.1,
                                    } }, slug))) })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__unstableMotion.div, { variants: withHoverView && midFrame, style: {
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        overflow: 'hidden',
                        filter: 'blur(60px)',
                        opacity: 0.1,
                    }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHStack, { spacing: 0, justify: "flex-start", style: {
                            height: '100%',
                            overflow: 'hidden',
                        }, children: paletteColors.slice(0, 4).map(({ color }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                height: '100%',
                                background: color,
                                flexGrow: 1,
                            } }, color))) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__unstableMotion.div, { variants: secondFrame, style: {
                        height: '100%',
                        width: '100%',
                        overflow: 'hidden',
                        position: 'absolute',
                        top: 0,
                    }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalVStack, { spacing: 3 * ratio, justify: "center", style: {
                            height: '100%',
                            overflow: 'hidden',
                            padding: 10 * ratio,
                            boxSizing: 'border-box',
                        }, children: label && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                fontSize: 40 * ratio,
                                fontFamily: headingFontFamily,
                                color: headingColor,
                                fontWeight: headingFontWeight,
                                lineHeight: '1em',
                                textAlign: 'center',
                            }, children: label })) }) })] }) }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-colors.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-colors.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenColors: () => (/* binding */ ScreenColors)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _screen_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screen-header */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-header.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-email-styles.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");
/* harmony import */ var _private_apis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../private-apis */ "./node_modules/@woocommerce/email-editor/build-module/private-apis/index.js");

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





function ScreenColors() {
    (0,_events__WEBPACK_IMPORTED_MODULE_3__.recordEventOnce)('styles_sidebar_screen_colors_opened');
    const { userStyles, styles, updateStyles } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useEmailStyles)();
    const theme = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)((select) => select(_store__WEBPACK_IMPORTED_MODULE_5__.storeName).getTheme(), []);
    const handleOnChange = (newStyles) => {
        updateStyles(newStyles);
        (0,_events__WEBPACK_IMPORTED_MODULE_3__.recordEvent)('styles_sidebar_screen_colors_styles_updated'); // We can't log the updated color here because the onChange function returns the complete object.
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_screen_header__WEBPACK_IMPORTED_MODULE_6__["default"], { title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Colors', 'woocommerce'), description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage palettes and the default color of different global elements.', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_private_apis__WEBPACK_IMPORTED_MODULE_7__.StylesColorPanel, { value: userStyles, inheritedValue: styles, onChange: handleOnChange, settings: theme?.settings, panelId: "colors" })] }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-header.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-header.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenHeader: () => (/* binding */ ScreenHeader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigator */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/navigator.js");

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

/**
 * Component for displaying the screen header and optional description based on site editor component:
 * https://github.com/WordPress/gutenberg/blob/7fa03fafeb421ab4c3604564211ce6007cc38e84/packages/edit-site/src/components/global-styles/header.js
 *
 * @param root0
 * @param root0.title
 * @param root0.description
 * @param root0.onBack
 */
function ScreenHeader({ title, description, onBack }) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, { spacing: 0, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalView, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalSpacer, { marginBottom: 0, paddingX: 4, paddingY: 3, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, { spacing: 2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navigator__WEBPACK_IMPORTED_MODULE_3__.Navigator.BackButton, { style: { minWidth: 24, padding: 0 }, icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"], size: "small", "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigate to the previous view', 'woocommerce'), onClick: onBack }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalSpacer, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHeading, { className: "woocommerce-email-editor-styles-header", level: 2, size: 13, children: title }) })] }) }) }), description && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "woocommerce-email-editor-styles-header-description", children: description }))] }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScreenHeader);


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-layout.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-layout.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenLayout: () => (/* binding */ ScreenLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _panels_dimensions_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panels/dimensions-panel */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/panels/dimensions-panel.js");
/* harmony import */ var _screen_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screen-header */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-header.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function ScreenLayout() {
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.recordEventOnce)('styles_sidebar_screen_layout_opened');
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_screen_header__WEBPACK_IMPORTED_MODULE_3__.ScreenHeader, { title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_panels_dimensions_panel__WEBPACK_IMPORTED_MODULE_4__.DimensionsPanel, {})] }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-root.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-root.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenRoot: () => (/* binding */ ScreenRoot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/typography.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/color.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/layout.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/preview.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


function ScreenRoot() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card, { size: "small", className: "edit-site-global-styles-screen-root", variant: "primary", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, { spacing: 4, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardMedia, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_preview__WEBPACK_IMPORTED_MODULE_3__.Preview, {}) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItemGroup, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorButton, { path: "/typography", onClick: () => (0,_events__WEBPACK_IMPORTED_MODULE_4__.recordEvent)('styles_sidebar_navigation_click', { path: 'typography' }), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItem, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, { justify: "flex-start", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, { icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"], size: 24 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, { children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'woocommerce') })] }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorButton, { path: "/colors", onClick: () => (0,_events__WEBPACK_IMPORTED_MODULE_4__.recordEvent)('styles_sidebar_navigation_click', { path: 'colors' }), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItem, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, { justify: "flex-start", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, { icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"], size: 24 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, { children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Colors', 'woocommerce') })] }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorButton, { path: "/layout", onClick: () => (0,_events__WEBPACK_IMPORTED_MODULE_4__.recordEvent)('styles_sidebar_navigation_click', { path: 'layout' }), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItem, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, { justify: "flex-start", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, { icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"], size: 24 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, { children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout', 'woocommerce') })] }) }) })] })] }) }) }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-typography-element.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-typography-element.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenTypographyElement: () => (/* binding */ ScreenTypographyElement)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _panels_typography_element_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panels/typography-element-panel */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/panels/typography-element-panel.js");
/* harmony import */ var _previews_typography_preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../previews/typography-preview */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/previews/typography-preview.js");
/* harmony import */ var _screen_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screen-header */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-header.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




const PANELS = {
    text: {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text', 'woocommerce'),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage the fonts and typography used on text.', 'woocommerce'),
        defaultControls: _panels_typography_element_panel__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_CONTROLS,
    },
    link: {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Links', 'woocommerce'),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage the fonts and typography used on links.', 'woocommerce'),
        defaultControls: {
            ..._panels_typography_element_panel__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_CONTROLS,
            textDecoration: true,
        },
    },
    heading: {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Headings', 'woocommerce'),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage the fonts and typography used on headings.', 'woocommerce'),
        defaultControls: {
            ..._panels_typography_element_panel__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_CONTROLS,
            textTransform: true,
        },
    },
    button: {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Buttons', 'woocommerce'),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage the fonts and typography used on buttons.', 'woocommerce'),
        defaultControls: _panels_typography_element_panel__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_CONTROLS,
    },
};
function ScreenTypographyElement({ element, }) {
    (0,_events__WEBPACK_IMPORTED_MODULE_5__.recordEventOnce)('styles_sidebar_screen_typography_element_opened', {
        element,
    });
    const [headingLevel, setHeadingLevel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('heading');
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_screen_header__WEBPACK_IMPORTED_MODULE_6__["default"], { title: PANELS[element].title, description: PANELS[element].description }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalSpacer, { marginX: 4, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_previews_typography_preview__WEBPACK_IMPORTED_MODULE_7__["default"], { element: element, headingLevel: headingLevel }) }), element === 'heading' && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalSpacer, { marginX: 4, marginBottom: "1em", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select heading level', 'woocommerce'), hideLabelFromVision: true, value: headingLevel, onChange: (value) => {
                        setHeadingLevel(value.toString());
                        (0,_events__WEBPACK_IMPORTED_MODULE_5__.recordEvent)('styles_sidebar_screen_typography_element_heading_level_selected', { value });
                    }, isBlock: true, size: "__unstable-large", __nextHasNoMarginBottom: true, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, { value: "heading", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('All', 'heading levels', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, { value: "h1", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('H1', 'Heading Level', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, { value: "h2", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('H2', 'Heading Level', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, { value: "h3", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('H3', 'Heading Level', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, { value: "h4", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('H4', 'Heading Level', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, { value: "h5", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('H5', 'Heading Level', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, { value: "h6", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('H6', 'Heading Level', 'woocommerce') })] }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_panels_typography_element_panel__WEBPACK_IMPORTED_MODULE_4__["default"], { element: element, headingLevel: headingLevel, defaultControls: PANELS[element].defaultControls })] }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-typography.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-typography.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenTypography: () => (/* binding */ ScreenTypography)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _panels_typography_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panels/typography-panel */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/panels/typography-panel.js");
/* harmony import */ var _screen_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screen-header */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-header.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function ScreenTypography() {
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.recordEventOnce)('styles_sidebar_screen_typography_opened');
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_screen_header__WEBPACK_IMPORTED_MODULE_3__["default"], { title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'woocommerce'), description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage the typography settings for different elements.', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_panels_typography_panel__WEBPACK_IMPORTED_MODULE_4__["default"], {})] }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/styles-sidebar.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/styles-sidebar.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RawStylesSidebar: () => (/* binding */ RawStylesSidebar),
/* harmony export */   StylesSidebar: () => (/* binding */ StylesSidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/styles.js");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-root.js");
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-typography.js");
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screens */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-typography-element.js");
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screens */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-colors.js");
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./screens */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/screens/screen-layout.js");
/* harmony import */ var _navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigator */ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/navigator.js");

/**
 * External dependencies
 */




// eslint-disable-next-line @woocommerce/dependency-group

/**
 * Internal dependencies
 */



function RawStylesSidebar() {
    const { userCanEditGlobalStyles } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)((select) => {
        const { canEdit } = select(_store__WEBPACK_IMPORTED_MODULE_5__.storeName).canUserEditGlobalEmailStyles();
        return {
            userCanEditGlobalStyles: canEdit,
        };
    }, []);
    return (userCanEditGlobalStyles && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.PluginSidebarMoreMenuItem, { target: "email-styles-sidebar", icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"], children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email styles', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.PluginSidebar, { name: "email-styles-sidebar", icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"], title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Styles', 'woocommerce'), className: "woocommerce-email-editor-styles-panel", header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Styles', 'woocommerce'), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_navigator__WEBPACK_IMPORTED_MODULE_7__.Navigator, { initialPath: "/", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navigator__WEBPACK_IMPORTED_MODULE_7__.Navigator.Screen, { path: "/", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_8__.ScreenRoot, {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navigator__WEBPACK_IMPORTED_MODULE_7__.Navigator.Screen, { path: "/typography", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_9__.ScreenTypography, {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navigator__WEBPACK_IMPORTED_MODULE_7__.Navigator.Screen, { path: "/typography/text", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_10__.ScreenTypographyElement, { element: "text" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navigator__WEBPACK_IMPORTED_MODULE_7__.Navigator.Screen, { path: "/typography/link", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_10__.ScreenTypographyElement, { element: "link" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navigator__WEBPACK_IMPORTED_MODULE_7__.Navigator.Screen, { path: "/typography/heading", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_10__.ScreenTypographyElement, { element: "heading" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navigator__WEBPACK_IMPORTED_MODULE_7__.Navigator.Screen, { path: "/typography/button", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_10__.ScreenTypographyElement, { element: "button" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navigator__WEBPACK_IMPORTED_MODULE_7__.Navigator.Screen, { path: "/colors", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_11__.ScreenColors, {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navigator__WEBPACK_IMPORTED_MODULE_7__.Navigator.Screen, { path: "/layout", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_screens__WEBPACK_IMPORTED_MODULE_12__.ScreenLayout, {}) })] }) })] })));
}
const StylesSidebar = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.memo)(RawStylesSidebar);


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/utils.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/styles-sidebar/utils.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getElementStyles: () => (/* binding */ getElementStyles),
/* harmony export */   getHeadingElementStyles: () => (/* binding */ getHeadingElementStyles)
/* harmony export */ });
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

const defaultStyleObject = {
    typography: {},
    color: {},
};
/**
 * Gets combined element styles for a heading element.
 *
 * If merge is true, individual styles will be merged with the heading styles.
 * This should be false in the Editor UI so heading levels state "default" in the tools UI instead of using
 * values from the parent "heading" element.
 *
 * @param styles
 * @param headingLevel
 * @param merge
 */
const getHeadingElementStyles = (styles, headingLevel = 'heading', merge = false) => merge
    ? deepmerge__WEBPACK_IMPORTED_MODULE_0___default().all([
        defaultStyleObject,
        styles.elements.heading || {},
        styles.elements[headingLevel] || {},
    ])
    : {
        ...defaultStyleObject,
        ...(styles.elements.heading || {}),
        ...(styles.elements[headingLevel] || {}),
    };
const getElementStyles = (styles, element, headingLevel = 'heading', merge = false) => {
    switch (element) {
        case 'text':
            return {
                typography: styles.typography,
                color: styles.color,
            };
        case 'heading':
            return getHeadingElementStyles(styles, headingLevel ?? 'heading', merge);
        default:
            return (styles.elements[element] ||
                defaultStyleObject);
    }
};


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/template-select/async.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/template-select/async.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Async: () => (/* binding */ Async)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_priority_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/priority-queue */ "@wordpress/priority-queue");
/* harmony import */ var _wordpress_priority_queue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_priority_queue__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */

// @ts-expect-error TS7016 Could not find a declaration file for module '@wordpress/priority-queue'
 // eslint-disable-line
const blockPreviewQueue = (0,_wordpress_priority_queue__WEBPACK_IMPORTED_MODULE_1__.createQueue)();
/**
 * Renders a component at the next idle time.
 *
 * @param {*} props
 */
function Async({ children, placeholder }) {
    const [shouldRender, setShouldRender] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    // In the future, we could try to use startTransition here, but currently
    // react will batch all transitions, which means all previews will be
    // rendered at the same time.
    // https://react.dev/reference/react/startTransition#caveats
    // > If there are multiple ongoing Transitions, React currently batches them
    // > together. This is a limitation that will likely be removed in a future
    // > release.
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const context = {};
        blockPreviewQueue.add(context, () => {
            // Synchronously run all renders so it consumes timeRemaining.
            // See https://github.com/WordPress/gutenberg/pull/48238
            (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.flushSync)(() => {
                setShouldRender(true);
            });
        });
        return () => {
            blockPreviewQueue.cancel(context);
        };
    }, []);
    if (!shouldRender) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return placeholder;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return children;
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/template-select/select-modal.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/template-select/select-modal.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectTemplateModal: () => (/* binding */ SelectTemplateModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-preview-templates.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _template_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template-list */ "./node_modules/@woocommerce/email-editor/build-module/components/template-select/template-list.js");
/* harmony import */ var _template_categories_list_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template-categories-list-sidebar */ "./node_modules/@woocommerce/email-editor/build-module/components/template-select/template-categories-list-sidebar.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */





const TemplateCategories = [
    {
        name: 'recent',
        label: 'Recent',
    },
    {
        name: 'basic',
        label: 'Basic',
    },
];
function SelectTemplateBody({ hasEmailPosts, templates, handleTemplateSelection, templateSelectMode, }) {
    const [selectedCategory, setSelectedCategory] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(TemplateCategories[1].name // Show the “Basic” category by default
    );
    const hideRecentCategory = templateSelectMode === 'swap';
    const displayCategories = TemplateCategories.filter(({ name }) => name !== 'recent' || !hideRecentCategory);
    const handleCategorySelection = (category) => {
        (0,_events__WEBPACK_IMPORTED_MODULE_6__.recordEvent)('template_select_modal_category_change', { category });
        setSelectedCategory(category);
    };
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        setTimeout(() => {
            if (hasEmailPosts && !hideRecentCategory) {
                setSelectedCategory(TemplateCategories[0].name);
            }
        }, 1000); // using setTimeout to ensure the template styles are available before block preview
    }, [hasEmailPosts, hideRecentCategory]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "block-editor-block-patterns-explorer", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_template_categories_list_sidebar__WEBPACK_IMPORTED_MODULE_7__.TemplateCategoriesListSidebar, { templateCategories: displayCategories, selectedCategory: selectedCategory, onClickCategory: handleCategorySelection }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_template_list__WEBPACK_IMPORTED_MODULE_8__.TemplateList, { templates: templates, onTemplateSelection: handleTemplateSelection, selectedCategory: selectedCategory })] }));
}
const MemorizedSelectTemplateBody = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.memo)(SelectTemplateBody);
function SelectTemplateModal({ onSelectCallback, closeCallback = null, previewContent = '', }) {
    const templateSelectMode = previewContent ? 'swap' : 'new';
    (0,_events__WEBPACK_IMPORTED_MODULE_6__.recordEventOnce)('template_select_modal_opened', { templateSelectMode });
    const [templates, emailPosts, hasEmailPosts] = (0,_hooks__WEBPACK_IMPORTED_MODULE_9__.usePreviewTemplates)(previewContent);
    const hasTemplates = templates?.length > 0;
    const handleTemplateSelection = (template) => {
        const templateIsPostContent = template.type === _store__WEBPACK_IMPORTED_MODULE_10__.editorCurrentPostType;
        const postContent = template.template;
        (0,_events__WEBPACK_IMPORTED_MODULE_6__.recordEvent)('template_select_modal_template_selected', {
            templateSlug: template.slug,
            templateSelectMode,
            templateType: template.type,
        });
        // When we provide previewContent, we don't want to reset the blocks
        if (!previewContent) {
            void (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).resetEditorBlocks(template.emailParsed);
        }
        void (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_10__.storeName).setTemplateToPost(templateIsPostContent ? postContent.template : template.slug);
        onSelectCallback();
    };
    const handleCloseWithoutSelection = () => {
        const template = templates[0] ?? null;
        if (!template) {
            return;
        } // Prevent closing when templates are not loaded
        (0,_events__WEBPACK_IMPORTED_MODULE_6__.recordEvent)('template_select_modal_handle_close_without_template_selected');
        handleTemplateSelection(template);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, { title: templateSelectMode === 'new'
            ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Start with an email preset', 'woocommerce')
            : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select a template', 'woocommerce'), onRequestClose: () => {
            (0,_events__WEBPACK_IMPORTED_MODULE_6__.recordEvent)('template_select_modal_closed', {
                templateSelectMode,
            });
            return closeCallback
                ? closeCallback()
                : handleCloseWithoutSelection();
        }, isFullScreen: true, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MemorizedSelectTemplateBody, { hasEmailPosts: hasEmailPosts, templates: [...templates, ...emailPosts], handleTemplateSelection: handleTemplateSelection, templateSelectMode: templateSelectMode }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Flex, { className: "email-editor-modal-footer", justify: "flex-end", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FlexItem, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, { variant: "tertiary", className: "email-editor-start_from_scratch_button", onClick: () => {
                            (0,_events__WEBPACK_IMPORTED_MODULE_6__.recordEvent)('template_select_modal_start_from_scratch_clicked');
                            return handleCloseWithoutSelection();
                        }, isBusy: !hasTemplates, children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Start from scratch', 'woocommerce') }) }) })] }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/template-select/template-categories-list-sidebar.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/template-select/template-categories-list-sidebar.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateCategoriesListSidebar: () => (/* binding */ TemplateCategoriesListSidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * External dependencies
 */

function TemplateCategoriesListSidebar({ selectedCategory, templateCategories, onClickCategory, }) {
    const baseClassName = 'block-editor-block-patterns-explorer__sidebar';
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: baseClassName, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `${baseClassName}__categories-list`, children: templateCategories.map(({ name, label }) => {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, { label: label, className: `${baseClassName}__categories-list__item`, isPressed: selectedCategory === name, onClick: () => {
                        onClickCategory(name);
                    }, children: label }, name));
            }) }) }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/template-select/template-list.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/template-select/template-list.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateList: () => (/* binding */ TemplateList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/block-default.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/info.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./async */ "./node_modules/@woocommerce/email-editor/build-module/components/template-select/async.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-email-css.js");

/**
 * External dependencies
 */






// @ts-expect-error No types available for this component
// eslint-disable-next-line

/**
 * Internal dependencies
 */


function TemplateNoResults() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "block-editor-inserter__no-results", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"], { className: "block-editor-inserter__no-results-icon", icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No recent templates.', 'woocommerce') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Your recent creations will appear here as soon as you begin.', 'woocommerce') })] }));
}
function TemplateListBox({ templates, onTemplateSelection, selectedCategory, }) {
    const { layout } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)((select) => {
        const { getEditorSettings } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store);
        const editorSettings = getEditorSettings();
        return {
            // @ts-expect-error There are no types for the experimental features settings.
            // eslint-disable-next-line no-underscore-dangle
            layout: editorSettings.__experimentalFeatures.layout,
        };
    });
    const [styles] = (0,_hooks__WEBPACK_IMPORTED_MODULE_9__.useEmailCss)();
    const css = styles.reduce((acc, style) => {
        return acc + (style.css ?? '');
    }, '') +
        `.is-root-container { width: ${layout.contentSize}; margin: 0 auto; }`;
    if (selectedCategory === 'recent' && templates.length === 0) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TemplateNoResults, {});
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "block-editor-block-patterns-list", role: "listbox", children: templates.map((template) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "block-editor-block-patterns-list__list-item email-editor-pattern__list-item", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "block-editor-block-patterns-list__item", role: "button", tabIndex: 0, onClick: () => {
                    onTemplateSelection(template);
                }, onKeyPress: (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        onTemplateSelection(template);
                    }
                }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_async__WEBPACK_IMPORTED_MODULE_10__.Async, { placeholder: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('rendering template', 'woocommerce') }), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockPreview, { blocks: template.previewContentParsed, viewportWidth: 900, minHeight: 300, additionalStyles: [
                                {
                                    css,
                                },
                            ] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalHStack, { className: "block-editor-patterns__pattern-details", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { className: "block-editor-block-patterns-list__item-title", children: template.displayName }) })] }) }) }, `${template.slug}_${template.displayName}_${template.id}`))) }));
}
const compareProps = (prev, next) => prev.templates.length === next.templates.length &&
    prev.selectedCategory === next.selectedCategory;
const MemorizedTemplateListBox = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.memo)(TemplateListBox, compareProps);
function TemplateList({ templates, onTemplateSelection, selectedCategory, }) {
    const filteredTemplates = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => templates.filter((template) => template.category === selectedCategory), [selectedCategory, templates]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "block-editor-block-patterns-explorer__list", children: [selectedCategory === 'recent' && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "email-editor-recent-templates-info", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalHStack, { spacing: 1, expanded: false, justify: "start", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"], { icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Templates created on the legacy editor will not appear here.', 'woocommerce') })] }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MemorizedTemplateListBox, { templates: filteredTemplates, onTemplateSelection: onTemplateSelection, selectedCategory: selectedCategory })] }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/components/template-select/template-selection.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/components/template-select/template-selection.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateSelection: () => (/* binding */ TemplateSelection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _select_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-modal */ "./node_modules/@woocommerce/email-editor/build-module/components/template-select/select-modal.js");

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


function TemplateSelection() {
    const [templateSelected, setTemplateSelected] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { emailContentIsEmpty, emailHasEdits } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)((select) => ({
        emailContentIsEmpty: select(_store__WEBPACK_IMPORTED_MODULE_3__.storeName).hasEmptyContent(),
        emailHasEdits: select(_store__WEBPACK_IMPORTED_MODULE_3__.storeName).hasEdits(),
    }), []);
    if (!emailContentIsEmpty || emailHasEdits || templateSelected) {
        return null;
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_select_modal__WEBPACK_IMPORTED_MODULE_4__.SelectTemplateModal, { onSelectCallback: () => setTemplateSelected(true) }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/editor-hooks.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/editor-hooks.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initHooks: () => (/* binding */ initHooks)
/* harmony export */ });
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);


const initHooks = () => {
    // see https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/media-upload/README.md
    const replaceMediaUpload = () => _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_0__.MediaUpload;
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.MediaUpload', 'woocommerce/email-editor/replace-media-upload', replaceMediaUpload);
};


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/editor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/editor.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_format_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/format-library */ "@wordpress/format-library");
/* harmony import */ var _wordpress_format_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_format_library__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks */ "./node_modules/@woocommerce/email-editor/build-module/blocks/index.js");
/* harmony import */ var _layouts_flex_email__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/flex-email */ "./node_modules/@woocommerce/email-editor/build-module/layouts/flex-email.js");
/* harmony import */ var _components_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/block-editor */ "./node_modules/@woocommerce/email-editor/build-module/components/block-editor/editor.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ "./node_modules/@woocommerce/email-editor/build-module/store/store.js");
/* harmony import */ var _editor_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editor-hooks */ "./node_modules/@woocommerce/email-editor/build-module/editor-hooks.js");
/* harmony import */ var _text_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./text-hooks */ "./node_modules/@woocommerce/email-editor/build-module/text-hooks.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-collector.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events */ "./node_modules/@woocommerce/email-editor/build-module/events/store-tracking.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events */ "./node_modules/@woocommerce/email-editor/build-module/events/dom-tracking.js");
/* harmony import */ var _hooks_use_content_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/use-content-validation */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-content-validation.js");

/**
 * External dependencies
 */



 // Enables text formatting capabilities
/**
 * Internal dependencies
 */








function Editor() {
    const { postId, settings } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)((select) => ({
        postId: select(_store__WEBPACK_IMPORTED_MODULE_5__.storeName).getEmailPostId(),
        settings: select(_store__WEBPACK_IMPORTED_MODULE_5__.storeName).getInitialEditorSettings(),
    }), []);
    (0,_hooks_use_content_validation__WEBPACK_IMPORTED_MODULE_6__.useContentValidation)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.StrictMode, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_block_editor__WEBPACK_IMPORTED_MODULE_7__.InnerEditor, { postId: postId, postType: _store__WEBPACK_IMPORTED_MODULE_5__.editorCurrentPostType, settings: settings }) }));
}
function initialize(elementId) {
    const container = document.getElementById(elementId);
    if (!container) {
        return;
    }
    const WrappedEditor = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('woocommerce_email_editor_wrap_editor_component', Editor);
    (0,_events__WEBPACK_IMPORTED_MODULE_8__.initEventCollector)();
    (0,_events__WEBPACK_IMPORTED_MODULE_9__.initStoreTracking)();
    (0,_events__WEBPACK_IMPORTED_MODULE_10__.initDomTracking)();
    (0,_store__WEBPACK_IMPORTED_MODULE_11__.createStore)();
    (0,_layouts_flex_email__WEBPACK_IMPORTED_MODULE_12__.initializeLayout)();
    (0,_blocks__WEBPACK_IMPORTED_MODULE_13__.initBlocks)();
    (0,_editor_hooks__WEBPACK_IMPORTED_MODULE_14__.initHooks)();
    (0,_text_hooks__WEBPACK_IMPORTED_MODULE_15__.initTextHooks)();
    const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
    root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WrappedEditor, {}));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/events/dom-tracking.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/events/dom-tracking.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initDomTracking: () => (/* binding */ initDomTracking)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

let EVENTS_TO_TRACK = [];
/**
 * Filter events by selector and record the event.
 */
function trackMatchingEvents(event) {
    EVENTS_TO_TRACK.forEach((candidate) => {
        const matchedTarget = event.target?.matches?.(candidate.selector)
            ? event.target
            : event.target?.closest?.(candidate.selector);
        // Event doesn't match any of our watched selectors so we skip it
        if (!matchedTarget) {
            return;
        }
        if (typeof candidate.track === 'function') {
            candidate.track(matchedTarget, event);
        }
        else {
            (0,___WEBPACK_IMPORTED_MODULE_1__.recordEvent)(candidate.track);
        }
    });
}
function initDomTracking() {
    if (!(0,___WEBPACK_IMPORTED_MODULE_1__.isEventTrackingEnabled)()) {
        return;
    }
    /**
     * Events to track.
     * Properties:
     * - track: The event to track of callback to handle tracking.
     * - selector: The selector to match the event.
     */
    EVENTS_TO_TRACK = [
        // Header preview dropdown preview in new tab selected
        {
            track: 'header_preview_dropdown_preview_in_new_tab_selected',
            selector: '.editor-preview-dropdown__button-external',
        },
        // Header toggle block tools
        {
            track: () => {
                const isBlockToolsCollapsed = document.getElementsByClassName('is-collapsed editor-collapsible-block-toolbar').length;
                (0,___WEBPACK_IMPORTED_MODULE_1__.recordEvent)('header_blocks_tool_button_clicked', {
                    isBlockToolsCollapsed,
                });
            },
            selector: '.editor-collapsible-block-toolbar__toggle',
        },
        // Header more menu toggle
        {
            track: (target) => {
                const isOpened = target.classList.contains('is-opened');
                (0,___WEBPACK_IMPORTED_MODULE_1__.recordEvent)('header_more_menu_dropdown_toggle', {
                    isOpened,
                });
            },
            // eslint-disable-next-line @wordpress/i18n-text-domain
            selector: `.components-dropdown-menu__toggle[aria-label="${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Options')}"]`,
        },
        // Header save button clicked
        {
            track: (target) => {
                if (
                // eslint-disable-next-line @wordpress/i18n-text-domain
                (target.textContent === (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Save') &&
                    target.getAttribute('aria-disabled') === 'false') ||
                    // eslint-disable-next-line @wordpress/i18n-text-domain
                    target.textContent === (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Saving…')) {
                    (0,___WEBPACK_IMPORTED_MODULE_1__.recordEvent)('header_save_button_clicked');
                }
            },
            selector: '.editor-post-publish-button',
        },
        // Header save draft button clicked
        {
            track: 'header_save_email_button_clicked',
            selector: '.editor-post-saved-state.is-saving',
        },
        // Inserter panel close icon clicked
        {
            track: 'inserter_sidebar_library_close_icon_clicked',
            selector: '.block-editor-inserter__menu .block-editor-tabbed-sidebar__close-button',
        },
        // Preview dropdown toggle clicked
        {
            track: (target) => {
                const isOpened = target.classList.contains('is-opened');
                (0,___WEBPACK_IMPORTED_MODULE_1__.recordEvent)('header_preview_dropdown_clicked', {
                    isOpened,
                });
            },
            selector: '.editor-preview-dropdown__toggle',
        },
        // Email tab in the sidebar clicked
        {
            track: () => {
                (0,___WEBPACK_IMPORTED_MODULE_1__.recordEvent)('sidebar_tab_selected', { tab: 'document' });
            },
            selector: '[data-tab-id="edit-post/document"]',
        },
        // Block tab in the sidebar clicked
        {
            track: () => {
                (0,___WEBPACK_IMPORTED_MODULE_1__.recordEvent)('sidebar_tab_selected', { tab: 'block' });
            },
            selector: '[data-tab-id="edit-post/block"]',
        },
        // Header inserter sidebar toggle clicked
        {
            track: (target) => {
                const isOpened = target.classList.contains('is-pressed');
                (0,___WEBPACK_IMPORTED_MODULE_1__.recordEvent)('header_inserter_sidebar_clicked', { isOpened });
            },
            selector: '.editor-document-tools__inserter-toggle',
        },
        // Header listview sidebar toggle clicked
        {
            track: (target) => {
                const isOpened = target.classList.contains('is-pressed');
                (0,___WEBPACK_IMPORTED_MODULE_1__.recordEvent)('header_listview_sidebar_clicked', { isOpened });
            },
            selector: '.editor-document-tools__document-overview-toggle',
        },
        // Command in command bar selected
        {
            track: (target) => {
                (0,___WEBPACK_IMPORTED_MODULE_1__.recordEvent)('command_bar_command_clicked', {
                    command: target.dataset?.value,
                });
            },
            selector: '.commands-command-menu__container [role="option"]',
        },
    ];
    document.addEventListener('click', trackMatchingEvents);
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/events/event-collector.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/events/event-collector.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initEventCollector: () => (/* binding */ initEventCollector)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-pipeline */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

const eventListenerHandler = (eventData) => {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.doAction)('woocommerce_email_editor_events', eventData.detail);
};
const initEventCollector = () => {
    if (!(0,_event_pipeline__WEBPACK_IMPORTED_MODULE_1__.isEventTrackingEnabled)()) {
        return;
    }
    _event_pipeline__WEBPACK_IMPORTED_MODULE_1__.dispatcher.addEventListener(_event_pipeline__WEBPACK_IMPORTED_MODULE_1__.EMAIL_STRING, eventListenerHandler);
};
window.addEventListener('unload', function () {
    if (!(0,_event_pipeline__WEBPACK_IMPORTED_MODULE_1__.isEventTrackingEnabled)()) {
        return;
    }
    _event_pipeline__WEBPACK_IMPORTED_MODULE_1__.dispatcher.removeEventListener(_event_pipeline__WEBPACK_IMPORTED_MODULE_1__.EMAIL_STRING, eventListenerHandler);
});



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMAIL_STRING: () => (/* binding */ EMAIL_STRING),
/* harmony export */   debouncedRecordEvent: () => (/* binding */ debouncedRecordEvent),
/* harmony export */   dispatcher: () => (/* binding */ dispatcher),
/* harmony export */   isEventTrackingEnabled: () => (/* binding */ isEventTrackingEnabled),
/* harmony export */   recordEvent: () => (/* binding */ recordEvent),
/* harmony export */   recordEventOnce: () => (/* binding */ recordEventOnce)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */


const isEventTrackingEnabled = () => {
    return (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)('woocommerce_email_editor_events_tracking_enabled', false);
};
const EMAIL_STRING = 'email_editor_events';
const dispatcher = new EventTarget();
/**
 * Record event tracking information
 *
 * @param {string} name - event name, in format `this_is_an_event`
 * @param          data - extra properties - please use a valid JSON object
 */
const recordEvent = (name, data = {}) => {
    if (!isEventTrackingEnabled()) {
        return;
    }
    const recordedData = typeof data !== 'object' ? { data } : data;
    const eventData = {
        name: `${EMAIL_STRING}_${name}`,
        ...recordedData,
    };
    dispatcher.dispatchEvent(new CustomEvent(EMAIL_STRING, { detail: eventData }));
};
/**
 * Generally used for when we want to ensure the event is tracked once
 * e.g., on page render or something similar
 * Takes the exact same parameter as `recordEvent`
 */
const recordEventOnce = (function () {
    const cachedEventName = {};
    return (name, data = {}) => {
        if (!isEventTrackingEnabled()) {
            return;
        }
        const cacheKey = `${name}_${JSON.stringify(data).length}`; // ensure each entry is unique by name and data
        if (cachedEventName[cacheKey]) {
            return; // do not execute again
        }
        recordEvent(name, data);
        cachedEventName[cacheKey] = true;
    };
})();
const debouncedRecordEvent = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(recordEvent, 700); // wait 700 milliseconds. The average human reaction speed time is around 250 ms, added some delay for mouse move and keyboard press



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/events/store-tracking.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/events/store-tracking.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initStoreTracking: () => (/* binding */ initStoreTracking)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Handler functions for tracking individual events recorder by the listening to store actions.
 */
const trackSetDeviceType = (deviceType) => {
    (0,___WEBPACK_IMPORTED_MODULE_4__.recordEvent)(`header_preview_dropdown_${deviceType.toLowerCase()}_selected`);
};
const trackDeleteEntityRecord = (_entity, type, id) => {
    if (type === _store__WEBPACK_IMPORTED_MODULE_5__.editorCurrentPostType && id === _store__WEBPACK_IMPORTED_MODULE_5__.editorCurrentPostId) {
        (0,___WEBPACK_IMPORTED_MODULE_4__.recordEvent)('trash_modal_move_to_trash_button_clicked');
    }
};
const trackSetPreference = (scope, name, value) => {
    const valueBeforeToggle = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get(scope, name);
    if (valueBeforeToggle === value) {
        return;
    }
    const trackedPreferences = {
        focusMode: 'focus_mode_toggle',
        fullscreenMode: 'full_screen_mode_toggle',
        distractionFree: 'distraction_free_toggle',
        fixedToolbar: 'fixed_toolbar_toggle',
    };
    if (trackedPreferences[name]) {
        (0,___WEBPACK_IMPORTED_MODULE_4__.recordEvent)(trackedPreferences[name], { isEnabled: value });
    }
};
const trackBlockAndPatternInsertion = (...args) => {
    // @ts-expect-error - isInserterOpened is not in editor types
    const inserterPanelOpened = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).isInserterOpened();
    const insQuickInsertOpened = !!document.getElementsByClassName('block-editor-inserter__quick-inserter').length;
    // We are a bit guessing here that user uses inserter panel when it is opened
    let source = 'other_inserter';
    if (inserterPanelOpened) {
        source = 'inserter_sidebar';
    }
    else if (insQuickInsertOpened) {
        source = 'quick_inserter';
    }
    const blockData = args[0];
    const meta = args[5];
    // Single block insertion
    if (Array.isArray(blockData) === false &&
        typeof blockData === 'object') {
        (0,___WEBPACK_IMPORTED_MODULE_4__.recordEvent)(`${source}_library_block_selected`, {
            blockName: blockData.name,
        });
    }
    // Patter inserted
    if (Array.isArray(blockData) && meta && meta.patternName) {
        (0,___WEBPACK_IMPORTED_MODULE_4__.recordEvent)(`${source}_library_pattern_selected`, {
            patternName: meta.patternName,
        });
    }
};
const trackSetRenderingMode = (renderingMode) => {
    // @ts-expect-error - getRenderingMode is not in editor types
    const currentRenderingMode = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).getRenderingMode();
    if (currentRenderingMode === renderingMode) {
        return;
    }
    const isPreviewDropdownOpened = !!document.querySelector(
    // eslint-disable-next-line @wordpress/i18n-text-domain
    `[aria-label="${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('View options')}"]`);
    // We want to track the event only from the dropdown.
    // The mode might also change when switching between an email content and template.
    if (isPreviewDropdownOpened) {
        (0,___WEBPACK_IMPORTED_MODULE_4__.recordEvent)('preview_dropdown_rendering_mode_changed', {
            renderingMode,
        });
    }
};
/**
 * List of store actions to be tracked.
 */
const TRACKED_STORE_EVENTS = {
    'core/editor': {
        autosave: 'editor_content_auto_saved',
        setDeviceType: trackSetDeviceType,
        setRenderingMode: trackSetRenderingMode,
    },
    core: {
        deleteEntityRecord: trackDeleteEntityRecord,
    },
    'core/block-editor': {
        insertBlock: trackBlockAndPatternInsertion,
        insertBlocks: trackBlockAndPatternInsertion,
    },
    'core/preferences': {
        set: trackSetPreference,
    },
    'core/commands': {
        open: 'command_menu_opened',
        close: 'command_menu_closed',
    },
};
const rewrittenActions = {};
const originalActions = {};
const initStoreTracking = () => {
    if (!(0,___WEBPACK_IMPORTED_MODULE_4__.isEventTrackingEnabled)()) {
        return;
    }
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.use)((registry) => ({
        dispatch: (namespace) => {
            const storeName = typeof namespace === 'object' ? namespace.name : namespace;
            const actions = registry.dispatch(storeName);
            const trackers = TRACKED_STORE_EVENTS[storeName];
            if (!trackers) {
                return actions;
            }
            // Initialize namespace level objects if not yet done.
            if (!rewrittenActions[storeName]) {
                rewrittenActions[storeName] = {};
            }
            if (!originalActions[storeName]) {
                originalActions[storeName] = {};
            }
            for (const [action, event] of Object.entries(trackers)) {
                if (!originalActions[storeName][action]) {
                    originalActions[storeName][action] = actions[action];
                    rewrittenActions[storeName][action] = (...args) => {
                        try {
                            if (typeof event === 'function') {
                                event(...args);
                            }
                            else if (typeof event === 'string') {
                                (0,___WEBPACK_IMPORTED_MODULE_4__.recordEvent)(event);
                            }
                        }
                        catch (error) {
                            // eslint-disable-next-line no-console
                            console.error('Error tracking event', error);
                        }
                        return originalActions[storeName][action](...args);
                    };
                }
                actions[action] = rewrittenActions[storeName][action];
            }
            return actions;
        },
    }));
};


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/hacks/notices-slot.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/hacks/notices-slot.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoticesSlot: () => (/* binding */ NoticesSlot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);

/**
 * External dependencies
 */

/**
 * Renders a portal for rendering notices before the visual editor.
 *
 * Currently there is no API to add notices with custom context to the content area.
 */
function NoticesSlot({ children }) {
    const [portalEl] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(document.createElement('div'));
    // Place element for portal as first child of visual editor
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const visualEditor = document.getElementsByClassName('editor-visual-editor ')[0];
        if (visualEditor) {
            visualEditor.parentNode?.insertBefore(portalEl, visualEditor);
        }
    }, [portalEl]);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: children }), portalEl);
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/hacks/publish-save.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/hacks/publish-save.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublishSave: () => (/* binding */ PublishSave)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header_send_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header/send-button */ "./node_modules/@woocommerce/email-editor/build-module/components/header/send-button.js");

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

function NextPublishSlot({ children }) {
    const sendButtonPortalEl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(document.createElement('div'));
    // Place element for rendering send button next to publish button
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const publishButton = document.getElementsByClassName('editor-post-publish-button__button')[0];
        if (publishButton) {
            publishButton.parentNode?.insertBefore(sendButtonPortalEl.current, publishButton.nextSibling);
        }
    }, [sendButtonPortalEl]);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: children }), sendButtonPortalEl.current);
}
function PublishSave() {
    const observerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { hasNonPostEntityChanges, isEditedPostDirty } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)((select) => ({
        hasNonPostEntityChanges: 
        // @ts-expect-error hasNonPostEntityChanges is not typed in @types/wordpress__editor
        select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).hasNonPostEntityChanges(),
        isEditedPostDirty: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).isEditedPostDirty(),
    }), []);
    // Display original button when there are changes to save except for draft
    // For draft, there is an extra save button to save as draft
    const displayOriginalPublishButton = hasNonPostEntityChanges || isEditedPostDirty;
    const toggleElementVisible = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)((element, visible) => {
        if (visible && element.classList.contains('force-hidden')) {
            element.classList.remove('force-hidden');
        }
        if (!visible && !element.classList.contains('force-hidden')) {
            element.classList.add('force-hidden');
        }
    }, []);
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const publishButton = document.getElementsByClassName('editor-post-publish-button__button')[0];
        toggleElementVisible(publishButton, displayOriginalPublishButton);
        if (!publishButton) {
            return () => observerRef.current?.disconnect();
        }
        // It may get additionally re-rendered by the editor, so we need to check it again
        if (observerRef.current) {
            observerRef.current.disconnect();
        }
        observerRef.current = new MutationObserver(() => {
            toggleElementVisible(publishButton, displayOriginalPublishButton);
        });
        observerRef.current.observe(publishButton, {
            attributes: true,
            childList: true,
            subtree: false,
        });
        // Cleanup observer
        return () => observerRef.current?.disconnect();
    }, [displayOriginalPublishButton, toggleElementVisible]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NextPublishSlot, { children: !displayOriginalPublishButton && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_header_send_button__WEBPACK_IMPORTED_MODULE_4__.SendButton, {}) }));
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-content-validation.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/hooks/use-content-validation.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useContentValidation: () => (/* binding */ useContentValidation),
/* harmony export */   validateEmailContent: () => (/* binding */ validateEmailContent)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _use_shallow_equal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-shallow-equal */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-shallow-equal.js");
/* harmony import */ var _use_validation_notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-validation-notices */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-validation-notices.js");
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



// Shared reference to an empty array for cases where it is important to avoid
// returning a new array reference on every invocation
const EMPTY_ARRAY = [];
const validateEmailContent = (content, templateContent, { addValidationNotice, hasValidationNotice, removeValidationNotice, }) => {
    const rules = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('woocommerce_email_editor_content_validation_rules', EMPTY_ARRAY);
    let isValid = true;
    rules.forEach(({ id, testContent, message, actions }) => {
        // Check both content and template content for the rule.
        if (testContent(content + templateContent)) {
            addValidationNotice(id, message, actions);
            isValid = false;
        }
        else if (hasValidationNotice(id)) {
            removeValidationNotice(id);
        }
    });
    return isValid;
};
const useContentValidation = () => {
    const { addValidationNotice, hasValidationNotice, removeValidationNotice } = (0,_use_validation_notices__WEBPACK_IMPORTED_MODULE_4__.useValidationNotices)();
    const { editedContent, editedTemplateContent } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)((mapSelect) => ({
        editedContent: mapSelect(_store__WEBPACK_IMPORTED_MODULE_5__.storeName).getEditedEmailContent(),
        editedTemplateContent: mapSelect(_store__WEBPACK_IMPORTED_MODULE_5__.storeName).getCurrentTemplateContent(),
    }));
    const content = (0,_use_shallow_equal__WEBPACK_IMPORTED_MODULE_6__.useShallowEqual)(editedContent);
    const templateContent = (0,_use_shallow_equal__WEBPACK_IMPORTED_MODULE_6__.useShallowEqual)(editedTemplateContent);
    const validateContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        return validateEmailContent(content, templateContent, {
            addValidationNotice,
            hasValidationNotice,
            removeValidationNotice,
        });
    }, [
        content,
        templateContent,
        addValidationNotice,
        removeValidationNotice,
        hasValidationNotice,
    ]);
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const filterHandler = async (edits) => {
            const isValid = validateContent();
            if (!isValid) {
                throw new Error();
            }
            return edits;
        };
        (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('editor.preSavePost', 'woocommerce/email-editor/validate-content', filterHandler);
        return () => {
            (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.removeFilter)('editor.preSavePost', 'woocommerce/email-editor/validate-content');
        };
    }, [validateContent]);
    // Subscribe to updates so notices can be dismissed once resolved.
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const unsubscribe = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.subscribe)(() => {
            if (!hasValidationNotice()) {
                return;
            }
            validateContent();
        }, _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
        return () => unsubscribe();
    }, [hasValidationNotice, validateContent]);
    return {
        isInvalid: hasValidationNotice(),
        validateContent,
    };
};


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-email-css.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/hooks/use-email-css.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEmailCss: () => (/* binding */ useEmailCss)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _use_user_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-user-theme */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-user-theme.js");
/* harmony import */ var _private_apis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../private-apis */ "./node_modules/@woocommerce/email-editor/build-module/private-apis/index.js");
/* harmony import */ var _style_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style-variables */ "./node_modules/@woocommerce/email-editor/build-module/style-variables.js");
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




// Empty array to avoid re-rendering the component when the array is empty
const EMPTY_ARRAY = [];
function useEmailCss() {
    const { userTheme } = (0,_use_user_theme__WEBPACK_IMPORTED_MODULE_4__.useUserTheme)();
    const { editorTheme, layout, deviceType, editorSettingsStyles } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)((select) => {
        const { getEditorSettings, 
        // @ts-expect-error getDeviceType is not in types.
        getDeviceType, } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store);
        const editorSettings = getEditorSettings();
        return {
            editorTheme: select(_store__WEBPACK_IMPORTED_MODULE_5__.storeName).getTheme(),
            // @ts-expect-error There are no types for the experimental features settings.
            // eslint-disable-next-line no-underscore-dangle
            layout: editorSettings.__experimentalFeatures?.layout,
            deviceType: getDeviceType(),
            editorSettingsStyles: editorSettings.styles,
        };
    }, []);
    const mergedConfig = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => deepmerge__WEBPACK_IMPORTED_MODULE_3___default().all([
        {},
        editorTheme || {},
        userTheme || {},
    ]), [editorTheme, userTheme]);
    const [styles] = (0,_private_apis__WEBPACK_IMPORTED_MODULE_6__.useGlobalStylesOutputWithConfig)(mergedConfig);
    let rootContainerStyles = '';
    if (layout && deviceType !== 'Mobile') {
        rootContainerStyles = `display:flow-root; width:${layout?.contentSize}; margin: 0 auto;box-sizing: border-box;`;
    }
    const padding = mergedConfig.styles?.spacing?.padding;
    if (padding) {
        rootContainerStyles += `padding-left:${(0,_style_variables__WEBPACK_IMPORTED_MODULE_7__.unwrapCompressedPresetStyleVariable)(padding.left)};`;
        rootContainerStyles += `padding-right:${(0,_style_variables__WEBPACK_IMPORTED_MODULE_7__.unwrapCompressedPresetStyleVariable)(padding.right)};`;
    }
    const finalStyles = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return [
            ...(styles ?? []),
            {
                css: `.is-root-container{ ${rootContainerStyles} }`,
            },
            ...(editorSettingsStyles ?? []),
        ];
    }, [styles, editorSettingsStyles, rootContainerStyles]);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return [finalStyles || EMPTY_ARRAY];
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-email-styles.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/hooks/use-email-styles.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setImmutably: () => (/* binding */ setImmutably),
/* harmony export */   useEmailStyles: () => (/* binding */ useEmailStyles)
/* harmony export */ });
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _use_user_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-user-theme */ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-user-theme.js");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


// Shared reference to an empty object for cases where it is important to avoid
// returning a new object reference on every invocation
const EMPTY_OBJECT = {};
/**
 * Immutably sets a value inside an object. Like `lodash#set`, but returning a
 * new object. Treats nullish initial values as empty objects. Clones any
 * nested objects. Supports arrays, too.
 *
 * @param                       setObject
 * @param {number|string|Array} setPath   Path in the object to modify.
 * @param {*}                   value     New value to set.
 * @return {Object} Cloned object with the new value set.
 */
function setImmutably(setObject, setPath, value) {
    // Normalize path
    const path = Array.isArray(setPath) ? [...setPath] : [setPath];
    // Shallowly clone the base of the object
    const object = Array.isArray(setObject)
        ? [...setObject]
        : { ...setObject };
    const leaf = path.pop();
    // Traverse object from root to leaf, shallowly cloning at each level
    let prev = object;
    path.forEach((key) => {
        const lvl = prev[key];
        prev[key] = Array.isArray(lvl) ? [...lvl] : { ...lvl };
        prev = prev[key];
    });
    prev[leaf] = value;
    return object;
}
/**
 * Shorten the variable names in the styles object. Some components need the h
 * Transforms variables like var(--wp--preset--spacing--10) to var:preset|spacing|10
 *
 * @param {Object} obj The object to shorten the variable names in.
 * @return {Object} The object with the shortened variable names.
 */
function shortenWpPresetVariables(obj) {
    // Helper function to replace the variable string
    const replaceVariable = (value) => {
        return value.replace(/var\(--([a-z]+)--([a-z]+(?:--[a-z0-9]+(?:-[a-z0-9]+)*)*)--([a-z0-9-]+)\)/g, (_match, _prefix, group1, group2) => {
            const groups = group1.split('--').concat(group2);
            return `var:${groups.join('|')}`;
        });
    };
    // Recursive function to traverse the object
    const traverse = (current) => {
        if (typeof current === 'object' && current !== null) {
            for (const key in current) {
                if (current.hasOwnProperty(key)) {
                    current[key] = traverse(current[key]);
                }
            }
        }
        else if (typeof current === 'string') {
            return replaceVariable(current);
        }
        return current;
    };
    return traverse(obj);
}
/**
 * Remove empty arrays and keys with undefined values from an object.
 * Empty values causes issues with deepmerge, because it can overwrite default value we provide in base email theme.
 *
 * @param {Object} obj The object to clean.
 * @return {Object} The cleaned object.
 */
function cleanupUserStyles(obj) {
    const cleanObject = (current) => {
        if ((typeof current === 'object' && current !== null) ||
            current === undefined) {
            if (Array.isArray(current) && current.length === 0) {
                return undefined; // Remove empty arrays
            }
            for (const key in current) {
                if (current.hasOwnProperty(key)) {
                    const cleanedValue = cleanObject(current[key]);
                    if (cleanedValue === undefined) {
                        delete current[key]; // Remove keys with undefined values
                    }
                    else {
                        current[key] = cleanedValue;
                    }
                }
            }
        }
        return current;
    };
    return cleanObject(obj);
}
const useEmailStyles = () => {
    // const { templateTheme, updateTemplateTheme } = useEmailTheme();
    const { userTheme, updateUserTheme } = (0,_use_user_theme__WEBPACK_IMPORTED_MODULE_3__.useUserTheme)();
    // This is email level styling stored in post meta.
    const styles = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
        return userTheme
            ? cleanupUserStyles(shortenWpPresetVariables(userTheme?.styles))
            : EMPTY_OBJECT;
    }, [userTheme]);
    // Default styles from theme.json.
    const { styles: defaultStyles } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)((select) => ({
        styles: select(_store__WEBPACK_IMPORTED_MODULE_4__.storeName).getStyles(),
    }));
    // Update email styles.
    const updateStyles = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((newStyles) => {
        const newTheme = {
            ...userTheme,
            styles: cleanupUserStyles(newStyles),
        };
        updateUserTheme(newTheme);
    }, [updateUserTheme, userTheme]);
    // Update an email style prop.
    const updateStyleProp = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((path, newValue) => {
        const newTheme = setImmutably(userTheme, ['styles', ...path], newValue);
        updateUserTheme(newTheme);
    }, [updateUserTheme, userTheme]);
    const mergedStyles = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
        if (!defaultStyles) {
            return EMPTY_OBJECT;
        }
        if (!styles) {
            return defaultStyles;
        }
        return deepmerge__WEBPACK_IMPORTED_MODULE_0___default().all([defaultStyles, styles]);
    }, [defaultStyles, styles]);
    return {
        styles: mergedStyles,
        userStyles: userTheme?.styles, // Styles defined by user
        defaultStyles, // Default styles from editors theme.json
        updateStyleProp,
        updateStyles,
    };
};


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-navigate-to-entity-record.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/hooks/use-navigate-to-entity-record.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useNavigateToEntityRecord: () => (/* binding */ useNavigateToEntityRecord)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */



/**
 * A hook that records the 'entity' history in the post editor as a user
 * navigates between editing a post and editing the post template or patterns.
 *
 * Implemented as a stack, so a little similar to the browser history API.
 *
 * Used to control displaying UI elements like the back button.
 *
 * @param {number} initialPostId        The post id of the post when the editor loaded.
 * @param {string} initialPostType      The post type of the post when the editor loaded.
 * @param {string} defaultRenderingMode The rendering mode to switch to when navigating.
 *
 * @return {Object} An object containing the `currentPost` variable and
 *                 `onNavigateToEntityRecord` and `onNavigateToPreviousEntityRecord` functions.
 */
function useNavigateToEntityRecord(initialPostId, initialPostType, defaultRenderingMode) {
    const [postHistory, dispatch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useReducer)((historyState, { type, post, previousRenderingMode }) => {
        if (type === 'push') {
            return [...historyState, { post, previousRenderingMode }];
        }
        if (type === 'pop') {
            // Try to leave one item in the history.
            if (historyState.length > 1) {
                return historyState.slice(0, -1);
            }
        }
        return historyState;
    }, [
        {
            post: { postId: initialPostId, postType: initialPostType },
        },
    ]);
    const { post, previousRenderingMode } = postHistory[postHistory.length - 1];
    const { getRenderingMode } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    const { setRenderingMode } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    const onNavigateToEntityRecord = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((params) => {
        dispatch({
            type: 'push',
            post: { postId: params.postId, postType: params.postType },
            // Save the current rendering mode so we can restore it when navigating back.
            previousRenderingMode: getRenderingMode(),
        });
        setRenderingMode(defaultRenderingMode);
    }, [getRenderingMode, setRenderingMode, defaultRenderingMode]);
    const onNavigateToPreviousEntityRecord = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        dispatch({ type: 'pop' });
        if (previousRenderingMode) {
            setRenderingMode(previousRenderingMode);
        }
    }, [setRenderingMode, previousRenderingMode]);
    return {
        currentPost: post,
        onNavigateToEntityRecord,
        onNavigateToPreviousEntityRecord: postHistory.length > 1
            ? onNavigateToPreviousEntityRecord
            : undefined,
    };
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-preview-templates.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/hooks/use-preview-templates.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePreviewTemplates: () => (/* binding */ usePreviewTemplates)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */

// Shared reference to an empty array for cases where it is important to avoid
// returning a new array reference on every invocation
const EMPTY_ARRAY = [];
/**
 * We need to merge pattern blocks and template blocks for BlockPreview component.
 *
 * @param templateBlocks - Parsed template blocks
 * @param innerBlocks    - Blocks to be set as content blocks for the template preview
 */
function setPostContentInnerBlocks(templateBlocks, innerBlocks) {
    return templateBlocks.map((block) => {
        if (block.name === 'core/post-content') {
            return {
                ...block,
                name: 'core/group', // Change the name to group to render the innerBlocks
                innerBlocks,
            };
        }
        if (block.innerBlocks?.length) {
            return {
                ...block,
                innerBlocks: setPostContentInnerBlocks(block.innerBlocks, innerBlocks),
            };
        }
        return block;
    });
}
const InternalTemplateCache = {};
/**
 * @param post
 * @param allTemplates
 */
function generateTemplateContent(post, allTemplates = []) {
    const contentTemplate = post.template;
    const defaultReturnObject = {
        postTemplateContent: null,
    };
    if (!contentTemplate) {
        return defaultReturnObject;
    }
    if (InternalTemplateCache[contentTemplate]) {
        return InternalTemplateCache[contentTemplate];
    }
    const postTemplate = allTemplates.find((template) => template.slug === contentTemplate);
    if (!postTemplate) {
        return defaultReturnObject;
    }
    const templateContent = {
        postTemplateContent: postTemplate?.template,
    };
    InternalTemplateCache[contentTemplate] = templateContent;
    return templateContent;
}
function usePreviewTemplates(customEmailContent = '') {
    const { templates, patterns, emailPosts, hasEmailPosts } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)((select) => {
        const rawEmailPosts = customEmailContent !== 'swap'
            ? select(_store__WEBPACK_IMPORTED_MODULE_4__.storeName).getSentEmailEditorPosts()
            : undefined;
        return {
            templates: select(_store__WEBPACK_IMPORTED_MODULE_4__.storeName).getEmailTemplates(),
            patterns: select(_store__WEBPACK_IMPORTED_MODULE_4__.storeName).getBlockPatternsForEmailTemplate(),
            emailPosts: rawEmailPosts,
            hasEmailPosts: !!(rawEmailPosts && rawEmailPosts?.length),
        };
    }, [customEmailContent]);
    const allTemplates = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        let contentPatterns = [];
        const parsedCustomEmailContent = customEmailContent && (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.parse)(customEmailContent);
        // If there is a custom email content passed from outside we use it as email content for preview
        // otherwise generate one preview per template and pattern
        if (parsedCustomEmailContent) {
            contentPatterns = [{ blocks: parsedCustomEmailContent }];
        }
        else {
            contentPatterns = patterns;
        }
        if (!contentPatterns || !templates) {
            return EMPTY_ARRAY;
        }
        const templateToPreview = [];
        // We don't want to show the blank template in the list
        templates
            ?.filter((template) => template.slug !== 'email-general')
            ?.forEach((template) => {
            contentPatterns?.forEach((contentPattern) => {
                let parsedTemplate = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.parse)(template.content?.raw);
                parsedTemplate = setPostContentInnerBlocks(parsedTemplate, contentPattern.blocks);
                templateToPreview.push({
                    id: template.id,
                    slug: template.slug,
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    previewContentParsed: parsedTemplate,
                    emailParsed: contentPattern.blocks,
                    template,
                    category: 'basic', // TODO: This will be updated once template category is implemented
                    type: template.type,
                    displayName: contentPattern.title
                        ? `${template.title.rendered} - ${contentPattern.title}`
                        : template.title.rendered,
                });
            });
        });
        return templateToPreview;
    }, [templates, patterns, customEmailContent]);
    const allEmailPosts = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return emailPosts?.map((post) => {
            const preferredTitle = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('woocommerce_email_editor_preferred_template_title', '', post);
            const { postTemplateContent } = generateTemplateContent(post, allTemplates);
            const parsedPostContent = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.parse)(post.content?.raw);
            let parsedPostContentWithTemplate = parsedPostContent;
            if (postTemplateContent?.content?.raw) {
                parsedPostContentWithTemplate = setPostContentInnerBlocks((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.parse)(postTemplateContent?.content?.raw), parsedPostContent);
            }
            const template = {
                ...post,
                title: {
                    raw: post.title.raw,
                    rendered: preferredTitle || post.title.rendered,
                },
            };
            return {
                id: post.id,
                slug: post.slug,
                previewContentParsed: parsedPostContentWithTemplate,
                emailParsed: parsedPostContent,
                category: 'recent',
                type: post.type,
                displayName: template.title.rendered,
                template,
            };
        });
    }, [emailPosts, allTemplates]);
    return [
        allTemplates || EMPTY_ARRAY,
        allEmailPosts || EMPTY_ARRAY,
        hasEmailPosts,
    ];
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-shallow-equal.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/hooks/use-shallow-equal.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useShallowEqual: () => (/* binding */ useShallowEqual)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */


/**
 * A custom hook that compares the provided value across renders and returns the
 * previous instance if shallow equality with previous instance exists.
 *
 * This is particularly useful when non-primitive types are used as
 * dependencies for react hooks.
 *
 * @param {*} value Value to keep the same if satisfies shallow equality.
 *
 * @return {*} The previous cached instance of the value if the current has  shallow equality with it.
 */
function useShallowEqual(value) {
    const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
    if (!_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_1___default()(value, ref.current)) {
        ref.current = value;
    }
    return ref.current;
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-user-theme.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/hooks/use-user-theme.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useUserTheme: () => (/* binding */ useUserTheme)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

function useUserTheme() {
    const { globalStylePost } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)((select) => {
        const post = select(_store__WEBPACK_IMPORTED_MODULE_3__.storeName).getGlobalEmailStylesPost() || null;
        return {
            globalStylePost: post,
        };
    }, []);
    const updateGlobalStylesPost = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newTheme) => {
        if (!globalStylePost) {
            return;
        }
        void (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).editEntityRecord('postType', 'wp_global_styles', globalStylePost.id, {
            styles: newTheme.styles,
            settings: newTheme.settings,
        });
    }, [globalStylePost]);
    return {
        userTheme: {
            settings: globalStylePost?.settings,
            styles: globalStylePost?.styles,
        },
        updateUserTheme: updateGlobalStylesPost,
    };
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/hooks/use-validation-notices.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/hooks/use-validation-notices.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useValidationNotices: () => (/* binding */ useValidationNotices)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */



const useValidationNotices = () => {
    const context = 'email-validation';
    const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)((mapSelect) => mapSelect(_wordpress_notices__WEBPACK_IMPORTED_MODULE_2__.store).getNotices(context));
    return {
        notices,
        hasValidationNotice: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((noticeId) => {
            if (!noticeId) {
                return notices?.length > 0;
            }
            return (notices.find((notice) => notice.id === noticeId) !==
                undefined);
        }, [notices]),
        addValidationNotice: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((noticeId, message, actions = []) => {
            void (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_2__.store).createNotice('error', message, {
                id: noticeId,
                isDismissible: false,
                actions,
                context,
            });
        }, [context]),
        removeValidationNotice: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((noticeId) => {
            void (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_2__.store).removeNotice(noticeId, context);
        }, [context]),
    };
};


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeEditor: () => (/* binding */ initializeEditor)
/* harmony export */ });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor */ "./node_modules/@woocommerce/email-editor/build-module/editor.js");
/**
 * Internal dependencies
 */

/**
 * This method is used to initialize the email editor.
 * This method expects some data set on the global window object set on window.WooCommerceEmailEditor
 *
 * {
 *    "current_post_type": "", // The post type of the current post.
 *    "current_post_id": "", // The ID of the current post.
 *    "current_wp_user_email": "", // The email of the current user.
 *    "editor_settings": {}, // The block editor settings.
 *    "editor_theme": {}, // The block editor theme.
 *    "user_theme_post_id": "", // The ID of the user theme post.
 *    "urls": {
 *      "listings": "", // optional The URL for the listings page.
 *      "send": "", // optional The URL for the send button.
 *      "back": "" // optionsl The URL for the back button (top left corner).
 *    }
 *	}
 *
 * @param htmlId - The ID of the HTML element to initialize the editor in.
 */
function initializeEditor(htmlId) {
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', () => {
            (0,_editor__WEBPACK_IMPORTED_MODULE_0__.initialize)(htmlId);
        }, { once: true });
    }
    else {
        (0,_editor__WEBPACK_IMPORTED_MODULE_0__.initialize)(htmlId);
    }
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/layouts/flex-email.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/layouts/flex-email.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAttribute: () => (/* binding */ addAttribute),
/* harmony export */   initializeLayout: () => (/* binding */ initializeLayout),
/* harmony export */   withLayoutControls: () => (/* binding */ withLayoutControls),
/* harmony export */   withLayoutStyles: () => (/* binding */ withLayoutStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/justify-left.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/justify-center.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/justify-right.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);

/**
 * External dependencies
 */








const layoutBlockSupportKey = '__experimentalEmailFlexLayout';
function hasLayoutBlockSupport(blockName) {
    // @ts-expect-error No types for this exist yet.
    return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.hasBlockSupport)(blockName, layoutBlockSupportKey);
}
function JustificationControls({ justificationValue, onChange, isToolbar = false, }) {
    const justificationOptions = [
        {
            value: 'left',
            icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Justify items left', 'woocommerce'),
        },
        {
            value: 'center',
            icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Justify items center', 'woocommerce'),
        },
        {
            value: 'right',
            icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Justify items right', 'woocommerce'),
        },
    ];
    if (isToolbar) {
        const allowedValues = justificationOptions.map((option) => option.value);
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.JustifyContentControl, { value: justificationValue, onChange: onChange, allowedControls: allowedValues, popoverProps: {
                placement: 'bottom-start',
            } }));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControl, { __nextHasNoMarginBottom: true, label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Justification', 'woocommerce'), value: justificationValue, onChange: onChange, className: "block-editor-hooks__flex-layout-justification-controls", children: justificationOptions.map(({ value, icon, label }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControlOptionIcon, { value: value, icon: icon, label: label }, value))) }));
}
function LayoutControls({ setAttributes, attributes, name: blockName }) {
    const layoutBlockSupport = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.getBlockSupport)(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    blockName, 
    // @ts-expect-error No types for this exist yet.
    layoutBlockSupportKey, {});
    if (!layoutBlockSupport) {
        return null;
    }
    const { justifyContent = 'left' } = attributes.layout || {};
    const onJustificationChange = (value) => {
        setAttributes({
            layout: {
                ...attributes.layout,
                justifyContent: value,
            },
        });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, { title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Layout', 'woocommerce'), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Flex, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.FlexItem, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(JustificationControls, { justificationValue: justifyContent, onChange: onJustificationChange }) }) }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.BlockControls, { group: "block", __experimentalShareWithChildBlocks: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(JustificationControls, { justificationValue: justifyContent, onChange: onJustificationChange, isToolbar: true }) })] }));
}
/**
 * Filters registered block settings, extending attributes to include `layout`.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addAttribute(settings) {
    if (hasLayoutBlockSupport(settings.name)) {
        return {
            ...settings,
            attributes: {
                ...settings.attributes,
                layout: {
                    type: 'object',
                },
            },
        };
    }
    return settings;
}
/**
 * Override the default edit UI to include layout controls
 *
 * @param {Function} BlockEdit Original component.
 *
 * @return {Function} Wrapped component.
 */
const withLayoutControls = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)((BlockEdit) => (props) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const supportLayout = hasLayoutBlockSupport(props.name);
    return [
        supportLayout && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LayoutControls, { ...props }, "layout"),
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, { ...props }, "edit"),
    ];
}, 'withLayoutControls');
function BlockWithLayoutStyles({ block: BlockListBlock, props }) {
    const { attributes } = props;
    const { layout } = attributes;
    const layoutClasses = 'is-layout-email-flex is-layout-flex';
    const justify = layout?.justifyContent || 'left';
    const justificationClass = `is-content-justification-${justify}`;
    const layoutClassNames = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(justificationClass, layoutClasses);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockListBlock, { ...props, className: layoutClassNames });
}
/**
 * Override the default block element to add the layout classes.
 *
 * @param {Function} BlockListBlock Original component.
 *
 * @return {Function} Wrapped component.
 */
const withLayoutStyles = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)((BlockListBlock) => function maybeWrapWithLayoutStyles(props) {
    const blockSupportsLayout = hasLayoutBlockSupport(props.name);
    if (!blockSupportsLayout) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockListBlock, { ...props });
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockWithLayoutStyles, { block: BlockListBlock, props: props }));
}, 'withLayoutStyles');
function initializeLayout() {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('blocks.registerBlockType', 'woocommerce-email-editor/layout/addAttribute', addAttribute);
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('editor.BlockListBlock', 'woocommerce-email-editor/with-layout-styles', withLayoutStyles);
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('editor.BlockEdit', 'woocommerce-email-editor/with-inspector-controls', withLayoutControls);
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/private-apis/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/private-apis/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackButton: () => (/* binding */ BackButton),
/* harmony export */   Editor: () => (/* binding */ Editor),
/* harmony export */   FullscreenMode: () => (/* binding */ FullscreenMode),
/* harmony export */   StylesColorPanel: () => (/* binding */ StylesColorPanel),
/* harmony export */   ViewMoreMenuGroup: () => (/* binding */ ViewMoreMenuGroup),
/* harmony export */   registerEntityAction: () => (/* binding */ registerEntityAction),
/* harmony export */   unregisterEntityAction: () => (/* binding */ unregisterEntityAction),
/* harmony export */   useGlobalStylesOutputWithConfig: () => (/* binding */ useGlobalStylesOutputWithConfig)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/private-apis */ "@wordpress/private-apis");
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * External dependencies
 */



// eslint-disable-next-line @woocommerce/dependency-group

const { unlock } = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_1__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.', '@wordpress/edit-site' // The module name must be in the list of allowed, so for now I used the package name of the post editor
);
/**
 * We use the ColorPanel component from the block editor to render the color panel in the style settings sidebar.
 */
const { ColorPanel: StylesColorPanel } = unlock(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.privateApis);
/**
 * The useGlobalStylesOutputWithConfig is used to generate the CSS for the email editor content from the style settings.
 */
const { useGlobalStylesOutputWithConfig } = unlock(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.privateApis);
/**
 * The Editor is the main component for the email editor.
 */
const { Editor, FullscreenMode, ViewMoreMenuGroup, BackButton } = unlock(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.privateApis);
/**
 * The registerEntityAction and unregisterEntityAction are used to register and unregister entity actions.
 * This is used in the move-to-trash.tsx file to modify the move to trash action.
 * Providing us with the ability to remove the default move to trash action and add a custom trash email post action.
 */
const { registerEntityAction, unregisterEntityAction } = unlock((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store));



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/store/actions.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/store/actions.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestSendingNewsletterPreview: () => (/* binding */ requestSendingNewsletterPreview),
/* harmony export */   setIsFetchingPersonalizationTags: () => (/* binding */ setIsFetchingPersonalizationTags),
/* harmony export */   setPersonalizationTagsList: () => (/* binding */ setPersonalizationTagsList),
/* harmony export */   setTemplateToPost: () => (/* binding */ setTemplateToPost),
/* harmony export */   togglePreviewModal: () => (/* binding */ togglePreviewModal),
/* harmony export */   updateSendPreviewEmail: () => (/* binding */ updateSendPreviewEmail)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./node_modules/@woocommerce/email-editor/build-module/store/types.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events */ "./node_modules/@woocommerce/email-editor/build-module/events/event-pipeline.js");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



function togglePreviewModal(isOpen) {
    return {
        type: 'CHANGE_PREVIEW_STATE',
        state: { isModalOpened: isOpen },
    };
}
function updateSendPreviewEmail(toEmail) {
    return {
        type: 'CHANGE_PREVIEW_STATE',
        state: { toEmail },
    };
}
const setTemplateToPost = (templateSlug) => async ({ registry }) => {
    const postId = registry.select(_constants__WEBPACK_IMPORTED_MODULE_3__.storeName).getEmailPostId();
    registry
        .dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store)
        .editEntityRecord('postType', _constants__WEBPACK_IMPORTED_MODULE_3__.editorCurrentPostType, postId, {
        template: templateSlug,
    });
};
function* requestSendingNewsletterPreview(email) {
    // If preview is already sending do nothing
    const previewState = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_constants__WEBPACK_IMPORTED_MODULE_3__.storeName).getPreviewState();
    if (previewState.isSendingPreviewEmail) {
        return;
    }
    // Initiate sending
    yield {
        type: 'CHANGE_PREVIEW_STATE',
        state: {
            sendingPreviewStatus: null,
            isSendingPreviewEmail: true,
        },
    };
    try {
        const postId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_constants__WEBPACK_IMPORTED_MODULE_3__.storeName).getEmailPostId();
        yield (0,_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__.apiFetch)({
            path: '/woocommerce-email-editor/v1/send_preview_email',
            method: 'POST',
            data: {
                email,
                postId,
            },
        });
        yield {
            type: 'CHANGE_PREVIEW_STATE',
            state: {
                sendingPreviewStatus: _types__WEBPACK_IMPORTED_MODULE_4__.SendingPreviewStatus.SUCCESS,
                isSendingPreviewEmail: false,
            },
        };
        (0,_events__WEBPACK_IMPORTED_MODULE_5__.recordEvent)('sent_preview_email', { postId, email });
    }
    catch (errorResponse) {
        (0,_events__WEBPACK_IMPORTED_MODULE_5__.recordEvent)('sent_preview_email_error', { email });
        yield {
            type: 'CHANGE_PREVIEW_STATE',
            state: {
                sendingPreviewStatus: _types__WEBPACK_IMPORTED_MODULE_4__.SendingPreviewStatus.ERROR,
                isSendingPreviewEmail: false,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                errorMessage: JSON.stringify(errorResponse?.error),
            },
        };
    }
}
function setIsFetchingPersonalizationTags(isFetching) {
    return {
        type: 'SET_IS_FETCHING_PERSONALIZATION_TAGS',
        state: {
            isFetching,
        },
    };
}
function setPersonalizationTagsList(list) {
    return {
        type: 'SET_PERSONALIZATION_TAGS_LIST',
        state: {
            list,
        },
    };
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/store/constants.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editorCurrentPostId: () => (/* binding */ editorCurrentPostId),
/* harmony export */   editorCurrentPostType: () => (/* binding */ editorCurrentPostType),
/* harmony export */   storeName: () => (/* binding */ storeName)
/* harmony export */ });
const storeName = 'email-editor/editor';
// these values are set once on a page load, so it's fine to keep them here.
const editorCurrentPostType = window.WooCommerceEmailEditor.current_post_type;
const editorCurrentPostId = window.WooCommerceEmailEditor.current_post_id;


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/store/initial-state.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/store/initial-state.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInitialState: () => (/* binding */ getInitialState)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./node_modules/@woocommerce/email-editor/build-module/store/settings.js");
/**
 * Internal dependencies
 */


function getInitialState() {
    const postId = _constants__WEBPACK_IMPORTED_MODULE_0__.editorCurrentPostId;
    return {
        postId,
        editorSettings: (0,_settings__WEBPACK_IMPORTED_MODULE_1__.getEditorSettings)(),
        theme: (0,_settings__WEBPACK_IMPORTED_MODULE_1__.getEditorTheme)(),
        styles: {
            globalStylesPostId: window.WooCommerceEmailEditor.user_theme_post_id,
        },
        urls: (0,_settings__WEBPACK_IMPORTED_MODULE_1__.getUrls)(),
        preview: {
            toEmail: window.WooCommerceEmailEditor.current_wp_user_email,
            isModalOpened: false,
            isSendingPreviewEmail: false,
            sendingPreviewStatus: null,
        },
        personalizationTags: {
            list: [],
            isFetching: false,
        },
    };
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/store/reducer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/store/reducer.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_PREVIEW_STATE':
            return {
                ...state,
                preview: { ...state.preview, ...action.state },
            };
        case 'CHANGE_PERSONALIZATION_TAGS_STATE':
            return {
                ...state,
                personalizationTags: {
                    ...state.personalizationTags,
                    ...action.state,
                },
            };
        case 'SET_PERSONALIZATION_TAGS':
            return {
                ...state,
                personalizationTags: {
                    ...state.personalizationTags,
                    list: action.personalizationTags,
                },
            };
        case 'SET_IS_FETCHING_PERSONALIZATION_TAGS':
            return {
                ...state,
                personalizationTags: {
                    ...state.personalizationTags,
                    ...action.state,
                },
            };
        case 'SET_PERSONALIZATION_TAGS_LIST':
            return {
                ...state,
                personalizationTags: {
                    ...state.personalizationTags,
                    ...action.state,
                },
            };
        default:
            return state;
    }
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/store/resolvers.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/store/resolvers.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPersonalizationTagsList: () => (/* binding */ getPersonalizationTagsList)
/* harmony export */ });
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/@woocommerce/email-editor/build-module/store/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


function* getPersonalizationTagsList() {
    // Access the state to check if already fetching
    const state = yield (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_constants__WEBPACK_IMPORTED_MODULE_2__.storeName);
    const isAlreadyFetching = state.personalizationTags?.isFetching;
    // Exit if a fetch operation is already in progress
    if (isAlreadyFetching) {
        return;
    }
    // Mark as fetching
    yield (0,_actions__WEBPACK_IMPORTED_MODULE_3__.setIsFetchingPersonalizationTags)(true);
    try {
        const data = yield (0,_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_0__.apiFetch)({
            path: `/woocommerce-email-editor/v1/get_personalization_tags`,
            method: 'GET',
        });
        yield (0,_actions__WEBPACK_IMPORTED_MODULE_3__.setPersonalizationTagsList)(data.result);
    }
    finally {
        // Ensure fetching status is reset
        yield (0,_actions__WEBPACK_IMPORTED_MODULE_3__.setIsFetchingPersonalizationTags)(false);
    }
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/store/selectors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/store/selectors.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canUserEditGlobalEmailStyles: () => (/* binding */ canUserEditGlobalEmailStyles),
/* harmony export */   canUserEditTemplates: () => (/* binding */ canUserEditTemplates),
/* harmony export */   getBlockPatternsForEmailTemplate: () => (/* binding */ getBlockPatternsForEmailTemplate),
/* harmony export */   getCurrentTemplate: () => (/* binding */ getCurrentTemplate),
/* harmony export */   getCurrentTemplateContent: () => (/* binding */ getCurrentTemplateContent),
/* harmony export */   getEditedEmailContent: () => (/* binding */ getEditedEmailContent),
/* harmony export */   getEditedPostTemplate: () => (/* binding */ getEditedPostTemplate),
/* harmony export */   getEmailPostId: () => (/* binding */ getEmailPostId),
/* harmony export */   getEmailTemplates: () => (/* binding */ getEmailTemplates),
/* harmony export */   getGlobalEmailStylesPost: () => (/* binding */ getGlobalEmailStylesPost),
/* harmony export */   getGlobalStylesPostId: () => (/* binding */ getGlobalStylesPostId),
/* harmony export */   getInitialEditorSettings: () => (/* binding */ getInitialEditorSettings),
/* harmony export */   getPaletteColors: () => (/* binding */ getPaletteColors),
/* harmony export */   getPersonalizationTagsList: () => (/* binding */ getPersonalizationTagsList),
/* harmony export */   getPersonalizationTagsState: () => (/* binding */ getPersonalizationTagsState),
/* harmony export */   getPreviewState: () => (/* binding */ getPreviewState),
/* harmony export */   getSentEmailEditorPosts: () => (/* binding */ getSentEmailEditorPosts),
/* harmony export */   getStyles: () => (/* binding */ getStyles),
/* harmony export */   getTheme: () => (/* binding */ getTheme),
/* harmony export */   getUrls: () => (/* binding */ getUrls),
/* harmony export */   hasEdits: () => (/* binding */ hasEdits),
/* harmony export */   hasEmptyContent: () => (/* binding */ hasEmptyContent),
/* harmony export */   isEmailSent: () => (/* binding */ isEmailSent),
/* harmony export */   isFeatureActive: () => (/* binding */ isFeatureActive)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */

function getContentFromEntity(entity) {
    if (entity?.content && typeof entity.content === 'function') {
        return entity.content(entity);
    }
    if (entity?.blocks) {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.serialize)(entity.blocks);
    }
    if (entity?.content) {
        return entity.content;
    }
    return '';
}
const patternsWithParsedBlocks = new WeakMap();
function enhancePatternWithParsedBlocks(pattern) {
    let enhancedPattern = patternsWithParsedBlocks.get(pattern);
    if (!enhancedPattern) {
        enhancedPattern = {
            ...pattern,
            get blocks() {
                return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.parse)(pattern.content);
            },
        };
        patternsWithParsedBlocks.set(pattern, enhancedPattern);
    }
    return enhancedPattern;
}
function regularizedGetEntityRecord(template) {
    if (!template) {
        return null;
    }
    return {
        ...template,
        title: template?.title?.raw || template?.title || '',
        content: template?.content?.raw || template?.content || '',
    };
}
const isFeatureActive = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)((select) => (_, feature) => !!select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).get(_constants__WEBPACK_IMPORTED_MODULE_5__.storeName, feature));
const hasEdits = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)((select) => () => {
    const postId = select(_constants__WEBPACK_IMPORTED_MODULE_5__.storeName).getEmailPostId();
    return !!select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).hasEditsForEntityRecord('postType', _constants__WEBPACK_IMPORTED_MODULE_5__.editorCurrentPostType, postId);
});
const hasEmptyContent = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)((select) => () => {
    const postId = select(_constants__WEBPACK_IMPORTED_MODULE_5__.storeName).getEmailPostId();
    const post = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEntityRecord('postType', _constants__WEBPACK_IMPORTED_MODULE_5__.editorCurrentPostType, postId);
    if (!post) {
        return true;
    }
    // @ts-expect-error Missing property in type
    const { content } = post;
    return !content.raw;
});
const isEmailSent = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)((select) => () => {
    const postId = select(_constants__WEBPACK_IMPORTED_MODULE_5__.storeName).getEmailPostId();
    const post = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEntityRecord('postType', _constants__WEBPACK_IMPORTED_MODULE_5__.editorCurrentPostType, postId);
    if (!post) {
        return false;
    }
    // @ts-expect-error Missing property in type
    const status = post.status;
    return status === 'sent';
});
/**
 * Returns the content of the email being edited.
 *
 * @param {Object} state Global application state.
 * @return {string} Post content.
 */
const getEditedEmailContent = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)((select) => () => {
    const postId = select(_constants__WEBPACK_IMPORTED_MODULE_5__.storeName).getEmailPostId();
    const record = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEditedEntityRecord('postType', _constants__WEBPACK_IMPORTED_MODULE_5__.editorCurrentPostType, postId);
    if (record) {
        return getContentFromEntity(record);
    }
    return '';
});
const getSentEmailEditorPosts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)((select) => () => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store)
    .getEntityRecords('postType', _constants__WEBPACK_IMPORTED_MODULE_5__.editorCurrentPostType, {
    per_page: 30, // show a maximum of 30 for now
    status: 'publish,sent', // show only sent emails
})
    ?.filter((post) => post?.content?.raw !== '' // filter out empty content
) || []);
const getBlockPatternsForEmailTemplate = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)((select) => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)(() => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store)
    .getBlockPatterns()
    .filter(({ templateTypes }) => Array.isArray(templateTypes) &&
    templateTypes.includes('email-template'))
    .map(enhancePatternWithParsedBlocks), () => [select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getBlockPatterns()]));
const canUserEditTemplates = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)((select) => () => {
    // @ts-expect-error Selector is not typed
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).canUser('create', {
        kind: 'postType',
        name: 'wp_template',
    });
});
function getTemplate(select, templateId) {
    if (canUserEditTemplates()) {
        return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEditedEntityRecord('postType', 'wp_template', templateId);
    }
    return regularizedGetEntityRecord(select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEntityRecord('postType', 'wp_template', templateId, { context: 'view' }));
}
/**
 * COPIED FROM https://github.com/WordPress/gutenberg/blob/9c6d4fe59763b188d27ad937c2f0daa39e4d9341/packages/edit-post/src/store/selectors.js
 * Retrieves the template of the currently edited post.
 *
 * @return {Object?} Post Template.
 */
const getEditedPostTemplate = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)((select) => () => {
    const currentTemplate = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).getEditedPostAttribute('template');
    if (currentTemplate) {
        const templateWithSameSlug = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store)
            .getEntityRecords('postType', 'wp_template', {
            per_page: -1,
            context: 'view',
        })
            // @ts-expect-error Missing property in type
            ?.find((template) => template.slug === currentTemplate);
        if (!templateWithSameSlug) {
            return regularizedGetEntityRecord(templateWithSameSlug);
        }
        // @ts-expect-error getEditedPostAttribute
        return getTemplate(select, templateWithSameSlug.id);
    }
    const defaultTemplateId = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getDefaultTemplateId({
        slug: 'email-general',
    });
    return getTemplate(select, defaultTemplateId);
});
const getCurrentTemplate = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)((select) => () => {
    const isEditingTemplate = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).getCurrentPostType() === 'wp_template';
    if (isEditingTemplate) {
        const templateId = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).getCurrentPostId();
        return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEditedEntityRecord('postType', 'wp_template', 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        templateId);
    }
    return getEditedPostTemplate();
});
const getCurrentTemplateContent = () => {
    const template = getCurrentTemplate();
    if (template) {
        return getContentFromEntity(template);
    }
    return '';
};
const canUserEditGlobalEmailStyles = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)((select) => () => {
    const postId = select(_constants__WEBPACK_IMPORTED_MODULE_5__.storeName).getGlobalStylesPostId();
    // @ts-expect-error Selector is not typed
    const canEdit = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).canUser('update', {
        kind: 'root',
        name: 'globalStyles',
        id: postId,
    });
    return { postId, canEdit };
});
const getGlobalEmailStylesPost = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)((select) => () => {
    const { postId, canEdit } = canUserEditGlobalEmailStyles();
    if (!postId || canEdit === undefined) {
        return null;
    }
    if (postId) {
        if (canEdit) {
            return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEditedEntityRecord('postType', 'wp_global_styles', postId);
        }
        return regularizedGetEntityRecord(select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEntityRecord('postType', 'wp_global_styles', postId, { context: 'view' }));
    }
    return null;
});
/**
 * Retrieves the email templates.
 */
const getEmailTemplates = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)((select) => () => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store)
    .getEntityRecords('postType', 'wp_template', {
    per_page: -1,
    post_type: _constants__WEBPACK_IMPORTED_MODULE_5__.editorCurrentPostType,
    context: 'view',
})
    // We still need to filter the templates because, in some cases, the API also returns custom templates
    // ignoring the post_type filter in the query
    ?.filter((template) => 
// @ts-expect-error Missing property in type
template.post_types.includes(_constants__WEBPACK_IMPORTED_MODULE_5__.editorCurrentPostType)));
function getEmailPostId(state) {
    return state.postId;
}
function getInitialEditorSettings(state) {
    return state.editorSettings;
}
function getPaletteColors(state) {
    // eslint-disable-next-line no-underscore-dangle
    return state.editorSettings.__experimentalFeatures.color.palette;
}
function getPreviewState(state) {
    return state.preview;
}
function getPersonalizationTagsState(state) {
    return state.personalizationTags;
}
function getPersonalizationTagsList(state) {
    return state.personalizationTags.list;
}
function getStyles(state) {
    return state.theme.styles;
}
function getTheme(state) {
    return state.theme;
}
function getGlobalStylesPostId(state) {
    return state.styles.globalStylesPostId;
}
function getUrls(state) {
    return state.urls;
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/store/settings.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/store/settings.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEditorSettings: () => (/* binding */ getEditorSettings),
/* harmony export */   getEditorTheme: () => (/* binding */ getEditorTheme),
/* harmony export */   getUrls: () => (/* binding */ getUrls)
/* harmony export */ });
function getEditorSettings() {
    return window.WooCommerceEmailEditor.editor_settings;
}
function getEditorTheme() {
    return window.WooCommerceEmailEditor.editor_theme;
}
function getUrls() {
    return window.WooCommerceEmailEditor.urls;
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/store/store.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/store/store.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actions: () => (/* reexport module object */ _actions__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   selectors: () => (/* reexport module object */ _selectors__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./node_modules/@woocommerce/email-editor/build-module/store/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./node_modules/@woocommerce/email-editor/build-module/store/constants.js");
/* harmony import */ var _initial_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initial-state */ "./node_modules/@woocommerce/email-editor/build-module/store/initial-state.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ "./node_modules/@woocommerce/email-editor/build-module/store/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./node_modules/@woocommerce/email-editor/build-module/store/selectors.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./node_modules/@woocommerce/email-editor/build-module/store/resolvers.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






const getConfig = () => ({
    actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
    controls: _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__.controls,
    selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__,
    resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__,
    reducer: _reducer__WEBPACK_IMPORTED_MODULE_5__.reducer,
    initialState: (0,_initial_state__WEBPACK_IMPORTED_MODULE_6__.getInitialState)(),
});
const createStore = () => {
    const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_7__.storeName, getConfig());
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);
    return store;
};



/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/store/types.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/store/types.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SendingPreviewStatus: () => (/* binding */ SendingPreviewStatus)
/* harmony export */ });
var SendingPreviewStatus;
(function (SendingPreviewStatus) {
    SendingPreviewStatus["SUCCESS"] = "success";
    SendingPreviewStatus["ERROR"] = "error";
})(SendingPreviewStatus || (SendingPreviewStatus = {}));


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/style-variables.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/style-variables.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCompressedVariableValue: () => (/* binding */ getCompressedVariableValue),
/* harmony export */   unwrapCompressedPresetStyleVariable: () => (/* binding */ unwrapCompressedPresetStyleVariable),
/* harmony export */   unwrapCompressedPresetStyleVariableName: () => (/* binding */ unwrapCompressedPresetStyleVariableName)
/* harmony export */ });
/**
 * This module contains a set of utility functions to handle style variables and their compressed format.
 * The compressed format is used to store style variables in the database and in the editor settings.
 * The uncompressed format is used when a variable is used in CSS.
 */
// Utility to normalize compressed preset var:preset:<type>|<value> variables to --wp--preset--<type>--<value> format
function unwrapCompressedPresetStyleVariableName(value) {
    if (typeof value !== 'string')
        return null;
    const match = value.match(/^var:preset\|([a-zA-Z0-9-]+)\|([a-zA-Z0-9-]+)$/);
    return match ? `--wp--preset--${match[1]}--${match[2]}` : null;
}
// Utility to normalize compressed preset var:preset:<type>|<value> variables to var(--wp--preset--<type>--<value>) format
function unwrapCompressedPresetStyleVariable(value) {
    const variableName = unwrapCompressedPresetStyleVariableName(value);
    return variableName ? `var(${variableName})` : value;
}
// Get the raw value of a compressed variable read from the root element
function getCompressedVariableValue(value) {
    const variableName = unwrapCompressedPresetStyleVariableName(value);
    if (!variableName)
        return value;
    const root = document.querySelector(':root');
    if (!root)
        return value;
    const computedStyle = getComputedStyle(root);
    return computedStyle.getPropertyValue(variableName).trim() || value;
}


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-module/text-hooks.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-module/text-hooks.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initTextHooks: () => (/* binding */ initTextHooks)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */


/**
 * Replace text in the email editor.
 * This is used to contextualize some default texts to the email editing context
 */
const initTextHooks = () => {
    const replaceTextMatrix = {
        'You’ve tried to select a block that is part of a template that may be used elsewhere on your site. Would you like to edit the template?': {
            domain: 'default',
            replacementText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You’ve tried to select a block that is part of a template that may be used in other emails. Would you like to edit the template?', 'woocommerce'),
        },
    };
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('i18n.gettext', 'woocommerce/email-editor/override-text', (translation, text, domain) => {
        if (replaceTextMatrix[text] &&
            replaceTextMatrix[text].domain === (domain || 'default')) {
            return replaceTextMatrix[text].replacementText;
        }
        return translation;
    });
};


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps}                                 props icon is the SVG component to render
 *                                                          size is a number specifying the icon size in pixels
 *                                                          Other props will be passed to wrapped SVG component
 * @param {import('react').ForwardedRef<HTMLElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element}  Icon component
 */
function Icon({
  icon,
  size = 24,
  ...props
}, ref) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props,
    ref
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Icon));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/arrow-left.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/arrow-left.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const arrowLeft = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowLeft);
//# sourceMappingURL=arrow-left.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/block-default.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/block-default.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const blockDefault = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blockDefault);
//# sourceMappingURL=block-default.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/check.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/check.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const check = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (check);
//# sourceMappingURL=check.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-left.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const chevronLeft = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronLeft);
//# sourceMappingURL=chevron-left.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/color.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/color.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const color = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (color);
//# sourceMappingURL=color.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/external.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/external.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const external = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (external);
//# sourceMappingURL=external.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/info.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/info.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const info = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.5 12a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.75 4v1.5h-1.5V8h1.5Zm0 8v-5h-1.5v5h1.5Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (info);
//# sourceMappingURL=info.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/justify-center.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/justify-center.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const justifyCenter = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (justifyCenter);
//# sourceMappingURL=justify-center.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/justify-left.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/justify-left.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const justifyLeft = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M9 9v6h11V9H9zM4 20h1.5V4H4v16z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (justifyLeft);
//# sourceMappingURL=justify-left.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/justify-right.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/justify-right.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const justifyRight = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (justifyRight);
//# sourceMappingURL=justify-right.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/layout.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/layout.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const layout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/styles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/styles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const styles = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 0 1-6.5 6.5v-13a6.5 6.5 0 0 1 6.5 6.5Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/trash.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/trash.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const trash = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trash);
//# sourceMappingURL=trash.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/typography.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/typography.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const typography = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M6.9 7L3 17.8h1.7l1-2.8h4.1l1 2.8h1.7L8.6 7H6.9zm-.7 6.6l1.5-4.3 1.5 4.3h-3zM21.6 17c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1s-.3-.1-.4-.2c-.1-.1-.1-.3-.1-.6V12c0-.5 0-1-.1-1.4-.1-.4-.3-.7-.5-1-.2-.2-.5-.4-.9-.5-.4 0-.8-.1-1.3-.1s-1 .1-1.4.2c-.4.1-.7.3-1 .4-.2.2-.4.3-.6.5-.1.2-.2.4-.2.7 0 .3.1.5.2.8.2.2.4.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.6-.4.2-.2.4-.3.7-.4.3-.1.6-.1.8-.1.3 0 .6 0 .8.1.2.1.4.3.5.5.1.2.2.5.2.9v1.1c0 .3-.1.5-.3.6-.2.2-.5.3-.9.4-.3.1-.7.3-1.1.4-.4.1-.8.3-1.1.5-.3.2-.6.4-.8.7-.2.3-.3.7-.3 1.2 0 .6.2 1.1.5 1.4.3.4.9.5 1.6.5.5 0 1-.1 1.4-.3.4-.2.8-.6 1.1-1.1 0 .4.1.7.3 1 .2.3.6.4 1.2.4.4 0 .7-.1.9-.2.2-.1.5-.3.7-.4h-.3zm-3-.9c-.2.4-.5.7-.8.8-.3.2-.6.2-.8.2-.4 0-.6-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.5.1-.9.3-1.2s.5-.5.8-.7c.3-.2.7-.3 1-.5.3-.1.6-.3.7-.6v3.4z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typography);
//# sourceMappingURL=typography.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/wordpress.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/wordpress.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const wordpress = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wordpress);
//# sourceMappingURL=wordpress.js.map

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _woocommerce_email_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/email-editor */ "./node_modules/@woocommerce/email-editor/build-module/index.js");
/* harmony import */ var _woocommerce_email_editor_build_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @woocommerce/email-editor/build-style/style.css */ "./node_modules/@woocommerce/email-editor/build-style/style.css");


(0,_woocommerce_email_editor__WEBPACK_IMPORTED_MODULE_1__.initializeEditor)('email-editor-demo-container');

/***/ }),

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/***/ ((module) => {



var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return Object.propertyIsEnumerable.call(target, symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "./node_modules/@woocommerce/email-editor/build-style/style.css":
/*!**********************************************************************!*\
  !*** ./node_modules/@woocommerce/email-editor/build-style/style.css ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/block-library":
/*!**************************************!*\
  !*** external ["wp","blockLibrary"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockLibrary"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/commands":
/*!**********************************!*\
  !*** external ["wp","commands"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["commands"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/data-controls":
/*!**************************************!*\
  !*** external ["wp","dataControls"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["dataControls"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/format-library":
/*!***************************************!*\
  !*** external ["wp","formatLibrary"] ***!
  \***************************************/
/***/ ((module) => {

module.exports = window["wp"]["formatLibrary"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/is-shallow-equal":
/*!****************************************!*\
  !*** external ["wp","isShallowEqual"] ***!
  \****************************************/
/***/ ((module) => {

module.exports = window["wp"]["isShallowEqual"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["keycodes"];

/***/ }),

/***/ "@wordpress/media-utils":
/*!************************************!*\
  !*** external ["wp","mediaUtils"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["mediaUtils"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/preferences":
/*!*************************************!*\
  !*** external ["wp","preferences"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["preferences"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/priority-queue":
/*!***************************************!*\
  !*** external ["wp","priorityQueue"] ***!
  \***************************************/
/***/ ((module) => {

module.exports = window["wp"]["priorityQueue"];

/***/ }),

/***/ "@wordpress/private-apis":
/*!*************************************!*\
  !*** external ["wp","privateApis"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["privateApis"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["richText"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["url"];

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmailpoet_email_editor_demo"] = self["webpackChunkmailpoet_email_editor_demo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map