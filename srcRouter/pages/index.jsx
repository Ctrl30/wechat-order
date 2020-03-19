import React, { useState } from "react";
import store from "../store/index.js";
import { observer } from "mobx-react";
// import {autorun} from "mobx"

// const App= observer((props)=>{
//     console.log(store)
//     // 错误写法
//     // const [todos,setTodos]=useState(store.todos)
//     const add=()=>{
//         props.store.add();
//         // store.todos.push({
//         //     id:Math.random(),
//         //     title:"zhangsan",
//         //     state:false
//         // })
//     }
//     return <div>
//         <h2>首页</h2>
//         {
//             props.store.todos.map((item)=>{
//             return <p key={item.id}> {item}</p>
//             })
//         }
//         数组中的数据为true的数量:
//         {
//             props.store.getLength
//         }
//         <button onClick={add}>add</button>
//     </div>
// })

@observer
class App extends React.Component {
  add = () => {
    console.log(this.props)
    this.props.store.add();
  };
  render() {
    return (
      <div>
        我家{this.props.store.name}
        {this.props.store.todos.map(item => {
            console.log('item',)
          return <p key={item.id}>{item.id}: {item.title}</p>;
        })}
        length:{this.props.store.getLength}
        <button onClick={this.add}>add</button>
      </div>
    );
  }
}

export default () => <App store={store} />;
