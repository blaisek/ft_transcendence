"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktranscendence"] = self["webpackChunktranscendence"] || []).push([["views_Login_js"],{

/***/ "./views/Login.js":
/*!************************!*\
  !*** ./views/Login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractView.js */ \"./views/AbstractView.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(params) {\n        super(params);\n        this.setTitle(\"Login\");\n    }\n\n    async getHtml() {\n        return `\n        <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n                <h2 class=\"text-center mt-5\">Login</h2>\n                <div class=\"card my-5\">\n                    <div class=\"card-body\">\n                        <form id=\"login-form\">\n                            <div class=\"form-group\">\n                                <label for=\"username\">Username</label>\n                                <input type=\"username\" class=\"form-control\" name=\"username\" aria-describedby=\"emailHelp\" placeholder=\"Enter username\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"password\">Password</label>\n                                <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n                            <p class=\"mt-3\">\n                                don't have an account? <a href=\"/signup\" data-link>Sign Up here</a>\n                            </p>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n        `;\n    }\n    \n    async initialize() {\n\n\n        // Render HTML\n        document.getElementById(\"app\").innerHTML = await this.getHtml();\n\n        // Get login form\n        const form = document.getElementById(\"login-form\");\n        console.log(\"initialized!!!\");\n\n        // Add submit handler\n        form.addEventListener('submit', this.loginUser);\n\n    }\n\n    async loginUser(event) {\n\n        const serverIP = www.transcendence.ch //window.location.hostname;\n        console.log(serverIP);\n\n        event.preventDefault();\n        console.log(this);\n\n        const form = event.target;\n        // console.log('Form Element:', form);\n\n        // Log input values\n        const inputs = form.elements;\n\n        // for (let input of inputs) {\n        //     console.log(input.name, ':', input.value);\n        // }\n        const formData = new FormData(form);\n        // console.log(formData.get(\"username\"));\n\n        const searchParams = new URLSearchParams(formData);\n\n        const redirect = (path) => {\n            window.location = path;\n        };\n\n\n        try {\n            const response = await fetch('https://' + serverIP + '/login/', {\n                method: 'POST',\n                body: searchParams,\n                headers: {\n                    'Content-Type': 'application/x-www-form-urlencoded'\n                }\n            });\n\n            if (response.ok) {\n                console.log('Login successful!');\n                redirect('/home');\n            } else {\n                console.log('Login failed!');\n                console.log(response.statusText);\n            }\n\n        } catch (error) {\n            console.log(error);\n        }\n\n    }\n\n});\n\n// document.addEventListener('DOMContentLoaded', () => {\n//     const loginView = new LoginView();\n//     loginView.initialize();\n// });\n\n//# sourceURL=webpack://transcendence/./views/Login.js?");

/***/ })

}]);