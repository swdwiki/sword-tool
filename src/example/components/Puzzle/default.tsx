import { isMobile, SwordPuzzle, PuzzleInstance } from 'sword-tool';
import React, { useRef, useState } from 'react';

const list = Array.from({ length: 8 }, (_, i) => ({ id: `id-${i}` }));
export default () => {
  const puzzleRef = useRef<PuzzleInstance>(null);
  const [isGameMode, setIsGameMode] = useState(false);
  return (
    <div>
      <SwordPuzzle
        ref={puzzleRef}
        // 数组的长度需要设置
        listLength={list.length}
        // 宽高必须设置
        style={{ width: '300px', height: '300px' }}
        isGameMode={isGameMode}
        onComplete={() => {
          setTimeout(() => {
            alert('恭喜你完成了拼图');
          }, 400);
        }}
      >
        {list.map((item, index) => (
          <SwordPuzzle.Item key={item.id} index={index} style={{ background: '#222' }}>
            <h4 style={{ color: '#fff' }}>{item.id}</h4>
            <SwordPuzzle.Canvas index={index} />
          </SwordPuzzle.Item>
        ))}
        {/* 这里是完整的拼图 */}
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
          {isGameMode ? '关闭' : '开启'}游戏模式
        </button>
        <button
          type="button"
          onClick={() => {
            puzzleRef.current?.reset();
          }}
        >
          重新开始
        </button>
      </div>
    </div>
  );
};