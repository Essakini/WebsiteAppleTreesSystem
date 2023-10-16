<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title> Palnted Trees </title>
	<link rel="stylesheet" href="/apples/assets/grocery_crud/css/custom.css">
	
<?php 
foreach($css_files as $file): ?>
	<link type="text/css" rel="stylesheet" href="<?php echo $file; ?>" />
<?php endforeach; ?>

<?php foreach($js_files as $file): ?>
	<script src="<?php echo $file; ?>"></script>
<?php endforeach; ?>
</head>
<body>
<div class="boxIC" role="button">
	<div class="warranty" id="SWarranty" role="button">
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
