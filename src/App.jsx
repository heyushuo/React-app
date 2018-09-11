import React, { Component } from "react";
import "./App.css";
import TodoItem from "./Todoitem";

class App extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      inputValue: "",
      listData: ["学习 VUe", "学习 React"]
    };

    this.changeHandle = this.changeHandle.bind(this);
  }

  render() {
    return (
      <div className="App">
        {/* 头部 */}
        <div className="head">
          <label htmlFor="aaa">输入内容</label>
          <input id="aaa" ref ={(ele)=>this.ele=ele} type="text" value={this.state.inputValue} onChange={this.changeHandle.bind(this)} /> <input type="button" onClick={this.submit.bind(this)} value="提交" />
        </div>
        <div className="box">
          <ul>
            {this.state.listData.map((item, index) => {
              return <TodoItem content={item} index={index} del={this.delitem.bind(this)} key={index} />;
            })}
          </ul>
        </div>
      </div>
    );
  }

  changeHandle(e) {
    var value = e.target.value;
    this.setState((prevState, props) => ({
      inputValue: value
    }));
  }

  submit(e) {
    // this.setState({
    //   inputValue: "",
    //   listData: [...this.state.listData, this.state.inputValue]
    // });
    //性能好
    this.setState((prevState, props) => ({
      inputValue: "",
      listData: [...prevState.listData, prevState.inputValue]
    }));
  }

  delitem(index) {
    //不可以直接改变state里边的值
    // var arr = this.state.listData;
    // arr.splice(index, 1);
    // this.setState({
    //   listData: arr
    // });

    this.setState((prevState, props) => {
      var arr = prevState.listData;
      arr.splice(index, 1);
      return {
        listData: arr
      };
    });
  }
}

export default App;
