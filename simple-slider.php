<?php

/*
Plugin Name: Simple Slider
Plugin URI: http://mattyoungdesigns,com
Description: The Simple Slider is just that: an image slider. It literally just slides images.
Author: JM Sepcial
Author URI: JM Special
Version: 0.0.0.0.0.0.0.0.1
License: GPLv2
*/

function simple_slider_init() {
  wp_register_style('simple_slider', plugins_url('Simple Slider/style.css'));
  wp_enqueue_style('simple_slider');
}

add_action('init', 'simple_slider_init');

// Carousel Wrapper Shortcode
function carousel_wrapper( $atts=[], $content=null ) {

  $carouselWrapper = '<div class="container"><div class="carousel-wrapper"><a class="arrow" id="left" href="#"></a>';
  $carouselWrapper .= '<ul class="carousel">';
  $carouselWrapper .= do_shortcode($content);
  $carouselWrapper .= '</div></div></ul>';
  $carouselWrapper .= '<a class="arrow" id="right" href="#"></a>';

  return $carouselWrapper;

}

// Slide Shortcode
function slide( $atts=[], $content=null ) {

  $atts = shortcode_atts(
      array(
          src => '#',
      ), $atts
  );

  $slide .= '<li class="slide"><img src='. $atts[ 'src' ] .' /></li>';

  return $slide;

}

add_shortcode( 'slider', 'carousel_wrapper' );
add_shortcode( 'slide', 'slide' );

?>
