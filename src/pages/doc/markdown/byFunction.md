# Function 函数
----

> ## 防抖函数

::: chunk
``` js
byfunction.debounce(func: Function, wait: number, immediate?: boolean);
```
:::


#### 引入版本

 `1.0.0`

#### 参数

**func:** **[_Function_]** 需要执行的函数

**wait:** **[_number_]** 防抖间隔时间，毫秒数

**immediate:** **[_boolean_]** 是否立即执行，默认 false

#### 返回

**func:** **[_Function_]**: 返回新的抖动函数

::: demojs
``` js

import { byfunction } from 'by-tools';

byfunction.debounce(()=>{
    console.log(1);
}, 750);

// --- after 750 ms  [if immediate = false]
// => 1
// --- after 750 ms
// => 1
// --- after 750 ms
// ...
```
:::


> ## 节流函数

::: chunk
``` js
byfunction.throttle(func: Function, delay: number);
```
:::

#### 引入版本

 `1.0.0`

 
#### 参数

**func:** **[_Function_]** 需要执行的函数

**delay:** **[_number_]** 节流间隔时间，毫秒数

#### 返回

**func:** **[_Function_]**: 返回新的节流函数

::: demojs
``` js

import { byfunction } from 'by-tools';

byfunction.throttle(()=>{
    console.log(1);
}, 750);

```
:::