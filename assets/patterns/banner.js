import "../style/banner.css";
import { InnerBlocks } from "@wordpress/block-editor";

wp.blocks.registerBlockType("mypixeltheme/banner", {
  title: "Banner",
  edit: editComponent,
  save: saveComponent,
});

const CONTENT_TEMPLATE = [["mypixeltheme/defaultheading"]];

const ALLOWED_BLOCKS = [
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
          template={CONTENT_TEMPLATE}
          allowedBlocks={ALLOWED_BLOCKS}
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
