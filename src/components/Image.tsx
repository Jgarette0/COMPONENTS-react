function Image() {
  const image = {
    url: "https://i.imgur.com/yXOvdOSs.jpg",
  };
  return (
    <>
      <div>
        <img src={image.url} alt="image" />
      </div>
    </>
  );
}
export default Image;
