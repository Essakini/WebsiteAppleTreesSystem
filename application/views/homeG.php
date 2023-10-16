<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title> Home </title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="/apples/assets/grocery_crud/css/custom.css">
	
	
</head>
<body>	

</head>
<body>

<h1>Hatfield Apple Tree Supplier System</h1>


<div class=wrapper>
    <div  class="col">
	<ul >
		<li><a href='<?php echo site_url('main/welcome')?>'> <span style=" margin-top: 8px;" class="glyphicon glyphicon-tree-deciduous"></span> </a></li> 
		<li>
		    <a href='<?php echo site_url('login/manage_permissions')?>'> Permission</a>
			<ul>
				<li><a align="center" href='<?php echo site_url('main/newuser')?>'> Users table<a/></li>
			</ul>
		</li>
		<li><a href='<?php echo site_url('main/palnted_trees')?>'>Planted Trees</a></li>
		<li><a href='<?php echo site_url('main/growers')?>'>Tree Info</a></li>
		<li><a href='<?php echo site_url('login/logout')?>'><span style=" margin-top: 8px;" class="glyphicon glyphicon-log-out"></span></a></li>
	</ul>
		
	</div>
</div>
<h2 align="center">Head Growers</h2>
<p style="font-size:22px;" align="center">This system allows staff at Hatfield Apple Tree Suppliers to manage stocked items, customers and orders.</p>

</body>
</html>
