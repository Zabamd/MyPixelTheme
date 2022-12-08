<?php

function my_pixel_theme_setup() {
    add_theme_support("wp-block-styles");
    add_editor_style('editor-style.css');
}


add_action('after_setup_theme','my_pixel_theme_setup');

function banner_block_init() {
    wp_register_script( 'bannerBlockScript', get_stylesheet_directory_uri()."/build/banner.js", array('wp-block', 'wp-editor'));
    register_block_pattern('MyPixelTheme/banner',array(
        'editor_script' => 'bannerBlockScript'
    ));
}

add_action('init','banner_block_init');

?>

