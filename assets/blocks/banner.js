import "../style/banner.css";
import { InnerBlocks } from "@wordpress/block-editor";

wp.blocks.registerBlockType("mypixeltheme/banner", {
  title: "Banner",
  category: 'my-pixel-theme',
  edit: editComponent,
  save: saveComponent,
});

const contentTemplate = [["mypixeltheme/defaultheading"]];

const allowedBlocks = [
  "core/paragraph",
  "core/heading",
  "mypixeltheme/defaultheading",
  "core/image",
  "core/group",
];

function editComponent() {
  return (
    <div className="banner-wrapper">
      <div className="page-banner">
        <InnerBlocks
          orientation="vertical"
          template={contentTemplate}
          allowedBlocks={allowedBlocks}
        />
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
