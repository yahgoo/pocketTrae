(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("background.js", function(require, module, exports, __Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,__ReactLynx,nativeAppId,__Behavior,LynxJSBI,lynx,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,__WebSocket__,webkit,Reporter,print,global,requestAnimationFrame,cancelAnimationFrame) {
lynx = lynx || {};
lynx.targetSdkVersion=lynx.targetSdkVersion||"3.2";
var Promise = lynx.Promise;
fetch = fetch || lynx.fetch;
requestAnimationFrame = requestAnimationFrame || lynx.requestAnimationFrame;
cancelAnimationFrame = cancelAnimationFrame || lynx.cancelAnimationFrame;

// This needs to be wrapped in an IIFE because it needs to be isolated against Lynx injected variables.
(() => {
// lynx chunks entries
if (!lynx.__chunk_entries__) {
  // Initialize once
  lynx.__chunk_entries__ = {};
}
if (!lynx.__chunk_entries__["main"]) {
  lynx.__chunk_entries__["main"] = globDynamicComponentEntry;
} else {
  globDynamicComponentEntry = lynx.__chunk_entries__["main"];
}

"use strict";
var __webpack_modules__ = ({
"(react:background)/./src/index.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _lynx_js_react_jsx_dev_runtime__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* import */ var _lynx_js_react__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");


// Backend API URL - uses current LAN IP (update this when moving between networks)
const SERVER_URL = 'http://172.22.23.209:3000';
// #region agent log
const debugLog = (location, message, data, hypothesisId)=>{
    // Mark this function as background only by ensuring it's only called from background contexts
    'background only';
    fetch(`${SERVER_URL}/__agent_debug_log`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sessionId: '4c9034',
            location,
            message,
            data,
            hypothesisId,
            timestamp: Date.now(),
            runId: 'post-fix'
        })
    }).catch(()=>{});
};
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
(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_1] = (__snapshot_5ab44_3dcd9_1)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_1, function() {
        const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_3] = (__snapshot_5ab44_3dcd9_3)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_3, function() {
        const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
            (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            2
        ]
    ], undefined, globDynamicComponentEntry, null, true);
const __snapshot_5ab44_3dcd9_2 = "__snapshot_5ab44_3dcd9_2";
(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_2] = (__snapshot_5ab44_3dcd9_2)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_2, function() {
        const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
            (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            1
        ],
        [
            (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            2
        ],
        [
            (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            3
        ],
        [
            (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            4
        ]
    ], undefined, globDynamicComponentEntry, null, true);
const __snapshot_5ab44_3dcd9_4 = "__snapshot_5ab44_3dcd9_4";
(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_4] = (__snapshot_5ab44_3dcd9_4)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_4, function() {
        const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
        (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 9, "bindEvent", "tap", ''),
        function(ctx) {
            if (ctx.__elements) __SetInlineStyles(ctx.__elements[11], ctx.__values[10]);
        },
        (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 11, "bindEvent", "tap", '')
    ], [
        [
            (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            2
        ],
        [
            (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            3
        ],
        [
            (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            4
        ],
        [
            (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            7
        ]
    ], undefined, globDynamicComponentEntry, null, true);
const __snapshot_5ab44_3dcd9_6 = "__snapshot_5ab44_3dcd9_6";
(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_6] = (__snapshot_5ab44_3dcd9_6)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_6, function() {
        const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_7] = (__snapshot_5ab44_3dcd9_7)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_7, function() {
        const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_8] = (__snapshot_5ab44_3dcd9_8)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_8, function() {
        const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .snapshotCreatorMap */.snapshotCreatorMap)[__snapshot_5ab44_3dcd9_5] = (__snapshot_5ab44_3dcd9_5)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)(__snapshot_5ab44_3dcd9_5, function() {
        const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
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
            (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            5
        ],
        [
            (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlotV2 */.__DynamicPartSlotV2),
            6
        ]
    ], undefined, globDynamicComponentEntry, null, true);
function App() {
    const [card, setCard] = (0,_lynx_js_react__rspack_import_1.useState)(null);
    const [note, setNote] = (0,_lynx_js_react__rspack_import_1.useState)('');
    const [connectionStatus, setConnectionStatus] = (0,_lynx_js_react__rspack_import_1.useState)('connecting');
    const [isResponding, setIsResponding] = (0,_lynx_js_react__rspack_import_1.useState)(false);
    // Fetch initial state
    const fetchState = (0,_lynx_js_react__rspack_import_1.useCallback)(async ()=>{
        'background only'; // Mark this as background only
        try {
            const response = await fetch(`${SERVER_URL}/state`);
            if (response.ok) {
                var _ref, _ref1;
                var _data_card, _data_card1;
                const data = await response.json();
                // #region agent log
                debugLog('index.tsx:fetchState', 'state fetched', {
                    hasCard: Boolean(data.card),
                    cardStatus: (_ref = (_data_card = data.card) === null || _data_card === void 0 ? void 0 : _data_card.status) !== null && _ref !== void 0 ? _ref : null,
                    cardId: (_ref1 = (_data_card1 = data.card) === null || _data_card1 === void 0 ? void 0 : _data_card1.id) !== null && _ref1 !== void 0 ? _ref1 : null
                }, 'H3');
                // #endregion
                setCard(data.card);
                setConnectionStatus('connected');
            }
        } catch (err) {
            console.error('Failed to fetch state:', err);
            setConnectionStatus('error');
        }
    }, []);
    // Set up polling (Lynx doesn't reliably support SSE)
    (0,_lynx_js_react__rspack_import_1.useEffect)(()=>{
        'background only'; // Mark this as background only
        // #region agent log
        debugLog('index.tsx:mount', 'App mounted', {}, 'H4');
        // #endregion
        fetchState();
        // Use polling for Lynx - more reliable than SSE in Lynx Explorer
        const pollInterval = setInterval(fetchState, 2000);
        return ()=>clearInterval(pollInterval);
    }, [
        fetchState
    ]);
    // Handle approve/reject
    const handleResponse = async (actionId)=>{
        'background only'; // Mark this as background only
        if (!card || isResponding) return;
        setIsResponding(true);
        try {
            const response = await fetch(`${SERVER_URL}/respond`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    actionId,
                    note: note.trim(),
                    respondedBy: 'lynx-mobile'
                })
            });
            if (!response.ok) throw new Error('Failed to respond');
        // Card will update via polling
        } catch (err) {
            console.error('Failed to respond:', err);
            setConnectionStatus('error');
        } finally{
            setIsResponding(false);
        }
    };
    // Render card content
    const renderCard = ()=>{
        if (!card) {
            // #region agent log
            debugLog('index.tsx:renderCard', 'branch empty-state', {
                branch: 'empty'
            }, 'H3');
            // #endregion
            return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_1, {
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
            return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_2, {
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
                $3: card.respondedBy && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_3, {
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
        return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_4, {
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
                ()=>{
                    if (!isResponding) handleResponse('reject');
                },
                {
                    ...styles.approveButton,
                    opacity: isResponding ? 0.5 : 1
                },
                ()=>{
                    if (!isResponding) handleResponse('approve');
                }
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
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_5, {
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
            connectionStatus === 'connecting' && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_6, {
                values: [
                    styles.connectingText
                ]
            }, void 0, false, {
                fileName: "/Users/kmsum/Downloads/Trae Solo Hackathon/relayTrae/lynx/src/index.tsx",
                lineNumber: 401,
                columnNumber: 11
            }, this),
            connectionStatus === 'connected' && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_7, {
                values: [
                    styles.connectedText
                ]
            }, void 0, false, {
                fileName: "/Users/kmsum/Downloads/Trae Solo Hackathon/relayTrae/lynx/src/index.tsx",
                lineNumber: 404,
                columnNumber: 11
            }, this),
            connectionStatus === 'error' && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__rspack_import_0.jsxDEV)(__snapshot_5ab44_3dcd9_8, {
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
_lynx_js_react__rspack_import_1.root.render(/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__rspack_import_0.jsxDEV)(App, {}, void 0, false, {
    fileName: "/Users/kmsum/Downloads/Trae Solo Hackathon/relayTrae/lynx/src/index.tsx",
    lineNumber: 414,
    columnNumber: 13
}, undefined));


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


},
"(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs"(module, __unused_rspack_exports, __webpack_require__) {
const { isComponent, flush } = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/refresh/dist/index.js");
// eslint-disable-next-line
const getExports = (m)=>m.exports || m.__proto__.exports;
function isSafeExport(key) {
    return key === '__esModule' || key === '__N_SSG' || key === '__N_SSP' || key === 'config';
}
function registerExports(moduleExports, moduleId) {
    globalThis['__PREFRESH__'].register(moduleExports, moduleId + ' %exports%');
    if (moduleExports == null || typeof moduleExports !== 'object') return;
    for(const key in moduleExports){
        if (isSafeExport(key)) continue;
        const exportValue = moduleExports[key];
        const typeID = moduleId + ' %exports% ' + key;
        globalThis['__PREFRESH__'].register(exportValue, typeID);
    }
}
const shouldBind = (m)=>{
    let isCitizen = false;
    const moduleExports = getExports(m);
    if (isComponent(moduleExports)) isCitizen = true;
    if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') isCitizen = isCitizen || false;
    else for(const key in moduleExports){
        if (key === '__esModule') continue;
        const exportValue = moduleExports[key];
        if (isComponent(exportValue)) isCitizen = isCitizen || true;
    }
    return isCitizen;
};
module.exports = Object.freeze({
    getExports,
    shouldBind,
    flush,
    registerExports
});


},
"(react:background)/./node_modules/@lynx-js/react/refresh/dist/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  flush: () => (flush),
  isComponent: () => (isComponent)
});
/* import */ var _lynx_js_react_internal__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js");

const COMPONENT_DIRTY_BIT = 8;
const isDirty = (vnode)=>{
    if (vnode["__c"] && vnode["__c"]["__d"]) return true;
    if (vnode["__c"] && vnode["__c"]["__g"] & COMPONENT_DIRTY_BIT) return true;
};
const unsetDirty = (vnode)=>{
    if (vnode["__c"]) {
        if (vnode["__c"]["__d"]) vnode["__c"]["__d"] = false;
        if (vnode["__c"]["__g"]) vnode["__c"]["__g"] &= ~COMPONENT_DIRTY_BIT;
    }
};
const oldCatchError = _lynx_js_react_internal__rspack_import_0.options.__e;
_lynx_js_react_internal__rspack_import_0.options.__e = (error, vnode, oldVNode, info)=>{
    if (isDirty(vnode)) unsetDirty(vnode);
    if (oldCatchError) oldCatchError(error, vnode, oldVNode, info);
};
const defer = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
_lynx_js_react_internal__rspack_import_0.options.debounceRendering = (process)=>{
    defer(()=>{
        try {
            process();
        } catch (e) {
            process["__r"] = 0;
            throw e;
        }
    });
};
const vnodesForComponent = new WeakMap();
const mappedVNodes = new WeakMap();
const lastSeen = new Map();
const getMappedVnode = (type)=>{
    if (mappedVNodes.has(type)) return getMappedVnode(mappedVNodes.get(type));
    return type;
};
const BUILT_IN_COMPONENTS = [
    'Fragment',
    'Suspense',
    'SuspenseList'
];
const isBuiltIn = (type)=>BUILT_IN_COMPONENTS.includes(type.name);
const oldVnode = _lynx_js_react_internal__rspack_import_0.options.vnode;
_lynx_js_react_internal__rspack_import_0.options.vnode = (vnode)=>{
    if (vnode && 'function' == typeof vnode.type && !isBuiltIn(vnode.type)) {
        const foundType = getMappedVnode(vnode.type);
        if (foundType !== vnode.type) {
            vnode.type = foundType;
            if (vnode["__c"] && 'prototype' in vnode.type && vnode.type.prototype.render) vnode["__c"].constructor = vnode.type;
        }
    }
    if (oldVnode) oldVnode(vnode);
};
const oldDiff = _lynx_js_react_internal__rspack_import_0.options.__b;
_lynx_js_react_internal__rspack_import_0.options.__b = (vnode)=>{
    if (vnode && 'function' == typeof vnode.type && !isBuiltIn(vnode.type)) {
        const vnodes = vnodesForComponent.get(vnode.type);
        if (vnodes) vnodes.push(vnode);
        else vnodesForComponent.set(vnode.type, [
            vnode
        ]);
    }
    if (oldDiff) oldDiff(vnode);
};
const oldDiffed = _lynx_js_react_internal__rspack_import_0.options.diffed;
_lynx_js_react_internal__rspack_import_0.options.diffed = (vnode)=>{
    if (vnode && 'function' == typeof vnode.type) {
        const vnodes = vnodesForComponent.get(vnode.type);
        lastSeen.set(vnode.__v, vnode);
        if (vnodes) {
            const matchingDom = vnodes.filter((p)=>p.__c === vnode.__c);
            if (matchingDom.length > 1) {
                const i = vnodes.findIndex((p)=>p === matchingDom[0]);
                vnodes.splice(i, 1);
            }
        }
    }
    if (oldDiffed) oldDiffed(vnode);
};
const oldUnmount = _lynx_js_react_internal__rspack_import_0.options.unmount;
_lynx_js_react_internal__rspack_import_0.options.unmount = (vnode)=>{
    const type = (vnode || {}).type;
    if ('function' == typeof type && vnodesForComponent.has(type)) {
        const vnodes = vnodesForComponent.get(type);
        if (vnodes) {
            const index = vnodes.indexOf(vnode);
            if (-1 !== index) vnodes.splice(index, 1);
        }
    }
    if (oldUnmount) oldUnmount(vnode);
};
const NAMESPACE = '__PREFRESH__';
const signaturesForType = new WeakMap();
const computeKey = (signature)=>{
    let fullKey = signature.key;
    let hooks;
    try {
        hooks = signature.getCustomHooks();
    } catch (err) {
        signature.forceReset = true;
        return fullKey;
    }
    for(let i = 0; i < hooks.length; i++){
        const hook = hooks[i];
        if ('function' != typeof hook) {
            signature.forceReset = true;
            break;
        }
        const nestedHookSignature = signaturesForType.get(hook);
        if (void 0 === nestedHookSignature) continue;
        const nestedHookKey = computeKey(nestedHookSignature);
        if (nestedHookSignature.forceReset) signature.forceReset = true;
        fullKey += '\n---\n' + nestedHookKey;
    }
    return fullKey;
};
let typesById = new Map();
let pendingUpdates = [];
function sign(type, key, forceReset, getCustomHooks, status) {
    if (type) {
        let signature = signaturesForType.get(type);
        if ('begin' === status) {
            signaturesForType.set(type, {
                type,
                key,
                forceReset,
                getCustomHooks: getCustomHooks || (()=>[])
            });
            return 'needsHooks';
        }
        if ('needsHooks' === status) signature.fullKey = computeKey(signature);
    }
}
function replaceComponent(OldType, NewType, resetHookState) {
    const vnodes = vnodesForComponent.get(OldType);
    if (!vnodes) return;
    vnodesForComponent["delete"](OldType);
    vnodesForComponent.set(NewType, vnodes);
    mappedVNodes.set(OldType, NewType);
    pendingUpdates = pendingUpdates.filter((p)=>p[0] !== OldType);
    vnodes.forEach((node)=>{
        let vnode = node;
        if (vnode && vnode.__v && !vnode.__c && lastSeen.has(vnode.__v)) {
            vnode = lastSeen.get(vnode.__v);
            lastSeen["delete"](vnode.__v);
        }
        if (!vnode || !vnode.__c || !vnode.__c.__P) return;
        vnode.type = NewType;
        if (vnode["__c"]) {
            vnode["__c"].constructor = vnode.type;
            try {
                if (vnode["__c"] instanceof OldType) {
                    const oldInst = vnode["__c"];
                    const newInst = new NewType(vnode["__c"].props, vnode["__c"].context);
                    vnode["__c"] = newInst;
                    for(let i in oldInst){
                        const type = typeof oldInst[i];
                        if (i in newInst) {
                            if ('function' !== type && typeof newInst[i] === type) {
                                if ('object' === type && null != newInst[i] && newInst[i].constructor === oldInst[i].constructor) Object.assign(newInst[i], oldInst[i]);
                                else newInst[i] = oldInst[i];
                            }
                        } else newInst[i] = oldInst[i];
                    }
                }
            } catch (e) {
                vnode["__c"].constructor = NewType;
            }
            if (resetHookState) {
                if (vnode["__c"]["__H"] && vnode["__c"]["__H"]["__"] && vnode["__c"]["__H"]["__"].length) vnode["__c"]["__H"]["__"].forEach((possibleEffect)=>{
                    if (possibleEffect["__c"] && 'function' == typeof possibleEffect["__c"]) {
                        possibleEffect["__c"]();
                        possibleEffect["__c"] = void 0;
                    } else if (possibleEffect["__H"] && possibleEffect["__"] && 3 === Object.keys(possibleEffect).length) {
                        const cleanupKey = Object.keys(possibleEffect).find((key)=>"__H" !== key && "__" !== key);
                        if (cleanupKey && 'function' == typeof possibleEffect[cleanupKey]) {
                            possibleEffect[cleanupKey]();
                            possibleEffect[cleanupKey] = void 0;
                        }
                    }
                });
                vnode["__c"]["__H"] = {
                    ["__"]: [],
                    ["__h"]: []
                };
            } else if (vnode["__c"]["__H"] && vnode["__c"]["__H"]["__"] && vnode["__c"]["__H"]["__"].length) {
                vnode["__c"]["__H"]["__"].forEach((possibleEffect)=>{
                    if (possibleEffect["__c"] && 'function' == typeof possibleEffect["__c"]) {
                        possibleEffect["__c"]();
                        possibleEffect["__c"] = void 0;
                    } else if (possibleEffect["__H"] && possibleEffect["__"] && 3 === Object.keys(possibleEffect).length) {
                        const cleanupKey = Object.keys(possibleEffect).find((key)=>"__H" !== key && "__" !== key);
                        if (cleanupKey && 'function' == typeof possibleEffect[cleanupKey]) possibleEffect[cleanupKey]();
                        possibleEffect[cleanupKey] = void 0;
                    }
                });
                vnode["__c"]["__H"]["__"].forEach((hook)=>{
                    if (hook.__H && Array.isArray(hook.__H)) hook.__H = void 0;
                });
            }
            _lynx_js_react_internal__rspack_import_0.Component.prototype.forceUpdate.call(vnode["__c"]);
        }
    });
}
globalThis[NAMESPACE] = {
    getSignature: (type)=>signaturesForType.get(type),
    register: (type, id)=>{
        if ('function' != typeof type) return;
        if (typesById.has(id)) {
            const existing = typesById.get(id);
            if (existing !== type) {
                pendingUpdates.push([
                    existing,
                    type
                ]);
                typesById.set(id, type);
            }
        } else typesById.set(id, type);
        if (!signaturesForType.has(type)) signaturesForType.set(type, {
            getCustomHooks: ()=>[],
            type
        });
    },
    getPendingUpdates: ()=>pendingUpdates,
    flush: ()=>{
        pendingUpdates = [];
    },
    replaceComponent: replaceComponent,
    sign: sign,
    computeKey: computeKey
};
const compareSignatures = (prev, next)=>{
    const prevSignature = globalThis.__PREFRESH__.getSignature(prev) || {};
    const nextSignature = globalThis.__PREFRESH__.getSignature(next) || {};
    if (prevSignature.key !== nextSignature.key || globalThis.__PREFRESH__.computeKey(prevSignature) !== globalThis.__PREFRESH__.computeKey(nextSignature) || nextSignature.forceReset) globalThis.__PREFRESH__.replaceComponent(prev, next, true);
    else globalThis.__PREFRESH__.replaceComponent(prev, next, false);
};
const flush = ()=>{
    const pending = [
        ...globalThis.__PREFRESH__.getPendingUpdates()
    ];
    globalThis.__PREFRESH__.flush();
    if (pending.length > 0) pending.forEach(([prev, next])=>{
        compareSignatures(prev, next);
    });
};
const isComponent = (exportValue)=>{
    if ('function' == typeof exportValue) {
        if (null != exportValue.prototype && exportValue.prototype.isReactComponent) return true;
        const name = exportValue.name || exportValue.displayName;
        return 'string' == typeof name && name[0] && name[0] == name[0].toUpperCase();
    }
    return false;
};



},
"(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Fragment: () => (/* reexport safe */ preact_jsx_runtime__rspack_import_0.Fragment),
  jsx: () => (/* reexport safe */ preact_jsx_runtime__rspack_import_0.jsx),
  jsxDEV: () => (/* reexport safe */ preact_jsx_runtime__rspack_import_0.jsxDEV),
  jsxs: () => (/* reexport safe */ preact_jsx_runtime__rspack_import_0.jsxs)
});
/* import */ var preact_jsx_runtime__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/commit-context.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/forceRootRender.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runWithForceRootRender: () => (runWithForceRootRender)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _shared_render_constants_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/globalProps.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createGlobalProps: () => (createGlobalProps),
  isGlobalPropsEventMode: () => (isGlobalPropsEventMode),
  updateGlobalProps: () => (updateGlobalProps)
});
/* import */ var _initData_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/initData.js");

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
function warnGlobalPropsMode() {
    if (true) console.warn(`No need to use this API when 'globalPropsMode' is not 'event', ` + `updates will be triggered automatically by full re-render. ` + `Please set 'globalPropsMode' to 'event' to enable optimized updates.`);
}
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
    const useChanged = (callback)=>{
        useListener('onGlobalPropsChanged', callback);
    };
    return {
        Provider: ()=>FallbackProvider,
        Consumer: ()=>FallbackConsumer,
        use: ()=>useFallbackGlobalProps,
        useChanged: ()=>useChanged
    };
} //# sourceMappingURL=globalProps.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/react.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var preact_hooks__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");
/* import */ var _shared_profile_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


// Cache profiled wrappers by the original preact setter to preserve stable
// identity without introducing extra hooks in component render flow.
const stateSetterTraceCache = /* @__PURE__ */ _shared_profile_js__rspack_import_1.isProfiling ? new WeakMap() : undefined;
function buildTraceOption(flowId, stack) {
    if (!stack) return {
        flowId
    };
    return {
        flowId,
        args: {
            stack
        }
    };
}
function withEffectProfile(effect, traceName, flowId, stack) {
    const traceOption = buildTraceOption(flowId, stack);
    return ()=>{
        (0,_shared_profile_js__rspack_import_1.profileStart)(traceName, traceOption);
        try {
            const cleanup = effect();
            if (typeof cleanup !== 'function') return cleanup;
            return ()=>{
                (0,_shared_profile_js__rspack_import_1.profileStart)(`${traceName}::cleanup`, traceOption);
                try {
                    cleanup();
                } finally{
                    (0,_shared_profile_js__rspack_import_1.profileEnd)();
                }
            };
        } finally{
            (0,_shared_profile_js__rspack_import_1.profileEnd)();
        }
    };
}
function useEffectWithProfile(effect, deps, traceName) {
    const flowId = (0,_shared_profile_js__rspack_import_1.profileFlowId)();
    const stack = new Error().stack;
    const traceOption = buildTraceOption(flowId, stack);
    (0,_shared_profile_js__rspack_import_1.profileStart)(traceName, traceOption);
    try {
        return (0,preact_hooks__rspack_import_0.useEffect)(withEffectProfile(effect, `${traceName}::callback`, flowId, stack), deps);
    } finally{
        (0,_shared_profile_js__rspack_import_1.profileEnd)();
    }
}
function useLayoutEffectProfiled(effect, deps) {
    return useEffectWithProfile(effect, deps, 'ReactLynx::hooks::useLayoutEffect');
}
function useEffectProfiled(effect, deps) {
    return useEffectWithProfile(effect, deps, 'ReactLynx::hooks::useEffect');
}
function useStateWithProfile(initialState) {
    const [state, setState] = arguments.length === 0 ? (0,preact_hooks__rspack_import_0.useState)() : (0,preact_hooks__rspack_import_0.useState)(initialState);
    const genericSetState = setState;
    const cachedTracedSetState = stateSetterTraceCache === null || stateSetterTraceCache === void 0 ? void 0 : stateSetterTraceCache.get(genericSetState);
    if (cachedTracedSetState) return [
        state,
        cachedTracedSetState
    ];
    const tracedSetState = (nextState)=>{
        const stack = new Error().stack;
        const traceOption = stack ? {
            args: {
                stack
            }
        } : undefined;
        (0,_shared_profile_js__rspack_import_1.profileStart)('ReactLynx::hooks::useState::setter', traceOption);
        try {
            return setState(nextState);
        } finally{
            (0,_shared_profile_js__rspack_import_1.profileEnd)();
        }
    };
    stateSetterTraceCache === null || stateSetterTraceCache === void 0 ? void 0 : stateSetterTraceCache.set(genericSetState, tracedSetState);
    return [
        state,
        tracedSetState
    ];
}
const useState = _shared_profile_js__rspack_import_1.isProfiling ? useStateWithProfile : preact_hooks__rspack_import_0.useState;
/**
 * Accepts a function that contains imperative, possibly effectful code.
 * The effects run after main thread dom update without blocking it.
 *
 * @param effect - Imperative function that can return a cleanup function
 * @param deps - If present, effect will only activate if the values in the list change (using ===).
 *
 * @public
 */ const useEffect = _shared_profile_js__rspack_import_1.isProfiling ? useEffectProfiled : preact_hooks__rspack_import_0.useEffect;
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
 */ const useLayoutEffect = _shared_profile_js__rspack_import_1.isProfiling ? useLayoutEffectProfiled : preact_hooks__rspack_import_0.useEffect;
 //# sourceMappingURL=react.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/useLynxGlobalEventListener.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useLynxGlobalEventListener: () => (useLynxGlobalEventListener)
});
/* import */ var _lynx_js_react_hooks__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/react.js");
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
 */ function useLynxGlobalEventListener(eventName, listener) {
    'background only';
    const previousArgsRef = (0,_lynx_js_react_hooks__rspack_import_0.useRef)();
    (0,_lynx_js_react_hooks__rspack_import_0.useMemo)(()=>{
        if (previousArgsRef.current) {
            const [eventName, listener] = previousArgsRef.current;
            lynx.getJSModule('GlobalEventEmitter').removeListener(eventName, listener);
        }
        lynx.getJSModule('GlobalEventEmitter').addListener(eventName, listener);
        previousArgsRef.current = [
            eventName,
            listener
        ];
    }, [
        eventName,
        listener
    ]);
    (0,_lynx_js_react_hooks__rspack_import_0.useEffect)(()=>{
        return ()=>{
            if (previousArgsRef.current) {
                const [eventName, listener] = previousArgsRef.current;
                lynx.getJSModule('GlobalEventEmitter').removeListener(eventName, listener);
            }
        };
    }, []);
} //# sourceMappingURL=useLynxGlobalEventListener.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/initData.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  factory: () => (factory),
  withInitDataInState: () => (withInitDataInState)
});
/* import */ var _commit_context_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/commit-context.js");

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
    const useChanged = (callback)=>{
        useListener(eventName, callback);
    };
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
            lynx.getJSModule('GlobalEventEmitter').removeListener('onDataChanged', this.h);
        }
        constructor(props){
            super(props);
            this.state = {
                ...this.state,
                ...lynx.__initData
            };
            lynx.getJSModule('GlobalEventEmitter').addListener('onDataChanged', this.h = (...args)=>{
                const [newData] = args;
                _commit_context_js__rspack_import_0.globalCommitContext.flushOptions.triggerDataUpdated = true;
                this.setState(newData);
            });
        }
    }
    return C;
} //# sourceMappingURL=initData.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/lynx-update-data.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NativeUpdateDataType: () => (NativeUpdateDataType),
  updateCardData: () => (updateCardData)
});
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const NativeUpdateDataType = {
    UPDATE: 0,
    RESET: 1
};
function updateCardData(newData, options) {
    const { ['__lynx_timing_flag']: performanceTimingFlag, ...restNewData } = newData;
    if (performanceTimingFlag) lynx.reportError(new Error(`Received unsupported updateData with \`__lynx_timing_flag\` (value "${performanceTimingFlag}"), the timing flag is ignored`));
    const { type = NativeUpdateDataType.UPDATE } = options !== null && options !== void 0 ? options : {};
    if (type == NativeUpdateDataType.RESET) lynx.__initData = {};
    // COW keeps provider/consumer readers aligned with Snapshot updateData behavior.
    lynx.__initData = Object.assign({}, lynx.__initData, restNewData);
    lynx.getJSModule('GlobalEventEmitter').emit('onDataChanged', [
        restNewData
    ]);
} //# sourceMappingURL=lynx-update-data.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/ref.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/reload-version.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/document.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  document: () => (document),
  setupBackgroundDocument: () => (setupBackgroundDocument),
  setupDocument: () => (setupDocument)
});
/* import */ var _snapshot_snapshot_backgroundSnapshot_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/backgroundSnapshot.js");
/* import */ var _snapshot_snapshot_snapshot_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


const document = {};
/**
 * Sets up the document interface for the background thread.
 * All DOM operations are intercepted to create {@link BackgroundSnapshotInstance}.
 */ function setupBackgroundDocument(_document = document) {
    _document.createElement = function(type) {
        return new _snapshot_snapshot_backgroundSnapshot_js__rspack_import_0.BackgroundSnapshotInstance(type);
    };
    _document.createElementNS = function(_ns, type, _is) {
        return new _snapshot_snapshot_backgroundSnapshot_js__rspack_import_0.BackgroundSnapshotInstance(type);
    };
    _document.createTextNode = function(text) {
        const i = new _snapshot_snapshot_backgroundSnapshot_js__rspack_import_0.BackgroundSnapshotInstance(null);
        i.setAttribute(0, text);
        Object.defineProperty(i, 'data', {
            set (v) {
                i.setAttribute(0, v);
            }
        });
        return i;
    };
}
/**
 * Sets up the document interface for the main thread.
 * All DOM operations are intercepted to create {@link SnapshotInstance}.
 */ function setupDocument(_document = document) {
    _document.createElement = function(type) {
        const si = new _snapshot_snapshot_snapshot_js__rspack_import_1.SnapshotInstance(type);
        return si;
    };
    _document.createElementNS = function(_ns, type, _is) {
        const si = new _snapshot_snapshot_snapshot_js__rspack_import_1.SnapshotInstance(type);
        return si;
    };
    _document.createTextNode = function(text) {
        const i = new _snapshot_snapshot_snapshot_js__rspack_import_1.SnapshotInstance(null);
        i.setAttribute(0, text);
        Object.defineProperty(i, 'data', {
            set (v) {
                i.setAttribute(0, v);
            }
        });
        return i;
    };
}
// if (__JS__) {
//   setupBackgroundDocument();
// } else if (__LEPUS__) {
//   setupDocument();
// }
 //# sourceMappingURL=document.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var _lynx_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx.js");
/* import */ var _snapshot_lynx_component_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/component.js");
/* import */ var preact_compat__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
/* import */ var _core_hooks_react_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/react.js");
/* import */ var _snapshot_lynx_element_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/element.js");
/* import */ var _snapshot_lynx_portals_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/portals.js");
/* import */ var _snapshot_lynx_suspense_js__rspack_import_6 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/suspense.js");
/* import */ var preact__rspack_import_7 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _lynx_api_js__rspack_import_8 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx-api.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var preact_compat__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
/* import */ var _lynx_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx.js");
/* import */ var _core_hooks_react_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/react.js");
/* import */ var _root_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* import */ var _snapshot_compat_componentIs_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/compat/componentIs.js");
/* import */ var _snapshot_lynx_lazy_bundle_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/lazy-bundle.js");
/* import */ var _snapshot_snapshot_backgroundSnapshot_js__rspack_import_6 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/backgroundSnapshot.js");
/* import */ var _snapshot_snapshot_definition_js__rspack_import_7 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/definition.js");
/* import */ var _snapshot_snapshot_dynamicPartType_js__rspack_import_8 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/dynamicPartType.js");
/* import */ var _snapshot_snapshot_list_js__rspack_import_9 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/list.js");
/* import */ var _snapshot_snapshot_snapshot_js__rspack_import_10 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
/* import */ var _shared_render_constants_js__rspack_import_11 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
/* import */ var _snapshot_snapshot_spread_js__rspack_import_12 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/spread.js");
/* import */ var _snapshot_snapshot_event_js__rspack_import_13 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/event.js");
/* import */ var _snapshot_snapshot_ref_js__rspack_import_14 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/ref.js");
/* import */ var _snapshot_snapshot_workletEvent_js__rspack_import_15 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletEvent.js");
/* import */ var _snapshot_snapshot_workletRef_js__rspack_import_16 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletRef.js");
/* import */ var _snapshot_snapshot_gesture_js__rspack_import_17 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/gesture.js");
/* import */ var _snapshot_snapshot_platformInfo_js__rspack_import_18 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/platformInfo.js");
/* import */ var preact__rspack_import_19 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _snapshot_lynx_dynamic_js_js__rspack_import_20 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/dynamic-js.js");
/* import */ var _core_initData_js__rspack_import_21 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/initData.js");
/* import */ var _snapshot_compat_lynxComponent_js__rspack_import_22 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/compat/lynxComponent.js");
/* import */ var _snapshot_worklet_call_transformToWorklet_js__rspack_import_23 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/transformToWorklet.js");
/* import */ var _snapshot_worklet_hmr_js__rspack_import_24 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/hmr.js");
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_25 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx-api.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GlobalPropsConsumer: () => (GlobalPropsConsumer),
  GlobalPropsProvider: () => (GlobalPropsProvider),
  InitDataConsumer: () => (InitDataConsumer),
  InitDataProvider: () => (InitDataProvider),
  MainThreadRef: () => (/* reexport safe */ _snapshot_worklet_ref_workletRef_js__rspack_import_12.MainThreadRef),
  root: () => (root),
  runOnBackground: () => (/* reexport safe */ _snapshot_worklet_call_runOnBackground_js__rspack_import_10.runOnBackground),
  runOnMainThread: () => (/* reexport safe */ _snapshot_worklet_call_runOnMainThread_js__rspack_import_11.runOnMainThread),
  useGlobalProps: () => (useGlobalProps),
  useGlobalPropsChanged: () => (useGlobalPropsChanged),
  useInitData: () => (useInitData),
  useInitDataChanged: () => (useInitDataChanged),
  useLynxGlobalEventListener: () => (/* reexport safe */ _core_hooks_useLynxGlobalEventListener_js__rspack_import_4.useLynxGlobalEventListener),
  useMainThreadRef: () => (/* reexport safe */ _snapshot_worklet_ref_workletRef_js__rspack_import_12.useMainThreadRef),
  withInitDataInState: () => (/* reexport safe */ _core_initData_js__rspack_import_5.withInitDataInState)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var preact_compat__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
/* import */ var preact_hooks__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");
/* import */ var _core_globalProps_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/globalProps.js");
/* import */ var _core_hooks_useLynxGlobalEventListener_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/useLynxGlobalEventListener.js");
/* import */ var _core_initData_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/initData.js");
/* import */ var _root_js__rspack_import_6 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* import */ var _shared_profile_js__rspack_import_7 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _snapshot_lifecycle_constant_js__rspack_import_8 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js");
/* import */ var _snapshot_lynx_tt_js__rspack_import_9 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/tt.js");
/* import */ var _snapshot_worklet_call_runOnBackground_js__rspack_import_10 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/runOnBackground.js");
/* import */ var _snapshot_worklet_call_runOnMainThread_js__rspack_import_11 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/runOnMainThread.js");
/* import */ var _snapshot_worklet_ref_workletRef_js__rspack_import_12 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/workletRef.js");
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
        _root_js__rspack_import_6.__root.__jsx = jsx;
        if (true) (0,_shared_profile_js__rspack_import_7.profileStart)('ReactLynx::renderBackground');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        (0,preact__rspack_import_0.render)(jsx, _root_js__rspack_import_6.__root);
        if (true) (0,_shared_profile_js__rspack_import_7.profileEnd)();
        if (true) // `firstScreen` message might have been reached.
        (0,_snapshot_lynx_tt_js__rspack_import_9.flushDelayedLifecycleEvents)();
        else {}
    },
    /* v8 ignore next 3 */ registerDataProcessors: (dataProcessorDefinition)=>{
        lynx.registerDataProcessors(dataProcessorDefinition);
    }
};
const _InitData = /* @__PURE__ */ (0,_core_initData_js__rspack_import_5.factory)({
    createContext: preact_compat__rspack_import_1.createContext,
    useState: preact_hooks__rspack_import_2.useState,
    createElement: preact_compat__rspack_import_1.createElement,
    useLynxGlobalEventListener: _core_hooks_useLynxGlobalEventListener_js__rspack_import_4.useLynxGlobalEventListener
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
const _GlobalProps = /* @__PURE__ */ (0,_core_globalProps_js__rspack_import_3.createGlobalProps)({
    createContext: preact_compat__rspack_import_1.createContext,
    useState: preact_hooks__rspack_import_2.useState,
    createElement: preact_compat__rspack_import_1.createElement,
    useLynxGlobalEventListener: _core_hooks_useLynxGlobalEventListener_js__rspack_import_4.useLynxGlobalEventListener
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runWithForce: () => (/* reexport safe */ _snapshot_lynx_runWithForce_js__rspack_import_15.runWithForce)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _core_hooks_react_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/react.js");
/* import */ var _document_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/document.js");
/* import */ var _shared_component_stack_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/component-stack.js");
/* import */ var _shared_profile_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _snapshot_alog_elementPAPICall_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/alog/elementPAPICall.js");
/* import */ var _snapshot_alog_index_js__rspack_import_6 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/alog/index.js");
/* import */ var _snapshot_debug_profileHooks_js__rspack_import_7 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/profileHooks.js");
/* import */ var _snapshot_debug_vnodeSource_js__rspack_import_8 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/vnodeSource.js");
/* import */ var _snapshot_lifecycle_patch_commit_js__rspack_import_9 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/commit.js");
/* import */ var _snapshot_lifecycle_patch_error_js__rspack_import_10 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/error.js");
/* import */ var _snapshot_lynx_env_js__rspack_import_11 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/env.js");
/* import */ var _snapshot_lynx_performance_js__rspack_import_12 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/performance.js");
/* import */ var _snapshot_lynx_tt_js__rspack_import_13 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/tt.js");
/* import */ var _utils_js__rspack_import_14 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* import */ var _snapshot_lynx_runWithForce_js__rspack_import_15 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/runWithForce.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

// to make sure preact's hooks to register earlier than ours















if (true) (0,_shared_component_stack_js__rspack_import_3.setupComponentStack)();
if (false) {}
if (false) {}
// Trick Preact and TypeScript to accept our custom document adapter.
preact__rspack_import_0.options.document = _document_js__rspack_import_2.document;
preact__rspack_import_0.options.requestAnimationFrame = _utils_js__rspack_import_14.lynxQueueMicrotask;
(0,_document_js__rspack_import_2.setupBackgroundDocument)();
(0,_snapshot_lynx_tt_js__rspack_import_13.injectTt)();
(0,_snapshot_lifecycle_patch_error_js__rspack_import_10.addCtxNotFoundEventListener)();
if (false) {}
else {
    (0,_snapshot_lifecycle_patch_commit_js__rspack_import_9.replaceCommitHook)();
    (0,_snapshot_lynx_performance_js__rspack_import_12.initTimingAPI)();
    if ( true && _shared_profile_js__rspack_import_4.isProfiling) (0,_snapshot_debug_vnodeSource_js__rspack_import_8.setupVNodeSourceHook)();
    if (_shared_profile_js__rspack_import_4.isProfiling) (0,_snapshot_debug_profileHooks_js__rspack_import_7.initProfileHook)();
}
(0,_snapshot_lynx_env_js__rspack_import_11.setupLynxEnv)(); //# sourceMappingURL=lynx.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __root: () => (__root),
  setRoot: () => (setRoot)
});
/* import */ var _snapshot_snapshot_backgroundSnapshot_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/backgroundSnapshot.js");
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
setRoot(new _snapshot_snapshot_backgroundSnapshot_js__rspack_import_0.BackgroundSnapshotInstance('root'));
 //# sourceMappingURL=root.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/component-stack.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getCurrentVNode: () => (getCurrentVNode),
  getDisplayName: () => (getDisplayName),
  getOwnerStack: () => (getOwnerStack),
  setupComponentStack: () => (setupComponentStack)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _render_constants_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/alog/elementPAPICall.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initElementPAPICallAlog: () => (initElementPAPICallAlog)
});
/* import */ var _shared_profile_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/alog/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initAlog: () => (initAlog)
});
/* import */ var _render_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/alog/render.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function initAlog() {
    (0,_render_js__rspack_import_0.initRenderAlog)();
} //# sourceMappingURL=index.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/alog/render.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initRenderAlog: () => (initRenderAlog)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _shared_render_constants_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
/* import */ var _utils_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



function initRenderAlog() {
    const oldAfterDiff = preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.DIFFED];
    preact__rspack_import_0.options[_shared_render_constants_js__rspack_import_1.DIFFED] = function(vnode) {
        // Only log on component vnode
        if (typeof vnode.type === 'function') {
            const threadName = 'BackgroundThread';
            const displayName = (0,_utils_js__rspack_import_2.getDisplayName)(vnode.type);
            {
                var _console_alog, _console;
                const dom = vnode[_shared_render_constants_js__rspack_import_1.DOM];
                (_console_alog = (_console = console).alog) === null || _console_alog === void 0 ? void 0 : _console_alog.call(_console, `[${threadName} Component Render] name: ${displayName}, uniqID: ${dom === null || dom === void 0 ? void 0 : dom.type}, __id: ${dom === null || dom === void 0 ? void 0 : dom.__id}`);
            }
        }
        oldAfterDiff === null || oldAfterDiff === void 0 ? void 0 : oldAfterDiff(vnode);
    };
} //# sourceMappingURL=render.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/compat/componentIs.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/compat/lynxComponent.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ComponentFromReactRuntime: () => (ComponentFromReactRuntime),
  wrapWithLynxComponent: () => (wrapWithLynxComponent)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/debug.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  logDebug: () => (logDebug)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const logDebug = console.debug;
/**
 * @internal
 */  //# sourceMappingURL=debug.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/describeInvalidValue.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/printSnapshot.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  printSerializedSnapshotInstance: () => (printSerializedSnapshotInstance),
  printSnapshotInstance: () => (printSnapshotInstance),
  printSnapshotInstanceToString: () => (printSnapshotInstanceToString)
});
/* import */ var _debug_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/debug.js");
/* import */ var _snapshot_backgroundSnapshot_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/backgroundSnapshot.js");
/* import */ var _snapshot_snapshot_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



function printSnapshotInstance(instance, log) {
    const impl = (instance, level)=>{
        let msg = '';
        for(let i = 0; i < level; ++i)msg += '  ';
        msg += `| ${instance.__id}(${instance.type}): ${JSON.stringify(instance.__values)}`;
        (log !== null && log !== void 0 ? log : _debug_js__rspack_import_0.logDebug)(msg);
        for (const c of instance.childNodes)impl(c, level + 1);
    };
    impl(instance, 0);
}
function printSerializedSnapshotInstance(instance, log) {
    const impl = (instance, level)=>{
        var _instance_children;
        let msg = '';
        for(let i = 0; i < level; ++i)msg += '  ';
        msg += `| ${instance.id}(${instance.type}): ${JSON.stringify(instance.values)}`;
        (log !== null && log !== void 0 ? log : _debug_js__rspack_import_0.logDebug)(msg);
        for (const c of (_instance_children = instance.children) !== null && _instance_children !== void 0 ? _instance_children : [])impl(c, level + 1);
    };
    impl(instance, 0);
}
function printSnapshotInstanceToString(instance) {
    const logArr = [];
    if (instance instanceof _snapshot_snapshot_js__rspack_import_2.SnapshotInstance || instance instanceof _snapshot_backgroundSnapshot_js__rspack_import_1.BackgroundSnapshotInstance) printSnapshotInstance(instance, logArr.push.bind(logArr));
    else printSerializedSnapshotInstance(instance, logArr.push.bind(logArr));
    return logArr.join('\n');
} //# sourceMappingURL=printSnapshot.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/profileHooks.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initProfileHook: () => (initProfileHook)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _shared_render_constants_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
/* import */ var _utils_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* import */ var _lifecycle_patch_commit_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/commit.js");
/* import */ var _lifecycle_patch_snapshotPatch_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.





const format = (val)=>{
    if (typeof val === 'function') return val.toString();
    return val;
};
function safeJsonStringify(val) {
    const seen = new WeakSet();
    return JSON.stringify(val, function(_key, value) {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) return '[Unserializable: Circular]';
            seen.add(value);
        }
        return value;
    });
}
function buildSetStateProfileMarkArgs(type, currentState, nextState) {
    const EMPTY_OBJ = {};
    const currentStateObj = currentState !== null && currentState !== void 0 ? currentState : EMPTY_OBJ;
    const nextStateObj = nextState !== null && nextState !== void 0 ? nextState : EMPTY_OBJ;
    return {
        componentName: type && typeof type === 'function' ? (0,_utils_js__rspack_import_2.getDisplayName)(type) : 'Unknown',
        'current state keys': JSON.stringify(Object.keys(currentStateObj)),
        'next state keys': JSON.stringify(Object.keys(nextStateObj)),
        'changed (shallow diff) state keys': JSON.stringify(Object.keys(nextStateObj).filter((key)=>currentStateObj[key] !== nextStateObj[key])),
        currentValue: safeJsonStringify(format(currentState)),
        nextValue: safeJsonStringify(format(nextState))
    };
}
function initProfileHook() {
    // early-exit if required profiling APIs are unavailable
    let p;
    /* v8 ignore start */ if (!(p = lynx.performance) || typeof p.profileStart !== 'function' || typeof p.profileEnd !== 'function' || typeof p.profileMark !== 'function' || typeof p.profileFlowId !== 'function') return;
    /* v8 ignore stop */ const profileStart = p.profileStart.bind(p);
    const profileEnd = p.profileEnd.bind(p);
    const profileMark = p.profileMark.bind(p);
    const profileFlowId = p.profileFlowId.bind(p);
    // for each setState call, we will add a profiling trace and
    // attach a flowId to the component instance.
    // This allows us to trace the flow of its diffing, committing and patching.
    {
        const sFlowID = Symbol('FLOW_ID');
        (0,_utils_js__rspack_import_2.hook)(preact__rspack_import_0.Component.prototype, 'setState', function(old, state, callback) {
            old === null || old === void 0 ? void 0 : old.call(this, state, callback);
            if (this[_shared_render_constants_js__rspack_import_1.DIRTY]) {
                var _sFlowID, _this_;
                const type = this[_shared_render_constants_js__rspack_import_1.VNODE].type;
                const isClassComponent = typeof type === 'function' && 'prototype' in type && 'render' in type.prototype;
                if (isClassComponent) profileMark('ReactLynx::setState', {
                    flowId: (_this_ = this[_sFlowID = sFlowID]) !== null && _this_ !== void 0 ? _this_ : this[_sFlowID] = profileFlowId(),
                    args: buildSetStateProfileMarkArgs(type, this.state, this[_shared_render_constants_js__rspack_import_1.NEXT_STATE])
                });
            }
        });
        (0,_utils_js__rspack_import_2.hook)(preact__rspack_import_0.options, _shared_render_constants_js__rspack_import_1.DIFF2, (old, vnode, oldVNode)=>{
            // We only add profiling trace for Component
            if (typeof vnode.type === 'function') {
                const profileOptions = {};
                {
                    const c = oldVNode[_shared_render_constants_js__rspack_import_1.COMPONENT];
                    if (c) {
                        const flowId = c[sFlowID];
                        delete c[sFlowID];
                        if (flowId) {
                            var _globalPatchOptions, _flowIds;
                            (_flowIds = (_globalPatchOptions = _lifecycle_patch_commit_js__rspack_import_3.globalPatchOptions).flowIds) !== null && _flowIds !== void 0 ? _flowIds : _globalPatchOptions.flowIds = [];
                            _lifecycle_patch_commit_js__rspack_import_3.globalPatchOptions.flowIds.push(flowId);
                            profileOptions.flowId = flowId;
                        }
                    }
                }
                profileStart(`ReactLynx::diff::${/* #__INLINE__ */ (0,_utils_js__rspack_import_2.getDisplayName)(vnode.type)}`, profileOptions);
            }
            old === null || old === void 0 ? void 0 : old(vnode, oldVNode);
        });
        (0,_utils_js__rspack_import_2.hook)(preact__rspack_import_0.options, _shared_render_constants_js__rspack_import_1.DIFFED, (old, vnode)=>{
            {
                var _vnode_COMPONENT;
                const hooks = (_vnode_COMPONENT = vnode[_shared_render_constants_js__rspack_import_1.COMPONENT]) === null || _vnode_COMPONENT === void 0 ? void 0 : _vnode_COMPONENT[_shared_render_constants_js__rspack_import_1.HOOKS];
                const hookList = hooks === null || hooks === void 0 ? void 0 : hooks[_shared_render_constants_js__rspack_import_1.LIST];
                if (Array.isArray(hookList)) hookList.forEach((hookState, hookIdx)=>{
                    hookState['internalNextValue'] = hookState[_shared_render_constants_js__rspack_import_1.NEXT_VALUE];
                    // define a setter for __N to track the next value of the hook
                    Object.defineProperty(hookState, _shared_render_constants_js__rspack_import_1.NEXT_VALUE, {
                        get: ()=>hookState['internalNextValue'],
                        set: (value)=>{
                            if (Array.isArray(value)) {
                                var _component, _sFlowID, _;
                                // hookState[VALUE] is [state, dispatch]
                                const currentValueTuple = hookState[_shared_render_constants_js__rspack_import_1.VALUE];
                                const currentValue = currentValueTuple[0];
                                const [nextValue] = value;
                                const component = hookState[_shared_render_constants_js__rspack_import_1.COMPONENT];
                                if (!component) {
                                    hookState['internalNextValue'] = value;
                                    return;
                                }
                                const type = component[_shared_render_constants_js__rspack_import_1.VNODE].type;
                                const flowId = (_ = (_component = component)[_sFlowID = sFlowID]) !== null && _ !== void 0 ? _ : _component[_sFlowID] = profileFlowId();
                                profileMark('ReactLynx::hooks::setState', {
                                    flowId,
                                    args: {
                                        hookIdx: String(hookIdx),
                                        ...buildSetStateProfileMarkArgs(type, currentValue, nextValue)
                                    }
                                });
                            }
                            hookState['internalNextValue'] = value;
                        },
                        configurable: true
                    });
                });
            }
            if (typeof vnode.type === 'function') profileEnd(); // for options[DIFF2]
            old === null || old === void 0 ? void 0 : old(vnode);
        });
        (0,_utils_js__rspack_import_2.hook)(preact__rspack_import_0.options, _shared_render_constants_js__rspack_import_1.COMMIT, (old, vnode, commitQueue)=>{
            profileStart('ReactLynx::commit', {
                ..._lifecycle_patch_commit_js__rspack_import_3.globalPatchOptions.flowIds ? {
                    flowId: _lifecycle_patch_commit_js__rspack_import_3.globalPatchOptions.flowIds["0"],
                    flowIds: _lifecycle_patch_commit_js__rspack_import_3.globalPatchOptions.flowIds
                } : {}
            });
            old === null || old === void 0 ? void 0 : old(vnode, commitQueue);
            profileEnd();
        });
    }
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
    {
        const sPatchLength = Symbol('PATCH_LENGTH');
        (0,_utils_js__rspack_import_2.hook)(preact__rspack_import_0.options, _shared_render_constants_js__rspack_import_1.DIFF, (old, vnode)=>{
            if (typeof vnode.type === 'function' && _lifecycle_patch_snapshotPatch_js__rspack_import_4.__globalSnapshotPatch) vnode[sPatchLength] = _lifecycle_patch_snapshotPatch_js__rspack_import_4.__globalSnapshotPatch.length;
            old === null || old === void 0 ? void 0 : old(vnode);
        });
        (0,_utils_js__rspack_import_2.hook)(preact__rspack_import_0.options, _shared_render_constants_js__rspack_import_1.DIFFED, (old, vnode)=>{
            if (typeof vnode.type === 'function') {
                const patchLength = vnode[sPatchLength];
                delete vnode[sPatchLength];
                if (_lifecycle_patch_snapshotPatch_js__rspack_import_4.__globalSnapshotPatch && patchLength === _lifecycle_patch_snapshotPatch_js__rspack_import_4.__globalSnapshotPatch.length) profileMark('ReactLynx::diffFinishNoPatch', {
                    args: {
                        componentName: /* #__INLINE__ */ (0,_utils_js__rspack_import_2.getDisplayName)(vnode.type)
                    }
                });
            }
            old === null || old === void 0 ? void 0 : old(vnode);
        });
    }
} //# sourceMappingURL=profileHooks.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/vnodeSource.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearSnapshotVNodeSource: () => (clearSnapshotVNodeSource),
  getSnapshotVNodeSource: () => (getSnapshotVNodeSource),
  moveSnapshotVNodeSource: () => (moveSnapshotVNodeSource),
  setupVNodeSourceHook: () => (setupVNodeSourceHook)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _shared_render_constants_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/processGesture.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  processGesture: () => (processGesture),
  retainGestureWorkletCtx: () => (retainGestureWorkletCtx)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _types_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/types.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/processGestureBagkround.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  prepareGestureForCommit: () => (prepareGestureForCommit)
});
/* import */ var _types_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/types.js");
/* import */ var _worklet_ctx_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ctx.js");


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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/types.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/destroy.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  destroyBackground: () => (destroyBackground)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _root_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* import */ var _event_delayEvents_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/delayEvents.js");
/* import */ var _event_delayLifecycleEvents_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/delayLifecycleEvents.js");
/* import */ var _patch_commit_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/commit.js");
/* import */ var _shared_profile_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/delayEvents.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/delayLifecycleEvents.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/jsReady.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearJSReadyEventIdSwap: () => (clearJSReadyEventIdSwap),
  isJSReady: () => (isJSReady),
  jsReady: () => (jsReady),
  jsReadyEventIdSwap: () => (jsReadyEventIdSwap),
  resetJSReady: () => (resetJSReady)
});
/* import */ var _root_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* import */ var _shared_profile_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _lifecycle_constant_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/isRendering.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isRendering: () => (isRendering)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _shared_render_constants_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
/* import */ var _utils_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



const isRendering = /* @__PURE__ */ {
    value: false
};
const setIsRendering = ()=>{
    isRendering.value = true;
    // Make sure `isRendering` is set to false even if an error is thrown during rendering
    (0,_utils_js__rspack_import_2.lynxQueueMicrotask)(()=>{
        isRendering.value = false;
    });
};
const onRenderHook = (old, ...args)=>{
    /* v8 ignore next */ if (old) old(...args);
    setIsRendering();
};
(0,_utils_js__rspack_import_2.hook)(preact__rspack_import_0.options, _shared_render_constants_js__rspack_import_1.RENDER_COMPONENT, onRenderHook);
(0,_utils_js__rspack_import_2.hook)(preact__rspack_import_0.options, _shared_render_constants_js__rspack_import_1.ROOT, onRenderHook); //# sourceMappingURL=isRendering.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/commit.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _globalState_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/globalState.js");
/* import */ var _snapshotPatch_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
/* import */ var _core_commit_context_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/commit-context.js");
/* import */ var _core_reload_version_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/reload-version.js");
/* import */ var _shared_profile_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _shared_render_constants_js__rspack_import_6 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
/* import */ var _utils_js__rspack_import_7 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* import */ var _lifecycle_constant_js__rspack_import_8 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js");
/* import */ var _lynx_performance_js__rspack_import_9 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/performance.js");
/* import */ var _snapshot_backgroundSnapshot_js__rspack_import_10 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/backgroundSnapshot.js");
/* import */ var _snapshot_ref_js__rspack_import_11 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/ref.js");
/* import */ var _worklet_call_delayedRunOnMainThreadData_js__rspack_import_12 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/delayedRunOnMainThreadData.js");
/* import */ var _worklet_ref_updateInitValue_js__rspack_import_13 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/updateInitValue.js");
/* import */ var _isRendering_js__rspack_import_14 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/isRendering.js");
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
function takeGlobalPatchOptions() {
    const res = globalPatchOptions;
    globalPatchOptions = {};
    return res;
}
/**
 * Replaces Preact's default commit hook with our custom implementation
 */ function replaceCommitHook() {
    (0,_utils_js__rspack_import_7.hook)(preact__rspack_import_0.options, _shared_render_constants_js__rspack_import_6.COMMIT, (originalPreactCommit, vnode, commitQueue)=>{
        _isRendering_js__rspack_import_14.isRendering.value = false;
        // Mark the end of virtual DOM diffing phase for performance tracking
        (0,_lynx_performance_js__rspack_import_9.markTimingLegacy)('updateDiffVdomEnd');
        (0,_lynx_performance_js__rspack_import_9.markTiming)('diffVdomEnd');
        const backgroundSnapshotInstancesToRemove = _globalState_js__rspack_import_1.globalBackgroundSnapshotInstancesToRemove;
        (0,_globalState_js__rspack_import_1.setGlobalBackgroundSnapshotInstancesToRemove)([]);
        const commitTaskId = genCommitTaskId();
        // Register the commit task
        globalCommitTaskMap.set(commitTaskId, ()=>{
            if (backgroundSnapshotInstancesToRemove.length) setTimeout(()=>{
                backgroundSnapshotInstancesToRemove.forEach((id)=>{
                    var _backgroundSnapshotInstanceManager_values_get;
                    (_backgroundSnapshotInstanceManager_values_get = _snapshot_backgroundSnapshot_js__rspack_import_10.backgroundSnapshotInstanceManager.values.get(id)) === null || _backgroundSnapshotInstanceManager_values_get === void 0 ? void 0 : _backgroundSnapshotInstanceManager_values_get.tearDown();
                });
            }, 10000);
        });
        (0,_worklet_ref_updateInitValue_js__rspack_import_13.sendMTRefInitValueToMainThread)();
        // Collect patches for this update
        const snapshotPatch = (0,_snapshotPatch_js__rspack_import_2.takeGlobalSnapshotPatch)();
        const flushOptions = (0,_core_commit_context_js__rspack_import_3.takeGlobalFlushOptions)();
        const patchOptions = takeGlobalPatchOptions();
        if (!snapshotPatch) {
            // before hydration, skip patch
            (0,_snapshot_ref_js__rspack_import_11.applyQueuedRefs)();
            originalPreactCommit === null || originalPreactCommit === void 0 ? void 0 : originalPreactCommit(vnode, commitQueue);
            return;
        }
        const patch = {
            id: commitTaskId
        };
        // TODO: check all fields in `flushOptions` from runtime3
        if (snapshotPatch.length) patch.snapshotPatch = snapshotPatch;
        const patchList = {
            patchList: [
                patch
            ]
        };
        if (!(0,_utils_js__rspack_import_7.isEmptyObject)(flushOptions)) patchList.flushOptions = flushOptions;
        if (_worklet_call_delayedRunOnMainThreadData_js__rspack_import_12.delayedRunOnMainThreadData.length) patchList.delayedRunOnMainThreadData = (0,_worklet_call_delayedRunOnMainThreadData_js__rspack_import_12.takeDelayedRunOnMainThreadData)();
        const obj = commitPatchUpdate(patchList, patchOptions);
        // Send the update to the native layer
        lynx.getNativeApp().callLepusMethod(_lifecycle_constant_js__rspack_import_8.LifecycleConstant.patchUpdate, obj, ()=>{
            const commitTask = globalCommitTaskMap.get(commitTaskId);
            if (commitTask) {
                commitTask();
                globalCommitTaskMap.delete(commitTaskId);
            }
        });
        (0,_snapshot_ref_js__rspack_import_11.applyQueuedRefs)();
        originalPreactCommit === null || originalPreactCommit === void 0 ? void 0 : originalPreactCommit(vnode, commitQueue);
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
    if (true) (0,_shared_profile_js__rspack_import_5.profileStart)('ReactLynx::commitChanges');
    (0,_lynx_performance_js__rspack_import_9.markTiming)('packChangesStart');
    const obj = {
        data: JSON.stringify(patchList),
        patchOptions: {
            ...patchOptions,
            reloadVersion: (0,_core_reload_version_js__rspack_import_4.getReloadVersion)()
        }
    };
    (0,_lynx_performance_js__rspack_import_9.markTiming)('packChangesEnd');
    if (_lynx_performance_js__rspack_import_9.globalPipelineOptions) {
        obj.patchOptions.pipelineOptions = _lynx_performance_js__rspack_import_9.globalPipelineOptions;
        (0,_lynx_performance_js__rspack_import_9.setPipeline)(undefined);
    }
    if (true) (0,_shared_profile_js__rspack_import_5.profileEnd)();
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/error.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addCtxNotFoundEventListener: () => (addCtxNotFoundEventListener),
  ctxNotFoundType: () => (ctxNotFoundType),
  removeCtxNotFoundEventListener: () => (removeCtxNotFoundEventListener),
  reportCtxNotFound: () => (reportCtxNotFound),
  sendCtxNotFoundEventToBackground: () => (sendCtxNotFoundEventToBackground)
});
/* import */ var _snapshot_backgroundSnapshot_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/backgroundSnapshot.js");
/* import */ var _snapshot_definition_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/definition.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/globalState.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/isMainThreadHydrating.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isMainThreadHydrating: () => (isMainThreadHydrating),
  setMainThreadHydrating: () => (setMainThreadHydrating)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let isMainThreadHydrating = false;
function setMainThreadHydrating(isHydrating) {
    if (!isHydrating && isMainThreadHydrating) (0,_lynx_js_react_worklet_runtime_bindings__rspack_import_0.onHydrationFinished)();
    isMainThreadHydrating = isHydrating;
} //# sourceMappingURL=isMainThreadHydrating.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/ref/delay.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RefProxy: () => (RefProxy),
  runDelayedUiOps: () => (runDelayedUiOps),
  shouldDelayUiOps: () => (shouldDelayUiOps)
});
/* import */ var _core_ref_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/ref.js");
/* import */ var _snapshot_snapshotInstanceHydrationMap_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshotInstanceHydrationMap.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/reload.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  reloadBackground: () => (reloadBackground),
  reloadMainThread: () => (reloadMainThread)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _destroy_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/destroy.js");
/* import */ var _render_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/render.js");
/* import */ var _core_reload_version_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/reload-version.js");
/* import */ var _root_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* import */ var _shared_profile_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _utils_js__rspack_import_6 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* import */ var _lifecycle_constant_js__rspack_import_7 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js");
/* import */ var _list_pendingListUpdates_js__rspack_import_8 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/pendingListUpdates.js");
/* import */ var _renderToOpcodes_hydrate_js__rspack_import_9 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/hydrate.js");
/* import */ var _snapshot_definition_js__rspack_import_10 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/definition.js");
/* import */ var _snapshot_snapshot_js__rspack_import_11 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
/* import */ var _snapshot_workletRef_js__rspack_import_12 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletRef.js");
/* import */ var _event_jsReady_js__rspack_import_13 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/jsReady.js");
/* import */ var _patch_snapshotPatch_js__rspack_import_14 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
/* import */ var _ref_delay_js__rspack_import_15 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/ref/delay.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/render.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  renderMainThread: () => (renderMainThread)
});
/* import */ var _root_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* import */ var _shared_profile_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _renderToOpcodes_index_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/index.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/list.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearListGlobal: () => (clearListGlobal),
  componentAtIndexFactory: () => (componentAtIndexFactory),
  enqueueComponentFactory: () => (enqueueComponentFactory),
  gRecycleMap: () => (gRecycleMap),
  gSignMap: () => (gSignMap)
});
/* import */ var _utils_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* import */ var _lifecycle_constant_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js");
/* import */ var _snapshot_workletRef_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletRef.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/listUpdateInfo.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ListUpdateInfoRecording: () => (ListUpdateInfoRecording)
});
/* import */ var _list_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/list.js");
/* import */ var _shared_profile_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _renderToOpcodes_hydrate_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/hydrate.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/pendingListUpdates.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/component.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _performance_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/performance.js");
/* import */ var _core_commit_context_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/commit-context.js");
/* import */ var _shared_render_constants_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/* eslint-disable */ 



{
    function reportRefDeprecationError(fnName, newFnName) {
        if (true) lynx.reportError(new Error(`${fnName} is deprecated and has different behavior in ReactLynx 3.0, please use ref or ${newFnName} instead.`));
    }
    const __Component = preact__rspack_import_0.Component;
    __Component.prototype._reactAppInstance = lynxCoreInject.tt;
    __Component.prototype.getNodeRef = function(a, b) {
        reportRefDeprecationError('getNodeRef', 'lynx.createSelectorQuery');
        // @ts-expect-error hack lynx-kernel
        return lynxCoreInject.tt._reactLynx.ReactComponent.prototype.getNodeRef.call({
            _type: '',
            // @ts-expect-error hack lynx-kernel
            _nativeApp: lynxCoreInject.tt._nativeApp,
            // @ts-expect-error hack lynx-kernel
            _uiModule: lynxCoreInject.tt._nativeApp.nativeModuleProxy.LynxUIMethodModule,
            _reactAppInstance: lynxCoreInject.tt
        }, a, b);
    };
    __Component.prototype.getNodeRefFromRoot = function(a) {
        reportRefDeprecationError('getNodeRefFromRoot', 'lynx.createSelectorQuery');
        // @ts-expect-error hack lynx-kernel
        return lynxCoreInject.tt._reactLynx.ReactComponent.prototype.getNodeRefFromRoot.call({
            _type: '',
            // @ts-expect-error hack lynx-kernel
            _nativeApp: lynxCoreInject.tt._nativeApp,
            // @ts-expect-error hack lynx-kernel
            _uiModule: lynxCoreInject.tt._nativeApp.nativeModuleProxy.LynxUIMethodModule,
            _reactAppInstance: lynxCoreInject.tt
        }, a);
    };
    __Component.prototype.registerModule = function(name, module) {
        this._reactAppInstance.registerModule(name, module);
    };
    __Component.prototype.getJSModule = function(name) {
        return this._reactAppInstance.getJSModule(name);
    };
    __Component.prototype.addGlobalEventListener = function(eventName, callback, context) {
        return this._reactAppInstance.getJSModule('GlobalEventEmitter').addListener(eventName, callback, context);
    };
    __Component.prototype.getElementById = function(id) {
        reportRefDeprecationError('getElementById', 'lynx.getElementById');
        return lynx.getElementById(id);
    };
    __Component.prototype.GlobalEventEmitter = lynxCoreInject.tt.GlobalEventEmitter;
    __Component.prototype.createSelectorQuery = function() {
        reportRefDeprecationError('createSelectorQuery on component instance', 'lynx.createSelectorQuery');
        return lynx.createSelectorQuery();
    };
    const oldSetState = __Component.prototype.setState;
    __Component.prototype.setState = function(state, callback) {
        oldSetState.call(this, state, callback);
        // @ts-ignore
        const timingFlag = this[_shared_render_constants_js__rspack_import_3.NEXT_STATE][_performance_js__rspack_import_1.PerfSpecificKey];
        if (timingFlag) {
            _core_commit_context_js__rspack_import_2.globalCommitContext.flushOptions.__lynx_timing_flag = timingFlag;
            (0,_performance_js__rspack_import_1.markTimingLegacy)('updateSetStateTrigger', timingFlag);
            this[_shared_render_constants_js__rspack_import_3.NEXT_STATE][_performance_js__rspack_import_1.PerfSpecificKey] = '';
        }
    };
} //# sourceMappingURL=component.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/dynamic-js.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __dynamicImport: () => (__dynamicImport),
  loadDynamicJS: () => (loadDynamicJS)
});
/* import */ var _lazy_bundle_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/lazy-bundle.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function loadDynamicJS(url) {
    return new Promise((resolve, reject)=>{
        lynx.requireModuleAsync(url, (err, data)=>{
            if (err) reject(err);
            else resolve(data);
        });
    });
}
function __dynamicImport(url, options) {
    var _options_with;
    const t = options === null || options === void 0 ? void 0 : (_options_with = options.with) === null || _options_with === void 0 ? void 0 : _options_with.type;
    if (t === 'component' || t === 'tsx' || t === 'jsx') return (0,_lazy_bundle_js__rspack_import_0.loadLazyBundle)(url);
    else return loadDynamicJS(url);
} //# sourceMappingURL=dynamic-js.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/element.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createElement: () => (createElement)
});
/* import */ var preact_compat__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * export to users, and in framework would use preact createElement directly
 */ const createElement = function(type, props, ...rest) {
    const _baseCreateElement = preact_compat__rspack_import_0.createElement;
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/env.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setupLynxEnv: () => (setupLynxEnv)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function setupLynxEnv() {
    {
        const { initData, updateData } = lynxCoreInject.tt._params;
        lynx.__initData = {
            ...initData,
            ...updateData
        };
        lynx.registerDataProcessors = function() {};
    }
} //# sourceMappingURL=env.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/lazy-bundle.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
            const resolver = withSyncResolvers();
            const callback = (result)=>{
                const { code, detail } = result;
                if (code === 0) {
                    const { schema } = detail;
                    const exports = lynxCoreInject.tt.getDynamicComponentExports(schema);
                    // `code === 0` means that the lazy bundle has been successfully parsed. However,
                    // its javascript files may still fail to run, which would prevent the retrieval of the exports object.
                    if (exports) {
                        resolver.resolve(exports);
                        return;
                    }
                }
                const e = new Error('Lazy bundle load failed, schema: ' + result.detail.schema);
                // ES5 does not support new Error('message', { cause: 'detail' })
                // So we set cause using `.cause` assignment
                e.cause = JSON.stringify(result);
                resolver.reject(e);
            };
            if (typeof lynx.QueryComponent === 'function') lynx.QueryComponent(source, callback);
            else lynx.getNativeLynx().QueryComponent(source, callback);
            if (resolver.result !== null) {
                const p = Promise.resolve(resolver.result);
                p.then = makeSyncThen(resolver.result);
                return p;
            } else if (resolver.error === null) return new Promise((_resolve, _reject)=>{
                resolver.resolve = _resolve;
                resolver.reject = _reject;
            });
            else return Promise.reject(resolver.error);
        }
        throw new Error('unreachable');
    }
    return loadLazyBundle;
})();
function withSyncResolvers() {
    'background-only';
    const resolver = {
        resolve: (result)=>{
            resolver.result = result;
        },
        reject: (error)=>{
            resolver.error = error;
        },
        result: null,
        error: null
    };
    return resolver;
} //# sourceMappingURL=lazy-bundle.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/nodesRef.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  serializeNodesRef: () => (serializeNodesRef)
});
/* import */ var _lifecycle_ref_delay_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/ref/delay.js");

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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/performance.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _shared_render_constants_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
/* import */ var _utils_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* import */ var _lifecycle_patch_snapshotPatch_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
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
    const helper = ()=>{
        // check `__globalSnapshotPatch` to make sure this only runs after hydrate
        if (_lifecycle_patch_snapshotPatch_js__rspack_import_3.__globalSnapshotPatch) {
            if (!globalPipelineOptions) {
                beginPipeline(false, PipelineOrigins.updateTriggeredByBts);
                markTiming('diffVdomStart', true);
            }
            if (shouldMarkDiffVdomStart) markTimingLegacy('updateDiffVdomStart');
        }
    };
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/portals.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearPendingPortalInsertBefore: () => (/* reexport safe */ _portalsPending_js__rspack_import_2.clearPendingPortalInsertBefore),
  createPortal: () => (createPortal)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _nodesRef_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/nodesRef.js");
/* import */ var _portalsPending_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/portalsPending.js");
/* import */ var _shared_render_constants_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
/* import */ var _lifecycle_patch_globalState_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/globalState.js");
/* import */ var _lifecycle_patch_snapshotPatch_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.







function ContextProvider(props) {
    this.getChildContext = ()=>props.context;
    return props.children;
}
/**
 * Portal component
 *
 * TODO: use createRoot() instead of fake root
 */ function Portal(props) {
    const _this = this;
    const container = props._container;
    _this.componentWillUnmount = function() {
        (0,preact__rspack_import_0.render)(null, _this._temp);
        delete _this._temp;
        delete _this._container;
    };
    // When we change container we should clear our old container and
    // indicate a new mount.
    if (_this._container && _this._container !== container) _this.componentWillUnmount();
    if (!_this._temp) {
        // Ensure the element has a mask for useId invocations
        let root = _this[_shared_render_constants_js__rspack_import_3.VNODE];
        while(root !== null && !root[_shared_render_constants_js__rspack_import_3.MASK] && root[_shared_render_constants_js__rspack_import_3.PARENT] !== null)root = root[_shared_render_constants_js__rspack_import_3.PARENT];
        _this._container = container;
        const fakeRoot = {
            nodeType: 1,
            parentNode: container,
            childNodes: [],
            [_shared_render_constants_js__rspack_import_3.CHILDREN]: {
                [_shared_render_constants_js__rspack_import_3.MASK]: root[_shared_render_constants_js__rspack_import_3.MASK]
            },
            insertBefore (child, before) {
                // Track the child in our local children list AND wire up the BSI's
                // `__parent` pointer to the fakeRoot, regardless of pre-/post-hydrate
                // state. preact's unmount path (`removeNode` in diff/index.js) walks
                // `child.parentNode.removeChild(child)`, not the parent VNode — so
                // without `__parent` set, preact's later unmount silently no-ops and
                // our `removeChild` here never fires.
                this.childNodes.push(child);
                child.__parent = this;
                if (!_lifecycle_patch_snapshotPatch_js__rspack_import_5.__globalSnapshotPatch) {
                    // Pre-hydrate: queue for replay in `clearPendingPortalInsertBefore`.
                    _portalsPending_js__rspack_import_2.pendingInsertBefore.push(_this._container, child, before);
                    return;
                }
                // Post-hydrate: `_this._container` is always set here (we assigned
                // it just above when creating `fakeRoot`), and the global buffer is
                // initialized — emit directly.
                _lifecycle_patch_snapshotPatch_js__rspack_import_5.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_5.SnapshotOperation.nodesRefInsertBefore, (0,_nodesRef_js__rspack_import_1.serializeNodesRef)(_this._container), child.__id, before === null || before === void 0 ? void 0 : before.__id);
            },
            removeChild (child) {
                const idx = this.childNodes.indexOf(child);
                if (idx >= 0) this.childNodes.splice(idx, 1);
                child.__parent = null;
                // Mirror `BackgroundSnapshotInstance.removeChild`'s bookkeeping:
                // mark the subtree as removed and queue its root id for commit-time
                // `tearDown` (which traverses + deletes from
                // `backgroundSnapshotInstanceManager`). Without this, the portaled
                // BSI subtree leaks across mount/unmount cycles. Same in pre- and
                // post-hydrate paths because the BSI was registered in the manager
                // at construction time regardless of hydration state.
                child.__removed_from_tree = true;
                _lifecycle_patch_globalState_js__rspack_import_4.globalBackgroundSnapshotInstancesToRemove.push(child.__id);
                if (_lifecycle_patch_snapshotPatch_js__rspack_import_5.__globalSnapshotPatch) {
                    _lifecycle_patch_snapshotPatch_js__rspack_import_5.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_5.SnapshotOperation.nodesRefRemoveChild, (0,_nodesRef_js__rspack_import_1.serializeNodesRef)(_this._container), child.__id);
                    return;
                }
                // Pre-hydrate cancellation: an unmount that fires before hydrate
                // would otherwise be silently dropped (the global patch buffer is
                // `undefined`), and the still-pending `nodesRefInsertBefore` from
                // earlier `insertBefore` would resurrect this child during the
                // queue replay. Drain the matching tuple from the queue.
                for(let i = 0; i < _portalsPending_js__rspack_import_2.pendingInsertBefore.length; i += 3)if (_portalsPending_js__rspack_import_2.pendingInsertBefore[i + 1] === child) {
                    _portalsPending_js__rspack_import_2.pendingInsertBefore.splice(i, 3);
                    break;
                }
            }
        };
        _this._temp = fakeRoot;
    }
    // Render our wrapping element into temp.
    (0,preact__rspack_import_0.render)((0,preact__rspack_import_0.createElement)(ContextProvider, {
        context: _this.context
    }, props[_shared_render_constants_js__rspack_import_3.VNODE]), _this._temp);
    return;
}
/**
 * Create a `Portal` to continue rendering the vnode tree at a different DOM node.
 *
 * @public
 */ function createPortal(vnode, container) {
    const el = (0,preact__rspack_import_0.createElement)(Portal, {
        [_shared_render_constants_js__rspack_import_3.VNODE]: vnode,
        _container: container
    });
    el.containerInfo = container;
    return el;
} //# sourceMappingURL=portals.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/portalsPending.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearPendingPortalInsertBefore: () => (clearPendingPortalInsertBefore),
  pendingInsertBefore: () => (pendingInsertBefore)
});
/* import */ var _nodesRef_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/nodesRef.js");
/* import */ var _lifecycle_patch_snapshotPatch_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
/* import */ var _snapshot_reconstructInstanceTree_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/reconstructInstanceTree.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/runWithForce.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runWithForce: () => (runWithForce)
});
/* import */ var _core_forceRootRender_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/forceRootRender.js");
/* import */ var _root_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");


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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/suspense.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Suspense: () => (Suspense)
});
/* import */ var preact_compat__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
/* import */ var preact_hooks__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");
/* import */ var _lifecycle_patch_commit_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/commit.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



const Suspense = ({ children, fallback })=>{
    const __createElement = preact_compat__rspack_import_0.createElement;
    const childrenRef = (0,preact_hooks__rspack_import_1.useRef)();
    const newChildren = __createElement('wrapper', {
        ref: (bsi)=>{
            if (bsi) childrenRef.current = bsi;
        },
        $0: children
    });
    const newFallback = __createElement('wrapper', {
        ref: (bsi)=>{
            if (bsi && childrenRef.current) {
                const i = _lifecycle_patch_commit_js__rspack_import_2.globalBackgroundSnapshotInstancesToRemove.indexOf(childrenRef.current.__id);
                if (i !== -1) _lifecycle_patch_commit_js__rspack_import_2.globalBackgroundSnapshotInstancesToRemove.splice(i, 1);
                childrenRef.current = undefined;
            }
        },
        $0: fallback
    });
    return __createElement(preact_compat__rspack_import_0.Suspense, {
        fallback: newFallback
    }, newChildren);
}; //# sourceMappingURL=suspense.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/tt.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  flushDelayedLifecycleEvents: () => (flushDelayedLifecycleEvents),
  injectTt: () => (injectTt),
  runWithForce: () => (/* reexport safe */ _runWithForce_js__rspack_import_2.runWithForce)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _performance_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/performance.js");
/* import */ var _runWithForce_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/runWithForce.js");
/* import */ var _core_globalProps_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/globalProps.js");
/* import */ var _core_lynx_update_data_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/lynx-update-data.js");
/* import */ var _root_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* import */ var _shared_profile_js__rspack_import_6 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _shared_render_constants_js__rspack_import_7 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
/* import */ var _debug_printSnapshot_js__rspack_import_8 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/printSnapshot.js");
/* import */ var _debug_vnodeSource_js__rspack_import_9 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/vnodeSource.js");
/* import */ var _lifecycle_constant_js__rspack_import_10 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js");
/* import */ var _lifecycle_destroy_js__rspack_import_11 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/destroy.js");
/* import */ var _lifecycle_event_delayEvents_js__rspack_import_12 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/delayEvents.js");
/* import */ var _lifecycle_event_delayLifecycleEvents_js__rspack_import_13 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/delayLifecycleEvents.js");
/* import */ var _lifecycle_patch_commit_js__rspack_import_14 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/commit.js");
/* import */ var _lifecycle_patch_error_js__rspack_import_15 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/error.js");
/* import */ var _lifecycle_ref_delay_js__rspack_import_16 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/ref/delay.js");
/* import */ var _lifecycle_reload_js__rspack_import_17 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/reload.js");
/* import */ var _snapshot_backgroundSnapshot_js__rspack_import_18 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/backgroundSnapshot.js");
/* import */ var _worklet_call_delayedRunOnMainThreadData_js__rspack_import_19 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/delayedRunOnMainThreadData.js");
/* import */ var _worklet_destroy_js__rspack_import_20 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/destroy.js");
/* import */ var _worklet_ref_updateInitValue_js__rspack_import_21 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/updateInitValue.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.























function injectTt() {
    const tt = lynxCoreInject.tt;
    tt.OnLifecycleEvent = onLifecycleEvent;
    tt.publishEvent = _lifecycle_event_delayEvents_js__rspack_import_12.delayedPublishEvent;
    tt.publicComponentEvent = delayedPublicComponentEvent;
    tt.callDestroyLifetimeFun = ()=>{
        (0,_lifecycle_patch_error_js__rspack_import_15.removeCtxNotFoundEventListener)();
        (0,_worklet_destroy_js__rspack_import_20.destroyWorklet)();
        (0,_lifecycle_destroy_js__rspack_import_11.destroyBackground)();
    };
    tt.updateGlobalProps = updateGlobalProps;
    tt.updateCardData = _core_lynx_update_data_js__rspack_import_4.updateCardData;
    tt.onAppReload = _lifecycle_reload_js__rspack_import_17.reloadBackground;
    tt.processCardConfig = ()=>{
    // used to updateTheme, no longer rely on this function
    };
}
function onLifecycleEvent([type, data]) {
    const hasRootRendered = _shared_render_constants_js__rspack_import_7.CHILDREN in _root_js__rspack_import_5.__root;
    // never called `render(<App/>, __root)`
    // happens if user call `root.render()` async
    if (!hasRootRendered) {
        (0,_lifecycle_event_delayLifecycleEvents_js__rspack_import_13.delayLifecycleEvent)(type, data);
        return;
    }
    if (true) (0,_shared_profile_js__rspack_import_6.profileStart)(`OnLifecycleEvent::${type}`);
    try {
        onLifecycleEventImpl(type, data);
    } catch (e) {
        lynx.reportError(e);
    }
    if (true) (0,_shared_profile_js__rspack_import_6.profileEnd)();
}
function onLifecycleEventImpl(type, data) {
    switch(type){
        case _lifecycle_constant_js__rspack_import_10.LifecycleConstant.firstScreen:
            {
                var _console_alog, _console;
                let processErr;
                try {
                    (0,preact__rspack_import_0.process)();
                } catch (e) {
                    processErr = e;
                }
                const { root: lepusSide, jsReadyEventIdSwap } = data;
                if (true) (0,_shared_profile_js__rspack_import_6.profileStart)('ReactLynx::hydrate');
                (0,_performance_js__rspack_import_1.beginPipeline)(true, _performance_js__rspack_import_1.PipelineOrigins.reactLynxHydrate, _performance_js__rspack_import_1.PerformanceTimingFlags.reactLynxHydrate);
                (0,_performance_js__rspack_import_1.markTiming)('hydrateParseSnapshotStart');
                const before = JSON.parse(lepusSide);
                if (false) { var _console2, _console1, _console_alog2, _console3, _console_alog3, _console_alog1 }
                (0,_performance_js__rspack_import_1.markTiming)('hydrateParseSnapshotEnd');
                (0,_performance_js__rspack_import_1.markTiming)('diffVdomStart');
                const snapshotPatch = (0,_snapshot_backgroundSnapshot_js__rspack_import_18.hydrate)(before, _root_js__rspack_import_5.__root);
                if (false) {}
                if (true) (0,_shared_profile_js__rspack_import_6.profileEnd)();
                (0,_performance_js__rspack_import_1.markTiming)('diffVdomEnd');
                // TODO: It seems `delayedEvents` and `delayedLifecycleEvents` should be merged into one array to ensure the proper order of events.
                flushDelayedLifecycleEvents();
                if (_lifecycle_event_delayEvents_js__rspack_import_12.delayedEvents) {
                    _lifecycle_event_delayEvents_js__rspack_import_12.delayedEvents.forEach((args)=>{
                        var _jsReadyEventIdSwap_idStr;
                        const [handlerName, data] = args;
                        // eslint-disable-next-line prefer-const
                        let [idStr, ...rest] = handlerName.split(':');
                        while(jsReadyEventIdSwap[idStr])idStr = (_jsReadyEventIdSwap_idStr = jsReadyEventIdSwap[idStr]) === null || _jsReadyEventIdSwap_idStr === void 0 ? void 0 : _jsReadyEventIdSwap_idStr.toString();
                        try {
                            publishEvent([
                                idStr,
                                ...rest
                            ].join(':'), data);
                        } catch (e) {
                            lynx.reportError(e);
                        }
                    });
                    _lifecycle_event_delayEvents_js__rspack_import_12.delayedEvents.length = 0;
                }
                lynxCoreInject.tt.publishEvent = publishEvent;
                lynxCoreInject.tt.publicComponentEvent = publicComponentEvent;
                // console.debug("********** After hydration:");
                // printSnapshotInstance(__root as BackgroundSnapshotInstance);
                const commitTaskId = (0,_lifecycle_patch_commit_js__rspack_import_14.genCommitTaskId)();
                const patchList = {
                    patchList: [
                        {
                            snapshotPatch,
                            id: commitTaskId
                        }
                    ]
                };
                if (_worklet_call_delayedRunOnMainThreadData_js__rspack_import_19.delayedRunOnMainThreadData.length) patchList.delayedRunOnMainThreadData = (0,_worklet_call_delayedRunOnMainThreadData_js__rspack_import_19.takeDelayedRunOnMainThreadData)();
                const obj = (0,_lifecycle_patch_commit_js__rspack_import_14.commitPatchUpdate)(patchList, {
                    isHydration: true
                });
                (0,_worklet_ref_updateInitValue_js__rspack_import_21.sendMTRefInitValueToMainThread)();
                lynx.getNativeApp().callLepusMethod(_lifecycle_constant_js__rspack_import_10.LifecycleConstant.patchUpdate, obj, ()=>{
                    _lifecycle_patch_commit_js__rspack_import_14.globalCommitTaskMap.forEach((commitTask, id)=>{
                        if (id > commitTaskId) return;
                        commitTask();
                        _lifecycle_patch_commit_js__rspack_import_14.globalCommitTaskMap["delete"](id);
                    });
                });
                (0,_lifecycle_ref_delay_js__rspack_import_16.runDelayedUiOps)();
                if (processErr) throw processErr;
                break;
            }
        case _lifecycle_constant_js__rspack_import_10.LifecycleConstant.globalEventFromLepus:
            {
                const [eventName, params] = data;
                lynx.getJSModule('GlobalEventEmitter').trigger(eventName, params);
                break;
            }
        case _lifecycle_constant_js__rspack_import_10.LifecycleConstant.publishEvent:
            {
                const { handlerName, data: d } = data;
                lynxCoreInject.tt.publishEvent(handlerName, d);
                break;
            }
    }
}
let flushingDelayedLifecycleEvents = false;
function flushDelayedLifecycleEvents() {
    // avoid stackoverflow
    if (flushingDelayedLifecycleEvents) return;
    flushingDelayedLifecycleEvents = true;
    if (_lifecycle_event_delayLifecycleEvents_js__rspack_import_13.delayedLifecycleEvents) {
        _lifecycle_event_delayLifecycleEvents_js__rspack_import_13.delayedLifecycleEvents.forEach((e)=>{
            onLifecycleEvent(e);
        });
        _lifecycle_event_delayLifecycleEvents_js__rspack_import_13.delayedLifecycleEvents.length = 0;
    }
    flushingDelayedLifecycleEvents = false;
}
function publishEvent(handlerName, data) {
    var _lynxCoreInject_tt_callBeforePublishEvent, _lynxCoreInject_tt;
    (_lynxCoreInject_tt_callBeforePublishEvent = (_lynxCoreInject_tt = lynxCoreInject.tt).callBeforePublishEvent) === null || _lynxCoreInject_tt_callBeforePublishEvent === void 0 ? void 0 : _lynxCoreInject_tt_callBeforePublishEvent.call(_lynxCoreInject_tt, data);
    let snapshotId;
    const getSnapshotId = ()=>snapshotId !== null && snapshotId !== void 0 ? snapshotId : snapshotId = Number(handlerName.split(':')[0]);
    const eventHandler = _snapshot_backgroundSnapshot_js__rspack_import_18.backgroundSnapshotInstanceManager.getValueBySign(handlerName);
    if (true) {
        var _ref, _getSnapshotVNodeSource, _ref1;
        var _backgroundSnapshotInstanceManager_values_get;
        const currentSnapshotId = getSnapshotId();
        (0,_shared_profile_js__rspack_import_6.profileStart)(`ReactLynx::publishEvent`, {
            args: {
                handlerName,
                type: data.type,
                snapshotType: (_ref = (_backgroundSnapshotInstanceManager_values_get = _snapshot_backgroundSnapshot_js__rspack_import_18.backgroundSnapshotInstanceManager.values.get(currentSnapshotId)) === null || _backgroundSnapshotInstanceManager_values_get === void 0 ? void 0 : _backgroundSnapshotInstanceManager_values_get.type) !== null && _ref !== void 0 ? _ref : '',
                source: (_getSnapshotVNodeSource = (0,_debug_vnodeSource_js__rspack_import_9.getSnapshotVNodeSource)(currentSnapshotId)) !== null && _getSnapshotVNodeSource !== void 0 ? _getSnapshotVNodeSource : '',
                jsFunctionName: (_ref1 = eventHandler === null || eventHandler === void 0 ? void 0 : eventHandler.name) !== null && _ref1 !== void 0 ? _ref1 : ''
            }
        });
    }
    if (false) { var _backgroundSnapshotInstanceManager_values_get1, _ref2, _console, _console_alog, _ref3 }
    if (eventHandler) try {
        eventHandler(data);
    } catch (e) {
        lynx.reportError(e);
    }
    if (true) (0,_shared_profile_js__rspack_import_6.profileEnd)();
}
function publicComponentEvent(_componentId, handlerName, data) {
    publishEvent(handlerName, data);
}
function delayedPublicComponentEvent(_componentId, handlerName, data) {
    (0,_lifecycle_event_delayEvents_js__rspack_import_12.delayedPublishEvent)(handlerName, data);
}
function updateGlobalProps(newData) {
    (0,_core_globalProps_js__rspack_import_3.updateGlobalProps)(newData, {
        // Snapshot force render consumes any sync setState dirty flags produced by
        // onGlobalPropsChanged listeners, avoiding an extra diff pass.
        forceRerender: ()=>{
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            (0,_runWithForce_js__rspack_import_2.runWithForce)(()=>(0,preact__rspack_import_0.render)(_root_js__rspack_import_5.__root.__jsx, _root_js__rspack_import_5.__root));
        }
    });
}
 //# sourceMappingURL=tt.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/hydrate.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  diffArrayAction: () => (diffArrayAction),
  diffArrayLepus: () => (diffArrayLepus),
  hydrate: () => (hydrate),
  isEmptyDiffResult: () => (isEmptyDiffResult)
});
/* import */ var _shared_profile_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _list_list_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/list.js");
/* import */ var _list_pendingListUpdates_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/pendingListUpdates.js");
/* import */ var _snapshot_dynamicPartType_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/dynamicPartType.js");
/* import */ var _snapshot_ref_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/ref.js");
/* import */ var _utils_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var _snapshot_snapshot_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
/* import */ var _shared_render_constants_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/backgroundSnapshot.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BackgroundSnapshotInstance: () => (BackgroundSnapshotInstance),
  backgroundSnapshotInstanceManager: () => (backgroundSnapshotInstanceManager),
  hydrate: () => (hydrate)
});
/* import */ var _definition_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/definition.js");
/* import */ var _dynamicPartType_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/dynamicPartType.js");
/* import */ var _reconstructInstanceTree_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/reconstructInstanceTree.js");
/* import */ var _ref_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/ref.js");
/* import */ var _snapshot_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js");
/* import */ var _snapshotInstanceHydrationMap_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshotInstanceHydrationMap.js");
/* import */ var _spread_js__rspack_import_6 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/spread.js");
/* import */ var _utils_js__rspack_import_7 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/utils.js");
/* import */ var _shared_profile_js__rspack_import_8 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/profile.js");
/* import */ var _utils_js__rspack_import_9 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* import */ var _debug_vnodeSource_js__rspack_import_10 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/vnodeSource.js");
/* import */ var _gesture_processGestureBagkround_js__rspack_import_11 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/processGestureBagkround.js");
/* import */ var _lifecycle_patch_globalState_js__rspack_import_12 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/globalState.js");
/* import */ var _lifecycle_patch_snapshotPatch_js__rspack_import_13 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
/* import */ var _lynx_performance_js__rspack_import_14 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/performance.js");
/* import */ var _lynx_portalsPending_js__rspack_import_15 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/portalsPending.js");
/* import */ var _renderToOpcodes_hydrate_js__rspack_import_16 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/hydrate.js");
/* import */ var _worklet_ctx_js__rspack_import_17 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ctx.js");
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
        // For PreactDevtools, on first hydration,
        // PreactDevtools can get the real snapshot instance id in main-thread
        if (true) lynx.getJSModule('GlobalEventEmitter').emit('onBackgroundSnapshotInstanceUpdateId', [
            {
                backgroundSnapshotInstance: si,
                oldId: id,
                newId
            }
        ]);
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/constants.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/definition.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var _constants_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/constants.js");
/* import */ var _dynamicPartType_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/dynamicPartType.js");
/* import */ var _list_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/list.js");
/* import */ var _spread_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/spread.js");
/* import */ var _utils_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/utils.js");
/* import */ var _lifecycle_patch_snapshotPatch_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
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
                    /* v8 ignore start */ if (false) {}
                    /* v8 ignore stop */ return [
                        __page
                    ];
                },
                update: [],
                slot: _dynamicPartType_js__rspack_import_1.__DynamicPartChildren_0,
                isListHolder: false,
                cssId: 0
            }
        ],
        [
            'wrapper',
            {
                create () {
                    /* v8 ignore start */ if (false) {}
                    /* v8 ignore stop */ return [
                        __CreateWrapperElement(__pageId)
                    ];
                },
                update: [],
                slot: _dynamicPartType_js__rspack_import_1.__DynamicPartChildren_0,
                isListHolder: false
            }
        ],
        [
            null,
            {
                create () {
                    /* v8 ignore start */ if (false) {}
                    /* v8 ignore stop */ return [
                        __CreateRawText('')
                    ];
                },
                update: [
                    (ctx)=>{
                        /* v8 ignore start */ if (false) {}
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
    if (!isLazySnapshotSupported) uniqID = (0,_utils_js__rspack_import_4.entryUniqID)(uniqID, entryName);
    // For Lazy Bundle, their entryName is not DEFAULT_ENTRY_NAME.
    // We need to set the entryName correctly for HMR
    if ( true && _lifecycle_patch_snapshotPatch_js__rspack_import_5.__globalSnapshotPatch && entryName && entryName !== _constants_js__rspack_import_0.DEFAULT_ENTRY_NAME && !uniqID.includes(':')) _lifecycle_patch_snapshotPatch_js__rspack_import_5.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_5.SnapshotOperation.DEV_ONLY_SetSnapshotEntryName, uniqID, entryName);
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
        if (v === _dynamicPartType_js__rspack_import_1.DynamicPartType.ListChildren || v === _dynamicPartType_js__rspack_import_1.DynamicPartType.ListSlotV2) s.isListHolder = true;
        s.isSlotV2 = slot.every(([type])=>type === _dynamicPartType_js__rspack_import_1.DynamicPartType.SlotV2 || type === _dynamicPartType_js__rspack_import_1.DynamicPartType.ListSlotV2);
    }
    return uniqID;
}
function createRuntimeSnapshot(type) {
    const isListHolder = type === 'list';
    snapshotManager.values.set(type, {
        create (snapshotInstance) {
            /* v8 ignore start */ if (false) {}
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
                        (0,_list_js__rspack_import_2.snapshotCreateList)(__pageId, snapshotInstance, 0)
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
                /* v8 ignore start */ if (false) {}
                /* v8 ignore stop */ (0,_spread_js__rspack_import_3.updateSpread)(ctx, index, oldValue, 0);
            }
        ],
        slot: isListHolder ? _dynamicPartType_js__rspack_import_1.__DynamicPartListSlotV2_0 : _dynamicPartType_js__rspack_import_1.__DynamicPartSlotV2_0,
        isListHolder,
        refAndSpreadIndexes: [
            0
        ]
    });
} //# sourceMappingURL=definition.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/dynamicPartType.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/event.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/gesture.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateGesture: () => (updateGesture)
});
/* import */ var _gesture_processGesture_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/processGesture.js");
/* import */ var _lifecycle_patch_isMainThreadHydrating_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/isMainThreadHydrating.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/list.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  snapshotCreateList: () => (snapshotCreateList),
  snapshotDestroyList: () => (snapshotDestroyList)
});
/* import */ var _list_list_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/list.js");
/* import */ var _renderToOpcodes_hydrate_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/hydrate.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/platformInfo.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  platformInfoAttributes: () => (platformInfoAttributes),
  updateListItemPlatformInfo: () => (updateListItemPlatformInfo)
});
/* import */ var _list_listUpdateInfo_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/listUpdateInfo.js");
/* import */ var _list_pendingListUpdates_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/pendingListUpdates.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/reconstructInstanceTree.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  reconstructInstanceTree: () => (reconstructInstanceTree)
});
/* import */ var _lifecycle_patch_snapshotPatch_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/ref.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var _workletRef_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletRef.js");
/* import */ var _core_ref_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/ref.js");
/* import */ var _lifecycle_ref_delay_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/ref/delay.js");



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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SnapshotInstance: () => (SnapshotInstance),
  snapshotCreatorMap: () => (snapshotCreatorMap),
  snapshotInstanceManager: () => (snapshotInstanceManager)
});
/* import */ var _constants_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/constants.js");
/* import */ var _definition_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/definition.js");
/* import */ var _dynamicPartType_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/dynamicPartType.js");
/* import */ var _list_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/list.js");
/* import */ var _ref_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/ref.js");
/* import */ var _utils_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/utils.js");
/* import */ var _utils_js__rspack_import_6 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* import */ var _debug_vnodeSource_js__rspack_import_7 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/vnodeSource.js");
/* import */ var _lifecycle_patch_snapshotPatch_js__rspack_import_8 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
/* import */ var _list_listUpdateInfo_js__rspack_import_9 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/listUpdateInfo.js");
/* import */ var _list_pendingListUpdates_js__rspack_import_10 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/pendingListUpdates.js");
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
if (true) snapshotCreatorMap = new Proxy(snapshotCreatorMap, {
    set (target, prop, value) {
        if (// so the snapshot of the first screen will not be sent to the main thread.
        _lifecycle_patch_snapshotPatch_js__rspack_import_8.__globalSnapshotPatch && !prop.includes(':')) _lifecycle_patch_snapshotPatch_js__rspack_import_8.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__rspack_import_8.SnapshotOperation.DEV_ONLY_AddSnapshot, prop, // This allows the updates to be applied to main thread.
        value.toString());
        target[prop] = value;
        return true;
    }
});
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
        _list_pendingListUpdates_js__rspack_import_10.__pendingListUpdates.runWithoutUpdates(()=>{
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
            if (_list_pendingListUpdates_js__rspack_import_10.__pendingListUpdates.values && !_list_pendingListUpdates_js__rspack_import_10.__pendingListUpdates.values[this.__id] && this.__firstChild !== null) {
                let child = this.__firstChild;
                while(child){
                    var __pendingListUpdates_values, _this___id, _;
                    ((_ = (__pendingListUpdates_values = _list_pendingListUpdates_js__rspack_import_10.__pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new _list_listUpdateInfo_js__rspack_import_9.ListUpdateInfoRecording(this)).onInsertBefore(child);
                    child = child.__nextSibling;
                }
            }
            _list_pendingListUpdates_js__rspack_import_10.__pendingListUpdates.flushWithId(this.__id);
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
            if (_list_pendingListUpdates_js__rspack_import_10.__pendingListUpdates.values) ((_ = (__pendingListUpdates_values = _list_pendingListUpdates_js__rspack_import_10.__pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new _list_listUpdateInfo_js__rspack_import_9.ListUpdateInfoRecording(this)).onInsertBefore(newNode, existingNode);
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
            if (_list_pendingListUpdates_js__rspack_import_10.__pendingListUpdates.values) ((_ = (__pendingListUpdates_values = _list_pendingListUpdates_js__rspack_import_10.__pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new _list_listUpdateInfo_js__rspack_import_9.ListUpdateInfoRecording(this)).onRemoveChild(child);
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshotInstanceHydrationMap.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/spread.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  transformSpread: () => (transformSpread),
  updateSpread: () => (updateSpread)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _event_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/event.js");
/* import */ var _gesture_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/gesture.js");
/* import */ var _platformInfo_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/platformInfo.js");
/* import */ var _ref_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/ref.js");
/* import */ var _workletEvent_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletEvent.js");
/* import */ var _workletRef_js__rspack_import_6 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletRef.js");
/* import */ var _utils_js__rspack_import_7 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* import */ var _gesture_processGesture_js__rspack_import_8 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/processGesture.js");
/* import */ var _list_listUpdateInfo_js__rspack_import_9 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/listUpdateInfo.js");
/* import */ var _list_pendingListUpdates_js__rspack_import_10 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list/pendingListUpdates.js");
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
        var _transformRef;
        let value1 = spread[key];
        if (key === '__spread') ;
        else if (key === 'class' || key === 'className') {
            value1 !== null && value1 !== void 0 ? value1 : value1 = '';
            result['className'] = value1;
        } else if (key === 'ref') result[key] = (_transformRef = (0,_ref_js__rspack_import_4.transformRef)(value1)) === null || _transformRef === void 0 ? void 0 : _transformRef.__ref;
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/utils.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  entryUniqID: () => (entryUniqID),
  isCompiledSnapshot: () => (isCompiledSnapshot),
  traverseSnapshotInstance: () => (traverseSnapshotInstance)
});
/* import */ var _constants_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/constants.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletEvent.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateWorkletEvent: () => (updateWorkletEvent)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _debug_describeInvalidValue_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/describeInvalidValue.js");
/* import */ var _lifecycle_patch_isMainThreadHydrating_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/isMainThreadHydrating.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletRef.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  applyRefQueue: () => (applyRefQueue),
  updateWorkletRef: () => (updateWorkletRef),
  workletUnRef: () => (workletUnRef)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _lifecycle_patch_isMainThreadHydrating_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/isMainThreadHydrating.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/delayedRunOnMainThreadData.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  delayedRunOnMainThreadData: () => (delayedRunOnMainThreadData),
  takeDelayedRunOnMainThreadData: () => (takeDelayedRunOnMainThreadData)
});
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
let delayedRunOnMainThreadData = [];
function takeDelayedRunOnMainThreadData() {
    const data = delayedRunOnMainThreadData;
    delayedRunOnMainThreadData = [];
    return data;
} //# sourceMappingURL=delayedRunOnMainThreadData.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/execMap.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkletExecIdMap: () => (WorkletExecIdMap)
});
/* import */ var _indexMap_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/indexMap.js");

/**
 * `WorkletExecIdMap` ensures the worklet object is not released in js context when the main thread is still holding the
 * worklet object (or any of its jsFnHandles). The worklet object holds the js functions which might be called by `runOnBackground()`.
 * If the worklet object is incorrectly released earlier, the `runOnBackground()` would result in failure.
 *
 * Every time a worklet object is sent to the main thread, an `execId` is distributed and will be sent to element
 * context with the worklet object. This relationship is recorded in this class. When all the references to the
 * worklet object are released in the main thread, a message will be sent back to remove the record here.
 *
 * @internal
 */ class WorkletExecIdMap extends _indexMap_js__rspack_import_0.IndexMap {
    add(worklet) {
        const execId = super.add(worklet);
        worklet._execId = execId;
        return execId;
    }
    findJsFnHandle(execId, fnId) {
        const worklet = this.get(execId);
        if (!worklet) return undefined;
        const f = (value)=>{
            if (value === null || typeof value !== 'object') return undefined;
            const obj = value;
            if ('_jsFnId' in obj && obj['_jsFnId'] === fnId) return obj;
            for(const i in obj){
                const result = f(obj[i]);
                if (result) return result;
            }
            return undefined;
        };
        return f(worklet);
    }
} //# sourceMappingURL=execMap.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/functionCall.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onFunctionCall: () => (onFunctionCall)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _destroy_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/destroy.js");
/* import */ var _indexMap_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/indexMap.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



let resolveMap;
function initReturnValueListener() {
    const context = lynx.getCoreContext();
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/runOnBackground.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerWorkletCtx: () => (registerWorkletCtx),
  runJSFunction: () => (runJSFunction),
  runOnBackground: () => (runOnBackground)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _destroy_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/destroy.js");
/* import */ var _execMap_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/execMap.js");
/* import */ var _functionality_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/functionality.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




let execIdMap;
function init() {
    'background only';
    if (execIdMap) return;
    execIdMap = new _execMap_js__rspack_import_2.WorkletExecIdMap();
    lynx.getCoreContext().addEventListener(_lynx_js_react_worklet_runtime_bindings__rspack_import_0.WorkletEvents.runOnBackground, runJSFunction);
    lynx.getCoreContext().addEventListener(_lynx_js_react_worklet_runtime_bindings__rspack_import_0.WorkletEvents.releaseBackgroundWorkletCtx, releaseBackgroundWorkletCtx);
    _destroy_js__rspack_import_1.destroyTasks.push(()=>{
        lynx.getCoreContext().removeEventListener(_lynx_js_react_worklet_runtime_bindings__rspack_import_0.WorkletEvents.runOnBackground, runJSFunction);
        lynx.getCoreContext().removeEventListener(_lynx_js_react_worklet_runtime_bindings__rspack_import_0.WorkletEvents.releaseBackgroundWorkletCtx, releaseBackgroundWorkletCtx);
        execIdMap = undefined;
    });
}
/**
 * @internal
 */ function runJSFunction(event) {
    'background only';
    const data = JSON.parse(event.data);
    const obj = execIdMap.findJsFnHandle(data.obj._execId, data.obj._jsFnId);
    const f = obj === null || obj === void 0 ? void 0 : obj._fn;
    if (!f) throw new Error('runOnBackground: JS function not found: ' + JSON.stringify(data.obj));
    const returnValue = f(...data.params);
    lynx.getCoreContext().dispatchEvent({
        type: _lynx_js_react_worklet_runtime_bindings__rspack_import_0.WorkletEvents.FunctionCallRet,
        data: JSON.stringify({
            resolveId: data.resolveId,
            returnValue
        })
    });
}
function releaseBackgroundWorkletCtx(event) {
    'background only';
    for (const id of event.data)execIdMap.remove(id);
}
/**
 * @internal
 */ function registerWorkletCtx(ctx) {
    'background only';
    init();
    execIdMap.add(ctx);
}
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
    if (!(0,_functionality_js__rspack_import_3.isRunOnBackgroundEnabled)()) throw new Error('runOnBackground requires Lynx sdk version 2.16.');
    throw new Error('runOnBackground can only be used on the main thread.');
}
 //# sourceMappingURL=runOnBackground.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/runOnMainThread.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runOnMainThread: () => (runOnMainThread)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _lifecycle_isRendering_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/isRendering.js");
/* import */ var _lifecycle_patch_snapshotPatch_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js");
/* import */ var _ctx_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ctx.js");
/* import */ var _delayedRunOnMainThreadData_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/delayedRunOnMainThreadData.js");
/* import */ var _functionality_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/functionality.js");
/* import */ var _functionCall_js__rspack_import_6 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/functionCall.js");







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
    if (!(0,_functionality_js__rspack_import_5.isMtsEnabled)()) throw new Error('runOnMainThread requires Lynx sdk version 2.14.');
    return async (...params)=>{
        return new Promise((resolve)=>{
            (0,_ctx_js__rspack_import_3.onPostWorkletCtx)(fn);
            const resolveId = (0,_functionCall_js__rspack_import_6.onFunctionCall)(resolve);
            const data = {
                worklet: fn,
                params,
                resolveId
            };
            if (_lifecycle_patch_snapshotPatch_js__rspack_import_2.__globalSnapshotPatch === undefined || _lifecycle_isRendering_js__rspack_import_1.isRendering.value) {
                // before hydration or is rendering
                _delayedRunOnMainThreadData_js__rspack_import_4.delayedRunOnMainThreadData.push(data);
                return;
            }
            lynx.getCoreContext().dispatchEvent({
                type: _lynx_js_react_worklet_runtime_bindings__rspack_import_0.WorkletEvents.runWorkletCtx,
                data: JSON.stringify(data)
            });
        });
    };
} //# sourceMappingURL=runOnMainThread.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/transformToWorklet.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ctx.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onPostWorkletCtx: () => (onPostWorkletCtx)
});
/* import */ var _call_runOnBackground_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/runOnBackground.js");
/* import */ var _functionality_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/functionality.js");


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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/destroy.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  destroyTasks: () => (destroyTasks),
  destroyWorklet: () => (destroyWorklet)
});
/* import */ var _ref_workletRefPool_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/workletRefPool.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

const destroyTasks = [];
function destroyWorklet() {
    (0,_ref_workletRefPool_js__rspack_import_0.takeWorkletRefInitValuePatch)();
    for (const task of destroyTasks)task();
    destroyTasks.length = 0;
} //# sourceMappingURL=destroy.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/functionality.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearConfigCacheForTesting: () => (clearConfigCacheForTesting),
  isMtsEnabled: () => (isMtsEnabled),
  isRunOnBackgroundEnabled: () => (isRunOnBackgroundEnabled)
});
/* import */ var _utils_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/hmr.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/indexMap.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/updateInitValue.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  injectUpdateMTRefInitValue: () => (injectUpdateMTRefInitValue),
  sendMTRefInitValueToMainThread: () => (sendMTRefInitValueToMainThread)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _workletRefPool_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/workletRefPool.js");
/* import */ var _lifecycle_constant_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/workletRef.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MainThreadRef: () => (MainThreadRef),
  clearWorkletRefLastIdForTesting: () => (clearWorkletRefLastIdForTesting),
  useMainThreadRef: () => (useMainThreadRef)
});
/* import */ var _lynx_js_react_worklet_runtime_bindings__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js");
/* import */ var _workletRefPool_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/workletRefPool.js");
/* import */ var _core_hooks_react_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/core/hooks/react.js");



// Split into two variables for testing purposes
let lastIdBG = 0;
function clearWorkletRefLastIdForTesting() {
    lastIdBG = 0;
}
class WorkletRef {
    get current() {
        if (true) throw new Error('MainThreadRef: value of a MainThreadRef cannot be accessed in the background thread.');
        return undefined;
    }
    set current(_) {
        if (true) throw new Error('MainThreadRef: value of a MainThreadRef cannot be accessed in the background thread.');
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
        this._wvid = ++lastIdBG;
        (0,_workletRefPool_js__rspack_import_1.addWorkletRefInitValue)(this._wvid, initValue);
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
        {
            var _lynx_getNativeApp_createJSObjectDestructionObserver, _lynx_getNativeApp;
            const id = this._wvid;
            this._lifecycleObserver = (_lynx_getNativeApp_createJSObjectDestructionObserver = (_lynx_getNativeApp = lynx.getNativeApp()).createJSObjectDestructionObserver) === null || _lynx_getNativeApp_createJSObjectDestructionObserver === void 0 ? void 0 : _lynx_getNativeApp_createJSObjectDestructionObserver.call(_lynx_getNativeApp, ()=>{
                var _lynx_getCoreContext, _lynx;
                (_lynx_getCoreContext = (_lynx = lynx).getCoreContext) === null || _lynx_getCoreContext === void 0 ? void 0 : _lynx_getCoreContext.call(_lynx).dispatchEvent({
                    type: _lynx_js_react_worklet_runtime_bindings__rspack_import_0.WorkletEvents.releaseWorkletRef,
                    data: {
                        id
                    }
                });
            });
        }
    }
}
function useMainThreadRef(initValue) {
    return (0,_core_hooks_react_js__rspack_import_2.useMemo)(()=>{
        return new MainThreadRef(initValue);
    }, []);
} //# sourceMappingURL=workletRef.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/workletRefPool.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addWorkletRefInitValue: () => (addWorkletRefInitValue),
  takeWorkletRefInitValuePatch: () => (takeWorkletRefInitValuePatch)
});
/* import */ var _functionality_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/functionality.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var _shared_component_stack_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/shared/component-stack.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/bindings.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/events.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var _loadRuntime_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/loadRuntime.js");
/* import */ var _bindings_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/bindings.js");
/* import */ var _observers_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/observers.js");
/* import */ var _events_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/events.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



 //# sourceMappingURL=index.js.map


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/loadRuntime.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  loadWorkletRuntime: () => (loadWorkletRuntime)
});
/* import */ var _global_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/global.js");
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/observers.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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


},
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/global.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
 //# sourceMappingURL=global.js.map


},
"(react:background)/./node_modules/@lynx-js/rspeedy/client/hmr/WebSocketClient.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (WebSocketClient)
});
/* provided dependency */ var WebSocket = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/index.js")["default"];
class WebSocketClient {
    /**
   * @param {(...args: any[]) => void} f - The callback for onOpen.
   */ onOpen(f) {
        this.client.onopen = f;
    }
    /**
   * @param {(...args: any[]) => void} f - The callback for onClose.
   */ onClose(f) {
        this.client.onclose = f;
    }
    // call f with the message string as the first argument
    /**
   * @param {(...args: any[]) => void} f - The callback for onMessage.
   */ onMessage(f) {
        this.client.onmessage = (e)=>{
            f(e.data);
        };
    }
    /**
   * @param {string} url - The WebSocket URL.
   */ constructor(url){
        // eslint-disable-next-line n/no-unsupported-features/node-builtins
        this.client = new WebSocket(url);
        this.client.onerror = (error)=>{
            // TODO: use the real webpack logger
            console.error('[webpack-dev-server]', error);
        };
    }
}
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * @license MIT
Copyright JS Foundation and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ 


},
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/createSocketURL.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createSocketURL: () => (createSocketURL)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function format(objURL) {
    var _objURL_protocol, _objURL_auth, _objURL_pathname, _objURL_search, _objURL_hash;
    let protocol = (_objURL_protocol = objURL.protocol) !== null && _objURL_protocol !== void 0 ? _objURL_protocol : '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    let auth = (_objURL_auth = objURL.auth) !== null && _objURL_auth !== void 0 ? _objURL_auth : '';
    if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3a/i, ':');
        auth += '@';
    }
    let host = '';
    if (objURL.hostname) {
        host = auth + (objURL.hostname.includes(':') ? `[${objURL.hostname}]` : objURL.hostname);
        if (objURL.port) host += `:${objURL.port}`;
    }
    let pathname = (_objURL_pathname = objURL.pathname) !== null && _objURL_pathname !== void 0 ? _objURL_pathname : '';
    if (objURL.slashes) {
        host = `//${host || ''}`;
        if (pathname && !pathname.startsWith('/')) pathname = `/${pathname}`;
    } else if (!host) host = '';
    let search = (_objURL_search = objURL.search) !== null && _objURL_search !== void 0 ? _objURL_search : '';
    if (search && !search.startsWith('?')) search = `?${search}`;
    let hash = (_objURL_hash = objURL.hash) !== null && _objURL_hash !== void 0 ? _objURL_hash : '';
    if (hash && !hash.startsWith('#')) hash = `#${hash}`;
    pathname = pathname.replace(/[#?]/g, /**
     * @param {string} match
     * @returns {string}
     */ (match)=>encodeURIComponent(match));
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
function createSocketURL(parsedURL, token) {
    const { hostname } = parsedURL;
    let socketURLProtocol = parsedURL.protocol;
    socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, 'ws');
    let socketURLAuth = '';
    // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
    // Parse authentication credentials in case we need them
    if (parsedURL.username) {
        socketURLAuth = parsedURL.username;
        // Since HTTP basic authentication does not allow empty username,
        // we only include password if the username is not empty.
        if (parsedURL.password) socketURLAuth = socketURLAuth.concat(':', parsedURL.password);
    }
    // In case the host is a raw IPv6 address, it can be enclosed in
    // the brackets as the brackets are needed in the final URL string.
    // Need to remove those as url.format blindly adds its own set of brackets
    // if the host string contains colons. That would lead to non-working
    // double brackets (e.g. [[::]]) host
    //
    // All of these web socket url params are optionally passed in through resourceQuery,
    // so we need to fall back to the default if they are not provided
    const socketURLHostname = hostname.replace(/^\[(.*)\]$/, '$1');
    const socketURLPort = parsedURL.port;
    // If path is provided it'll be passed in via the resourceQuery as a
    // query param so it has to be parsed out of the querystring in order for the
    // client to open the socket to the correct location.
    let socketURLPathname = '/ws';
    if (parsedURL.pathname) socketURLPathname = parsedURL.pathname;
    return format({
        protocol: socketURLProtocol,
        auth: socketURLAuth,
        hostname: socketURLHostname,
        port: socketURLPort,
        pathname: socketURLPathname,
        slashes: true,
        search: token ? `?token=${token}` : ''
    });
} //# sourceMappingURL=createSocketURL.js.map


},
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/index.js?hostname=0.0.0.0&port=3001&pathname=%2Frsbuild-hmr&hot=true&live-reload=true&protocol=ws&token=423239aa25d9ad75"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
var __resourceQuery = "?hostname=0.0.0.0&port=3001&pathname=%2Frsbuild-hmr&hot=true&live-reload=true&protocol=ws&token=423239aa25d9ad75";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
/* import */ var _createSocketURL_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/createSocketURL.js");
/* import */ var _log_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/log.js");
/* import */ var _parseURL_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/parseURL.js");
/* import */ var _reloadApp_js__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/reloadApp.js");
/* import */ var _socket_js__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/socket.js");
/* import */ var _transport_js__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/transport.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.






const status = {
    isReconnecting: false,
    currentHash: __webpack_require__.h()
};
const enabledFeatures = {
    'Hot Module Replacement': false,
    'Live Reloading': false,
    Progress: false,
    Overlay: false
};
const options = {
    hot: false,
    liveReload: false,
    progress: false
};
const parsedResourceQuery = (0,_parseURL_js__rspack_import_2.parseURL)(__resourceQuery);
const token = parsedResourceQuery['token'];
if (parsedResourceQuery['hot'] === 'true') {
    options.hot = true;
    enabledFeatures['Hot Module Replacement'] = true;
}
if (parsedResourceQuery['live-reload'] === 'true') {
    options.liveReload = true;
    enabledFeatures['Live Reloading'] = true;
}
if (parsedResourceQuery['progress'] === 'true') {
    options.progress = true;
    enabledFeatures.Progress = true;
}
(0,_log_js__rspack_import_1.logEnabledFeatures)(enabledFeatures);
const onSocketMessage = {
    hot () {
        if (parsedResourceQuery['hot'] === 'false') return;
        options.hot = true;
    },
    liveReload () {
        if (parsedResourceQuery['live-reload'] === 'false') return;
        options.liveReload = true;
    },
    invalid () {
        _log_js__rspack_import_1.log.info('App updated. Recompiling...');
    },
    hash (hash) {
        if (status.isReconnecting) {
            // We only need this once when reconnecting
            status.isReconnecting = false;
            // Here, we not only override the currentHash, but also override the
            // previousHash and the hash in webpack runtime.
            // In this way, we reset all the hash-related runtime status to match
            // the cold start.
            status.currentHash = status.previousHash = hash;
            // @ts-expect-error webpack runtime hack
            /* webpack/runtime/getFullHash */ __webpack_require__.h = function() {
                return hash;
            };
            return;
        }
        status.previousHash = status.currentHash;
        status.currentHash = hash;
    },
    reconnect (value) {
        if (parsedResourceQuery['reconnect'] === 'false') return;
        options.reconnect = value;
    },
    progress (value) {
        options.progress = value;
    },
    'still-ok': function stillOk() {
        _log_js__rspack_import_1.log.info('Nothing changed.');
    },
    ok () {
        (0,_reloadApp_js__rspack_import_3["default"])(options, status);
    },
    warnings (_warnings, params) {
        // TODO: format warnings
        if (params === null || params === void 0 ? void 0 : params.preventReloading) return;
        (0,_reloadApp_js__rspack_import_3["default"])(options, status);
    },
    'static-changed': function staticChanged(file) {
        _log_js__rspack_import_1.log.info(`${file ? `"${file}"` : 'Content'} from static directory was changed. Reloading...`);
        (0,_reloadApp_js__rspack_import_3["default"])({
            liveReload: true,
            hot: false,
            progress: false
        }, status);
    },
    errors (_errors) {
        _log_js__rspack_import_1.log.error('Errors while compiling. Reload prevented.');
    // TODO: format errors
    },
    error (error) {
        _log_js__rspack_import_1.log.error(error.toString());
    },
    close () {
        // When the dev-server disconnected, we set `isReconnecting` to allow
        // override the webpack hash when dev-server restart and connect to client.
        status.isReconnecting = true;
        _log_js__rspack_import_1.log.info('Disconnected!');
    }
};
const socketURL = (0,_createSocketURL_js__rspack_import_0.createSocketURL)(parsedResourceQuery, token);
// @ts-expect-error I don't know TypeScript. I can't make it work :(
(0,_socket_js__rspack_import_4["default"])(socketURL, onSocketMessage, options.reconnect);
// Export the transport client so that it can be used in the `devServer.client.webSocketTransport`
/* export default */ const __rspack_default_export = (_transport_js__rspack_import_5.LynxTransportClient); //# sourceMappingURL=index.js.map


},
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/log.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  log: () => (log),
  logEnabledFeatures: () => (logEnabledFeatures)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const PREFIX = '[rspeedy-dev-server]';
const log = {
    error: console.error.bind(console, PREFIX),
    warn: console.warn.bind(console, PREFIX),
    info: console.info.bind(console, PREFIX),
    log: console.log.bind(console, PREFIX),
    debug: console.debug.bind(console, PREFIX)
};
const logEnabledFeatures = (features)=>{
    if (!features || Object.keys(features).length === 0) return;
    let logString = 'Server started:';
    // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.
    for (const [key, enable] of Object.entries(features))logString += ` ${key} ${enable ? 'enabled' : 'disabled'},`;
    // replace last comma with a period
    logString = logString.slice(0, -1).concat('.');
    log.info(logString);
};
 //# sourceMappingURL=log.js.map


},
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/parseURL.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parseURL: () => (parseURL)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function parseURL(resourceQuery) {
    const options = {};
    if (!(resourceQuery === null || resourceQuery === void 0 ? void 0 : resourceQuery.startsWith('?'))) return options;
    const searchParams = resourceQuery.slice(1).split('&');
    for (const keyValuePair of searchParams){
        const [key, value] = keyValuePair.split('=');
        options[key] = value === undefined ? true : decodeURIComponent(value);
    }
    return options;
} //# sourceMappingURL=parseURL.js.map


},
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/reloadApp.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
/* import */ var webpack_hot_emitter_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@rspack/core/hot/emitter.js");
/* import */ var webpack_hot_emitter_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__rspack_import_0);
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function reloadApp({ hot, liveReload }, status) {
    const { currentHash, previousHash } = status;
    const isInitial = currentHash.includes(previousHash);
    if (isInitial) return;
    if (hot) webpack_hot_emitter_js__rspack_import_0_default().emit('webpackHotUpdate', status.currentHash);
    else if (liveReload) {
        const intervalId = +setInterval(()=>{
            // reload immediately
            applyReload(intervalId);
        }, 10);
    }
}
function applyReload(intervalId) {
    var _ref;
    var _NativeModules_LynxDevToolSetModule, _NativeModules_LynxDevtoolSetModule, _NativeModules_LynxDevToolSetModule_invokeCdp, _NativeModules_LynxDevToolSetModule1, _NativeModules_LynxDevtoolSetModule_invokeCdp, _NativeModules_LynxDevtoolSetModule1;
    clearInterval(intervalId);
    if (typeof ((_NativeModules_LynxDevToolSetModule = NativeModules.LynxDevToolSetModule) === null || _NativeModules_LynxDevToolSetModule === void 0 ? void 0 : _NativeModules_LynxDevToolSetModule.invokeCdp) !== 'function' && typeof ((_NativeModules_LynxDevtoolSetModule = NativeModules.LynxDevtoolSetModule) === null || _NativeModules_LynxDevtoolSetModule === void 0 ? void 0 : _NativeModules_LynxDevtoolSetModule.invokeCdp) !== 'function') {
        console.error('[HMR] live-reload failed: cannot invoke cdp from DevTool.');
        console.error('[HMR] Please reload the page manually.');
        return;
    }
    const invokeCdp = (_ref = (_NativeModules_LynxDevToolSetModule1 = NativeModules.LynxDevToolSetModule) === null || _NativeModules_LynxDevToolSetModule1 === void 0 ? void 0 : (_NativeModules_LynxDevToolSetModule_invokeCdp = _NativeModules_LynxDevToolSetModule1.invokeCdp) === null || _NativeModules_LynxDevToolSetModule_invokeCdp === void 0 ? void 0 : _NativeModules_LynxDevToolSetModule_invokeCdp.bind(NativeModules.LynxDevToolSetModule)) !== null && _ref !== void 0 ? _ref : (_NativeModules_LynxDevtoolSetModule1 = NativeModules.LynxDevtoolSetModule) === null || _NativeModules_LynxDevtoolSetModule1 === void 0 ? void 0 : (_NativeModules_LynxDevtoolSetModule_invokeCdp = _NativeModules_LynxDevtoolSetModule1.invokeCdp) === null || _NativeModules_LynxDevtoolSetModule_invokeCdp === void 0 ? void 0 : _NativeModules_LynxDevtoolSetModule_invokeCdp.bind(NativeModules.LynxDevtoolSetModule, 'Page.reload');
    invokeCdp === null || invokeCdp === void 0 ? void 0 : invokeCdp(JSON.stringify({
        method: 'Page.reload',
        params: {
            ignoreCache: true
        }
    }), (data)=>{
        if (!data) return;
        try {
            const { error } = JSON.parse(data);
            if (error) console.error('[HMR] live-reload failed:', error.message);
        } catch  {
        // explicitly ignore error
        }
    });
}
/* export default */ const __rspack_default_export = (reloadApp); //# sourceMappingURL=reloadApp.js.map


},
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/socket.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  client: () => (client),
  "default": () => (__rspack_default_export)
});
/* import */ var _log_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/log.js");
/* import */ var _transport_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/transport.js");
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/rspeedy/client/hmr/WebSocketClient.js")["default"];
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


// this LynxTransportClient is here as a default fallback, in case the client is not injected
const C = typeof __webpack_dev_server_client__ === 'undefined' ? _transport_js__rspack_import_1.LynxTransportClient : 'default' in __webpack_dev_server_client__ ? __webpack_dev_server_client__.default : __webpack_dev_server_client__;
let retries = 0;
let maxRetries = 10;
// Initialized client is exported so external consumers can utilize the same instance
// It is mutable to enforce singleton
let client = null;
const socket = function initSocket(url, handlers, reconnect) {
    client = new C(url);
    client.onOpen(()=>{
        retries = 0;
        if (reconnect !== undefined) maxRetries = reconnect;
    });
    client.onClose(()=>{
        var _handlers_close;
        if (retries === 0) (_handlers_close = handlers['close']) === null || _handlers_close === void 0 ? void 0 : _handlers_close.call(handlers, void 0, void 0);
        // Try to reconnect.
        client = null;
        // After 10 retries stop trying, to prevent log spam.
        if (retries < maxRetries) {
            // Exponentially increase timeout to reconnect.
            // Respectfully copied from the package `got`.
            const retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
            retries += 1;
            _log_js__rspack_import_0.log.info('Trying to reconnect...');
            setTimeout(()=>{
                socket(url, handlers, reconnect);
            }, retryInMs);
        } else _log_js__rspack_import_0.log.error('Unable to establish a connection after exceeding the maximum retry attempts.');
    });
    client.onMessage((data)=>{
        var _handlers_message_type;
        const message = JSON.parse(data);
        (_handlers_message_type = handlers[message.type]) === null || _handlers_message_type === void 0 ? void 0 : _handlers_message_type.call(handlers, message.data, message.params);
    });
};
/* export default */ const __rspack_default_export = (socket); //# sourceMappingURL=socket.js.map


},
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/transport.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LynxTransportClient: () => (LynxTransportClient)
});
/**
 * LynxTransportClient is the client transport implementation for webpack-dev-server.
 * It can be used in the
 * {@link https://webpack.js.org/configuration/dev-server/#websockettransport | `devServer.client.webSocketTransport`}
 * configuration of webpack.
 * It should be used with `LynxTransportServer`.
 *
 * @example
 * ```js
 * // webpack.config.js
 * import { createRequire } from 'node:module'
 * import { LynxTransportServer } from '@lynx-js/webpack-dev-transport'
 *
 * const require = createRequire(import.meta.url)
 * export default {
 *   devServer: {
 *     client: {
 *       webSocketTransport: require.resolve('@lynx-js/webpack-dev-transport/client')
 *     },
 *     allowedHosts: 'all',
 *     webSocketServer: LynxTransportServer
 *   }
 * }
 * ```
 *
 * @public
 */ class LynxTransportClient {
    /** {@inheritdoc Client.onOpen} */ onOpen(callback) {
        callback();
    }
    /** {@inheritdoc Client.onClose} */ onClose(_callback) {
    // webpack-dev-server will retry in the `callback`
    // but `onOpen` in Lynx will never fail.
    }
    /** {@inheritdoc Client.onMessage} */ onMessage(callback) {
        lynx.getDevtool().addEventListener(LynxTransportClient.EventType, (event)=>{
            const CDP = JSON.parse(event.data.message);
            if (CDP.method === LynxTransportClient.EventType) callback(CDP.params.data);
        });
    }
} //# sourceMappingURL=transport.js.map
/** @internal */ LynxTransportClient.EventType = 'message';


},
"(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocket.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WebSocket: () => (WebSocket)
});
/* import */ var _swc_helpers_class_private_field_get__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_get.js");
/* import */ var _swc_helpers_class_private_field_init__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_init.js");
/* import */ var _swc_helpers_class_private_field_set__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_set.js");
/* import */ var _WebSocketImpl_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocketImpl.js");



// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

var _impl = /*#__PURE__*/ new WeakMap();
/**
 * The implementation of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebSocket | WebSocket}
 * for Lynx.
 *
 * @remarks
 *
 * This only works in environment that has `NativeModules.LynxWebSocketModule`.
 *
 * @public
 */ class WebSocket {
    /**
     * The `addEventListener()` method of the `EventTarget` interface sets up a function that will be called whenever the specified event is delivered to the target.
     * @param type - A case-sensitive string representing the event type to listen for.
     * @param callback - The function that receives a notification. See {@link @lynx-js/websocket#EventMap} for details of events.
     */ addEventListener(type, callback) {
        return (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).addEventListener(type, callback);
    }
    /**
     * The `removeEventListener()` method of the `EventTarget` interface removes an event listener from the WebSocket.
     * @param type - The type of event to stop listening for.
     * @param callback - The function to remove as an event listener.
     */ removeEventListener(type, callback) {
        (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).removeEventListener(type, callback);
    }
    /**
     * onmessage is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onmessage = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onmessage() {
        return (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).onmessage;
    }
    set onmessage(callback) {
        (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).onmessage = callback;
    }
    /**
     * onopen is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onopen = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onopen() {
        return (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).onopen;
    }
    set onopen(callback) {
        (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).onopen = callback;
    }
    /**
     * onclose is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onclose = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onclose() {
        return (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).onclose;
    }
    set onclose(callback) {
        (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).onclose = callback;
    }
    /**
     * onerror is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onerror = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onerror() {
        return (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).onerror;
    }
    set onerror(callback) {
        (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).onerror = callback;
    }
    /**
     * The `url` read-only property returns the URL of the {@link WebSocket} passed by the constructor.
     */ get url() {
        return (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).url;
    }
    /**
     * The `readyState` read-only property returns the current state of the {@link WebSocket} connection.
     */ get readyState() {
        return (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).readyState;
    }
    /**
     * The WebSocket.protocol read-only property returns the name of the sub-protocol the server selected.
     *
     * @remarks
     * This will be one of the strings specified in the protocols parameter when creating the WebSocket object,
     * or the empty string if no connection is established.
     */ get protocol() {
        return (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).protocol;
    }
    /**
     * The `send` method send the specified data to be transmitted to the server over the {@link WebSocket} connection.
     *
     * @remarks
     * It will throw an exception if you call `send()` when the connection is in the {@link WebSocket.CONNECTING | CONNECTING } state. If you call `send()` when the connection is in the {@link WebSocket.CLOSING | CLOSING } or {@link WebSocket.CLOSED | CLOSED } states, it will silently discard the data.
     * @param data - The specified data to be transmitted.
     */ send(data) {
        (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).send(data);
    }
    /**
     * The `ping` method send an empty message to the server over the {@link WebSocket} connection.
     * @remarks
     * It will throw an exception if you call `ping()` when the connection is in the {@link WebSocket.CONNECTING | CONNECTING } state. If you call `ping()` when the connection is in the {@link WebSocket.CLOSING | CLOSING } or {@link WebSocket.CLOSED | CLOSED } states, it will silently discard the data.
     */ ping() {
        (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).ping();
    }
    /**
     * The `close()` method closes the {@link WebSocket} connection or connection attempt, if any.
     *
     * @remarks
     * If the connection is already {@link WebSocket.CLOSED | CLOSED }, this method does nothing.
     */ close(code, reason) {
        (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _impl).close(code, reason);
    }
    /**
     * @param url - The URL to which to connect; this should be the URL to which the WebSocket server will respond.
     * @param protocols - Either a single protocol string or an array of protocol strings. If it is omitted, an empty array is used by default, i.e. `[]`.
     * @param options - Extra options for Lynx only.
     */ constructor(url, protocols, options = {}){
        (0,_swc_helpers_class_private_field_init__rspack_import_2._)(this, _impl, {
            writable: true,
            value: void 0
        });
        (0,_swc_helpers_class_private_field_set__rspack_import_3._)(this, _impl, new _WebSocketImpl_js__rspack_import_0.WebSocketImpl(NativeModules.LynxWebSocketModule, url, protocols, options));
    }
} //# sourceMappingURL=WebSocket.js.map
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.CONNECTING}
     */ WebSocket.CONNECTING = _WebSocketImpl_js__rspack_import_0.ReadyState.CONNECTING;
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.OPEN}
     */ WebSocket.OPEN = _WebSocketImpl_js__rspack_import_0.ReadyState.OPEN;
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.CLOSING}
     */ WebSocket.CLOSING = _WebSocketImpl_js__rspack_import_0.ReadyState.CLOSING;
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.CLOSED}
     */ WebSocket.CLOSED = _WebSocketImpl_js__rspack_import_0.ReadyState.CLOSED;


},
"(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocketImpl.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CloseCode: () => (CloseCode),
  GlobalEventEmitter: () => (GlobalEventEmitter),
  ReadyState: () => (ReadyState),
  WebSocketImpl: () => (WebSocketImpl)
});
/* import */ var _swc_helpers_class_private_field_get__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_get.js");
/* import */ var _swc_helpers_class_private_field_init__rspack_import_5 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_init.js");
/* import */ var _swc_helpers_class_private_field_set__rspack_import_3 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_set.js");
/* import */ var _swc_helpers_class_private_method_get__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_get.js");
/* import */ var _swc_helpers_class_private_method_init__rspack_import_4 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_init.js");
/* import */ var _swc_helpers_class_static_private_field_update__rspack_import_6 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_static_private_field_update.js");
/* import */ var eventemitter3__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/eventemitter3/index.mjs");






// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
var _a;

/**
 * The `ReadyState` describe the state of a `WebSocket` connection.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState
 * @public
 */ var ReadyState;
(function(ReadyState) {
    /** Socket has been created. The connection is not yet open. */ ReadyState[ReadyState["CONNECTING"] = 0] = "CONNECTING";
    /** The connection is open and ready to communicate. */ ReadyState[ReadyState["OPEN"] = 1] = "OPEN";
    /** The connection is in the process of closing. */ ReadyState[ReadyState["CLOSING"] = 2] = "CLOSING";
    /** The connection is closed or couldn't be opened. */ ReadyState[ReadyState["CLOSED"] = 3] = "CLOSED";
})(ReadyState || (ReadyState = {}));
const GlobalEventEmitter = lynx.getJSModule('GlobalEventEmitter');
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code
 */ var CloseCode;
(function(CloseCode) {
    CloseCode[CloseCode["NORMAL"] = 1000] = "NORMAL";
    CloseCode[CloseCode["ABNORMAL"] = 1006] = "ABNORMAL";
})(CloseCode || (CloseCode = {}));
var _socketID = /*#__PURE__*/ new WeakMap(), _close = /*#__PURE__*/ new WeakSet(), _registerEvents = /*#__PURE__*/ new WeakSet(), _unregisterEvents = /*#__PURE__*/ new WeakSet(), _previousOnMessage = /*#__PURE__*/ new WeakMap(), _onMessage = /*#__PURE__*/ new WeakSet(), _previousOnOpen = /*#__PURE__*/ new WeakMap(), _onOpen = /*#__PURE__*/ new WeakSet(), _previousOnClose = /*#__PURE__*/ new WeakMap(), _onClosed = /*#__PURE__*/ new WeakSet(), _previousOnError = /*#__PURE__*/ new WeakMap(), _onFailed = /*#__PURE__*/ new WeakSet(), _createWebSocketEvent = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ class WebSocketImpl extends eventemitter3__rspack_import_0.EventEmitter {
    addEventListener(type, callback) {
        if (!callback) return;
        this.addListener(type, callback);
        return;
    }
    removeEventListener(type, callback) {
        return this.removeListener(type, callback);
    }
    dispatchEvent(event) {
        return this.emit(event.type, event);
    }
    send(data) {
        if (this.readyState === ReadyState.CONNECTING) throw new Error('INVALID_STATE_ERR');
        if (this.readyState === ReadyState.CLOSING || this.readyState === ReadyState.CLOSED) return;
        if (typeof data === 'string') {
            var _this_websocketModule;
            (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.send(data, (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _socketID));
            return;
        }
        // TODO: support binary data
        throw new Error('Unsupported data type');
    }
    ping() {
        var _this_websocketModule;
        if (this.readyState === ReadyState.CONNECTING) throw new Error('INVALID_STATE_ERR');
        if (this.readyState === ReadyState.CLOSING || this.readyState === ReadyState.CLOSED) return;
        (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.ping((0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _socketID));
    }
    close(code, reason) {
        if (this.readyState === ReadyState.CLOSING || this.readyState === ReadyState.CLOSED) return;
        this.readyState = ReadyState.CLOSING;
        (0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _close, close).call(this, code, reason);
    }
    get onmessage() {
        return (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _previousOnMessage);
    }
    set onmessage(callback) {
        if ((0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _previousOnMessage)) this.removeEventListener('message', (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _previousOnMessage));
        this.addEventListener('message', callback);
        (0,_swc_helpers_class_private_field_set__rspack_import_3._)(this, _previousOnMessage, callback);
    }
    get onopen() {
        return (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _previousOnOpen);
    }
    set onopen(callback) {
        if ((0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _previousOnOpen)) this.removeEventListener('open', (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _previousOnOpen));
        this.addEventListener('open', callback);
        (0,_swc_helpers_class_private_field_set__rspack_import_3._)(this, _previousOnOpen, callback);
    }
    get onclose() {
        return (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _previousOnClose);
    }
    set onclose(callback) {
        if ((0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _previousOnClose)) this.removeEventListener('close', (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _previousOnClose));
        this.addEventListener('close', callback);
        (0,_swc_helpers_class_private_field_set__rspack_import_3._)(this, _previousOnClose, callback);
    }
    get onerror() {
        return (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _previousOnError);
    }
    set onerror(callback) {
        if ((0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _previousOnError)) this.removeEventListener('error', (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _previousOnError));
        this.addEventListener('error', callback);
        (0,_swc_helpers_class_private_field_set__rspack_import_3._)(this, _previousOnError, callback);
    }
    constructor(websocketModule, url, protocols, options = {}){
        var _this_websocketModule;
        super(), (0,_swc_helpers_class_private_method_init__rspack_import_4._)(this, _close), (0,_swc_helpers_class_private_method_init__rspack_import_4._)(this, _registerEvents), (0,_swc_helpers_class_private_method_init__rspack_import_4._)(this, _unregisterEvents), (0,_swc_helpers_class_private_method_init__rspack_import_4._)(this, _onMessage), (0,_swc_helpers_class_private_method_init__rspack_import_4._)(this, _onOpen), (0,_swc_helpers_class_private_method_init__rspack_import_4._)(this, _onClosed), (0,_swc_helpers_class_private_method_init__rspack_import_4._)(this, _onFailed), (0,_swc_helpers_class_private_method_init__rspack_import_4._)(this, _createWebSocketEvent), (0,_swc_helpers_class_private_field_init__rspack_import_5._)(this, _socketID, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__rspack_import_5._)(this, _previousOnMessage, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__rspack_import_5._)(this, _previousOnOpen, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__rspack_import_5._)(this, _previousOnClose, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__rspack_import_5._)(this, _previousOnError, {
            writable: true,
            value: void 0
        }), this.readyState = ReadyState.CONNECTING, (0,_swc_helpers_class_private_field_set__rspack_import_3._)(this, _socketID, (0,_swc_helpers_class_static_private_field_update__rspack_import_6._)(_a, WebSocketImpl, _nextWebSocketId).value++), (0,_swc_helpers_class_private_field_set__rspack_import_3._)(this, _previousOnMessage, null), (0,_swc_helpers_class_private_field_set__rspack_import_3._)(this, _previousOnOpen, null), (0,_swc_helpers_class_private_field_set__rspack_import_3._)(this, _previousOnClose, null), (0,_swc_helpers_class_private_field_set__rspack_import_3._)(this, _previousOnError, null);
        this.websocketModule = websocketModule;
        this.url = url;
        if (!websocketModule) {
            lynx.reportError(new Error(`WebSocket is not found. Please use Lynx >= 2.16 or consider using a polyfill.`), {
                level: 'warning'
            });
            return;
        }
        if (typeof protocols === 'string') protocols = [
            protocols
        ];
        if (!Array.isArray(protocols)) protocols = [];
        (0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _registerEvents, registerEvents).call(this);
        (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.connect(url, protocols, options, (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _socketID));
    }
}
var _nextWebSocketId = {
    writable: true,
    value: 1
};
function close(code, reason) {
    var _this_websocketModule;
    // See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
    const statusCode = typeof code === 'number' ? code : CloseCode.NORMAL;
    const closeReason = typeof reason === 'string' ? reason : '';
    (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.close(statusCode, closeReason, (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _socketID));
}
function registerEvents() {
    /* eslint-disable @typescript-eslint/unbound-method */ GlobalEventEmitter.addListener('websocketMessage', (0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _onMessage, onMessage), this);
    GlobalEventEmitter.addListener('websocketOpen', (0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _onOpen, onOpen), this);
    GlobalEventEmitter.addListener('websocketClosed', (0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _onClosed, onClosed), this);
    GlobalEventEmitter.addListener('websocketFailed', (0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _onFailed, onFailed), this);
/* eslint-enable @typescript-eslint/unbound-method */ }
function unregisterEvents() {
    /* eslint-disable @typescript-eslint/unbound-method */ GlobalEventEmitter.removeListener('websocketMessage', (0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _onMessage, onMessage));
    GlobalEventEmitter.removeListener('websocketOpen', (0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _onOpen, onOpen));
    GlobalEventEmitter.removeListener('websocketClosed', (0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _onClosed, onClosed));
    GlobalEventEmitter.removeListener('websocketFailed', (0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _onFailed, onFailed));
/* eslint-enable @typescript-eslint/unbound-method */ }
function onMessage(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _socketID)) return;
    const data = event.data;
    event.type;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'message', {
        data
    }));
}
function onOpen(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _socketID)) return;
    this.readyState = ReadyState.OPEN;
    this.protocol = event.protocol;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'open'));
}
function onClosed(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _socketID)) return;
    this.readyState = ReadyState.CLOSED;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'close', {
        code: event.code,
        reason: event.reason
    }));
    (0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _unregisterEvents, unregisterEvents).call(this);
}
function onFailed(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__rspack_import_1._)(this, _socketID)) return;
    this.readyState = ReadyState.CLOSED;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'error', {
        message: event.message
    }));
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'close', {
        code: CloseCode.ABNORMAL,
        reason: event.message
    }));
    (0,_swc_helpers_class_private_method_get__rspack_import_2._)(this, _unregisterEvents, unregisterEvents).call(this);
}
function createWebSocketEvent(type, data) {
    return Object.assign({
        type,
        target: this
    }, data);
}
_a = WebSocketImpl; //# sourceMappingURL=WebSocketImpl.js.map


},
"(react:background)/./node_modules/@lynx-js/websocket/lib/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ReadyState: () => (/* reexport safe */ _WebSocketImpl_js__rspack_import_1.ReadyState),
  WebSocket: () => (/* reexport safe */ _WebSocket_js__rspack_import_0.WebSocket),
  "default": () => (__rspack_default_export)
});
/* import */ var _WebSocket_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocket.js");
/* import */ var _WebSocketImpl_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocketImpl.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


/* export default */ const __rspack_default_export = (_WebSocket_js__rspack_import_0.WebSocket);
 //# sourceMappingURL=index.js.map


},
"(react:background)/./node_modules/@rspack/core/hot/dev-server.js"(module, __unused_rspack_exports, __webpack_require__) {
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ /* globals __webpack_hash__ */ if (true) {
    /** @type {undefined|string} */ var lastHash;
    var upToDate = function upToDate() {
        return /** @type {string} */ lastHash.indexOf(__webpack_require__.h()) >= 0;
    };
    var log = __webpack_require__("(react:background)/./node_modules/@rspack/core/hot/log.js");
    var check = function check() {
        module.hot.check(true).then(function(updatedModules) {
            if (!updatedModules) {
                log('warning', '[HMR] Cannot find update. ' + (typeof window !== 'undefined' ? 'Need to do a full reload!' : 'Please reload manually!'));
                log('warning', '[HMR] (Probably because of restarting the webpack-dev-server)');
                if (typeof window !== 'undefined') window.location.reload();
                return;
            }
            if (!upToDate()) check();
            __webpack_require__("(react:background)/./node_modules/@rspack/core/hot/log-apply-result.js")(updatedModules, updatedModules);
            if (upToDate()) log('info', '[HMR] App is up to date.');
        }).catch(function(err) {
            var status = module.hot.status();
            if ([
                'abort',
                'fail'
            ].indexOf(status) >= 0) {
                log('warning', '[HMR] Cannot apply update. ' + (typeof window !== 'undefined' ? 'Need to do a full reload!' : 'Please reload manually!'));
                log('warning', '[HMR] ' + log.formatError(err));
                if (typeof window !== 'undefined') window.location.reload();
            } else log('warning', '[HMR] Update failed: ' + log.formatError(err));
        });
    };
    var hotEmitter = __webpack_require__("(react:background)/./node_modules/@rspack/core/hot/emitter.js");
    hotEmitter.on('webpackHotUpdate', function(currentHash) {
        lastHash = currentHash;
        if (!upToDate() && module.hot.status() === 'idle') {
            log('info', '[HMR] Checking for updates on the server...');
            check();
        }
    });
    log('info', '[HMR] Waiting for update signal from WDS...');
} else {}


},
"(react:background)/./node_modules/@rspack/core/hot/emitter.js"(module) {
function EventEmitter() {
    this.events = {};
}
EventEmitter.prototype.on = function(eventName, callback) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
};
EventEmitter.prototype.emit = function(eventName) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (this.events[eventName]) this.events[eventName].forEach(function(callback) {
        callback.apply(null, args);
    });
};
module.exports = new EventEmitter();


},
"(react:background)/./node_modules/@rspack/core/hot/log-apply-result.js"(module, __unused_rspack_exports, __webpack_require__) {
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ /**
 * @param {(string | number)[]} updatedModules updated modules
 * @param {(string | number)[] | null} renewedModules renewed modules
 */ module.exports = function(updatedModules, renewedModules) {
    var unacceptedModules = updatedModules.filter(function(moduleId) {
        return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });
    var log = __webpack_require__("(react:background)/./node_modules/@rspack/core/hot/log.js");
    if (unacceptedModules.length > 0) {
        log('warning', "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
        unacceptedModules.forEach(function(moduleId) {
            log('warning', '[HMR]  - ' + moduleId);
        });
    }
    if (!renewedModules || renewedModules.length === 0) log('info', '[HMR] Nothing hot updated.');
    else {
        log('info', '[HMR] Updated modules:');
        renewedModules.forEach(function(moduleId) {
            if (typeof moduleId === 'string' && moduleId.indexOf('!') !== -1) {
                var parts = moduleId.split('!');
                log.groupCollapsed('info', '[HMR]  - ' + parts.pop());
                log('info', '[HMR]  - ' + moduleId);
                log.groupEnd('info');
            } else log('info', '[HMR]  - ' + moduleId);
        });
        var numberIds = renewedModules.every(function(moduleId) {
            return typeof moduleId === 'number';
        });
        if (numberIds) log('info', '[HMR] Consider using the optimization.moduleIds: "named" for module names.');
    }
};


},
"(react:background)/./node_modules/@rspack/core/hot/log.js"(module) {
/** @typedef {"info" | "warning" | "error"} LogLevel */ /** @type {LogLevel} */ var logLevel = 'info';
function dummy() {}
/**
 * @param {LogLevel} level log level
 * @returns {boolean} true, if should log
 */ function shouldLog(level) {
    var shouldLog = logLevel === 'info' && level === 'info' || [
        'info',
        'warning'
    ].indexOf(logLevel) >= 0 && level === 'warning' || [
        'info',
        'warning',
        'error'
    ].indexOf(logLevel) >= 0 && level === 'error';
    return shouldLog;
}
/**
 * @param {(msg?: string) => void} logFn log function
 * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient
 */ function logGroup(logFn) {
    return function(level, msg) {
        if (shouldLog(level)) logFn(msg);
    };
}
/**
 * @param {LogLevel} level log level
 * @param {string|Error} msg message
 */ module.exports = function(level, msg) {
    if (shouldLog(level)) {
        if (level === 'info') console.log(msg);
        else if (level === 'warning') console.warn(msg);
        else if (level === 'error') console.error(msg);
    }
};
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
module.exports.group = logGroup(group);
module.exports.groupCollapsed = logGroup(groupCollapsed);
module.exports.groupEnd = logGroup(groupEnd);
/**
 * @param {LogLevel} level log level
 */ module.exports.setLogLevel = function(level) {
    logLevel = level;
};
/**
 * @param {Error} err error
 * @returns {string} formatted error
 */ module.exports.formatError = function(err) {
    var message = err.message;
    var stack = err.stack;
    if (!stack) return message;
    else if (stack.indexOf(message) < 0) return message + '\n' + stack;
    else return stack;
};


},
"(react:background)/./node_modules/@swc/helpers/esm/_check_private_redeclaration.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_check_private_redeclaration)
});
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}



},
"(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_apply_descriptor_get)
});
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}



},
"(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_apply_descriptor_set)
});
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}



},
"(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_apply_descriptor_update)
});
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) throw new TypeError("attempted to read set only private field");
        if (!("__destrWrapper" in descriptor)) descriptor.__destrWrapper = {
            set value (v){
                descriptor.set.call(receiver, v);
            },
            get value () {
                return descriptor.get.call(receiver);
            }
        };
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        return descriptor;
    }
}



},
"(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_access.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_check_private_static_access)
});
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
}



},
"(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_field_descriptor.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_check_private_static_field_descriptor)
});
function _class_check_private_static_field_descriptor(descriptor, action) {
    if (descriptor === undefined) throw new TypeError("attempted to " + action + " private static field before its declaration");
}



},
"(react:background)/./node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_extract_field_descriptor)
});
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}



},
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_get.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_field_get)
});
/* import */ var _class_apply_descriptor_get_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js");
/* import */ var _class_extract_field_descriptor_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js");


function _class_private_field_get(receiver, privateMap) {
    var descriptor = (0,_class_extract_field_descriptor_js__rspack_import_0._)(receiver, privateMap, "get");
    return (0,_class_apply_descriptor_get_js__rspack_import_1._)(receiver, descriptor);
}



},
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_init.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_field_init)
});
/* import */ var _check_private_redeclaration_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_check_private_redeclaration.js");

function _class_private_field_init(obj, privateMap, value) {
    (0,_check_private_redeclaration_js__rspack_import_0._)(obj, privateMap);
    privateMap.set(obj, value);
}



},
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_set.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_field_set)
});
/* import */ var _class_apply_descriptor_set_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js");
/* import */ var _class_extract_field_descriptor_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js");


function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = (0,_class_extract_field_descriptor_js__rspack_import_0._)(receiver, privateMap, "set");
    (0,_class_apply_descriptor_set_js__rspack_import_1._)(receiver, descriptor, value);
    return value;
}



},
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_get.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_method_get)
});
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}



},
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_init.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_method_init)
});
/* import */ var _check_private_redeclaration_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_check_private_redeclaration.js");

function _class_private_method_init(obj, privateSet) {
    (0,_check_private_redeclaration_js__rspack_import_0._)(obj, privateSet);
    privateSet.add(obj);
}



},
"(react:background)/./node_modules/@swc/helpers/esm/_class_static_private_field_update.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_static_private_field_update)
});
/* import */ var _class_apply_descriptor_update_js__rspack_import_2 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js");
/* import */ var _class_check_private_static_access_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_access.js");
/* import */ var _class_check_private_static_field_descriptor_js__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_field_descriptor.js");



function _class_static_private_field_update(receiver, classConstructor, descriptor) {
    (0,_class_check_private_static_access_js__rspack_import_0._)(receiver, classConstructor);
    (0,_class_check_private_static_field_descriptor_js__rspack_import_1._)(descriptor, "update");
    return (0,_class_apply_descriptor_update_js__rspack_import_2._)(receiver, descriptor);
}



},
"(react:background)/./node_modules/eventemitter3/index.js"(module) {

var has = Object.prototype.hasOwnProperty, prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') throw new TypeError('The listener must be a function');
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events)if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++)ee[i] = handlers[i].fn;
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++)args[i - 1] = arguments[i];
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++)args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) clearEvent(this, evt);
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++)if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
//
// Expose the module.
//
if (true) module.exports = EventEmitter;


},
"(react:background)/./node_modules/eventemitter3/index.mjs"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EventEmitter: () => (/* reexport default from dynamic */ _index_js__rspack_import_0_default.a),
  "default": () => (__rspack_default_export)
});
/* import */ var _index_js__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/eventemitter3/index.js");
/* import */ var _index_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_index_js__rspack_import_0);


/* export default */ const __rspack_default_export = ((_index_js__rspack_import_0_default()));


},
"(react:background)/./node_modules/preact/compat/dist/compat.mjs"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* import */ var preact_hooks__rspack_import_1 = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");




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
 * Check if two values are the same value
 * @param {*} x
 * @param {*} y
 * @returns {boolean}
 */ function is(x, y) {
    return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
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
    (0,preact_hooks__rspack_import_1.useLayoutEffect)(function() {
        _instance.__ = value;
        _instance._getSnapshot = getSnapshot;
        if (didSnapshotChange(_instance)) forceUpdate({
            _instance: _instance
        });
    }, [
        subscribe,
        value,
        getSnapshot
    ]);
    (0,preact_hooks__rspack_import_1.useEffect)(function() {
        if (didSnapshotChange(_instance)) forceUpdate({
            _instance: _instance
        });
        return subscribe(function() {
            if (didSnapshotChange(_instance)) forceUpdate({
                _instance: _instance
            });
        });
    }, [
        subscribe
    ]);
    return value;
}
/** @type {(inst: Store) => boolean} */ function didSnapshotChange(inst) {
    try {
        return !is(inst.__, inst._getSnapshot());
    } catch (error) {
        return true;
    }
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


},
"(react:background)/./node_modules/preact/dist/preact.mjs"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/** Indicates that this node needs to be inserted while patching children */ var INSERT_VNODE = 4;
/** Indicates a VNode has been matched with another VNode in the diff */ var MATCHED = 2;
/** Reset all mode flags */ var RESET_MODE = ~(MODE_HYDRATE | MODE_SUSPENDED);
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var XHTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var NULL = null;
var UNDEFINED = undefined;
var EMPTY_OBJ = /** @type {any} */ {};
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
/**
 * Remove a child node from its parent if attached. This is a workaround for
 * IE11 which doesn't support `Element.prototype.remove()`. Using this function
 * is smaller than including a dedicated polyfill.
 * @param {import('./index').ContainerNode} node The node to remove
 */ function removeNode(node) {
    if (node && node.parentNode) node.parentNode.removeChild(node);
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
/**
 * @param {import('./internal').VNode} vnode
 * @param {number | null} [childIndex]
 */ function getDomSibling(vnode, childIndex) {
    if (childIndex == NULL) return vnode.__ ? getDomSibling(vnode.__, vnode.__i + 1) : NULL;
    var sibling;
    for(; childIndex < vnode.__k.length; childIndex++){
        sibling = vnode.__k[childIndex];
        if (sibling != NULL && sibling.__e != NULL) // we can rely on _dom to tell us if this subtree contains a
        // rendered DOM node, and what the first rendered DOM node is
        return sibling.__e;
    }
    // If we get here, we have not found a DOM node in this vnode's children.
    // We must resume from this vnode's sibling (in it's parent _children array)
    // Only climb up and search the parent if we aren't searching through a DOM
    // VNode (meaning we reached the DOM parent of the original vnode that began
    // the search)
    return typeof vnode.type == 'function' ? getDomSibling(vnode) : NULL;
}
/**
 * Trigger in-place re-rendering of a component.
 * @param {import('./internal').Component} component The component to rerender
 */ function renderComponent(component) {
    if (component.__P && component.__d) {
        var oldVNode = component.__v, oldDom = oldVNode.__e, commitQueue = [], refQueue = [], newVNode = assign({}, oldVNode);
        newVNode.__v = oldVNode.__v + 1;
        if (options.vnode) options.vnode(newVNode);
        if (options.renderComponent) options.renderComponent(newVNode, component);
        diff(component.__P, newVNode, oldVNode, component.__n, component.__P.namespaceURI, newVNode._slotIndex, oldVNode.__u & MODE_HYDRATE ? [
            oldDom
        ] : NULL, commitQueue, oldDom == NULL ? getDomSibling(oldVNode) : oldDom, !!(oldVNode.__u & MODE_HYDRATE), refQueue);
        newVNode.__v = oldVNode.__v;
        newVNode.__.__k[newVNode.__i] = newVNode;
        commitRoot(commitQueue, newVNode, refQueue);
        oldVNode.__e = oldVNode.__ = null;
        if (newVNode.__e != oldDom) updateParentDomPointers(newVNode);
    }
}
/**
 * @param {import('./internal').VNode} vnode
 */ function updateParentDomPointers(vnode) {
    if ((vnode = vnode.__) != NULL && vnode.__c != NULL) {
        vnode.__e = vnode.__c.base = NULL;
        vnode.__k.some(function(child) {
            if (child != NULL && child.__e != NULL) return vnode.__e = vnode.__c.base = child.__e;
        });
        return updateParentDomPointers(vnode);
    }
}
/**
 * The render queue
 * @type {Array<import('./internal').Component>}
 */ var rerenderQueue = [];
/*
 * The value of `Component.debounce` must asynchronously invoke the passed in callback. It is
 * important that contributors to Preact can consistently reason about what calls to `setState`, etc.
 * do, and when their effects will be applied. See the links below for some further reading on designing
 * asynchronous APIs.
 * * [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony)
 * * [Callbacks synchronous and asynchronous](https://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/)
 */ var prevDebounce;
var defer = typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
/**
 * Enqueue a rerender of a component
 * @param {import('./internal').Component} c The component to rerender
 */ function enqueueRender(c) {
    'background only';
    if (!c.__d && (c.__d = true) && rerenderQueue.push(c) && !process.__r++ || prevDebounce != options.debounceRendering) {
        prevDebounce = options.debounceRendering;
        (prevDebounce || defer)(process);
    }
}
/**
 * @param {import('./internal').Component} a
 * @param {import('./internal').Component} b
 */ var depthSort = function depthSort(a, b) {
    return a.__v.__b - b.__v.__b;
};
/** Flush the render queue by rerendering all queued components */ function process() {
    'background only';
    try {
        var c, l = 1;
        // Don't update `renderCount` yet. Keep its value non-zero to prevent unnecessary
        // process() calls from getting scheduled while `queue` is still being consumed.
        while(rerenderQueue.length){
            // Keep the rerender queue sorted by (depth, insertion order). The queue
            // will initially be sorted on the first iteration only if it has more than 1 item.
            //
            // New items can be added to the queue e.g. when rerendering a provider, so we want to
            // keep the order from top to bottom with those new items so we can handle them in a
            // single pass
            if (rerenderQueue.length > l) rerenderQueue.sort(depthSort);
            c = rerenderQueue.shift();
            l = rerenderQueue.length;
            renderComponent(c);
        }
    } finally{
        rerenderQueue.length = process.__r = 0;
    }
}
process.__r = 0;
/**
 * @typedef {import('../internal').ComponentChildren} ComponentChildren
 * @typedef {import('../internal').Component} Component
 * @typedef {import('../internal').PreactElement} PreactElement
 * @typedef {import('../internal').VNode} VNode
 */ /**
 * Diff the children of a virtual node
 * @param {PreactElement} parentDom The DOM element whose children are being
 * diffed
 * @param {ComponentChildren[]} renderResult
 * @param {VNode} newParentVNode The new virtual node whose children should be
 * diff'ed against oldParentVNode
 * @param {VNode} oldParentVNode The old virtual node whose children should be
 * diff'ed against newParentVNode
 * @param {object} globalContext The current context object - modified by
 * getChildContext
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {number | true} slotIndex The index of the slot being processed. `true` indicates that `renderResult` is generated from `$[num]` slots
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {PreactElement} oldDom The current attached DOM element any new dom
 * elements should be placed around. Likely `null` on first render (except when
 * hydrating). Can be a sibling DOM element when diffing Fragments that have
 * siblings. In most cases, it starts out as `oldChildren[0]._dom`.
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 */ function diffChildren(parentDom, renderResult, newParentVNode, oldParentVNode, globalContext, namespace, slotIndex, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
    var i, /** @type {VNode} */ oldVNode, /** @type {VNode} */ childVNode, /** @type {PreactElement} */ newDom, /** @type {PreactElement} */ firstChildDom;
    // This is a compression of oldParentVNode!=null && oldParentVNode != EMPTY_OBJ && oldParentVNode._children || EMPTY_ARR
    // as EMPTY_OBJ._children should be `undefined`.
    /** @type {VNode[]} */ var oldChildren = oldParentVNode && oldParentVNode.__k || EMPTY_ARR;
    var newChildrenLength = renderResult.length;
    oldDom = constructNewChildrenArray(newParentVNode, renderResult, oldChildren, oldDom, newChildrenLength, slotIndex);
    for(i = 0; i < newChildrenLength; i++){
        childVNode = newParentVNode.__k[i];
        if (childVNode == NULL) continue;
        // At this point, constructNewChildrenArray has assigned _index to be the
        // matchingIndex for this VNode's oldVNode (or -1 if there is no oldVNode).
        oldVNode = childVNode.__i != -1 && oldChildren[childVNode.__i] || EMPTY_OBJ;
        // Update childVNode._index to its final index
        childVNode.__i = i;
        // Morph the old element into the new one, but don't append it to the dom yet
        var result = diff(parentDom, childVNode, oldVNode, globalContext, namespace, // all <text/> element should inherit the `slotIndex` of `0`
        slotIndex === true ? i : slotIndex, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue);
        // Adjust DOM nodes
        newDom = childVNode.__e;
        if (childVNode.ref && oldVNode.ref != childVNode.ref) {
            if (oldVNode.ref) applyRef(oldVNode.ref, NULL, childVNode);
            refQueue.push(childVNode.ref, childVNode.__c || newDom, childVNode);
        }
        if (firstChildDom == NULL && newDom != NULL) firstChildDom = newDom;
        var shouldPlace = !!(childVNode.__u & INSERT_VNODE);
        if (shouldPlace || oldVNode.__k === childVNode.__k) {
            oldDom = insert(childVNode, oldDom, parentDom, shouldPlace);
            // When a matched VNode is physically moved via INSERT_VNODE, its old
            // _dom pointer becomes a stale positional reference. Clear it so that
            // getDomSibling (called from nested diffs) won't return this stale
            // reference and mis-place subsequent DOM nodes. See #5065.
            if (shouldPlace && oldVNode.__e) oldVNode.__e = NULL;
        } else if (typeof childVNode.type == 'function' && result !== UNDEFINED) oldDom = result;
        else if (newDom) oldDom = newDom.nextSibling;
        // Unset diffing flags
        childVNode.__u &= ~(INSERT_VNODE | MATCHED);
    }
    newParentVNode.__e = firstChildDom;
    return oldDom;
}
/**
 * @param {VNode} newParentVNode
 * @param {ComponentChildren[]} renderResult
 * @param {VNode[]} oldChildren
 */ function constructNewChildrenArray(newParentVNode, renderResult, oldChildren, oldDom, newChildrenLength, slotIndex) {
    /** @type {number} */ var i;
    /** @type {VNode} */ var childVNode;
    /** @type {VNode} */ var oldVNode;
    var oldChildrenLength = oldChildren.length, remainingOldChildren = oldChildrenLength;
    var skew = 0;
    newParentVNode.__k = new Array(newChildrenLength);
    for(i = 0; i < newChildrenLength; i++){
        // @ts-expect-error We are reusing the childVNode variable to hold both the
        // pre and post normalized childVNode
        childVNode = renderResult[i];
        if (childVNode == NULL || typeof childVNode == 'boolean' || typeof childVNode == 'function' || // ts-expect-error Reduce an extra dom on empty text nodes
        childVNode === '') {
            newParentVNode.__k[i] = NULL;
            continue;
        } else if (typeof childVNode == 'string' || typeof childVNode == 'number' || // eslint-disable-next-line valid-typeof
        typeof childVNode == 'bigint' || childVNode.constructor == String) childVNode = newParentVNode.__k[i] = createVNode(NULL, childVNode, NULL, NULL, NULL);
        else if (isArray(childVNode)) childVNode = newParentVNode.__k[i] = createVNode(Fragment, {
            children: childVNode
        }, NULL, NULL, NULL);
        else if (childVNode.constructor === UNDEFINED && childVNode.__b > 0) // scenario:
        //   const reuse = <div />
        //   <div>{reuse}<span />{reuse}</div>
        childVNode = newParentVNode.__k[i] = createVNode(childVNode.type, childVNode.props, childVNode.key, childVNode.ref ? childVNode.ref : NULL, childVNode.__v);
        else newParentVNode.__k[i] = childVNode;
        // Lynx: stamp slot identity so cross-position diff matching is constrained
        // to the same structural slot. At template-slot level (slotIndex === true)
        // every child gets a unique slot id (its position); at Fragment / list level
        // children share the parent's slot id, so keyed reorder still works.
        childVNode._slotIndex = slotIndex === true ? i : slotIndex;
        var skewedIndex = i + skew;
        childVNode.__ = newParentVNode;
        childVNode.__b = newParentVNode.__b + 1;
        // Temporarily store the matchingIndex on the _index property so we can pull
        // out the oldVNode in diffChildren. We'll override this to the VNode's
        // final index after using this property to get the oldVNode
        var matchingIndex = childVNode.__i = findMatchingIndex(childVNode, oldChildren, skewedIndex, remainingOldChildren);
        oldVNode = NULL;
        if (matchingIndex != -1) {
            oldVNode = oldChildren[matchingIndex];
            remainingOldChildren--;
            if (oldVNode) oldVNode.__u |= MATCHED;
        }
        // Here, we define isMounting for the purposes of the skew diffing
        // algorithm. Nodes that are unsuspending are considered mounting and we detect
        // this by checking if oldVNode._original == null
        var isMounting = oldVNode == NULL || oldVNode.__v == NULL;
        if (isMounting) {
            if (matchingIndex == -1) {
                // When the array of children is growing we need to decrease the skew
                // as we are adding a new element to the array.
                // Example:
                // [1, 2, 3] --> [0, 1, 2, 3]
                // oldChildren   newChildren
                //
                // The new element is at index 0, so our skew is 0,
                // we need to decrease the skew as we are adding a new element.
                // The decrease will cause us to compare the element at position 1
                // with value 1 with the element at position 0 with value 0.
                //
                // A linear concept is applied when the array is shrinking,
                // if the length is unchanged we can assume that no skew
                // changes are needed.
                if (newChildrenLength > oldChildrenLength) skew--;
                else if (newChildrenLength < oldChildrenLength) skew++;
            }
            // If we are mounting a DOM VNode, mark it for insertion
            if (typeof childVNode.type != 'function') childVNode.__u |= INSERT_VNODE;
        } else if (matchingIndex != skewedIndex) {
            // When we move elements around i.e. [0, 1, 2] --> [1, 0, 2]
            // --> we diff 1, we find it at position 1 while our skewed index is 0 and our skew is 0
            //     we set the skew to 1 as we found an offset.
            // --> we diff 0, we find it at position 0 while our skewed index is at 2 and our skew is 1
            //     this makes us increase the skew again.
            // --> we diff 2, we find it at position 2 while our skewed index is at 4 and our skew is 2
            //
            // this becomes an optimization question where currently we see a 1 element offset as an insertion
            // or deletion i.e. we optimize for [0, 1, 2] --> [9, 0, 1, 2]
            // while a more than 1 offset we see as a swap.
            // We could probably build heuristics for having an optimized course of action here as well, but
            // might go at the cost of some bytes.
            //
            // If we wanted to optimize for i.e. only swaps we'd just do the last two code-branches and have
            // only the first item be a re-scouting and all the others fall in their skewed counter-part.
            // We could also further optimize for swaps
            if (matchingIndex == skewedIndex - 1) skew--;
            else if (matchingIndex == skewedIndex + 1) skew++;
            else {
                if (matchingIndex > skewedIndex) skew--;
                else skew++;
                // Move this VNode's DOM if the original index (matchingIndex) doesn't
                // match the new skew index (i + new skew)
                // In the former two branches we know that it matches after skewing
                childVNode.__u |= INSERT_VNODE;
            }
        }
    }
    // Remove remaining oldChildren if there are any. Loop forwards so that as we
    // unmount DOM from the beginning of the oldChildren, we can adjust oldDom to
    // point to the next child, which needs to be the first DOM node that won't be
    // unmounted.
    if (remainingOldChildren) for(i = 0; i < oldChildrenLength; i++){
        oldVNode = oldChildren[i];
        if (oldVNode != NULL && (oldVNode.__u & MATCHED) == 0) {
            if (oldVNode.__e == oldDom) oldDom = getDomSibling(oldVNode);
            unmount(oldVNode, oldVNode);
        }
    }
    return oldDom;
}
/**
 * @param {VNode} parentVNode
 * @param {PreactElement} oldDom
 * @param {PreactElement} parentDom
 * @param {boolean} shouldPlace
 * @returns {PreactElement}
 */ function insert(parentVNode, oldDom, parentDom, shouldPlace) {
    var _parentVNode$_dom, _parentVNode$_dom2;
    // Note: VNodes in nested suspended trees may be missing _children.
    if (typeof parentVNode.type == 'function') {
        var children = parentVNode.__k;
        for(var i = 0; children && i < children.length; i++)if (children[i]) {
            // If we enter this code path on sCU bailout, where we copy
            // oldVNode._children to newVNode._children, we need to update the old
            // children's _parent pointer to point to the newVNode (parentVNode
            // here).
            children[i].__ = parentVNode;
            oldDom = insert(children[i], oldDom, parentDom, shouldPlace);
        }
        return oldDom;
    } else if (((_parentVNode$_dom = parentVNode.__e) == null ? void 0 : _parentVNode$_dom.__nextSlotIndex) != ((_parentVNode$_dom2 = parentVNode.__e) == null ? void 0 : _parentVNode$_dom2.__slotIndex)) {
        parentVNode.__e.__slotIndex = parentVNode.__e.__nextSlotIndex;
        // `oldDom` is the diff loop's cursor: the next old DOM child to
        // process at this parent. Inserting before it places the moved
        // node at the cursor's position, which is exactly the slot we
        // are processing. Recover via `getDomSibling` if the cursor was
        // unmounted earlier in the same diff, mirroring the plain-branch.
        if (oldDom && parentVNode.type && !oldDom.parentNode) oldDom = getDomSibling(parentVNode);
        // When the cross-slot node is already at the cursor position, inserting
        // before itself corrupts BSI linked lists. Use nextSibling instead —
        // it's the same effective DOM position and emits a valid patch.
        parentDom.insertBefore(parentVNode.__e, (parentVNode.__e !== oldDom ? oldDom : oldDom && oldDom.nextSibling) || NULL);
        oldDom = parentVNode.__e;
    } else if (parentVNode.__e != oldDom) {
        if (shouldPlace) {
            if (oldDom && parentVNode.type && !oldDom.parentNode) oldDom = getDomSibling(parentVNode);
            parentDom.insertBefore(parentVNode.__e, oldDom || NULL);
        }
        oldDom = parentVNode.__e;
    }
    do oldDom = oldDom && oldDom.nextSibling;
    while (oldDom != NULL && oldDom.nodeType == 8)
    return oldDom;
}
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
 * @param {VNode} childVNode
 * @param {VNode[]} oldChildren
 * @param {number} skewedIndex
 * @param {number} remainingOldChildren
 * @returns {number}
 */ function findMatchingIndex(childVNode, oldChildren, skewedIndex, remainingOldChildren) {
    var key = childVNode.key;
    var type = childVNode.type;
    var newSlot = childVNode._slotIndex;
    var oldVNode = oldChildren[skewedIndex];
    var matched = oldVNode != NULL && (oldVNode.__u & MATCHED) == 0;
    // We only need to perform a search if there are more children
    // (remainingOldChildren) to search. However, if the oldVNode we just looked
    // at skewedIndex was not already used in this diff, then there must be at
    // least 1 other (so greater than 1) remainingOldChildren to attempt to match
    // against. So the following condition checks that ensuring
    // remainingOldChildren > 1 if the oldVNode is not already used/matched. Else
    // if the oldVNode was null or matched, then there could needs to be at least
    // 1 (aka `remainingOldChildren > 0`) children to find and compare against.
    //
    // Lynx: also require matching _slotIndex so that template-slot level diffs
    // (where each child has a unique slot id) cannot reuse a vnode from a
    // different structural slot, while Fragment/list-level diffs (where all
    // children share the parent's slot id) keep their keyed reorder behavior.
    var shouldSearch = remainingOldChildren > (matched ? 1 : 0);
    if (oldVNode === NULL && key == null || matched && key == oldVNode.key && type == oldVNode.type && oldVNode._slotIndex === newSlot) return skewedIndex;
    else if (shouldSearch) {
        var x = skewedIndex - 1;
        var y = skewedIndex + 1;
        while(x >= 0 || y < oldChildren.length){
            var childIndex = x >= 0 ? x-- : y++;
            oldVNode = oldChildren[childIndex];
            if (oldVNode != NULL && (oldVNode.__u & MATCHED) == 0 && key == oldVNode.key && type == oldVNode.type && oldVNode._slotIndex === newSlot) return childIndex;
        }
    }
    return -1;
}
// import { IS_NON_DIMENSIONAL, NULL, SVG_NAMESPACE } from '../constants';
// import options from '../options';
// function setStyle(style, key, value) {
// 	if (key[0] == '-') {
// 		style.setProperty(key, value == NULL ? '' : value);
// 	} else if (value == NULL) {
// 		style[key] = '';
// 	} else if (typeof value != 'number' || IS_NON_DIMENSIONAL.test(key)) {
// 		style[key] = value;
// 	} else {
// 		style[key] = value + 'px';
// 	}
// }
// const CAPTURE_REGEX = /(PointerCapture)$|Capture$/i;
// A logical clock to solve issues like https://github.com/preactjs/preact/issues/3927.
// When the DOM performs an event it leaves micro-ticks in between bubbling up which means that
// an event can trigger on a newly reated DOM-node while the event bubbles up.
//
// Originally inspired by Vue
// (https://github.com/vuejs/core/blob/caeb8a68811a1b0f79/packages/runtime-dom/src/modules/events.ts#L90-L101),
// but modified to use a logical clock instead of Date.now() in case event handlers get attached
// and events get dispatched during the same millisecond.
//
// The clock is incremented after each new event dispatch. This allows 1 000 000 new events
// per second for over 280 years before the value reaches Number.MAX_SAFE_INTEGER (2**53 - 1).
// let eventClock = 0;
/**
 * Set a property value on a DOM node
 * @param {import('../internal').PreactElement} dom The DOM node to modify
 * @param {string} name The name of the property to set
 * @param {*} value The value to set the property to
 * @param {*} oldValue The old value the property had
 * @param {string} namespace Whether or not this DOM node is an SVG node or not
 */ function setProperty(dom, name, value, oldValue, namespace) {
    dom.setAttribute(name, value);
// let useCapture;
// o: if (name == 'style') {
// 	if (typeof value == 'string') {
// 		dom.style.cssText = value;
// 	} else {
// 		if (typeof oldValue == 'string') {
// 			dom.style.cssText = oldValue = '';
// 		}
// 		if (oldValue) {
// 			for (name in oldValue) {
// 				if (!(value && name in value)) {
// 					setStyle(dom.style, name, '');
// 				}
// 			}
// 		}
// 		if (value) {
// 			for (name in value) {
// 				if (!oldValue || value[name] != oldValue[name]) {
// 					setStyle(dom.style, name, value[name]);
// 				}
// 			}
// 		}
// 	}
// }
// // Benchmark for comparison: https://esbench.com/bench/574c954bdb965b9a00965ac6
// else if (name[0] == 'o' && name[1] == 'n') {
// 	useCapture = name != (name = name.replace(CAPTURE_REGEX, '$1'));
// 	const lowerCaseName = name.toLowerCase();
// 	// Infer correct casing for DOM built-in events:
// 	if (lowerCaseName in dom || name == 'onFocusOut' || name == 'onFocusIn')
// 		name = lowerCaseName.slice(2);
// 	else name = name.slice(2);
// 	if (!dom._listeners) dom._listeners = {};
// 	dom._listeners[name + useCapture] = value;
// 	if (value) {
// 		if (!oldValue) {
// 			value._attached = eventClock;
// 			dom.addEventListener(
// 				name,
// 				useCapture ? eventProxyCapture : eventProxy,
// 				useCapture
// 			);
// 		} else {
// 			value._attached = oldValue._attached;
// 		}
// 	} else {
// 		dom.removeEventListener(
// 			name,
// 			useCapture ? eventProxyCapture : eventProxy,
// 			useCapture
// 		);
// 	}
// } else {
// 	if (namespace == SVG_NAMESPACE) {
// 		// Normalize incorrect prop usage for SVG:
// 		// - xlink:href / xlinkHref --> href (xlink:href was removed from SVG and isn't needed)
// 		// - className --> class
// 		name = name.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
// 	} else if (
// 		name != 'width' &&
// 		name != 'height' &&
// 		name != 'href' &&
// 		name != 'list' &&
// 		name != 'form' &&
// 		// Default value in browsers is `-1` and an empty string is
// 		// cast to `0` instead
// 		name != 'tabIndex' &&
// 		name != 'download' &&
// 		name != 'rowSpan' &&
// 		name != 'colSpan' &&
// 		name != 'role' &&
// 		name != 'popover' &&
// 		name in dom
// 	) {
// 		try {
// 			dom[name] = value == NULL ? '' : value;
// 			// labelled break is 1b smaller here than a return statement (sorry)
// 			break o;
// 		} catch (e) {}
// 	}
// 	// aria- and data- attributes have no boolean representation.
// 	// A `false` value is different from the attribute not being
// 	// present, so we can't remove it. For non-boolean aria
// 	// attributes we could treat false as a removal, but the
// 	// amount of exceptions would cost too many bytes. On top of
// 	// that other frameworks generally stringify `false`.
// 	if (typeof value == 'function') {
// 		// never serialize functions as attribute values
// 	} else if (value != NULL && (value !== false || name[4] == '-')) {
// 		dom.setAttribute(name, name == 'popover' && value == true ? '' : value);
// 	} else {
// 		dom.removeAttribute(name);
// 	}
// }
}
/**
 * Create an event proxy function.
 * @param {boolean} useCapture Is the event handler for the capture phase.
 * @private
 */ // function createEventProxy(useCapture) {
// 	/**
// 	 * Proxy an event to hooked event handlers
// 	 * @param {import('../internal').PreactEvent} e The event object from the browser
// 	 * @private
// 	 */
// 	return function (e) {
// 		if (this._listeners) {
// 			const eventHandler = this._listeners[e.type + useCapture];
// 			if (e._dispatched == NULL) {
// 				e._dispatched = eventClock++;
// 				// When `e._dispatched` is smaller than the time when the targeted event
// 				// handler was attached we know we have bubbled up to an element that was added
// 				// during patching the DOM.
// 			} else if (e._dispatched < eventHandler._attached) {
// 				return;
// 			}
// 			return eventHandler(options.event ? options.event(e) : e);
// 		}
// 	};
// }
// const eventProxy = createEventProxy(false);
// const eventProxyCapture = createEventProxy(true);
/**
 * @typedef {import('../internal').ComponentChildren} ComponentChildren
 * @typedef {import('../internal').Component} Component
 * @typedef {import('../internal').PreactElement} PreactElement
 * @typedef {import('../internal').VNode} VNode
 */ /**
 * @template {any} T
 * @typedef {import('../internal').Ref<T>} Ref<T>
 */ /**
 * Diff two virtual nodes and apply proper changes to the DOM
 * @param {PreactElement} parentDom The parent of the DOM element
 * @param {VNode} newVNode The new virtual node
 * @param {VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object. Modified by
 * getChildContext
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {number} slotIndex The index of the slot being processed
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {PreactElement} oldDom The current attached DOM element any new dom
 * elements should be placed around. Likely `null` on first render (except when
 * hydrating). Can be a sibling DOM element when diffing Fragments that have
 * siblings. In most cases, it starts out as `oldChildren[0]._dom`.
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 */ function diff(parentDom, newVNode, oldVNode, globalContext, namespace, slotIndex, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
    /** @type {any} */ var tmp, newType = newVNode.type;
    // When passing through createElement it assigns the object
    // constructor as undefined. This to prevent JSON-injection.
    if (newVNode.constructor !== UNDEFINED) return NULL;
    // If the previous diff bailed out, resume creating/hydrating.
    if (oldVNode.__u & MODE_SUSPENDED) {
        isHydrating = !!(oldVNode.__u & MODE_HYDRATE);
        oldDom = newVNode.__e = oldVNode.__e;
        excessDomChildren = [
            oldDom
        ];
    }
    if (tmp = options.__b) tmp(newVNode);
    if (tmp = options._diff2) tmp(newVNode, oldVNode);
    outer: if (typeof newType == 'function') try {
        var c, isNew, oldProps, oldState, snapshot, clearProcessingException;
        var newProps = newVNode.props;
        var isClassComponent = newType.prototype && newType.prototype.render;
        // Necessary for createContext api. Setting this property will pass
        // the context value as `this.context` just for this component.
        tmp = newType.contextType;
        var provider = tmp && globalContext[tmp.__c];
        var componentContext = tmp ? provider ? provider.props.value : tmp.__ : globalContext;
        // Get component and set it to `c`
        if (oldVNode.__c) {
            c = newVNode.__c = oldVNode.__c;
            clearProcessingException = c.__ = c.__E;
        } else {
            // Instantiate the new component
            if (isClassComponent) newVNode.__c = c = new newType(newProps, componentContext); // eslint-disable-line new-cap
            else {
                // @ts-expect-error Trust me, Component implements the interface we want
                newVNode.__c = c = new BaseComponent(newProps, componentContext);
                c.constructor = newType;
                c.render = doRender;
            }
            if (provider) provider.sub(c);
            if (!c.state) c.state = {};
            c.__n = globalContext;
            isNew = c.__d = true;
            c.__h = [];
            c._sb = [];
        }
        // Invoke getDerivedStateFromProps
        if (isClassComponent && c.__s == NULL) c.__s = c.state;
        if (isClassComponent && newType.getDerivedStateFromProps != NULL) {
            if (c.__s == c.state) c.__s = assign({}, c.__s);
            assign(c.__s, newType.getDerivedStateFromProps(newProps, c.__s));
        }
        oldProps = c.props;
        oldState = c.state;
        c.__v = newVNode;
        // Invoke pre-render lifecycle methods
        if (isNew) {
            if (isClassComponent && newType.getDerivedStateFromProps == NULL && c.componentWillMount != NULL) c.componentWillMount();
            if (isClassComponent && c.componentDidMount != NULL) c.__h.push(c.componentDidMount);
        } else {
            if (isClassComponent && newType.getDerivedStateFromProps == NULL && newProps !== oldProps && c.componentWillReceiveProps != NULL) c.componentWillReceiveProps(newProps, componentContext);
            if (newVNode.__v == oldVNode.__v || !c.__e && c.shouldComponentUpdate != NULL && c.shouldComponentUpdate(newProps, c.__s, componentContext) === false) {
                // More info about this here: https://gist.github.com/JoviDeCroock/bec5f2ce93544d2e6070ef8e0036e4e8
                if (newVNode.__v != oldVNode.__v) {
                    // When we are dealing with a bail because of sCU we have to update
                    // the props, state and dirty-state.
                    // when we are dealing with strict-equality we don't as the child could still
                    // be dirtied see #3883
                    c.props = newProps;
                    c.state = c.__s;
                    c.__d = false;
                }
                newVNode.__e = oldVNode.__e;
                newVNode.__k = oldVNode.__k;
                newVNode.__k.some(function(vnode) {
                    if (vnode) vnode.__ = newVNode;
                });
                EMPTY_ARR.push.apply(c.__h, c._sb);
                c._sb = [];
                if (c.__h.length) commitQueue.push(c);
                break outer;
            }
            if (c.componentWillUpdate != NULL) c.componentWillUpdate(newProps, c.__s, componentContext);
            if (isClassComponent && c.componentDidUpdate != NULL) c.__h.push(function() {
                c.componentDidUpdate(oldProps, oldState, snapshot);
            });
        }
        c.context = componentContext;
        c.props = newProps;
        c.__P = parentDom;
        c.__e = false;
        var renderHook = options.__r, count = 0;
        if (isClassComponent) {
            c.state = c.__s;
            c.__d = false;
            if (renderHook) renderHook(newVNode);
            tmp = c.render(c.props, c.state, c.context);
            EMPTY_ARR.push.apply(c.__h, c._sb);
            c._sb = [];
        } else do {
            c.__d = false;
            if (renderHook) renderHook(newVNode);
            tmp = c.render(c.props, c.state, c.context);
            // Handle setState called in render, see #2553
            c.state = c.__s;
        }while (c.__d && ++count < 25)
        // Handle setState called in render, see #2553
        c.state = c.__s;
        if (c.getChildContext != NULL) globalContext = assign(assign({}, globalContext), c.getChildContext());
        if (isClassComponent && !isNew && c.getSnapshotBeforeUpdate != NULL) snapshot = c.getSnapshotBeforeUpdate(oldProps, oldState);
        var renderResult = tmp != NULL && tmp.type === Fragment && tmp.key == NULL ? cloneNode(tmp.props.children) : tmp;
        oldDom = diffChildren(parentDom, isArray(renderResult) ? renderResult : [
            renderResult
        ], newVNode, oldVNode, globalContext, namespace, slotIndex, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue);
        c.base = newVNode.__e;
        // We successfully rendered this VNode, unset any stored hydration/bailout state:
        newVNode.__u &= RESET_MODE;
        if (c.__h.length) commitQueue.push(c);
        if (clearProcessingException) c.__E = c.__ = NULL;
    } catch (e) {
        newVNode.__v = NULL;
        // if hydrating or creating initial tree, bailout preserves DOM:
        if (isHydrating || excessDomChildren != NULL) {
            if (e.then) {
                newVNode.__u |= isHydrating ? MODE_HYDRATE | MODE_SUSPENDED : MODE_SUSPENDED;
                while(oldDom && oldDom.nodeType == 8 && oldDom.nextSibling)oldDom = oldDom.nextSibling;
                excessDomChildren[excessDomChildren.indexOf(oldDom)] = NULL;
                newVNode.__e = oldDom;
            } else {
                for(var i = excessDomChildren.length; i--;)removeNode(excessDomChildren[i]);
                markAsForce(newVNode);
            }
        } else {
            newVNode.__e = oldVNode.__e;
            newVNode.__k = oldVNode.__k;
            if (!e.then) markAsForce(newVNode);
        }
        options.__e(e, newVNode, oldVNode);
    }
    else if (excessDomChildren == NULL && newVNode.__v == oldVNode.__v) {
        newVNode.__k = oldVNode.__k;
        newVNode.__e = oldVNode.__e;
        newVNode.__e.__nextSlotIndex = slotIndex;
    } else {
        oldDom = newVNode.__e = diffElementNodes(oldVNode.__e, newVNode, oldVNode, globalContext, namespace, slotIndex, excessDomChildren, commitQueue, isHydrating, refQueue);
        newVNode.__e.__nextSlotIndex = slotIndex;
    }
    if (tmp = options.diffed) tmp(newVNode);
    return newVNode.__u & MODE_SUSPENDED ? undefined : oldDom;
}
function markAsForce(vnode) {
    if (vnode) {
        if (vnode.__c) vnode.__c.__e = true;
        if (vnode.__k) vnode.__k.some(markAsForce);
    }
}
/**
 * @param {Array<Component>} commitQueue List of components
 * which have callbacks to invoke in commitRoot
 * @param {VNode} root
 */ function commitRoot(commitQueue, root, refQueue) {
    for(var i = 0; i < refQueue.length; i++)applyRef(refQueue[i], refQueue[++i], refQueue[++i]);
    if (options.__c) options.__c(root, commitQueue);
    commitQueue.some(function(c) {
        try {
            // @ts-expect-error Reuse the commitQueue variable here so the type changes
            commitQueue = c.__h;
            c.__h = [];
            commitQueue.some(function(cb) {
                // @ts-expect-error See above comment on commitQueue
                cb.call(c);
            });
        } catch (e) {
            options.__e(e, c.__v);
        }
    });
}
function cloneNode(node) {
    if (typeof node != 'object' || node == NULL || node.__b > 0) return node;
    if (isArray(node)) return node.map(cloneNode);
    return assign({}, node);
}
/**
 * Diff two virtual nodes representing DOM element
 * @param {PreactElement} dom The DOM element representing the virtual nodes
 * being diffed
 * @param {VNode} newVNode The new virtual node
 * @param {VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {number} slotIndex The index of the slot being processed
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 * @returns {PreactElement}
 */ function diffElementNodes(dom, newVNode, oldVNode, globalContext, namespace, slotIndex, excessDomChildren, commitQueue, isHydrating, refQueue) {
    var oldProps = oldVNode.props || EMPTY_OBJ;
    var newProps = newVNode.props;
    var nodeType = /** @type {string} */ newVNode.type;
    /** @type {any} */ var i;
    /** @type {{ __html?: string }} */ var newHtml;
    /** @type {{ __html?: string }} */ var oldHtml;
    /** @type {ComponentChildren} */ var newChildren;
    var value;
    var inputValue;
    var checked;
    // Tracks entering and exiting namespaces when descending through the tree.
    if (nodeType == 'svg') namespace = SVG_NAMESPACE;
    else if (nodeType == 'math') namespace = MATH_NAMESPACE;
    else if (!namespace) namespace = XHTML_NAMESPACE;
    if (excessDomChildren != NULL) for(i = 0; i < excessDomChildren.length; i++){
        value = excessDomChildren[i];
        // if newVNode matches an element in excessDomChildren or the `dom`
        // argument matches an element in excessDomChildren, remove it from
        // excessDomChildren so it isn't later removed in diffChildren
        if (value && 'setAttribute' in value == !!nodeType && (nodeType ? value.localName == nodeType : value.nodeType == 3)) {
            dom = value;
            excessDomChildren[i] = NULL;
            break;
        }
    }
    if (dom == null) {
        if (nodeType === null) {
            dom = options.document.createTextNode(newProps);
            // See comment below on the element-creation path.
            dom.__slotIndex = slotIndex;
            return dom;
        }
        dom = options.document.createElementNS(namespace, nodeType, newProps.is && newProps);
        // Baseline `__slotIndex` on fresh DOM so insert()'s slot-branch only
        // fires on a real cross-slot transition, not spuriously on first
        // placement (when `__slotIndex` would otherwise be `undefined` and
        // mismatch the freshly-set `__nextSlotIndex`). Without this, a mid-diff
        // detached sibling can end up as an `insertBefore` reference and the
        // browser throws NotFoundError. Mirrors Lynx's `SnapshotInstance`
        // `__slotIndex = 0` class-field default.
        dom.__slotIndex = slotIndex;
        // we are creating a new node, so we can assume this is a new subtree (in
        // case we are hydrating), this deopts the hydrate
        if (isHydrating) {
            if (options.__m) options.__m(newVNode, excessDomChildren);
            isHydrating = false;
        }
        // we created a new parent, so none of the previously attached children can be reused:
        excessDomChildren = NULL;
    }
    if (nodeType == NULL) {
        if (oldProps !== newProps && (!isHydrating || dom.data != newProps)) dom.data = newProps;
    } else {
        // If excessDomChildren was not null, repopulate it with the current element's children:
        excessDomChildren = excessDomChildren && slice.call(dom.childNodes);
        // If we are in a situation where we are not hydrating but are using
        // existing DOM (e.g. replaceNode) we should read the existing DOM
        // attributes to diff them
        if (!isHydrating && excessDomChildren != NULL) {
            oldProps = {};
            for(i = 0; i < dom.attributes.length; i++){
                value = dom.attributes[i];
                oldProps[value.name] = value.value;
            }
        }
        for(i in oldProps){
            value = oldProps[i];
            if (i == 'dangerouslySetInnerHTML') oldHtml = value;
            else if (i != 'children' && !(i in newProps) && !(i == 'value' && 'defaultValue' in newProps) && !(i == 'checked' && 'defaultChecked' in newProps)) setProperty(dom, i, NULL);
        }
        var hasNamedChildren = false;
        // During hydration, props are not diffed at all (including dangerouslySetInnerHTML)
        // @TODO we should warn in debug mode when props don't match here.
        for(i in newProps){
            value = newProps[i];
            if (i == 'children') newChildren = value;
            else if (typeof i == 'string' && i[0] == '$') {
                var _newChildren;
                (_newChildren = newChildren) != null ? _newChildren : newChildren = [];
                hasNamedChildren = true;
                var index = +i.slice(1);
                newChildren[index] = value;
            } else if (i == 'dangerouslySetInnerHTML') newHtml = value;
            else if (i == 'value') inputValue = value;
            else if (i == 'checked') checked = value;
            else if ((!isHydrating || typeof value == 'function') && oldProps[i] !== value) setProperty(dom, i, value);
        }
        // If the new vnode didn't have dangerouslySetInnerHTML, diff its children
        if (newHtml) {
            // Avoid re-applying the same '__html' if it did not changed between re-render
            if (!isHydrating && (!oldHtml || newHtml.__html != oldHtml.__html && newHtml.__html != dom.innerHTML)) dom.innerHTML = newHtml.__html;
            newVNode.__k = [];
        } else {
            if (oldHtml) dom.innerHTML = '';
            var _slotIndex = slotIndex;
            if (hasNamedChildren) {
                // @ts-expect-error newChildren must be an array
                if (newChildren.length === 1) {
                    newChildren = newChildren[0];
                    _slotIndex = 0;
                } else _slotIndex = true;
            }
            diffChildren(newVNode.type == 'template' ? dom.content : dom, isArray(newChildren) ? newChildren : [
                newChildren
            ], newVNode, oldVNode, globalContext, nodeType == 'foreignObject' ? XHTML_NAMESPACE : namespace, _slotIndex, excessDomChildren, commitQueue, excessDomChildren ? excessDomChildren[0] : oldVNode.__k && getDomSibling(oldVNode, 0), isHydrating, refQueue);
            // Remove children that are not part of any vnode.
            if (excessDomChildren != NULL) for(i = excessDomChildren.length; i--;)removeNode(excessDomChildren[i]);
        }
        // As above, don't diff props during hydration
        if (!isHydrating) {
            i = 'value';
            if (nodeType == 'progress' && inputValue == NULL) dom.removeAttribute('value');
            else if (inputValue != UNDEFINED && // despite the attribute not being present. When the attribute
            // is missing the progress bar is treated as indeterminate.
            // To fix that we'll always update it when it is 0 for progress elements
            (inputValue !== dom[i] || nodeType == 'progress' && !inputValue || // This is only for IE 11 to fix <select> value not being updated.
            // To avoid a stale select value we need to set the option.value
            // again, which triggers IE11 to re-evaluate the select value
            nodeType == 'option' && inputValue != oldProps[i])) setProperty(dom, i, inputValue);
            i = 'checked';
            if (checked != UNDEFINED && checked != dom[i]) setProperty(dom, i, checked);
        }
    }
    return dom;
}
/**
 * Invoke or update a ref, depending on whether it is a function or object ref.
 * @param {Ref<any> & { _unmount?: unknown }} ref
 * @param {any} value
 * @param {VNode} vnode
 */ function applyRef(ref, value, vnode) {
    try {
        if (typeof ref == 'function') {
            var hasRefUnmount = typeof ref.__u == 'function';
            if (hasRefUnmount) ref.__u();
            if (!hasRefUnmount || value != NULL) // instance object itself to avoid shape
            // transitioning vnode
            ref.__u = ref(value);
        } else ref.current = value;
    } catch (e) {
        options.__e(e, vnode);
    }
}
/**
 * Unmount a virtual node from the tree and apply DOM changes
 * @param {VNode} vnode The virtual node to unmount
 * @param {VNode} parentVNode The parent of the VNode that initiated the unmount
 * @param {boolean} [skipRemove] Flag that indicates that a parent node of the
 * current element is already detached from the DOM.
 */ function unmount(vnode, parentVNode, skipRemove) {
    var r;
    if (options.unmount) options.unmount(vnode);
    if (r = vnode.ref) {
        if (!r.current || r.current == vnode.__e) applyRef(r, NULL, parentVNode);
    }
    if ((r = vnode.__c) != NULL) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount();
        } catch (e) {
            options.__e(e, parentVNode);
        }
        r.base = r.__P = NULL;
    }
    if (r = vnode.__k) {
        for(var i = 0; i < r.length; i++)if (r[i]) unmount(r[i], parentVNode, skipRemove || typeof vnode.type != 'function');
    }
    if (!skipRemove) removeNode(vnode.__e);
    vnode.__c = vnode.__ = vnode.__e = UNDEFINED;
}
/** The `.render()` method for a PFC backing instance. */ function doRender(props, state, context) {
    return this.constructor(props, context);
}
/**
 * Render a Preact virtual node into a DOM element
 * @param {import('./internal').ComponentChild} vnode The virtual node to render
 * @param {import('./internal').PreactElement} parentDom The DOM element to render into
 * @param {import('./internal').PreactElement | object} [replaceNode] Optional: Attempt to re-use an
 * existing DOM tree rooted at `replaceNode`
 */ function render(vnode, parentDom, replaceNode) {
    'background only';
    if (options.__) options.__(vnode, parentDom);
    // We abuse the `replaceNode` parameter in `hydrate()` to signal if we are in
    // hydration mode or not by passing the `hydrate` function instead of a DOM
    // element..
    var isHydrating = typeof replaceNode == 'function';
    // To be able to support calling `render()` multiple times on the same
    // DOM node, we need to obtain a reference to the previous tree. We do
    // this by assigning a new `_children` property to DOM nodes which points
    // to the last rendered tree. By default this property is not present, which
    // means that we are mounting a new tree for the first time.
    var oldVNode = isHydrating ? NULL : replaceNode && replaceNode.__k || parentDom.__k;
    vnode = (!isHydrating && replaceNode || parentDom).__k = createElement(Fragment, NULL, [
        vnode
    ]);
    // List of effects that need to be called after diffing.
    var commitQueue = [], refQueue = [];
    diff(parentDom, // our custom `_children` property.
    vnode, oldVNode || EMPTY_OBJ, EMPTY_OBJ, parentDom.namespaceURI, 0, !isHydrating && replaceNode ? [
        replaceNode
    ] : oldVNode ? NULL : parentDom.firstChild ? slice.call(parentDom.childNodes) : NULL, commitQueue, !isHydrating && replaceNode ? replaceNode : oldVNode ? oldVNode.__e : parentDom.firstChild, isHydrating, refQueue);
    // Flush all queued effects
    commitRoot(commitQueue, vnode, refQueue);
}
/**
 * Update an existing DOM element with data from a Preact virtual node
 * @param {import('./internal').ComponentChild} vnode The virtual node to render
 * @param {import('./internal').PreactElement} parentDom The DOM element to update
 */ function hydrate(vnode, parentDom) {
    'background only';
    render(vnode, parentDom, hydrate);
}
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


},
"(react:background)/./node_modules/preact/hooks/dist/hooks.mjs"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
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
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");

/** @type {number} */ var currentIndex;
/** @type {import('./internal').Component} */ var currentComponent;
/** @type {import('./internal').Component} */ var previousComponent;
/** @type {number} */ var currentHook = 0;
/** @type {Array<import('./internal').Component>} */ var afterPaintEffects = [];
// Cast to use internal Options type
var options = /** @type {import('./internal').Options} */ preact__rspack_import_0.options;
var oldBeforeDiff = options.__b;
var oldBeforeRender = options.__r;
var oldAfterDiff = options.diffed;
var oldCommit = options.__c;
var oldBeforeUnmount = options.unmount;
var oldRoot = options.__;
// We take the minimum timeout for requestAnimationFrame to ensure that
// the callback is invoked after the next frame. 35ms is based on a 30hz
// refresh rate, which is the minimum rate for a smooth user experience.
var RAF_TIMEOUT = 35;
var prevRaf;
/** @type {(vnode: import('./internal').VNode) => void} */ options.__b = function(vnode) {
    currentComponent = null;
    if (oldBeforeDiff) oldBeforeDiff(vnode);
};
options.__ = function(vnode, parentDom) {
    if (vnode && parentDom.__k && parentDom.__k.__m) vnode.__m = parentDom.__k.__m;
    if (oldRoot) oldRoot(vnode, parentDom);
};
/** @type {(vnode: import('./internal').VNode) => void} */ options.__r = function(vnode) {
    if (oldBeforeRender) oldBeforeRender(vnode);
    currentComponent = vnode.__c;
    currentIndex = 0;
    var hooks = currentComponent.__H;
    if (hooks) {
        if (previousComponent === currentComponent) {
            hooks.__h = [];
            currentComponent.__h = [];
            hooks.__.some(function(hookItem) {
                if (hookItem.__N) hookItem.__ = hookItem.__N;
                hookItem._pendingArgs = hookItem.__N = undefined;
            });
        } else {
            hooks.__h.some(invokeCleanup);
            hooks.__h.some(invokeEffect);
            hooks.__h = [];
            currentIndex = 0;
        }
    }
    previousComponent = currentComponent;
};
/** @type {(vnode: import('./internal').VNode) => void} */ options.diffed = function(vnode) {
    if (oldAfterDiff) oldAfterDiff(vnode);
    var c = vnode.__c;
    if (c && c.__H) {
        if (c.__H.__h.length) afterPaint(afterPaintEffects.push(c));
        c.__H.__.some(function(hookItem) {
            if (hookItem._pendingArgs) hookItem.__H = hookItem._pendingArgs;
            hookItem._pendingArgs = undefined;
        });
    }
    previousComponent = currentComponent = null;
};
// TODO: Improve typing of commitQueue parameter
/** @type {(vnode: import('./internal').VNode, commitQueue: any) => void} */ options.__c = function(vnode, commitQueue) {
    commitQueue.some(function(component) {
        try {
            component.__h.some(invokeCleanup);
            component.__h = component.__h.filter(function(cb) {
                return cb.__ ? invokeEffect(cb) : true;
            });
        } catch (e) {
            commitQueue.some(function(c) {
                if (c.__h) c.__h = [];
            });
            commitQueue = [];
            options.__e(e, component.__v);
        }
    });
    if (oldCommit) oldCommit(vnode, commitQueue);
};
/** @type {(vnode: import('./internal').VNode) => void} */ options.unmount = function(vnode) {
    if (oldBeforeUnmount) oldBeforeUnmount(vnode);
    var c = vnode.__c;
    if (c && c.__H) {
        var hasErrored;
        c.__H.__.some(function(s) {
            try {
                invokeCleanup(s);
            } catch (e) {
                hasErrored = e;
            }
        });
        c.__H = undefined;
        if (hasErrored) options.__e(hasErrored, c.__v);
    }
};
/**
 * Get a hook's state from the currentComponent
 * @param {number} index The index of the hook to get
 * @param {number} type The index of the hook to get
 * @returns {any}
 */ function getHookState(index, type) {
    if (options.__h) options.__h(currentComponent, index, currentHook || type);
    currentHook = 0;
    // Largely inspired by:
    // * https://github.com/michael-klein/funcy.js/blob/f6be73468e6ec46b0ff5aa3cc4c9baf72a29025a/src/hooks/core_hooks.mjs
    // * https://github.com/michael-klein/funcy.js/blob/650beaa58c43c33a74820a3c98b3c7079cf2e333/src/renderer.mjs
    // Other implementations to look at:
    // * https://codesandbox.io/s/mnox05qp8
    var hooks = currentComponent.__H || (currentComponent.__H = {
        __: [],
        __h: []
    });
    if (index >= hooks.__.length) hooks.__.push({});
    return hooks.__[index];
}
/**
 * @template {unknown} S
 * @param {import('./index').Dispatch<import('./index').StateUpdater<S>>} [initialState]
 * @returns {[S, (state: S) => void]}
 */ function useState(initialState) {
    currentHook = 1;
    return useReducer(invokeOrReturn, initialState);
}
/**
 * @template {unknown} S
 * @template {unknown} A
 * @param {import('./index').Reducer<S, A>} reducer
 * @param {import('./index').Dispatch<import('./index').StateUpdater<S>>} initialState
 * @param {(initialState: any) => void} [init]
 * @returns {[ S, (state: S) => void ]}
 */ function useReducer(reducer, initialState, init) {
    /** @type {import('./internal').ReducerHookState} */ var hookState = getHookState(currentIndex++, 2);
    hookState._reducer = reducer;
    if (!hookState.__c) {
        hookState.__ = [
            !init ? invokeOrReturn(undefined, initialState) : init(initialState),
            function(action) {
                var currentValue = hookState.__N ? hookState.__N[0] : hookState.__[0];
                var nextValue = hookState._reducer(currentValue, action);
                if (currentValue !== nextValue) {
                    hookState.__N = [
                        nextValue,
                        hookState.__[1]
                    ];
                    hookState.__c.setState({});
                }
            }
        ];
        hookState.__c = currentComponent;
        if (!currentComponent.__f) {
            // This SCU has the purpose of bailing out after repeated updates
            // to stateful hooks.
            // we store the next value in _nextValue[0] and keep doing that for all
            // state setters, if we have next states and
            // all next states within a component end up being equal to their original state
            // we are safe to bail out for this specific component.
            /**
       *
       * @type {import('./internal').Component["shouldComponentUpdate"]}
       */ // @ts-ignore - We don't use TS to downtranspile
            // eslint-disable-next-line no-inner-declarations
            var updateHookState = function updateHookState(p, s, c) {
                if (!hookState.__c.__H) return true;
                var stateHooks = hookState.__c.__H.__.filter(function(x) {
                    return x.__c;
                });
                var allHooksEmpty = stateHooks.every(function(x) {
                    return !x.__N;
                });
                // When we have no updated hooks in the component we invoke the previous SCU or
                // traverse the VDOM tree further.
                if (allHooksEmpty) return prevScu ? prevScu.call(this, p, s, c) : true;
                // We check whether we have components with a nextValue set that
                // have values that aren't equal to one another this pushes
                // us to update further down the tree
                var shouldUpdate = hookState.__c.props !== p;
                stateHooks.some(function(hookItem) {
                    if (hookItem.__N) {
                        var currentValue = hookItem.__[0];
                        hookItem.__ = hookItem.__N;
                        hookItem.__N = undefined;
                        if (currentValue !== hookItem.__[0]) shouldUpdate = true;
                    }
                });
                return prevScu ? prevScu.call(this, p, s, c) || shouldUpdate : shouldUpdate;
            };
            currentComponent.__f = true;
            var prevScu = currentComponent.shouldComponentUpdate;
            var prevCWU = currentComponent.componentWillUpdate;
            // If we're dealing with a forced update `shouldComponentUpdate` will
            // not be called. But we use that to update the hook values, so we
            // need to call it.
            currentComponent.componentWillUpdate = function(p, s, c) {
                if (this.__e) {
                    var tmp = prevScu;
                    // Clear to avoid other sCU hooks from being called
                    prevScu = undefined;
                    updateHookState(p, s, c);
                    prevScu = tmp;
                }
                if (prevCWU) prevCWU.call(this, p, s, c);
            };
            currentComponent.shouldComponentUpdate = updateHookState;
        }
    }
    return hookState.__N || hookState.__;
}
/**
 * @param {import('./internal').Effect} callback
 * @param {unknown[]} args
 * @returns {void}
 */ function useEffect(callback, args) {
    /** @type {import('./internal').EffectHookState} */ var state = getHookState(currentIndex++, 3);
    if (!options.__s && argsChanged(state.__H, args)) {
        state.__ = callback;
        state._pendingArgs = args;
        currentComponent.__H.__h.push(state);
    }
}
/**
 * @param {import('./internal').Effect} callback
 * @param {unknown[]} args
 * @returns {void}
 */ function useLayoutEffect(callback, args) {
    /** @type {import('./internal').EffectHookState} */ var state = getHookState(currentIndex++, 4);
    if (!options.__s && argsChanged(state.__H, args)) {
        state.__ = callback;
        state._pendingArgs = args;
        currentComponent.__h.push(state);
    }
}
/** @type {(initialValue: unknown) => unknown} */ function useRef(initialValue) {
    currentHook = 5;
    return useMemo(function() {
        return {
            current: initialValue
        };
    }, []);
}
/**
 * @param {object} ref
 * @param {() => object} createHandle
 * @param {unknown[]} args
 * @returns {void}
 */ function useImperativeHandle(ref, createHandle, args) {
    currentHook = 6;
    useLayoutEffect(function() {
        if (typeof ref == 'function') {
            var result = ref(createHandle());
            return function() {
                ref(null);
                if (result && typeof result == 'function') result();
            };
        } else if (ref) {
            ref.current = createHandle();
            return function() {
                return ref.current = null;
            };
        }
    }, args == null ? args : args.concat(ref));
}
/**
 * @template {unknown} T
 * @param {() => T} factory
 * @param {unknown[]} args
 * @returns {T}
 */ function useMemo(factory, args) {
    /** @type {import('./internal').MemoHookState<T>} */ var state = getHookState(currentIndex++, 7);
    if (argsChanged(state.__H, args)) {
        state.__ = factory();
        state.__H = args;
        state.__h = factory;
    }
    return state.__;
}
/**
 * @param {() => void} callback
 * @param {unknown[]} args
 * @returns {() => void}
 */ function useCallback(callback, args) {
    currentHook = 8;
    return useMemo(function() {
        return callback;
    }, args);
}
/**
 * @param {import('./internal').PreactContext} context
 */ function useContext(context) {
    var provider = currentComponent.context[context.__c];
    // We could skip this call here, but than we'd not call
    // `options._hook`. We need to do that in order to make
    // the devtools aware of this hook.
    /** @type {import('./internal').ContextHookState} */ var state = getHookState(currentIndex++, 9);
    // The devtools needs access to the context object to
    // be able to pull of the default value when no provider
    // is present in the tree.
    state.c = context;
    if (!provider) return context.__;
    // This is probably not safe to convert to "!"
    if (state.__ == null) {
        state.__ = true;
        provider.sub(currentComponent);
    }
    return provider.props.value;
}
/**
 * Display a custom label for a custom hook for the devtools panel
 * @type {<T>(value: T, cb?: (value: T) => string | number) => void}
 */ function useDebugValue(value, formatter) {
    if (options.useDebugValue) options.useDebugValue(formatter ? formatter(value) : /** @type {any}*/ value);
}
/**
 * @param {(error: unknown, errorInfo: import('preact').ErrorInfo) => void} cb
 * @returns {[unknown, () => void]}
 */ function useErrorBoundary(cb) {
    /** @type {import('./internal').ErrorBoundaryHookState} */ var state = getHookState(currentIndex++, 10);
    var errState = useState();
    state.__ = cb;
    if (!currentComponent.componentDidCatch) currentComponent.componentDidCatch = function(err, errorInfo) {
        if (state.__) state.__(err, errorInfo);
        errState[1](err);
    };
    return [
        errState[0],
        function() {
            errState[1](undefined);
        }
    ];
}
/** @type {() => string} */ function useId() {
    /** @type {import('./internal').IdHookState} */ var state = getHookState(currentIndex++, 11);
    if (!state.__) {
        // Grab either the root node or the nearest async boundary node.
        /** @type {import('./internal').VNode} */ var root = currentComponent.__v;
        while(root !== null && !root.__m && root.__ !== null)root = root.__;
        var mask = root.__m || (root.__m = [
            0,
            0
        ]);
        state.__ = 'P' + mask[0] + '-' + mask[1]++;
    }
    return state.__;
}
/**
 * After paint effects consumer.
 */ function flushAfterPaintEffects() {
    var component;
    while(component = afterPaintEffects.shift()){
        var hooks = component.__H;
        if (!component.__P || !hooks) continue;
        try {
            hooks.__h.some(invokeCleanup);
            hooks.__h.some(invokeEffect);
            hooks.__h = [];
        } catch (e) {
            hooks.__h = [];
            options.__e(e, component.__v);
        }
    }
}
var HAS_RAF = typeof requestAnimationFrame == 'function';
/**
 * Schedule a callback to be invoked after the browser has a chance to paint a new frame.
 * Do this by combining requestAnimationFrame (rAF) + setTimeout to invoke a callback after
 * the next browser frame.
 *
 * Also, schedule a timeout in parallel to the the rAF to ensure the callback is invoked
 * even if RAF doesn't fire (for example if the browser tab is not visible)
 *
 * @param {() => void} callback
 */ function afterNextFrame(callback) {
    var done = function done() {
        clearTimeout(timeout);
        if (HAS_RAF) cancelAnimationFrame(raf);
        setTimeout(callback);
    };
    var timeout = setTimeout(done, RAF_TIMEOUT);
    var raf;
    if (HAS_RAF) raf = requestAnimationFrame(done);
}
// Note: if someone used options.debounceRendering = requestAnimationFrame,
// then effects will ALWAYS run on the NEXT frame instead of the current one, incurring a ~16ms delay.
// Perhaps this is not such a big deal.
/**
 * Schedule afterPaintEffects flush after the browser paints
 * @param {number} newQueueLength
 * @returns {void}
 */ function afterPaint(newQueueLength) {
    if (newQueueLength === 1 || prevRaf !== options.requestAnimationFrame) {
        prevRaf = options.requestAnimationFrame;
        (prevRaf || afterNextFrame)(flushAfterPaintEffects);
    }
}
/**
 * @param {import('./internal').HookState} hook
 * @returns {void}
 */ function invokeCleanup(hook) {
    // A hook cleanup can introduce a call to render which creates a new root, this will call options.vnode
    // and move the currentComponent away.
    var comp = currentComponent;
    var cleanup = hook.__c;
    if (typeof cleanup == 'function') {
        hook.__c = undefined;
        cleanup();
    }
    currentComponent = comp;
}
/**
 * Invoke a Hook's effect
 * @param {import('./internal').EffectHookState} hook
 * @returns {void}
 */ function invokeEffect(hook) {
    // A hook call can introduce a call to render which creates a new root, this will call options.vnode
    // and move the currentComponent away.
    var comp = currentComponent;
    hook.__c = hook.__();
    currentComponent = comp;
}
/**
 * @param {unknown[]} oldArgs
 * @param {unknown[]} newArgs
 * @returns {boolean}
 */ function argsChanged(oldArgs, newArgs) {
    return !oldArgs || oldArgs.length !== newArgs.length || newArgs.some(function(arg, index) {
        return arg !== oldArgs[index];
    });
}
/**
 * @template Arg
 * @param {Arg} arg
 * @param {(arg: Arg) => any} f
 * @returns {any}
 */ function invokeOrReturn(arg, f) {
    return typeof f == 'function' ? f(arg) : f;
}
 //# sourceMappingURL=hooks.module.js.map


},
"(react:background)/./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Fragment: () => (/* reexport safe */ preact__rspack_import_0.Fragment),
  jsx: () => (createVNode),
  jsxAttr: () => (jsxAttr),
  jsxDEV: () => (createVNode),
  jsxEscape: () => (jsxEscape),
  jsxTemplate: () => (jsxTemplate),
  jsxs: () => (createVNode)
});
/* import */ var preact__rspack_import_0 = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");


var ENCODED_ENTITIES = /["&<]/;
/** @param {string} str */ function encodeEntities(str) {
    // Skip all work for strings with no entities needing encoding:
    if (str.length === 0 || ENCODED_ENTITIES.test(str) === false) return str;
    var last = 0, i = 0, out = '', ch = '';
    // Seek forward in str until the next entity char:
    for(; i < str.length; i++){
        switch(str.charCodeAt(i)){
            case 34:
                ch = '&quot;';
                break;
            case 38:
                ch = '&amp;';
                break;
            case 60:
                ch = '&lt;';
                break;
            default:
                continue;
        }
        // Append skipped/buffered characters and the encoded entity:
        if (i !== last) out += str.slice(last, i);
        out += ch;
        // Start the next seek/buffer after the entity's offset:
        last = i + 1;
    }
    if (i !== last) out += str.slice(last, i);
    return out;
}
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var vnodeId = 0;
var isArray = Array.isArray;
/**
 * @fileoverview
 * This file exports various methods that implement Babel's "automatic" JSX runtime API:
 * - jsx(type, props, key)
 * - jsxs(type, props, key)
 * - jsxDEV(type, props, key, __source, __self)
 *
 * The implementation of createVNode here is optimized for performance.
 * Benchmarks: https://esbench.com/bench/5f6b54a0b4632100a7dcd2b3
 */ /**
 * JSX.Element factory used by Babel's {runtime:"automatic"} JSX transform
 * @param {VNode['type']} type
 * @param {VNode['props']} props
 * @param {VNode['key']} [key]
 * @param {unknown} [isStaticChildren]
 * @param {unknown} [__source]
 * @param {unknown} [__self]
 */ function createVNode(type, props, key, isStaticChildren, __source, __self) {
    if (!props) props = {};
    // We'll want to preserve `ref` in props to get rid of the need for
    // forwardRef components in the future, but that should happen via
    // a separate PR.
    var normalizedProps = props, ref, i;
    if ('ref' in normalizedProps) {
        normalizedProps = {};
        for(i in props)if (i == 'ref') ref = props[i];
        else normalizedProps[i] = props[i];
    }
    /** @type {VNode & { __source: any; __self: any }} */ var vnode = {
        type: type,
        props: normalizedProps,
        key: key,
        ref: ref,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: undefined,
        __v: --vnodeId,
        __i: -1,
        __u: 0,
        __source: __source,
        __self: __self
    };
    // If a Component VNode, check for and apply defaultProps.
    // Note: `type` is often a String, and can be `undefined` in development.
    if (typeof type === 'function' && (ref = type.defaultProps)) {
        for(i in ref)if (normalizedProps[i] === undefined) normalizedProps[i] = ref[i];
    }
    if (preact__rspack_import_0.options.vnode) preact__rspack_import_0.options.vnode(vnode);
    return vnode;
}
/**
 * Create a template vnode. This function is not expected to be
 * used directly, but rather through a precompile JSX transform
 * @param {string[]} templates
 * @param  {Array<string | null | VNode>} exprs
 * @returns {VNode}
 */ function jsxTemplate(templates) {
    var vnode = createVNode(preact__rspack_import_0.Fragment, {
        tpl: templates,
        exprs: [].slice.call(arguments, 1)
    });
    // Bypass render to string top level Fragment optimization
    vnode.key = vnode.__v;
    return vnode;
}
var JS_TO_CSS = {};
var CSS_REGEX = /[A-Z]/g;
/**
 * Unwrap potential signals.
 * @param {*} value
 * @returns {*}
 */ function normalizeAttrValue(value) {
    return value !== null && typeof value === 'object' && typeof value.valueOf === 'function' ? value.valueOf() : value;
}
/**
 * Serialize an HTML attribute to a string. This function is not
 * expected to be used directly, but rather through a precompile
 * JSX transform
 * @param {string} name The attribute name
 * @param {*} value The attribute value
 * @returns {string}
 */ function jsxAttr(name, value) {
    if (preact__rspack_import_0.options.attr) {
        var result = preact__rspack_import_0.options.attr(name, value);
        if (typeof result === 'string') return result;
    }
    value = normalizeAttrValue(value);
    if (name === 'ref' || name === 'key') return '';
    if (name === 'style' && typeof value === 'object') {
        var str = '';
        for(var prop in value){
            var val = value[prop];
            if (val != null && val !== '') {
                var _name = prop[0] == '-' ? prop : JS_TO_CSS[prop] || (JS_TO_CSS[prop] = prop.replace(CSS_REGEX, '-$&').toLowerCase());
                var suffix = ';';
                if (typeof val === 'number' && // Exclude custom-attributes
                !_name.startsWith('--') && !IS_NON_DIMENSIONAL.test(_name)) suffix = 'px;';
                str = str + _name + ':' + val + suffix;
            }
        }
        return name + '="' + encodeEntities(str) + '"';
    }
    if (value == null || value === false || typeof value === 'function' || typeof value === 'object') return '';
    else if (value === true) return name;
    return name + '="' + encodeEntities('' + value) + '"';
}
/**
 * Escape a dynamic child passed to `jsxTemplate`. This function
 * is not expected to be used directly, but rather through a
 * precompile JSX transform
 * @param {*} value
 * @returns {string | null | VNode | Array<string | null | VNode>}
 */ function jsxEscape(value) {
    if (value == null || typeof value === 'boolean' || typeof value === 'function') return null;
    if (typeof value === 'object') {
        // Check for VNode
        if (value.constructor === undefined) return value;
        if (isArray(value)) {
            for(var i = 0; i < value.length; i++)value[i] = jsxEscape(value[i]);
            return value;
        }
    }
    return encodeEntities('' + value);
}
 //# sourceMappingURL=jsxRuntime.module.js.map


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
loaded: false,
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
// Flag the module as loaded
module.loaded = true;
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

__webpack_require__.cssHotUpdateList = [["main",".rspeedy/main/main.css.hot-update.json"]];

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
// webpack/runtime/esm_module_decorator
(() => {
__webpack_require__.hmd = (module) => {
  module = Object.create(module);
  if (!module.children) module.children = [];
  Object.defineProperty(module, 'exports', {
      enumerable: true,
      set: () => {
          throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
      }
  });
  return module;
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
            return "main." + __webpack_require__.h() + ".hot-update.json";
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
	"main": 1
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
__webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/index.js?hostname=0.0.0.0&port=3001&pathname=%2Frsbuild-hmr&hot=true&live-reload=true&protocol=ws&token=423239aa25d9ad75");
__webpack_require__("(react:background)/./node_modules/@lynx-js/react/refresh/dist/index.js");
__webpack_require__("(react:background)/./node_modules/@rspack/core/hot/dev-server.js");
var __webpack_exports__ = __webpack_require__("(react:background)/./src/index.tsx");


})();
    });
    return tt.require("background.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=http://0.0.0.0:3001/.rspeedy/main/background.js.map