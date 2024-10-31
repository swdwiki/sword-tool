import { useRender, useTouch } from "sword-tool";
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
        <h3>当前最新点击点坐标：({touch.info.startX},{touch.info.startY})</h3>
      <h4>ClickDeltaX: {touch.info.startX}</h4>
      <h4>ClickDeltaY: {touch.info.startY}</h4>
      <h3>以当前点击点为原点的鼠标移动坐标：（{touch.info.deltaX}，{touch.info.deltaY}）</h3>
      <h4>MoveDeltaX: {touch.info.deltaX}</h4>
      <h4>MoveDeltaY: {touch.info.deltaY}</h4>
    </div>
  )
}