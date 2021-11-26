(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/page-header/index.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/page-header/index.zh-CN.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/page-header/index.zh-CN.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作等、页面级导航组成。\"\n    ],\n    [\n      \"h2\",\n      \"何时使用\"\n    ],\n    [\n      \"p\",\n      \"当需要使用户快速理解当前页是什么以及方便用户使用页面功能时使用，通常也可被用作页面间导航。\"\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"type\": \"导航\",\n    \"title\": \"PageHeader\",\n    \"cols\": 1,\n    \"subtitle\": \"页头\",\n    \"cover\": \"https://gw.alipayobjects.com/zos/alicdn/6bKE0Cq0R/PageHeader.svg\",\n    \"filename\": \"components/page-header/index.zh-CN.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#何时使用\",\n          \"title\": \"何时使用\"\n        },\n        \"何时使用\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"avatar\"\n          ],\n          [\n            \"td\",\n            \"标题栏旁的头像\"\n          ],\n          [\n            \"td\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"/components/avatar/\"\n              },\n              \"AvatarProps\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"backIcon\"\n          ],\n          [\n            \"td\",\n            \"自定义 back icon ，如果为 false 不渲染 back icon\"\n          ],\n          [\n            \"td\",\n            \"ReactNode \",\n            \"|\",\n            \" boolean\"\n          ],\n          [\n            \"td\",\n            \"<\",\n            \"ArrowLeft />\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"breadcrumb\"\n          ],\n          [\n            \"td\",\n            \"面包屑的配置\"\n          ],\n          [\n            \"td\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"/components/breadcrumb/\"\n              },\n              \"Breadcrumb\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"breadcrumbRender\"\n          ],\n          [\n            \"td\",\n            \"自定义面包屑区域的内容\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"(props, originBreadcrumb) => ReactNode\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.11.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"extra\"\n          ],\n          [\n            \"td\",\n            \"操作区，位于 title 行的行尾\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"footer\"\n          ],\n          [\n            \"td\",\n            \"PageHeader 的页脚，一般用于渲染 TabBar\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"ghost\"\n          ],\n          [\n            \"td\",\n            \"pageHeader 的类型，将会改变背景颜色\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"subTitle\"\n          ],\n          [\n            \"td\",\n            \"自定义的二级标题文字\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"tags\"\n          ],\n          [\n            \"td\",\n            \"title 旁的 tag 列表\"\n          ],\n          [\n            \"td\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"/components/tag/\"\n              },\n              \"Tag\"\n            ],\n            \"[\",\n            \"] \",\n            \"|\",\n            \" \",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"/components/tag/\"\n              },\n              \"Tag\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"title\"\n          ],\n          [\n            \"td\",\n            \"自定义标题文字\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onBack\"\n          ],\n          [\n            \"td\",\n            \"返回按钮的点击事件\"\n          ],\n          [\n            \"td\",\n            \"() => void\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"style\",\n      \"\\n  [data-theme=\\\"dark\\\"] .site-page-header {\\n    border: 1px solid #303030;\\n  }\\n  [data-theme=\\\"dark\\\"]  .site-page-header-ghost-wrapper {\\n    background-color: rgba(255,255,255,0.08);\\n  }\\n\"\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/page-header/index.zh-CN.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);