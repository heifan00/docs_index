"use strict";(self.webpackChunkhif_icu=self.webpackChunkhif_icu||[]).push([[7649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,v=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"HuTool\u5de5\u5177\u7c7b",tags:["HuTool"],categories:["Java"],date:new Date("2021-12-20T20:21:34.000Z"),urlname:"hutool_validator",top:null},l=void 0,i={unversionedId:"\u539f\u535a\u5ba2\u6587\u4ef6/Hutool\u5de5\u5177\u7c7b\u4e4bvalidator\u5b57\u6bb5\u9a8c\u8bc1\u5668",id:"\u539f\u535a\u5ba2\u6587\u4ef6/Hutool\u5de5\u5177\u7c7b\u4e4bvalidator\u5b57\u6bb5\u9a8c\u8bc1\u5668",title:"HuTool\u5de5\u5177\u7c7b",description:"\u6458\u8981",source:"@site/docs/\u539f\u535a\u5ba2\u6587\u4ef6/Hutool\u5de5\u5177\u7c7b\u4e4bvalidator\u5b57\u6bb5\u9a8c\u8bc1\u5668.md",sourceDirName:"\u539f\u535a\u5ba2\u6587\u4ef6",slug:"/\u539f\u535a\u5ba2\u6587\u4ef6/Hutool\u5de5\u5177\u7c7b\u4e4bvalidator\u5b57\u6bb5\u9a8c\u8bc1\u5668",permalink:"/en/\u539f\u535a\u5ba2\u6587\u4ef6/Hutool\u5de5\u5177\u7c7b\u4e4bvalidator\u5b57\u6bb5\u9a8c\u8bc1\u5668",draft:!1,tags:[{label:"HuTool",permalink:"/en/tags/hu-tool"}],version:"current",frontMatter:{title:"HuTool\u5de5\u5177\u7c7b",tags:["HuTool"],categories:["Java"],date:"2021-12-20T20:21:34.000Z",urlname:"hutool_validator",top:null},sidebar:"tutorialSidebar",previous:{title:"Git\u5f00\u53d1\u6d41\u7a0b\u89c4\u8303",permalink:"/en/\u539f\u535a\u5ba2\u6587\u4ef6/Git\u5f00\u53d1\u6d41\u7a0b\u89c4\u8303"},next:{title:"JJWT\u6846\u67b6\u7684\u4f7f\u7528",permalink:"/en/\u539f\u535a\u5ba2\u6587\u4ef6/JJWT\u6846\u67b6\u7684\u4f7f\u7528"}},u={},c=[{value:"\u6458\u8981",id:"\u6458\u8981",level:3},{value:"\u4e00\u3001Validator\u5b57\u6bb5\u9a8c\u8bc1\u5668",id:"\u4e00validator\u5b57\u6bb5\u9a8c\u8bc1\u5668",level:2},{value:"\u524d\u8a00",id:"\u524d\u8a00",level:3},{value:"\u5f00\u6574",id:"\u5f00\u6574",level:3},{value:"1.\u5bfc\u5165\u4f9d\u8d56",id:"1\u5bfc\u5165\u4f9d\u8d56",level:4},{value:"2.\u76f4\u63a5\u7528\u5c31\u5b8c\u4e86\uff0c\u6ca1\u6709\u7b2c2\u6b65",id:"2\u76f4\u63a5\u7528\u5c31\u5b8c\u4e86\u6ca1\u6709\u7b2c2\u6b65",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"\u4e8c\u3001coming soon",id:"\u4e8ccoming-soon",level:2}],p={toc:c},d="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u6458\u8981"},"\u6458\u8981"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"HuTool\u5de5\u5177\u7c7b\u7684\u4f7f\u7528")),(0,o.kt)("h2",{id:"\u4e00validator\u5b57\u6bb5\u9a8c\u8bc1\u5668"},"\u4e00\u3001Validator\u5b57\u6bb5\u9a8c\u8bc1\u5668"),(0,o.kt)("h3",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u83dc\u9e1f\u7684\u6211\uff0c\u5728\u8fdb\u884cDao\u5c42\u8fd4\u56de\u503c\u6821\u9a8c\u7684\u65f6\u5019\uff0c\u4e00\u822c\u4f1a\u7528\u8fd9\u6837\u7684\u65b9\u5f0f\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'if (detailTemp == null) {\n    log.warn("\u67e5\u8be2\u7ed3\u679c\u4e3a\u7a7a\u3002detailTemp:{}",detailTemp);\n    throw new BizException(MessageCodeEnum.PARAM_ERROR.getCode(), "\u67e5\u8be2\u7ed3\u679c\u4e3a\u7a7a!");\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f46\u6211\u7814\u7a76\u5927\u4f6c\u7684\u4ee3\u7801\u53d1\u73b0\u4e86\u4e00\u79cd\u66f4\u6709\u903c\u683c\u7684\u5199\u6cd5\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'if (Validator.isNull(detailTemp)) {\n    log.warn("\u67e5\u8be2\u7ed3\u679c\u4e3a\u7a7a\u3002detailTemp:{}",detailTemp);\n    throw new BizException(MessageCodeEnum.PARAM_ERROR.getCode(), "\u67e5\u8be2\u7ed3\u679c\u4e3a\u7a7a!");\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u867d\u7136\u4e0d\u77e5\u9053\u4e3a\u4ec0\u4e48\uff0c\u4f46\u5c31\u662f\u89c9\u5f97\u725b\u903c\uff0c\u5f00\u6574\uff01")),(0,o.kt)("h3",{id:"\u5f00\u6574"},"\u5f00\u6574"),(0,o.kt)("h4",{id:"1\u5bfc\u5165\u4f9d\u8d56"},"1.\u5bfc\u5165\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>cn.hutool</groupId>\n    <artifactId>hutool-all</artifactId>\n    <version>5.7.3</version>\n</dependency>\n")),(0,o.kt)("h4",{id:"2\u76f4\u63a5\u7528\u5c31\u5b8c\u4e86\u6ca1\u6709\u7b2c2\u6b65"},"2.\u76f4\u63a5\u7528\u5c31\u5b8c\u4e86\uff0c\u6ca1\u6709\u7b2c2\u6b65"),(0,o.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u5f88\u597d\u7528\uff0c\u8fd8\u652f\u6301\u81ea\u5b9a\u4e49\u6821\u9a8c\u7b49\u9ad8\u7ea7\u64cd\u4f5c\u3002\n\u53c2\u8003\u6587\u6863\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://hutool.cn/docs/#/core/%E8%AF%AD%E8%A8%80%E7%89%B9%E6%80%A7/%E5%AD%97%E6%AE%B5%E9%AA%8C%E8%AF%81%E5%99%A8-Validator?id=%e4%bd%bf%e7%94%a8"},"HuTool")),(0,o.kt)("h2",{id:"\u4e8ccoming-soon"},"\u4e8c\u3001coming soon"))}s.isMDXComponent=!0}}]);