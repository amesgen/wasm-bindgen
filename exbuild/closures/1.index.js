(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: run, __wbindgen_cb_forget, __wbindgen_cb_drop, __wbindgen_number_new, __wbindgen_string_new, __wbindgen_jsval_eq, __wbindgen_object_drop_ref, __widl_f_set_property_CSSStyleDeclaration, __widl_f_get_element_by_id_Document, __widl_f_set_inner_html_Element, __widl_instanceof_HTMLElement, __widl_f_style_HTMLElement, __widl_f_set_onclick_HTMLElement, __widl_instanceof_Window, __widl_f_document_Window, __widl_f_set_interval_with_callback_and_timeout_and_arguments_0_Window, __wbg_new_951e889c56bc7e3c, __wbg_forEach_95f61bd0fccb0949, __wbg_push_36cde80dfc256d1d, __wbg_newnoargs_8effd2c0e33a9e83, __wbg_call_11f5c018dea16986, __wbg_new0_ec482dec13185cd9, __wbg_toLocaleString_8d14d61ed845c912, __wbg_globalThis_b8da724777cacbb6, __wbg_self_78670bf6333531d2, __wbg_window_b19864ecbde8d123, __wbg_global_c6db5ff079ba98ed, __wbindgen_is_undefined, __wbindgen_object_clone_ref, __wbindgen_number_get, __wbindgen_string_get, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_closure_wrapper55, __wbindgen_closure_wrapper57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_forget\", function() { return __wbindgen_cb_forget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return __wbindgen_cb_drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_new\", function() { return __wbindgen_number_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_jsval_eq\", function() { return __wbindgen_jsval_eq; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_property_CSSStyleDeclaration\", function() { return __widl_f_set_property_CSSStyleDeclaration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_element_by_id_Document\", function() { return __widl_f_get_element_by_id_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_inner_html_Element\", function() { return __widl_f_set_inner_html_Element; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_HTMLElement\", function() { return __widl_instanceof_HTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_style_HTMLElement\", function() { return __widl_f_style_HTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_onclick_HTMLElement\", function() { return __widl_f_set_onclick_HTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_document_Window\", function() { return __widl_f_document_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_interval_with_callback_and_timeout_and_arguments_0_Window\", function() { return __widl_f_set_interval_with_callback_and_timeout_and_arguments_0_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_951e889c56bc7e3c\", function() { return __wbg_new_951e889c56bc7e3c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_forEach_95f61bd0fccb0949\", function() { return __wbg_forEach_95f61bd0fccb0949; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_push_36cde80dfc256d1d\", function() { return __wbg_push_36cde80dfc256d1d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_8effd2c0e33a9e83\", function() { return __wbg_newnoargs_8effd2c0e33a9e83; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_11f5c018dea16986\", function() { return __wbg_call_11f5c018dea16986; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new0_ec482dec13185cd9\", function() { return __wbg_new0_ec482dec13185cd9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_toLocaleString_8d14d61ed845c912\", function() { return __wbg_toLocaleString_8d14d61ed845c912; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_b8da724777cacbb6\", function() { return __wbg_globalThis_b8da724777cacbb6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_78670bf6333531d2\", function() { return __wbg_self_78670bf6333531d2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_b19864ecbde8d123\", function() { return __wbg_window_b19864ecbde8d123; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_c6db5ff079ba98ed\", function() { return __wbg_global_c6db5ff079ba98ed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_get\", function() { return __wbindgen_number_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return __wbindgen_string_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper55\", function() { return __wbindgen_closure_wrapper55; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper57\", function() { return __wbindgen_closure_wrapper57; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\nfunction __wbg_elem_binding0(arg0, arg1) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(29)(arg0, arg1);\n}\nfunction __wbg_elem_binding1(arg0, arg1) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(25)(arg0, arg1);\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\nfunction __wbg_elem_binding2(arg0, arg1, arg2, arg3, arg4) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _assertNum(arg3);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(56)(arg0, arg1, addHeapObject(arg2), arg3, addHeapObject(arg4));\n}\n/**\n*/\nfunction run() {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction handleError(e) {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n}\n\nfunction logError(e) {\n    let error = (function () {\n        try {\n            return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm(arg) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    let len = arg.length;\n    let ptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](len);\n\n    const mem = getUint8Memory();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read != arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nlet cachegetInt32Memory = null;\nfunction getInt32Memory() {\n    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nconst __wbindgen_cb_forget = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_cb_drop = function(arg0) {\n    const obj = takeObject(arg0).original;\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return true;\n    }\n    const ret = false;\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbindgen_number_new = function(arg0) {\n    const ret = arg0;\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    const ret = getStringFromWasm(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_jsval_eq = function(arg0, arg1) {\n    const ret = getObject(arg0) === getObject(arg1);\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __widl_f_set_property_CSSStyleDeclaration = function(arg0, arg1, arg2, arg3, arg4) {\n    try {\n        try {\n            getObject(arg0).setProperty(getStringFromWasm(arg1, arg2), getStringFromWasm(arg3, arg4));\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_get_element_by_id_Document = function(arg0, arg1, arg2) {\n    try {\n        const ret = getObject(arg0).getElementById(getStringFromWasm(arg1, arg2));\n        return isLikeNone(ret) ? 0 : addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_set_inner_html_Element = function(arg0, arg1, arg2) {\n    try {\n        getObject(arg0).innerHTML = getStringFromWasm(arg1, arg2);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_instanceof_HTMLElement = function(arg0) {\n    try {\n        const ret = getObject(arg0) instanceof HTMLElement;\n        _assertBoolean(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_style_HTMLElement = function(arg0) {\n    try {\n        const ret = getObject(arg0).style;\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_set_onclick_HTMLElement = function(arg0, arg1) {\n    try {\n        getObject(arg0).onclick = getObject(arg1);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_instanceof_Window = function(arg0) {\n    try {\n        const ret = getObject(arg0) instanceof Window;\n        _assertBoolean(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_document_Window = function(arg0) {\n    try {\n        const ret = getObject(arg0).document;\n        return isLikeNone(ret) ? 0 : addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_set_interval_with_callback_and_timeout_and_arguments_0_Window = function(arg0, arg1, arg2) {\n    try {\n        try {\n            const ret = getObject(arg0).setInterval(getObject(arg1), arg2);\n            _assertNum(ret);\n            return ret;\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_new_951e889c56bc7e3c = function() {\n    try {\n        const ret = new Array();\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_forEach_95f61bd0fccb0949 = function(arg0, arg1, arg2) {\n    const state0 = {a: arg1, b: arg2};\n    const cb0 = (arg0, arg1, arg2) => {\n        const a = state0.a;\n        state0.a = 0;\n        try {\n            return __wbg_elem_binding2(a, state0.b, arg0, arg1, arg2);\n        } finally {\n            state0.a = a;\n        }\n    };\n    try {\n        try {\n            getObject(arg0).forEach(cb0);\n        } catch (e) {\n            logError(e)\n        }\n    } finally {\n        state0.a = state0.b = 0;\n    }\n};\n\nconst __wbg_push_36cde80dfc256d1d = function(arg0, arg1) {\n    try {\n        const ret = getObject(arg0).push(getObject(arg1));\n        _assertNum(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_newnoargs_8effd2c0e33a9e83 = function(arg0, arg1) {\n    try {\n        const ret = new Function(getStringFromWasm(arg0, arg1));\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_call_11f5c018dea16986 = function(arg0, arg1) {\n    try {\n        try {\n            const ret = getObject(arg0).call(getObject(arg1));\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_new0_ec482dec13185cd9 = function() {\n    try {\n        const ret = new Date();\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_toLocaleString_8d14d61ed845c912 = function(arg0, arg1, arg2, arg3) {\n    try {\n        const ret = getObject(arg0).toLocaleString(getStringFromWasm(arg1, arg2), getObject(arg3));\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_globalThis_b8da724777cacbb6 = function() {\n    try {\n        try {\n            const ret = globalThis.globalThis;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_self_78670bf6333531d2 = function() {\n    try {\n        try {\n            const ret = self.self;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_window_b19864ecbde8d123 = function() {\n    try {\n        try {\n            const ret = window.window;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_global_c6db5ff079ba98ed = function() {\n    try {\n        try {\n            const ret = global.global;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_is_undefined = function(arg0) {\n    const ret = getObject(arg0) === undefined;\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbindgen_object_clone_ref = function(arg0) {\n    const ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_number_get = function(arg0, arg1) {\n    const obj = getObject(arg0);\n    if (typeof(obj) === 'number') return obj;\n    getUint8Memory()[arg1] = 1;\n    const ret = 0;\n    _assertNum(ret);\n    return ret;\n};\n\nconst __wbindgen_string_get = function(arg0, arg1) {\n    const obj = getObject(arg0);\n    if (typeof(obj) !== 'string') return 0;\n    const ptr = passStringToWasm(obj);\n    getUint32Memory()[arg1 / 4] = WASM_VECTOR_LEN;\n    const ret = ptr;\n    _assertNum(ret);\n    return ret;\n};\n\nconst __wbindgen_debug_string = function(arg0, arg1) {\n    const ret = debugString(getObject(arg1));\n    const ret0 = passStringToWasm(ret);\n    const ret1 = WASM_VECTOR_LEN;\n    getInt32Memory()[arg0 / 4 + 0] = ret0;\n    getInt32Memory()[arg0 / 4 + 1] = ret1;\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm(arg0, arg1));\n};\n\nconst __wbindgen_rethrow = function(arg0) {\n    throw takeObject(arg0);\n};\n\nconst __wbindgen_closure_wrapper55 = function(arg0, arg1, arg2) {\n    const state = { a: arg0, b: arg1, cnt: 1 };\n    const real = () => {\n        state.cnt++;\n        const a = state.a;\n        state.a = 0;\n        try {\n            return __wbg_elem_binding0(a, state.b, );\n        } finally {\n            if (--state.cnt === 0) _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(30)(a, state.b);\n            else state.a = a;\n        }\n    }\n    ;\n    real.original = state;\n    try {\n        const ret = real;\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_closure_wrapper57 = function(arg0, arg1, arg2) {\n    const state = { a: arg0, b: arg1, cnt: 1 };\n    const real = () => {\n        state.cnt++;\n        try {\n            return __wbg_elem_binding1(state.a, state.b, );\n        } finally {\n            if (--state.cnt === 0) {\n                _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(26)(state.a, state.b);\n                state.a = 0;\n            }\n        }\n    }\n    ;\n    real.original = state;\n    try {\n        const ret = real;\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, run, __wbindgen_exn_store, __wbindgen_malloc, __wbindgen_realloc, __wbg_function_table, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index.js */ \"./pkg/index.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);