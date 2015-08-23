'use strict';

var React = require('react');
var PostItem = require('./PostItem');

var PostList = React.createClass({
  displayName: 'PostList',

  render: function render() {
    return this.props.data.map(function (post) {
      return React.createElement(PostItem, { text: post.text });
    });
  }
});

module.exports = PostList;