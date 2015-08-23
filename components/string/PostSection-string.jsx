var React = require('react');
var PostList = require('./PostList-string');


var PostSection = React.createClass({
  getInitialState: function() {
    // Do something
  },
  render: function() {
    return (
      <div id="PostSection">
        <form method="post" action="/">
          <input type="text" name="poster" placeholder="Enter post..."/>
          <button type="submit">Post</button>
        </form>
        <br/>
        <PostList data={this.state} />
      </div>
    );
  }
});

module.exports = PostSection;
