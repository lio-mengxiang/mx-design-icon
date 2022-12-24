[English](./README.md)
## 简介

mx-design的icon仓库，特点如下：

## 特色1：icon-font图标转Icon组件脚本

脚本路径：
```
./srcript/generateIcons.js
```
里面还包含一个使用案例，如果你从icon-font下载图标，本仓库包含一个脚本，可以读取icon-font你拉取的symbol模式的js文件，然后抽取里面所有元素的<path>标签内容，然后分别包装为react可直接使用的Icon文件。

## 特色2：支持直接使用plop的模板，生成单个Icon组件

```
npm run plop
```
模板配置文件在
```
./plopfile.js
```
模板文件在
```
plop-templates/icon.hbs
```

