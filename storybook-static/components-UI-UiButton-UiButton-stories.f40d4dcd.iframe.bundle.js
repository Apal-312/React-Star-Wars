/*! For license information please see components-UI-UiButton-UiButton-stories.f40d4dcd.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_star_wars=self.webpackChunkreact_star_wars||[]).push([[388],{"./src/components/UI/UiButton/UiButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Disabled:()=>Disabled,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UiButton_stories});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const UiButton_module={button:"UiButton_button__wmJc4",dark:"UiButton_dark__S7xdY",light:"UiButton_light__yXhH8"};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UiButton=_ref=>{let{text,onClick,disabled,theme="dark",classes}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("button",{onClick,disabled,className:classnames_default()(UiButton_module.button,UiButton_module[theme],classes),children:text})})},UiButton_UiButton=UiButton;UiButton.__docgenInfo={description:"",methods:[],displayName:"UiButton",props:{theme:{defaultValue:{value:'"dark"',computed:!1},description:"",type:{name:"string"},required:!1},text:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},classes:{description:"",type:{name:"string"},required:!1}}};const UiButton_stories={title:"Ui-Kit/UiButton",component:UiButton_UiButton},Template=args=>(0,jsx_runtime.jsx)(UiButton_UiButton,{...args}),props={text:"Hello",onClick:()=>console.log("Button Click"),disabled:!1,theme:"light",classes:""},Light=Template.bind({});Light.args={...props,theme:"light"};const Dark=Template.bind({});Dark.args={...props,theme:"dark"};const Disabled=Template.bind({});Disabled.args={...props,disabled:!0};const __namedExportsOrder=["Light","Dark","Disabled"];Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"args => <UiButton {...args} />",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"args => <UiButton {...args} />",...Dark.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <UiButton {...args} />",...Disabled.parameters?.docs?.source}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);