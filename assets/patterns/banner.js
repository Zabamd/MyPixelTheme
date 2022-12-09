import "../css/banner.css";

wp.blocks.registerBlockType("mypixeltheme/banner", {
  title: "Banner",
  edit: editComponent,
  save: saveComponent,
});

function editComponent() {
  return (
    <div className="page-banner">
      <div
        className="page-banner"
        style={{
          backgroundImage:
            "url('/wp-content/themes/MyPixelTheme/assets/img/banner.jpg')",
        }}
      >
        <h1 className="headline">Aloha!</h1>
        <h2 className="sub-headline">Welcome to paradise</h2>
        <a href="#" className="btn btn--large btn--blue">
          Click Me!
        </a>
      </div>
    </div>
  );
}

function saveComponent() {
  return <p>This is from our block.</p>;
}
