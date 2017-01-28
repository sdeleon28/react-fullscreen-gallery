import React from 'react';
import $ from 'jquery';
import Thumbnails from './Thumbnails';
import Thumbnail from './Thumbnail';


const pt = React.PropTypes;

const styles = {
  container: {
    height: '100%',
    width: '100%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflow: 'hidden',
    position: 'relative',
  },
  titleContainer: {
    display: 'block',
    background: 'rgba(0, 0, 0, 0.8)',
    bottom: 0,
    font: '11px Arial, Helvetica, sans-serif',
    padding: '10px 20px',
    position: 'absolute',
    right: 0,
    textAlign: 'right',
    width: '100%',
  },
  title: {
    font: '30px \'Ultra\', Arial, serif',
    margin: 0,
    padding: 0,
    color: '#FFF',
  },
  thumbnailsWrapper: {
    position: 'relative',
  },
};

class Gallery extends React.Component {
  constructor() {
    super();
    this.toggleThumbnailsAndTitle = this.toggleThumbnailsAndTitle.bind(this);
    this.state = {
      thumbnailsAndTitleVisible: true,
    };
  }

  toggleThumbnailsAndTitle(event) {
    if (event.target !== this.background) {
      return;
    }

    const { thumbnailsAndTitleVisible } = this.state;
    if (thumbnailsAndTitleVisible) {
      $(this.thumbnails).animate({ top: -120 }, 300);
      $(this.titleContainer).animate({ bottom: -100 }, 300);
      this.setState({
        thumbnailsAndTitleVisible: false,
      });
    } else {
      $(this.thumbnails).animate({ top: 0 }, 300);
      $(this.titleContainer).animate({ bottom: 0 }, 300);
      this.setState({
        thumbnailsAndTitleVisible: true,
      });
    }
  }

  render() {
    const { selectedImage, images, onImageSelected } = this.props;
    return (
      <div
        className="react-fullscreen-gallery"
        ref={background => { this.background = background; }}
        style={{ ...styles.container, backgroundImage: `url(${selectedImage.imageUrl})` }}
        onMouseDown={this.toggleThumbnailsAndTitle}
      >
        <div
          style={styles.titleContainer}
          ref={titleContainer => { this.titleContainer = titleContainer; }}
        >
          <h1 style={styles.title}>{selectedImage.title}</h1>
        </div>
        <div
          style={styles.thumbnailsWrapper}
          ref={thumbnails => { this.thumbnails = thumbnails; }}
        >
          <Thumbnails
            images={images}
            onImageSelected={onImageSelected}
          />
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  ...Thumbnails.propTypes,
  selectedImage: pt.shape(Thumbnail.propTypes),
};

export default Gallery;
