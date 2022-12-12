<?php

function my_pixel_theme_setup() : void
{
    add_theme_support("editor-styles");
    add_theme_support("wp-block-styles");
    add_editor_style("editor-style.css");
    add_editor_style(["/build/banner.css", "/build/index.css"]);
}

add_action("after_setup_theme", "my_pixel_theme_setup");

function enqueue_theme_styles() : void
{
    wp_enqueue_style("main_style", get_stylesheet_uri());
    wp_enqueue_style("banner_style", get_theme_file_uri("/build/banner.css"));
}

add_action("wp_enqueue_scripts", "enqueue_theme_styles");

function bannerBlockInit() : void
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
