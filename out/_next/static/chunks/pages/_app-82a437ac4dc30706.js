(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7331)}])},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(i){a=!0,l=i}finally{try{r||null==s.return||s.return()}finally{if(a)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,l=(a=n(7294))&&a.__esModule?a:{default:a},o=n(6273),s=n(387),i=n(7190);var c={};function u(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,a=s.useRouter(),d=l.default.useMemo((function(){var t=r(o.resolveHref(a,e.href,!0),2),n=t[0],l=t[1];return{href:n,as:e.as?o.resolveHref(a,e.as):l||n}}),[a,e.href,e.as]),f=d.href,m=d.as,h=e.children,v=e.replace,p=e.shallow,y=e.scroll,g=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var x=(t=l.default.Children.only(h))&&"object"===typeof t&&t.ref,b=r(i.useIntersection({rootMargin:"200px"}),2),w=b[0],j=b[1],E=l.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);l.default.useEffect((function(){var e=j&&n&&o.isLocalURL(f),t="undefined"!==typeof g?g:a&&a.locale,r=c[f+"%"+m+(t?"%"+t:"")];e&&!r&&u(a,f,m,{locale:t})}),[m,f,j,g,n,a]);var k={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,l,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](n,r,{shallow:l,locale:i,scroll:s}))}(e,a,f,m,v,p,y,g)},onMouseEnter:function(e){o.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,f,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof g?g:a&&a.locale,M=a&&a.isLocaleDomain&&o.getDomainLocale(m,C,a&&a.locales,a&&a.domainLocales);k.href=M||o.addBasePath(o.addLocale(m,C,a&&a.defaultLocale))}return l.default.cloneElement(t,k)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(i){a=!0,l=i}finally{try{r||null==s.return||s.return()}finally{if(a)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,i=a.useRef(),c=r(a.useState(!1),2),u=c[0],d=c[1],f=a.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||u||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,l=r.observer,o=r.elements;return o.set(e,t),l.observe(e),function(){o.delete(e),l.unobserve(e),0===o.size&&(l.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return a.useEffect((function(){if(!o&&!u){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[u]),[f,u]};var a=n(7294),l=n(9311),o="undefined"!==typeof IntersectionObserver;var s=new Map},7331:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),a=n(7294),l=n(9008);const o=(0,a.createContext)({setTheme:e=>{},themes:[]}),s=["light","dark"],i="(prefers-color-scheme: dark)",c=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:l="theme",themes:c=["light","dark"],defaultTheme:h=(n?"system":"light"),attribute:v="data-theme",value:p,children:y})=>{const[g,x]=(0,a.useState)((()=>d(l,h))),[b,w]=(0,a.useState)((()=>d(l))),j=p?Object.values(p):c,E=(0,a.useCallback)((t=>{const n=m(t);w(n),"system"!==g||e||C(n,!1)}),[g,e]),k=(0,a.useRef)(E);k.current=E;const C=(0,a.useCallback)(((e,r=!0,a=!0)=>{let o=(null==p?void 0:p[e])||e;const s=t&&a?f():null;if(r)try{localStorage.setItem(l,e)}catch(e){}if("system"===e&&n){const e=m();o=(null==p?void 0:p[e])||e}if(a){const e=document.documentElement;"class"===v?(e.classList.remove(...j),e.classList.add(o)):e.setAttribute(v,o),null==s||s()}}),[]);(0,a.useEffect)((()=>{const e=function(){return k.current(...[].slice.call(arguments))},t=window.matchMedia(i);return t.addListener(e),e(t),()=>t.removeListener(e)}),[]);const M=(0,a.useCallback)((t=>{e?C(t,!0,!1):C(t),x(t)}),[e]);return(0,a.useEffect)((()=>{const e=e=>{e.key===l&&M(e.newValue||h)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[M]),(0,a.useEffect)((()=>{if(!r)return;let t=e&&s.includes(e)?e:g&&s.includes(g)?g:"system"===g&&b||null;document.documentElement.style.setProperty("color-scheme",t)}),[r,g,b,e]),a.createElement(o.Provider,{value:{theme:g,setTheme:M,forcedTheme:e,resolvedTheme:"system"===g?b:g,themes:n?[...c,"system"]:c,systemTheme:n?b:void 0}},a.createElement(u,{forcedTheme:e,storageKey:l,attribute:v,value:p,enableSystem:n,defaultTheme:h,attrs:j}),y)},u=(0,a.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,defaultTheme:o,value:s,attrs:c})=>{const u="class"===n?`var d=document.documentElement.classList;d.remove(${c.map((e=>`'${e}'`)).join(",")});`:"var d=document.documentElement;",d=(e,t)=>{e=(null==s?void 0:s[e])||e;const r=t?e:`'${e}'`;return"class"===n?`d.add(${r})`:`d.setAttribute('${n}', ${r})`},f="system"===o;return a.createElement(l.default,null,a.createElement("script",e?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){${u}${d(e)}}()`}}:r?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try {${u}var e=localStorage.getItem('${t}');${f?"":d(o)+";"}if("system"===e||(!e&&${f})){var t="${i}",m=window.matchMedia(t);m.media!==t||m.matches?${d("dark")}:${d("light")}}else if(e) ${s?`var x=${JSON.stringify(s)};`:""}${d(s?"x[e]":"e",!0)}}catch(e){}}()`}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try{${u}var e=localStorage.getItem("${t}");if(e){${s?`var x=${JSON.stringify(s)};`:""}${d(s?"x[e]":"e",!0)}}else{${d(o)};}}catch(t){}}();`}}))}),((e,t)=>e.forcedTheme===t.forcedTheme)),d=(e,t)=>{if("undefined"==typeof window)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},f=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},m=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light");var h=n(1664);var v=function(e){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),a.createElement("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}))};var p=function(e){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),a.createElement("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}))};var y=function(e){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),a.createElement("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"}))};var g=n(4155);var x=function(){var e=(0,a.useContext)(o),t=e.systemTheme,n=e.theme,l=e.setTheme,s=(0,a.useState)(!1),i=s[0],c=s[1];(0,a.useEffect)((function(){c(!0)}),[]);var u=function(){if(!i)return null;var e="system"===n?t:n;return console.log(e),"dark"===e?(0,r.jsx)(y,{className:"w-5 h-6",role:"button",onClick:function(){return l("light")}}):(0,r.jsx)(p,{className:"w-5 h-6",role:"button",onClick:function(){return l("dark")}})},d=function(){document.getElementById("mobile-menu").classList.add("hidden")};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("nav",{className:"text-indigo-100 bg-indigo-700 dark:bg-gray-800 dark:text-gray-200",children:(0,r.jsx)("div",{className:"max-w-2xl py-4 px-8 mx-auto lg:max-w-5xl",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(h.default,{href:"/",children:(0,r.jsx)("a",{children:"Gauthaman Sahadevan"})}),(0,r.jsxs)("ul",{className:"hidden sm:flex justify-end space-x-12",children:[(0,r.jsx)("li",{children:(0,r.jsx)(h.default,{href:"/",children:(0,r.jsx)("a",{children:"Home"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h.default,{href:g.env.BACKEND_URL+"/blog",children:(0,r.jsx)("a",{children:"Blog"})})}),(0,r.jsx)("li",{children:u()}),(0,r.jsx)("li",{children:(0,r.jsx)(h.default,{href:"/hire-me",children:(0,r.jsx)("a",{className:"px-6 py-2 text-yellow-100 bg-yellow-600 rounded-full",children:"Hire Me"})})})]}),(0,r.jsxs)("div",{className:"sm:hidden flex items-center",children:[(0,r.jsx)("div",{className:"px-6",children:u()}),(0,r.jsx)("button",{onClick:function(){document.getElementById("mobile-menu").classList.toggle("hidden")},children:(0,r.jsx)(v,{className:"w-6 h-6"})})]})]})})}),(0,r.jsxs)("div",{id:"mobile-menu",className:"hidden sm:hidden flex flex-col absolute w-full px-8 bg-gray-100 dark:bg-gray-600",children:[(0,r.jsx)(h.default,{href:"/",children:(0,r.jsx)("a",{className:"py-2 px-4 text-sm",onClick:d,children:"Home"})}),(0,r.jsx)(h.default,{href:"/blog",children:(0,r.jsx)("a",{className:"py-2 px-4 text-sm",onClick:d,children:"Blog"})}),(0,r.jsx)(h.default,{href:"/hire-me",children:(0,r.jsx)("a",{className:"py-2 px-4 text-sm",onClick:d,children:"Hire Me"})})]})]})};n(355),n(2007);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){b(e,t,n[t])}))}return e}var j=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c,{enableSystem:!0,attribute:"class",children:[(0,r.jsx)(x,{}),(0,r.jsx)(t,w({},n))]})})}},355:function(){},2007:function(){},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);