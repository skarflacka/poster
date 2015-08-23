var React = require('react');
var PostItem = require('./PostItem');

var PostList = React.createClass({
  render: function() {
    return (
      this.props.data.map(function(post) {
        return (
          <PostItem text={post.text} />
        );
      })
    );
  }
});


module.exports = PostList;
