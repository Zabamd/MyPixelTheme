<?php

function my_pixel_theme_setup()
{
    add_theme_support("editor-styles");
    add_theme_support("wp-block-styles");
    add_editor_style("editor-style.css");
    add_editor_style([
        get_stylesheet_uri() . "/build/banner.css",
        get_stylesheet_uri() . "/build/index.css",
    ]);
}

add_action("after_setup_theme", "my_pixel_theme_setup");

function enqueue_theme_styles()
{
    wp_enqueue_style("main-style", get_stylesheet_uri() . "/style.css");
    wp_enqueue_style(
        "banner-style",
        get_stylesheet_uri() . "/build/banner.css"
    );
}

add_action("wp_enqueue_scripts", "enqueue_theme_styles");

function bannerBlockInit()
{
    wp_register_script(
        "bannerBlockScript",
        get_stylesheet_directory_uri() . "/build/banner.js",
        ["wp-blocks", "wp-editor"]
    );
    register_block_type("mypixeltheme/banner", [
        "editor_script" => "bannerBlockScript",
    ]);
}

add_action("init", "bannerBlockInit");
?>
