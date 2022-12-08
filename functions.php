<?php

if( !function_exists('my_pixel_theme_setup') ):

function my_pixel_theme_setup() {
    add_theme_support("wp-block-styles");
    add_editor_style('editor-style.css');
}

endif;

add_action('after_setup_theme','my_pixel_theme_setup');

function bannerBlock() {
    wp_register_script( 'bannerBlockScript', get_stylesheet_directory()."/assets/patterns/banner.js", array('wp-block', 'wp-editor'), false );
    register_block_type('MyPixelTheme/banner',array(
        'editor_script' => 'bannerBlockScript'
    ));
}

add_action('init','bannerBlock');

?>

