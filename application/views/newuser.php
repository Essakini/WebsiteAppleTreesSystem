<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title> Users </title>
	<link rel="stylesheet" href="/apples/assets/grocery_crud/css/custom.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	
<?php 
foreach($css_files as $file): ?>
	<link type="text/css" rel="stylesheet" href="<?php echo $file; ?>" />
<?php endforeach; ?>

<?php foreach($js_files as $file): ?>
	<script src="<?php echo $file; ?>"></script>
<?php endforeach; ?>

</head>
<body>

<div
	<h4 align="center" >Users list table</h1>
			<div >
				<?php echo $output; ?>
			</div>
</div>	
<script>
    history.pushState(null, null, null);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, null);
    });
</script> 
</body>
</html>
