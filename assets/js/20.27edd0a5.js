(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{374:function(t,s,n){"use strict";n.r(s);var a=n(45),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"left10x",staticStyle:{"margin-top":"180px","background-color":"white","border-radius":"20px",opacity:".9"}},[n("h3",[t._v("wordpress禁止自动保存和文章修订版本")]),t._v(" "),n("p",[t._v("写文章id不连续，数据库经常被垃圾占，用如下代码可有所改善。")]),t._v(" "),n("p",[t._v("打开wp的根目录wp-config.php，找到 $table_prefix这一行，在下面加代码")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// WordPress禁用自动保存")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'AUTOSAVE_INTERVAL'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// WordPress禁用文章修订版本")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'WP_POST_REVISIONS'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("注意：使用后要保证浏览器不会卡死不会断网，建议先本地编辑好直接复制，因为没有了自动保存。")]),t._v(" "),n("p",[t._v("缺点：每次更新wordpress都要加入此代码")])])])}),[],!1,null,null,null);s.default=e.exports}}]);