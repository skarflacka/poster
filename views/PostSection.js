'use strict';

var React = require('react');
var PostList = require('./PostList');

var PostSection = React.createClass({
  displayName: 'PostSection',

  getInitialState: function getInitialState() {
    // Do something
  },
  render: function render() {
    return React.createElement(
      'div',
      { id: 'PostSection' },
      React.createElement(
        'form',
        { method: 'post', action: '/' },
        React.createElement('input', { type: 'text', name: 'poster', placeholder: 'Enter post...' }),
        React.createElement(
          'button',
          { type: 'submit' },
          'Post'
        )
      ),
      React.createElement('br', null),
      React.createElement(PostList, { data: this.state })
    );
  }
});

module.exports = PostSection;