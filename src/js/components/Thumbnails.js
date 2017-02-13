import React from 'react';
import $ from 'jquery';
import Thumbnail from './Thumbnail';
import imagesLoaded from 'imagesloaded';

require('jscrollpane');


const pt = React.PropTypes;

const styles = {
  container: {
    background: 'rgba(0, 0, 0, 0.8)',
    textAlign: 'center',
  },
  list: {
    paddingTop: 10,
    paddingRight: 0,
    paddingBottom: 10,
    paddingLeft: 0,
    margin: 0,
    whiteSpace: 'nowrap',
    outline: 0,
    display: 'inline-block',
  },
  listItem: {
    listStyle: 'none',
    display: 'inline-block',
    margin: 5,
    padding: 0,
  },
};

class Thumbnails extends React.Component {
  constructor() {
    super();
    this.setupScrollbar = this.setupScrollbar.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.setupScrollbar);
    imagesLoaded(this.list, this.setupScrollbar);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setupScrollbar);
  }


  setupScrollbar() {
    // Remove the extra padding added on jsp-initialised. If I don't do this, jScrollPane gets
    // confused about the height of the component and counts the previous padding in. That makes it
    // so that every time the scroll pane is reinitialised, the scrollbar moves several pixels away
    // of the thumbnails with very unpleasant results.
    $(this.listContainer).find('.jspContainer').css({ paddingBottom: 0 });
    $(this.listContainer).bind('jsp-initialised',
      (event, isScrollable) => {
        if (isScrollable) {
          // Style the scrollbar
          $(event.target).find('.jspHorizontalBar, .jspTrack').css({ background: 'transparent' });
          $(event.target).find('.jspDrag').css({ background: '#505050', top: 7 });
          // When the scrollbar is added, make some room for it so that it doesn't appear too close
          // to the thumbnails.
          $(event.target).find('.jspContainer').css({ paddingBottom: 4 });
        }
      }
    ).jScrollPane();
  }

  render() {
    const { images, onImageSelected } = this.props;
    return (
      <div
        ref={listContainer => { this.listContainer = listContainer; }}
        style={styles.container}
      >
        <ul
          ref={list => { this.list = list; }}
          style={styles.list}
        >
          {
            images.map((imageData, index) => (
              <li key={index} style={styles.listItem}>
                <Thumbnail {...imageData} onSelected={onImageSelected} />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

Thumbnails.propTypes = {
  images: pt.arrayOf(pt.shape(Thumbnail.propTypes)),
  onImageSelected: pt.func.isRequired,
};

export default Thumbnails;
