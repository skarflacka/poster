var React = require('react');

var PostItem = React.createClass({
  render: function() {
    return (
      <div className="PostItem">
        {this.props.text}
      </div>
    );
  }
});

module.exports = PostItem;
