<?php require_once("detect_mobile_ua.php"); ?>
<?php
	$ismobile = detectMobileUA();
?>
<!DOCTYPE html>
<html>

<head>
	<title>PHP-Based Device Detection</title>

	<meta name="viewport" content="width=device-width" />
</head>

<body>
	<h1>PHP UserAgent Detection</h1>
	<p>This page performs a simple string-based test to see if the incoming request is
	from a mobile browser. The string at the bottom of this page will indicate
	whether a mobile browser was detected.</p>
	<p>The user agent string is: <?php echo $_SERVER['HTTP_USER_AGENT'];?></p>
	<?php
	if ($ismobile)
		echo "<h2>This appears to be a mobile browser</h2>";
	else
		echo "<h2>Hmmm... not a mobile browser</h2>";
	?>
</body>
</html>
