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

  wp_register_script('simple_slider_js', plugins_url('/Simple Slider/js/carousel.js'));
  wp_enqueue_script('simple_slider_js');
}

add_action('init', 'simple_slider_init');

// Carousel Wrapper Shortcode
function carousel_wrapper( $atts=[], $content=null ) {

  $carouselWrapper = '<div class="carousel-container"><div class="carousel-wrapper"><a class="arrow" id="left"></a>';
  $carouselWrapper .= '<ul class="carousel">';
  $carouselWrapper .= do_shortcode($content);
  $carouselWrapper .= '</ul>';
  $carouselWrapper .= '<a class="arrow" id="right"></a>';
  $carouselWrapper .= $thumbs;
  $carouselWrapper .= '</div></div>';


  return $carouselWrapper;

}

// Slide Shortcode
function slide( $atts=[], $content=null ) {

  $atts = shortcode_atts(
      array(
          src => '#', // Img Source
      ), $atts
  );

  $slide .= '<li class="slide"><img src='. $atts[ 'src' ] .' /></li>';

  return $slide;

}

// Thumbnails Shortcode
function thumbs_container( $atts=[], $content=null ) {

  $thumbsContainer = '<div class="carousel-thumbs"><ul class="thumbs">';
  $thumbsContainer .= do_shortcode($content);
  $thumbsContainer .= '</ul></div>';

  return $thumbsContainer;

}

function thumbs( $atts=[], $content=null ) {

  $atts = shortcode_atts(
    array(
      src => '#', // Img Source
      id => '#', // An Integer, 1-10
    ), $atts
  );

  $thumbs = '<li class="thumbnail" id =thumb'. $atts[ 'id' ] .'><img src='. $atts[ 'src' ] .' /></li>';

  return $thumbs;

}

add_shortcode( 'slider', 'carousel_wrapper' );
add_shortcode( 'slide', 'slide' );
add_shortcode( 'thumbnails', 'thumbs_container' );
add_shortcode( 'thumbnail', 'thumbs' );

?>
