<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Main extends CI_Controller {
	 
	 function __construct()
	{
		parent::__construct();	
		
		$this->load->database();
		$this->load->helper('url');
		$this->load->library('grocery_CRUD');
		$this->load->library('table');
		$this->load->library('session');
		$this->load->model('login_model');
	}
	
	
//////////////////////Login ////////////////////////
	public function index()
	{	
		
		if ($this->db->table_exists('crud_users')){
			
			$this->load->view('login.php');
			$this->load->view('footer.php');
		}else{
			
			echo "SYSTEM REQUIREMENT: SQL TABLE crud_users DOESN'T EXISTS BUT it can be created ;)<p><a href=\"".base_url()."index.php/login/createDBTable\"><button>Create the required table in your MySQL database</button></a></p>Oh, a user 'admin' (password 'admin') will be create too, so you can log in directly! Just click on the button!";
			echo "<p><br/><i>...this is a one-time-only step!</i></p>";
		}
	}
	
	
///////////////////user guide //////////////////////////

public function userguide()
	{	
		
		if($this->login_model->isLogged()){ 
		$uname = $this->login_model->username();
		$permission = $this->login_model->permissions();
			if ($permission == 1 or $permission == 2){
				echo "<div ><p id='lisa'> Hi $uname! You are Logged IN!</p></div>";
				$this->load->view('homeG.php');
				$this->load->view('userguide.php');
				$this->load->view('footer.php');
				
			}else {echo "<div ><p id='lisa'> Hi $uname! You are Logged IN!</p></div>";
				$this->load->view('home.php');
				$this->load->view('userguide.php');
				$this->load->view('footer.php');
			}
		}else{
			redirect("/login");
		}
	}

	
	
////////////////////////welcome page //////////////////////////
	
	public function welcome()
	{	
		
		if($this->login_model->isLogged()){ 
		$uname = $this->login_model->username();
		$permission = $this->login_model->permissions();
			if ($permission==1 ){
				echo "<div ><p id='lisa'> Hi $uname! You are Logged IN!</p></div>";
				$this->load->view('homeG.php');
				$this->load->view('welcome.php');
				$this->load->view('footer.php');
				
			}else {echo "<div ><p id='lisa'> Hi $uname! You are Logged IN!</p></div>";
				$this->load->view('home.php');
				$this->load->view('welcome.php');
				$this->load->view('footer.php');
			}
		}else{
			redirect("/login");
		}
	}
	
	////////////////// tree info page ///////////////////////////
	
	public function growers()
	{	
		
		if($this->login_model->isLogged()){ 
		$uname = $this->login_model->username();
		$permission = $this->login_model->permissions();
			if ($permission==1 ){
				echo "<div ><p id='lisa'> Hi $uname! You are Logged IN!</p></div>";;
				$this->load->view('homeG.php');
				$this->load->view('growers.php');
				$this->load->view('footer.php');
			}else {echo "<div ><p id='lisa'> Hi $uname! You are Logged IN!</p></div>";
				$this->load->view('home.php');
				$this->load->view('growers.php');}
				$this->load->view('footer.php');
		}else{
			redirect("/login");
		}
	}


	////////////////// crud users table managment ///////////////////////////
	public function newuser()
	{	
		
		if($this->login_model->isLogged()){ 
		$uname = $this->login_model->username();
		$permission = $this->login_model->permissions();
			if ($permission==1 ){
				echo "<div ><p id='lisa'> Hi $uname! You are Logged IN!</p></div>";
				$this->load->view('homeG.php');
				
			}else {echo "<div ><p id='lisa'> Hi $uname! You are Logged IN!</p></div>";
				$this->load->view('home.php');

			}
		}else{
		redirect("/login");
		}
		
		$crud = new grocery_CRUD();
		
		$crud->set_theme('datatables');
		
		//table name exact from database
		$crud->set_table('crud_users');
		
		//give focus on name used for operations e.g. Add Order, Delete Order
		$crud->set_subject('Users Table');
		
		//the columns function lists attributes you see on frontend view of the table
		$crud->columns('firstName','secondName','username', 'permissions','role');
	
		//the fields function lists attributes to see on add/edit forms.
		//Note no inclusion of invoiceNo as this is auto-incrementing
		$crud->fields('firstName','secondName','username', 'permissions','role','password');
		
		
		//form validation (could match database columns set to "not null")
		$crud->required_fields('firstName','secondName','username', 'permissions','role','password');
		
		//change column heading name for readability ('columm name', 'name to display in frontend column header')
		$crud->display_as('firstName', 'Name');
		$crud->display_as('secondName', 'Surname');
		$crud->display_as('username', 'User Name');
		$crud->display_as('permissions', 'User Permission');
		$crud->display_as('role', 'Postion');
		//$crud->unset_add();// function if its a sale agent account
		
		$crud = $this->login_model->check($crud);  //checking user permissions
		$output = $crud->render();
		$this->registerUser_output($output);
		
		
		
	}
	
	function registerUser_output($output = null)
	{	
		
		$this->load->view('newuser.php',$output);
		$this->load->view('footer.php');
	}
	
	/////////////tree////////////////////////////////
	public function tree()
	{	
		
		$crud = new grocery_CRUD();
		
		$crud->set_theme('datatables');
		
		//table name exact from database
		$crud->set_table('tree');
		
		//give focus on name used for operations e.g. Add Order, Delete Order
		$crud->set_subject('Tree');
		
		//the columns function lists attributes you see on frontend view of the table
		$crud->columns('treeID', 'variety', 'retailPrice');
	
		//the fields function lists attributes to see on add/edit forms.
		//Note no inclusion of invoiceNo as this is auto-incrementing
		$crud->fields('variety', 'retailPrice');
		
		//set the foreign keys to appear as drop-down menus
		// ('this fk column','referencing table', 'column in referencing table')
		$crud->set_relation('variety','variety','fruitName');
		
		//many-to-many relationship with link table see grocery crud website: www.grocerycrud.com/examples/set_a_relation_n_n
		//('give a new name to related column for list in fields here', 'join table', 'other parent table', 'this fk in join table', 'other fk in join table', 'other parent table's viewable column to see in field')
		//$crud->set_relation_n_n('orchard', 'treesplanted', 'variety', 'orchardID', 'treeID', 'fruitName');
		
		
		
		//form validation (could match database columns set to "not null")
		$crud->required_fields('variety', 'retailPrice');
		
		//change column heading name for readability ('columm name', 'name to display in frontend column header')
		$crud->display_as('retailPrice', 'Retail Price');
		//$crud->unset_add();// function if its a sale agent account
		
		$crud = $this->login_model->check($crud);  //checking user permissions
		$output = $crud->render();
		$this->tree_output($output);
	}
	
	function tree_output($output = null)
	{	
		
		$this->load->view('tree.php', $output);
	}
	
	////////////apple variety///////////
	public function apple_variety()
	{	
	
	
		$crud = new grocery_CRUD();
		$crud->set_theme('datatables');
		$crud->set_table('variety');
		
		$crud->set_subject('variety');
		
		$crud->columns('varietyID', 'fruitName', 'fruitColour','seasonName','cropName','sizeName');


		$crud->fields('varietyID', 'fruitName', 'fruitColour','seasonName','sizeName','cropName');
		$crud->required_fields('varietyID', 'fruitName', 'fruitColour','seasonName','sizeName','cropName');
		
		$crud->set_relation('sizeName', 'size', 'sizeName');
		$crud->set_relation('cropName', 'crop',  'cropName');
		$crud->set_relation('seasonName', 'season', 'seasonName');
		
		
		$crud->display_as('varietyID', 'ID');
		$crud->display_as('fruitName', 'Fruit Name');
		$crud->display_as('fruitColour', 'fruit Colour');
		$crud->display_as('seasonName', 'Season');
		$crud->display_as('cropName', 'Crop');
		$crud->display_as('sizeName', 'Size');
		
		$crud = $this->login_model->check($crud);
		$output = $crud->render();
		$this->apple_variety_output($output);
	}
	
	function apple_variety_output($output = null)
	{
		
		$this->load->view('variety.php', $output);
	}
	//////////////////////////////////////////

	//////////orchard/////////////////////////////////////////
	public function orchard()
	{	
		
		$crud = new grocery_CRUD();
		$crud->set_theme('datatables');
		
		$crud->set_table('orchard');
		$crud->set_subject('orchard');
		$crud->columns('orchardID', 'LocationName');
		//////////
		$crud->fields('orchardID', 'LocationName');
		$crud->required_fields('orchardID', 'LocationName');
		//$crud->set_relation('LocationName', 'variety', 'fruitName');
		$crud->display_as('LocationName', 'Location');
		$crud = $this->login_model->check($crud);
		$output = $crud->render();
		$this->orchard_output($output);
	}
	
	function orchard_output($output = null)
	{
		$this->load->view('orchard_view.php', $output);
	}
	
//////////palanted Trees /////////////////////////////////////////
	public function palnted_trees()
	{	
	
		if($this->login_model->isLogged()){ 
		$uname = $this->login_model->username();
		$permission = $this->login_model->permissions();
			if ($permission==1 ){
				echo "<div ><p id='lisa'> Hi $uname! You are Logged IN!</p></div>";
				$this->load->view('homeG.php');
			}else {echo "<div ><p id='lisa'> Hi $uname! You are Logged IN!</p></div>";
				$this->load->view('home.php');}
		}else{
			redirect("/login");
		}
		$crud = new grocery_CRUD();
		$crud->set_theme('datatables');
		
		$crud->set_table('treesplanted');
		$crud->set_subject('Planted trees');
		$crud->columns('treeID', 'datePlanted','orchardID');
		
		//$crud->set_relation('treeID', 'tree', 'treeID');
		$crud->set_relation('orchardID', 'orchard', '{orchardID} - {LocationName}');
		$crud->fields('treeID','orchardID', 'datePlanted');
		$crud->required_fields('treeID', 'orchardID', 'datePlanted');
		$crud->set_relation('treeID', 'tree', '{treeID} - {variety} - {retailPrice}');
		$crud->display_as('treeID', 'ID - Variety - Price ');
	
		$crud = $this->login_model->check($crud);
		$output = $crud->render();
		$this->palnted_trees_output($output);
	}
	
	function palnted_trees_output($output = null)
	{	
		
		
		$this->load->view('palnted_trees_view.php', $output);
		$this->load->view('footer.php');
	}
	//////////////////////////////Query 1 /////////////////////////////////
	
	public function querynav()
	{	
		$this->load->view('header');
		$this->load->view('querynav_view');
	}
		
	public function query1()
	{	
		$tmpl = array ('table_open' => '<table class="mytable">');
	$this->table->set_template($tmpl); 
	
	$this->db->query('drop table if exists temp');
	$this->db->query('create temporary table temp as (select v.fruitName AS Fruit_Name, SUM(t.retailPrice) AS Total_Price from tree t JOIN variety v ON v.fruitName = t.variety group by v.fruitName order by Total_Price DESC)');
	$query = $this->db->query('select * from temp;');
	echo $this->table->generate($query);
	}
	
}