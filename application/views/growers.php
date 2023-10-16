<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title> Growers </title>
	<link rel="stylesheet" href="/apples/assets/grocery_crud/css/custom.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

</head>
<body>

<div class="boxIC" id="All">

        <div class="warranty" id="SWarranty" role="button">

			<div class="boxM" id="Stree" role="button"><p>Trees</p></div> 
			<div class="boxM" id="Svariety"  role="button"><p>Variety</p></div>
			<div class="boxM" id="Sorchard"  role="button"><p>Orchard</p></div>
			
			<div class="boxMT" id="Streetable"  method="post" width="100%" height="100vh" >
			

				<iframe  width="100%" height="100%" src='<?php echo site_url('main/tree')?>' name="targetframe" allowTransparency="true" allowfullscreen="true" >
				</iframe>
			</div>
			
			
			<div class="boxMT" id="Svarietytable" method="post" width="100%" height="100vh">
				<iframe  width="100%" height="100%" src='<?php echo site_url('main/apple_variety')?>' name="targetframe" allowTransparency="true" allowfullscreen="true" >
    </iframe>
			</div>
			
			<div class="boxMT" id="Sorchardtable" method="post" width="100%" height="100%">
				<iframe  width="100%" height="100%" src='<?php echo site_url('main/orchard')?>' name="targetframe" allowTransparency="true" allowfullscreen="true" >
    </iframe>
			</div>
			
		</div>
		
</div>

	<script>
	$('#Svarietytable').hide();
	$('#Streetable').hide();
	$('#Sorchardtable').hide();
    $('#Stree').on('click', function() {
		$('#Svarietytable').hide();
		$('#Sorchardtable').hide();
        $('#Streetable').slideToggle(700);
    });
	$('#Sorchard').on('click', function() {
		$('#Streetable').hide();
		$('#Svarietytable').hide();
        $('#Sorchardtable').slideToggle(700);
    });
	
	$('#Svariety').on('click', function() {
		$('#Streetable').hide();
		$('#Sorchardtable').hide();
        $('#Svarietytable').slideToggle(700);
    });
</script>

</body>
</html>
