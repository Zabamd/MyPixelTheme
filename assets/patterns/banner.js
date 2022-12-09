import "../css/banner.css";
import { InnerBlocks } from "@wordpress/block-editor";

wp.blocks.registerBlockType("mypixeltheme/banner", {
  title: "Banner",
  edit: editComponent,
  save: saveComponent,
});

const CONTENT_TEMPLATE = [
  ["core/heading", { placeholder: "Header", className:"heading", level:1 }],
  ["core/heading", { placeholder: "Sub Header" , className:"sub-heading", level:2}],
];

const ALLOWED_BLOCKS = ["core/paragraph", "core/heading", "core/list"];

function editComponent() {
  return (
    <div className="banner-wrapper">
      <div className="page-banner">
        <InnerBlocks
          orientation='vertical'
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

/*         
`       <h1 className="headline">Aloha!</h1>
        <h2 className="sub-headline">Welcome to paradise</h2>
        <a href="#" className="btn btn--large btn--blue">
          Click Me!
        </a>
 */
