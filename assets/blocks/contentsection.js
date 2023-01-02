import defaultColors from "../colorList";
import "../style/contentsection.css";
import { PanelBody, PanelRow } from "@wordpress/components";
import {
  InnerBlocks,
  InspectorControls,
  ColorPalette,
} from "@wordpress/block-editor";

wp.blocks.registerBlockType("mypixeltheme/contentsection", {
  title: "Content Section",
  attributes: {
    background: { type: "string", default: "#BFD0DC" },
  },
  category: "my-pixel-theme",
  edit: editComponent,
  save: saveComponent,
});

const allowedBlocks = [
  "core/heading",
  "core/paragraph",
  "core/list",
  "core/image",
  "core/group",
];

const contentTemplate = [
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

function editComponent(props) {
  return (
    <div
      className="sectionWrapper"
      style={{ backgroundColor: `${props.attributes.background}` }}
    >
      <div className="section">
        <InspectorControls>
          <PanelBody title="Background Color Picker" initialOpen={true}>
            <PanelRow>
              <ColorPalette
                disableCustomColors={true}
                clearable={false}
                colors={defaultColors}
                value={props.attributes.background}
                onChange={(colorCode) => {
                  props.setAttributes({ background: colorCode });
                }}
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <InnerBlocks template={contentTemplate} allowedBlocks={allowedBlocks} />
      </div>
    </div>
  );
}

function saveComponent(props) {
  return (
    <div
      className="sectionWrapper"
      style={{ backgroundColor: `${props.attributes.background}` }}
    >
      <div className="section">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
