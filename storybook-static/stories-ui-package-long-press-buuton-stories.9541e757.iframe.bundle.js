"use strict";(self.webpackChunkcomp_lib=self.webpackChunkcomp_lib||[]).push([[747],{"./src/stories/ui-package/long-press-buuton.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomStyle:()=>CustomStyle,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components_re_uc_long_press_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/re-uc/long-press-button.tsx"),console=__webpack_require__("./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");const __WEBPACK_DEFAULT_EXPORT__={component:_components_re_uc_long_press_button__WEBPACK_IMPORTED_MODULE_0__.A,parameters:{layout:"centered"},tags:["autodocs"],title:"LongPressButton",argTypes:{onPress:{description:"Function to execute when the button is pressed or long-pressed.",action:"pressed"},onPressArgs:{description:"Arguments passed to the `onPress` function. It can be an array of strings, numbers, or boolean values."},delay:{description:"Delay between each press action in milliseconds.",control:{type:"number"},defaultValue:10},timeOutDuration:{description:"Total duration (in milliseconds) before which the button starts responding.",control:{type:"number"},defaultValue:200},className:{description:"TailwindCSS class for customizing the button's appearance.",control:{type:"text"}},children:{description:"The content displayed inside the button.",control:{type:"text"}},disabled:{description:"Disable the button from being pressed or long-pressed.",control:{type:"boolean"},defaultValue:!1}}},Default={args:{onPress:()=>console.log("Button pressed!"),onPressArgs:["decrement"],delay:100,timeOutDuration:200,className:"p-2 rounded-md text-white font-semibold text-lg bg-green-500 hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 shadow-lg",children:"Decrement"}},CustomStyle={args:{onPress:()=>console.log("Custom button pressed!"),onPressArgs:["increment"],delay:150,timeOutDuration:300,className:"p-2 rounded-lg bg-red-500 hover:bg-red-700 shadow-lg text-white font-semibold",children:"Increment"}},__namedExportsOrder=["Default","CustomStyle"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    onPress: () => console.log("Button pressed!"),\n    onPressArgs: ["decrement"],\n    delay: 100,\n    timeOutDuration: 200,\n    className: "p-2 rounded-md text-white font-semibold text-lg bg-green-500 hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 shadow-lg",\n    children: "Decrement"\n  }\n}',...Default.parameters?.docs?.source}}},CustomStyle.parameters={...CustomStyle.parameters,docs:{...CustomStyle.parameters?.docs,source:{originalSource:'{\n  args: {\n    onPress: () => console.log("Custom button pressed!"),\n    onPressArgs: ["increment"],\n    delay: 150,\n    timeOutDuration: 300,\n    className: "p-2 rounded-lg bg-red-500 hover:bg-red-700 shadow-lg text-white font-semibold",\n    children: "Increment"\n  }\n}',...CustomStyle.parameters?.docs?.source}}}},"./src/components/re-uc/long-press-button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.26.0_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e_p3nmef7tgcfaipoapcl2zwovte/node_modules/next/dist/compiled/react/jsx-runtime.js"),_utils_cn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/cn.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.26.0_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e_p3nmef7tgcfaipoapcl2zwovte/node_modules/next/dist/compiled/react/index.js");const LongPressButton=({onPress,className,children,timeOutDuration=200,onPressArgs,disabled,delay=10})=>{const requestAnimationFrameRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),lastTimeRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),timeOut=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),counterRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0),handleMouseDown=()=>{timeOut.current=setTimeout((()=>{(()=>{const animation=()=>{const now=performance.now();lastTimeRef.current||(lastTimeRef.current=now),now-lastTimeRef.current>delay&&(counterRef.current+=1,onPress(counterRef.current,!0,...onPressArgs),lastTimeRef.current=now),requestAnimationFrameRef.current=requestAnimationFrame(animation)};requestAnimationFrameRef.current=requestAnimationFrame(animation)})()}),timeOutDuration)},handleMouseUp=()=>{timeOut.current&&(clearTimeout(timeOut.current),timeOut.current=null),null!==requestAnimationFrameRef.current?(cancelAnimationFrame(requestAnimationFrameRef.current),requestAnimationFrameRef.current=null,counterRef.current=0):onPress(20,!1,...onPressArgs)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onMouseDown:handleMouseDown,onMouseUp:handleMouseUp,onTouchStart:handleMouseDown,onTouchEnd:handleMouseUp,className:(0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("p-2 bg-white rounded-md text-black",className),disabled,children})},__WEBPACK_DEFAULT_EXPORT__=LongPressButton;LongPressButton.__docgenInfo={description:"",methods:[],displayName:"LongPressButton",props:{onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"(counter: number, isHolding: boolean, ...args: TArgs) => void",signature:{arguments:[{type:{name:"number"},name:"counter"},{type:{name:"boolean"},name:"isHolding"},{type:{name:"TArgs"},name:"args",rest:!0}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"ClassValue"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},timeOutDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},onPressArgs:{required:!0,tsType:{name:"TArgs"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}}}}},"./src/utils/cn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);