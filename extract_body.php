<?php
function lte_checker_extract_body(){
	$body_text = '';
	if($fh = fopen('/home/webappusr/public_html/wp-content/plugins/lte_avail_plugin/index.html','r')){
		// $filtered = [];
		$body_flag = 0;
		while(!feof($fh)){
			$line = fgets($fh);
			if( strpos($line,'body>') !== false)
				$body_flag = !$body_flag;
			else if($body_flag)
				$body_text .= $line;
				// echo $line;

		}
		fclose($fh);
	}
	return $body_text;
}
// echo extract_body();
?>