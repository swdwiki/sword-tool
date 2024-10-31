"use strict";(self.webpackChunksword_tool=self.webpackChunksword_tool||[]).push([[838],{24614:function(r,t,n){n.r(t),n.d(t,{demos:function(){return f}});var d=n(17061),l=n.n(d),z=n(17156),p=n.n(z),s=n(67294),f={"puzzle-demo-default":{component:s.memo(s.lazy(function(){return n.e(675).then(n.bind(n,29511))})),asset:{type:"BLOCK",id:"puzzle-demo-default",refAtomIds:["Puzzle"],dependencies:{"index.tsx":{type:"FILE",value:n(28771).Z},"sword-tool":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"sword-tool":n(73597),react:n(67294)},renderOpts:{compile:function(){var u=p()(l()().mark(function i(){var o,m=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,m));case 3:case"end":return e.stop()}},i)}));function a(){return u.apply(this,arguments)}return a}()}},"puzzle-demo-image_puzzle":{component:s.memo(s.lazy(function(){return n.e(675).then(n.bind(n,87799))})),asset:{type:"BLOCK",id:"puzzle-demo-image_puzzle",refAtomIds:["Puzzle"],dependencies:{"index.tsx":{type:"FILE",value:n(37161).Z},"sword-tool":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"sword-tool":n(73597),react:n(67294)},renderOpts:{compile:function(){var u=p()(l()().mark(function i(){var o,m=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,m));case 3:case"end":return e.stop()}},i)}));function a(){return u.apply(this,arguments)}return a}()}}}},53617:function(r,t,n){n.r(t),n.d(t,{texts:function(){return d}});const d=[{value:"\u62FC\u56FE\u6ED1\u5757\u7EC4\u4EF6",paraId:0,tocIndex:0}]},28771:function(r,t){t.Z=`import { isMobile, SwordPuzzle, PuzzleInstance } from 'sword-tool';
import React, { useRef, useState } from 'react';

const list = Array.from({ length: 8 }, (_, i) => ({ id: \`id-\${i}\` }));
export default () => {
  const puzzleRef = useRef<PuzzleInstance>(null);
  const [isGameMode, setIsGameMode] = useState(false);
  return (
    <div>
      <SwordPuzzle
        ref={puzzleRef}
        // \u6570\u7EC4\u7684\u957F\u5EA6\u9700\u8981\u8BBE\u7F6E
        listLength={list.length}
        // \u5BBD\u9AD8\u5FC5\u987B\u8BBE\u7F6E
        style={{ width: '300px', height: '300px' }}
        isGameMode={isGameMode}
        onComplete={() => {
          setTimeout(() => {
            alert('\u606D\u559C\u4F60\u5B8C\u6210\u4E86\u62FC\u56FE');
          }, 400);
        }}
      >
        {list.map((item, index) => (
          <SwordPuzzle.Item key={item.id} index={index} style={{ background: '#222' }}>
            <h4 style={{ color: '#fff' }}>{item.id}</h4>
            <SwordPuzzle.Canvas index={index} />
          </SwordPuzzle.Item>
        ))}
        {/* \u8FD9\u91CC\u662F\u5B8C\u6574\u7684\u62FC\u56FE */}
        {isGameMode ? (
          <SwordPuzzle.Canvas
            style={{
              position: 'absolute',
              top: isMobile() ? -100 : 0,
              left: isMobile() ? 0 : 320,
              background: '#666',
            }}
          />
        ) : null}
      </SwordPuzzle>
      <div style={{ marginTop: 10 }}>
        <button
          type="button"
          onClick={() => {
            setIsGameMode((v) => !v);
          }}
        >
          {isGameMode ? '\u5173\u95ED' : '\u5F00\u542F'}\u6E38\u620F\u6A21\u5F0F
        </button>
        <button
          type="button"
          onClick={() => {
            puzzleRef.current?.reset();
          }}
        >
          \u91CD\u65B0\u5F00\u59CB
        </button>
      </div>
    </div>
  );
};`},37161:function(r,t){t.Z=`import { isMobile, SwordPuzzle } from 'sword-tool';
import React from 'react';

export default () => {
  return (
    <SwordPuzzle
      // \u6570\u7EC4\u7684\u957F\u5EA6\u9700\u8981\u8BBE\u7F6E
      listLength={0}
      // \u5BBD\u9AD8\u5FC5\u987B\u8BBE\u7F6E
      style={{ width: '600px', height: '600px' }}
      size={3}
      gap={0}
      globalAlpha={1}
      isGameMode={true}
      puzzleImg="https://s21.ax1x.com/2024/07/18/pkofTAS.jpg"
      onComplete={() => {
        setTimeout(() => {
          alert('\u606D\u559C\u4F60\u5B8C\u6210\u4E86\u62FC\u56FE');
        }, 400);
      }}
    >
      {/* \u8FD9\u91CC\u662F\u5B8C\u6574\u7684\u62FC\u56FE */}
      <SwordPuzzle.Canvas
        style={{
          position: 'absolute',
          top: isMobile() ? -100 : 0,
          left: isMobile() ? 0 : 600,
          width:300,
          height:300
        }}
      />
    </SwordPuzzle>
  );
};`}}]);
