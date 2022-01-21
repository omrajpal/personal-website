(()=>{"use strict";var e,t={"./src/index.js":(e,t,n)=>{var r,o=n("./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js"),c=n("./node_modules/react/index.js"),a=n("./node_modules/redux/es/redux.js"),u=n("./node_modules/redux-thunk/es/index.js"),l=n("./node_modules/redux-actions/es/createAction.js"),i=n("./node_modules/redux-actions/es/handleActions.js");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d="sample",y="".concat(d,"/UPDATE"),m="".concat(d,"/RESET"),b=(0,l.Z)(y),v=(0,l.Z)(m),h={sampleValue:0},O=(0,i.Z)((p(r={},m,(function(){return f({},h)})),p(r,y,(function(e){var t=e.sampleValue;return f(f({},e),{},{sampleValue:t+1})})),r),h),j=function(e){return function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).sample||{}}(e).sampleValue||h.sampleValue};function E(){return(0,a.UY)((n=O,(t=d)in(e={})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));var e,t,n}var w=n("./node_modules/react-dom/index.js"),g=n("./node_modules/prop-types/index.js"),P=n.n(g);const _="xoixI";function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function S(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,e);var t,n,r,o=T(a);function a(){return k(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"componentDidMount",value:function(){var e=new CustomEvent("appReady",{bubbles:!0,cancelable:!1});document.dispatchEvent(e)}},{key:"render",value:function(){var e=this.props.children;return c.createElement("div",{className:_},e)}}])&&R(t.prototype,n),r&&R(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(c.Component);D(B,"propTypes",{children:P().oneOfType([P().arrayOf(P().node),P().node])}),D(B,"defaultProps",{children:null});const V="Fj+XV";function A(e){var t=e.children;return c.createElement("div",{className:V},t)}A.propTypes={children:P().oneOfType([P().arrayOf(P().node),P().node])},A.defaultProps={children:null};var Z=n("./node_modules/react-router-dom/index.js");const U="a+FDI";function I(e){var t=e.children,n=e.onClick,r=e.to;return r?c.createElement(Z.rU,{className:U,to:r},t):c.createElement("button",{className:U,type:"button",onClick:n},t)}I.propTypes={children:P().oneOfType([P().arrayOf(P().node),P().node]),onClick:P().func,to:P().string},I.defaultProps={children:null,onClick:null,to:""};var z=n("./node_modules/classnames/index.js"),F=n.n(z);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,t){return Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Q(e,t)}function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=G(e);if(t){var o=G(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Y(this,n)}}function Y(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Q(e,t)}(a,e);var t,n,r,o=X(a);function a(){return M(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"getClassName",value:function(){var e=this.props,t=e.className,n=e.name;return F()("fa","fa-fw",t,H({},"fa-".concat(n),n))}},{key:"render",value:function(){var e=this.getClassName();return c.createElement("i",{className:e,"aria-hidden":"true"})}}])&&W(t.prototype,n),r&&W(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(c.Component);H(K,"propTypes",{className:P().string,name:P().string}),H(K,"defaultProps",{className:"",name:"bell-o"});var L=n("./node_modules/react-router/index.js"),$="/",q="redux";function ee(){return c.createElement(B,null,c.createElement(A,null,c.createElement(I,{to:$},c.createElement(K,{name:"home"})),c.createElement(I,{to:q},c.createElement(K,{name:"database"}))),c.createElement(L.j3,null))}var te=n("./node_modules/react-redux/es/index.js");const ne="_4Druk";function re(e){var t=e.children,n=e.onClick;return c.createElement("button",{className:ne,type:"button",onClick:n},t)}re.propTypes={children:P().oneOfType([P().arrayOf(P().node),P().node]),onClick:P().func},re.defaultProps={children:null,onClick:null};const oe="jAb1O",ce="G64QZ";function ae(e){return ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae(e)}function ue(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ie(e,t){return ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ie(e,t)}function se(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=pe(e);if(t){var o=pe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return fe(this,n)}}function fe(e,t){if(t&&("object"===ae(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function pe(e){return pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},pe(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ye=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ie(e,t)}(a,e);var t,n,r,o=se(a);function a(){return ue(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"getClassNames",value:function(){var e=this.props,t=e.centerContent,n=e.className;return F()("animated","fadeIn",n,oe,de({},ce,t))}},{key:"render",value:function(){var e=this.props.children,t=this.getClassNames();return c.createElement("div",{className:t},e)}}])&&le(t.prototype,n),r&&le(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(c.Component);de(ye,"propTypes",{centerContent:P().bool,children:P().oneOfType([P().arrayOf(P().node),P().node]),className:P().string}),de(ye,"defaultProps",{centerContent:!1,children:null,className:""});const me="uP46z";function be(e){var t=e.reset,n=e.update,r=e.value;return c.createElement(ye,{className:me},c.createElement("h1",null,"REDUX"),c.createElement("p",null,"Redux is a predictable state container for JavaScript apps."),c.createElement("p",null,"This application includes ",c.createElement("strong",null,"React-Redux")," along with a sample reducer and action set following the"," ",c.createElement("a",{href:"https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c",target:"_blank",rel:"noopener noreferrer"},"Redux Duck Pattern"),"."),c.createElement("h2",null,"Redux Value:",r),c.createElement("p",null,"Click the following buttons to update and reset the value stored in the Redux store. Note that you can leave this page and return and the value will be saved."),c.createElement(re,{onClick:n},"Update"),c.createElement(re,{onClick:t},"Reset"))}be.propTypes={reset:P().func,update:P().func,value:P().number},be.defaultProps={reset:function(){},update:function(){},value:0};var ve={update:b,reset:v},he=(0,te.$j)((function(e){return{value:j(e)}}),ve)(be);const Oe="Hd2Yv",je="_3i5Qv";function Ee(){return c.createElement(ye,{centerContent:!0,className:Oe},c.createElement("div",{className:je},c.createElement("h1",null,c.createElement("strong",null,"Front-End")," Starter"),c.createElement("p",null,"This project is designed to get you up and running with your next front-end, JavaScript application faster than ever! This project includes ",c.createElement("strong",null,"React"),", ",c.createElement("strong",null,"Redux"),", and many other utilities for easily maintaining a front-end application.")))}const we=JSON.parse('{"u2":"front-end-starter"}');var ge="production"===n("./node_modules/process/browser.js").env.BABEL_ENV?we.u2:"";function Pe(e){var t=e.store;return c.createElement(te.zt,{store:t},c.createElement(Z.VK,{basename:ge},c.createElement(L.Z5,null,c.createElement(L.AW,{path:"/",element:c.createElement(ee,null)},c.createElement(L.AW,{path:$,element:c.createElement(Ee,null)}),c.createElement(L.AW,{path:q,element:c.createElement(he,null)})))))}Pe.propTypes={store:P().object},Pe.defaultProps={store:null};var _e,xe=(0,a.MT)(E(),(0,a.md)(u.Z));_e=Pe,(0,w.render)(c.createElement(o.zj,null,c.createElement(_e,{store:xe})),document.getElementById("app"))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=(t,n,o,c)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,o,c]=e[s],u=!0,l=0;l<n.length;l++)(!1&c||a>=c)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(u=!1,c<a&&(a=c));if(u){e.splice(s--,1);var i=o();void 0!==i&&(t=i)}}return t}c=c||0;for(var s=e.length;s>0&&e[s-1][2]>c;s--)e[s]=e[s-1];e[s]=[n,o,c]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,c,[a,u,l]=n,i=0;if(a.some((t=>0!==e[t]))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(l)var s=l(r)}for(t&&t(n);i<a.length;i++)c=a[i],r.o(e,c)&&e[c]&&e[c][0](),e[a[i]]=0;return r.O(s)},n=self.webpackChunkfront_end_starter=self.webpackChunkfront_end_starter||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[736],(()=>r("./src/index.js")));o=r.O(o)})();