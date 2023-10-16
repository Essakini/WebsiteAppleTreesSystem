<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<style>
		h1, h2 { text-align: center; font-family: Calibri; }
		table.mytable {border-collapse: collapse;}
		table.mytable td, th {border: 2px solid black; padding: 5px 15px 2px 7px;}
		th {background-color: #f2e4d5;}	
		td {background-color: #e3e3e3;}	
		body {background-color: #7395AE; }	
	</style>
</head>
<body>

<h1>Queries</h1>
<div align='center'>
	<button type="submit" onclick="location.href='<?php echo site_url('main/query1')?>'">Total value of varieties</button>
	
</div>
<h2>Total value of varieties</h2>
<div align='center'>
<?php
	$tmpl = array ('table_open' => '<table class="mytable">');
	$this->table->set_template($tmpl); 
	
	$this->db->query('drop table if exists temp');
	$this->db->query('create temporary table temp as (select v.fruitName AS Fruit_Name, SUM(t.retailPrice) AS Total_Price from tree t JOIN variety v ON v.varietyID = t.varietyID group by v.fruitName order by Total_Price DESC)');
	$query = $this->db->query('select * from temp;');
	echo $this->table->generate($query);
?>
</div>
</body>
</html>
