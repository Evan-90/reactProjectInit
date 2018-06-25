import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
/*
 * react - redux提供2个参数
 * @Provider：[type Component]，把它放在父组件的外层并传入参数store
 *@connect： [type Fun]， 在子组件连接store的函数，并将store和action等混入到当前组件的this.props中，有四个参数（详细用法请参见App.js）
 */
import {Provider} from 'react-redux';
import {reducer} from './redux/index.redux.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*
 * 使用chrome浏览器对redux的开发插件reduxDevTools
 * 判断是否有reduxDevTools这个插件（如果没有去chrome扩展插件里安装）
 *如果存在就使用插件，如果没有就返回空函数
 */
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : f=>f

/*
* createStore： 根据reduer创建store，
* compose： redux中createStore第二个参数的用来组合函数的接口,此处组合了中间件和redux开发插件两个函数
*applyMiddleware：中间件，调用redux-thunk实现redux异步请求
*/
const store = createStore(reducer, compose(applyMiddleware(thunk), reduxDevTools))

ReactDOM.render((<Provider store={store}><App /></Provider>), document.getElementById('root'));
registerServiceWorker();
