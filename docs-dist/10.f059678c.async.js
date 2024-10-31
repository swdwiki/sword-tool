"use strict";(self.webpackChunksword_tool=self.webpackChunksword_tool||[]).push([[10],{22845:function(K,b,e){var t=e(75271),C=(0,t.createContext)({});b.Z=C},64680:function(K,b,e){var t=e(59849),C=e(78405),l=e(74948),x=e(97808),a=e(75271),g=e(82187),d=e.n(g),M=e(47486),h=e(22845),f=e(23920),T=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],j=a.forwardRef(function(P,J){var R=P.className,S=P.component,U=P.viewBox,Q=P.spin,s=P.rotate,E=P.tabIndex,p=P.onClick,y=P.children,A=(0,x.Z)(P,T),w=a.useRef(),q=(0,M.x1)(w,J);(0,f.Kp)(!!(S||y),"Should have `component` prop or `children`."),(0,f.C3)(w);var N=a.useContext(h.Z),re=N.prefixCls,ae=re===void 0?"anticon":re,se=N.rootClassName,z=d()(se,ae,R),ue=d()((0,l.Z)({},"".concat(ae,"-spin"),!!Q)),fe=s?{msTransform:"rotate(".concat(s,"deg)"),transform:"rotate(".concat(s,"deg)")}:void 0,ee=(0,C.Z)((0,C.Z)({},f.vD),{},{className:ue,style:fe,viewBox:U});U||delete ee.viewBox;var me=function(){return S?a.createElement(S,ee,y):y?((0,f.Kp)(!!U||a.Children.count(y)===1&&a.isValidElement(y)&&a.Children.only(y).type==="use","Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),a.createElement("svg",(0,t.Z)({},ee,{viewBox:U}),y)):null},F=E;return F===void 0&&p&&(F=-1),a.createElement("span",(0,t.Z)({role:"img"},A,{ref:q,tabIndex:F,onClick:p,className:z}),me())});j.displayName="AntdIcon",b.Z=j},23920:function(K,b,e){e.d(b,{C3:function(){return Q},H9:function(){return R},Kp:function(){return f},R_:function(){return P},pw:function(){return J},r:function(){return T},vD:function(){return S}});var t=e(78405),C=e(91102),l=e(75875),x=e(84041),a=e(58223),g=e(7302),d=e(75271),M=e(22845);function h(s){return s.replace(/-(.)/g,function(E,p){return p.toUpperCase()})}function f(s,E){(0,g.ZP)(s,"[@ant-design/icons] ".concat(E))}function T(s){return(0,C.Z)(s)==="object"&&typeof s.name=="string"&&typeof s.theme=="string"&&((0,C.Z)(s.icon)==="object"||typeof s.icon=="function")}function j(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(s).reduce(function(E,p){var y=s[p];switch(p){case"class":E.className=y,delete E.class;break;default:delete E[p],E[h(p)]=y}return E},{})}function P(s,E,p){return p?d.createElement(s.tag,(0,t.Z)((0,t.Z)({key:E},j(s.attrs)),p),(s.children||[]).map(function(y,A){return P(y,"".concat(E,"-").concat(s.tag,"-").concat(A))})):d.createElement(s.tag,(0,t.Z)({key:E},j(s.attrs)),(s.children||[]).map(function(y,A){return P(y,"".concat(E,"-").concat(s.tag,"-").concat(A))}))}function J(s){return(0,l.generate)(s)[0]}function R(s){return s?Array.isArray(s)?s:[s]:[]}var S={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},U=`
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
`,Q=function(E){var p=(0,d.useContext)(M.Z),y=p.csp,A=p.prefixCls,w=U;A&&(w=w.replace(/anticon/g,A)),(0,d.useEffect)(function(){var q=E.current,N=(0,a.A)(q);(0,x.hq)(w,"@ant-design-icons",{prepend:!0,csp:y,attachTo:N})},[])}},38848:function(K,b,e){e.d(b,{Z:function(){return M}});var t=e(59849),C=e(75271),l={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},x=l,a=e(61949),g=function(f,T){return C.createElement(a.Z,(0,t.Z)({},f,{ref:T,icon:x}))},d=C.forwardRef(g),M=d},84566:function(K,b,e){e.d(b,{F:function(){return t}});function t(l){return l!=null&&l===l.window}const C=l=>{var x,a;if(typeof window=="undefined")return 0;let g=0;return t(l)?g=l.pageYOffset:l instanceof Document?g=l.documentElement.scrollTop:(l instanceof HTMLElement||l)&&(g=l.scrollTop),l&&!t(l)&&typeof g!="number"&&(g=(a=((x=l.ownerDocument)!==null&&x!==void 0?x:l).documentElement)===null||a===void 0?void 0:a.scrollTop),g};b.Z=C},37872:function(K,b,e){e.d(b,{Z:function(){return x}});var t=e(87564);function C(a,g,d,M){const h=d-g;return a/=M/2,a<1?h/2*a*a*a+g:h/2*((a-=2)*a*a+2)+g}var l=e(84566);function x(a){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{getContainer:d=()=>window,callback:M,duration:h=450}=g,f=d(),T=(0,l.Z)(f),j=Date.now(),P=()=>{const R=Date.now()-j,S=C(R>h?h:R,T,a,h);(0,l.F)(f)?f.scrollTo(window.pageXOffset,S):f instanceof Document||f.constructor.name==="HTMLDocument"?f.documentElement.scrollTop=S:f.scrollTop=S,R<h?(0,t.Z)(P):typeof M=="function"&&M()};(0,t.Z)(P)}},55706:function(K,b,e){var t=e(80057),C=e(87564);function l(x){let a;const g=M=>()=>{a=null,x.apply(void 0,(0,t.Z)(M))},d=function(){if(a==null){for(var M=arguments.length,h=new Array(M),f=0;f<M;f++)h[f]=arguments[f];a=(0,C.Z)(g(h))}};return d.cancel=()=>{C.Z.cancel(a),a=null},d}b.Z=l},35934:function(K,b,e){e.d(b,{ZP:function(){return Ue}});var t=e(75271),C=e.t(t,2),l=e(92803),x=e(9154),a=e(9839),g=e(26209),d=e(39545),M=(0,t.createContext)(void 0),h=e(25268);let f=Object.assign({},h.Z.Modal),T=[];const j=()=>T.reduce((o,n)=>Object.assign(Object.assign({},o),n),h.Z.Modal);function P(o){if(o){const n=Object.assign({},o);return T.push(n),f=j(),()=>{T=T.filter(r=>r!==n),f=j()}}f=Object.assign({},h.Z.Modal)}function J(){return f}var R=e(82433);const S="internalMark";var Q=o=>{const{locale:n={},children:r,_ANT_MARK__:i}=o;t.useEffect(()=>P(n==null?void 0:n.Modal),[n]);const v=t.useMemo(()=>Object.assign(Object.assign({},n),{exist:!0}),[n]);return t.createElement(R.Z.Provider,{value:v},r)},s=e(31713),E=e(19142),p=e(26089),y=e(75875),A=e(99978),w=e(67042),q=e(84041);const N=`-ant-${Date.now()}-${Math.random()}`;function re(o,n){const r={},i=(u,m)=>{let D=u.clone();return D=(m==null?void 0:m(D))||D,D.toRgbString()},v=(u,m)=>{const D=new A.C(u),c=(0,y.generate)(D.toRgbString());r[`${m}-color`]=i(D),r[`${m}-color-disabled`]=c[1],r[`${m}-color-hover`]=c[4],r[`${m}-color-active`]=c[6],r[`${m}-color-outline`]=D.clone().setAlpha(.2).toRgbString(),r[`${m}-color-deprecated-bg`]=c[0],r[`${m}-color-deprecated-border`]=c[2]};if(n.primaryColor){v(n.primaryColor,"primary");const u=new A.C(n.primaryColor),m=(0,y.generate)(u.toRgbString());m.forEach((c,W)=>{r[`primary-${W+1}`]=c}),r["primary-color-deprecated-l-35"]=i(u,c=>c.lighten(35)),r["primary-color-deprecated-l-20"]=i(u,c=>c.lighten(20)),r["primary-color-deprecated-t-20"]=i(u,c=>c.tint(20)),r["primary-color-deprecated-t-50"]=i(u,c=>c.tint(50)),r["primary-color-deprecated-f-12"]=i(u,c=>c.setAlpha(c.getAlpha()*.12));const D=new A.C(m[0]);r["primary-color-active-deprecated-f-30"]=i(D,c=>c.setAlpha(c.getAlpha()*.3)),r["primary-color-active-deprecated-d-02"]=i(D,c=>c.darken(2))}return n.successColor&&v(n.successColor,"success"),n.warningColor&&v(n.warningColor,"warning"),n.errorColor&&v(n.errorColor,"error"),n.infoColor&&v(n.infoColor,"info"),`
  :root {
    ${Object.keys(r).map(u=>`--${o}-${u}: ${r[u]};`).join(`
`)}
  }
  `.trim()}function ae(o,n){const r=re(o,n);(0,w.Z)()&&(0,q.hq)(r,`${N}-dynamic-theme`)}var se=e(46830),z=e(15161);function ue(){const o=(0,t.useContext)(se.Z),n=(0,t.useContext)(z.Z);return{componentDisabled:o,componentSize:n}}var fe=ue,ee=e(26920);const me=Object.assign({},C),{useId:F}=me;var Ie=typeof F=="undefined"?()=>"":F;function De(o,n,r){var i,v;const ce=(0,d.ln)("ConfigProvider"),u=o||{},m=u.inherit===!1||!n?Object.assign(Object.assign({},s.u_),{hashed:(i=n==null?void 0:n.hashed)!==null&&i!==void 0?i:s.u_.hashed,cssVar:n==null?void 0:n.cssVar}):n,D=Ie();return(0,a.Z)(()=>{var c,W;if(!o)return n;const $=Object.assign({},m.components);Object.keys(o.components||{}).forEach(ne=>{$[ne]=Object.assign(Object.assign({},$[ne]),o.components[ne])});const k=`css-var-${D.replace(/:/g,"")}`,V=((c=u.cssVar)!==null&&c!==void 0?c:m.cssVar)&&Object.assign(Object.assign(Object.assign({prefix:r==null?void 0:r.prefixCls},typeof m.cssVar=="object"?m.cssVar:{}),typeof u.cssVar=="object"?u.cssVar:{}),{key:typeof u.cssVar=="object"&&((W=u.cssVar)===null||W===void 0?void 0:W.key)||k});return Object.assign(Object.assign(Object.assign({},m),u),{token:Object.assign(Object.assign({},m.token),u.token),components:$,cssVar:V})},[u,m],(c,W)=>c.some(($,k)=>{const V=W[k];return!(0,ee.Z)($,V,!0)}))}var Te=e(1354),Ae=e(37720);function Se(o){const{children:n}=o,[,r]=(0,Ae.ZP)(),{motion:i}=r,v=t.useRef(!1);return v.current=v.current||i===!1,v.current?t.createElement(Te.Provider,{motion:i},n):n}const qn=null;var je=()=>null,Re=e(44968),Ze=function(o,n){var r={};for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&n.indexOf(i)<0&&(r[i]=o[i]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,i=Object.getOwnPropertySymbols(o);v<i.length;v++)n.indexOf(i[v])<0&&Object.prototype.propertyIsEnumerable.call(o,i[v])&&(r[i[v]]=o[i[v]]);return r};let et=!1;const nt=null,tt=null,Le=["getTargetContainer","getPopupContainer","renderEmpty","input","pagination","form","select","button"];let ie,pe,he,Ee;function le(){return ie||p.Rf}function We(){return pe||defaultIconPrefixCls}function Be(o){return Object.keys(o).some(n=>n.endsWith("Color"))}const Ke=o=>{const{prefixCls:n,iconPrefixCls:r,theme:i,holderRender:v}=o;n!==void 0&&(ie=n),r!==void 0&&(pe=r),"holderRender"in o&&(Ee=v),i&&(Be(i)?ae(le(),i):he=i)},ot=()=>({getPrefixCls:(o,n)=>n||(o?`${le()}-${o}`:le()),getIconPrefixCls:We,getRootPrefixCls:()=>ie||le(),getTheme:()=>he,holderRender:Ee}),we=o=>{const{children:n,csp:r,autoInsertSpaceInButton:i,alert:v,anchor:ce,form:u,locale:m,componentSize:D,direction:c,space:W,virtual:$,dropdownMatchSelectWidth:k,popupMatchSelectWidth:V,popupOverflow:ne,legacyLocale:$e,parentContext:G,iconPrefixCls:Ve,theme:ye,componentDisabled:Oe,segmented:Ne,statistic:ze,spin:Fe,calendar:He,carousel:ke,cascader:Ge,collapse:Xe,typography:Ye,checkbox:Je,descriptions:Qe,divider:qe,drawer:en,skeleton:nn,steps:tn,image:on,layout:rn,list:an,mentions:sn,modal:ln,progress:cn,result:dn,slider:un,breadcrumb:fn,menu:mn,pagination:gn,input:vn,textArea:Cn,empty:pn,badge:hn,radio:En,rate:yn,switch:On,transfer:bn,avatar:Pn,message:xn,tag:Mn,table:_n,card:In,tabs:Dn,timeline:Tn,timePicker:An,upload:Sn,notification:jn,tree:Rn,colorPicker:Zn,datePicker:Ln,rangePicker:Wn,flex:Bn,wave:Kn,dropdown:wn,warning:Un,tour:$n,floatButtonGroup:Vn,variant:Nn,inputNumber:zn,treeSelect:Fn}=o,be=t.useCallback((O,I)=>{const{prefixCls:Z}=o;if(I)return I;const L=Z||G.getPrefixCls("");return O?`${L}-${O}`:L},[G.getPrefixCls,o.prefixCls]),te=Ve||G.iconPrefixCls||p.oR,oe=r||G.csp;(0,Re.Z)(te,oe);const ge=De(ye,G.theme,{prefixCls:be("")}),ve={csp:oe,autoInsertSpaceInButton:i,alert:v,anchor:ce,locale:m||$e,direction:c,space:W,virtual:$,popupMatchSelectWidth:V!=null?V:k,popupOverflow:ne,getPrefixCls:be,iconPrefixCls:te,theme:ge,segmented:Ne,statistic:ze,spin:Fe,calendar:He,carousel:ke,cascader:Ge,collapse:Xe,typography:Ye,checkbox:Je,descriptions:Qe,divider:qe,drawer:en,skeleton:nn,steps:tn,image:on,input:vn,textArea:Cn,layout:rn,list:an,mentions:sn,modal:ln,progress:cn,result:dn,slider:un,breadcrumb:fn,menu:mn,pagination:gn,empty:pn,badge:hn,radio:En,rate:yn,switch:On,transfer:bn,avatar:Pn,message:xn,tag:Mn,table:_n,card:In,tabs:Dn,timeline:Tn,timePicker:An,upload:Sn,notification:jn,tree:Rn,colorPicker:Zn,datePicker:Ln,rangePicker:Wn,flex:Bn,wave:Kn,dropdown:wn,warning:Un,tour:$n,floatButtonGroup:Vn,variant:Nn,inputNumber:zn,treeSelect:Fn},X=Object.assign({},G);Object.keys(ve).forEach(O=>{ve[O]!==void 0&&(X[O]=ve[O])}),Le.forEach(O=>{const I=o[O];I&&(X[O]=I)}),typeof i!="undefined"&&(X.button=Object.assign({autoInsertSpace:i},X.button));const Y=(0,a.Z)(()=>X,X,(O,I)=>{const Z=Object.keys(O),L=Object.keys(I);return Z.length!==L.length||Z.some(de=>O[de]!==I[de])}),Hn=t.useMemo(()=>({prefixCls:te,csp:oe}),[te,oe]);let _=t.createElement(t.Fragment,null,t.createElement(je,{dropdownMatchSelectWidth:k}),n);const Pe=t.useMemo(()=>{var O,I,Z,L;return(0,g.T)(((O=h.Z.Form)===null||O===void 0?void 0:O.defaultValidateMessages)||{},((Z=(I=Y.locale)===null||I===void 0?void 0:I.Form)===null||Z===void 0?void 0:Z.defaultValidateMessages)||{},((L=Y.form)===null||L===void 0?void 0:L.validateMessages)||{},(u==null?void 0:u.validateMessages)||{})},[Y,u==null?void 0:u.validateMessages]);Object.keys(Pe).length>0&&(_=t.createElement(M.Provider,{value:Pe},_)),m&&(_=t.createElement(Q,{locale:m,_ANT_MARK__:S},_)),(te||oe)&&(_=t.createElement(x.Z.Provider,{value:Hn},_)),D&&(_=t.createElement(z.q,{size:D},_)),_=t.createElement(Se,null,_);const kn=t.useMemo(()=>{const O=ge||{},{algorithm:I,token:Z,components:L,cssVar:de}=O,Gn=Ze(O,["algorithm","token","components","cssVar"]),xe=I&&(!Array.isArray(I)||I.length>0)?(0,l.createTheme)(I):s.uH,Ce={};Object.entries(L||{}).forEach(Xn=>{let[Yn,Jn]=Xn;const B=Object.assign({},Jn);"algorithm"in B&&(B.algorithm===!0?B.theme=xe:(Array.isArray(B.algorithm)||typeof B.algorithm=="function")&&(B.theme=(0,l.createTheme)(B.algorithm)),delete B.algorithm),Ce[Yn]=B});const Me=Object.assign(Object.assign({},E.Z),Z);return Object.assign(Object.assign({},Gn),{theme:xe,token:Me,components:Ce,override:Object.assign({override:Me},Ce),cssVar:de})},[ge]);return ye&&(_=t.createElement(s.Mj.Provider,{value:kn},_)),Y.warning&&(_=t.createElement(d.G8.Provider,{value:Y.warning},_)),Oe!==void 0&&(_=t.createElement(se.n,{disabled:Oe},_)),t.createElement(p.E_.Provider,{value:Y},_)},H=o=>{const n=t.useContext(p.E_),r=t.useContext(R.Z);return t.createElement(we,Object.assign({parentContext:n,legacyLocale:r},o))};H.ConfigContext=p.E_,H.SizeContext=z.Z,H.config=Ke,H.useConfig=fe,Object.defineProperty(H,"SizeContext",{get:()=>z.Z});var Ue=H},19144:function(K,b,e){e.d(b,{Z:function(){return g}});var t=e(25346);function C(d){if(Array.isArray(d))return(0,t.Z)(d)}function l(d){if(typeof Symbol!="undefined"&&d[Symbol.iterator]!=null||d["@@iterator"]!=null)return Array.from(d)}var x=e(83169);function a(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(d){return C(d)||l(d)||(0,x.Z)(d)||a()}}}]);
