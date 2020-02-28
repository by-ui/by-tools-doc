# Date 日期
----

> ## 格式化日期

::: chunk
``` js
date.formDate(datetime:string | Date, format?:string);
```
:::

#### 引入版本

 `1.0.0`

#### 参数

**datetime:** **[_string | Date_]** 需要转换的时间

**format:** **[_string_]** 格式非必传，默认 'YYYY-MM-DD HH:mm:ss' 

#### 返回

 **_string_**: 格式化后的时间

 
::: demojs
``` js

import { date } from 'by-tools';


console.log(date.formDate(new Date));

// => 2019-12-18 11:38:09

console.log(date.formDate(new Date), 'YYYY-MM-DD');

// => 2019-12-18

```
:::

> ## 获取当前周的所有天数

::: chunk
``` js
date.getCurrentWeekDays();
```
:::


#### 引入版本

 `1.0.0`

#### 参数

**param:** **[_object_]** 非必传，param.format 是否转换为数组，默认 false

#### 返回

 **_string_**: 拼接的字符串

 **_array_**: 格式化后的数组

 
::: demojs
``` js

import { date } from 'by-tools';

console.log(date.getCurrentWeekDays());

// => 2019-12-16 ~ 2019-12-22
```
:::


> ## 获取时间范围

::: chunk
``` js
date.getDateRange();
```
:::

#### 引入版本

 `1.0.0`

#### 参数

**startTime:** **[_string_]** 必传 开始时间

**endTime:** **[_string_]** 必传 结束时间

#### 返回

 **_array_**: 格式化后的数组

 
::: demojs
``` js

import { date } from 'by-tools';

console.log(date.getDateRange('2020-02-01','2020-02-05'));

// => ["2020-02-01", "2020-02-02", "2020-02-03", "2020-02-04", "2020-02-05"]
```
:::