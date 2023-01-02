import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'mypixeltheme/newcomponent', {
    title: 'newcomponent', 
    category: 'my-pixel-theme',
    edit: editComponent,
    save: saveComponent
});

function editComponent(){
    return(
        <p>hello </p>
    )
}
function saveComponent(){
    return(
        <p>hello </p>
    )
}
