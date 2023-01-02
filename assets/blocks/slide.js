import "../style/slide.css";
import { InnerBlocks } from "@wordpress/block-editor";

wp.blocks.registerBlockType("mypixeltheme/slide", {
  title: "Slide",
  category: "my-pixel-theme",
  save: saveComponent,
  edit: editComponent,
});

const contentTemplate = [["mypixeltheme/banner"]];

const allowedBlocks = [
  "core/paragraph",
  "core/heading",
  "mypixeltheme/defaultheading",
  "mypixeltheme/banner",
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
