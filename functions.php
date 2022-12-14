<?php
require_once "classes/block.php";

//Theme setup
class MyPixelTheme
{
    public function __construct()
    {
        add_action("after_setup_theme", [$this, "themeSetup"]);
        add_action("wp_enqueue_scripts", [$this, "enqueueThemeStyle"]);
        add_action("init", [$this, "registerCategories"]);
    }

    function themeSetup(): void
    {
        add_theme_support("editor-styles");
        add_theme_support("wp-block-styles");
        add_editor_style("./editor-style.css");
    }

    function enqueueThemeStyle(): void
    {
        wp_enqueue_style("main_style", get_stylesheet_uri());
    }

    function registerCategories()
    {
        register_block_pattern_category("mypixeltheme", [
            "label" => __("mypixeltheme", "My Pixel theme"),
        ]);
    }
}

//Theme init
$theme = new MyPixelTheme();

//Blocks init
$banner = new Block("banner");
$contentSection = new Block("contentsection");
$contentSectionReversed = new Block("contentsectionreversed");
$defaultHeading = new Block("defaultheading");
$slideShow = new Block("slideshow");
$slide = new Block("slide");


