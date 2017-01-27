import React from 'react';
import Gallery from '../components/Gallery';

const pt = React.PropTypes;


class GalleryContainer extends React.Component {
  constructor() {
    super();
    this.onImageSelected = this.onImageSelected.bind(this);
    this.state = {
      selectedImageIndex: 0,
    };
  }

  onImageSelected(selectedImageIndex) {
    this.setState({ selectedImageIndex });
  }

  render() {
    const images = this.props.images.map((image, index) => ({
      ...image,
      index,
      selected: index === this.state.selectedImageIndex,
    }));
    const selectedImage = images.find(image => image.selected);
    return (
      <Gallery
        selectedImage={selectedImage}
        images={images}
        onImageSelected={this.onImageSelected}
      />
    );
  }
}

GalleryContainer.propTypes = {
  images: pt.arrayOf(pt.shape({
    imageUrl: pt.string.isRequired,
    thumbnailUrl: pt.string.isRequired,
    title: pt.string.isRequired,
    alt: pt.string.isRequired,
  })),
};

export default GalleryContainer;
