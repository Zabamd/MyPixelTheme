import "../style/slideshow.css";
import { InnerBlocks } from "@wordpress/block-editor";

wp.blocks.registerBlockType("mypixeltheme/slideshow", {
  title: "Slide Show",
  category: "mypixeltheme",
  save: saveComponent,
  edit: editComponent,
});

const customTemplate = [["mypixeltheme/slide"]];

function editComponent() {
  return (
    <div className="slideShowWrapper">
      <InnerBlocks
        template={customTemplate}
      />
    </div>
  );
}

function saveComponent() {
  return <InnerBlocks.Content />;
}
