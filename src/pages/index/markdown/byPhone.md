# PHONE 手机号
----

> ## 格式化手机号

::: chunk
``` js
phone.toDiscontinuousMobile(phone:string); 
```
:::

#### 引入版本

 `1.0.0`

#### 参数

**phone:** **[_string_]** 手机号

#### 返回

 **[_string_]**: 格式化后的手机号

::: demojs
``` js

import { phone } from 'by-tools';

console.log(phone.toDiscontinuousMobile('13166289220'));

// => 131 6628 9220

```
:::

> ## 加密手机号

::: chunk
``` js
phone.toEncryptMobule(phone:string, remark?:string); 
```
:::

#### 引入版本

 `1.0.0`

#### 参数

**phone:** **[_string_]** 手机号

**remark:** **[_string_]** 填充标识 非必填

#### 返回

 **[_string_]**: 加密手机号中间四位

::: demojs
``` js

import { phone } from 'by-tools';

console.log(phone.toEncryptMobule('13166289220'));

// => 131****9220


console.log(phone.toEncryptMobule('13166289220','-'));

// => 131----9220

```
:::