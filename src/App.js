import React, { Component } from 'react';
import {connect} from 'react-redux';
import {add, remove, asyncAdd} from './redux/index.redux.js';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    const { num ,add, remove, asyncAdd} = this.props
    return (
      <div className="App">
        <p>num is {num}</p>
        <button onClick={add}>add</button>
        <button onClick={remove}>remove</button>
        <button onClick={asyncAdd}>asyncAdd</button>
        <Button type="primary" onClick={asyncAdd}>asyncAdd</Button>
      </div>
    );
  }
}
/*
* connect的4个参数（主要使用2个）
* @mapStateProps：返回store值的函数
* @actionCreator： [type Obj] 导入需要的action函数组成json对象
*/
const mapStateProps = state =>{
  return {num: state}
}
const actionCreator = {add, remove, asyncAdd}
// 思考： connect就是一个高阶组件，我们如何使用修饰器写法（@connect）
App = connect(mapStateProps, actionCreator)(App)
export default App;
