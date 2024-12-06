"use strict";(self.webpackChunkcomp_lib=self.webpackChunkcomp_lib||[]).push([[81],{"./src/stories/ui-package/type-writer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Custom:()=>Custom,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/re-uc/type-writer.tsx").A,parameters:{layout:"centered"},tags:["autodocs"],title:"TypeWriter",argTypes:{text:{control:{type:"text"},description:"The text to be displayed"},animationDuration:{control:{type:"number"},description:"The duration of the animation in milliseconds for the typing effect",defaultValue:100},cursorStyle:{description:"TailwindCSS class for customizing the cursor's appearance",control:{type:"text"}},TextStyle:{description:"TailwindCSS class for customizing the text appearance",control:{type:"text"}},loop:{description:"Whether to loop the animation or not",control:{type:"boolean"},defaultValue:!1}}},Default={args:{text:"const greeting = 'Welcome to the future';",loop:!1,animationDuration:80,TextStyle:"font-mono text-blue-400",cursorStyle:"bg-blue-400"}},Custom={args:{text:"echo 'Hello, Terminal World!'",loop:!0,animationDuration:100,TextStyle:"font-mono text-green-500",cursorStyle:"bg-green-500"}},__namedExportsOrder=["Default","Custom"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "const greeting = \'Welcome to the future\';",\n    loop: false,\n    animationDuration: 80,\n    TextStyle: "font-mono text-blue-400",\n    cursorStyle: "bg-blue-400"\n  }\n}',...Default.parameters?.docs?.source}}},Custom.parameters={...Custom.parameters,docs:{...Custom.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "echo \'Hello, Terminal World!\'",\n    loop: true,\n    animationDuration: 100,\n    TextStyle: "font-mono text-green-500",\n    cursorStyle: "bg-green-500"\n  }\n}',...Custom.parameters?.docs?.source}}}},"./src/components/re-uc/type-writer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.26.0_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e_p3nmef7tgcfaipoapcl2zwovte/node_modules/next/dist/compiled/react/jsx-runtime.js"),_utils_cn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/cn.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.26.0_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e_p3nmef7tgcfaipoapcl2zwovte/node_modules/next/dist/compiled/react/index.js");const TypeWriter=({loop=!1,text,cursorStyle,TextStyle,animationDuration=100})=>{const[animatedText,setAnimatedText]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const lastTimeRef={current:null};let currentTextIndex=0,textLength=text.length+1;const animation=()=>{const now=performance.now();lastTimeRef.current||(lastTimeRef.current=now);now-lastTimeRef.current>animationDuration&&(loop?(currentTextIndex<=text.length&&(currentTextIndex++,setAnimatedText(text.slice(0,currentTextIndex))),textLength<=currentTextIndex&&(textLength--,setAnimatedText(text.slice(0,textLength))),lastTimeRef.current=now):(currentTextIndex<text.length&&(currentTextIndex++,setAnimatedText(text.slice(0,currentTextIndex))),lastTimeRef.current=now)),loop||(currentTextIndex<text.length?requestAnimationFrame(animation):cancelAnimationFrame(animationId)),loop&&(textLength>=0||(textLength=text.length+1,currentTextIndex=0,setAnimatedText(text.slice(0,currentTextIndex))),requestAnimationFrame(animation))},animationId=requestAnimationFrame(animation);return()=>{cancelAnimationFrame(animationId)}}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("flex text-white text-2xl relative items-start",TextStyle),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"relative",children:[animatedText.split("\n").map(((line,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[line,index<animatedText.split("\n").length-1&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{})]},index))),animatedText.length>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:(0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("w-[0.5em] h-[30px]  bg-white animate-blink inline-block absolute bottom-[0]",cursorStyle),"aria-hidden":"true",style:{marginLeft:"0.1em"}})]})})},__WEBPACK_DEFAULT_EXPORT__=TypeWriter;TypeWriter.__docgenInfo={description:"",methods:[],displayName:"TypeWriter",props:{text:{required:!0,tsType:{name:"string"},description:""},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},cursorStyle:{required:!1,tsType:{name:"ClassValue"},description:""},TextStyle:{required:!1,tsType:{name:"ClassValue"},description:""},animationDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}}}}},"./src/utils/cn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);