"use strict";(self.webpackChunksword_tool=self.webpackChunksword_tool||[]).push([[40],{12057:function(N,E,e){e.d(E,{Z:function(){return c}});var t=e(97460),b=e(67294),s={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},y=s,a=e(55230),f=function(C,M){return b.createElement(a.Z,(0,t.Z)({},C,{ref:M,icon:y}))},i=b.forwardRef(f),c=i},48187:function(N,E,e){var t=e(67294),b=(0,t.createContext)({});E.Z=b},19021:function(N,E,e){e.d(E,{Z:function(){return S}});var t=e(83243),b=e(35722),s=e(45216),y=e(5456),a=e(67294),f=e(47187),i=e.n(f),c=e(62143),p=e(59864),C=e(43786),M=function(r,l){typeof r=="function"?r(l):(0,c.Z)(r)==="object"&&r&&"current"in r&&(r.current=l)},I=function(){for(var r=arguments.length,l=new Array(r),v=0;v<r;v++)l[v]=arguments[v];var O=l.filter(Boolean);return O.length<=1?O[0]:function(j){l.forEach(function(w){M(w,j)})}},V=function(){for(var r=arguments.length,l=new Array(r),v=0;v<r;v++)l[v]=arguments[v];return(0,C.Z)(function(){return I.apply(void 0,l)},l,function(O,j){return O.length!==j.length||O.every(function(w,B){return w!==j[B]})})},Q=function(r){var l,v,O=isMemo(r)?r.type.type:r.type;return!(typeof O=="function"&&!((l=O.prototype)!==null&&l!==void 0&&l.render)&&O.$$typeof!==ForwardRef||typeof r=="function"&&!((v=r.prototype)!==null&&v!==void 0&&v.render)&&r.$$typeof!==ForwardRef)},$=function(r){return!isValidElement(r)||isFragment(r)?!1:Q(r)},K=e(48187),z=e(84033),h=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],m=a.forwardRef(function(n,r){var l=n.className,v=n.component,O=n.viewBox,j=n.spin,w=n.rotate,B=n.tabIndex,H=n.onClick,W=n.children,te=(0,y.Z)(n,h),ce=a.useRef(),ge=V(ce,r);(0,z.Kp)(!!(v||W),"Should have `component` prop or `children`."),(0,z.C3)(ce);var le=a.useContext(K.Z),re=le.prefixCls,pe=re===void 0?"anticon":re,Ee=le.rootClassName,he=i()(Ee,pe,l),Ce=i()((0,s.Z)({},"".concat(pe,"-spin"),!!j)),ye=w?{msTransform:"rotate(".concat(w,"deg)"),transform:"rotate(".concat(w,"deg)")}:void 0,oe=(0,b.Z)((0,b.Z)({},z.vD),{},{className:Ce,style:ye,viewBox:O});O||delete oe.viewBox;var be=function(){return v?a.createElement(v,oe,W):W?((0,z.Kp)(!!O||a.Children.count(W)===1&&a.isValidElement(W)&&a.Children.only(W).type==="use","Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),a.createElement("svg",(0,t.Z)({},oe,{viewBox:O}),W)):null},ue=B;return ue===void 0&&H&&(ue=-1),a.createElement("span",(0,t.Z)({role:"img"},te,{ref:ge,tabIndex:ue,onClick:H,className:he}),be())});m.displayName="AntdIcon";var S=m},84033:function(N,E,e){e.d(E,{R_:function(){return $},pw:function(){return K},r:function(){return V},H9:function(){return z},vD:function(){return h},C3:function(){return S},Kp:function(){return I}});var t=e(35722),b=e(62143),s=e(84898),y=e(59885);function a(n){var r;return n==null||(r=n.getRootNode)===null||r===void 0?void 0:r.call(n)}function f(n){return a(n)instanceof ShadowRoot}function i(n){return f(n)?a(n):null}var c=e(98067),p=e(67294),C=e(48187);function M(n){return n.replace(/-(.)/g,function(r,l){return l.toUpperCase()})}function I(n,r){(0,c.ZP)(n,"[@ant-design/icons] ".concat(r))}function V(n){return(0,b.Z)(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&((0,b.Z)(n.icon)==="object"||typeof n.icon=="function")}function Q(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(r,l){var v=n[l];switch(l){case"class":r.className=v,delete r.class;break;default:delete r[l],r[M(l)]=v}return r},{})}function $(n,r,l){return l?p.createElement(n.tag,(0,t.Z)((0,t.Z)({key:r},Q(n.attrs)),l),(n.children||[]).map(function(v,O){return $(v,"".concat(r,"-").concat(n.tag,"-").concat(O))})):p.createElement(n.tag,(0,t.Z)({key:r},Q(n.attrs)),(n.children||[]).map(function(v,O){return $(v,"".concat(r,"-").concat(n.tag,"-").concat(O))}))}function K(n){return(0,s.generate)(n)[0]}function z(n){return n?Array.isArray(n)?n:[n]:[]}var h={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},m=`
.anticon {
  display: inline-flex;
  alignItems: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,S=function(r){var l=(0,p.useContext)(C.Z),v=l.csp,O=l.prefixCls,j=m;O&&(j=j.replace(/anticon/g,O)),(0,p.useEffect)(function(){var w=r.current,B=i(w);(0,y.hq)(j,"@ant-design-icons",{prepend:!0,csp:v,attachTo:B})},[])}},68508:function(N,E,e){e.d(E,{Z:function(){return t}});function t(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},59885:function(N,E,e){e.d(E,{jL:function(){return Q},hq:function(){return z}});var t=e(35722),b=e(68508);function s(h,m){if(!h)return!1;if(h.contains)return h.contains(m);for(var S=m;S;){if(S===h)return!0;S=S.parentNode}return!1}var y="data-rc-order",a="data-rc-priority",f="rc-util-key",i=new Map;function c(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=h.mark;return m?m.startsWith("data-")?m:"data-".concat(m):f}function p(h){if(h.attachTo)return h.attachTo;var m=document.querySelector("head");return m||document.body}function C(h){return h==="queue"?"prependQueue":h?"prepend":"append"}function M(h){return Array.from((i.get(h)||h).children).filter(function(m){return m.tagName==="STYLE"})}function I(h){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(0,b.Z)())return null;var S=m.csp,n=m.prepend,r=m.priority,l=r===void 0?0:r,v=C(n),O=v==="prependQueue",j=document.createElement("style");j.setAttribute(y,v),O&&l&&j.setAttribute(a,"".concat(l)),S!=null&&S.nonce&&(j.nonce=S==null?void 0:S.nonce),j.innerHTML=h;var w=p(m),B=w.firstChild;if(n){if(O){var H=(m.styles||M(w)).filter(function(W){if(!["prepend","prependQueue"].includes(W.getAttribute(y)))return!1;var te=Number(W.getAttribute(a)||0);return l>=te});if(H.length)return w.insertBefore(j,H[H.length-1].nextSibling),j}w.insertBefore(j,B)}else w.appendChild(j);return j}function V(h){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},S=p(m);return(m.styles||M(S)).find(function(n){return n.getAttribute(c(m))===h})}function Q(h){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},S=V(h,m);if(S){var n=p(m);n.removeChild(S)}}function $(h,m){var S=i.get(h);if(!S||!s(document,S)){var n=I("",m),r=n.parentNode;i.set(h,r),h.removeChild(n)}}function K(){i.clear()}function z(h,m){var S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=p(S),r=M(n),l=(0,t.Z)((0,t.Z)({},S),{},{styles:r});$(n,l);var v=V(m,l);if(v){var O,j;if((O=l.csp)!==null&&O!==void 0&&O.nonce&&v.nonce!==((j=l.csp)===null||j===void 0?void 0:j.nonce)){var w;v.nonce=(w=l.csp)===null||w===void 0?void 0:w.nonce}return v.innerHTML!==h&&(v.innerHTML=h),v}var B=I(h,l);return B.setAttribute(c(l),m),B}},68016:function(N,E,e){var t=e(67294),b=e(68508),s=(0,b.Z)()?t.useLayoutEffect:t.useEffect,y=function(i,c){var p=t.useRef(!0);s(function(){return i(p.current)},c),s(function(){return p.current=!1,function(){p.current=!0}},[])},a=function(i,c){y(function(p){if(!p)return i()},c)};E.Z=y},43786:function(N,E,e){e.d(E,{Z:function(){return b}});var t=e(67294);function b(s,y,a){var f=t.useRef({});return(!("value"in f.current)||a(f.current.condition,y))&&(f.current.value=s(),f.current.condition=y),f.current.value}},98067:function(N,E,e){var t={},b=[],s=function(M){b.push(M)};function y(C,M){if(0)var I}function a(C,M){if(0)var I}function f(){t={}}function i(C,M,I){!M&&!t[I]&&(C(!1,I),t[I]=!0)}function c(C,M){i(y,C,M)}function p(C,M){i(a,C,M)}c.preMessage=s,c.resetWarned=f,c.noteOnce=p,E.ZP=c},66367:function(N,E,e){e.d(E,{F:function(){return t},Z:function(){return b}});function t(s){return s!=null&&s===s.window}function b(s,y){var a,f;if(typeof window=="undefined")return 0;const i=y?"scrollTop":"scrollLeft";let c=0;return t(s)?c=s[y?"pageYOffset":"pageXOffset"]:s instanceof Document?c=s.documentElement[i]:(s instanceof HTMLElement||s)&&(c=s[i]),s&&!t(s)&&typeof c!="number"&&(c=(f=((a=s.ownerDocument)!==null&&a!==void 0?a:s).documentElement)===null||f===void 0?void 0:f[i]),c}},58375:function(N,E,e){e.d(E,{Z:function(){return y}});var t=e(75164);function b(a,f,i,c){const p=i-f;return a/=c/2,a<1?p/2*a*a*a+f:p/2*((a-=2)*a*a+2)+f}var s=e(66367);function y(a){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{getContainer:i=()=>window,callback:c,duration:p=450}=f,C=i(),M=(0,s.Z)(C,!0),I=Date.now(),V=()=>{const $=Date.now()-I,K=b($>p?p:$,M,a,p);(0,s.F)(C)?C.scrollTo(window.pageXOffset,K):C instanceof Document||C.constructor.name==="HTMLDocument"?C.documentElement.scrollTop=K:C.scrollTop=K,$<p?(0,t.Z)(V):typeof c=="function"&&c()};(0,t.Z)(V)}},48783:function(N,E,e){var t=e(75177),b=e(75164);function s(y){let a;const f=c=>()=>{a=null,y.apply(void 0,(0,t.Z)(c))},i=function(){if(a==null){for(var c=arguments.length,p=new Array(c),C=0;C<c;C++)p[C]=arguments[C];a=(0,b.Z)(f(p))}};return i.cancel=()=>{b.Z.cancel(a),a=null},i}E.Z=s},25682:function(N,E,e){e.d(E,{ZP:function(){return Fe}});var t=e(67294),b=e.t(t,2),s=e(8722),y=e(63017),a=e(56982),f=e(8880),i=e(27288),c=(0,t.createContext)(void 0),p=e(81570);let C=Object.assign({},p.Z.Modal),M=[];const I=()=>M.reduce((u,o)=>Object.assign(Object.assign({},u),o),p.Z.Modal);function V(u){if(u){const o=Object.assign({},u);return M.push(o),C=I(),()=>{M=M.filter(d=>d!==o),C=I()}}C=Object.assign({},p.Z.Modal)}function Q(){return C}var $=e(76745);const K="internalMark";var h=u=>{const{locale:o={},children:d,_ANT_MARK__:g}=u;t.useEffect(()=>V(o&&o.Modal),[o]);const Z=t.useMemo(()=>Object.assign(Object.assign({},o),{exist:!0}),[o]);return t.createElement($.Z.Provider,{value:Z},d)},m=e(33083),S=e(2790),n=e(53124),r=e(84898),l=e(10274),v=e(98924),O=e(48981);const j=`-ant-${Date.now()}-${Math.random()}`;function w(u,o){const d={},g=(P,R)=>{let D=P.clone();return D=(R==null?void 0:R(D))||D,D.toRgbString()},Z=(P,R)=>{const D=new l.C(P),x=(0,r.generate)(D.toRgbString());d[`${R}-color`]=g(D),d[`${R}-color-disabled`]=x[1],d[`${R}-color-hover`]=x[4],d[`${R}-color-active`]=x[6],d[`${R}-color-outline`]=D.clone().setAlpha(.2).toRgbString(),d[`${R}-color-deprecated-bg`]=x[0],d[`${R}-color-deprecated-border`]=x[2]};if(o.primaryColor){Z(o.primaryColor,"primary");const P=new l.C(o.primaryColor),R=(0,r.generate)(P.toRgbString());R.forEach((x,k)=>{d[`primary-${k+1}`]=x}),d["primary-color-deprecated-l-35"]=g(P,x=>x.lighten(35)),d["primary-color-deprecated-l-20"]=g(P,x=>x.lighten(20)),d["primary-color-deprecated-t-20"]=g(P,x=>x.tint(20)),d["primary-color-deprecated-t-50"]=g(P,x=>x.tint(50)),d["primary-color-deprecated-f-12"]=g(P,x=>x.setAlpha(x.getAlpha()*.12));const D=new l.C(R[0]);d["primary-color-active-deprecated-f-30"]=g(D,x=>x.setAlpha(x.getAlpha()*.3)),d["primary-color-active-deprecated-d-02"]=g(D,x=>x.darken(2))}return o.successColor&&Z(o.successColor,"success"),o.warningColor&&Z(o.warningColor,"warning"),o.errorColor&&Z(o.errorColor,"error"),o.infoColor&&Z(o.infoColor,"info"),`
  :root {
    ${Object.keys(d).map(P=>`--${u}-${P}: ${d[P]};`).join(`
`)}
  }
  `.trim()}function B(u,o){const d=w(u,o);(0,v.Z)()&&(0,O.hq)(d,`${j}-dynamic-theme`)}var H=e(98866),W=e(97647);function te(){const u=(0,t.useContext)(H.Z),o=(0,t.useContext)(W.Z);return{componentDisabled:u,componentSize:o}}var ce=te,ge=e(91881);const le=Object.assign({},b),{useId:re}=le;var he=typeof re=="undefined"?()=>"":re;function Ce(u,o,d){var g,Z;const me=(0,i.ln)("ConfigProvider"),P=u||{},R=P.inherit===!1||!o?Object.assign(Object.assign({},m.u_),{hashed:(g=o==null?void 0:o.hashed)!==null&&g!==void 0?g:m.u_.hashed,cssVar:o==null?void 0:o.cssVar}):o,D=he();return(0,a.Z)(()=>{var x,k;if(!u)return o;const Y=Object.assign({},R.components);Object.keys(u.components||{}).forEach(ae=>{Y[ae]=Object.assign(Object.assign({},Y[ae]),u.components[ae])});const q=`css-var-${D.replace(/:/g,"")}`,X=((x=P.cssVar)!==null&&x!==void 0?x:R.cssVar)&&Object.assign(Object.assign(Object.assign({prefix:d==null?void 0:d.prefixCls},typeof R.cssVar=="object"?R.cssVar:{}),typeof P.cssVar=="object"?P.cssVar:{}),{key:typeof P.cssVar=="object"&&((k=P.cssVar)===null||k===void 0?void 0:k.key)||q});return Object.assign(Object.assign(Object.assign({},R),P),{token:Object.assign(Object.assign({},R.token),P.token),components:Y,cssVar:X})},[P,R],(x,k)=>x.some((Y,q)=>{const X=k[q];return!(0,ge.Z)(Y,X,!0)}))}var ye=e(29372),oe=e(25976);function be(u){const{children:o}=u,[,d]=(0,oe.ZP)(),{motion:g}=d,Z=t.useRef(!1);return Z.current=Z.current||g===!1,Z.current?t.createElement(ye.Provider,{motion:g},o):o}const ue=null;var Se=()=>null,De=e(53269),We=function(u,o){var d={};for(var g in u)Object.prototype.hasOwnProperty.call(u,g)&&o.indexOf(g)<0&&(d[g]=u[g]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Z=0,g=Object.getOwnPropertySymbols(u);Z<g.length;Z++)o.indexOf(g[Z])<0&&Object.prototype.propertyIsEnumerable.call(u,g[Z])&&(d[g[Z]]=u[g[Z]]);return d};let qn=!1;const _n=null,et=null,Ne=["getTargetContainer","getPopupContainer","renderEmpty","input","pagination","form","select","button"],$e="ant";let fe,Me,je,Re;function de(){return fe||$e}function Be(){return Me||defaultIconPrefixCls}function Ve(u){return Object.keys(u).some(o=>o.endsWith("Color"))}const Ke=u=>{const{prefixCls:o,iconPrefixCls:d,theme:g,holderRender:Z}=u;o!==void 0&&(fe=o),d!==void 0&&(Me=d),"holderRender"in u&&(Re=Z),g&&(Ve(g)?B(de(),g):je=g)},nt=()=>({getPrefixCls:(u,o)=>o||(u?`${de()}-${u}`:de()),getIconPrefixCls:Be,getRootPrefixCls:()=>fe||de(),getTheme:()=>je,holderRender:Re}),Ue=u=>{const{children:o,csp:d,autoInsertSpaceInButton:g,alert:Z,anchor:me,form:P,locale:R,componentSize:D,direction:x,space:k,virtual:Y,dropdownMatchSelectWidth:q,popupMatchSelectWidth:X,popupOverflow:ae,legacyLocale:ze,parentContext:_,iconPrefixCls:He,theme:Ze,componentDisabled:we,segmented:ke,statistic:Ge,spin:Qe,calendar:Ye,carousel:Xe,cascader:Je,collapse:qe,typography:_e,checkbox:en,descriptions:nn,divider:tn,drawer:rn,skeleton:on,steps:an,image:sn,layout:cn,list:ln,mentions:un,modal:fn,progress:dn,result:mn,slider:vn,breadcrumb:gn,menu:pn,pagination:hn,input:Cn,textArea:yn,empty:bn,badge:xn,radio:On,rate:Pn,switch:En,transfer:Sn,avatar:Mn,message:jn,tag:Rn,table:Zn,card:wn,tabs:An,timeline:In,timePicker:Tn,upload:Ln,notification:Dn,tree:Wn,colorPicker:Nn,datePicker:$n,rangePicker:Bn,flex:Vn,wave:Kn,dropdown:Un,warning:Fn,tour:zn,floatButtonGroup:Hn}=u,Ae=t.useCallback((A,L)=>{const{prefixCls:U}=u;if(L)return L;const F=U||_.getPrefixCls("");return A?`${F}-${A}`:F},[_.getPrefixCls,u.prefixCls]),ie=He||_.iconPrefixCls||n.oR,se=d||_.csp;(0,De.Z)(ie,se);const xe=Ce(Ze,_.theme,{prefixCls:Ae("")}),Oe={csp:se,autoInsertSpaceInButton:g,alert:Z,anchor:me,locale:R||ze,direction:x,space:k,virtual:Y,popupMatchSelectWidth:X!=null?X:q,popupOverflow:ae,getPrefixCls:Ae,iconPrefixCls:ie,theme:xe,segmented:ke,statistic:Ge,spin:Qe,calendar:Ye,carousel:Xe,cascader:Je,collapse:qe,typography:_e,checkbox:en,descriptions:nn,divider:tn,drawer:rn,skeleton:on,steps:an,image:sn,input:Cn,textArea:yn,layout:cn,list:ln,mentions:un,modal:fn,progress:dn,result:mn,slider:vn,breadcrumb:gn,menu:pn,pagination:hn,empty:bn,badge:xn,radio:On,rate:Pn,switch:En,transfer:Sn,avatar:Mn,message:jn,tag:Rn,table:Zn,card:wn,tabs:An,timeline:In,timePicker:Tn,upload:Ln,notification:Dn,tree:Wn,colorPicker:Nn,datePicker:$n,rangePicker:Bn,flex:Vn,wave:Kn,dropdown:Un,warning:Fn,tour:zn,floatButtonGroup:Hn},ee=Object.assign({},_);Object.keys(Oe).forEach(A=>{Oe[A]!==void 0&&(ee[A]=Oe[A])}),Ne.forEach(A=>{const L=u[A];L&&(ee[A]=L)}),typeof g!="undefined"&&(ee.button=Object.assign({autoInsertSpace:g},ee.button));const ne=(0,a.Z)(()=>ee,ee,(A,L)=>{const U=Object.keys(A),F=Object.keys(L);return U.length!==F.length||U.some(ve=>A[ve]!==L[ve])}),kn=t.useMemo(()=>({prefixCls:ie,csp:se}),[ie,se]);let T=t.createElement(t.Fragment,null,t.createElement(Se,{dropdownMatchSelectWidth:q}),o);const Ie=t.useMemo(()=>{var A,L,U,F;return(0,f.T)(((A=p.Z.Form)===null||A===void 0?void 0:A.defaultValidateMessages)||{},((U=(L=ne.locale)===null||L===void 0?void 0:L.Form)===null||U===void 0?void 0:U.defaultValidateMessages)||{},((F=ne.form)===null||F===void 0?void 0:F.validateMessages)||{},(P==null?void 0:P.validateMessages)||{})},[ne,P==null?void 0:P.validateMessages]);Object.keys(Ie).length>0&&(T=t.createElement(c.Provider,{value:Ie},T)),R&&(T=t.createElement(h,{locale:R,_ANT_MARK__:K},T)),(ie||se)&&(T=t.createElement(y.Z.Provider,{value:kn},T)),D&&(T=t.createElement(W.q,{size:D},T)),T=t.createElement(be,null,T);const Gn=t.useMemo(()=>{const A=xe||{},{algorithm:L,token:U,components:F,cssVar:ve}=A,Qn=We(A,["algorithm","token","components","cssVar"]),Te=L&&(!Array.isArray(L)||L.length>0)?(0,s.createTheme)(L):m.uH,Pe={};Object.entries(F||{}).forEach(Yn=>{let[Xn,Jn]=Yn;const G=Object.assign({},Jn);"algorithm"in G&&(G.algorithm===!0?G.theme=Te:(Array.isArray(G.algorithm)||typeof G.algorithm=="function")&&(G.theme=(0,s.createTheme)(G.algorithm)),delete G.algorithm),Pe[Xn]=G});const Le=Object.assign(Object.assign({},S.Z),U);return Object.assign(Object.assign({},Qn),{theme:Te,token:Le,components:Pe,override:Object.assign({override:Le},Pe),cssVar:ve})},[xe]);return Ze&&(T=t.createElement(m.Mj.Provider,{value:Gn},T)),ne.warning&&(T=t.createElement(i.G8.Provider,{value:ne.warning},T)),we!==void 0&&(T=t.createElement(H.n,{disabled:we},T)),t.createElement(n.E_.Provider,{value:ne},T)},J=u=>{const o=t.useContext(n.E_),d=t.useContext($.Z);return t.createElement(Ue,Object.assign({parentContext:o,legacyLocale:d},u))};J.ConfigContext=n.E_,J.SizeContext=W.Z,J.config=Ke,J.useConfig=ce,Object.defineProperty(J,"SizeContext",{get:()=>W.Z});var Fe=J},5456:function(N,E,e){e.d(E,{Z:function(){return b}});function t(s,y){if(s==null)return{};var a={},f=Object.keys(s),i,c;for(c=0;c<f.length;c++)i=f[c],!(y.indexOf(i)>=0)&&(a[i]=s[i]);return a}function b(s,y){if(s==null)return{};var a=t(s,y),f,i;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(i=0;i<c.length;i++)f=c[i],!(y.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(s,f)&&(a[f]=s[f])}return a}},50978:function(N,E,e){e.d(E,{Z:function(){return f}});var t=e(36485);function b(i){if(Array.isArray(i))return(0,t.Z)(i)}function s(i){if(typeof Symbol!="undefined"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}var y=e(2975);function a(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(i){return b(i)||s(i)||(0,y.Z)(i)||a()}}}]);
