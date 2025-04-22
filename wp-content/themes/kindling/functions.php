<?php
/**
 * Theme functions and definitions
 *
 * @package kindling
 */

// Enqueues style.css on the front.
if ( ! function_exists( 'kindling_enqueue_styles' ) ) {
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
}
add_action( 'wp_enqueue_scripts', 'kindling_enqueue_styles' );

// Enqueues block styles.
if ( ! function_exists( 'kindling_enqueue_block_styles' ) ) {
	/**
	 * Enqueues block styles.
	 *
	 * @since Kindling 4.0.0
	 *
	 * @return void
	 */
	function kindling_enqueue_block_styles() {
		// Add the block name (with namespace) for each style.
		$blocks = array(
			'core/navigation'
		);

		// Loop through each block and enqueue its styles.
		foreach ( $blocks as $block ) {
			// Replace slash with hyphen for filename.
			$slug = str_replace( '/', '-', $block );

			wp_enqueue_block_style( $block, array(
				'handle' => "kindling-block-{$slug}",
				'src'    => get_theme_file_uri( "assets/blocks/{$slug}.css" ),
				'path'   => get_theme_file_path( "assets/blocks/{$slug}.css" )
			) );
		}
	}
}
add_action( 'init', 'kindling_enqueue_block_styles' );
