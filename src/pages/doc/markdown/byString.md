# String 字符串
----

> ## 获取浏览器GET参数

::: chunk
``` js
bystring.getQueryString(name: string);
```
:::

#### 引入版本

 `1.0.0`

#### 参数

**name:** **[_string_]** 键名


#### 返回

 **[_string_]**: 对应键的值

::: demojs
``` js

// url: 'http://www.xxx.com?type=index'

import { bystring } from 'by-tools';

console.log(bystring.getQueryString('type'));

// => index

```
:::