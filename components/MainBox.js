import React from "react";

class MainBox extends React.Component{

  constructor(props){
    super(props);

    this.state={
      loaded: false
    }

  }

  componentDidMount(){
    this.setState({
      loaded: true
    })

  }


  render(){

    let winHeight={
      "minHeight": window.innerHeight+"px"
    }

    return(
      <div className={this.state.loaded? "main-box show": "main-box"} style={winHeight}>
        {this.props.children}
      </div>
    )
  }
}

export { MainBox as default };
