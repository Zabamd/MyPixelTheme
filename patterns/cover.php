<?php
/**
 * Title: Cover Pattern
 * Slug: mypixeltheme/coverpattern
 * Categories: mypixeltheme
*/
?>
<!-- wp:cover {"url":"<?php echo esc_url(
    get_theme_file_uri("assets/img/banner.jpg")
); ?>","id":3424,"dimRatio":50,"overlayColor":"contrast","align":"full", "templateLock":"contentOnly"} -->
<div class="wp-block-cover alignfull">
    <span aria-hidden="true" class="wp-block-cover__background has-contrast-background-color has-background-dim"></span>
    <img class="wp-block-cover__image-background wp-image-3424" alt="" src="<?php echo esc_url(
        get_theme_file_uri("assets/img/banner.jpg")
    ); ?>" data-object-fit="cover"/>
    <div class="wp-block-cover__inner-container">
            <!-- wp:group {"templateLock":"contentOnly","style":{"spacing":{"blockGap":"2.5rem"}},"layout":{"type":"constrained","wideSize":"%","contentSize":"75%","justifyContent":"center"}} -->
    <div class="wp-block-group"><!-- wp:heading {"textAlign":"center"} -->
    <h2 class="has-text-align-center">Welcome to My Site</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><?php _e(
    "This is my little home away from home. Here, you will get to know me.  I'll share my likes, hobbies, and more.  Every now and then, I'll even have something interesting to say in a blog post.",
    "themeslug"
); ?></p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button"><?php _e(
    "See My Popular Posts →",
    "themeslug"
); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->