function ImageBox({ className, src, alt, width, height }) {
  return (
    <img
      className={className}
      src={src}
      alt={alt ? alt : ""}
      width={width}
      height={height}
    />
  );
}

export default ImageBox;
