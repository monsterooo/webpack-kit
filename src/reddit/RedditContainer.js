import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { selectReddit } from './RedditActions';
import Picker from './Picker';
import Posts from './Posts';
import styles from './resources/reddit.css';

@CSSModules(styles)
export class Reddit extends Component {
  handleChange = (nextReddit) => {
    this.props.dispatch(selectReddit(nextReddit));
  }
  render() {
    const { selectedReddit, posts, isFetching } = this.props;
    return(
      <div styleName="reddit-box">
        <div>
            <Picker onChange={this.handleChange} value={selectedReddit} options={['reactjs', 'frontend']} />
            <br />
            {
              posts.length > 0 &&
              <div style={{opacity: isFetching ? 0.5 : 1}}>
                <Posts posts={posts} />
              </div>
            }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { selectedReddit, postsByReddit } = state;
  const {isFetching, lastUpdated, items: posts} = postsByReddit[selectedReddit] || {isFetching: true, items: []};

  return {
    posts,
    isFetching,
    lastUpdated,
    postsByReddit
  };
}

module.exports = connect(mapStateToProps)(Reddit);
