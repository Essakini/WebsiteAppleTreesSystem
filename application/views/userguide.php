<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/apples/assets/grocery_crud/css/style.css">
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
  <!-- script>document.getElementsByTagName("html")[0].className += " js";</script> -->
  <title>FAQ </title>
</head>
<body>
<header class="cd-header flex flex-column flex-center">

    <h2>FAQ</h2>

</header>

<section class="cd-faq js-cd-faq container max-width-md margin-top-lg margin-bottom-lg">
	<ul class="cd-faq__categories">
		<li><a class="cd-faq__category cd-faq__category-selected truncate" href="#basics">Basics</a></li>
		<li><a class="cd-faq__category truncate" href="#mobile">Permissions</a></li>
	</ul> <!-- cd-faq__categories -->

	<div class="cd-faq__items">
		<ul id="basics" class="cd-faq__group">
			<li class="cd-faq__title"><h2>Basics</h2></li>
			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>How do I add, edit or cancel information</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Each user will have its permission after an admin or Head grower has added a user to the list. The permission table will provide which information the user can add, edit or delete information from a table</p>
          </div>
				</div> <!-- cd-faq__content -->
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>I want to change my permissions</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>Only the Head growers and Admin can change permission</p>
          </div>
				</div> <!-- cd-faq__content -->
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Query</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>A query can provide a specific result. Currenty the system has "Total Value of varieties" query.</p>
          </div>
				</div> <!-- cd-faq__content -->
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>What is "tree planted" tab? </span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>The tree planted tab provise a table of tree planted, each tree ID must be part of the tree table. Once choosen the tree to plant, the user must select the Orchard, this can be selected when adding the tree to tree planted. Then a date must be inserted to complete the process of adding a tree.</p>
          </div>
				</div> <!-- cd-faq__content -->
			</li>
			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>What is "tree info" tab? </span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>The tree info tab provides information how a tree is developed. The page contains the "Tree" table where all trees are stored. Each tree has a variety selected from the "Variety" table. The "Orchard" table is the location where each tree is planted and it is referenced by the tree variety name.</p>
          </div>
				</div> <!-- cd-faq__content -->
			</li>
		</ul> <!-- cd-faq__group -->

		<ul id="mobile" class="cd-faq__group">
			<li class="cd-faq__title"><h2>Permission table</h2></li>
			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>Who can change user perissions?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p> Only user who can view the Permission and User table tab can change user permissions</p>
          </div>
				</div> <!-- cd-faq__content -->
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>I can view the Permission tab, how do I change user perissions?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p> once on the permiossion table, select the user within the list and click edit to change what table they can either add, edit or delete.</p>
          </div>
				</div> <!-- cd-faq__content -->
			</li>

			<li class="cd-faq__item">
				<a class="cd-faq__trigger" href="#0"><span>How do I add permission to a new user?</span></a>
				<div class="cd-faq__content">
          <div class="text-component">
            <p>If you have to add a new user, first make sure the user is added to the User Table, second click on Add User Permission and select from the drop down menu the new user name. Now select which tables the user can view, edit, add or delete information</p>
          </div>
				</div> <!-- cd-faq__content -->
			</li>
		</ul> <!-- cd-faq__group -->

		
	</div> 

</section> 

</body>
</html>