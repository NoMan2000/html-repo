<?php
function detectMobileUA(){
	$user_agent = $_SERVER['HTTP_USER_AGENT'];

	if (stripos($user_agent,'ipod') !== false || stripos($user_agent,'iphone') !== false)
		return true;

	if (stripos($user_agent,'android') !== false)
		return true;

	if (stripos($user_agent,'opera mobi') !== false)
		return true;

	if (stripos($user_agent,'windows phone os') !== false && stripos($user_agent,'iemobile') !== false)
		return true;

	if (stripos($user_agent,'fennec') !== false)
		return true;

	return false;
}
?>
