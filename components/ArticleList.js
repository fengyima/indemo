import React from 'react';
import ArticleItem from "./ArticleItem";

import AjaxPromise from "ajax-promise";




class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleList';
        this.state={
          articleList: [],
          loaded: false
        }
    }

    getArticleList(){
      let articleList = [];
      AjaxPromise
        .get("../json/articleList.json")
        .then((res)=>{
          if(res.code== 200){
            articleList = res.data.concat(articleList);
            this.setState({
              articleList : articleList
            })
          }
        })
    }

    componentDidMount(){
      this.getArticleList();

      let timer= setTimeout(()=>{

        this.setState({
          loaded: true
        });

        clearTimeout(timer);

      },0)

    }

    render() {
        return (
          <article className={this.state.loaded ? "article-wrap show" : "article-wrap"}>
            {this.state.articleList.map((articleInfo, index) =>
               <ArticleItem {...articleInfo} key={index}/>
            )}

          </article>
        );
    }
}

export default ArticleList;
