(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/drawer/index.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/drawer/index.zh-CN.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/drawer/index.zh-CN.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"屏幕边缘滑出的浮层面板。\"\n    ],\n    [\n      \"h2\",\n      \"何时使用\"\n    ],\n    [\n      \"p\",\n      \"抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          \"当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。\"\n        ]\n      ]\n    ]\n  ],\n  \"meta\": {\n    \"type\": \"反馈\",\n    \"category\": \"Components\",\n    \"subtitle\": \"抽屉\",\n    \"title\": \"Drawer\",\n    \"cover\": \"https://gw.alipayobjects.com/zos/alicdn/7z8NJQhFb/Drawer.svg\",\n    \"filename\": \"components/drawer/index.zh-CN.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#何时使用\",\n          \"title\": \"何时使用\"\n        },\n        \"何时使用\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"autoFocus\"\n          ],\n          [\n            \"td\",\n            \"抽屉展开后是否将焦点切换至其 Dom 节点\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\",\n            \"4.17.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"afterVisibleChange\"\n          ],\n          [\n            \"td\",\n            \"切换抽屉时动画结束后的回调\"\n          ],\n          [\n            \"td\",\n            \"function(visible)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"bodyStyle\"\n          ],\n          [\n            \"td\",\n            \"可用于设置 Drawer 内容部分的样式\"\n          ],\n          [\n            \"td\",\n            \"CSSProperties\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"className\"\n          ],\n          [\n            \"td\",\n            \"对话框外层容器的类名\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"closable\"\n          ],\n          [\n            \"td\",\n            \"是否显示左上角的关闭按钮\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"closeIcon\"\n          ],\n          [\n            \"td\",\n            \"自定义关闭图标\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"<\",\n            \"CloseOutlined />\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"contentWrapperStyle\"\n          ],\n          [\n            \"td\",\n            \"可用于设置 Drawer 包裹内容部分的样式\"\n          ],\n          [\n            \"td\",\n            \"CSSProperties\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"destroyOnClose\"\n          ],\n          [\n            \"td\",\n            \"关闭时销毁 Drawer 里的子元素\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"drawerStyle\"\n          ],\n          [\n            \"td\",\n            \"用于设置 Drawer 弹出层的样式\"\n          ],\n          [\n            \"td\",\n            \"CSSProperties\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"extra\"\n          ],\n          [\n            \"td\",\n            \"抽屉右上角的操作区域\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.17.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"footer\"\n          ],\n          [\n            \"td\",\n            \"抽屉的页脚\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"footerStyle\"\n          ],\n          [\n            \"td\",\n            \"抽屉页脚部件的样式\"\n          ],\n          [\n            \"td\",\n            \"CSSProperties\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"forceRender\"\n          ],\n          [\n            \"td\",\n            \"预渲染 Drawer 内元素\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"getContainer\"\n          ],\n          [\n            \"td\",\n            \"指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom\"\n          ],\n          [\n            \"td\",\n            \"HTMLElement \",\n            \"|\",\n            \" () => HTMLElement \",\n            \"|\",\n            \" Selectors \",\n            \"|\",\n            \" false\"\n          ],\n          [\n            \"td\",\n            \"body\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"headerStyle\"\n          ],\n          [\n            \"td\",\n            \"用于设置 Drawer 头部的样式\"\n          ],\n          [\n            \"td\",\n            \"CSSProperties\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"height\"\n          ],\n          [\n            \"td\",\n            \"高度, 在 \",\n            [\n              \"code\",\n              \"placement\"\n            ],\n            \" 为 \",\n            [\n              \"code\",\n              \"top\"\n            ],\n            \" 或 \",\n            [\n              \"code\",\n              \"bottom\"\n            ],\n            \" 时使用\"\n          ],\n          [\n            \"td\",\n            \"string \",\n            \"|\",\n            \" number\"\n          ],\n          [\n            \"td\",\n            \"256\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"keyboard\"\n          ],\n          [\n            \"td\",\n            \"是否支持键盘 esc 关闭\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"mask\"\n          ],\n          [\n            \"td\",\n            \"是否展示遮罩\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"maskClosable\"\n          ],\n          [\n            \"td\",\n            \"点击蒙层是否允许关闭\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"maskStyle\"\n          ],\n          [\n            \"td\",\n            \"遮罩样式\"\n          ],\n          [\n            \"td\",\n            \"CSSProperties\"\n          ],\n          [\n            \"td\",\n            \"{}\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"placement\"\n          ],\n          [\n            \"td\",\n            \"抽屉的方向\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"top\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"right\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"bottom\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"left\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"right\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"push\"\n          ],\n          [\n            \"td\",\n            \"用于设置多层 Drawer 的推动行为\"\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" { distance: string \",\n            \"|\",\n            \" number }\"\n          ],\n          [\n            \"td\",\n            \"{ distance: 180 }\"\n          ],\n          [\n            \"td\",\n            \"4.5.0+\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"size\"\n          ],\n          [\n            \"td\",\n            \"预设抽屉宽度（或高度），default \",\n            [\n              \"code\",\n              \"378px\"\n            ],\n            \" 和 large \",\n            [\n              \"code\",\n              \"736px\"\n            ]\n          ],\n          [\n            \"td\",\n            \"'default' \",\n            \"|\",\n            \" 'large'\"\n          ],\n          [\n            \"td\",\n            \"'default'\"\n          ],\n          [\n            \"td\",\n            \"4.17.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"style\"\n          ],\n          [\n            \"td\",\n            \"可用于设置 Drawer 最外层容器的样式，和 \",\n            [\n              \"code\",\n              \"drawerStyle\"\n            ],\n            \" 的区别是作用节点包括 \",\n            [\n              \"code\",\n              \"mask\"\n            ]\n          ],\n          [\n            \"td\",\n            \"CSSProperties\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"title\"\n          ],\n          [\n            \"td\",\n            \"标题\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"visible\"\n          ],\n          [\n            \"td\",\n            \"Drawer 是否可见\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"width\"\n          ],\n          [\n            \"td\",\n            \"宽度\"\n          ],\n          [\n            \"td\",\n            \"string \",\n            \"|\",\n            \" number\"\n          ],\n          [\n            \"td\",\n            \"378\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"zIndex\"\n          ],\n          [\n            \"td\",\n            \"设置 Drawer 的 \",\n            [\n              \"code\",\n              \"z-index\"\n            ]\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"1000\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onClose\"\n          ],\n          [\n            \"td\",\n            \"点击遮罩层或左上角叉或取消按钮的回调\"\n          ],\n          [\n            \"td\",\n            \"function(e)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/drawer/index.zh-CN.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);