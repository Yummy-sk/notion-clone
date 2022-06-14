// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cVGQq":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "3c8a522a97a9311a";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7dhfe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _appJs = require("./App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _documentApiJs = require("./api/documentApi.js");
var _documentApiJsDefault = parcelHelpers.interopDefault(_documentApiJs);
var _indexJs = require("./util/index.js");
function Main() {
    this.init = async ()=>{
        try {
            const $main = (0, _indexJs.$)({
                selector: "main"
            });
            const app = new (0, _appJsDefault.default)({
                $target: $main,
                initialState: await (0, _documentApiJsDefault.default).getAllDocuments()
            });
            app.render();
        } catch (e) {
            alert(e.message);
            console.error(e.message);
        }
    };
}
const main = new Main();
main.init();

},{"./App.js":"2kQhy","./api/documentApi.js":"1yTjH","./util/index.js":"6gmsK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2kQhy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./pages/index.js");
var _documentApiJs = require("./api/documentApi.js");
var _documentApiJsDefault = parcelHelpers.interopDefault(_documentApiJs);
var _indexJs1 = require("./util/index.js");
var _routerJs = require("./router.js");
class App {
    constructor({ $target , initialState  }){
        this.openState = [];
        this.$target = $target;
        this.sideBar = new (0, _indexJs.SideBar)({
            $target: this.$target,
            documents: initialState,
            onClickDocument: this.onClickDocument.bind(this),
            onAddDocument: this.onAddDocument.bind(this),
            onDeleteDocument: this.onDeleteDocument.bind(this)
        });
        this.documentPage = new (0, _indexJs.DocumentPage)({
            $target: this.$target,
            onGetOneDocument: this.onGetOneDocument.bind(this),
            onEditDocument: this.onEditDocument.bind(this)
        });
    }
    async onGetAllDocument() {
        return await (0, _documentApiJsDefault.default).getAllDocuments();
    }
    async onGetOneDocument({ docId  }) {
        return await (0, _documentApiJsDefault.default).getOneDocument({
            id: docId
        });
    }
    async onClickDocument({ docId  }) {
        await (0, _documentApiJsDefault.default).getOneDocument({
            id: docId
        });
        if (this.openState.includes(docId)) {
            const idx = this.openState.indexOf(docId);
            this.openState.splice(idx, 1);
        } else this.openState.push(docId);
        (0, _routerJs.push)({
            nextUrl: `/documents/${docId}`
        });
    }
    async onAddDocument({ docId  }) {
        const doc = await (0, _documentApiJsDefault.default).createDocument({
            content: {
                title: "",
                parent: docId
            }
        });
        const docs = await this.onGetAllDocument();
        this.sideBar.setState({
            nextState: docs,
            openState: this.openState
        });
        (0, _routerJs.push)({
            nextUrl: `/documents/${doc.id}`
        });
    }
    async onDeleteDocument({ docId  }) {
        await (0, _documentApiJsDefault.default).deleteDocument({
            id: docId
        });
        const docs = await this.onGetAllDocument();
        this.sideBar.setState({
            nextState: docs,
            openState: this.openState
        });
    }
    async onEditDocument({ docId , content  }) {
        const doc = await (0, _documentApiJsDefault.default).editDocument({
            id: docId,
            content
        });
        const $doc = (0, _indexJs1.$)({
            selector: `[data-index="${docId}"] > span`
        });
        $doc.innerText = doc.title;
        (0, _indexJs1.removeDocument)(`document-${docId}`);
    }
    render() {
        this.sideBar.render();
        this.documentPage.render();
    }
}
exports.default = App;

},{"./pages/index.js":"dpPH2","./api/documentApi.js":"1yTjH","./util/index.js":"6gmsK","./router.js":"l7a58","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dpPH2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SideBar", ()=>(0, _sideBarJs.SideBar));
parcelHelpers.export(exports, "DocumentPage", ()=>(0, _documentPageJs.DocumentPage));
var _sideBarJs = require("./SideBar/SideBar.js");
var _documentPageJs = require("./DocumentPage/DocumentPage.js");

},{"./SideBar/SideBar.js":"6Ftx3","./DocumentPage/DocumentPage.js":"cMfpM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Ftx3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SideBar", ()=>SideBar);
var _indexJs = require("../../components/index.js");
var _createDomeElemJs = require("../../util/createDomeElem.js");
function SideBar({ $target , documents , onClickDocument , onAddDocument , onDeleteDocument  }) {
    let state = documents;
    const $sideBar = (0, _createDomeElemJs.createDOMElement)({
        tagName: "aside"
    });
    const documentList = new (0, _indexJs.DocumentList)({
        $target: $sideBar,
        onClickDocument,
        onAddDocument,
        onDeleteDocument
    });
    const documentAdd = new (0, _indexJs.DocumentAdd)({
        $target: $sideBar,
        onAddDocument
    });
    this.render = ()=>{
        $target.appendChild($sideBar);
        documentList.render({
            document: state
        });
        documentAdd.render();
    };
    this.setState = ({ nextState , openState  })=>{
        state = nextState;
        documentList.setState({
            nextState: state,
            openState
        });
    };
}

},{"../../components/index.js":"6nkmk","../../util/createDomeElem.js":"2IxTk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6nkmk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DocumentList", ()=>(0, _documentListJs.DocumentList));
parcelHelpers.export(exports, "DocumentEdit", ()=>(0, _documentEditJs.DocumentEdit));
parcelHelpers.export(exports, "DocumentRoot", ()=>(0, _documentRootJs.DocumentRoot));
parcelHelpers.export(exports, "DocumentAdd", ()=>(0, _documentAddJs.DocumentAdd));
parcelHelpers.export(exports, "NotFound", ()=>(0, _notFoundJs.NotFound));
var _documentListJs = require("./DocumentList/DocumentList.js");
var _documentEditJs = require("./DocumentEdit/DocumentEdit.js");
var _documentRootJs = require("./DocumentRoot/DocumentRoot.js");
var _documentAddJs = require("./DocumentAdd/DocumentAdd.js");
var _notFoundJs = require("./NotFound/NotFound.js");

},{"./DocumentList/DocumentList.js":"4sY15","./DocumentEdit/DocumentEdit.js":"23tnN","./DocumentRoot/DocumentRoot.js":"dhYlM","./DocumentAdd/DocumentAdd.js":"iwiF7","./NotFound/NotFound.js":"jy56f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4sY15":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DocumentList", ()=>DocumentList);
var _indexJs = require("../../util/index.js");
var _routerJs = require("../../router.js");
function DocumentList({ $target , onClickDocument , onAddDocument , onDeleteDocument  }) {
    let state = [];
    const $documentList = (0, _indexJs.createDOMElement)({
        tagName: "div",
        attrs: [
            {
                attr: "class",
                value: "document-list"
            }
        ]
    });
    const makeDocumentTree = ({ id: id1 , title: title1 , documents: documents1 , margin  })=>{
        return `
            <details id="detail-${id1}" style="margin-left:${margin}px" ${state.includes(String(id1)) && "open"}>
                <summary class="toggle" data-index="${id1}">
                <img class="doc-img" src="../../public/images/document.png" alt="doc-img"/>
                <span>${title1 ? title1 : "\uC81C\uBAA9 \uC5C6\uC74C"}</span>
                <span class="option-container">
                    <input type="button" class="option-btn remove" />
                    <input type="button" class="option-btn add" />
                </span>
                </summary>
                ${documents1.length ? documents1.map(({ id , title , documents  })=>makeDocumentTree({
                id,
                title,
                documents,
                margin: margin + 10
            })).join("") : `<p style="margin-left:${margin + 5}px">하위 페이지가 없습니다.</p>`}
            </details>
        `;
    };
    const generateHTML = ({ document  })=>{
        return `
            <h1>Documents</h1>
            ${document.map(({ id , title , documents  })=>{
            let margin = 0;
            return makeDocumentTree({
                id,
                title,
                documents,
                margin
            });
        }).join("")}
        `;
    };
    const registerEvents = ()=>{
        $documentList.addEventListener("click", async (e)=>{
            const { target  } = e;
            const tagName = target.tagName;
            const summary = target.closest("summary");
            if (tagName === "H1") {
                (0, _routerJs.push)({
                    nextUrl: "/"
                });
                return;
            }
            if (summary && tagName !== "INPUT") {
                const { index  } = summary.dataset;
                (0, _routerJs.push)({
                    nextUrl: `/documents/${index}`
                });
                await onClickDocument({
                    docId: index
                });
                return;
            }
            if (tagName === "INPUT") {
                const { classList  } = target;
                const { index  } = summary.dataset;
                if (classList.contains("remove")) {
                    if (confirm("\uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) {
                        await onDeleteDocument({
                            docId: index
                        });
                        const rootParent = summary.closest("details").parentNode?.id;
                        alert("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
                        if (rootParent) {
                            const routePath = rootParent.split("-").at(-1);
                            (0, _routerJs.push)({
                                nextUrl: `/documents/${routePath}`
                            });
                        } else (0, _routerJs.push)({
                            nextUrl: "/"
                        });
                    }
                    return;
                }
                if (classList.contains("add")) {
                    await onAddDocument({
                        docId: index
                    });
                    return;
                }
            }
        });
    };
    this.render = ({ document  })=>{
        $documentList.innerHTML = generateHTML({
            document
        });
        $target.appendChild($documentList);
    };
    this.setState = ({ nextState , openState  })=>{
        state = [
            ...openState
        ];
        $documentList.innerHTML = generateHTML({
            document: nextState
        });
    };
    registerEvents();
}

},{"../../util/index.js":"6gmsK","../../router.js":"l7a58","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6gmsK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>(0, _querySelectorJs.$));
parcelHelpers.export(exports, "createDOMElement", ()=>(0, _createDomeElemJs.createDOMElement));
parcelHelpers.export(exports, "getDocument", ()=>(0, _localStorageJs.getDocument));
parcelHelpers.export(exports, "setDocument", ()=>(0, _localStorageJs.setDocument));
parcelHelpers.export(exports, "removeDocument", ()=>(0, _localStorageJs.removeDocument));
parcelHelpers.export(exports, "debounce", ()=>(0, _debounceJs.debounce));
var _querySelectorJs = require("./querySelector.js");
var _createDomeElemJs = require("./createDomeElem.js");
var _localStorageJs = require("./localStorage.js");
var _debounceJs = require("./debounce.js");

},{"./querySelector.js":"coIms","./createDomeElem.js":"2IxTk","./localStorage.js":"5Gnr5","./debounce.js":"5vlaZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"coIms":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>$);
const $ = ({ selector  })=>document.querySelector(selector);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2IxTk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDOMElement", ()=>createDOMElement);
const createDOMElement = ({ tagName , attrs =null  })=>{
    const element = document.createElement(tagName);
    attrs && attrs.forEach(({ attr , value  })=>{
        attr !== "textContent" ? element.setAttribute(attr, value) : element.textContent = value;
    });
    return element;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Gnr5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDocument", ()=>getDocument);
parcelHelpers.export(exports, "setDocument", ()=>setDocument);
parcelHelpers.export(exports, "removeDocument", ()=>removeDocument);
const storage = window.localStorage;
const getDocument = (key)=>{
    try {
        const storedValue = storage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : {
            title: "",
            content: ""
        };
    } catch (e) {
        alert(e.message);
        console.error(e.message);
    }
};
const setDocument = (key, value)=>{
    storage.setItem(key, JSON.stringify(value));
};
const removeDocument = (key)=>{
    storage.removeItem(key);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5vlaZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce);
const debounce = (func, wait)=>{
    let timerId = null;
    return (...args)=>{
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(()=>{
            func(...args);
        }, wait);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l7a58":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
parcelHelpers.export(exports, "push", ()=>push);
const ROUTE_CHANGE_EVENT_NAME = "routeChange";
const initRouter = ({ router  })=>{
    window.addEventListener(ROUTE_CHANGE_EVENT_NAME, ({ detail  })=>{
        const { nextUrl  } = detail;
        if (nextUrl) {
            history.pushState(null, null, nextUrl);
            router();
        }
    });
};
const push = ({ nextUrl  })=>{
    window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT_NAME, {
        detail: {
            nextUrl
        }
    }));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"23tnN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DocumentEdit", ()=>DocumentEdit);
var _editorJs = require("../Editor/Editor.js");
var _indexJs = require("../../util/index.js");
function DocumentEdit({ $target , onEditDocument  }) {
    const compareStateWithStoredState = async ({ nextState , state  })=>{
        const { id  } = nextState;
        const key = `document-${id}`;
        const storedState = (0, _indexJs.getDocument)(key);
        if (storedState && storedState.updatedAt > nextState.updatedAt && confirm("\uC774\uBBF8 \uC800\uC7A5\uB41C \uB0B4\uC6A9\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) {
            const { id , title , content  } = storedState;
            await onEditDocument({
                docId: id,
                content: {
                    title,
                    content
                }
            });
            (0, _indexJs.removeDocument)(key);
            return {
                ...state,
                ...storedState
            };
        }
        return {
            ...state,
            ...nextState
        };
    };
    const storeAtStorageWhileInput = ({ state  })=>{
        const { id  } = state;
        const key = `document-${id}`;
        (0, _indexJs.setDocument)(key, state);
    };
    const editor = new (0, _editorJs.Editor)({
        $target,
        compareStateWithStoredState,
        storeAtStorageWhileInput: (0, _indexJs.debounce)(storeAtStorageWhileInput, 800),
        onEditDocument: (0, _indexJs.debounce)(onEditDocument, 1000)
    });
    this.render = ({ state  })=>{
        editor.render({
            state
        });
    };
}

},{"../Editor/Editor.js":"kyCo1","../../util/index.js":"6gmsK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kyCo1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Editor", ()=>Editor);
var _indexJs = require("../../util/index.js");
var _routerJs = require("../../router.js");
function Editor({ $target , compareStateWithStoredState , storeAtStorageWhileInput , onEditDocument  }) {
    let isRendered = false;
    let state1 = {
        title: "",
        content: ""
    };
    const generateHTML = ()=>{
        return `
            <input type="text" name="title" class="document-edit-input" placeholder="제목 없음" autofocus />
            <textarea class="document-edit-textarea" name="content" placeholder="내용 없음"></textarea>
            <div class="sub-document"></div>
        `;
    };
    const registerInputEvent = ()=>{
        $target.addEventListener("input", async (e)=>{
            state1 = {
                ...state1,
                [e.target.name]: e.target.value,
                updatedAt: new Date()
            };
            await storeAtStorageWhileInput({
                state: state1
            });
            await onEditDocument({
                docId: state1.id,
                content: state1
            });
        });
        $target.addEventListener("click", ({ target  })=>{
            const { tagName  } = target;
            if (tagName === "BUTTON") {
                const id = target.dataset.index;
                (0, _routerJs.push)({
                    nextUrl: `/documents/${id}`
                });
            }
        });
    };
    const refelectDocumentValue = async ({ nextState  })=>{
        if (!isRendered) {
            $target.innerHTML = generateHTML();
            isRendered = true;
        }
        const $title = (0, _indexJs.$)({
            selector: ".document-edit-input"
        });
        const $content = (0, _indexJs.$)({
            selector: ".document-edit-textarea"
        });
        const $subDocument = (0, _indexJs.$)({
            selector: ".sub-document"
        });
        state1 = await compareStateWithStoredState({
            nextState,
            state: state1
        });
        const { title: title1 , content , documents  } = state1;
        $title.value = title1;
        $content.value = content ? content : "";
        $subDocument.innerHTML = documents.map(({ id , title  })=>{
            return `
            <button class="sub-document-item" data-index="${id}">
                <img class="doc-img" src="../../public/images/document.png" alt="doc-img"/>
                ${title ? title : "\uC81C\uBAA9\uC5C6\uC74C"}
            </button>`;
        }).join("");
    };
    this.render = ({ state  })=>{
        $target.innerHTML = generateHTML();
        refelectDocumentValue({
            nextState: state
        });
    };
    registerInputEvent();
}

},{"../../util/index.js":"6gmsK","../../router.js":"l7a58","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dhYlM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DocumentRoot", ()=>DocumentRoot);
function DocumentRoot({ $target  }) {
    const generateHTML = ()=>{
        return `<img class="greeting-img" src="../../public/images/greeting.png" alt="greeting-img"/>`;
    };
    this.render = ()=>{
        $target.innerHTML = generateHTML();
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iwiF7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DocumentAdd", ()=>DocumentAdd);
var _createDomeElemJs = require("../../util/createDomeElem.js");
function DocumentAdd({ $target , onAddDocument  }) {
    const $documentAdd = (0, _createDomeElemJs.createDOMElement)({
        tagName: "button",
        attrs: [
            {
                attr: "class",
                value: "document-add-btn"
            },
            {
                attr: "textContent",
                value: "+ \uC0C8 \uD398\uC774\uC9C0"
            }
        ]
    });
    const removeEventListener = ()=>{
        $documentAdd.addEventListener("click", async ()=>{
            await onAddDocument({
                docId: null
            });
        });
    };
    this.render = ()=>{
        $target.appendChild($documentAdd);
    };
    removeEventListener();
}

},{"../../util/createDomeElem.js":"2IxTk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jy56f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NotFound", ()=>NotFound);
function NotFound({ $target  }) {
    const generateHTML = ()=>`<img class="not-found-img" src="https://i.imgur.com/EQJG7Qb.png" alt="Not Found" />`;
    this.render = ()=>{
        $target.innerHTML = generateHTML();
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMfpM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DocumentPage", ()=>DocumentPage);
var _indexJs = require("../../components/index.js");
var _routerJs = require("../../router.js");
var _createDomeElemJs = require("../../util/createDomeElem.js");
function DocumentPage({ $target , onGetOneDocument , onEditDocument  }) {
    const $documentPage = (0, _createDomeElemJs.createDOMElement)({
        tagName: "section"
    });
    const documentRoot = new (0, _indexJs.DocumentRoot)({
        $target: $documentPage
    });
    const documentEdit = new (0, _indexJs.DocumentEdit)({
        $target: $documentPage,
        onEditDocument
    });
    const notFound = new (0, _indexJs.NotFound)({
        $target: $documentPage
    });
    const router = async ()=>{
        const { pathname  } = window.location;
        if (pathname === "/") {
            documentRoot.render();
            return;
        }
        if (pathname.includes("/documents/")) {
            const documentId = pathname.split("/").at(-1);
            const document = await onGetOneDocument({
                docId: documentId
            });
            if (document) {
                documentEdit.render({
                    state: document
                });
                return;
            }
            notFound.render();
            return;
        }
        notFound.render();
    };
    this.render = ()=>{
        $target.appendChild($documentPage);
        router();
        (0, _routerJs.initRouter)({
            router: ()=>router()
        });
    };
}

},{"../../components/index.js":"6nkmk","../../router.js":"l7a58","../../util/createDomeElem.js":"2IxTk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1yTjH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _apiJs = require("./api.js");
var _apiJsDefault = parcelHelpers.interopDefault(_apiJs);
const useApi = async ({ method , content ="" , id =""  })=>{
    const makeParam = ()=>{
        switch(method){
            case "GET":
                if (Boolean(id)) return {
                    path: `/${id}`
                };
                return {
                    path: ""
                };
            case "POST":
                return {
                    path: "",
                    content
                };
            case "PUT":
                return {
                    path: `/${id}`,
                    content
                };
            case "DELETE":
                return {
                    path: `/${id}`
                };
            default:
                throw new Error("\uC798\uBABB\uB41C method \uC785\uB2C8\uB2E4.");
        }
    };
    try {
        const response = await (0, _apiJsDefault.default)[method](makeParam());
        return response;
    } catch (e) {
        alert(e.message);
        console.error(e.message);
    }
};
const LIST_API = {
    getAllDocuments: async ()=>await useApi({
            method: "GET"
        }),
    getOneDocument: async ({ id  })=>await useApi({
            method: "GET",
            id
        }),
    createDocument: async ({ content  })=>await useApi({
            method: "POST",
            content
        }),
    editDocument: async ({ id , content  })=>await useApi({
            method: "PUT",
            id,
            content
        }),
    deleteDocument: async ({ id  })=>await useApi({
            method: "DELETE",
            id
        })
};
exports.default = LIST_API;

},{"./api.js":"1nO8u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1nO8u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const API_ROOT = ({ path  })=>`https://kdt-frontend.programmers.co.kr/documents${path}`;
const returnOptions = ({ method , content  })=>{
    return {
        method,
        headers: {
            "x-username": "yeummy-sk",
            [method === "POST" || method === "PUT" ? "Content-Type" : "Accept"]: "application/json"
        },
        [method === "POST" || method === "PUT" ? "body" : "params"]: JSON.stringify(content)
    };
};
const useFetch = async ({ path , method , content =""  })=>{
    try {
        const options = returnOptions({
            method,
            content
        });
        const response = await fetch(API_ROOT({
            path
        }), options);
        if (!response || !response.ok) throw Error(response.status);
        return await response.json();
    } catch (e) {
        alert(e.message);
        console.error(e.message);
    }
};
const API = {
    GET: async ({ path  })=>await useFetch({
            path,
            method: "GET"
        }),
    POST: async ({ path , content  })=>await useFetch({
            path,
            method: "POST",
            content
        }),
    PUT: async ({ path , content  })=>await useFetch({
            path,
            method: "PUT",
            content
        }),
    DELETE: async ({ path  })=>await useFetch({
            path,
            method: "DELETE"
        })
};
exports.default = API;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cVGQq","7dhfe"], "7dhfe", "parcelRequire94c2")

//# sourceMappingURL=index.97a9311a.js.map
