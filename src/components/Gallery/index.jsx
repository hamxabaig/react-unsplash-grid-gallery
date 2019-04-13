import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';
import Photo from '../Photo';

class Gallery extends Component {

  static propTypes = {
    images: PropTypes.array.isRequired,
    columns: PropTypes.number.isRequired
  };

  state = {
    grids: []
  };

  componentWillMount() {
    const {images, columns = 2} = this.props;
    console.log(columns);

    if (!images.length) {
      throw new Error('No [images] provided!');
    }

    if (images.length < columns) {
      throw new Error('[columns] should be less than [images] length');
    }

    console.log(images, columns);
    this.state.grids = this.createGridColumns(images, columns);
    console.log(this.state.grids);
  }

  createGridColumns(array, size) {
    const fillers = [];

    for (let i = 0; i < size; i++) {
      fillers.push([]);
    }

    return array.reduce((ac, value, index) => {
      const colIdx = index % size;
      ac[colIdx].push(value);
      return ac;
    }, fillers);
  }

  render() {
    const {grids} = this.state;

    return (
      <div className="gallery">
        {
          grids.map((images, index) => (
            <div
              key={index}
              className="gallery__grid-photos"
              style={{width: (100 - grids.length) / grids.length + '%'}}
            >
              {
                images.map((photo, indexChild) => (
                  <Photo key={`${index}_${indexChild}`} {...photo} />
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default Gallery;