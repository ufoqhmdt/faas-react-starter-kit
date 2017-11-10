/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>React.js News</h1>
          {this.props.news.map(item => (
            <article>{item}</article>
            // <article key={item.title} className={s.newsItem}>
            //   <h1 className={s.newsTitle}>
            //     <a href={item.title}>{item.title}</a>
            //   </h1>
            //   <div
            //     className={s.newsDesc}
            //     // eslint-disable-next-line react/no-danger
            //     dangerouslySetInnerHTML={{ __html: item.description }}
            //   />
            // </article>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
