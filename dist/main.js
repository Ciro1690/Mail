/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/compose.js":
/*!************************!*\
  !*** ./src/compose.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let MessageStore = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\");\n\nmodule.exports = {\n    renderForm() {\n        let currentMessage = MessageStore.getMessageDraft();\n        let html = `\n        <p class=\"new-messge-header\">New Message</p>\n        <form class=\"compose-form\">\n            <input \n                placeholder=\"Recipient\" \n                name=\"to\" \n                type=\"text\" \n                value='${currentMessage.to}'>\n\n            <input \n                placeholder=\"Subject\" \n                name=\"subject\" \n                type=\"text\"\n                value='${currentMessage.subject}'>\n\n            <textarea\n                name='body'\n                rows='20'>${currentMessage.body}</textarea>\n            \n            <button type=\"submit\" class=\"btn btn-primary submit-message\">Send</button>\n\n            </form>\n            `;\n        return html;\n    },\n    render() {\n        let $div = document.createElement(\"div\");\n        $div.className = \"new-message\";\n        $div.innerHTML = this.renderForm();\n        $div.addEventListener('change', event => {\n            let target = event.target;\n            MessageStore.updateDraftField(target.name,target.value);\n        });\n\n        $div.addEventListener('submit', e => {\n            e.preventDefault();\n            MessageStore.sendDraft();\n            location.hash = \"inbox\";\n        });\n        return $div;\n    },\n\n    \n};\n\n//# sourceURL=webpack:///./src/compose.js?");

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let MessageStore = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\");\n\nmodule.exports = {\n\n    render() {\n        let $ul = document.createElement(\"ul\");\n        $ul.className = \"messages\";\n        let messages = MessageStore.getInboxMessages();\n        messages.forEach(message => {\n            $ul.appendChild(this.renderMessage(message));\n        });\n        return $ul;\n    },\n\n    renderMessage(message) {\n        let $li = document.createElement(\"li\");\n        $li.className = \"messages\";\n        $li.innerHTML = `\n        <span class=\"from\">${message.from}</span>\n        <span class=\"subject\">${message.subject}</span>\n        <span class=\"body\">${message.body}</span>`\n        return $li;\n    }  \n}\n\n//# sourceURL=webpack:///./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let Router = __webpack_require__(/*! ./router */ \"./src/router.js\");\nlet Inbox = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\nlet MessageStore = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\");\nlet Sent = __webpack_require__(/*! ./sent */ \"./src/sent.js\");\nlet Compose = __webpack_require__(/*! ./compose */ \"./src/compose.js\");\n\nlet routes = {\n    compose: Compose,\n    inbox: Inbox,\n    sent: Sent\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let content = document.querySelector(\".content\");\n    router = new Router(content, routes);\n    router.start();\n    window.location.hash = \"#inbox\";\n    let navItems = Array.from(document.querySelectorAll(\".sidebar-nav li\"));\n    navItems.forEach(navItem => {\n        navItem.addEventListener(\"click\", () => {\n            let inner = navItem.innerText.toLowerCase();\n            location.hash = inner;\n        });\n    });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/message_store.js":
/*!******************************!*\
  !*** ./src/message_store.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const user = \"2cool4u123@gmail.com\";\n\nclass Message {\n    constructor(from = user, to = \"\", subject = \"\", body = \"\") {\n        this.from = from;\n        this.to = to;\n        this.subject = subject;\n        this.body = body;\n    }\n}\n\nlet messageDraft = new Message;\nlet messages = JSON.parse(localStorage.getItem('messages'));\n\nif (!messages) {\n    messages = {\n        sent: [\n            { to: \"friend@mail.com\", subject: \"Check this out\", body: \"It's so cool\" },\n            { to: \"person@mail.com\", subject: \"zzz\", body: \"so booring\" }\n        ],\n        inbox: [\n            { from: \"grandma@mail.com\", subject: \"Fwd: Fwd: Fwd: Check this out\", body: \"Stay at home mom discovers cure for leg cramps. Doctors hate her\" },\n            { from: \"person@mail.com\", subject: \"Questionnaire\", body: \"Take this free quiz win $1000 dollars\" }\n        ]\n    };\n}\n\nconst MessageStore = {\n    getInboxMessages() {\n        return messages.inbox.slice();\n    },\n    getSentMessages() {\n        return messages.sent.slice();\n    },\n    updateDraftField(field,value) {\n        messageDraft[field] = value;\n    },\n    sendDraft() {\n        messages.sent.push(messageDraft);\n        messageDraft = new Message;\n        localStorage.setItem('messages', JSON.stringify(messages));\n    },\n    getMessageDraft() {\n        return messageDraft;\n    }\n}\n\nmodule.exports = MessageStore;\n\n//# sourceURL=webpack:///./src/message_store.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Router {\n    constructor(node, routes) {\n        this.node = node;\n        this.routes = routes;\n    }\n\n    start() {\n        this.render();\n        window.addEventListener(\"hashchange\", () => {\n            this.render();\n        });\n    }\n\n    activeRoute() {\n        let hash = window.location.hash.substr(1);\n        let component = this.routes[hash];\n        return component;\n    }\n\n    render() {\n        this.node.innerHTML = \"\";\n        let component = this.activeRoute();\n        if (component) {\n            this.node.appendChild(component.render());\n        }\n    }\n}\n\nmodule.exports = Router;\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ }),

/***/ "./src/sent.js":
/*!*********************!*\
  !*** ./src/sent.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let MessageStore = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\");\n\nmodule.exports = {\n\n    render() {\n        let $ul = document.createElement(\"ul\");\n        $ul.className = \"messages\";\n        let messages = MessageStore.getSentMessages();\n        messages.forEach(message => {\n            $ul.appendChild(this.renderMessage(message));\n        });\n        return $ul;\n    },\n\n    renderMessage(message) {\n        let $li = document.createElement(\"li\");\n        $li.className = \"messages\";\n        $li.innerHTML = `\n        <span class=\"to\">To: ${message.to}</span>\n        <span class=\"subject\">${message.subject}</span>\n        <span class=\"body\">${message.body}</span>`\n        return $li;\n    }\n}\n\n//# sourceURL=webpack:///./src/sent.js?");

/***/ })

/******/ });