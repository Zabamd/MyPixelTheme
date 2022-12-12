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
    { className: "first", placeholder: "Lorem ipsum dolor sit amet" },
  ],
  [
    "core/paragraph",
    { className: "second", placeholder: "Consectetur adipiscing elit" },
  ],
  [
    "core/paragraph",
    { className: "third", placeholder: "Proin interdum eu ligula ut faucibus" },
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
