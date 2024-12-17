"use strict";(self.webpackChunkcomp_lib=self.webpackChunkcomp_lib||[]).push([[738],{"./src/stories/ui-package/use-native-drop.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>use_native_drop_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.26.0_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e_p3nmef7tgcfaipoapcl2zwovte/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.26.0_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e_p3nmef7tgcfaipoapcl2zwovte/node_modules/next/dist/compiled/react/index.js"),cn=__webpack_require__("./src/utils/cn.ts");const use_native_drop=({draggableItems:list,defaultSelected=[]})=>{const containerRef=(0,react.useRef)(null),dropZoneRef=(0,react.useRef)(null),[droppedItems,setDroppedItems]=(0,react.useState)(defaultSelected),[draggableItems,setDraggableItems]=(0,react.useState)(list.filter((item=>!droppedItems.some((dropped=>dropped.toLowerCase()===item.toLowerCase()))))),touchItem=(0,react.useRef)(null),draggedItemRef=(0,react.useRef)(null),isItemOverDropZone=(0,react.useRef)(!1),handleDrop=()=>{if(draggedItemRef.current){const newDropedItems=[...droppedItems,draggedItemRef.current];setDroppedItems(newDropedItems),setDraggableItems((prevData=>prevData.filter((item=>item!==draggedItemRef.current))))}};return{handleTouchStart:(event,id)=>{if(1===event.touches.length){var _containerRef_current;const touch=event.touches[0],originalElement=event.target,clonedElement=originalElement.cloneNode(!0);originalElement.style.opacity="0.5",clonedElement.className='flex-shrink-0 py-1 px-2 rounded shadow-md bg-white/20 dark:text-white text-black "\n      } select-none flex items-center justify-center text-xs font-semibold whitespace-nowrap',clonedElement.style.position="absolute",clonedElement.style.left=`${touch.clientX}px`,clonedElement.style.top=`${touch.clientY}px`,clonedElement.style.pointerEvents="none",null===(_containerRef_current=containerRef.current)||void 0===_containerRef_current||_containerRef_current.appendChild(clonedElement),touchItem.current={element:clonedElement,originalElement,oldXPosition:touch.clientX,oldYPosition:touch.clientY},draggedItemRef.current=draggableItems[id]}},handleTouchMove:event=>{const touch=event.touches[0];if(touchItem.current&&containerRef.current){const{element,oldXPosition,oldYPosition}=touchItem.current,deltaX=touch.clientX-oldXPosition,deltaY=touch.clientY-oldYPosition,containerRect=containerRef.current.getBoundingClientRect(),elementRec=element.getBoundingClientRect(),elementLeft=oldXPosition+deltaX-containerRect.left,elementTop=oldYPosition+deltaY-containerRect.top;if(elementTop>=-elementRec.height/2&&elementTop<=containerRect.height-elementRec.height/2&&elementLeft>=-elementRec.width/2&&elementLeft<=containerRect.width-elementRec.width/2&&(element.style.left=`${touch.clientX}px`,element.style.top=`${touch.clientY}px`,dropZoneRef.current)){const dropRect=dropZoneRef.current.getBoundingClientRect(),dropX=touch.clientX-dropRect.left,dropY=touch.clientY-dropRect.top;dropX>=-elementRec.width/2&&dropX<=dropRect.width-elementRec.width/2&&dropY>=-elementRec.height/2&&dropY<=dropRect.height-elementRec.height/2?(isItemOverDropZone.current=!0,element.style.border="2px dotted green"):(isItemOverDropZone.current=!1,element.style.border="none")}}},handleTouchEnd:()=>{if(touchItem.current){const{element,originalElement}=touchItem.current;originalElement.style.opacity="1",isItemOverDropZone.current&&handleDrop(),element.remove(),touchItem.current=null,isItemOverDropZone.current=!1}},handleDroppedItemDelete:item=>{const filteredItems=[...droppedItems].filter((i=>i!==item));setDroppedItems(filteredItems);const newData=[...draggableItems,item];setDraggableItems(newData.sort(((a,b)=>list.indexOf(a)-list.indexOf(b))))},draggableItems,droppedItems,dropZoneRef,containerRef}},MobileDrop=({list,className,defaultSelected})=>{const{containerRef,dropZoneRef,draggableItems,droppedItems,handleTouchStart,handleTouchMove,handleTouchEnd,handleDroppedItemDelete}=use_native_drop({draggableItems:list,defaultSelected});return(0,jsx_runtime.jsx)("div",{className:(0,cn.cn)("bg-white dark:bg-black text-black",className),children:(0,jsx_runtime.jsx)("div",{className:"container mx-auto p-4",children:(0,jsx_runtime.jsxs)("div",{ref:containerRef,className:"border p-4 mb-4",children:[(0,jsx_runtime.jsx)("h2",{className:"text-xl font-bold mb-2 dark:text-white text-black",children:"Draggable Items"}),(0,jsx_runtime.jsx)("div",{className:"flex flex-wrap gap-2",children:draggableItems.map(((item,index)=>(0,jsx_runtime.jsx)("div",{className:(0,cn.cn)("py-1 px-2 rounded shadow-md dark:bg-gray-700 bg-gray-200",""),onTouchStart:e=>handleTouchStart(e,index),onTouchMove:handleTouchMove,onTouchEnd:handleTouchEnd,children:item},index)))}),(0,jsx_runtime.jsxs)("div",{ref:dropZoneRef,className:(0,cn.cn)("border-2 border-dashed p-4 mt-10 dark:border-white border-black",""),children:[(0,jsx_runtime.jsx)("h2",{className:"text-xl font-bold mb-2 dark:text-white text-black",children:"Drop Zone"}),(0,jsx_runtime.jsx)("div",{className:"flex flex-wrap gap-2",children:droppedItems.map(((item,index)=>(0,jsx_runtime.jsx)("div",{onClick:()=>handleDroppedItemDelete(item),className:(0,cn.cn)("py-1 px-2 rounded shadow-md dark:bg-gray-700 bg-gray-200",""),children:item},index)))})]})]})})})},mobile_drop=MobileDrop;MobileDrop.__docgenInfo={description:"",methods:[],displayName:"MobileDrop",props:{list:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},defaultSelected:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const use_native_drop_stories={title:"MobileDrop",component:mobile_drop,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{list:["HTML","CSS","JavaScript","React","Node.js","TypeScript","GraphQL","Python"],defaultSelected:["HTML","CSS"]}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    list: ["HTML", "CSS", "JavaScript", "React", "Node.js", "TypeScript", "GraphQL", "Python"],\n    defaultSelected: ["HTML", "CSS"]\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/utils/cn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);