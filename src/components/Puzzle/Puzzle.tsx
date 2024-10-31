import { useEffect, useRef, forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { withNativeProps } from '../../utils/NativeProps';
import { GridPosition, PuzzleInstance, PuzzleProps } from './type';
import { useDebounceFn, useSetState } from 'ahooks';
import { classPrefix } from './config';
import PuzzleItem from './PuzzleItem';
import PuzzleCanvas from './PuzzleCanvas';
import { isMobile } from '../../utils/HandleDom';
import { isPuzzleSolved, randomNumberArray } from './utils';
import { createTwoArray } from '../../utils/Computed';
import { randomLetter, randomStr } from '../../utils/Random';
import { PuzzleCtx } from './context';
import useMergeProps from '../../hooks/useMergeProps';
import React from 'react';

const defaultProps = {
  size: 3,
  listLength: 0,
  gap: 2,
  fillPuzzleItemBackground: '#3e3e3e',
}

const Puzzle = forwardRef<PuzzleInstance, PuzzleProps>((comProps, ref) => {
  const props = useMergeProps<PuzzleProps, keyof typeof defaultProps>(comProps, defaultProps)
  const { listLength, isGameMode, background, size, gap, fillPuzzleItemBackground, children, onComplete, onResize, ...ret } = props
  const idRef = useRef(randomStr(classPrefix));
  const letter = useRef(randomLetter());
  const [ctxstate, setCtxState] = useSetState({
    initSpaceIndex: 0,
    grid: {
      w: 100,
      h: 100,
    },
  })
  /** 当前的格子的二维数组信息 */
  const [gridArr, setGridArr] = useState<number[][]>();
  /** 拼图块的位置随机数组 */
  const [puzzleGridArr, setPuzzleGridArr] = useState<number[]>();
  const [isReset, setIsReset] = useState(false);

  const {run: getCardInfo} = useDebounceFn(() => {
    const cardWrap = document.querySelector(`.${idRef.current} .${classPrefix}-area`)
    const w = ((cardWrap?.clientWidth ?? 0) - (size - 1) * gap) / size
    const h = ((cardWrap?.clientHeight ?? 0) - (size - 1) * gap) / size
    setCtxState({
      grid: {w, h}
    })
    if(w !== ctxstate.grid.w || h !== ctxstate.grid.h) {
      onResize?.({w, h})
    }
  }, {wait: 100});

  const init = () => {
    getCardInfo()
    initPuzzle()
  }

  useEffect(() => {
    init()
    if(!isMobile()) window.addEventListener('resize', getCardInfo)
    return () => {
      if(!isMobile()) window.removeEventListener('resize', getCardInfo)
    }
  }, [listLength, size, gap])

  /** 初始化拼图 */
  const initPuzzle = () => {
    const total = size * size
    const randomArr = randomNumberArray(size)
    const initSpaceIndex = randomArr.findIndex(v => v === total)
    const nullRow = Math.floor(initSpaceIndex / size), nullCol = initSpaceIndex % size
    setPuzzleGridArr(randomArr)
    setGridArr(createTwoArray(size, size, (rowNum, colNum) => (
      rowNum === nullRow && nullCol === colNum ? 0 : randomArr[Math.floor(rowNum * size + colNum)]
    )))
    setCtxState({ initSpaceIndex })
  }

  const onChangeGrid = (p: GridPosition, pPre: GridPosition) => {
    [gridArr![p.row][p.col], gridArr![pPre.row][pPre.col]] = [gridArr![pPre.row][pPre.col], gridArr![p.row][p.col]];
    if(isPuzzleSolved(gridArr!)) {
      onComplete?.()
    }
    setGridArr([...gridArr!]);
  }

  const reset = () => {
    initPuzzle()
    letter.current = randomLetter()
    setIsReset(v => !v)
  }

  const wrapStyle = useMemo(() => ({
    padding: gap + 'px',
    background,
  }), [gap, background])

  useImperativeHandle(ref, () => ({
    reset
  }))

  const renderChildren = () => {
    const hasNum = (listLength ?? Object.values(children?.valueOf() ?? {}).length)
    if(size * size - 1 - hasNum <= 0) return children
    const fillArr = []
    for(let i = hasNum; i < size * size - 1; i++) {
      fillArr.push(
        <PuzzleItem 
          key={i} 
          index={i} 
          style={{
            width: ctxstate.grid.w + 'px',
            height: ctxstate.grid.h + 'px',
            background: fillPuzzleItemBackground,
          }}
        >
          <PuzzleCanvas index={i} />
        </PuzzleItem>
      )
    }
    return (
      <>
        {children}
        {fillArr}
      </>
    )
  }

  return (
    <PuzzleCtx.Provider 
    value={{
        ...ctxstate,
        size,
        gridArr,
        puzzleGridArr,
        letter: letter.current,
        isReset,
        gap,
        isGameMode,
        ...ret,
        onChangeGrid,
      }}
    >
      {withNativeProps(ret,
      <div className={`${classPrefix} ${idRef.current}`} style={wrapStyle}>
        <div className={`${classPrefix}-area`}>
          {renderChildren()}
        </div>
      </div>
      )}
    </PuzzleCtx.Provider>
  )
})

export default Puzzle