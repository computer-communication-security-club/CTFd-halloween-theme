(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["default~pages/challenges~pages/main~pages/notifications~pages/scoreboard~pages" +
            "/settings~pages/setup~~6822bf1f"], {

        /***/
        "./CTFd/themes/xmas/assets/js/CTFd.js":
        /*!********************************************!*\
  !*** ./CTFd/themes/xmas/assets/js/CTFd.js ***!
  \********************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {;
            eval(
                "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexpo" +
                "rts[\"default\"] = void 0;\n\nvar _fetch = _interopRequireDefault(__webpack_re" +
                "quire__(/*! ./fetch */ \"./CTFd/themes/xmas/assets/js/fetch.js\"));\n\nvar _co" +
                "nfig = _interopRequireDefault(__webpack_require__(/*! ./config */ \"./CTFd/the" +
                "mes/xmas/assets/js/config.js\"));\n\nvar _api = __webpack_require__(/*! ./api " +
                "*/ \"./CTFd/themes/xmas/assets/js/api.js\");\n\n__webpack_require__(/*! ./patc" +
                "h */ \"./CTFd/themes/xmas/assets/js/patch.js\");\n\nvar _markdownIt = _interop" +
                "RequireDefault(__webpack_require__(/*! markdown-it */ \"./node_modules/markdow" +
                "n-it/index.js\"));\n\nvar _jquery = _interopRequireDefault(__webpack_require__" +
                "(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\"));\n\nvar _ezq = _inte" +
                "ropRequireDefault(__webpack_require__(/*! ./ezq */ \"./CTFd/themes/xmas/assets" +
                "/js/ezq.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__" +
                "esModule ? obj : { \"default\": obj }; }\n\nfunction ownKeys(object, enumerabl" +
                "eOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { v" +
                "ar symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbo" +
                "ls = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(ob" +
                "ject, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }" +
                "\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++" +
                ") { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKey" +
                "s(Object(source), true).forEach(function (key) { _defineProperty(target, key, " +
                "source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.define" +
                "Properties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys" +
                "(Object(source)).forEach(function (key) { Object.defineProperty(target, key, O" +
                "bject.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunc" +
                "tion _defineProperty(obj, key, value) { if (key in obj) { Object.definePropert" +
                "y(obj, key, { value: value, enumerable: true, configurable: true, writable: tr" +
                "ue }); } else { obj[key] = value; } return obj; }\n\nvar api = new _api.API(\"" +
                "/\");\nvar user = {};\nvar _internal = {};\nvar ui = {\n  ezq: _ezq[\"default" +
                "\"]\n};\nvar lib = {\n  $: _jquery[\"default\"],\n  markdown: markdown\n};\nva" +
                "r initialized = false;\n\nvar init = function init(data) {\n  if (initialized)" +
                " {\n    return;\n  }\n\n  initialized = true;\n  _config[\"default\"].urlRoot " +
                "= data.urlRoot || _config[\"default\"].urlRoot;\n  _config[\"default\"].csrfNo" +
                "nce = data.csrfNonce || _config[\"default\"].csrfNonce;\n  _config[\"default\"" +
                "].userMode = data.userMode || _config[\"default\"].userMode;\n  api.domain = _" +
                "config[\"default\"].urlRoot + \"/api/v1\";\n  user.id = data.userId;\n};\n\nva" +
                "r plugin = {\n  run: function run(f) {\n    f(CTFd);\n  }\n};\n\nfunction mark" +
                "down(config) {\n  // Merge passed config with original. Default to original.\n" +
                "  var md_config = _objectSpread(_objectSpread({}, {\n    html: true,\n    link" +
                "ify: true\n  }), config);\n\n  var md = (0, _markdownIt[\"default\"])(md_confi" +
                "g);\n\n  md.renderer.rules.link_open = function (tokens, idx, options, env, se" +
                "lf) {\n    tokens[idx].attrPush([\"target\", \"_blank\"]);\n    return self.re" +
                "nderToken(tokens, idx, options);\n  };\n\n  return md;\n}\n\nvar CTFd = {\n  i" +
                "nit: init,\n  config: _config[\"default\"],\n  fetch: _fetch[\"default\"],\n  " +
                "user: user,\n  ui: ui,\n  api: api,\n  lib: lib,\n  _internal: _internal,\n  p" +
                "lugin: plugin\n};\nvar _default = CTFd;\nexports[\"default\"] = _default;\n\n/" +
                "/# sourceURL=webpack:///./CTFd/themes/xmas/assets/js/CTFd.js?"
            );

            /***/
        }),

        /***/
        "./CTFd/themes/xmas/assets/js/api.js":
        /*!*******************************************!*\
  !*** ./CTFd/themes/xmas/assets/js/api.js ***!
  \*******************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {;
            eval(
                "\n\nvar _fetch = _interopRequireDefault(__webpack_require__(/*! ./fetch */ \"." +
                "/CTFd/themes/xmas/assets/js/fetch.js\"));\n\nvar _q = _interopRequireDefault(_" +
                "_webpack_require__(/*! q */ \"./node_modules/q/q.js\"));\n\nfunction _interopR" +
                "equireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }" +
                "; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol " +
                "=== \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = functio" +
                "n _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj" +
                ") { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol" +
                " && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(ob" +
                "j); }\n\n/**\n *\n * @class API\n * @param {(string|object)} [domainOrOptions]" +
                " - The project domain or options object. If object, see the object's optional " +
                "properties.\n * @param {string} [domainOrOptions.domain] - The project domain" +
                "\n * @param {object} [domainOrOptions.token] - auth token - object with value " +
                "property and optional headerOrQueryName and isQuery properties\n */\nvar API =" +
                " function () {\n  \"use strict\";\n\n  function API(options) {\n    var domain" +
                " = _typeof(options) === \"object\" ? options.domain : options;\n    this.domai" +
                "n = domain ? domain : \"\";\n\n    if (this.domain.length === 0) {\n      thro" +
                "w new Error(\"Domain parameter must be specified as a string.\");\n    }\n  }" +
                "\n\n  function serializeQueryParams(parameters) {\n    var str = [];\n\n    fo" +
                "r (var p in parameters) {\n      if (parameters.hasOwnProperty(p)) {\n        " +
                "str.push(encodeURIComponent(p) + \"=\" + encodeURIComponent(parameters[p]));\n" +
                "      }\n    }\n\n    return str.join(\"&\");\n  }\n\n  function mergeQueryPar" +
                "ams(parameters, queryParameters) {\n    if (parameters.$queryParameters) {\n  " +
                "    Object.keys(parameters.$queryParameters).forEach(function (parameterName) " +
                "{\n        var parameter = parameters.$queryParameters[parameterName];\n      " +
                "  queryParameters[parameterName] = parameter;\n      });\n    }\n\n    return " +
                "queryParameters;\n  }\n  /**\n   * HTTP Request\n   * @method\n   * @name API#" +
                "request\n   * @param {string} method - http method\n   * @param {string} url -" +
                " url to do request\n   * @param {object} parameters\n   * @param {object} body" +
                " - body parameters / object\n   * @param {object} headers - header parameters" +
                "\n   * @param {object} queryParameters - querystring parameters\n   * @param {" +
                "object} form - form data object\n   * @param {object} deferred - promise objec" +
                "t\n   */\n\n\n  API.prototype.request = function (method, url, parameters, bod" +
                "y, headers, queryParameters, form, deferred) {\n    var queryParams = queryPar" +
                "ameters && Object.keys(queryParameters).length ? serializeQueryParams(queryPar" +
                "ameters) : null;\n    var urlWithParams = url + (queryParams ? \"?\" + queryPa" +
                "rams : \"\");\n\n    if (body && !Object.keys(body).length) {\n      body = un" +
                "defined;\n    }\n\n    (0, _fetch[\"default\"])(urlWithParams, {\n      method" +
                ": method,\n      headers: headers,\n      body: JSON.stringify(body)\n    }).t" +
                "hen(function (response) {\n      return response.json();\n    }).then(function" +
                " (body) {\n      deferred.resolve(body);\n    })[\"catch\"](function (error) {" +
                "\n      deferred.reject(error);\n    });\n  };\n  /**\n   *\n   * @method\n   " +
                "* @name API#post_award_list\n   * @param {object} parameters - method options " +
                "and parameters\n   */\n\n\n  API.prototype.post_award_list = function (paramet" +
                "ers) {\n    if (parameters === undefined) {\n      parameters = {};\n    }\n\n" +
                "    var deferred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n" +
                "        path = \"/awards\";\n    var body = {},\n        queryParameters = {}," +
                "\n        headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"appl" +
                "ication/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n   " +
                " queryParameters = mergeQueryParams(parameters, queryParameters);\n    this.re" +
                "quest(\"POST\", domain + path, parameters, body, headers, queryParameters, for" +
                "m, deferred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n" +
                "   * @name API#delete_award\n   * @param {object} parameters - method options " +
                "and parameters\n   * @param {string} parameters.awardId - An Award ID\n   */\n" +
                "\n\n  API.prototype.delete_award = function (parameters) {\n    if (parameters" +
                " === undefined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"de" +
                "fault\"].defer();\n\n    var domain = this.domain,\n        path = \"/awards/{" +
                "award_id}\";\n    var body = {},\n        queryParameters = {},\n        heade" +
                "rs = {},\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"]" +
                ";\n    headers[\"Content-Type\"] = [\"application/json\"];\n    path = path.re" +
                "place(\"{award_id}\", parameters[\"awardId\"]);\n\n    if (parameters[\"awardI" +
                "d\"] === undefined) {\n      deferred.reject(new Error(\"Missing required  par" +
                "ameter: awardId\"));\n      return deferred.promise;\n    }\n\n    queryParame" +
                "ters = mergeQueryParams(parameters, queryParameters);\n    this.request(\"DELE" +
                "TE\", domain + path, parameters, body, headers, queryParameters, form, deferre" +
                "d);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name" +
                " API#get_award\n   * @param {object} parameters - method options and parameter" +
                "s\n   * @param {string} parameters.awardId - An Award ID\n   */\n\n\n  API.pro" +
                "totype.get_award = function (parameters) {\n    if (parameters === undefined) " +
                "{\n      parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer()" +
                ";\n\n    var domain = this.domain,\n        path = \"/awards/{award_id}\";\n  " +
                "  var body = {},\n        queryParameters = {},\n        headers = {},\n      " +
                "  form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[" +
                "\"Content-Type\"] = [\"application/json\"];\n    path = path.replace(\"{award_" +
                "id}\", parameters[\"awardId\"]);\n\n    if (parameters[\"awardId\"] === undefi" +
                "ned) {\n      deferred.reject(new Error(\"Missing required  parameter: awardId" +
                "\"));\n      return deferred.promise;\n    }\n\n    queryParameters = mergeQue" +
                "ryParams(parameters, queryParameters);\n    this.request(\"GET\", domain + pat" +
                "h, parameters, body, headers, queryParameters, form, deferred);\n    return de" +
                "ferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#post_challeng" +
                "e_list\n   * @param {object} parameters - method options and parameters\n   */" +
                "\n\n\n  API.prototype.post_challenge_list = function (parameters) {\n    if (p" +
                "arameters === undefined) {\n      parameters = {};\n    }\n\n    var deferred " +
                "= _q[\"default\"].defer();\n\n    var domain = this.domain,\n        path = \"" +
                "/challenges\";\n    var body = {},\n        queryParameters = {},\n        hea" +
                "ders = {},\n        form = {};\n    headers[\"Accept\"] = [\"application/json" +
                "\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n    queryParame" +
                "ters = mergeQueryParams(parameters, queryParameters);\n    this.request(\"POST" +
                "\", domain + path, parameters, body, headers, queryParameters, form, deferred)" +
                ";\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name A" +
                "PI#get_challenge_list\n   * @param {object} parameters - method options and pa" +
                "rameters\n   */\n\n\n  API.prototype.get_challenge_list = function (parameters" +
                ") {\n    if (parameters === undefined) {\n      parameters = {};\n    }\n\n   " +
                " var deferred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n   " +
                "     path = \"/challenges\";\n    var body = {},\n        queryParameters = {}" +
                ",\n        headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"app" +
                "lication/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n  " +
                "  queryParameters = mergeQueryParams(parameters, queryParameters);\n    this.r" +
                "equest(\"GET\", domain + path, parameters, body, headers, queryParameters, for" +
                "m, deferred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n" +
                "   * @name API#post_challenge_attempt\n   * @param {object} parameters - metho" +
                "d options and parameters\n   */\n\n\n  API.prototype.post_challenge_attempt = " +
                "function (parameters) {\n    if (parameters === undefined) {\n      parameters" +
                " = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var domain" +
                " = this.domain,\n        path = \"/challenges/attempt\";\n    var body = {},\n" +
                "        queryParameters = {},\n        headers = {},\n        form = {};\n    " +
                "headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Type\"] =" +
                " [\"application/json\"];\n    queryParameters = mergeQueryParams(parameters, q" +
                "ueryParameters);\n    this.request(\"POST\", domain + path, parameters, body, " +
                "headers, queryParameters, form, deferred);\n    return deferred.promise;\n  };" +
                "\n  /**\n   *\n   * @method\n   * @name API#get_challenge_types\n   * @param {" +
                "object} parameters - method options and parameters\n   */\n\n\n  API.prototype" +
                ".get_challenge_types = function (parameters) {\n    if (parameters === undefin" +
                "ed) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"default\"].def" +
                "er();\n\n    var domain = this.domain,\n        path = \"/challenges/types\";" +
                "\n    var body = {},\n        queryParameters = {},\n        headers = {},\n  " +
                "      form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    heade" +
                "rs[\"Content-Type\"] = [\"application/json\"];\n    queryParameters = mergeQue" +
                "ryParams(parameters, queryParameters);\n    this.request(\"GET\", domain + pat" +
                "h, parameters, body, headers, queryParameters, form, deferred);\n    return de" +
                "ferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#patch_challen" +
                "ge\n   * @param {object} parameters - method options and parameters\n   * @par" +
                "am {string} parameters.challengeId - A Challenge ID\n   */\n\n\n  API.prototyp" +
                "e.patch_challenge = function (parameters) {\n    if (parameters === undefined)" +
                " {\n      parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer(" +
                ");\n\n    var domain = this.domain,\n        path = \"/challenges/{challenge_i" +
                "d}\";\n    var body = {},\n        queryParameters = {},\n        headers = {}" +
                ",\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    " +
                "headers[\"Content-Type\"] = [\"application/json\"];\n    path = path.replace(" +
                "\"{challenge_id}\", parameters[\"challengeId\"]);\n\n    if (parameters[\"chal" +
                "lengeId\"] === undefined) {\n      deferred.reject(new Error(\"Missing require" +
                "d  parameter: challengeId\"));\n      return deferred.promise;\n    }\n\n    q" +
                "ueryParameters = mergeQueryParams(parameters, queryParameters);\n    this.requ" +
                "est(\"PATCH\", domain + path, parameters, body, headers, queryParameters, form" +
                ", deferred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n " +
                "  * @name API#delete_challenge\n   * @param {object} parameters - method optio" +
                "ns and parameters\n   * @param {string} parameters.challengeId - A Challenge I" +
                "D\n   */\n\n\n  API.prototype.delete_challenge = function (parameters) {\n    " +
                "if (parameters === undefined) {\n      parameters = {};\n    }\n\n    var defe" +
                "rred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n        path" +
                " = \"/challenges/{challenge_id}\";\n    var body = {},\n        queryParameter" +
                "s = {},\n        headers = {},\n        form = {};\n    headers[\"Accept\"] = " +
                "[\"application/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"" +
                "];\n    path = path.replace(\"{challenge_id}\", parameters[\"challengeId\"]);" +
                "\n\n    if (parameters[\"challengeId\"] === undefined) {\n      deferred.rejec" +
                "t(new Error(\"Missing required  parameter: challengeId\"));\n      return defe" +
                "rred.promise;\n    }\n\n    queryParameters = mergeQueryParams(parameters, que" +
                "ryParameters);\n    this.request(\"DELETE\", domain + path, parameters, body, " +
                "headers, queryParameters, form, deferred);\n    return deferred.promise;\n  };" +
                "\n  /**\n   *\n   * @method\n   * @name API#get_challenge\n   * @param {object" +
                "} parameters - method options and parameters\n   * @param {string} parameters." +
                "challengeId - A Challenge ID\n   */\n\n\n  API.prototype.get_challenge = funct" +
                "ion (parameters) {\n    if (parameters === undefined) {\n      parameters = {}" +
                ";\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var domain = th" +
                "is.domain,\n        path = \"/challenges/{challenge_id}\";\n    var body = {}," +
                "\n        queryParameters = {},\n        headers = {},\n        form = {};\n  " +
                "  headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Type\"]" +
                " = [\"application/json\"];\n    path = path.replace(\"{challenge_id}\", parame" +
                "ters[\"challengeId\"]);\n\n    if (parameters[\"challengeId\"] === undefined) " +
                "{\n      deferred.reject(new Error(\"Missing required  parameter: challengeId" +
                "\"));\n      return deferred.promise;\n    }\n\n    queryParameters = mergeQue" +
                "ryParams(parameters, queryParameters);\n    this.request(\"GET\", domain + pat" +
                "h, parameters, body, headers, queryParameters, form, deferred);\n    return de" +
                "ferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_challenge" +
                "_files\n   * @param {object} parameters - method options and parameters\n   * " +
                "@param {string} parameters.id - A Challenge ID\n   * @param {string} parameter" +
                "s.challengeId -\n   */\n\n\n  API.prototype.get_challenge_files = function (pa" +
                "rameters) {\n    if (parameters === undefined) {\n      parameters = {};\n    " +
                "}\n\n    var deferred = _q[\"default\"].defer();\n\n    var domain = this.doma" +
                "in,\n        path = \"/challenges/{challenge_id}/files\";\n    var body = {}," +
                "\n        queryParameters = {},\n        headers = {},\n        form = {};\n  " +
                "  headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Type\"]" +
                " = [\"application/json\"];\n\n    if (parameters[\"id\"] !== undefined) {\n   " +
                "   queryParameters[\"id\"] = parameters[\"id\"];\n    }\n\n    path = path.rep" +
                "lace(\"{challenge_id}\", parameters[\"challengeId\"]);\n\n    if (parameters[" +
                "\"challengeId\"] === undefined) {\n      deferred.reject(new Error(\"Missing r" +
                "equired  parameter: challengeId\"));\n      return deferred.promise;\n    }\n" +
                "\n    queryParameters = mergeQueryParams(parameters, queryParameters);\n    th" +
                "is.request(\"GET\", domain + path, parameters, body, headers, queryParameters," +
                " form, deferred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @meth" +
                "od\n   * @name API#get_challenge_flags\n   * @param {object} parameters - meth" +
                "od options and parameters\n   * @param {string} parameters.id - A Challenge ID" +
                "\n   * @param {string} parameters.challengeId -\n   */\n\n\n  API.prototype.ge" +
                "t_challenge_flags = function (parameters) {\n    if (parameters === undefined)" +
                " {\n      parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer(" +
                ");\n\n    var domain = this.domain,\n        path = \"/challenges/{challenge_i" +
                "d}/flags\";\n    var body = {},\n        queryParameters = {},\n        header" +
                "s = {},\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];" +
                "\n    headers[\"Content-Type\"] = [\"application/json\"];\n\n    if (parameter" +
                "s[\"id\"] !== undefined) {\n      queryParameters[\"id\"] = parameters[\"id\"]" +
                ";\n    }\n\n    path = path.replace(\"{challenge_id}\", parameters[\"challenge" +
                "Id\"]);\n\n    if (parameters[\"challengeId\"] === undefined) {\n      deferre" +
                "d.reject(new Error(\"Missing required  parameter: challengeId\"));\n      retu" +
                "rn deferred.promise;\n    }\n\n    queryParameters = mergeQueryParams(paramete" +
                "rs, queryParameters);\n    this.request(\"GET\", domain + path, parameters, bo" +
                "dy, headers, queryParameters, form, deferred);\n    return deferred.promise;\n" +
                "  };\n  /**\n   *\n   * @method\n   * @name API#get_challenge_hints\n   * @par" +
                "am {object} parameters - method options and parameters\n   * @param {string} p" +
                "arameters.id - A Challenge ID\n   * @param {string} parameters.challengeId -\n" +
                "   */\n\n\n  API.prototype.get_challenge_hints = function (parameters) {\n    " +
                "if (parameters === undefined) {\n      parameters = {};\n    }\n\n    var defe" +
                "rred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n        path" +
                " = \"/challenges/{challenge_id}/hints\";\n    var body = {},\n        queryPar" +
                "ameters = {},\n        headers = {},\n        form = {};\n    headers[\"Accept" +
                "\"] = [\"application/json\"];\n    headers[\"Content-Type\"] = [\"application/" +
                "json\"];\n\n    if (parameters[\"id\"] !== undefined) {\n      queryParameters" +
                "[\"id\"] = parameters[\"id\"];\n    }\n\n    path = path.replace(\"{challenge_" +
                "id}\", parameters[\"challengeId\"]);\n\n    if (parameters[\"challengeId\"] ==" +
                "= undefined) {\n      deferred.reject(new Error(\"Missing required  parameter:" +
                " challengeId\"));\n      return deferred.promise;\n    }\n\n    queryParameter" +
                "s = mergeQueryParams(parameters, queryParameters);\n    this.request(\"GET\", " +
                "domain + path, parameters, body, headers, queryParameters, form, deferred);\n " +
                "   return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#g" +
                "et_challenge_solves\n   * @param {object} parameters - method options and para" +
                "meters\n   * @param {string} parameters.id - A Challenge ID\n   * @param {stri" +
                "ng} parameters.challengeId -\n   */\n\n\n  API.prototype.get_challenge_solves " +
                "= function (parameters) {\n    if (parameters === undefined) {\n      paramete" +
                "rs = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var doma" +
                "in = this.domain,\n        path = \"/challenges/{challenge_id}/solves\";\n    " +
                "var body = {},\n        queryParameters = {},\n        headers = {},\n        " +
                "form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"C" +
                "ontent-Type\"] = [\"application/json\"];\n\n    if (parameters[\"id\"] !== und" +
                "efined) {\n      queryParameters[\"id\"] = parameters[\"id\"];\n    }\n\n    p" +
                "ath = path.replace(\"{challenge_id}\", parameters[\"challengeId\"]);\n\n    if" +
                " (parameters[\"challengeId\"] === undefined) {\n      deferred.reject(new Erro" +
                "r(\"Missing required  parameter: challengeId\"));\n      return deferred.promi" +
                "se;\n    }\n\n    queryParameters = mergeQueryParams(parameters, queryParamete" +
                "rs);\n    this.request(\"GET\", domain + path, parameters, body, headers, quer" +
                "yParameters, form, deferred);\n    return deferred.promise;\n  };\n  /**\n   *" +
                "\n   * @method\n   * @name API#get_challenge_tags\n   * @param {object} parame" +
                "ters - method options and parameters\n   * @param {string} parameters.id - A C" +
                "hallenge ID\n   * @param {string} parameters.challengeId -\n   */\n\n\n  API.p" +
                "rototype.get_challenge_tags = function (parameters) {\n    if (parameters === " +
                "undefined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"default" +
                "\"].defer();\n\n    var domain = this.domain,\n        path = \"/challenges/{c" +
                "hallenge_id}/tags\";\n    var body = {},\n        queryParameters = {},\n     " +
                "   headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"application" +
                "/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n\n    if (" +
                "parameters[\"id\"] !== undefined) {\n      queryParameters[\"id\"] = parameter" +
                "s[\"id\"];\n    }\n\n    path = path.replace(\"{challenge_id}\", parameters[\"" +
                "challengeId\"]);\n\n    if (parameters[\"challengeId\"] === undefined) {\n    " +
                "  deferred.reject(new Error(\"Missing required  parameter: challengeId\"));\n " +
                "     return deferred.promise;\n    }\n\n    queryParameters = mergeQueryParams" +
                "(parameters, queryParameters);\n    this.request(\"GET\", domain + path, param" +
                "eters, body, headers, queryParameters, form, deferred);\n    return deferred.p" +
                "romise;\n  };\n  /**\n   *\n   * @method\n   * @name API#post_config_list\n   " +
                "* @param {object} parameters - method options and parameters\n   */\n\n\n  API" +
                ".prototype.post_config_list = function (parameters) {\n    if (parameters === " +
                "undefined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"default" +
                "\"].defer();\n\n    var domain = this.domain,\n        path = \"/configs\";\n " +
                "   var body = {},\n        queryParameters = {},\n        headers = {},\n     " +
                "   form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[" +
                "\"Content-Type\"] = [\"application/json\"];\n    queryParameters = mergeQueryP" +
                "arams(parameters, queryParameters);\n    this.request(\"POST\", domain + path," +
                " parameters, body, headers, queryParameters, form, deferred);\n    return defe" +
                "rred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#patch_config_li" +
                "st\n   * @param {object} parameters - method options and parameters\n   */\n\n" +
                "\n  API.prototype.patch_config_list = function (parameters) {\n    if (paramet" +
                "ers === undefined) {\n      parameters = {};\n    }\n\n    var deferred = _q[" +
                "\"default\"].defer();\n\n    var domain = this.domain,\n        path = \"/conf" +
                "igs\";\n    var body = {},\n        queryParameters = {},\n        headers = {" +
                "},\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n   " +
                " headers[\"Content-Type\"] = [\"application/json\"];\n    queryParameters = me" +
                "rgeQueryParams(parameters, queryParameters);\n    this.request(\"PATCH\", doma" +
                "in + path, parameters, body, headers, queryParameters, form, deferred);\n    r" +
                "eturn deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_c" +
                "onfig_list\n   * @param {object} parameters - method options and parameters\n " +
                "  */\n\n\n  API.prototype.get_config_list = function (parameters) {\n    if (p" +
                "arameters === undefined) {\n      parameters = {};\n    }\n\n    var deferred " +
                "= _q[\"default\"].defer();\n\n    var domain = this.domain,\n        path = \"" +
                "/configs\";\n    var body = {},\n        queryParameters = {},\n        header" +
                "s = {},\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];" +
                "\n    headers[\"Content-Type\"] = [\"application/json\"];\n    queryParameters" +
                " = mergeQueryParams(parameters, queryParameters);\n    this.request(\"GET\", d" +
                "omain + path, parameters, body, headers, queryParameters, form, deferred);\n  " +
                "  return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#pa" +
                "tch_config\n   * @param {object} parameters - method options and parameters\n " +
                "  * @param {string} parameters.configKey -\n   */\n\n\n  API.prototype.patch_c" +
                "onfig = function (parameters) {\n    if (parameters === undefined) {\n      pa" +
                "rameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    va" +
                "r domain = this.domain,\n        path = \"/configs/{config_key}\";\n    var bo" +
                "dy = {},\n        queryParameters = {},\n        headers = {},\n        form =" +
                " {};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content" +
                "-Type\"] = [\"application/json\"];\n    path = path.replace(\"{config_key}\", " +
                "parameters[\"configKey\"]);\n\n    if (parameters[\"configKey\"] === undefined" +
                ") {\n      deferred.reject(new Error(\"Missing required  parameter: configKey" +
                "\"));\n      return deferred.promise;\n    }\n\n    queryParameters = mergeQue" +
                "ryParams(parameters, queryParameters);\n    this.request(\"PATCH\", domain + p" +
                "ath, parameters, body, headers, queryParameters, form, deferred);\n    return " +
                "deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#delete_conf" +
                "ig\n   * @param {object} parameters - method options and parameters\n   * @par" +
                "am {string} parameters.configKey -\n   */\n\n\n  API.prototype.delete_config =" +
                " function (parameters) {\n    if (parameters === undefined) {\n      parameter" +
                "s = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var domai" +
                "n = this.domain,\n        path = \"/configs/{config_key}\";\n    var body = {}" +
                ",\n        queryParameters = {},\n        headers = {},\n        form = {};\n " +
                "   headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Type\"" +
                "] = [\"application/json\"];\n    path = path.replace(\"{config_key}\", paramet" +
                "ers[\"configKey\"]);\n\n    if (parameters[\"configKey\"] === undefined) {\n  " +
                "    deferred.reject(new Error(\"Missing required  parameter: configKey\"));\n " +
                "     return deferred.promise;\n    }\n\n    queryParameters = mergeQueryParams" +
                "(parameters, queryParameters);\n    this.request(\"DELETE\", domain + path, pa" +
                "rameters, body, headers, queryParameters, form, deferred);\n    return deferre" +
                "d.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_config\n   * @" +
                "param {object} parameters - method options and parameters\n   * @param {string" +
                "} parameters.configKey -\n   */\n\n\n  API.prototype.get_config = function (pa" +
                "rameters) {\n    if (parameters === undefined) {\n      parameters = {};\n    " +
                "}\n\n    var deferred = _q[\"default\"].defer();\n\n    var domain = this.doma" +
                "in,\n        path = \"/configs/{config_key}\";\n    var body = {},\n        qu" +
                "eryParameters = {},\n        headers = {},\n        form = {};\n    headers[\"" +
                "Accept\"] = [\"application/json\"];\n    headers[\"Content-Type\"] = [\"applic" +
                "ation/json\"];\n    path = path.replace(\"{config_key}\", parameters[\"configK" +
                "ey\"]);\n\n    if (parameters[\"configKey\"] === undefined) {\n      deferred." +
                "reject(new Error(\"Missing required  parameter: configKey\"));\n      return d" +
                "eferred.promise;\n    }\n\n    queryParameters = mergeQueryParams(parameters, " +
                "queryParameters);\n    this.request(\"GET\", domain + path, parameters, body, " +
                "headers, queryParameters, form, deferred);\n    return deferred.promise;\n  };" +
                "\n  /**\n   *\n   * @method\n   * @name API#post_files_list\n   * @param {obje" +
                "ct} parameters - method options and parameters\n   */\n\n\n  API.prototype.pos" +
                "t_files_list = function (parameters) {\n    if (parameters === undefined) {\n " +
                "     parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n" +
                "\n    var domain = this.domain,\n        path = \"/files\";\n    var body = {}" +
                ",\n        queryParameters = {},\n        headers = {},\n        form = {};\n " +
                "   headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Type\"" +
                "] = [\"application/json\"];\n    queryParameters = mergeQueryParams(parameters" +
                ", queryParameters);\n    this.request(\"POST\", domain + path, parameters, bod" +
                "y, headers, queryParameters, form, deferred);\n    return deferred.promise;\n " +
                " };\n  /**\n   *\n   * @method\n   * @name API#get_files_list\n   * @param {ob" +
                "ject} parameters - method options and parameters\n   */\n\n\n  API.prototype.g" +
                "et_files_list = function (parameters) {\n    if (parameters === undefined) {\n" +
                "      parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n" +
                "\n    var domain = this.domain,\n        path = \"/files\";\n    var body = {}" +
                ",\n        queryParameters = {},\n        headers = {},\n        form = {};\n " +
                "   headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Type\"" +
                "] = [\"application/json\"];\n    queryParameters = mergeQueryParams(parameters" +
                ", queryParameters);\n    this.request(\"GET\", domain + path, parameters, body" +
                ", headers, queryParameters, form, deferred);\n    return deferred.promise;\n  " +
                "};\n  /**\n   *\n   * @method\n   * @name API#delete_files_detail\n   * @param" +
                " {object} parameters - method options and parameters\n   * @param {string} par" +
                "ameters.fileId -\n   */\n\n\n  API.prototype.delete_files_detail = function (p" +
                "arameters) {\n    if (parameters === undefined) {\n      parameters = {};\n   " +
                " }\n\n    var deferred = _q[\"default\"].defer();\n\n    var domain = this.dom" +
                "ain,\n        path = \"/files/{file_id}\";\n    var body = {},\n        queryP" +
                "arameters = {},\n        headers = {},\n        form = {};\n    headers[\"Acce" +
                "pt\"] = [\"application/json\"];\n    headers[\"Content-Type\"] = [\"applicatio" +
                "n/json\"];\n    path = path.replace(\"{file_id}\", parameters[\"fileId\"]);\n" +
                "\n    if (parameters[\"fileId\"] === undefined) {\n      deferred.reject(new E" +
                "rror(\"Missing required  parameter: fileId\"));\n      return deferred.promise" +
                ";\n    }\n\n    queryParameters = mergeQueryParams(parameters, queryParameters" +
                ");\n    this.request(\"DELETE\", domain + path, parameters, body, headers, que" +
                "ryParameters, form, deferred);\n    return deferred.promise;\n  };\n  /**\n   " +
                "*\n   * @method\n   * @name API#get_files_detail\n   * @param {object} paramet" +
                "ers - method options and parameters\n   * @param {string} parameters.fileId -" +
                "\n   */\n\n\n  API.prototype.get_files_detail = function (parameters) {\n    i" +
                "f (parameters === undefined) {\n      parameters = {};\n    }\n\n    var defer" +
                "red = _q[\"default\"].defer();\n\n    var domain = this.domain,\n        path " +
                "= \"/files/{file_id}\";\n    var body = {},\n        queryParameters = {},\n  " +
                "      headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"applicat" +
                "ion/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n    pat" +
                "h = path.replace(\"{file_id}\", parameters[\"fileId\"]);\n\n    if (parameters" +
                "[\"fileId\"] === undefined) {\n      deferred.reject(new Error(\"Missing requi" +
                "red  parameter: fileId\"));\n      return deferred.promise;\n    }\n\n    quer" +
                "yParameters = mergeQueryParams(parameters, queryParameters);\n    this.request" +
                "(\"GET\", domain + path, parameters, body, headers, queryParameters, form, def" +
                "erred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @" +
                "name API#post_flag_list\n   * @param {object} parameters - method options and " +
                "parameters\n   */\n\n\n  API.prototype.post_flag_list = function (parameters) " +
                "{\n    if (parameters === undefined) {\n      parameters = {};\n    }\n\n    v" +
                "ar deferred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n     " +
                "   path = \"/flags\";\n    var body = {},\n        queryParameters = {},\n    " +
                "    headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"applicatio" +
                "n/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n    query" +
                "Parameters = mergeQueryParams(parameters, queryParameters);\n    this.request(" +
                "\"POST\", domain + path, parameters, body, headers, queryParameters, form, def" +
                "erred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @" +
                "name API#get_flag_list\n   * @param {object} parameters - method options and p" +
                "arameters\n   */\n\n\n  API.prototype.get_flag_list = function (parameters) {" +
                "\n    if (parameters === undefined) {\n      parameters = {};\n    }\n\n    va" +
                "r deferred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n      " +
                "  path = \"/flags\";\n    var body = {},\n        queryParameters = {},\n     " +
                "   headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"application" +
                "/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n    queryP" +
                "arameters = mergeQueryParams(parameters, queryParameters);\n    this.request(" +
                "\"GET\", domain + path, parameters, body, headers, queryParameters, form, defe" +
                "rred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @n" +
                "ame API#get_flag_types\n   * @param {object} parameters - method options and p" +
                "arameters\n   */\n\n\n  API.prototype.get_flag_types = function (parameters) {" +
                "\n    if (parameters === undefined) {\n      parameters = {};\n    }\n\n    va" +
                "r deferred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n      " +
                "  path = \"/flags/types\";\n    var body = {},\n        queryParameters = {}," +
                "\n        headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"appl" +
                "ication/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n   " +
                " queryParameters = mergeQueryParams(parameters, queryParameters);\n    this.re" +
                "quest(\"GET\", domain + path, parameters, body, headers, queryParameters, form" +
                ", deferred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n " +
                "  * @name API#get_flag_types_1\n   * @param {object} parameters - method optio" +
                "ns and parameters\n   * @param {string} parameters.typeName -\n   */\n\n\n  AP" +
                "I.prototype.get_flag_types_1 = function (parameters) {\n    if (parameters ===" +
                " undefined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"defaul" +
                "t\"].defer();\n\n    var domain = this.domain,\n        path = \"/flags/types/" +
                "{type_name}\";\n    var body = {},\n        queryParameters = {},\n        hea" +
                "ders = {},\n        form = {};\n    headers[\"Accept\"] = [\"application/json" +
                "\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n    path = path" +
                ".replace(\"{type_name}\", parameters[\"typeName\"]);\n\n    if (parameters[\"t" +
                "ypeName\"] === undefined) {\n      deferred.reject(new Error(\"Missing require" +
                "d  parameter: typeName\"));\n      return deferred.promise;\n    }\n\n    quer" +
                "yParameters = mergeQueryParams(parameters, queryParameters);\n    this.request" +
                "(\"GET\", domain + path, parameters, body, headers, queryParameters, form, def" +
                "erred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @" +
                "name API#patch_flag\n   * @param {object} parameters - method options and para" +
                "meters\n   * @param {string} parameters.flagId -\n   */\n\n\n  API.prototype.p" +
                "atch_flag = function (parameters) {\n    if (parameters === undefined) {\n    " +
                "  parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n  " +
                "  var domain = this.domain,\n        path = \"/flags/{flag_id}\";\n    var bod" +
                "y = {},\n        queryParameters = {},\n        headers = {},\n        form = " +
                "{};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-" +
                "Type\"] = [\"application/json\"];\n    path = path.replace(\"{flag_id}\", para" +
                "meters[\"flagId\"]);\n\n    if (parameters[\"flagId\"] === undefined) {\n     " +
                " deferred.reject(new Error(\"Missing required  parameter: flagId\"));\n      r" +
                "eturn deferred.promise;\n    }\n\n    queryParameters = mergeQueryParams(param" +
                "eters, queryParameters);\n    this.request(\"PATCH\", domain + path, parameter" +
                "s, body, headers, queryParameters, form, deferred);\n    return deferred.promi" +
                "se;\n  };\n  /**\n   *\n   * @method\n   * @name API#delete_flag\n   * @param " +
                "{object} parameters - method options and parameters\n   * @param {string} para" +
                "meters.flagId -\n   */\n\n\n  API.prototype.delete_flag = function (parameters" +
                ") {\n    if (parameters === undefined) {\n      parameters = {};\n    }\n\n   " +
                " var deferred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n   " +
                "     path = \"/flags/{flag_id}\";\n    var body = {},\n        queryParameters" +
                " = {},\n        headers = {},\n        form = {};\n    headers[\"Accept\"] = [" +
                "\"application/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"]" +
                ";\n    path = path.replace(\"{flag_id}\", parameters[\"flagId\"]);\n\n    if (" +
                "parameters[\"flagId\"] === undefined) {\n      deferred.reject(new Error(\"Mis" +
                "sing required  parameter: flagId\"));\n      return deferred.promise;\n    }\n" +
                "\n    queryParameters = mergeQueryParams(parameters, queryParameters);\n    th" +
                "is.request(\"DELETE\", domain + path, parameters, body, headers, queryParamete" +
                "rs, form, deferred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @m" +
                "ethod\n   * @name API#get_flag\n   * @param {object} parameters - method optio" +
                "ns and parameters\n   * @param {string} parameters.flagId -\n   */\n\n\n  API." +
                "prototype.get_flag = function (parameters) {\n    if (parameters === undefined" +
                ") {\n      parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer" +
                "();\n\n    var domain = this.domain,\n        path = \"/flags/{flag_id}\";\n  " +
                "  var body = {},\n        queryParameters = {},\n        headers = {},\n      " +
                "  form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[" +
                "\"Content-Type\"] = [\"application/json\"];\n    path = path.replace(\"{flag_i" +
                "d}\", parameters[\"flagId\"]);\n\n    if (parameters[\"flagId\"] === undefined" +
                ") {\n      deferred.reject(new Error(\"Missing required  parameter: flagId\"))" +
                ";\n      return deferred.promise;\n    }\n\n    queryParameters = mergeQueryPa" +
                "rams(parameters, queryParameters);\n    this.request(\"GET\", domain + path, p" +
                "arameters, body, headers, queryParameters, form, deferred);\n    return deferr" +
                "ed.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#post_hint_list\n " +
                "  * @param {object} parameters - method options and parameters\n   */\n\n\n  A" +
                "PI.prototype.post_hint_list = function (parameters) {\n    if (parameters === " +
                "undefined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"default" +
                "\"].defer();\n\n    var domain = this.domain,\n        path = \"/hints\";\n   " +
                " var body = {},\n        queryParameters = {},\n        headers = {},\n       " +
                " form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"" +
                "Content-Type\"] = [\"application/json\"];\n    queryParameters = mergeQueryPar" +
                "ams(parameters, queryParameters);\n    this.request(\"POST\", domain + path, p" +
                "arameters, body, headers, queryParameters, form, deferred);\n    return deferr" +
                "ed.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_hint_list\n  " +
                " * @param {object} parameters - method options and parameters\n   */\n\n\n  AP" +
                "I.prototype.get_hint_list = function (parameters) {\n    if (parameters === un" +
                "defined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"default\"" +
                "].defer();\n\n    var domain = this.domain,\n        path = \"/hints\";\n    v" +
                "ar body = {},\n        queryParameters = {},\n        headers = {},\n        f" +
                "orm = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Co" +
                "ntent-Type\"] = [\"application/json\"];\n    queryParameters = mergeQueryParam" +
                "s(parameters, queryParameters);\n    this.request(\"GET\", domain + path, para" +
                "meters, body, headers, queryParameters, form, deferred);\n    return deferred." +
                "promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#patch_hint\n   * @pa" +
                "ram {object} parameters - method options and parameters\n   * @param {string} " +
                "parameters.hintId -\n   */\n\n\n  API.prototype.patch_hint = function (paramet" +
                "ers) {\n    if (parameters === undefined) {\n      parameters = {};\n    }\n\n" +
                "    var deferred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n" +
                "        path = \"/hints/{hint_id}\";\n    var body = {},\n        queryParamet" +
                "ers = {},\n        headers = {},\n        form = {};\n    headers[\"Accept\"] " +
                "= [\"application/json\"];\n    headers[\"Content-Type\"] = [\"application/json" +
                "\"];\n    path = path.replace(\"{hint_id}\", parameters[\"hintId\"]);\n\n    i" +
                "f (parameters[\"hintId\"] === undefined) {\n      deferred.reject(new Error(\"" +
                "Missing required  parameter: hintId\"));\n      return deferred.promise;\n    " +
                "}\n\n    queryParameters = mergeQueryParams(parameters, queryParameters);\n   " +
                " this.request(\"PATCH\", domain + path, parameters, body, headers, queryParame" +
                "ters, form, deferred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * " +
                "@method\n   * @name API#delete_hint\n   * @param {object} parameters - method " +
                "options and parameters\n   * @param {string} parameters.hintId -\n   */\n\n\n " +
                " API.prototype.delete_hint = function (parameters) {\n    if (parameters === u" +
                "ndefined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"default" +
                "\"].defer();\n\n    var domain = this.domain,\n        path = \"/hints/{hint_i" +
                "d}\";\n    var body = {},\n        queryParameters = {},\n        headers = {}" +
                ",\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    " +
                "headers[\"Content-Type\"] = [\"application/json\"];\n    path = path.replace(" +
                "\"{hint_id}\", parameters[\"hintId\"]);\n\n    if (parameters[\"hintId\"] === " +
                "undefined) {\n      deferred.reject(new Error(\"Missing required  parameter: h" +
                "intId\"));\n      return deferred.promise;\n    }\n\n    queryParameters = mer" +
                "geQueryParams(parameters, queryParameters);\n    this.request(\"DELETE\", doma" +
                "in + path, parameters, body, headers, queryParameters, form, deferred);\n    r" +
                "eturn deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_h" +
                "int\n   * @param {object} parameters - method options and parameters\n   * @pa" +
                "ram {string} parameters.hintId -\n   */\n\n\n  API.prototype.get_hint = functi" +
                "on (parameters) {\n    if (parameters === undefined) {\n      parameters = {};" +
                "\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var domain = thi" +
                "s.domain,\n        path = \"/hints/{hint_id}\";\n    var body = {},\n        q" +
                "ueryParameters = {},\n        headers = {},\n        form = {};\n    headers[" +
                "\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Type\"] = [\"appl" +
                "ication/json\"];\n    path = path.replace(\"{hint_id}\", parameters[\"hintId\"" +
                "]);\n\n    if (parameters[\"hintId\"] === undefined) {\n      deferred.reject(" +
                "new Error(\"Missing required  parameter: hintId\"));\n      return deferred.pr" +
                "omise;\n    }\n\n    queryParameters = mergeQueryParams(parameters, queryParam" +
                "eters);\n    this.request(\"GET\", domain + path, parameters, body, headers, q" +
                "ueryParameters, form, deferred);\n    return deferred.promise;\n  };\n  /**\n " +
                "  *\n   * @method\n   * @name API#post_notification_list\n   * @param {object}" +
                " parameters - method options and parameters\n   */\n\n\n  API.prototype.post_n" +
                "otification_list = function (parameters) {\n    if (parameters === undefined) " +
                "{\n      parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer()" +
                ";\n\n    var domain = this.domain,\n        path = \"/notifications\";\n    va" +
                "r body = {},\n        queryParameters = {},\n        headers = {},\n        fo" +
                "rm = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Con" +
                "tent-Type\"] = [\"application/json\"];\n    queryParameters = mergeQueryParams" +
                "(parameters, queryParameters);\n    this.request(\"POST\", domain + path, para" +
                "meters, body, headers, queryParameters, form, deferred);\n    return deferred." +
                "promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_notification_lis" +
                "t\n   * @param {object} parameters - method options and parameters\n   */\n\n" +
                "\n  API.prototype.get_notification_list = function (parameters) {\n    if (par" +
                "ameters === undefined) {\n      parameters = {};\n    }\n\n    var deferred = " +
                "_q[\"default\"].defer();\n\n    var domain = this.domain,\n        path = \"/n" +
                "otifications\";\n    var body = {},\n        queryParameters = {},\n        he" +
                "aders = {},\n        form = {};\n    headers[\"Accept\"] = [\"application/json" +
                "\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n    queryParame" +
                "ters = mergeQueryParams(parameters, queryParameters);\n    this.request(\"GET" +
                "\", domain + path, parameters, body, headers, queryParameters, form, deferred)" +
                ";\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name A" +
                "PI#delete_notification\n   * @param {object} parameters - method options and p" +
                "arameters\n   * @param {string} parameters.notificationId - A Notification ID" +
                "\n   */\n\n\n  API.prototype.delete_notification = function (parameters) {\n  " +
                "  if (parameters === undefined) {\n      parameters = {};\n    }\n\n    var de" +
                "ferred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n        pa" +
                "th = \"/notifications/{notification_id}\";\n    var body = {},\n        queryP" +
                "arameters = {},\n        headers = {},\n        form = {};\n    headers[\"Acce" +
                "pt\"] = [\"application/json\"];\n    headers[\"Content-Type\"] = [\"applicatio" +
                "n/json\"];\n    path = path.replace(\"{notification_id}\", parameters[\"notifi" +
                "cationId\"]);\n\n    if (parameters[\"notificationId\"] === undefined) {\n    " +
                "  deferred.reject(new Error(\"Missing required  parameter: notificationId\"));" +
                "\n      return deferred.promise;\n    }\n\n    queryParameters = mergeQueryPar" +
                "ams(parameters, queryParameters);\n    this.request(\"DELETE\", domain + path," +
                " parameters, body, headers, queryParameters, form, deferred);\n    return defe" +
                "rred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_notificatio" +
                "n\n   * @param {object} parameters - method options and parameters\n   * @para" +
                "m {string} parameters.notificationId - A Notification ID\n   */\n\n\n  API.pro" +
                "totype.get_notification = function (parameters) {\n    if (parameters === unde" +
                "fined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"default\"]." +
                "defer();\n\n    var domain = this.domain,\n        path = \"/notifications/{no" +
                "tification_id}\";\n    var body = {},\n        queryParameters = {},\n        " +
                "headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"application/js" +
                "on\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n    path = pa" +
                "th.replace(\"{notification_id}\", parameters[\"notificationId\"]);\n\n    if (" +
                "parameters[\"notificationId\"] === undefined) {\n      deferred.reject(new Err" +
                "or(\"Missing required  parameter: notificationId\"));\n      return deferred.p" +
                "romise;\n    }\n\n    queryParameters = mergeQueryParams(parameters, queryPara" +
                "meters);\n    this.request(\"GET\", domain + path, parameters, body, headers, " +
                "queryParameters, form, deferred);\n    return deferred.promise;\n  };\n  /**\n" +
                "   *\n   * @method\n   * @name API#post_page_list\n   * @param {object} parame" +
                "ters - method options and parameters\n   */\n\n\n  API.prototype.post_page_lis" +
                "t = function (parameters) {\n    if (parameters === undefined) {\n      parame" +
                "ters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var do" +
                "main = this.domain,\n        path = \"/pages\";\n    var body = {},\n        q" +
                "ueryParameters = {},\n        headers = {},\n        form = {};\n    headers[" +
                "\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Type\"] = [\"appl" +
                "ication/json\"];\n    queryParameters = mergeQueryParams(parameters, queryPara" +
                "meters);\n    this.request(\"POST\", domain + path, parameters, body, headers," +
                " queryParameters, form, deferred);\n    return deferred.promise;\n  };\n  /**" +
                "\n   *\n   * @method\n   * @name API#get_page_list\n   * @param {object} param" +
                "eters - method options and parameters\n   */\n\n\n  API.prototype.get_page_lis" +
                "t = function (parameters) {\n    if (parameters === undefined) {\n      parame" +
                "ters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var do" +
                "main = this.domain,\n        path = \"/pages\";\n    var body = {},\n        q" +
                "ueryParameters = {},\n        headers = {},\n        form = {};\n    headers[" +
                "\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Type\"] = [\"appl" +
                "ication/json\"];\n    queryParameters = mergeQueryParams(parameters, queryPara" +
                "meters);\n    this.request(\"GET\", domain + path, parameters, body, headers, " +
                "queryParameters, form, deferred);\n    return deferred.promise;\n  };\n  /**\n" +
                "   *\n   * @method\n   * @name API#patch_page_detail\n   * @param {object} par" +
                "ameters - method options and parameters\n   * @param {string} parameters.pageI" +
                "d -\n   */\n\n\n  API.prototype.patch_page_detail = function (parameters) {\n " +
                "   if (parameters === undefined) {\n      parameters = {};\n    }\n\n    var d" +
                "eferred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n        p" +
                "ath = \"/pages/{page_id}\";\n    var body = {},\n        queryParameters = {}," +
                "\n        headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"appl" +
                "ication/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n   " +
                " path = path.replace(\"{page_id}\", parameters[\"pageId\"]);\n\n    if (parame" +
                "ters[\"pageId\"] === undefined) {\n      deferred.reject(new Error(\"Missing r" +
                "equired  parameter: pageId\"));\n      return deferred.promise;\n    }\n\n    " +
                "queryParameters = mergeQueryParams(parameters, queryParameters);\n    this.req" +
                "uest(\"PATCH\", domain + path, parameters, body, headers, queryParameters, for" +
                "m, deferred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n" +
                "   * @name API#delete_page_detail\n   * @param {object} parameters - method op" +
                "tions and parameters\n   * @param {string} parameters.pageId -\n   */\n\n\n  A" +
                "PI.prototype.delete_page_detail = function (parameters) {\n    if (parameters " +
                "=== undefined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"def" +
                "ault\"].defer();\n\n    var domain = this.domain,\n        path = \"/pages/{pa" +
                "ge_id}\";\n    var body = {},\n        queryParameters = {},\n        headers " +
                "= {},\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n" +
                "    headers[\"Content-Type\"] = [\"application/json\"];\n    path = path.repla" +
                "ce(\"{page_id}\", parameters[\"pageId\"]);\n\n    if (parameters[\"pageId\"] =" +
                "== undefined) {\n      deferred.reject(new Error(\"Missing required  parameter" +
                ": pageId\"));\n      return deferred.promise;\n    }\n\n    queryParameters = " +
                "mergeQueryParams(parameters, queryParameters);\n    this.request(\"DELETE\", d" +
                "omain + path, parameters, body, headers, queryParameters, form, deferred);\n  " +
                "  return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#ge" +
                "t_page_detail\n   * @param {object} parameters - method options and parameters" +
                "\n   * @param {string} parameters.pageId -\n   */\n\n\n  API.prototype.get_pag" +
                "e_detail = function (parameters) {\n    if (parameters === undefined) {\n     " +
                " parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n   " +
                " var domain = this.domain,\n        path = \"/pages/{page_id}\";\n    var body" +
                " = {},\n        queryParameters = {},\n        headers = {},\n        form = {" +
                "};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-T" +
                "ype\"] = [\"application/json\"];\n    path = path.replace(\"{page_id}\", param" +
                "eters[\"pageId\"]);\n\n    if (parameters[\"pageId\"] === undefined) {\n      " +
                "deferred.reject(new Error(\"Missing required  parameter: pageId\"));\n      re" +
                "turn deferred.promise;\n    }\n\n    queryParameters = mergeQueryParams(parame" +
                "ters, queryParameters);\n    this.request(\"GET\", domain + path, parameters, " +
                "body, headers, queryParameters, form, deferred);\n    return deferred.promise;" +
                "\n  };\n  /**\n   *\n   * @method\n   * @name API#get_scoreboard_list\n   * @p" +
                "aram {object} parameters - method options and parameters\n   */\n\n\n  API.pro" +
                "totype.get_scoreboard_list = function (parameters) {\n    if (parameters === u" +
                "ndefined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"default" +
                "\"].defer();\n\n    var domain = this.domain,\n        path = \"/scoreboard\";" +
                "\n    var body = {},\n        queryParameters = {},\n        headers = {},\n  " +
                "      form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    heade" +
                "rs[\"Content-Type\"] = [\"application/json\"];\n    queryParameters = mergeQue" +
                "ryParams(parameters, queryParameters);\n    this.request(\"GET\", domain + pat" +
                "h, parameters, body, headers, queryParameters, form, deferred);\n    return de" +
                "ferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_scoreboar" +
                "d_detail\n   * @param {object} parameters - method options and parameters\n   " +
                "* @param {string} parameters.count - How many top teams to return\n   */\n\n\n" +
                "  API.prototype.get_scoreboard_detail = function (parameters) {\n    if (param" +
                "eters === undefined) {\n      parameters = {};\n    }\n\n    var deferred = _q" +
                "[\"default\"].defer();\n\n    var domain = this.domain,\n        path = \"/sco" +
                "reboard/top/{count}\";\n    var body = {},\n        queryParameters = {},\n   " +
                "     headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"applicati" +
                "on/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n    path" +
                " = path.replace(\"{count}\", parameters[\"count\"]);\n\n    if (parameters[\"c" +
                "ount\"] === undefined) {\n      deferred.reject(new Error(\"Missing required  " +
                "parameter: count\"));\n      return deferred.promise;\n    }\n\n    queryParam" +
                "eters = mergeQueryParams(parameters, queryParameters);\n    this.request(\"GET" +
                "\", domain + path, parameters, body, headers, queryParameters, form, deferred)" +
                ";\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name A" +
                "PI#get_challenge_solve_statistics\n   * @param {object} parameters - method op" +
                "tions and parameters\n   */\n\n\n  API.prototype.get_challenge_solve_statistic" +
                "s = function (parameters) {\n    if (parameters === undefined) {\n      parame" +
                "ters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var do" +
                "main = this.domain,\n        path = \"/statistics/challenges/solves\";\n    va" +
                "r body = {},\n        queryParameters = {},\n        headers = {},\n        fo" +
                "rm = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Con" +
                "tent-Type\"] = [\"application/json\"];\n    queryParameters = mergeQueryParams" +
                "(parameters, queryParameters);\n    this.request(\"GET\", domain + path, param" +
                "eters, body, headers, queryParameters, form, deferred);\n    return deferred.p" +
                "romise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_challenge_solve_p" +
                "ercentages\n   * @param {object} parameters - method options and parameters\n " +
                "  */\n\n\n  API.prototype.get_challenge_solve_percentages = function (paramete" +
                "rs) {\n    if (parameters === undefined) {\n      parameters = {};\n    }\n\n " +
                "   var deferred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n " +
                "       path = \"/statistics/challenges/solves/percentages\";\n    var body = {" +
                "},\n        queryParameters = {},\n        headers = {},\n        form = {};\n" +
                "    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Type" +
                "\"] = [\"application/json\"];\n    queryParameters = mergeQueryParams(paramete" +
                "rs, queryParameters);\n    this.request(\"GET\", domain + path, parameters, bo" +
                "dy, headers, queryParameters, form, deferred);\n    return deferred.promise;\n" +
                "  };\n  /**\n   *\n   * @method\n   * @name API#get_challenge_property_counts" +
                "\n   * @param {object} parameters - method options and parameters\n   * @param" +
                " {string} parameters.column -\n   */\n\n\n  API.prototype.get_challenge_proper" +
                "ty_counts = function (parameters) {\n    if (parameters === undefined) {\n    " +
                "  parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n  " +
                "  var domain = this.domain,\n        path = \"/statistics/challenges/{column}" +
                "\";\n    var body = {},\n        queryParameters = {},\n        headers = {}," +
                "\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    h" +
                "eaders[\"Content-Type\"] = [\"application/json\"];\n    path = path.replace(\"" +
                "{column}\", parameters[\"column\"]);\n\n    if (parameters[\"column\"] === und" +
                "efined) {\n      deferred.reject(new Error(\"Missing required  parameter: colu" +
                "mn\"));\n      return deferred.promise;\n    }\n\n    queryParameters = mergeQ" +
                "ueryParams(parameters, queryParameters);\n    this.request(\"GET\", domain + p" +
                "ath, parameters, body, headers, queryParameters, form, deferred);\n    return " +
                "deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_submiss" +
                "ion_property_counts\n   * @param {object} parameters - method options and para" +
                "meters\n   * @param {string} parameters.column -\n   */\n\n\n  API.prototype.g" +
                "et_submission_property_counts = function (parameters) {\n    if (parameters ==" +
                "= undefined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"defau" +
                "lt\"].defer();\n\n    var domain = this.domain,\n        path = \"/statistics/" +
                "submissions/{column}\";\n    var body = {},\n        queryParameters = {},\n  " +
                "      headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"applicat" +
                "ion/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n    pat" +
                "h = path.replace(\"{column}\", parameters[\"column\"]);\n\n    if (parameters[" +
                "\"column\"] === undefined) {\n      deferred.reject(new Error(\"Missing requir" +
                "ed  parameter: column\"));\n      return deferred.promise;\n    }\n\n    query" +
                "Parameters = mergeQueryParams(parameters, queryParameters);\n    this.request(" +
                "\"GET\", domain + path, parameters, body, headers, queryParameters, form, defe" +
                "rred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @n" +
                "ame API#get_team_statistics\n   * @param {object} parameters - method options " +
                "and parameters\n   */\n\n\n  API.prototype.get_team_statistics = function (par" +
                "ameters) {\n    if (parameters === undefined) {\n      parameters = {};\n    }" +
                "\n\n    var deferred = _q[\"default\"].defer();\n\n    var domain = this.domai" +
                "n,\n        path = \"/statistics/teams\";\n    var body = {},\n        queryPa" +
                "rameters = {},\n        headers = {},\n        form = {};\n    headers[\"Accep" +
                "t\"] = [\"application/json\"];\n    headers[\"Content-Type\"] = [\"application" +
                "/json\"];\n    queryParameters = mergeQueryParams(parameters, queryParameters)" +
                ";\n    this.request(\"GET\", domain + path, parameters, body, headers, queryPa" +
                "rameters, form, deferred);\n    return deferred.promise;\n  };\n  /**\n   *\n " +
                "  * @method\n   * @name API#get_user_statistics\n   * @param {object} paramete" +
                "rs - method options and parameters\n   */\n\n\n  API.prototype.get_user_statis" +
                "tics = function (parameters) {\n    if (parameters === undefined) {\n      par" +
                "ameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var" +
                " domain = this.domain,\n        path = \"/statistics/users\";\n    var body = " +
                "{},\n        queryParameters = {},\n        headers = {},\n        form = {};" +
                "\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Typ" +
                "e\"] = [\"application/json\"];\n    queryParameters = mergeQueryParams(paramet" +
                "ers, queryParameters);\n    this.request(\"GET\", domain + path, parameters, b" +
                "ody, headers, queryParameters, form, deferred);\n    return deferred.promise;" +
                "\n  };\n  /**\n   *\n   * @method\n   * @name API#get_user_property_counts\n  " +
                " * @param {object} parameters - method options and parameters\n   * @param {st" +
                "ring} parameters.column -\n   */\n\n\n  API.prototype.get_user_property_counts" +
                " = function (parameters) {\n    if (parameters === undefined) {\n      paramet" +
                "ers = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var dom" +
                "ain = this.domain,\n        path = \"/statistics/users/{column}\";\n    var bo" +
                "dy = {},\n        queryParameters = {},\n        headers = {},\n        form =" +
                " {};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content" +
                "-Type\"] = [\"application/json\"];\n    path = path.replace(\"{column}\", para" +
                "meters[\"column\"]);\n\n    if (parameters[\"column\"] === undefined) {\n     " +
                " deferred.reject(new Error(\"Missing required  parameter: column\"));\n      r" +
                "eturn deferred.promise;\n    }\n\n    queryParameters = mergeQueryParams(param" +
                "eters, queryParameters);\n    this.request(\"GET\", domain + path, parameters," +
                " body, headers, queryParameters, form, deferred);\n    return deferred.promise" +
                ";\n  };\n  /**\n   *\n   * @method\n   * @name API#post_submissions_list\n   *" +
                " @param {object} parameters - method options and parameters\n   */\n\n\n  API." +
                "prototype.post_submissions_list = function (parameters) {\n    if (parameters " +
                "=== undefined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"def" +
                "ault\"].defer();\n\n    var domain = this.domain,\n        path = \"/submissio" +
                "ns\";\n    var body = {},\n        queryParameters = {},\n        headers = {}" +
                ",\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    " +
                "headers[\"Content-Type\"] = [\"application/json\"];\n    queryParameters = mer" +
                "geQueryParams(parameters, queryParameters);\n    this.request(\"POST\", domain" +
                " + path, parameters, body, headers, queryParameters, form, deferred);\n    ret" +
                "urn deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_sub" +
                "missions_list\n   * @param {object} parameters - method options and parameters" +
                "\n   */\n\n\n  API.prototype.get_submissions_list = function (parameters) {\n " +
                "   if (parameters === undefined) {\n      parameters = {};\n    }\n\n    var d" +
                "eferred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n        p" +
                "ath = \"/submissions\";\n    var body = {},\n        queryParameters = {},\n  " +
                "      headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"applicat" +
                "ion/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n    que" +
                "ryParameters = mergeQueryParams(parameters, queryParameters);\n    this.reques" +
                "t(\"GET\", domain + path, parameters, body, headers, queryParameters, form, de" +
                "ferred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * " +
                "@name API#delete_submission\n   * @param {object} parameters - method options " +
                "and parameters\n   * @param {string} parameters.submissionId - A Submission ID" +
                "\n   */\n\n\n  API.prototype.delete_submission = function (parameters) {\n    " +
                "if (parameters === undefined) {\n      parameters = {};\n    }\n\n    var defe" +
                "rred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n        path" +
                " = \"/submissions/{submission_id}\";\n    var body = {},\n        queryParamet" +
                "ers = {},\n        headers = {},\n        form = {};\n    headers[\"Accept\"] " +
                "= [\"application/json\"];\n    headers[\"Content-Type\"] = [\"application/json" +
                "\"];\n    path = path.replace(\"{submission_id}\", parameters[\"submissionId\"" +
                "]);\n\n    if (parameters[\"submissionId\"] === undefined) {\n      deferred.r" +
                "eject(new Error(\"Missing required  parameter: submissionId\"));\n      return" +
                " deferred.promise;\n    }\n\n    queryParameters = mergeQueryParams(parameters" +
                ", queryParameters);\n    this.request(\"DELETE\", domain + path, parameters, b" +
                "ody, headers, queryParameters, form, deferred);\n    return deferred.promise;" +
                "\n  };\n  /**\n   *\n   * @method\n   * @name API#get_submission\n   * @param " +
                "{object} parameters - method options and parameters\n   * @param {string} para" +
                "meters.submissionId - A Submission ID\n   */\n\n\n  API.prototype.get_submissi" +
                "on = function (parameters) {\n    if (parameters === undefined) {\n      param" +
                "eters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var d" +
                "omain = this.domain,\n        path = \"/submissions/{submission_id}\";\n    va" +
                "r body = {},\n        queryParameters = {},\n        headers = {},\n        fo" +
                "rm = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Con" +
                "tent-Type\"] = [\"application/json\"];\n    path = path.replace(\"{submission_" +
                "id}\", parameters[\"submissionId\"]);\n\n    if (parameters[\"submissionId\"] " +
                "=== undefined) {\n      deferred.reject(new Error(\"Missing required  paramete" +
                "r: submissionId\"));\n      return deferred.promise;\n    }\n\n    queryParame" +
                "ters = mergeQueryParams(parameters, queryParameters);\n    this.request(\"GET" +
                "\", domain + path, parameters, body, headers, queryParameters, form, deferred)" +
                ";\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name A" +
                "PI#post_tag_list\n   * @param {object} parameters - method options and paramet" +
                "ers\n   */\n\n\n  API.prototype.post_tag_list = function (parameters) {\n    i" +
                "f (parameters === undefined) {\n      parameters = {};\n    }\n\n    var defer" +
                "red = _q[\"default\"].defer();\n\n    var domain = this.domain,\n        path " +
                "= \"/tags\";\n    var body = {},\n        queryParameters = {},\n        heade" +
                "rs = {},\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"]" +
                ";\n    headers[\"Content-Type\"] = [\"application/json\"];\n    queryParameter" +
                "s = mergeQueryParams(parameters, queryParameters);\n    this.request(\"POST\"," +
                " domain + path, parameters, body, headers, queryParameters, form, deferred);\n" +
                "    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#" +
                "get_tag_list\n   * @param {object} parameters - method options and parameters" +
                "\n   */\n\n\n  API.prototype.get_tag_list = function (parameters) {\n    if (p" +
                "arameters === undefined) {\n      parameters = {};\n    }\n\n    var deferred " +
                "= _q[\"default\"].defer();\n\n    var domain = this.domain,\n        path = \"" +
                "/tags\";\n    var body = {},\n        queryParameters = {},\n        headers =" +
                " {},\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n " +
                "   headers[\"Content-Type\"] = [\"application/json\"];\n    queryParameters = " +
                "mergeQueryParams(parameters, queryParameters);\n    this.request(\"GET\", doma" +
                "in + path, parameters, body, headers, queryParameters, form, deferred);\n    r" +
                "eturn deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#patch" +
                "_tag\n   * @param {object} parameters - method options and parameters\n   * @p" +
                "aram {string} parameters.tagId - A Tag ID\n   */\n\n\n  API.prototype.patch_ta" +
                "g = function (parameters) {\n    if (parameters === undefined) {\n      parame" +
                "ters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var do" +
                "main = this.domain,\n        path = \"/tags/{tag_id}\";\n    var body = {},\n " +
                "       queryParameters = {},\n        headers = {},\n        form = {};\n    h" +
                "eaders[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Type\"] = " +
                "[\"application/json\"];\n    path = path.replace(\"{tag_id}\", parameters[\"ta" +
                "gId\"]);\n\n    if (parameters[\"tagId\"] === undefined) {\n      deferred.rej" +
                "ect(new Error(\"Missing required  parameter: tagId\"));\n      return deferred" +
                ".promise;\n    }\n\n    queryParameters = mergeQueryParams(parameters, queryPa" +
                "rameters);\n    this.request(\"PATCH\", domain + path, parameters, body, heade" +
                "rs, queryParameters, form, deferred);\n    return deferred.promise;\n  };\n  /" +
                "**\n   *\n   * @method\n   * @name API#delete_tag\n   * @param {object} parame" +
                "ters - method options and parameters\n   * @param {string} parameters.tagId - " +
                "A Tag ID\n   */\n\n\n  API.prototype.delete_tag = function (parameters) {\n   " +
                " if (parameters === undefined) {\n      parameters = {};\n    }\n\n    var def" +
                "erred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n        pat" +
                "h = \"/tags/{tag_id}\";\n    var body = {},\n        queryParameters = {},\n  " +
                "      headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"applicat" +
                "ion/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n    pat" +
                "h = path.replace(\"{tag_id}\", parameters[\"tagId\"]);\n\n    if (parameters[" +
                "\"tagId\"] === undefined) {\n      deferred.reject(new Error(\"Missing require" +
                "d  parameter: tagId\"));\n      return deferred.promise;\n    }\n\n    queryPa" +
                "rameters = mergeQueryParams(parameters, queryParameters);\n    this.request(\"" +
                "DELETE\", domain + path, parameters, body, headers, queryParameters, form, def" +
                "erred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @" +
                "name API#get_tag\n   * @param {object} parameters - method options and paramet" +
                "ers\n   * @param {string} parameters.tagId - A Tag ID\n   */\n\n\n  API.protot" +
                "ype.get_tag = function (parameters) {\n    if (parameters === undefined) {\n  " +
                "    parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n" +
                "    var domain = this.domain,\n        path = \"/tags/{tag_id}\";\n    var bod" +
                "y = {},\n        queryParameters = {},\n        headers = {},\n        form = " +
                "{};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-" +
                "Type\"] = [\"application/json\"];\n    path = path.replace(\"{tag_id}\", param" +
                "eters[\"tagId\"]);\n\n    if (parameters[\"tagId\"] === undefined) {\n      de" +
                "ferred.reject(new Error(\"Missing required  parameter: tagId\"));\n      retur" +
                "n deferred.promise;\n    }\n\n    queryParameters = mergeQueryParams(parameter" +
                "s, queryParameters);\n    this.request(\"GET\", domain + path, parameters, bod" +
                "y, headers, queryParameters, form, deferred);\n    return deferred.promise;\n " +
                " };\n  /**\n   *\n   * @method\n   * @name API#post_team_list\n   * @param {ob" +
                "ject} parameters - method options and parameters\n   */\n\n\n  API.prototype.p" +
                "ost_team_list = function (parameters) {\n    if (parameters === undefined) {\n" +
                "      parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n" +
                "\n    var domain = this.domain,\n        path = \"/teams\";\n    var body = {}" +
                ",\n        queryParameters = {},\n        headers = {},\n        form = {};\n " +
                "   headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Type\"" +
                "] = [\"application/json\"];\n    queryParameters = mergeQueryParams(parameters" +
                ", queryParameters);\n    this.request(\"POST\", domain + path, parameters, bod" +
                "y, headers, queryParameters, form, deferred);\n    return deferred.promise;\n " +
                " };\n  /**\n   *\n   * @method\n   * @name API#get_team_list\n   * @param {obj" +
                "ect} parameters - method options and parameters\n   */\n\n\n  API.prototype.ge" +
                "t_team_list = function (parameters) {\n    if (parameters === undefined) {\n  " +
                "    parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n" +
                "    var domain = this.domain,\n        path = \"/teams\";\n    var body = {}," +
                "\n        queryParameters = {},\n        headers = {},\n        form = {};\n  " +
                "  headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Type\"]" +
                " = [\"application/json\"];\n    queryParameters = mergeQueryParams(parameters," +
                " queryParameters);\n    this.request(\"GET\", domain + path, parameters, body," +
                " headers, queryParameters, form, deferred);\n    return deferred.promise;\n  }" +
                ";\n  /**\n   *\n   * @method\n   * @name API#patch_team_private\n   * @param {" +
                "object} parameters - method options and parameters\n   * @param {string} param" +
                "eters.teamId - Current Team\n   */\n\n\n  API.prototype.patch_team_private = f" +
                "unction (parameters) {\n    if (parameters === undefined) {\n      parameters " +
                "= {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var domain " +
                "= this.domain,\n        path = \"/teams/me\";\n    var body = {},\n        que" +
                "ryParameters = {},\n        headers = {},\n        form = {};\n    headers[\"A" +
                "ccept\"] = [\"application/json\"];\n    headers[\"Content-Type\"] = [\"applica" +
                "tion/json\"];\n\n    if (parameters[\"teamId\"] !== undefined) {\n      queryP" +
                "arameters[\"team_id\"] = parameters[\"teamId\"];\n    }\n\n    queryParameters" +
                " = mergeQueryParams(parameters, queryParameters);\n    this.request(\"PATCH\"," +
                " domain + path, parameters, body, headers, queryParameters, form, deferred);\n" +
                "    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#" +
                "get_team_private\n   * @param {object} parameters - method options and paramet" +
                "ers\n   * @param {string} parameters.teamId - Current Team\n   */\n\n\n  API.p" +
                "rototype.get_team_private = function (parameters) {\n    if (parameters === un" +
                "defined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"default\"" +
                "].defer();\n\n    var domain = this.domain,\n        path = \"/teams/me\";\n  " +
                "  var body = {},\n        queryParameters = {},\n        headers = {},\n      " +
                "  form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[" +
                "\"Content-Type\"] = [\"application/json\"];\n\n    if (parameters[\"teamId\"] " +
                "!== undefined) {\n      queryParameters[\"team_id\"] = parameters[\"teamId\"];" +
                "\n    }\n\n    queryParameters = mergeQueryParams(parameters, queryParameters)" +
                ";\n    this.request(\"GET\", domain + path, parameters, body, headers, queryPa" +
                "rameters, form, deferred);\n    return deferred.promise;\n  };\n  /**\n   *\n " +
                "  * @method\n   * @name API#patch_team_public\n   * @param {object} parameters" +
                " - method options and parameters\n   * @param {string} parameters.teamId - Tea" +
                "m ID\n   */\n\n\n  API.prototype.patch_team_public = function (parameters) {\n" +
                "    if (parameters === undefined) {\n      parameters = {};\n    }\n\n    var " +
                "deferred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n        " +
                "path = \"/teams/{team_id}\";\n    var body = {},\n        queryParameters = {}" +
                ",\n        headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"app" +
                "lication/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n  " +
                "  path = path.replace(\"{team_id}\", parameters[\"teamId\"]);\n\n    if (param" +
                "eters[\"teamId\"] === undefined) {\n      deferred.reject(new Error(\"Missing " +
                "required  parameter: teamId\"));\n      return deferred.promise;\n    }\n\n   " +
                " queryParameters = mergeQueryParams(parameters, queryParameters);\n    this.re" +
                "quest(\"PATCH\", domain + path, parameters, body, headers, queryParameters, fo" +
                "rm, deferred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method" +
                "\n   * @name API#delete_team_public\n   * @param {object} parameters - method " +
                "options and parameters\n   * @param {string} parameters.teamId - Team ID\n   *" +
                "/\n\n\n  API.prototype.delete_team_public = function (parameters) {\n    if (p" +
                "arameters === undefined) {\n      parameters = {};\n    }\n\n    var deferred " +
                "= _q[\"default\"].defer();\n\n    var domain = this.domain,\n        path = \"" +
                "/teams/{team_id}\";\n    var body = {},\n        queryParameters = {},\n      " +
                "  headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"application/" +
                "json\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n    path = " +
                "path.replace(\"{team_id}\", parameters[\"teamId\"]);\n\n    if (parameters[\"t" +
                "eamId\"] === undefined) {\n      deferred.reject(new Error(\"Missing required " +
                " parameter: teamId\"));\n      return deferred.promise;\n    }\n\n    queryPar" +
                "ameters = mergeQueryParams(parameters, queryParameters);\n    this.request(\"D" +
                "ELETE\", domain + path, parameters, body, headers, queryParameters, form, defe" +
                "rred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @n" +
                "ame API#get_team_public\n   * @param {object} parameters - method options and " +
                "parameters\n   * @param {string} parameters.teamId - Team ID\n   */\n\n\n  API" +
                ".prototype.get_team_public = function (parameters) {\n    if (parameters === u" +
                "ndefined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"default" +
                "\"].defer();\n\n    var domain = this.domain,\n        path = \"/teams/{team_i" +
                "d}\";\n    var body = {},\n        queryParameters = {},\n        headers = {}" +
                ",\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    " +
                "headers[\"Content-Type\"] = [\"application/json\"];\n    path = path.replace(" +
                "\"{team_id}\", parameters[\"teamId\"]);\n\n    if (parameters[\"teamId\"] === " +
                "undefined) {\n      deferred.reject(new Error(\"Missing required  parameter: t" +
                "eamId\"));\n      return deferred.promise;\n    }\n\n    queryParameters = mer" +
                "geQueryParams(parameters, queryParameters);\n    this.request(\"GET\", domain " +
                "+ path, parameters, body, headers, queryParameters, form, deferred);\n    retu" +
                "rn deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_team" +
                "_awards\n   * @param {object} parameters - method options and parameters\n   *" +
                " @param {string} parameters.teamId - Team ID or 'me'\n   */\n\n\n  API.prototy" +
                "pe.get_team_awards = function (parameters) {\n    if (parameters === undefined" +
                ") {\n      parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer" +
                "();\n\n    var domain = this.domain,\n        path = \"/teams/{team_id}/awards" +
                "\";\n    var body = {},\n        queryParameters = {},\n        headers = {}," +
                "\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    h" +
                "eaders[\"Content-Type\"] = [\"application/json\"];\n    path = path.replace(\"" +
                "{team_id}\", parameters[\"teamId\"]);\n\n    if (parameters[\"teamId\"] === un" +
                "defined) {\n      deferred.reject(new Error(\"Missing required  parameter: tea" +
                "mId\"));\n      return deferred.promise;\n    }\n\n    queryParameters = merge" +
                "QueryParams(parameters, queryParameters);\n    this.request(\"GET\", domain + " +
                "path, parameters, body, headers, queryParameters, form, deferred);\n    return" +
                " deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_team_f" +
                "ails\n   * @param {object} parameters - method options and parameters\n   * @p" +
                "aram {string} parameters.teamId - Team ID or 'me'\n   */\n\n\n  API.prototype." +
                "get_team_fails = function (parameters) {\n    if (parameters === undefined) {" +
                "\n      parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();" +
                "\n\n    var domain = this.domain,\n        path = \"/teams/{team_id}/fails\";" +
                "\n    var body = {},\n        queryParameters = {},\n        headers = {},\n  " +
                "      form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    heade" +
                "rs[\"Content-Type\"] = [\"application/json\"];\n    path = path.replace(\"{tea" +
                "m_id}\", parameters[\"teamId\"]);\n\n    if (parameters[\"teamId\"] === undefi" +
                "ned) {\n      deferred.reject(new Error(\"Missing required  parameter: teamId" +
                "\"));\n      return deferred.promise;\n    }\n\n    queryParameters = mergeQue" +
                "ryParams(parameters, queryParameters);\n    this.request(\"GET\", domain + pat" +
                "h, parameters, body, headers, queryParameters, form, deferred);\n    return de" +
                "ferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_team_solv" +
                "es\n   * @param {object} parameters - method options and parameters\n   * @par" +
                "am {string} parameters.teamId - Team ID or 'me'\n   */\n\n\n  API.prototype.ge" +
                "t_team_solves = function (parameters) {\n    if (parameters === undefined) {\n" +
                "      parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n" +
                "\n    var domain = this.domain,\n        path = \"/teams/{team_id}/solves\";\n" +
                "    var body = {},\n        queryParameters = {},\n        headers = {},\n    " +
                "    form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers" +
                "[\"Content-Type\"] = [\"application/json\"];\n    path = path.replace(\"{team_" +
                "id}\", parameters[\"teamId\"]);\n\n    if (parameters[\"teamId\"] === undefine" +
                "d) {\n      deferred.reject(new Error(\"Missing required  parameter: teamId\")" +
                ");\n      return deferred.promise;\n    }\n\n    queryParameters = mergeQueryP" +
                "arams(parameters, queryParameters);\n    this.request(\"GET\", domain + path, " +
                "parameters, body, headers, queryParameters, form, deferred);\n    return defer" +
                "red.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#post_unlock_list" +
                "\n   * @param {object} parameters - method options and parameters\n   */\n\n\n" +
                "  API.prototype.post_unlock_list = function (parameters) {\n    if (parameters" +
                " === undefined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"de" +
                "fault\"].defer();\n\n    var domain = this.domain,\n        path = \"/unlocks" +
                "\";\n    var body = {},\n        queryParameters = {},\n        headers = {}," +
                "\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    h" +
                "eaders[\"Content-Type\"] = [\"application/json\"];\n    queryParameters = merg" +
                "eQueryParams(parameters, queryParameters);\n    this.request(\"POST\", domain " +
                "+ path, parameters, body, headers, queryParameters, form, deferred);\n    retu" +
                "rn deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_unlo" +
                "ck_list\n   * @param {object} parameters - method options and parameters\n   *" +
                "/\n\n\n  API.prototype.get_unlock_list = function (parameters) {\n    if (para" +
                "meters === undefined) {\n      parameters = {};\n    }\n\n    var deferred = _" +
                "q[\"default\"].defer();\n\n    var domain = this.domain,\n        path = \"/un" +
                "locks\";\n    var body = {},\n        queryParameters = {},\n        headers =" +
                " {},\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n " +
                "   headers[\"Content-Type\"] = [\"application/json\"];\n    queryParameters = " +
                "mergeQueryParams(parameters, queryParameters);\n    this.request(\"GET\", doma" +
                "in + path, parameters, body, headers, queryParameters, form, deferred);\n    r" +
                "eturn deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#post_" +
                "user_list\n   * @param {object} parameters - method options and parameters\n  " +
                " */\n\n\n  API.prototype.post_user_list = function (parameters) {\n    if (par" +
                "ameters === undefined) {\n      parameters = {};\n    }\n\n    var deferred = " +
                "_q[\"default\"].defer();\n\n    var domain = this.domain,\n        path = \"/u" +
                "sers\";\n    var body = {},\n        queryParameters = {},\n        headers = " +
                "{},\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n  " +
                "  headers[\"Content-Type\"] = [\"application/json\"];\n    queryParameters = m" +
                "ergeQueryParams(parameters, queryParameters);\n    this.request(\"POST\", doma" +
                "in + path, parameters, body, headers, queryParameters, form, deferred);\n    r" +
                "eturn deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_u" +
                "ser_list\n   * @param {object} parameters - method options and parameters\n   " +
                "*/\n\n\n  API.prototype.get_user_list = function (parameters) {\n    if (param" +
                "eters === undefined) {\n      parameters = {};\n    }\n\n    var deferred = _q" +
                "[\"default\"].defer();\n\n    var domain = this.domain,\n        path = \"/use" +
                "rs\";\n    var body = {},\n        queryParameters = {},\n        headers = {}" +
                ",\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    " +
                "headers[\"Content-Type\"] = [\"application/json\"];\n    queryParameters = mer" +
                "geQueryParams(parameters, queryParameters);\n    this.request(\"GET\", domain " +
                "+ path, parameters, body, headers, queryParameters, form, deferred);\n    retu" +
                "rn deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#patch_us" +
                "er_private\n   * @param {object} parameters - method options and parameters\n " +
                "  */\n\n\n  API.prototype.patch_user_private = function (parameters) {\n    if" +
                " (parameters === undefined) {\n      parameters = {};\n    }\n\n    var deferr" +
                "ed = _q[\"default\"].defer();\n\n    var domain = this.domain,\n        path =" +
                " \"/users/me\";\n    var body = {},\n        queryParameters = {},\n        he" +
                "aders = {},\n        form = {};\n    headers[\"Accept\"] = [\"application/json" +
                "\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n    queryParame" +
                "ters = mergeQueryParams(parameters, queryParameters);\n    this.request(\"PATC" +
                "H\", domain + path, parameters, body, headers, queryParameters, form, deferred" +
                ");\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name " +
                "API#get_user_private\n   * @param {object} parameters - method options and par" +
                "ameters\n   */\n\n\n  API.prototype.get_user_private = function (parameters) {" +
                "\n    if (parameters === undefined) {\n      parameters = {};\n    }\n\n    va" +
                "r deferred = _q[\"default\"].defer();\n\n    var domain = this.domain,\n      " +
                "  path = \"/users/me\";\n    var body = {},\n        queryParameters = {},\n  " +
                "      headers = {},\n        form = {};\n    headers[\"Accept\"] = [\"applicat" +
                "ion/json\"];\n    headers[\"Content-Type\"] = [\"application/json\"];\n    que" +
                "ryParameters = mergeQueryParams(parameters, queryParameters);\n    this.reques" +
                "t(\"GET\", domain + path, parameters, body, headers, queryParameters, form, de" +
                "ferred);\n    return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * " +
                "@name API#patch_user_public\n   * @param {object} parameters - method options " +
                "and parameters\n   * @param {integer} parameters.userId - User ID\n   */\n\n\n" +
                "  API.prototype.patch_user_public = function (parameters) {\n    if (parameter" +
                "s === undefined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"d" +
                "efault\"].defer();\n\n    var domain = this.domain,\n        path = \"/users/{" +
                "user_id}\";\n    var body = {},\n        queryParameters = {},\n        header" +
                "s = {},\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];" +
                "\n    headers[\"Content-Type\"] = [\"application/json\"];\n    path = path.rep" +
                "lace(\"{user_id}\", parameters[\"userId\"]);\n\n    if (parameters[\"userId\"]" +
                " === undefined) {\n      deferred.reject(new Error(\"Missing required  paramet" +
                "er: userId\"));\n      return deferred.promise;\n    }\n\n    queryParameters " +
                "= mergeQueryParams(parameters, queryParameters);\n    this.request(\"PATCH\", " +
                "domain + path, parameters, body, headers, queryParameters, form, deferred);\n " +
                "   return deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#d" +
                "elete_user_public\n   * @param {object} parameters - method options and parame" +
                "ters\n   * @param {integer} parameters.userId - User ID\n   */\n\n\n  API.prot" +
                "otype.delete_user_public = function (parameters) {\n    if (parameters === und" +
                "efined) {\n      parameters = {};\n    }\n\n    var deferred = _q[\"default\"]" +
                ".defer();\n\n    var domain = this.domain,\n        path = \"/users/{user_id}" +
                "\";\n    var body = {},\n        queryParameters = {},\n        headers = {}," +
                "\n        form = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    h" +
                "eaders[\"Content-Type\"] = [\"application/json\"];\n    path = path.replace(\"" +
                "{user_id}\", parameters[\"userId\"]);\n\n    if (parameters[\"userId\"] === un" +
                "defined) {\n      deferred.reject(new Error(\"Missing required  parameter: use" +
                "rId\"));\n      return deferred.promise;\n    }\n\n    queryParameters = merge" +
                "QueryParams(parameters, queryParameters);\n    this.request(\"DELETE\", domain" +
                " + path, parameters, body, headers, queryParameters, form, deferred);\n    ret" +
                "urn deferred.promise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_use" +
                "r_public\n   * @param {object} parameters - method options and parameters\n   " +
                "* @param {integer} parameters.userId - User ID\n   */\n\n\n  API.prototype.get" +
                "_user_public = function (parameters) {\n    if (parameters === undefined) {\n " +
                "     parameters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n" +
                "\n    var domain = this.domain,\n        path = \"/users/{user_id}\";\n    var" +
                " body = {},\n        queryParameters = {},\n        headers = {},\n        for" +
                "m = {};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Cont" +
                "ent-Type\"] = [\"application/json\"];\n    path = path.replace(\"{user_id}\", " +
                "parameters[\"userId\"]);\n\n    if (parameters[\"userId\"] === undefined) {\n " +
                "     deferred.reject(new Error(\"Missing required  parameter: userId\"));\n   " +
                "   return deferred.promise;\n    }\n\n    queryParameters = mergeQueryParams(p" +
                "arameters, queryParameters);\n    this.request(\"GET\", domain + path, paramet" +
                "ers, body, headers, queryParameters, form, deferred);\n    return deferred.pro" +
                "mise;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_user_awards\n   * @" +
                "param {object} parameters - method options and parameters\n   * @param {string" +
                "} parameters.userId - User ID or 'me'\n   */\n\n\n  API.prototype.get_user_awa" +
                "rds = function (parameters) {\n    if (parameters === undefined) {\n      para" +
                "meters = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var " +
                "domain = this.domain,\n        path = \"/users/{user_id}/awards\";\n    var bo" +
                "dy = {},\n        queryParameters = {},\n        headers = {},\n        form =" +
                " {};\n    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content" +
                "-Type\"] = [\"application/json\"];\n    path = path.replace(\"{user_id}\", par" +
                "ameters[\"userId\"]);\n\n    if (parameters[\"userId\"] === undefined) {\n    " +
                "  deferred.reject(new Error(\"Missing required  parameter: userId\"));\n      " +
                "return deferred.promise;\n    }\n\n    queryParameters = mergeQueryParams(para" +
                "meters, queryParameters);\n    this.request(\"GET\", domain + path, parameters" +
                ", body, headers, queryParameters, form, deferred);\n    return deferred.promis" +
                "e;\n  };\n  /**\n   *\n   * @method\n   * @name API#get_user_fails\n   * @para" +
                "m {object} parameters - method options and parameters\n   * @param {string} pa" +
                "rameters.userId - User ID or 'me'\n   */\n\n\n  API.prototype.get_user_fails =" +
                " function (parameters) {\n    if (parameters === undefined) {\n      parameter" +
                "s = {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var domai" +
                "n = this.domain,\n        path = \"/users/{user_id}/fails\";\n    var body = {" +
                "},\n        queryParameters = {},\n        headers = {},\n        form = {};\n" +
                "    headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Type" +
                "\"] = [\"application/json\"];\n    path = path.replace(\"{user_id}\", paramete" +
                "rs[\"userId\"]);\n\n    if (parameters[\"userId\"] === undefined) {\n      def" +
                "erred.reject(new Error(\"Missing required  parameter: userId\"));\n      retur" +
                "n deferred.promise;\n    }\n\n    queryParameters = mergeQueryParams(parameter" +
                "s, queryParameters);\n    this.request(\"GET\", domain + path, parameters, bod" +
                "y, headers, queryParameters, form, deferred);\n    return deferred.promise;\n " +
                " };\n  /**\n   *\n   * @method\n   * @name API#get_user_solves\n   * @param {o" +
                "bject} parameters - method options and parameters\n   * @param {string} parame" +
                "ters.userId - User ID or 'me'\n   */\n\n\n  API.prototype.get_user_solves = fu" +
                "nction (parameters) {\n    if (parameters === undefined) {\n      parameters =" +
                " {};\n    }\n\n    var deferred = _q[\"default\"].defer();\n\n    var domain =" +
                " this.domain,\n        path = \"/users/{user_id}/solves\";\n    var body = {}," +
                "\n        queryParameters = {},\n        headers = {},\n        form = {};\n  " +
                "  headers[\"Accept\"] = [\"application/json\"];\n    headers[\"Content-Type\"]" +
                " = [\"application/json\"];\n    path = path.replace(\"{user_id}\", parameters[" +
                "\"userId\"]);\n\n    if (parameters[\"userId\"] === undefined) {\n      deferr" +
                "ed.reject(new Error(\"Missing required  parameter: userId\"));\n      return d" +
                "eferred.promise;\n    }\n\n    queryParameters = mergeQueryParams(parameters, " +
                "queryParameters);\n    this.request(\"GET\", domain + path, parameters, body, " +
                "headers, queryParameters, form, deferred);\n    return deferred.promise;\n  };" +
                "\n\n  return API;\n}(); // eslint-disable-next-line no-undef\n\n\nexports.API " +
                "= API;\n\n//# sourceURL=webpack:///./CTFd/themes/xmas/assets/js/api.js?"
            );

            /***/
        }),

        /***/
        "./CTFd/themes/xmas/assets/js/config.js":
        /*!**********************************************!*\
  !*** ./CTFd/themes/xmas/assets/js/config.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {;
            eval(
                "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexpo" +
                "rts[\"default\"] = void 0;\nvar _default = {\n  urlRoot: \"\",\n  csrfNonce: " +
                "\"\",\n  userMode: \"\"\n};\nexports[\"default\"] = _default;\n\n//# sourceURL" +
                "=webpack:///./CTFd/themes/xmas/assets/js/config.js?"
            );

            /***/
        }),

        /***/
        "./CTFd/themes/xmas/assets/js/events.js":
        /*!**********************************************!*\
  !*** ./CTFd/themes/xmas/assets/js/events.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {;
            eval(
                "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexpo" +
                "rts[\"default\"] = void 0;\n\nvar _howler = __webpack_require__(/*! howler */ " +
                "\"./node_modules/howler/dist/howler.js\");\n\nvar _eventSourcePolyfill = __web" +
                "pack_require__(/*! event-source-polyfill */ \"./node_modules/event-source-poly" +
                "fill/src/eventsource.js\");\n\nvar _ezq = __webpack_require__(/*! ./ezq */ \"." +
                "/CTFd/themes/xmas/assets/js/ezq.js\");\n\nvar _utils = __webpack_require__(/*!" +
                " ./utils */ \"./CTFd/themes/xmas/assets/js/utils.js\");\n\nvar EventSource = _" +
                "eventSourcePolyfill.NativeEventSource || _eventSourcePolyfill.EventSourcePolyf" +
                "ill;\n\nvar _default = function _default(root) {\n  var source = new EventSour" +
                "ce(root + \"/events\");\n  var wc = new _utils.WindowController();\n  var howl" +
                " = new _howler.Howl({\n    src: [root + \"/themes/core/static/sounds/notificat" +
                "ion.webm\", root + \"/themes/core/static/sounds/notification.mp3\"]\n  });\n  " +
                "(0, _utils.init_notification_counter)();\n\n  function connect() {\n    source" +
                ".addEventListener(\"notification\", function (event) {\n      var data = JSON." +
                "parse(event.data);\n      wc.broadcast(\"notification\", data); // Render in t" +
                "he master tab\n\n      render(data); // Only play sounds in the master tab\n\n" +
                "      if (data.sound) {\n        howl.play();\n      }\n    }, false);\n  }\n" +
                "\n  function disconnect() {\n    if (source) {\n      source.close();\n    }\n" +
                "  }\n\n  function render(data) {\n    switch (data.type) {\n      case \"toast" +
                "\":\n        {\n          (0, _utils.inc_notification_counter)(); // Trim toas" +
                "t body to length\n\n          var length = 50;\n          var trimmed_content " +
                "= data.content.length > length ? data.content.substring(0, length - 3) + \"..." +
                "\" : data.content;\n          var clicked = false;\n          (0, _ezq.ezToast" +
                ")({\n            title: data.title,\n            body: trimmed_content,\n     " +
                "       onclick: function onclick() {\n              (0, _ezq.ezAlert)({\n     " +
                "           title: data.title,\n                body: data.html,\n             " +
                "   button: \"Got it!\",\n                success: function success() {\n      " +
                "            clicked = true;\n                  (0, _utils.dec_notification_cou" +
                "nter)();\n                }\n              });\n            },\n            on" +
                "close: function onclose() {\n              if (!clicked) {\n                (0" +
                ", _utils.dec_notification_counter)();\n              }\n            }\n       " +
                "   });\n          break;\n        }\n\n      case \"alert\":\n        {\n     " +
                "     (0, _utils.inc_notification_counter)();\n          (0, _ezq.ezAlert)({\n " +
                "           title: data.title,\n            body: data.html,\n            butto" +
                "n: \"Got it!\",\n            success: function success() {\n              (0, " +
                "_utils.dec_notification_counter)();\n            }\n          });\n          b" +
                "reak;\n        }\n\n      case \"background\":\n        {\n          (0, _util" +
                "s.inc_notification_counter)();\n          break;\n        }\n\n      default:" +
                "\n        {\n          (0, _utils.inc_notification_counter)();\n          brea" +
                "k;\n        }\n    }\n  }\n\n  wc.alert = function (data) {\n    render(data);" +
                "\n  };\n\n  wc.toast = function (data) {\n    render(data);\n  };\n\n  wc.back" +
                "ground = function (data) {\n    render(data);\n  };\n\n  wc.masterDidChange = " +
                "function () {\n    if (this.isMaster) {\n      connect();\n    } else {\n     " +
                " disconnect();\n    }\n  };\n};\n\nexports[\"default\"] = _default;\n\n//# sou" +
                "rceURL=webpack:///./CTFd/themes/xmas/assets/js/events.js?"
            );

            /***/
        }),

        /***/
        "./CTFd/themes/xmas/assets/js/ezq.js":
        /*!*******************************************!*\
  !*** ./CTFd/themes/xmas/assets/js/ezq.js ***!
  \*******************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {;
            eval(
                "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexpo" +
                "rts[\"default\"] = void 0;\nexports.ezAlert = ezAlert;\nexports.ezBadge = ezBa" +
                "dge;\nexports.ezProgressBar = ezProgressBar;\nexports.ezQuery = ezQuery;\nexpo" +
                "rts.ezToast = ezToast;\n\n__webpack_require__(/*! bootstrap/js/dist/modal */ " +
                "\"./node_modules/bootstrap/js/dist/modal.js\");\n\nvar _jquery = _interopRequi" +
                "reDefault(__webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquer" +
                "y.js\"));\n\nvar _highlight = _interopRequireDefault(__webpack_require__(/*! h" +
                "ighlight.js */ \"./node_modules/highlight.js/lib/index.js\"));\n\nfunction _in" +
                "teropRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\":" +
                " obj }; }\n\nvar modalTpl = '<div class=\"modal fade\" tabindex=\"-1\" role=\"" +
                "dialog\">' + '  <div class=\"modal-dialog\" role=\"document\">' + '    <div cl" +
                "ass=\"modal-content\">' + '      <div class=\"modal-header\">' + '        <h5 " +
                "class=\"modal-title\">{0}</h5>' + '        <button type=\"button\" class=\"clo" +
                "se\" data-dismiss=\"modal\" aria-label=\"Close\">' + '          <span aria-hid" +
                "den=\"true\">&times;</span>' + \"        </button>\" + \"      </div>\" + '   " +
                "   <div class=\"modal-body\">' + \"      </div>\" + '      <div class=\"modal-" +
                "footer\">' + \"      </div>\" + \"    </div>\" + \"  </div>\" + \"</div>\";\nv" +
                "ar toastTpl = '<div class=\"toast m-3\" role=\"alert\">' + '  <div class=\"toa" +
                "st-header\">' + '    <strong class=\"mr-auto\">{0}</strong>' + '    <button ty" +
                "pe=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Cl" +
                "ose\">' + '      <span aria-hidden=\"true\">&times;</span>' + \"    </button>" +
                "\" + \"  </div>\" + '  <div class=\"toast-body\">{1}</div>' + \"</div>\";\nvar" +
                " progressTpl = '<div class=\"progress\">' + '  <div class=\"progress-bar progr" +
                "ess-bar-success progress-bar-striped progress-bar-animated\" role=\"progressba" +
                "r\" style=\"width: {0}%\">' + \"  </div>\" + \"</div>\";\nvar errorTpl = '<div" +
                " class=\"alert alert-danger alert-dismissable\" role=\"alert\">\\n' + '  <span" +
                " class=\"sr-only\">Error:</span>\\n' + \"  {0}\\n\" + '  <button type=\"button" +
                "\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidd" +
                "en=\"true\">×</span></button>\\n' + \"</div>\";\nvar successTpl = '<div class=" +
                "\"alert alert-success alert-dismissable submit-row\" role=\"alert\">\\n' + \" " +
                " <strong>Success!</strong>\\n\" + \"  {0}\\n\" + '  <button type=\"button\" cl" +
                "ass=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"" +
                "true\">×</span></button>\\n' + \"</div>\";\nvar buttonTpl = '<button type=\"bu" +
                "tton\" class=\"btn btn-primary\" data-dismiss=\"modal\">{0}</button>';\nvar no" +
                "Tpl = '<button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"" +
                ">No</button>';\nvar yesTpl = '<button type=\"button\" class=\"btn btn-primary" +
                "\" data-dismiss=\"modal\">Yes</button>';\n\nfunction ezAlert(args) {\n  var mo" +
                "dal = modalTpl.format(args.title);\n  var obj = (0, _jquery[\"default\"])(moda" +
                "l);\n\n  if (typeof args.body === \"string\") {\n    obj.find(\".modal-body\")" +
                ".append(\"<p>\".concat(args.body, \"</p>\"));\n  } else {\n    obj.find(\".mod" +
                "al-body\").append((0, _jquery[\"default\"])(args.body));\n  }\n\n  var button " +
                "= (0, _jquery[\"default\"])(buttonTpl.format(args.button));\n\n  if (args.succ" +
                "ess) {\n    (0, _jquery[\"default\"])(button).click(function () {\n      args." +
                "success();\n    });\n  }\n\n  if (args.large) {\n    obj.find(\".modal-dialog" +
                "\").addClass(\"modal-lg\");\n  }\n\n  obj.find(\".modal-footer\").append(butto" +
                "n); // Syntax highlighting\n\n  obj.find(\"pre code\").each(function (_idx) {" +
                "\n    _highlight[\"default\"].highlightBlock(this);\n  });\n  (0, _jquery[\"de" +
                "fault\"])(\"main\").append(obj);\n  obj.modal(\"show\");\n  (0, _jquery[\"defa" +
                "ult\"])(obj).on(\"hidden.bs.modal\", function () {\n    (0, _jquery[\"default" +
                "\"])(this).modal(\"dispose\");\n  });\n  return obj;\n}\n\nfunction ezToast(ar" +
                "gs) {\n  var container_available = (0, _jquery[\"default\"])(\"#ezq--notificat" +
                "ions-toast-container\").length;\n\n  if (!container_available) {\n    (0, _jqu" +
                "ery[\"default\"])(\"body\").append((0, _jquery[\"default\"])(\"<div/>\").attr(" +
                "{\n      id: \"ezq--notifications-toast-container\"\n    }).css({\n      posit" +
                "ion: \"fixed\",\n      bottom: \"0\",\n      right: \"0\",\n      \"min-width" +
                "\": \"20%\"\n    }));\n  }\n\n  var res = toastTpl.format(args.title, args.bod" +
                "y);\n  var obj = (0, _jquery[\"default\"])(res);\n\n  if (args.onclose) {\n   " +
                " (0, _jquery[\"default\"])(obj).find(\"button[data-dismiss=toast]\").click(fun" +
                "ction () {\n      args.onclose();\n    });\n  }\n\n  if (args.onclick) {\n    " +
                "var body = (0, _jquery[\"default\"])(obj).find(\".toast-body\");\n    body.add" +
                "Class(\"cursor-pointer\");\n    body.click(function () {\n      args.onclick()" +
                ";\n    });\n  }\n\n  var autohide = args.autohide !== false;\n  var animation " +
                "= args.animation !== false;\n  var delay = args.delay || 10000; // 10 seconds" +
                "\n\n  (0, _jquery[\"default\"])(\"#ezq--notifications-toast-container\").prepe" +
                "nd(obj);\n  obj.toast({\n    autohide: autohide,\n    delay: delay,\n    anima" +
                "tion: animation\n  });\n  obj.toast(\"show\");\n  return obj;\n}\n\nfunction e" +
                "zQuery(args) {\n  var modal = modalTpl.format(args.title);\n  var obj = (0, _j" +
                "query[\"default\"])(modal);\n\n  if (typeof args.body === \"string\") {\n    o" +
                "bj.find(\".modal-body\").append(\"<p>\".concat(args.body, \"</p>\"));\n  } els" +
                "e {\n    obj.find(\".modal-body\").append((0, _jquery[\"default\"])(args.body)" +
                ");\n  }\n\n  var yes = (0, _jquery[\"default\"])(yesTpl);\n  var no = (0, _jqu" +
                "ery[\"default\"])(noTpl);\n  obj.find(\".modal-footer\").append(no);\n  obj.fi" +
                "nd(\".modal-footer\").append(yes); // Syntax highlighting\n\n  obj.find(\"pre " +
                "code\").each(function (_idx) {\n    _highlight[\"default\"].highlightBlock(thi" +
                "s);\n  });\n  (0, _jquery[\"default\"])(\"main\").append(obj);\n  (0, _jquery[" +
                "\"default\"])(obj).on(\"hidden.bs.modal\", function () {\n    (0, _jquery[\"de" +
                "fault\"])(this).modal(\"dispose\");\n  });\n  (0, _jquery[\"default\"])(yes).c" +
                "lick(function () {\n    args.success();\n  });\n  obj.modal(\"show\");\n  retu" +
                "rn obj;\n}\n\nfunction ezProgressBar(args) {\n  if (args.target) {\n    var _o" +
                "bj = (0, _jquery[\"default\"])(args.target);\n\n    var pbar = _obj.find(\".pr" +
                "ogress-bar\");\n\n    pbar.css(\"width\", args.width + \"%\");\n    return _ob" +
                "j;\n  }\n\n  var progress = progressTpl.format(args.width);\n  var modal = mod" +
                "alTpl.format(args.title);\n  var obj = (0, _jquery[\"default\"])(modal);\n  ob" +
                "j.find(\".modal-body\").append((0, _jquery[\"default\"])(progress));\n  (0, _j" +
                "query[\"default\"])(\"main\").append(obj);\n  return obj.modal(\"show\");\n}\n" +
                "\nfunction ezBadge(args) {\n  var mapping = {\n    success: successTpl,\n    e" +
                "rror: errorTpl\n  };\n  var tpl = mapping[args.type].format(args.body);\n  ret" +
                "urn (0, _jquery[\"default\"])(tpl);\n}\n\nvar ezq = {\n  ezAlert: ezAlert,\n  " +
                "ezToast: ezToast,\n  ezQuery: ezQuery,\n  ezProgressBar: ezProgressBar,\n  ezB" +
                "adge: ezBadge\n};\nvar _default = ezq;\nexports[\"default\"] = _default;\n\n//" +
                "# sourceURL=webpack:///./CTFd/themes/xmas/assets/js/ezq.js?"
            );

            /***/
        }),

        /***/
        "./CTFd/themes/xmas/assets/js/fetch.js":
        /*!*********************************************!*\
  !*** ./CTFd/themes/xmas/assets/js/fetch.js ***!
  \*********************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {;
            eval(
                "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexpo" +
                "rts[\"default\"] = void 0;\n\n__webpack_require__(/*! whatwg-fetch */ \"./node" +
                "_modules/whatwg-fetch/fetch.js\");\n\nvar _config = _interopRequireDefault(__w" +
                "ebpack_require__(/*! ./config */ \"./CTFd/themes/xmas/assets/js/config.js\"));" +
                "\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj " +
                ": { \"default\": obj }; }\n\nvar fetch = window.fetch;\n\nvar _default = funct" +
                "ion _default(url, options) {\n  if (options === undefined) {\n    options = {" +
                "\n      method: \"GET\",\n      credentials: \"same-origin\",\n      headers: " +
                "{}\n    };\n  }\n\n  url = _config[\"default\"].urlRoot + url;\n\n  if (option" +
                "s.headers === undefined) {\n    options.headers = {};\n  }\n\n  options.creden" +
                "tials = \"same-origin\";\n  options.headers[\"Accept\"] = \"application/json\"" +
                ";\n  options.headers[\"Content-Type\"] = \"application/json\";\n  options.head" +
                "ers[\"CSRF-Token\"] = _config[\"default\"].csrfNonce;\n  return fetch(url, opt" +
                "ions);\n};\n\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./C" +
                "TFd/themes/xmas/assets/js/fetch.js?"
            );

            /***/
        }),

        /***/
        "./CTFd/themes/xmas/assets/js/pages/main.js":
        /*!**************************************************!*\
  !*** ./CTFd/themes/xmas/assets/js/pages/main.js ***!
  \**************************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {;
            eval(
                "\n\nvar _CTFd = _interopRequireDefault(__webpack_require__(/*! ../CTFd */ \"./" +
                "CTFd/themes/xmas/assets/js/CTFd.js\"));\n\nvar _jquery = _interopRequireDefaul" +
                "t(__webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\"))" +
                ";\n\nvar _dayjs = _interopRequireDefault(__webpack_require__(/*! dayjs */ \"./" +
                "node_modules/dayjs/dayjs.min.js\"));\n\nvar _advancedFormat = _interopRequireD" +
                "efault(__webpack_require__(/*! dayjs/plugin/advancedFormat */ \"./node_modules" +
                "/dayjs/plugin/advancedFormat.js\"));\n\nvar _nunjucks = _interopRequireDefault" +
                "(__webpack_require__(/*! nunjucks */ \"./node_modules/nunjucks/browser/nunjuck" +
                "s.js\"));\n\nvar _howler = __webpack_require__(/*! howler */ \"./node_modules/" +
                "howler/dist/howler.js\");\n\nvar _events = _interopRequireDefault(__webpack_re" +
                "quire__(/*! ../events */ \"./CTFd/themes/xmas/assets/js/events.js\"));\n\nvar " +
                "_config = _interopRequireDefault(__webpack_require__(/*! ../config */ \"./CTFd" +
                "/themes/xmas/assets/js/config.js\"));\n\nvar _styles = _interopRequireDefault(" +
                "__webpack_require__(/*! ../styles */ \"./CTFd/themes/xmas/assets/js/styles.js" +
                "\"));\n\nvar _times = _interopRequireDefault(__webpack_require__(/*! ../times " +
                "*/ \"./CTFd/themes/xmas/assets/js/times.js\"));\n\nvar _helpers = _interopRequ" +
                "ireDefault(__webpack_require__(/*! ../helpers */ \"./CTFd/themes/xmas/assets/j" +
                "s/helpers.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj." +
                "__esModule ? obj : { \"default\": obj }; }\n\n_dayjs[\"default\"].extend(_adva" +
                "ncedFormat[\"default\"]);\n\n_CTFd[\"default\"].init(window.init);\n\nwindow.C" +
                "TFd = _CTFd[\"default\"];\nwindow.helpers = _helpers[\"default\"];\nwindow.$ =" +
                " _jquery[\"default\"];\nwindow.dayjs = _dayjs[\"default\"];\nwindow.nunjucks =" +
                " _nunjucks[\"default\"];\nwindow.Howl = _howler.Howl;\n(0, _jquery[\"default\"" +
                "])(function () {\n  (0, _styles[\"default\"])();\n  (0, _times[\"default\"])()" +
                ";\n  (0, _events[\"default\"])(_config[\"default\"].urlRoot);\n});\n\n//# sour" +
                "ceURL=webpack:///./CTFd/themes/xmas/assets/js/pages/main.js?"
            );

            /***/
        }),

        /***/
        "./CTFd/themes/xmas/assets/js/patch.js":
        /*!*********************************************!*\
  !*** ./CTFd/themes/xmas/assets/js/patch.js ***!
  \*********************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {;
            eval(
                "\n\nvar _q = _interopRequireDefault(__webpack_require__(/*! q */ \"./node_modu" +
                "les/q/q.js\"));\n\nvar _api = __webpack_require__(/*! ./api */ \"./CTFd/themes" +
                "/xmas/assets/js/api.js\");\n\nfunction _interopRequireDefault(obj) { return ob" +
                "j && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction ownKeys(object" +
                ", enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertyS" +
                "ymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOn" +
                "ly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDe" +
                "scriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } retu" +
                "rn keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.l" +
                "ength; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2" +
                ") { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(tar" +
                "get, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Obj" +
                "ect.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else" +
                " { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(targ" +
                "et, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target;" +
                " }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.def" +
                "ineProperty(obj, key, { value: value, enumerable: true, configurable: true, wr" +
                "itable: true }); } else { obj[key] = value; } return obj; }\n\nfunction mergeQ" +
                "ueryParams(parameters, queryParameters) {\n  return _objectSpread(_objectSprea" +
                "d({}, parameters), queryParameters);\n}\n\nfunction serializeQueryParams(param" +
                "eters) {\n  var str = [];\n\n  for (var p in parameters) {\n    if (parameters" +
                ".hasOwnProperty(p)) {\n      str.push(encodeURIComponent(p) + \"=\" + encodeUR" +
                "IComponent(parameters[p]));\n    }\n  }\n\n  return str.join(\"&\");\n}\n\n_ap" +
                "i.API.prototype.requestRaw = function (method, url, parameters, body, headers," +
                " queryParameters, form, deferred) {\n  var queryParams = queryParameters && Ob" +
                "ject.keys(queryParameters).length ? serializeQueryParams(queryParameters) : nu" +
                "ll;\n  var urlWithParams = url + (queryParams ? \"?\" + queryParams : \"\");\n" +
                "\n  if (body && !Object.keys(body).length) {\n    body = undefined;\n  }\n\n  " +
                "fetch(urlWithParams, {\n    method: method,\n    headers: headers,\n    body: " +
                "body\n  }).then(function (response) {\n    return response.json();\n  }).then(" +
                "function (body) {\n    deferred.resolve(body);\n  })[\"catch\"](function (erro" +
                "r) {\n    deferred.reject(error);\n  });\n};\n\n_api.API.prototype.patch_user_" +
                "public = function (parameters, body) {\n  if (parameters === undefined) {\n   " +
                " parameters = {};\n  }\n\n  var deferred = _q[\"default\"].defer();\n\n  var d" +
                "omain = this.domain,\n      path = \"/users/{user_id}\";\n  var queryParameter" +
                "s = {},\n      headers = {},\n      form = {};\n  headers[\"Accept\"] = [\"app" +
                "lication/json\"];\n  headers[\"Content-Type\"] = [\"application/json\"];\n  pa" +
                "th = path.replace(\"{user_id}\", parameters[\"userId\"]);\n\n  if (parameters[" +
                "\"userId\"] === undefined) {\n    deferred.reject(new Error(\"Missing required" +
                "  parameter: userId\"));\n    return deferred.promise;\n  }\n\n  this.request(" +
                "\"PATCH\", domain + path, parameters, body, headers, queryParameters, form, de" +
                "ferred);\n  return deferred.promise;\n};\n\n_api.API.prototype.patch_user_priv" +
                "ate = function (parameters, body) {\n  if (parameters === undefined) {\n    pa" +
                "rameters = {};\n  }\n\n  var deferred = _q[\"default\"].defer();\n\n  var doma" +
                "in = this.domain,\n      path = \"/users/me\";\n  var headers = {},\n      for" +
                "m = {};\n  headers[\"Accept\"] = [\"application/json\"];\n  headers[\"Content-" +
                "Type\"] = [\"application/json\"];\n  this.request(\"PATCH\", domain + path, pa" +
                "rameters, body, headers, {}, form, deferred);\n  return deferred.promise;\n};" +
                "\n\n_api.API.prototype.post_unlock_list = function (parameters, body) {\n  var" +
                " deferred = _q[\"default\"].defer();\n\n  var domain = this.domain,\n      pat" +
                "h = \"/unlocks\";\n  var headers = {},\n      form = {};\n  headers[\"Accept\"" +
                "] = [\"application/json\"];\n  headers[\"Content-Type\"] = [\"application/json" +
                "\"];\n  this.request(\"POST\", domain + path, parameters, body, headers, {}, f" +
                "orm, deferred);\n  return deferred.promise;\n};\n\n_api.API.prototype.post_not" +
                "ification_list = function (parameters, body) {\n  if (parameters === undefined" +
                ") {\n    parameters = {};\n  }\n\n  var deferred = _q[\"default\"].defer();\n" +
                "\n  var domain = this.domain,\n      path = \"/notifications\";\n  var queryPa" +
                "rameters = {},\n      headers = {},\n      form = {};\n  headers[\"Accept\"] =" +
                " [\"application/json\"];\n  headers[\"Content-Type\"] = [\"application/json\"]" +
                ";\n  this.request(\"POST\", domain + path, parameters, body, headers, queryPar" +
                "ameters, form, deferred);\n  return deferred.promise;\n};\n\n_api.API.prototyp" +
                "e.post_files_list = function (parameters, body) {\n  var deferred = _q[\"defau" +
                "lt\"].defer();\n\n  var domain = this.domain,\n      path = \"/files\";\n  var" +
                " queryParameters = {},\n      headers = {},\n      form = {};\n  headers[\"Acc" +
                "ept\"] = [\"application/json\"];\n  headers[\"Content-Type\"] = [\"application" +
                "/json\"];\n  this.requestRaw(\"POST\", domain + path, parameters, body, header" +
                "s, queryParameters, form, deferred);\n  return deferred.promise;\n};\n\n_api.A" +
                "PI.prototype.patch_config = function (parameters, body) {\n  if (parameters ==" +
                "= undefined) {\n    parameters = {};\n  }\n\n  var deferred = _q[\"default\"]." +
                "defer();\n\n  var domain = this.domain,\n      path = \"/configs/{config_key}" +
                "\";\n  var queryParameters = {},\n      headers = {},\n      form = {};\n  hea" +
                "ders[\"Accept\"] = [\"application/json\"];\n  headers[\"Content-Type\"] = [\"a" +
                "pplication/json\"];\n  path = path.replace(\"{config_key}\", parameters[\"conf" +
                "igKey\"]);\n\n  if (parameters[\"configKey\"] === undefined) {\n    deferred.r" +
                "eject(new Error(\"Missing required  parameter: configKey\"));\n    return defe" +
                "rred.promise;\n  }\n\n  this.request(\"PATCH\", domain + path, parameters, bod" +
                "y, headers, queryParameters, form, deferred);\n  return deferred.promise;\n};" +
                "\n\n_api.API.prototype.patch_config_list = function (parameters, body) {\n  if" +
                " (parameters === undefined) {\n    parameters = {};\n  }\n\n  var deferred = _" +
                "q[\"default\"].defer();\n\n  var domain = this.domain,\n      path = \"/config" +
                "s\";\n  var queryParameters = {},\n      headers = {},\n      form = {};\n  he" +
                "aders[\"Accept\"] = [\"application/json\"];\n  headers[\"Content-Type\"] = [\"" +
                "application/json\"];\n  queryParameters = mergeQueryParams(parameters, queryPa" +
                "rameters);\n  this.request(\"PATCH\", domain + path, parameters, body, headers" +
                ", queryParameters, form, deferred);\n  return deferred.promise;\n};\n\n_api.AP" +
                "I.prototype.post_tag_list = function (parameters, body) {\n  if (parameters ==" +
                "= undefined) {\n    parameters = {};\n  }\n\n  var deferred = _q[\"default\"]." +
                "defer();\n\n  var domain = this.domain,\n      path = \"/tags\";\n  var queryP" +
                "arameters = {},\n      headers = {},\n      form = {};\n  headers[\"Accept\"] " +
                "= [\"application/json\"];\n  headers[\"Content-Type\"] = [\"application/json\"" +
                "];\n  queryParameters = mergeQueryParams(parameters, queryParameters);\n  this" +
                ".request(\"POST\", domain + path, parameters, body, headers, queryParameters, " +
                "form, deferred);\n  return deferred.promise;\n};\n\n_api.API.prototype.patch_t" +
                "eam_public = function (parameters, body) {\n  if (parameters === undefined) {" +
                "\n    parameters = {};\n  }\n\n  var deferred = _q[\"default\"].defer();\n\n  " +
                "var domain = this.domain,\n      path = \"/teams/{team_id}\";\n  var queryPara" +
                "meters = {},\n      headers = {},\n      form = {};\n  headers[\"Accept\"] = [" +
                "\"application/json\"];\n  headers[\"Content-Type\"] = [\"application/json\"];" +
                "\n  path = path.replace(\"{team_id}\", parameters[\"teamId\"]);\n\n  if (param" +
                "eters[\"teamId\"] === undefined) {\n    deferred.reject(new Error(\"Missing re" +
                "quired  parameter: teamId\"));\n    return deferred.promise;\n  }\n\n  queryPa" +
                "rameters = mergeQueryParams(parameters, queryParameters);\n  this.request(\"PA" +
                "TCH\", domain + path, parameters, body, headers, queryParameters, form, deferr" +
                "ed);\n  return deferred.promise;\n};\n\n_api.API.prototype.post_challenge_atte" +
                "mpt = function (parameters, body) {\n  if (parameters === undefined) {\n    pa" +
                "rameters = {};\n  }\n\n  var deferred = _q[\"default\"].defer();\n\n  var doma" +
                "in = this.domain,\n      path = \"/challenges/attempt\";\n  var queryParameter" +
                "s = {},\n      headers = {},\n      form = {};\n  headers[\"Accept\"] = [\"app" +
                "lication/json\"];\n  headers[\"Content-Type\"] = [\"application/json\"];\n  qu" +
                "eryParameters = mergeQueryParams(parameters, queryParameters);\n  this.request" +
                "(\"POST\", domain + path, parameters, body, headers, queryParameters, form, de" +
                "ferred);\n  return deferred.promise;\n};\n\n_api.API.prototype.get_hint = func" +
                "tion (parameters) {\n  if (parameters === undefined) {\n    parameters = {};\n" +
                "  }\n\n  var deferred = _q[\"default\"].defer();\n\n  var domain = this.domain" +
                ",\n      path = \"/hints/{hint_id}\";\n  var body = {},\n      queryParameters" +
                " = {},\n      headers = {},\n      form = {};\n  headers[\"Accept\"] = [\"appl" +
                "ication/json\"];\n  headers[\"Content-Type\"] = [\"application/json\"];\n  pat" +
                "h = path.replace(\"{hint_id}\", parameters[\"hintId\"]);\n\n  if (parameters[" +
                "\"hintId\"] === undefined) {\n    deferred.reject(new Error(\"Missing required" +
                "  parameter: hintId\"));\n    return deferred.promise;\n  }\n\n  delete parame" +
                "ters[\"hintId\"];\n  queryParameters = mergeQueryParams(parameters, queryParam" +
                "eters);\n  this.request(\"GET\", domain + path, parameters, body, headers, que" +
                "ryParameters, form, deferred);\n  return deferred.promise;\n};\n\n//# sourceUR" +
                "L=webpack:///./CTFd/themes/xmas/assets/js/patch.js?"
            );

            /***/
        }),

        /***/
        "./CTFd/themes/xmas/assets/js/styles.js":
        /*!**********************************************!*\
  !*** ./CTFd/themes/xmas/assets/js/styles.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {;
            eval(
                "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexpo" +
                "rts[\"default\"] = void 0;\n\n__webpack_require__(/*! bootstrap/dist/js/bootst" +
                "rap.bundle */ \"./node_modules/bootstrap/dist/js/bootstrap.bundle.js\");\n\nva" +
                "r _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ \"./node_" +
                "modules/jquery/dist/jquery.js\"));\n\nvar _highlight = _interopRequireDefault(" +
                "__webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/inde" +
                "x.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModu" +
                "le ? obj : { \"default\": obj }; }\n\nvar _default = function _default() {\n  " +
                "// TODO: This is kind of a hack to mimic a React-like state construct.\n  // I" +
                "t should be removed once we have a real front-end framework in place.\n  (0, _" +
                "jquery[\"default\"])(\":input\").each(function () {\n    (0, _jquery[\"default" +
                "\"])(this).data(\"initial\", (0, _jquery[\"default\"])(this).val());\n  });\n " +
                " (0, _jquery[\"default\"])(\".form-control\").bind({\n    focus: function focu" +
                "s() {\n      (0, _jquery[\"default\"])(this).removeClass(\"input-filled-invali" +
                "d\");\n      (0, _jquery[\"default\"])(this).addClass(\"input-filled-valid\");" +
                "\n    },\n    blur: function blur() {\n      if ((0, _jquery[\"default\"])(thi" +
                "s).val() === \"\") {\n        (0, _jquery[\"default\"])(this).removeClass(\"in" +
                "put-filled-invalid\");\n        (0, _jquery[\"default\"])(this).removeClass(\"" +
                "input-filled-valid\");\n      }\n    }\n  });\n  (0, _jquery[\"default\"])(\"." +
                "form-control\").each(function () {\n    if ((0, _jquery[\"default\"])(this).va" +
                "l()) {\n      (0, _jquery[\"default\"])(this).addClass(\"input-filled-valid\")" +
                ";\n    }\n  });\n  (0, _jquery[\"default\"])(\".page-select\").change(function" +
                " () {\n    var url = new URL(window.location);\n    url.searchParams.set(\"pag" +
                "e\", this.value);\n    window.location.href = url.toString();\n  });\n  (0, _j" +
                "query[\"default\"])('[data-toggle=\"tooltip\"]').tooltip();\n  (0, _jquery[\"d" +
                "efault\"])(function () {\n    // Syntax highlighting\n    document.querySelect" +
                "orAll(\"pre code\").forEach(function (block) {\n      _highlight[\"default\"]." +
                "highlightBlock(block);\n    });\n  });\n};\n\nexports[\"default\"] = _default;" +
                "\n\n//# sourceURL=webpack:///./CTFd/themes/xmas/assets/js/styles.js?"
            );

            /***/
        }),

        /***/
        "./CTFd/themes/xmas/assets/js/times.js":
        /*!*********************************************!*\
  !*** ./CTFd/themes/xmas/assets/js/times.js ***!
  \*********************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {;
            eval(
                "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexpo" +
                "rts[\"default\"] = void 0;\n\nvar _dayjs = _interopRequireDefault(__webpack_re" +
                "quire__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\"));\n\nvar _advanced" +
                "Format = _interopRequireDefault(__webpack_require__(/*! dayjs/plugin/advancedF" +
                "ormat */ \"./node_modules/dayjs/plugin/advancedFormat.js\"));\n\nvar _jquery =" +
                " _interopRequireDefault(__webpack_require__(/*! jquery */ \"./node_modules/jqu" +
                "ery/dist/jquery.js\"));\n\nfunction _interopRequireDefault(obj) { return obj &" +
                "& obj.__esModule ? obj : { \"default\": obj }; }\n\n_dayjs[\"default\"].extend" +
                "(_advancedFormat[\"default\"]);\n\nvar _default = function _default() {\n  (0," +
                " _jquery[\"default\"])(\"[data-time]\").each(function (i, elem) {\n    var $el" +
                "em = (0, _jquery[\"default\"])(elem);\n    var time = $elem.data(\"time\");\n " +
                "   var format = $elem.data(\"time-format\") || \"MMMM Do, h:mm:ss A\";\n    el" +
                "em.innerText = (0, _dayjs[\"default\"])(time).format(format);\n  });\n};\n\nex" +
                "ports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./CTFd/themes/xmas/" +
                "assets/js/times.js?"
            );

            /***/
        }),

        /***/
        "./CTFd/themes/xmas/assets/js/utils.js":
        /*!*********************************************!*\
  !*** ./CTFd/themes/xmas/assets/js/utils.js ***!
  \*********************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {;
            eval(
                "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexpo" +
                "rts.WindowController = WindowController;\nexports.clear_notification_counter =" +
                " clear_notification_counter;\nexports.colorHash = colorHash;\nexports.copyToCl" +
                "ipboard = copyToClipboard;\nexports.cumulativeSum = cumulativeSum;\nexports.de" +
                "c_notification_counter = dec_notification_counter;\nexports.htmlEntities = htm" +
                "lEntities;\nexports.inc_notification_counter = inc_notification_counter;\nexpo" +
                "rts.init_notification_counter = init_notification_counter;\nexports.makeSortab" +
                "leTables = makeSortableTables;\nexports.set_notification_counter = set_notific" +
                "ation_counter;\n\nvar _jquery = _interopRequireDefault(__webpack_require__(/*!" +
                " jquery */ \"./node_modules/jquery/dist/jquery.js\"));\n\nfunction _interopReq" +
                "uireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; " +
                "}\n\n_jquery[\"default\"].fn.serializeJSON = function (omit_nulls) {\n  var pa" +
                "rams = {};\n  var form = (0, _jquery[\"default\"])(this);\n  var values = form" +
                ".serializeArray();\n  values = values.concat(form.find(\"input[type=checkbox]:" +
                "checked\").map(function () {\n    return {\n      name: this.name,\n      valu" +
                "e: true\n    };\n  }).get());\n  values = values.concat(form.find(\"input[type" +
                "=checkbox]:not(:checked)\").map(function () {\n    return {\n      name: this." +
                "name,\n      value: false\n    };\n  }).get());\n  values.map(function (x) {\n" +
                "    if (omit_nulls) {\n      if (x.value !== null && x.value !== \"\") {\n    " +
                "    params[x.name] = x.value;\n      } else {\n        var input = form.find(" +
                "\":input[name='\".concat(x.name, \"']\"));\n\n        if (input.data(\"initial" +
                "\") !== input.val()) {\n          params[x.name] = x.value;\n        }\n      " +
                "}\n    } else {\n      params[x.name] = x.value;\n    }\n  });\n  return param" +
                "s;\n}; //http://stackoverflow.com/a/2648463 - wizardry!\n\n\nString.prototype." +
                "format = String.prototype.f = function () {\n  var s = this,\n      i = argume" +
                "nts.length;\n\n  while (i--) {\n    s = s.replace(new RegExp(\"\\\\{\" + i + " +
                "\"\\\\}\", \"gm\"), arguments[i]);\n  }\n\n  return s;\n}; //http://stackoverf" +
                "low.com/a/7616484\n\n\nString.prototype.hashCode = function () {\n  var hash =" +
                " 0,\n      i,\n      chr,\n      len;\n  if (this.length == 0) return hash;\n" +
                "\n  for (i = 0, len = this.length; i < len; i++) {\n    chr = this.charCodeAt(" +
                "i);\n    hash = (hash << 5) - hash + chr;\n    hash |= 0; // Convert to 32bit " +
                "integer\n  }\n\n  return hash;\n}; // https://gist.github.com/neilj/4146038\n/" +
                "/ https://fastmail.blog/2012/11/26/inter-tab-communication-using-local-storage" +
                "/\n\n\nfunction WindowController() {\n  this.id = Math.random();\n  this.isMas" +
                "ter = false;\n  this.others = {};\n  window.addEventListener(\"storage\", this" +
                ", false);\n  window.addEventListener(\"unload\", this, false);\n  this.broadca" +
                "st(\"hello\");\n  var that = this;\n\n  var check = function check() {\n    th" +
                "at.check();\n    that._checkTimeout = setTimeout(check, 9000);\n  };\n\n  var " +
                "ping = function ping() {\n    that.sendPing();\n    that._pingTimeout = setTim" +
                "eout(ping, 17000);\n  };\n\n  this._checkTimeout = setTimeout(check, 500);\n  " +
                "this._pingTimeout = setTimeout(ping, 17000);\n}\n\nWindowController.prototype." +
                "destroy = function () {\n  clearTimeout(this._pingTimeout);\n  clearTimeout(th" +
                "is._checkTimeout);\n  window.removeEventListener(\"storage\", this, false);\n " +
                " window.removeEventListener(\"unload\", this, false);\n  this.broadcast(\"bye" +
                "\");\n};\n\nWindowController.prototype.handleEvent = function (event) {\n  if " +
                "(event.type === \"unload\") {\n    this.destroy();\n  } else if (event.key ===" +
                " \"broadcast\") {\n    try {\n      var data = JSON.parse(event.newValue);\n\n" +
                "      if (data.id !== this.id) {\n        this[data.type](data);\n      }\n   " +
                " } catch (error) {\n      // eslint-disable-next-line no-console\n      consol" +
                "e.log(error);\n    }\n  }\n};\n\nWindowController.prototype.sendPing = functio" +
                "n () {\n  this.broadcast(\"ping\");\n};\n\nWindowController.prototype.hello = " +
                "function (event) {\n  this.ping(event);\n\n  if (event.id < this.id) {\n    th" +
                "is.check();\n  } else {\n    this.sendPing();\n  }\n};\n\nWindowController.pro" +
                "totype.ping = function (event) {\n  this.others[event.id] = +new Date();\n};\n" +
                "\nWindowController.prototype.bye = function (event) {\n  delete this.others[ev" +
                "ent.id];\n  this.check();\n};\n\nWindowController.prototype.check = function (" +
                "_event) {\n  var now = +new Date(),\n      takeMaster = true,\n      id;\n\n  " +
                "for (id in this.others) {\n    if (this.others[id] + 23000 < now) {\n      del" +
                "ete this.others[id];\n    } else if (id < this.id) {\n      takeMaster = false" +
                ";\n    }\n  }\n\n  if (this.isMaster !== takeMaster) {\n    this.isMaster = ta" +
                "keMaster;\n    this.masterDidChange();\n  }\n};\n\nWindowController.prototype." +
                "masterDidChange = function () {};\n\nWindowController.prototype.broadcast = fu" +
                "nction (type, data) {\n  var event = {\n    id: this.id,\n    type: type\n  };" +
                "\n\n  for (var x in data) {\n    event[x] = data[x];\n  }\n\n  try {\n    loca" +
                "lStorage.setItem(\"broadcast\", JSON.stringify(event));\n  } catch (error) {\n" +
                "    // eslint-disable-next-line no-console\n    console.log(error);\n  }\n}; /" +
                "/ https://gist.github.com/0x263b/2bdd90886c2036a1ad5bcf06d6e6fb37\n\n\nfunctio" +
                "n colorHash(str) {\n  var hash = 0;\n\n  for (var i = 0; i < str.length; i++) " +
                "{\n    hash = str.charCodeAt(i) + ((hash << 5) - hash);\n    hash = hash & has" +
                "h;\n  } // Range calculation\n  // diff = max - min;\n  // x = ((hash % diff) " +
                "+ diff) % diff;\n  // return x + min;\n  // Calculate HSL values\n  // Range f" +
                "rom 0 to 360\n\n\n  var h = (hash % 360 + 360) % 360; // Range from 75 to 100" +
                "\n\n  var s = (hash % 25 + 25) % 25 + 75; // Range from 40 to 60\n\n  var l = " +
                "(hash % 20 + 20) % 20 + 40;\n  return \"hsl(\".concat(h, \", \").concat(s, \"%" +
                ", \").concat(l, \"%)\");\n}\n\nfunction htmlEntities(string) {\n  return (0, _" +
                "jquery[\"default\"])(\"<div/>\").text(string).html();\n}\n\nfunction cumulativ" +
                "eSum(arr) {\n  var result = arr.concat();\n\n  for (var i = 0; i < arr.length;" +
                " i++) {\n    result[i] = arr.slice(0, i + 1).reduce(function (p, i) {\n      r" +
                "eturn p + i;\n    });\n  }\n\n  return result;\n}\n\nvar storage = window.loca" +
                "lStorage;\nvar counter_key = \"unread_notifications\";\n\nfunction init_notifi" +
                "cation_counter() {\n  var count = storage.getItem(counter_key);\n\n  if (count" +
                " === null) {\n    storage.setItem(counter_key, 0);\n  } else {\n    if (count " +
                "> 0) {\n      (0, _jquery[\"default\"])(\".badge-notification\").text(count);" +
                "\n    }\n  }\n}\n\nfunction set_notification_counter(count) {\n  storage.setIt" +
                "em(counter_key, count);\n}\n\nfunction inc_notification_counter() {\n  var cou" +
                "nt = storage.getItem(counter_key) || 0;\n  storage.setItem(counter_key, ++coun" +
                "t);\n  (0, _jquery[\"default\"])(\".badge-notification\").text(count);\n}\n\nf" +
                "unction dec_notification_counter() {\n  var count = storage.getItem(counter_ke" +
                "y) || 0;\n\n  if (count > 0) {\n    storage.setItem(counter_key, --count);\n  " +
                "  (0, _jquery[\"default\"])(\".badge-notification\").text(count);\n  } // Alwa" +
                "ys clear if count is 0\n\n\n  if (count == 0) {\n    clear_notification_counte" +
                "r();\n  }\n}\n\nfunction clear_notification_counter() {\n  storage.setItem(cou" +
                "nter_key, 0);\n  (0, _jquery[\"default\"])(\".badge-notification\").empty();\n" +
                "}\n\nfunction copyToClipboard(event, selector) {\n  // Select element\n  (0, _" +
                "jquery[\"default\"])(selector).select(); // Copy to clipboard\n\n  document.ex" +
                "ecCommand(\"copy\"); // Show tooltip to user\n\n  (0, _jquery[\"default\"])(ev" +
                "ent.target).tooltip({\n    title: \"Copied!\",\n    trigger: \"manual\"\n  });" +
                "\n  (0, _jquery[\"default\"])(event.target).tooltip(\"show\");\n  setTimeout(f" +
                "unction () {\n    (0, _jquery[\"default\"])(event.target).tooltip(\"hide\");\n" +
                "  }, 1500);\n}\n\nfunction makeSortableTables() {\n  (0, _jquery[\"default\"])" +
                "(\"th.sort-col\").append(\" <i class=\\\"fas fa-sort\\\"></i>\");\n  (0, _jque" +
                "ry[\"default\"])(\"th.sort-col\").click(function () {\n    var table = (0, _jq" +
                "uery[\"default\"])(this).parents(\"table\").eq(0);\n    var rows = table.find(" +
                "\"tr:gt(0)\").toArray().sort(comparer((0, _jquery[\"default\"])(this).index())" +
                ");\n    this.asc = !this.asc;\n\n    if (!this.asc) {\n      rows = rows.rever" +
                "se();\n    }\n\n    for (var i = 0; i < rows.length; i++) {\n      table.appen" +
                "d(rows[i]);\n    }\n  });\n\n  function comparer(index) {\n    return function" +
                " (a, b) {\n      var valA = getCellValue(a, index),\n          valB = getCellV" +
                "alue(b, index);\n      return _jquery[\"default\"].isNumeric(valA) && _jquery[" +
                "\"default\"].isNumeric(valB) ? valA - valB : valA.toString().localeCompare(val" +
                "B);\n    };\n  }\n\n  function getCellValue(row, index) {\n    return (0, _jqu" +
                "ery[\"default\"])(row).children(\"td\").eq(index).text();\n  }\n}\n\n//# sourc" +
                "eURL=webpack:///./CTFd/themes/xmas/assets/js/utils.js?"
            );

            /***/
        })

    }
]);