import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Footer';
    }
    render() {
        return (
          <footer id="footer" className="footer">
            <div className="footer-slogan">
              <p>Indemo，是小马的个人技术博客，记录的是平时学习上、工作上的一些想法，或者是摘抄自一些大神的文章。</p>

            </div>
            <div className="footer-copyright">
              <p>Code By Durian Feng</p>
              <p>&copy;2016 www.indemo.cn</p>
            </div>
          </footer>
        );
    }
}

export default Footer;
