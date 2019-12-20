# Function 函数
----

> ## 防抖函数

::: chunk
``` js
byfunction.debounce(func: Function, wait: number);
```
:::


#### 引入版本

 `1.0.0`

#### 参数

**func:** **[_Function_]** 需要执行的函数

**wait:** **[_number_]** 防抖间隔时间，毫秒数

#### 返回

**func:** **[_Function_]**: 返回新的抖动函数

::: demojs
``` js

import { byfunction } from 'by-tools';

byfunction.debounce(()=>{
    console.log(1);
}, 750);

// => 1
// --- after 750 ms
// => 1
// --- after 750 ms
// ...
```
:::
