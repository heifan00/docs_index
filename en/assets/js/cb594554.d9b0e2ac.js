"use strict";(self.webpackChunkhif_icu=self.webpackChunkhif_icu||[]).push([[5263],{3905:(n,t,e)=>{e.d(t,{Zo:()=>u,kt:()=>d});var r=e(7294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function o(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var s=r.createContext({}),c=function(n){var t=r.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):l(l({},t),n)),e},u=function(n){var t=c(n.components);return r.createElement(s.Provider,{value:t},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(n,t){var e=n.components,i=n.mdxType,a=n.originalType,s=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),p=c(e),f=i,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return e?r.createElement(d,l(l({ref:t},u),{},{components:e})):r.createElement(d,l({ref:t},u))}));function d(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var a=e.length,l=new Array(a);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=n,o[p]="string"==typeof n?n:i,l[1]=o;for(var c=2;c<a;c++)l[c]=e[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}f.displayName="MDXCreateElement"},184:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=e(7462),i=(e(7294),e(3905));const a={title:"\u6570\u636e\u5e93\u5b58\u50a8\u6280\u5de7",tags:["MySQL"],categories:["Java"],date:new Date("2021-12-20T22:00:34.000Z"),urlname:"mysql_tips",top:null,slug:"/mysql_tips"},l=void 0,o={unversionedId:"\u539f\u535a\u5ba2\u6587\u4ef6/\u6570\u636e\u5e93\u5b58\u50a8\u5c0f\u6280\u5de7",id:"\u539f\u535a\u5ba2\u6587\u4ef6/\u6570\u636e\u5e93\u5b58\u50a8\u5c0f\u6280\u5de7",title:"\u6570\u636e\u5e93\u5b58\u50a8\u6280\u5de7",description:"\u5e94\u7528\u573a\u666f",source:"@site/docs/\u539f\u535a\u5ba2\u6587\u4ef6/\u6570\u636e\u5e93\u5b58\u50a8\u5c0f\u6280\u5de7.md",sourceDirName:"\u539f\u535a\u5ba2\u6587\u4ef6",slug:"/mysql_tips",permalink:"/en/mysql_tips",draft:!1,tags:[{label:"MySQL",permalink:"/en/tags/my-sql"}],version:"current",frontMatter:{title:"\u6570\u636e\u5e93\u5b58\u50a8\u6280\u5de7",tags:["MySQL"],categories:["Java"],date:"2021-12-20T22:00:34.000Z",urlname:"mysql_tips",top:null,slug:"/mysql_tips"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5e93\u5355\u8868\u5b9e\u73b0\u591a\u7ea7\u5b50\u6811",permalink:"/en/tree_test"},next:{title:"\u7f51\u5740\u6536\u85cf",permalink:"/en/website_collect"}},s={},c=[{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:3},{value:"\u5de5\u5177\u7c7b",id:"\u5de5\u5177\u7c7b",level:3},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:3}],u={toc:c},p="wrapper";function m(n){let{components:t,...e}=n;return(0,i.kt)(p,(0,r.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u67d0\u4e00\u5b57\u6bb5\u9700\u8981\u5b58\u50a8\u591a\u4e2a\u540c\u7c7b\u578b\u7684\u503c"),(0,i.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u56fe\u7247\u5730\u5740\u5b58\u5165\u4e00\u4e2a\u5b57\u6bb5")),(0,i.kt)("h3",{id:"\u5de5\u5177\u7c7b"},"\u5de5\u5177\u7c7b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import cn.hutool.core.collection.CollectionUtil;\nimport cn.hutool.core.date.DateUtil;\nimport cn.hutool.core.lang.Validator;\nimport cn.hutool.core.util.RandomUtil;\nimport com.baomidou.mybatisplus.core.toolkit.ArrayUtils;\n\nimport java.util.*;\nimport java.util.regex.Matcher;\nimport java.util.regex.Pattern;\n\n/**\n * \u5c01\u88c5\u5de5\u5177\u7c7b\n * @Author HiF\n * @Date 2021/12/20 21:59\n */ \npublic class ValCommonUtils {\n\n    public static final String LEFT_CURLYBRACES = "{";\n\n    public static final String RIGHT_CURLYBRACES = "}";\n    /**\n     * \u88ab{}\u5305\u56f4\n     */\n    public static final String CURLYBRACES_AROUND = "\\\\{.+?}";\n\n    /**\n     * \u6d41\u6c34\u53f7\n     *\n     * @return \u652f\u4ed8\u6d41\u6c34\u53f7\n     */\n    public static String tradeSn(int ran) {\n        return DateUtil.format(new Date(), "yyyyMMddHHmmss") + randomNumeric(ran);\n    }\n\n    /**\n     * \u968f\u673a\u6307\u5b9a\u4f4d\u6570\u5b57\u7b26\u4e32\uff08\u7eaf\u6570\u5b57\uff09\n     *\n     * @param length \u957f\u5ea6\n     * @return String\n     */\n    public static String randomNumeric(int length) {\n        if (length <= 0) {\n            return "";\n        }\n        return RandomUtil.randomNumbers(length);\n    }\n\n    public static boolean isChineseByRange(String str) {\n        if (null == str) {\n            return false;\n        }\n        char[] ch = str.toCharArray();\n        for (char c : ch) {\n            if (c < 0x4E00 || c > 0x9FBF) {\n                return false;\n            }\n        }\n        return true;\n    }\n\n    /**\n     * \u96c6\u5408\u8f6c\u5b57\u7b26\u4e32\uff08\u6bcf\u4e2a\u5143\u7d20\u7528{}\u5305\u62ec\uff09\n     *\n     * @param collection \u96c6\u5408\n     * @return \u5b57\u7b26\u4e32\n     */\n    public static <T> String merge(Collection<T> collection) {\n        if (CollectionUtil.isEmpty(collection)) {\n            return "";\n        }\n        StringBuilder builder = new StringBuilder();\n        for (T element : collection) {\n            if (element != null && Validator.isNotEmpty(element.toString())) {\n                builder.append(LEFT_CURLYBRACES).append(element)\n                        .append(RIGHT_CURLYBRACES);\n            }\n        }\n        return builder.toString();\n    }\n\n    /**\n     * \u5b57\u7b26\u4e32\u8f6cList\uff08\u6bcf\u4e2a\u5143\u7d20\u7528{}\u5305\u62ec\uff09\n     *\n     * @param str\n     *            \u5b57\u7b26\u4e32\n     * @return List\n     */\n    public static List<String> split(String str) {\n        if (Validator.isEmpty(str)) {\n            return Collections.emptyList();\n        }\n\n        List<String> list = new ArrayList<>();\n        Pattern pattern = Pattern.compile(CURLYBRACES_AROUND);\n        Matcher matcher = pattern.matcher(str);\n        while (matcher.find()) {\n            String element = matcher.group().substring(1, matcher.group().length() - 1);\n            if (Validator.isNotNull(element)) {\n                list.add(element);\n            }\n        }\n        return list;\n    }\n\n    /**\n     * \u751f\u6210\u5e97\u94fa\u8ba2\u5355\u53f7\n     *\n     * @param prefix \u8ba2\u5355\u53f7\u524d\u7f00\n     * @param sn     \u8ba2\u5355\u5e8f\u53f7\n     * @return \u8ba2\u5355\u53f7\n     */\n    public static String no(String prefix, Long sn) {\n        StringBuilder suffix = new StringBuilder(sn + "");\n        // suffix\u8865\u5145\u5230\u56db\u4f4d\uff08\u81f3\u5c11\u56db\u4f4d\uff09\n        while (suffix.length() < 6) {\n            suffix.insert(0, "0");\n        }\n        return prefix + suffix;\n    }\n\n    /**\n     * \u5b57\u7b26\u4e32\u8f6c\u96c6\u5408\uff08\u6307\u5b9a\u5206\u9694\u7b26\uff09\n     *\n     * @param str       \u5b57\u7b26\u4e32\n     * @param separator \u5206\u9694\u7b26\n     * @return List\n     */\n    public static List<String> split(String str, String separator) {\n        if (Validator.isEmpty(str)) {\n            return Collections.emptyList();\n        }\n        List<String> list = new ArrayList<>();\n        // \u6ca1\u6709\u5206\u9694\u7b26\uff0c\u4e0d\u8fdb\u884c\u5206\u9694\n        if (Validator.isEmpty(separator)) {\n            list.add(str);\n            return list;\n        }\n        String[] array = str.split(separator);\n        if (ArrayUtils.isEmpty(array)) {\n            return Collections.emptyList();\n        }\n        for (String element : array) {\n            if (Validator.isNotEmpty(element)) {\n                list.add(element);\n            }\n        }\n        return list;\n    }\n\n}\n\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u6570\u636e\u5e93\u4e2d\u5b58\u50a8\u4e3aVARCHAR\u7c7b\u578b\uff0c\u4f8b\u5982\uff1a{1}{2}{3}{4}{5}\uff1b\u8f6c\u6362\u540e\u4e3aList\uff1a","[1, 2, 3, 4, 5]")),(0,i.kt)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,i.kt)("p",null,"\u5b58\u50a8\u65f6\u7528\u201c{\u201d\u3001\u201c}\u201d\u5305\u88f9\u8d77\u6765\uff0c\u53d6\u503c\u65f6\u5c31\u80fd\u8f6c\u6362\u4e3aList\uff0c\u80a5\u80a0\u7684\u65b9\u4fbf"))}m.isMDXComponent=!0}}]);