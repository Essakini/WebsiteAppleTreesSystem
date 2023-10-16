<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title> Welcome </title>
	<link rel="stylesheet" href="/apples/assets/grocery_crud/css/custom.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	

</head>
<body>

<div class="boxIC" id="All">
   <div class="boxMQuery" id="Q1" role="button"><p> Total Value of varieties</p></div> 
	<div class="boxMTQuery" id="SQ1"  method="post" width=fit-content; height="100vh" >
			<?php
	$tmpl = array ('table_open' => '<table class="mytable">');
	$this->table->set_template($tmpl); 
	
	$this->db->query('drop table if exists temp');
	$this->db->query('create temporary table temp as (select v.fruitName AS Fruit_Name, SUM(t.retailPrice) AS Total_Price from tree t JOIN variety v ON v.fruitName = t.variety group by v.fruitName order by Total_Price DESC)');
	$query = $this->db->query('select * from temp;');
	echo $this->table->generate($query);
?>
	</div>	
</div>	


<script>
	$('#SQ1').hide();
    $('#Q1').on('click', function() {
        $('#SQ1').slideToggle(700);
    });
	
</script>
<script>
    history.pushState(null, null, null);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, null);
    });
</script> 
</body>
</html>
