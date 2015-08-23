"use strict";

var React = require('react');

var PostItem = React.createClass({
  displayName: "PostItem",

  render: function render() {
    return React.createElement(
      "div",
      { className: "PostItem" },
      this.props.text
    );
  }
});

module.exports = PostItem;