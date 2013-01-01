<!DOCTYPE html> 
<html> 
<head> 
	<title>Page Title</title> 
	
	<meta name="viewport" content="width=device-width, initial-scale=1"> 

	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
	<link rel="stylesheet" href="css/main.css" />
	<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
	<script src="js/main.js"></script>
</head> 

<body>

<div data-role="page">

	<div data-role="header" data-position="fixed">
		<h1>Grocery List</h1>
		<!--<a data-icon="gear" class="ui-btn-right" data-theme="d" data-iconpos="notext">Options</a>-->
	</div><!-- /header -->

	<div data-role="content">
		<div id="no-items-in-list" class="nodisp ui-bar ui-bar-e">
			<h3>
				There are no items in the list.
			</h3>
		</div>
		<ul data-role="listview" id="main-list">
			<li class="grocery-item" data-grocery-id="ID" data-grocery-checked="true">
				<div class="checkbox-container">
					<a class="checkbox-button" data-role="button" data-corners="false" data-mini="true" data-inline="true">
						&nbsp;
					</a>
				</div>
				<div class="item-label">
					Toilet Paper
				</div>
				<div class="action-buttons">
					<a class="remove-button" data-role="button" data-icon="delete" data-iconpos="notext" data-inline="true">
						Remove
					</a>
				</div>
			</li>
		</ul>	
	</div><!-- /content -->

	<div data-role="footer" data-position="fixed" id="page-footer">
		<h1> </h1>
		<a data-icon="delete" class="ui-btn-left">Clear Checked</a>
		<a href="#new-item-dialog" data-rel="dialog" ata-transition="pop" data-icon="plus" class="ui-btn-right">Add</a>
	</div><!-- /footer -->
</div><!-- /page -->

<div data-role="page" id="new-item-dialog">
	<div data-role="header" data-theme="c">
		<h1>Add New Item</h1>
	</div><!-- /header -->

	<div data-role="content" data-theme="c">	
		<form id="new-item-form">
			<div style="padding:10px 20px;">
			  <h3>Add new item</h3>
          <label for="new-item-name" class="ui-hidden-accessible">Name:</label>
          <input type="text" name="new-item-name" id="new-item-name" value="" placeholder="New item"/>
	    	  <button type="submit">Add</button>
			</div>
		</form>
	</div><!-- /content -->
</div><!-- /page -->

</body>
</html>