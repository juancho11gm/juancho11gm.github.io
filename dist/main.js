/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/banner.jpg */ \"./assets/banner.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".circles {\\n  bottom: 0;\\n  left: 0;\\n  padding: 0;\\n  position: fixed;\\n  right: 0;\\n  z-index: 0; }\\n\\n.circles li {\\n  animation: animate 25s linear infinite;\\n  background: var(--circles-color);\\n  border-radius: 40%;\\n  bottom: -200px;\\n  display: block;\\n  height: 20px;\\n  list-style: none;\\n  position: absolute;\\n  width: 20px; }\\n\\n.circles li:nth-child(1) {\\n  animation-delay: 0s;\\n  height: 80px;\\n  left: 25%;\\n  width: 80px; }\\n\\n.circles li:nth-child(2) {\\n  animation-delay: 2s;\\n  animation-duration: 12s;\\n  height: 20px;\\n  left: 10%;\\n  width: 20px; }\\n\\n.circles li:nth-child(3) {\\n  animation-delay: 4s;\\n  height: 20px;\\n  left: 70%;\\n  width: 20px; }\\n\\n.circles li:nth-child(4) {\\n  animation-delay: 0s;\\n  animation-duration: 18s;\\n  height: 60px;\\n  left: 40%;\\n  width: 60px; }\\n\\n.circles li:nth-child(5) {\\n  animation-delay: 0s;\\n  height: 20px;\\n  left: 65%;\\n  width: 20px; }\\n\\n.circles li:nth-child(6) {\\n  animation-delay: 3s;\\n  height: 110px;\\n  left: 75%;\\n  width: 110px; }\\n\\n.circles li:nth-child(7) {\\n  animation-delay: 7s;\\n  height: 150px;\\n  left: 35%;\\n  width: 150px; }\\n\\n.circles li:nth-child(8) {\\n  animation-delay: 15s;\\n  animation-duration: 45s;\\n  height: 25px;\\n  left: 50%;\\n  width: 25px; }\\n\\n.circles li:nth-child(9) {\\n  animation-delay: 2s;\\n  animation-duration: 35s;\\n  height: 15px;\\n  left: 20%;\\n  width: 15px; }\\n\\n.circles li:nth-child(10) {\\n  animation-delay: 0s;\\n  animation-duration: 11s;\\n  height: 150px;\\n  left: -5%;\\n  width: 150px; }\\n\\n.header {\\n  align-items: center;\\n  display: flex;\\n  flex-direction: column;\\n  height: 100vh;\\n  justify-content: center;\\n  z-index: 2; }\\n  .header__logo {\\n    background-color: transparent; }\\n  .header__nav {\\n    background: var(--html-bg-color);\\n    border-bottom: 1px solid var(--html-f-color);\\n    color: var(--html-f-color);\\n    font-family: 'Amatic SC', cursive;\\n    height: 6vh;\\n    left: 0;\\n    position: fixed;\\n    right: 0;\\n    top: 0;\\n    z-index: 4; }\\n    @media screen and (orientation: landscape) and (max-width: 1024px) {\\n      .header__nav {\\n        height: 10vh; } }\\n  .header__routes:first-child {\\n    align-items: center;\\n    background: var(--html-bg-color);\\n    display: flex;\\n    height: 100%;\\n    justify-content: space-between;\\n    margin: 0;\\n    padding-left: 1rem; }\\n  .header__routes__list {\\n    left: 0;\\n    margin: 0;\\n    opacity: 0;\\n    padding: 0;\\n    position: absolute;\\n    right: 0;\\n    text-align: center;\\n    visibility: hidden; }\\n    .header__routes__list .header__route {\\n      border: 1px solid var(--html-f-color); }\\n    .header__routes__list .header__link:hover,\\n    .header__routes__list .header__logo:hover {\\n      font-size: 1.8rem; }\\n    .header__routes__list.showing {\\n      opacity: 1;\\n      transition: opacity 0.5s linear;\\n      visibility: visible; }\\n  .header__route {\\n    background: var(--html-bg-color);\\n    list-style-type: none; }\\n  .header__link {\\n    color: inherit;\\n    font-size: 1.5rem;\\n    text-decoration: none;\\n    transition: 0.25s ease-in; }\\n    @media screen and (orientation: landscape) and (max-width: 1024px) {\\n      .header__link {\\n        font-size: 1.5rem; } }\\n\\n.hamburger-menu {\\n  height: 60%;\\n  position: relative;\\n  width: 30px; }\\n  .hamburger-menu__toggler {\\n    cursor: pointer;\\n    height: 100%;\\n    margin: 0;\\n    opacity: 0;\\n    position: absolute;\\n    right: 70%;\\n    top: 0;\\n    width: 100%;\\n    z-index: 2; }\\n    .hamburger-menu__toggler:checked + .hamburger-menu__icon-container > .hamburger-menu_icon:before,\\n    .hamburger-menu__toggler:checked + .hamburger-menu__icon-container > .hamburger-menu_icon:after {\\n      top: 0;\\n      transform: rotate(90deg); }\\n    .hamburger-menu__toggler:checked:hover + .hamburger-menu__icon-container > .hamburger-menu__icon {\\n      transform: rotate(225deg); }\\n  .hamburger-menu__icon-container {\\n    box-sizing: border-box;\\n    height: 100%;\\n    position: absolute;\\n    right: 70%;\\n    width: 100%; }\\n  .hamburger-menu__icon {\\n    background: var(--html-f-color);\\n    height: 4px;\\n    position: absolute;\\n    top: 45%;\\n    transition: all 0.4s ease;\\n    width: 100%; }\\n    .hamburger-menu__icon::before, .hamburger-menu__icon::after {\\n      content: '';\\n      background: var(--html-f-color);\\n      height: 4px;\\n      position: absolute;\\n      top: -8px;\\n      width: 100%; }\\n    .hamburger-menu__icon::after {\\n      top: 8px; }\\n\\n.footer {\\n  color: var(--html-f-color);\\n  padding: 1.5rem;\\n  text-align: center; }\\n  .footer__description {\\n    margin: 0; }\\n  .footer .icons__item {\\n    display: inline-block; }\\n  .footer .icons__link {\\n    border-radius: 100%;\\n    color: #747a80;\\n    display: inline-block;\\n    height: 60px;\\n    line-height: 74px;\\n    transition: all 0.2s linear;\\n    width: 60px; }\\n    .footer .icons__link:active, .footer .icons__link:focus, .footer .icons__link:hover {\\n      color: #fff;\\n      background-color: #29aafe; }\\n    .footer .icons__link-github:hover {\\n      background-color: #24292e; }\\n    .footer .icons__link-linkedin:hover {\\n      background-color: #007bb6; }\\n  .footer .icons__i {\\n    height: 2rem;\\n    width: 2rem; }\\n  .footer .fa.fa-github,\\n  .footer .fa.fa-linkedin {\\n    font-size: 2rem;\\n    margin: 0; }\\n\\n.hero {\\n  align-items: center;\\n  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-attachment: fixed;\\n  background-position: 60% 90%;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  display: flex;\\n  flex-direction: column;\\n  height: 100vh;\\n  justify-content: center;\\n  text-align: center;\\n  width: 100%; }\\n  .hero__title {\\n    animation: translate 2s ease forwards;\\n    font-family: 'Amatic SC', cursive;\\n    font-size: 2.5em;\\n    margin: 0;\\n    max-width: 700px;\\n    --x-translate: 0%;\\n    --y-translate: -600%; }\\n  .hero__description {\\n    font-size: 1.5rem; }\\n  .hero__arrow-down {\\n    animation: bounce 2s infinite;\\n    bottom: 0;\\n    position: absolute;\\n    width: 60px; }\\n\\n.mode-icon {\\n  bottom: 1rem;\\n  position: fixed;\\n  right: 1rem;\\n  z-index: 4; }\\n  .mode-icon__switch {\\n    display: inline-block;\\n    height: 34px;\\n    position: relative;\\n    width: 60px; }\\n  .mode-icon__input {\\n    height: 0;\\n    opacity: 0;\\n    width: 0; }\\n    .mode-icon__input:checked + .mode-icon__slider {\\n      background-color: grey; }\\n    .mode-icon__input:focus + .mode-icon__slider {\\n      box-shadow: 0 0 1px var(--html--light-color); }\\n    .mode-icon__input:checked + .mode-icon__slider:before {\\n      transform: translateX(26px); }\\n  .mode-icon__slider {\\n    background-color: #2b2828;\\n    border-radius: 34px;\\n    bottom: 0;\\n    cursor: pointer;\\n    left: 0;\\n    position: absolute;\\n    right: 0;\\n    top: 0;\\n    transition: 0.4s; }\\n    .mode-icon__slider:before {\\n      border-radius: 50%;\\n      background-color: white;\\n      bottom: 4px;\\n      content: '';\\n      height: 26px;\\n      left: 4px;\\n      position: absolute;\\n      transition: 0.4s;\\n      width: 26px; }\\n\\n.btn.btn-github {\\n  border: none;\\n  display: inline;\\n  margin: 0 0 1rem 1rem; }\\n\\n.btn {\\n  background: linear-gradient(-45deg, #4c6cd3, #27326d);\\n  border: 0;\\n  border-radius: 50px;\\n  box-shadow: 0 0 25px 0 rgba(38, 42, 97, 0.3);\\n  color: lightyellow;\\n  cursor: pointer;\\n  font-size: 1.3rem;\\n  outline: none;\\n  margin-top: 20px;\\n  padding: 0.3rem 2rem; }\\n\\n.btn.btn-contact {\\n  line-height: 35px;\\n  margin: 0; }\\n\\n.btn:hover,\\n.btn:focus {\\n  box-shadow: 0 0 10px 0 #27326d; }\\n\\n.btn.btn-github {\\n  margin-left: 1rem;\\n  position: relative; }\\n\\n.btn.btn-resume {\\n  display: block;\\n  margin: 0 auto; }\\n\\n@keyframes translate {\\n  from {\\n    transform: translate(var(--x-translate), var(--y-translate)); } }\\n\\n@keyframes bounce {\\n  0% {\\n    transform: translate3d(0px, 0px, 0); }\\n  50% {\\n    transform: translate3d(0px, -8px, 0); }\\n  100% {\\n    transform: translate3d(0px, 0px, 0); } }\\n\\n@keyframes img-appears {\\n  0% {\\n    opacity: 0; }\\n  100% {\\n    opacity: 1; } }\\n\\n@keyframes animate {\\n  0% {\\n    opacity: 0.5;\\n    transform: translateY(0) rotate(0deg); }\\n  100% {\\n    opacity: 0;\\n    transform: translateY(-1000px) rotate(720deg); } }\\n\\n.contact-form {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  margin: 0 auto;\\n  text-align: start;\\n  width: 90%; }\\n  .contact-form.hide-form {\\n    display: none; }\\n  .contact-form__label {\\n    color: var(--html-f-color);\\n    margin-bottom: 18px; }\\n  .contact-form__input {\\n    border: none;\\n    border-bottom: 1px solid grey;\\n    font-size: 1rem;\\n    outline: none;\\n    padding: 5px;\\n    margin-bottom: 12px; }\\n  .contact-form__input:focus, .contact-form__textarea:focus {\\n    border-color: purple;\\n    border-width: 2px; }\\n  .contact-form__textarea {\\n    border-radius: 1rem;\\n    max-width: 95%;\\n    outline: none;\\n    padding: 1.5rem;\\n    resize: none; }\\n\\n.contact-info {\\n  align-content: center;\\n  display: flex;\\n  flex-direction: column; }\\n\\n.name-validation-error .name-error,\\n.email-validation-error .email-error,\\n.message-validation-error .message-error {\\n  color: red;\\n  display: block; }\\n\\n.name-error,\\n.email-error,\\n.message-error {\\n  display: none;\\n  margin-top: 0; }\\n\\n.answers-saved {\\n  display: none;\\n  text-align: center; }\\n\\n.answers-validation + .answers-saved {\\n  display: block; }\\n\\n.side-icon-box {\\n  display: flex; }\\n\\n.side-icon-box a {\\n  color: inherit;\\n  display: block;\\n  text-decoration: none; }\\n\\n.side-icon i {\\n  font-size: 2rem;\\n  height: 50px;\\n  padding-top: 1rem;\\n  padding-right: 1rem; }\\n\\n.side-icon-box .email {\\n  font-size: 0.8rem; }\\n\\n.side-icon-boxes {\\n  margin: 2rem 0 0 0;\\n  max-width: 95%; }\\n\\n.profilepic {\\n  animation: bounce 2s infinite;\\n  border-radius: 50%;\\n  display: block;\\n  margin: 0 auto;\\n  width: 35%; }\\n\\n.profilepic:hover {\\n  box-shadow: #0f1f57 0 0 15px;\\n  transform: scale(1.05); }\\n\\n.article {\\n  background: var(--html-bg-color);\\n  border-radius: 20px;\\n  box-shadow: 0 0 25px 0 rgba(38, 42, 97, 0.3);\\n  font-size: var(--html-font-size);\\n  margin: 2rem 1rem;\\n  padding: 2rem;\\n  text-align: justify;\\n  transition: all 500ms ease;\\n  width: 80%; }\\n  .article--aboutme {\\n    align-items: center;\\n    display: block; }\\n  .article--tech {\\n    align-items: center;\\n    box-sizing: border-box;\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    padding: 0 0 1rem 0;\\n    text-align: center; }\\n  .article__figure--tech {\\n    height: 80px;\\n    margin: 1rem 2rem;\\n    transition: all 0.2s ease-in;\\n    width: 20%; }\\n    .article__figure--tech p {\\n      font-size: 0.8rem;\\n      margin: 0.5rem; }\\n    .article__figure--tech img {\\n      display: inline-block;\\n      height: 100%;\\n      min-width: 100%;\\n      object-fit: contain;\\n      vertical-align: middle;\\n      width: 100%; }\\n  .article .tech-container-item .tech-container-item:hover {\\n    transform: scale(1.1); }\\n  .article__img {\\n    border-radius: 1.5rem;\\n    display: block;\\n    height: auto;\\n    margin: 1rem auto;\\n    object-fit: contain;\\n    width: 60%; }\\n  .article__img:hover {\\n    animation: bounce 2s infinite; }\\n  .article__time {\\n    color: #666666;\\n    font-weight: normal; }\\n  .article__figcaption {\\n    font-size: 1rem; }\\n\\n.section--projects {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  margin-top: 2rem; }\\n  .section--projects__figure {\\n    max-width: 90%;\\n    position: relative;\\n    text-align: justify; }\\n    .section--projects__figure:hover .section--projects__figcaption {\\n      opacity: 1;\\n      visibility: visible; }\\n  .section--projects__img {\\n    display: block;\\n    max-width: 100%;\\n    margin: 0;\\n    object-fit: contain;\\n    border-radius: 20px;\\n    box-shadow: 0 0 25px 0 rgba(38, 42, 97, 0.3); }\\n  .section--projects__title {\\n    display: inline-block;\\n    margin-top: 1rem; }\\n  .section--projects__figcaption {\\n    background-color: var(--html-bg-color);\\n    box-sizing: border-box;\\n    font-size: 1.25rem;\\n    height: 100%;\\n    margin: 0;\\n    width: 100%;\\n    opacity: 0;\\n    overflow-y: auto;\\n    padding: 0 20px;\\n    position: absolute;\\n    top: 0;\\n    transition: all 0.45s ease-in-out;\\n    visibility: hidden;\\n    z-index: 2;\\n    border-radius: 20px;\\n    box-shadow: 0 0 25px 0 rgba(38, 42, 97, 0.3); }\\n    .section--projects__figcaption::before {\\n      background-color: var(--html-bg-color);\\n      content: '';\\n      height: 100%;\\n      width: 100%;\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      z-index: -1; }\\n\\n.project-tool {\\n  background-color: var(--html-f-color);\\n  border-radius: 0.3em;\\n  box-shadow: 0 0 5px 0 var(--html-f-color);\\n  color: var(--html-bg-color);\\n  display: inline-block;\\n  margin: 0.3em;\\n  margin-bottom: 0.1em;\\n  padding: 0.3em; }\\n\\n:root {\\n  --circles-color: #27326d;\\n  --f-color: #eceeef;\\n  --html--light-color: #f6f7ff;\\n  --html-bg-color: #ffffff;\\n  --html-f-color: #24292e;\\n  --html-font-size: 1rem;\\n  --light-bg: #ffffff;\\n  scroll-behavior: smooth;\\n  scroll-padding-top: var(6vh); }\\n\\nbody,\\nhtml {\\n  background-image: linear-gradient(-45deg, var(--html-bg-color), var(--html--light-color));\\n  color: var(--f-color);\\n  font-family: 'Poppins', sans-serif;\\n  margin: 0;\\n  padding: 0; }\\n\\nh4 {\\n  margin: 0; }\\n\\n.main-content {\\n  color: var(--html-f-color);\\n  text-align: center; }\\n\\n.main-content,\\n.article,\\n.footer {\\n  position: relative;\\n  z-index: 2; }\\n\\n.section--work .article {\\n  margin: 2rem; }\\n\\n.section__title {\\n  border-bottom: 3px solid rebeccapurple;\\n  color: #24292e;\\n  display: inline-block;\\n  font-family: 'Shadows Into Light', cursive;\\n  font-size: 3rem;\\n  font-size: 2.5rem;\\n  margin: 2rem 0; }\\n\\n.section__description {\\n  margin: 0 1rem;\\n  text-align: center; }\\n\\n@media screen and (min-width: 1024px) {\\n  .btn.btn-resume {\\n    margin: 0; }\\n  .btn.btn-send {\\n    margin: auto;\\n    margin-top: 2rem;\\n    width: 80%; }\\n  .article__description {\\n    margin: 0 0 0 3rem; }\\n  .article--aboutme {\\n    display: flex; }\\n  .article-form {\\n    width: 60%; }\\n  .article--tech {\\n    padding: 1.5rem 0; }\\n  .section--work {\\n    display: flex;\\n    justify-content: center; } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://juancho11gm.github.io/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://juancho11gm.github.io/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://juancho11gm.github.io/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://juancho11gm.github.io/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://juancho11gm.github.io/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://juancho11gm.github.io/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://juancho11gm.github.io/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://juancho11gm.github.io/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://juancho11gm.github.io/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://juancho11gm.github.io/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://juancho11gm.github.io/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/animations/index.js":
/*!*********************************!*\
  !*** ./src/animations/index.js ***!
  \*********************************/
/***/ (() => {

eval("const tl = gsap.timeline();\r\nconst mySplitText = new SplitText('.hero__title', { type: 'words,chars' });\r\nconst chars = mySplitText.chars;\r\n\r\ngsap.set('.hero__title', { perspective: 400 });\r\n\r\ntl.from(\r\n  chars,\r\n  {\r\n    duration: 0.8,\r\n    opacity: 0,\r\n    scale: 0,\r\n    y: 80,\r\n    rotationX: 180,\r\n    transformOrigin: '0% 50% -50',\r\n    ease: 'back',\r\n    stagger: 0.01,\r\n  },\r\n  '+=0'\r\n);\r\n\n\n//# sourceURL=webpack://juancho11gm.github.io/./src/animations/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _animations_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/index.js */ \"./src/animations/index.js\");\n/* harmony import */ var _animations_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_animations_index_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n(() => {\r\n  const routes = document.querySelector('.header__routes__list');\r\n  const btnNav = document.querySelector('.hamburger-menu__toggler');\r\n  const btnResume = document.querySelector('.btn.btn-resume');\r\n  const btnSubmit = document.querySelector('.btn.btn-send');\r\n  const sliderDarkMode = document.getElementById('dark-mode');\r\n  const contactForm = document.querySelector('.contact-form');\r\n  const name = document.getElementById('name');\r\n  const email = document.getElementById('email');\r\n  const message = document.getElementById('message');\r\n  const ANSWERS_URL = 'https://juansebastian-portfolio.herokuapp.com/contact';\r\n  const ANSWERS_CLASS = 'answers-validation';\r\n  const EMAIL_CLASS = 'email-validation-error';\r\n  const FORM_CLASS = 'hide-form';\r\n  const MESSAGE_CLASS = 'message-validation-error';\r\n  const NAME_CLASS = 'name-validation-error';\r\n  const CV_URL =\r\n    'https://drive.google.com/file/d/1inHHFdEUMQqsZuiBpE1hFgFjLgCOlFtS/view?usp=sharing';\r\n  let formSent = false;\r\n\r\n  function darkMode(event) {\r\n    if (event.target.checked) {\r\n      document.documentElement.style.setProperty('--html-bg-color', '#24292e');\r\n      document.documentElement.style.setProperty('--html-f-color', 'white');\r\n      document.documentElement.style.setProperty('--circles-color', '#24292e');\r\n      return;\r\n    }\r\n    document.documentElement.style.setProperty('--html-bg-color', 'white');\r\n    document.documentElement.style.setProperty('--html-f-color', '#24292e');\r\n    document.documentElement.style.setProperty('--circles-color', '#27326d');\r\n  }\r\n\r\n  function openResumePDF() {\r\n    window.open(CV_URL, '_blank');\r\n  }\r\n\r\n  function showNav() {\r\n    if (routes.classList.contains('showing')) {\r\n      routes.classList.remove('showing');\r\n      btnNav.setAttribute('aria-expanded', false);\r\n      return;\r\n    }\r\n    routes.classList.add('showing');\r\n    btnNav.setAttribute('aria-expanded', true);\r\n  }\r\n\r\n  function validateForm(nameValue, emailValue, messageValue) {\r\n    let valid = true;\r\n    !nameValue\r\n      ? (contactForm.classList.add(NAME_CLASS), (valid = false))\r\n      : contactForm.classList.remove(NAME_CLASS);\r\n    !emailValue\r\n      ? (contactForm.classList.add(EMAIL_CLASS), (valid = false))\r\n      : contactForm.classList.remove(EMAIL_CLASS);\r\n    !messageValue\r\n      ? (contactForm.classList.add(MESSAGE_CLASS), (valid = false))\r\n      : contactForm.classList.remove(MESSAGE_CLASS);\r\n    return valid;\r\n  }\r\n\r\n  async function saveAnswers({\r\n    nameValue: name,\r\n    emailValue: email,\r\n    messageValue: message,\r\n  }) {\r\n    formSent = true;\r\n    const response = await fetch(ANSWERS_URL, {\r\n      method: 'POST',\r\n      //mode:'no-cors',\r\n      headers: {\r\n        Accept: 'application/json',\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify({\r\n        name,\r\n        email,\r\n        message,\r\n        date: new Date(),\r\n      }),\r\n    }).then((data) => {\r\n      if (data['ok']) {\r\n        contactForm.classList.add(ANSWERS_CLASS); //show message answers were successfully saved\r\n        contactForm.classList.add(FORM_CLASS); //hide form\r\n        contactForm.reset(); //reset form\r\n      }\r\n      btnSubmit.disabled = false;\r\n      btnSubmit.textContent = 'Send';\r\n      formSent = false;\r\n    });\r\n  }\r\n\r\n  function sendForm(event) {\r\n    event.preventDefault();\r\n    const nameValue = name.value;\r\n    const emailValue = email.value;\r\n    const messageValue = message.value;\r\n    if (validateForm(nameValue, emailValue, messageValue)) {\r\n      let answers = {\r\n        nameValue,\r\n        emailValue,\r\n        messageValue,\r\n      };\r\n      if (!formSent) {\r\n        btnSubmit.textContent = 'Sending...';\r\n        btnSubmit.disabled = true;\r\n        saveAnswers(answers);\r\n      }\r\n    }\r\n  }\r\n\r\n  sliderDarkMode.addEventListener('change', (event) => darkMode(event));\r\n  btnNav.addEventListener('click', showNav);\r\n  btnNav.addEventListener('keyup', function (event) {\r\n    if (event.keyCode === 13) {\r\n      showNav();\r\n    }\r\n  });\r\n  btnResume.addEventListener('click', openResumePDF);\r\n  contactForm.addEventListener('submit', sendForm);\r\n})();\r\n\n\n//# sourceURL=webpack://juancho11gm.github.io/./src/index.js?");

/***/ }),

/***/ "./assets/banner.jpg":
/*!***************************!*\
  !*** ./assets/banner.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d3d550e3aeca8dfc61b3.jpg\";\n\n//# sourceURL=webpack://juancho11gm.github.io/./assets/banner.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;