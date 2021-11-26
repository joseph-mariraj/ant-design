(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/select/index.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/select/index.zh-CN.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/select/index.zh-CN.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"下拉选择器。\"\n    ],\n    [\n      \"h2\",\n      \"何时使用\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          \"弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"当选项少时（少于 5 项），建议直接将选项平铺，使用 \",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"/components/radio/\"\n            },\n            \"Radio\"\n          ],\n          \" 是更好的选择。\"\n        ]\n      ]\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"subtitle\": \"选择器\",\n    \"type\": \"数据录入\",\n    \"title\": \"Select\",\n    \"cover\": \"https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg\",\n    \"filename\": \"components/select/index.zh-CN.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#何时使用\",\n          \"title\": \"何时使用\"\n        },\n        \"何时使用\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#FAQ\",\n          \"title\": \"FAQ\"\n        },\n        \"FAQ\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"jsx\",\n        \"highlighted\": \"<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>Select</span><span class=\\\"token punctuation\\\">></span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>Option</span> <span class=\\\"token attr-name\\\">value</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>lucy<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">></span></span>lucy<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>Option</span><span class=\\\"token punctuation\\\">></span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>Select</span><span class=\\\"token punctuation\\\">></span></span>\"\n      },\n      [\n        \"code\",\n        \"<Select>\\n  <Option value=\\\"lucy\\\">lucy</Option>\\n</Select>\"\n      ]\n    ],\n    [\n      \"h3\",\n      \"Select props\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"allowClear\"\n          ],\n          [\n            \"td\",\n            \"支持清除\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"autoClearSearchValue\"\n          ],\n          [\n            \"td\",\n            \"是否在选中项后清空搜索框，只在 \",\n            [\n              \"code\",\n              \"mode\"\n            ],\n            \" 为 \",\n            [\n              \"code\",\n              \"multiple\"\n            ],\n            \" 或 \",\n            [\n              \"code\",\n              \"tags\"\n            ],\n            \" 时有效\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"autoFocus\"\n          ],\n          [\n            \"td\",\n            \"默认获取焦点\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"bordered\"\n          ],\n          [\n            \"td\",\n            \"是否有边框\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"clearIcon\"\n          ],\n          [\n            \"td\",\n            \"自定义的多选框清空图标\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"defaultActiveFirstOption\"\n          ],\n          [\n            \"td\",\n            \"是否默认高亮第一个选项\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"defaultOpen\"\n          ],\n          [\n            \"td\",\n            \"是否默认展开下拉菜单\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"defaultValue\"\n          ],\n          [\n            \"td\",\n            \"指定默认选中的条目\"\n          ],\n          [\n            \"td\",\n            \"string \",\n            \"|\",\n            \" string\",\n            \"[\",\n            \"]\",\n            [\n              \"br\"\n            ],\n            \"number \",\n            \"|\",\n            \" number\",\n            \"[\",\n            \"]\",\n            [\n              \"br\"\n            ],\n            \"LabeledValue \",\n            \"|\",\n            \" LabeledValue\",\n            \"[\",\n            \"]\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"disabled\"\n          ],\n          [\n            \"td\",\n            \"是否禁用\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"dropdownClassName\"\n          ],\n          [\n            \"td\",\n            \"下拉菜单的 className 属性\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"dropdownMatchSelectWidth\"\n          ],\n          [\n            \"td\",\n            \"下拉菜单和选择器同宽。默认将设置 \",\n            [\n              \"code\",\n              \"min-width\"\n            ],\n            \"，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动\"\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" number\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"dropdownRender\"\n          ],\n          [\n            \"td\",\n            \"自定义下拉框内容\"\n          ],\n          [\n            \"td\",\n            \"(originNode: ReactNode) => ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"dropdownStyle\"\n          ],\n          [\n            \"td\",\n            \"下拉菜单的 style 属性\"\n          ],\n          [\n            \"td\",\n            \"CSSProperties\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"fieldNames\"\n          ],\n          [\n            \"td\",\n            \"自定义节点 label、key、options 的字段\"\n          ],\n          [\n            \"td\",\n            \"object\"\n          ],\n          [\n            \"td\",\n            \"{ label: \",\n            [\n              \"code\",\n              \"label\"\n            ],\n            \", key: \",\n            [\n              \"code\",\n              \"key\"\n            ],\n            \", options: \",\n            [\n              \"code\",\n              \"options\"\n            ],\n            \" }\"\n          ],\n          [\n            \"td\",\n            \"4.17.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"filterOption\"\n          ],\n          [\n            \"td\",\n            \"是否根据输入项进行筛选。当其为一个函数时，会接收 \",\n            [\n              \"code\",\n              \"inputValue\"\n            ],\n            \" \",\n            [\n              \"code\",\n              \"option\"\n            ],\n            \" 两个参数，当 \",\n            [\n              \"code\",\n              \"option\"\n            ],\n            \" 符合筛选条件时，应返回 true，反之则返回 false\"\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" function(inputValue, option)\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"filterSort\"\n          ],\n          [\n            \"td\",\n            \"搜索时对筛选结果项的排序函数, 类似\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort\"\n              },\n              \"Array.sort\"\n            ],\n            \"里的 compareFunction\"\n          ],\n          [\n            \"td\",\n            \"(optionA: Option, optionB: Option) => number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.9.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"getPopupContainer\"\n          ],\n          [\n            \"td\",\n            \"菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"https://codesandbox.io/s/4j168r7jw0\"\n              },\n              \"示例\"\n            ]\n          ],\n          [\n            \"td\",\n            \"function(triggerNode)\"\n          ],\n          [\n            \"td\",\n            \"() => document.body\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"labelInValue\"\n          ],\n          [\n            \"td\",\n            \"是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 \",\n            [\n              \"code\",\n              \"string\"\n            ],\n            \" 变为 { value: string, label: ReactNode } 的格式\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"listHeight\"\n          ],\n          [\n            \"td\",\n            \"设置弹窗滚动高度\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"256\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"loading\"\n          ],\n          [\n            \"td\",\n            \"加载中状态\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"maxTagCount\"\n          ],\n          [\n            \"td\",\n            \"最多显示多少个 tag，响应式模式会对性能产生损耗\"\n          ],\n          [\n            \"td\",\n            \"number \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"responsive\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"responsive: 4.10\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"maxTagPlaceholder\"\n          ],\n          [\n            \"td\",\n            \"隐藏 tag 时显示的内容\"\n          ],\n          [\n            \"td\",\n            \"ReactNode \",\n            \"|\",\n            \" function(omittedValues)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"maxTagTextLength\"\n          ],\n          [\n            \"td\",\n            \"最大显示的 tag 文本长度\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"menuItemSelectedIcon\"\n          ],\n          [\n            \"td\",\n            \"自定义多选时当前选中的条目图标\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"mode\"\n          ],\n          [\n            \"td\",\n            \"设置 Select 的模式为多选或标签\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"multiple\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"tags\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"notFoundContent\"\n          ],\n          [\n            \"td\",\n            \"当下拉列表为空时显示的内容\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"Not Found\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"open\"\n          ],\n          [\n            \"td\",\n            \"是否展开下拉菜单\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"optionFilterProp\"\n          ],\n          [\n            \"td\",\n            \"搜索时过滤对应的 \",\n            [\n              \"code\",\n              \"option\"\n            ],\n            \" 属性，如设置为 \",\n            [\n              \"code\",\n              \"children\"\n            ],\n            \" 表示对内嵌内容进行搜索。若通过 \",\n            [\n              \"code\",\n              \"options\"\n            ],\n            \" 属性配置选项内容，建议设置 \",\n            [\n              \"code\",\n              \"optionFilterProp=\\\"label\\\"\"\n            ],\n            \" 来对内容进行搜索。\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"value\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"optionLabelProp\"\n          ],\n          [\n            \"td\",\n            \"回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 \",\n            [\n              \"code\",\n              \"value\"\n            ],\n            \"。\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"https://codesandbox.io/s/antd-reproduction-template-tk678\"\n              },\n              \"示例\"\n            ]\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"children\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"options\"\n          ],\n          [\n            \"td\",\n            \"数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能\"\n          ],\n          [\n            \"td\",\n            \"{ label, value }\",\n            \"[\",\n            \"]\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"placeholder\"\n          ],\n          [\n            \"td\",\n            \"选择框默认文本\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"removeIcon\"\n          ],\n          [\n            \"td\",\n            \"自定义的多选框清除图标\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"searchValue\"\n          ],\n          [\n            \"td\",\n            \"控制搜索文本\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"showArrow\"\n          ],\n          [\n            \"td\",\n            \"是否显示下拉小箭头\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"单选为 true，多选为 false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"showSearch\"\n          ],\n          [\n            \"td\",\n            \"使单选模式可搜索\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"size\"\n          ],\n          [\n            \"td\",\n            \"选择框大小\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"large\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"middle\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"small\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"middle\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"suffixIcon\"\n          ],\n          [\n            \"td\",\n            \"自定义的选择框后缀图标\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"tagRender\"\n          ],\n          [\n            \"td\",\n            \"自定义 tag 内容 render，仅在 \",\n            [\n              \"code\",\n              \"mode\"\n            ],\n            \" 为 \",\n            [\n              \"code\",\n              \"multiple\"\n            ],\n            \" 或 \",\n            [\n              \"code\",\n              \"tags\"\n            ],\n            \" 时生效\"\n          ],\n          [\n            \"td\",\n            \"(props) => ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"tokenSeparators\"\n          ],\n          [\n            \"td\",\n            \"在 \",\n            [\n              \"code\",\n              \"tags\"\n            ],\n            \" 和 \",\n            [\n              \"code\",\n              \"multiple\"\n            ],\n            \" 模式下自动分词的分隔符\"\n          ],\n          [\n            \"td\",\n            \"string\",\n            \"[\",\n            \"]\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"value\"\n          ],\n          [\n            \"td\",\n            \"指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新）\"\n          ],\n          [\n            \"td\",\n            \"string \",\n            \"|\",\n            \" string\",\n            \"[\",\n            \"]\",\n            [\n              \"br\"\n            ],\n            \"number \",\n            \"|\",\n            \" number\",\n            \"[\",\n            \"]\",\n            [\n              \"br\"\n            ],\n            \"LabeledValue \",\n            \"|\",\n            \" LabeledValue\",\n            \"[\",\n            \"]\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"virtual\"\n          ],\n          [\n            \"td\",\n            \"设置 false 时关闭虚拟滚动\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\",\n            \"4.1.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onBlur\"\n          ],\n          [\n            \"td\",\n            \"失去焦点时回调\"\n          ],\n          [\n            \"td\",\n            \"function\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onChange\"\n          ],\n          [\n            \"td\",\n            \"选中 option，或 input 的 value 变化时，调用此函数\"\n          ],\n          [\n            \"td\",\n            \"function(value, option:Option \",\n            \"|\",\n            \" Array\",\n            \"<\",\n            \"Option>)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onClear\"\n          ],\n          [\n            \"td\",\n            \"清除内容时回调\"\n          ],\n          [\n            \"td\",\n            \"function\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.6.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onDeselect\"\n          ],\n          [\n            \"td\",\n            \"取消选中时调用，参数为选中项的 value (或 key) 值，仅在 \",\n            [\n              \"code\",\n              \"multiple\"\n            ],\n            \" 或 \",\n            [\n              \"code\",\n              \"tags\"\n            ],\n            \" 模式下生效\"\n          ],\n          [\n            \"td\",\n            \"function(string \",\n            \"|\",\n            \" number \",\n            \"|\",\n            \" LabeledValue)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onDropdownVisibleChange\"\n          ],\n          [\n            \"td\",\n            \"展开下拉菜单的回调\"\n          ],\n          [\n            \"td\",\n            \"function(open)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onFocus\"\n          ],\n          [\n            \"td\",\n            \"获得焦点时回调\"\n          ],\n          [\n            \"td\",\n            \"function\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onInputKeyDown\"\n          ],\n          [\n            \"td\",\n            \"按键按下时回调\"\n          ],\n          [\n            \"td\",\n            \"function\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onMouseEnter\"\n          ],\n          [\n            \"td\",\n            \"鼠标移入时回调\"\n          ],\n          [\n            \"td\",\n            \"function\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onMouseLeave\"\n          ],\n          [\n            \"td\",\n            \"鼠标移出时回调\"\n          ],\n          [\n            \"td\",\n            \"function\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onPopupScroll\"\n          ],\n          [\n            \"td\",\n            \"下拉列表滚动时的回调\"\n          ],\n          [\n            \"td\",\n            \"function\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onSearch\"\n          ],\n          [\n            \"td\",\n            \"文本框值变化时回调\"\n          ],\n          [\n            \"td\",\n            \"function(value: string)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onSelect\"\n          ],\n          [\n            \"td\",\n            \"被选中时调用，参数为选中项的 value (或 key) 值\"\n          ],\n          [\n            \"td\",\n            \"function(string \",\n            \"|\",\n            \" number \",\n            \"|\",\n            \" LabeledValue, option: Option)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"blockquote\",\n      [\n        \"p\",\n        \"注意，如果发现下拉菜单跟随页面滚动，或者需要在其他弹层中触发 Select，请尝试使用 \",\n        [\n          \"code\",\n          \"getPopupContainer={triggerNode => triggerNode.parentElement}\"\n        ],\n        \" 将下拉弹层渲染节点固定在触发器的父元素中。\"\n      ]\n    ],\n    [\n      \"h3\",\n      \"Select Methods\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"名称\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"blur()\"\n          ],\n          [\n            \"td\",\n            \"取消焦点\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"focus()\"\n          ],\n          [\n            \"td\",\n            \"获取焦点\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"Option props\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"className\"\n          ],\n          [\n            \"td\",\n            \"Option 器类名\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"disabled\"\n          ],\n          [\n            \"td\",\n            \"是否禁用\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"title\"\n          ],\n          [\n            \"td\",\n            \"选中该 Option 后，Select 的 title\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"value\"\n          ],\n          [\n            \"td\",\n            \"默认根据此属性值进行筛选\"\n          ],\n          [\n            \"td\",\n            \"string \",\n            \"|\",\n            \" number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"OptGroup props\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"key\"\n          ],\n          [\n            \"td\",\n            \"Key\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"label\"\n          ],\n          [\n            \"td\",\n            \"组名\"\n          ],\n          [\n            \"td\",\n            \"string \",\n            \"|\",\n            \" React.Element\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h2\",\n      \"FAQ\"\n    ],\n    [\n      \"h3\",\n      [\n        \"code\",\n        \"tag\"\n      ],\n      \" 模式下为何搜索有时会出现两个相同选项？\"\n    ],\n    [\n      \"p\",\n      \"这一般是 \",\n      [\n        \"code\",\n        \"options\"\n      ],\n      \" 中的 \",\n      [\n        \"code\",\n        \"label\"\n      ],\n      \" 和 \",\n      [\n        \"code\",\n        \"value\"\n      ],\n      \" 不同导致的，你可以通过 \",\n      [\n        \"code\",\n        \"optionFilterProp=\\\"label\\\"\"\n      ],\n      \" 将过滤设置为展示值以避免这种情况。\"\n    ],\n    [\n      \"h3\",\n      \"点击 \",\n      [\n        \"code\",\n        \"dropdownRender\"\n      ],\n      \" 里的内容浮层关闭怎么办？\"\n    ],\n    [\n      \"p\",\n      \"看下 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"#components-select-demo-custom-dropdown-menu\"\n        },\n        \"dropdownRender 例子\"\n      ],\n      \" 里的说明。\"\n    ],\n    [\n      \"h3\",\n      \"自定义 Option 样式导致滚动异常怎么办？\"\n    ],\n    [\n      \"p\",\n      \"这是由于虚拟滚动默认选项高度为 \",\n      [\n        \"code\",\n        \"32px\"\n      ],\n      \"，如果你的选项高度小于该值则需要通过 \",\n      [\n        \"code\",\n        \"listItemHeight\"\n      ],\n      \" 属性调整，而 \",\n      [\n        \"code\",\n        \"listHeight\"\n      ],\n      \" 用于设置滚动容器高度：\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"tsx\",\n        \"highlighted\": \"<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token keyword\\\">Select</span> listItemHeight<span class=\\\"token operator\\\">=</span>{<span class=\\\"token number\\\">10</span>} listHeight<span class=\\\"token operator\\\">=</span>{<span class=\\\"token number\\\">250</span>} <span class=\\\"token operator\\\">/</span><span class=\\\"token operator\\\">></span>\"\n      },\n      [\n        \"code\",\n        \"<Select listItemHeight={10} listHeight={250} />\"\n      ]\n    ],\n    [\n      \"p\",\n      \"注意：\",\n      [\n        \"code\",\n        \"listItemHeight\"\n      ],\n      \" 和 \",\n      [\n        \"code\",\n        \"listHeight\"\n      ],\n      \" 为内部属性，如无必要，请勿修改该值。\"\n    ],\n    [\n      \"h3\",\n      \"为何无障碍测试会报缺失 \",\n      [\n        \"code\",\n        \"aria-\"\n      ],\n      \" 属性？\"\n    ],\n    [\n      \"p\",\n      \"Select 无障碍辅助元素仅在弹窗展开时创建，因而当你在进行无障碍检测时请先打开下拉后再进行测试。对于 \",\n      [\n        \"code\",\n        \"aria-label\"\n      ],\n      \" 与 \",\n      [\n        \"code\",\n        \"aria-labelledby\"\n      ],\n      \" 属性缺失警告，请自行为 Select 组件添加相应无障碍属性。\"\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/select/index.zh-CN.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);