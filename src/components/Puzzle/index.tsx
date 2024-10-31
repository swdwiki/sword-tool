import './index.scss';
import { addPropertiesToComponent } from '../../utils/PropertiesToComponent';
import Puzzle from './Puzzle';
import PuzzleCanvas from './PuzzleCanvas';
import PuzzleItem from './PuzzleItem';

const SwordPuzzle = addPropertiesToComponent(Puzzle, {
  Item: PuzzleItem,
  Canvas: PuzzleCanvas,
});

export { SwordPuzzle, PuzzleItem, PuzzleCanvas };
export type {
  PuzzleProps,
  PuzzleItemProps,
  PuzzleCanvasProps,
  PuzzleInstance,
} from './type';
export default SwordPuzzle;