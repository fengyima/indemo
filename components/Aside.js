
import React from 'react';

class Aside extends React.Component {
  render(){
      return(
        <aside className="aside">
          <div className="side-header">
            <span className="iconfont iconfont-home"></span>
          </div>
          <nav className="side-nav">
            <li>
              <a href="javascript:void(0);">
                <span className="iconfont iconfont-start-full"></span><span>Javascript</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span className="iconfont iconfont-start"></span><span>Style</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span className="iconfont iconfont-guide"></span><span>杂谈</span>
              </a>
            </li>
          </nav>
        </aside>
      )
  }
}
export { Aside as default };
