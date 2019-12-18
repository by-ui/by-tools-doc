# Money 货币相关
----

> ## 将货币数字转中文汉字大写

::: chunk
``` js
phone.toChineseAmount(price:number); 
```
:::


#### 引入版本

 `1.0.0`

#### 参数

**phone:** **[_number_]** 价格

#### 返回

 **_string_**: 转换后的中文大写

::: demojs
``` js

import { money } from 'by-tools';

console.log(money.toChineseAmount(2000000));

// => 贰佰万元整

```
:::
