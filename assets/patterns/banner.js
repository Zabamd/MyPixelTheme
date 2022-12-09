import "../css/banner.css";
import { InnerBlocks } from "@wordpress/block-editor";

wp.blocks.registerBlockType("mypixeltheme/banner", {
  title: "Banner",
  edit: editComponent,
  save: saveComponent,
});

function editComponent() {
  return (
    <div className="banner-wrapper">
      <div className="page-banner">
        <InnerBlocks />
      </div>
    </div>
  );
}

function saveComponent() {
  return (
    <div className="banner-wrapper">
    <div className="page-banner">
      <InnerBlocks.Content />
    </div>
  </div>

  );
}

/*         
`       <h1 className="headline">Aloha!</h1>
        <h2 className="sub-headline">Welcome to paradise</h2>
        <a href="#" className="btn btn--large btn--blue">
          Click Me!
        </a>
 */
