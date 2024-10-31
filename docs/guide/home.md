---
title: 开始使用
---

基于之前工作参与的兴趣社区的激发，目前在独立开发游戏兴趣社区，会涉及一些营销的组件，因此开发了这个组件库。
用于存放有意思的营销类组件，便于日后使用和扩展。

涉及技术：react , hooks , ts

## 快速上手
### 安装

``` bash
npm i sword-tool -S
```

### 项目中使用
``` js
import { SwordPuzzle } from 'sword-tool';
import React from 'react';

// 拼图滑块
export default () => {
  return (
     <SwordPuzzle
      listLength={0}
      style={{ width: '300px', height: '300px' }}
    ></SwordPuzzle>
  );
};
```
