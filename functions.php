<?php
require_once "classes/block.php";

//Theme setup
class MyPixelTheme
{
    public function __construct()
    {
        add_action("after_setup_theme", [$this, "themeSetup"]);
        add_action("wp_enqueue_scripts", [$this, "enqueueThemeStyle"]);
        add_action("init", [$this, "registerPatternCategories"]);
        add_filter("block_categories_all", [$this, "registerBlockCategories"]);
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

    function registerPatternCategories()
    {
        register_block_pattern_category("mypixeltheme", [
            "label" => __("My Pixel Theme", "mypixeltheme"),
        ]);
    }

    function registerBlockCategories(array $block_categories): array
    {
        array_unshift($block_categories, [
            "slug" => "my-pixel-theme",
            "title" => __("My Pixel Theme"),
            "icon" => null,
        ]);
        return $block_categories;
    }
}

//Theme init
$theme = new MyPixelTheme();

//Blocks init
$banner = new Block("banner");
$contentSection = new Block("contentsection");
$contentSectionReversed = new Block("contentsectionreversed");
$defaultHeading = new Block("defaultheading");
