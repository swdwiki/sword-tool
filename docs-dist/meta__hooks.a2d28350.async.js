"use strict";(self.webpackChunksword_tool=self.webpackChunksword_tool||[]).push([[518],{3098:function(s,e,n){n.r(e),n.d(e,{demos:function(){return c}});var u=n(90228),t=n.n(u),_=n(87999),d=n.n(_),r=n(75271),f=n(67502),c={"usetouch-demo-default":{component:r.memo(r.lazy(function(){return n.e(660).then(n.bind(n,3106))})),asset:{type:"BLOCK",id:"usetouch-demo-default",refAtomIds:["useTouch"],dependencies:{"index.tsx":{type:"FILE",value:n(37657).Z},"sword-tool":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"sword-tool":n(35086),react:n(75271)},renderOpts:{compile:function(){var l=d()(t()().mark(function i(){var a,h=arguments;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(862).then(n.bind(n,98862));case 2:return o.abrupt("return",(a=o.sent).default.apply(a,h));case 3:case"end":return o.stop()}},i)}));function m(){return l.apply(this,arguments)}return m}()}}}},70136:function(s,e,n){n.r(e),n.d(e,{demos:function(){return c}});var u=n(90228),t=n.n(u),_=n(87999),d=n.n(_),r=n(75271),f=n(87049),c={"usetouchevent-demo-default":{component:r.memo(r.lazy(function(){return n.e(26).then(n.bind(n,24388))})),asset:{type:"BLOCK",id:"usetouchevent-demo-default",refAtomIds:["useTouchEvent"],dependencies:{"index.tsx":{type:"FILE",value:n(58887).Z},"sword-tool":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"},"./index.scss":{type:"FILE",value:n(96472).Z}},entry:"index.tsx"},context:{"sword-tool":n(35086),react:n(75271),"./index.scss":n(17560)},renderOpts:{compile:function(){var l=d()(t()().mark(function i(){var a,h=arguments;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(862).then(n.bind(n,98862));case 2:return o.abrupt("return",(a=o.sent).default.apply(a,h));case 3:case"end":return o.stop()}},i)}));function m(){return l.apply(this,arguments)}return m}()}}}},17560:function(s,e,n){n.r(e)},41618:function(s,e,n){n.r(e),n.d(e,{texts:function(){return t}});var u=n(67502);const t=[{value:"\u7528\u4E8E\u8BA1\u7B97\u89E6\u6478\u4E8B\u4EF6\u7684\u53C2\u6570\uFF0C\u83B7\u53D6\u89E6\u6478\u5F00\u59CB\u7684\u5750\u6807\u548C\u89E6\u6478\u8DDD\u79BB\u3001\u4F4D\u79FB\u7B49\u4FE1\u606F\u3002",paraId:0,tocIndex:0}]},9090:function(s,e,n){n.r(e),n.d(e,{texts:function(){return t}});var u=n(87049);const t=[{value:"\u4E00\u4E2A\u517C\u5BB9pc\u7AEF\u548C\u79FB\u52A8\u7AEF\u7684\u89E6\u6478\u4E8B\u4EF6\u7684\u94A9\u5B50\u3002",paraId:0,tocIndex:0}]},37657:function(s,e){e.Z=`import { useRender, useTouch } from "sword-tool";
import React from "react";

export default () => {
  const touch = useTouch();
  const { renderFn } = useRender();
  function onTouchStart(e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) {
    touch.start(e)
  }
  function onTouchMove(e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) {
    touch.move(e);
    renderFn();
  }
  return (
    <div
      className="example-use-touch"
      onMouseDown={onTouchStart}
      onMouseMove={onTouchMove}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      style={{height: 500, background: '#f1f2f4', userSelect: 'none'}}
    >
        <h3>\u5F53\u524D\u6700\u65B0\u70B9\u51FB\u70B9\u5750\u6807\uFF1A({touch.info.startX},{touch.info.startY})</h3>
      <h4>ClickDeltaX: {touch.info.startX}</h4>
      <h4>ClickDeltaY: {touch.info.startY}</h4>
      <h3>\u4EE5\u5F53\u524D\u70B9\u51FB\u70B9\u4E3A\u539F\u70B9\u7684\u9F20\u6807\u79FB\u52A8\u5750\u6807\uFF1A\uFF08{touch.info.deltaX}\uFF0C{touch.info.deltaY}\uFF09</h3>
      <h4>MoveDeltaX: {touch.info.deltaX}</h4>
      <h4>MoveDeltaY: {touch.info.deltaY}</h4>
    </div>
  )
}`},58887:function(s,e){e.Z=`import { useTouchEvent } from "sword-tool";
import React, { useRef, useState } from "react";
import './index.scss';

export default () => {
  const domInfo = useRef({
    startX: 0,
    startY: 0,
  })
  const [dom, setDom] = useState({
    x: 0,
    y: 0,
  });

  const { info, onTouchFn } = useTouchEvent({
    onTouchStart() {
      domInfo.current.startX = dom.x
      domInfo.current.startY = dom.y
    },
    onTouchMove() {
      setDom({ 
        x: domInfo.current.startX + info.deltaX, 
        y: domInfo.current.startY + info.deltaY 
      });
    },
    onTouchEnd(e) {
      console.log('onTouchEnd: ', e);
    },
  });

  return (
    <div className="example-useTouchEvent">
      <div
        className="ball"
        style={{
          transform: \`translate(\${dom.x}px, \${dom.y}px)\`,
          // \u79FB\u52A8\u7AEF\u4E0B\uFF0C\u5EFA\u8BAE\u6DFB\u52A0\u8BE5\u5C5E\u6027
          touchAction: 'none'
        }}
        {...onTouchFn}
      >
        \u79FB\u52A8
      </div>
    </div>
  );
}`},96472:function(s,e){e.Z=`.example-useTouchEvent {
    position: relative;
    height: 200px;
    background-color: #f1f1f1;
    .ball {
      position: absolute;
      top: 0;
      left: 0;
      width: 80px;
      height: 80px;
      color: #fff;
      font-size: 16px;
      line-height: 80px;
      text-align: center;
      background-color: skyblue;
      border-radius: 50%;
      user-select: none;
    }
  }`}}]);
