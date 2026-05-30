'use strict';var globDynamicComponentEntry=globDynamicComponentEntry||'__Card__';
"use strict";
var __webpack_modules__ = ({
"(react:main-thread)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.lepus.cjs"() {
function main() {
    try {
        lynx.getJSContext().addEventListener('lynx.hmr.css', (event)=>{
            try {
                const { data: { cssId, content, deps, entry } } = event;
                // Update the css deps first because the css deps are updated actually.
                if (Array.isArray(deps[cssId])) deps[cssId].forEach((depCSSId)=>{
                    lynx.getDevtool().replaceStyleSheetByIdWithBase64(Number(depCSSId), content, entry);
                });
                lynx.getDevtool().replaceStyleSheetByIdWithBase64(Number(cssId), content, entry);
                __FlushElementTree();
            } catch (error) {
                // TODO: use webpack-dev-server logger
                console.error(error);
            }
        });
    } catch (error) {
        // TODO: use webpack-dev-server logger
        console.warn(`[HMR] no lynx.getJSContext() found, will not HMR CSS`);
        console.warn(error);
    }
}
main();
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cloneElement: () => (cloneElement),
  createElement: () => (createElement)
});
/* import */ var _jsx_runtime_index_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

const slice = /* @__PURE__ */ [].slice;
/**
 * Create an virtual node (used for JSX)
 * @param {VNode["type"]} type The node name or Component constructor for this
 * virtual node
 * @param {object | null | undefined} [props] The properties of the virtual node
 * @param {Array<import('.').ComponentChildren>} [children] The children of the
 * virtual node
 * @returns {VNode}
 */ function createElement(type, props, children) {
    let normalizedProps = {}, key, ref, i;
    for(i in props){
        if (i == 'key') key = props[i];
        else if (i == 'ref') ref = props[i];
        else normalizedProps[i] = props[i];
    }
    if (arguments.length > 2) normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
    // If a Component VNode, check for and apply defaultProps
    // Note: type may be undefined in development, must never error here.
    if (typeof type == 'function' && type.defaultProps != null) {
        for(i in type.defaultProps)if (normalizedProps[i] === undefined) normalizedProps[i] = type.defaultProps[i];
    }
    return (0,_jsx_runtime_index_js__rspack_import_0.jsx)(type, normalizedProps, key, ref, null);
}
/**
 * Clones the given VNode, optionally adding attributes/props and replacing its
 * children.
 * @param {VNode} vnode The virtual DOM element to clone
 * @param {object} props Attributes/props to add when cloning
 * @param {Array<ComponentChildren>} rest Any additional arguments will be used
 * as replacement children.
 * @returns {VNode}
 */ function cloneElement(vnode, props, children) {
    let normalizedProps = Object.assign({}, vnode.props), key, ref, i;
    let defaultProps;
    if (vnode.type && vnode.type.defaultProps) defaultProps = vnode.type.defaultProps;
    for(i in props){
        if (i == 'key') key = props[i];
        else if (i == 'ref') ref = props[i];
        else if (props[i] === undefined && defaultProps !== undefined) normalizedProps[i] = defaultProps[i];
        else normalizedProps[i] = props[i];
    }
    if (arguments.length > 2) normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
    return (0,_jsx_runtime_index_js__rspack_import_0.jsx)(vnode.type, normalizedProps, key || vnode.key, ref || vnode.ref, null);
}
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Fragment: () => (/* reexport safe */ preact__rspack_import_1.Fragment),
  jsx: () => (createVNode),
  jsxDEV: () => (createVNode),
  jsxs: () => (createVNode)
});
/* import */ var _lynx_js_react_internal__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js");
/* import */ var preact__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function createVNode(type, props, _key) {
    if (typeof type === 'string') {
        const r = new _lynx_js_react_internal__rspack_import_0.SnapshotInstance(type);
        r.props = props;
        r[_lynx_js_react_internal__rspack_import_0.CHILDREN] = null;
        r[_lynx_js_react_internal__rspack_import_0.PARENT] = null;
        r[_lynx_js_react_internal__rspack_import_0.DIFF] = 0;
        r[_lynx_js_react_internal__rspack_import_0.DOM] = null;
        r[_lynx_js_react_internal__rspack_import_0.DIRTY] = undefined;
        r[_lynx_js_react_internal__rspack_import_0.COMPONENT] = null;
        // r.__v = --vnodeId;
        r[_lynx_js_react_internal__rspack_import_0.INDEX] = -1;
        r[_lynx_js_react_internal__rspack_import_0.FLAGS] = 0;
        return r;
    } else if (typeof type === 'function') {
        let normalizedProps = props;
        // let ref;
        if ('ref' in normalizedProps) {
            normalizedProps = {};
            for(let i in props){
                if (i == 'ref') ;
                else normalizedProps[i] = props[i];
            }
        }
        let defaultProps;
        if (defaultProps = type.defaultProps) {
            for(let i in defaultProps)if (typeof normalizedProps[i] === 'undefined') normalizedProps[i] = defaultProps[i];
        }
        return {
            type,
            props: normalizedProps,
            [_lynx_js_react_internal__rspack_import_0.CHILDREN]: null,
            [_lynx_js_react_internal__rspack_import_0.PARENT]: null,
            [_lynx_js_react_internal__rspack_import_0.DIFF]: 0,
            [_lynx_js_react_internal__rspack_import_0.DOM]: null,
            [_lynx_js_react_internal__rspack_import_0.DIRTY]: void 0,
            [_lynx_js_react_internal__rspack_import_0.COMPONENT]: null,
            constructor: void 0,
            // __v: --vnodeId,
            [_lynx_js_react_internal__rspack_import_0.INDEX]: -1,
            [_lynx_js_react_internal__rspack_import_0.FLAGS]: 0
        };
    }
}


// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/commit-context.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  globalCommitContext: () => (globalCommitContext),
  resetGlobalCommitContext: () => (resetGlobalCommitContext),
  takeGlobalFlushOptions: () => (takeGlobalFlushOptions)
});
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const globalCommitContext = {
    ops: [],
    flushOptions: {}
};
function resetGlobalCommitContext() {
    globalCommitContext.ops = [];
    globalCommitContext.flushOptions = {};
    delete globalCommitContext.flowIds;
}
function takeGlobalFlushOptions() {
    const flushOptions = globalCommitContext.flushOptions;
    globalCommitContext.flushOptions = {};
    return flushOptions;
} //# sourceMappingURL=commit-context.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/forceRootRender.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runWithForceRootRender: () => (runWithForceRootRender)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* import */ var _shared_render_constants_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function runWithForceRootRender({ getRootVNode, setRootVNode, render }) {
    // Preact can skip root render if `_original` is unchanged; bumping it keeps
    // backend force renders aligned with Preact's own rerender path.
    const rootVNode = getRootVNode();
    if (rootVNode) {
        const newVNode = Object.assign({}, rootVNode);
        if (newVNode[_shared_render_constants_js__rspack_import_1.ORIGINAL] != null) {
            newVNode[_shared_render_constants_js__rspack_import_1.ORIGINAL] += 1;
            setRootVNode(newVNode);
        }
    }
    const oldDiff = preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.DIFF2];
    preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.DIFF2] = (vnode, oldVNode)=>{
        /* v8 ignore start */ if (oldDiff) oldDiff(vnode, oldVNode);
        /* v8 ignore stop */ const c = oldVNode[_shared_render_constants_js__rspack_import_1.COMPONENT];
        if (c) c[_shared_render_constants_js__rspack_import_1.FORCE] = true;
    };
    try {
        render();
    } finally{
        preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.DIFF2] = oldDiff;
    }
} //# sourceMappingURL=forceRootRender.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/globalProps.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createGlobalProps: () => (createGlobalProps),
  isGlobalPropsEventMode: () => (isGlobalPropsEventMode),
  updateGlobalProps: () => (updateGlobalProps)
});
/* import */ var _initData_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/initData.js");

function isGlobalPropsEventMode() {
    return  true && "reactive" === 'event';
}
function createGlobalProps(deps) {
    return isGlobalPropsEventMode() ? /* @__PURE__ */ (0,_initData_js__rspack_import_0.factory)(deps, '__globalProps', 'onGlobalPropsChanged') : /* @__PURE__ */ createFallbackGlobalProps(deps.useLynxGlobalEventListener);
}
function updateGlobalProps(newData, { forceRerender } = {}) {
    if (isGlobalPropsEventMode()) lynx.__globalProps = Object.assign({}, lynx.__globalProps, newData);
    else {
        Object.assign(lynx.__globalProps, newData);
        if (forceRerender) Promise.resolve().then(forceRerender);
    }
    lynxCoreInject.tt.GlobalEventEmitter.emit('onGlobalPropsChanged', [
        lynx.__globalProps
    ]);
}
function warnGlobalPropsMode() {}
function FallbackProvider({ children }) {
    warnGlobalPropsMode();
    return children;
}
function FallbackConsumer({ children }) {
    warnGlobalPropsMode();
    return children(lynx.__globalProps);
}
function useFallbackGlobalProps() {
    warnGlobalPropsMode();
    return lynx.__globalProps;
}
function createFallbackGlobalProps(useListener) {
    const useChanged = (callback)=>{};
    return {
        Provider: ()=>FallbackProvider,
        Consumer: ()=>FallbackConsumer,
        use: ()=>useFallbackGlobalProps,
        useChanged: ()=>useChanged
    };
} //# sourceMappingURL=globalProps.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/mainThread.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  installMainThreadHooks: () => (/* reexport safe */ _mainThreadImpl_js__rspack_import_0.installMainThreadHooks),
  useCallback: () => (/* reexport safe */ _mainThreadImpl_js__rspack_import_0.useCallback),
  useContext: () => (/* reexport safe */ _mainThreadImpl_js__rspack_import_0.useContext),
  useDebugValue: () => (/* reexport safe */ _mainThreadImpl_js__rspack_import_0.useDebugValue),
  useEffect: () => (/* reexport safe */ _mainThreadImpl_js__rspack_import_0.useEffect),
  useErrorBoundary: () => (/* reexport safe */ _mainThreadImpl_js__rspack_import_0.useErrorBoundary),
  useId: () => (/* reexport safe */ _mainThreadImpl_js__rspack_import_0.useId),
  useImperativeHandle: () => (/* reexport safe */ _mainThreadImpl_js__rspack_import_0.useImperativeHandle),
  useLayoutEffect: () => (/* reexport safe */ _mainThreadImpl_js__rspack_import_0.useLayoutEffect),
  useMemo: () => (/* reexport safe */ _mainThreadImpl_js__rspack_import_0.useMemo),
  useReducer: () => (/* reexport safe */ _mainThreadImpl_js__rspack_import_0.useReducer),
  useRef: () => (/* reexport safe */ _mainThreadImpl_js__rspack_import_0.useRef),
  useState: () => (/* reexport safe */ _mainThreadImpl_js__rspack_import_0.useState)
});
/* import */ var _mainThreadImpl_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/mainThreadImpl.js");
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

(0,_mainThreadImpl_js__rspack_import_0.installMainThreadHooks)();
 //# sourceMappingURL=mainThread.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/mainThreadImpl.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  installMainThreadHooks: () => (installMainThreadHooks),
  useCallback: () => (useCallback),
  useContext: () => (useContext),
  useDebugValue: () => (useDebugValue),
  useEffect: () => (useEffect),
  useErrorBoundary: () => (useErrorBoundary),
  useId: () => (useId),
  useImperativeHandle: () => (useImperativeHandle),
  useLayoutEffect: () => (useLayoutEffect),
  useMemo: () => (useMemo),
  useReducer: () => (useReducer),
  useRef: () => (useRef),
  useState: () => (useState)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* import */ var _shared_render_constants_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
/* import */ var _utils_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements hooks in the main thread.
 * This module is modified from preact/hooks
 *
 * internal-preact/hooks/dist/hooks.mjs
 */ 


let currentIndex;
let currentComponent;
let currentHook;
let hooksInstalled = false;
let oldBeforeDiff;
let oldBeforeRender;
let oldAfterDiff;
let oldRoot;
function installMainThreadHooks() {
    if (hooksInstalled) return;
    hooksInstalled = true;
    oldBeforeDiff = preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.DIFF];
    oldBeforeRender = preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.RENDER];
    oldAfterDiff = preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.DIFFED];
    oldRoot = preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.ROOT];
    preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.DIFF] = function(vnode) {
        currentComponent = null;
        if (oldBeforeDiff) oldBeforeDiff(vnode);
    };
    /* v8 ignore start */ preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.ROOT] = function(vnode, parentDom) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (vnode && parentDom[_shared_render_constants_js__rspack_import_1.CHILDREN] && parentDom[_shared_render_constants_js__rspack_import_1.CHILDREN][_shared_render_constants_js__rspack_import_1.MASK]) vnode[_shared_render_constants_js__rspack_import_1.MASK] = parentDom[_shared_render_constants_js__rspack_import_1.CHILDREN][_shared_render_constants_js__rspack_import_1.MASK];
        if (oldRoot) oldRoot(vnode, parentDom);
    };
    /* v8 ignore stop */ preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.RENDER] = function(vnode) {
        if (oldBeforeRender) oldBeforeRender(vnode);
        currentComponent = vnode[_shared_render_constants_js__rspack_import_1.COMPONENT];
        currentIndex = 0;
    };
    preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.DIFFED] = function(vnode) {
        if (oldAfterDiff) oldAfterDiff(vnode);
        currentComponent = null;
    };
}
function getHookState(index, type) {
    var _currentComponent_HOOKS;
    if (preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.HOOK]) preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.HOOK](currentComponent, index, currentHook || type);
    currentHook = 0;
    const hooks = (_currentComponent_HOOKS = currentComponent[_shared_render_constants_js__rspack_import_1.HOOKS]) !== null && _currentComponent_HOOKS !== void 0 ? _currentComponent_HOOKS : currentComponent[_shared_render_constants_js__rspack_import_1.HOOKS] = {
        [_shared_render_constants_js__rspack_import_1.LIST]: [],
        [_shared_render_constants_js__rspack_import_1.PENDING_EFFECTS]: []
    };
    if (index >= hooks[_shared_render_constants_js__rspack_import_1.LIST].length) hooks[_shared_render_constants_js__rspack_import_1.LIST].push({});
    return hooks[_shared_render_constants_js__rspack_import_1.LIST][index];
}
function invokeOrReturn(arg, f) {
    return typeof f == 'function' ? f(arg) : f;
}
function useState(initialState) {
    currentHook = 1;
    return useReducer(_utils_js__rspack_import_2.noop, initialState);
}
function useReducer(_reducer, initialState, init) {
    const hookState = getHookState(currentIndex++, 2);
    if (!hookState[_shared_render_constants_js__rspack_import_1.COMPONENT]) {
        hookState[_shared_render_constants_js__rspack_import_1.VALUE] = [
            /* v8 ignore start */ init ? init(initialState) : invokeOrReturn(undefined, initialState),
            /* v8 ignore stop */ function(_action) {
                if (true) console.error('Cannot update state in main thread!');
            }
        ];
        hookState[_shared_render_constants_js__rspack_import_1.COMPONENT] = currentComponent;
    }
    return hookState[_shared_render_constants_js__rspack_import_1.VALUE];
}
function useRef(initialValue) {
    currentHook = 5;
    return useMemo(function() {
        return {
            current: initialValue
        };
    }, []);
}
// used for first screen and need not to cache value by args
function useMemo(factory, _args) {
    const state = getHookState(currentIndex++, 7);
    state[_shared_render_constants_js__rspack_import_1.VALUE] = factory();
    return state[_shared_render_constants_js__rspack_import_1.VALUE];
}
function useCallback(callback, args) {
    currentHook = 8;
    return useMemo(function() {
        return callback;
    }, args);
}
function useContext(context) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const provider = currentComponent.context[context.__c];
    const state = getHookState(currentIndex++, 9);
    state['c'] = context;
    /* v8 ignore start */ if (!provider) return context.__;
    /* v8 ignore stop */ state[_shared_render_constants_js__rspack_import_1.VALUE] = true;
    return provider.props.value;
}
function useDebugValue(value, formatter) {
    if (preact__rspack_import_0.options.useDebugValue) /* v8 ignore start */ preact__rspack_import_0.options.useDebugValue(formatter ? formatter(value) : value);
}
function useErrorBoundary(cb) {
    const state = getHookState(currentIndex++, 10);
    state[_shared_render_constants_js__rspack_import_1.VALUE] = cb;
    return [
        undefined,
        _utils_js__rspack_import_2.noop
    ];
}
function useId() {
    const state = getHookState(currentIndex++, 11);
    if (!state[_shared_render_constants_js__rspack_import_1.VALUE]) {
        var _root_MASK;
        // Grab either the root node or the nearest async boundary node.
        let root = currentComponent[_shared_render_constants_js__rspack_import_1.VNODE];
        while(root !== null && !root[_shared_render_constants_js__rspack_import_1.MASK] && root[_shared_render_constants_js__rspack_import_1.PARENT] !== null)root = root[_shared_render_constants_js__rspack_import_1.PARENT];
        /**
         * init mask to [0, 0]
         * mask[0] will not change
         * mask[1] will auto increase
         */ const mask = (_root_MASK = root[_shared_render_constants_js__rspack_import_1.MASK]) !== null && _root_MASK !== void 0 ? _root_MASK : root[_shared_render_constants_js__rspack_import_1.MASK] = [
            0,
            0
        ];
        state[_shared_render_constants_js__rspack_import_1.VALUE] = 'P' + mask[0] + '-' + mask[1]++;
    }
    return state[_shared_render_constants_js__rspack_import_1.VALUE];
}
// background hooks
const useEffect = _utils_js__rspack_import_2.noop;
const useLayoutEffect = _utils_js__rspack_import_2.noop;
const useImperativeHandle = _utils_js__rspack_import_2.noop;
 //# sourceMappingURL=mainThreadImpl.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/react.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useCallback: () => (/* reexport safe */ preact_hooks__rspack_import_0.useCallback),
  useContext: () => (/* reexport safe */ preact_hooks__rspack_import_0.useContext),
  useDebugValue: () => (/* reexport safe */ preact_hooks__rspack_import_0.useDebugValue),
  useEffect: () => (useEffect),
  useErrorBoundary: () => (/* reexport safe */ preact_hooks__rspack_import_0.useErrorBoundary),
  useId: () => (/* reexport safe */ preact_hooks__rspack_import_0.useId),
  useImperativeHandle: () => (/* reexport safe */ preact_hooks__rspack_import_0.useImperativeHandle),
  useLayoutEffect: () => (useLayoutEffect),
  useMemo: () => (/* reexport safe */ preact_hooks__rspack_import_0.useMemo),
  useReducer: () => (/* reexport safe */ preact_hooks__rspack_import_0.useReducer),
  useRef: () => (/* reexport safe */ preact_hooks__rspack_import_0.useRef),
  useState: () => (useState)
});
/* import */ var preact_hooks__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/mainThread.js");
/* import */ var _shared_profile_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


// Cache profiled wrappers by the original preact setter to preserve stable
// identity without introducing extra hooks in component render flow.
/* @__PURE__ */ _shared_profile_js__rspack_import_1.isProfiling ? new WeakMap() : undefined;
const useState = preact_hooks__rspack_import_0.useState;
/**
 * Accepts a function that contains imperative, possibly effectful code.
 * The effects run after main thread dom update without blocking it.
 *
 * @param effect - Imperative function that can return a cleanup function
 * @param deps - If present, effect will only activate if the values in the list change (using ===).
 *
 * @public
 */ const useEffect = preact_hooks__rspack_import_0.useEffect;
/**
 * `useLayoutEffect` is now an alias of `useEffect`. Use `useEffect` instead.
 *
 * Accepts a function that contains imperative, possibly effectful code. The effects run after main thread dom update without blocking it.
 *
 * @param effect - Imperative function that can return a cleanup function
 * @param deps - If present, effect will only activate if the values in the list change (using ===).
 *
 * @public
 *
 * @deprecated `useLayoutEffect` in the background thread cannot offer the precise timing for reading layout information and synchronously re-render, which is different from React.
 */ const useLayoutEffect = preact_hooks__rspack_import_0.useEffect;
 //# sourceMappingURL=react.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/useLynxGlobalEventListener.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useLynxGlobalEventListener: () => (useLynxGlobalEventListener)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * `useLynxGlobalEventListener` helps you `addListener` as early as possible.
 *
 * @example
 *
 * Use this hooks to listen to event 'exposure' and event 'disexposure'
 *
 * ```jsx
 * function App() {
 *   useLynxGlobalEventListener('exposure', (e) => {
 *     console.log("exposure", e)
 *   })
 *   useLynxGlobalEventListener('disexposure', (e) => {
 *     console.log("disexposure", e)
 *   })
 *   return (
 *     <view
 *       style='width: 100px; height: 100px; background-color: red;'
 *       exposure-id='a'
 *     />
 *   )
 * }
 * ```
 *
 * @param eventName - Event name to listen
 * @param listener - Event handler
 * @public
 */ function useLynxGlobalEventListener() {} //# sourceMappingURL=useLynxGlobalEventListener.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/initData.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  factory: () => (factory),
  withInitDataInState: () => (withInitDataInState)
});
/* import */ var _commit_context_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/commit-context.js");

// for better reuse if runtime is changed
function factory({ createContext, useState, createElement, useLynxGlobalEventListener: useListener }, prop, eventName) {
    const Context = createContext({});
    const Provider = ({ children })=>{
        const [__, set] = useState(lynx[prop]);
        const handleChange = ()=>{
            if (prop === '__initData') _commit_context_js__rspack_import_0.globalCommitContext.flushOptions.triggerDataUpdated = true;
            set(lynx[prop]);
        };
        useChanged(handleChange);
        return createElement(Context.Provider, {
            value: __
        }, children);
    };
    const Consumer = Context.Consumer;
    const use = ()=>{
        const [__, set] = useState(lynx[prop]);
        useChanged(()=>{
            if (prop === '__initData') _commit_context_js__rspack_import_0.globalCommitContext.flushOptions.triggerDataUpdated = true;
            set(lynx[prop]);
        });
        return __;
    };
    const useChanged = (callback)=>{};
    return {
        /* v8 ignore next */ Context: ()=>Context,
        Provider: ()=>Provider,
        Consumer: ()=>Consumer,
        use: ()=>use,
        useChanged: ()=>useChanged
    };
}
/**
 * Higher-Order Component (HOC) that injects `initData` into the state of the given class component.
 *
 * This HOC checks if the provided component is a class component. If it is, it wraps the component
 * and injects the `initData` into its state. It also adds a listener
 * to update the state when data changes, and removes the listener when the component unmounts.
 *
 * @typeParam P - The type of the props of the wrapped component.
 * @typeParam S - The type of the state of the wrapped component.
 *
 * @param App - The class component to be wrapped by the HOC.
 *
 * @returns The original component if it is not a class component, otherwise a new class component
 *          with `initData` injection and state update functionality.
 *
 * @example
 * ```typescript
 * class App extends React.Component<MyProps, MyState> {
 *   // component implementation
 * }
 *
 * export default withInitDataInState(App);
 * ```
 * @public
 */ function withInitDataInState(App) {
    const isClassComponent = 'prototype' in App && 'render' in App.prototype;
    /* v8 ignore next 4 */ if (!isClassComponent) return App;
    class C extends App {
        componentWillUnmount() {
            var _super_componentWillUnmount;
            (_super_componentWillUnmount = super.componentWillUnmount) === null || _super_componentWillUnmount === void 0 ? void 0 : _super_componentWillUnmount.call(this);
        }
        constructor(props){
            super(props);
            this.state = {
                ...this.state,
                ...lynx.__initData
            };
        }
    }
    return C;
} //# sourceMappingURL=initData.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/lynx-data-processors.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createProcessData: () => (createProcessData)
});
/* import */ var _shared_profile_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");

function createProcessData(dataProcessorDefinition) {
    let hasDefaultDataProcessorExecuted = false;
    return (data, processorName)=>{
        if (true) (0,_shared_profile_js__rspack_import_0.profileStart)('processData');
        let result;
        try {
            var _ref, _ref1;
            var _dataProcessorDefinition_dataProcessors_processorName, _dataProcessorDefinition_dataProcessors, _dataProcessorDefinition_defaultDataProcessor;
            if (processorName) result = (_ref = dataProcessorDefinition === null || dataProcessorDefinition === void 0 ? void 0 : (_dataProcessorDefinition_dataProcessors = dataProcessorDefinition.dataProcessors) === null || _dataProcessorDefinition_dataProcessors === void 0 ? void 0 : (_dataProcessorDefinition_dataProcessors_processorName = _dataProcessorDefinition_dataProcessors[processorName]) === null || _dataProcessorDefinition_dataProcessors_processorName === void 0 ? void 0 : _dataProcessorDefinition_dataProcessors_processorName.call(_dataProcessorDefinition_dataProcessors, data)) !== null && _ref !== void 0 ? _ref : data;
            else result = (_ref1 = dataProcessorDefinition === null || dataProcessorDefinition === void 0 ? void 0 : (_dataProcessorDefinition_defaultDataProcessor = dataProcessorDefinition.defaultDataProcessor) === null || _dataProcessorDefinition_defaultDataProcessor === void 0 ? void 0 : _dataProcessorDefinition_defaultDataProcessor.call(dataProcessorDefinition, data)) !== null && _ref1 !== void 0 ? _ref1 : data;
        } catch (error) {
            lynx.reportError(error);
            result = {};
        }
        if (true) (0,_shared_profile_js__rspack_import_0.profileEnd)();
        if (!hasDefaultDataProcessorExecuted) result = appendInitDataMetadata(result);
        if (!processorName) hasDefaultDataProcessorExecuted = true;
        return result;
    };
}
function appendInitDataMetadata(result) {
    // @ts-expect-error todo: add types to i18n logic
    const i18nResourceTranslation = globalThis.__I18N_RESOURCE_TRANSLATION__;
    if (i18nResourceTranslation) result = {
        ...result,
        __I18N_RESOURCE_TRANSLATION__: i18nResourceTranslation
    };
    // @ts-expect-error todo: add types to __EXTRACT_STR__
    if (false) {}
    return result;
} //# sourceMappingURL=lynx-data-processors.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/lynx-page-data.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  applyUpdatePageData: () => (applyUpdatePageData)
});
/* import */ var _utils_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function applyUpdatePageData(data, options) {
    if (options === null || options === void 0 ? void 0 : options.resetPageData) lynx.__initData = {};
    if (typeof data == 'object' && data !== null && !(0,_utils_js__rspack_import_0.isEmptyObject)(data)) {
        var _lynx, ___initData;
        (___initData = (_lynx = lynx).__initData) !== null && ___initData !== void 0 ? ___initData : _lynx.__initData = {};
        Object.assign(lynx.__initData, data);
    }
} //# sourceMappingURL=lynx-page-data.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/ref.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OrdinaryRefEffectQueue: () => (OrdinaryRefEffectQueue),
  SelectorRefProxy: () => (SelectorRefProxy),
  applyOrdinaryRef: () => (applyOrdinaryRef),
  assertValidRef: () => (assertValidRef),
  normalizeRefValue: () => (normalizeRefValue)
});
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function assertValidRef(value) {
    if (typeof value === 'function' || typeof value === 'object' && value !== null && 'current' in value) return value;
    throw new Error(`Elements' "ref" property should be a function, or an object created ` + `by createRef(), but got [${typeof value}] instead`);
}
function normalizeRefValue(value) {
    if (value === null || value === undefined) return value;
    return assertValidRef(value);
}
function applyOrdinaryRef(ref, value) {
    try {
        if (typeof ref === 'function') {
            const cleanup = ref._unmount;
            const hasCleanup = typeof cleanup === 'function';
            if (hasCleanup) cleanup();
            ref._unmount = undefined;
            if (!hasCleanup || value !== null) {
                const nextCleanup = ref(value);
                if (typeof nextCleanup === 'function') ref._unmount = nextCleanup;
            }
        } else ref.current = value;
    } catch (error) {
        lynx.reportError(error);
    }
}
// Keeps the Snapshot/ET ordinary ref ordering shared without owning backend
// timing: each backend decides when to queue/flush and how to build the proxy.
class OrdinaryRefEffectQueue {
    queue(oldRef, newRef, token) {
        if (oldRef === newRef) return;
        if (oldRef) this.refsToClear.push(oldRef);
        if (newRef) this.refsToApply.push([
            newRef,
            token
        ]);
    }
    flush(createValue) {
        // Ref callbacks can synchronously trigger more work; detach this batch from
        // the queue before invoking user code so later effects stay in the next batch.
        const refsToClearNow = this.refsToClear.splice(0);
        const refsToApplyNow = this.refsToApply.splice(0);
        for (const ref of refsToClearNow)applyOrdinaryRef(ref, null);
        for (const [ref, token] of refsToApplyNow)applyOrdinaryRef(ref, createValue(token));
    }
    clear() {
        this.refsToClear.length = 0;
        this.refsToApply.length = 0;
    }
    hasPending() {
        return this.refsToClear.length > 0 || this.refsToApply.length > 0;
    }
    constructor(){
        this.refsToClear = [];
        this.refsToApply = [];
    }
}
class SelectorRefProxy {
    createProxy() {
        return new Proxy(this, {
            get: (target, prop, receiver)=>{
                if (typeof prop === 'symbol' || prop === 'then' || prop in target || typeof prop !== 'string') return Reflect.get(target, prop, receiver);
                return (...args)=>{
                    return target.createProxyTarget().setTask(prop, args);
                };
            }
        });
    }
    setTask(method, args) {
        this.task = (nodesRef)=>{
            const nodesRefMethod = nodesRef[method];
            return nodesRefMethod.apply(nodesRef, args);
        };
        return this;
    }
    exec() {
        this.runOrDelay(()=>{
            this.task(lynx.createSelectorQuery().select(this.selector)).exec();
        });
    }
} //# sourceMappingURL=ref.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/reload-version.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getReloadVersion: () => (getReloadVersion),
  increaseReloadVersion: () => (increaseReloadVersion)
});
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
let reloadVersion = 0;
function getReloadVersion() {
    return reloadVersion;
}
function increaseReloadVersion() {
    return ++reloadVersion;
} //# sourceMappingURL=reload-version.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Children: () => (/* reexport safe */ preact_compat__rspack_import_2.Children),
  Component: () => (/* reexport safe */ preact__rspack_import_7.Component),
  Fragment: () => (/* reexport safe */ preact_compat__rspack_import_2.Fragment),
  GlobalPropsConsumer: () => (/* reexport safe */ _lynx_api_js__rspack_import_8.GlobalPropsConsumer),
  GlobalPropsProvider: () => (/* reexport safe */ _lynx_api_js__rspack_import_8.GlobalPropsProvider),
  InitDataConsumer: () => (/* reexport safe */ _lynx_api_js__rspack_import_8.InitDataConsumer),
  InitDataProvider: () => (/* reexport safe */ _lynx_api_js__rspack_import_8.InitDataProvider),
  MainThreadRef: () => (/* reexport safe */ _lynx_api_js__rspack_import_8.MainThreadRef),
  PureComponent: () => (/* reexport safe */ preact_compat__rspack_import_2.PureComponent),
  Suspense: () => (/* reexport safe */ _snapshot_lynx_suspense_js__rspack_import_6.Suspense),
  cloneElement: () => (/* reexport safe */ preact_compat__rspack_import_2.cloneElement),
  createContext: () => (/* reexport safe */ preact__rspack_import_7.createContext),
  createElement: () => (/* reexport safe */ _snapshot_lynx_element_js__rspack_import_4.createElement),
  createPortal: () => (/* reexport safe */ _snapshot_lynx_portals_js__rspack_import_5.createPortal),
  createRef: () => (/* reexport safe */ preact_compat__rspack_import_2.createRef),
  "default": () => (__rspack_default_export),
  forwardRef: () => (/* reexport safe */ preact_compat__rspack_import_2.forwardRef),
  isValidElement: () => (/* reexport safe */ preact_compat__rspack_import_2.isValidElement),
  lazy: () => (/* reexport safe */ preact_compat__rspack_import_2.lazy),
  memo: () => (/* reexport safe */ preact_compat__rspack_import_2.memo),
  root: () => (/* reexport safe */ _lynx_api_js__rspack_import_8.root),
  runOnBackground: () => (/* reexport safe */ _lynx_api_js__rspack_import_8.runOnBackground),
  runOnMainThread: () => (/* reexport safe */ _lynx_api_js__rspack_import_8.runOnMainThread),
  useCallback: () => (/* reexport safe */ _core_hooks_react_js__rspack_import_3.useCallback),
  useContext: () => (/* reexport safe */ _core_hooks_react_js__rspack_import_3.useContext),
  useDebugValue: () => (/* reexport safe */ _core_hooks_react_js__rspack_import_3.useDebugValue),
  useEffect: () => (/* reexport safe */ _core_hooks_react_js__rspack_import_3.useEffect),
  useErrorBoundary: () => (/* reexport safe */ _core_hooks_react_js__rspack_import_3.useErrorBoundary),
  useGlobalProps: () => (/* reexport safe */ _lynx_api_js__rspack_import_8.useGlobalProps),
  useGlobalPropsChanged: () => (/* reexport safe */ _lynx_api_js__rspack_import_8.useGlobalPropsChanged),
  useId: () => (/* reexport safe */ _core_hooks_react_js__rspack_import_3.useId),
  useImperativeHandle: () => (/* reexport safe */ _core_hooks_react_js__rspack_import_3.useImperativeHandle),
  useInitData: () => (/* reexport safe */ _lynx_api_js__rspack_import_8.useInitData),
  useInitDataChanged: () => (/* reexport safe */ _lynx_api_js__rspack_import_8.useInitDataChanged),
  useLayoutEffect: () => (/* reexport safe */ _core_hooks_react_js__rspack_import_3.useLayoutEffect),
  useLynxGlobalEventListener: () => (/* reexport safe */ _lynx_api_js__rspack_import_8.useLynxGlobalEventListener),
  useMainThreadRef: () => (/* reexport safe */ _lynx_api_js__rspack_import_8.useMainThreadRef),
  useMemo: () => (/* reexport safe */ _core_hooks_react_js__rspack_import_3.useMemo),
  useReducer: () => (/* reexport safe */ _core_hooks_react_js__rspack_import_3.useReducer),
  useRef: () => (/* reexport safe */ _core_hooks_react_js__rspack_import_3.useRef),
  useState: () => (/* reexport safe */ _core_hooks_react_js__rspack_import_3.useState),
  useSyncExternalStore: () => (/* reexport safe */ preact_compat__rspack_import_2.useSyncExternalStore),
  withInitDataInState: () => (/* reexport safe */ _lynx_api_js__rspack_import_8.withInitDataInState)
});
/* import */ var _lynx_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx.js");
/* import */ var _snapshot_lynx_component_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/component.js");
/* import */ var _snapshot_lynx_component_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_snapshot_lynx_component_js__rspack_import_1);
/* import */ var preact_compat__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/preact/compat/dist/compat.mjs");
/* import */ var _core_hooks_react_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/react.js");
/* import */ var _snapshot_lynx_element_js__rspack_import_4 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/element.js");
/* import */ var _snapshot_lynx_portals_js__rspack_import_5 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/portals.js");
/* import */ var _snapshot_lynx_suspense_js__rspack_import_6 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/suspense.js");
/* import */ var preact__rspack_import_7 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* import */ var _lynx_api_js__rspack_import_8 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx-api.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.










/**
 * @internal
 */ /* export default */ const __rspack_default_export = ({
    // hooks
    useState: _core_hooks_react_js__rspack_import_3.useState,
    useReducer: _core_hooks_react_js__rspack_import_3.useReducer,
    useEffect: _core_hooks_react_js__rspack_import_3.useEffect,
    useLayoutEffect: _core_hooks_react_js__rspack_import_3.useLayoutEffect,
    useRef: _core_hooks_react_js__rspack_import_3.useRef,
    useImperativeHandle: _core_hooks_react_js__rspack_import_3.useImperativeHandle,
    useMemo: _core_hooks_react_js__rspack_import_3.useMemo,
    useCallback: _core_hooks_react_js__rspack_import_3.useCallback,
    useContext: _core_hooks_react_js__rspack_import_3.useContext,
    useDebugValue: _core_hooks_react_js__rspack_import_3.useDebugValue,
    useSyncExternalStore: preact_compat__rspack_import_2.useSyncExternalStore,
    createContext: preact_compat__rspack_import_2.createContext,
    createRef: preact_compat__rspack_import_2.createRef,
    Fragment: preact_compat__rspack_import_2.Fragment,
    isValidElement: preact_compat__rspack_import_2.isValidElement,
    Children: preact_compat__rspack_import_2.Children,
    Component: preact_compat__rspack_import_2.Component,
    PureComponent: preact_compat__rspack_import_2.PureComponent,
    memo: preact_compat__rspack_import_2.memo,
    forwardRef: preact_compat__rspack_import_2.forwardRef,
    Suspense: _snapshot_lynx_suspense_js__rspack_import_6.Suspense,
    lazy: preact_compat__rspack_import_2.lazy,
    createElement: _snapshot_lynx_element_js__rspack_import_4.createElement,
    createPortal: _snapshot_lynx_portals_js__rspack_import_5.createPortal
});

 //# sourceMappingURL=index.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BackgroundSnapshotInstance: () => (/* reexport safe */ _snapshot_snapshot_backgroundSnapshot_js__rspack_import_6.BackgroundSnapshotInstance),
  CHILDREN: () => (/* reexport safe */ _shared_render_constants_js__rspack_import_11.CHILDREN),
  COMPONENT: () => (/* reexport safe */ _shared_render_constants_js__rspack_import_11.COMPONENT),
  Component: () => (/* reexport safe */ preact__rspack_import_19.Component),
  DIFF: () => (/* reexport safe */ _shared_render_constants_js__rspack_import_11.DIFF),
  DIRTY: () => (/* reexport safe */ _shared_render_constants_js__rspack_import_11.DIRTY),
  DOM: () => (/* reexport safe */ _shared_render_constants_js__rspack_import_11.DOM),
  FLAGS: () => (/* reexport safe */ _shared_render_constants_js__rspack_import_11.FLAGS),
  INDEX: () => (/* reexport safe */ _shared_render_constants_js__rspack_import_11.INDEX),
  PARENT: () => (/* reexport safe */ _shared_render_constants_js__rspack_import_11.PARENT),
  SnapshotInstance: () => (/* reexport safe */ _snapshot_snapshot_snapshot_js__rspack_import_10.SnapshotInstance),
  __ComponentIsPolyfill: () => (__ComponentIsPolyfill),
  __DynamicPartChildren: () => (__DynamicPartChildren),
  __DynamicPartChildren_0: () => (/* reexport safe */ _snapshot_snapshot_dynamicPartType_js__rspack_import_8.__DynamicPartChildren_0),
  __DynamicPartListChildren: () => (__DynamicPartListChildren),
  __DynamicPartListSlotV2: () => (__DynamicPartListSlotV2),
  __DynamicPartMultiChildren: () => (__DynamicPartMultiChildren),
  __DynamicPartSlot: () => (__DynamicPartSlot),
  __DynamicPartSlotV2: () => (__DynamicPartSlotV2),
  __DynamicPartSlotV2_0: () => (/* reexport safe */ _snapshot_snapshot_dynamicPartType_js__rspack_import_8.__DynamicPartSlotV2_0),
  __dynamicImport: () => (/* reexport safe */ _snapshot_lynx_dynamic_js_js__rspack_import_20.__dynamicImport),
  __page: () => (/* reexport safe */ _snapshot_snapshot_definition_js__rspack_import_7.__page),
  __pageId: () => (/* reexport safe */ _snapshot_snapshot_definition_js__rspack_import_7.__pageId),
  __root: () => (/* reexport safe */ _root_js__rspack_import_3.__root),
  createSnapshot: () => (/* reexport safe */ _snapshot_snapshot_definition_js__rspack_import_7.createSnapshot),
  loadDynamicJS: () => (/* reexport safe */ _snapshot_lynx_dynamic_js_js__rspack_import_20.loadDynamicJS),
  loadLazyBundle: () => (/* reexport safe */ _snapshot_lynx_lazy_bundle_js__rspack_import_5.loadLazyBundle),
  loadWorkletRuntime: () => (/* reexport safe */ _lynx_js_react_worklet_runtime_bindings__rspack_import_25.loadWorkletRuntime),
  options: () => (/* reexport safe */ preact__rspack_import_19.options),
  process: () => (/* reexport safe */ preact__rspack_import_19.process),
  registerWorkletOnBackground: () => (/* reexport safe */ _snapshot_worklet_hmr_js__rspack_import_24.registerWorkletOnBackground),
  snapshotCreateList: () => (/* reexport safe */ _snapshot_snapshot_list_js__rspack_import_9.snapshotCreateList),
  snapshotCreatorMap: () => (/* reexport safe */ _snapshot_snapshot_snapshot_js__rspack_import_10.snapshotCreatorMap),
  snapshotManager: () => (/* reexport safe */ _snapshot_snapshot_definition_js__rspack_import_7.snapshotManager),
  transformRef: () => (/* reexport safe */ _snapshot_snapshot_ref_js__rspack_import_14.transformRef),
  transformToWorklet: () => (/* reexport safe */ _snapshot_worklet_call_transformToWorklet_js__rspack_import_23.transformToWorklet),
  updateEvent: () => (/* reexport safe */ _snapshot_snapshot_event_js__rspack_import_13.updateEvent),
  updateGesture: () => (/* reexport safe */ _snapshot_snapshot_gesture_js__rspack_import_17.updateGesture),
  updateListItemPlatformInfo: () => (/* reexport safe */ _snapshot_snapshot_platformInfo_js__rspack_import_18.updateListItemPlatformInfo),
  updateRef: () => (/* reexport safe */ _snapshot_snapshot_ref_js__rspack_import_14.updateRef),
  updateSpread: () => (/* reexport safe */ _snapshot_snapshot_spread_js__rspack_import_12.updateSpread),
  updateWorkletEvent: () => (/* reexport safe */ _snapshot_snapshot_workletEvent_js__rspack_import_15.updateWorkletEvent),
  updateWorkletRef: () => (/* reexport safe */ _snapshot_snapshot_workletRef_js__rspack_import_16.updateWorkletRef),
  withInitDataInState: () => (/* reexport safe */ _core_initData_js__rspack_import_21.withInitDataInState),
  wrapWithLynxComponent: () => (/* reexport safe */ _snapshot_compat_lynxComponent_js__rspack_import_22.wrapWithLynxComponent)
});
/* import */ var preact_compat__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/compat/dist/compat.mjs");
/* import */ var _lynx_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx.js");
/* import */ var _core_hooks_react_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/react.js");
/* import */ var _root_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* import */ var _snapshot_compat_componentIs_js__rspack_import_4 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/compat/componentIs.js");
/* import */ var _snapshot_lynx_lazy_bundle_js__rspack_import_5 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/lazy-bundle.js");
/* import */ var _snapshot_snapshot_backgroundSnapshot_js__rspack_import_6 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/backgroundSnapshot.js");
/* import */ var _snapshot_snapshot_definition_js__rspack_import_7 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/definition.js");
/* import */ var _snapshot_snapshot_dynamicPartType_js__rspack_import_8 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/dynamicPartType.js");
/* import */ var _snapshot_snapshot_list_js__rspack_import_9 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/list.js");
/* import */ var _snapshot_snapshot_snapshot_js__rspack_import_10 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
/* import */ var _shared_render_constants_js__rspack_import_11 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
/* import */ var _snapshot_snapshot_spread_js__rspack_import_12 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/spread.js");
/* import */ var _snapshot_snapshot_event_js__rspack_import_13 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/event.js");
/* import */ var _snapshot_snapshot_ref_js__rspack_import_14 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/ref.js");
/* import */ var _snapshot_snapshot_workletEvent_js__rspack_import_15 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletEvent.js");
/* import */ var _snapshot_snapshot_workletRef_js__rspack_import_16 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletRef.js");
/* import */ var _snapshot_snapshot_gesture_js__rspack_import_17 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/gesture.js");
/* import */ var _snapshot_snapshot_platformInfo_js__rspack_import_18 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/platformInfo.js");
/* import */ var preact__rspack_import_19 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* import */ var _snapshot_lynx_dynamic_js_js__rspack_import_20 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/dynamic-js.js");
/* import */ var _core_initData_js__rspack_import_21 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/initData.js");
/* import */ var _snapshot_compat_lynxComponent_js__rspack_import_22 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/compat/lynxComponent.js");
/* import */ var _snapshot_worklet_call_transformToWorklet_js__rspack_import_23 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/transformToWorklet.js");
/* import */ var _snapshot_worklet_hmr_js__rspack_import_24 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/hmr.js");
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_25 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.














const __DynamicPartSlot = _snapshot_snapshot_dynamicPartType_js__rspack_import_8.DynamicPartType.Slot;
const __DynamicPartMultiChildren = _snapshot_snapshot_dynamicPartType_js__rspack_import_8.DynamicPartType.MultiChildren;
const __DynamicPartChildren = _snapshot_snapshot_dynamicPartType_js__rspack_import_8.DynamicPartType.Children;
const __DynamicPartListChildren = _snapshot_snapshot_dynamicPartType_js__rspack_import_8.DynamicPartType.ListChildren;

// v2 slot
const __DynamicPartSlotV2 = _snapshot_snapshot_dynamicPartType_js__rspack_import_8.DynamicPartType.SlotV2;
const __DynamicPartListSlotV2 = _snapshot_snapshot_dynamicPartType_js__rspack_import_8.DynamicPartType.ListSlotV2;











/**
 * @internal a polyfill for <component is=? />
 */ const __ComponentIsPolyfill = /* @__PURE__ */ (0,_snapshot_compat_componentIs_js__rspack_import_4.factory)({
    Suspense: preact_compat__rspack_import_0.Suspense,
    lazy: preact_compat__rspack_import_0.lazy,
    createElement: preact_compat__rspack_import_0.createElement,
    useMemo: _core_hooks_react_js__rspack_import_2.useMemo
}, _snapshot_lynx_lazy_bundle_js__rspack_import_5.loadLazyBundle);



 //# sourceMappingURL=internal.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx-api.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GlobalPropsConsumer: () => (GlobalPropsConsumer),
  GlobalPropsProvider: () => (GlobalPropsProvider),
  InitDataConsumer: () => (InitDataConsumer),
  InitDataProvider: () => (InitDataProvider),
  MainThreadRef: () => (/* reexport safe */ _snapshot_worklet_ref_workletRef_js__rspack_import_8.MainThreadRef),
  root: () => (root),
  runOnBackground: () => (/* reexport safe */ _snapshot_worklet_call_runOnBackground_js__rspack_import_6.runOnBackground),
  runOnMainThread: () => (/* reexport safe */ _snapshot_worklet_call_runOnMainThread_js__rspack_import_7.runOnMainThread),
  useGlobalProps: () => (useGlobalProps),
  useGlobalPropsChanged: () => (useGlobalPropsChanged),
  useInitData: () => (useInitData),
  useInitDataChanged: () => (useInitDataChanged),
  useLynxGlobalEventListener: () => (/* reexport safe */ _core_hooks_useLynxGlobalEventListener_js__rspack_import_3.useLynxGlobalEventListener),
  useMainThreadRef: () => (/* reexport safe */ _snapshot_worklet_ref_workletRef_js__rspack_import_8.useMainThreadRef),
  withInitDataInState: () => (/* reexport safe */ _core_initData_js__rspack_import_4.withInitDataInState)
});
/* import */ var preact_compat__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/compat/dist/compat.mjs");
/* import */ var preact_hooks__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/mainThread.js");
/* import */ var _core_globalProps_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/globalProps.js");
/* import */ var _core_hooks_useLynxGlobalEventListener_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/useLynxGlobalEventListener.js");
/* import */ var _core_initData_js__rspack_import_4 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/initData.js");
/* import */ var _root_js__rspack_import_5 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* import */ var _snapshot_worklet_call_runOnBackground_js__rspack_import_6 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/runOnBackground.js");
/* import */ var _snapshot_worklet_call_runOnMainThread_js__rspack_import_7 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/runOnMainThread.js");
/* import */ var _snapshot_worklet_ref_workletRef_js__rspack_import_8 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/workletRef.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.






/**
 * The default and only root of ReactLynx for you to render JSX
 * @example
 * ```ts
 * import { root } from "@lynx-js/react"
 * ```
 *
 * @public
 */ const root = {
    render: (jsx)=>{
        _root_js__rspack_import_5.__root.__jsx = jsx;
    },
    /* v8 ignore next 3 */ registerDataProcessors: (dataProcessorDefinition)=>{
        lynx.registerDataProcessors(dataProcessorDefinition);
    }
};
const _InitData = /* @__PURE__ */ (0,_core_initData_js__rspack_import_4.factory)({
    createContext: preact_compat__rspack_import_0.createContext,
    useState: preact_hooks__rspack_import_1.useState,
    createElement: preact_compat__rspack_import_0.createElement,
    useLynxGlobalEventListener: _core_hooks_useLynxGlobalEventListener_js__rspack_import_3.useLynxGlobalEventListener
}, '__initData', 'onDataChanged');
/**
 * The {@link https://react.dev/reference/react/createContext#provider | Provider} Component that provide `initData`,
 * you must wrap your JSX inside it
 * @group Components
 *
 * @example
 *
 * ```ts
 * import { root } from "@lynx-js/react"
 *
 * function App() {
 *   return (
 *     <InitDataConsumer children={(initData) => <view>...</view>}/>
 *   )
 * }
 *
 * root.render(
 *   <InitDataProvider>
 *      <App/>
 *   </InitDataProvider>
 * );
 *
 * ```
 *
 * @public
 */ // @ts-expect-error make preact and react types work
const InitDataProvider = /* @__PURE__ */ _InitData.Provider();
/**
 * The {@link https://react.dev/reference/react/createContext#consumer | Consumer} Component that provide `initData`.
 * This should be used with {@link InitDataProvider}
 * @group Components
 * @public
 */ // @ts-expect-error make preact and react types work
const InitDataConsumer = /* @__PURE__ */ _InitData.Consumer();
/**
 * A React Hooks for you to get `initData`.
 * If `initData` is changed, a re-render will be triggered automatically.
 *
 * @example
 *
 * ```ts
 * function App() {
 *   const initData = useInitData();
 *
 *   initData.someProperty // use it
 * }
 * ```
 *
 * @public
 */ const useInitData = /* @__PURE__ */ _InitData.use();
/**
 * A React Hooks for you to get notified when `initData` changed.
 *
 * @example
 * ```ts
 * function App() {
 *   useInitDataChanged((data) => {
 *     data.someProperty // can use it
 *   })
 * }
 * ```
 * @public
 */ const useInitDataChanged = /* @__PURE__ */ _InitData.useChanged();
const _GlobalProps = /* @__PURE__ */ (0,_core_globalProps_js__rspack_import_2.createGlobalProps)({
    createContext: preact_compat__rspack_import_0.createContext,
    useState: preact_hooks__rspack_import_1.useState,
    createElement: preact_compat__rspack_import_0.createElement,
    useLynxGlobalEventListener: _core_hooks_useLynxGlobalEventListener_js__rspack_import_3.useLynxGlobalEventListener
});
/**
 * The {@link https://react.dev/reference/react/createContext#provider | Provider} Component that provide `lynx.__globalProps`,
 * you must wrap your JSX inside it
 * @group Components
 *
 * @example
 *
 * ```ts
 * import { root } from "@lynx-js/react"
 *
 * function App() {
 *   return (
 *     <GlobalPropsConsumer children={(globalProps) => <view>...</view>}/>
 *   )
 * }
 *
 * root.render(
 *   <GlobalPropsProvider>
 *      <App/>
 *   </GlobalPropsProvider>
 * );
 *
 * ```
 *
 * @public
 */ // @ts-expect-error make preact and react types work
const GlobalPropsProvider = /* @__PURE__ */ _GlobalProps.Provider();
/**
 * The {@link https://react.dev/reference/react/createContext#consumer | Consumer} Component that provide `lynx.__globalProps`.
 * This should be used with {@link GlobalPropsProvider}
 * @group Components
 * @public
 */ // @ts-expect-error make preact and react types work
const GlobalPropsConsumer = /* @__PURE__ */ _GlobalProps.Consumer();
/**
 * A React Hooks for you to get `lynx.__globalProps`.
 * If `lynx.__globalProps` is changed, a re-render will be triggered automatically.
 *
 * @example
 *
 * ```ts
 * function App() {
 *   const globalProps = useGlobalProps();
 *
 *   globalProps.someProperty // use it
 * }
 * ```
 *
 * @public
 */ const useGlobalProps = /* @__PURE__ */ _GlobalProps.use();
/**
 * A React Hooks for you to get notified when `__globalProps` changed.
 *
 * @example
 * ```ts
 * function App() {
 *   useGlobalPropsChanged((data) => {
 *     lynx.__globalProps.someProperty // can use lynx.__globalProps
 *     data.someProperty // can use data
 *   })
 * }
 * ```
 * @public
 */ const useGlobalPropsChanged = /* @__PURE__ */ _GlobalProps.useChanged();




 //# sourceMappingURL=lynx-api.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runWithForce: () => (/* reexport safe */ _snapshot_lynx_runWithForce_js__rspack_import_10.runWithForce)
});
/* import */ var _core_hooks_react_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/react.js");
/* import */ var _shared_component_stack_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/component-stack.js");
/* import */ var _snapshot_alog_elementPAPICall_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/alog/elementPAPICall.js");
/* import */ var _snapshot_alog_index_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/alog/index.js");
/* import */ var _snapshot_debug_profileHooks_js__rspack_import_4 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/profileHooks.js");
/* import */ var _snapshot_lifecycle_patch_updateMainThread_js__rspack_import_5 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/updateMainThread.js");
/* import */ var _snapshot_lynx_calledByNative_js__rspack_import_6 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/calledByNative.js");
/* import */ var _snapshot_lynx_env_js__rspack_import_7 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/env.js");
/* import */ var _snapshot_lynx_injectLepusMethods_js__rspack_import_8 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/injectLepusMethods.js");
/* import */ var _snapshot_worklet_ref_updateInitValue_js__rspack_import_9 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/updateInitValue.js");
/* import */ var _snapshot_lynx_runWithForce_js__rspack_import_10 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/runWithForce.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
// to make sure preact's hooks to register earlier than ours











// @ts-expect-error Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature
if (typeof globalThis.processEvalResult === 'undefined') globalThis.processEvalResult = (result, schema)=>{
    return result === null || result === void 0 ? void 0 : result(schema);
};
(0,_snapshot_lynx_calledByNative_js__rspack_import_6.injectCalledByNative)();
(0,_snapshot_lifecycle_patch_updateMainThread_js__rspack_import_5.injectUpdateMainThread)();
(0,_snapshot_worklet_ref_updateInitValue_js__rspack_import_9.injectUpdateMTRefInitValue)();
if (true) (0,_snapshot_lynx_injectLepusMethods_js__rspack_import_8.injectLepusMethods)();
if (true) (0,_shared_component_stack_js__rspack_import_1.setupComponentStack)();
// We are profiling both main-thread and background.
if (true) (0,_snapshot_debug_profileHooks_js__rspack_import_4.initProfileHook)();
if (false) {}
if (false) {}
(0,_snapshot_lynx_env_js__rspack_import_7.setupLynxEnv)(); //# sourceMappingURL=lynx.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __root: () => (__root),
  setRoot: () => (setRoot)
});
/* import */ var _snapshot_snapshot_snapshot_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * The internal ReactLynx's root.
 * {@link @lynx-js/react!Root | root}.
 */ let __root;
function setRoot(root) {
    __root = root;
    // A fake ELEMENT_NODE to make preact/debug happy.
    if ( true && __root) __root.nodeType = 1;
}
setRoot(new _snapshot_snapshot_snapshot_js__rspack_import_0.SnapshotInstance('root'));
 //# sourceMappingURL=root.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/component-stack.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getCurrentVNode: () => (getCurrentVNode),
  getDisplayName: () => (getDisplayName),
  getOwnerStack: () => (getOwnerStack),
  setupComponentStack: () => (setupComponentStack)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* import */ var _render_constants_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * @license
The MIT License (MIT)

Copyright (c) 2015-present Jason Miller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */ 

/**
 * Get human readable name of the component/dom node
 */ function getDisplayName(vnode) {
    var _vnode_type_displayName;
    if (vnode.type === preact__rspack_import_0.Fragment) return 'Fragment';
    else if (typeof vnode.type == 'function') return (_vnode_type_displayName = vnode.type.displayName) !== null && _vnode_type_displayName !== void 0 ? _vnode_type_displayName : vnode.type.name;
    else if (typeof vnode.type == 'string') return vnode.type;
    return '#text';
}
/**
 * Used to keep track of the currently rendered `vnode` and print it
 * in debug messages.
 */ const renderStack = [];
/**
 * Keep track of the current owners. An owner describes a component
 * which was responsible to render a specific `vnode`. This exclude
 * children that are passed via `props.children`, because they belong
 * to the parent owner.
 *
 * ```jsx
 * const Foo = props => <div>{props.children}</div> // div's owner is Foo
 * const Bar = props => {
 *   return (
 *     <Foo><span /></Foo> // Foo's owner is Bar, span's owner is Bar
 *   )
 * }
 * ```
 *
 * Note: A `vnode` may be hoisted to the root scope due to compiler
 * optimization. In these cases the `_owner` will be different.
 */ let ownerStack = [];
/**
 * Get the currently rendered `vnode`
 */ function getCurrentVNode() {
    return renderStack.length > 0 ? renderStack[renderStack.length - 1] : null;
}
/**
 * Check if a `vnode` is a possible owner.
 */ function isPossibleOwner(vnode) {
    return typeof vnode.type == 'function' && vnode.type != preact__rspack_import_0.Fragment;
}
/**
 * Return the component stack that was captured up to this point.
 */ function getOwnerStack(vnode) {
    const stack = [
        vnode
    ];
    let next = vnode;
    while(next._owner != null){
        stack.push(next._owner);
        next = next._owner;
    }
    return stack.reduce((acc, owner)=>{
        acc += `  in ${getDisplayName(owner)}`;
        const source = owner.__source;
        if (source) acc += ` (at ${source.fileName}:${source.lineNumber})`;
        return acc += '\n';
    }, '');
}
/**
 * Setup code to capture the component trace while rendering. Note that
 * we cannot simply traverse `vnode._parent` upwards, because we have some
 * debug messages for `this.setState` where the `vnode` is `undefined`.
 */ function setupComponentStack() {
    const oldDiff = preact__rspack_import_0.options[_render_constants_js__rspack_import_1.DIFF];
    const oldDiffed = preact__rspack_import_0.options[_render_constants_js__rspack_import_1.DIFFED];
    const oldRoot = preact__rspack_import_0.options[_render_constants_js__rspack_import_1.ROOT];
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const oldVNode = preact__rspack_import_0.options.vnode;
    const oldRender = preact__rspack_import_0.options[_render_constants_js__rspack_import_1.RENDER];
    preact__rspack_import_0.options[_render_constants_js__rspack_import_1.DIFFED] = (vnode)=>{
        if (isPossibleOwner(vnode)) ownerStack.pop();
        renderStack.pop();
        if (oldDiffed) oldDiffed(vnode);
    };
    preact__rspack_import_0.options[_render_constants_js__rspack_import_1.DIFF] = (vnode)=>{
        if (isPossibleOwner(vnode)) renderStack.push(vnode);
        if (oldDiff) oldDiff(vnode);
    };
    preact__rspack_import_0.options[_render_constants_js__rspack_import_1.ROOT] = (vnode, parent)=>{
        ownerStack = [];
        if (oldRoot) oldRoot(vnode, parent);
    };
    preact__rspack_import_0.options.vnode = (vnode)=>{
        vnode._owner = ownerStack.length > 0 ? ownerStack[ownerStack.length - 1] : null;
        if (oldVNode) oldVNode(vnode);
    };
    preact__rspack_import_0.options[_render_constants_js__rspack_import_1.RENDER] = (vnode)=>{
        if (isPossibleOwner(vnode)) ownerStack.push(vnode);
        if (oldRender) oldRender(vnode);
    };
} //# sourceMappingURL=component-stack.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isProfiling: () => (isProfiling),
  profileEnd: () => (profileEnd),
  profileFlowId: () => (profileFlowId),
  profileStart: () => (profileStart)
});
var _lynx_performance_isProfileRecording, _lynx_performance;
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/* v8 ignore start */ const noop = ()=>{};
const noopFlowId = ()=>0;
/* v8 ignore end */ const isProfiling = /* @__PURE__ */ Boolean((_lynx_performance = lynx.performance) === null || _lynx_performance === void 0 ? void 0 : (_lynx_performance_isProfileRecording = _lynx_performance.isProfileRecording) === null || _lynx_performance_isProfileRecording === void 0 ? void 0 : _lynx_performance_isProfileRecording.call(_lynx_performance));
const profileStart = /* @__PURE__ */ (()=>{
    let p;
    if (!(p = lynx.performance) || typeof p.profileStart !== 'function') return noop;
    return p.profileStart.bind(p);
})();
const profileEnd = /* @__PURE__ */ (()=>{
    let p;
    if (!(p = lynx.performance) || typeof p.profileEnd !== 'function') return noop;
    return p.profileEnd.bind(p);
})();
const profileFlowId = /* @__PURE__ */ (()=>{
    let p;
    if (!(p = lynx.performance) || typeof p.profileFlowId !== 'function') return noopFlowId;
    return p.profileFlowId.bind(p);
})(); //# sourceMappingURL=profile.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CATCH_ERROR: () => (CATCH_ERROR),
  CHILDREN: () => (CHILDREN),
  CHILD_DID_SUSPEND: () => (CHILD_DID_SUSPEND),
  COMMIT: () => (COMMIT),
  COMPONENT: () => (COMPONENT),
  DIFF: () => (DIFF),
  DIFF2: () => (DIFF2),
  DIFFED: () => (DIFFED),
  DIRTY: () => (DIRTY),
  DOM: () => (DOM),
  FLAGS: () => (FLAGS),
  FORCE: () => (FORCE),
  HOOK: () => (HOOK),
  HOOKS: () => (HOOKS),
  INDEX: () => (INDEX),
  LIST: () => (LIST),
  MASK: () => (MASK),
  NEXT_STATE: () => (NEXT_STATE),
  NEXT_VALUE: () => (NEXT_VALUE),
  ORIGINAL: () => (ORIGINAL),
  PARENT: () => (PARENT),
  PENDING_EFFECTS: () => (PENDING_EFFECTS),
  RENDER: () => (RENDER),
  RENDER_CALLBACKS: () => (RENDER_CALLBACKS),
  RENDER_COMPONENT: () => (RENDER_COMPONENT),
  ROOT: () => (ROOT),
  SKIP_EFFECTS: () => (SKIP_EFFECTS),
  VALUE: () => (VALUE),
  VNODE: () => (VNODE)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const DIFF = '__b';
const DIFF2 = '_diff2';
const RENDER = '__r';
const DIFFED = 'diffed';
const COMMIT = '__c';
const SKIP_EFFECTS = '__s';
const CATCH_ERROR = '__e';
const ROOT = '__';
const RENDER_COMPONENT = 'renderComponent';
// VNode properties
const COMPONENT = '__c';
const CHILDREN = '__k';
const PARENT = '__';
const MASK = '__m';
const DOM = '__e';
const ORIGINAL = '__v';
const INDEX = '__i';
const FLAGS = '__u';
// Component properties
const VNODE = '__v';
const DIRTY = '__d';
const FORCE = '__e';
const NEXT_STATE = '__s';
const CHILD_DID_SUSPEND = '__c';
const RENDER_CALLBACKS = '__h';
const HOOK = '__h';
// Hooks properties
const HOOKS = '__H';
const LIST = '__';
const VALUE = '__';
const NEXT_VALUE = '__N';
const PENDING_EFFECTS = '__h'; //# sourceMappingURL=render-constants.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/alog/elementPAPICall.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initElementPAPICallAlog: () => (initElementPAPICallAlog)
});
/* import */ var _shared_profile_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

const fiberElementPAPINameList = [
    '__CreatePage',
    '__CreateElement',
    '__CreateWrapperElement',
    '__CreateText',
    '__CreateImage',
    '__CreateView',
    '__CreateRawText',
    '__CreateList',
    '__AppendElement',
    '__InsertElementBefore',
    '__RemoveElement',
    '__ReplaceElement',
    '__FirstElement',
    '__LastElement',
    '__NextElement',
    '__GetPageElement',
    '__GetTemplateParts',
    '__AddDataset',
    '__SetDataset',
    '__GetDataset',
    '__SetAttribute',
    '__GetAttributes',
    '__GetAttributeByName',
    '__GetAttributeNames',
    '__SetClasses',
    '__SetCSSId',
    '__AddInlineStyle',
    '__SetInlineStyles',
    '__AddEvent',
    '__SetID',
    '__GetElementUniqueID',
    '__GetTag',
    '__FlushElementTree',
    '__UpdateListCallbacks',
    '__OnLifecycleEvent',
    '__QueryComponent',
    '__SetGestureDetector',
    '__RemoveGestureDetector'
];
function initElementPAPICallAlog(globalWithIndex = globalThis) {
    let count = 0;
    const fiberElementMap = new Map();
    function formatFiberElement(fiberElement) {
        const fiberElementInfo = fiberElementMap.get(fiberElement);
        return `${fiberElementInfo.tag}#${fiberElementInfo.uniqueId}`;
    }
    const filteredFiberElementPAPINameList = fiberElementPAPINameList.filter((fiberElementPAPIName)=>typeof globalWithIndex[fiberElementPAPIName] === 'function');
    const originalFiberElementPAPIs = filteredFiberElementPAPINameList.reduce((prev, fiberElementPAPIName)=>({
            ...prev,
            [fiberElementPAPIName]: globalWithIndex[fiberElementPAPIName]
        }), {});
    filteredFiberElementPAPINameList.forEach((fiberElementPAPIName)=>{
        const oldFiberElementPAPI = globalWithIndex[fiberElementPAPIName];
        if (typeof oldFiberElementPAPI === 'function') globalWithIndex[fiberElementPAPIName] = (...args)=>{
            var _console_alog, _console;
            if (true) (0,_shared_profile_js__rspack_import_0.profileStart)(`FiberElementPAPI: ${fiberElementPAPIName}`, {
                args: {
                    args: JSON.stringify(args)
                }
            });
            const result = oldFiberElementPAPI(...args);
            if (true) (0,_shared_profile_js__rspack_import_0.profileEnd)();
            const formattedArgs = [
                ...args
            ];
            for(let i = 0; i < formattedArgs.length; i++){
                const arg = formattedArgs[i];
                if (Array.isArray(arg)) formattedArgs[i] = '[' + arg.map((item)=>{
                    if (fiberElementMap.has(item)) return formatFiberElement(item);
                    return JSON.stringify(item);
                }).join(', ') + ']';
                else if (fiberElementMap.has(arg)) formattedArgs[i] = formatFiberElement(arg);
                else formattedArgs[i] = JSON.stringify(arg);
            }
            if (fiberElementPAPIName === '__CreatePage' || fiberElementPAPIName === '__CreateElement' || fiberElementPAPIName === '__CreateWrapperElement' || fiberElementPAPIName === '__CreateText' || fiberElementPAPIName === '__CreateImage' || fiberElementPAPIName === '__CreateView' || fiberElementPAPIName === '__CreateRawText' || fiberElementPAPIName === '__CreateList') fiberElementMap.set(result, {
                tag: originalFiberElementPAPIs['__GetTag'](result),
                uniqueId: originalFiberElementPAPIs['__GetElementUniqueID'](result)
            });
            let formattedResult;
            if (fiberElementMap.has(result)) formattedResult = formatFiberElement(result);
            else if (result !== null) formattedResult = JSON.stringify(result);
            (_console_alog = (_console = console).alog) === null || _console_alog === void 0 ? void 0 : _console_alog.call(_console, `[ReactLynxDebug] FiberElement API call #${++count}: ${fiberElementPAPIName}(${formattedArgs.join(', ')})${formattedResult == null ? '' : ` => ${formattedResult}`}`);
            return result;
        };
    });
} //# sourceMappingURL=elementPAPICall.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/alog/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initAlog: () => (initAlog)
});
/* import */ var _render_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/alog/render.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function initAlog() {
    (0,_render_js__rspack_import_0.initRenderAlog)();
} //# sourceMappingURL=index.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/alog/render.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initRenderAlog: () => (initRenderAlog)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* import */ var _shared_render_constants_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
/* import */ var _utils_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



function initRenderAlog() {
    const oldAfterDiff = preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.DIFFED];
    preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.DIFFED] = function(vnode) {
        // Only log on component vnode
        if (typeof vnode.type === 'function') {
            var _console_alog, _console;
            const threadName = 'MainThread';
            const displayName = (0,_utils_js__rspack_import_2.getDisplayName)(vnode.type);
            (_console_alog = (_console = console).alog) === null || _console_alog === void 0 ? void 0 : _console_alog.call(_console, `[${threadName} Component Render] name: ${displayName}`);
        }
        oldAfterDiff === null || oldAfterDiff === void 0 ? void 0 : oldAfterDiff(vnode);
    };
} //# sourceMappingURL=render.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/compat/componentIs.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  factory: () => (factory)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
// for better reuse if runtime is changed
function factory({ createElement, useMemo, Suspense, lazy }, loadLazyBundle) {
    /**
     * @internal a polyfill for <component is=? />
     */ const __ComponentIsPolyfill = ({ is, ...props })=>{
        if (typeof is !== 'string') {
            lynx.reportError(new Error('You must provide a string to props `is` when using syntax `<component is=? />`.'));
            return null;
        }
        // @ts-ignore
        const D = useMemo(()=>lazy(()=>loadLazyBundle(is)), [
            is
        ]);
        return createElement(Suspense, {
            key: is
        }, createElement(D, props));
    };
    return __ComponentIsPolyfill;
} //# sourceMappingURL=componentIs.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/compat/lynxComponent.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ComponentFromReactRuntime: () => (ComponentFromReactRuntime),
  wrapWithLynxComponent: () => (wrapWithLynxComponent)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function wrapWithLynxComponent(jsxSnapshot, jsxComponent) {
    const C = jsxComponent.type;
    if (typeof C === 'function' && (C === ComponentFromReactRuntime || C.prototype instanceof ComponentFromReactRuntime)) {
        if (jsxSnapshot.length === 1) return jsxSnapshot(jsxComponent);
        else {
            // spread
            if (!jsxComponent.props.removeComponentElement) return jsxSnapshot(jsxComponent, takeComponentAttributes(jsxComponent));
        }
    }
    return jsxComponent;
}
// @ts-expect-error
class ComponentFromReactRuntime extends preact__rspack_import_0.Component {
}
const __COMPONENT_ATTRIBUTES__ = /* @__PURE__ */ new Set([
    'name',
    'style',
    'class',
    'flatten',
    'clip-radius',
    'overlap',
    'user-interaction-enabled',
    'native-interaction-enabled',
    'block-native-event',
    'enableLayoutOnly',
    'cssAlignWithLegacyW3C',
    'intersection-observers',
    'trigger-global-event',
    'exposure-scene',
    'exposure-id',
    'exposure-screen-margin-top',
    'exposure-screen-margin-bottom',
    'exposure-screen-margin-left',
    'exposure-screen-margin-right',
    'focusable',
    'focus-index',
    'accessibility-label',
    'accessibility-element',
    'accessibility-traits',
    'enable-new-animator'
]);
function takeComponentAttributes(jsxComponent) {
    const attributes = {};
    Object.keys(jsxComponent.props).forEach((k)=>{
        // let re1 = Regex::new(r"^(global-bind|bind|catch|capture-bind|capture-catch)([A-Za-z]+)$").unwrap();
        // let re2 = Regex::new(r"^data-([A-Za-z]+)$").unwrap();
        if (__COMPONENT_ATTRIBUTES__.has(k) || k === 'id' || k === 'className' || k === 'dataSet' || k === 'data-set' || k === 'removeComponentElement' || /^(global-bind|bind|catch|capture-bind|capture-catch)([A-Za-z]+)$/.exec(k) || /^data-([A-Za-z]+)$/.exec(k)) {
            attributes[k] = jsxComponent.props[k];
            delete jsxComponent.props[k];
        }
    });
    return attributes;
} //# sourceMappingURL=lynxComponent.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/describeInvalidValue.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  describeInvalidValue: () => (describeInvalidValue)
});
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function describeInvalidValue(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'function') return `function ${value.name || '(anonymous)'}`;
    if (typeof value === 'string') return `string "${value}"`;
    if (typeof value === 'number' || typeof value === 'bigint' || typeof value === 'boolean') return `${typeof value} ${String(value)}`;
    if (typeof value === 'symbol') return `symbol ${String(value)}`;
    return `unexpected ${typeof value}`;
} //# sourceMappingURL=describeInvalidValue.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/formatPatch.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  prettyFormatSnapshotPatch: () => (prettyFormatSnapshotPatch)
});
/* import */ var _lifecycle_patch_snapshotPatch_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function prettyFormatSnapshotPatch(snapshotPatch) {
    if (!snapshotPatch) return [];
    const result = [];
    for(let i = 0; i < snapshotPatch.length;){
        const op = snapshotPatch[i];
        const config = _lifecycle_patch_snapshotPatch_js__rspack_import_0.SnapshotOperationParams[op];
        if (config) {
            const formattedOp = {
                op: config.name
            };
            config.params.forEach((param, index)=>{
                formattedOp[param] = snapshotPatch[i + 1 + index];
            });
            result.push(formattedOp);
            i += 1 + config.params.length;
        } else throw new Error(`Unknown snapshot operation: ${op}`);
    }
    return result;
} //# sourceMappingURL=formatPatch.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/profileHooks.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initProfileHook: () => (initProfileHook)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* import */ var _shared_render_constants_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
/* import */ var _utils_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



function initProfileHook() {
    // early-exit if required profiling APIs are unavailable
    let p;
    /* v8 ignore start */ if (!(p = lynx.performance) || typeof p.profileStart !== 'function' || typeof p.profileEnd !== 'function' || typeof p.profileMark !== 'function' || typeof p.profileFlowId !== 'function') return;
    /* v8 ignore stop */ const profileStart = p.profileStart.bind(p);
    const profileEnd = p.profileEnd.bind(p);
    p.profileMark.bind(p);
    p.profileFlowId.bind(p);
    Symbol('FLOW_ID');
    (0,_utils_js__rspack_import_2.hook)(preact__rspack_import_0.options, _shared_render_constants_js__rspack_import_1.DIFF2, (old, vnode, oldVNode)=>{
        // We only add profiling trace for Component
        if (typeof vnode.type === 'function') {
            const profileOptions = {};
            profileStart(`ReactLynx::diff::${/* #__INLINE__ */ (0,_utils_js__rspack_import_2.getDisplayName)(vnode.type)}`, profileOptions);
        }
        old === null || old === void 0 ? void 0 : old(vnode, oldVNode);
    });
    (0,_utils_js__rspack_import_2.hook)(preact__rspack_import_0.options, _shared_render_constants_js__rspack_import_1.DIFFED, (old, vnode)=>{
        if (typeof vnode.type === 'function') profileEnd(); // for options[DIFF2]
        old === null || old === void 0 ? void 0 : old(vnode);
    });
    // Profile the user-provided `render`.
    (0,_utils_js__rspack_import_2.hook)(preact__rspack_import_0.options, _shared_render_constants_js__rspack_import_1.RENDER, (old, vnode)=>{
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const originalRender = vnode[_shared_render_constants_js__rspack_import_1.COMPONENT].render;
        vnode[_shared_render_constants_js__rspack_import_1.COMPONENT].render = function render(props, state, context) {
            profileStart(`ReactLynx::render::${/* #__INLINE__ */ (0,_utils_js__rspack_import_2.getDisplayName)(vnode.type)}`);
            try {
                return originalRender.call(this, props, state, context);
            } finally{
                profileEnd();
                vnode[_shared_render_constants_js__rspack_import_1.COMPONENT].render = originalRender;
            }
        };
        old === null || old === void 0 ? void 0 : old(vnode);
    });
} //# sourceMappingURL=profileHooks.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/vnodeSource.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearSnapshotVNodeSource: () => (clearSnapshotVNodeSource),
  getSnapshotVNodeSource: () => (getSnapshotVNodeSource),
  moveSnapshotVNodeSource: () => (moveSnapshotVNodeSource),
  setupVNodeSourceHook: () => (setupVNodeSourceHook)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* import */ var _shared_render_constants_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


const snapshotVNodeSourceMap = /*#__PURE__*/ new Map();
let hookInstalled = false;
function formatSource(source) {
    if (!source.fileName) return undefined;
    if (typeof source.lineNumber === 'number' && typeof source.columnNumber === 'number') return `${source.fileName}:${source.lineNumber}:${source.columnNumber}`;
    if (typeof source.lineNumber === 'number') return `${source.fileName}:${source.lineNumber}`;
    return source.fileName;
}
function captureVNodeSource(vnode) {
    var _vnode_DOM;
    if (typeof vnode.type !== 'string') return;
    const source = vnode.__source;
    const id = (_vnode_DOM = vnode[_shared_render_constants_js__rspack_import_1.DOM]) === null || _vnode_DOM === void 0 ? void 0 : _vnode_DOM.__id;
    if (!source || typeof id !== 'number') return;
    const formattedSource = formatSource(source);
    if (formattedSource) snapshotVNodeSourceMap.set(id, formattedSource);
}
function setupVNodeSourceHook() {
    if (hookInstalled) return;
    hookInstalled = true;
    const oldDiffed = preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.DIFFED];
    preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.DIFFED] = (vnode)=>{
        captureVNodeSource(vnode);
        oldDiffed === null || oldDiffed === void 0 ? void 0 : oldDiffed(vnode);
    };
}
function moveSnapshotVNodeSource(oldId, newId) {
    if (oldId === newId) return;
    const source = snapshotVNodeSourceMap.get(oldId);
    if (source) {
        snapshotVNodeSourceMap.set(newId, source);
        snapshotVNodeSourceMap.delete(oldId);
    }
}
function getSnapshotVNodeSource(id) {
    return snapshotVNodeSourceMap.get(id);
}
function clearSnapshotVNodeSource() {
    snapshotVNodeSourceMap.clear();
} //# sourceMappingURL=vnodeSource.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/processGesture.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  processGesture: () => (processGesture),
  retainGestureWorkletCtx: () => (retainGestureWorkletCtx)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _types_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/types.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function isSerializedGesture(gesture) {
    var _gesture___isSerialized;
    return (_gesture___isSerialized = gesture.__isSerialized) !== null && _gesture___isSerialized !== void 0 ? _gesture___isSerialized : false;
}
function getSerializedBaseGesture(gesture) {
    if (!gesture || !isSerializedGesture(gesture)) return undefined;
    if (gesture.type !== _types_js__rspack_import_1.GestureTypeInner.COMPOSED) return gesture;
    return undefined;
}
function appendUniqueSerializedBaseGestures(gesture, out, seenIds) {
    if (!gesture || !isSerializedGesture(gesture)) return;
    if (gesture.type === _types_js__rspack_import_1.GestureTypeInner.COMPOSED) {
        for (const subGesture of gesture.gestures)appendUniqueSerializedBaseGestures(subGesture, out, seenIds);
        return;
    }
    const baseGesture = gesture;
    if (seenIds.has(baseGesture.id)) return;
    seenIds.add(baseGesture.id);
    out.push(baseGesture);
}
function collectOldGestureInfo(oldGesture) {
    const uniqOldBaseGestures = [];
    const oldBaseGesturesById = new Map();
    appendOldGestureInfo(oldGesture, uniqOldBaseGestures, oldBaseGesturesById);
    return {
        uniqOldBaseGestures,
        oldBaseGesturesById
    };
}
function appendOldGestureInfo(gesture, out, byId) {
    if (!gesture || !isSerializedGesture(gesture)) return;
    if (gesture.type === _types_js__rspack_import_1.GestureTypeInner.COMPOSED) {
        for (const subGesture of gesture.gestures)appendOldGestureInfo(subGesture, out, byId);
        return;
    }
    const oldBaseGesture = gesture;
    if (!byId.has(oldBaseGesture.id)) {
        byId.set(oldBaseGesture.id, oldBaseGesture);
        out.push(oldBaseGesture);
    }
}
function consumeOldBaseGesture(baseGesture, uniqOldBaseGestures, oldBaseGesturesById) {
    const idMatchedOldBaseGesture = oldBaseGesturesById.get(baseGesture.id);
    if (idMatchedOldBaseGesture) {
        oldBaseGesturesById.delete(baseGesture.id);
        return idMatchedOldBaseGesture;
    }
    const fallbackOldBaseGesture = uniqOldBaseGestures.find((oldBaseGesture)=>oldBaseGesturesById.has(oldBaseGesture.id));
    if (!fallbackOldBaseGesture) return undefined;
    oldBaseGesturesById.delete(fallbackOldBaseGesture.id);
    return fallbackOldBaseGesture;
}
function retainGestureWorkletCtx(gesture) {
    const retainedBaseGestures = [];
    appendUniqueSerializedBaseGestures(gesture, retainedBaseGestures, new Set());
    for (const baseGesture of retainedBaseGestures)for (const key of Object.keys(baseGesture.callbacks)){
        const callback = baseGesture.callbacks[key];
        if (callback) (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.retainWorkletCtx)(callback);
    }
}
function removeGestureDetector(dom, id) {
    // Keep compatibility with old runtimes where remove API is not exposed.
    if (typeof __RemoveGestureDetector === 'function') __RemoveGestureDetector(dom, id);
}
function clearLegacyGestureState(dom) {
    __SetAttribute(dom, 'has-react-gesture', null);
    // `flatten` may still be required by unrelated attrs from the same spread
    // (e.g. `clip-radius`), so only clear the gesture-specific legacy state here.
    // When `__RemoveGestureDetector` is available, let it own the detector cleanup
    // so we do not clobber an unrelated user-provided `gesture` attr.
    if (typeof __RemoveGestureDetector !== 'function') __SetAttribute(dom, 'gesture', null);
}
function getGestureInfo(gesture, oldGesture, isFirstScreen, dom) {
    var _ref, _ref1, _ref2;
    var _baseGesture_waitFor, _baseGesture_simultaneousWith, _baseGesture_continueWith;
    const config = {
        callbacks: []
    };
    const baseGesture = gesture;
    if (baseGesture.config) config.config = baseGesture.config;
    for (const key of Object.keys(baseGesture.callbacks)){
        const callback = baseGesture.callbacks[key];
        const oldCallback = oldGesture === null || oldGesture === void 0 ? void 0 : oldGesture.callbacks[key];
        (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.onWorkletCtxUpdate)(callback, oldCallback, isFirstScreen, dom);
        config.callbacks.push({
            name: key,
            callback: callback
        });
    }
    const relationMap = {
        waitFor: (_ref = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_waitFor = baseGesture.waitFor) === null || _baseGesture_waitFor === void 0 ? void 0 : _baseGesture_waitFor.map((subGesture)=>subGesture.id)) !== null && _ref !== void 0 ? _ref : [],
        simultaneous: (_ref1 = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_simultaneousWith = baseGesture.simultaneousWith) === null || _baseGesture_simultaneousWith === void 0 ? void 0 : _baseGesture_simultaneousWith.map((subGesture)=>subGesture.id)) !== null && _ref1 !== void 0 ? _ref1 : [],
        continueWith: (_ref2 = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_continueWith = baseGesture.continueWith) === null || _baseGesture_continueWith === void 0 ? void 0 : _baseGesture_continueWith.map((subGesture)=>subGesture.id)) !== null && _ref2 !== void 0 ? _ref2 : []
    };
    return {
        config,
        relationMap
    };
}
function processGesture(dom, gesture, oldGesture, isFirstScreen, gestureOptions) {
    const domSet = (gestureOptions === null || gestureOptions === void 0 ? void 0 : gestureOptions.domSet) === true;
    if ((gestureOptions === null || gestureOptions === void 0 ? void 0 : gestureOptions.retainCallbacks) !== false) retainGestureWorkletCtx(gesture);
    if (!gesture || !isSerializedGesture(gesture)) {
        const { oldBaseGesturesById } = collectOldGestureInfo(oldGesture);
        for (const oldBaseGesture of oldBaseGesturesById.values())removeGestureDetector(dom, oldBaseGesture.id);
        // Clearing the attrs keeps the legacy main-thread state in sync when
        // gesture props disappear during spread/key-removal updates.
        if (!domSet && oldBaseGesturesById.size > 0) clearLegacyGestureState(dom);
        return;
    }
    const { uniqOldBaseGestures, oldBaseGesturesById } = collectOldGestureInfo(oldGesture);
    // Fast path for the most common case: single base gesture update.
    const singleBaseGesture = getSerializedBaseGesture(gesture);
    const singleOldBaseGesture = getSerializedBaseGesture(oldGesture);
    if (singleBaseGesture && (!oldGesture || singleOldBaseGesture)) {
        if (!domSet) {
            __SetAttribute(dom, 'has-react-gesture', true);
            __SetAttribute(dom, 'flatten', false);
        }
        if (singleOldBaseGesture) removeGestureDetector(dom, singleOldBaseGesture.id);
        const { config, relationMap } = getGestureInfo(singleBaseGesture, singleOldBaseGesture, isFirstScreen, dom);
        __SetGestureDetector(dom, singleBaseGesture.id, singleBaseGesture.type, config, relationMap);
        return;
    }
    const uniqBaseGestures = [];
    appendUniqueSerializedBaseGestures(gesture, uniqBaseGestures, new Set());
    if (uniqBaseGestures.length === 0) {
        for (const oldBaseGesture of oldBaseGesturesById.values())removeGestureDetector(dom, oldBaseGesture.id);
        if (!domSet && oldBaseGesturesById.size > 0) clearLegacyGestureState(dom);
        return;
    }
    if (!domSet) {
        __SetAttribute(dom, 'has-react-gesture', true);
        __SetAttribute(dom, 'flatten', false);
    }
    // On update, remove old detectors first to avoid stale callbacks.
    for (const oldBaseGesture of oldBaseGesturesById.values())removeGestureDetector(dom, oldBaseGesture.id);
    for (const baseGesture of uniqBaseGestures){
        const oldBaseGesture = consumeOldBaseGesture(baseGesture, uniqOldBaseGestures, oldBaseGesturesById);
        const { config, relationMap } = getGestureInfo(baseGesture, oldBaseGesture, isFirstScreen, dom);
        __SetGestureDetector(dom, baseGesture.id, baseGesture.type, config, relationMap);
    }
} //# sourceMappingURL=processGesture.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/processGestureBagkround.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  prepareGestureForCommit: () => (prepareGestureForCommit)
});
/* import */ var _types_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/types.js");
/* import */ var _worklet_ctx_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ctx.js");


function prepareWorkletForCommit(value) {
    // Copy-on-commit: keep the background-side gesture/worklet objects clean.
    // `_execId` is injected into the payload object that will be sent to the main thread.
    const copy = {
        ...value
    };
    return (0,_worklet_ctx_js__rspack_import_1.onPostWorkletCtx)(copy);
}
function removeUndefinedFields(record) {
    const filteredEntries = Object.entries(record).filter(([, value])=>value !== undefined);
    return Object.fromEntries(filteredEntries);
}
function serializeCommittedGesture(gesture) {
    var _ref, _ref1, _ref2;
    var _baseGesture_simultaneousWith, _baseGesture_waitFor, _baseGesture_continueWith;
    if (gesture.type === _types_js__rspack_import_0.GestureTypeInner.COMPOSED) {
        const composed = gesture;
        return {
            type: composed.type,
            gestures: composed.gestures.map((subGesture)=>serializeCommittedGesture(subGesture)),
            __isSerialized: true
        };
    }
    const baseGesture = gesture;
    return removeUndefinedFields({
        config: baseGesture.config,
        id: baseGesture.id,
        type: baseGesture.type,
        simultaneousWith: (_ref = (_baseGesture_simultaneousWith = baseGesture.simultaneousWith) === null || _baseGesture_simultaneousWith === void 0 ? void 0 : _baseGesture_simultaneousWith.map((subGesture)=>({
                id: subGesture.id
            }))) !== null && _ref !== void 0 ? _ref : [],
        waitFor: (_ref1 = (_baseGesture_waitFor = baseGesture.waitFor) === null || _baseGesture_waitFor === void 0 ? void 0 : _baseGesture_waitFor.map((subGesture)=>({
                id: subGesture.id
            }))) !== null && _ref1 !== void 0 ? _ref1 : [],
        continueWith: (_ref2 = (_baseGesture_continueWith = baseGesture.continueWith) === null || _baseGesture_continueWith === void 0 ? void 0 : _baseGesture_continueWith.map((subGesture)=>({
                id: subGesture.id
            }))) !== null && _ref2 !== void 0 ? _ref2 : [],
        callbacks: baseGesture.callbacks,
        __isSerialized: true
    });
}
function attachCommittedSerializer(gesture) {
    const serialize = ()=>serializeCommittedGesture(gesture);
    return Object.assign(gesture, {
        serialize,
        toJSON: serialize
    });
}
/**
 * Prepare a gesture payload to be sent to the main thread.
 *
 * This function returns a copy of the input object and injects `_execId` into
 * its worklet callbacks. The background-side gesture object MUST NOT be mutated,
 * otherwise `_execId` churn would pollute the cached values and cause redundant patches.
 */ function prepareGestureForCommit(gesture) {
    if (gesture.type === _types_js__rspack_import_0.GestureTypeInner.COMPOSED) {
        const composed = gesture;
        const committed = {
            ...composed,
            gestures: composed.gestures.map((g)=>prepareGestureForCommit(g))
        };
        return attachCommittedSerializer(committed);
    }
    const baseGesture = gesture;
    const committedCallbacks = {
        ...baseGesture.callbacks
    };
    for (const name of Object.keys(committedCallbacks)){
        const callback = committedCallbacks[name];
        if (callback == null) continue;
        // `onPostWorkletCtx` may report errors and return null depending on runtime configuration.
        // Keep behavior consistent with the previous implementation (which used `!`).
        committedCallbacks[name] = prepareWorkletForCommit(callback);
    }
    const committed = {
        ...baseGesture,
        callbacks: committedCallbacks
    };
    return attachCommittedSerializer(committed);
} //# sourceMappingURL=processGestureBagkround.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/types.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GestureTypeInner: () => (GestureTypeInner)
});
const GestureTypeInner = {
    COMPOSED: -1,
    PAN: 0,
    FLING: 1,
    DEFAULT: 2,
    TAP: 3,
    LONGPRESS: 4,
    ROTATION: 5,
    PINCH: 6,
    NATIVE: 7
}; //# sourceMappingURL=types.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LifecycleConstant: () => (LifecycleConstant),
  NativeUpdateDataType: () => (NativeUpdateDataType)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const LifecycleConstant = {
    firstScreen: 'rLynxFirstScreen',
    updateFromRoot: 'updateFromRoot',
    globalEventFromLepus: 'globalEventFromLepus',
    jsReady: 'rLynxJSReady',
    patchUpdate: 'rLynxChange',
    publishEvent: 'rLynxPublishEvent',
    updateMTRefInitValue: 'rLynxChangeRefInitValue'
};
const NativeUpdateDataType = {
    UPDATE: 0,
    RESET: 1
}; //# sourceMappingURL=constant.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/destroy.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  destroyBackground: () => (destroyBackground)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* import */ var _root_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* import */ var _event_delayEvents_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/delayEvents.js");
/* import */ var _event_delayLifecycleEvents_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/delayLifecycleEvents.js");
/* import */ var _patch_commit_js__rspack_import_4 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/commit.js");
/* import */ var _shared_profile_js__rspack_import_5 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.






function destroyBackground() {
    if (true) (0,_shared_profile_js__rspack_import_5.profileStart)('ReactLynx::destroyBackground');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    (0,preact__rspack_import_0.render)(null, _root_js__rspack_import_1.__root);
    _patch_commit_js__rspack_import_4.globalCommitTaskMap.forEach((task)=>{
        task();
    });
    _patch_commit_js__rspack_import_4.globalCommitTaskMap.clear();
    // Clear delayed events which should not be executed after destroyed.
    // This is important when the page is performing a reload.
    _event_delayLifecycleEvents_js__rspack_import_3.delayedLifecycleEvents.length = 0;
    if (_event_delayEvents_js__rspack_import_2.delayedEvents) _event_delayEvents_js__rspack_import_2.delayedEvents.length = 0;
    if (true) (0,_shared_profile_js__rspack_import_5.profileEnd)();
}
 //# sourceMappingURL=destroy.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/delayEvents.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  delayedEvents: () => (delayedEvents),
  delayedPublishEvent: () => (delayedPublishEvent)
});
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
let delayedEvents;
function delayedPublishEvent(handlerName, data) {
    delayedEvents !== null && delayedEvents !== void 0 ? delayedEvents : delayedEvents = [];
    delayedEvents.push([
        handlerName,
        data
    ]);
}
 //# sourceMappingURL=delayEvents.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/delayLifecycleEvents.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  delayLifecycleEvent: () => (delayLifecycleEvent),
  delayedLifecycleEvents: () => (delayedLifecycleEvents)
});
const delayedLifecycleEvents = [];
function delayLifecycleEvent(type, data) {
    delayedLifecycleEvents.push([
        type,
        data
    ]);
}
/**
 * @internal
 */  //# sourceMappingURL=delayLifecycleEvents.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/jsReady.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearJSReadyEventIdSwap: () => (clearJSReadyEventIdSwap),
  isJSReady: () => (isJSReady),
  jsReady: () => (jsReady),
  jsReadyEventIdSwap: () => (jsReadyEventIdSwap),
  resetJSReady: () => (resetJSReady)
});
/* import */ var _root_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* import */ var _shared_profile_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _lifecycle_constant_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



let isJSReady;
let jsReadyEventIdSwap;
function jsReady() {
    isJSReady = true;
    if (true) (0,_shared_profile_js__rspack_import_1.profileStart)('ReactLynx::serializeRoot');
    const root = JSON.stringify(_root_js__rspack_import_0.__root);
    if (true) (0,_shared_profile_js__rspack_import_1.profileEnd)();
    if (true) (0,_shared_profile_js__rspack_import_1.profileStart)('ReactLynx::transferRoot');
    __OnLifecycleEvent([
        _lifecycle_constant_js__rspack_import_2.LifecycleConstant.firstScreen,
        /* FIRST_SCREEN */ {
            root,
            jsReadyEventIdSwap
        }
    ]);
    if (true) (0,_shared_profile_js__rspack_import_1.profileEnd)();
    jsReadyEventIdSwap = {};
}
function clearJSReadyEventIdSwap() {
    jsReadyEventIdSwap = {};
}
function resetJSReady() {
    isJSReady = false;
    jsReadyEventIdSwap = {};
}
/**
 * @internal
 */  //# sourceMappingURL=jsReady.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/commit.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearCommitTaskId: () => (clearCommitTaskId),
  commitPatchUpdate: () => (commitPatchUpdate),
  genCommitTaskId: () => (genCommitTaskId),
  globalBackgroundSnapshotInstancesToRemove: () => (/* reexport safe */ _globalState_js__rspack_import_1.globalBackgroundSnapshotInstancesToRemove),
  globalCommitTaskMap: () => (globalCommitTaskMap),
  globalPatchOptions: () => (globalPatchOptions),
  replaceCommitHook: () => (replaceCommitHook)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* import */ var _globalState_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/globalState.js");
/* import */ var _core_reload_version_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/reload-version.js");
/* import */ var _shared_profile_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _shared_render_constants_js__rspack_import_4 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
/* import */ var _utils_js__rspack_import_5 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* import */ var _lynx_performance_js__rspack_import_6 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/performance.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the commit phase of the rendering lifecycle.
 * This module patches Preact's commit phase to integrate with the snapshot system,
 * handling the collection and transmission of patches between threads.
 *
 * The commit phase is responsible for:
 * - Collecting patches from the snapshot system
 * - Managing commit tasks and their execution
 * - Coordinating with the native layer for updates
 * - Handling performance timing and pipeline options
 */ /**
 * This module patches Preact's commit phase by hacking into the internal of
 * its [options](https://preactjs.com/guide/v10/options/) API
 */ 






const globalCommitTaskMap = /*@__PURE__*/ new Map();
let nextCommitTaskId = 1;
let globalPatchOptions = {};
/**
 * Replaces Preact's default commit hook with our custom implementation
 */ function replaceCommitHook() {
    (0,_utils_js__rspack_import_5.hook)(preact__rspack_import_0.options, _shared_render_constants_js__rspack_import_4.COMMIT, (originalPreactCommit, vnode, commitQueue)=>{
        // for testing only
        commitQueue.length = 0;
        return;
    });
}
/**
 * Prepares the patch update for transmission to the native layer
 */ function commitPatchUpdate(patchList, patchOptions) {
    // console.debug('********** JS update:');
    // printSnapshotInstance(
    //   (backgroundSnapshotInstanceManager.values.get(1) ?? backgroundSnapshotInstanceManager.values.get(-1))!,
    // );
    // console.debug('commitPatchUpdate:', prettyFormatSnapshotPatch(patchList.patchList[0]?.snapshotPatch));
    if (true) (0,_shared_profile_js__rspack_import_3.profileStart)('ReactLynx::commitChanges');
    (0,_lynx_performance_js__rspack_import_6.markTiming)('packChangesStart');
    const obj = {
        data: JSON.stringify(patchList),
        patchOptions: {
            ...patchOptions,
            reloadVersion: (0,_core_reload_version_js__rspack_import_2.getReloadVersion)()
        }
    };
    (0,_lynx_performance_js__rspack_import_6.markTiming)('packChangesEnd');
    if (_lynx_performance_js__rspack_import_6.globalPipelineOptions) {
        obj.patchOptions.pipelineOptions = _lynx_performance_js__rspack_import_6.globalPipelineOptions;
        (0,_lynx_performance_js__rspack_import_6.setPipeline)(undefined);
    }
    if (true) (0,_shared_profile_js__rspack_import_3.profileEnd)();
    return obj;
}
/**
 * Generates a unique ID for commit tasks
 */ function genCommitTaskId() {
    return nextCommitTaskId++;
}
/**
 * Resets the commit task ID counter
 */ function clearCommitTaskId() {
    nextCommitTaskId = 1;
}
/**
 * @internal
 */  //# sourceMappingURL=commit.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/error.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addCtxNotFoundEventListener: () => (addCtxNotFoundEventListener),
  ctxNotFoundType: () => (ctxNotFoundType),
  removeCtxNotFoundEventListener: () => (removeCtxNotFoundEventListener),
  reportCtxNotFound: () => (reportCtxNotFound),
  sendCtxNotFoundEventToBackground: () => (sendCtxNotFoundEventToBackground)
});
/* import */ var _snapshot_backgroundSnapshot_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/backgroundSnapshot.js");
/* import */ var _snapshot_definition_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/definition.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


const ctxNotFoundType = 'Lynx.Error.CtxNotFound';
const errorMsg = 'snapshotPatchApply failed: ctx not found';
let ctxNotFoundEventListener = null;
function sendCtxNotFoundEventToBackground(id) {
    /* v8 ignore next 3 */ if (!lynx.getJSContext) throw new Error(errorMsg);
    lynx.getJSContext().dispatchEvent({
        type: ctxNotFoundType,
        data: {
            id
        }
    });
}
function reportCtxNotFound(data) {
    const id = data.id;
    const instance = _snapshot_backgroundSnapshot_js__rspack_import_0.backgroundSnapshotInstanceManager.values.get(id);
    let snapshotType = 'null';
    if (instance && instance.__snapshot_def) {
        for (const [snapshotId, snapshot] of _snapshot_definition_js__rspack_import_1.snapshotManager.values.entries())if (snapshot === instance.__snapshot_def) {
            snapshotType = snapshotId;
            break;
        }
    }
    let message = `${errorMsg}, snapshot type: '${snapshotType}'`;
    if (true) message += '. You can set environment variable `REACT_ALOG=true` and restart your dev server for troubleshooting.';
    lynx.reportError(new Error(message));
}
function addCtxNotFoundEventListener() {
    var _lynx_getCoreContext, _lynx;
    ctxNotFoundEventListener = (e)=>{
        reportCtxNotFound(e.data);
    };
    (_lynx_getCoreContext = (_lynx = lynx).getCoreContext) === null || _lynx_getCoreContext === void 0 ? void 0 : _lynx_getCoreContext.call(_lynx).addEventListener(ctxNotFoundType, ctxNotFoundEventListener);
}
function removeCtxNotFoundEventListener() {
    var _lynx_getCoreContext, _lynx;
    const coreContext = (_lynx_getCoreContext = (_lynx = lynx).getCoreContext) === null || _lynx_getCoreContext === void 0 ? void 0 : _lynx_getCoreContext.call(_lynx);
    if (coreContext && ctxNotFoundEventListener) {
        coreContext.removeEventListener(ctxNotFoundType, ctxNotFoundEventListener);
        ctxNotFoundEventListener = null;
    }
} //# sourceMappingURL=error.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/globalState.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  globalBackgroundSnapshotInstancesToRemove: () => (globalBackgroundSnapshotInstancesToRemove),
  setGlobalBackgroundSnapshotInstancesToRemove: () => (setGlobalBackgroundSnapshotInstancesToRemove)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Global state shared across modules to avoid circular dependencies
 */ /**
 * List of background snapshot instances to remove during commit phase
 */ let globalBackgroundSnapshotInstancesToRemove = [];
function setGlobalBackgroundSnapshotInstancesToRemove(ids) {
    globalBackgroundSnapshotInstancesToRemove = ids;
} //# sourceMappingURL=globalState.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/isMainThreadHydrating.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isMainThreadHydrating: () => (isMainThreadHydrating),
  setMainThreadHydrating: () => (setMainThreadHydrating)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let isMainThreadHydrating = false;
function setMainThreadHydrating(isHydrating) {
    if (!isHydrating && isMainThreadHydrating) (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.onHydrationFinished)();
    isMainThreadHydrating = isHydrating;
} //# sourceMappingURL=isMainThreadHydrating.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/nodesRefApply.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  applyNodesRefInsertBefore: () => (applyNodesRefInsertBefore),
  applyNodesRefRemoveChild: () => (applyNodesRefRemoveChild),
  resolveNodesRefHost: () => (resolveNodesRefHost)
});
/* import */ var _snapshot_list_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/list.js");
/* import */ var _snapshot_ref_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/ref.js");
/* import */ var _snapshot_snapshot_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
/* import */ var _snapshot_utils_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/utils.js");
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Apply-side handlers for the portal-only patch ops:
 *   - `nodesRefInsertBefore`
 *   - `nodesRefRemoveChild`
 * plus the shared selector lookup.
 *
 * Lives in its own module to keep `snapshotPatchApply.ts` focused on the
 * snapshot-tree ops (`CreateElement`/`InsertBefore`/`SetAttribute`/etc.).
 */ 



/**
 * Resolve a serialized NodesRef (the `identifier` string produced by
 * `serializeNodesRef`) to a single host FiberElement on the main thread.
 *
 * The identifier is treated as a CSS selector. This covers:
 *   - `RefProxy.selector` → `[react-ref-X-Y]` (a CSS attribute selector)
 *   - real `NodesRef` from `lynx.createSelectorQuery().select('#foo')`
 *
 * UNIQUE_ID / REF_ID-typed `NodesRef`s would need their respective Element
 * PAPIs (`__GetElementByUniqueId`, etc.) — TODO when needed.
 */ function resolveNodesRefHost(identifier) {
    const pageElement = __GetPageElement();
    if (!pageElement) return undefined;
    return __QuerySelector(pageElement, identifier, {});
}
function applyNodesRefInsertBefore(identifier, child, beforeId) {
    const host = resolveNodesRefHost(identifier);
    if (!host) throw new Error(`[createPortal] cannot resolve host for selector "${identifier}". ` + `The host element does not exist on the main thread — check that the ` + `\`NodesRef\` passed to \`createPortal\` points at a currently mounted element.`);
    if (!child.__elements) child.ensureElements();
    // `ensureElements` always sets `__element_root` for any registered
    // snapshot type, so the `!` is just there for the type checker.
    const childRoot = child.__element_root;
    // `beforeId` is `null` for append-style inserts: preact passes `before =
    // null`, our `before?.__id` evaluates to `undefined`, and the patch's JSON
    // round-trip turns that `undefined` slot into `null`. A numeric `beforeId`
    // is always the `__id` of a sibling that the background already inserted
    // into the same `fakeRoot` (its `nodesRefInsertBefore` ran earlier in this
    // same patch and both sides share `snapshotInstanceManager`) — so the
    // non-null assertions hold by framework invariant.
    if (beforeId != null) {
        __InsertElementBefore(host, childRoot, _snapshot_snapshot_js__rspack_import_2.snapshotInstanceManager.values.get(beforeId).__element_root);
        return;
    }
    __AppendElement(host, childRoot);
}
function applyNodesRefRemoveChild(identifier, child) {
    // The child was inserted by an earlier `nodesRefInsertBefore` op which
    // calls `ensureElements`, so `__element_root` is always set here.
    const childRoot = child.__element_root;
    // Mirror the worklet-ref teardown that `SnapshotInstance.removeChild`
    // runs. Without this, `main-thread:ref` callbacks on portaled subtrees
    // leak — `worklet._unmount` is never invoked, and any `WorkletRefImpl`
    // keeps pointing at the removed element.
    (0,_snapshot_ref_js__rspack_import_1.unref)(child, true);
    const host = resolveNodesRefHost(identifier);
    // If the host is gone, its entire DOM subtree (including this portaled
    // child) was already removed by whoever unmounted the host — the
    // `__RemoveElement` call would be a no-op. Skip it; we still clean up
    // the SI manager bookkeeping below.
    if (host) __RemoveElement(host, childRoot);
    // Portal children aren't linked into a `SnapshotInstance` parent tree, so
    // the regular `RemoveChild` traversal never reaches them. Mirror the
    // teardown that `SnapshotInstance.removeChild` runs (see snapshot.ts):
    // destroy any `<list>` holders (otherwise native list callbacks +
    // `gSignMap`/`gRecycleMap` leak), unlink sibling/parent pointers, drop
    // element refs, and remove from the manager.
    (0,_snapshot_utils_js__rspack_import_3.traverseSnapshotInstance)(child, (v)=>{
        if (v.__snapshot_def.isListHolder) (0,_snapshot_list_js__rspack_import_0.snapshotDestroyList)(v);
        // `__parent` / `__previousSibling` / `__nextSibling` are `private` on
        // `SnapshotInstance`; the cast mirrors the existing pattern in
        // `portals.ts`. Inner portal-subtree nodes (children of the portal
        // root) ARE linked into the SI tree on main thread via regular
        // `InsertBefore` ops, so the regular `removeChild` teardown nulls
        // these — mirror that here for parity.
        const link = v;
        link.__parent = null;
        link.__previousSibling = null;
        link.__nextSibling = null;
        delete v.__elements;
        delete v.__element_root;
        _snapshot_snapshot_js__rspack_import_2.snapshotInstanceManager.values["delete"](v.__id);
    });
} //# sourceMappingURL=nodesRefApply.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SnapshotOperation: () => (SnapshotOperation),
  SnapshotOperationParams: () => (SnapshotOperationParams),
  __globalSnapshotPatch: () => (__globalSnapshotPatch),
  deinitGlobalSnapshotPatch: () => (deinitGlobalSnapshotPatch),
  initGlobalSnapshotPatch: () => (initGlobalSnapshotPatch),
  takeGlobalSnapshotPatch: () => (takeGlobalSnapshotPatch)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Defines the core patch operations for the snapshot system.
 * The patch operations are designed to be serializable and minimal, allowing
 * efficient transmission between threads and application to element tree.
 */ const SnapshotOperation = {
    CreateElement: 0,
    InsertBefore: 1,
    RemoveChild: 2,
    SetAttribute: 3,
    SetAttributes: 4,
    nodesRefInsertBefore: 5,
    nodesRefRemoveChild: 6,
    DEV_ONLY_AddSnapshot: 100,
    DEV_ONLY_RegisterWorklet: 101,
    DEV_ONLY_SetSnapshotEntryName: 102
};
const SnapshotOperationParams = /* @__PURE__ */ {
    [SnapshotOperation.CreateElement]: {
        name: 'CreateElement',
        params: [
            'type',
            /* string */ 'id' /* number */ 
        ]
    },
    [SnapshotOperation.InsertBefore]: {
        name: 'InsertBefore',
        params: [
            'parentId',
            /* number */ 'childId',
            /* number */ 'beforeId',
            /* number | undefined */ 'slotIndex'
        ]
    },
    [SnapshotOperation.RemoveChild]: {
        name: 'RemoveChild',
        params: [
            'parentId',
            /* number */ 'childId' /* number */ 
        ]
    },
    [SnapshotOperation.SetAttribute]: {
        name: 'SetAttribute',
        params: [
            'id',
            /* number */ 'dynamicPartIndex',
            /* number */ 'value' /* any */ 
        ]
    },
    [SnapshotOperation.SetAttributes]: {
        name: 'SetAttributes',
        params: [
            'id',
            /* number */ 'values' /* any */ 
        ]
    },
    [SnapshotOperation.nodesRefInsertBefore]: {
        name: 'nodesRefInsertBefore',
        params: [
            'identifier',
            /* string — CSS selector */ 'childId',
            /* number */ 'beforeId'
        ]
    },
    [SnapshotOperation.nodesRefRemoveChild]: {
        name: 'nodesRefRemoveChild',
        params: [
            'identifier',
            /* string — CSS selector */ 'childId'
        ]
    },
    [SnapshotOperation.DEV_ONLY_AddSnapshot]: {
        name: 'DEV_ONLY_AddSnapshot',
        params: [
            'uniqID',
            /* string */ 'snapshotCreator'
        ]
    },
    [SnapshotOperation.DEV_ONLY_RegisterWorklet]: {
        name: 'DEV_ONLY_RegisterWorklet',
        params: [
            'hash',
            /* string */ 'fnStr' /* string */ 
        ]
    },
    [SnapshotOperation.DEV_ONLY_SetSnapshotEntryName]: {
        name: 'DEV_ONLY_SetSnapshotEntryName',
        params: [
            'uniqID',
            /* string */ 'entryName' /* string */ 
        ]
    }
};
let __globalSnapshotPatch;
function takeGlobalSnapshotPatch() {
    if (__globalSnapshotPatch) {
        const list = __globalSnapshotPatch;
        __globalSnapshotPatch = [];
        return list;
    } else return undefined;
}
function initGlobalSnapshotPatch() {
    __globalSnapshotPatch = [];
}
function deinitGlobalSnapshotPatch() {
    __globalSnapshotPatch = undefined;
} //# sourceMappingURL=snapshotPatch.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatchApply.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  snapshotPatchApply: () => (snapshotPatchApply)
});
/* import */ var _error_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/error.js");
/* import */ var _nodesRefApply_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/nodesRefApply.js");
/* import */ var _snapshotPatch_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
/* import */ var _snapshot_snapshot_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the patch application logic for the snapshot system.
 * This module is responsible for interpreting and executing patch operations
 * that were generated in the background thread, applying them to the DOM
 * in the main thread.
 *
 * The module handles various operations like element creation, insertion,
 * removal, and attribute updates, ensuring they are applied in the correct
 * order and with proper error handling.
 */ 



/**
 * Applies a patch of snapshot operations to the main thread.
 * This is the counterpart to the patch generation in the background thread.
 * Each operation in the patch is processed sequentially to update the DOM.
 */ function snapshotPatchApply(snapshotPatch) {
    const length = snapshotPatch.length;
    for(let i = 0; i < length; ++i)switch(snapshotPatch[i]){
        case _snapshotPatch_js__rspack_import_2.SnapshotOperation.CreateElement:
            {
                const type = snapshotPatch[++i];
                const id = snapshotPatch[++i];
                new _snapshot_snapshot_js__rspack_import_3.SnapshotInstance(type, id);
                break;
            }
        case _snapshotPatch_js__rspack_import_2.SnapshotOperation.InsertBefore:
            {
                const parentId = snapshotPatch[++i];
                const childId = snapshotPatch[++i];
                const beforeId = snapshotPatch[++i];
                const __slotIndex = snapshotPatch[++i];
                const parent = _snapshot_snapshot_js__rspack_import_3.snapshotInstanceManager.values.get(parentId);
                const child = _snapshot_snapshot_js__rspack_import_3.snapshotInstanceManager.values.get(childId);
                const existingNode = _snapshot_snapshot_js__rspack_import_3.snapshotInstanceManager.values.get(beforeId);
                if (!parent || !child) (0,_error_js__rspack_import_0.sendCtxNotFoundEventToBackground)(parent ? childId : parentId);
                else {
                    child.__slotIndex = __slotIndex;
                    parent.insertBefore(child, existingNode);
                }
                break;
            }
        case _snapshotPatch_js__rspack_import_2.SnapshotOperation.RemoveChild:
            {
                const parentId = snapshotPatch[++i];
                const childId = snapshotPatch[++i];
                const parent = _snapshot_snapshot_js__rspack_import_3.snapshotInstanceManager.values.get(parentId);
                const child = _snapshot_snapshot_js__rspack_import_3.snapshotInstanceManager.values.get(childId);
                if (!parent || !child) (0,_error_js__rspack_import_0.sendCtxNotFoundEventToBackground)(parent ? childId : parentId);
                else parent.removeChild(child);
                break;
            }
        case _snapshotPatch_js__rspack_import_2.SnapshotOperation.nodesRefInsertBefore:
            {
                const identifier = snapshotPatch[++i];
                const childId = snapshotPatch[++i];
                const beforeId = snapshotPatch[++i];
                const child = _snapshot_snapshot_js__rspack_import_3.snapshotInstanceManager.values.get(childId);
                if (child) (0,_nodesRefApply_js__rspack_import_1.applyNodesRefInsertBefore)(identifier, child, beforeId);
                else (0,_error_js__rspack_import_0.sendCtxNotFoundEventToBackground)(childId);
                break;
            }
        case _snapshotPatch_js__rspack_import_2.SnapshotOperation.nodesRefRemoveChild:
            {
                const identifier = snapshotPatch[++i];
                const childId = snapshotPatch[++i];
                const child = _snapshot_snapshot_js__rspack_import_3.snapshotInstanceManager.values.get(childId);
                if (child) (0,_nodesRefApply_js__rspack_import_1.applyNodesRefRemoveChild)(identifier, child);
                else (0,_error_js__rspack_import_0.sendCtxNotFoundEventToBackground)(childId);
                break;
            }
        case _snapshotPatch_js__rspack_import_2.SnapshotOperation.SetAttribute:
            {
                const id = snapshotPatch[++i];
                const dynamicPartIndex = snapshotPatch[++i];
                const value = snapshotPatch[++i];
                const si = _snapshot_snapshot_js__rspack_import_3.snapshotInstanceManager.values.get(id);
                if (si) si.setAttribute(dynamicPartIndex, value);
                else (0,_error_js__rspack_import_0.sendCtxNotFoundEventToBackground)(id);
                break;
            }
        case _snapshotPatch_js__rspack_import_2.SnapshotOperation.SetAttributes:
            {
                const id = snapshotPatch[++i];
                const values = snapshotPatch[++i];
                const si = _snapshot_snapshot_js__rspack_import_3.snapshotInstanceManager.values.get(id);
                if (si) si.setAttribute('values', values);
                else (0,_error_js__rspack_import_0.sendCtxNotFoundEventToBackground)(id);
                break;
            }
        case _snapshotPatch_js__rspack_import_2.SnapshotOperation.DEV_ONLY_AddSnapshot:
            if (true) {
                const uniqID = snapshotPatch[++i];
                const snapshotCreator = snapshotPatch[++i];
                // HMR-related
                // Update the evaluated snapshots from JS.
                _snapshot_snapshot_js__rspack_import_3.snapshotCreatorMap[uniqID] = evaluate(snapshotCreator);
            }
            break;
        case _snapshotPatch_js__rspack_import_2.SnapshotOperation.DEV_ONLY_SetSnapshotEntryName:
            if (true) {
                const uniqID = snapshotPatch[++i];
                const entryName = snapshotPatch[++i];
                // HMR-related
                // Update the evaluated snapshot entryName from JS.
                _snapshot_snapshot_js__rspack_import_3.snapshotCreatorMap[uniqID] = evaluate(_snapshot_snapshot_js__rspack_import_3.snapshotCreatorMap[uniqID].toString().replace(/globDynamicComponentEntry/g, JSON.stringify(entryName)));
            }
            break;
    }
}
/* v8 ignore start */ /**
 * Evaluates a string as code with ReactLynx runtime injected.
 * Used for HMR (Hot Module Replacement) to update snapshot definitions.
 */ function evaluate(code) {
    if (true) // See: https://github.com/lynx-family/lynx-stack/issues/983.
    return eval(`(() => ${code})()`);
    throw new Error('unreachable: evaluate is not supported in production');
} /* v8 ignore stop */  //# sourceMappingURL=snapshotPatchApply.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/updateMainThread.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  injectUpdateMainThread: () => (injectUpdateMainThread)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _isMainThreadHydrating_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/isMainThreadHydrating.js");
/* import */ var _snapshotPatchApply_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatchApply.js");
/* import */ var _core_reload_version_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/reload-version.js");
/* import */ var _debug_formatPatch_js__rspack_import_4 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/formatPatch.js");
/* import */ var _lifecycle_constant_js__rspack_import_5 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js");
/* import */ var _list_pendingListUpdates_js__rspack_import_6 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/pendingListUpdates.js");
/* import */ var _lynx_performance_js__rspack_import_7 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/performance.js");
/* import */ var _snapshot_definition_js__rspack_import_8 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/definition.js");
/* import */ var _snapshot_workletRef_js__rspack_import_9 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletRef.js");
/* import */ var _worklet_functionality_js__rspack_import_10 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/functionality.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.











function updateMainThread({ data, patchOptions }) {
    var _console_alog, _console;
    if (patchOptions.reloadVersion < (0,_core_reload_version_js__rspack_import_3.getReloadVersion)()) return;
    const flowIds = patchOptions.flowIds;
    if (flowIds) lynx.performance.profileStart('ReactLynx::patch', {
        flowId: flowIds[0],
        flowIds
    });
    (0,_lynx_performance_js__rspack_import_7.setPipeline)(patchOptions.pipelineOptions);
    (0,_lynx_performance_js__rspack_import_7.markTiming)('mtsRenderStart');
    (0,_lynx_performance_js__rspack_import_7.markTiming)('parseChangesStart');
    const parsedData = JSON.parse(data);
    const { patchList, flushOptions = {}, delayedRunOnMainThreadData } = parsedData;
    if (false) {}
    (0,_lynx_performance_js__rspack_import_7.markTiming)('parseChangesEnd');
    (0,_lynx_performance_js__rspack_import_7.markTiming)('patchChangesStart');
    if (patchOptions.isHydration) (0,_isMainThreadHydrating_js__rspack_import_1.setMainThreadHydrating)(true);
    try {
        for (const { snapshotPatch } of patchList){
            _list_pendingListUpdates_js__rspack_import_6.__pendingListUpdates.clearAttachedLists();
            if (snapshotPatch) (0,_snapshotPatchApply_js__rspack_import_2.snapshotPatchApply)(snapshotPatch);
            _list_pendingListUpdates_js__rspack_import_6.__pendingListUpdates.flush();
        // console.debug('********** Lepus updatePatch:');
        // printSnapshotInstance(snapshotInstanceManager.values.get(-1)!);
        }
    } finally{
        (0,_lynx_performance_js__rspack_import_7.markTiming)('patchChangesEnd');
        (0,_lynx_performance_js__rspack_import_7.markTiming)('mtsRenderEnd');
        if (patchOptions.isHydration) (0,_isMainThreadHydrating_js__rspack_import_1.setMainThreadHydrating)(false);
    }
    (0,_snapshot_workletRef_js__rspack_import_9.applyRefQueue)();
    if (delayedRunOnMainThreadData && (0,_worklet_functionality_js__rspack_import_10.isMtsEnabled)()) {
        (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.setEomShouldFlushElementTree)(false);
        for (const data of delayedRunOnMainThreadData)try {
            (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.runRunOnMainThreadTask)(data.worklet, data.params, data.resolveId);
        /* v8 ignore next 3 */ } catch (e) {
            lynx.reportError(e);
        }
        (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.setEomShouldFlushElementTree)(true);
    }
    if (patchOptions.pipelineOptions) flushOptions.pipelineOptions = patchOptions.pipelineOptions;
    __FlushElementTree(_snapshot_definition_js__rspack_import_8.__page, flushOptions);
    if (flowIds) lynx.performance.profileEnd();
}
function injectUpdateMainThread() {
    Object.assign(globalThis, {
        [_lifecycle_constant_js__rspack_import_5.LifecycleConstant.patchUpdate]: updateMainThread
    });
}
/**
 * @internal
 */  //# sourceMappingURL=updateMainThread.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/ref/delay.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RefProxy: () => (RefProxy),
  runDelayedUiOps: () => (runDelayedUiOps),
  shouldDelayUiOps: () => (shouldDelayUiOps)
});
/* import */ var _core_ref_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/ref.js");
/* import */ var _snapshot_snapshotInstanceHydrationMap_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshotInstanceHydrationMap.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


/**
 * A flag to indicate whether UI operations should be delayed.
 * When set to true, UI operations will be queued in the `delayedUiOps` array
 * and executed later when `runDelayedUiOps` is called.
 * This is used before hydration to ensure UI operations are batched
 * and executed at the appropriate time.
 */ const shouldDelayUiOps = {
    value: true
};
/**
 * An array of functions that will be executed later when `runDelayedUiOps` is called.
 * These functions contain UI operations that need to be delayed.
 */ const delayedUiOps = [];
/**
 * Runs a task either immediately or delays it based on the `shouldDelayUiOps` flag.
 * @param task - The function to execute.
 */ function runOrDelay(task) {
    if (shouldDelayUiOps.value) delayedUiOps.push(task);
    else task();
}
/**
 * Executes all delayed UI operations.
 */ function runDelayedUiOps() {
    const tasks = delayedUiOps.slice();
    delayedUiOps.length = 0;
    shouldDelayUiOps.value = false;
    for (const task of tasks)task();
}
/**
 * A proxy class designed for managing and executing reference-based tasks.
 * It delays the execution of tasks until hydration is complete.
 */ class RefProxy extends _core_ref_js__rspack_import_0.SelectorRefProxy {
    createProxyTarget() {
        return new RefProxy(this.refAttr);
    }
    runOrDelay(task) {
        runOrDelay(task);
    }
    get selector() {
        var _hydrationMap_get;
        const realRefId = (_hydrationMap_get = _snapshot_snapshotInstanceHydrationMap_js__rspack_import_1.hydrationMap.get(this.refAttr[0])) !== null && _hydrationMap_get !== void 0 ? _hydrationMap_get : this.refAttr[0];
        return `[react-ref-${realRefId}-${this.refAttr[1]}]`;
    }
    constructor(refAttr){
        super();
        this.refAttr = refAttr;
        return this.createProxy();
    }
}
/**
 * @internal
 */  //# sourceMappingURL=delay.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/reload.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  reloadBackground: () => (reloadBackground),
  reloadMainThread: () => (reloadMainThread)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* import */ var _destroy_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/destroy.js");
/* import */ var _render_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/render.js");
/* import */ var _core_reload_version_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/reload-version.js");
/* import */ var _root_js__rspack_import_4 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* import */ var _shared_profile_js__rspack_import_5 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _utils_js__rspack_import_6 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* import */ var _lifecycle_constant_js__rspack_import_7 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js");
/* import */ var _list_pendingListUpdates_js__rspack_import_8 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/pendingListUpdates.js");
/* import */ var _renderToOpcodes_hydrate_js__rspack_import_9 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/hydrate.js");
/* import */ var _snapshot_definition_js__rspack_import_10 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/definition.js");
/* import */ var _snapshot_snapshot_js__rspack_import_11 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
/* import */ var _snapshot_workletRef_js__rspack_import_12 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletRef.js");
/* import */ var _event_jsReady_js__rspack_import_13 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/jsReady.js");
/* import */ var _patch_snapshotPatch_js__rspack_import_14 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
/* import */ var _ref_delay_js__rspack_import_15 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/ref/delay.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the reload (thinking of "refresh" in browser) for both main thread
 * and background thread.
 */ 















function reloadMainThread(data, options) {
    if (true) (0,_shared_profile_js__rspack_import_5.profileStart)('ReactLynx::reloadMainThread');
    (0,_core_reload_version_js__rspack_import_3.increaseReloadVersion)();
    if (typeof data == 'object' && data !== null && !(0,_utils_js__rspack_import_6.isEmptyObject)(data)) Object.assign(lynx.__initData, data);
    _snapshot_snapshot_js__rspack_import_11.snapshotInstanceManager.clear();
    _list_pendingListUpdates_js__rspack_import_8.__pendingListUpdates.clearAttachedLists();
    (0,_event_jsReady_js__rspack_import_13.clearJSReadyEventIdSwap)();
    const oldRoot = _root_js__rspack_import_4.__root;
    (0,_root_js__rspack_import_4.setRoot)(new _snapshot_snapshot_js__rspack_import_11.SnapshotInstance('root'));
    _root_js__rspack_import_4.__root.__jsx = oldRoot.__jsx;
    (0,_render_js__rspack_import_2.renderMainThread)();
    (0,_renderToOpcodes_hydrate_js__rspack_import_9.hydrate)(oldRoot, _root_js__rspack_import_4.__root, {
        skipUnRef: true
    });
    // always call this before `__FlushElementTree`
    _list_pendingListUpdates_js__rspack_import_8.__pendingListUpdates.flush();
    (0,_snapshot_workletRef_js__rspack_import_12.applyRefQueue)();
    if (_event_jsReady_js__rspack_import_13.isJSReady) __OnLifecycleEvent([
        _lifecycle_constant_js__rspack_import_7.LifecycleConstant.firstScreen,
        /* FIRST_SCREEN */ {
            root: JSON.stringify(_root_js__rspack_import_4.__root)
        }
    ]);
    __FlushElementTree(_snapshot_definition_js__rspack_import_10.__page, options);
    if (true) (0,_shared_profile_js__rspack_import_5.profileEnd)();
    return;
}
function reloadBackground(updateData) {
    if (true) (0,_shared_profile_js__rspack_import_5.profileStart)('ReactLynx::reloadBackground');
    (0,_patch_snapshotPatch_js__rspack_import_14.deinitGlobalSnapshotPatch)();
    (0,_destroy_js__rspack_import_1.destroyBackground)();
    (0,_core_reload_version_js__rspack_import_3.increaseReloadVersion)();
    // COW when modify `lynx.__initData` to make sure Provider & Consumer works
    lynx.__initData = Object.assign({}, lynx.__initData, updateData);
    _ref_delay_js__rspack_import_15.shouldDelayUiOps.value = true;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    (0,preact__rspack_import_0.render)(_root_js__rspack_import_4.__root.__jsx, _root_js__rspack_import_4.__root);
    if (true) (0,_shared_profile_js__rspack_import_5.profileEnd)();
}
 //# sourceMappingURL=reload.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/render.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  renderMainThread: () => (renderMainThread)
});
/* import */ var _root_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* import */ var _shared_profile_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _renderToOpcodes_index_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/index.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the IFR (Instant First-Frame Rendering) on main thread.
 */ 


function renderMainThread() {
    let opcodes;
    try {
        if (true) (0,_shared_profile_js__rspack_import_1.profileStart)('ReactLynx::renderMainThread');
        opcodes = (0,_renderToOpcodes_index_js__rspack_import_2.render)(_root_js__rspack_import_0.__root.__jsx, undefined, _root_js__rspack_import_0.__root);
    } catch (e) {
        lynx.reportError(e);
        opcodes = [];
        _root_js__rspack_import_0.__root.removeChildren();
    } finally{
        if (true) (0,_shared_profile_js__rspack_import_1.profileEnd)();
    }
    if (false) {}
}
 //# sourceMappingURL=render.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/list.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearListGlobal: () => (clearListGlobal),
  componentAtIndexFactory: () => (componentAtIndexFactory),
  enqueueComponentFactory: () => (enqueueComponentFactory),
  gRecycleMap: () => (gRecycleMap),
  gSignMap: () => (gSignMap)
});
/* import */ var _utils_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* import */ var _lifecycle_constant_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js");
/* import */ var _snapshot_workletRef_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletRef.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



const gSignMap = {};
const gRecycleMap = {};
const gParentWeakMap = /*#__PURE__*/ new WeakMap();
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
function clearListGlobal() {
    for(const key in gSignMap)delete gSignMap[key];
    for(const key in gRecycleMap)delete gRecycleMap[key];
}
function componentAtIndexFactory(ctx, hydrateFunction) {
    // A hack workaround to ensure childCtx has no direct reference through `__parent` to list,
    // to avoid memory leak.
    // TODO(hzy): make `__parent` a WeakRef or `#__parent` in the future.
    ctx.forEach((childCtx)=>{
        if (gParentWeakMap.has(childCtx)) ;
        else {
            gParentWeakMap.set(childCtx, childCtx.parentNode);
            Object.defineProperty(childCtx, '__parent', {
                get: ()=>gParentWeakMap.get(childCtx),
                set: (value)=>{
                    gParentWeakMap.set(childCtx, value);
                }
            });
        }
    });
    const componentAtChildCtx = (list, listID, childCtx, operationID, enableReuseNotification, enableBatchRender = false, asyncFlush = false)=>{
        var _childCtx___listItemPlatformInfo, _platformInfo_reuseidentifier;
        var _childCtx___extraProps, _childCtx___extraProps1;
        const signMap = gSignMap[listID];
        const recycleMap = gRecycleMap[listID];
        /* v8 ignore start */ if (!signMap || !recycleMap) // Kept as a safeguard in case the callback is somehow invoked after list removal.
        throw new Error('componentAtIndex called on removed list');
        /* v8 ignore end */ const platformInfo = (_childCtx___listItemPlatformInfo = childCtx.__listItemPlatformInfo) !== null && _childCtx___listItemPlatformInfo !== void 0 ? _childCtx___listItemPlatformInfo : {};
        // The lifecycle of this `__extraProps.isReady`:
        // 0 -> Promise<number> -> 1
        // 0: The initial state, the list-item is not ready yet, we will send a event to background
        //    when `componentAtIndex` is called on it
        // Promise<number>: A promise that will be resolved when the list-item is ready
        // 1: The list-item is ready, we can use it to render the list
        if (((_childCtx___extraProps = childCtx.__extraProps) === null || _childCtx___extraProps === void 0 ? void 0 : _childCtx___extraProps['isReady']) === 0) {
            if (typeof __GetAttributeByName === 'function' && __GetAttributeByName(list, 'custom-list-name') === 'list-container') ;
            else throw new Error('Unsupported: `<list-item/>` with `defer={true}` must be used with `<list custom-list-name="list-container"/>`');
            // send a event to background to render the list-item
            __OnLifecycleEvent([
                _lifecycle_constant_js__rspack_import_1.LifecycleConstant.publishEvent,
                {
                    handlerName: `${childCtx.__id}:__extraProps:onComponentAtIndex`,
                    data: {}
                }
            ]);
            // use a promise to track the list-item's readiness
            let p;
            return p = new Promise((resolve)=>{
                Object.defineProperty(childCtx.__extraProps, 'isReady', {
                    set (isReady) {
                        if (isReady === 1) {
                            delete childCtx.__extraProps['isReady'];
                            childCtx.__extraProps['isReady'] = 1;
                            resolvedPromise.then(()=>{
                                // the cellIndex may be changed already, but the `childCtx` is the same
                                resolve(componentAtChildCtx(list, listID, childCtx, operationID, enableReuseNotification));
                            });
                        }
                    },
                    get () {
                        return p;
                    }
                });
            });
        } else if ((0,_utils_js__rspack_import_0.maybePromise)((_childCtx___extraProps1 = childCtx.__extraProps) === null || _childCtx___extraProps1 === void 0 ? void 0 : _childCtx___extraProps1['isReady'])) throw new Error('componentAtIndex was called on a pending deferred list item');
        const uniqID = childCtx.type + ((_platformInfo_reuseidentifier = platformInfo['reuse-identifier']) !== null && _platformInfo_reuseidentifier !== void 0 ? _platformInfo_reuseidentifier : '');
        const recycleSignMap = recycleMap.get(uniqID);
        if (childCtx.__elements) {
            /**
             * If this situation is encountered, there might be two cases:
             * 1. Reusing with itself
             *    In this case, enqueueComponent will be triggered first, followed by componentAtIndex.
             * 2. Moving
             *    In this case, the trigger order is uncertain; componentAtIndex might be triggered first, or enqueueComponent might be triggered first.
             *
             * When enqueueComponent is triggered first, there must be an item in the reuse pool with the same sign as here, which can be returned directly.
             * When componentAtIndex is triggered first, a clone needs to be made first, then follow the logic for adding or reusing. The cloned item will enter the reuse pool in the subsequent enqueueComponent.
             */ const root = childCtx.__elements[0];
            const sign = __GetElementUniqueID(root);
            if (recycleSignMap === null || recycleSignMap === void 0 ? void 0 : recycleSignMap.has(sign)) {
                signMap.set(sign, childCtx);
                recycleSignMap.delete(sign);
                if (!enableBatchRender) __FlushElementTree(root, {
                    triggerLayout: true,
                    operationID,
                    elementID: sign,
                    listID
                });
                else if (enableBatchRender && asyncFlush) __FlushElementTree(root, {
                    asyncFlush: true
                });
                // enableBatchRender == true && asyncFlush == false
                // in this case, no need to invoke __FlushElementTree because in the end of componentAtIndexes(), the list will invoke __FlushElementTree.
                return sign;
            } else {
                const newCtx = childCtx.takeElements();
                signMap.set(sign, newCtx);
            }
        }
        if (recycleSignMap && recycleSignMap.size > 0) {
            var _oldCtx___extraProps;
            const [first] = recycleSignMap;
            const [sign, oldCtx] = first;
            recycleSignMap.delete(sign);
            hydrateFunction(oldCtx, childCtx);
            oldCtx.unRenderElements();
            if (!oldCtx.__id) oldCtx.tearDown();
            else if (((_oldCtx___extraProps = oldCtx.__extraProps) === null || _oldCtx___extraProps === void 0 ? void 0 : _oldCtx___extraProps['isReady']) === 1) __OnLifecycleEvent([
                _lifecycle_constant_js__rspack_import_1.LifecycleConstant.publishEvent,
                {
                    handlerName: `${oldCtx.__id}:__extraProps:onRecycleComponent`,
                    data: {}
                }
            ]);
            const root = childCtx.__element_root;
            (0,_snapshot_workletRef_js__rspack_import_2.applyRefQueue)();
            // In the defer `list-item` scenario, `componentAtIndex` occurs with delay.
            // Within `componentAtIndex`, nodes that quickly appear and disappear due to re-layout will be enqueued again,
            // causing the mapping relationship between sign and SnapshotInstance to become corrupted.
            // This results in a SnapshotInstance without `__elements` being enqueued.
            signMap.set(sign, childCtx);
            if (!enableBatchRender) {
                const flushOptions = {
                    triggerLayout: true,
                    operationID,
                    elementID: sign,
                    listID
                };
                if (enableReuseNotification) flushOptions.listReuseNotification = {
                    listElement: list,
                    itemKey: platformInfo['item-key']
                };
                __FlushElementTree(root, flushOptions);
            } else if (enableBatchRender && asyncFlush) {
                const flushOptions = {
                    asyncFlush: true
                };
                if (enableReuseNotification) flushOptions.listReuseNotification = {
                    listElement: list,
                    itemKey: platformInfo['item-key']
                };
                __FlushElementTree(root, flushOptions);
            }
            return sign;
        }
        childCtx.ensureElements();
        const root = childCtx.__element_root;
        __AppendElement(list, root);
        const sign = __GetElementUniqueID(root);
        (0,_snapshot_workletRef_js__rspack_import_2.applyRefQueue)();
        signMap.set(sign, childCtx);
        if (!enableBatchRender) __FlushElementTree(root, {
            triggerLayout: true,
            operationID,
            elementID: sign,
            listID
        });
        else if (enableBatchRender && asyncFlush) __FlushElementTree(root, {
            asyncFlush: true
        });
        return sign;
    };
    function componentAtIndex(list, listID, cellIndex, operationID, enableReuseNotification) {
        const childCtx = ctx[cellIndex];
        if (!childCtx) throw new Error('childCtx not found');
        const r = componentAtChildCtx(list, listID, childCtx, operationID, enableReuseNotification);
        /* v8 ignore start */ if (false) {}
        else return typeof r === 'number' ? r : undefined;
    /* v8 ignore end */ }
    function componentAtIndexes(list, listID, cellIndexes, operationIDs, enableReuseNotification, asyncFlush) {
        let hasUnready = false;
        const p = [];
        cellIndexes.forEach((cellIndex, index)=>{
            const operationID = operationIDs[index];
            const childCtx = ctx[cellIndex];
            if (!childCtx) throw new Error('childCtx not found');
            const u = componentAtChildCtx(list, listID, childCtx, operationID, enableReuseNotification, true, asyncFlush);
            if (typeof u === 'number') ;
            else hasUnready = true;
            p.push(u);
        });
        // We need __FlushElementTree twice:
        // 1. The first time is sync, we flush the items that are ready, with unready items' uiSign as -1.
        // 2. The second time is async, with all the uiSigns.
        // NOTE: The `operationIDs` passed to __FlushElementTree must be the one passed in,
        // not the one generated by any code here, to workaround a bug of Lynx Engine.
        // So we CANNOT split the `operationIDs` into two parts: one for ready items, one for unready items.
        if (hasUnready) Promise.all(p).then((uiSigns)=>{
            __FlushElementTree(list, {
                triggerLayout: true,
                operationIDs,
                elementIDs: uiSigns,
                listID
            });
        });
        __FlushElementTree(list, {
            triggerLayout: true,
            operationIDs,
            elementIDs: cellIndexes.map((_, index)=>typeof p[index] === 'number' ? p[index] : -1),
            listID
        });
    }
    return [
        componentAtIndex,
        componentAtIndexes
    ];
}
function enqueueComponentFactory() {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const enqueueComponent = (_, listID, sign)=>{
        var _childCtx___listItemPlatformInfo, _platformInfo_reuseidentifier;
        const signMap = gSignMap[listID];
        const recycleMap = gRecycleMap[listID];
        if (!signMap || !recycleMap) throw new Error('enqueueComponent called on removed list');
        const childCtx = signMap.get(sign);
        if (!childCtx) return;
        const platformInfo = (_childCtx___listItemPlatformInfo = childCtx.__listItemPlatformInfo) !== null && _childCtx___listItemPlatformInfo !== void 0 ? _childCtx___listItemPlatformInfo : {};
        const uniqID = childCtx.type + ((_platformInfo_reuseidentifier = platformInfo['reuse-identifier']) !== null && _platformInfo_reuseidentifier !== void 0 ? _platformInfo_reuseidentifier : '');
        if (!recycleMap.has(uniqID)) recycleMap.set(uniqID, new Map());
        recycleMap.get(uniqID).set(sign, childCtx);
    };
    return enqueueComponent;
} //# sourceMappingURL=list.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/listUpdateInfo.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ListUpdateInfoRecording: () => (ListUpdateInfoRecording)
});
/* import */ var _list_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/list.js");
/* import */ var _shared_profile_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _renderToOpcodes_hydrate_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/hydrate.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



class ListUpdateInfoRecording {
    // private __commitAndReset() {
    //   (this.__pendingAttributes ??= []).push(this.__toAttribute());
    //   this.oldChildNodes = this.list.childNodes;
    //   this.oldChildNodesSet = new Set(this.oldChildNodes);
    //   this.removeChild1.clear();
    //   this.removeChild2.clear();
    //   this.insertBefore.clear();
    //   this.appendChild.length = 0;
    //   this.platformInfoUpdate.clear();
    // }
    flush() {
        if (!this.list.__elements) return undefined;
        const elementIndex = this.list.__snapshot_def.slot[0][1];
        const listElement = this.list.__elements[elementIndex];
        // this.__pendingAttributes?.forEach(pendingAttribute => {
        //   __SetAttribute(listElement, "update-list-info", pendingAttribute);
        //   __FlushElementTree(listElement);
        // });
        const updateListInfo = this.__toAttribute();
        if (true) {
            const listID = __GetElementUniqueID(listElement);
            (0,_shared_profile_js__rspack_import_1.profileStart)(`ReactLynx::listFlush::updateListInfo`, {
                args: {
                    'list id': String(listID),
                    'update list info': JSON.stringify(updateListInfo)
                }
            });
        }
        __SetAttribute(listElement, 'update-list-info', updateListInfo);
        const [componentAtIndex, componentAtIndexes] = (0,_list_js__rspack_import_0.componentAtIndexFactory)(this.list.childNodes, _renderToOpcodes_hydrate_js__rspack_import_2.hydrate);
        __UpdateListCallbacks(listElement, componentAtIndex, (0,_list_js__rspack_import_0.enqueueComponentFactory)(), componentAtIndexes);
        if (true) (0,_shared_profile_js__rspack_import_1.profileEnd)();
        return this.list.__id;
    }
    getAttachedListId() {
        if (!this.list.__elements) return undefined;
        return this.list.__id;
    }
    onInsertBefore(newNode, existingNode) {
        if (newNode.parentNode) //   this.__commitAndReset();
        // }
        this.removeChild.add(newNode);
        if (existingNode) {
            var _this_insertBefore_get;
            // if (!this.oldChildNodesSet.has(existingNode)) {
            //   this.__commitAndReset();
            // }
            const newChildren = (_this_insertBefore_get = this.insertBefore.get(existingNode)) !== null && _this_insertBefore_get !== void 0 ? _this_insertBefore_get : [];
            newChildren.push(newNode);
            this.insertBefore.set(existingNode, newChildren);
        } else this.appendChild.push(newNode);
    }
    onRemoveChild(child) {
        // if (!this.oldChildNodesSet.has(child)) {
        //   this.__commitAndReset();
        // }
        this.removeChild.add(child);
    }
    onSetAttribute(child, attr, _oldAttr) {
        this.platformInfoUpdate.set(child, attr);
    }
    __toAttribute() {
        const { removeChild, insertBefore, appendChild, platformInfoUpdate } = this;
        const removals = [];
        const insertions = [];
        const updates = [];
        let j = 0;
        for(let i = 0; i < this.oldChildNodes.length; i++, j++){
            var _ref;
            var _insertBefore_get;
            const child = this.oldChildNodes[i];
            const insertedBefore = (_ref = (_insertBefore_get = insertBefore.get(child)) === null || _insertBefore_get === void 0 ? void 0 : _insertBefore_get.length) !== null && _ref !== void 0 ? _ref : 0;
            if (platformInfoUpdate.has(child)) updates.push({
                ...platformInfoUpdate.get(child),
                from: +j + insertedBefore,
                to: +j + insertedBefore,
                // no flush
                flush: false,
                type: child.type
            });
            if (insertBefore.has(child)) {
                const children = insertBefore.get(child);
                children.forEach((c)=>{
                    insertions.push({
                        position: j,
                        type: c.type,
                        ...c.__listItemPlatformInfo
                    });
                    j++;
                });
            }
            if (removeChild.has(child)) {
                removals.push(i);
                removeChild.delete(child);
                j--;
            }
        }
        for(let i = 0; i < appendChild.length; i++){
            const child = appendChild[i];
            insertions.push({
                position: j + i,
                type: child.type,
                ...child.__listItemPlatformInfo
            });
        }
        insertions.sort((a, b)=>a.position - b.position);
        removals.sort((a, b)=>a - b);
        if (SystemInfo.lynxSdkVersion === '2.14' || SystemInfo.lynxSdkVersion === '2.15' || SystemInfo.lynxSdkVersion === '2.16' || SystemInfo.lynxSdkVersion === '2.17' || SystemInfo.lynxSdkVersion === '2.18') {
            const elementIndex = this.list.__snapshot_def.slot[0][1];
            const listElement = this.list.__elements[elementIndex];
            // `__GetAttributeByName` is available since Lynx 2.14
            if (__GetAttributeByName(listElement, 'custom-list-name') === 'list-container') {
                // `updateAction` must be full (not incremental) when Lynx version <= 2.18 and
                // when `custom-list-name` is `list-container` (available when Lynx version >= 2.14) is true,
                updates.length = 0;
                this.list.childNodes.forEach((child, index)=>{
                    updates.push({
                        ...child.__listItemPlatformInfo,
                        from: index,
                        to: index,
                        // no flush
                        flush: false,
                        type: child.type
                    });
                });
            }
        }
        return {
            insertAction: insertions,
            removeAction: removals,
            updateAction: updates
        };
    }
    toJSON() {
        // if (this.__pendingAttributes) {
        //   return [...this.__pendingAttributes, this.__toAttribute()];
        // } else {
        //   return [this.__toAttribute()];
        // }
        return [
            this.__toAttribute()
        ];
    }
    constructor(list){
        // private oldChildNodesSet: Set<SnapshotInstance>;
        this.removeChild = new Set();
        this.insertBefore = new Map();
        this.appendChild = [];
        this.platformInfoUpdate = new Map();
        this.list = list;
        this.oldChildNodes = list.childNodes;
    // this.oldChildNodesSet = new Set(this.oldChildNodes);
    }
} //# sourceMappingURL=listUpdateInfo.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/pendingListUpdates.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __pendingListUpdates: () => (__pendingListUpdates)
});
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const __pendingListUpdates = {
    values: {},
    clear (id) {
        if (this.values) delete this.values[id];
    },
    clearAttachedLists () {
        if (this.values) Object.values(this.values).map((update)=>update.getAttachedListId()).filter((id)=>id !== undefined).forEach((id)=>this.clear(id));
    },
    flush () {
        if (this.values) Object.values(this.values).map((update)=>update.flush()).filter((id)=>id !== undefined).forEach((id)=>this.clear(id));
    },
    flushWithId (id) {
        var _this_values_id;
        if (this.values && ((_this_values_id = this.values[id]) === null || _this_values_id === void 0 ? void 0 : _this_values_id.flush()) !== undefined) this.clear(id);
    },
    runWithoutUpdates (cb) {
        const old = this.values;
        this.values = null;
        try {
            cb();
        } finally{
            this.values = old;
        }
    }
}; //# sourceMappingURL=pendingListUpdates.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/calledByNative.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  injectCalledByNative: () => (injectCalledByNative)
});
/* import */ var _performance_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/performance.js");
/* import */ var _core_lynx_page_data_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/lynx-page-data.js");
/* import */ var _root_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* import */ var _lifecycle_constant_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js");
/* import */ var _lifecycle_event_jsReady_js__rspack_import_4 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/jsReady.js");
/* import */ var _lifecycle_reload_js__rspack_import_5 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/reload.js");
/* import */ var _lifecycle_render_js__rspack_import_6 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/render.js");
/* import */ var _list_pendingListUpdates_js__rspack_import_7 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/pendingListUpdates.js");
/* import */ var _renderToOpcodes_hydrate_js__rspack_import_8 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/hydrate.js");
/* import */ var _renderToOpcodes_opcodes_js__rspack_import_9 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/opcodes.js");
/* import */ var _snapshot_definition_js__rspack_import_10 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/definition.js");
/* import */ var _snapshot_snapshot_js__rspack_import_11 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
/* import */ var _snapshot_workletRef_js__rspack_import_12 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletRef.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.













function ssrEncode() {
    const { __opcodes } = _root_js__rspack_import_2.__root;
    delete _root_js__rspack_import_2.__root.__opcodes;
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const oldToJSON = _snapshot_snapshot_js__rspack_import_11.SnapshotInstance.prototype.toJSON;
    _snapshot_snapshot_js__rspack_import_11.SnapshotInstance.prototype.toJSON = function() {
        return [
            this.type,
            this.__id,
            this.__elements
        ];
    };
    try {
        const replacer = (_key, value)=>{
            if (value && typeof value === 'object' && '_wkltId' in value) return null;
            return value;
        };
        return JSON.stringify({
            __opcodes,
            __root_values: _root_js__rspack_import_2.__root.__values
        }, replacer);
    } finally{
        _snapshot_snapshot_js__rspack_import_11.SnapshotInstance.prototype.toJSON = oldToJSON;
    }
}
function ssrHydrate(info) {
    const nativePage = __GetPageElement();
    if (!nativePage) throw new Error('SSR Hydration Failed! Please check if the SSR content loaded successfully!');
    (0,_lifecycle_event_jsReady_js__rspack_import_4.resetJSReady)();
    (0,_snapshot_definition_js__rspack_import_10.setupPage)(nativePage);
    const refsMap = __GetTemplateParts(nativePage);
    const { __opcodes, __root_values } = JSON.parse(info);
    if (__root_values) _root_js__rspack_import_2.__root.setAttribute('values', __root_values);
    (0,_renderToOpcodes_opcodes_js__rspack_import_9.ssrHydrateByOpcodes)(__opcodes, _root_js__rspack_import_2.__root, refsMap);
    _root_js__rspack_import_2.__root.__elements = [
        nativePage
    ];
    _root_js__rspack_import_2.__root.__element_root = nativePage;
}
function injectCalledByNative() {
    if (false) {}
    const calledByNative = {
        renderPage,
        updatePage,
        updateGlobalProps,
        getPageData: function() {
            return null;
        },
        removeComponents: function() {},
        ... false ? 0 : {}
    };
    Object.assign(globalThis, calledByNative);
    Object.assign(globalThis, {
        [_lifecycle_constant_js__rspack_import_3.LifecycleConstant.jsReady]: _lifecycle_event_jsReady_js__rspack_import_4.jsReady
    });
}
function renderPage(data) {
    // reset `jsReady` state
    (0,_lifecycle_event_jsReady_js__rspack_import_4.resetJSReady)();
    lynx.__initData = data !== null && data !== void 0 ? data : {};
    (0,_snapshot_definition_js__rspack_import_10.setupPage)(__CreatePage('0', 0));
    _root_js__rspack_import_2.__root.ensureElements();
    (0,_lifecycle_render_js__rspack_import_6.renderMainThread)();
    // always call this before `__FlushElementTree`
    // (There is an implicit `__FlushElementTree` in `renderPage`)
    _list_pendingListUpdates_js__rspack_import_7.__pendingListUpdates.flush();
    (0,_snapshot_workletRef_js__rspack_import_12.applyRefQueue)();
    if (true) (0,_lifecycle_event_jsReady_js__rspack_import_4.jsReady)();
}
function updatePage(data, options) {
    if (options === null || options === void 0 ? void 0 : options.reloadTemplate) {
        (0,_lifecycle_reload_js__rspack_import_5.reloadMainThread)(data, options);
        return;
    }
    (0,_core_lynx_page_data_js__rspack_import_1.applyUpdatePageData)(data, options);
    const flushOptions = options !== null && options !== void 0 ? options : {};
    if (!_lifecycle_event_jsReady_js__rspack_import_4.isJSReady) {
        const oldRoot = _root_js__rspack_import_2.__root;
        (0,_root_js__rspack_import_2.setRoot)(new _snapshot_snapshot_js__rspack_import_11.SnapshotInstance('root'));
        _root_js__rspack_import_2.__root.__jsx = oldRoot.__jsx;
        (0,_performance_js__rspack_import_0.setPipeline)(options === null || options === void 0 ? void 0 : options.pipelineOptions);
        (0,_performance_js__rspack_import_0.markTiming)('updateDiffVdomStart');
        _list_pendingListUpdates_js__rspack_import_7.__pendingListUpdates.clearAttachedLists();
        (0,_lifecycle_render_js__rspack_import_6.renderMainThread)();
        // As said by codename `jsReadyEventIdSwap`, this swap will only be used for event remap,
        // because ref & unref cause by previous render will be ignored
        (0,_renderToOpcodes_hydrate_js__rspack_import_8.hydrate)(oldRoot, _root_js__rspack_import_2.__root, {
            skipUnRef: true,
            swap: _lifecycle_event_jsReady_js__rspack_import_4.jsReadyEventIdSwap
        });
        // always call this before `__FlushElementTree`
        _list_pendingListUpdates_js__rspack_import_7.__pendingListUpdates.flush();
        (0,_snapshot_workletRef_js__rspack_import_12.applyRefQueue)();
        flushOptions.triggerDataUpdated = true;
        (0,_performance_js__rspack_import_0.markTiming)('updateDiffVdomEnd');
    }
    __FlushElementTree(_snapshot_definition_js__rspack_import_10.__page, flushOptions);
}
function updateGlobalProps(_data, options) {
    if (options) __FlushElementTree(_snapshot_definition_js__rspack_import_10.__page, options);
    else __FlushElementTree();
}
/**
 * @internal
 */  //# sourceMappingURL=calledByNative.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/component.js"() {
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/* eslint-disable */ //# sourceMappingURL=component.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/dynamic-js.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __dynamicImport: () => (__dynamicImport),
  loadDynamicJS: () => (loadDynamicJS)
});
/* import */ var _lazy_bundle_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/lazy-bundle.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function loadDynamicJS(url) {
    _ReportError(new Error(`A dynamic import (to "${url}") is leaked to Lepus bundle.`), {
        errorCode: 202
    });
    // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
    return Promise.reject();
}
function __dynamicImport(url, options) {
    var _options_with;
    const t = options === null || options === void 0 ? void 0 : (_options_with = options.with) === null || _options_with === void 0 ? void 0 : _options_with.type;
    if (t === 'component' || t === 'tsx' || t === 'jsx') return (0,_lazy_bundle_js__rspack_import_0.loadLazyBundle)(url);
    else return loadDynamicJS(url);
} //# sourceMappingURL=dynamic-js.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/element.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createElement: () => (createElement)
});
/* import */ var _lynx_js_react_lepus__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/index.js");
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * export to users, and in framework would use preact createElement directly
 */ const createElement = function(type, props, ...rest) {
    const _baseCreateElement = _lynx_js_react_lepus__rspack_import_0.createElement;
    /**
     * for built-in element which would create snapshot instance
     *
     * 1. transform props to values
     * 2. transform children to $0 for slot v2
     */ if (typeof type === 'string') {
        let key = undefined;
        let spreadProps = props !== null && props !== void 0 ? props : {};
        if (props && 'key' in props) {
            const { key: keyValue, ...propsWithoutKey } = props;
            key = keyValue;
            spreadProps = propsWithoutKey;
        }
        return _baseCreateElement(type, Object.assign({}, {
            key,
            values: [
                {
                    ...spreadProps,
                    __spread: true
                }
            ]
        }, rest.length > 0 ? {
            $0: rest.length > 1 ? rest : rest[0]
        } : undefined));
    }
    return _baseCreateElement(type, props, ...rest);
}; //# sourceMappingURL=element.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/env.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setupLynxEnv: () => (setupLynxEnv)
});
/* import */ var _core_lynx_data_processors_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/lynx-data-processors.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function setupLynxEnv() {
    var _lynx_SystemInfo;
    lynx.__initData = {};
    // @ts-expect-error no type for lynx.SystemInfo
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    globalThis.SystemInfo = (_lynx_SystemInfo = lynx.SystemInfo) !== null && _lynx_SystemInfo !== void 0 ? _lynx_SystemInfo : {};
    lynx.reportError = function(e) {
        const error = e instanceof Error ? e : new Error(JSON.stringify(e));
        _ReportError(error, {
            errorCode: 1101
        });
    };
    lynx.triggerGlobalEventFromLepus = function(eventName, params) {
        __OnLifecycleEvent([
            'globalEventFromLepus',
            [
                eventName,
                params
            ]
        ]);
    };
    {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        function __name(empty) {
            return `Native${empty}Modules`;
        }
        // TODO(hongzhiyuan.hzy): make sure this is run before any other code (especially code access `NativeModules`)
        // @ts-expect-error hack
        if (typeof globalThis[__name('')] === 'undefined') globalThis[__name('')] = undefined;
    }
    lynx.registerDataProcessors = function(dataProcessorDefinition) {
        globalThis.processData = (0,_core_lynx_data_processors_js__rspack_import_0.createProcessData)(dataProcessorDefinition);
    };
    // register empty DataProcessors to make sure `globalThis.processData` is set
    lynx.registerDataProcessors();
} //# sourceMappingURL=env.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/injectLepusMethods.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  injectLepusMethods: () => (injectLepusMethods)
});
/* import */ var _snapshot_snapshot_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function injectLepusMethods() {
    Object.assign(globalThis, {
        getUniqueIdListBySnapshotId,
        getSnapshotIdByUniqueId
    });
}
/**
 * Get the list of `unique_id` of the fiber element by the SnapshotInstance `__id`.
 */ function getUniqueIdListBySnapshotId({ snapshotId }) {
    var _si___elements;
    const si = _snapshot_snapshot_js__rspack_import_0.snapshotInstanceManager.values.get(snapshotId);
    if (si === null || si === void 0 ? void 0 : (_si___elements = si.__elements) === null || _si___elements === void 0 ? void 0 : _si___elements.length) {
        const uniqueIdList = [];
        for (const element of si.__elements){
            const uniqueId = __GetElementUniqueID(element);
            uniqueIdList.push(uniqueId);
        }
        return {
            uniqueIdList
        };
    }
    return null;
}
/**
 * Get the SnapshotInstance `__id` of the fiber element by the `unique_id`.
 */ function getSnapshotIdByUniqueId({ uniqueId }) {
    for (const si of _snapshot_snapshot_js__rspack_import_0.snapshotInstanceManager.values.values()){
        var _si___elements;
        if (si === null || si === void 0 ? void 0 : (_si___elements = si.__elements) === null || _si___elements === void 0 ? void 0 : _si___elements.length) for (const element of si.__elements){
            const unique_id = __GetElementUniqueID(element);
            if (unique_id === uniqueId) return {
                snapshotId: si.__id
            };
        }
    }
    return null;
}
/**
 * @internal
 */  //# sourceMappingURL=injectLepusMethods.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/lazy-bundle.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  loadLazyBundle: () => (loadLazyBundle),
  makeSyncThen: () => (makeSyncThen)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * To make code below works
 * const App1 = lazy(() => import("./x").then(({App1}) => ({default: App1})))
 * const App2 = lazy(() => import("./x").then(({App2}) => ({default: App2})))
 * @internal
 */ const makeSyncThen = function(result) {
    return function(onF, _onR) {
        if (onF) {
            let ret;
            try {
                ret = onF(result);
            } catch (e) {
                // if (onR) {
                //   return Promise.resolve(onR(e));
                // }
                return Promise.reject(e);
            }
            if (ret && typeof ret.then === 'function' /* `thenable` object */ ) //   import("./x").then(() => new Promise(...))
            // )
            // Calling `then` and passing a callback is standard behavior
            // but in Lepus runtime the callback will never be called
            // So can be simplified to code below
            return ret;
            const p = Promise.resolve(ret);
            const then = makeSyncThen(ret);
            p.then = then;
            return p;
        }
        return this;
    };
};
/**
 * Load dynamic component from source. Designed to be used with `lazy`.
 * @param source - where dynamic component template.js locates
 * @returns
 * @public
 */ const loadLazyBundle = /*#__PURE__*/ (()=>{
    lynx.loadLazyBundle = loadLazyBundle;
    function loadLazyBundle(source) {
        {
            const query = __QueryComponent(source);
            let result;
            try {
                result = query.evalResult;
            } catch (e) {
                // Here we cannot return a rejected promise
                // (which will eventually be an unhandled rejection and cause unnecessary redbox)
                // But we still need a object in shape of Promise
                // So we return a Promise which will never resolve or reject,
                // which fit our principle "lepus run only once at first-screen" better
                return new Promise(()=>{});
            }
            const r = Promise.resolve(result);
            // Why we should modify the implementation of `then`?
            // We should make it `sync` so lepus first-screen render can use result above instantly
            // We also should keep promise shape
            r.then = makeSyncThen(result);
            return r;
        }
        throw new Error('unreachable');
    }
    return loadLazyBundle;
})();
//# sourceMappingURL=lazy-bundle.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/nodesRef.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  serializeNodesRef: () => (serializeNodesRef)
});
/* import */ var _lifecycle_ref_delay_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/ref/delay.js");

/**
 * `_nodeSelectToken.type` values produced by Lynx core's selector query:
 *   - `0` = CSS selector (`select` / `selectAll` / `selectRoot`)
 *   - `1` = React ref (`selectReactRef`)
 *   - `2` = element unique id (`selectUniqueID`)
 *
 * We only support type `0` — the apply side resolves it via
 * `__QuerySelector`. Types `1` / `2` would need their own lookup PAPIs
 * (`__GetElementByUniqueId`, etc.) which we don't wire today.
 */ const NodeSelectType = {
    Selector: 0,
    ReactRef: 1,
    UniqueID: 2
};
const serializeNodesRef = (nodesRef)=>{
    if (nodesRef instanceof _lifecycle_ref_delay_js__rspack_import_0.RefProxy) return nodesRef.selector;
    const nodeSelectToken = nodesRef._nodeSelectToken;
    if (nodeSelectToken.type !== NodeSelectType.Selector) throw new Error(`[createPortal] unsupported NodesRef type ${nodeSelectToken.type} ` + `(identifier ${JSON.stringify(nodeSelectToken.identifier)}). ` + `Pass a CSS-selector NodesRef from \`lynx.createSelectorQuery().select(...)\` ` + `or a React ref instead.`);
    return nodeSelectToken.identifier;
}; //# sourceMappingURL=nodesRef.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/performance.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PerfSpecificKey: () => (PerfSpecificKey),
  PerformanceTimingFlags: () => (PerformanceTimingFlags),
  PipelineOrigins: () => (PipelineOrigins),
  beginPipeline: () => (beginPipeline),
  globalPipelineOptions: () => (globalPipelineOptions),
  initTimingAPI: () => (initTimingAPI),
  markTiming: () => (markTiming),
  markTimingLegacy: () => (markTimingLegacy),
  setPipeline: () => (setPipeline)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* import */ var _shared_render_constants_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
/* import */ var _utils_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



const PerformanceTimingFlags = {
    reactLynxHydrate: 'react_lynx_hydrate'
};
const PipelineOrigins = {
    reactLynxHydrate: 'reactLynxHydrate',
    updateTriggeredByBts: 'updateTriggeredByBts'
};
/**
 * @deprecated used by old timing api(setState timing flag)
 */ const PerfSpecificKey = '__lynx_timing_flag';
let timingFlag;
let shouldMarkDiffVdomStart = false;
let shouldMarkDiffVdomEnd = false;
let globalPipelineOptions;
/**
 * @deprecated used by old timing api(setState timing flag)
 */ function markTimingLegacy(key, timingFlag_) {
    var _lynx_getNativeApp_markTiming, _lynx_getNativeApp;
    switch(key){
        case 'updateSetStateTrigger':
            shouldMarkDiffVdomStart = true;
            shouldMarkDiffVdomEnd = true;
            timingFlag = timingFlag_;
            break;
        case 'updateDiffVdomStart':
            /* v8 ignore start */ if (!shouldMarkDiffVdomStart) return;
            /* v8 ignore stop */ shouldMarkDiffVdomStart = false;
            break;
        case 'updateDiffVdomEnd':
            if (!shouldMarkDiffVdomEnd) return;
            shouldMarkDiffVdomEnd = false;
            break;
    }
    (_lynx_getNativeApp_markTiming = (_lynx_getNativeApp = lynx.getNativeApp()).markTiming) === null || _lynx_getNativeApp_markTiming === void 0 ? void 0 : _lynx_getNativeApp_markTiming.call(_lynx_getNativeApp, timingFlag, key);
}
function beginPipeline(needTimestamps, pipelineOrigin, timingFlag) {
    var _lynx_performance__generatePipelineOptions, _lynx_performance;
    globalPipelineOptions = (_lynx_performance = lynx.performance) === null || _lynx_performance === void 0 ? void 0 : (_lynx_performance__generatePipelineOptions = _lynx_performance._generatePipelineOptions) === null || _lynx_performance__generatePipelineOptions === void 0 ? void 0 : _lynx_performance__generatePipelineOptions.call(_lynx_performance);
    if (globalPipelineOptions) {
        var _lynx_performance__onPipelineStart, _lynx_performance1, _lynx_performance__onPipelineStart1, _lynx_performance2, _lynx_performance__bindPipelineIdWithTimingFlag, _lynx_performance3;
        globalPipelineOptions.needTimestamps = needTimestamps;
        globalPipelineOptions.pipelineOrigin = pipelineOrigin;
        globalPipelineOptions.dsl = 'reactLynx';
        switch(pipelineOrigin){
            case PipelineOrigins.reactLynxHydrate:
                globalPipelineOptions.stage = 'hydrate';
                break;
            case PipelineOrigins.updateTriggeredByBts:
                globalPipelineOptions.stage = 'update';
                break;
        }
        if ((0,_utils_js__rspack_import_2.isSdkVersionGt)(3, 0)) (_lynx_performance1 = lynx.performance) === null || _lynx_performance1 === void 0 ? void 0 : (_lynx_performance__onPipelineStart = _lynx_performance1._onPipelineStart) === null || _lynx_performance__onPipelineStart === void 0 ? void 0 : _lynx_performance__onPipelineStart.call(_lynx_performance1, globalPipelineOptions.pipelineID, globalPipelineOptions);
        else (_lynx_performance2 = lynx.performance) === null || _lynx_performance2 === void 0 ? void 0 : (_lynx_performance__onPipelineStart1 = _lynx_performance2._onPipelineStart) === null || _lynx_performance__onPipelineStart1 === void 0 ? void 0 : _lynx_performance__onPipelineStart1.call(_lynx_performance2, globalPipelineOptions.pipelineID);
        if (timingFlag) (_lynx_performance3 = lynx.performance) === null || _lynx_performance3 === void 0 ? void 0 : (_lynx_performance__bindPipelineIdWithTimingFlag = _lynx_performance3._bindPipelineIdWithTimingFlag) === null || _lynx_performance__bindPipelineIdWithTimingFlag === void 0 ? void 0 : _lynx_performance__bindPipelineIdWithTimingFlag.call(_lynx_performance3, globalPipelineOptions.pipelineID, timingFlag);
    }
}
function setPipeline(pipeline) {
    globalPipelineOptions = pipeline;
}
function markTiming(timestampKey, force) {
    var _lynx_performance__markTiming, _lynx_performance;
    if (globalPipelineOptions && (force || globalPipelineOptions.needTimestamps)) (_lynx_performance = lynx.performance) === null || _lynx_performance === void 0 ? void 0 : (_lynx_performance__markTiming = _lynx_performance._markTiming) === null || _lynx_performance__markTiming === void 0 ? void 0 : _lynx_performance__markTiming.call(_lynx_performance, globalPipelineOptions.pipelineID, timestampKey);
}
function initTimingAPI() {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const helper = ()=>{};
    const onHook = (old, ...args)=>{
        helper();
        /* v8 ignore start */ if (old) old(...args);
    /* v8 ignore stop */ };
    (0,_utils_js__rspack_import_2.hook)(preact__rspack_import_0.options, _shared_render_constants_js__rspack_import_1.RENDER_COMPONENT, onHook);
    (0,_utils_js__rspack_import_2.hook)(preact__rspack_import_0.options, _shared_render_constants_js__rspack_import_1.ROOT, onHook);
}
/**
 * @internal
 */  //# sourceMappingURL=performance.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/portals.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearPendingPortalInsertBefore: () => (/* reexport safe */ _portalsPending_js__rspack_import_0.clearPendingPortalInsertBefore),
  createPortal: () => (createPortal)
});
/* import */ var _portalsPending_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/portalsPending.js");
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * Create a `Portal` to continue rendering the vnode tree at a different DOM node.
 *
 * @public
 */ function createPortal(vnode, container) {
    return null;
} //# sourceMappingURL=portals.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/portalsPending.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearPendingPortalInsertBefore: () => (clearPendingPortalInsertBefore),
  pendingInsertBefore: () => (pendingInsertBefore)
});
/* import */ var _nodesRef_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/nodesRef.js");
/* import */ var _lifecycle_patch_snapshotPatch_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
/* import */ var _snapshot_reconstructInstanceTree_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/reconstructInstanceTree.js");
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



/**
 * Tuples of `(container, child, before)` queued by `Portal`'s pre-hydrate
 * `fakeRoot.insertBefore` — the global patch buffer is `undefined` before
 * hydrate, so the BSI constructor's `CreateElement` push and our
 * `nodesRefInsertBefore` push would both be silently dropped. We hold them
 * here and replay during `clearPendingPortalInsertBefore` (called from
 * `hydrate()` once the global buffer is initialized).
 */ const pendingInsertBefore = [];
const clearPendingPortalInsertBefore = ()=>{
    let i = 0;
    while(i < pendingInsertBefore.length){
        const container = pendingInsertBefore[i++];
        const child = pendingInsertBefore[i++];
        const before = pendingInsertBefore[i++];
        // Replay the BSI subtree's `CreateElement` / `SetAttributes` / internal
        // `InsertBefore` ops — they were dropped pre-hydrate because
        // `__globalSnapshotPatch` was `undefined`. Pass `parentId=undefined` so
        // the topmost node is left orphan; we link it to the host element via
        // the following `nodesRefInsertBefore` instead.
        (0,_snapshot_reconstructInstanceTree_js__rspack_import_2.reconstructInstanceTree)([
            child
        ]);
        // Pre-hydrate `before` is effectively always undefined: preact's
        // initial diff appends each child sequentially, so the queued tuple's
        // third slot is undefined in normal flows. The `before?.__id` truthy
        // branch is exercised post-hydrate in the prepend-keyed-children test.
        /* v8 ignore start */ _lifecycle_patch_snapshotPatch_js__rspack_import_1.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_1.SnapshotOperation.nodesRefInsertBefore, (0,_nodesRef_js__rspack_import_0.serializeNodesRef)(container), child.__id, before === null || before === void 0 ? void 0 : before.__id);
    /* v8 ignore stop */ }
    pendingInsertBefore.length = 0;
}; //# sourceMappingURL=portalsPending.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/runWithForce.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runWithForce: () => (runWithForce)
});
/* import */ var _core_forceRootRender_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/forceRootRender.js");
/* import */ var _root_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");


function runWithForce(cb) {
    (0,_core_forceRootRender_js__rspack_import_0.runWithForceRootRender)({
        getRootVNode: ()=>_root_js__rspack_import_1.__root.__jsx,
        setRootVNode: (vnode)=>{
            // @ts-expect-error: __root.__jsx is a Preact VNode during background force render.
            _root_js__rspack_import_1.__root.__jsx = vnode;
        },
        render: cb
    });
} //# sourceMappingURL=runWithForce.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/suspense.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Suspense: () => (Suspense)
});
/* import */ var preact_compat__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/compat/dist/compat.mjs");
/* import */ var preact_hooks__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/mainThread.js");
/* import */ var _lynx_js_react_lepus__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/index.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



const Suspense = ({ children, fallback })=>{
    const __createElement = _lynx_js_react_lepus__rspack_import_2.createElement;
    (0,preact_hooks__rspack_import_1.useRef)();
    const newChildren = __createElement('wrapper', {
        $0: children
    });
    const newFallback = __createElement('wrapper', {
        $0: fallback
    });
    return __createElement(preact_compat__rspack_import_0.Suspense, {
        fallback: newFallback
    }, newChildren);
}; //# sourceMappingURL=suspense.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/hydrate.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  diffArrayAction: () => (diffArrayAction),
  diffArrayLepus: () => (diffArrayLepus),
  hydrate: () => (hydrate),
  isEmptyDiffResult: () => (isEmptyDiffResult)
});
/* import */ var _shared_profile_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _list_list_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/list.js");
/* import */ var _list_pendingListUpdates_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/pendingListUpdates.js");
/* import */ var _snapshot_dynamicPartType_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/dynamicPartType.js");
/* import */ var _snapshot_ref_js__rspack_import_4 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/ref.js");
/* import */ var _utils_js__rspack_import_5 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.






const UNREACHABLE_ITEM_KEY_NOT_FOUND = 'UNREACHABLE_ITEM_KEY_NOT_FOUND';
function isEmptyDiffResult(diffResult) {
    const hasChanged = !(0,_utils_js__rspack_import_5.isEmptyObject)(diffResult.i) || !(0,_utils_js__rspack_import_5.isEmptyObject)(diffResult.m) || diffResult.r.length > 0;
    return !hasChanged;
}
function diffArrayLepus(before, after, isSameType, onDiffChildren, isListHasItemKey) {
    let lastPlacedIndex = 0;
    const result = {
        $$diff: true,
        i: {},
        r: [],
        m: {}
    };
    const beforeMap = {};
    for(let i = 0; i < before.length; i++){
        var _ref, _beforeMap, _key, _;
        var _node___listItemPlatformInfo;
        const node = before[i];
        const key = isListHasItemKey ? (_ref = (_node___listItemPlatformInfo = node.__listItemPlatformInfo) === null || _node___listItemPlatformInfo === void 0 ? void 0 : _node___listItemPlatformInfo['item-key']) !== null && _ref !== void 0 ? _ref : UNREACHABLE_ITEM_KEY_NOT_FOUND : node.type;
        ((_ = (_beforeMap = beforeMap)[_key = key]) !== null && _ !== void 0 ? _ : _beforeMap[_key] = new Set()).add([
            node,
            i
        ]);
    }
    for(let i = 0; i < after.length; i++){
        var _ref1;
        var _afterNode___listItemPlatformInfo;
        const afterNode = after[i];
        const key = isListHasItemKey ? (_ref1 = (_afterNode___listItemPlatformInfo = afterNode.__listItemPlatformInfo) === null || _afterNode___listItemPlatformInfo === void 0 ? void 0 : _afterNode___listItemPlatformInfo['item-key']) !== null && _ref1 !== void 0 ? _ref1 : UNREACHABLE_ITEM_KEY_NOT_FOUND : afterNode.type;
        const beforeNodes = beforeMap[key];
        let beforeNode;
        if (beforeNodes && beforeNodes.size > 0 && ([beforeNode] = beforeNodes, beforeNode) && isSameType(beforeNode[0], afterNode)) {
            // Reuse old node
            beforeNodes.delete(beforeNode);
            const oldIndex = beforeNode[1];
            onDiffChildren(beforeNode[0], afterNode, oldIndex, i);
            if (oldIndex < lastPlacedIndex) {
                result.m[oldIndex] = i;
                continue;
            } else lastPlacedIndex = oldIndex;
        } else result.i[i] = afterNode;
    }
    // Delete
    for(const k in beforeMap)for (const [, i] of beforeMap[k])result.r.push(i);
    return result;
}
// export function diffIterableLepus<A extends Typed, B extends Typed>(
//   before: A[],
//   after: Iterable<B>,
//   isSameType: (a: A, b: B) => boolean,
//   onDiffChildren: (a: A, b: B) => void
// ): DiffResult<B> {
//   let returnResult = EMPTY_DIFF_RESULT as DiffResult<B>;
//   let lastPlacedIndex = 0;
//   const result: DiffResult<B> = {
//     $$diff: true,
//     i: {},
//     r: [],
//     m: {},
//   };
//   const beforeMap: Record<string, Set<[A, number]>> = {};
//   for (let i = 0; i < before.length; i++) {
//     let node = before[i];
//     (beforeMap[node.type] ??= new Set()).add([node, i]);
//   }
//   let i = 0;
//   for (const afterNode of after) {
//     const beforeNodes = beforeMap[afterNode.type];
//     let beforeNode: [A, number];
//     if (beforeNodes && (([beforeNode] = beforeNodes), beforeNode) && isSameType(beforeNode[0], afterNode)) {
//       // Reuse old node
//       beforeNodes.delete(beforeNode);
//       const oldIndex = beforeNode[1];
//       onDiffChildren(beforeNode[0], afterNode);
//       if (oldIndex < lastPlacedIndex) {
//         result.m[oldIndex] = i;
//         returnResult = result;
//         i++;
//         continue;
//       } else {
//         lastPlacedIndex = oldIndex;
//       }
//     } else {
//       // Create new node
//       result.i[i] = afterNode;
//       returnResult = result;
//     }
//     i++;
//   }
//   // delete
//   for (const k in beforeMap) {
//     for (const [, i] of beforeMap[k]) {
//       result.r.push(i);
//       returnResult = result;
//     }
//   }
//   return result;
// }
function diffArrayAction(before, diffResult, onInsert, onRemove, onMove) {
    if (isEmptyDiffResult(diffResult)) return before;
    const deleteSet = new Set(diffResult.r);
    const { i: insertMap, m: placementMap } = diffResult;
    const moveTempMap = new Map();
    let old;
    let k = 0;
    old = before[k];
    // let current: T | null | undefined = null;
    const result = [];
    let i = 0; // index of the old list
    let j = 0; // index of the new list
    let remain = Object.keys(insertMap).length;
    while(old || remain > 0){
        let keep = false;
        if (old && deleteSet.has(j)) onRemove(old);
        else if (old && placementMap[j] !== undefined) {
            // save node to re-use
            moveTempMap.set(placementMap[j], old);
            remain++;
        } else {
            // insert node
            let newNode = old;
            if (moveTempMap.has(i)) {
                // insert re-used node
                newNode = moveTempMap.get(i);
                keep = true;
                onMove(newNode, old);
                remain--;
            } else if (insertMap[i] !== undefined) {
                // insert new node
                newNode = onInsert(insertMap[i], old);
                keep = true;
                remain--;
            }
            result.push(newNode);
            i++;
        }
        if (old && !keep) {
            old = before[++k];
            j++;
        }
    }
    return result;
}
function hydrate(before, after, options) {
    after.__elements = before.__elements;
    after.__element_root = before.__element_root;
    if (!(options === null || options === void 0 ? void 0 : options.skipUnRef)) (0,_snapshot_ref_js__rspack_import_4.unref)(before, false);
    let swap;
    if (swap = options === null || options === void 0 ? void 0 : options.swap) swap[before.__id] = after.__id;
    _list_pendingListUpdates_js__rspack_import_2.__pendingListUpdates.runWithoutUpdates(()=>{
        var _after___values;
        (_after___values = after.__values) === null || _after___values === void 0 ? void 0 : _after___values.forEach((value, index)=>{
            const old = before.__values[index];
            if (value !== old) {
                after.__values[index] = old;
                after.setAttribute(index, value);
            }
        });
    });
    const { slot } = after.__snapshot_def;
    if (!slot) return;
    const beforeChildNodes = before.childNodes;
    const afterChildNodes = after.childNodes;
    slot.forEach(([type, elementIndex], index)=>{
        switch(type){
            case _snapshot_dynamicPartType_js__rspack_import_3.DynamicPartType.Slot:
            case _snapshot_dynamicPartType_js__rspack_import_3.DynamicPartType.MultiChildren:
                {
                    // TODO: the following null assertions are not 100% safe
                    const v1 = beforeChildNodes[index];
                    const v2 = afterChildNodes[index];
                    hydrate(v1, v2, options);
                    break;
                }
            case _snapshot_dynamicPartType_js__rspack_import_3.DynamicPartType.SlotV2:
            case _snapshot_dynamicPartType_js__rspack_import_3.DynamicPartType.Children:
                {
                    let filteredBeforeChildNodes = beforeChildNodes;
                    let filteredAfterChildNodes = afterChildNodes;
                    if (type === _snapshot_dynamicPartType_js__rspack_import_3.DynamicPartType.SlotV2) {
                        filteredBeforeChildNodes = beforeChildNodes.filter((v)=>v.__slotIndex === index);
                        filteredAfterChildNodes = afterChildNodes.filter((v)=>v.__slotIndex === index);
                    }
                    const diffResult = diffArrayLepus(filteredBeforeChildNodes, filteredAfterChildNodes, (a, b)=>a.type === b.type, (a, b)=>{
                        hydrate(a, b, options);
                    }, false);
                    diffArrayAction(filteredBeforeChildNodes, diffResult, (node, target)=>{
                        node.ensureElements();
                        __InsertElementBefore(before.__elements[elementIndex], node.__element_root, target === null || target === void 0 ? void 0 : target.__element_root);
                        return node;
                    }, (node)=>{
                        __RemoveElement(before.__elements[elementIndex], node.__element_root);
                    }, (node, target)=>{
                        __RemoveElement(before.__elements[elementIndex], node.__element_root);
                        __InsertElementBefore(before.__elements[elementIndex], node.__element_root, target === null || target === void 0 ? void 0 : target.__element_root);
                    });
                    break;
                }
            case _snapshot_dynamicPartType_js__rspack_import_3.DynamicPartType.ListSlotV2:
            case _snapshot_dynamicPartType_js__rspack_import_3.DynamicPartType.ListChildren:
                {
                    let filteredBeforeChildNodes = beforeChildNodes;
                    let filteredAfterChildNodes = afterChildNodes;
                    if (type === _snapshot_dynamicPartType_js__rspack_import_3.DynamicPartType.ListSlotV2) {
                        filteredBeforeChildNodes = beforeChildNodes.filter((v)=>v.__slotIndex === index);
                        filteredAfterChildNodes = afterChildNodes.filter((v)=>v.__slotIndex === index);
                    }
                    const removals = [];
                    const insertions = [];
                    const updateAction = [];
                    const listID = __GetElementUniqueID(before.__elements[elementIndex]);
                    const signMap = _list_list_js__rspack_import_1.gSignMap[listID];
                    const recycleMap = _list_list_js__rspack_import_1.gRecycleMap[listID];
                    const diffResult = diffArrayLepus(filteredBeforeChildNodes, filteredAfterChildNodes, (a, b)=>a.type === b.type, (a, b, _oldIndex, newIndex)=>{
                        if (JSON.stringify(a.__listItemPlatformInfo) !== JSON.stringify(b.__listItemPlatformInfo)) updateAction.push({
                            ...b.__listItemPlatformInfo,
                            from: newIndex,
                            to: newIndex,
                            // no flush
                            flush: false,
                            type: b.type
                        });
                        if (a.__elements) {
                            // transfer a's elements to b
                            hydrate(a, b, options);
                            // if a list-item has `elements`, it may be:
                            //   - `enqueueComponent` already called on it: so we need to update the `signMap` and the `recycleMap`
                            //   - `enqueueComponent` not called on it: update the `signMap`
                            const listItemID = __GetElementUniqueID(a.__element_root);
                            if (signMap.has(listItemID)) signMap.set(listItemID, b);
                            if (recycleMap.has(a.type)) {
                                const recycleSignMap = recycleMap.get(a.type);
                                // Should only update `list-item` in the recycling pool
                                // Because if an on-screen `list-item` is added to the recycling pool,
                                // it could cause a blank screen when reused next time, as it may still be visible.
                                if (recycleSignMap.has(listItemID)) recycleSignMap.set(listItemID, b);
                            }
                        }
                    }, true);
                    for (const i of diffResult.r)removals.push(i);
                    for(const i in diffResult.i)insertions.push(Number(i));
                    for(const i in diffResult.m){
                        removals.push(Number(i));
                        insertions.push(diffResult.m[i]);
                    }
                    insertions.sort((a, b)=>a - b);
                    removals.sort((a, b)=>a - b);
                    const info = {
                        insertAction: insertions.map((it)=>({
                                position: it,
                                type: afterChildNodes[it].type,
                                ...afterChildNodes[it].__listItemPlatformInfo
                            })),
                        removeAction: removals,
                        updateAction
                    };
                    if (true) (0,_shared_profile_js__rspack_import_0.profileStart)('ReactLynx::listHydrate::updateListInfo', {
                        args: {
                            'list id': String(listID),
                            'update list info': JSON.stringify(info)
                        }
                    });
                    const listElement = before.__elements[elementIndex];
                    __SetAttribute(listElement, 'update-list-info', info);
                    const [componentAtIndex, componentAtIndexes] = (0,_list_list_js__rspack_import_1.componentAtIndexFactory)(afterChildNodes, hydrate);
                    __UpdateListCallbacks(listElement, componentAtIndex, (0,_list_list_js__rspack_import_1.enqueueComponentFactory)(), componentAtIndexes);
                    // The `before` & `after` target to the same list element, so we need to
                    // avoid the newly created list's (behind snapshot instance `after`) "update-list-info" being recorded.
                    _list_pendingListUpdates_js__rspack_import_2.__pendingListUpdates.clear(after.__id);
                    if (true) (0,_shared_profile_js__rspack_import_0.profileEnd)();
                    break;
                }
            default:
                throw new Error('Unexpected slot type: ' + type);
        }
    });
} //# sourceMappingURL=hydrate.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __OpAttr: () => (__OpAttr),
  __OpBegin: () => (__OpBegin),
  __OpEnd: () => (__OpEnd),
  __OpText: () => (__OpText),
  "default": () => (__rspack_default_export),
  render: () => (render),
  renderToStaticMarkup: () => (renderToStaticMarkup),
  renderToString: () => (renderToString)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* import */ var _snapshot_snapshot_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
/* import */ var _shared_render_constants_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements rendering to opcodes.
 * This module is modified from preact-render-to-string@6.0.3 to generate
 * opcodes instead of HTML strings for Lynx.
 */ // @ts-nocheck



/** @typedef {import('preact').VNode} VNode */ const EMPTY_ARR = [];
const isArray = /* @__PURE__ */ Array.isArray;
const assign = /* @__PURE__ */ Object.assign;
// Global state for the current render pass
let beforeDiff, beforeDiff2, afterDiff, renderHook, ummountHook;
/**
 * Render Preact JSX + Components to an HTML string.
 * @param {VNode} vnode	JSX Element / VNode to render
 * @param {object} [context] Initial root context object
 */ function renderToString(vnode, context, into) {
    // Performance optimization: `renderToString` is synchronous and we
    // therefore don't execute any effects. To do that we pass an empty
    // array to `options._commit` (`__c`). But we can go one step further
    // and avoid a lot of dirty checks and allocations by setting
    // `options._skipEffects` (`__s`) too.
    const previousSkipEffects = preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_2.SKIP_EFFECTS];
    preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_2.SKIP_EFFECTS] = true;
    // store options hooks once before each synchronous render call
    beforeDiff = preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_2.DIFF];
    beforeDiff2 = preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_2.DIFF2];
    afterDiff = preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_2.DIFFED];
    renderHook = preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_2.RENDER];
    ummountHook = preact__rspack_import_0.options.unmount;
    const parent = (0,preact__rspack_import_0.h)(preact__rspack_import_0.Fragment, null);
    parent[_shared_render_constants_js__rspack_import_2.CHILDREN] = [
        vnode
    ];
    const opcodes = [];
    try {
        _renderToString(vnode, context || EMPTY_OBJ, 0, undefined, parent, opcodes, 0, into);
    } finally{
        // options._commit, we don't schedule any effects in this library right now,
        // so we can pass an empty queue to this hook.
        if (preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_2.COMMIT]) preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_2.COMMIT](vnode, EMPTY_ARR);
        preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_2.SKIP_EFFECTS] = previousSkipEffects;
        EMPTY_ARR.length = 0;
    }
    return opcodes;
}
// Installed as setState/forceUpdate for function components
function markAsDirty() {
    this[_shared_render_constants_js__rspack_import_2.DIRTY] = true;
}
const EMPTY_OBJ = {};
const __OpBegin = 0;
const __OpEnd = 1;
const __OpAttr = 2;
const __OpText = 3;
/**
 * @param {VNode} vnode
 * @param {Record<string, unknown>} context
 */ function renderClassComponent(vnode, context) {
    const type = /** @type {import("preact").ComponentClass<typeof vnode.props>} */ vnode.type;
    let c;
    if (vnode[_shared_render_constants_js__rspack_import_2.COMPONENT]) {
        c = vnode[_shared_render_constants_js__rspack_import_2.COMPONENT];
        c.state = c[_shared_render_constants_js__rspack_import_2.NEXT_STATE];
    } else c = new type(vnode.props, context);
    vnode[_shared_render_constants_js__rspack_import_2.COMPONENT] = c;
    c[_shared_render_constants_js__rspack_import_2.VNODE] = vnode;
    c.props = vnode.props;
    c.context = context;
    // turn off stateful re-rendering:
    c[_shared_render_constants_js__rspack_import_2.DIRTY] = true;
    if (c.state == null) c.state = EMPTY_OBJ;
    if (c[_shared_render_constants_js__rspack_import_2.NEXT_STATE] == null) c[_shared_render_constants_js__rspack_import_2.NEXT_STATE] = c.state;
    if (type.getDerivedStateFromProps) c.state = assign({}, c.state, type.getDerivedStateFromProps(c.props, c.state));
    if (renderHook) renderHook(vnode);
    return c.render(c.props, c.state, context);
}
/**
 * Recursively render VNodes to HTML.
 * @param {VNode|any} vnode
 * @param {any} context
 * @param {number | true} slotIndex
 * @param {any} selectValue
 * @param {VNode} parent
 * @param {any[]} opcodes
 * @param {number} opcodesLength
 * @param {SnapshotInstance} into
 */ function _renderToString(vnode, context, slotIndex, selectValue, parent, opcodes, opcodesLength, into) {
    // Ignore non-rendered VNodes/values
    if (vnode == null || vnode === true || vnode === false || vnode === '') return;
    let vnodeType = typeof vnode;
    // Text VNodes: escape as HTML
    if (vnodeType !== 'object') {
        if (vnodeType === 'function') return;
        renderToTextNode(into, vnode, opcodes, slotIndex);
        return;
    }
    // Recurse into children / Arrays
    if (isArray(vnode)) {
        parent[_shared_render_constants_js__rspack_import_2.CHILDREN] = vnode;
        for(let i = 0; i < vnode.length; i++){
            const child = vnode[i];
            if (child == null || typeof child === 'boolean') continue;
            _renderToString(child, context, slotIndex === true ? i : slotIndex, selectValue, parent, opcodes, /* v8 ignore start */  false ? 0 : 0, /* v8 ignore end */ into);
        }
        return;
    }
    // VNodes have {constructor:undefined} to prevent JSON injection:
    // if (vnode.constructor !== undefined) return;
    vnode[_shared_render_constants_js__rspack_import_2.PARENT] = parent;
    if (beforeDiff) beforeDiff(vnode);
    if (beforeDiff2) beforeDiff2(vnode, EMPTY_OBJ);
    let type = vnode.type, props = vnode.props, cctx = context, contextType, rendered, component;
    // Invoke rendering on Components
    if (typeof type === 'function') {
        if (type === preact__rspack_import_0.Fragment) rendered = props.children;
        else {
            contextType = type.contextType;
            if (contextType != null) {
                const provider = context[contextType.__c];
                cctx = provider ? provider.props.value : contextType.__;
            }
            if (type.prototype && typeof type.prototype.render === 'function') {
                rendered = /**#__NOINLINE__**/ renderClassComponent(vnode, cctx);
                component = vnode[_shared_render_constants_js__rspack_import_2.COMPONENT];
            } else {
                component = {
                    [_shared_render_constants_js__rspack_import_2.VNODE]: vnode,
                    props,
                    context: cctx,
                    // silently drop state updates
                    setState: markAsDirty,
                    forceUpdate: markAsDirty,
                    [_shared_render_constants_js__rspack_import_2.DIRTY]: true,
                    // hooks
                    [_shared_render_constants_js__rspack_import_2.HOOK]: []
                };
                vnode[_shared_render_constants_js__rspack_import_2.COMPONENT] = component;
                component.constructor = type;
                component.render = doRender;
                // If a hook invokes setState() to invalidate the component during rendering,
                // re-render it up to 25 times to allow "settling" of memoized states.
                // Note:
                //   This will need to be updated for Preact 11 to use internal.flags rather than component._dirty:
                //   https://github.com/preactjs/preact/blob/d4ca6fdb19bc715e49fd144e69f7296b2f4daa40/src/diff/component.js#L35-L44
                let count = 0;
                while(component[_shared_render_constants_js__rspack_import_2.DIRTY] && count++ < 25){
                    component[_shared_render_constants_js__rspack_import_2.DIRTY] = false;
                    if (renderHook) renderHook(vnode);
                    rendered = component.render(props, component.state, cctx);
                }
                component[_shared_render_constants_js__rspack_import_2.DIRTY] = true;
            }
            if (component.getChildContext != null) context = assign({}, context, component.getChildContext());
        }
        // When a component returns a Fragment node we flatten it in core, so we
        // need to mirror that logic here too
        const isTopLevelFragment = rendered != null && rendered.type === preact__rspack_import_0.Fragment && rendered.key == null;
        rendered = isTopLevelFragment ? rendered.props.children : rendered;
        let lastChild = into.__lastChild;
        // Recurse into children before invoking the after-diff hook
        try {
            _renderToString(rendered, context, slotIndex, selectValue, vnode, opcodes, /* v8 ignore start */  false ? 0 : 0, /* v8 ignore end */ into);
        } catch (e) {
            // clear existing children
            into.removeChildren(lastChild ? lastChild.__nextSibling : into.__firstChild);
            if (e && typeof e === 'object' && e.then && component && /* _childDidSuspend */ component[_shared_render_constants_js__rspack_import_2.CHILD_DID_SUSPEND]) {
                component[_shared_render_constants_js__rspack_import_2.NEXT_STATE] = assign({}, component[_shared_render_constants_js__rspack_import_2.NEXT_STATE], {
                    /* _suspended */ __a: true
                });
                if (component[_shared_render_constants_js__rspack_import_2.DIRTY]) {
                    rendered = renderClassComponent(vnode, context);
                    component = vnode[_shared_render_constants_js__rspack_import_2.COMPONENT];
                    if (false) {}
                    _renderToString(rendered, context, slotIndex, selectValue, vnode, opcodes, /* v8 ignore start */  false ? 0 : 0, /* v8 ignore end */ into);
                }
            } else throw e;
        } finally{
            if (afterDiff) afterDiff(vnode);
            vnode[_shared_render_constants_js__rspack_import_2.PARENT] = undefined;
            if (ummountHook) ummountHook(vnode);
        }
        return;
    }
    let children;
    let hasNamedChildren = false;
    // hack for runtime test
    if (false) {}
    // already inserted
    if (vnode.__parent) vnode = new _snapshot_snapshot_js__rspack_import_1.SnapshotInstance(type);
    if (false) {}
    vnode.__slotIndex = slotIndex;
    into.insertBefore(vnode);
    for(const name in props){
        const v = props[name];
        switch(name){
            case 'children':
                children = v;
                continue;
            // VDOM-specific props
            /* c8 ignore next 5 */ case 'key':
            case 'ref':
            case '__self':
            case '__source':
                continue;
            default:
                if (name.startsWith('$')) {
                    children !== null && children !== void 0 ? children : children = [];
                    children[+name.slice(1)] = v;
                    hasNamedChildren = true;
                    continue;
                }
        }
        // write this attribute to the buffer
        if (v != null && v !== false && typeof v !== 'function') {
            if (false) {}
            vnode.setAttribute(name, v);
        }
    }
    let childrenType = typeof children;
    if (childrenType === 'string' || childrenType === 'number') renderToTextNode(vnode, children, opcodes, slotIndex);
    else if (children != null && children !== false && children !== true) {
        // recurse into this element VNode's children
        let _slotIndex = slotIndex;
        if (hasNamedChildren) {
            // @ts-expect-error children must be an array
            if (children.length === 1) {
                children = children[0];
                _slotIndex = 0;
            } else _slotIndex = true;
        }
        _renderToString(children, context, _slotIndex, selectValue, vnode, opcodes, /* v8 ignore start */  false ? 0 : 0, /* v8 ignore end */ vnode);
    }
    if (afterDiff) afterDiff(vnode);
    vnode[_shared_render_constants_js__rspack_import_2.PARENT] = undefined;
    if (ummountHook) ummountHook(vnode);
    if (false) {}
    vnode[_shared_render_constants_js__rspack_import_2.CHILDREN] = undefined;
    return;
}
/** The `.render()` method for a PFC backing instance. */ function doRender(props, state, context) {
    return this.constructor(props, context);
}
function renderToTextNode(into, text, opcodes, slotIndex) {
    const textNode = new _snapshot_snapshot_js__rspack_import_1.SnapshotInstance(null);
    textNode.__slotIndex = slotIndex;
    textNode.setAttribute(0, text);
    into.insertBefore(textNode);
    if (false) {}
}
/* export default */ const __rspack_default_export = (renderToString);
const render = renderToString;
const renderToStaticMarkup = renderToString; //# sourceMappingURL=index.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/opcodes.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ssrHydrateByOpcodes: () => (ssrHydrateByOpcodes)
});
/* import */ var _hydrate_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/hydrate.js");
/* import */ var _list_list_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/list.js");
/* import */ var _shared_render_constants_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
/* import */ var _snapshot_snapshot_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




const OpcodeBegin = 0;
const OpcodeEnd = 1;
const OpcodeAttr = 2;
const OpcodeText = 3;
function ssrHydrateByOpcodes(opcodes, into, refMap) {
    let top = into;
    const stack = [
        into
    ];
    for(let i = 0; i < opcodes.length;){
        const opcode = opcodes[i];
        switch(opcode){
            case OpcodeBegin:
                {
                    const p = top;
                    const [type, __id, elements] = opcodes[i + 1];
                    top = new _snapshot_snapshot_js__rspack_import_3.SnapshotInstance(type, __id);
                    top.__pendingElements = elements;
                    top.__slotIndex = opcodes[i + 2];
                    p.insertBefore(top);
                    stack.push(top);
                    i += 3;
                    break;
                }
            case OpcodeEnd:
                {
                    // @ts-ignore
                    top[_shared_render_constants_js__rspack_import_2.CHILDREN] = undefined;
                    top.__elements = top.__pendingElements.map(({ ssrID })=>refMap[ssrID]);
                    top.__element_root = top.__elements[0];
                    delete top.__pendingElements;
                    if (top.__snapshot_def.isListHolder) {
                        const listElement = top.__element_root;
                        const listElementUniqueID = __GetElementUniqueID(listElement);
                        const signMap = _list_list_js__rspack_import_1.gSignMap[listElementUniqueID] = new Map();
                        _list_list_js__rspack_import_1.gRecycleMap[listElementUniqueID] = new Map();
                        const enqueueFunc = (0,_list_list_js__rspack_import_1.enqueueComponentFactory)();
                        const [componentAtIndex, componentAtIndexes] = (0,_list_list_js__rspack_import_1.componentAtIndexFactory)(top.childNodes, _hydrate_js__rspack_import_0.hydrate);
                        for (const child of top.childNodes)if (child.__element_root) {
                            const childElementUniqueID = __GetElementUniqueID(child.__element_root);
                            signMap.set(childElementUniqueID, child);
                            enqueueFunc(listElement, listElementUniqueID, childElementUniqueID);
                        }
                        __UpdateListCallbacks(listElement, componentAtIndex, enqueueFunc, componentAtIndexes);
                    }
                    stack.pop();
                    const p = stack[stack.length - 1];
                    top = p;
                    i += 1;
                    break;
                }
            case OpcodeAttr:
                {
                    const key = opcodes[i + 1];
                    const value = opcodes[i + 2];
                    top.setAttribute(key, value);
                    i += 3;
                    break;
                }
            case OpcodeText:
                {
                    const [[type, __id, elements], text] = opcodes[i + 1];
                    const s = new _snapshot_snapshot_js__rspack_import_3.SnapshotInstance(type, __id);
                    s.__slotIndex = opcodes[i + 2];
                    s.setAttribute(0, text);
                    top.insertBefore(s);
                    s.__elements = elements.map(({ ssrID })=>refMap[ssrID]);
                    s.__element_root = s.__elements[0];
                    i += 3;
                    break;
                }
        }
    }
} // export function renderOpcodesInto(opcodes: any[], into: SnapshotInstance): void {
//   let top: SnapshotInstance = into;
//   const stack: SnapshotInstance[] = [into];
//   for (let i = 0; i < opcodes.length;) {
//     const opcode = opcodes[i];
//     switch (opcode) {
//       case OpcodeBegin: {
//         const p = top;
//         top = opcodes[i + 1];
//         // @ts-ignore
//         if (top.__parent) {
//           // already inserted
//           top = new SnapshotInstance(top.type);
//           opcodes[i + 1] = top;
//         }
//         p.insertBefore(top);
//         stack.push(top);
//         i += 2;
//         break;
//       }
//       case OpcodeEnd: {
//         // @ts-ignore
//         top[CHILDREN] = undefined;
//         stack.pop();
//         const p = stack[stack.length - 1];
//         top = p!;
//         i += 1;
//         break;
//       }
//       case OpcodeAttr: {
//         const key = opcodes[i + 1];
//         const value = opcodes[i + 2];
//         top.setAttribute(key, value);
//         i += 3;
//         break;
//       }
//       case OpcodeText: {
//         const text = opcodes[i + 1];
//         const s = new SnapshotInstance(null as unknown as string);
//         if (__ENABLE_SSR__) {
//           // We need store the just created SnapshotInstance, or it will be lost when we leave the function
//           opcodes[i + 1] = [s, text];
//         }
//         s.setAttribute(0, text);
//         top.insertBefore(s);
//         i += 2;
//         break;
//       }
//     }
//   }
// }
//# sourceMappingURL=opcodes.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/backgroundSnapshot.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BackgroundSnapshotInstance: () => (BackgroundSnapshotInstance),
  backgroundSnapshotInstanceManager: () => (backgroundSnapshotInstanceManager),
  hydrate: () => (hydrate)
});
/* import */ var _definition_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/definition.js");
/* import */ var _dynamicPartType_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/dynamicPartType.js");
/* import */ var _reconstructInstanceTree_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/reconstructInstanceTree.js");
/* import */ var _ref_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/ref.js");
/* import */ var _snapshot_js__rspack_import_4 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
/* import */ var _snapshotInstanceHydrationMap_js__rspack_import_5 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshotInstanceHydrationMap.js");
/* import */ var _spread_js__rspack_import_6 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/spread.js");
/* import */ var _utils_js__rspack_import_7 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/utils.js");
/* import */ var _shared_profile_js__rspack_import_8 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _utils_js__rspack_import_9 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* import */ var _debug_vnodeSource_js__rspack_import_10 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/vnodeSource.js");
/* import */ var _gesture_processGestureBagkround_js__rspack_import_11 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/processGestureBagkround.js");
/* import */ var _lifecycle_patch_globalState_js__rspack_import_12 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/globalState.js");
/* import */ var _lifecycle_patch_snapshotPatch_js__rspack_import_13 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
/* import */ var _lynx_performance_js__rspack_import_14 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/performance.js");
/* import */ var _lynx_portalsPending_js__rspack_import_15 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/portalsPending.js");
/* import */ var _renderToOpcodes_hydrate_js__rspack_import_16 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/hydrate.js");
/* import */ var _worklet_ctx_js__rspack_import_17 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ctx.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


















/**
 * Background snapshot instance manager that manages all background snapshot instances.
 */ const backgroundSnapshotInstanceManager = {
    nextId: 0,
    values: /* @__PURE__ */ new Map(),
    clear () {
        // not resetting `nextId` to prevent id collision
        this.values.clear();
        if (true) (0,_debug_vnodeSource_js__rspack_import_10.clearSnapshotVNodeSource)();
    },
    updateId (id, newId) {
        const values = this.values;
        const si = values.get(id);
        values.delete(id);
        values.set(newId, si);
        si.__id = newId;
        if (true) (0,_debug_vnodeSource_js__rspack_import_10.moveSnapshotVNodeSource)(id, newId);
    },
    getValueBySign (str) {
        const res = str === null || str === void 0 ? void 0 : str.split(':');
        if (!res || res.length != 2 && res.length != 3) throw new Error('Invalid ctx format: ' + str);
        const id = Number(res[0]);
        const expIndex = Number(res[1]);
        const ctx = this.values.get(id);
        if (!ctx) return null;
        /**
         * 1. normal event
         *  `${ctx.__id}:${expIndex}:${spreadKey}`
         * 2. defer list event
         *   ${ctx.__id}:__extraProps:onRecycleComponent`
         *   ${ctx.__id}:__extraProps:onComponentAtIndex`
         */ const spreadKey = res[2];
        if (res[1] === '__extraProps') {
            if (spreadKey) return ctx.__extraProps[spreadKey];
            throw new Error('unreachable');
        } else {
            if (spreadKey) return ctx.__values[expIndex][spreadKey];
            else return ctx.__values[expIndex];
        }
    }
};
function prepareWorkletForCommit(worklet) {
    // Copy-on-commit: do not mutate the background-side worklet ctx.
    // `_execId` is injected into the payload object that will be sent to the main thread.
    return (0,_worklet_ctx_js__rspack_import_17.onPostWorkletCtx)({
        ...worklet
    });
}
function prepareSpreadForCommit(spread, oldSpread) {
    let committed;
    for(const key in spread){
        const v = spread[key];
        if (key === '__lynx_timing_flag' && (oldSpread === null || oldSpread === void 0 ? void 0 : oldSpread[key]) != v && _lynx_performance_js__rspack_import_14.globalPipelineOptions) _lynx_performance_js__rspack_import_14.globalPipelineOptions.needTimestamps = true;
        if (!v || typeof v !== 'object') continue;
        const valueRecord = v;
        let committedValue;
        if ('_wkltId' in valueRecord) committedValue = prepareWorkletForCommit(v);
        else if ('__isGesture' in valueRecord) committedValue = (0,_gesture_processGestureBagkround_js__rspack_import_11.prepareGestureForCommit)(v);
        else continue;
        committed !== null && committed !== void 0 ? committed : committed = {
            ...spread
        };
        committed[key] = committedValue;
    }
    return committed !== null && committed !== void 0 ? committed : spread;
}
class BackgroundSnapshotInstance {
    get parentNode() {
        return this.__parent;
    }
    get nextSibling() {
        return this.__nextSibling;
    }
    // get isConnected() {
    //   return !!this.__parent;
    // }
    // contains(child: BackgroundSnapshotInstance): boolean {
    //   return child.parentNode === this;
    // }
    // This will be called in `lazy`/`Suspense`.
    appendChild(child) {
        return this.insertBefore(child);
    }
    insertBefore(node, beforeNode) {
        if (node.__removed_from_tree) {
            node.__removed_from_tree = false;
            // This is only called by `lazy`/`Suspense` through `appendChild` so beforeNode is always undefined.
            /* v8 ignore next */ (0,_reconstructInstanceTree_js__rspack_import_2.reconstructInstanceTree)([
                node
            ], this.__id, beforeNode === null || beforeNode === void 0 ? void 0 : beforeNode.__id);
        } else _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_13.SnapshotOperation.InsertBefore, this.__id, node.__id, beforeNode === null || beforeNode === void 0 ? void 0 : beforeNode.__id, node.__slotIndex);
        // If the node already has a parent, remove it from its current parent
        const p = node.__parent;
        if (p) {
            if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
            else p.__firstChild = node.__nextSibling;
            if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
            else p.__lastChild = node.__previousSibling;
        }
        // If beforeNode is not provided, add the new node as the last child
        if (beforeNode) {
            // If beforeNode is provided, insert the new node before beforeNode
            if (beforeNode.__previousSibling) {
                beforeNode.__previousSibling.__nextSibling = node;
                node.__previousSibling = beforeNode.__previousSibling;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            beforeNode.__previousSibling = node;
            node.__nextSibling = beforeNode;
            node.__parent = this;
        } else {
            if (this.__lastChild) {
                this.__lastChild.__nextSibling = node;
                node.__previousSibling = this.__lastChild;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            this.__lastChild = node;
            node.__parent = this;
            node.__nextSibling = null;
        }
    }
    removeChild(node) {
        _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_13.SnapshotOperation.RemoveChild, this.__id, node.__id);
        node.__removed_from_tree = true;
        if (node.__parent !== this) throw new Error('The node to be removed is not a child of this node.');
        if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
        else this.__firstChild = node.__nextSibling;
        if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
        else this.__lastChild = node.__previousSibling;
        node.__parent = null;
        node.__previousSibling = null;
        node.__nextSibling = null;
        (0,_ref_js__rspack_import_3.queueRefAttrUpdate)(()=>{
            (0,_utils_js__rspack_import_7.traverseSnapshotInstance)(node, (v)=>{
                var _v___snapshot_def_refAndSpreadIndexes;
                if (v.__values) (_v___snapshot_def_refAndSpreadIndexes = v.__snapshot_def.refAndSpreadIndexes) === null || _v___snapshot_def_refAndSpreadIndexes === void 0 ? void 0 : _v___snapshot_def_refAndSpreadIndexes.forEach((i)=>{
                    const value = v.__values[i];
                    if (value && (typeof value === 'object' || typeof value === 'function')) {
                        if ('__spread' in value && 'ref' in value && value.ref) (0,_ref_js__rspack_import_3.clearRef)(value.ref);
                        else if ('__ref' in value) (0,_ref_js__rspack_import_3.clearRef)(value);
                    }
                });
            });
        }, null, 0, 0);
        _lifecycle_patch_globalState_js__rspack_import_12.globalBackgroundSnapshotInstancesToRemove.push(node.__id);
    }
    tearDown() {
        (0,_utils_js__rspack_import_7.traverseSnapshotInstance)(this, (v)=>{
            v.__parent = null;
            v.__previousSibling = null;
            v.__nextSibling = null;
            backgroundSnapshotInstanceManager.values.delete(v.__id);
        });
    }
    get childNodes() {
        const nodes = [];
        let node = this.__firstChild;
        while(node){
            nodes.push(node);
            node = node.__nextSibling;
        }
        return nodes;
    }
    setAttribute(key, value) {
        var _this___extraProps, // is reserved as slow path
        _this___values;
        if (true) (0,_shared_profile_js__rspack_import_8.profileStart)('ReactLynx::BSI::setAttribute');
        if (key === 'values') {
            var _this___snapshot_def_refAndSpreadIndexes;
            if (_lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch) {
                const oldValues = this.__values;
                if (oldValues) for(let index = 0; index < value.length; index++){
                    const { needUpdate, valueToCommit } = this.setAttributeImpl(value[index], oldValues[index], index);
                    if (needUpdate) _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_13.SnapshotOperation.SetAttribute, this.__id, index, valueToCommit);
                }
                else {
                    const patch = [];
                    const length = value.length;
                    for(let index = 0; index < length; ++index){
                        const { valueToCommit } = this.setAttributeImpl(value[index], null, index);
                        patch[index] = valueToCommit;
                    }
                    _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_13.SnapshotOperation.SetAttributes, this.__id, patch);
                }
            } else (_this___snapshot_def_refAndSpreadIndexes = this.__snapshot_def.refAndSpreadIndexes) === null || _this___snapshot_def_refAndSpreadIndexes === void 0 ? void 0 : _this___snapshot_def_refAndSpreadIndexes.forEach((index)=>{
                var _this___values;
                // In first render, this.__values is undefined.
                // In next rerenders before hydration, this.__values is not undefined.
                const oldValue = (_this___values = this.__values) === null || _this___values === void 0 ? void 0 : _this___values[index];
                const v = value[index];
                (0,_ref_js__rspack_import_3.queueRefAttrUpdate)((0,_ref_js__rspack_import_3.getRefFromValue)(oldValue), (0,_ref_js__rspack_import_3.getRefFromValue)(v), this.__id, index);
            });
            this.__values = value;
            if (true) (0,_shared_profile_js__rspack_import_8.profileEnd)();
            return;
        }
        if (typeof key === 'string') ((_this___extraProps = this.__extraProps) !== null && _this___extraProps !== void 0 ? _this___extraProps : this.__extraProps = {})[key] = value;
        else ((_this___values = this.__values) !== null && _this___values !== void 0 ? _this___values : this.__values = [])[key] = value;
        _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_13.SnapshotOperation.SetAttribute, this.__id, key, value);
        if (true) (0,_shared_profile_js__rspack_import_8.profileEnd)();
    }
    setAttributeImpl(newValue, oldValue, index) {
        if (!newValue) {
            // `oldValue` can't be a spread.
            if (oldValue && typeof oldValue === 'object' && '__ref' in oldValue) (0,_ref_js__rspack_import_3.queueRefAttrUpdate)(oldValue, null, this.__id, index);
            return {
                needUpdate: oldValue !== newValue,
                valueToCommit: newValue
            };
        }
        const newType = typeof newValue;
        if (newType === 'object') {
            const newValueObj = newValue;
            if ('__spread' in newValueObj) {
                const oldSpread = oldValue === null || oldValue === void 0 ? void 0 : oldValue.__spread;
                const newSpread = (0,_spread_js__rspack_import_6.transformSpread)(this, index, newValueObj);
                const needUpdate = !(0,_utils_js__rspack_import_9.isDirectOrDeepEqual)(oldSpread, newSpread);
                // use __spread to cache the transform result for next diff
                newValueObj['__spread'] = newSpread;
                (0,_ref_js__rspack_import_3.queueRefAttrUpdate)(oldSpread && oldValue.ref, newValueObj['ref'], this.__id, index);
                return {
                    needUpdate,
                    valueToCommit: needUpdate ? prepareSpreadForCommit(newSpread, oldSpread) : newSpread
                };
            }
            if ('__ref' in newValueObj) {
                (0,_ref_js__rspack_import_3.queueRefAttrUpdate)(oldValue, newValueObj, this.__id, index);
                return {
                    needUpdate: false,
                    valueToCommit: 1
                };
            }
            if ('_wkltId' in newValueObj) {
                // Worklet ctx can be stable across rerenders (e.g. memoized by the user).
                // In that case we should NOT re-register / re-send it, otherwise `_execId` churn
                // will cause unnecessary patches.
                const needUpdate = oldValue !== newValue;
                return {
                    needUpdate,
                    valueToCommit: needUpdate ? prepareWorkletForCommit(newValueObj) : newValue
                };
            }
            if ('__isGesture' in newValueObj) {
                // Gestures are large objects; if the reference is stable, avoid reprocessing and patching.
                const needUpdate = oldValue !== newValue;
                return {
                    needUpdate,
                    valueToCommit: needUpdate ? (0,_gesture_processGestureBagkround_js__rspack_import_11.prepareGestureForCommit)(newValueObj) : newValue
                };
            }
            if ('__ltf' in newValueObj) {
                // __lynx_timing_flag
                if (_lynx_performance_js__rspack_import_14.globalPipelineOptions && (oldValue === null || oldValue === void 0 ? void 0 : oldValue.__ltf) != newValueObj['__ltf']) {
                    _lynx_performance_js__rspack_import_14.globalPipelineOptions.needTimestamps = true;
                    return {
                        needUpdate: true,
                        valueToCommit: newValue
                    };
                }
                return {
                    needUpdate: false,
                    valueToCommit: newValue
                };
            }
            return {
                needUpdate: !(0,_utils_js__rspack_import_9.isDirectOrDeepEqual)(oldValue, newValue),
                valueToCommit: newValue
            };
        }
        if (newType === 'function') {
            if (newValue.__ref) {
                (0,_ref_js__rspack_import_3.queueRefAttrUpdate)(oldValue, newValue, this.__id, index);
                return {
                    needUpdate: false,
                    valueToCommit: 1
                };
            }
            /* event */ return {
                needUpdate: !oldValue,
                valueToCommit: 1
            };
        }
        return {
            needUpdate: oldValue !== newValue,
            valueToCommit: newValue
        };
    }
    constructor(type){
        this.__slotIndex = 0;
        this.__parent = null;
        this.__firstChild = null;
        this.__lastChild = null;
        this.__previousSibling = null;
        this.__nextSibling = null;
        this.type = type;
        // Suspense uses 'div'
        if (!_definition_js__rspack_import_0.snapshotManager.values.has(type) && type !== 'div') {
            if (_snapshot_js__rspack_import_4.snapshotCreatorMap[type]) _snapshot_js__rspack_import_4.snapshotCreatorMap[type](type);
            else if ((0,_utils_js__rspack_import_7.isCompiledSnapshot)(type)) throw new Error('BackgroundSnapshot not found: ' + type);
            else (0,_definition_js__rspack_import_0.createRuntimeSnapshot)(type);
        }
        this.__snapshot_def = _definition_js__rspack_import_0.snapshotManager.values.get(type);
        const id = this.__id = backgroundSnapshotInstanceManager.nextId += 1;
        backgroundSnapshotInstanceManager.values.set(id, this);
        _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_13.SnapshotOperation.CreateElement, type, id);
    }
}
function hydrate(before, after) {
    const shouldProfile =  true && true;
    if (shouldProfile) (0,_shared_profile_js__rspack_import_8.profileStart)('ReactLynx::BSI::hydrate');
    try {
        (0,_lifecycle_patch_snapshotPatch_js__rspack_import_13.initGlobalSnapshotPatch)();
        const helper = (before, after)=>{
            var _before_children;
            var // handle value by index
            _after___values;
            _snapshotInstanceHydrationMap_js__rspack_import_5.hydrationMap.set(after.__id, before.id);
            backgroundSnapshotInstanceManager.updateId(after.__id, before.id);
            (_after___values = after.__values) === null || _after___values === void 0 ? void 0 : _after___values.forEach((value, index)=>{
                var _before_values;
                // render with different root would cause different values length
                const old = (_before_values = before.values) === null || _before_values === void 0 ? void 0 : _before_values[index];
                if (value) {
                    if (typeof value === 'object') {
                        if ('__spread' in value) {
                            // `value.__spread` my contain event ids using snapshot ids before hydration. Remove it.
                            delete value.__spread;
                            const __spread = (0,_spread_js__rspack_import_6.transformSpread)(after, index, value);
                            // Cache a clean spread for future diffs. For the patch payload, create a committed copy
                            // with runtime fields (e.g. `_execId`) injected.
                            after.__values[index]['__spread'] = __spread;
                            value = prepareSpreadForCommit(__spread, old);
                        } else if ('__ref' in value) value = old;
                        else if ('_wkltId' in value) value = prepareWorkletForCommit(value);
                        else if ('__isGesture' in value) value = (0,_gesture_processGestureBagkround_js__rspack_import_11.prepareGestureForCommit)(value);
                    } else if (typeof value === 'function') {
                        if ('__ref' in value) value = old;
                        else value = `${after.__id}:${index}:`;
                    }
                }
                if (!(0,_utils_js__rspack_import_9.isDirectOrDeepEqual)(value, old)) {
                    if (value === undefined && old === null) ;
                    else if (shouldProfile) {
                        var _getSnapshotVNodeSource;
                        (0,_shared_profile_js__rspack_import_8.profileStart)('ReactLynx::hydrate::setAttribute', {
                            args: {
                                id: String(after.__id),
                                snapshotType: String(after.type),
                                source: (_getSnapshotVNodeSource = (0,_debug_vnodeSource_js__rspack_import_10.getSnapshotVNodeSource)(after.__id)) !== null && _getSnapshotVNodeSource !== void 0 ? _getSnapshotVNodeSource : '',
                                dynamicPartIndex: String(index),
                                valueType: value === null ? 'null' : typeof value
                            }
                        });
                        try {
                            _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_13.SnapshotOperation.SetAttribute, after.__id, index, value);
                        } finally{
                            (0,_shared_profile_js__rspack_import_8.profileEnd)();
                        }
                    } else _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_13.SnapshotOperation.SetAttribute, after.__id, index, value);
                }
            });
            // handle extraProps as attributes and set by key
            if (after.__extraProps) for(const key in after.__extraProps){
                var _before_extraProps;
                const value = after.__extraProps[key];
                const old = (_before_extraProps = before.extraProps) === null || _before_extraProps === void 0 ? void 0 : _before_extraProps[key];
                if (!(0,_utils_js__rspack_import_9.isDirectOrDeepEqual)(value, old)) {
                    if (shouldProfile) {
                        var _getSnapshotVNodeSource;
                        (0,_shared_profile_js__rspack_import_8.profileStart)('ReactLynx::hydrate::setAttribute', {
                            args: {
                                id: String(after.__id),
                                snapshotType: String(after.type),
                                source: (_getSnapshotVNodeSource = (0,_debug_vnodeSource_js__rspack_import_10.getSnapshotVNodeSource)(after.__id)) !== null && _getSnapshotVNodeSource !== void 0 ? _getSnapshotVNodeSource : '',
                                dynamicPartIndex: key,
                                valueType: value === null ? 'null' : typeof value
                            }
                        });
                        try {
                            _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_13.SnapshotOperation.SetAttribute, after.__id, key, value);
                        } finally{
                            (0,_shared_profile_js__rspack_import_8.profileEnd)();
                        }
                    } else _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_13.SnapshotOperation.SetAttribute, after.__id, key, value);
                }
            }
            const { slot } = after.__snapshot_def;
            const beforeChildNodes = (_before_children = before.children) !== null && _before_children !== void 0 ? _before_children : [];
            const afterChildNodes = after.childNodes;
            if (!slot) return;
            slot.forEach(([type], index)=>{
                switch(type){
                    case _dynamicPartType_js__rspack_import_1.DynamicPartType.Slot:
                    case _dynamicPartType_js__rspack_import_1.DynamicPartType.MultiChildren:
                        {
                            // TODO: the following null assertions are not 100% safe
                            const v1 = beforeChildNodes[index];
                            const v2 = afterChildNodes[index];
                            helper(v1, v2);
                            break;
                        }
                    case _dynamicPartType_js__rspack_import_1.DynamicPartType.SlotV2:
                    case _dynamicPartType_js__rspack_import_1.DynamicPartType.ListSlotV2:
                    case _dynamicPartType_js__rspack_import_1.DynamicPartType.Children:
                    case _dynamicPartType_js__rspack_import_1.DynamicPartType.ListChildren:
                        {
                            let filteredBeforeChildNodes = beforeChildNodes;
                            let filteredAfterChildNodes = afterChildNodes;
                            if (type === _dynamicPartType_js__rspack_import_1.DynamicPartType.SlotV2 || type === _dynamicPartType_js__rspack_import_1.DynamicPartType.ListSlotV2) {
                                filteredBeforeChildNodes = beforeChildNodes.filter((v)=>{
                                    var _v_slotIndex;
                                    return ((_v_slotIndex = v.slotIndex) !== null && _v_slotIndex !== void 0 ? _v_slotIndex : 0) === index;
                                });
                                filteredAfterChildNodes = afterChildNodes.filter((v)=>v.__slotIndex === index);
                            }
                            const diffResult = (0,_renderToOpcodes_hydrate_js__rspack_import_16.diffArrayLepus)(filteredBeforeChildNodes, filteredAfterChildNodes, (a, b)=>a.type === b.type, (a, b)=>{
                                helper(a, b);
                            }, false);
                            (0,_renderToOpcodes_hydrate_js__rspack_import_16.diffArrayAction)(filteredBeforeChildNodes, diffResult, (node, target)=>{
                                var _getSnapshotVNodeSource;
                                if (shouldProfile) (0,_shared_profile_js__rspack_import_8.profileStart)('ReactLynx::BSI::reconstructInstanceTree', {
                                    args: {
                                        id: String(node.__id),
                                        snapshotType: String(node.type),
                                        source: (_getSnapshotVNodeSource = (0,_debug_vnodeSource_js__rspack_import_10.getSnapshotVNodeSource)(node.__id)) !== null && _getSnapshotVNodeSource !== void 0 ? _getSnapshotVNodeSource : ''
                                    }
                                });
                                try {
                                    (0,_reconstructInstanceTree_js__rspack_import_2.reconstructInstanceTree)([
                                        node
                                    ], before.id, target === null || target === void 0 ? void 0 : target.id);
                                } finally{
                                    if (shouldProfile) (0,_shared_profile_js__rspack_import_8.profileEnd)();
                                }
                                return undefined;
                            }, (node)=>{
                                if (shouldProfile) {
                                    var _getSnapshotVNodeSource;
                                    (0,_shared_profile_js__rspack_import_8.profileStart)('ReactLynx::hydrate::removeChild', {
                                        args: {
                                            id: String(node.id),
                                            snapshotType: String(node.type),
                                            source: (_getSnapshotVNodeSource = (0,_debug_vnodeSource_js__rspack_import_10.getSnapshotVNodeSource)(node.id)) !== null && _getSnapshotVNodeSource !== void 0 ? _getSnapshotVNodeSource : '',
                                            parentId: String(before.id)
                                        }
                                    });
                                    try {
                                        _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_13.SnapshotOperation.RemoveChild, before.id, node.id);
                                    } finally{
                                        (0,_shared_profile_js__rspack_import_8.profileEnd)();
                                    }
                                } else _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_13.SnapshotOperation.RemoveChild, before.id, node.id);
                            }, (node, target)=>{
                                var _node_slotIndex;
                                // changedList.push([SnapshotOperation.RemoveChild, before.id, node.id]);
                                if (shouldProfile) {
                                    var _getSnapshotVNodeSource, _ref;
                                    (0,_shared_profile_js__rspack_import_8.profileStart)('ReactLynx::hydrate::insertBefore', {
                                        args: {
                                            id: String(node.id),
                                            snapshotType: String(node.type),
                                            source: (_getSnapshotVNodeSource = (0,_debug_vnodeSource_js__rspack_import_10.getSnapshotVNodeSource)(node.id)) !== null && _getSnapshotVNodeSource !== void 0 ? _getSnapshotVNodeSource : '',
                                            parentId: String(before.id),
                                            targetId: String((_ref = target === null || target === void 0 ? void 0 : target.id) !== null && _ref !== void 0 ? _ref : '')
                                        }
                                    });
                                    try {
                                        var _node_slotIndex1;
                                        _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_13.SnapshotOperation.InsertBefore, before.id, node.id, target === null || target === void 0 ? void 0 : target.id, (_node_slotIndex1 = node.slotIndex) !== null && _node_slotIndex1 !== void 0 ? _node_slotIndex1 : 0);
                                    } finally{
                                        (0,_shared_profile_js__rspack_import_8.profileEnd)();
                                    }
                                } else _lifecycle_patch_snapshotPatch_js__rspack_import_13.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_13.SnapshotOperation.InsertBefore, before.id, node.id, target === null || target === void 0 ? void 0 : target.id, (_node_slotIndex = node.slotIndex) !== null && _node_slotIndex !== void 0 ? _node_slotIndex : 0);
                            });
                            break;
                        }
                    default:
                        throw new Error('Unexpected slot type: ' + type);
                }
            });
        };
        helper(before, after);
        // Hydration should not trigger ref updates. They were incorrectly triggered when using `setAttribute` to add values to the patch list.
        (0,_ref_js__rspack_import_3.clearQueuedRefs)();
        (0,_lynx_portalsPending_js__rspack_import_15.clearPendingPortalInsertBefore)();
        return (0,_lifecycle_patch_snapshotPatch_js__rspack_import_13.takeGlobalSnapshotPatch)();
    } finally{
        if (shouldProfile) (0,_shared_profile_js__rspack_import_8.profileEnd)();
    }
} //# sourceMappingURL=backgroundSnapshot.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/constants.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  COMPILED_SNAPSHOT: () => (COMPILED_SNAPSHOT),
  DEFAULT_CSS_ID: () => (DEFAULT_CSS_ID),
  DEFAULT_ENTRY_NAME: () => (DEFAULT_ENTRY_NAME)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Constants for snapshot system.
 */ /**
 * Default entry name for snapshots.
 */ const DEFAULT_ENTRY_NAME = '__Card__';
/**
 * Default CSS ID for snapshots.
 */ const DEFAULT_CSS_ID = 0;
/**
 * Default snapshot type for compiled snapshots.
 */ const COMPILED_SNAPSHOT = '__snapshot'; //# sourceMappingURL=constants.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/definition.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __page: () => (__page),
  __pageId: () => (__pageId),
  clearPage: () => (clearPage),
  createRuntimeSnapshot: () => (createRuntimeSnapshot),
  createSnapshot: () => (createSnapshot),
  setupPage: () => (setupPage),
  snapshotManager: () => (snapshotManager)
});
/* import */ var _dynamicPartType_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/dynamicPartType.js");
/* import */ var _list_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/list.js");
/* import */ var _spread_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/spread.js");
/* import */ var _utils_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Snapshot manager that manages all snapshot definitions.
 */ 



let __page;
let __pageId = 0;
function setupPage(page) {
    __page = page;
    __pageId = __GetElementUniqueID(page);
}
function clearPage() {
    __page = undefined;
    __pageId = 0;
}
/**
 * Manager for snapshot definitions
 */ const snapshotManager = {
    values: /* @__PURE__ */ new Map([
        [
            'root',
            {
                create () {
                    /* v8 ignore stop */ return [
                        __page
                    ];
                },
                update: [],
                slot: _dynamicPartType_js__rspack_import_0.__DynamicPartChildren_0,
                isListHolder: false,
                cssId: 0
            }
        ],
        [
            'wrapper',
            {
                create () {
                    /* v8 ignore stop */ return [
                        __CreateWrapperElement(__pageId)
                    ];
                },
                update: [],
                slot: _dynamicPartType_js__rspack_import_0.__DynamicPartChildren_0,
                isListHolder: false
            }
        ],
        [
            null,
            {
                create () {
                    /* v8 ignore stop */ return [
                        __CreateRawText('')
                    ];
                },
                update: [
                    (ctx)=>{
                        /* v8 ignore stop */ if (ctx.__elements) __SetAttribute(ctx.__elements[0], 'text', ctx.__values[0]);
                    }
                ],
                slot: [],
                isListHolder: false
            }
        ]
    ])
};
/**
 * Creates a new snapshot definition and adds it to the manager
 */ function createSnapshot(uniqID, create, update, slot, cssId, entryName, refAndSpreadIndexes, isLazySnapshotSupported = false) {
    if (!isLazySnapshotSupported) uniqID = (0,_utils_js__rspack_import_3.entryUniqID)(uniqID, entryName);
    const s = {
        create,
        update,
        slot,
        cssId,
        entryName,
        refAndSpreadIndexes
    };
    snapshotManager.values.set(uniqID, s);
    if (slot && slot[0]) {
        const v = slot[0][0];
        if (v === _dynamicPartType_js__rspack_import_0.DynamicPartType.ListChildren || v === _dynamicPartType_js__rspack_import_0.DynamicPartType.ListSlotV2) s.isListHolder = true;
        s.isSlotV2 = slot.every(([type])=>type === _dynamicPartType_js__rspack_import_0.DynamicPartType.SlotV2 || type === _dynamicPartType_js__rspack_import_0.DynamicPartType.ListSlotV2);
    }
    return uniqID;
}
function createRuntimeSnapshot(type) {
    const isListHolder = type === 'list';
    snapshotManager.values.set(type, {
        create (snapshotInstance) {
            // Keep runtime-created element creation consistent with the compiled snapshot path
            // (see swc_plugin_snapshot tag dispatch).
            switch(type){
                case 'view':
                    return [
                        __CreateView(__pageId)
                    ];
                case 'scroll-view':
                case 'x-scroll-view':
                    return [
                        __CreateScrollView(__pageId)
                    ];
                case 'image':
                    return [
                        __CreateImage(__pageId)
                    ];
                case 'text':
                    return [
                        __CreateText(__pageId)
                    ];
                case 'wrapper':
                    return [
                        __CreateWrapperElement(__pageId)
                    ];
                case 'list':
                    return [
                        (0,_list_js__rspack_import_1.snapshotCreateList)(__pageId, snapshotInstance, 0)
                    ];
                case 'frame':
                    return [
                        __CreateFrame(__pageId)
                    ];
                default:
                    return [
                        __CreateElement(type, __pageId)
                    ];
            }
        /* v8 ignore stop */ },
        update: [
            (ctx, index, oldValue)=>{
                /* v8 ignore stop */ (0,_spread_js__rspack_import_2.updateSpread)(ctx, index, oldValue, 0);
            }
        ],
        slot: isListHolder ? _dynamicPartType_js__rspack_import_0.__DynamicPartListSlotV2_0 : _dynamicPartType_js__rspack_import_0.__DynamicPartSlotV2_0,
        isListHolder,
        refAndSpreadIndexes: [
            0
        ]
    });
} //# sourceMappingURL=definition.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/dynamicPartType.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DynamicPartType: () => (DynamicPartType),
  __DynamicPartChildren_0: () => (__DynamicPartChildren_0),
  __DynamicPartListChildren_0: () => (__DynamicPartListChildren_0),
  __DynamicPartListSlotV2_0: () => (__DynamicPartListSlotV2_0),
  __DynamicPartSlotV2_0: () => (__DynamicPartSlotV2_0)
});
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Types of dynamic parts that can be updated in a snapshot
 * These are determined at compile time through static analysis
 */ const DynamicPartType = {
    Attr: 0,
    Spread: 1,
    Slot: 2,
    Children: 3,
    ListChildren: 4,
    MultiChildren: 5,
    SlotV2: 6,
    ListSlotV2: 7
};
/**
 * Default dynamic part for children
 */ const __DynamicPartChildren_0 = [
    [
        DynamicPartType.Children,
        0
    ]
];
/**
 * Default dynamic part for list children
 */ const __DynamicPartListChildren_0 = [
    [
        DynamicPartType.ListChildren,
        0
    ]
];
/**
 * Dynamic part for slot v2
 */ const __DynamicPartSlotV2_0 = [
    [
        DynamicPartType.SlotV2,
        0
    ]
];
/**
 * Dynamic part for list slot v2
 */ const __DynamicPartListSlotV2_0 = [
    [
        DynamicPartType.ListSlotV2,
        0
    ]
]; //# sourceMappingURL=dynamicPartType.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/event.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateEvent: () => (updateEvent)
});
function updateEvent(snapshot, expIndex, _oldValue, elementIndex, eventType, eventName, spreadKey) {
    const value = snapshot.__values[expIndex];
    let event;
    if (!value) event = undefined;
    else if (typeof value === 'string') event = value;
    else event = `${snapshot.__id}:${expIndex}:${spreadKey}`;
    // todo: reuseId?
    snapshot.__values[expIndex] = event;
    if (snapshot.__elements) __AddEvent(snapshot.__elements[elementIndex], eventType, eventName, event);
}
 //# sourceMappingURL=event.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/gesture.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateGesture: () => (updateGesture)
});
/* import */ var _gesture_processGesture_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/processGesture.js");
/* import */ var _lifecycle_patch_isMainThreadHydrating_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/isMainThreadHydrating.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function updateGesture(snapshot, expIndex, oldValue, elementIndex, workletType) {
    const value = snapshot.__values[expIndex];
    if (workletType === 'main-thread') (0,_gesture_processGesture_js__rspack_import_0.retainGestureWorkletCtx)(value);
    if (!snapshot.__elements) return;
    if (workletType === 'main-thread') (0,_gesture_processGesture_js__rspack_import_0.processGesture)(snapshot.__elements[elementIndex], value, oldValue, _lifecycle_patch_isMainThreadHydrating_js__rspack_import_1.isMainThreadHydrating, {
        domSet: false,
        retainCallbacks: false
    });
} //# sourceMappingURL=gesture.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/list.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  snapshotCreateList: () => (snapshotCreateList),
  snapshotDestroyList: () => (snapshotDestroyList)
});
/* import */ var _list_list_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/list.js");
/* import */ var _renderToOpcodes_hydrate_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/hydrate.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


const destroyLifetimeHandlerMap = /*#__PURE__*/ new Map();
function snapshotCreateList(pageId, _ctx, _expIndex) {
    const signMap = new Map();
    const recycleMap = new Map();
    const [componentAtIndex, componentAtIndexes] = (0,_list_list_js__rspack_import_0.componentAtIndexFactory)([], _renderToOpcodes_hydrate_js__rspack_import_1.hydrate);
    const list = __CreateList(pageId, componentAtIndex, (0,_list_list_js__rspack_import_0.enqueueComponentFactory)(), {}, componentAtIndexes);
    const listID = __GetElementUniqueID(list);
    if (typeof lynx !== 'undefined' && typeof lynx.getNative === 'function') {
        var _lynx_getNative;
        const cb = ()=>{
            __UpdateListCallbacks(list, null, null, null);
            destroyLifetimeHandlerMap.delete(listID);
        };
        (_lynx_getNative = lynx.getNative()) === null || _lynx_getNative === void 0 ? void 0 : _lynx_getNative.addEventListener('__DestroyLifetime', cb);
        destroyLifetimeHandlerMap.set(listID, cb);
    }
    _list_list_js__rspack_import_0.gSignMap[listID] = signMap;
    _list_list_js__rspack_import_0.gRecycleMap[listID] = recycleMap;
    return list;
}
function snapshotDestroyList(si) {
    const [, elementIndex] = si.__snapshot_def.slot[0];
    const list = si.__elements[elementIndex];
    const listID = __GetElementUniqueID(list);
    __UpdateListCallbacks(list, ()=>-1, ()=>{}, ()=>{});
    if (typeof lynx !== 'undefined' && typeof lynx.getNative === 'function') {
        const cb = destroyLifetimeHandlerMap.get(listID);
        if (cb) {
            var _lynx_getNative;
            (_lynx_getNative = lynx.getNative()) === null || _lynx_getNative === void 0 ? void 0 : _lynx_getNative.removeEventListener('__DestroyLifetime', cb);
            destroyLifetimeHandlerMap.delete(listID);
        }
    }
    delete _list_list_js__rspack_import_0.gSignMap[listID];
    delete _list_list_js__rspack_import_0.gRecycleMap[listID];
} //# sourceMappingURL=list.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/platformInfo.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  platformInfoAttributes: () => (platformInfoAttributes),
  updateListItemPlatformInfo: () => (updateListItemPlatformInfo)
});
/* import */ var _list_listUpdateInfo_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/listUpdateInfo.js");
/* import */ var _list_pendingListUpdates_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/pendingListUpdates.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


const platformInfoVirtualAttributes = /* @__PURE__ */ new Set([
    'reuse-identifier',
    'recyclable'
]);
const platformInfoAttributes = /* @__PURE__ */ new Set([
    'reuse-identifier',
    'full-span',
    'item-key',
    'sticky-top',
    'sticky-bottom',
    'estimated-height',
    'estimated-height-px',
    'estimated-main-axis-size-px',
    'recyclable'
]);
function updateListItemPlatformInfo(ctx, index, oldValue, elementIndex) {
    const newValue = ctx.__listItemPlatformInfo = ctx.__values[index];
    if (_list_pendingListUpdates_js__rspack_import_1.__pendingListUpdates.values) {
        var __pendingListUpdates_values, _list___id, _;
        const list = ctx.parentNode;
        if (list === null || list === void 0 ? void 0 : list.__snapshot_def.isListHolder) ((_ = (__pendingListUpdates_values = _list_pendingListUpdates_js__rspack_import_1.__pendingListUpdates.values)[_list___id = list.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_list___id] = new _list_listUpdateInfo_js__rspack_import_0.ListUpdateInfoRecording(list)).onSetAttribute(ctx, newValue, oldValue);
    }
    // In this updater, unlike `updateSpread`, the shape of the value is guaranteed to be an fixed object.
    // No adding / removing keys.
    if (ctx.__elements) {
        const e = ctx.__elements[elementIndex];
        const value = ctx.__values[index];
        for(const k in value){
            if (platformInfoVirtualAttributes.has(k)) continue;
            __SetAttribute(e, k, value[k]);
        }
    }
}
 //# sourceMappingURL=platformInfo.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/reconstructInstanceTree.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  reconstructInstanceTree: () => (reconstructInstanceTree)
});
/* import */ var _lifecycle_patch_snapshotPatch_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function reconstructInstanceTree(afters, parentId, targetId) {
    for (const child of afters){
        const id = child.__id;
        _lifecycle_patch_snapshotPatch_js__rspack_import_0.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__rspack_import_0.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__rspack_import_0.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_0.SnapshotOperation.CreateElement, child.type, id);
        const values = child.__values;
        if (values) {
            child.__values = undefined;
            child.setAttribute('values', values);
        }
        const extraProps = child.__extraProps;
        for(const key in extraProps)child.setAttribute(key, extraProps[key]);
        reconstructInstanceTree(child.childNodes, id);
        // Skip the parent link when `parentId` is `undefined` — used by portal,
        // where the topmost reconstructed node has no BSI parent (it is attached
        // to a NodesRef-resolved host element via `nodesRefInsertBefore`).
        if (parentId !== undefined) _lifecycle_patch_snapshotPatch_js__rspack_import_0.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__rspack_import_0.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__rspack_import_0.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_0.SnapshotOperation.InsertBefore, parentId, id, targetId, child.__slotIndex);
    }
} //# sourceMappingURL=reconstructInstanceTree.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/ref.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  applyQueuedRefs: () => (applyQueuedRefs),
  clearQueuedRefs: () => (clearQueuedRefs),
  clearRef: () => (clearRef),
  getRefFromValue: () => (getRefFromValue),
  queueRefAttrUpdate: () => (queueRefAttrUpdate),
  transformRef: () => (transformRef),
  unref: () => (unref),
  updateRef: () => (updateRef)
});
/* import */ var _workletRef_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletRef.js");
/* import */ var _core_ref_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/ref.js");
/* import */ var _lifecycle_ref_delay_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/ref/delay.js");



const refEffectQueue = /*#__PURE__*/ new _core_ref_js__rspack_import_1.OrdinaryRefEffectQueue();
function unref(snapshot, recursive) {
    var _snapshot___worklet_ref_set, _snapshot___worklet_ref_set1;
    (_snapshot___worklet_ref_set = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set === void 0 ? void 0 : _snapshot___worklet_ref_set.forEach((v)=>{
        if (v) (0,_workletRef_js__rspack_import_0.workletUnRef)(v);
    });
    (_snapshot___worklet_ref_set1 = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set1 === void 0 ? void 0 : _snapshot___worklet_ref_set1.clear();
    if (recursive) snapshot.childNodes.forEach((it)=>{
        unref(it, recursive);
    });
}
function clearRef(ref) {
    (0,_core_ref_js__rspack_import_1.applyOrdinaryRef)(ref, null);
}
function updateRef(snapshot, expIndex, oldValue, elementIndex) {
    const value = snapshot.__values[expIndex];
    let ref;
    if (typeof value === 'string') ref = value;
    else ref = `react-ref-${snapshot.__id}-${expIndex}`;
    snapshot.__values[expIndex] = ref;
    if (snapshot.__elements && oldValue !== ref) {
        if (oldValue) __SetAttribute(snapshot.__elements[elementIndex], oldValue, undefined);
        if (ref) __SetAttribute(snapshot.__elements[elementIndex], ref, 1);
    }
}
function getRefFromValue(val) {
    var _val_ref;
    if (!val || typeof val !== 'object' && typeof val !== 'function') return null;
    if ('__spread' in val && 'ref' in val) return (_val_ref = val.ref) !== null && _val_ref !== void 0 ? _val_ref : null;
    if ('__ref' in val) return val;
    return null;
}
function transformRef(ref) {
    const validRef = (0,_core_ref_js__rspack_import_1.normalizeRefValue)(ref);
    if (validRef === undefined || validRef === null) return validRef;
    if ('__ref' in validRef) return validRef;
    return Object.defineProperty(validRef, '__ref', {
        value: 1
    });
}
function applyQueuedRefs() {
    if (!refEffectQueue.hasPending()) return;
    refEffectQueue.flush((value)=>new _lifecycle_ref_delay_js__rspack_import_2.RefProxy(value));
}
function queueRefAttrUpdate(oldRef, newRef, snapshotInstanceId, expIndex) {
    refEffectQueue.queue(oldRef, newRef, [
        snapshotInstanceId,
        expIndex
    ]);
}
function clearQueuedRefs() {
    refEffectQueue.clear();
}
/**
 * @internal
 */  //# sourceMappingURL=ref.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SnapshotInstance: () => (SnapshotInstance),
  snapshotCreatorMap: () => (snapshotCreatorMap),
  snapshotInstanceManager: () => (snapshotInstanceManager)
});
/* import */ var _constants_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/constants.js");
/* import */ var _definition_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/definition.js");
/* import */ var _dynamicPartType_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/dynamicPartType.js");
/* import */ var _list_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/list.js");
/* import */ var _ref_js__rspack_import_4 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/ref.js");
/* import */ var _utils_js__rspack_import_5 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/utils.js");
/* import */ var _utils_js__rspack_import_6 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* import */ var _debug_vnodeSource_js__rspack_import_7 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/vnodeSource.js");
/* import */ var _list_listUpdateInfo_js__rspack_import_8 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/listUpdateInfo.js");
/* import */ var _list_pendingListUpdates_js__rspack_import_9 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/pendingListUpdates.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.










const snapshotInstanceManager = {
    nextId: 0,
    values: /* @__PURE__ */ new Map(),
    clear () {
        // not resetting `nextId` to prevent id collision
        this.values.clear();
        if (true) (0,_debug_vnodeSource_js__rspack_import_7.clearSnapshotVNodeSource)();
    }
};
function isRemovedSnapshot(value, removedSnapshots) {
    return (typeof value === 'object' || typeof value === 'function') && value !== null && removedSnapshots.has(value);
}
function clearRemovedSnapshotsFromArray(values, removedSnapshots, seen = new WeakSet()) {
    if (seen.has(values)) return false;
    seen.add(values);
    let changed = false;
    values.forEach((value, index)=>{
        if (isRemovedSnapshot(value, removedSnapshots)) {
            values[index] = undefined;
            changed = true;
        } else if (Array.isArray(value) && clearRemovedSnapshotsFromArray(value, removedSnapshots, seen)) changed = true;
    });
    return changed;
}
function collectRemovedSnapshots(removedChild) {
    const removedSnapshots = new WeakSet();
    (0,_utils_js__rspack_import_5.traverseSnapshotInstance)(removedChild, (snapshot)=>{
        removedSnapshots.add(snapshot);
    });
    return removedSnapshots;
}
function clearTransientChildPropRefs(owner, removedSnapshots) {
    const props = owner.props;
    if (!props) return;
    for (const key of Object.keys(props)){
        // Named child props are transient staging refs. Once a child subtree is
        // removed, they must not keep the old snapshots alive.
        if (!key.startsWith('$')) continue;
        const value = props[key];
        if (isRemovedSnapshot(value, removedSnapshots)) delete props[key];
        else if (Array.isArray(value)) clearRemovedSnapshotsFromArray(value, removedSnapshots);
    }
}
let snapshotCreatorMap = {};
/**
 * The runtime instance of a {@link Snapshot} on the main thread that manages
 * the actual elements and handles updates to dynamic parts.
 *
 * This class is designed to be compatible with Preact's {@link ContainerNode}
 * interface for Preact's renderer to operate upon.
 */ class SnapshotInstance {
    ensureElements() {
        const { create, slot, isListHolder, cssId, entryName } = this.__snapshot_def;
        const elements = create(this);
        this.__elements = elements;
        this.__element_root = elements[0];
        if (cssId === undefined) {
            if (entryName !== _constants_js__rspack_import_0.DEFAULT_ENTRY_NAME && entryName !== undefined) __SetCSSId(this.__elements, _constants_js__rspack_import_0.DEFAULT_CSS_ID, entryName);
        } else if (entryName !== _constants_js__rspack_import_0.DEFAULT_ENTRY_NAME && entryName !== undefined) __SetCSSId(this.__elements, cssId, entryName);
        else __SetCSSId(this.__elements, cssId);
        if (entryName !== _constants_js__rspack_import_0.DEFAULT_ENTRY_NAME && entryName !== undefined && this.parentNode && entryName !== this.parentNode.__snapshot_def.entryName) __SetAttribute(this.__element_root, 'bundle-url', this.__snapshot_def.entryName);
        _list_pendingListUpdates_js__rspack_import_9.__pendingListUpdates.runWithoutUpdates(()=>{
            const values = this.__values;
            if (values) {
                this.__values = undefined;
                this.setAttribute('values', values);
            }
        });
        if (isListHolder) {
            // never recurse into list's children
            // In nested list scenarios, there are some `list` that are lazily created.
            // We need to `flush` them during `ensureElements`.
            // Also, `flush` is a safe operation since it checks if the `list` is in `__pendingListUpdates`.
            if (_list_pendingListUpdates_js__rspack_import_9.__pendingListUpdates.values && !_list_pendingListUpdates_js__rspack_import_9.__pendingListUpdates.values[this.__id] && this.__firstChild !== null) {
                let child = this.__firstChild;
                while(child){
                    var __pendingListUpdates_values, _this___id, _;
                    ((_ = (__pendingListUpdates_values = _list_pendingListUpdates_js__rspack_import_9.__pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new _list_listUpdateInfo_js__rspack_import_8.ListUpdateInfoRecording(this)).onInsertBefore(child);
                    child = child.__nextSibling;
                }
            }
            _list_pendingListUpdates_js__rspack_import_9.__pendingListUpdates.flushWithId(this.__id);
        } else {
            let index = 0;
            let child = this.__firstChild;
            while(child){
                child.ensureElements();
                const [type, elementIndex] = slot[this.__snapshot_def.isSlotV2 ? child.__slotIndex : index];
                switch(type){
                    case _dynamicPartType_js__rspack_import_2.DynamicPartType.Slot:
                        __ReplaceElement(child.__element_root, elements[elementIndex]);
                        elements[elementIndex] = child.__element_root;
                        index++;
                        break;
                    /* v8 ignore start */ case _dynamicPartType_js__rspack_import_2.DynamicPartType.MultiChildren:
                        if (__GetTag(elements[elementIndex]) === 'wrapper') __ReplaceElement(child.__element_root, elements[elementIndex]);
                        else __AppendElement(elements[elementIndex], child.__element_root);
                        index++;
                        break;
                    /* v8 ignore end */ case _dynamicPartType_js__rspack_import_2.DynamicPartType.Children:
                    case _dynamicPartType_js__rspack_import_2.DynamicPartType.ListChildren:
                    case _dynamicPartType_js__rspack_import_2.DynamicPartType.SlotV2:
                    case _dynamicPartType_js__rspack_import_2.DynamicPartType.ListSlotV2:
                        __AppendElement(elements[elementIndex], child.__element_root);
                        break;
                    default:
                        throw new Error('Unexpected slot type: ' + type);
                }
                child = child.__nextSibling;
            }
        }
    }
    unRenderElements() {
        const { isListHolder } = this.__snapshot_def;
        this.__elements = undefined;
        this.__element_root = undefined;
        if (isListHolder) ;
        else {
            let child = this.__firstChild;
            while(child){
                child.unRenderElements();
                child = child.__nextSibling;
            }
        }
    }
    takeElements() {
        const a = Object.create(SnapshotInstance.prototype);
        a.__id = this.__id;
        a.__snapshot_def = this.__snapshot_def;
        a.__values = this.__values;
        a.__slotIndex = this.__slotIndex;
        // all clear
        a.__parent = null;
        a.__firstChild = null;
        a.__lastChild = null;
        a.__nextSibling = null;
        a.__previousSibling = null;
        this.childNodes.map((c)=>c.takeElements()).forEach((node)=>a.__insertBefore(node));
        a.__elements = this.__elements;
        a.__element_root = this.__element_root;
        this.__elements = undefined;
        this.__element_root = undefined;
        return a;
    }
    tearDown() {
        (0,_utils_js__rspack_import_5.traverseSnapshotInstance)(this, (v)=>{
            v.__parent = null;
            v.__previousSibling = null;
            v.__nextSibling = null;
        });
    }
    get parentNode() {
        return this.__parent;
    }
    get nextSibling() {
        return this.__nextSibling;
    }
    // get isConnected() {
    //   return !!this.__parent;
    // }
    contains(child) {
        return child.parentNode === this;
    }
    get childNodes() {
        const nodes = [];
        let node = this.__firstChild;
        while(node){
            nodes.push(node);
            node = node.__nextSibling;
        }
        return nodes;
    }
    __insertBefore(node, beforeNode) {
        // If the node already has a parent, remove it from its current parent
        if (node.__parent) node.__parent.__removeChild(node);
        // If beforeNode is not provided, add the new node as the last child
        if (beforeNode) {
            // If beforeNode is provided, insert the new node before beforeNode
            if (beforeNode.__previousSibling) {
                beforeNode.__previousSibling.__nextSibling = node;
                node.__previousSibling = beforeNode.__previousSibling;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            beforeNode.__previousSibling = node;
            node.__nextSibling = beforeNode;
            node.__parent = this;
        } else {
            if (this.__lastChild) {
                this.__lastChild.__nextSibling = node;
                node.__previousSibling = this.__lastChild;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            this.__lastChild = node;
            node.__parent = this;
            node.__nextSibling = null;
        }
    }
    __removeChild(node) {
        if (node.__parent !== this) throw new Error('The node to be removed is not a child of this node.');
        if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
        else this.__firstChild = node.__nextSibling;
        if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
        else this.__lastChild = node.__previousSibling;
        node.__parent = null;
        node.__previousSibling = null;
        node.__nextSibling = null;
    }
    insertBefore(newNode, existingNode) {
        const __snapshot_def = this.__snapshot_def;
        if (__snapshot_def.isListHolder) {
            var __pendingListUpdates_values, _this___id, _;
            if (_list_pendingListUpdates_js__rspack_import_9.__pendingListUpdates.values) ((_ = (__pendingListUpdates_values = _list_pendingListUpdates_js__rspack_import_9.__pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new _list_listUpdateInfo_js__rspack_import_8.ListUpdateInfoRecording(this)).onInsertBefore(newNode, existingNode);
            this.__insertBefore(newNode, existingNode);
            return;
        }
        const shouldRemove = newNode.__parent === this;
        this.__insertBefore(newNode, existingNode);
        const __elements = this.__elements;
        if (__elements) {
            if (!newNode.__elements) newNode.ensureElements();
        } else return;
        const count = __snapshot_def.slot.length;
        if (count === 1 || __snapshot_def.isSlotV2) {
            const [, elementIndex] = __snapshot_def.slot[typeof newNode.__slotIndex === 'number' ? newNode.__slotIndex : 0];
            const parent = __elements[elementIndex];
            if (shouldRemove) __RemoveElement(parent, newNode.__element_root);
            if (existingNode) {
                // SlotV2: each slot has its own wrapper. `existingNode` may live in a
                // different wrapper — `insertBefore(node, ref)` across wrappers throws,
                // so fall back to `append` (DOM auto-detaches the node from old parent).
                if (__snapshot_def.isSlotV2 && newNode.__slotIndex !== existingNode.__slotIndex) __AppendElement(parent, newNode.__element_root);
                else __InsertElementBefore(parent, newNode.__element_root, existingNode.__element_root);
            } else __AppendElement(parent, newNode.__element_root);
        } else if (count > 1) {
            const index = this.__current_slot_index++;
            const [s, elementIndex] = __snapshot_def.slot[index];
            if (s === _dynamicPartType_js__rspack_import_2.DynamicPartType.Slot) {
                __ReplaceElement(newNode.__element_root, __elements[elementIndex]);
                __elements[elementIndex] = newNode.__element_root;
            /* v8 ignore start */ } else if (s === _dynamicPartType_js__rspack_import_2.DynamicPartType.MultiChildren) {
                if (__GetTag(__elements[elementIndex]) === 'wrapper') __ReplaceElement(newNode.__element_root, __elements[elementIndex]);
                else __AppendElement(__elements[elementIndex], newNode.__element_root);
            }
        /* v8 ignore end */ }
    }
    removeChild(child) {
        const __snapshot_def = this.__snapshot_def;
        const removedSnapshots = collectRemovedSnapshots(child);
        clearTransientChildPropRefs(this, removedSnapshots);
        if (__snapshot_def.isListHolder) {
            var __pendingListUpdates_values, _this___id, _;
            if (_list_pendingListUpdates_js__rspack_import_9.__pendingListUpdates.values) ((_ = (__pendingListUpdates_values = _list_pendingListUpdates_js__rspack_import_9.__pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new _list_listUpdateInfo_js__rspack_import_8.ListUpdateInfoRecording(this)).onRemoveChild(child);
            this.__removeChild(child);
            (0,_utils_js__rspack_import_5.traverseSnapshotInstance)(child, (v)=>{
                clearTransientChildPropRefs(v, removedSnapshots);
                snapshotInstanceManager.values.delete(v.__id);
            });
            // mark this child as deleted
            child.__id = 0;
            return;
        }
        (0,_ref_js__rspack_import_4.unref)(child, true);
        if (this.__elements) {
            const [, elementIndex] = __snapshot_def.slot[typeof child.__slotIndex === 'number' ? child.__slotIndex : 0];
            __RemoveElement(this.__elements[elementIndex], child.__element_root);
        }
        this.__removeChild(child);
        (0,_utils_js__rspack_import_5.traverseSnapshotInstance)(child, (v)=>{
            if (v.__snapshot_def.isListHolder) (0,_list_js__rspack_import_3.snapshotDestroyList)(v);
            clearTransientChildPropRefs(v, removedSnapshots);
            v.__parent = null;
            v.__previousSibling = null;
            v.__nextSibling = null;
            delete v.__elements;
            delete v.__element_root;
            snapshotInstanceManager.values.delete(v.__id);
        });
    }
    // remove all children from start or this.__firstChild
    removeChildren(start = this.__firstChild) {
        let nodeToRemove = start;
        while(nodeToRemove){
            const next = nodeToRemove.__nextSibling;
            this.removeChild(nodeToRemove);
            nodeToRemove = next;
        }
    }
    setAttribute(key, value) {
        var _this___values;
        if (key === 'values') {
            const oldValues = this.__values;
            const values = value;
            this.__values = values;
            if (oldValues) for(let index = 0; index < values.length; index++)this.callUpdateIfNotDirectOrDeepEqual(index, oldValues[index], values[index]);
            else for(let index = 0; index < values.length; index++)this.callUpdateIfNotDirectOrDeepEqual(index, undefined, values[index]);
            return;
        }
        if (typeof key === 'string') {
            var // for more flexible usage, we allow setting non-indexed attributes
            _this___extraProps;
            ((_this___extraProps = this.__extraProps) !== null && _this___extraProps !== void 0 ? _this___extraProps : this.__extraProps = {})[key] = value;
            return;
        }
        (_this___values = this.__values) !== null && _this___values !== void 0 ? _this___values : this.__values = [];
        this.callUpdateIfNotDirectOrDeepEqual(key, this.__values[key], this.__values[key] = value);
    }
    toJSON() {
        const json = {
            id: this.__id,
            type: this.type,
            values: this.__values,
            extraProps: this.__extraProps,
            children: this.__firstChild ? this.childNodes : undefined
        };
        // To save serialize time, we only serialize slotIndex if it is not 0
        if (this.__slotIndex > 0) json.slotIndex = this.__slotIndex;
        return json;
    }
    callUpdateIfNotDirectOrDeepEqual(index, oldValue, newValue) {
        if ((0,_utils_js__rspack_import_6.isDirectOrDeepEqual)(oldValue, newValue)) ;
        else this.__snapshot_def.update[index](this, index, oldValue);
    }
    constructor(type, id){
        // current slot index for dynamic parts
        // only increment when inserting dynamic parts
        // when removing dynamic parts, the slot index will not change
        // cause there would be a wrapper to keep the slot index stable
        this.__current_slot_index = 0;
        this.__slotIndex = 0;
        // onCreate?: () => void;
        // onAttach?: () => void;
        // onDetach?: () => void;
        // onRef?: () => void;
        // onUnref?: () => void;
        this.__parent = null;
        this.__firstChild = null;
        this.__lastChild = null;
        this.__previousSibling = null;
        this.__nextSibling = null;
        this.type = type;
        // Suspense uses 'div'
        if (!_definition_js__rspack_import_1.snapshotManager.values.has(type) && type !== 'div') {
            if (snapshotCreatorMap[type]) snapshotCreatorMap[type](type);
            else if ((0,_utils_js__rspack_import_5.isCompiledSnapshot)(type)) {
                let message = 'Snapshot not found: ' + type;
                if (true) message += '. You can set environment variable `REACT_ALOG=true` and restart your dev server for troubleshooting.';
                throw new Error(message);
            } else (0,_definition_js__rspack_import_1.createRuntimeSnapshot)(type);
        }
        this.__snapshot_def = _definition_js__rspack_import_1.snapshotManager.values.get(type);
        id !== null && id !== void 0 ? id : id = snapshotInstanceManager.nextId -= 1;
        this.__id = id;
        snapshotInstanceManager.values.set(id, this);
    }
} //# sourceMappingURL=snapshot.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshotInstanceHydrationMap.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  hydrationMap: () => (hydrationMap)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * A map to store hydration states between snapshot instances.
 * K->V: main thread snapshotInstance IDs -> background snapshotInstance IDs.
 *
 * The map is used by the ref system to translate between snapshot instance IDs when
 * operations need to cross the thread boundary during the commit phase.
 */ const hydrationMap = /*#__PURE__*/ new Map();
/**
 * @internal
 */  //# sourceMappingURL=snapshotInstanceHydrationMap.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/spread.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  transformSpread: () => (transformSpread),
  updateSpread: () => (updateSpread)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _event_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/event.js");
/* import */ var _gesture_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/gesture.js");
/* import */ var _platformInfo_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/platformInfo.js");
/* import */ var _ref_js__rspack_import_4 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/ref.js");
/* import */ var _workletEvent_js__rspack_import_5 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletEvent.js");
/* import */ var _workletRef_js__rspack_import_6 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletRef.js");
/* import */ var _utils_js__rspack_import_7 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* import */ var _gesture_processGesture_js__rspack_import_8 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/processGesture.js");
/* import */ var _list_listUpdateInfo_js__rspack_import_9 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/listUpdateInfo.js");
/* import */ var _list_pendingListUpdates_js__rspack_import_10 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/pendingListUpdates.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Handles JSX spread operator in the snapshot system.
 *
 * Spread operators in JSX (e.g., <div {...props}>) are transformed into
 * optimized attribute updates at compile time, avoiding runtime object spreads.
 */ 










// eslint-disable-next-line regexp/no-unused-capturing-group
const eventRegExp = /^(([A-Za-z-]*):)?(bind|catch|capture-bind|capture-catch|global-bind)([A-Za-z]+)$/;
const eventTypeMap = {
    bind: 'bindEvent',
    catch: 'catchEvent',
    'capture-bind': 'capture-bind',
    'capture-catch': 'capture-catch',
    'global-bind': 'global-bindEvent'
};
const noFlattenAttributes = /* @__PURE__ */ new Set([
    'name',
    'clip-radius',
    'overlap',
    'exposure-scene',
    'exposure-id'
]);
function retainSpreadWorkletCtx(newValue, oldValue) {
    let match = null;
    for(const key in newValue){
        const value1 = newValue[key];
        if (value1 === oldValue[key]) continue;
        if (key.endsWith(':ref')) {
            if (key.slice(0, -4) === 'main-thread' && value1 && value1._wkltId) (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.retainWorkletCtx)(value1);
        } else if (key.endsWith(':gesture')) {
            if (key.slice(0, -8) === 'main-thread') (0,_gesture_processGesture_js__rspack_import_8.retainGestureWorkletCtx)(value1);
        } else if ((match = eventRegExp.exec(key)) && match[2] === 'main-thread' && value1 !== null && value1 !== undefined && typeof value1 === 'object') (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.retainWorkletCtx)(value1);
    }
}
function updateSpread(snapshot, index, oldValue, elementIndex) {
    oldValue !== null && oldValue !== void 0 ? oldValue : oldValue = {};
    let newValue = snapshot.__values[index]; // compiler guarantee this must be an object;
    const list = snapshot.parentNode;
    if (list === null || list === void 0 ? void 0 : list.__snapshot_def.isListHolder) {
        const oldPlatformInfo = (0,_utils_js__rspack_import_7.pick)(oldValue, _platformInfo_js__rspack_import_3.platformInfoAttributes);
        const platformInfo = (0,_utils_js__rspack_import_7.pick)(newValue, _platformInfo_js__rspack_import_3.platformInfoAttributes);
        if (!(0,_utils_js__rspack_import_7.isDirectOrDeepEqual)(oldPlatformInfo, platformInfo)) {
            var __pendingListUpdates_values, _list___id, _;
            if (_list_pendingListUpdates_js__rspack_import_10.__pendingListUpdates.values) ((_ = (__pendingListUpdates_values = _list_pendingListUpdates_js__rspack_import_10.__pendingListUpdates.values)[_list___id = list.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_list___id] = new _list_listUpdateInfo_js__rspack_import_9.ListUpdateInfoRecording(list)).onSetAttribute(snapshot, platformInfo, oldPlatformInfo);
            snapshot.__listItemPlatformInfo = platformInfo;
            // The fakeSnapshot is missing `__parent`, so no `ListUpdateInfoRecording#onSetAttribute` will be called
            const fakeSnapshot = {
                __values: {
                    get [index] () {
                        return platformInfo;
                    }
                },
                __id: snapshot.__id,
                __elements: snapshot.__elements
            };
            (0,_platformInfo_js__rspack_import_3.updateListItemPlatformInfo)(fakeSnapshot, index, oldPlatformInfo, elementIndex);
        }
    }
    if ('__spread' in newValue) {
        // first screen
        newValue = transformSpread(snapshot, index, newValue);
        snapshot.__values[index] = newValue;
    }
    if (!snapshot.__elements) {
        retainSpreadWorkletCtx(newValue, oldValue);
        return;
    }
    const dataset = {};
    let match = null;
    for(const key in newValue){
        const v = newValue[key];
        if (v !== oldValue[key]) {
            if (key === 'className') __SetClasses(snapshot.__elements[elementIndex], v);
            else if (key === 'style') {
                if (!(0,_utils_js__rspack_import_7.isDirectOrDeepEqual)(v, oldValue[key])) __SetInlineStyles(snapshot.__elements[elementIndex], v);
            } else if (key === 'id') __SetID(snapshot.__elements[elementIndex], v);
            else if (key.startsWith('data-')) ;
            else if (key === 'ref') {
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        },
                        set [index] (value){
                            // Modifications to the ref value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_ref_js__rspack_import_4.updateRef)(fakeSnapshot, index, oldValue[key], elementIndex);
            } else if (key.endsWith(':ref')) {
                var _snapshot, ___worklet_ref_set;
                (___worklet_ref_set = (_snapshot = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set !== void 0 ? ___worklet_ref_set : _snapshot.__worklet_ref_set = new Set();
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __worklet_ref_set: snapshot.__worklet_ref_set
                };
                (0,_workletRef_js__rspack_import_6.updateWorkletRef)(fakeSnapshot, index, oldValue[key], elementIndex, key.slice(0, -4));
            } else if (key.endsWith(':gesture')) {
                const workletType = key.slice(0, -8);
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_gesture_js__rspack_import_2.updateGesture)(fakeSnapshot, index, oldValue[key], elementIndex, workletType);
            } else if (match = eventRegExp.exec(key)) {
                const workletType = match[2];
                const eventType = eventTypeMap[match[3]];
                const eventName = match[4];
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        },
                        set [index] (value){
                            // Modifications to the event value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                if (workletType) (0,_workletEvent_js__rspack_import_5.updateWorkletEvent)(fakeSnapshot, index, oldValue[key], elementIndex, workletType, eventType, eventName);
                else (0,_event_js__rspack_import_1.updateEvent)(fakeSnapshot, index, oldValue[key], elementIndex, eventType, eventName, key);
            } else if (_platformInfo_js__rspack_import_3.platformInfoAttributes.has(key)) ;
            else __SetAttribute(snapshot.__elements[elementIndex], key, v);
        }
        // collect data regardless of whether it has changed
        if (key.startsWith('data-')) dataset[key.slice(5)] = v;
    }
    let hasOldDataset = false;
    for(const key in oldValue){
        if (!(key in newValue)) {
            if (key === 'className') __SetClasses(snapshot.__elements[elementIndex], '');
            else if (key === 'style') __SetInlineStyles(snapshot.__elements[elementIndex], '');
            else if (key === 'id') __SetID(snapshot.__elements[elementIndex], null);
            else if (key.startsWith('data-')) ;
            else if (key === 'ref') {
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        },
                        set [index] (value){
                            // Modifications to the ref value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_ref_js__rspack_import_4.updateRef)(fakeSnapshot, index, oldValue[key], elementIndex);
            } else if (key.endsWith(':ref')) {
                var _snapshot1, ___worklet_ref_set1;
                (___worklet_ref_set1 = (_snapshot1 = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set1 !== void 0 ? ___worklet_ref_set1 : _snapshot1.__worklet_ref_set = new Set();
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __worklet_ref_set: snapshot.__worklet_ref_set
                };
                (0,_workletRef_js__rspack_import_6.updateWorkletRef)(fakeSnapshot, index, oldValue[key], elementIndex, key.slice(0, -4));
            } else if (key.endsWith(':gesture')) {
                const workletType = key.slice(0, -8);
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_gesture_js__rspack_import_2.updateGesture)(fakeSnapshot, index, oldValue[key], elementIndex, workletType);
            } else if (match = eventRegExp.exec(key)) {
                const workletType = match[2];
                const eventType = eventTypeMap[match[3]];
                const eventName = match[4];
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        },
                        set [index] (value){
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                if (workletType) (0,_workletEvent_js__rspack_import_5.updateWorkletEvent)(fakeSnapshot, index, oldValue[key], elementIndex, workletType, eventType, eventName);
                else (0,_event_js__rspack_import_1.updateEvent)(fakeSnapshot, index, oldValue[key], elementIndex, eventType, eventName, key);
            } else if (_platformInfo_js__rspack_import_3.platformInfoAttributes.has(key)) ;
            else __SetAttribute(snapshot.__elements[elementIndex], key, null);
        }
        // collect data regardless of whether it has changed
        if (key.startsWith('data-')) hasOldDataset = true;
    }
    // TODO: compare dataset before commit it to native?
    if (hasOldDataset || !(0,_utils_js__rspack_import_7.isEmptyObject)(dataset)) __SetDataset(snapshot.__elements[elementIndex], dataset);
}
function transformSpread(snapshot, index, spread) {
    const result = {};
    let hasNoFlattenAttributes = false;
    for(const key in spread){
        let value1 = spread[key];
        if (key === '__spread') ;
        else if (key === 'class' || key === 'className') {
            value1 !== null && value1 !== void 0 ? value1 : value1 = '';
            result['className'] = value1;
        } else if (key === 'ref') result[key] = value1 ? 1 : undefined;
        else if (typeof value1 === 'function') result[key] = `${snapshot.__id}:${index}:${key}`;
        else if (key === '__self' || key === '__source') ;
        else {
            if (!hasNoFlattenAttributes && noFlattenAttributes.has(key)) hasNoFlattenAttributes = true;
            result[key] = value1;
        }
    }
    if (hasNoFlattenAttributes) result['flatten'] = false;
    return result;
}
 //# sourceMappingURL=spread.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/utils.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  entryUniqID: () => (entryUniqID),
  isCompiledSnapshot: () => (isCompiledSnapshot),
  traverseSnapshotInstance: () => (traverseSnapshotInstance)
});
/* import */ var _constants_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/constants.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Utility functions for snapshot system.
 */ 
/**
 * Generates a unique ID for a snapshot entry by combining the entry name and unique ID.
 */ function entryUniqID(uniqID, entryName) {
    return entryName ? `${entryName}:${uniqID}` : uniqID;
}
/**
 * Traverses a snapshot instance tree and calls the callback for each node.
 */ function traverseSnapshotInstance(si, callback) {
    const c = si.childNodes;
    callback(si);
    for (const vv of c)traverseSnapshotInstance(vv, callback);
}
const isCompiledSnapshot = (type)=>type.includes(_constants_js__rspack_import_0.COMPILED_SNAPSHOT); //# sourceMappingURL=utils.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletEvent.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateWorkletEvent: () => (updateWorkletEvent)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _debug_describeInvalidValue_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/describeInvalidValue.js");
/* import */ var _lifecycle_patch_isMainThreadHydrating_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/isMainThreadHydrating.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



function formatEventAttribute(workletType, eventType, eventName) {
    const suffix = eventType.endsWith('Event') ? eventType.slice(0, -5) : eventType;
    return `${workletType}:${suffix}${eventName}`;
}
function reportInvalidWorkletValue(snapshot, elementIndex, workletType, eventType, eventName, value) {
    var _snapshot___elements;
    const eventAttr = formatEventAttribute(workletType, eventType, eventName);
    const element = (_snapshot___elements = snapshot.__elements) === null || _snapshot___elements === void 0 ? void 0 : _snapshot___elements[elementIndex];
    const elementTag = element ? __GetTag(element) : 'unknown';
    const elementId = snapshot.__id;
    const snapshotName = snapshot.type;
    const message = `"${eventAttr}" on <${elementTag}> (snapshot ${elementId} "${snapshotName}") expected ` + 'a main-thread function but received ' + `${(0,_debug_describeInvalidValue_js__rspack_import_1.describeInvalidValue)(value)}. Did you forget to add a "main thread" directive to the handler?`;
    lynx.reportError(new Error(message));
}
function updateWorkletEvent(snapshot, expIndex, oldValue, elementIndex, workletType, eventType, eventName) {
    const rawValue = snapshot.__values[expIndex];
    if ( true && rawValue !== null && rawValue !== undefined && typeof rawValue !== 'object') {
        if (!snapshot.__elements) return;
        reportInvalidWorkletValue(snapshot, elementIndex, workletType, eventType, eventName, rawValue);
        return;
    }
    const value = rawValue !== null && rawValue !== void 0 ? rawValue : {};
    value._workletType = workletType;
    if (workletType === 'main-thread') (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.retainWorkletCtx)(value);
    if (!snapshot.__elements) return;
    if (workletType === 'main-thread') {
        (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.onWorkletCtxUpdate)(value, oldValue, _lifecycle_patch_isMainThreadHydrating_js__rspack_import_2.isMainThreadHydrating, snapshot.__elements[elementIndex]);
        const event = {
            type: 'worklet',
            value
        };
        __AddEvent(snapshot.__elements[elementIndex], eventType, eventName, event);
    }
}
 //# sourceMappingURL=workletEvent.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletRef.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  applyRefQueue: () => (applyRefQueue),
  updateWorkletRef: () => (updateWorkletRef),
  workletUnRef: () => (workletUnRef)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _lifecycle_patch_isMainThreadHydrating_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/isMainThreadHydrating.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


let mtRefQueue = [];
function applyRefQueue() {
    const queue = mtRefQueue;
    mtRefQueue = [];
    for(let i = 0; i < queue.length; i += 2){
        const worklet = queue[i];
        const element = queue[i + 1];
        if ('_wvid' in worklet) (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.updateWorkletRef)(worklet, element);
        else if ('_wkltId' in worklet) worklet._unmount = (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.runWorkletCtx)(worklet, [
            {
                elementRefptr: element
            }
        ]);
    }
}
function addToRefQueue(worklet, element) {
    mtRefQueue.push(worklet, element);
}
function workletUnRef(value) {
    if ('_wvid' in value) (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.updateWorkletRef)(value, null);
    else if ('_wkltId' in value) {
        if (typeof value._unmount == 'function') value._unmount();
        else (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.runWorkletCtx)(value, [
            null
        ]);
    }
}
function updateWorkletRef(snapshot, expIndex, oldValue, elementIndex, workletType) {
    var _snapshot___worklet_ref_set;
    const value = snapshot.__values[expIndex];
    if (workletType === 'main-thread' && value && value._wkltId) (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.retainWorkletCtx)(value);
    if (!snapshot.__elements) return;
    if (oldValue && ((_snapshot___worklet_ref_set = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set === void 0 ? void 0 : _snapshot___worklet_ref_set.has(oldValue))) {
        var _snapshot___worklet_ref_set1;
        workletUnRef(oldValue);
        (_snapshot___worklet_ref_set1 = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set1 === void 0 ? void 0 : _snapshot___worklet_ref_set1.delete(oldValue);
    }
    if (value === null || value === undefined) ;
    else if (value._wvid) {
        const element = snapshot.__elements[elementIndex];
        addToRefQueue(value, element);
    } else if (value._wkltId) {
        const element = snapshot.__elements[elementIndex];
        (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.onWorkletCtxUpdate)(value, oldValue, _lifecycle_patch_isMainThreadHydrating_js__rspack_import_1.isMainThreadHydrating, element);
        addToRefQueue(value, element);
    /* v8 ignore next 3 */ } else if (value._type === '__LEPUS__' || value._lepusWorkletHash) ;
    else throw new Error('MainThreadRef: main-thread:ref must be of type MainThreadRef or main-thread function.');
    if (value) {
        var _snapshot, ___worklet_ref_set;
        (___worklet_ref_set = (_snapshot = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set !== void 0 ? ___worklet_ref_set : _snapshot.__worklet_ref_set = new Set();
        snapshot.__worklet_ref_set.add(value);
    }
    // Add an arbitrary attribute to avoid this element being layout-only
    __SetAttribute(snapshot.__elements[elementIndex], 'has-react-ref', true);
} //# sourceMappingURL=workletRef.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/functionCall.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onFunctionCall: () => (onFunctionCall)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _destroy_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/destroy.js");
/* import */ var _indexMap_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/indexMap.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



let resolveMap;
function initReturnValueListener() {
    const context = lynx.getJSContext();
    resolveMap = new _indexMap_js__rspack_import_2.IndexMap();
    context.addEventListener(_lynx_js_react_worklet_runtime_bindings__rspack_import_0.WorkletEvents.FunctionCallRet, onFunctionCallRet);
    _destroy_js__rspack_import_1.destroyTasks.push(()=>{
        context.removeEventListener(_lynx_js_react_worklet_runtime_bindings__rspack_import_0.WorkletEvents.FunctionCallRet, onFunctionCallRet);
        resolveMap = undefined;
    });
}
/**
 * @internal
 */ function onFunctionCall(resolve) {
    if (!resolveMap) initReturnValueListener();
    return resolveMap.add(resolve);
}
function onFunctionCallRet(event) {
    const data = JSON.parse(event.data);
    const resolve = resolveMap.get(data.resolveId);
    resolveMap.remove(data.resolveId);
    resolve(data.returnValue);
}
 //# sourceMappingURL=functionCall.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/runOnBackground.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerWorkletCtx: () => (registerWorkletCtx),
  runJSFunction: () => (runJSFunction),
  runOnBackground: () => (runOnBackground)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _functionality_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/functionality.js");
/* import */ var _functionCall_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/functionCall.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



/**
 * @internal
 */ function runJSFunction() {}
/**
 * @internal
 */ function registerWorkletCtx() {}
/**
 * `runOnBackground` allows triggering js functions on the background thread asynchronously.
 * @param f - The js function to be called.
 * @returns A function. Calling which with the arguments to be passed to the js function to trigger it on the background thread. This function returns a promise that resolves to the return value of the js function.
 * @example
 * ```ts
 * import { runOnBackground } from '@lynx-js/react';
 *
 * async function someMainthreadFunction() {
 *   'main thread';
 *   const fn = runOnBackground(() => {
 *     return 'hello';
 *   });
 *   const result = await fn();
}
 * ```
 * @public
 */ function runOnBackground(f) {
    if (!(0,_functionality_js__rspack_import_1.isRunOnBackgroundEnabled)()) throw new Error('runOnBackground requires Lynx sdk version 2.16.');
    const obj = f;
    if (obj._error) throw new Error(obj._error);
    return async (...params)=>{
        return new Promise((resolve)=>{
            const resolveId = (0,_functionCall_js__rspack_import_2.onFunctionCall)(resolve);
            if (obj._isFirstScreen) {
                (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.delayRunOnBackground)(obj, (fnId, execId)=>{
                    dispatchRunBackgroundFunctionEvent(fnId, params, execId, resolveId);
                });
                return;
            }
            dispatchRunBackgroundFunctionEvent(obj._jsFnId, params, obj._execId, resolveId);
        });
    };
}
function dispatchRunBackgroundFunctionEvent(fnId, params, execId, resolveId) {
    lynx.getJSContext().dispatchEvent({
        type: _lynx_js_react_worklet_runtime_bindings__rspack_import_0.WorkletEvents.runOnBackground,
        data: JSON.stringify({
            obj: {
                _jsFnId: fnId,
                _execId: execId
            },
            params,
            resolveId
        })
    });
}
 //# sourceMappingURL=runOnBackground.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/runOnMainThread.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runOnMainThread: () => (runOnMainThread)
});
/**
 * `runOnMainThread` allows triggering main thread functions on the main thread asynchronously.
 * @param fn - The main thread functions to be called.
 * @returns A function. Calling which with the arguments to be passed to the main thread function to trigger it on the main thread. This function returns a promise that resolves to the return value of the main thread function.
 * @example
 * ```ts
 * import { runOnMainThread } from '@lynx-js/react';
 *
 * async function someFunction() {
 *   const fn = runOnMainThread(() => {
 *     'main thread';
 *     return 'hello';
 *   });
 *   const result = await fn();
 * }
 * ```
 * @public
 */ function runOnMainThread(fn) {
    throw new Error('runOnMainThread can only be used on the background thread.');
} //# sourceMappingURL=runOnMainThread.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/transformToWorklet.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  transformToWorklet: () => (transformToWorklet)
});
let lastId = 0;
/**
 * transform args of `runOnBackground()`.
 *
 * @internal
 */ function transformToWorklet(obj) {
    var _obj, _toJSON;
    const id = ++lastId;
    if (typeof obj !== 'function') return {
        _jsFnId: id,
        _error: `Argument of runOnBackground should be a function, but got [${typeof obj}] instead`
    };
    (_toJSON = (_obj = obj).toJSON) !== null && _toJSON !== void 0 ? _toJSON : _obj.toJSON = ()=>'[BackgroundFunction]';
    return {
        _jsFnId: id,
        _fn: obj
    };
} //# sourceMappingURL=transformToWorklet.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ctx.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onPostWorkletCtx: () => (onPostWorkletCtx)
});
/* import */ var _call_runOnBackground_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/runOnBackground.js");
/* import */ var _functionality_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/functionality.js");


/**
 * @internal
 */ function onPostWorkletCtx(afterValue) {
    if (!(0,_functionality_js__rspack_import_1.isMtsEnabled)() && afterValue) {
        lynx.reportError(new Error('Main thread script requires Lynx sdk version 2.14'));
        return null;
    }
    if (!afterValue || !(0,_functionality_js__rspack_import_1.isRunOnBackgroundEnabled)()) return afterValue;
    (0,_call_runOnBackground_js__rspack_import_0.registerWorkletCtx)(afterValue);
    return afterValue;
} //# sourceMappingURL=ctx.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/destroy.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  destroyTasks: () => (destroyTasks),
  destroyWorklet: () => (destroyWorklet)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const destroyTasks = [];
function destroyWorklet() {
    for (const task of destroyTasks)task();
    destroyTasks.length = 0;
} //# sourceMappingURL=destroy.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/functionality.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearConfigCacheForTesting: () => (clearConfigCacheForTesting),
  isMtsEnabled: () => (isMtsEnabled),
  isRunOnBackgroundEnabled: () => (isRunOnBackgroundEnabled)
});
/* import */ var _utils_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let mtsEnabled;
let runOnBackgroundEnabled;
/**
 * @internal
 */ function isMtsEnabled() {
    return mtsEnabled !== null && mtsEnabled !== void 0 ? mtsEnabled : mtsEnabled = (0,_utils_js__rspack_import_0.isSdkVersionGt)(2, 13);
}
/**
 * @internal
 */ function isRunOnBackgroundEnabled() {
    return runOnBackgroundEnabled !== null && runOnBackgroundEnabled !== void 0 ? runOnBackgroundEnabled : runOnBackgroundEnabled = (0,_utils_js__rspack_import_0.isSdkVersionGt)(2, 15);
}
function clearConfigCacheForTesting() {
    mtsEnabled = undefined;
    runOnBackgroundEnabled = undefined;
}
 //# sourceMappingURL=functionality.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/hmr.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerWorkletOnBackground: () => (registerWorkletOnBackground)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
// import { __globalSnapshotPatch } from '../lifecycle/patch/snapshotPatch.js';
// const workletHashSet: Set<string> = /* @__PURE__ */ new Set();
/* v8 ignore start */ /**
 * @internal
 */ // disable hmr until bugs are fixed
// TODO: re-enable hmr or change a way to impl it; also need to fix the test case DEV_ONLY_RegisterWorklet
function registerWorkletOnBackground(_type, _hash, _fn) {
// if (workletHashSet.has(hash)) {
//   return;
// }
// workletHashSet.add(hash);
// if (__globalSnapshotPatch) {
//   __globalSnapshotPatch.push(
//     SnapshotOperation.DEV_ONLY_RegisterWorklet,
//     hash,
//     // We use `Function.prototype.toString` to serialize the function for Lepus.
//     fn.toString(),
//   );
// }
}
/* v8 ignore stop */  //# sourceMappingURL=hmr.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/indexMap.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IndexMap: () => (IndexMap)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
class IndexMap {
    add(value) {
        const index = ++this.lastIndex;
        this.indexMap.set(index, value);
        return index;
    }
    get(index) {
        return this.indexMap.get(index);
    }
    remove(index) {
        this.indexMap.delete(index);
    }
    constructor(){
        this.lastIndex = 0;
        this.indexMap = new Map();
    }
}
 //# sourceMappingURL=indexMap.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/updateInitValue.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  injectUpdateMTRefInitValue: () => (injectUpdateMTRefInitValue),
  sendMTRefInitValueToMainThread: () => (sendMTRefInitValueToMainThread)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _workletRefPool_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/workletRefPool.js");
/* import */ var _lifecycle_constant_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



function updateMTRefInitValue({ data }) {
    // This update ignores reloadVersion check.
    // MainThreadRefs created before reloadTemplate may still be referenced by user in some cases after reloadTemplate.
    const patch = JSON.parse(data);
    (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.updateWorkletRefInitValueChanges)(patch);
}
function injectUpdateMTRefInitValue() {
    Object.assign(globalThis, {
        [_lifecycle_constant_js__rspack_import_2.LifecycleConstant.updateMTRefInitValue]: updateMTRefInitValue
    });
}
function sendMTRefInitValueToMainThread() {
    const patch = (0,_workletRefPool_js__rspack_import_1.takeWorkletRefInitValuePatch)();
    if (patch.length === 0) return;
    const data = JSON.stringify(patch);
    lynx.getNativeApp().callLepusMethod(_lifecycle_constant_js__rspack_import_2.LifecycleConstant.updateMTRefInitValue, {
        data
    });
} //# sourceMappingURL=updateInitValue.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/workletRef.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MainThreadRef: () => (MainThreadRef),
  clearWorkletRefLastIdForTesting: () => (clearWorkletRefLastIdForTesting),
  useMainThreadRef: () => (useMainThreadRef)
});
/* import */ var _core_hooks_react_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/react.js");

// Split into two variables for testing purposes
let lastIdBG = 0;
let lastIdMT = 0;
function clearWorkletRefLastIdForTesting() {
    lastIdBG = lastIdMT = 0;
}
class WorkletRef {
    get current() {
        if (true) /* v8 ignore next 3 */ throw new Error('MainThreadRef: value of a MainThreadRef cannot be accessed outside of main thread script.');
        return undefined;
    }
    set current(_) {
        if (true) throw new Error('MainThreadRef: value of a MainThreadRef cannot be accessed outside of main thread script.');
    }
    /**
     * @internal
     */ toJSON() {
        return {
            _wvid: this._wvid
        };
    }
    /**
     * @internal
     */ constructor(initValue, type){
        this._initValue = initValue;
        this._type = type;
        this._wvid = --lastIdMT;
    }
}
/**
 * A `MainThreadRef` is a ref that can only be accessed on the main thread. It is used to preserve
 * states between main thread function calls.
 * The data saved in `current` property of the `MainThreadRef` can be read and written in
 * multiple main thread functions.
 * @public
 */ class MainThreadRef extends WorkletRef {
    constructor(initValue){
        super(initValue, 'main-thread');
    }
}
function useMainThreadRef(initValue) {
    return (0,_core_hooks_react_js__rspack_import_0.useMemo)(()=>{
        return new MainThreadRef(initValue);
    }, []);
} //# sourceMappingURL=workletRef.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/workletRefPool.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addWorkletRefInitValue: () => (addWorkletRefInitValue),
  takeWorkletRefInitValuePatch: () => (takeWorkletRefInitValuePatch)
});
/* import */ var _functionality_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/functionality.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let initValuePatch = [];
/**
 * @internal
 */ function addWorkletRefInitValue(id, value) {
    if (!(0,_functionality_js__rspack_import_0.isMtsEnabled)()) return;
    initValuePatch.push([
        id,
        value
    ]);
}
/**
 * @internal
 */ function takeWorkletRefInitValuePatch() {
    const res = initValuePatch;
    initValuePatch = [];
    return res;
} //# sourceMappingURL=workletRefPool.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getDisplayName: () => (getDisplayName),
  hook: () => (hook),
  isDirectOrDeepEqual: () => (isDirectOrDeepEqual),
  isEmptyObject: () => (isEmptyObject),
  isSdkVersionGt: () => (isSdkVersionGt),
  lynxQueueMicrotask: () => (lynxQueueMicrotask),
  maybePromise: () => (maybePromise),
  noop: () => (noop),
  pick: () => (pick)
});
/* import */ var _shared_component_stack_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/shared/component-stack.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/* v8 ignore start */ const noop = ()=>{};
/* v8 ignore end */ function isDirectOrDeepEqual(a, b) {
    if (a === b) return true;
    try {
        if (typeof a == 'object' && a !== null && typeof b == 'object' && b !== null && JSON.stringify(a) === JSON.stringify(b)) return true;
    } catch (error) {
        if ( true && /circular|cyclic/i.test(error.message)) {
            // JavaScript engines give this different errors name and messages:
            // PrimJS: "circular reference"
            // JavaScriptCore: "JSON.stringify cannot serialize cyclic structures"
            // V8: "Converting circular structure to JSON"
            const vnode = (0,_shared_component_stack_js__rspack_import_0.getCurrentVNode)();
            if (vnode) {
                const stack = (0,_shared_component_stack_js__rspack_import_0.getOwnerStack)(vnode);
                error.message += `\n\n${stack}`;
            }
        }
        throw error;
    }
    return false;
}
function isEmptyObject(obj) {
    for(const _ in obj)return false;
    return true;
}
function isSdkVersionGt(major, minor) {
    var _SystemInfo_lynxSdkVersion;
    const lynxSdkVersion = (_SystemInfo_lynxSdkVersion = SystemInfo.lynxSdkVersion) !== null && _SystemInfo_lynxSdkVersion !== void 0 ? _SystemInfo_lynxSdkVersion : '1.0';
    const version = lynxSdkVersion.split('.');
    return Number(version[0]) > major || Number(version[0]) == major && Number(version[1]) > minor;
}
function pick(obj, keys) {
    const result = {};
    for (const key of keys)if (key in obj) result[key] = obj[key];
    return result;
}
function maybePromise(value) {
    return typeof value === 'object' && value !== null && typeof value.then === 'function';
}
function getDisplayName(type) {
    var _type_displayName;
    return (_type_displayName = type.displayName) !== null && _type_displayName !== void 0 ? _type_displayName : type.name;
}
function hook(object, key, fn) {
    const oldFn = object[key];
    object[key] = function(...args) {
        return fn.call(this, oldFn, ...args);
    };
}
const lynxQueueMicrotask = /* @__PURE__ */ (()=>{
    if (lynx.queueMicrotask) return (fn)=>lynx.queueMicrotask(fn);
    else if (typeof globalThis.Promise === 'function') {
        const resolved = globalThis.Promise.resolve();
        /* v8 ignore start */ return (fn)=>{
            // Schedule as a microtask, and surface exceptions like queueMicrotask would.
            resolved.then(fn).catch((err)=>{
                setTimeout(()=>{
                    throw err;
                }, 0);
            });
        };
    } else return (fn)=>{
        setTimeout(fn, 0);
    };
/* v8 ignore stop */ })(); //# sourceMappingURL=utils.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/bindings.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  delayRunOnBackground: () => (delayRunOnBackground),
  registerWorklet: () => (registerWorklet),
  runRunOnMainThreadTask: () => (runRunOnMainThreadTask),
  runWorkletCtx: () => (runWorkletCtx),
  setEomShouldFlushElementTree: () => (setEomShouldFlushElementTree),
  updateWorkletRef: () => (updateWorkletRef),
  updateWorkletRefInitValueChanges: () => (updateWorkletRefInitValueChanges)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Executes the worklet ctx.
 * @param worklet - The Worklet ctx to run.
 * @param params - An array as parameters of the worklet run.
 */ function runWorkletCtx(worklet, params) {
    var _globalThis_runWorklet, _globalThis;
    return (_globalThis_runWorklet = (_globalThis = globalThis).runWorklet) === null || _globalThis_runWorklet === void 0 ? void 0 : _globalThis_runWorklet.call(_globalThis, worklet, params);
}
/**
 * Save an element to a `WorkletRef`.
 *
 * @param workletRef - The `WorkletRef` to be updated.
 * @param element - The element.
 * @internal
 */ function updateWorkletRef(workletRef, element) {
    var _globalThis_lynxWorkletImpl;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._refImpl.updateWorkletRef(workletRef, element);
}
/**
 * Update the initial value of the `WorkletRef`.
 *
 * @param patch - An array containing the index and new value of the worklet value.
 */ function updateWorkletRefInitValueChanges(patch) {
    var _globalThis_lynxWorkletImpl;
    if (patch) (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._refImpl.updateWorkletRefInitValueChanges(patch);
}
/**
 * Register a worklet.
 *
 * @internal
 */ function registerWorklet(type, id, worklet) {
    globalThis.registerWorklet(type, id, worklet);
}
/**
 * Delay a runOnBackground after hydration.
 *
 * @internal
 */ function delayRunOnBackground(fnObj, fn) {
    var _globalThis_lynxWorkletImpl;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._runOnBackgroundDelayImpl.delayRunOnBackground(fnObj, fn);
}
/**
 * Set whether EOM operations should flush the element tree.
 *
 * @internal
 */ function setEomShouldFlushElementTree(value) {
    var _globalThis_lynxWorkletImpl;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._eomImpl.setShouldFlush(value);
}
/**
 * Runs a task on the main thread.
 *
 * @internal
 */ function runRunOnMainThreadTask(task, params, resolveId) {
    var _globalThis_lynxWorkletImpl;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._runRunOnMainThreadTask(task, params, resolveId);
}
 //# sourceMappingURL=bindings.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/events.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkletEvents: () => (WorkletEvents)
});
var WorkletEvents;
(function(WorkletEvents) {
    WorkletEvents["runWorkletCtx"] = "Lynx.Worklet.runWorkletCtx";
    WorkletEvents["runOnBackground"] = "Lynx.Worklet.runOnBackground";
    WorkletEvents["FunctionCallRet"] = "Lynx.Worklet.FunctionCallRet";
    WorkletEvents["releaseBackgroundWorkletCtx"] = "Lynx.Worklet.releaseBackgroundWorkletCtx";
    WorkletEvents["releaseWorkletRef"] = "Lynx.Worklet.releaseWorkletRef";
})(WorkletEvents || (WorkletEvents = {}));
 //# sourceMappingURL=events.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkletEvents: () => (/* reexport safe */ _events_js__rspack_import_3.WorkletEvents),
  delayRunOnBackground: () => (/* reexport safe */ _bindings_js__rspack_import_1.delayRunOnBackground),
  loadWorkletRuntime: () => (/* reexport safe */ _loadRuntime_js__rspack_import_0.loadWorkletRuntime),
  onHydrationFinished: () => (/* reexport safe */ _observers_js__rspack_import_2.onHydrationFinished),
  onWorkletCtxUpdate: () => (/* reexport safe */ _observers_js__rspack_import_2.onWorkletCtxUpdate),
  registerWorklet: () => (/* reexport safe */ _bindings_js__rspack_import_1.registerWorklet),
  retainWorkletCtx: () => (/* reexport safe */ _observers_js__rspack_import_2.retainWorkletCtx),
  runRunOnMainThreadTask: () => (/* reexport safe */ _bindings_js__rspack_import_1.runRunOnMainThreadTask),
  runWorkletCtx: () => (/* reexport safe */ _bindings_js__rspack_import_1.runWorkletCtx),
  setEomShouldFlushElementTree: () => (/* reexport safe */ _bindings_js__rspack_import_1.setEomShouldFlushElementTree),
  updateWorkletRef: () => (/* reexport safe */ _bindings_js__rspack_import_1.updateWorkletRef),
  updateWorkletRefInitValueChanges: () => (/* reexport safe */ _bindings_js__rspack_import_1.updateWorkletRefInitValueChanges)
});
/* import */ var _loadRuntime_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/loadRuntime.js");
/* import */ var _bindings_js__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/bindings.js");
/* import */ var _observers_js__rspack_import_2 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/observers.js");
/* import */ var _events_js__rspack_import_3 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/events.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



 //# sourceMappingURL=index.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/loadRuntime.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  loadWorkletRuntime: () => (loadWorkletRuntime)
});
/* import */ var _global_js__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/global.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * Loads and initializes the Lepus chunk in the main thread.
 * @param __schema - The dynamic component entry for loading the Lepus chunk.
 * @returns A boolean indicating whether the Lepus chunk was loaded and initialized successfully.
 */ function loadWorkletRuntime(__schema) {
    if (typeof __LoadLepusChunk === 'undefined') return false;
    if (globalThis.lynxWorkletImpl) return true;
    return __LoadLepusChunk('worklet-runtime', {
        dynamicComponentEntry: __schema,
        chunkType: 0
    });
}
 //# sourceMappingURL=loadRuntime.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/observers.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onHydrationFinished: () => (onHydrationFinished),
  onWorkletCtxUpdate: () => (onWorkletCtxUpdate),
  retainWorkletCtx: () => (retainWorkletCtx)
});
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * This function must be called when a worklet context is updated.
 *
 * @param worklet - The worklet to be updated
 * @param oldWorklet - The old worklet context
 * @param isFirstScreen - Whether it is before the hydration is finished
 * @param element - The element
 */ function onWorkletCtxUpdate(worklet, oldWorklet, isFirstScreen, element) {
    var _globalThis_lynxWorkletImpl, _globalThis_lynxWorkletImpl1;
    if (isFirstScreen && oldWorklet) (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._hydrateCtx(worklet, oldWorklet);
    // For old version dynamic component compatibility.
    if (isFirstScreen) (_globalThis_lynxWorkletImpl1 = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl1 === void 0 ? void 0 : _globalThis_lynxWorkletImpl1._eventDelayImpl.runDelayedWorklet(worklet, element);
}
function retainWorkletCtx(worklet) {
    var _globalThis_lynxWorkletImpl__jsFunctionLifecycleManager, _globalThis_lynxWorkletImpl;
    if (worklet._execId !== undefined) (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : (_globalThis_lynxWorkletImpl__jsFunctionLifecycleManager = _globalThis_lynxWorkletImpl._jsFunctionLifecycleManager) === null || _globalThis_lynxWorkletImpl__jsFunctionLifecycleManager === void 0 ? void 0 : _globalThis_lynxWorkletImpl__jsFunctionLifecycleManager.addRef(worklet._execId, worklet);
}
/**
 * This must be called when the hydration is finished.
 */ function onHydrationFinished() {
    var _globalThis_lynxWorkletImpl, _globalThis_lynxWorkletImpl1, // For old version dynamic component compatibility.
    _globalThis_lynxWorkletImpl2;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._runOnBackgroundDelayImpl.runDelayedBackgroundFunctions();
    (_globalThis_lynxWorkletImpl1 = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl1 === void 0 ? void 0 : _globalThis_lynxWorkletImpl1._refImpl.clearFirstScreenWorkletRefMap();
    (_globalThis_lynxWorkletImpl2 = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl2 === void 0 ? void 0 : _globalThis_lynxWorkletImpl2._eventDelayImpl.clearDelayedWorklets();
} //# sourceMappingURL=observers.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/global.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}
 //# sourceMappingURL=global.js.map


},
"(react:main-thread)/./node_modules/preact/compat/dist/compat.mjs"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Children: () => (Children),
  Component: () => (/* reexport safe */ preact__rspack_import_0.Component),
  Fragment: () => (/* reexport safe */ preact__rspack_import_0.Fragment),
  PureComponent: () => (PureComponent),
  StrictMode: () => (/* reexport safe */ preact__rspack_import_0.Fragment),
  Suspense: () => (Suspense),
  SuspenseList: () => (SuspenseList),
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
  cloneElement: () => (cloneElement),
  createContext: () => (/* reexport safe */ preact__rspack_import_0.createContext),
  createElement: () => (/* reexport safe */ preact__rspack_import_0.createElement),
  createFactory: () => (createFactory),
  createPortal: () => (createPortal),
  createRef: () => (/* reexport safe */ preact__rspack_import_0.createRef),
  "default": () => (index),
  findDOMNode: () => (findDOMNode),
  flushSync: () => (flushSync),
  forwardRef: () => (forwardRef),
  hydrate: () => (hydrate),
  installMainThreadHooks: () => (/* reexport safe */ preact_hooks__rspack_import_1.installMainThreadHooks),
  isElement: () => (isElement),
  isFragment: () => (isFragment),
  isMemo: () => (isMemo),
  isValidElement: () => (isValidElement),
  lazy: () => (lazy),
  memo: () => (memo),
  render: () => (render),
  startTransition: () => (startTransition),
  unmountComponentAtNode: () => (unmountComponentAtNode),
  unstable_batchedUpdates: () => (unstable_batchedUpdates),
  useCallback: () => (/* reexport safe */ preact_hooks__rspack_import_1.useCallback),
  useContext: () => (/* reexport safe */ preact_hooks__rspack_import_1.useContext),
  useDebugValue: () => (/* reexport safe */ preact_hooks__rspack_import_1.useDebugValue),
  useDeferredValue: () => (useDeferredValue),
  useEffect: () => (/* reexport safe */ preact_hooks__rspack_import_1.useEffect),
  useErrorBoundary: () => (/* reexport safe */ preact_hooks__rspack_import_1.useErrorBoundary),
  useId: () => (/* reexport safe */ preact_hooks__rspack_import_1.useId),
  useImperativeHandle: () => (/* reexport safe */ preact_hooks__rspack_import_1.useImperativeHandle),
  useInsertionEffect: () => (useInsertionEffect),
  useLayoutEffect: () => (/* reexport safe */ preact_hooks__rspack_import_1.useLayoutEffect),
  useMemo: () => (/* reexport safe */ preact_hooks__rspack_import_1.useMemo),
  useReducer: () => (/* reexport safe */ preact_hooks__rspack_import_1.useReducer),
  useRef: () => (/* reexport safe */ preact_hooks__rspack_import_1.useRef),
  useState: () => (/* reexport safe */ preact_hooks__rspack_import_1.useState),
  useSyncExternalStore: () => (useSyncExternalStore),
  useTransition: () => (useTransition),
  version: () => (version)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* import */ var preact_hooks__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/mainThread.js");




/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */ function assign(obj, props) {
    for(var i in props)obj[i] = props[i];
    return /** @type {O & P} */ obj;
}
/**
 * Check if two objects have a different shape
 * @param {object} a
 * @param {object} b
 * @returns {boolean}
 */ function shallowDiffers(a, b) {
    for(var i in a)if (i !== '__source' && !(i in b)) return true;
    for(var _i in b)if (_i !== '__source' && a[_i] !== b[_i]) return true;
    return false;
}
/**
 * This is taken from https://github.com/facebook/react/blob/main/packages/use-sync-external-store/src/useSyncExternalStoreShimClient.js#L84
 * on a high level this cuts out the warnings, ... and attempts a smaller implementation
 * @typedef {{ _value: any; _getSnapshot: () => any }} Store
 */ function useSyncExternalStore(subscribe, getSnapshot) {
    var value = getSnapshot();
    /**
   * @typedef {{ _instance: Store }} StoreRef
   * @type {[StoreRef, (store: StoreRef) => void]}
   */ var _useState = (0,preact_hooks__rspack_import_1.useState)({
        _instance: {
            __: value,
            _getSnapshot: getSnapshot
        }
    }), _instance = _useState[0]._instance, forceUpdate = _useState[1];
    return value;
}
function startTransition(cb) {
    cb();
}
function useDeferredValue(val) {
    return val;
}
function useTransition() {
    return [
        false,
        startTransition
    ];
}
// TODO: in theory this should be done after a VNode is diffed as we want to insert
// styles/... before it attaches
var useInsertionEffect = preact_hooks__rspack_import_1.useLayoutEffect;
/**
 * Component class with a predefined `shouldComponentUpdate` implementation
 */ var PureComponent = /*#__PURE__*/ function() {
    function _PureComponent(p, c) {
        this.props = p;
        this.context = c;
    }
    _PureComponent.prototype = new preact__rspack_import_0.Component();
    // Some third-party libraries check if this property is present
    _PureComponent.prototype.isPureReactComponent = true;
    _PureComponent.prototype.shouldComponentUpdate = function(props, state) {
        return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
    };
    return _PureComponent;
}();
/**
 * Memoize a component, so that it only updates when the props actually have
 * changed. This was previously known as `React.pure`.
 * @param {import('./internal').FunctionComponent} c functional component
 * @param {(prev: object, next: object) => boolean} [comparer] Custom equality function
 * @returns {import('./internal').FunctionComponent}
 */ function memo(c, comparer) {
    function shouldUpdate(nextProps) {
        var ref = this.props.ref;
        if (ref != nextProps.ref && ref) typeof ref == 'function' ? ref(null) : ref.current = null;
        return comparer ? !comparer(this.props, nextProps) || ref != nextProps.ref : shallowDiffers(this.props, nextProps);
    }
    function Memoed(props) {
        this.shouldComponentUpdate = shouldUpdate;
        return (0,preact__rspack_import_0.createElement)(c, props);
    }
    Memoed.displayName = 'Memo(' + (c.displayName || c.name) + ')';
    Memoed.__f = Memoed.prototype.isReactComponent = true;
    Memoed.type = c;
    return Memoed;
}
var oldDiffHook = preact__rspack_import_0.options.__b;
preact__rspack_import_0.options.__b = function(vnode) {
    if (vnode.type && vnode.type.__f && vnode.ref) {
        vnode.props.ref = vnode.ref;
        vnode.ref = null;
    }
    if (oldDiffHook) oldDiffHook(vnode);
};
var REACT_FORWARD_SYMBOL = typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.forward_ref') || 0xf47;
/**
 * Pass ref down to a child. This is mainly used in libraries with HOCs that
 * wrap components. Using `forwardRef` there is an easy way to get a reference
 * of the wrapped component instead of one of the wrapper itself.
 * @param {import('./index').ForwardFn} fn
 * @returns {import('./internal').FunctionComponent}
 */ function forwardRef(fn) {
    function Forwarded(props) {
        var clone = assign({}, props);
        delete clone.ref;
        return fn(clone, props.ref || null);
    }
    // mobx-react checks for this being present
    Forwarded.$$typeof = REACT_FORWARD_SYMBOL;
    // mobx-react heavily relies on implementation details.
    // It expects an object here with a `render` property,
    // and prototype.render will fail. Without this
    // mobx-react throws.
    Forwarded.render = fn;
    Forwarded.prototype.isReactComponent = Forwarded.__f = true;
    Forwarded.displayName = 'ForwardRef(' + (fn.displayName || fn.name) + ')';
    return Forwarded;
}
var mapFn = function mapFn(children, fn) {
    if (children == null) return null;
    return (0,preact__rspack_import_0.toChildArray)((0,preact__rspack_import_0.toChildArray)(children).map(fn));
};
// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
    map: mapFn,
    forEach: mapFn,
    count: function count(children) {
        return children ? (0,preact__rspack_import_0.toChildArray)(children).length : 0;
    },
    only: function only(children) {
        var normalized = (0,preact__rspack_import_0.toChildArray)(children);
        if (normalized.length !== 1) throw 'Children.only';
        return normalized[0];
    },
    toArray: preact__rspack_import_0.toChildArray
};
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var MODE_HYDRATE = 32;
var oldCatchError = preact__rspack_import_0.options.__e;
preact__rspack_import_0.options.__e = function(error, newVNode, oldVNode, errorInfo) {
    if (error.then) {
        /** @type {import('./internal').Component} */ var component;
        var vnode = newVNode;
        for(; vnode = vnode.__;)if ((component = vnode.__c) && component.__c) {
            if (newVNode.__e == null) {
                newVNode.__e = oldVNode.__e;
                newVNode.__k = oldVNode.__k;
            }
            // Don't call oldCatchError if we found a Suspense
            return component.__c(error, newVNode);
        }
    }
    oldCatchError(error, newVNode, oldVNode, errorInfo);
};
var oldUnmount = preact__rspack_import_0.options.unmount;
preact__rspack_import_0.options.unmount = function(vnode) {
    /** @type {import('./internal').Component} */ var component = vnode.__c;
    if (component) component.__z = true;
    if (component && component.__R) component.__R();
    // if the component is still hydrating
    // most likely it is because the component is suspended
    // we set the vnode.type as `null` so that it is not a typeof function
    // so the unmount will remove the vnode._dom
    if (component && vnode.__u & MODE_HYDRATE) vnode.type = null;
    if (oldUnmount) oldUnmount(vnode);
};
function detachedClone(vnode, detachedParent, parentDom) {
    if (vnode) {
        if (vnode.__c && vnode.__c.__H) {
            vnode.__c.__H.__.forEach(function(effect) {
                if (typeof effect.__c == 'function') effect.__c();
            });
            vnode.__c.__H = null;
        }
        vnode = assign({}, vnode);
        if (vnode.__c != null) {
            if (vnode.__c.__P === parentDom) vnode.__c.__P = detachedParent;
            vnode.__c.__e = true;
            vnode.__c = null;
        }
        vnode.__k = vnode.__k && vnode.__k.map(function(child) {
            return detachedClone(child, detachedParent, parentDom);
        });
    }
    return vnode;
}
function removeOriginal(vnode, detachedParent, originalParent) {
    if (vnode && originalParent) {
        vnode.__v = null;
        vnode.__k = vnode.__k && vnode.__k.map(function(child) {
            return removeOriginal(child, detachedParent, originalParent);
        });
        if (vnode.__c) {
            if (vnode.__c.__P === detachedParent) {
                if (vnode.__e) originalParent.appendChild(vnode.__e);
                vnode.__c.__e = true;
                vnode.__c.__P = originalParent;
            }
        }
    }
    return vnode;
}
// having custom inheritance instead of a class here saves a lot of bytes
var Suspense = /*#__PURE__*/ function() {
    function _Suspense() {
        // we do not call super here to golf some bytes...
        this.__u = 0;
        this._suspenders = null;
        this.__b = null;
    }
    // Things we do here to save some bytes but are not proper JS inheritance:
    // - call `new Component()` as the prototype
    // - do not set `Suspense.prototype.constructor` to `Suspense`
    _Suspense.prototype = new preact__rspack_import_0.Component();
    /**
   * @this {import('./internal').SuspenseComponent}
   * @param {Promise} promise The thrown promise
   * @param {import('./internal').VNode<any, any>} suspendingVNode The suspending component
   */ _Suspense.prototype.__c = function(promise, suspendingVNode) {
        var suspendingComponent = suspendingVNode.__c;
        /** @type {import('./internal').SuspenseComponent} */ var c = this;
        if (c._suspenders == null) c._suspenders = [];
        c._suspenders.push(suspendingComponent);
        var resolve = suspended(c.__v);
        var resolved = false;
        var onResolved = function onResolved() {
            if (resolved || c.__z) return;
            resolved = true;
            suspendingComponent.__R = null;
            if (resolve) resolve(onSuspensionComplete);
            else onSuspensionComplete();
        };
        suspendingComponent.__R = onResolved;
        // Store and null _parentDom to prevent setState/forceUpdate from
        // scheduling renders while suspended. Render would be a no-op anyway
        // since renderComponent checks _parentDom, but this avoids queue churn.
        var originalParentDom = suspendingComponent.__P;
        suspendingComponent.__P = null;
        var onSuspensionComplete = function onSuspensionComplete() {
            if (!--c.__u) {
                // If the suspension was during hydration we don't need to restore the
                // suspended children into the _children array
                if (c.state.__a) {
                    var suspendedVNode = c.state.__a;
                    c.__v.__k[0] = removeOriginal(suspendedVNode, suspendedVNode.__c.__P, suspendedVNode.__c.__O);
                }
                c.setState({
                    __a: c.__b = null
                });
                var _suspended;
                while(_suspended = c._suspenders.pop()){
                    // Restore _parentDom before forceUpdate so render can proceed
                    _suspended.__P = originalParentDom;
                    _suspended.forceUpdate();
                }
            }
        };
        /**
     * We do not set `suspended: true` during hydration because we want the actual markup
     * to remain on screen and hydrate it when the suspense actually gets resolved.
     * While in non-hydration cases the usual fallback -> component flow would occour.
     */ if (!c.__u++ && !(suspendingVNode.__u & MODE_HYDRATE)) c.setState({
            __a: c.__b = c.__v.__k[0]
        });
        promise.then(onResolved, onResolved);
    };
    _Suspense.prototype.componentWillUnmount = function() {
        this._suspenders = [];
    };
    /**
   * @this {import('./internal').SuspenseComponent}
   * @param {import('./internal').SuspenseComponent["props"]} props
   * @param {import('./internal').SuspenseState} state
   */ _Suspense.prototype.render = function(props, state) {
        if (this.__b) {
            // When the Suspense's _vnode was created by a call to createVNode
            // (i.e. due to a setState further up in the tree)
            // it's _children prop is null, in this case we "forget" about the parked vnodes to detach
            if (this.__v.__k) {
                var detachedParent = preact__rspack_import_0.options.document.createElement('div');
                var detachedComponent = this.__v.__k[0].__c;
                this.__v.__k[0] = detachedClone(this.__b, detachedParent, detachedComponent.__O = detachedComponent.__P);
            }
            this.__b = null;
        }
        // Wrap fallback tree in a VNode that prevents itself from being marked as aborting mid-hydration:
        /** @type {import('./internal').VNode} */ var fallback = state.__a && (0,preact__rspack_import_0.createElement)(preact__rspack_import_0.Fragment, null, props.fallback);
        if (fallback) fallback.__u &= ~MODE_HYDRATE;
        return [
            (0,preact__rspack_import_0.createElement)(preact__rspack_import_0.Fragment, null, state.__a ? null : props.children),
            fallback
        ];
    };
    return _Suspense;
}();
/**
 * Checks and calls the parent component's _suspended method, passing in the
 * suspended vnode. This is a way for a parent (e.g. SuspenseList) to get notified
 * that one of its children/descendants suspended.
 *
 * The parent MAY return a callback. The callback will get called when the
 * suspension resolves, notifying the parent of the fact.
 * Moreover, the callback gets function `unsuspend` as a parameter. The resolved
 * child descendant will not actually get unsuspended until `unsuspend` gets called.
 * This is a way for the parent to delay unsuspending.
 *
 * If the parent does not return a callback then the resolved vnode
 * gets unsuspended immediately when it resolves.
 *
 * @param {import('./internal').VNode} vnode
 * @returns {((unsuspend: () => void) => void)?}
 */ function suspended(vnode) {
    var component = vnode.__ && vnode.__.__c;
    return component && component.__a && component.__a(vnode);
}
function lazy(loader) {
    var prom;
    var component = null;
    var error;
    var resolved;
    function Lazy(props) {
        if (!prom) {
            prom = loader();
            prom.then(function(exports) {
                if (exports) component = exports.default || exports;
                resolved = true;
            }, function(e) {
                error = e;
                resolved = true;
            });
        }
        if (error) throw error;
        if (!resolved) throw prom;
        return component ? (0,preact__rspack_import_0.createElement)(component, props) : null;
    }
    Lazy.displayName = 'Lazy';
    Lazy.__f = true;
    return Lazy;
}
// Indexes to linked list nodes (nodes are stored as arrays to save bytes).
var SUSPENDED_COUNT = 0;
var RESOLVED_COUNT = 1;
var NEXT_NODE = 2;
// Having custom inheritance instead of a class here saves a lot of bytes.
var SuspenseList = /*#__PURE__*/ function() {
    function _SuspenseList() {
        this._next = null;
        this._map = null;
    }
    // Mark one of child's earlier suspensions as resolved.
    // Some pending callbacks may become callable due to this
    // (e.g. the last suspended descendant gets resolved when
    // revealOrder === 'together'). Process those callbacks as well.
    var resolve = function resolve(list, child, node) {
        if (++node[RESOLVED_COUNT] === node[SUSPENDED_COUNT]) // matches the number of times it's been resolved. Therefore we
        // mark the child as completely resolved by deleting it from ._map.
        // This is used to figure out when *all* children have been completely
        // resolved when revealOrder is 'together'.
        list._map.delete(child);
        // If revealOrder is falsy then we can do an early exit, as the
        // callbacks won't get queued in the node anyway.
        // If revealOrder is 'together' then also do an early exit
        // if all suspended descendants have not yet been resolved.
        if (!list.props.revealOrder || list.props.revealOrder[0] === 't' && list._map.size) return;
        // Walk the currently suspended children in order, calling their
        // stored callbacks on the way. Stop if we encounter a child that
        // has not been completely resolved yet.
        node = list._next;
        while(node){
            while(node.length > 3)node.pop()();
            if (node[RESOLVED_COUNT] < node[SUSPENDED_COUNT]) break;
            list._next = node = node[NEXT_NODE];
        }
    };
    // Things we do here to save some bytes but are not proper JS inheritance:
    // - call `new Component()` as the prototype
    // - do not set `Suspense.prototype.constructor` to `Suspense`
    _SuspenseList.prototype = new preact__rspack_import_0.Component();
    _SuspenseList.prototype.__a = function(child) {
        var list = this;
        var delegated = suspended(list.__v);
        var node = list._map.get(child);
        node[SUSPENDED_COUNT]++;
        return function(unsuspend) {
            var wrappedUnsuspend = function wrappedUnsuspend() {
                if (!list.props.revealOrder) // is no need to coordinate a specific order or unsuspends.
                unsuspend();
                else {
                    node.push(unsuspend);
                    resolve(list, child, node);
                }
            };
            if (delegated) delegated(wrappedUnsuspend);
            else wrappedUnsuspend();
        };
    };
    _SuspenseList.prototype.render = function(props) {
        this._next = null;
        this._map = new Map();
        var children = (0,preact__rspack_import_0.toChildArray)(props.children);
        if (props.revealOrder && props.revealOrder[0] === 'b') // then flip the child list around so that the last child will be
        // the first in the linked list.
        children.reverse();
        // Build the linked list. Iterate through the children in reverse order
        // so that `_next` points to the first linked list node to be resolved.
        for(var i = children.length; i--;)// 	[suspended_count, resolved_count, next_node]
        // where suspended_count and resolved_count are numeric counters for
        // keeping track how many times a node has been suspended and resolved.
        //
        // Note that suspended_count starts from 1 instead of 0, so we can block
        // processing callbacks until componentDidMount has been called. In a sense
        // node is suspended at least until componentDidMount gets called!
        //
        // Pending callbacks are added to the end of the node:
        // 	[suspended_count, resolved_count, next_node, callback_0, callback_1, ...]
        this._map.set(children[i], this._next = [
            1,
            0,
            this._next
        ]);
        return props.children;
    };
    _SuspenseList.prototype.componentDidUpdate = _SuspenseList.prototype.componentDidMount = function() {
        var _this = this;
        // Iterate through all children after mounting for two reasons:
        // 1. As each node[SUSPENDED_COUNT] starts from 1, this iteration increases
        //    each node[RELEASED_COUNT] by 1, therefore balancing the counters.
        //    The nodes can now be completely consumed from the linked list.
        // 2. Handle nodes that might have gotten resolved between render and
        //    componentDidMount.
        this._map.forEach(function(node, child) {
            resolve(_this, child, node);
        });
    };
    return _SuspenseList;
}();
/**
 * @param {import('../../src/index').RenderableProps<{ context: any }>} props
 */ function ContextProvider(props) {
    this.getChildContext = function() {
        return props.context;
    };
    return props.children;
}
/**
 * Portal component
 * @this {import('./internal').Component}
 * @param {object | null | undefined} props
 *
 * TODO: use createRoot() instead of fake root
 */ function Portal(props) {
    var _this = this;
    var container = props._container;
    _this.componentWillUnmount = function() {
        (0,preact__rspack_import_0.render)(null, _this._temp);
        _this._temp = null;
        _this._container = null;
    };
    // When we change container we should clear our old container and
    // indicate a new mount.
    if (_this._container && _this._container !== container) _this.componentWillUnmount();
    if (!_this._temp) {
        // Ensure the element has a mask for useId invocations
        var root = _this.__v;
        while(root !== null && !root.__m && root.__ !== null)root = root.__;
        _this._container = container;
        // Create a fake DOM parent node that manages a subset of `container`'s children:
        _this._temp = {
            nodeType: 1,
            parentNode: container,
            childNodes: [],
            __k: {
                __m: root.__m
            },
            contains: function contains() {
                return true;
            },
            namespaceURI: container.namespaceURI,
            insertBefore: function insertBefore(child, before) {
                this.childNodes.push(child);
                _this._container.insertBefore(child, before);
            },
            removeChild: function removeChild(child) {
                this.childNodes.splice(this.childNodes.indexOf(child) >>> 1, 1);
                _this._container.removeChild(child);
            }
        };
    }
    // Render our wrapping element into temp.
    (0,preact__rspack_import_0.render)((0,preact__rspack_import_0.createElement)(ContextProvider, {
        context: _this.context
    }, props.__v), _this._temp);
}
/**
 * Create a `Portal` to continue rendering the vnode tree at a different DOM node
 * @param {import('./internal').VNode} vnode The vnode to render
 * @param {import('./internal').PreactElement} container The DOM node to continue rendering in to.
 */ function createPortal(vnode, container) {
    var el = (0,preact__rspack_import_0.createElement)(Portal, {
        __v: vnode,
        _container: container
    });
    el.containerInfo = container;
    return el;
}
var REACT_ELEMENT_TYPE = typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;
// Some libraries like `react-virtualized` explicitly check for this.
preact__rspack_import_0.Component.prototype.isReactComponent = true;
// `UNSAFE_*` lifecycle hooks
// Preact only ever invokes the unprefixed methods.
// Here we provide a base "fallback" implementation that calls any defined UNSAFE_ prefixed method.
// - If a component defines its own `componentDidMount()` (including via defineProperty), use that.
// - If a component defines `UNSAFE_componentDidMount()`, `componentDidMount` is the alias getter/setter.
// - If anything assigns to an `UNSAFE_*` property, the assignment is forwarded to the unprefixed property.
// See https://github.com/preactjs/preact/issues/1941
[
    'componentWillMount',
    'componentWillReceiveProps',
    'componentWillUpdate'
].forEach(function(key) {
    Object.defineProperty(preact__rspack_import_0.Component.prototype, key, {
        configurable: true,
        get: function get() {
            return this['UNSAFE_' + key];
        },
        set: function set(v) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                value: v
            });
        }
    });
});
/**
 * Proxy render() since React returns a Component reference.
 * @param {import('./internal').VNode} vnode VNode tree to render
 * @param {import('./internal').PreactElement} parent DOM node to render vnode tree into
 * @param {() => void} [callback] Optional callback that will be called after rendering
 * @returns {import('./internal').Component | null} The root component reference or null
 */ function render(vnode, parent, callback) {
    // React destroys any existing DOM nodes, see #1727
    // ...but only on the first render, see #1828
    if (parent.__k == null) parent.textContent = '';
    (0,preact__rspack_import_0.render)(vnode, parent);
    if (typeof callback == 'function') callback();
    return vnode ? vnode.__c : null;
}
function hydrate(vnode, parent, callback) {
    (0,preact__rspack_import_0.hydrate)(vnode, parent);
    if (typeof callback == 'function') callback();
    return vnode ? vnode.__c : null;
}
var oldEventHook = preact__rspack_import_0.options.event;
preact__rspack_import_0.options.event = function(e) {
    if (oldEventHook) e = oldEventHook(e);
    e.persist = function() {};
    e.isPropagationStopped = function isPropagationStopped() {
        return this.cancelBubble;
    };
    e.isDefaultPrevented = function isDefaultPrevented() {
        return this.defaultPrevented;
    };
    return e.nativeEvent = e;
};
var oldVNodeHook = preact__rspack_import_0.options.vnode;
preact__rspack_import_0.options.vnode = function(vnode) {
    vnode.$$typeof = REACT_ELEMENT_TYPE;
    if (oldVNodeHook) oldVNodeHook(vnode);
};
// This is a very very private internal function for React it
// is used to sort-of do runtime dependency injection.
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
    ReactCurrentDispatcher: {
        current: {
            useCallback: preact_hooks__rspack_import_1.useCallback,
            useContext: preact_hooks__rspack_import_1.useContext,
            useDebugValue: preact_hooks__rspack_import_1.useDebugValue,
            useDeferredValue: useDeferredValue,
            useEffect: preact_hooks__rspack_import_1.useEffect,
            useId: preact_hooks__rspack_import_1.useId,
            useImperativeHandle: preact_hooks__rspack_import_1.useImperativeHandle,
            useInsertionEffect: useInsertionEffect,
            useLayoutEffect: preact_hooks__rspack_import_1.useLayoutEffect,
            useMemo: preact_hooks__rspack_import_1.useMemo,
            // useMutableSource, // experimental-only and replaced by uSES, likely not worth supporting
            useReducer: preact_hooks__rspack_import_1.useReducer,
            useRef: preact_hooks__rspack_import_1.useRef,
            useState: preact_hooks__rspack_import_1.useState,
            useSyncExternalStore: useSyncExternalStore,
            useTransition: useTransition
        }
    }
};
var version = '18.3.1'; // trick libraries to think we are react
/**
 * Legacy version of createElement.
 * @param {import('./internal').VNode["type"]} type The node name or Component constructor
 */ function createFactory(type) {
    return preact__rspack_import_0.createElement.bind(null, type);
}
/**
 * Check if the passed element is a valid (p)react node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isValidElement(element) {
    return !!element && element.$$typeof === REACT_ELEMENT_TYPE;
}
/**
 * Check if the passed element is a Fragment node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isFragment(element) {
    return isValidElement(element) && element.type === preact__rspack_import_0.Fragment;
}
/**
 * Check if the passed element is a Memo node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isMemo(element) {
    return !!element && typeof element.displayName == 'string' && element.displayName.indexOf('Memo(') == 0;
}
/**
 * Wrap `cloneElement` to abort if the passed element is not a valid element and apply
 * all vnode normalizations.
 * @param {import('./internal').VNode} element The vnode to clone
 * @param {object} props Props to add when cloning
 * @param {Array<import('./internal').ComponentChildren>} rest Optional component children
 */ function cloneElement(element) {
    if (!isValidElement(element)) return element;
    return preact__rspack_import_0.cloneElement.apply(null, arguments);
}
/**
 * Remove a component tree from the DOM, including state and event handlers.
 * @param {import('./internal').PreactElement} container
 * @returns {boolean}
 */ function unmountComponentAtNode(container) {
    if (container.__k) {
        (0,preact__rspack_import_0.render)(null, container);
        return true;
    }
    return false;
}
/**
 * Get the matching DOM node for a component
 * @param {import('./internal').Component} component
 * @returns {import('./internal').PreactElement | null}
 */ function findDOMNode(component) {
    return component && (component.base || component.nodeType === 1 && component) || null;
}
/**
 * Deprecated way to control batched rendering inside the reconciler, but we
 * already schedule in batches inside our rendering code
 * @template Arg
 * @param {(arg: Arg) => void} callback function that triggers the updated
 * @param {Arg} [arg] Optional argument that can be passed to the callback
 */ // eslint-disable-next-line camelcase
var unstable_batchedUpdates = function unstable_batchedUpdates(callback, arg) {
    return callback(arg);
};
/**
 * In React, `flushSync` flushes the entire tree and forces a rerender.
 * @template Arg
 * @template Result
 * @param {(arg: Arg) => Result} callback function that runs before the flush
 * @param {Arg} [arg] Optional argument that can be passed to the callback
 * @returns
 */ var flushSync = function flushSync(callback, arg) {
    var prevDebounce = preact__rspack_import_0.options.debounceRendering;
    preact__rspack_import_0.options.debounceRendering = function(cb) {
        return cb();
    };
    var res = callback(arg);
    preact__rspack_import_0.options.debounceRendering = prevDebounce;
    return res;
};
// compat to react-is
var isElement = isValidElement;
// React copies the named exports to the default one.
var index = {
    useState: preact_hooks__rspack_import_1.useState,
    useId: preact_hooks__rspack_import_1.useId,
    useReducer: preact_hooks__rspack_import_1.useReducer,
    useEffect: preact_hooks__rspack_import_1.useEffect,
    useLayoutEffect: preact_hooks__rspack_import_1.useLayoutEffect,
    useInsertionEffect: useInsertionEffect,
    useTransition: useTransition,
    useDeferredValue: useDeferredValue,
    useSyncExternalStore: useSyncExternalStore,
    startTransition: startTransition,
    useRef: preact_hooks__rspack_import_1.useRef,
    useImperativeHandle: preact_hooks__rspack_import_1.useImperativeHandle,
    useMemo: preact_hooks__rspack_import_1.useMemo,
    useCallback: preact_hooks__rspack_import_1.useCallback,
    useContext: preact_hooks__rspack_import_1.useContext,
    useDebugValue: preact_hooks__rspack_import_1.useDebugValue,
    version: version,
    Children: Children,
    render: render,
    hydrate: hydrate,
    unmountComponentAtNode: unmountComponentAtNode,
    createPortal: createPortal,
    createElement: preact__rspack_import_0.createElement,
    createContext: preact__rspack_import_0.createContext,
    createFactory: createFactory,
    cloneElement: cloneElement,
    createRef: preact__rspack_import_0.createRef,
    Fragment: preact__rspack_import_0.Fragment,
    isValidElement: isValidElement,
    isElement: isElement,
    isFragment: isFragment,
    isMemo: isMemo,
    findDOMNode: findDOMNode,
    Component: preact__rspack_import_0.Component,
    PureComponent: PureComponent,
    memo: memo,
    forwardRef: forwardRef,
    flushSync: flushSync,
    unstable_batchedUpdates: unstable_batchedUpdates,
    StrictMode: preact__rspack_import_0.Fragment,
    Suspense: Suspense,
    SuspenseList: SuspenseList,
    lazy: lazy,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
};
 //# sourceMappingURL=compat.module.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./node_modules/preact/dist/preact.mjs"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Component: () => (BaseComponent),
  Fragment: () => (Fragment),
  cloneElement: () => (cloneElement),
  createContext: () => (createContext),
  createElement: () => (createElement),
  createRef: () => (createRef),
  h: () => (createElement),
  hydrate: () => (hydrate),
  isValidElement: () => (isValidElement),
  options: () => (options),
  process: () => (process),
  render: () => (render),
  toChildArray: () => (toChildArray)
});
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var MODE_HYDRATE = 32;
/** Signifies this VNode suspended on the previous render */ var MODE_SUSPENDED = 128;
/** Reset all mode flags */ MODE_HYDRATE, MODE_SUSPENDED;
var NULL = null;
var UNDEFINED = undefined;
var EMPTY_ARR = [];
var isArray = Array.isArray;
/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */ function assign(obj, props) {
    // @ts-expect-error We change the type of `obj` to be `O & P`
    for(var i in props)obj[i] = props[i];
    return /** @type {O & P} */ obj;
}
var slice = EMPTY_ARR.slice;
/**
 * Find the closest error boundary to a thrown error and call it
 * @param {object} error The thrown value
 * @param {import('../internal').VNode} vnode The vnode that threw the error that was caught (except
 * for unmounting when this parameter is the highest parent that was being
 * unmounted)
 * @param {import('../internal').VNode} [oldVNode]
 * @param {import('../internal').ErrorInfo} [errorInfo]
 */ function _catchError(error, vnode, oldVNode, errorInfo) {
    /** @type {import('../internal').Component} */ var component, /** @type {import('../internal').ComponentType} */ ctor, /** @type {boolean} */ handled;
    for(; vnode = vnode.__;){
        if ((component = vnode.__c) && !component.__) try {
            ctor = component.constructor;
            if (ctor && ctor.getDerivedStateFromError != NULL) {
                component.setState(ctor.getDerivedStateFromError(error));
                handled = component.__d;
            }
            if (component.componentDidCatch != NULL) {
                component.componentDidCatch(error, errorInfo || {});
                handled = component.__d;
            }
            // This is an error boundary. Mark it as having bailed out, and whether it was mid-hydration.
            if (handled) return component.__E = component;
        } catch (e) {
            error = e;
        }
    }
    throw error;
}
/**
 * The `option` object can potentially contain callback functions
 * that are called during various stages of our renderer. This is the
 * foundation on which all our addons like `preact/debug`, `preact/compat`,
 * and `preact/hooks` are based on. See the `Options` type in `internal.d.ts`
 * for a full list of available option hooks (most editors/IDEs allow you to
 * ctrl+click or cmd+click on mac the type definition below).
 * @type {import('./internal').Options}
 */ var options = {
    __e: _catchError
};
var vnodeId = 0;
/**
 * Create an virtual node (used for JSX)
 * @param {import('./internal').VNode["type"]} type The node name or Component constructor for this
 * virtual node
 * @param {object | null | undefined} [props] The properties of the virtual node
 * @param {Array<import('.').ComponentChildren>} [children] The children of the
 * virtual node
 * @returns {import('./internal').VNode}
 */ function createElement(type, props, children) {
    var normalizedProps = {}, key, ref, i;
    for(i in props){
        if (i == 'key') key = props[i];
        else if (i == 'ref') ref = props[i];
        else normalizedProps[i] = props[i];
    }
    if (arguments.length > 2) normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
    // If a Component VNode, check for and apply defaultProps
    // Note: type may be undefined in development, must never error here.
    if (typeof type == 'function' && type.defaultProps != NULL) {
        for(i in type.defaultProps)if (normalizedProps[i] === UNDEFINED) normalizedProps[i] = type.defaultProps[i];
    }
    return createVNode(type, normalizedProps, key, ref, NULL);
}
/**
 * Create a VNode (used internally by Preact)
 * @param {import('./internal').VNode["type"]} type The node name or Component
 * Constructor for this virtual node
 * @param {object | string | number | null} props The properties of this virtual node.
 * If this virtual node represents a text node, this is the text of the node (string or number).
 * @param {string | number | null} key The key for this virtual node, used when
 * diffing it against its children
 * @param {import('./internal').VNode["ref"]} ref The ref property that will
 * receive a reference to its created child
 * @returns {import('./internal').VNode}
 */ function createVNode(type, props, key, ref, original) {
    // V8 seems to be better at detecting type shapes if the object is allocated from the same call site
    // Do not inline into createElement and coerceToVNode!
    /** @type {import('./internal').VNode} */ var vnode = {
        type: type,
        props: props,
        key: key,
        ref: ref,
        __k: NULL,
        __: NULL,
        __b: 0,
        __e: NULL,
        __c: NULL,
        constructor: UNDEFINED,
        __v: original == NULL ? ++vnodeId : original,
        __i: -1,
        __u: 0
    };
    // Only invoke the vnode hook if this was *not* a direct copy:
    if (original == NULL && options.vnode != NULL) options.vnode(vnode);
    return vnode;
}
function createRef() {
    return {
        current: NULL
    };
}
function Fragment(props) {
    return props.children;
}
/**
 * Check if a the argument is a valid Preact VNode.
 * @param {*} vnode
 * @returns {vnode is VNode}
 */ var isValidElement = function isValidElement(vnode) {
    return vnode != NULL && vnode.constructor === UNDEFINED;
};
/**
 * Base Component class. Provides `setState()` and `forceUpdate()`, which
 * trigger rendering
 * @param {object} props The initial component props
 * @param {object} context The initial context from parent components'
 * getChildContext
 */ function BaseComponent(props, context) {
    this.props = props;
    this.context = context;
}
/**
 * Update component state and schedule a re-render.
 * @this {import('./internal').Component}
 * @param {object | ((s: object, p: object) => object)} update A hash of state
 * properties to update with new values or a function that given the current
 * state and props returns a new partial state
 * @param {() => void} [callback] A function to be called once component state is
 * updated
 */ BaseComponent.prototype.setState = function(update, callback) {
    // only clone state when copying to nextState the first time.
    var s;
    if (this.__s != NULL && this.__s != this.state) s = this.__s;
    else s = this.__s = assign({}, this.state);
    if (typeof update == 'function') // preventing us from mutating it, so we need to clone it. See #2716
    update = update(assign({}, s), this.props);
    if (update) assign(s, update);
    // Skip update if updater function returned null
    if (update == NULL) return;
    if (this.__v) {
        if (callback) this._sb.push(callback);
        enqueueRender(this);
    }
};
/**
 * Immediately perform a synchronous re-render of the component
 * @this {import('./internal').Component}
 * @param {() => void} [callback] A function to be called after component is
 * re-rendered
 */ BaseComponent.prototype.forceUpdate = function(callback) {
    if (this.__v) {
        // Set render mode so that we can differentiate where the render request
        // is coming from. We need this because forceUpdate should never call
        // shouldComponentUpdate
        this.__e = true;
        if (callback) this.__h.push(callback);
        enqueueRender(this);
    }
};
/**
 * Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
 * Virtual DOM is generally constructed via [JSX](https://jasonformat.com/wtf-is-jsx).
 * @param {object} props Props (eg: JSX attributes) received from parent
 * element/component
 * @param {object} state The component's current state
 * @param {object} context Context object, as returned by the nearest
 * ancestor's `getChildContext()`
 * @returns {ComponentChildren | void}
 */ BaseComponent.prototype.render = Fragment;
typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
/**
 * Enqueue a rerender of a component
 * @param {import('./internal').Component} c The component to rerender
 */ function enqueueRender() {}
/** Flush the render queue by rerendering all queued components */ function process() {}
process.__r = 0;
/**
 * Flatten and loop through the children of a virtual node
 * @param {ComponentChildren} children The unflattened children of a virtual
 * node
 * @returns {VNode[]}
 */ function toChildArray(children, out) {
    out = out || [];
    if (children == NULL || typeof children == 'boolean') ;
    else if (isArray(children)) children.some(function(child) {
        toChildArray(child, out);
    });
    else out.push(children);
    return out;
}
/**
 * Render a Preact virtual node into a DOM element
 * @param {import('./internal').ComponentChild} vnode The virtual node to render
 * @param {import('./internal').PreactElement} parentDom The DOM element to render into
 * @param {import('./internal').PreactElement | object} [replaceNode] Optional: Attempt to re-use an
 * existing DOM tree rooted at `replaceNode`
 */ function render() {}
/**
 * Update an existing DOM element with data from a Preact virtual node
 * @param {import('./internal').ComponentChild} vnode The virtual node to render
 * @param {import('./internal').PreactElement} parentDom The DOM element to update
 */ function hydrate() {}
/**
 * Clones the given VNode, optionally adding attributes/props and replacing its
 * children.
 * @param {import('./internal').VNode} vnode The virtual DOM element to clone
 * @param {object} props Attributes/props to add when cloning
 * @param {Array<import('./internal').ComponentChildren>} rest Any additional arguments will be used
 * as replacement children.
 * @returns {import('./internal').VNode}
 */ function cloneElement(vnode, props, children) {
    var normalizedProps = assign({}, vnode.props), key, ref, i;
    var defaultProps;
    if (vnode.type && vnode.type.defaultProps) defaultProps = vnode.type.defaultProps;
    for(i in props){
        if (i == 'key') key = props[i];
        else if (i == 'ref') ref = props[i];
        else if (props[i] === UNDEFINED && defaultProps != UNDEFINED) normalizedProps[i] = defaultProps[i];
        else normalizedProps[i] = props[i];
    }
    if (arguments.length > 2) normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
    return createVNode(vnode.type, normalizedProps, key || vnode.key, ref || vnode.ref, NULL);
}
var i = 0;
function createContext(defaultValue) {
    function Context(props) {
        if (!this.getChildContext) {
            /** @type {Set<import('./internal').Component> | null} */ var subs = new Set();
            var ctx = {};
            ctx[Context.__c] = this;
            this.getChildContext = function() {
                return ctx;
            };
            this.componentWillUnmount = function() {
                subs = NULL;
            };
            this.shouldComponentUpdate = function(_props) {
                // @ts-expect-error even
                if (this.props.value != _props.value) subs.forEach(function(c) {
                    c.__e = true;
                    enqueueRender(c);
                });
            };
            this.sub = function(c) {
                subs.add(c);
                var old = c.componentWillUnmount;
                c.componentWillUnmount = function() {
                    if (subs) subs.delete(c);
                    if (old) old.call(c);
                };
            };
        }
        return props.children;
    }
    Context.__c = '__cC' + i++;
    Context.__ = defaultValue;
    /** @type {import('./internal').FunctionComponent} */ Context.Consumer = function(props, contextValue) {
        return props.children(contextValue);
    };
    // we could also get rid of _contextRef entirely
    Context.Provider = Context.__l = Context.Consumer.contextType = Context;
    return Context;
}
 //# sourceMappingURL=preact.module.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},
"(react:main-thread)/./src/index.tsx"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _lynx_js_react_lepus_jsx_dev_runtime__rspack_import_0 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
/* import */ var _lynx_js_react__rspack_import_1 = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js");


// #region agent log
const debugLog = ()=>{};
// #endregion
// Card status constants
const CARD_STATUS = {
    PENDING: 'pending',
    APPROVED: 'approved',
    REJECTED: 'rejected'
};
// Styles as objects for Lynx
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#0f1419',
        padding: '16px'
    },
    header: {
        alignItems: 'center',
        marginBottom: '20px',
        paddingTop: '8px'
    },
    headerTitle: {
        fontSize: '20px',
        fontWeight: '700',
        color: '#e7ecf1'
    },
    headerSubtitle: {
        fontSize: '14px',
        color: '#8b98a5',
        marginTop: '6px'
    },
    stepLabel: {
        fontSize: '12px',
        color: '#8b98a5',
        textAlign: 'center',
        marginBottom: '16px'
    },
    emptyState: {
        padding: '40px',
        alignItems: 'center'
    },
    emptyText: {
        fontSize: '16px',
        color: '#8b98a5',
        textAlign: 'center'
    },
    emptySubtext: {
        fontSize: '12px',
        color: '#5a6570',
        marginTop: '12px',
        textAlign: 'center'
    },
    card: {
        padding: '20px',
        backgroundColor: '#161b22',
        borderRadius: '16px',
        borderWidth: '1px',
        borderColor: '#2f3336',
        marginBottom: '16px'
    },
    cardType: {
        fontSize: '12px',
        fontWeight: '700',
        color: '#1d9bf0',
        textTransform: 'uppercase',
        marginBottom: '8px'
    },
    cardTitle: {
        fontSize: '18px',
        fontWeight: '700',
        color: '#e7ecf1',
        marginBottom: '10px'
    },
    cardBody: {
        fontSize: '14px',
        color: '#8b98a5',
        lineHeight: '1.5',
        marginBottom: '16px'
    },
    statusRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    statusLabel: {
        fontSize: '14px',
        color: '#8b98a5',
        marginRight: '8px'
    },
    statusBadge: {
        fontSize: '12px',
        fontWeight: '700',
        paddingVertical: '4px',
        paddingHorizontal: '10px',
        borderRadius: '999px',
        backgroundColor: '#3d2e00',
        color: '#ffd666',
        textTransform: 'uppercase'
    },
    resultText: {
        fontSize: '16px',
        fontWeight: '700',
        marginTop: '12px'
    },
    respondedBy: {
        fontSize: '12px',
        color: '#8b98a5',
        marginTop: '8px'
    },
    label: {
        fontSize: '14px',
        color: '#8b98a5',
        marginBottom: '6px'
    },
    input: {
        width: '100%',
        minHeight: '72px',
        borderRadius: '10px',
        borderWidth: '1px',
        borderColor: '#2f3336',
        backgroundColor: '#0f1419',
        color: '#e7ecf1',
        padding: '12px',
        fontSize: '14px'
    },
    buttonRow: {
        flexDirection: 'row',
        gap: '10px',
        marginTop: '16px'
    },
    rejectButton: {
        flex: 1,
        backgroundColor: '#2f3336',
        color: '#e7ecf1',
        borderRadius: '10px',
        padding: '14px 12px',
        fontSize: '16px',
        fontWeight: '700',
        borderWidth: '0px'
    },
    approveButton: {
        flex: 1,
        backgroundColor: '#00ba7c',
        color: '#ffffff',
        borderRadius: '10px',
        padding: '14px 12px',
        fontSize: '16px',
        fontWeight: '700',
        borderWidth: '0px'
    },
    connectionStatus: {
        alignItems: 'center',
        marginTop: '16px'
    },
    connectingText: {
        fontSize: '12px',
        color: '#8b98a5'
    },
    connectedText: {
        fontSize: '12px',
        color: '#6ee7a8'
    },
    errorText: {
        fontSize: '12px',
        color: '#f87171'
    }
};
const __snapshot_5ab44_3dcd9_1 = "__snapshot_5ab44_3dcd9_1";
(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_1] = (__snapshot_5ab44_3dcd9_1)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_1, function() {
        const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
        const el = __CreateView(pageId);
        const el1 = __CreateText(pageId);
        __SetAttribute(el1, "text", "Waiting for an action card from desktop...");
        __AppendElement(el, el1);
        const el2 = __CreateText(pageId);
        __SetAttribute(el2, "text", 'Go to desktop and click "Emit Deploy Card"');
        __AppendElement(el, el2);
        return [
            el,
            el1,
            el2
        ];
    }, [
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[0], ctx.__values[0]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[1], ctx.__values[1]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[2], ctx.__values[2]);
        }
    ], null, undefined, globDynamicComponentEntry, null, true);
const __snapshot_5ab44_3dcd9_3 = "__snapshot_5ab44_3dcd9_3";
(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_3] = (__snapshot_5ab44_3dcd9_3)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_3, function() {
        const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
        const el = __CreateText(pageId);
        const el1 = __CreateRawText("by ");
        __AppendElement(el, el1);
        const el2 = __CreateWrapperElement(pageId);
        __AppendElement(el, el2);
        return [
            el,
            el1,
            el2
        ];
    }, [
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[0], ctx.__values[0]);
        }
    ], [
        [
            (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            2
        ]
    ], undefined, globDynamicComponentEntry, null, true);
const __snapshot_5ab44_3dcd9_2 = "__snapshot_5ab44_3dcd9_2";
(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_2] = (__snapshot_5ab44_3dcd9_2)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_2, function() {
        const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
        const el = __CreateView(pageId);
        const el1 = __CreateText(pageId);
        __AppendElement(el, el1);
        const el2 = __CreateText(pageId);
        __AppendElement(el, el2);
        const el3 = __CreateText(pageId);
        __AppendElement(el, el3);
        const el4 = __CreateWrapperElement(pageId);
        __AppendElement(el, el4);
        return [
            el,
            el1,
            el2,
            el3,
            el4
        ];
    }, [
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[0], ctx.__values[0]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[1], ctx.__values[1]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[2], ctx.__values[2]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[3], ctx.__values[3]);
        }
    ], [
        [
            (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            1
        ],
        [
            (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            2
        ],
        [
            (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            3
        ],
        [
            (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            4
        ]
    ], undefined, globDynamicComponentEntry, null, true);
const __snapshot_5ab44_3dcd9_4 = "__snapshot_5ab44_3dcd9_4";
(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_4] = (__snapshot_5ab44_3dcd9_4)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_4, function() {
        const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
        const el = __CreateView(pageId);
        const el1 = __CreateView(pageId);
        __AppendElement(el, el1);
        const el2 = __CreateText(pageId);
        __AppendElement(el1, el2);
        const el3 = __CreateText(pageId);
        __AppendElement(el1, el3);
        const el4 = __CreateText(pageId);
        __AppendElement(el1, el4);
        const el5 = __CreateView(pageId);
        __AppendElement(el1, el5);
        const el6 = __CreateText(pageId);
        __SetAttribute(el6, "text", "Status:");
        __AppendElement(el5, el6);
        const el7 = __CreateText(pageId);
        __AppendElement(el5, el7);
        const el8 = __CreateView(pageId);
        __AppendElement(el, el8);
        const el9 = __CreateView(pageId);
        __AppendElement(el8, el9);
        const el10 = __CreateText(pageId);
        __SetInlineStyles(el10, "color:#e7ecf1;font-size:16px;font-weight:700;text-align:center");
        __SetAttribute(el10, "text", "Reject");
        __AppendElement(el9, el10);
        const el11 = __CreateView(pageId);
        __AppendElement(el8, el11);
        const el12 = __CreateText(pageId);
        __SetInlineStyles(el12, "color:#ffffff;font-size:16px;font-weight:700;text-align:center");
        __SetAttribute(el12, "text", "Approve");
        __AppendElement(el11, el12);
        return [
            el,
            el1,
            el2,
            el3,
            el4,
            el5,
            el6,
            el7,
            el8,
            el9,
            el10,
            el11,
            el12
        ];
    }, [
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[1], ctx.__values[0]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[2], ctx.__values[1]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[3], ctx.__values[2]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[4], ctx.__values[3]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[5], ctx.__values[4]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[6], ctx.__values[5]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[7], ctx.__values[6]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[8], ctx.__values[7]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[9], ctx.__values[8]);
        },
        (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 9, "bindEvent", "tap", ''),
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[11], ctx.__values[10]);
        },
        (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 11, "bindEvent", "tap", '')
    ], [
        [
            (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            2
        ],
        [
            (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            3
        ],
        [
            (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            4
        ],
        [
            (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            7
        ]
    ], undefined, globDynamicComponentEntry, null, true);
const __snapshot_5ab44_3dcd9_6 = "__snapshot_5ab44_3dcd9_6";
(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_6] = (__snapshot_5ab44_3dcd9_6)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_6, function() {
        const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
        const el = __CreateText(pageId);
        __SetAttribute(el, "text", "Connecting...");
        return [
            el
        ];
    }, [
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[0], ctx.__values[0]);
        }
    ], null, undefined, globDynamicComponentEntry, null, true);
const __snapshot_5ab44_3dcd9_7 = "__snapshot_5ab44_3dcd9_7";
(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_7] = (__snapshot_5ab44_3dcd9_7)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_7, function() {
        const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
        const el = __CreateText(pageId);
        __SetAttribute(el, "text", "Connected via polling");
        return [
            el
        ];
    }, [
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[0], ctx.__values[0]);
        }
    ], null, undefined, globDynamicComponentEntry, null, true);
const __snapshot_5ab44_3dcd9_8 = "__snapshot_5ab44_3dcd9_8";
(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_8] = (__snapshot_5ab44_3dcd9_8)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_8, function() {
        const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
        const el = __CreateText(pageId);
        __SetAttribute(el, "text", "Connection error");
        return [
            el
        ];
    }, [
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[0], ctx.__values[0]);
        }
    ], null, undefined, globDynamicComponentEntry, null, true);
const __snapshot_5ab44_3dcd9_5 = "__snapshot_5ab44_3dcd9_5";
(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_5] = (__snapshot_5ab44_3dcd9_5)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_5, function() {
        const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
        const el = __CreateView(pageId);
        const el1 = __CreateView(pageId);
        __AppendElement(el, el1);
        const el2 = __CreateText(pageId);
        __SetAttribute(el2, "text", "relayTrae");
        __AppendElement(el1, el2);
        const el3 = __CreateText(pageId);
        __SetAttribute(el3, "text", "Mobile Action Card (Lynx)");
        __AppendElement(el1, el3);
        const el4 = __CreateText(pageId);
        __SetAttribute(el4, "text", "Step 8: Lynx mobile surface");
        __AppendElement(el, el4);
        const el5 = __CreateWrapperElement(pageId);
        __AppendElement(el, el5);
        const el6 = __CreateView(pageId);
        __AppendElement(el, el6);
        return [
            el,
            el1,
            el2,
            el3,
            el4,
            el5,
            el6
        ];
    }, [
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[0], ctx.__values[0]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[1], ctx.__values[1]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[2], ctx.__values[2]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[3], ctx.__values[3]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[4], ctx.__values[4]);
        },
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[6], ctx.__values[5]);
        }
    ], [
        [
            (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            5
        ],
        [
            (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            6
        ]
    ], undefined, globDynamicComponentEntry, null, true);
function App() {
    const [card, setCard] = (0,_lynx_js_react__rspack_import_1.useState)(null);
    const [note, setNote] = (0,_lynx_js_react__rspack_import_1.useState)('');
    const [connectionStatus, setConnectionStatus] = (0,_lynx_js_react__rspack_import_1.useState)('connecting');
    const [isResponding, setIsResponding] = (0,_lynx_js_react__rspack_import_1.useState)(false);
    // Fetch initial state
    (0,_lynx_js_react__rspack_import_1.useCallback)(async ()=>{}, []);
    // Render card content
    const renderCard = ()=>{
        if (!card) {
            // #region agent log
            debugLog('index.tsx:renderCard', 'branch empty-state', {
                branch: 'empty'
            }, 'H3');
            // #endregion
            return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_1, {
                values: [
                    styles.emptyState,
                    styles.emptyText,
                    styles.emptySubtext
                ]
            }, void 0, false, {
                fileName: "/Users/kmsum/Downloads/Trae Solo Hackathon/relayTrae/lynx/src/index.tsx",
                lineNumber: 295,
                columnNumber: 9
            }, this);
        }
        const isPending = card.status === CARD_STATUS.PENDING;
        if (!isPending) {
            const label = card.status === CARD_STATUS.APPROVED ? 'Approved' : 'Rejected';
            const color = card.status === CARD_STATUS.APPROVED ? '#00ba7c' : '#f87171';
            // #region agent log
            debugLog('index.tsx:renderCard', 'branch resolved-state', {
                branch: 'resolved',
                status: card.status
            }, 'H3');
            // #endregion
            return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_2, {
                values: [
                    styles.card,
                    styles.cardType,
                    styles.cardTitle,
                    {
                        ...styles.resultText,
                        color
                    }
                ],
                $0: card.type,
                $1: card.title,
                $2: [
                    label,
                    card.note ? `: "${card.note}"` : ''
                ],
                $3: card.respondedBy && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_3, {
                    values: [
                        styles.respondedBy
                    ],
                    $0: card.respondedBy
                }, void 0, false, {
                    fileName: "/Users/kmsum/Downloads/Trae Solo Hackathon/relayTrae/lynx/src/index.tsx",
                    lineNumber: 322,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "/Users/kmsum/Downloads/Trae Solo Hackathon/relayTrae/lynx/src/index.tsx",
                lineNumber: 315,
                columnNumber: 9
            }, this);
        }
        // #region agent log
        debugLog('index.tsx:renderCard', 'branch pending-lynx-safe', {
            branch: 'pending',
            lynxTags: [
                'text(view)',
                'view(bindtap)',
                'view(bindtap)'
            ]
        }, 'H1');
        // #endregion
        return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_4, {
            values: [
                styles.card,
                styles.cardType,
                styles.cardTitle,
                styles.cardBody,
                styles.statusRow,
                styles.statusLabel,
                styles.statusBadge,
                styles.buttonRow,
                {
                    ...styles.rejectButton,
                    opacity: isResponding ? 0.5 : 1
                },
                1,
                {
                    ...styles.approveButton,
                    opacity: isResponding ? 0.5 : 1
                },
                1
            ],
            $0: card.type,
            $1: card.title,
            $2: card.body,
            $3: card.status
        }, void 0, false, {
            fileName: "/Users/kmsum/Downloads/Trae Solo Hackathon/relayTrae/lynx/src/index.tsx",
            lineNumber: 336,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_5, {
        values: [
            styles.container,
            styles.header,
            styles.headerTitle,
            styles.headerSubtitle,
            styles.stepLabel,
            styles.connectionStatus
        ],
        $0: renderCard(),
        $1: [
            connectionStatus === 'connecting' && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_6, {
                values: [
                    styles.connectingText
                ]
            }, void 0, false, {
                fileName: "/Users/kmsum/Downloads/Trae Solo Hackathon/relayTrae/lynx/src/index.tsx",
                lineNumber: 401,
                columnNumber: 11
            }, this),
            connectionStatus === 'connected' && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_7, {
                values: [
                    styles.connectedText
                ]
            }, void 0, false, {
                fileName: "/Users/kmsum/Downloads/Trae Solo Hackathon/relayTrae/lynx/src/index.tsx",
                lineNumber: 404,
                columnNumber: 11
            }, this),
            connectionStatus === 'error' && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_8, {
                values: [
                    styles.errorText
                ]
            }, void 0, false, {
                fileName: "/Users/kmsum/Downloads/Trae Solo Hackathon/relayTrae/lynx/src/index.tsx",
                lineNumber: 407,
                columnNumber: 11
            }, this)
        ]
    }, void 0, false, {
        fileName: "/Users/kmsum/Downloads/Trae Solo Hackathon/relayTrae/lynx/src/index.tsx",
        lineNumber: 389,
        columnNumber: 5
    }, this);
}
_lynx_js_react__rspack_import_1.root.render(/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__rspack_import_0.jsxDEV)(App, {}, void 0, false, {
    fileName: "/Users/kmsum/Downloads/Trae Solo Hackathon/relayTrae/lynx/src/index.tsx",
    lineNumber: 414,
    columnNumber: 13
}, undefined));
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


},

});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
if (cachedModule.error !== undefined) throw cachedModule.error;
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
exports: {}
});
// Execute the module function
try {


        var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
        __webpack_require__.i.forEach(function(handler) { handler(execOptions); });
        module = execOptions.module;
        if (!execOptions.factory) {
          console.error("undefined factory", moduleId);
          throw Error("RuntimeError: factory is undefined (" + moduleId + ")");
        }
        execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
      
} catch (e) {
module.error = e;
throw e;
}
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// expose the module cache
__webpack_require__.c = __webpack_module_cache__;

// expose the module execution interceptor
__webpack_require__.i = [];

// lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main__main-thread",".rspeedy/main__main-thread/main__main-thread.css.hot-update.json"]];

})();
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/get_chunk_update_filename
(() => {
__webpack_require__.hu = (chunkId) => ('' + chunkId + '.' + __webpack_require__.h() + '.hot-update.js')
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("4f17ee61b1d2319f")
})();
// webpack/runtime/get_main_filename/update manifest
(() => {
__webpack_require__.hmrF = function () {
            return "main__main-thread." + __webpack_require__.h() + ".hot-update.json";
         };
        
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/hot_module_replacement
(() => {
var currentModuleData = {};
var installedModules = __webpack_require__.c;

// module and require creation
var currentChildModule;
var currentParents = [];

// status
var registeredStatusHandlers = [];
var currentStatus = "idle";

// while downloading
var blockingPromises = 0;
var blockingPromisesWaiting = [];

// The update info
var currentUpdateApplyHandlers;
var queuedInvalidatedModules;

__webpack_require__.hmrD = currentModuleData;
__webpack_require__.i.push(function (options) {
	var module = options.module;
	var require = createRequire(options.require, options.id);
	module.hot = createModuleHotObject(options.id, module);
	module.parents = currentParents;
	module.children = [];
	currentParents = [];
	options.require = require;
});

__webpack_require__.hmrC = {};
__webpack_require__.hmrI = {};

function createRequire(require, moduleId) {
	var me = installedModules[moduleId];
	if (!me) return require;
	var fn = function (request) {
		if (me.hot.active) {
			if (installedModules[request]) {
				var parents = installedModules[request].parents;
				if (parents.indexOf(moduleId) === -1) {
					parents.push(moduleId);
				}
			} else {
				currentParents = [moduleId];
				currentChildModule = request;
			}
			if (me.children.indexOf(request) === -1) {
				me.children.push(request);
			}
		} else {
			console.warn(
				"[HMR] unexpected require(" +
				request +
				") from disposed module " +
				moduleId
			);
			currentParents = [];
		}
		return require(request);
	};
	var createPropertyDescriptor = function (name) {
		return {
			configurable: true,
			enumerable: true,
			get: function () {
				return require[name];
			},
			set: function (value) {
				require[name] = value;
			}
		};
	};
	for (var name in require) {
		if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
			Object.defineProperty(fn, name, createPropertyDescriptor(name));
		}
	}

	fn.e = function (chunkId, fetchPriority) {
		return trackBlockingPromise(require.e(chunkId, fetchPriority));
	};

	return fn;
}

function createModuleHotObject(moduleId, me) {
	var _main = currentChildModule !== moduleId;
	var hot = {
		_acceptedDependencies: {},
		_acceptedErrorHandlers: {},
		_declinedDependencies: {},
		_selfAccepted: false,
		_selfDeclined: false,
		_selfInvalidated: false,
		_disposeHandlers: [],
		_main: _main,
		_requireSelf: function () {
			currentParents = me.parents.slice();
			currentChildModule = _main ? undefined : moduleId;
			__webpack_require__(moduleId);
		},
		active: true,
		accept: function (dep, callback, errorHandler) {
			if (dep === undefined) hot._selfAccepted = true;
			else if (typeof dep === "function") hot._selfAccepted = dep;
			else if (typeof dep === "object" && dep !== null) {
				for (var i = 0; i < dep.length; i++) {
					hot._acceptedDependencies[dep[i]] = callback || function () { };
					hot._acceptedErrorHandlers[dep[i]] = errorHandler;
				}
			} else {
				hot._acceptedDependencies[dep] = callback || function () { };
				hot._acceptedErrorHandlers[dep] = errorHandler;
			}
		},
		decline: function (dep) {
			if (dep === undefined) hot._selfDeclined = true;
			else if (typeof dep === "object" && dep !== null)
				for (var i = 0; i < dep.length; i++)
					hot._declinedDependencies[dep[i]] = true;
			else hot._declinedDependencies[dep] = true;
		},
		dispose: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		addDisposeHandler: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		removeDisposeHandler: function (callback) {
			var idx = hot._disposeHandlers.indexOf(callback);
			if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
		},
		invalidate: function () {
			this._selfInvalidated = true;
			switch (currentStatus) {
				case "idle":
					currentUpdateApplyHandlers = [];
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					setStatus("ready");
					break;
				case "ready":
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					break;
				case "prepare":
				case "check":
				case "dispose":
				case "apply":
					(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
						moduleId
					);
					break;
				default:
					break;
			}
		},
		check: hotCheck,
		apply: hotApply,
		status: function (l) {
			if (!l) return currentStatus;
			registeredStatusHandlers.push(l);
		},
		addStatusHandler: function (l) {
			registeredStatusHandlers.push(l);
		},
		removeStatusHandler: function (l) {
			var idx = registeredStatusHandlers.indexOf(l);
			if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
		},
		data: currentModuleData[moduleId]
	};
	currentChildModule = undefined;
	return hot;
}

function setStatus(newStatus) {
	currentStatus = newStatus;
	
	var results = [];
	for (var i = 0; i < registeredStatusHandlers.length; i++)
		results[i] = registeredStatusHandlers[i].call(null, newStatus);

	return Promise.all(results).then(function () { });
}

function unblock() {
	if (--blockingPromises === 0) {
		setStatus("ready").then(function () {
			if (blockingPromises === 0) {
				var list = blockingPromisesWaiting;
				blockingPromisesWaiting = [];
				for (var i = 0; i < list.length; i++) {
					list[i]();
				}
			}
		});
	}
}

function trackBlockingPromise(promise) {
	switch (currentStatus) {
		case "ready":
			setStatus("prepare");
		case "prepare":
			blockingPromises++;
			promise.then(unblock, unblock);
			return promise;
		default:
			return promise;
	}
}

function waitForBlockingPromises(fn) {
	if (blockingPromises === 0) return fn();
	return new Promise(function (resolve) {
		blockingPromisesWaiting.push(function () {
			resolve(fn());
		});
	});
}

function hotCheck(applyOnUpdate) {
	if (currentStatus !== "idle") {
		throw new Error("check() is only allowed in idle status");
	}
	
	return setStatus("check")
		.then(__webpack_require__.hmrM)
		.then(function (update) {
			if (!update) {
				return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
					function () {
						return null;
					}
				);
			}

			return setStatus("prepare").then(function () {
				var updatedModules = [];
				currentUpdateApplyHandlers = [];

				return Promise.all(
					Object.keys(__webpack_require__.hmrC).reduce(function (
						promises,
						key
					) {
						__webpack_require__.hmrC[key](
							update.c,
							update.r,
							update.m,
							promises,
							currentUpdateApplyHandlers,
							updatedModules
						);
						return promises;
					},
						[])
				).then(function () {
					return waitForBlockingPromises(function () {
						if (applyOnUpdate) {
							return internalApply(applyOnUpdate);
						}
						return setStatus("ready").then(function () {
							return updatedModules;
						});
					});
				});
			});
		});
}

function hotApply(options) {
	if (currentStatus !== "ready") {
		return Promise.resolve().then(function () {
			throw new Error(
				"apply() is only allowed in ready status (state: " + currentStatus + ")"
			);
		});
	}
	return internalApply(options);
}

function internalApply(options) {
	options = options || {};
	applyInvalidatedModules();
	var results = currentUpdateApplyHandlers.map(function (handler) {
		return handler(options);
	});
	currentUpdateApplyHandlers = undefined;
	var errors = results
		.map(function (r) {
			return r.error;
		})
		.filter(Boolean);

	if (errors.length > 0) {
		return setStatus("abort").then(function () {
			throw errors[0];
		});
	}

	var disposePromise = setStatus("dispose");

	results.forEach(function (result) {
		if (result.dispose) result.dispose();
	});

	var applyPromise = setStatus("apply");

	var error;
	var reportError = function (err) {
		if (!error) error = err;
	};

	var outdatedModules = [];
	results.forEach(function (result) {
		if (result.apply) {
			var modules = result.apply(reportError);
			if (modules) {
				for (var i = 0; i < modules.length; i++) {
					outdatedModules.push(modules[i]);
				}
			}
		}
	});

	return Promise.all([disposePromise, applyPromise]).then(function () {
		if (error) {
			return setStatus("fail").then(function () {
				throw error;
			});
		}

		if (queuedInvalidatedModules) {
			return internalApply(options).then(function (list) {
				outdatedModules.forEach(function (moduleId) {
					if (list.indexOf(moduleId) < 0) list.push(moduleId);
				});
				return list;
			});
		}

		return setStatus("idle").then(function () {
			return outdatedModules;
		});
	});
}

function applyInvalidatedModules() {
	if (queuedInvalidatedModules) {
		if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
		Object.keys(__webpack_require__.hmrI).forEach(function (key) {
			queuedInvalidatedModules.forEach(function (moduleId) {
				__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
			});
		});
		queuedInvalidatedModules = undefined;
		return true;
	}
}
// @ts-nocheck
__webpack_require__.i.push(function(options) {
  if (
    // This means this is in main-thread
    !globalThis.__PREFRESH__
    // Loading a module of background layer in main-thread, we replace the layer with the main-thread.
    && options.id.includes('(react:background)')
  ) {
    // We may serialize the snapshot from background to main-thread.
    // The `(react:background)` layer in the module id cannot be found in the main-thread.
    // Thus we replace it here to make HMR work.
    //
    // Maybe it is better to run chunk loading on main thread.
    options.id = options.id.replace(
      `(react:background)`, // This is replaced by ReactRefreshWebpackPlugin
      '(react:main-thread)', // This is replaced by ReactRefreshWebpackPlugin
    );
    const factory = __webpack_modules__[options.id];
    if (factory) {
      options.factory = factory;
    }
    return;
  }
  var originalFactory = options.factory;
  options.factory = function(moduleObject, moduleExports, webpackRequire) {
    var prevRefreshReg = globalThis.$RefreshReg$;
    var prevRefreshSig = globalThis.$RefreshSig$;
    globalThis.$RefreshSig$ = function() {
      var status = 'begin';
      var savedType;

      return function(type, key, forceReset, getCustomHooks) {
        // `globalThis.__PREFRESH__` may not exist when requiring `react`:
        //   - require('react-refresh')
        //     - require('react').options
        //       - require('useSyncExternalStore')
        //         - __REFRESH__.sign // not a function
        // TODO(wangqingyu): Replace globalThis.__PREFRESH__ with lynx.__PREFRESH__
        if (!globalThis.__PREFRESH__) {
          return type;
        }
        if (!savedType) savedType = type;

        status = globalThis.__PREFRESH__.sign(
          type || savedType,
          key,
          forceReset,
          getCustomHooks,
          status,
        );
        return type;
      };
    };
    var reg = function(currentModuleId) {
      globalThis.$RefreshReg$ = function(type, id) {
        // `globalThis.__PREFRESH__` may not exist when requiring `react`:
        //   - require('react-refresh')
        //     - require('react').options
        //       - require('useSyncExternalStore')
        //         - __REFRESH__.sign // not a function
        if (globalThis.__PREFRESH__) {
          globalThis.__PREFRESH__.register(type, currentModuleId + ' ' + id);
        }
      };
    };
    reg();
    try {
      originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
    } finally {
      globalThis.$RefreshReg$ = prevRefreshReg;
      globalThis.$RefreshSig$ = prevRefreshSig;
    }
  };
});

globalThis[Symbol.for('__LYNX_WEBPACK_MODULES__')] = __webpack_modules__;

// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
  globalThis.$RefreshReg$ = function () {};
  globalThis.$RefreshSig$ = function () {
    return function(type) {
      return type;
    };
  };
}
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "http://0.0.0.0:3001/";
})();
// Lynx async chunks
(() => {
// lynx async chunks ids
__webpack_require__.lynx_aci = {}
})();
// Lynx chunk loading
(() => {
// object to store loaded chunks
// "1" means "loaded", otherwise not loaded yet
var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
	"main__main-thread": 1
};
// no on chunks loaded
// no chunk install function needed
// no chunk loading

    function loadUpdateChunk(chunkId, updatedModulesList) {
        return new Promise((resolve, reject) => {
            lynx.requireModuleAsync(__webpack_require__.p
                + __webpack_require__.hu(chunkId), (err, update) => {
                if (err) {
                    reject(err);
                    return;
                }
                var updatedModules = update.modules;
                var runtime = update.runtime;
                for (var moduleId in updatedModules) {
                    if (__webpack_require__.o(updatedModules, moduleId)) {
                        currentUpdate[moduleId] = updatedModules[moduleId];
                        if (updatedModulesList)
                            updatedModulesList.push(moduleId);
                    }
                }
                if (runtime)
                    currentUpdateRuntime.push(runtime);
                resolve();
            });
        });
    }

    var currentUpdateChunks;
    var currentUpdate;
    var currentUpdateRemovedChunks;
    var currentUpdateRuntime;
    function applyHandler(options) {
        if (__webpack_require__.f) {
            delete __webpack_require__.f.requireHmr;
        }
        currentUpdateChunks = undefined;
        function getAffectedModuleEffects(updateModuleId) {
            var outdatedModules = [updateModuleId];
            var outdatedDependencies = {};
            var queue = outdatedModules.map(function (id) {
                return {
                    chain: [id],
                    id: id,
                };
            });
            while (queue.length > 0) {
                var queueItem = queue.pop();
                var moduleId = queueItem.id;
                var chain = queueItem.chain;
                var module = __webpack_require__.c[moduleId];
                if (!module
                    || (module.hot._selfAccepted && !module.hot._selfInvalidated)) {
                    continue;
                }
                if (module.hot._selfDeclined) {
                    return {
                        type: 'self-declined',
                        chain: chain,
                        moduleId: moduleId,
                    };
                }
                if (module.hot._main) {
                    return {
                        type: 'unaccepted',
                        chain: chain,
                        moduleId: moduleId,
                    };
                }
                for (var i = 0; i < module.parents.length; i++) {
                    var parentId = module.parents[i];
                    var parent = __webpack_require__.c[parentId];
                    if (!parent)
                        continue;
                    if (parent.hot._declinedDependencies[moduleId]) {
                        return {
                            type: 'declined',
                            chain: chain.concat([parentId]),
                            moduleId: moduleId,
                            parentId: parentId,
                        };
                    }
                    if (outdatedModules.indexOf(parentId) !== -1)
                        continue;
                    if (parent.hot._acceptedDependencies[moduleId]) {
                        if (!outdatedDependencies[parentId]) {
                            outdatedDependencies[parentId] = [];
                        }
                        addAllToSet(outdatedDependencies[parentId], [moduleId]);
                        continue;
                    }
                    delete outdatedDependencies[parentId];
                    outdatedModules.push(parentId);
                    queue.push({
                        chain: chain.concat([parentId]),
                        id: parentId,
                    });
                }
            }
            return {
                type: 'accepted',
                moduleId: updateModuleId,
                outdatedModules: outdatedModules,
                outdatedDependencies: outdatedDependencies,
            };
        }
        function addAllToSet(a, b) {
            for (var i = 0; i < b.length; i++) {
                var item = b[i];
                if (a.indexOf(item) === -1)
                    a.push(item);
            }
        }
        // at begin all updates modules are outdated
        // the "outdated" status can propagate to parents if they don't accept the children
        var outdatedDependencies = {};
        var outdatedModules = [];
        var appliedUpdate = {};
        var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
            console.warn('[HMR] unexpected require(' + module.id + ') to disposed module');
        };
        for (var moduleId in currentUpdate) {
            if (__webpack_require__.o(currentUpdate, moduleId)) {
                var newModuleFactory = currentUpdate[moduleId];
                /** @type {TODO} */
                var result;
                if (newModuleFactory) {
                    result = getAffectedModuleEffects(moduleId);
                }
                else {
                    result = {
                        type: 'disposed',
                        moduleId: moduleId,
                    };
                }
                /** @type {Error|false} */
                var abortError = false;
                var doApply = false;
                var doDispose = false;
                var chainInfo = '';
                if (result.chain) {
                    chainInfo = '\nUpdate propagation: ' + result.chain.join(' -> ');
                }
                switch (result.type) {
                    case 'self-declined':
                        if (options.onDeclined)
                            options.onDeclined(result);
                        if (!options.ignoreDeclined) {
                            abortError = new Error('Aborted because of self decline: '
                                + result.moduleId
                                + chainInfo);
                        }
                        break;
                    case 'declined':
                        if (options.onDeclined)
                            options.onDeclined(result);
                        if (!options.ignoreDeclined) {
                            abortError = new Error('Aborted because of declined dependency: '
                                + result.moduleId
                                + ' in '
                                + result.parentId
                                + chainInfo);
                        }
                        break;
                    case 'unaccepted':
                        if (options.onUnaccepted)
                            options.onUnaccepted(result);
                        if (!options.ignoreUnaccepted) {
                            abortError = new Error('Aborted because ' + moduleId + ' is not accepted' + chainInfo);
                        }
                        break;
                    case 'accepted':
                        if (options.onAccepted)
                            options.onAccepted(result);
                        doApply = true;
                        break;
                    case 'disposed':
                        if (options.onDisposed)
                            options.onDisposed(result);
                        doDispose = true;
                        break;
                    default:
                        throw new Error('Un-exception type ' + result.type);
                }
                if (abortError) {
                    return {
                        error: abortError,
                    };
                }
                if (doApply) {
                    appliedUpdate[moduleId] = newModuleFactory;
                    addAllToSet(outdatedModules, result.outdatedModules);
                    for (moduleId in result.outdatedDependencies) {
                        if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
                            if (!outdatedDependencies[moduleId]) {
                                outdatedDependencies[moduleId] = [];
                            }
                            addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
                        }
                    }
                }
                if (doDispose) {
                    addAllToSet(outdatedModules, [result.moduleId]);
                    appliedUpdate[moduleId] = warnUnexpectedRequire;
                }
            }
        }
        currentUpdate = undefined;
        // Store self accepted outdated modules to require them later by the module system
        var outdatedSelfAcceptedModules = [];
        for (var j = 0; j < outdatedModules.length; j++) {
            var outdatedModuleId = outdatedModules[j];
            var module = __webpack_require__.c[outdatedModuleId];
            if (module
                && (module.hot._selfAccepted || module.hot._main)
                // removed self-accepted modules should not be required
                && appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire
                // when called invalidate self-accepting is not possible
                && !module.hot._selfInvalidated) {
                outdatedSelfAcceptedModules.push({
                    module: outdatedModuleId,
                    require: module.hot._requireSelf,
                    errorHandler: module.hot._selfAccepted,
                });
            }
        }
        var moduleOutdatedDependencies;
        return {
            dispose: function () {
                currentUpdateRemovedChunks.forEach(function (chunkId) {
                    delete installedChunks[chunkId];
                });
                currentUpdateRemovedChunks = undefined;
                var idx;
                var queue = outdatedModules.slice();
                while (queue.length > 0) {
                    var moduleId = queue.pop();
                    var module = __webpack_require__.c[moduleId];
                    if (!module)
                        continue;
                    var data = {};
                    // Call dispose handlers
                    var disposeHandlers = module.hot._disposeHandlers;
                    for (j = 0; j < disposeHandlers.length; j++) {
                        disposeHandlers[j].call(null, data);
                    }
                    __webpack_require__.hmrD[moduleId] = data;
                    // disable module (this disables requires from this module)
                    module.hot.active = false;
                    // remove module from cache
                    delete __webpack_require__.c[moduleId];
                    // when disposing there is no need to call dispose handler
                    delete outdatedDependencies[moduleId];
                    // remove "parents" references from all children
                    for (j = 0; j < module.children.length; j++) {
                        var child = __webpack_require__.c[module.children[j]];
                        if (!child)
                            continue;
                        idx = child.parents.indexOf(moduleId);
                        if (idx >= 0) {
                            child.parents.splice(idx, 1);
                        }
                    }
                }
                // remove outdated dependency from module children
                var dependency;
                for (var outdatedModuleId in outdatedDependencies) {
                    if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
                        module = __webpack_require__.c[outdatedModuleId];
                        if (module) {
                            moduleOutdatedDependencies =
                                outdatedDependencies[outdatedModuleId];
                            for (j = 0; j < moduleOutdatedDependencies.length; j++) {
                                dependency = moduleOutdatedDependencies[j];
                                idx = module.children.indexOf(dependency);
                                if (idx >= 0)
                                    module.children.splice(idx, 1);
                            }
                        }
                    }
                }
            },
            apply: function (reportError) {
                // insert new code
                for (var updateModuleId in appliedUpdate) {
                    if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
                        __webpack_require__.m[updateModuleId] =
                            appliedUpdate[updateModuleId];
                    }
                }
                // run new runtime modules
                for (var i = 0; i < currentUpdateRuntime.length; i++) {
                    currentUpdateRuntime[i](__webpack_require__);
                }
                // call accept handlers
                for (var outdatedModuleId in outdatedDependencies) {
                    if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
                        var module = __webpack_require__.c[outdatedModuleId];
                        if (module) {
                            moduleOutdatedDependencies =
                                outdatedDependencies[outdatedModuleId];
                            var callbacks = [];
                            var errorHandlers = [];
                            var dependenciesForCallbacks = [];
                            for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
                                var dependency = moduleOutdatedDependencies[j];
                                var acceptCallback = module.hot._acceptedDependencies[dependency];
                                var errorHandler = module.hot._acceptedErrorHandlers[dependency];
                                if (acceptCallback) {
                                    if (callbacks.indexOf(acceptCallback) !== -1)
                                        continue;
                                    callbacks.push(acceptCallback);
                                    errorHandlers.push(errorHandler);
                                    dependenciesForCallbacks.push(dependency);
                                }
                            }
                            for (var k = 0; k < callbacks.length; k++) {
                                try {
                                    callbacks[k].call(null, moduleOutdatedDependencies);
                                }
                                catch (err) {
                                    if (typeof errorHandlers[k] === 'function') {
                                        try {
                                            errorHandlers[k](err, {
                                                moduleId: outdatedModuleId,
                                                dependencyId: dependenciesForCallbacks[k],
                                            });
                                        }
                                        catch (err2) {
                                            if (options.onErrored) {
                                                options.onErrored({
                                                    type: 'accept-error-handler-errored',
                                                    moduleId: outdatedModuleId,
                                                    dependencyId: dependenciesForCallbacks[k],
                                                    error: err2,
                                                    originalError: err,
                                                });
                                            }
                                            if (!options.ignoreErrored) {
                                                reportError(err2);
                                                reportError(err);
                                            }
                                        }
                                    }
                                    else {
                                        if (options.onErrored) {
                                            options.onErrored({
                                                type: 'accept-errored',
                                                moduleId: outdatedModuleId,
                                                dependencyId: dependenciesForCallbacks[k],
                                                error: err,
                                            });
                                        }
                                        if (!options.ignoreErrored) {
                                            reportError(err);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                // Load self accepted modules
                for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
                    var item = outdatedSelfAcceptedModules[o];
                    var moduleId = item.module;
                    try {
                        item.require(moduleId);
                    }
                    catch (err) {
                        if (typeof item.errorHandler === 'function') {
                            try {
                                item.errorHandler(err, {
                                    moduleId: moduleId,
                                    module: __webpack_require__.c[moduleId],
                                });
                            }
                            catch (err2) {
                                if (options.onErrored) {
                                    options.onErrored({
                                        type: 'self-accept-error-handler-errored',
                                        moduleId: moduleId,
                                        error: err2,
                                        originalError: err,
                                    });
                                }
                                if (!options.ignoreErrored) {
                                    reportError(err2);
                                    reportError(err);
                                }
                            }
                        }
                        else {
                            if (options.onErrored) {
                                options.onErrored({
                                    type: 'self-accept-errored',
                                    moduleId: moduleId,
                                    error: err,
                                });
                            }
                            if (!options.ignoreErrored) {
                                reportError(err);
                            }
                        }
                    }
                }
                return outdatedModules;
            },
        };
    }
    __webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
        if (!currentUpdate) {
            currentUpdate = {};
            currentUpdateRuntime = [];
            currentUpdateRemovedChunks = [];
            applyHandlers.push(applyHandler);
        }
        if (!__webpack_require__.o(currentUpdate, moduleId)) {
            currentUpdate[moduleId] = __webpack_require__.m[moduleId];
        }
    };
    __webpack_require__.hmrC.require = function (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
        applyHandlers.push(applyHandler);
        currentUpdateChunks = {};
        currentUpdateRemovedChunks = removedChunks;
        currentUpdate = removedModules.reduce(function (obj, key) {
            obj[key] = false;
            return obj;
        }, {});
        currentUpdateRuntime = [];
        chunkIds.forEach(function (chunkId) {
            if (__webpack_require__.o(installedChunks, chunkId)
                && installedChunks[chunkId] !== undefined) {
                promises.push(loadUpdateChunk(chunkId, updatedModulesList));
                currentUpdateChunks[chunkId] = true;
            }
            else {
                currentUpdateChunks[chunkId] = false;
            }
        });
        if (__webpack_require__.f) {
            __webpack_require__.f.requireHmr = function (chunkId, promises) {
                if (currentUpdateChunks
                    && __webpack_require__.o(currentUpdateChunks, chunkId)
                    && !currentUpdateChunks[chunkId]) {
                    promises.push(loadUpdateChunk(chunkId));
                    currentUpdateChunks[chunkId] = true;
                }
            };
        }
    };

    __webpack_require__.hmrM = function () {
        return new Promise((resolve, reject) => lynx.requireModuleAsync(__webpack_require__.p
            + __webpack_require__.hmrF(), (err, ret) => {
            if (err)
                return reject(err);
            resolve(ret);
        }))['catch'](function (err) {
            if (err.code !== 'MODULE_NOT_FOUND')
                throw err;
        });
    };
})();
// module cache are used so entry inlining is disabled
// startup
// Load entry module and return exports
__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.lepus.cjs");
var __webpack_exports__ = __webpack_require__("(react:main-thread)/./src/index.tsx");

//# sourceMappingURL=http://0.0.0.0:3001/.rspeedy/main/main-thread.js.map