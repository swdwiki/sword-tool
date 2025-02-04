import { useContext, useEffect, useMemo } from 'react';
import { withNativeProps } from '../../utils/NativeProps';
import useMergeProps from '../../hooks/useMergeProps';
import { PuzzleItemProps } from './type';
import { PuzzleCtx } from './context';
import useTouchEvent from '../../hooks/useTouchEvent';
import { useSetState } from 'ahooks';
import { classPrefixItem } from './config';
import { DirectionType, checkDirectionVal, checkDirectionXY, range } from '../../utils/Computed';
import { getRowColItem } from './utils';
import { classBem } from '../../utils/HandleDom';
import React from 'react';

const defaultProps = {
  touchTime: 150,
  touchDistance: 8,
  isHover: true,
}

const PuzzleItem = (comProps: PuzzleItemProps) => {
  const props = useMergeProps<PuzzleItemProps, keyof typeof defaultProps>(comProps, defaultProps)
  const { index, touchTime, touchDistance, isHover, children, onClick, ...ret } = props
  const { size, gap, gridArr, grid, initSpaceIndex, isReset, onChangeGrid} = useContext(PuzzleCtx)
  const [info, setInfo] = useSetState({
    startX: 0,
    startY: 0,
    x: 0,
    y: 0,
    duration: 0,
    /** 当前处于的行列数 */
    rowNum: 0,
    colNum: 0,
  })

  useEffect(() => {
    const {rowNum, colNum} = getRowColItem(index, initSpaceIndex, size)
    setInfo({ rowNum, colNum, x: 0, y: 0 })
  }, [index, initSpaceIndex, size, isReset])

  /** 当拼图间隙改变后，需要调整当前的位移值 */
  useEffect(() => {
    if(!info.x && !info.y) {
      return
    }
    const {rowNum, colNum} = getRowColItem(index, initSpaceIndex, size)
    const x = (info.colNum - colNum) * (gap + grid.w)
    const y = (info.rowNum - rowNum) * (gap + grid.h)
    setInfo({x, y, duration: 0})
  }, [gap, grid])

  /** 当前可移动的方向 */
  const moveDirection = useMemo(() => (
    checkDirectionVal({arr: gridArr, row: info.rowNum, col: info.colNum}) as DirectionType
  ), [gridArr, info.rowNum, info.colNum])

  const {info: _info, onTouchFn} = useTouchEvent({
    onTouchStart() {
      setInfo({startX: info.x, startY: info.y, duration: 0})
    },
    onTouchMove() {
      const {directionX, directionY} = checkDirectionXY(_info.deltaX, _info.deltaY)
      if(directionX === moveDirection) {
        setInfo({x: range(_info.deltaX, -grid.w - gap, grid.w + gap) + info.startX})
      }
      if(directionY === moveDirection) {
        setInfo({y: range(_info.deltaY, -grid.h - gap, grid.h + gap) + info.startY})
      }
    },
    onTouchEnd() {
      let isVertical = false
      let diff = info.x - info.startX
      if(!diff) {
        diff = info.y - info.startY
        isVertical = true
      }
      // 检测当前方向上的移动
      if(!diff) return
      let {startX: x, startY: y, rowNum, colNum} = info
      // 发生改变
      if(Math.abs(diff) >= ((isVertical ? grid.h : grid.w) + gap) / 2) {
        const xy = diff > 0 ? 1 : -1
        let direction = 0
        if(isVertical) {
          y += (grid.h + gap) * xy
          direction = diff > 0 ? 3 : 1
        } else {
          x += (grid.w + gap) * xy
          direction = diff > 0 ? 2: 4
        }
        switch (direction) {
          case 1: rowNum--; break;
          case 2: colNum++; break;
          case 3: rowNum++; break;
          case 4: colNum--; break;
        }
        onChangeGrid(
          {row: rowNum, col: colNum},
          {row: info.rowNum, col: info.colNum}
        )
      }
      setInfo({x, y, duration: 0.4, rowNum, colNum})
    },
    isDisable: {
      all: !moveDirection
    },
    isStopPropagation: true
  })

  const cardPosition = useMemo(() => {
    const {rowNum, colNum} = getRowColItem(index, initSpaceIndex, size)
    const handlegap = (v: number) => 0 < v && v < size ? v * gap : 0
    return {
      top: `${grid.w * rowNum + handlegap(rowNum)}px`,
      left: `${grid.h * colNum + handlegap(colNum)}px`,
    }
  }, [index, initSpaceIndex, grid, size, gap])
  
  return withNativeProps(
    ret,
    <div 
      className={`${classBem(classPrefixItem, {hover: isHover, disableTouch: !moveDirection})}`}
      style={{
        ...cardPosition,
        width: grid.w + 'px',
        height: grid.h + 'px',
        transitionDuration: info.duration + 's',
        transform: `translate(${info.x}px, ${info.y}px)`,
      }}
      {...onTouchFn} 
      onClick={() => {
        if(_info.time < touchTime && _info.deltaY < touchDistance && _info.offsetX < touchDistance) {
          onClick?.(index)
        }
      }}
    >
      {children}
    </div>
  )
}

export default PuzzleItem