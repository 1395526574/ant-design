webpackJsonp([200,366],{714:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(61),s(60)),o=t(p),e=s(1),c=t(e),l=s(2);t(l);n.exports={content:[["p","\u8ff7\u4f60\u7248\u672c\u3002"]],meta:{order:4,title:"\u8ff7\u4f60",filename:"components/pagination/demo/mini.md",id:"components-pagination-demo-mini"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >showTotal</span><span class="token punctuation" >(</span>total<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token template-string" ><span class="token string" >`\u5171 </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>total<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" > \u6761`</span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >50</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >50</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >showSizeChanger</span> <span class="token attr-name" >showQuickJumper</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >50</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >showTotal</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>showTotal<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){return"\u5171 "+n+" \u6761"}return c["default"].createElement("div",null,c["default"].createElement(o["default"],{size:"small",total:50}),c["default"].createElement("br",null),c["default"].createElement(o["default"],{size:"small",total:50,showSizeChanger:!0,showQuickJumper:!0}),c["default"].createElement("br",null),c["default"].createElement(o["default"],{size:"small",total:50,showTotal:n}))}}}});