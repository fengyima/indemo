import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Aside from "./Aside";
import ArticleList from "./ArticleList";
import Footer from "./Footer";

import actions from "../js/actions";
import utils from "../js/utils";
import event from "../js/event";
import docSlide from "../js/docSlide";


var _this=null;

class Main extends React.Component{

  constructor(){
    super();
    _this= this;
    this.state = {
        sidebarActive: false,
        pageRoute : "index"
    }
  }

  componentDidMount(){
    var _this= this;

    docSlide.slideLeft(function(){
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
        <ArticleList />
        <Footer />
        <Aside />
      </main>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.querySelector("#container")
)
