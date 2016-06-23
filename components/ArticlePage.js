import React from 'react';

import AjaxPromise from "ajax-promise";

import queryString from "../js/queryString";


class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticlePage';
        this.state={
          articleInfo: {}
        }
    }

    componentDidMount(){
      let articleId = queryString("id");
      AjaxPromise
      .get("../json/article"+ articleId +".json")
      .then((res)=>{
        if(res.code===200){
          this.setState({
            articleInfo: res.data
          })
        }
      })
    }

    render() {



      return (
        <article className="article-page">
          <h1 className="article-title">{this.state.articleInfo.title}</h1>
          <summary className="article-summary">{this.state.articleInfo.summary}</summary>
          <div className="article-content" dangerouslySetInnerHTML={{__html:this.state.articleInfo.content}}></div>
        </article>
      )
    }
}

export default ArticlePage;
