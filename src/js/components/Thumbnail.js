import React from 'react';


const pt = React.PropTypes;


const buttonStyles = {
  background: 'none',
  margin: 0,
  padding: 0,
  outline: 0,
  cursor: 'hand',
};

const styles = {
  button: {
    ...buttonStyles,
    border: '2px solid transparent',
  },
  buttonSelected: {
    ...buttonStyles,
    border: '2px solid red',
  },
  image: {
    height: 75,
  },
};

const Thumbnail = ({ thumbnailUrl, title, alt, index, selected, onSelected }) => (
  <button
    onClick={() => onSelected(index)}
    style={selected ? styles.buttonSelected : styles.button}
  >
    <img
      style={styles.image}
      src={thumbnailUrl}
      title={title}
      alt={alt}
    />
  </button>
);

Thumbnail.propTypes = {
  imageUrl: pt.string.isRequired,
  thumbnailUrl: pt.string.isRequired,
  title: pt.string,
  alt: pt.string,
  index: pt.number.isRequired,
  selected: pt.bool.isRequired,
  onSelected: pt.func,
};

export default Thumbnail;
