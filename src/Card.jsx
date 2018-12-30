import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    return <div>
        <h3>{ this.props.login }</h3>
        <img width="75" src={ this.props.avatar_url }></img>
    </div>;
  }
}

Card.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired
}