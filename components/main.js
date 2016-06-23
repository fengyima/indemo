import React from "react";
import { render } from "react-dom";
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import Header from "./Header";
import Aside from "./Aside";
import MainBox from "./MainBox";
import Footer from "./Footer";
import ArticleList from "./ArticleList";
import ArticlePage from "./ArticlePage";

import actions from "../js/actions";
import utils from "../js/utils";
import event from "../js/event";
import docSlide from "../js/docSlide";

class Main extends React.Component{

  constructor(){
    super();
    this.state = {
        sidebarActive: false
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
        <MainBox >
          {this.props.children}
        </MainBox>
        <Footer />
        <Aside />
      </main>
    )
  }
}

var routes=(
  <Route handler="{Main}">
    <Route path="" handler={ArticleList} />
    <Route path="article" handler={ArticlePage} />
  </Route>
)

render((
  <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={ArticleList} />
        <Route path="article" component={ArticlePage} />
      </Route>
  </Router>
),document.querySelector("#container"))
