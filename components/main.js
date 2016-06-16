import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Aside from "./Aside";
import actions from "../js/actions";
import utils from "../js/utils";
import event from "../js/event";

var _this=null;

class Main extends React.Component{

  constructor(){
    super();
    _this= this;
    this.state = {
        sidebarActive: false
    }
  }

  componentDidMount(){
    var _this= this;
    event.on(document, "click", function(){

      _this.setState({
        sidebarActive: false
      });

    })

  }

  onMenuBtnClick (e){
    let state= !this.state.sidebarActive;
    this.setState({"sidebarActive":state})
  }

  render(){
    return(
      <main className={this.state.sidebarActive ? 'container side-active' : 'container'}>
        <Header sidebarActive={this.state.sidebarActive}
                onMenuBtnClick={this.onMenuBtnClick.bind(this)}/>
        <Aside />
      </main>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.querySelector("#container")
)
