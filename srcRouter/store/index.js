// import { decorate, observable, action } from "mobx";
// class TodoList {
//   todos = [];
//   add = action(() =>
//     this.todos.push({ id: Math.random(), title: "logan", state: false })
//   );
// }
// decorate(TodoList, {
//   todos: observable
// });
// export default new TodoList()
import { decorate, observable, action, computed, autorun } from "mobx";

class TodoList {
  @observable todos = [
    //     {
    //     title: "todo标题",
    //     state: false,
    //     id:"1"
    // },
    // {
    //     title: "已经完成 todo 的标题",
    //     state: true,
    //     id:'2'
    // }
  ];
  @observable name = "logan";
  // @action  get getLength(){
  //     return this.todos.filter((item)=>item.state).length
  // }
  @action add = () => {
    // console.log(111)
    // this.name = 'zyq'

    this.todos.push({ id: Math.random(), title: "许少雄", state: false });
    console.log("this", this);
    // return this.name
  };
  @action getList = () => {
    return this.todos;
  };
  @computed get getLength() {
    return this.todos.length;
  }
}
let store = new TodoList();
autorun(() => {
  // 假设 profile.asJson 返回的是 observable Json 表示，
  // 每次变化时将其发送给服务器，但发送前至少要等300毫秒。
  // 当发送后，profile.asJson 的最新值会被使用。
//   setInterval(() => {
//     // name = name + "1";
//     store.add()
//   }, 1000);
});
// decorate(TodoList,{
//     todos:observable,
//     getLength:computed,
//     name:observable
// })

// let store=

// autorun(()=>{
//     // console.log("副作用执行了")
//     setTimeout(()=>{
//         store.add()
//     },2000)
// })

export default store;
