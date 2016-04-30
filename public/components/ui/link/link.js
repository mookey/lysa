import React from 'react';

export class Link extends React.Component {
  render() {
    return <a href={this.props.link}>
        {this.props.name}
      </a>;
  }
}
