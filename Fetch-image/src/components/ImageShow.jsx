function ImageShow({ image }) {
  const { alt_description: description } = image;
  return <div>{description}</div>;
}

export default ImageShow;
