<?php

if( !function_exists('my_pixel_theme_setup') ):

function my_pixel_theme_setup() {
    add_theme_support("wp-block-styles");
    add_editor_style('editor-style.css');
}

endif;

add_action('after_setup_theme','my_pixel_theme_setup');

?>

