# 《Head First 设计模式》 typescript 版实现
## 项目结构
本项目以章节为单位来组织代码，顶层的每个文件夹都是章节数，其下的文件夹会是具体的设计模式名称，而 每个 idnex.ts 则是其具体设计模式的入口

而每个具体的设计模式里我会放一个 README，用于记录我在学习过程中的一些笔记

后续的话可以会添加一些测试

## 如何运行
由于本项目使用的是 typescript 且没有使用 webpack 的 ts-loader，因此你需要在全局安装 ts-node。
```
npm install -g ts-node
// 或者
yarn global add ts-node
```

运行时代码则切到相应的目录，运行
```
ts-node index.ts 
```


## 面向对象编码原则
* 找到容易变化的部分，对其进行针对性的封装
* 多使用组合，少使用继承
* 针对接口编程，不针对实现编程
