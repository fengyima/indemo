import React from 'react';

class ArticleItem extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleItem';
    }

    componentDidMount(){
    }

    render() {
        return (
          <div className="article-item " >
            <a href="article/page?id={this.props.id}">
              <h3 className="article-title">{this.props.title}</h3>
              <div className="article-desc">
                <p>{this.props.desc}</p>
              </div>
              <div className="article-info">
                <span className="tags">{this.props.tag}</span>
                <span className="date">{this.props.date}</span>
              </div>
            </a>
          </div>
        );
    }
}

export default ArticleItem;
