import "../style/defaultheading.css";
import { InnerBlocks } from "@wordpress/block-editor";

wp.blocks.registerBlockType("mypixeltheme/defaultheading", {
  title: "Default heading",
  edit: editComponent,
  save: saveComponent,
});

const contentTemplate = [
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
    {
      className: "smallHeader",
      placeholder: "Proin interdum eu ligula ut faucibus",
    },
  ],
];

const allowedBlocks = ["core/paragraph"];
function editComponent() {
  return (
    <div className="defaultHeadingWrapper">
      <InnerBlocks template={contentTemplate} allowedBlocks={allowedBlocks} />
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
