import "../style/banner.css";
import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button, PanelBody, PanelRow } from "@wordpress/components";

wp.blocks.registerBlockType("mypixeltheme/banner", {
  title: "Banner",
  category: "MyPixelTheme",
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
        <InspectorControls>
          <PanelBody title="Background Image Upload" initialOpen={true}>
            <MediaUploadCheck>
              <MediaUpload onSelect={} value={} render={({ open }) => {
                return <Button onClick={ open } >Choose Image</Button>
              }} />
            </MediaUploadCheck>
          </PanelBody>
        </InspectorControls>
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
