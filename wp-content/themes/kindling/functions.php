<?php
/**
 * Theme functions and definitions
 *
 * @package kindling
 */

// Enqueues style.css on the front.
if ( ! function_exists( 'kindling_enqueue_styles' ) ) :
	/**
	 * Enqueues style.css on the front.
	 *
	 * @since Kindling 4.0.0
	 *
	 * @return void
	 */
	function kindling_enqueue_styles() {
		wp_enqueue_style(
			'kindling-style',
			get_parent_theme_file_uri( 'style.css' ),
			array(),
			wp_get_theme()->get( 'Version' )
		);
	}
endif;
add_action( 'wp_enqueue_scripts', 'kindling_enqueue_styles' );
