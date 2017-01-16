### 目标
在越来越繁杂的前端技术体系中，工作流打包工具是大家共同的认识。但是随着技术发展越来越快，配置一个工作流需要花费大量的时间，本仓库目标为了创建简单、快捷、可用于开发和产品的工作流基础配置。这个脚手架为了更快搭建一个小巧、快捷的React开发环境。

### 如何使用
- 安装依赖文件 ```npm install``` 或 ```cnpm install```安装依赖模块
- 开发环境 ```npm run dev```启动开发环境或```npm run prod```打包线上产品。线上产品文件在当前目录bin下
- 生产环境 ```npm run prod```会在当前目录生产bin文件夹。

### 路由
* ```http://localhost:8088/```项目首页
* ```http://localhost:8088/reddit```包含一个saga使用例子(代码分割)

### 命名规范
* 每个功能模块在src下面建立对应的文件夹(可嵌套)
* 项目中共享的资源文件统一放置在src/app目录下
* 路由配置在routes/index.js中统一配制
* 文件夹统一使用小写
* React组件文件名首字母大写，其他文件首字母统一小写
* 组件带上对应功能后缀，比如Reddit的actions文件应该叫做RedditActions


### 其他说明
* 路由所指向的直接组件一般是一个被connect所包裹的容器组件，这里不单独提取处容器为一个单独的js文件。我们将从容器和组件（路由所指向的组件）写在一个文件里面。export defaut 导出这个容器组件。export 导出这个组件。为了测试方便。

### 使用组件
* webpack
* ES6/ES2015
* react
* react-router
* redux
* saga
* less/sass
* autoprefixer


### 备注/完善
待增加测试框架，如果你意见或者想法可以在issues中提出。
