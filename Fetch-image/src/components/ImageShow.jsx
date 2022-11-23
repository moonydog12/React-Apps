function ImageShow({ image }) {
  const { alt_description: description } = image;
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
