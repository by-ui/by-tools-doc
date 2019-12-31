# Data 数据
----

> ## 深层拷贝

::: chunk
``` js
data.deepClone<T>(obj: T): T;
```
:::

#### 引入版本

 `1.0.0`
 
#### 参数

**object:** **[object_]** 需要转换的对象

#### 返回

 **_object_**: 一个深拷贝后的数据

 
::: demojs
``` js

import { data } from 'by-tools';

const obj = { 'name': 'james',  'age': '25' };
const deep = data.deepClone(obj);

console.log(deep === obj);

// => false

```
:::
