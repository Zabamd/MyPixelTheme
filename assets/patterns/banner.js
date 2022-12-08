wp.blocks.registerBlockType("MyPixelTheme/banner", {
  title: "Banner",
  edit: editComponent,
  save: saveComponent,
});

function editComponent() {
  return (
    <div className="bannerContainer">
      <div className="bannerTextContainer">
        <h1>Aloha!</h1>
        <h3>Welcome to tropical paradise</h3>
        <a href="#">Click me!</a>
      </div>
    </div>
  );
}

function saveComponent() {
  return <p>This is my first block</p>;
}
