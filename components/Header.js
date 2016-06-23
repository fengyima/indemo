import React from "react";

class Header extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        sidebarActive: this.props.sidebarActive
    }
  }

  componentDidMount(){
    var menuBtn= this.refs.menuBtn;
    menuBtn.addEventListener("click", function(e){
      e.preventDefault&& e.preventDefault();
      e.stopPropagation&&e.stopPropagation();
      this.props.onMenuBtnClick(e);
    }.bind(this), false);
  }


  render(){
    return(
      <header className="header">
        <a href="javascript:void(0);" className="menu-btn" ref="menuBtn" title="菜单"><i className="icon-menu"></i></a>
        <h1 className="title">Indemo</h1>
      </header>
    )
  }
}

export { Header as default };
