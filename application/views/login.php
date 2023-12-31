<!-- It's RESPONSIVE TOO! -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<title>Login Page</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<link rel="stylesheet" href="/apples/assets/grocery_crud/css/custom.css">
		<style>
			.modal-footer {   border-top: 0px; }
		</style>
	</head>
	<body>

	<h1>Hatfield Apple Tree Supplier System</h1>
	<!--login form-->
<div class="boxIC">
	<div id="loginModal" class="modal show" tabindex="-1" role="dialog" aria-hidden="true" style="left=50%; topl=50%; position:absolute;">
	  <div class="modal-dialog">
	  <div class="modal-content">
	      <div class="modal-header">
	          <button type="button" class="close hidden" data-dismiss="modal" aria-hidden="true">×</button>
	          <h2 class="text-center">Login Page</h2>
	      </div>
	      <div class="modal-body">
	          <form class="form col-md-12 center-block" action="<?php echo site_url('login/makeLogin')?>" method="post">
	            <div class="form-group">
	              <input type="text" name="username" class="form-control input-lg" placeholder="Username">
	            </div>
	            <div class="form-group">
	              <input type="password" name="password" class="form-control input-lg" placeholder="Password">
	            </div>
	            <div class="form-group">
	              <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
	              <span class="pull-right"><?php if(isset($error)) echo "<b><span style='color:red;'>$error</span></b>"; ?></span>
	            </div>
	          </form>
	      </div>
	      <div class="modal-footer ">
	          <div class="col-md-12">
	          <button  class="btn hidden" data-dismiss="modal" aria-hidden="true" >&nbsp;</button>
			  </div>	
	      </div>
	  </div>
	  </div>
	</div>
</div>


	
	<script>
    history.pushState(null, null, null);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, null);
    });
</script> 
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js">	</script>
	</body>
</html>
