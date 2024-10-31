import React from "react";
import { GridPosition, PuzzleCanvasProps } from "./type";

export const PuzzleCtx = React.createContext<LotteryCtxType>({
  size: 3,
  initSpaceIndex: 0,
  grid: {w: 0, h: 0},
  gridArr: undefined,
  puzzleGridArr: undefined, 
  letter: '',
  isReset: false, 
  gap: 2,
  isGameMode: false,
  onChangeGrid: (p: GridPosition, preParams: GridPosition) => {}
});

export type LotteryCtxType = {
  /** 抽奖数量 */
  size: number
  /** 初始空格索引 */
  initSpaceIndex: number
  /** 格子的宽高 */
  grid: {w: number, h: number}
  /** 格子中的二维数组 */
  gridArr?: number[][]
  /** 拼图块的位置随机数组 */
  puzzleGridArr?: number[]
  /** 绘画的字母 */
  letter: string,
  /** 是否重新设置拼图 */
  isReset: boolean
  gap: number
  isGameMode?: boolean
  onChangeGrid: (p: GridPosition, preParams: GridPosition) => void
};