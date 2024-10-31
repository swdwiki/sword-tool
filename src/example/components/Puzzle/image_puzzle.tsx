import { isMobile, SwordPuzzle } from 'sword-tool';
import React from 'react';

export default () => {
  return (
    <SwordPuzzle
      // 数组的长度需要设置
      listLength={0}
      // 宽高必须设置
      style={{ width: '600px', height: '600px' }}
      size={3}
      gap={0}
      globalAlpha={1}
      isGameMode={true}
      puzzleImg="https://s21.ax1x.com/2024/07/18/pkofTAS.jpg"
      onComplete={() => {
        setTimeout(() => {
          alert('恭喜你完成了拼图');
        }, 400);
      }}
    >
      {/* 这里是完整的拼图 */}
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
};