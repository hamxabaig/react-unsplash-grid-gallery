import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Photo.css';

class Photo extends Component {

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired
  };

  render() {
    const {src, height, width} = this.props;

    return (
      <div
        className="photo__wrapper"
      >
        <div
          className="photo__container"
          style={ {
            paddingBottom: (height / width * 100) + '%',
          }}
        >
          <img
            className="photo__img"
            src={src}
          />
        </div>
      </div>
    );
  }
}

export default Photo;