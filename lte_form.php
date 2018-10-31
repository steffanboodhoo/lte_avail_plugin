<?php  
/*
Plugin Name: LTE Checker
Plugin URI: http://bmobile.co.tt
Description: A form that integrates with streamline
Version: 1.0
Author: Justin Ali, Steffan Boodhoo and James Thomas
Author URI: http://bmobile.co.tt
*/

// include 'extract_body.php';

function lte_form_script_init(){
	wp_register_script('lte-avail-checker', plugin_dir_url(__FILE__).'index.js', array('jquery'));
    wp_enqueue_script('lte-avail-checker');
}

function lte_form_create(){
	ob_start();
	// deliver_mail();
	echo extract_body();
	return ob_get_clean();
}

add_shortcode( 'lte_form_code', 'lte_form_create' );
add_action('wp_enqueue_scripts','lte_form_script_init');

?>