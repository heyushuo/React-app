import React, { Component } from "react";
import propTypes from 'prop-types'

export default class TodoItem extends Component {

  //组件即将被挂在到页面的时刻执行
  componentWillMount(){
    console.log('被挂在到页面的时刻执行');
  }
  // render
  //组件被挂在到页面上后
  componentDidMount(){
    console.log('组件被挂在到页面上后执行');
  }
  componentWillUnmount(){
    //组件即将从页面剔除的时候执行
  }






  //组件跟新的时候,,props和state发生变化
  componentWillReceiveProps(){
    //当一个组件从父组件接受参数,只要父组件的render函数被重新执行,子组件的这个生命周期函数才会执行
  }
  //组件是否跟新
  shouldComponentUpdate(){
    console.log('组件是否跟新');
    return true;
  } 
  //组件跟新前
  componentWillUpdate(){
    console.log('组件跟新前');
  }
  // render()
  //组件跟新后
  componentDidUpdate(){
    console.log('组件跟新后');
  } 

  
  //当组件的state或者是props放生改变的时候,render函数就会重新执行
  //或者父组件的render执行的时候,子组件的render也会执行
  render() {
    const { content } = this.props;
    return <li onClick={this.del.bind(this)}>{content}</li>;
  }
  del() {
    this.props.del(this.props.index);
  }
}

TodoItem.propTypes = {
  content:propTypes.string.isRequired,
  index:propTypes.number
}

TodoItem.defultProps = {
  content:"学习 何玉硕"
}