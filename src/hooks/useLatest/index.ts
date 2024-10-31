import { useRef } from 'react';


function useLatest<T>(value: T): { current: T } {
  /**
   * 使用 useRef 创建一个可变的 ref 对象，用于存储最新的值
   * @type {Object} ref - 一个 ref 对象，它的 current 属性将被设置为 value
   */
  const ref = useRef(value);

  // 设置 ref.current 的值为传入的 value，以确保 ref 始终引用最新的值
  ref.current = value;

  // 返回 ref 对象，该对象包含一个 current 属性，可以在函数外部访问最新的值
  return ref;
}

export default useLatest;
export { useLatest };
