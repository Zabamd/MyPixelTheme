import "../style/defaultheading.css";
import { InnerBlocks } from "@wordpress/block-editor";

wp.blocks.registerBlockType("mypixeltheme/defaultheading", {
  title: "Default heading",
  edit: editComponent,
  save: saveComponent,
});

const CONTENT_TEMPLATE = [
  [
    "core/paragraph",
    { className: "regularHeader", placeholder: "Lorem ipsum dolor sit amet" },
  ],
  [
    "core/paragraph",
    { className: "largeHeader", placeholder: "Consectetur adipiscing elit" },
  ],
  [
    "core/paragraph",
    { className: "smallHeader", placeholder: "Proin interdum eu ligula ut faucibus" },
  ],
];

const ALLOWED_BLOCKS = ["core/paragraph"];
function editComponent() {
  return (
    <div className="defaultHeadingWrapper">
      <InnerBlocks template={CONTENT_TEMPLATE} allowedBlocks={ALLOWED_BLOCKS} />
    </div>
  );
}

function saveComponent() {
  return (
    <div className="defaultHeadingWrapper">
      <InnerBlocks.Content />
    </div>
  );
}
