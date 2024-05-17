'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@jsonforms/core');
var vue = require('vue');
var vue2 = require('@jsonforms/vue2');
var lib = require('vuetify/lib');
var cloneDeep = require('lodash/cloneDeep');
var debounce = require('lodash/debounce');
var merge = require('lodash/merge');
var get = require('lodash/get');
var isPlainObject = require('lodash/isPlainObject');
var mergeWith = require('lodash/mergeWith');
var dayjs = require('dayjs');
var customParsing = require('dayjs/plugin/customParseFormat');
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone');
var findIndex = require('lodash/findIndex');
var omit = require('lodash/omit');
var startCase = require('lodash/startCase');
var isEmpty = require('lodash/isEmpty');
var isObject = require('lodash/isObject');
var vMask = require('v-mask');
var isArray = require('lodash/isArray');
var every = require('lodash/every');
var isString = require('lodash/isString');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cloneDeep__default = /*#__PURE__*/_interopDefaultLegacy(cloneDeep);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var merge__default = /*#__PURE__*/_interopDefaultLegacy(merge);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var isPlainObject__default = /*#__PURE__*/_interopDefaultLegacy(isPlainObject);
var mergeWith__default = /*#__PURE__*/_interopDefaultLegacy(mergeWith);
var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
var customParsing__default = /*#__PURE__*/_interopDefaultLegacy(customParsing);
var utc__default = /*#__PURE__*/_interopDefaultLegacy(utc);
var timezone__default = /*#__PURE__*/_interopDefaultLegacy(timezone);
var findIndex__default = /*#__PURE__*/_interopDefaultLegacy(findIndex);
var omit__default = /*#__PURE__*/_interopDefaultLegacy(omit);
var startCase__default = /*#__PURE__*/_interopDefaultLegacy(startCase);
var isEmpty__default = /*#__PURE__*/_interopDefaultLegacy(isEmpty);
var isObject__default = /*#__PURE__*/_interopDefaultLegacy(isObject);
var isArray__default = /*#__PURE__*/_interopDefaultLegacy(isArray);
var every__default = /*#__PURE__*/_interopDefaultLegacy(every);
var isString__default = /*#__PURE__*/_interopDefaultLegacy(isString);

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var defaultStyles = {
  control: {
    root: 'control',
    input: 'input'
  },
  verticalLayout: {
    root: 'vertical-layout',
    item: 'vertical-layout-item'
  },
  horizontalLayout: {
    root: 'horizontal-layout',
    item: 'horizontal-layout-item'
  },
  group: {
    root: 'group',
    label: 'group-label',
    item: 'group-item',
    bare: 'group-bare',
    alignLeft: 'group-align-left'
  },
  arrayList: {
    root: 'array-list',
    toolbar: 'array-list-toolbar',
    validationIcon: 'array-list-validation',
    addButton: 'array-list-add',
    label: 'array-list-label',
    noData: 'array-list-no-data',
    item: 'array-list-item',
    itemHeader: 'array-list-item-header',
    itemLabel: 'array-list-item-label',
    itemContent: 'array-list-item-content',
    itemMoveUp: 'array-list-item-move-up',
    itemMoveDown: 'array-list-item-move-down',
    itemDelete: 'array-list-item-delete'
  },
  listWithDetail: {
    root: 'list-with-detail',
    toolbar: 'list-with-detail-toolbar',
    addButton: 'list-with-detail-add',
    label: 'list-with-detail-label',
    noData: 'list-with-detail-no-data',
    item: 'list-with-detail-item',
    itemLabel: 'list-with-detail-item-label',
    itemContent: 'list-with-detail-item-content',
    itemMoveUp: 'list-with-detail-item-move-up',
    itemMoveDown: 'list-with-detail-item-move-down',
    itemDelete: 'list-with-detail-item-delete'
  },
  label: {
    root: 'label-element'
  },
  categorization: {
    root: 'categorization'
  }
};

var createEmptyStyles = function createEmptyStyles() {
  return {
    control: {},
    verticalLayout: {},
    horizontalLayout: {},
    group: {},
    arrayList: {},
    listWithDetail: {},
    label: {},
    categorization: {}
  };
};
var useStyles = function useStyles(element) {
  var _element$options, _element$options2;
  var userStyles = vue.inject('styles', defaultStyles);
  if (!(element !== null && element !== void 0 && (_element$options = element.options) !== null && _element$options !== void 0 && _element$options.styles)) {
    return userStyles;
  }
  var styles = createEmptyStyles();
  if (userStyles) {
    merge__default["default"](styles, userStyles);
  } else {
    merge__default["default"](styles, defaultStyles);
  }
  if (element !== null && element !== void 0 && (_element$options2 = element.options) !== null && _element$options2 !== void 0 && _element$options2.styles) {
    merge__default["default"](styles, element.options.styles);
  }
  return styles;
};

var classes = function classes(strings) {
  for (var _len = arguments.length, variables = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    variables[_key - 1] = arguments[_key];
  }
  return strings.reduce(function (acc, curr, index) {
    return "".concat(acc).concat(curr).concat(variables[index] || '');
  }, '').trim();
};
var mergeStyles = function mergeStyles(stylesA, stylesB) {
  var styles = cloneDeep__default["default"](stylesA);
  mergeWith__default["default"](styles, stylesB, function (aValue, bValue) {
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return "".concat(aValue, " ").concat(bValue);
    }
    return undefined;
  });
  return styles;
};

var useControlAppliedOptions = function useControlAppliedOptions(input) {
  return vue.computed(function () {
    return merge__default["default"]({}, cloneDeep__default["default"](input.control.value.config), cloneDeep__default["default"](input.control.value.uischema.options));
  });
};
var useComputedLabel = function useComputedLabel(input, appliedOptions) {
  return vue.computed(function () {
    var _appliedOptions$value;
    return core.computeLabel(input.control.value.label, input.control.value.required, !!((_appliedOptions$value = appliedOptions.value) !== null && _appliedOptions$value !== void 0 && _appliedOptions$value.hideRequiredAsterisk));
  });
};
var useVuetifyProps = function useVuetifyProps(appliedOptions) {
  return function (path, defaultProps) {
    var _appliedOptions$value2;
    var props = get__default["default"]((_appliedOptions$value2 = appliedOptions.value) === null || _appliedOptions$value2 === void 0 ? void 0 : _appliedOptions$value2.vuetify, path);
    if (props && isPlainObject__default["default"](props)) {
      return defaultProps ? merge__default["default"]({}, defaultProps, props) : props;
    } else {
      return defaultProps !== null && defaultProps !== void 0 ? defaultProps : {};
    }
  };
};
var useVuetifyLabel = function useVuetifyLabel(input) {
  var styles = useStyles(input.label.value.uischema);
  var appliedOptions = vue.computed(function () {
    return merge__default["default"]({}, cloneDeep__default["default"](input.label.value.config), cloneDeep__default["default"](input.label.value.uischema.options));
  });
  var vuetifyProps = useVuetifyProps(appliedOptions);
  return _objectSpread2(_objectSpread2({}, input), {}, {
    appliedOptions: appliedOptions,
    vuetifyProps: vuetifyProps,
    styles: styles
  });
};
var useVuetifyControl = function useVuetifyControl(input) {
  var adaptValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
    return v;
  };
  var debounceWait = arguments.length > 2 ? arguments[2] : undefined;
  var changeEmitter = typeof debounceWait === 'number' ? debounce__default["default"](input.handleChange, debounceWait) : input.handleChange;
  var onChange = function onChange(value) {
    changeEmitter(input.control.value.path, adaptValue(value));
  };
  var appliedOptions = useControlAppliedOptions(input);
  var isFocused = vue.ref(false);
  var persistentHint = function persistentHint() {
    var _appliedOptions$value3;
    return !core.isDescriptionHidden(input.control.value.visible, input.control.value.description, isFocused.value, !!((_appliedOptions$value3 = appliedOptions.value) !== null && _appliedOptions$value3 !== void 0 && _appliedOptions$value3.showUnfocusedDescription));
  };
  var computedLabel = useComputedLabel(input, appliedOptions);
  var controlWrapper = vue.computed(function () {
    var _input$control$value = input.control.value,
      id = _input$control$value.id,
      description = _input$control$value.description,
      errors = _input$control$value.errors,
      label = _input$control$value.label,
      visible = _input$control$value.visible,
      required = _input$control$value.required;
    return {
      id: id,
      description: description,
      errors: errors,
      label: label,
      visible: visible,
      required: required
    };
  });
  var styles = useStyles(input.control.value.uischema);
  var vuetifyProps = useVuetifyProps(appliedOptions);
  return _objectSpread2(_objectSpread2({}, input), {}, {
    styles: styles,
    isFocused: isFocused,
    appliedOptions: appliedOptions,
    controlWrapper: controlWrapper,
    onChange: onChange,
    vuetifyProps: vuetifyProps,
    persistentHint: persistentHint,
    computedLabel: computedLabel
  });
};
var useTranslator = function useTranslator() {
  var jsonforms = vue.inject('jsonforms');
  if (!jsonforms) {
    throw new Error("'jsonforms couldn't be injected. Are you within JSON Forms?");
  }
  if (!jsonforms.i18n || !jsonforms.i18n.translate) {
    throw new Error("'jsonforms i18n couldn't be injected. Are you within JSON Forms?");
  }
  var translate = vue.computed(function () {
    return jsonforms.i18n.translate;
  });
  return translate;
};
var useVuetifyLayout = function useVuetifyLayout(input) {
  var appliedOptions = vue.computed(function () {
    return merge__default["default"]({}, cloneDeep__default["default"](input.layout.value.config), cloneDeep__default["default"](input.layout.value.uischema.options));
  });
  var vuetifyProps = useVuetifyProps(appliedOptions);
  return _objectSpread2(_objectSpread2({}, input), {}, {
    styles: useStyles(input.layout.value.uischema),
    appliedOptions: appliedOptions,
    vuetifyProps: vuetifyProps
  });
};
var useVuetifyArrayControl = function useVuetifyArrayControl(input) {
  var appliedOptions = useControlAppliedOptions(input);
  var computedLabel = useComputedLabel(input, appliedOptions);
  var vuetifyProps = useVuetifyProps(appliedOptions);
  var childLabelForIndex = function childLabelForIndex(index) {
    var _input$control$value$, _input$control$value$2;
    if (index === null) {
      return '';
    }
    var childLabelProp = (_input$control$value$ = (_input$control$value$2 = input.control.value.uischema.options) === null || _input$control$value$2 === void 0 ? void 0 : _input$control$value$2.childLabelProp) !== null && _input$control$value$ !== void 0 ? _input$control$value$ : core.getFirstPrimitiveProp(input.control.value.schema);
    if (!childLabelProp) {
      return "".concat(index);
    }
    var labelValue = core.Resolve.data(input.control.value.data, core.composePaths("".concat(index), childLabelProp));
    if (labelValue === undefined || labelValue === null || Number.isNaN(labelValue)) {
      return '';
    }
    return "".concat(labelValue);
  };
  return _objectSpread2(_objectSpread2({}, input), {}, {
    styles: useStyles(input.control.value.uischema),
    appliedOptions: appliedOptions,
    childLabelForIndex: childLabelForIndex,
    computedLabel: computedLabel,
    vuetifyProps: vuetifyProps
  });
};
var useVuetifyBasicControl = function useVuetifyBasicControl(input) {
  var appliedOptions = useControlAppliedOptions(input);
  var vuetifyProps = useVuetifyProps(appliedOptions);
  return _objectSpread2(_objectSpread2({}, input), {}, {
    styles: useStyles(input.control.value.uischema),
    appliedOptions: appliedOptions,
    vuetifyProps: vuetifyProps
  });
};
var useAjv = function useAjv() {
  var _jsonforms$core;
  var jsonforms = vue.inject('jsonforms');
  if (!jsonforms) {
    throw new Error("'jsonforms' couldn't be injected. Are you within JSON Forms?");
  }
  return (_jsonforms$core = jsonforms.core) === null || _jsonforms$core === void 0 ? void 0 : _jsonforms$core.ajv;
};
var useNested = function useNested(element) {
  var nestedInfo = vue.inject('jsonforms.nestedInfo', {
    level: 0
  });
  if (element) {
    vue.provide('jsonforms.nestedInfo', {
      level: nestedInfo.level + 1,
      parentElement: element
    });
  }
  return nestedInfo;
};

var createAjv = function createAjv(options) {
  var ajv = core.createAjv(options);
  ajv.addFormat('password', function (_) {
    return true;
  });
  return ajv;
};

dayjs__default["default"].extend(customParsing__default["default"]);
dayjs__default["default"].extend(utc__default["default"]);
dayjs__default["default"].extend(timezone__default["default"]);
var parseDateTime = function parseDateTime(data, format) {
  if (!data) {
    return null;
  }
  var dayjsData = dayjs__default["default"](data, format);
  if (!dayjsData.isValid()) {
    return null;
  }
  return dayjsData;
};

var i18nDefaultMessages = {
  arraylayout: {
    add: 'Add',
    "delete": 'Delete',
    moveUp: 'Move Up',
    moveDown: 'Move Down',
    dialogTitle: 'Delete {{ element }}?',
    dialogText: 'The element will be deleted.',
    dialogConfirm: 'Delete',
    dialogCancel: 'Cancel'
  }
};

var labelRenderer = vue.defineComponent({
  name: 'label-renderer',
  components: {
    DispatchRenderer: vue2.DispatchRenderer,
    VLabel: lib.VLabel
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    return useVuetifyLabel(vue2.useJsonFormsLabel(props));
  }
});
var entry$x = {
  renderer: labelRenderer,
  tester: core.rankWith(1, core.uiTypeIs('Label'))
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var __vue_script__$C = labelRenderer;
var __vue_render__$C = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.label.visible ? _c('v-label', _vm._b({
    "class": _vm.styles.label.root
  }, 'v-label', _vm.vuetifyProps('v-label'), false), [_vm._v("\n  " + _vm._s(_vm.label.text) + "\n")]) : _vm._e();
};
var __vue_staticRenderFns__$C = [];
var __vue_inject_styles__$C = undefined;
var __vue_scope_id__$C = undefined;
var __vue_module_identifier__$C = undefined;
var __vue_is_functional_template__$C = false;
var __vue_component__$C = normalizeComponent({
  render: __vue_render__$C,
  staticRenderFns: __vue_staticRenderFns__$C
}, __vue_inject_styles__$C, __vue_script__$C, __vue_scope_id__$C, __vue_is_functional_template__$C, __vue_module_identifier__$C, false, undefined, undefined, undefined);

var script$4 = vue.defineComponent({
  name: 'validation-badge',
  components: {
    VBadge: lib.VBadge,
    VTooltip: lib.VTooltip
  },
  props: {
    errors: {
      required: true,
      type: Array
    },
    bordered: {
      type: Boolean,
      "default": false
    },
    color: {
      type: String,
      "default": 'error'
    },
    inline: {
      type: Boolean,
      "default": false
    },
    offsetX: {
      type: [Number, String],
      "default": undefined
    },
    offsetY: {
      type: [Number, String],
      "default": undefined
    },
    overlap: {
      type: Boolean,
      "default": false
    },
    header: {
      type: String,
      "default": 'Validation Errors'
    }
  },
  computed: {
    tooltipMessages: function tooltipMessages() {
      var error = [];
      var _iterator = _createForOfIteratorHelper(this.errors),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var e = _step.value;
          var errorObject = e;
          var index = findIndex__default["default"](error, {
            schemaPath: errorObject.schemaPath
          });
          if (errorObject.message) {
            if (index == -1) {
              error.push({
                schemaPath: errorObject.schemaPath,
                instancePath: errorObject.instancePath,
                labels: [core.createLabelDescriptionFrom(core.createControlElement(errorObject.instancePath), errorObject.schema).text],
                message: errorObject.message
              });
            } else {
              error[index].labels.push(core.createLabelDescriptionFrom(core.createControlElement(errorObject.instancePath), errorObject.schema).text);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return error.map(function (v) {
        return v.labels.join(',') + ': ' + v.message;
      });
    }
  }
});

var __vue_script__$B = script$4;
var __vue_render__$B = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', [_vm.errors.length > 0 ? _c('v-tooltip', {
    attrs: {
      "bottom": ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(ref) {
        var onTooltip = ref.on;
        return [_c('v-badge', {
          attrs: {
            "color": _vm.color,
            "bordered": _vm.bordered,
            "inline": _vm.inline,
            "offsetX": _vm.offsetX,
            "offsetY": _vm.offsetY,
            "overlap": _vm.overlap
          },
          scopedSlots: _vm._u([{
            key: "badge",
            fn: function fn() {
              return [_vm._v("\n          " + _vm._s(_vm.errors.length) + "\n        ")];
            },
            proxy: true
          }], null, true)
        }, [_vm._v(" "), _c('div', _vm._g({}, onTooltip), [_vm._t("default")], 2)])];
      }
    }], null, true)
  }, [_vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.header))]), _vm._v(" "), _vm._l(_vm.tooltipMessages, function (message, index) {
    return _c('p', {
      key: "" + index,
      staticClass: "mb-0"
    }, [_vm._v("\n      " + _vm._s(message) + "\n    ")]);
  })], 2) : _vm._t("default")], 2);
};
var __vue_staticRenderFns__$B = [];
var __vue_inject_styles__$B = undefined;
var __vue_scope_id__$B = undefined;
var __vue_module_identifier__$B = undefined;
var __vue_is_functional_template__$B = false;
var __vue_component__$B = normalizeComponent({
  render: __vue_render__$B,
  staticRenderFns: __vue_staticRenderFns__$B
}, __vue_inject_styles__$B, __vue_script__$B, __vue_scope_id__$B, __vue_is_functional_template__$B, __vue_module_identifier__$B, false, undefined, undefined, undefined);

var script$3 = vue.defineComponent({
  name: 'validation-icon',
  components: {
    ValidationBadge: __vue_component__$B,
    VIcon: lib.VIcon
  },
  props: {
    errors: {
      required: true,
      type: Array
    }
  }
});

var __vue_script__$A = script$3;
var __vue_render__$A = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.errors && _vm.errors.length > 0 ? _c('validation-badge', {
    attrs: {
      "errors": _vm.errors
    }
  }, [_c('v-icon', {
    attrs: {
      "color": "error"
    }
  }, [_vm._v("mdi-alert-circle-outline")])], 1) : _vm._e();
};
var __vue_staticRenderFns__$A = [];
var __vue_inject_styles__$A = undefined;
var __vue_scope_id__$A = undefined;
var __vue_module_identifier__$A = undefined;
var __vue_is_functional_template__$A = false;
var __vue_component__$A = normalizeComponent({
  render: __vue_render__$A,
  staticRenderFns: __vue_staticRenderFns__$A
}, __vue_inject_styles__$A, __vue_script__$A, __vue_scope_id__$A, __vue_is_functional_template__$A, __vue_module_identifier__$A, false, undefined, undefined, undefined);

var controlRenderer$r = vue.defineComponent({
  name: 'list-with-detail-renderer',
  components: {
    DispatchRenderer: vue2.DispatchRenderer,
    VList: lib.VList,
    VListItemGroup: lib.VListItemGroup,
    VListItem: lib.VListItem,
    VListItemTitle: lib.VListItemTitle,
    VListItemContent: lib.VListItemContent,
    VListItemAction: lib.VListItemAction,
    VListItemAvatar: lib.VListItemAvatar,
    VAvatar: lib.VAvatar,
    VRow: lib.VRow,
    VCol: lib.VCol,
    VToolbar: lib.VToolbar,
    VToolbarTitle: lib.VToolbarTitle,
    VTooltip: lib.VTooltip,
    VBtn: lib.VBtn,
    VIcon: lib.VIcon,
    VSpacer: lib.VSpacer,
    VExpansionPanels: lib.VExpansionPanels,
    VExpansionPanel: lib.VExpansionPanel,
    VExpansionPanelHeader: lib.VExpansionPanelHeader,
    VExpansionPanelContent: lib.VExpansionPanelContent,
    VContainer: lib.VContainer,
    VVirtualScroll: lib.VVirtualScroll,
    ValidationIcon: __vue_component__$A,
    ValidationBadge: __vue_component__$B
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var selectedIndex = vue.ref(undefined);
    var t = useTranslator();
    return _objectSpread2(_objectSpread2({}, useVuetifyArrayControl(vue2.useJsonFormsArrayControl(props))), {}, {
      selectedIndex: selectedIndex,
      t: t
    });
  },
  computed: {
    dataLength: function dataLength() {
      return this.control.data ? this.control.data.length : 0;
    },
    foundUISchema: function foundUISchema() {
      return core.findUISchema(this.control.uischemas, this.control.schema, this.control.uischema.scope, this.control.path, undefined, this.control.uischema);
    },
    arraySchema: function arraySchema() {
      return core.Resolve.schema(this.control.rootSchema, this.control.uischema.scope, this.control.rootSchema);
    }
  },
  methods: {
    composePaths: core.composePaths,
    createDefaultValue: core.createDefaultValue,
    addButtonClick: function addButtonClick() {
      this.addItem(this.control.path, core.createDefaultValue(this.control.schema))();
    },
    moveUpClick: function moveUpClick(event, toMove) {
      var _this$moveUp;
      event.stopPropagation();
      (_this$moveUp = this.moveUp) === null || _this$moveUp === void 0 || _this$moveUp.call(this, this.control.path, toMove)();
    },
    moveDownClick: function moveDownClick(event, toMove) {
      var _this$moveDown;
      event.stopPropagation();
      (_this$moveDown = this.moveDown) === null || _this$moveDown === void 0 || _this$moveDown.call(this, this.control.path, toMove)();
    },
    removeItemsClick: function removeItemsClick(event, toDelete) {
      var _this$removeItems;
      event.stopPropagation();
      (_this$removeItems = this.removeItems) === null || _this$removeItems === void 0 || _this$removeItems.call(this, this.control.path, toDelete)();
    },
    childErrors: function childErrors(index) {
      var _this = this;
      return this.control.childErrors.filter(function (e) {
        return e.instancePath.startsWith(_this.composePaths(_this.control.path, "".concat(index)));
      });
    }
  }
});
var entry$w = {
  renderer: controlRenderer$r,
  tester: core.rankWith(4, core.and(core.uiTypeIs('ListWithDetail'), core.isObjectArray))
};

var __vue_script__$z = controlRenderer$r;
var __vue_render__$z = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.control.visible ? _c('v-container', {
    "class": _vm.styles.listWithDetail.root
  }, [_c('v-row', [_c('v-col', {
    staticClass: "pa-0"
  }, [_c('v-toolbar', {
    "class": _vm.styles.listWithDetail.toolbar,
    attrs: {
      "flat": ""
    }
  }, [_c('v-toolbar-title', {
    "class": _vm.styles.listWithDetail.label
  }, [_vm._v(_vm._s(_vm.computedLabel))]), _vm._v(" "), _vm.control.childErrors.length > 0 ? _c('validation-icon', {
    attrs: {
      "errors": _vm.control.childErrors
    }
  }) : _vm._e(), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-tooltip', {
    attrs: {
      "bottom": ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(ref) {
        var onTooltip = ref.on;
        return [_c('v-btn', _vm._g({
          "class": _vm.styles.listWithDetail.addButton,
          attrs: {
            "fab": "",
            "text": "",
            "elevation": "0",
            "small": "",
            "aria-label": _vm.control.translations.addAriaLabel,
            "disabled": !_vm.control.enabled || _vm.appliedOptions.restrict && _vm.arraySchema !== undefined && _vm.arraySchema.maxItems !== undefined && _vm.dataLength >= _vm.arraySchema.maxItems
          },
          on: {
            "click": _vm.addButtonClick
          }
        }, onTooltip), [_c('v-icon', [_vm._v("mdi-plus")])], 1)];
      }
    }], null, false, 1704007874)
  }, [_vm._v("\n          " + _vm._s(_vm.control.translations.addTooltip) + "\n        ")])], 1)], 1)], 1), _vm._v(" "), _vm.dataLength === 0 ? _c('v-row', {
    "class": _vm.styles.listWithDetail.noData
  }, [_c('v-col', [_vm._v(" " + _vm._s(_vm.control.translations.noDataMessage) + " ")])], 1) : _c('v-row', [_c('v-col', {
    staticClass: "shrink pa-0"
  }, [_c('v-list-item-group', {
    model: {
      value: _vm.selectedIndex,
      callback: function callback($$v) {
        _vm.selectedIndex = $$v;
      },
      expression: "selectedIndex"
    }
  }, [_c('v-virtual-scroll', {
    attrs: {
      "items": _vm.control.data,
      "item-height": 64,
      "bench": "4",
      "min-height": "" + 4 * 64,
      "max-height": "" + 6 * 64,
      "min-width": _vm.appliedOptions.showSortButtons ? 350 : 250,
      "max-width": "350"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var index = ref.index;
        return [_c('v-list-item', {
          "class": _vm.styles.listWithDetail.item,
          attrs: {
            "dense": "",
            "value": index
          }
        }, [_c('v-list-item-avatar', {
          staticClass: "ma-0",
          attrs: {
            "aria-label": "Index",
            "size": "64",
            "tile": "",
            "color": "rgba(0,0,0,0)"
          }
        }, [_c('validation-badge', {
          attrs: {
            "overlap": "",
            "bordered": "",
            "errors": _vm.childErrors(index)
          }
        }, [_c('v-avatar', {
          attrs: {
            "size": "40",
            "aria-label": "Index",
            "color": "info"
          }
        }, [_c('span', {
          staticClass: "info--text text--lighten-5"
        }, [_vm._v(_vm._s(index + 1))])])], 1)], 1), _vm._v(" "), _c('v-list-item-content', [_c('v-list-item-title', [_c('v-tooltip', {
          attrs: {
            "bottom": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(ref) {
              var onTooltip = ref.on;
              return [_c('span', _vm._g({
                "class": _vm.styles.listWithDetail.itemLabel
              }, onTooltip), [_vm._v("\n                        " + _vm._s(_vm.childLabelForIndex(index)))])];
            }
          }], null, true)
        }, [_vm._v("\n                    " + _vm._s(_vm.childLabelForIndex(index)) + "\n                  ")])], 1)], 1), _vm._v(" "), _vm.appliedOptions.showSortButtons ? _c('v-list-item-action', [_c('v-tooltip', {
          attrs: {
            "bottom": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(ref) {
              var onTooltip = ref.on;
              return [_c('v-btn', _vm._g({
                staticClass: "ma-0",
                "class": _vm.styles.listWithDetail.itemMoveUp,
                attrs: {
                  "fab": "",
                  "text": "",
                  "elevation": "0",
                  "small": "",
                  "aria-label": _vm.control.translations.upAriaLabel,
                  "disabled": index <= 0 || !_vm.control.enabled
                },
                nativeOn: {
                  "click": function click($event) {
                    return _vm.moveUpClick($event, index);
                  }
                }
              }, onTooltip), [_c('v-icon', {
                staticClass: "notranslate"
              }, [_vm._v("mdi-arrow-up")])], 1)];
            }
          }], null, true)
        }, [_vm._v("\n                  " + _vm._s(_vm.t('array.btn.moveUp.tooltip', 'Move Up')) + "\n                ")])], 1) : _vm._e(), _vm._v(" "), _vm.appliedOptions.showSortButtons ? _c('v-list-item-action', [_c('v-tooltip', {
          attrs: {
            "bottom": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(ref) {
              var onTooltip = ref.on;
              return [_c('v-btn', _vm._g({
                staticClass: "ma-0",
                "class": _vm.styles.listWithDetail.itemMoveDown,
                attrs: {
                  "fab": "",
                  "text": "",
                  "elevation": "0",
                  "small": "",
                  "aria-label": _vm.control.translations.downAriaLabel,
                  "disabled": index >= _vm.dataLength - 1 || !_vm.control.enabled
                },
                nativeOn: {
                  "click": function click($event) {
                    return _vm.moveDownClick($event, index);
                  }
                }
              }, onTooltip), [_c('v-icon', {
                staticClass: "notranslate"
              }, [_vm._v("mdi-arrow-down")])], 1)];
            }
          }], null, true)
        }, [_vm._v("\n                  " + _vm._s(_vm.t('array.btn.moveDown.tooltip', 'Move Down')) + "\n                ")])], 1) : _vm._e(), _vm._v(" "), _c('v-list-item-action', [_c('v-tooltip', {
          attrs: {
            "bottom": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(ref) {
              var onTooltip = ref.on;
              return [_c('v-btn', _vm._g({
                staticClass: "ma-0",
                "class": _vm.styles.listWithDetail.itemDelete,
                attrs: {
                  "fab": "",
                  "text": "",
                  "elevation": "0",
                  "small": "",
                  "aria-label": _vm.control.translations.removeAriaLabel,
                  "disabled": !_vm.control.enabled || _vm.appliedOptions.restrict && _vm.arraySchema !== undefined && _vm.arraySchema.minItems !== undefined && _vm.dataLength <= _vm.arraySchema.minItems
                },
                nativeOn: {
                  "click": function click($event) {
                    return _vm.removeItemsClick($event, [index]);
                  }
                }
              }, onTooltip), [_c('v-icon', {
                staticClass: "notranslate"
              }, [_vm._v("mdi-delete")])], 1)];
            }
          }], null, true)
        }, [_vm._v("\n                  " + _vm._s(_vm.control.translations.removeTooltip) + "\n                ")])], 1)], 1)];
      }
    }], null, false, 27029159)
  })], 1)], 1), _vm._v(" "), _vm.selectedIndex === undefined ? _c('v-col', {
    staticClass: "grow"
  }, [_c('span', {
    staticClass: "text-h6"
  }, [_vm._v(_vm._s(_vm.control.translations.noSelection))])]) : _c('v-col', {
    "class": "grow " + _vm.styles.listWithDetail.itemContent
  }, [_c('dispatch-renderer', {
    attrs: {
      "schema": _vm.control.schema,
      "uischema": _vm.foundUISchema,
      "path": _vm.composePaths(_vm.control.path, "" + _vm.selectedIndex),
      "enabled": _vm.control.enabled,
      "renderers": _vm.control.renderers,
      "cells": _vm.control.cells
    }
  })], 1)], 1)], 1) : _vm._e();
};
var __vue_staticRenderFns__$z = [];
var __vue_inject_styles__$z = undefined;
var __vue_scope_id__$z = "data-v-3c461925";
var __vue_module_identifier__$z = undefined;
var __vue_is_functional_template__$z = false;
var __vue_component__$z = normalizeComponent({
  render: __vue_render__$z,
  staticRenderFns: __vue_staticRenderFns__$z
}, __vue_inject_styles__$z, __vue_script__$z, __vue_scope_id__$z, __vue_is_functional_template__$z, __vue_module_identifier__$z, false, undefined, undefined, undefined);

var additionalRenderers = [entry$x, entry$w];

var controlRenderer$q = vue.defineComponent({
  name: 'array-layout-renderer',
  components: {
    DispatchRenderer: vue2.DispatchRenderer,
    VCard: lib.VCard,
    VCardActions: lib.VCardActions,
    VCardTitle: lib.VCardTitle,
    VCardText: lib.VCardText,
    VAvatar: lib.VAvatar,
    VDialog: lib.VDialog,
    VRow: lib.VRow,
    VCol: lib.VCol,
    VToolbar: lib.VToolbar,
    VToolbarTitle: lib.VToolbarTitle,
    VTooltip: lib.VTooltip,
    VIcon: lib.VIcon,
    VBtn: lib.VBtn,
    VSpacer: lib.VSpacer,
    VExpansionPanels: lib.VExpansionPanels,
    VExpansionPanel: lib.VExpansionPanel,
    VExpansionPanelHeader: lib.VExpansionPanelHeader,
    VExpansionPanelContent: lib.VExpansionPanelContent,
    VContainer: lib.VContainer,
    ValidationIcon: __vue_component__$A,
    ValidationBadge: __vue_component__$B
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var control = useVuetifyArrayControl(vue2.useJsonFormsArrayControl(props));
    var currentlyExpanded = vue.ref(control.appliedOptions.value.initCollapsed ? null : 0);
    var expansionPanelsProps = vue.computed(function () {
      return merge__default["default"]({
        flat: false,
        focusable: true
      }, control.vuetifyProps('v-expansion-panels'));
    });
    var suggestToDelete = vue.ref(null);
    useNested('array');
    var t = useTranslator();
    return _objectSpread2(_objectSpread2({}, control), {}, {
      currentlyExpanded: currentlyExpanded,
      expansionPanelsProps: expansionPanelsProps,
      suggestToDelete: suggestToDelete,
      t: t
    });
  },
  computed: {
    addDisabled: function addDisabled() {
      return !this.control.enabled || this.appliedOptions.restrict && this.arraySchema !== undefined && this.arraySchema.maxItems !== undefined && this.dataLength >= this.arraySchema.maxItems;
    },
    dataLength: function dataLength() {
      return this.control.data ? this.control.data.length : 0;
    },
    foundUISchema: function foundUISchema() {
      return core.findUISchema(this.control.uischemas, this.control.schema, this.control.uischema.scope, this.control.path, undefined, this.control.uischema, this.control.rootSchema);
    },
    arraySchema: function arraySchema() {
      return core.Resolve.schema(this.control.rootSchema, this.control.uischema.scope, this.control.rootSchema);
    },
    hideAvatar: function hideAvatar() {
      return !!this.appliedOptions.hideAvatar;
    },
    translatedLabels: function translatedLabels() {
      var elementToDeleteText = this.childLabelForIndex(this.suggestToDelete);
      return {
        add: this.translateLabel('add'),
        "delete": this.translateLabel('delete'),
        moveUp: this.translateLabel('moveUp'),
        moveDown: this.translateLabel('moveDown'),
        dialogTitle: this.translateLabel('dialogTitle', {
          element: elementToDeleteText
        }, function (message) {
          return message.replace(/\{\{\s?element\s?\}\}/, elementToDeleteText || 'element');
        }),
        dialogText: this.translateLabel('dialogText'),
        dialogCancel: this.translateLabel('dialogCancel'),
        dialogConfirm: this.translateLabel('dialogConfirm')
      };
    }
  },
  methods: {
    composePaths: core.composePaths,
    createDefaultValue: core.createDefaultValue,
    addButtonClick: function addButtonClick() {
      var _this$control$data;
      this.addItem(this.control.path, core.createDefaultValue(this.control.schema))();
      if (!this.appliedOptions.collapseNewItems && (_this$control$data = this.control.data) !== null && _this$control$data !== void 0 && _this$control$data.length) {
        this.currentlyExpanded = this.dataLength - 1;
      }
    },
    moveUpClick: function moveUpClick(event, toMove) {
      var _this$moveUp;
      event.stopPropagation();
      (_this$moveUp = this.moveUp) === null || _this$moveUp === void 0 || _this$moveUp.call(this, this.control.path, toMove)();
    },
    moveDownClick: function moveDownClick(event, toMove) {
      var _this$moveDown;
      event.stopPropagation();
      (_this$moveDown = this.moveDown) === null || _this$moveDown === void 0 || _this$moveDown.call(this, this.control.path, toMove)();
    },
    removeItemsClick: function removeItemsClick(toDelete) {
      if (toDelete !== null) {
        var _this$removeItems;
        (_this$removeItems = this.removeItems) === null || _this$removeItems === void 0 || _this$removeItems.call(this, this.control.path, toDelete)();
      }
    },
    childErrors: function childErrors(index) {
      var _this = this;
      return this.control.childErrors.filter(function (e) {
        var errorDataPath = core.getControlPath(e);
        return errorDataPath.startsWith(_this.composePaths(_this.control.path, "".concat(index)));
      });
    },
    translateLabel: function translateLabel(labelType) {
      var additionalContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var transformMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (text) {
        return text;
      };
      var i18nKey = core.getI18nKey(this.arraySchema, this.control.uischema, this.control.path, labelType);
      var context = _objectSpread2({
        schema: this.control.schema,
        uischema: this.control.uischema,
        path: this.control.path,
        data: this.control.data
      }, additionalContext);
      var translation = this.t(i18nKey, undefined, context);
      if (translation !== undefined) {
        return translation;
      }
      return this.t("arraylayout.".concat(labelType), transformMessage(i18nDefaultMessages.arraylayout[labelType]), context);
    }
  }
});
var entry$v = {
  renderer: controlRenderer$q,
  tester: core.rankWith(4, core.isObjectArrayWithNesting)
};

var __vue_script__$y = controlRenderer$q;
var __vue_render__$y = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.control.visible ? _c('v-card', {
    "class": _vm.styles.arrayList.root
  }, [_c('v-card-title', [_c('v-toolbar', {
    "class": _vm.styles.arrayList.toolbar,
    attrs: {
      "flat": ""
    }
  }, [_c('v-toolbar-title', {
    "class": _vm.styles.arrayList.label
  }, [_vm._v(_vm._s(_vm.computedLabel))]), _vm._v(" "), _vm.control.childErrors.length > 0 && !_vm.appliedOptions.hideArraySummaryValidation ? _c('validation-icon', {
    "class": _vm.styles.arrayList.validationIcon,
    attrs: {
      "errors": _vm.control.childErrors
    }
  }) : _vm._e(), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _vm._t("toolbar-elements", function () {
    return [_c('v-tooltip', {
      attrs: {
        "bottom": ""
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(ref) {
          var onTooltip = ref.on;
          return [_c('v-btn', _vm._g({
            "class": _vm.styles.arrayList.addButton,
            attrs: {
              "fab": "",
              "text": "",
              "elevation": "0",
              "small": "",
              "aria-label": _vm.translatedLabels.add,
              "disabled": _vm.addDisabled
            },
            on: {
              "click": _vm.addButtonClick
            }
          }, onTooltip), [_c('v-icon', [_vm._v("mdi-plus")])], 1)];
        }
      }], null, false, 3072090062)
    }, [_vm._v("\n          " + _vm._s(_vm.translatedLabels.add) + "\n        ")])];
  }, {
    "labels": _vm.translatedLabels,
    "addClass": _vm.styles.arrayList.addButton,
    "addDisabled": _vm.addDisabled,
    "addClick": _vm.addButtonClick,
    "control": _vm.control,
    "appliedOptions": _vm.appliedOptions,
    "styles": _vm.styles
  })], 2)], 1), _vm._v(" "), _c('v-card-text', [_c('v-container', {
    "class": _vm.styles.arrayList.container,
    attrs: {
      "justify-space-around": "",
      "align-content-center": ""
    }
  }, [_c('v-row', {
    attrs: {
      "justify": "center"
    }
  }, [_c('v-expansion-panels', _vm._b({
    attrs: {
      "accordion": ""
    },
    model: {
      value: _vm.currentlyExpanded,
      callback: function callback($$v) {
        _vm.currentlyExpanded = $$v;
      },
      expression: "currentlyExpanded"
    }
  }, 'v-expansion-panels', _vm.expansionPanelsProps, false), _vm._l(_vm.control.data, function (_element, index) {
    return _c('v-expansion-panel', {
      key: _vm.control.path + "-" + index,
      "class": _vm.styles.arrayList.item
    }, [_c('v-expansion-panel-header', {
      "class": _vm.styles.arrayList.itemHeader
    }, [_c('v-container', {
      "class": _vm.styles.arrayList.itemContainer,
      attrs: {
        "py-0": ""
      }
    }, [_c('v-row', {
      style: "display: grid; grid-template-columns: " + (!_vm.hideAvatar ? 'min-content' : '') + " auto min-content " + (_vm.appliedOptions.showSortButtons ? 'min-content min-content' : '')
    }, [!_vm.hideAvatar ? _c('v-col', {
      staticClass: "pl-0",
      attrs: {
        "align-self": "center"
      }
    }, [_c('validation-badge', {
      attrs: {
        "overlap": "",
        "bordered": "",
        "errors": _vm.childErrors(index)
      }
    }, [_c('v-avatar', {
      attrs: {
        "size": "40",
        "aria-label": "Index",
        "color": "primary"
      }
    }, [_c('span', {
      staticClass: "primary--text text--lighten-5"
    }, [_vm._v(_vm._s(index + 1))])])], 1)], 1) : _vm._e(), _vm._v(" "), _c('v-col', {
      "class": "pl-0 text-truncate " + _vm.styles.arrayList.itemLabel,
      attrs: {
        "align-self": "center"
      }
    }, [_vm._v(_vm._s(_vm.childLabelForIndex(index)))]), _vm._v(" "), _vm.appliedOptions.showSortButtons ? _c('v-col', {
      attrs: {
        "align-self": "center"
      }
    }, [_c('v-tooltip', {
      attrs: {
        "bottom": ""
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(ref) {
          var onTooltip = ref.on;
          return [_c('v-btn', _vm._g({
            staticClass: "v-expansion-panel-header__icon",
            "class": _vm.styles.arrayList.itemMoveUp,
            attrs: {
              "fab": "",
              "text": "",
              "elevation": "0",
              "small": "",
              "aria-label": _vm.translatedLabels.moveUp,
              "disabled": index <= 0 || !_vm.control.enabled
            },
            nativeOn: {
              "click": function click($event) {
                return _vm.moveUpClick($event, index);
              }
            }
          }, onTooltip), [_c('v-icon', {
            staticClass: "notranslate"
          }, [_vm._v("mdi-arrow-up")])], 1)];
        }
      }], null, true)
    }, [_vm._v("\n                      " + _vm._s(_vm.translatedLabels.moveUp) + "\n                    ")])], 1) : _vm._e(), _vm._v(" "), _vm.appliedOptions.showSortButtons ? _c('v-col', {
      attrs: {
        "align-self": "center"
      }
    }, [_c('v-tooltip', {
      attrs: {
        "bottom": ""
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(ref) {
          var onTooltip = ref.on;
          return [_c('v-btn', _vm._g({
            staticClass: "v-expansion-panel-header__icon",
            "class": _vm.styles.arrayList.itemMoveDown,
            attrs: {
              "fab": "",
              "text": "",
              "elevation": "0",
              "small": "",
              "aria-label": _vm.translatedLabels.moveDown,
              "disabled": index >= _vm.dataLength - 1 || !_vm.control.enabled
            },
            nativeOn: {
              "click": function click($event) {
                return _vm.moveDownClick($event, index);
              }
            }
          }, onTooltip), [_c('v-icon', {
            staticClass: "notranslate"
          }, [_vm._v("mdi-arrow-down")])], 1)];
        }
      }], null, true)
    }, [_vm._v("\n                      " + _vm._s(_vm.translatedLabels.moveDown) + "\n                    ")])], 1) : _vm._e(), _vm._v(" "), _c('v-col', {
      attrs: {
        "align-self": "center"
      }
    }, [_c('v-tooltip', {
      attrs: {
        "bottom": ""
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(ref) {
          var onTooltip = ref.on;
          return [_c('v-btn', _vm._g({
            staticClass: "v-expansion-panel-header__icon",
            "class": _vm.styles.arrayList.itemDelete,
            attrs: {
              "fab": "",
              "text": "",
              "elevation": "0",
              "small": "",
              "aria-label": _vm.translatedLabels["delete"],
              "disabled": !_vm.control.enabled || _vm.appliedOptions.restrict && _vm.arraySchema !== undefined && _vm.arraySchema.minItems !== undefined && _vm.dataLength <= _vm.arraySchema.minItems
            },
            nativeOn: {
              "click": function click($event) {
                $event.stopPropagation();
                _vm.suggestToDelete = index;
              }
            }
          }, onTooltip), [_c('v-icon', {
            staticClass: "notranslate"
          }, [_vm._v("mdi-delete")])], 1)];
        }
      }], null, true)
    }, [_vm._v("\n                      " + _vm._s(_vm.translatedLabels["delete"]) + "\n                    ")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('v-expansion-panel-content', {
      "class": _vm.styles.arrayList.itemContent
    }, [_c('dispatch-renderer', {
      attrs: {
        "schema": _vm.control.schema,
        "uischema": _vm.foundUISchema,
        "path": _vm.composePaths(_vm.control.path, "" + index),
        "enabled": _vm.control.enabled,
        "renderers": _vm.control.renderers,
        "cells": _vm.control.cells
      }
    })], 1)], 1);
  }), 1)], 1)], 1), _vm._v(" "), _vm.dataLength === 0 ? _c('v-container', {
    "class": _vm.styles.arrayList.noData
  }, [_vm._v("\n      No data\n    ")]) : _vm._e()], 1), _vm._v(" "), _vm.$scopedSlots.actions ? _c('v-card-actions', {
    staticClass: "pb-8"
  }, [_vm._t("actions", null, {
    "labels": _vm.translatedLabels,
    "addClass": _vm.styles.arrayList.addButton,
    "addDisabled": _vm.addDisabled,
    "addClick": _vm.addButtonClick,
    "control": _vm.control,
    "appliedOptions": _vm.appliedOptions,
    "styles": _vm.styles
  })], 2) : _vm._e(), _vm._v(" "), _c('v-dialog', {
    attrs: {
      "value": _vm.suggestToDelete !== null,
      "max-width": "600"
    },
    on: {
      "keydown": function keydown($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }
        _vm.suggestToDelete = null;
      },
      "click:outside": function clickOutside($event) {
        _vm.suggestToDelete = null;
      }
    }
  }, [_c('v-card', [_c('v-card-title', {
    staticClass: "text-h5"
  }, [_vm._v("\n        " + _vm._s(_vm.translatedLabels.dialogTitle) + "\n      ")]), _vm._v(" "), _c('v-card-text', [_vm._v(" " + _vm._s(_vm.translatedLabels.dialogText) + " ")]), _vm._v(" "), _c('v-card-actions', [_c('v-spacer'), _vm._v(" "), _c('v-btn', {
    attrs: {
      "text": ""
    },
    on: {
      "click": function click($event) {
        _vm.suggestToDelete = null;
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.translatedLabels.dialogCancel))]), _vm._v(" "), _c('v-btn', {
    ref: "confirm",
    attrs: {
      "text": ""
    },
    on: {
      "click": function click($event) {
        _vm.removeItemsClick(_vm.suggestToDelete === null ? null : [_vm.suggestToDelete]);
        _vm.suggestToDelete = null;
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.translatedLabels.dialogConfirm) + "\n        ")])], 1)], 1)], 1)], 1) : _vm._e();
};
var __vue_staticRenderFns__$y = [];
var __vue_inject_styles__$y = undefined;
var __vue_scope_id__$y = "data-v-22bb76a4";
var __vue_module_identifier__$y = undefined;
var __vue_is_functional_template__$y = false;
var __vue_component__$y = normalizeComponent({
  render: __vue_render__$y,
  staticRenderFns: __vue_staticRenderFns__$y
}, __vue_inject_styles__$y, __vue_script__$y, __vue_scope_id__$y, __vue_is_functional_template__$y, __vue_module_identifier__$y, false, undefined, undefined, undefined);

var layoutRenderer$4 = vue.defineComponent({
  name: 'categorization-renderer',
  components: {
    DispatchRenderer: vue2.DispatchRenderer,
    VContainer: lib.VContainer,
    VTabs: lib.VTabs,
    VTab: lib.VTab,
    VTabsItems: lib.VTabsItems,
    VTabItem: lib.VTabItem,
    VRow: lib.VRow,
    VCol: lib.VCol
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var activeCategory = vue.ref(0);
    var ajv = useAjv();
    var t = useTranslator();
    return _objectSpread2(_objectSpread2({}, useVuetifyLayout(vue2.useJsonFormsLayout(props))), {}, {
      activeCategory: activeCategory,
      ajv: ajv,
      t: t
    });
  },
  computed: {
    visibleCategories: function visibleCategories() {
      var _this = this;
      return this.layout.uischema.elements.filter(function (category) {
        return core.isVisible(category, _this.layout.data, _this.layout.path, _this.ajv);
      });
    },
    visibleCategoryLabels: function visibleCategoryLabels() {
      var _this2 = this;
      return this.visibleCategories.map(function (element) {
        var _deriveLabelForUISche;
        return (_deriveLabelForUISche = core.deriveLabelForUISchemaElement(element, _this2.t)) !== null && _deriveLabelForUISche !== void 0 ? _deriveLabelForUISche : '';
      });
    }
  }
});
var isSingleLevelCategorization = core.and(core.uiTypeIs('Categorization'), core.categorizationHasCategory);
var entry$u = {
  renderer: layoutRenderer$4,
  tester: core.rankWith(2, isSingleLevelCategorization)
};

var __vue_script__$x = layoutRenderer$4;
var __vue_render__$x = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.layout.visible ? _c('v-container', _vm._b({
    "class": _vm.styles.categorization.root
  }, 'v-container', _vm.vuetifyProps('v-container'), false), [_vm.appliedOptions.vertical === true ? _c('v-row', _vm._b({}, 'v-row', _vm.vuetifyProps('v-row'), false), [_c('v-col', _vm._b({}, 'v-col', _vm.vuetifyProps('v-col.v-tabs'), false), [_c('v-tabs', _vm._b({
    attrs: {
      "vertical": ""
    },
    model: {
      value: _vm.activeCategory,
      callback: function callback($$v) {
        _vm.activeCategory = $$v;
      },
      expression: "activeCategory"
    }
  }, 'v-tabs', _vm.vuetifyProps('v-tabs'), false), _vm._l(_vm.visibleCategories, function (_, index) {
    return _c('v-tab', _vm._b({
      key: _vm.layout.path + "-" + index
    }, 'v-tab', _vm.vuetifyProps('v-tab'), false), [_vm._v("\n          " + _vm._s(_vm.visibleCategoryLabels[index]) + "\n        ")]);
  }), 1)], 1), _vm._v(" "), _c('v-col', _vm._b({}, 'v-col', _vm.vuetifyProps('v-col.v-tabs-items'), false), [_c('v-tabs-items', _vm._b({
    attrs: {
      "vertical": ""
    },
    model: {
      value: _vm.activeCategory,
      callback: function callback($$v) {
        _vm.activeCategory = $$v;
      },
      expression: "activeCategory"
    }
  }, 'v-tabs-items', _vm.vuetifyProps('v-tabs-items'), false), _vm._l(_vm.visibleCategories, function (element, index) {
    return _c('v-tab-item', _vm._b({
      key: _vm.layout.path + "-" + index
    }, 'v-tab-item', _vm.vuetifyProps('v-tab-item'), false), [_c('dispatch-renderer', {
      attrs: {
        "schema": _vm.layout.schema,
        "uischema": element,
        "path": _vm.layout.path,
        "enabled": _vm.layout.enabled,
        "renderers": _vm.layout.renderers,
        "cells": _vm.layout.cells
      }
    })], 1);
  }), 1)], 1)], 1) : _c('v-row', _vm._b({}, 'v-row', _vm.vuetifyProps('v-row'), false), [_c('v-col', _vm._b({}, 'v-col', _vm.vuetifyProps('v-col.v-tabs'), false), [_c('v-tabs', _vm._b({
    model: {
      value: _vm.activeCategory,
      callback: function callback($$v) {
        _vm.activeCategory = $$v;
      },
      expression: "activeCategory"
    }
  }, 'v-tabs', _vm.vuetifyProps('v-tabs'), false), _vm._l(_vm.visibleCategories, function (_, index) {
    return _c('v-tab', _vm._b({
      key: _vm.layout.path + "-" + index
    }, 'v-tab', _vm.vuetifyProps('v-tab'), false), [_vm._v("\n          " + _vm._s(_vm.visibleCategoryLabels[index]) + "\n        ")]);
  }), 1), _vm._v(" "), _c('v-tabs-items', _vm._b({
    model: {
      value: _vm.activeCategory,
      callback: function callback($$v) {
        _vm.activeCategory = $$v;
      },
      expression: "activeCategory"
    }
  }, 'v-tabs-items', _vm.vuetifyProps('v-tabs-items'), false), _vm._l(_vm.visibleCategories, function (element, index) {
    return _c('v-tab-item', _vm._b({
      key: _vm.layout.path + "-" + index
    }, 'v-tab-item', _vm.vuetifyProps('v-tab-item'), false), [_c('dispatch-renderer', {
      attrs: {
        "schema": _vm.layout.schema,
        "uischema": element,
        "path": _vm.layout.path,
        "enabled": _vm.layout.enabled,
        "renderers": _vm.layout.renderers,
        "cells": _vm.layout.cells
      }
    })], 1);
  }), 1)], 1)], 1)], 1) : _vm._e();
};
var __vue_staticRenderFns__$x = [];
var __vue_inject_styles__$x = undefined;
var __vue_scope_id__$x = undefined;
var __vue_module_identifier__$x = undefined;
var __vue_is_functional_template__$x = false;
var __vue_component__$x = normalizeComponent({
  render: __vue_render__$x,
  staticRenderFns: __vue_staticRenderFns__$x
}, __vue_inject_styles__$x, __vue_script__$x, __vue_scope_id__$x, __vue_is_functional_template__$x, __vue_module_identifier__$x, false, undefined, undefined, undefined);

var layoutRenderer$3 = vue.defineComponent({
  name: 'categorization-stepper-renderer',
  components: {
    DispatchRenderer: vue2.DispatchRenderer,
    VStepper: lib.VStepper,
    VStepperHeader: lib.VStepperHeader,
    VStepperStep: lib.VStepperStep,
    VDivider: lib.VDivider,
    VSpacer: lib.VSpacer,
    VStepperItems: lib.VStepperItems,
    VStepperContent: lib.VStepperContent,
    VCard: lib.VCard,
    VCardActions: lib.VCardActions,
    VBtn: lib.VBtn
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var activeCategory = vue.ref(1);
    var ajv = useAjv();
    var t = useTranslator();
    return _objectSpread2(_objectSpread2({}, useVuetifyLayout(vue2.useJsonFormsLayout(props))), {}, {
      activeCategory: activeCategory,
      ajv: ajv,
      t: t
    });
  },
  computed: {
    visibleCategories: function visibleCategories() {
      var _this = this;
      return this.layout.uischema.elements.filter(function (category) {
        return core.isVisible(category, _this.layout.data, _this.layout.path, _this.ajv);
      });
    },
    visibleCategoryLabels: function visibleCategoryLabels() {
      var _this2 = this;
      return this.visibleCategories.map(function (element) {
        var _deriveLabelForUISche;
        return (_deriveLabelForUISche = core.deriveLabelForUISchemaElement(element, _this2.t)) !== null && _deriveLabelForUISche !== void 0 ? _deriveLabelForUISche : '';
      });
    }
  },
  methods: {
    translateByText: function translateByText(text) {
      return this.t(text, text);
    }
  }
});
var categorizationStepperTester = core.and(core.uiTypeIs('Categorization'), core.categorizationHasCategory, core.optionIs('variant', 'stepper'));
var entry$t = {
  renderer: layoutRenderer$3,
  tester: core.rankWith(3, categorizationStepperTester)
};

var __vue_script__$w = layoutRenderer$3;
var __vue_render__$w = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.layout.visible ? _c('div', {
    "class": _vm.styles.categorization.root
  }, [_vm.appliedOptions.vertical === true ? _c('v-stepper', _vm._b({
    attrs: {
      "vertical": ""
    },
    model: {
      value: _vm.activeCategory,
      callback: function callback($$v) {
        _vm.activeCategory = $$v;
      },
      expression: "activeCategory"
    }
  }, 'v-stepper', _vm.vuetifyProps('v-stepper'), false), [_vm._l(_vm.visibleCategories, function (element, index) {
    return [_c('v-stepper-step', _vm._b({
      key: _vm.layout.path + "-" + index,
      attrs: {
        "step": index + 1,
        "editable": ""
      }
    }, 'v-stepper-step', _vm.vuetifyProps('v-stepper-step'), false), [_vm._v("\n        " + _vm._s(_vm.visibleCategoryLabels[index]) + "\n      ")]), _vm._v(" "), _c('v-stepper-content', _vm._b({
      key: _vm.layout.path + "-" + index,
      attrs: {
        "step": index + 1
      }
    }, 'v-stepper-content', _vm.vuetifyProps('v-stepper-content'), false), [_c('v-card', _vm._b({}, 'v-card', _vm.vuetifyProps('v-card'), false), [_c('dispatch-renderer', {
      attrs: {
        "schema": _vm.layout.schema,
        "uischema": element,
        "path": _vm.layout.path,
        "enabled": _vm.layout.enabled,
        "renderers": _vm.layout.renderers,
        "cells": _vm.layout.cells
      }
    }), _vm._v(" "), !!_vm.appliedOptions.showNavButtons ? _c('div', [_c('v-divider'), _vm._v(" "), _c('v-card-actions', _vm._b({}, 'v-card-actions', _vm.vuetifyProps('v-card-actions'), false), [_c('v-btn', _vm._b({
      attrs: {
        "text": "",
        "left": "",
        "disabled": _vm.activeCategory - 1 <= 0
      },
      on: {
        "click": function click($event) {
          _vm.activeCategory--;
        }
      }
    }, 'v-btn', _vm.vuetifyProps('v-btn.back'), false), [_vm._v("\n                " + _vm._s(_vm.translateByText(_vm.vuetifyProps('v-btn.back', {
      label: 'Back'
    }).label)) + "\n              ")]), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-btn', _vm._b({
      attrs: {
        "text": "",
        "right": "",
        "disabled": _vm.activeCategory - 1 >= _vm.visibleCategories.length - 1
      },
      on: {
        "click": function click($event) {
          _vm.activeCategory++;
        }
      }
    }, 'v-btn', _vm.vuetifyProps('v-btn.next', {
      color: 'primary'
    }), false), [_vm._v("\n                " + _vm._s(_vm.translateByText(_vm.vuetifyProps('v-btn.next', {
      label: 'Next'
    }).label)) + "\n              ")])], 1)], 1) : _vm._e()], 1)], 1)];
  })], 2) : _c('v-stepper', _vm._b({
    model: {
      value: _vm.activeCategory,
      callback: function callback($$v) {
        _vm.activeCategory = $$v;
      },
      expression: "activeCategory"
    }
  }, 'v-stepper', _vm.vuetifyProps('v-stepper'), false), [_c('v-stepper-header', _vm._b({}, 'v-stepper-header', _vm.vuetifyProps('v-stepper-header'), false), [_vm._l(_vm.visibleCategories, function (_, index) {
    return [_c('v-stepper-step', _vm._b({
      key: _vm.layout.path + "-" + index,
      attrs: {
        "step": index + 1,
        "editable": ""
      }
    }, 'v-stepper-step', _vm.vuetifyProps('v-stepper-step'), false), [_vm._v("\n          " + _vm._s(_vm.visibleCategoryLabels[index]) + "\n        ")]), _vm._v(" "), index !== _vm.visibleCategories.length - 1 ? _c('v-divider', {
      key: index
    }) : _vm._e()];
  })], 2), _vm._v(" "), _c('v-stepper-items', _vm._b({}, 'v-stepper-items', _vm.vuetifyProps('v-stepper-items'), false), _vm._l(_vm.visibleCategories, function (element, index) {
    return _c('v-stepper-content', _vm._b({
      key: _vm.layout.path + "-" + index,
      attrs: {
        "step": index + 1
      }
    }, 'v-stepper-content', _vm.vuetifyProps('v-stepper-content'), false), [_c('v-card', _vm._b({}, 'v-card', _vm.vuetifyProps('v-card'), false), [_c('dispatch-renderer', {
      attrs: {
        "schema": _vm.layout.schema,
        "uischema": element,
        "path": _vm.layout.path,
        "enabled": _vm.layout.enabled,
        "renderers": _vm.layout.renderers,
        "cells": _vm.layout.cells
      }
    }), _vm._v(" "), !!_vm.appliedOptions.showNavButtons ? _c('div', [_c('v-divider'), _vm._v(" "), _c('v-card-actions', _vm._b({}, 'v-card-actions', _vm.vuetifyProps('v-card-actions'), false), [_c('v-btn', _vm._b({
      attrs: {
        "text": "",
        "left": "",
        "disabled": _vm.activeCategory - 1 <= 0
      },
      on: {
        "click": function click($event) {
          _vm.activeCategory--;
        }
      }
    }, 'v-btn', _vm.vuetifyProps('v-btn.back'), false), [_vm._v("\n                " + _vm._s(_vm.translateByText(_vm.vuetifyProps('v-btn.back', {
      label: 'Back'
    }).label)) + "\n              ")]), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-btn', _vm._b({
      attrs: {
        "right": "",
        "disabled": _vm.activeCategory - 1 >= _vm.visibleCategories.length - 1
      },
      on: {
        "click": function click($event) {
          _vm.activeCategory++;
        }
      }
    }, 'v-btn', _vm.vuetifyProps('v-btn.next', {
      color: 'primary',
      text: true
    }), false), [_vm._v("\n                " + _vm._s(_vm.translateByText(_vm.vuetifyProps('v-btn.next', {
      label: 'Next'
    }).label)) + "\n              ")])], 1)], 1) : _vm._e()], 1)], 1);
  }), 1)], 1)], 1) : _vm._e();
};
var __vue_staticRenderFns__$w = [];
var __vue_inject_styles__$w = undefined;
var __vue_scope_id__$w = undefined;
var __vue_module_identifier__$w = undefined;
var __vue_is_functional_template__$w = false;
var __vue_component__$w = normalizeComponent({
  render: __vue_render__$w,
  staticRenderFns: __vue_staticRenderFns__$w
}, __vue_inject_styles__$w, __vue_script__$w, __vue_scope_id__$w, __vue_is_functional_template__$w, __vue_module_identifier__$w, false, undefined, undefined, undefined);

var layoutRenderer$2 = vue.defineComponent({
  name: 'group-renderer',
  components: {
    DispatchRenderer: vue2.DispatchRenderer,
    VCard: lib.VCard,
    VCardTitle: lib.VCardTitle,
    VCardText: lib.VCardText
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    return useVuetifyLayout(vue2.useJsonFormsLayout(props));
  },
  computed: {
    bare: function bare() {
      return !!this.appliedOptions.bare;
    },
    alignLeft: function alignLeft() {
      return !!this.appliedOptions.alignLeft;
    },
    classes: function classes() {
      var classes = ['my-1', 'pa-0', "".concat(this.styles.group.root)];
      if (this.bare) {
        classes.push("".concat(this.styles.group.bare));
      }
      if (this.alignLeft) {
        classes.push("".concat(this.styles.group.alignLeft));
      }
      return classes.join(' ');
    }
  }
});
var entry$s = {
  renderer: layoutRenderer$2,
  tester: core.rankWith(2, core.and(core.isLayout, core.uiTypeIs('Group')))
};

var __vue_script__$v = layoutRenderer$2;
var __vue_render__$v = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.layout.visible ? _c('v-card', _vm._b({
    "class": _vm.classes,
    attrs: {
      "elevation": !_vm.bare ? 2 : undefined,
      "outlined": _vm.bare
    }
  }, 'v-card', _vm.vuetifyProps('v-card'), false), [_vm.layout.label ? _c('v-card-title', _vm._b({
    "class": _vm.styles.group.label
  }, 'v-card-title', _vm.vuetifyProps('v-card-title'), false), [_vm._v(_vm._s(_vm.layout.label))]) : _vm._e(), _vm._v(" "), _vm._l(_vm.layout.uischema.elements, function (element, index) {
    return _c('v-card-text', _vm._b({
      key: _vm.layout.path + "-" + index,
      "class": _vm.styles.group.item
    }, 'v-card-text', _vm.vuetifyProps("v-card-text[" + index + "]"), false), [_c('dispatch-renderer', {
      attrs: {
        "schema": _vm.layout.schema,
        "uischema": element,
        "path": _vm.layout.path,
        "enabled": _vm.layout.enabled,
        "renderers": _vm.layout.renderers,
        "cells": _vm.layout.cells
      }
    })], 1);
  })], 2) : _vm._e();
};
var __vue_staticRenderFns__$v = [];
var __vue_inject_styles__$v = undefined;
var __vue_scope_id__$v = undefined;
var __vue_module_identifier__$v = undefined;
var __vue_is_functional_template__$v = false;
var __vue_component__$v = normalizeComponent({
  render: __vue_render__$v,
  staticRenderFns: __vue_staticRenderFns__$v
}, __vue_inject_styles__$v, __vue_script__$v, __vue_scope_id__$v, __vue_is_functional_template__$v, __vue_module_identifier__$v, false, undefined, undefined, undefined);

var layoutRenderer$1 = vue.defineComponent({
  name: 'horizontal-layout-renderer',
  components: {
    DispatchRenderer: vue2.DispatchRenderer,
    VContainer: lib.VContainer,
    VRow: lib.VRow,
    VCol: lib.VCol
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    return useVuetifyLayout(vue2.useJsonFormsLayout(props));
  },
  computed: {
    collapse: function collapse() {
      var _this$$vuetify$breakp = this.$vuetify.breakpoint,
        xs = _this$$vuetify$breakp.xs,
        sm = _this$$vuetify$breakp.sm,
        md = _this$$vuetify$breakp.md,
        lg = _this$$vuetify$breakp.lg,
        xl = _this$$vuetify$breakp.xl;
      if (this.appliedOptions.breakHorizontal === 'xs' && xs) {
        return true;
      }
      if (this.appliedOptions.breakHorizontal === 'sm' && (xs || sm)) {
        return true;
      }
      if (this.appliedOptions.breakHorizontal === 'md' && (xs || sm || md)) {
        return true;
      }
      if (this.appliedOptions.breakHorizontal === 'lg' && (xs || sm || md || lg)) {
        return true;
      }
      if (this.appliedOptions.breakHorizontal === 'xl' && (xs || sm || md || lg || xl)) {
        return true;
      }
      return false;
    },
    cols: function cols() {
      var _this = this;
      return this.uischema.elements.map(function (_, index) {
        var _this$vuetifyProps;
        if (_this.collapse) {
          return 12;
        }
        var uiSchemaCols = (_this$vuetifyProps = _this.vuetifyProps("v-col[".concat(index, "]"))) === null || _this$vuetifyProps === void 0 ? void 0 : _this$vuetifyProps.cols;
        return uiSchemaCols !== undefined ? uiSchemaCols : false;
      });
    }
  }
});
var entry$r = {
  renderer: layoutRenderer$1,
  tester: core.rankWith(2, core.uiTypeIs('HorizontalLayout'))
};

var __vue_script__$u = layoutRenderer$1;
var __vue_render__$u = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.layout.visible ? _c('v-container', _vm._b({
    "class": "" + _vm.styles.horizontalLayout.root
  }, 'v-container', _vm.vuetifyProps('v-container'), false), [_c('v-row', _vm._b({}, 'v-row', _vm.vuetifyProps('v-row'), false), _vm._l(_vm.layout.uischema.elements, function (element, index) {
    return _c('v-col', _vm._b({
      key: _vm.layout.path + "-" + index,
      "class": _vm.styles.horizontalLayout.item,
      attrs: {
        "cols": _vm.cols[index]
      }
    }, 'v-col', _vm.vuetifyProps("v-col[" + index + "]"), false), [_c('dispatch-renderer', {
      attrs: {
        "schema": _vm.layout.schema,
        "uischema": element,
        "path": _vm.layout.path,
        "enabled": _vm.layout.enabled,
        "renderers": _vm.layout.renderers,
        "cells": _vm.layout.cells
      }
    })], 1);
  }), 1)], 1) : _vm._e();
};
var __vue_staticRenderFns__$u = [];
var __vue_inject_styles__$u = undefined;
var __vue_scope_id__$u = undefined;
var __vue_module_identifier__$u = undefined;
var __vue_is_functional_template__$u = false;
var __vue_component__$u = normalizeComponent({
  render: __vue_render__$u,
  staticRenderFns: __vue_staticRenderFns__$u
}, __vue_inject_styles__$u, __vue_script__$u, __vue_scope_id__$u, __vue_is_functional_template__$u, __vue_module_identifier__$u, false, undefined, undefined, undefined);

var layoutRenderer = vue.defineComponent({
  name: 'vertical-layout-renderer',
  components: {
    DispatchRenderer: vue2.DispatchRenderer,
    VContainer: lib.VContainer,
    VRow: lib.VRow,
    VCol: lib.VCol
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    return useVuetifyLayout(vue2.useJsonFormsLayout(props));
  }
});
var entry$q = {
  renderer: layoutRenderer,
  tester: core.rankWith(2, core.uiTypeIs('VerticalLayout'))
};

var __vue_script__$t = layoutRenderer;
var __vue_render__$t = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.layout.visible ? _c('v-container', _vm._b({
    "class": "" + _vm.styles.verticalLayout.root
  }, 'v-container', _vm.vuetifyProps('v-container'), false), _vm._l(_vm.layout.uischema.elements, function (element, index) {
    return _c('v-row', _vm._b({
      key: _vm.layout.path + "-" + index
    }, 'v-row', _vm.vuetifyProps("v-row[" + index + "]"), false), [_c('v-col', _vm._b({
      "class": _vm.styles.verticalLayout.item,
      attrs: {
        "cols": "12"
      }
    }, 'v-col', _vm.vuetifyProps('v-col'), false), [_c('dispatch-renderer', {
      attrs: {
        "schema": _vm.layout.schema,
        "uischema": element,
        "path": _vm.layout.path,
        "enabled": _vm.layout.enabled,
        "renderers": _vm.layout.renderers,
        "cells": _vm.layout.cells
      }
    })], 1)], 1);
  }), 1) : _vm._e();
};
var __vue_staticRenderFns__$t = [];
var __vue_inject_styles__$t = undefined;
var __vue_scope_id__$t = undefined;
var __vue_module_identifier__$t = undefined;
var __vue_is_functional_template__$t = false;
var __vue_component__$t = normalizeComponent({
  render: __vue_render__$t,
  staticRenderFns: __vue_staticRenderFns__$t
}, __vue_inject_styles__$t, __vue_script__$t, __vue_scope_id__$t, __vue_is_functional_template__$t, __vue_module_identifier__$t, false, undefined, undefined, undefined);

var layoutRendererEntry = {
  renderer: __vue_component__$t,
  tester: core.rankWith(1, core.isLayout)
};
var layoutRenderers = [layoutRendererEntry, entry$v, entry$u, entry$t, entry$s, entry$r, entry$q];

var arrayListRendererEntry = {
  renderer: __vue_component__$y,
  tester: core.rankWith(2, core.schemaTypeIs('array'))
};
var arrayRenderers = [arrayListRendererEntry];

var script$2 = vue.defineComponent({
  name: 'combinator-properties',
  components: {
    DispatchRenderer: vue2.DispatchRenderer
  },
  props: {
    schema: {
      type: Object,
      required: true
    },
    combinatorKeyword: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  setup: function setup(props) {
    var otherProps = omit__default["default"](props.schema, props.combinatorKeyword);
    var foundUISchema = core.Generate.uiSchema(otherProps, 'VerticalLayout');
    var isLayout = function isLayout(uischema) {
      return Object.prototype.hasOwnProperty.call(uischema, 'elements');
    };
    var isLayoutWithElements = false;
    if (foundUISchema !== null && isLayout(foundUISchema)) {
      isLayoutWithElements = foundUISchema.elements.length > 0;
    }
    return {
      otherProps: otherProps,
      foundUISchema: foundUISchema,
      isLayoutWithElements: isLayoutWithElements
    };
  }
});

var __vue_script__$s = script$2;
var __vue_render__$s = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.isLayoutWithElements ? _c('div', [_c('dispatch-renderer', {
    attrs: {
      "schema": _vm.otherProps,
      "path": _vm.path,
      "uischema": _vm.foundUISchema
    }
  })], 1) : _vm._e();
};
var __vue_staticRenderFns__$s = [];
var __vue_inject_styles__$s = undefined;
var __vue_scope_id__$s = undefined;
var __vue_module_identifier__$s = undefined;
var __vue_is_functional_template__$s = false;
var __vue_component__$s = normalizeComponent({
  render: __vue_render__$s,
  staticRenderFns: __vue_staticRenderFns__$s
}, __vue_inject_styles__$s, __vue_script__$s, __vue_scope_id__$s, __vue_is_functional_template__$s, __vue_module_identifier__$s, false, undefined, undefined, undefined);

var DisabledIconFocus = {
  componentUpdated: function componentUpdated(el) {
    el.querySelectorAll('.v-input__icon button').forEach(function (x) {
      return x.setAttribute('tabindex', '-1');
    });
  }
};

var reuseAjvForSchema = function reuseAjvForSchema(ajv, schema) {
  if (Object.prototype.hasOwnProperty.call(schema, 'id') || Object.prototype.hasOwnProperty.call(schema, '$id')) {
    ajv.removeSchema(schema);
  }
  return ajv;
};
var script$1 = vue.defineComponent({
  name: 'additional-properties',
  components: {
    DispatchRenderer: vue2.DispatchRenderer,
    VCard: lib.VCard,
    VTooltip: lib.VTooltip,
    VToolbar: lib.VToolbar,
    VIcon: lib.VIcon,
    VBtn: lib.VBtn,
    VCardTitle: lib.VCardTitle,
    VSpacer: lib.VSpacer,
    VToolbarTitle: lib.VToolbarTitle,
    VTextField: lib.VTextField,
    VContainer: lib.VContainer,
    VRow: lib.VRow,
    VCol: lib.VCol,
    VHover: lib.VHover
  },
  directives: {
    DisabledIconFocus: DisabledIconFocus
  },
  props: {
    input: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var control = props.input.control;
    var reservedPropertyNames = Object.keys(control.value.schema && control.value.schema.properties || {});
    var additionalKeys = control.value.data && isPlainObject__default["default"](control.value.data) ? Object.keys(control.value.data).filter(function (k) {
      return !reservedPropertyNames.includes(k);
    }) : [];
    var toAdditionalPropertyType = function toAdditionalPropertyType(propName, propValue) {
      var propSchema = undefined;
      var propUiSchema = undefined;
      if (control.value.schema && control.value.schema.patternProperties && _typeof(control.value.schema.patternProperties) === 'object') {
        var matchedPattern = Object.keys(control.value.schema.patternProperties).find(function (pattern) {
          return new RegExp(pattern).test(propName);
        });
        if (matchedPattern) {
          propSchema = control.value.schema.patternProperties[matchedPattern];
        }
      }
      if (!propSchema && control.value.schema && control.value.schema.additionalProperties && _typeof(control.value.schema.additionalProperties) === 'object') {
        propSchema = control.value.schema.additionalProperties;
      }
      if (!propSchema && propValue !== undefined) {
        var _Generate$jsonSchema$;
        propSchema = (_Generate$jsonSchema$ = core.Generate.jsonSchema({
          prop: propValue
        }, {
          additionalProperties: false,
          required: function required() {
            return false;
          }
        }).properties) === null || _Generate$jsonSchema$ === void 0 ? void 0 : _Generate$jsonSchema$.prop;
      }
      if (propSchema) {
        if (propSchema.type === 'object' || propSchema.type === 'array') {
          var _propSchema$title;
          propUiSchema = core.Generate.uiSchema(propSchema, 'Group');
          propUiSchema.label = (_propSchema$title = propSchema.title) !== null && _propSchema$title !== void 0 ? _propSchema$title : startCase__default["default"](propName);
        } else {
          propUiSchema = core.createControlElement(control.value.path + '/' + core.encode(propName));
        }
      }
      return {
        propertyName: propName,
        path: core.composePaths(control.value.path, propName),
        schema: propSchema,
        uischema: propUiSchema
      };
    };
    var appliedOptions = useControlAppliedOptions(props.input);
    var additionalPropertyItems = vue.ref([]);
    additionalKeys.forEach(function (propName) {
      var _control$value$data;
      var additionalProperty = toAdditionalPropertyType(propName, (_control$value$data = control.value.data) === null || _control$value$data === void 0 ? void 0 : _control$value$data[propName]);
      additionalPropertyItems.value.push(additionalProperty);
    });
    var styles = useStyles(control.value.uischema);
    var newPropertyName = vue.ref('');
    var ajv = useAjv();
    var propertyNameSchema = undefined;
    var propertyNameValidator = undefined;
    if (control.value.schema && control.value.schema.propertyNames && _typeof(control.value.schema.propertyNames) === 'object') {
      propertyNameSchema = control.value.schema.propertyNames;
    }
    if (control.value.schema && control.value.schema.patternProperties && _typeof(control.value.schema.additionalProperties) !== 'object' && _typeof(control.value.schema.patternProperties) === 'object') {
      var matchPatternPropertiesKeys = {
        type: 'string',
        pattern: Object.keys(control.value.schema.patternProperties).join('|')
      };
      propertyNameSchema = propertyNameSchema ? {
        allOf: [propertyNameSchema, matchPatternPropertiesKeys]
      } : matchPatternPropertiesKeys;
    }
    if (propertyNameSchema) {
      propertyNameValidator = reuseAjvForSchema(ajv, propertyNameSchema).compile(propertyNameSchema);
    }
    var vuetifyProps = useVuetifyProps(appliedOptions);
    var t = useTranslator();
    return {
      t: t,
      vuetifyProps: vuetifyProps,
      ajv: ajv,
      propertyNameValidator: propertyNameValidator,
      control: control,
      styles: styles,
      appliedOptions: appliedOptions,
      additionalPropertyItems: additionalPropertyItems,
      toAdditionalPropertyType: toAdditionalPropertyType,
      newPropertyName: newPropertyName
    };
  },
  computed: {
    addPropertyDisabled: function addPropertyDisabled() {
      return (
        !this.control.enabled ||
        this.appliedOptions.restrict && this.maxPropertiesReached ||
        this.newPropertyErrors.length > 0 || !this.newPropertyName
      );
    },
    maxPropertiesReached: function maxPropertiesReached() {
      return this.control.schema && this.control.schema.maxProperties !== undefined &&
      this.control.data &&
      Object.keys(this.control.data).length >= this.control.schema.maxProperties;
    },
    removePropertyDisabled: function removePropertyDisabled() {
      return (
        !this.control.enabled ||
        this.appliedOptions.restrict && this.minPropertiesReached
      );
    },
    minPropertiesReached: function minPropertiesReached() {
      return this.control.schema && this.control.schema.minProperties !== undefined &&
      this.control.data &&
      Object.keys(this.control.data).length <= this.control.schema.minProperties;
    },
    newPropertyErrors: function newPropertyErrors() {
      var _this = this;
      if (this.newPropertyName) {
        var messages = this.propertyNameValidator ? core.validate(this.propertyNameValidator, this.newPropertyName).map(function (error) {
          return error.message;
        }).filter(function (message) {
          return message;
        }) : [];
        if (this.reservedPropertyNames.includes(this.newPropertyName) || this.additionalPropertyItems.find(function (ap) {
          return ap.propertyName === _this.newPropertyName;
        }) !== undefined) {
          messages.push("Property '".concat(this.newPropertyName, "' is already defined"));
        }
        if (this.newPropertyName.includes('[')) {
          messages.push('Property name contains invalid char: [');
        }
        if (this.newPropertyName.includes(']')) {
          messages.push('Property name contains invalid char: ]');
        }
        if (this.newPropertyName.includes('.')) {
          messages.push('Property name contains invalid char: .');
        }
        return messages;
      }
      return [];
    },
    placeholder: function placeholder() {
      return this.t(this.i18nKey('newProperty.placeholder'), 'New Property');
    },
    reservedPropertyNames: function reservedPropertyNames() {
      return Object.keys(this.control.schema.properties || {});
    },
    additionalPropertiesTitle: function additionalPropertiesTitle() {
      var additionalProperties = this.control.schema.additionalProperties;
      var label = additionalProperties && _typeof(additionalProperties) === 'object' && additionalProperties.title ? additionalProperties.title : 'Additional Properties';
      return this.t(this.i18nKey('title'), label);
    },
    addToLabel: function addToLabel() {
      return this.t(this.i18nKey('btn.add'), 'Add to ${additionalProperties.title}', {
        additionalProperties: {
          title: this.additionalPropertiesTitle
        }
      });
    },
    deleteLabel: function deleteLabel() {
      return this.t(this.i18nKey('btn.delete'), 'Delete from ${additionalProperties.title}', {
        additionalProperties: {
          title: this.additionalPropertiesTitle
        }
      });
    }
  },
  watch: {
    'control.data': {
      handler: function handler(newData) {
        if (this.control.data && _typeof(this.control.data) === 'object') {
          var keys = Object.keys(newData);
          var hasChanges = false;
          this.additionalPropertyItems.forEach(function (ap) {
            if (ap.schema && (!keys.includes(ap.propertyName) || newData[ap.propertyName] === undefined || newData[ap.propertyName] === null && ap.schema.type !== 'null')
            ) {
              var newValue = core.createDefaultValue(ap.schema);
              hasChanges = newData[ap.propertyName] !== newValue;
              newData[ap.propertyName] = newValue;
            }
          });
          if (hasChanges) {
            this.input.handleChange(this.control.path, newData);
          }
        }
      },
      deep: true
    }
  },
  methods: {
    composePaths: core.composePaths,
    i18nKey: function i18nKey(key) {
      return core.getI18nKey(this.control.schema, this.control.uischema, this.control.path, "additionalProperties.".concat(key));
    },
    addProperty: function addProperty() {
      if (this.newPropertyName) {
        var additionalProperty = this.toAdditionalPropertyType(this.newPropertyName, undefined);
        if (additionalProperty) {
          this.additionalPropertyItems = [].concat(_toConsumableArray(this.additionalPropertyItems), [additionalProperty]);
        }
        if (this.control.data && _typeof(this.control.data) === 'object' && additionalProperty.schema) {
          this.control.data[this.newPropertyName] = core.createDefaultValue(additionalProperty.schema);
          this.input.handleChange(this.control.path, this.control.data);
        }
      }
      this.newPropertyName = '';
    },
    removeProperty: function removeProperty(propName) {
      this.additionalPropertyItems = this.additionalPropertyItems.filter(function (d) {
        return d.propertyName !== propName;
      });
      if (this.control.data && _typeof(this.control.data) === 'object') {
        delete this.control.data[propName];
        this.input.handleChange(this.control.path, this.control.data);
      }
    }
  }
});

var __vue_script__$r = script$1;
var __vue_render__$r = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.control.visible ? _c('v-card', _vm._b({}, 'v-card', _vm.vuetifyProps('v-card', {
    elevation: '0'
  }), false), [_c('v-card-title', _vm._b({}, 'v-card-title', _vm.vuetifyProps('v-card-title'), false), [_c('v-toolbar', {
    attrs: {
      "flat": ""
    }
  }, [_c('v-toolbar-title', [_vm._v(_vm._s(_vm.additionalPropertiesTitle))]), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-hover', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var hover = ref.hover;
        return [_c('v-text-field', _vm._b({
          directives: [{
            name: "disabled-icon-focus",
            rawName: "v-disabled-icon-focus"
          }],
          "class": _vm.styles.control.input,
          attrs: {
            "required": true,
            "error-messages": _vm.newPropertyErrors,
            "clearable": hover,
            "placeholder": _vm.placeholder,
            "disabled": !_vm.control.enabled
          },
          model: {
            value: _vm.newPropertyName,
            callback: function callback($$v) {
              _vm.newPropertyName = $$v;
            },
            expression: "newPropertyName"
          }
        }, 'v-text-field', _vm.vuetifyProps('v-text-field'), false))];
      }
    }], null, false, 1469151162)
  }), _vm._v(" "), _c('v-tooltip', {
    attrs: {
      "bottom": ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(ref) {
        var onTooltip = ref.on;
        return [_c('v-btn', _vm._g({
          attrs: {
            "fab": "",
            "text": "",
            "elevation": "0",
            "small": "",
            "aria-label": _vm.addToLabel,
            "disabled": _vm.addPropertyDisabled
          },
          on: {
            "click": _vm.addProperty
          }
        }, onTooltip), [_c('v-icon', [_vm._v("mdi-plus")])], 1)];
      }
    }], null, false, 3471368354)
  }, [_vm._v("\n        " + _vm._s(_vm.addToLabel) + "\n      ")])], 1)], 1), _vm._v(" "), _c('v-container', _vm._b({}, 'v-container', _vm.vuetifyProps('v-container'), false), _vm._l(_vm.additionalPropertyItems, function (element, index) {
    return _c('v-row', {
      key: "" + index
    }, [_c('v-col', [element.schema && element.uischema ? _c('dispatch-renderer', {
      attrs: {
        "schema": element.schema,
        "uischema": element.uischema,
        "path": element.path,
        "enabled": _vm.control.enabled,
        "renderers": _vm.control.renderers,
        "cells": _vm.control.cells
      }
    }) : _vm._e()], 1), _vm._v(" "), _vm.control.enabled ? _c('v-col', {
      staticClass: "shrink"
    }, [_c('v-tooltip', {
      attrs: {
        "bottom": ""
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(ref) {
          var onTooltip = ref.on;
          return [_c('v-btn', _vm._g({
            attrs: {
              "fab": "",
              "text": "",
              "elevation": "0",
              "small": "",
              "aria-label": _vm.deleteLabel,
              "disabled": _vm.removePropertyDisabled
            },
            on: {
              "click": function click($event) {
                return _vm.removeProperty(element.propertyName);
              }
            }
          }, onTooltip), [_c('v-icon', {
            staticClass: "notranslate"
          }, [_vm._v("mdi-delete")])], 1)];
        }
      }], null, true)
    }, [_vm._v("\n          " + _vm._s(_vm.deleteLabel) + "\n        ")])], 1) : _vm._e()], 1);
  }), 1)], 1) : _vm._e();
};
var __vue_staticRenderFns__$r = [];
var __vue_inject_styles__$r = undefined;
var __vue_scope_id__$r = undefined;
var __vue_module_identifier__$r = undefined;
var __vue_is_functional_template__$r = false;
var __vue_component__$r = normalizeComponent({
  render: __vue_render__$r,
  staticRenderFns: __vue_staticRenderFns__$r
}, __vue_inject_styles__$r, __vue_script__$r, __vue_scope_id__$r, __vue_is_functional_template__$r, __vue_module_identifier__$r, false, undefined, undefined, undefined);

var controlRenderer$p = vue.defineComponent({
  name: 'all-of-renderer',
  components: {
    DispatchRenderer: vue2.DispatchRenderer,
    CombinatorProperties: __vue_component__$s
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    return useVuetifyControl(vue2.useJsonFormsAllOfControl(props));
  },
  computed: {
    delegateUISchema: function delegateUISchema() {
      return core.findMatchingUISchema(this.control.uischemas)(this.control.schema, this.control.uischema.scope, this.control.path);
    },
    allOfRenderInfos: function allOfRenderInfos() {
      var result = core.createCombinatorRenderInfos(
      this.control.schema.allOf, this.control.rootSchema, 'allOf', this.control.uischema, this.control.path, this.control.uischemas);
      return result.filter(function (info) {
        return info.uischema;
      });
    }
  }
});
var entry$p = {
  renderer: controlRenderer$p,
  tester: core.rankWith(3, core.isAllOfControl)
};

var __vue_script__$q = controlRenderer$p;
var __vue_render__$q = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.control.visible ? _c('div', [_vm.delegateUISchema ? [_c('dispatch-renderer', {
    attrs: {
      "schema": _vm.control.schema,
      "uischema": _vm.delegateUISchema,
      "path": _vm.control.path,
      "enabled": _vm.control.enabled,
      "renderers": _vm.control.renderers,
      "cells": _vm.control.cells
    }
  })] : _vm.allOfRenderInfos ? [_c('div', [_c('combinator-properties', {
    attrs: {
      "schema": _vm.control.schema,
      "combinatorKeyword": "allOf",
      "path": _vm.path
    }
  }), _vm._v(" "), _vm._l(_vm.allOfRenderInfos, function (allOfRenderInfo, allOfIndex) {
    return _c('dispatch-renderer', {
      key: _vm.control.path + "-" + allOfIndex,
      attrs: {
        "schema": allOfRenderInfo.schema,
        "uischema": allOfRenderInfo.uischema,
        "path": _vm.control.path,
        "enabled": _vm.control.enabled,
        "renderers": _vm.control.renderers,
        "cells": _vm.control.cells
      }
    });
  })], 2)] : _vm._e()], 2) : _vm._e();
};
var __vue_staticRenderFns__$q = [];
var __vue_inject_styles__$q = undefined;
var __vue_scope_id__$q = undefined;
var __vue_module_identifier__$q = undefined;
var __vue_is_functional_template__$q = false;
var __vue_component__$q = normalizeComponent({
  render: __vue_render__$q,
  staticRenderFns: __vue_staticRenderFns__$q
}, __vue_inject_styles__$q, __vue_script__$q, __vue_scope_id__$q, __vue_is_functional_template__$q, __vue_module_identifier__$q, false, undefined, undefined, undefined);

var controlRenderer$o = vue.defineComponent({
  name: 'any-of-renderer',
  components: {
    DispatchRenderer: vue2.DispatchRenderer,
    CombinatorProperties: __vue_component__$s,
    VTabs: lib.VTabs,
    VTab: lib.VTab,
    VTabsItems: lib.VTabsItems,
    VTabItem: lib.VTabItem
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var input = vue2.useJsonFormsAnyOfControl(props);
    var control = input.control.value;
    var selectedIndex = vue.ref(control.indexOfFittingSchema || 0);
    return _objectSpread2(_objectSpread2({}, useVuetifyControl(input)), {}, {
      selectedIndex: selectedIndex
    });
  },
  computed: {
    anyOfRenderInfos: function anyOfRenderInfos() {
      var result = core.createCombinatorRenderInfos(
      this.control.schema.anyOf, this.control.rootSchema, 'anyOf', this.control.uischema, this.control.path, this.control.uischemas);
      return result.filter(function (info) {
        return info.uischema;
      });
    }
  }
});
var entry$o = {
  renderer: controlRenderer$o,
  tester: core.rankWith(3, core.isAnyOfControl)
};

var __vue_script__$p = controlRenderer$o;
var __vue_render__$p = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.control.visible ? _c('div', [_c('combinator-properties', {
    attrs: {
      "schema": _vm.control.schema,
      "combinatorKeyword": "anyOf",
      "path": _vm.path
    }
  }), _vm._v(" "), _c('v-tabs', {
    model: {
      value: _vm.selectedIndex,
      callback: function callback($$v) {
        _vm.selectedIndex = $$v;
      },
      expression: "selectedIndex"
    }
  }, _vm._l(_vm.anyOfRenderInfos, function (anyOfRenderInfo, anyOfIndex) {
    return _c('v-tab', {
      key: _vm.control.path + "-" + anyOfIndex
    }, [_vm._v("\n      " + _vm._s(anyOfRenderInfo.label) + "\n    ")]);
  }), 1), _vm._v(" "), _c('v-tabs-items', {
    model: {
      value: _vm.selectedIndex,
      callback: function callback($$v) {
        _vm.selectedIndex = $$v;
      },
      expression: "selectedIndex"
    }
  }, _vm._l(_vm.anyOfRenderInfos, function (anyOfRenderInfo, anyOfIndex) {
    return _c('v-tab-item', {
      key: _vm.control.path + "-" + anyOfIndex
    }, [_vm.selectedIndex === anyOfIndex ? _c('dispatch-renderer', {
      attrs: {
        "schema": anyOfRenderInfo.schema,
        "uischema": anyOfRenderInfo.uischema,
        "path": _vm.control.path,
        "renderers": _vm.control.renderers,
        "cells": _vm.control.cells,
        "enabled": _vm.control.enabled
      }
    }) : _vm._e()], 1);
  }), 1)], 1) : _vm._e();
};
var __vue_staticRenderFns__$p = [];
var __vue_inject_styles__$p = undefined;
var __vue_scope_id__$p = undefined;
var __vue_module_identifier__$p = undefined;
var __vue_is_functional_template__$p = false;
var __vue_component__$p = normalizeComponent({
  render: __vue_render__$p,
  staticRenderFns: __vue_staticRenderFns__$p
}, __vue_inject_styles__$p, __vue_script__$p, __vue_scope_id__$p, __vue_is_functional_template__$p, __vue_module_identifier__$p, false, undefined, undefined, undefined);

var controlRenderer$n = vue.defineComponent({
  name: 'array-control-renderer',
  components: {
    DispatchCell: vue2.DispatchCell,
    DispatchRenderer: vue2.DispatchRenderer,
    VCard: lib.VCard,
    VCardTitle: lib.VCardTitle,
    VCardText: lib.VCardText,
    VAvatar: lib.VAvatar,
    VRow: lib.VRow,
    VCol: lib.VCol,
    VToolbar: lib.VToolbar,
    VToolbarTitle: lib.VToolbarTitle,
    VTooltip: lib.VTooltip,
    VIcon: lib.VIcon,
    VBtn: lib.VBtn,
    VSpacer: lib.VSpacer,
    VContainer: lib.VContainer,
    ValidationIcon: __vue_component__$A,
    ValidationBadge: __vue_component__$B,
    VSimpleTable: lib.VSimpleTable
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var t = useTranslator();
    return _objectSpread2(_objectSpread2({}, useVuetifyArrayControl(vue2.useJsonFormsArrayControl(props))), {}, {
      t: t
    });
  },
  computed: {
    arraySchema: function arraySchema() {
      return core.Resolve.schema(this.control.rootSchema, this.control.uischema.scope, this.control.rootSchema);
    },
    dataLength: function dataLength() {
      return this.control.data ? this.control.data.length : 0;
    }
  },
  methods: {
    composePaths: core.composePaths,
    createDefaultValue: core.createDefaultValue,
    addButtonClick: function addButtonClick() {
      this.addItem(this.control.path, core.createDefaultValue(this.control.schema))();
    },
    moveUpClick: function moveUpClick(event, toMove) {
      var _this$moveUp;
      event.stopPropagation();
      (_this$moveUp = this.moveUp) === null || _this$moveUp === void 0 || _this$moveUp.call(this, this.control.path, toMove)();
    },
    moveDownClick: function moveDownClick(event, toMove) {
      var _this$moveDown;
      event.stopPropagation();
      (_this$moveDown = this.moveDown) === null || _this$moveDown === void 0 || _this$moveDown.call(this, this.control.path, toMove)();
    },
    removeItemsClick: function removeItemsClick(event, toDelete) {
      var _this$removeItems;
      event.stopPropagation();
      (_this$removeItems = this.removeItems) === null || _this$removeItems === void 0 || _this$removeItems.call(this, this.control.path, toDelete)();
    },
    getValidColumnProps: function getValidColumnProps(scopedSchema) {
      if (scopedSchema.type === 'object' && _typeof(scopedSchema.properties) === 'object') {
        return Object.keys(scopedSchema.properties).filter(function (prop) {
          return scopedSchema.properties[prop].type !== 'array';
        });
      }
      return [''];
    },
    title: function title(prop) {
      var _this$control$schema$, _this$control$schema$2;
      return (_this$control$schema$ = (_this$control$schema$2 = this.control.schema.properties) === null || _this$control$schema$2 === void 0 || (_this$control$schema$2 = _this$control$schema$2[prop]) === null || _this$control$schema$2 === void 0 ? void 0 : _this$control$schema$2.title) !== null && _this$control$schema$ !== void 0 ? _this$control$schema$ : startCase__default["default"](prop);
    },
    resolveUiSchema: function resolveUiSchema(propName) {
      return this.control.schema.properties ? this.controlWithoutLabel("#/properties/".concat(propName)) : this.controlWithoutLabel('#');
    },
    controlWithoutLabel: function controlWithoutLabel(scope) {
      return {
        type: 'Control',
        scope: scope,
        label: false
      };
    }
  }
});
var entry$n = {
  renderer: controlRenderer$n,
  tester: core.rankWith(3, core.or(core.isObjectArrayControl, core.isPrimitiveArrayControl))
};

var __vue_script__$o = controlRenderer$n;
var __vue_render__$o = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.control.visible ? _c('v-card', {
    "class": _vm.styles.arrayList.root,
    attrs: {
      "elevation": "0"
    }
  }, [_c('v-card-title', [_c('v-toolbar', {
    "class": _vm.styles.arrayList.toolbar,
    attrs: {
      "flat": ""
    }
  }, [_c('v-toolbar-title', {
    "class": _vm.styles.arrayList.label
  }, [_vm._v(_vm._s(_vm.computedLabel))]), _vm._v(" "), _vm.control.childErrors.length > 0 ? _c('validation-icon', {
    attrs: {
      "errors": _vm.control.childErrors
    }
  }) : _vm._e(), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-tooltip', {
    attrs: {
      "bottom": ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(ref) {
        var onTooltip = ref.on;
        return [_c('v-btn', _vm._g({
          "class": _vm.styles.arrayList.addButton,
          attrs: {
            "fab": "",
            "text": "",
            "elevation": "0",
            "small": "",
            "aria-label": _vm.control.translations.addAriaLabel,
            "disabled": !_vm.control.enabled || _vm.appliedOptions.restrict && _vm.arraySchema !== undefined && _vm.arraySchema.maxItems !== undefined && _vm.dataLength >= _vm.arraySchema.maxItems
          },
          on: {
            "click": _vm.addButtonClick
          }
        }, onTooltip), [_c('v-icon', [_vm._v("mdi-plus")])], 1)];
      }
    }], null, false, 2688629128)
  }, [_vm._v("\n        " + _vm._s(_vm.control.translations.addTooltip) + "\n      ")])], 1)], 1), _vm._v(" "), _c('v-card-text', [_c('v-container', {
    attrs: {
      "justify-space-around": "",
      "align-content-center": ""
    }
  }, [_c('v-row', {
    attrs: {
      "justify": "center"
    }
  }, [_c('v-simple-table', {
    staticClass: "array-container flex"
  }, [_vm.control.schema.type === 'object' ? _c('thead', [_c('tr', [_vm._l(_vm.getValidColumnProps(_vm.control.schema), function (prop, index) {
    return _c('th', {
      key: _vm.control.path + "-header-" + index,
      attrs: {
        "scope": "col"
      }
    }, [_vm._v("\n                " + _vm._s(_vm.title(prop)) + "\n              ")]);
  }), _vm._v(" "), _vm.control.enabled ? _c('th', {
    "class": _vm.appliedOptions.showSortButtons ? 'fixed-cell' : 'fixed-cell-small',
    attrs: {
      "scope": "col"
    }
  }) : _vm._e()], 2)]) : _vm._e(), _vm._v(" "), _c('tbody', _vm._l(_vm.control.data, function (element, index) {
    return _c('tr', {
      key: _vm.control.path + "-" + index,
      "class": _vm.styles.arrayList.item
    }, [_vm._l(_vm.getValidColumnProps(_vm.control.schema), function (propName) {
      return _c('td', {
        key: _vm.composePaths(_vm.composePaths(_vm.control.path, "" + index), propName)
      }, [_c('dispatch-renderer', {
        attrs: {
          "schema": _vm.control.schema,
          "uischema": _vm.resolveUiSchema(propName),
          "path": _vm.composePaths(_vm.control.path, "" + index),
          "enabled": _vm.control.enabled,
          "renderers": _vm.control.renderers,
          "cells": _vm.control.cells
        }
      })], 1);
    }), _vm._v(" "), _vm.control.enabled ? _c('td', {
      "class": _vm.appliedOptions.showSortButtons ? 'fixed-cell' : 'fixed-cell-small'
    }, [_c('v-tooltip', {
      attrs: {
        "bottom": ""
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(ref) {
          var onTooltip = ref.on;
          return [_vm.appliedOptions.showSortButtons ? _c('v-btn', _vm._g({
            "class": _vm.styles.arrayList.itemMoveUp,
            attrs: {
              "fab": "",
              "text": "",
              "elevation": "0",
              "small": "",
              "aria-label": _vm.control.translations.upAriaLabel,
              "disabled": index <= 0 || !_vm.control.enabled
            },
            nativeOn: {
              "click": function click($event) {
                return _vm.moveUpClick($event, index);
              }
            }
          }, onTooltip), [_c('v-icon', {
            staticClass: "notranslate"
          }, [_vm._v("mdi-arrow-up")])], 1) : _vm._e()];
        }
      }], null, true)
    }, [_vm._v("\n                  " + _vm._s(_vm.t('array.btn.moveUp.tooltip', 'Move Up')) + "\n                ")]), _vm._v(" "), _c('v-tooltip', {
      attrs: {
        "bottom": ""
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(ref) {
          var onTooltip = ref.on;
          return [_vm.appliedOptions.showSortButtons ? _c('v-btn', _vm._g({
            "class": _vm.styles.arrayList.itemMoveDown,
            attrs: {
              "fab": "",
              "text": "",
              "elevation": "0",
              "small": "",
              "aria-label": _vm.control.translations.downAriaLabel,
              "disabled": index >= _vm.dataLength - 1 || !_vm.control.enabled
            },
            nativeOn: {
              "click": function click($event) {
                return _vm.moveDownClick($event, index);
              }
            }
          }, onTooltip), [_c('v-icon', {
            staticClass: "notranslate"
          }, [_vm._v("mdi-arrow-down")])], 1) : _vm._e()];
        }
      }], null, true)
    }, [_vm._v("\n                  " + _vm._s(_vm.t('array.btn.moveDown.tooltip', 'Move Down')) + "\n                ")]), _vm._v(" "), _c('v-tooltip', {
      attrs: {
        "bottom": ""
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(ref) {
          var onTooltip = ref.on;
          return [_c('v-btn', _vm._g({
            "class": _vm.styles.arrayList.itemDelete,
            attrs: {
              "fab": "",
              "text": "",
              "elevation": "0",
              "small": "",
              "aria-label": _vm.control.translations.removeAriaLabel,
              "disabled": !_vm.control.enabled || _vm.appliedOptions.restrict && _vm.arraySchema !== undefined && _vm.arraySchema.minItems !== undefined && _vm.dataLength <= _vm.arraySchema.minItems
            },
            nativeOn: {
              "click": function click($event) {
                return _vm.removeItemsClick($event, [index]);
              }
            }
          }, onTooltip), [_c('v-icon', {
            staticClass: "notranslate"
          }, [_vm._v("mdi-delete")])], 1)];
        }
      }], null, true)
    }, [_vm._v("\n                  " + _vm._s(_vm.control.translations.removeTooltip) + "\n                ")])], 1) : _vm._e()], 2);
  }), 0)])], 1)], 1), _vm._v(" "), _vm.dataLength === 0 ? _c('v-container', {
    "class": _vm.styles.arrayList.noData
  }, [_vm._v("\n      " + _vm._s(_vm.control.translations.noDataMessage) + "\n    ")]) : _vm._e()], 1)], 1) : _vm._e();
};
var __vue_staticRenderFns__$o = [];
var __vue_inject_styles__$o = undefined;
var __vue_scope_id__$o = "data-v-5620d0ee";
var __vue_module_identifier__$o = undefined;
var __vue_is_functional_template__$o = false;
var __vue_component__$o = normalizeComponent({
  render: __vue_render__$o,
  staticRenderFns: __vue_staticRenderFns__$o
}, __vue_inject_styles__$o, __vue_script__$o, __vue_scope_id__$o, __vue_is_functional_template__$o, __vue_module_identifier__$o, false, undefined, undefined, undefined);

var controlRenderer$m = vue.defineComponent({
  name: 'enum-array-renderer',
  components: {
    DispatchRenderer: vue2.DispatchRenderer,
    VCheckbox: lib.VCheckbox,
    VContainer: lib.VContainer,
    VRow: lib.VRow,
    VCol: lib.VCol
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    return useVuetifyBasicControl(vue2.useJsonFormsMultiEnumControl(props));
  },
  methods: {
    dataHasEnum: function dataHasEnum(value) {
      var _this$control$data;
      return !!((_this$control$data = this.control.data) !== null && _this$control$data !== void 0 && _this$control$data.includes(value));
    },
    composePaths: core.composePaths,
    toggle: function toggle(value, add) {
      if (add) {
        this.addItem(this.control.path, value);
      } else {
        var _this$removeItem;
        (_this$removeItem = this.removeItem) === null || _this$removeItem === void 0 || _this$removeItem.call(this, this.control.path, value);
      }
    }
  }
});
var hasOneOfItems = function hasOneOfItems(schema) {
  return schema.oneOf !== undefined && schema.oneOf.length > 0 && schema.oneOf.every(function (entry) {
    return entry["const"] !== undefined;
  });
};
var hasEnumItems = function hasEnumItems(schema) {
  return schema.type === 'string' && schema["enum"] !== undefined;
};
var entry$m = {
  renderer: controlRenderer$m,
  tester: core.rankWith(5, core.and(core.uiTypeIs('Control'), core.and(core.schemaMatches(function (schema) {
    return core.hasType(schema, 'array') && !Array.isArray(schema.items) && schema.uniqueItems === true;
  }), core.schemaSubPathMatches('items', function (schema) {
    return hasOneOfItems(schema) || hasEnumItems(schema);
  }))))
};

var __vue_script__$n = controlRenderer$m;
var __vue_render__$n = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.control.visible ? _c('v-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('v-row', _vm._l(_vm.control.options, function (o, index) {
    return _c('v-col', {
      key: o.value
    }, [_c('v-checkbox', _vm._b({
      attrs: {
        "label": o.label,
        "input-value": _vm.dataHasEnum(o.value),
        "id": _vm.control.id + "-input-" + index,
        "path": _vm.composePaths(_vm.control.path, "" + index),
        "error-messages": _vm.control.errors,
        "disabled": !_vm.control.enabled,
        "indeterminate": _vm.control.data === undefined
      },
      on: {
        "change": function change(value) {
          return _vm.toggle(o.value, value);
        }
      }
    }, 'v-checkbox', _vm.vuetifyProps("v-checkbox[" + o.value + "]"), false))], 1);
  }), 1)], 1) : _vm._e();
};
var __vue_staticRenderFns__$n = [];
var __vue_inject_styles__$n = undefined;
var __vue_scope_id__$n = undefined;
var __vue_module_identifier__$n = undefined;
var __vue_is_functional_template__$n = false;
var __vue_component__$n = normalizeComponent({
  render: __vue_render__$n,
  staticRenderFns: __vue_staticRenderFns__$n
}, __vue_inject_styles__$n, __vue_script__$n, __vue_scope_id__$n, __vue_is_functional_template__$n, __vue_module_identifier__$n, false, undefined, undefined, undefined);

var controlRenderer$l = vue.defineComponent({
  name: 'object-renderer',
  components: {
    DispatchRenderer: vue2.DispatchRenderer,
    AdditionalProperties: __vue_component__$r
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var control = useVuetifyControl(vue2.useJsonFormsControlWithDetail(props));
    var nested = useNested('object');
    return _objectSpread2(_objectSpread2({}, control), {}, {
      input: control,
      nested: nested
    });
  },
  computed: {
    hasAdditionalProperties: function hasAdditionalProperties() {
      return !isEmpty__default["default"](this.control.schema.patternProperties) || isObject__default["default"](this.control.schema.additionalProperties)
      ;
    },
    showAdditionalProperties: function showAdditionalProperties() {
      var _this$control$uischem;
      var showAdditionalProperties = (_this$control$uischem = this.control.uischema.options) === null || _this$control$uischem === void 0 ? void 0 : _this$control$uischem.showAdditionalProperties;
      return showAdditionalProperties === undefined || showAdditionalProperties === true;
    },
    detailUiSchema: function detailUiSchema() {
      var _this = this;
      var uiSchemaGenerator = function uiSchemaGenerator() {
        var uiSchema = core.Generate.uiSchema(_this.control.schema, 'Group');
        if (isEmpty__default["default"](_this.control.path)) {
          uiSchema.type = 'VerticalLayout';
        } else {
          uiSchema.label = _this.control.label;
        }
        return uiSchema;
      };
      var result = core.findUISchema(this.control.uischemas, this.control.schema, this.control.uischema.scope, this.control.path, uiSchemaGenerator, this.control.uischema, this.control.rootSchema);
      if (this.nested.level > 0) {
        result = cloneDeep__default["default"](result);
        result.options = _objectSpread2(_objectSpread2({}, result.options), {}, {
          bare: true,
          alignLeft: this.nested.level >= 4 || this.nested.parentElement === 'array'
        });
      }
      return result;
    }
  }
});
var entry$l = {
  renderer: controlRenderer$l,
  tester: core.rankWith(2, core.isObjectControl)
};

var __vue_script__$m = controlRenderer$l;
var __vue_render__$m = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.control.visible ? _c('div', [_c('dispatch-renderer', {
    attrs: {
      "visible": _vm.control.visible,
      "enabled": _vm.control.enabled,
      "schema": _vm.control.schema,
      "uischema": _vm.detailUiSchema,
      "path": _vm.control.path,
      "renderers": _vm.control.renderers,
      "cells": _vm.control.cells
    }
  }), _vm._v(" "), _vm.hasAdditionalProperties && _vm.showAdditionalProperties ? _c('additional-properties', {
    attrs: {
      "input": _vm.input
    }
  }) : _vm._e()], 1) : _vm._e();
};
var __vue_staticRenderFns__$m = [];
var __vue_inject_styles__$m = undefined;
var __vue_scope_id__$m = undefined;
var __vue_module_identifier__$m = undefined;
var __vue_is_functional_template__$m = false;
var __vue_component__$m = normalizeComponent({
  render: __vue_render__$m,
  staticRenderFns: __vue_staticRenderFns__$m
}, __vue_inject_styles__$m, __vue_script__$m, __vue_scope_id__$m, __vue_is_functional_template__$m, __vue_module_identifier__$m, false, undefined, undefined, undefined);

var controlRenderer$k = vue.defineComponent({
  name: 'one-of-select-renderer',
  components: {
    DispatchRenderer: vue2.DispatchRenderer,
    CombinatorProperties: __vue_component__$s,
    VDialog: lib.VDialog,
    VCard: lib.VCard,
    VCardTitle: lib.VCardTitle,
    VCardText: lib.VCardText,
    VCardActions: lib.VCardActions,
    VSpacer: lib.VSpacer,
    VBtn: lib.VBtn,
    VSelect: lib.VSelect,
    VHover: lib.VHover
  },
  directives: {
    DisabledIconFocus: DisabledIconFocus
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var input = vue2.useJsonFormsOneOfControl(props);
    var control = input.control.value;
    var selectedIndex = vue.ref(control.indexOfFittingSchema);
    var selectIndex = vue.ref(selectedIndex.value);
    var newSelectedIndex = vue.ref(0);
    var dialog = vue.ref(false);
    var t = useTranslator();
    return _objectSpread2(_objectSpread2({}, useVuetifyControl(input)), {}, {
      selectedIndex: selectedIndex,
      selectIndex: selectIndex,
      dialog: dialog,
      newSelectedIndex: newSelectedIndex,
      t: t
    });
  },
  computed: {
    indexedOneOfRenderInfos: function indexedOneOfRenderInfos() {
      var result = core.createCombinatorRenderInfos(
      this.control.schema.oneOf, this.control.rootSchema, 'oneOf', this.control.uischema, this.control.path, this.control.uischemas);
      return result.filter(function (info) {
        return info.uischema;
      }).map(function (info, index) {
        return _objectSpread2(_objectSpread2({}, info), {}, {
          index: index
        });
      });
    }
  },
  methods: {
    handleSelectChange: function handleSelectChange() {
      var _this = this;
      if (this.control.enabled && !isEmpty__default["default"](this.control.data)) {
        this.dialog = true;
        this.$nextTick(function () {
          _this.newSelectedIndex = _this.selectIndex;
          _this.selectIndex = _this.selectedIndex;
        });
        setTimeout(function () {
          return (
            _this.$refs.confirm.$el.focus()
          );
        });
      } else {
        this.$nextTick(function () {
          _this.selectedIndex = _this.selectIndex;
        });
      }
    },
    confirm: function confirm() {
      this.newSelection();
      this.dialog = false;
    },
    cancel: function cancel() {
      this.newSelectedIndex = this.selectedIndex;
      this.dialog = false;
    },
    newSelection: function newSelection() {
      this.handleChange(this.path, this.newSelectedIndex !== undefined && this.newSelectedIndex !== null ? core.createDefaultValue(this.indexedOneOfRenderInfos[this.newSelectedIndex].schema) : {});
      this.selectIndex = this.newSelectedIndex;
      this.selectedIndex = this.newSelectedIndex;
    }
  }
});
var entry$k = {
  renderer: controlRenderer$k,
  tester: core.rankWith(3, core.isOneOfControl)
};

var __vue_script__$l = controlRenderer$k;
var __vue_render__$l = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.control.visible ? _c('div', [_c('combinator-properties', {
    attrs: {
      "schema": _vm.control.schema,
      "combinatorKeyword": "oneOf",
      "path": _vm.path
    }
  }), _vm._v(" "), _c('v-hover', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var hover = ref.hover;
        return [_c('v-select', _vm._b({
          directives: [{
            name: "disabled-icon-focus",
            rawName: "v-disabled-icon-focus"
          }],
          "class": _vm.styles.control.input,
          attrs: {
            "id": _vm.control.id + '-input',
            "disabled": !_vm.control.enabled,
            "autofocus": _vm.appliedOptions.focus,
            "placeholder": _vm.appliedOptions.placeholder,
            "label": _vm.computedLabel,
            "hint": _vm.control.description,
            "persistent-hint": _vm.persistentHint(),
            "required": _vm.control.required,
            "error-messages": _vm.control.errors,
            "clearable": hover,
            "items": _vm.indexedOneOfRenderInfos,
            "item-text": function itemText(item) {
              return _vm.t(item.label, item.label);
            },
            "item-value": "index"
          },
          on: {
            "change": _vm.handleSelectChange,
            "focus": function focus($event) {
              _vm.isFocused = true;
            },
            "blur": function blur($event) {
              _vm.isFocused = false;
            }
          },
          model: {
            value: _vm.selectIndex,
            callback: function callback($$v) {
              _vm.selectIndex = $$v;
            },
            expression: "selectIndex"
          }
        }, 'v-select', _vm.vuetifyProps('v-select'), false))];
      }
    }], null, false, 4258553587)
  }), _vm._v(" "), _vm.selectedIndex !== undefined && _vm.selectedIndex !== null ? _c('dispatch-renderer', {
    attrs: {
      "schema": _vm.indexedOneOfRenderInfos[_vm.selectedIndex].schema,
      "uischema": _vm.indexedOneOfRenderInfos[_vm.selectedIndex].uischema,
      "path": _vm.control.path,
      "renderers": _vm.control.renderers,
      "cells": _vm.control.cells,
      "enabled": _vm.control.enabled
    }
  }) : _vm._e(), _vm._v(" "), _c('v-dialog', {
    attrs: {
      "persistent": "",
      "max-width": "600"
    },
    on: {
      "keydown": function keydown($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }
        return _vm.cancel.apply(null, arguments);
      }
    },
    model: {
      value: _vm.dialog,
      callback: function callback($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c('v-card', [_c('v-card-title', {
    staticClass: "text-h5"
  }, [_vm._v("\n        " + _vm._s(_vm.t('form.clear.title', 'Clear form?')) + "\n      ")]), _vm._v(" "), _c('v-card-text', [_vm._v("\n        " + _vm._s(_vm.t('form.clear.text', 'Your data will be cleared. Do you want to proceed?')) + "\n      ")]), _vm._v(" "), _c('v-card-actions', [_c('v-spacer'), _vm._v(" "), _c('v-btn', {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("\n          " + _vm._s(_vm.t('form.clear.cancel', 'No')) + "\n        ")]), _vm._v(" "), _c('v-btn', {
    ref: "confirm",
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("\n          " + _vm._s(_vm.t('form.clear.confirm', 'Yes')) + "\n        ")])], 1)], 1)], 1)], 1) : _vm._e();
};
var __vue_staticRenderFns__$l = [];
var __vue_inject_styles__$l = undefined;
var __vue_scope_id__$l = undefined;
var __vue_module_identifier__$l = undefined;
var __vue_is_functional_template__$l = false;
var __vue_component__$l = normalizeComponent({
  render: __vue_render__$l,
  staticRenderFns: __vue_staticRenderFns__$l
}, __vue_inject_styles__$l, __vue_script__$l, __vue_scope_id__$l, __vue_is_functional_template__$l, __vue_module_identifier__$l, false, undefined, undefined, undefined);

var controlRenderer$j = vue.defineComponent({
  name: 'one-of-renderer',
  components: {
    DispatchRenderer: vue2.DispatchRenderer,
    CombinatorProperties: __vue_component__$s,
    VDialog: lib.VDialog,
    VCard: lib.VCard,
    VCardTitle: lib.VCardTitle,
    VCardText: lib.VCardText,
    VCardActions: lib.VCardActions,
    VSpacer: lib.VSpacer,
    VBtn: lib.VBtn,
    VTabs: lib.VTabs,
    VTab: lib.VTab,
    VTabsItems: lib.VTabsItems,
    VTabItem: lib.VTabItem
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var input = vue2.useJsonFormsOneOfControl(props);
    var control = input.control.value;
    var selectedIndex = vue.ref(control.indexOfFittingSchema || 0);
    var tabIndex = vue.ref(selectedIndex.value);
    var newSelectedIndex = vue.ref(0);
    var dialog = vue.ref(false);
    var t = useTranslator();
    return _objectSpread2(_objectSpread2({}, useVuetifyControl(input)), {}, {
      selectedIndex: selectedIndex,
      tabIndex: tabIndex,
      dialog: dialog,
      newSelectedIndex: newSelectedIndex,
      t: t
    });
  },
  computed: {
    oneOfRenderInfos: function oneOfRenderInfos() {
      var result = core.createCombinatorRenderInfos(
      this.control.schema.oneOf, this.control.rootSchema, 'oneOf', this.control.uischema, this.control.path, this.control.uischemas);
      return result.filter(function (info) {
        return info.uischema;
      });
    }
  },
  methods: {
    handleTabChange: function handleTabChange() {
      var _this = this;
      if (this.control.enabled && !isEmpty__default["default"](this.control.data)) {
        this.dialog = true;
        this.$nextTick(function () {
          _this.newSelectedIndex = _this.tabIndex;
          _this.tabIndex = _this.selectedIndex;
        });
        setTimeout(function () {
          return (
            _this.$refs.confirm.$el.focus()
          );
        });
      } else {
        this.$nextTick(function () {
          _this.selectedIndex = _this.tabIndex;
        });
      }
    },
    confirm: function confirm() {
      this.openNewTab();
      this.dialog = false;
    },
    cancel: function cancel() {
      this.newSelectedIndex = this.selectedIndex;
      this.dialog = false;
    },
    openNewTab: function openNewTab() {
      this.handleChange(this.path, core.createDefaultValue(this.oneOfRenderInfos[this.newSelectedIndex].schema));
      this.tabIndex = this.newSelectedIndex;
      this.selectedIndex = this.newSelectedIndex;
    }
  }
});
var entry$j = {
  renderer: controlRenderer$j,
  tester: core.rankWith(4, core.and(core.isOneOfControl, core.optionIs('variant', 'tab')))
};

var __vue_script__$k = controlRenderer$j;
var __vue_render__$k = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.control.visible ? _c('div', [_c('combinator-properties', {
    attrs: {
      "schema": _vm.control.schema,
      "combinatorKeyword": "oneOf",
      "path": _vm.path
    }
  }), _vm._v(" "), _c('v-tabs', {
    model: {
      value: _vm.tabIndex,
      callback: function callback($$v) {
        _vm.tabIndex = $$v;
      },
      expression: "tabIndex"
    }
  }, _vm._l(_vm.oneOfRenderInfos, function (oneOfRenderInfo, oneOfIndex) {
    return _c('v-tab', {
      key: _vm.control.path + "-" + oneOfIndex,
      on: {
        "change": _vm.handleTabChange
      }
    }, [_vm._v("\n      " + _vm._s(oneOfRenderInfo.label) + "\n    ")]);
  }), 1), _vm._v(" "), _c('v-tabs-items', {
    model: {
      value: _vm.selectedIndex,
      callback: function callback($$v) {
        _vm.selectedIndex = $$v;
      },
      expression: "selectedIndex"
    }
  }, _vm._l(_vm.oneOfRenderInfos, function (oneOfRenderInfo, oneOfIndex) {
    return _c('v-tab-item', {
      key: _vm.control.path + "-" + oneOfIndex
    }, [_vm.selectedIndex === oneOfIndex ? _c('dispatch-renderer', {
      attrs: {
        "schema": oneOfRenderInfo.schema,
        "uischema": oneOfRenderInfo.uischema,
        "path": _vm.control.path,
        "renderers": _vm.control.renderers,
        "cells": _vm.control.cells,
        "enabled": _vm.control.enabled
      }
    }) : _vm._e()], 1);
  }), 1), _vm._v(" "), _c('v-dialog', {
    attrs: {
      "persistent": "",
      "max-width": "600"
    },
    on: {
      "keydown": function keydown($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }
        return _vm.cancel.apply(null, arguments);
      }
    },
    model: {
      value: _vm.dialog,
      callback: function callback($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c('v-card', [_c('v-card-title', {
    staticClass: "text-h5"
  }, [_vm._v("\n        " + _vm._s(_vm.t('form.clear.title', 'Clear form?')) + "\n      ")]), _vm._v(" "), _c('v-card-text', [_vm._v("\n        " + _vm._s(_vm.t('form.clear.text', 'Your data will be cleared. Do you want to proceed?')) + "\n      ")]), _vm._v(" "), _c('v-card-actions', [_c('v-spacer'), _vm._v(" "), _c('v-btn', {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("\n          " + _vm._s(_vm.t('form.clear.cancel', 'No')) + "\n        ")]), _vm._v(" "), _c('v-btn', {
    ref: "confirm",
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("\n          " + _vm._s(_vm.t('form.clear.confirm', 'Yes')) + "\n        ")])], 1)], 1)], 1)], 1) : _vm._e();
};
var __vue_staticRenderFns__$k = [];
var __vue_inject_styles__$k = undefined;
var __vue_scope_id__$k = undefined;
var __vue_module_identifier__$k = undefined;
var __vue_is_functional_template__$k = false;
var __vue_component__$k = normalizeComponent({
  render: __vue_render__$k,
  staticRenderFns: __vue_staticRenderFns__$k
}, __vue_inject_styles__$k, __vue_script__$k, __vue_scope_id__$k, __vue_is_functional_template__$k, __vue_module_identifier__$k, false, undefined, undefined, undefined);

var complexRenderers = [entry$p, entry$o, entry$n, entry$m, entry$l, entry$k, entry$j];

var script = vue.defineComponent({
  name: 'control-wrapper',
  props: {
    id: {
      required: true,
      type: String
    },
    visible: {
      required: false,
      type: Boolean,
      "default": true
    },
    styles: {
      required: true,
      type: Object
    }
  }
});

var __vue_script__$j = script;
var __vue_render__$j = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.visible ? _c('div', {
    "class": _vm.styles.control.root,
    attrs: {
      "id": _vm.id
    }
  }, [_vm._t("default")], 2) : _vm._e();
};
var __vue_staticRenderFns__$j = [];
var __vue_inject_styles__$j = undefined;
var __vue_scope_id__$j = undefined;
var __vue_module_identifier__$j = undefined;
var __vue_is_functional_template__$j = false;
var __vue_component__$j = normalizeComponent({
  render: __vue_render__$j,
  staticRenderFns: __vue_staticRenderFns__$j
}, __vue_inject_styles__$j, __vue_script__$j, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, false, undefined, undefined, undefined);

var controlRenderer$i = vue.defineComponent({
  name: 'anyof-string-or-enum-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VHover: lib.VHover,
    VCombobox: lib.VCombobox
  },
  directives: {
    DisabledIconFocus: DisabledIconFocus
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    return useVuetifyControl(vue2.useJsonFormsControl(props), function (value) {
      return value || undefined;
    });
  },
  computed: {
    items: function items() {
      return findEnumSchema(this.control.schema.anyOf)["enum"];
    }
  }
});
var findEnumSchema = function findEnumSchema(schemas) {
  return schemas.find(function (s) {
    return s["enum"] !== undefined && (s.type === 'string' || s.type === undefined);
  });
};
var findTextSchema = function findTextSchema(schemas) {
  return schemas.find(function (s) {
    return s.type === 'string' && s["enum"] === undefined;
  });
};
var hasEnumAndText = function hasEnumAndText(schemas) {
  var enumSchema = findEnumSchema(schemas);
  var stringSchema = findTextSchema(schemas);
  var remainingSchemas = schemas.filter(function (s) {
    return s !== enumSchema || s !== stringSchema;
  });
  var wrongType = remainingSchemas.find(function (s) {
    return s.type && s.type !== 'string';
  });
  return !!enumSchema && !!stringSchema && !wrongType;
};
var simpleAnyOf = core.and(core.uiTypeIs('Control'), core.schemaMatches(function (schema) {
  return Array.isArray(schema.anyOf) && hasEnumAndText(schema.anyOf);
}));
var entry$i = {
  renderer: controlRenderer$i,
  tester: core.rankWith(5, simpleAnyOf)
};

var __vue_script__$i = controlRenderer$i;
var __vue_render__$i = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-hover', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var hover = ref.hover;
        return [_c('v-combobox', _vm._b({
          directives: [{
            name: "disabled-icon-focus",
            rawName: "v-disabled-icon-focus"
          }],
          "class": _vm.styles.control.input,
          attrs: {
            "id": _vm.control.id + '-input',
            "disabled": !_vm.control.enabled,
            "autofocus": _vm.appliedOptions.focus,
            "placeholder": _vm.appliedOptions.placeholder,
            "label": _vm.computedLabel,
            "hint": _vm.control.description,
            "persistent-hint": _vm.persistentHint(),
            "required": _vm.control.required,
            "error-messages": _vm.control.errors,
            "value": _vm.control.data,
            "maxlength": _vm.appliedOptions.restrict ? _vm.control.schema.maxLength : undefined,
            "counter": _vm.control.schema.maxLength !== undefined ? _vm.control.schema.maxLength : undefined,
            "items": _vm.items,
            "clearable": hover
          },
          on: {
            "change": _vm.onChange,
            "focus": function focus($event) {
              _vm.isFocused = true;
            },
            "blur": function blur($event) {
              _vm.isFocused = false;
            }
          }
        }, 'v-combobox', _vm.vuetifyProps('v-combobox'), false))];
      }
    }])
  })], 1);
};
var __vue_staticRenderFns__$i = [];
var __vue_inject_styles__$i = undefined;
var __vue_scope_id__$i = undefined;
var __vue_module_identifier__$i = undefined;
var __vue_is_functional_template__$i = false;
var __vue_component__$i = normalizeComponent({
  render: __vue_render__$i,
  staticRenderFns: __vue_staticRenderFns__$i
}, __vue_inject_styles__$i, __vue_script__$i, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, false, undefined, undefined, undefined);

var controlRenderer$h = vue.defineComponent({
  name: 'boolean-control-renderer',
  components: {
    VCheckbox: lib.VCheckbox,
    ControlWrapper: __vue_component__$j
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    return useVuetifyControl(vue2.useJsonFormsControl(props), function (newValue) {
      return newValue || false;
    });
  }
});
var entry$h = {
  renderer: controlRenderer$h,
  tester: core.rankWith(1, core.isBooleanControl)
};

var __vue_script__$h = controlRenderer$h;
var __vue_render__$h = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-checkbox', {
    "class": _vm.styles.control.input,
    attrs: {
      "id": _vm.control.id + '-input',
      "disabled": !_vm.control.enabled,
      "placeholder": _vm.appliedOptions.placeholder,
      "label": _vm.computedLabel,
      "hint": _vm.control.description,
      "persistent-hint": _vm.persistentHint(),
      "required": false,
      "error-messages": _vm.control.errors,
      "indeterminate": false,
      "input-value": _vm.control.data,
      "value": _vm.control.data
    }
  })], 1);
};
var __vue_staticRenderFns__$h = [];
var __vue_inject_styles__$h = undefined;
var __vue_scope_id__$h = undefined;
var __vue_module_identifier__$h = undefined;
var __vue_is_functional_template__$h = false;
var __vue_component__$h = normalizeComponent({
  render: __vue_render__$h,
  staticRenderFns: __vue_staticRenderFns__$h
}, __vue_inject_styles__$h, __vue_script__$h, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, false, undefined, undefined, undefined);

var controlRenderer$g = vue.defineComponent({
  name: 'boolean-toggle-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VSwitch: lib.VSwitch
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    return useVuetifyControl(vue2.useJsonFormsControl(props), function (newValue) {
      return newValue || false;
    });
  }
});
var entry$g = {
  renderer: controlRenderer$g,
  tester: core.rankWith(3, core.and(core.isBooleanControl, core.optionIs('toggle', true)))
};

var __vue_script__$g = controlRenderer$g;
var __vue_render__$g = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-switch', _vm._b({
    "class": _vm.styles.control.input,
    attrs: {
      "id": _vm.control.id + '-input',
      "disabled": !_vm.control.enabled,
      "autofocus": _vm.appliedOptions.focus,
      "placeholder": _vm.appliedOptions.placeholder,
      "label": _vm.computedLabel,
      "hint": _vm.control.description,
      "persistent-hint": _vm.persistentHint(),
      "required": _vm.control.required,
      "error-messages": _vm.control.errors,
      "input-value": _vm.control.data,
      "value": _vm.control.data,
      "true-value": true,
      "false-value": false
    },
    on: {
      "change": _vm.onChange,
      "focus": function focus($event) {
        _vm.isFocused = true;
      },
      "blur": function blur($event) {
        _vm.isFocused = false;
      }
    }
  }, 'v-switch', _vm.vuetifyProps('v-switch'), false))], 1);
};
var __vue_staticRenderFns__$g = [];
var __vue_inject_styles__$g = undefined;
var __vue_scope_id__$g = undefined;
var __vue_module_identifier__$g = undefined;
var __vue_is_functional_template__$g = false;
var __vue_component__$g = normalizeComponent({
  render: __vue_render__$g,
  staticRenderFns: __vue_staticRenderFns__$g
}, __vue_inject_styles__$g, __vue_script__$g, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, false, undefined, undefined, undefined);

var JSON_SCHEMA_DATE_FORMATS = ['YYYY-MM-DD'];
var controlRenderer$f = vue.defineComponent({
  name: 'date-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VHover: lib.VHover,
    VTextField: lib.VTextField,
    VMenu: lib.VMenu,
    VDatePicker: lib.VDatePicker,
    VIcon: lib.VIcon,
    VSpacer: lib.VSpacer,
    VBtn: lib.VBtn
  },
  directives: {
    DisabledIconFocus: DisabledIconFocus,
    Mask: vMask.VueMaskDirective
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var t = useTranslator();
    var showMenu = vue.ref(false);
    var mask = vue.ref(undefined);
    var adaptValue = function adaptValue(value) {
      return value || undefined;
    };
    var control = useVuetifyControl(vue2.useJsonFormsControl(props), adaptValue);
    return _objectSpread2(_objectSpread2({}, control), {}, {
      showMenu: showMenu,
      mask: mask,
      t: t,
      adaptValue: adaptValue
    });
  },
  watch: {
    isFocused: function isFocused(newFocus) {
      if (newFocus && this.applyMask) {
        this.mask = this.maskFunction.bind(this);
      } else {
        this.mask = undefined;
      }
    }
  },
  computed: {
    applyMask: function applyMask() {
      return typeof this.appliedOptions.mask == 'boolean' ? this.appliedOptions.mask : true;
    },
    pickerIcon: function pickerIcon() {
      if (typeof this.appliedOptions.pickerIcon === 'string') {
        return this.appliedOptions.pickerIcon;
      }
      if (this.pickerType === 'year') {
        return 'mdi-alpha-y-box-outline';
      }
      if (this.pickerType === 'month') {
        return 'mdi-calendar-month';
      }
      return 'mdi-calendar';
    },
    dateFormat: function dateFormat() {
      return typeof this.appliedOptions.dateFormat == 'string' ? this.appliedOptions.dateFormat : 'YYYY-MM-DD';
    },
    dateSaveFormat: function dateSaveFormat() {
      return typeof this.appliedOptions.dateSaveFormat == 'string' ? this.appliedOptions.dateSaveFormat : 'YYYY-MM-DD';
    },
    formats: function formats() {
      return [this.dateSaveFormat, this.dateFormat].concat(JSON_SCHEMA_DATE_FORMATS);
    },
    pickerType: function pickerType() {
      if (!this.dateFormat.includes('M') && !this.dateFormat.includes('D')) {
        return 'year';
      }
      if (!this.dateFormat.includes('D')) {
        return 'month';
      }
      return 'date';
    },
    minDate: function minDate() {
      if (typeof this.vuetifyProps('v-date-picker').min === 'string') {
        return this.vuetifyProps('v-date-picker').min;
      }
      var schema = this.control.schema;
      if (typeof schema.formatMinimum === 'string') {
        return schema.formatMinimum;
      } else if (typeof schema.formatExclusiveMinimum === 'string') {
        var date = parseDateTime(schema.formatExclusiveMinimum, this.formats);
        if (date) {
          date = date.add(1, 'day');
        }
        return date ? date.format('YYYY-MM-DD') : schema.formatExclusiveMinimum;
      }
      return undefined;
    },
    maxDate: function maxDate() {
      if (typeof this.vuetifyProps('v-date-picker').max === 'string') {
        return this.vuetifyProps('v-date-picker').max;
      }
      var schema = this.control.schema;
      if (typeof schema.formatMaximum === 'string') {
        return schema.formatMaximum;
      } else if (typeof schema.formatExclusiveMaximum === 'string') {
        var date = parseDateTime(schema.formatExclusiveMaximum, this.formats);
        if (date) {
          date = date.subtract(1, 'day');
        }
        return date ? date.format('YYYY-MM-DD') : schema.formatExclusiveMaximum;
      }
      return undefined;
    },
    inputValue: function inputValue() {
      var value = this.control.data;
      var date = parseDateTime(typeof value === 'number' ? value.toString() : value, this.formats);
      return date ? date.format(this.dateFormat) : value;
    },
    pickerValue: {
      get: function get() {
        var value = this.control.data;
        var date = parseDateTime(typeof value === 'number' ? value.toString() : value, this.formats);
        return date ? date.format('YYYY-MM-DD') : undefined;
      },
      set: function set(val) {
        this.onPickerChange(val);
      }
    },
    clearLabel: function clearLabel() {
      var label = typeof this.appliedOptions.clearLabel == 'string' ? this.appliedOptions.clearLabel : 'Clear';
      return this.t(label, label);
    },
    cancelLabel: function cancelLabel() {
      var label = typeof this.appliedOptions.cancelLabel == 'string' ? this.appliedOptions.cancelLabel : 'Cancel';
      return this.t(label, label);
    },
    okLabel: function okLabel() {
      var label = typeof this.appliedOptions.okLabel == 'string' ? this.appliedOptions.okLabel : 'OK';
      return this.t(label, label);
    },
    showActions: function showActions() {
      return this.appliedOptions.showActions === true;
    }
  },
  methods: {
    onInputChange: function onInputChange(value) {
      var date = parseDateTime(value, this.dateFormat);
      var newdata = date ? date.format(this.dateSaveFormat) : value;
      if ((this.control.schema.type === 'integer' || this.control.schema.type === 'number') && /^[\d]*$/.test(newdata)) {
        newdata = parseInt(value, 10) || newdata;
      }
      if (this.adaptValue(newdata) !== this.control.data) {
        this.onChange(newdata);
      }
    },
    onPickerChange: function onPickerChange(value) {
      var date = parseDateTime(value, 'YYYY-MM-DD');
      var newdata = date ? date.format(this.dateSaveFormat) : value;
      if ((this.control.schema.type === 'integer' || this.control.schema.type === 'number') && /^[\d]*$/.test(newdata)) {
        newdata = parseInt(value, 10) || newdata;
      }
      this.onChange(newdata);
    },
    clear: function clear() {
      this.mask = undefined;
      this.onChange(null);
    },
    okHandler: function okHandler() {
      this.$refs.menu.save(this.pickerValue);
      this.showMenu = false;
    },
    onYear: function onYear(year) {
      if (this.pickerType === 'year') {
        this.pickerValue = "".concat(year);
        if (!this.showActions) {
          this.okHandler();
        }
      }
    },
    onInput: function onInput() {
      if (!this.showActions) {
        this.okHandler();
      }
    },
    maskFunction: function maskFunction(value) {
      var format = this.dateFormat;
      var parts = format.split(/([^YMD]*)(YYYY|YY|MMMM|MMM|MM|M|DD|D)/);
      var index = 0;
      var result = [];
      var _iterator = _createForOfIteratorHelper(parts),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var part = _step.value;
          if (!part || part === '') {
            continue;
          }
          if (index > value.length) {
            break;
          }
          if (part == 'YYYY') {
            result.push(/[0-9]/);
            result.push(/[0-9]/);
            result.push(/[0-9]/);
            result.push(/[0-9]/);
            index += 4;
          } else if (part == 'YY') {
            result.push(/[0-9]/);
            result.push(/[0-9]/);
            index += 2;
          } else if (part == 'M') {
            result.push(/[1]/);
            if (value.charAt(index) === '1') {
              if (value.charAt(index + 1) == '0' || value.charAt(index + 1) == '1' || value.charAt(index + 1) == '2') {
                result.push(/[0-2]/);
                index += 1;
              } else if (value.charAt(index + 1) === '') {
                result.push(/[0-2]?/);
              }
            }
            index += 1;
          } else if (part == 'MM') {
            result.push(/[0-1]/);
            result.push(value.charAt(index) === '0' ? /[1-9]/ : /[0-2]/);
            index += 2;
          } else if (part == 'MMM') {
            var increment = 0;
            for (var position = 0; position <= 2; position++) {
              var regex = undefined;
              for (var i = 0; i <= 11; i++) {
                var month = dayjs__default["default"]().month(i).format('MMM');
                if (value.charAt(index + position) === month.charAt(position) || value.charAt(index + position) === '') {
                  if (regex === undefined) {
                    regex = '(';
                  } else {
                    regex += '|';
                  }
                  regex += month.charAt(position);
                }
              }
              if (regex) {
                regex += ')';
                result.push(new RegExp(regex));
                increment++;
              } else {
                break;
              }
            }
            index += increment;
          } else if (part == 'MMMM') {
            var _increment = 0;
            var maxLength = 0;
            var months = [];
            for (var _i = 0; _i <= 11; _i++) {
              var _month = dayjs__default["default"]().month(_i).format('MMMM');
              months.push(_month);
              if (_month.length > maxLength) {
                maxLength = _month.length;
              }
            }
            for (var _position = 0; _position < maxLength; _position++) {
              var _regex = undefined;
              for (var _i2 = 0; _i2 <= 11; _i2++) {
                var _month2 = months[_i2];
                if (value.charAt(index + _position) == _month2.charAt(_position) || value.charAt(index + _position) === '') {
                  if (_regex === undefined) {
                    _regex = '(';
                  } else {
                    _regex += '|';
                  }
                  _regex += _month2.charAt(_position);
                }
              }
              if (_regex) {
                _regex += ')';
                result.push(new RegExp(_regex));
                _increment++;
              } else {
                break;
              }
            }
            index += _increment;
          } else if (part == 'D') {
            result.push(/[1-3]/);
            if (value.charAt(index) === '1' || value.charAt(index) === '2' || value.charAt(index) === '3') {
              if (value.charAt(index) === '3') {
                if (value.charAt(index + 1) === '0' || value.charAt(index + 1) === '1') {
                  result.push(/[0-1]/);
                  index += 1;
                } else if (value.charAt(index + 1) === '') {
                  result.push(/[0-1]?/);
                }
              } else {
                if (value.charAt(index + 1) === '0' || value.charAt(index + 1) === '1' || value.charAt(index + 1) === '2' || value.charAt(index + 1) === '3' || value.charAt(index + 1) === '4' || value.charAt(index + 1) === '5' || value.charAt(index + 1) === '6' || value.charAt(index + 1) === '7' || value.charAt(index + 1) === '8' || value.charAt(index + 1) === '9') {
                  result.push(/[0-9]/);
                  index += 1;
                } else if (value.charAt(index + 1) === '') {
                  result.push(/[0-9]?/);
                }
              }
            }
            index += 1;
          } else if (part == 'DD') {
            result.push(/[0-3]/);
            result.push(value.charAt(index) === '3' ? /[0-1]/ : value.charAt(index) === '0' ? /[1-9]/ : /[0-9]/);
            index += 2;
          } else {
            result.push(part);
            index += part.length;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return result;
    }
  }
});
var entry$f = {
  renderer: controlRenderer$f,
  tester: core.rankWith(2, core.isDateControl)
};

var __vue_script__$f = controlRenderer$f;
var __vue_render__$f = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-hover', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var hover = ref.hover;
        return [_c('v-text-field', _vm._b({
          directives: [{
            name: "disabled-icon-focus",
            rawName: "v-disabled-icon-focus"
          }, {
            name: "mask",
            rawName: "v-mask",
            value: _vm.mask,
            expression: "mask"
          }],
          "class": _vm.styles.control.input,
          attrs: {
            "id": _vm.control.id + '-input',
            "disabled": !_vm.control.enabled,
            "autofocus": _vm.appliedOptions.focus,
            "placeholder": _vm.appliedOptions.placeholder,
            "label": _vm.computedLabel,
            "hint": _vm.control.description,
            "persistent-hint": _vm.persistentHint(),
            "required": _vm.control.required,
            "error-messages": _vm.control.errors,
            "value": _vm.inputValue
          },
          on: {
            "input": _vm.onInputChange,
            "focus": function focus($event) {
              _vm.isFocused = true;
            },
            "blur": function blur($event) {
              _vm.isFocused = false;
            }
          }
        }, 'v-text-field', _vm.vuetifyProps('v-text-field'), false), [_c('template', {
          slot: "append"
        }, [hover && _vm.control.enabled ? _c('v-icon', {
          attrs: {
            "tabindex": "-1"
          },
          on: {
            "click": _vm.clear
          }
        }, [_vm._v("$clear")]) : _vm._e()], 1), _vm._v(" "), _c('template', {
          slot: "prepend-inner"
        }, [_c('v-menu', _vm._b({
          ref: "menu",
          attrs: {
            "close-on-content-click": false,
            "return-value": _vm.pickerValue,
            "transition": "scale-transition",
            "offset-y": "",
            "min-width": "290px",
            "disabled": !_vm.control.enabled
          },
          on: {
            "update:returnValue": function updateReturnValue($event) {
              _vm.pickerValue = $event;
            },
            "update:return-value": function updateReturnValue($event) {
              _vm.pickerValue = $event;
            }
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(ref) {
              var onMenu = ref.on;
              return [_c('v-icon', _vm._g({
                attrs: {
                  "tabindex": "-1"
                }
              }, onMenu), [_vm._v(_vm._s(_vm.pickerIcon))])];
            }
          }], null, true),
          model: {
            value: _vm.showMenu,
            callback: function callback($$v) {
              _vm.showMenu = $$v;
            },
            expression: "showMenu"
          }
        }, 'v-menu', _vm.vuetifyProps('v-menu'), false), [_vm._v(" "), _vm.showMenu ? _c('v-date-picker', _vm._b({
          ref: "picker",
          attrs: {
            "min": _vm.minDate,
            "max": _vm.maxDate,
            "type": _vm.pickerType
          },
          on: {
            "click:year": _vm.onYear,
            "input": _vm.onInput
          },
          model: {
            value: _vm.pickerValue,
            callback: function callback($$v) {
              _vm.pickerValue = $$v;
            },
            expression: "pickerValue"
          }
        }, 'v-date-picker', _vm.vuetifyProps('v-date-picker'), false), [_vm.showActions ? _c('v-btn', {
          attrs: {
            "text": ""
          },
          on: {
            "click": _vm.clear
          }
        }, [_vm._v("\n              " + _vm._s(_vm.clearLabel) + "\n            ")]) : _vm._e(), _vm._v(" "), _vm.showActions ? _c('v-spacer') : _vm._e(), _vm._v(" "), _vm.showActions ? _c('v-btn', {
          attrs: {
            "text": ""
          },
          on: {
            "click": function click($event) {
              _vm.showMenu = false;
            }
          }
        }, [_vm._v("\n              " + _vm._s(_vm.cancelLabel) + "\n            ")]) : _vm._e(), _vm._v(" "), _vm.showActions ? _c('v-btn', {
          attrs: {
            "text": "",
            "color": "primary"
          },
          on: {
            "click": _vm.okHandler
          }
        }, [_vm._v("\n              " + _vm._s(_vm.okLabel) + "\n            ")]) : _vm._e()], 1) : _vm._e()], 1)], 1)], 2)];
      }
    }])
  })], 1);
};
var __vue_staticRenderFns__$f = [];
var __vue_inject_styles__$f = undefined;
var __vue_scope_id__$f = undefined;
var __vue_module_identifier__$f = undefined;
var __vue_is_functional_template__$f = false;
var __vue_component__$f = normalizeComponent({
  render: __vue_render__$f,
  staticRenderFns: __vue_staticRenderFns__$f
}, __vue_inject_styles__$f, __vue_script__$f, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, false, undefined, undefined, undefined);

var JSON_SCHEMA_DATE_TIME_FORMATS = ['YYYY-MM-DDTHH:mm:ss.SSSZ', 'YYYY-MM-DDTHH:mm:ss.SSS', 'YYYY-MM-DDTHH:mm:ssZ', 'YYYY-MM-DDTHH:mm:ss'];
var controlRenderer$e = vue.defineComponent({
  name: 'datetime-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VBtn: lib.VBtn,
    VDatePicker: lib.VDatePicker,
    VTimePicker: lib.VTimePicker,
    VHover: lib.VHover,
    VIcon: lib.VIcon,
    VMenu: lib.VMenu,
    VSpacer: lib.VSpacer,
    VTextField: lib.VTextField,
    VRow: lib.VRow,
    VCol: lib.VCol,
    VCard: lib.VCard,
    VCardTitle: lib.VCardTitle,
    VCardActions: lib.VCardActions,
    VTabs: lib.VTabs,
    VTab: lib.VTab,
    VTabItem: lib.VTabItem
  },
  directives: {
    DisabledIconFocus: DisabledIconFocus,
    Mask: vMask.VueMaskDirective
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var t = useTranslator();
    var showMenu = vue.ref(false);
    var activeTab = vue.ref('date');
    var mask = vue.ref(undefined);
    var adaptValue = function adaptValue(value) {
      return value || undefined;
    };
    var control = useVuetifyControl(vue2.useJsonFormsControl(props), adaptValue);
    return _objectSpread2(_objectSpread2({}, control), {}, {
      showMenu: showMenu,
      mask: mask,
      t: t,
      adaptValue: adaptValue,
      activeTab: activeTab
    });
  },
  watch: {
    showMenu: function showMenu(show) {
      if (!show) {
        this.activeTab = 'date';
      }
    },
    isFocused: function isFocused(newFocus) {
      if (newFocus && this.applyMask) {
        this.mask = this.maskFunction.bind(this);
      } else {
        this.mask = undefined;
      }
    }
  },
  computed: {
    applyMask: function applyMask() {
      return typeof this.appliedOptions.mask == 'boolean' ? this.appliedOptions.mask : true;
    },
    pickerIcon: function pickerIcon() {
      return typeof this.appliedOptions.pickerIcon == 'string' ? this.appliedOptions.pickerIcon : 'mdi-calendar-clock';
    },
    useTabLayout: function useTabLayout() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return true;
      }
      return false;
    },
    dateTimeFormat: function dateTimeFormat() {
      return typeof this.appliedOptions.dateTimeFormat == 'string' ? this.appliedOptions.dateTimeFormat : 'YYYY-MM-DD HH:mm';
    },
    dateTimeSaveFormat: function dateTimeSaveFormat() {
      return typeof this.appliedOptions.dateTimeSaveFormat == 'string' ? this.appliedOptions.dateTimeSaveFormat : 'YYYY-MM-DDTHH:mm:ssZ';
    },
    formats: function formats() {
      return [this.dateTimeSaveFormat, this.dateTimeFormat].concat(JSON_SCHEMA_DATE_TIME_FORMATS);
    },
    useSeconds: function useSeconds() {
      return this.dateTimeFormat.includes('s') ? true : false;
    },
    ampm: function ampm() {
      return this.appliedOptions.ampm === true;
    },
    minDate: function minDate() {
      if (typeof this.vuetifyProps('v-date-picker').min === 'string') {
        return this.vuetifyProps('v-date-picker').min;
      }
      var schema = this.control.schema;
      if (typeof schema.formatMinimum === 'string') {
        var date = parseDateTime(schema.formatMinimum, this.formats);
        return date ? date.format('YYYY-MM-DD') : schema.formatMinimum;
      } else if (typeof schema.formatExclusiveMinimum === 'string') {
        var _date = parseDateTime(schema.formatExclusiveMinimum, this.formats);
        if (_date) {
          _date = _date.add(1, 'second');
        }
        return _date ? _date.format('YYYY-MM-DD') : schema.formatExclusiveMinimum;
      }
      return undefined;
    },
    maxDate: function maxDate() {
      if (typeof this.vuetifyProps('v-date-picker').max === 'string') {
        return this.vuetifyProps('v-date-picker').max;
      }
      var schema = this.control.schema;
      if (typeof schema.formatMaximum === 'string') {
        var date = parseDateTime(schema.formatMaximum, this.formats);
        return date ? date.format('YYYY-MM-DD') : schema.formatMaximum;
      } else if (typeof schema.formatExclusiveMaximum === 'string') {
        var _date2 = parseDateTime(schema.formatExclusiveMaximum, this.formats);
        if (_date2) {
          _date2 = _date2.subtract(1, 'second');
        }
        return _date2 ? _date2.format('YYYY-MM-DD') : schema.formatExclusiveMaximum;
      }
      return undefined;
    },
    minTime: function minTime() {
      if (typeof this.vuetifyProps('v-time-picker').min === 'string') {
        return this.vuetifyProps('v-time-picker').min;
      }
      var schema = this.control.schema;
      if (typeof schema.formatMinimum === 'string') {
        var _this$$refs;
        var time = parseDateTime(schema.formatMinimum, this.formats);
        var datePicker = (_this$$refs = this.$refs) === null || _this$$refs === void 0 ? void 0 : _this$$refs.datePicker;
        var date = parseDateTime(datePicker === null || datePicker === void 0 ? void 0 : datePicker.inputDate, 'YYYY-MM-DD');
        if (date && time && date.isSame(time, 'day')) {
          return this.useSeconds ? time.format('HH:mm:ss') : time.format('HH:mm');
        }
        return undefined;
      } else if (typeof schema.formatExclusiveMinimum === 'string') {
        var _this$$refs2;
        var _time = parseDateTime(schema.formatExclusiveMinimum, this.formats);
        var _datePicker = (_this$$refs2 = this.$refs) === null || _this$$refs2 === void 0 ? void 0 : _this$$refs2.datePicker;
        var _date3 = parseDateTime(_datePicker === null || _datePicker === void 0 ? void 0 : _datePicker.inputDate, 'YYYY-MM-DD');
        if (_date3 && _time) {
          if (_time) {
            _time = this.useSeconds ? _time.add(1, 'second') : _time.add(1, 'minute');
          }
          if (_date3.isSame(_time, 'day')) {
            return this.useSeconds ? _time.format('HH:mm:ss') : _time.format('HH:mm');
          }
        }
        return undefined;
      }
      return undefined;
    },
    maxTime: function maxTime() {
      if (typeof this.vuetifyProps('v-time-picker').max === 'string') {
        return this.vuetifyProps('v-time-picker').max;
      }
      var schema = this.control.schema;
      if (typeof schema.formatMaximum === 'string') {
        var _this$$refs3;
        var time = parseDateTime(schema.formatMaximum, this.formats);
        var datePicker = (_this$$refs3 = this.$refs) === null || _this$$refs3 === void 0 ? void 0 : _this$$refs3.datePicker;
        var date = parseDateTime(datePicker === null || datePicker === void 0 ? void 0 : datePicker.inputDate, 'YYYY-MM-DD');
        if (date && time && date.isSame(time, 'day')) {
          return this.useSeconds ? time.format('HH:mm:ss') : time.format('HH:mm');
        }
        return undefined;
      } else if (typeof schema.formatExclusiveMaximum === 'string') {
        var _this$$refs4;
        var _time2 = parseDateTime(schema.formatExclusiveMaximum, this.formats);
        var _datePicker2 = (_this$$refs4 = this.$refs) === null || _this$$refs4 === void 0 ? void 0 : _this$$refs4.datePicker;
        var _date4 = parseDateTime(_datePicker2 === null || _datePicker2 === void 0 ? void 0 : _datePicker2.inputDate, 'YYYY-MM-DD');
        if (_date4 && _time2) {
          if (_time2) {
            _time2 = this.useSeconds ? _time2.subtract(1, 'second') : _time2.subtract(1, 'minute');
          }
          if (_date4.isSame(_time2, 'day')) {
            return this.useSeconds ? _time2.format('HH:mm:ss') : _time2.format('HH:mm');
          }
        }
        return undefined;
      }
      return undefined;
    },
    inputValue: function inputValue() {
      var value = this.control.data;
      var date = parseDateTime(value, this.formats);
      return date ? date.format(this.dateTimeFormat) : value;
    },
    datePickerValue: {
      get: function get() {
        var value = this.control.data;
        var date = parseDateTime(value, this.formats);
        return date ? date.format('YYYY-MM-DD') : undefined;
      },
      set: function set(val) {
        this.onPickerChange(val, this.timePickerValue);
      }
    },
    timePickerValue: {
      get: function get() {
        var value = this.control.data;
        var time = parseDateTime(value, this.formats);
        return time ? this.useSeconds ? time.format('HH:mm:ss') : time.format('HH:mm') : undefined;
      },
      set: function set(val) {
        this.onPickerChange(this.datePickerValue, val);
      }
    },
    pickerValue: {
      get: function get() {
        var value = this.control.data;
        var dateTime = parseDateTime(value, this.formats);
        return dateTime ? dateTime.format('YYYY-MM-DDTHH:mm:ss.SSSZ') : undefined;
      },
      set: function set(val) {
        var dateTime = parseDateTime(val, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
        if (dateTime && this.showActions) {
          this.onChange(dateTime.format(this.dateTimeSaveFormat));
        }
      }
    },
    clearLabel: function clearLabel() {
      var label = typeof this.appliedOptions.clearLabel == 'string' ? this.appliedOptions.clearLabel : 'Clear';
      return this.t(label, label);
    },
    cancelLabel: function cancelLabel() {
      var label = typeof this.appliedOptions.cancelLabel == 'string' ? this.appliedOptions.cancelLabel : 'Cancel';
      return this.t(label, label);
    },
    okLabel: function okLabel() {
      var label = typeof this.appliedOptions.okLabel == 'string' ? this.appliedOptions.okLabel : 'OK';
      return this.t(label, label);
    },
    showActions: function showActions() {
      return this.appliedOptions.showActions === true;
    }
  },
  methods: {
    onInputChange: function onInputChange(value) {
      var date = parseDateTime(value, this.dateTimeFormat);
      var newdata = date ? date.format(this.dateTimeSaveFormat) : value;
      if (this.adaptValue(newdata) !== this.control.data) {
        this.onChange(newdata);
      }
    },
    onPickerChange: function onPickerChange(dateValue, timeValue) {
      var date = parseDateTime(dateValue, 'YYYY-MM-DD');
      var time = parseDateTime(timeValue !== null && timeValue !== void 0 ? timeValue : this.useSeconds ? '00:00:00' : '00:00', this.useSeconds ? 'HH:mm:ss' : 'HH:mm');
      if (date && time) {
        var dateTimeString = "".concat(date.format('YYYY-MM-DD'), "T").concat(time.format('HH:mm:ss.SSSZ'));
        var dateTime = parseDateTime(dateTimeString, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
        this.onChange(dateTime.format(this.dateTimeSaveFormat));
      }
    },
    okHandler: function okHandler() {
      this.$refs.menu.save(this.pickerValue);
      this.showMenu = false;
    },
    onMinute: function onMinute() {
      if (!this.showActions && !this.useSeconds) {
        this.okHandler();
      }
    },
    onSecond: function onSecond() {
      if (!this.showActions && this.useSeconds) {
        this.okHandler();
      }
    },
    clear: function clear() {
      this.mask = undefined;
      this.onChange(null);
    },
    maskFunction: function maskFunction(value) {
      var format = this.dateTimeFormat;
      var parts = format.split(/([^YMDHhmsAaSZ]*)(YYYY|YY|MMMM|MMM|MM|M|DD|D|hh?|HH?|mm?|ss?|a|A|SSS|Z)/);
      var index = 0;
      var result = [];
      var _iterator = _createForOfIteratorHelper(parts),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var part = _step.value;
          if (!part || part === '') {
            continue;
          }
          if (index > value.length) {
            break;
          }
          if (part == 'YYYY') {
            result.push(/[0-9]/);
            result.push(/[0-9]/);
            result.push(/[0-9]/);
            result.push(/[0-9]/);
            index += 4;
          } else if (part == 'YY') {
            result.push(/[0-9]/);
            result.push(/[0-9]/);
            index += 2;
          } else if (part == 'M') {
            result.push(/[1]/);
            if (value.charAt(index) === '1') {
              if (value.charAt(index + 1) == '0' || value.charAt(index + 1) == '1' || value.charAt(index + 1) == '2') {
                result.push(/[0-2]/);
                index += 1;
              } else if (value.charAt(index + 1) === '') {
                result.push(/[0-2]?/);
              }
            }
            index += 1;
          } else if (part == 'MM') {
            result.push(/[0-1]/);
            result.push(value.charAt(index) === '0' ? /[1-9]/ : /[0-2]/);
            index += 2;
          } else if (part == 'MMM') {
            var increment = 0;
            for (var position = 0; position <= 2; position++) {
              var regex = undefined;
              for (var i = 0; i <= 11; i++) {
                var month = dayjs__default["default"]().month(i).format('MMM');
                if (value.charAt(index + position) === month.charAt(position) || value.charAt(index + position) === '') {
                  if (regex === undefined) {
                    regex = '(';
                  } else {
                    regex += '|';
                  }
                  regex += month.charAt(position);
                }
              }
              if (regex) {
                regex += ')';
                result.push(new RegExp(regex));
                increment++;
              } else {
                break;
              }
            }
            index += increment;
          } else if (part == 'MMMM') {
            var _increment = 0;
            var maxLength = 0;
            var months = [];
            for (var _i = 0; _i <= 11; _i++) {
              var _month = dayjs__default["default"]().month(_i).format('MMMM');
              months.push(_month);
              if (_month.length > maxLength) {
                maxLength = _month.length;
              }
            }
            for (var _position = 0; _position < maxLength; _position++) {
              var _regex = undefined;
              for (var _i2 = 0; _i2 <= 11; _i2++) {
                var _month2 = months[_i2];
                if (value.charAt(index + _position) == _month2.charAt(_position) || value.charAt(index + _position) === '') {
                  if (_regex === undefined) {
                    _regex = '(';
                  } else {
                    _regex += '|';
                  }
                  _regex += _month2.charAt(_position);
                }
              }
              if (_regex) {
                _regex += ')';
                result.push(new RegExp(_regex));
                _increment++;
              } else {
                break;
              }
            }
            index += _increment;
          } else if (part == 'D') {
            result.push(/[1-3]/);
            if (value.charAt(index) === '1' || value.charAt(index) === '2' || value.charAt(index) === '3') {
              if (value.charAt(index) === '3') {
                if (value.charAt(index + 1) === '0' || value.charAt(index + 1) === '1') {
                  result.push(/[0-1]/);
                  index += 1;
                } else if (value.charAt(index + 1) === '') {
                  result.push(/[0-1]?/);
                }
              } else {
                if (value.charAt(index + 1) === '0' || value.charAt(index + 1) === '1' || value.charAt(index + 1) === '2' || value.charAt(index + 1) === '3' || value.charAt(index + 1) === '4' || value.charAt(index + 1) === '5' || value.charAt(index + 1) === '6' || value.charAt(index + 1) === '7' || value.charAt(index + 1) === '8' || value.charAt(index + 1) === '9') {
                  result.push(/[0-9]/);
                  index += 1;
                } else if (value.charAt(index + 1) === '') {
                  result.push(/[0-9]?/);
                }
              }
            }
            index += 1;
          } else if (part == 'DD') {
            result.push(/[0-3]/);
            result.push(value.charAt(index) === '3' ? /[0-1]/ : value.charAt(index) === '0' ? /[1-9]/ : /[0-9]/);
            index += 2;
          } else if (part == 'H') {
            result.push(/[0-9]/);
            if (value.charAt(index) === '2') {
              if (value.charAt(index + 1) === '0' || value.charAt(index + 1) === '1' || value.charAt(index + 1) === '2' || value.charAt(index + 1) === '3') {
                result.push(/[0-3]/);
                index += 1;
              } else if (value.charAt(index + 1) === '') {
                result.push(/[0-3]?/);
              }
            } else if (value.charAt(index) === '1') {
              if (value.charAt(index + 1) === '0' || value.charAt(index + 1) === '1' || value.charAt(index + 1) === '2' || value.charAt(index + 1) === '3' || value.charAt(index + 1) === '4' || value.charAt(index + 1) === '5' || value.charAt(index + 1) === '6' || value.charAt(index + 1) === '7' || value.charAt(index + 1) === '8' || value.charAt(index + 1) === '9') {
                result.push(/[0-9]/);
                index += 1;
              } else if (value.charAt(index + 1) === '') {
                result.push(/[0-9]?/);
              }
            }
            index += 1;
          } else if (part == 'HH') {
            result.push(/[0-2]/);
            if (value.charAt(index) === '0' || value.charAt(index) === '1') {
              result.push(/[0-9]/);
            } else if (value.charAt(index) === '2') {
              result.push(/[0-3]/);
            }
            index += 2;
          } else if (part == 'h') {
            result.push(/[1-9]/);
            if (value.charAt(index) === '1') {
              if (value.charAt(index + 1) == '0' || value.charAt(index + 1) == '1' || value.charAt(index + 1) == '2') {
                result.push(/[0-2]/);
                index += 1;
              } else if (value.charAt(index + 1) === '') {
                result.push(/[0-2]?/);
              }
            }
            index += 1;
          } else if (part == 'hh') {
            result.push(/[0-1]/);
            result.push(value.charAt(index) === '0' ? /[1-9]/ : /[0-2]/);
            index += 2;
          } else if (part == 'm') {
            result.push(/[0-9]/);
            if (value.charAt(index) === '1' || value.charAt(index) === '2' || value.charAt(index) === '3' || value.charAt(index) === '4' || value.charAt(index) === '5') {
              if (value.charAt(index + 1) === '0' || value.charAt(index + 1) === '1' || value.charAt(index + 1) === '2' || value.charAt(index + 1) === '3' || value.charAt(index + 1) === '4' || value.charAt(index + 1) === '5' || value.charAt(index + 1) === '6' || value.charAt(index + 1) === '7' || value.charAt(index + 1) === '8' || value.charAt(index + 1) === '9') {
                result.push(/[0-9]/);
                index += 1;
              } else if (value.charAt(index + 1) === '') {
                result.push(/[0-9]?/);
              }
            }
            index += 1;
          } else if (part == 'mm') {
            result.push(/[0-5]/);
            result.push(/[0-9]/);
            index += 2;
          } else if (part == 's') {
            result.push(/[0-9]/);
            if (value.charAt(index) === '1' || value.charAt(index) === '2' || value.charAt(index) === '3' || value.charAt(index) === '4' || value.charAt(index) === '5') {
              if (value.charAt(index + 1) === '0' || value.charAt(index + 1) === '1' || value.charAt(index + 1) === '2' || value.charAt(index + 1) === '3' || value.charAt(index + 1) === '4' || value.charAt(index + 1) === '5' || value.charAt(index + 1) === '6' || value.charAt(index + 1) === '7' || value.charAt(index + 1) === '8' || value.charAt(index + 1) === '9') {
                result.push(/[0-9]/);
                index += 1;
              } else if (value.charAt(index + 1) === '') {
                result.push(/[0-9]?/);
              }
            }
            index += 1;
          } else if (part == 'ss') {
            result.push(/[0-5]/);
            result.push(/[0-9]/);
            index += 2;
          } else if (part == 'a') {
            result.push(/a|p/);
            result.push('m');
            index += 2;
          } else if (part == 'A') {
            result.push(/A|P/);
            result.push('M');
            index += 2;
          } else if (part == 'Z') {
            result.push(/\+|-/);
            result.push(/[0-1]/);
            if (value.charAt(index + 1) === '0') {
              result.push(/[0-9]/);
            } else if (value.charAt(index + 1) === '1') {
              result.push(value.charAt(index) === '+' ? /[0-4]/ : /[0-2]/);
            }
            result.push(':');
            result.push(/[0-5]/);
            result.push(/[0-9]/);
            index += 6;
          } else if (part == 'SSS') {
            result.push(/[0-9]/);
            result.push(/[0-9]/);
            result.push(/[0-9]/);
            index += 3;
          } else {
            result.push(part);
            index += part.length;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return result;
    }
  }
});
var entry$e = {
  renderer: controlRenderer$e,
  tester: core.rankWith(2, core.isDateTimeControl)
};

var __vue_script__$e = controlRenderer$e;
var __vue_render__$e = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-hover', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var hover = ref.hover;
        return [_c('v-text-field', _vm._b({
          directives: [{
            name: "disabled-icon-focus",
            rawName: "v-disabled-icon-focus"
          }, {
            name: "mask",
            rawName: "v-mask",
            value: _vm.mask,
            expression: "mask"
          }],
          "class": _vm.styles.control.input,
          attrs: {
            "id": _vm.control.id + '-input',
            "disabled": !_vm.control.enabled,
            "autofocus": _vm.appliedOptions.focus,
            "placeholder": _vm.appliedOptions.placeholder,
            "label": _vm.computedLabel,
            "hint": _vm.control.description,
            "persistent-hint": _vm.persistentHint(),
            "required": _vm.control.required,
            "error-messages": _vm.control.errors,
            "value": _vm.inputValue
          },
          on: {
            "input": _vm.onInputChange,
            "focus": function focus($event) {
              _vm.isFocused = true;
            },
            "blur": function blur($event) {
              _vm.isFocused = false;
            }
          }
        }, 'v-text-field', _vm.vuetifyProps('v-text-field'), false), [_c('template', {
          slot: "append"
        }, [hover && _vm.control.enabled ? _c('v-icon', {
          attrs: {
            "tabindex": "-1"
          },
          on: {
            "click": _vm.clear
          }
        }, [_vm._v("$clear")]) : _vm._e()], 1), _vm._v(" "), _c('template', {
          slot: "prepend-inner"
        }, [_c('v-menu', _vm._b({
          ref: "menu",
          attrs: {
            "close-on-content-click": false,
            "return-value": _vm.pickerValue,
            "transition": "scale-transition",
            "offset-y": "",
            "min-width": _vm.useTabLayout ? '290px' : '580px',
            "disabled": !_vm.control.enabled
          },
          on: {
            "update:returnValue": function updateReturnValue($event) {
              _vm.pickerValue = $event;
            },
            "update:return-value": function updateReturnValue($event) {
              _vm.pickerValue = $event;
            }
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(ref) {
              var onMenu = ref.on;
              return [_c('v-icon', _vm._g({
                attrs: {
                  "tabindex": "-1"
                }
              }, onMenu), [_vm._v(_vm._s(_vm.pickerIcon))])];
            }
          }], null, true),
          model: {
            value: _vm.showMenu,
            callback: function callback($$v) {
              _vm.showMenu = $$v;
            },
            expression: "showMenu"
          }
        }, 'v-menu', _vm.vuetifyProps('v-menu'), false), [_vm._v(" "), _vm.showMenu ? _c('v-card', [_vm.useTabLayout ? _c('v-tabs', {
          model: {
            value: _vm.activeTab,
            callback: function callback($$v) {
              _vm.activeTab = $$v;
            },
            expression: "activeTab"
          }
        }, [_c('v-tab', {
          key: "date",
          staticClass: "primary--text",
          attrs: {
            "href": "#date"
          }
        }, [_c('v-icon', [_vm._v("mdi-calendar")])], 1), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-tab', {
          key: "time",
          staticClass: "primary--text",
          attrs: {
            "href": "#time"
          }
        }, [_c('v-icon', [_vm._v("mdi-clock-outline")])], 1), _vm._v(" "), _c('v-tab-item', {
          attrs: {
            "value": "date"
          }
        }, [_vm.showMenu ? _c('v-date-picker', _vm._b({
          ref: "datePicker",
          attrs: {
            "min": _vm.minDate,
            "max": _vm.maxDate
          },
          on: {
            "input": function input($event) {
              _vm.activeTab = 'time';
            }
          },
          model: {
            value: _vm.datePickerValue,
            callback: function callback($$v) {
              _vm.datePickerValue = $$v;
            },
            expression: "datePickerValue"
          }
        }, 'v-date-picker', _vm.vuetifyProps('v-date-picker'), false)) : _vm._e()], 1), _vm._v(" "), _c('v-tab-item', {
          attrs: {
            "value": "time"
          }
        }, [_c('v-time-picker', _vm._b({
          ref: "timePicker",
          attrs: {
            "min": _vm.minTime,
            "max": _vm.maxTime,
            "use-seconds": _vm.useSeconds,
            "format": _vm.ampm ? 'ampm' : '24hr'
          },
          on: {
            "click:minute": _vm.onMinute,
            "click:second": _vm.onSecond
          },
          model: {
            value: _vm.timePickerValue,
            callback: function callback($$v) {
              _vm.timePickerValue = $$v;
            },
            expression: "timePickerValue"
          }
        }, 'v-time-picker', _vm.vuetifyProps('v-time-picker'), false))], 1)], 1) : _c('v-row', {
          attrs: {
            "no-gutters": ""
          }
        }, [_c('v-col', {
          attrs: {
            "min-width": "290px",
            "cols": "auto"
          }
        }, [_vm.showMenu ? _c('v-date-picker', _vm._b({
          ref: "datePicker",
          attrs: {
            "min": _vm.minDate,
            "max": _vm.maxDate
          },
          model: {
            value: _vm.datePickerValue,
            callback: function callback($$v) {
              _vm.datePickerValue = $$v;
            },
            expression: "datePickerValue"
          }
        }, 'v-date-picker', _vm.vuetifyProps('v-date-picker'), false)) : _vm._e()], 1), _vm._v(" "), _c('v-col', {
          attrs: {
            "min-width": "290px",
            "cols": "auto"
          }
        }, [_c('v-time-picker', _vm._b({
          ref: "timePicker",
          attrs: {
            "min": _vm.minTime,
            "max": _vm.maxTime,
            "use-seconds": _vm.useSeconds,
            "format": _vm.ampm ? 'ampm' : '24hr'
          },
          on: {
            "click:minute": _vm.onMinute,
            "click:second": _vm.onSecond
          },
          model: {
            value: _vm.timePickerValue,
            callback: function callback($$v) {
              _vm.timePickerValue = $$v;
            },
            expression: "timePickerValue"
          }
        }, 'v-time-picker', _vm.vuetifyProps('v-time-picker'), false))], 1)], 1), _vm._v(" "), _vm.showActions ? _c('v-card-actions', [_c('v-btn', {
          attrs: {
            "text": ""
          },
          on: {
            "click": _vm.clear
          }
        }, [_vm._v(" " + _vm._s(_vm.clearLabel) + " ")]), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-btn', {
          attrs: {
            "text": ""
          },
          on: {
            "click": function click($event) {
              _vm.showMenu = false;
            }
          }
        }, [_vm._v("\n                " + _vm._s(_vm.cancelLabel) + "\n              ")]), _vm._v(" "), _c('v-btn', {
          attrs: {
            "text": "",
            "color": "primary"
          },
          on: {
            "click": _vm.okHandler
          }
        }, [_vm._v("\n                " + _vm._s(_vm.okLabel) + "\n              ")])], 1) : _vm._e()], 1) : _vm._e()], 1)], 1)], 2)];
      }
    }])
  })], 1);
};
var __vue_staticRenderFns__$e = [];
var __vue_inject_styles__$e = undefined;
var __vue_scope_id__$e = "data-v-0835652e";
var __vue_module_identifier__$e = undefined;
var __vue_is_functional_template__$e = false;
var __vue_component__$e = normalizeComponent({
  render: __vue_render__$e,
  staticRenderFns: __vue_staticRenderFns__$e
}, __vue_inject_styles__$e, __vue_script__$e, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, false, undefined, undefined, undefined);

var controlRenderer$d = vue.defineComponent({
  name: 'enum-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VSelect: lib.VSelect,
    VHover: lib.VHover
  },
  directives: {
    DisabledIconFocus: DisabledIconFocus
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var t = useTranslator();
    var control = useVuetifyControl(vue2.useJsonFormsEnumControl(props), function (value) {
      return value !== null ? value : undefined;
    });
    return _objectSpread2(_objectSpread2({}, control), {}, {
      t: t
    });
  }
});
var entry$d = {
  renderer: controlRenderer$d,
  tester: core.rankWith(2, core.isEnumControl)
};

var __vue_script__$d = controlRenderer$d;
var __vue_render__$d = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-text-field', {
    "class": _vm.styles.control.input,
    attrs: {
      "id": _vm.control.id + '-input',
      "disabled": !_vm.control.enabled,
      "label": _vm.computedLabel,
      "value": _vm.control.data
    }
  })], 1);
};
var __vue_staticRenderFns__$d = [];
var __vue_inject_styles__$d = undefined;
var __vue_scope_id__$d = undefined;
var __vue_module_identifier__$d = undefined;
var __vue_is_functional_template__$d = false;
var __vue_component__$d = normalizeComponent({
  render: __vue_render__$d,
  staticRenderFns: __vue_staticRenderFns__$d
}, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, false, undefined, undefined, undefined);

var NUMBER_REGEX_TEST$1 = /^[+-]?\d+([.]\d+)?([eE][+-]?\d+)?$/;
var controlRenderer$c = vue.defineComponent({
  name: 'integer-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VHover: lib.VHover,
    VTextField: lib.VTextField
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var adaptValue = function adaptValue(value) {
      return typeof value === 'number' ? value : value || undefined;
    };
    var input = useVuetifyControl(vue2.useJsonFormsControl(props), adaptValue);
    var inputValue = vue.ref(vue.unref(input.control).data || '');
    return _objectSpread2(_objectSpread2({}, input), {}, {
      adaptValue: adaptValue,
      inputValue: inputValue
    });
  },
  computed: {
    step: function step() {
      var _options$step;
      var options = this.appliedOptions;
      return (_options$step = options.step) !== null && _options$step !== void 0 ? _options$step : 1;
    },
    allowUnsafeInteger: function allowUnsafeInteger() {
      return this.appliedOptions.allowUnsafeInteger;
    }
  },
  methods: {
    onInputChange: function onInputChange(value) {
      this.inputValue = value;
      this.onChange(this.toNumberOrString(value));
    },
    toNumberOrString: function toNumberOrString(value) {
      if (NUMBER_REGEX_TEST$1.test(value)) {
        var num = Number.parseFloat(value);
        if (Number.isFinite(num) && (this.allowUnsafeInteger || Number.isSafeInteger(num))) {
          return num;
        }
      }
      return value;
    }
  }
});
var entry$c = {
  renderer: controlRenderer$c,
  tester: core.rankWith(1, core.isIntegerControl)
};

var __vue_script__$c = controlRenderer$c;
var __vue_render__$c = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-hover', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var hover = ref.hover;
        return [_c('v-text-field', _vm._b({
          ref: "input",
          "class": _vm.styles.control.input,
          attrs: {
            "step": _vm.step,
            "id": _vm.control.id + '-input',
            "disabled": !_vm.control.enabled,
            "autofocus": _vm.appliedOptions.focus,
            "placeholder": _vm.appliedOptions.placeholder,
            "label": _vm.computedLabel,
            "hint": _vm.control.description,
            "persistent-hint": _vm.persistentHint(),
            "required": _vm.control.required,
            "error-messages": _vm.control.errors,
            "value": _vm.inputValue,
            "clearable": hover
          },
          on: {
            "input": _vm.onInputChange,
            "focus": function focus($event) {
              _vm.isFocused = true;
            },
            "blur": function blur($event) {
              _vm.isFocused = false;
            }
          }
        }, 'v-text-field', _vm.vuetifyProps('v-text-field', {
          type: 'number'
        }), false))];
      }
    }])
  })], 1);
};
var __vue_staticRenderFns__$c = [];
var __vue_inject_styles__$c = undefined;
var __vue_scope_id__$c = undefined;
var __vue_module_identifier__$c = undefined;
var __vue_is_functional_template__$c = false;
var __vue_component__$c = normalizeComponent({
  render: __vue_render__$c,
  staticRenderFns: __vue_staticRenderFns__$c
}, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, undefined, undefined, undefined);

var controlRenderer$b = vue.defineComponent({
  name: 'multi-string-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VHover: lib.VHover,
    VTextarea: lib.VTextarea
  },
  directives: {
    DisabledIconFocus: DisabledIconFocus
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    return useVuetifyControl(vue2.useJsonFormsControl(props), function (value) {
      return value || undefined;
    }, 300);
  }
});
var entry$b = {
  renderer: controlRenderer$b,
  tester: core.rankWith(2, core.and(core.isStringControl, core.isMultiLineControl))
};

var __vue_script__$b = controlRenderer$b;
var __vue_render__$b = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-hover', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var hover = ref.hover;
        return [_c('v-textarea', _vm._b({
          directives: [{
            name: "disabled-icon-focus",
            rawName: "v-disabled-icon-focus"
          }],
          "class": _vm.styles.control.input,
          attrs: {
            "id": _vm.control.id + '-input',
            "disabled": !_vm.control.enabled,
            "autofocus": _vm.appliedOptions.focus,
            "placeholder": _vm.appliedOptions.placeholder,
            "label": _vm.computedLabel,
            "hint": _vm.control.description,
            "persistent-hint": _vm.persistentHint(),
            "required": _vm.control.required,
            "error-messages": _vm.control.errors,
            "value": _vm.control.data,
            "maxlength": _vm.appliedOptions.restrict ? _vm.control.schema.maxLength : undefined,
            "size": _vm.appliedOptions.trim && _vm.control.schema.maxLength !== undefined ? _vm.control.schema.maxLength : undefined,
            "clearable": hover,
            "multi-line": ""
          },
          on: {
            "input": _vm.onChange,
            "focus": function focus($event) {
              _vm.isFocused = true;
            },
            "blur": function blur($event) {
              _vm.isFocused = false;
            }
          }
        }, 'v-textarea', _vm.vuetifyProps('v-textarea'), false))];
      }
    }])
  })], 1);
};
var __vue_staticRenderFns__$b = [];
var __vue_inject_styles__$b = undefined;
var __vue_scope_id__$b = undefined;
var __vue_module_identifier__$b = undefined;
var __vue_is_functional_template__$b = false;
var __vue_component__$b = normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, undefined, undefined);

var NUMBER_REGEX_TEST = /^[+-]?\d+([.]\d+)?([eE][+-]?\d+)?$/;
var controlRenderer$a = vue.defineComponent({
  name: 'number-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VHover: lib.VHover,
    VTextField: lib.VTextField
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var adaptValue = function adaptValue(value) {
      return typeof value === 'number' ? value : value || undefined;
    };
    var input = useVuetifyControl(vue2.useJsonFormsControl(props), adaptValue);
    var inputValue = vue.ref(vue.unref(input.control).data || '');
    return _objectSpread2(_objectSpread2({}, input), {}, {
      adaptValue: adaptValue,
      inputValue: inputValue
    });
  },
  computed: {
    step: function step() {
      var _options$step;
      var options = this.appliedOptions;
      return (_options$step = options.step) !== null && _options$step !== void 0 ? _options$step : 0.1;
    }
  },
  methods: {
    onInputChange: function onInputChange(value) {
      var _this = this;
      this.inputValue = value;
      var result = this.toNumberOrString(value);
      if (typeof result === 'number') {
        var inputStringIsInExponentForm = this.inputValue.includes('E') || this.inputValue.includes('e');
        var numberAsString = inputStringIsInExponentForm ? result.toExponential() : result.toPrecision();
        var numberIsInExponentForm = numberAsString.includes('E') || numberAsString.includes('e');
        if (this.inputValue !== numberAsString && inputStringIsInExponentForm === numberIsInExponentForm
        ) {
          this.$nextTick(function () {
            return _this.inputValue = numberAsString;
          });
        }
      }
      this.onChange(result);
    },
    toNumberOrString: function toNumberOrString(value) {
      if (NUMBER_REGEX_TEST.test(value)) {
        var num = Number.parseFloat(value);
        if (Number.isFinite(num)) {
          return num;
        }
      }
      return value;
    }
  }
});
var entry$a = {
  renderer: controlRenderer$a,
  tester: core.rankWith(1, core.isNumberControl)
};

var __vue_script__$a = controlRenderer$a;
var __vue_render__$a = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-hover', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var hover = ref.hover;
        return [_c('v-text-field', _vm._b({
          ref: "input",
          "class": _vm.styles.control.input,
          attrs: {
            "step": _vm.step,
            "id": _vm.control.id + '-input',
            "disabled": !_vm.control.enabled,
            "autofocus": _vm.appliedOptions.focus,
            "placeholder": _vm.appliedOptions.placeholder,
            "label": _vm.computedLabel,
            "hint": _vm.control.description,
            "persistent-hint": _vm.persistentHint(),
            "required": _vm.control.required,
            "error-messages": _vm.control.errors,
            "value": _vm.inputValue,
            "clearable": hover
          },
          on: {
            "input": _vm.onInputChange,
            "focus": function focus($event) {
              _vm.isFocused = true;
            },
            "blur": function blur($event) {
              _vm.isFocused = false;
            }
          }
        }, 'v-text-field', _vm.vuetifyProps('v-text-field', {
          type: 'number'
        }), false))];
      }
    }])
  })], 1);
};
var __vue_staticRenderFns__$a = [];
var __vue_inject_styles__$a = undefined;
var __vue_scope_id__$a = undefined;
var __vue_module_identifier__$a = undefined;
var __vue_is_functional_template__$a = false;
var __vue_component__$a = normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);

var controlRenderer$9 = vue.defineComponent({
  name: 'oneof-enum-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VSelect: lib.VSelect,
    VHover: lib.VHover
  },
  directives: {
    DisabledIconFocus: DisabledIconFocus
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var t = useTranslator();
    var control = useVuetifyControl(vue2.useJsonFormsOneOfEnumControl(props), function (value) {
      return value !== null ? value : undefined;
    });
    return _objectSpread2(_objectSpread2({}, control), {}, {
      t: t
    });
  }
});
var entry$9 = {
  renderer: controlRenderer$9,
  tester: core.rankWith(5, core.isOneOfEnumControl)
};

var __vue_script__$9 = controlRenderer$9;
var __vue_render__$9 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-hover', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var hover = ref.hover;
        return [_c('v-select', _vm._b({
          directives: [{
            name: "disabled-icon-focus",
            rawName: "v-disabled-icon-focus"
          }],
          "class": _vm.styles.control.input,
          attrs: {
            "id": _vm.control.id + '-input',
            "disabled": !_vm.control.enabled,
            "autofocus": _vm.appliedOptions.focus,
            "placeholder": _vm.appliedOptions.placeholder,
            "label": _vm.computedLabel,
            "hint": _vm.control.description,
            "persistent-hint": _vm.persistentHint(),
            "required": _vm.control.required,
            "error-messages": _vm.control.errors,
            "clearable": hover,
            "value": _vm.control.data,
            "items": _vm.control.options,
            "item-text": function itemText(item) {
              return _vm.t(item.label, item.label);
            },
            "item-value": "value"
          },
          on: {
            "change": _vm.onChange,
            "focus": function focus($event) {
              _vm.isFocused = true;
            },
            "blur": function blur($event) {
              _vm.isFocused = false;
            }
          }
        }, 'v-select', _vm.vuetifyProps('v-select'), false))];
      }
    }])
  })], 1);
};
var __vue_staticRenderFns__$9 = [];
var __vue_inject_styles__$9 = undefined;
var __vue_scope_id__$9 = undefined;
var __vue_module_identifier__$9 = undefined;
var __vue_is_functional_template__$9 = false;
var __vue_component__$9 = normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);

var controlRenderer$8 = vue.defineComponent({
  name: 'oneof-radio-group-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VRadioGroup: lib.VRadioGroup,
    VRadio: lib.VRadio,
    VLabel: lib.VLabel
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    return useVuetifyControl(vue2.useJsonFormsOneOfEnumControl(props));
  }
});
var entry$8 = {
  renderer: controlRenderer$8,
  tester: core.rankWith(20, core.and(core.isOneOfEnumControl, core.optionIs('format', 'radio')))
};

var __vue_script__$8 = controlRenderer$8;
var __vue_render__$8 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-label', _vm._b({
    attrs: {
      "for": _vm.control.id + '-input'
    }
  }, 'v-label', _vm.vuetifyProps('v-label'), false), [_vm._v(_vm._s(_vm.computedLabel))]), _vm._v(" "), _c('v-radio-group', _vm._b({
    "class": _vm.styles.control.input,
    attrs: {
      "id": _vm.control.id + '-input',
      "disabled": !_vm.control.enabled,
      "autofocus": _vm.appliedOptions.focus,
      "placeholder": _vm.appliedOptions.placeholder,
      "hint": _vm.control.description,
      "persistent-hint": _vm.persistentHint(),
      "required": _vm.control.required,
      "error-messages": _vm.control.errors,
      "value": _vm.control.data
    },
    on: {
      "change": _vm.onChange,
      "focus": function focus($event) {
        _vm.isFocused = true;
      },
      "blur": function blur($event) {
        _vm.isFocused = false;
      }
    }
  }, 'v-radio-group', _vm.vuetifyProps('v-radio-group'), false), _vm._l(_vm.control.options, function (o) {
    return _c('v-radio', _vm._b({
      key: o.value,
      attrs: {
        "label": o.label,
        "value": o.value
      }
    }, 'v-radio', _vm.vuetifyProps("v-radio[" + o.value + "]"), false));
  }), 1)], 1);
};
var __vue_staticRenderFns__$8 = [];
var __vue_inject_styles__$8 = undefined;
var __vue_scope_id__$8 = undefined;
var __vue_module_identifier__$8 = undefined;
var __vue_is_functional_template__$8 = false;
var __vue_component__$8 = normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);

var controlRenderer$7 = vue.defineComponent({
  name: 'password-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VTextField: lib.VTextField
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var passwordVisible = vue.ref(false);
    return _objectSpread2(_objectSpread2({}, useVuetifyControl(vue2.useJsonFormsControl(props), function (value) {
      return value || undefined;
    }, 300)), {}, {
      passwordVisible: passwordVisible
    });
  }
});
var entry$7 = {
  renderer: controlRenderer$7,
  tester: core.rankWith(2, core.and(core.isStringControl, core.formatIs('password')))
};

var __vue_script__$7 = controlRenderer$7;
var __vue_render__$7 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-text-field', _vm._b({
    "class": _vm.styles.control.input,
    attrs: {
      "type": _vm.passwordVisible ? 'text' : 'password',
      "append-icon": _vm.passwordVisible ? 'mdi-eye' : 'mdi-eye-off',
      "id": _vm.control.id + '-input',
      "disabled": !_vm.control.enabled,
      "autofocus": _vm.appliedOptions.focus,
      "placeholder": _vm.appliedOptions.placeholder,
      "label": _vm.computedLabel,
      "hint": _vm.control.description,
      "persistent-hint": _vm.persistentHint(),
      "required": _vm.control.required,
      "error-messages": _vm.control.errors,
      "value": _vm.control.data,
      "maxlength": _vm.appliedOptions.restrict ? _vm.control.schema.maxLength : undefined,
      "size": _vm.appliedOptions.trim && _vm.control.schema.maxLength !== undefined ? _vm.control.schema.maxLength : undefined
    },
    on: {
      "click:append": function clickAppend() {
        return _vm.passwordVisible = !_vm.passwordVisible;
      },
      "input": _vm.onChange,
      "focus": function focus($event) {
        _vm.isFocused = true;
      },
      "blur": function blur($event) {
        _vm.isFocused = false;
      }
    }
  }, 'v-text-field', _vm.vuetifyProps('v-text-field'), false))], 1);
};
var __vue_staticRenderFns__$7 = [];
var __vue_inject_styles__$7 = undefined;
var __vue_scope_id__$7 = undefined;
var __vue_module_identifier__$7 = undefined;
var __vue_is_functional_template__$7 = false;
var __vue_component__$7 = normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

var controlRenderer$6 = vue.defineComponent({
  name: 'radio-group-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VRadioGroup: lib.VRadioGroup,
    VRadio: lib.VRadio,
    VLabel: lib.VLabel
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    return useVuetifyControl(vue2.useJsonFormsEnumControl(props));
  }
});
var entry$6 = {
  renderer: controlRenderer$6,
  tester: core.rankWith(20, core.and(core.isEnumControl, core.optionIs('format', 'radio')))
};

var __vue_script__$6 = controlRenderer$6;
var __vue_render__$6 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-label', _vm._b({
    attrs: {
      "for": _vm.control.id + '-input'
    }
  }, 'v-label', _vm.vuetifyProps('v-label'), false), [_vm._v(_vm._s(_vm.computedLabel))]), _vm._v(" "), _c('v-radio-group', _vm._b({
    "class": _vm.styles.control.input,
    attrs: {
      "id": _vm.control.id + '-input',
      "disabled": !_vm.control.enabled,
      "autofocus": _vm.appliedOptions.focus,
      "placeholder": _vm.appliedOptions.placeholder,
      "hint": _vm.control.description,
      "persistent-hint": _vm.persistentHint(),
      "required": _vm.control.required,
      "error-messages": _vm.control.errors,
      "value": _vm.control.data
    },
    on: {
      "change": _vm.onChange,
      "focus": function focus($event) {
        _vm.isFocused = true;
      },
      "blur": function blur($event) {
        _vm.isFocused = false;
      }
    }
  }, 'v-radio-group', _vm.vuetifyProps('v-radio-group'), false), _vm._l(_vm.control.options, function (o) {
    return _c('v-radio', _vm._b({
      key: o.value,
      attrs: {
        "label": o.label,
        "value": o.value
      }
    }, 'v-radio', _vm.vuetifyProps("v-radio[" + o.value + "]"), false));
  }), 1)], 1);
};
var __vue_staticRenderFns__$6 = [];
var __vue_inject_styles__$6 = undefined;
var __vue_scope_id__$6 = undefined;
var __vue_module_identifier__$6 = undefined;
var __vue_is_functional_template__$6 = false;
var __vue_component__$6 = normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

var controlRenderer$5 = vue.defineComponent({
  name: 'slider-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VSlider: lib.VSlider
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    return useVuetifyControl(vue2.useJsonFormsControl(props), function (value) {
      return Number(value);
    });
  }
});
var entry$5 = {
  renderer: controlRenderer$5,
  tester: core.rankWith(4, core.isRangeControl)
};

var __vue_script__$5 = controlRenderer$5;
var __vue_render__$5 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-slider', _vm._b({
    "class": _vm.styles.control.input,
    attrs: {
      "step": _vm.control.schema.multipleOf || 1,
      "min": _vm.control.schema.minimum,
      "max": _vm.control.schema.maximum,
      "thumb-label": true,
      "id": _vm.control.id + '-input',
      "disabled": !_vm.control.enabled,
      "autofocus": _vm.appliedOptions.focus,
      "placeholder": _vm.appliedOptions.placeholder,
      "label": _vm.computedLabel,
      "hint": _vm.control.description,
      "persistent-hint": _vm.persistentHint(),
      "required": _vm.control.required,
      "error-messages": _vm.control.errors,
      "value": _vm.control.data
    },
    on: {
      "change": _vm.onChange,
      "focus": function focus($event) {
        _vm.isFocused = true;
      },
      "blur": function blur($event) {
        _vm.isFocused = false;
      }
    }
  }, 'v-slider', _vm.vuetifyProps('v-slider'), false))], 1);
};
var __vue_staticRenderFns__$5 = [];
var __vue_inject_styles__$5 = undefined;
var __vue_scope_id__$5 = undefined;
var __vue_module_identifier__$5 = undefined;
var __vue_is_functional_template__$5 = false;
var __vue_component__$5 = normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

var controlRenderer$4 = vue.defineComponent({
  name: 'string-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VHover: lib.VHover,
    VTextField: lib.VTextField,
    VCombobox: lib.VCombobox
  },
  directives: {
    DisabledIconFocus: DisabledIconFocus
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    return useVuetifyControl(vue2.useJsonFormsControl(props), function (value) {
      return value || undefined;
    }, 300);
  },
  computed: {
    suggestions: function suggestions() {
      var _this$control$uischem;
      var suggestions = (_this$control$uischem = this.control.uischema.options) === null || _this$control$uischem === void 0 ? void 0 : _this$control$uischem.suggestion;
      if (suggestions === undefined || !isArray__default["default"](suggestions) || !every__default["default"](suggestions, isString__default["default"])) {
        return undefined;
      }
      return suggestions;
    }
  }
});
var entry$4 = {
  renderer: controlRenderer$4,
  tester: core.rankWith(1, core.isStringControl)
};

var __vue_script__$4 = controlRenderer$4;
var __vue_render__$4 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_vm.control.data ? _c('v-text-field', {
    "class": _vm.styles.control.input,
    attrs: {
      "id": _vm.control.id + '-input',
      "disabled": !_vm.control.enabled,
      "label": _vm.computedLabel,
      "value": _vm.control.data,
      "placeholder": "NONE",
      "persistent-hint": "NONE",
      "required": false
    }
  }) : _vm._e()], 1);
};
var __vue_staticRenderFns__$4 = [];
var __vue_inject_styles__$4 = undefined;
var __vue_scope_id__$4 = undefined;
var __vue_module_identifier__$4 = undefined;
var __vue_is_functional_template__$4 = false;
var __vue_component__$4 = normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

var VueMaskPluginDirectiveCallback = function () {
  function VueMaskPluginDirectiveCallback() {
    _classCallCheck(this, VueMaskPluginDirectiveCallback);
  }
  return _createClass(VueMaskPluginDirectiveCallback, [{
    key: "directive",
    value: function directive(_id, definition) {
      this.mask = definition;
      return definition;
    }
  }, {
    key: "filter",
    value: function filter(_id, definition) {
      return definition;
    }
  }]);
}();
var VueMaskPluginFilterCallback = function () {
  function VueMaskPluginFilterCallback() {
    _classCallCheck(this, VueMaskPluginFilterCallback);
    this.mask = function (input, _mask) {
      return input;
    };
  }
  return _createClass(VueMaskPluginFilterCallback, [{
    key: "directive",
    value: function directive(_id, definition) {
      return definition;
    }
  }, {
    key: "filter",
    value: function filter(_id, definition) {
      this.mask = definition;
      return definition;
    }
  }]);
}();
var DelegateDirective = _createClass(function DelegateDirective() {
  var _this = this;
  _classCallCheck(this, DelegateDirective);
  this.bind = function (el, binding, vnode, oldVnode) {
    var _vnode$context;
    var mask = (_vnode$context = vnode.context) === null || _vnode$context === void 0 ? void 0 : _vnode$context.mask;
    if (mask) {
      var _vnode$context2, _this$delegate;
      var options = (_vnode$context2 = vnode.context) === null || _vnode$context2 === void 0 ? void 0 : _vnode$context2.maskReplacers;
      var callback = new VueMaskPluginDirectiveCallback();
      vMask.VueMaskPlugin(callback, {
        placeholders: options
      });
      _this.delegate = callback.mask;
      if ((_this$delegate = _this.delegate) !== null && _this$delegate !== void 0 && _this$delegate.bind) {
        var _this$delegate2;
        (_this$delegate2 = _this.delegate) === null || _this$delegate2 === void 0 || _this$delegate2.bind(el, binding, vnode, oldVnode);
      }
    }
  };
  this.inserted = function (el, binding, vnode, oldVnode) {
    var _this$delegate3;
    if ((_this$delegate3 = _this.delegate) !== null && _this$delegate3 !== void 0 && _this$delegate3.inserted) {
      var _this$delegate4;
      (_this$delegate4 = _this.delegate) === null || _this$delegate4 === void 0 || _this$delegate4.inserted(el, binding, vnode, oldVnode);
    }
  };
  this.update = function (el, binding, vnode, oldVnode) {
    var _this$delegate5;
    if ((_this$delegate5 = _this.delegate) !== null && _this$delegate5 !== void 0 && _this$delegate5.update) {
      var _this$delegate6;
      (_this$delegate6 = _this.delegate) === null || _this$delegate6 === void 0 || _this$delegate6.update(el, binding, vnode, oldVnode);
    }
  };
  this.componentUpdated = function (el, binding, vnode, oldVnode) {
    var _this$delegate7;
    if ((_this$delegate7 = _this.delegate) !== null && _this$delegate7 !== void 0 && _this$delegate7.componentUpdated) {
      var _this$delegate8;
      (_this$delegate8 = _this.delegate) === null || _this$delegate8 === void 0 || _this$delegate8.componentUpdated(el, binding, vnode, oldVnode);
    }
  };
  this.unbind = function (el, binding, vnode, oldVnode) {
    var _this$delegate9;
    if ((_this$delegate9 = _this.delegate) !== null && _this$delegate9 !== void 0 && _this$delegate9.unbind) {
      var _this$delegate10;
      (_this$delegate10 = _this.delegate) === null || _this$delegate10 === void 0 || _this$delegate10.unbind(el, binding, vnode, oldVnode);
    }
    _this.delegate = undefined;
  };
});
var controlRenderer$3 = vue.defineComponent({
  name: 'string-mask-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VHover: lib.VHover,
    VTextField: lib.VTextField
  },
  directives: {
    DisabledIconFocus: DisabledIconFocus,
    Mask: new DelegateDirective()
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var adaptValue = function adaptValue(value) {
      return value || undefined;
    };
    var control = useVuetifyControl(vue2.useJsonFormsControl(props), adaptValue);
    return _objectSpread2(_objectSpread2({}, control), {}, {
      adaptValue: adaptValue
    });
  },
  methods: {
    maskedValue: function maskedValue(value) {
      if (!this.returnMaskedValue) {
        return this.maskFilter(value, this.mask);
      }
      return value;
    },
    unmaskedValue: function unmaskedValue(value) {
      var _this2 = this;
      if (!this.returnMaskedValue && value) {
        value = value.split('').map(function (_char, index) {
          if (_this2.mask.length > index) {
            var replacer = _this2.maskReplacers[_this2.mask[index]];
            return ['#', 'A', 'N', 'X'].includes(_this2.mask[index]) && replacer === undefined || replacer ? _char : '';
          }
          return _char;
        }).join('');
      }
      return value;
    }
  },
  computed: {
    maskModel: {
      get: function get() {
        var value = this.control.data;
        if (!this.returnMaskedValue && value) {
          value = this.maskedValue(value);
        }
        return value;
      },
      set: function set(val) {
        var value = val;
        if (!this.returnMaskedValue) {
          value = this.unmaskedValue(value);
        }
        if (this.adaptValue(value) !== this.control.data) {
          this.onChange(value);
        }
      }
    },
    mask: function mask() {
      return this.appliedOptions.mask;
    },
    returnMaskedValue: function returnMaskedValue() {
      return this.appliedOptions.returnMaskedValue === true;
    },
    maskReplacers: function maskReplacers() {
      var replacers = _typeof(this.appliedOptions.maskReplacers) === 'object' ? this.appliedOptions.maskReplacers : {};
      Object.keys(replacers).forEach(function (key, _index) {
        if (typeof replacers[key] === 'string') {
          var value = replacers[key];
          replacers[key] = new RegExp(value);
        } else if (replacers[key] !== null) {
          delete replacers[key];
        }
      });
      if (replacers['?'] === undefined) {
        replacers['?'] = null;
      }
      return replacers;
    },
    maskFilter: function maskFilter() {
      var callback = new VueMaskPluginFilterCallback();
      vMask.VueMaskPlugin(callback, {
        placeholders: this.maskReplacers
      });
      return callback.mask;
    }
  }
});
var hasOption = function hasOption(optionName) {
  return function (uischema) {
    if (isEmpty__default["default"](uischema)) {
      return false;
    }
    var options = uischema.options;
    return options && !isEmpty__default["default"](options) && typeof options[optionName] === 'string' || false;
  };
};
var entry$3 = {
  renderer: controlRenderer$3,
  tester: core.rankWith(2, core.and(core.isStringControl, hasOption('mask')))
};

var __vue_script__$3 = controlRenderer$3;
var __vue_render__$3 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-hover', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var hover = ref.hover;
        return [_c('v-text-field', _vm._b({
          directives: [{
            name: "disabled-icon-focus",
            rawName: "v-disabled-icon-focus"
          }, {
            name: "mask",
            rawName: "v-mask",
            value: _vm.mask,
            expression: "mask"
          }],
          "class": _vm.styles.control.input,
          attrs: {
            "id": _vm.control.id + '-input',
            "disabled": !_vm.control.enabled,
            "autofocus": _vm.appliedOptions.focus,
            "placeholder": _vm.appliedOptions.placeholder,
            "label": _vm.computedLabel,
            "hint": _vm.control.description,
            "persistent-hint": _vm.persistentHint(),
            "required": _vm.control.required,
            "error-messages": _vm.control.errors,
            "maxlength": _vm.appliedOptions.restrict ? _vm.control.schema.maxLength : undefined,
            "counter": _vm.control.schema.maxLength !== undefined ? _vm.control.schema.maxLength : undefined,
            "clearable": hover
          },
          on: {
            "focus": function focus($event) {
              _vm.isFocused = true;
            },
            "blur": function blur($event) {
              _vm.isFocused = false;
            }
          },
          model: {
            value: _vm.maskModel,
            callback: function callback($$v) {
              _vm.maskModel = $$v;
            },
            expression: "maskModel"
          }
        }, 'v-text-field', _vm.vuetifyProps('v-text-field'), false))];
      }
    }])
  })], 1);
};
var __vue_staticRenderFns__$3 = [];
var __vue_inject_styles__$3 = undefined;
var __vue_scope_id__$3 = undefined;
var __vue_module_identifier__$3 = undefined;
var __vue_is_functional_template__$3 = false;
var __vue_component__$3 = normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

var JSON_SCHEMA_TIME_FORMATS = ['HH:mm:ss.SSSZ', 'HH:mm:ss.SSS', 'HH:mm:ssZ', 'HH:mm:ss'];
var controlRenderer$2 = vue.defineComponent({
  name: 'time-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VHover: lib.VHover,
    VTextField: lib.VTextField,
    VMenu: lib.VMenu,
    VTimePicker: lib.VTimePicker,
    VIcon: lib.VIcon,
    VSpacer: lib.VSpacer,
    VBtn: lib.VBtn
  },
  directives: {
    DisabledIconFocus: DisabledIconFocus,
    Mask: vMask.VueMaskDirective
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var t = useTranslator();
    var showMenu = vue.ref(false);
    var mask = vue.ref(undefined);
    var adaptValue = function adaptValue(value) {
      return value || undefined;
    };
    var control = useVuetifyControl(vue2.useJsonFormsControl(props), adaptValue);
    return _objectSpread2(_objectSpread2({}, control), {}, {
      showMenu: showMenu,
      mask: mask,
      t: t,
      adaptValue: adaptValue
    });
  },
  watch: {
    isFocused: function isFocused(newFocus) {
      if (newFocus && this.applyMask) {
        this.mask = this.maskFunction.bind(this);
      } else {
        this.mask = undefined;
      }
    }
  },
  computed: {
    applyMask: function applyMask() {
      return typeof this.appliedOptions.mask == 'boolean' ? this.appliedOptions.mask : true;
    },
    pickerIcon: function pickerIcon() {
      return typeof this.appliedOptions.pickerIcon == 'string' ? this.appliedOptions.pickerIcon : 'mdi-clock-outline';
    },
    timeFormat: function timeFormat() {
      return typeof this.appliedOptions.timeFormat == 'string' ? this.appliedOptions.timeFormat : this.ampm ? 'hh:mm a' : 'HH:mm';
    },
    timeSaveFormat: function timeSaveFormat() {
      return typeof this.appliedOptions.timeSaveFormat == 'string' ? this.appliedOptions.timeSaveFormat : 'HH:mm:ssZ';
    },
    formats: function formats() {
      return [this.timeSaveFormat, this.timeFormat].concat(JSON_SCHEMA_TIME_FORMATS);
    },
    useSeconds: function useSeconds() {
      return this.timeFormat.includes('s') ? true : false;
    },
    ampm: function ampm() {
      return this.appliedOptions.ampm === true;
    },
    minTime: function minTime() {
      if (typeof this.vuetifyProps('v-time-picker').min === 'string') {
        return this.vuetifyProps('v-time-picker').min;
      }
      var schema = this.control.schema;
      if (typeof schema.formatMinimum === 'string') {
        var time = parseDateTime(schema.formatMinimum, this.formats);
        return time ? this.useSeconds ? time.format('HH:mm:ss') : time.format('HH:mm') : schema.formatMinimum;
      } else if (typeof schema.formatExclusiveMinimum === 'string') {
        var _time = parseDateTime(schema.formatExclusiveMinimum, this.formats);
        if (_time) {
          _time = this.useSeconds ? _time.add(1, 'second') : _time.add(1, 'minute');
        }
        return _time ? this.useSeconds ? _time.format('HH:mm:ss') : _time.format('HH:mm') : schema.formatExclusiveMinimum;
      }
      return undefined;
    },
    maxTime: function maxTime() {
      if (typeof this.vuetifyProps('v-time-picker').max === 'string') {
        return this.vuetifyProps('v-time-picker').max;
      }
      var schema = this.control.schema;
      if (typeof schema.formatMaximum === 'string') {
        var time = parseDateTime(schema.formatMaximum, this.formats);
        return time ? this.useSeconds ? time.format('HH:mm:ss') : time.format('HH:mm') : schema.formatMaximum;
      } else if (typeof schema.formatExclusiveMaximum === 'string') {
        var _time2 = parseDateTime(schema.formatExclusiveMaximum, this.formats);
        if (_time2) {
          _time2 = this.useSeconds ? _time2.subtract(1, 'second') : _time2.subtract(1, 'minute');
        }
        return _time2 ? this.useSeconds ? _time2.format('HH:mm:ss') : _time2.format('HH:mm') : schema.formatExclusiveMaximum;
      }
      return undefined;
    },
    inputValue: function inputValue() {
      var value = this.control.data;
      var time = parseDateTime(value, this.formats);
      return time ? time.format(this.timeFormat) : value;
    },
    pickerValue: {
      get: function get() {
        var value = this.control.data;
        var time = parseDateTime(value, this.formats);
        return time ? this.useSeconds ? time.format('HH:mm:ss') : time.format('HH:mm') : undefined;
      },
      set: function set(val) {
        this.onPickerChange(val);
      }
    },
    clearLabel: function clearLabel() {
      var label = typeof this.appliedOptions.clearLabel == 'string' ? this.appliedOptions.clearLabel : 'Clear';
      return this.t(label, label);
    },
    cancelLabel: function cancelLabel() {
      var label = typeof this.appliedOptions.cancelLabel == 'string' ? this.appliedOptions.cancelLabel : 'Cancel';
      return this.t(label, label);
    },
    okLabel: function okLabel() {
      var label = typeof this.appliedOptions.okLabel == 'string' ? this.appliedOptions.okLabel : 'OK';
      return this.t(label, label);
    },
    showActions: function showActions() {
      return this.appliedOptions.showActions === true;
    }
  },
  methods: {
    onInputChange: function onInputChange(value) {
      var time = parseDateTime(value, this.timeFormat);
      var newdata = time ? time.format(this.timeSaveFormat) : value;
      if (this.adaptValue(newdata) !== this.control.data) {
        this.onChange(newdata);
      }
    },
    onPickerChange: function onPickerChange(value) {
      var time = parseDateTime(value, this.useSeconds ? 'HH:mm:ss' : 'HH:mm');
      this.onChange(time ? time.format(this.timeSaveFormat) : value);
    },
    okHandler: function okHandler() {
      this.$refs.menu.save(this.pickerValue);
      this.showMenu = false;
    },
    onMinute: function onMinute() {
      if (!this.showActions && !this.useSeconds) {
        this.okHandler();
      }
    },
    onSecond: function onSecond() {
      if (!this.showActions && this.useSeconds) {
        this.okHandler();
      }
    },
    clear: function clear() {
      this.mask = undefined;
      this.onChange(null);
    },
    maskFunction: function maskFunction(value) {
      var format = this.timeFormat;
      var parts = format.split(/([^HhmsAaSZ]*)(hh?|HH?|mm?|ss?|a|A|SSS|Z)/);
      var index = 0;
      var result = [];
      var _iterator = _createForOfIteratorHelper(parts),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var part = _step.value;
          if (!part || part === '') {
            continue;
          }
          if (index > value.length) {
            break;
          }
          if (part == 'H') {
            result.push(/[0-9]/);
            if (value.charAt(index) === '2') {
              if (value.charAt(index + 1) === '0' || value.charAt(index + 1) === '1' || value.charAt(index + 1) === '2' || value.charAt(index + 1) === '3') {
                result.push(/[0-3]/);
                index += 1;
              } else if (value.charAt(index + 1) === '') {
                result.push(/[0-3]?/);
              }
            } else if (value.charAt(index) === '1') {
              if (value.charAt(index + 1) === '0' || value.charAt(index + 1) === '1' || value.charAt(index + 1) === '2' || value.charAt(index + 1) === '3' || value.charAt(index + 1) === '4' || value.charAt(index + 1) === '5' || value.charAt(index + 1) === '6' || value.charAt(index + 1) === '7' || value.charAt(index + 1) === '8' || value.charAt(index + 1) === '9') {
                result.push(/[0-9]/);
                index += 1;
              } else if (value.charAt(index + 1) === '') {
                result.push(/[0-9]?/);
              }
            }
            index += 1;
          } else if (part == 'HH') {
            result.push(/[0-2]/);
            if (value.charAt(index) === '0' || value.charAt(index) === '1') {
              result.push(/[0-9]/);
            } else if (value.charAt(index) === '2') {
              result.push(/[0-3]/);
            }
            index += 2;
          } else if (part == 'h') {
            result.push(/[1-9]/);
            if (value.charAt(index) === '1') {
              if (value.charAt(index + 1) == '0' || value.charAt(index + 1) == '1' || value.charAt(index + 1) == '2') {
                result.push(/[0-2]/);
                index += 1;
              } else if (value.charAt(index + 1) === '') {
                result.push(/[0-2]?/);
              }
            }
            index += 1;
          } else if (part == 'hh') {
            result.push(/[0-1]/);
            result.push(value.charAt(index) === '0' ? /[1-9]/ : /[0-2]/);
            index += 2;
          } else if (part == 'm') {
            result.push(/[0-9]/);
            if (value.charAt(index) === '1' || value.charAt(index) === '2' || value.charAt(index) === '3' || value.charAt(index) === '4' || value.charAt(index) === '5') {
              if (value.charAt(index + 1) === '0' || value.charAt(index + 1) === '1' || value.charAt(index + 1) === '2' || value.charAt(index + 1) === '3' || value.charAt(index + 1) === '4' || value.charAt(index + 1) === '5' || value.charAt(index + 1) === '6' || value.charAt(index + 1) === '7' || value.charAt(index + 1) === '8' || value.charAt(index + 1) === '9') {
                result.push(/[0-9]/);
                index += 1;
              } else if (value.charAt(index + 1) === '') {
                result.push(/[0-9]?/);
              }
            }
            index += 1;
          } else if (part == 'mm') {
            result.push(/[0-5]/);
            result.push(/[0-9]/);
            index += 2;
          } else if (part == 's') {
            result.push(/[0-9]/);
            if (value.charAt(index) === '1' || value.charAt(index) === '2' || value.charAt(index) === '3' || value.charAt(index) === '4' || value.charAt(index) === '5') {
              if (value.charAt(index + 1) === '0' || value.charAt(index + 1) === '1' || value.charAt(index + 1) === '2' || value.charAt(index + 1) === '3' || value.charAt(index + 1) === '4' || value.charAt(index + 1) === '5' || value.charAt(index + 1) === '6' || value.charAt(index + 1) === '7' || value.charAt(index + 1) === '8' || value.charAt(index + 1) === '9') {
                result.push(/[0-9]/);
                index += 1;
              } else if (value.charAt(index + 1) === '') {
                result.push(/[0-9]?/);
              }
            }
            index += 1;
          } else if (part == 'ss') {
            result.push(/[0-5]/);
            result.push(/[0-9]/);
            index += 2;
          } else if (part == 'a') {
            result.push(/a|p/);
            result.push('m');
            index += 2;
          } else if (part == 'A') {
            result.push(/A|P/);
            result.push('M');
            index += 2;
          } else if (part == 'Z') {
            result.push(/\+|-/);
            result.push(/[0-1]/);
            if (value.charAt(index + 1) === '0') {
              result.push(/[0-9]/);
            } else if (value.charAt(index + 1) === '1') {
              result.push(value.charAt(index) === '+' ? /[0-4]/ : /[0-2]/);
            }
            result.push(':');
            result.push(/[0-5]/);
            result.push(/[0-9]/);
            index += 6;
          } else if (part == 'SSS') {
            result.push(/[0-9]/);
            result.push(/[0-9]/);
            result.push(/[0-9]/);
            index += 3;
          } else {
            result.push(part);
            index += part.length;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return result;
    }
  }
});
var entry$2 = {
  renderer: controlRenderer$2,
  tester: core.rankWith(2, core.isTimeControl)
};

var __vue_script__$2 = controlRenderer$2;
var __vue_render__$2 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-hover', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var hover = ref.hover;
        return [_c('v-text-field', _vm._g(_vm._b({
          directives: [{
            name: "disabled-icon-focus",
            rawName: "v-disabled-icon-focus"
          }, {
            name: "mask",
            rawName: "v-mask",
            value: _vm.mask,
            expression: "mask"
          }],
          "class": _vm.styles.control.input,
          attrs: {
            "id": _vm.control.id + '-input',
            "disabled": !_vm.control.enabled,
            "autofocus": _vm.appliedOptions.focus,
            "placeholder": _vm.appliedOptions.placeholder,
            "label": _vm.computedLabel,
            "hint": _vm.control.description,
            "persistent-hint": _vm.persistentHint(),
            "required": _vm.control.required,
            "error-messages": _vm.control.errors,
            "value": _vm.inputValue
          },
          on: {
            "input": _vm.onInputChange,
            "focus": function focus($event) {
              _vm.isFocused = true;
            },
            "blur": function blur($event) {
              _vm.isFocused = false;
            }
          }
        }, 'v-text-field', _vm.vuetifyProps('v-text-field'), false), _vm.onMenu), [_c('template', {
          slot: "append"
        }, [hover && _vm.control.enabled ? _c('v-icon', {
          attrs: {
            "tabindex": "-1"
          },
          on: {
            "click": _vm.clear
          }
        }, [_vm._v("$clear")]) : _vm._e()], 1), _vm._v(" "), _c('template', {
          slot: "prepend-inner"
        }, [_c('v-menu', _vm._b({
          ref: "menu",
          attrs: {
            "close-on-content-click": false,
            "return-value": _vm.pickerValue,
            "transition": "scale-transition",
            "offset-y": "",
            "min-width": "290px",
            "disabled": !_vm.control.enabled
          },
          on: {
            "update:returnValue": function updateReturnValue($event) {
              _vm.pickerValue = $event;
            },
            "update:return-value": function updateReturnValue($event) {
              _vm.pickerValue = $event;
            }
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(ref) {
              var onMenu = ref.on;
              return [_c('v-icon', _vm._g({
                attrs: {
                  "tabindex": "-1"
                }
              }, onMenu), [_vm._v(_vm._s(_vm.pickerIcon))])];
            }
          }], null, true),
          model: {
            value: _vm.showMenu,
            callback: function callback($$v) {
              _vm.showMenu = $$v;
            },
            expression: "showMenu"
          }
        }, 'v-menu', _vm.vuetifyProps('v-menu'), false), [_vm._v(" "), _vm.showMenu ? _c('v-time-picker', _vm._b({
          ref: "picker",
          attrs: {
            "min": _vm.minTime,
            "max": _vm.maxTime,
            "use-seconds": _vm.useSeconds,
            "format": _vm.ampm ? 'ampm' : '24hr'
          },
          on: {
            "click:minute": _vm.onMinute,
            "click:second": _vm.onSecond
          },
          model: {
            value: _vm.pickerValue,
            callback: function callback($$v) {
              _vm.pickerValue = $$v;
            },
            expression: "pickerValue"
          }
        }, 'v-time-picker', _vm.vuetifyProps('v-time-picker'), false), [_vm.showActions ? _c('v-btn', {
          attrs: {
            "text": ""
          },
          on: {
            "click": _vm.clear
          }
        }, [_vm._v("\n              " + _vm._s(_vm.clearLabel) + "\n            ")]) : _vm._e(), _vm._v(" "), _vm.showActions ? _c('v-spacer') : _vm._e(), _vm._v(" "), _vm.showActions ? _c('v-btn', {
          attrs: {
            "text": ""
          },
          on: {
            "click": function click($event) {
              _vm.showMenu = false;
            }
          }
        }, [_vm._v("\n              " + _vm._s(_vm.cancelLabel) + "\n            ")]) : _vm._e(), _vm._v(" "), _vm.showActions ? _c('v-btn', {
          attrs: {
            "text": "",
            "color": "primary"
          },
          on: {
            "click": _vm.okHandler
          }
        }, [_vm._v("\n              " + _vm._s(_vm.okLabel) + "\n            ")]) : _vm._e()], 1) : _vm._e()], 1)], 1)], 2)];
      }
    }])
  })], 1);
};
var __vue_staticRenderFns__$2 = [];
var __vue_inject_styles__$2 = undefined;
var __vue_scope_id__$2 = undefined;
var __vue_module_identifier__$2 = undefined;
var __vue_is_functional_template__$2 = false;
var __vue_component__$2 = normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

var controlRenderers = [entry$i, entry$h, entry$g, entry$f, entry$e, entry$d, entry$c, entry$b, entry$a, entry$9, entry$8, entry$7, entry$6, entry$5, entry$4, entry$3, entry$2];

var controlRenderer$1 = vue.defineComponent({
  name: 'autocomplete-enum-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VSelect: lib.VSelect,
    VAutocomplete: lib.VAutocomplete,
    VHover: lib.VHover
  },
  directives: {
    DisabledIconFocus: DisabledIconFocus
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var t = useTranslator();
    var control = useVuetifyControl(vue2.useJsonFormsEnumControl(props), function (value) {
      return value !== null ? value : undefined;
    }, 300);
    return _objectSpread2(_objectSpread2({}, control), {}, {
      t: t
    });
  }
});
var entry$1 = {
  renderer: controlRenderer$1,
  tester: core.rankWith(10, core.isEnumControl)
};

var __vue_script__$1 = controlRenderer$1;
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-hover', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var hover = ref.hover;
        return [_vm.appliedOptions.autocomplete === false ? _c('v-select', _vm._b({
          directives: [{
            name: "disabled-icon-focus",
            rawName: "v-disabled-icon-focus"
          }],
          "class": _vm.styles.control.input,
          attrs: {
            "id": _vm.control.id + '-input',
            "disabled": !_vm.control.enabled,
            "autofocus": _vm.appliedOptions.focus,
            "placeholder": _vm.appliedOptions.placeholder,
            "label": _vm.computedLabel,
            "hint": _vm.control.description,
            "persistent-hint": _vm.persistentHint(),
            "required": _vm.control.required,
            "error-messages": _vm.control.errors,
            "clearable": hover,
            "value": _vm.control.data,
            "items": _vm.control.options,
            "item-text": function itemText(item) {
              return _vm.t(item.label, item.label);
            },
            "item-value": "value"
          },
          on: {
            "change": _vm.onChange,
            "focus": function focus($event) {
              _vm.isFocused = true;
            },
            "blur": function blur($event) {
              _vm.isFocused = false;
            }
          }
        }, 'v-select', _vm.vuetifyProps('v-select'), false)) : _c('v-autocomplete', _vm._b({
          directives: [{
            name: "disabled-icon-focus",
            rawName: "v-disabled-icon-focus"
          }],
          "class": _vm.styles.control.input,
          attrs: {
            "id": _vm.control.id + '-input',
            "disabled": !_vm.control.enabled,
            "autofocus": _vm.appliedOptions.focus,
            "placeholder": _vm.appliedOptions.placeholder,
            "label": _vm.computedLabel,
            "hint": _vm.control.description,
            "persistent-hint": _vm.persistentHint(),
            "required": _vm.control.required,
            "error-messages": _vm.control.errors,
            "clearable": hover,
            "value": _vm.control.data,
            "items": _vm.control.options,
            "item-text": function itemText(item) {
              return _vm.t(item.label, item.label);
            },
            "item-value": "value"
          },
          on: {
            "input": _vm.onChange,
            "focus": function focus($event) {
              _vm.isFocused = true;
            },
            "blur": function blur($event) {
              _vm.isFocused = false;
            }
          }
        }, 'v-autocomplete', _vm.vuetifyProps('v-autocomplete'), false))];
      }
    }])
  })], 1);
};
var __vue_staticRenderFns__$1 = [];
var __vue_inject_styles__$1 = undefined;
var __vue_scope_id__$1 = undefined;
var __vue_module_identifier__$1 = undefined;
var __vue_is_functional_template__$1 = false;
var __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

var controlRenderer = vue.defineComponent({
  name: 'autocomplete-oneof-enum-control-renderer',
  components: {
    ControlWrapper: __vue_component__$j,
    VSelect: lib.VSelect,
    VAutocomplete: lib.VAutocomplete,
    VHover: lib.VHover
  },
  directives: {
    DisabledIconFocus: DisabledIconFocus
  },
  props: _objectSpread2({}, vue2.rendererProps()),
  setup: function setup(props) {
    var t = useTranslator();
    var control = useVuetifyControl(vue2.useJsonFormsOneOfEnumControl(props), function (value) {
      return value !== null ? value : undefined;
    }, 300);
    return _objectSpread2(_objectSpread2({}, control), {}, {
      t: t
    });
  }
});
var entry = {
  renderer: controlRenderer,
  tester: core.rankWith(10, core.isOneOfEnumControl)
};

var __vue_script__ = controlRenderer;
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('control-wrapper', _vm._b({
    attrs: {
      "styles": _vm.styles,
      "isFocused": _vm.isFocused,
      "appliedOptions": _vm.appliedOptions
    }
  }, 'control-wrapper', _vm.controlWrapper, false), [_c('v-hover', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var hover = ref.hover;
        return [_vm.appliedOptions.autocomplete === false ? _c('v-select', _vm._b({
          directives: [{
            name: "disabled-icon-focus",
            rawName: "v-disabled-icon-focus"
          }],
          "class": _vm.styles.control.input,
          attrs: {
            "id": _vm.control.id + '-input',
            "disabled": !_vm.control.enabled,
            "autofocus": _vm.appliedOptions.focus,
            "placeholder": _vm.appliedOptions.placeholder,
            "label": _vm.computedLabel,
            "hint": _vm.control.description,
            "persistent-hint": _vm.persistentHint(),
            "required": _vm.control.required,
            "error-messages": _vm.control.errors,
            "clearable": hover,
            "value": _vm.control.data,
            "items": _vm.control.options,
            "item-text": function itemText(item) {
              return _vm.t(item.label, item.label);
            },
            "item-value": "value"
          },
          on: {
            "change": _vm.onChange,
            "focus": function focus($event) {
              _vm.isFocused = true;
            },
            "blur": function blur($event) {
              _vm.isFocused = false;
            }
          }
        }, 'v-select', _vm.vuetifyProps('v-select'), false)) : _c('v-autocomplete', _vm._b({
          directives: [{
            name: "disabled-icon-focus",
            rawName: "v-disabled-icon-focus"
          }],
          "class": _vm.styles.control.input,
          attrs: {
            "id": _vm.control.id + '-input',
            "disabled": !_vm.control.enabled,
            "autofocus": _vm.appliedOptions.focus,
            "placeholder": _vm.appliedOptions.placeholder,
            "label": _vm.computedLabel,
            "hint": _vm.control.description,
            "persistent-hint": _vm.persistentHint(),
            "required": _vm.control.required,
            "error-messages": _vm.control.errors,
            "clearable": hover,
            "value": _vm.control.data,
            "items": _vm.control.options,
            "item-text": function itemText(item) {
              return _vm.t(item.label, item.label);
            },
            "item-value": "value"
          },
          on: {
            "input": _vm.onChange,
            "focus": function focus($event) {
              _vm.isFocused = true;
            },
            "blur": function blur($event) {
              _vm.isFocused = false;
            }
          }
        }, 'v-autocomplete', _vm.vuetifyProps('v-autocomplete'), false))];
      }
    }])
  })], 1);
};
var __vue_staticRenderFns__ = [];
var __vue_inject_styles__ = undefined;
var __vue_scope_id__ = undefined;
var __vue_module_identifier__ = undefined;
var __vue_is_functional_template__ = false;
var __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var extendedRenderers = [entry$1, entry];

var vuetifyRenderers = [].concat(_toConsumableArray(additionalRenderers), _toConsumableArray(arrayRenderers), _toConsumableArray(complexRenderers), _toConsumableArray(controlRenderers), _toConsumableArray(layoutRenderers));
var extendedVuetifyRenderers = [].concat(_toConsumableArray(extendedRenderers), _toConsumableArray(vuetifyRenderers));

exports.AllOfRenderer = __vue_component__$q;
exports.AnyOfRenderer = __vue_component__$p;
exports.AnyOfStringOrEnumControlRenderer = __vue_component__$i;
exports.ArrayControlRenderer = __vue_component__$o;
exports.ArrayLayoutRenderer = __vue_component__$y;
exports.AutocompleteEnumControlRenderer = __vue_component__$1;
exports.AutocompleteOneOfEnumControlRenderer = __vue_component__;
exports.BooleanControlRenderer = __vue_component__$h;
exports.BooleanToggleControlRenderer = __vue_component__$g;
exports.CategorizationRenderer = __vue_component__$x;
exports.CategorizationStepperRenderer = __vue_component__$w;
exports.ControlWrapper = __vue_component__$j;
exports.DateControlRenderer = __vue_component__$f;
exports.DateTimeControlRenderer = __vue_component__$e;
exports.DisabledIconFocus = DisabledIconFocus;
exports.EnumArrayRenderer = __vue_component__$n;
exports.EnumControlRenderer = __vue_component__$d;
exports.GroupRenderer = __vue_component__$v;
exports.HorizontalLayoutRenderer = __vue_component__$u;
exports.IntegerControlRenderer = __vue_component__$c;
exports.LabelRenderer = __vue_component__$C;
exports.ListWithDetailRenderer = __vue_component__$z;
exports.MultiStringControlRenderer = __vue_component__$b;
exports.NumberControlRenderer = __vue_component__$a;
exports.ObjectRenderer = __vue_component__$m;
exports.OneOfEnumControlRenderer = __vue_component__$9;
exports.OneOfRadioGroupControlRenderer = __vue_component__$8;
exports.OneOfRenderer = __vue_component__$l;
exports.OneOfTabRenderer = __vue_component__$k;
exports.PasswordControlRenderer = __vue_component__$7;
exports.RadioGroupControlRenderer = __vue_component__$6;
exports.SliderControlRenderer = __vue_component__$5;
exports.StringControlRenderer = __vue_component__$4;
exports.StringMaskControlRenderer = __vue_component__$3;
exports.TimeControlRenderer = __vue_component__$2;
exports.ValidationBadge = __vue_component__$B;
exports.ValidationIcon = __vue_component__$A;
exports.VerticalLayoutRenderer = __vue_component__$t;
exports.additionalRenderers = additionalRenderers;
exports.arrayLayoutRendererEntry = entry$v;
exports.arrayListRendererEntry = arrayListRendererEntry;
exports.arrayRenderers = arrayRenderers;
exports.categorizationRendererEntry = entry$u;
exports.categorizationStepperRendererEntry = entry$t;
exports.classes = classes;
exports.complexRenderers = complexRenderers;
exports.controlRenderers = controlRenderers;
exports.createAjv = createAjv;
exports.defaultStyles = defaultStyles;
exports.extendedRenderers = extendedRenderers;
exports.extendedVuetifyRenderers = extendedVuetifyRenderers;
exports.groupRendererEntry = entry$s;
exports.horizontalLayoutRendererEntry = entry$r;
exports.i18nDefaultMessages = i18nDefaultMessages;
exports.layoutRenderers = layoutRenderers;
exports.mergeStyles = mergeStyles;
exports.parseDateTime = parseDateTime;
exports.useAjv = useAjv;
exports.useComputedLabel = useComputedLabel;
exports.useControlAppliedOptions = useControlAppliedOptions;
exports.useNested = useNested;
exports.useStyles = useStyles;
exports.useTranslator = useTranslator;
exports.useVuetifyArrayControl = useVuetifyArrayControl;
exports.useVuetifyBasicControl = useVuetifyBasicControl;
exports.useVuetifyControl = useVuetifyControl;
exports.useVuetifyLabel = useVuetifyLabel;
exports.useVuetifyLayout = useVuetifyLayout;
exports.useVuetifyProps = useVuetifyProps;
exports.verticalLayoutRendererEntry = entry$q;
exports.vuetifyRenderers = vuetifyRenderers;
//# sourceMappingURL=jsonforms-vue2-vuetify.cjs.js.map
