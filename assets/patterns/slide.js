import "../style/slide.css";
import { InnerBlocks } from "@wordpress/block-editor";

wp.blocks.registerBlockType("mypixeltheme/slide", {
  title: "Slide",
  category: "mypixeltheme",
  save: saveComponent,
  edit: editComponent,
});

const contentTemplate = [["mypixeltheme/defaultheading"]];

 const allowedBlocks = [
  "core/paragraph",
  "core/heading",
  "mypixeltheme/defaultheading",
]; 

function editComponent() {
  return (
    <div className="slideWrapper">
      <InnerBlocks
        orientation="vertical"
        template={contentTemplate}
        allowedBlocks={allowedBlocks}
      />
    </div>
  );
}

function saveComponent() {
  return (
    <div className="slideWrapper">
      <InnerBlocks.Content />
    </div>
  );
}
