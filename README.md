# 项目说明
这是一个简单的react项目初始化部分，在create-react-app脚手架下搭建了redux状态管理库和引入Antd模板库（文件中有详细中文说明）。直接clone下来构建项目是没有问题的，但是你需要优化以下基本内容：
1. antd按需加载；
2. 高阶组件修饰符的使用配置；
3. 路由与redux配合方案；
4. http异步请求拦截；
5. 开发环境代理设置及路径优化配置。


good lucky !!!





# 包管理工具
 > yarn，请先搭建yarn :https://yarnpkg.com/zh-Hans/

 如果已经装了node，可以直接执行以下命令安装yarn：
 ```
  npm i yarn -g
 ```

# 首次启动前准备
```
git clone git@github.com:Evan-90/reactProjectInit.git
cd reactProjectInit
yarn
```

# 启动
```
yarn start
```

# 打包构建
```
yarn build
```

# 分支管理
master：主干分支，保证稳定，只有开发完成并测试通过的功能才可以合并到master。master分支会被部署到生产环境。
develop：主要开发分支，用于日常开发。develop分支会被部署到测试环境。


# 项目结构
##### signal-react
- dist    —— 存放打包后的文件，是真正用于部署的成品
- node_modules  —— 安装的依赖包
- public  —— html模板
- src   ——   开发目录
