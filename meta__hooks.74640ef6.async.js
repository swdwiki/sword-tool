"use strict";(self.webpackChunksword_tool=self.webpackChunksword_tool||[]).push([[518],{66302:function(t,o,n){n.r(o),n.d(o,{demos:function(){return c}});var s=n(17061),r=n.n(s),d=n(17156),a=n.n(d),u=n(67294),c={"usetouch-demo-default":{component:u.memo(u.lazy(function(){return n.e(660).then(n.bind(n,9331))})),asset:{type:"BLOCK",id:"usetouch-demo-default",refAtomIds:["useTouch"],dependencies:{"index.tsx":{type:"FILE",value:n(92330).Z},"sword-tool":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"sword-tool":n(73597),react:n(67294)},renderOpts:{compile:function(){var m=a()(r()().mark(function i(){var l,f=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,f));case 3:case"end":return e.stop()}},i)}));function h(){return m.apply(this,arguments)}return h}()}}}},91777:function(t,o,n){n.r(o),n.d(o,{demos:function(){return c}});var s=n(17061),r=n.n(s),d=n(17156),a=n.n(d),u=n(67294),c={"usetouchevent-demo-default":{component:u.memo(u.lazy(function(){return n.e(26).then(n.bind(n,93065))})),asset:{type:"BLOCK",id:"usetouchevent-demo-default",refAtomIds:["useTouchEvent"],dependencies:{"index.tsx":{type:"FILE",value:n(8313).Z},"sword-tool":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"},"./index.scss":{type:"FILE",value:n(95167).Z}},entry:"index.tsx"},context:{"sword-tool":n(73597),react:n(67294),"./index.scss":n(22102)},renderOpts:{compile:function(){var m=a()(r()().mark(function i(){var l,f=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,f));case 3:case"end":return e.stop()}},i)}));function h(){return m.apply(this,arguments)}return h}()}}}},22102:function(t,o,n){n.r(o)},8651:function(t,o,n){n.r(o),n.d(o,{texts:function(){return s}});const s=[{value:"\u7528\u4E8E\u8BA1\u7B97\u89E6\u6478\u4E8B\u4EF6\u7684\u53C2\u6570\uFF0C\u83B7\u53D6\u89E6\u6478\u5F00\u59CB\u7684\u5750\u6807\u548C\u89E6\u6478\u8DDD\u79BB\u3001\u4F4D\u79FB\u7B49\u4FE1\u606F\u3002",paraId:0,tocIndex:0}]},38432:function(t,o,n){n.r(o),n.d(o,{texts:function(){return s}});const s=[{value:"\u4E00\u4E2A\u517C\u5BB9pc\u7AEF\u548C\u79FB\u52A8\u7AEF\u7684\u89E6\u6478\u4E8B\u4EF6\u7684\u94A9\u5B50\u3002",paraId:0,tocIndex:0}]},92330:function(t,o){o.Z=`import { useRender, useTouch } from "sword-tool";
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
}`},8313:function(t,o){o.Z=`import { useTouchEvent } from "sword-tool";
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
}`},95167:function(t,o){o.Z=`.example-useTouchEvent {
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
