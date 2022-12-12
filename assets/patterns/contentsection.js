import "../style/contentsection.css";
import { InnerBlocks } from "@wordpress/block-editor";

wp.blocks.registerBlockType("mypixeltheme/contentsection", {
  title: "ContentSection",
  edit: editComponent,
  save: saveComponent,
});

const ALLOWED_BLOCKS = [
  "core/heading",
  "core/paragraph",
  "core/list",
  "core/image",
  "core/group",
];

const CONTENT_TEMPLATE = [
  [
    "core/columns",
    {},
    [
      [
        "core/column",
        {},
        [
          [
            "core/heading",
            {
              level: 1,
              placeholder: "Section heading",
              className: "contentSectionHeading",
            },
          ],
        ],
      ],
      [
        "core/column",
        {},
        [
          [
            "core/paragraph",
            {
              placeholder: "Section Paragraph",
              className: "contentSectionParagraph",
            },
          ],
        ],
      ],
    ],
  ],
];

function editComponent() {
  return (
    <div className="sectionWrapper">
      <div className="section">
        <InnerBlocks
          template={CONTENT_TEMPLATE}
          allowedBlocks={ALLOWED_BLOCKS}
        />
      </div>
    </div>
  );
}

function saveComponent() {
  return (
    <div className="sectionWrapper">
      <div className="section">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
