<!DOCTYPE html>
<html>
	<head>
			<title>Permissions Management</title>
			<link rel="stylesheet" href="/apples/assets/grocery_crud/css/custom.css">
<?php 
foreach($css_files as $file): ?>
	<link type="text/css" rel="stylesheet" href="<?php echo $file; ?>" />
<?php endforeach; ?>
<?php foreach($js_files as $file): ?>
	<script src="<?php echo $file; ?>"></script>
<?php endforeach; ?>
	<style>
			.checkbox-grid, th, td {
			    border: 1px solid rgba(0, 0, 0, 0.49);
				text-align: center;
				padding: 5px !important;
			}
			.checkbox-grid{
				width: 100%;
			}
	</style>
	</head>
	<body>
		 <div class="boxIC" style="font-size=18px">
		<?php echo $output; ?>
    </div>
	</body>
</html>

