import React, { Component } from "react";
export default function(importCpm) {
  return class extends Component {
    // constructor(props) {
    //   super(props);
    // }
    state={
        Com:null
    }
    async componentDidMount(){
        let {default:Com} =await importCpm() 
        this.setState({
            Com
        })
    }
    render() {
        const Com = this.state.Com;
      return Com?<Com {...this.props}/>:null;
    }
  };
}
