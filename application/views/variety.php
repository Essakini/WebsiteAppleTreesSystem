<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title> Tree </title>

<?php 
foreach($css_files as $file): ?>
	<link type="text/css" rel="stylesheet" href="<?php echo $file; ?>" />
<?php endforeach; ?>

<?php foreach($js_files as $file): ?>
	<script src="<?php echo $file; ?>"></script>
<?php endforeach; ?>
</head>
<body>

			<div  id="Streetable" >
				<?php echo $output; ?>
			</div>
			
			
			
		
		


</body>
</html>
