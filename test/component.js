$app = __({
  el:"app"
});

$app_table = __({
  el:"app-table"
});

/**
 * Collect all id in array
 * @type {Object}
 */
const id_element = {
  a:'t_username',
  b:'t_password',
  c:'t_email',
  d:'b_login',
  e:'img_user',
  f:'t_data',
  g:'a_link',
  h:'my_colors',
  i:'my_canvas'
};

// =========================================================================================


$element = new GarudaComponent();

/**
 * Create Input Text
 * @type {[type]}
 */
$element.init({
   id 		 	    :  id_element.a,
   placeholder  :  'Username',
   class        :  'form-control',
   type         :  'text'
});

$element.createInput();

/**
 * Create Input Password
 * @type {[type]}
 */
$element.init({
   id 		 	    :  id_element.b,
   placeholder  :  'Password',
   class        :  'form-control',
   type         :  'password'
});

$element.createInput();

/**
 * Create Input Email
 * @type {[type]}
 */
$element.init({
   id 		 	:  id_element.c,
   placeholder  :  'Email',
   class        :  'form-control',
   type         :  'email'
});

$element.createInput();

/**
 * Create Button
 * @type {[type]}
 */
$element.init({
   id 		    	:  id_element.d,
   class        :  'btn btn-primary btn-md',
   type         :  'button',
   value  	    :  'Login'
});

$element.createButton();

/**
 * Create Href / Link
 * @type {[type]}
 */
$element.init({
   id 		 	    :  id_element.g,
   href         :  '#logout',
   value  	    :  'Logout',
   space        :  '<hr>'
});

$element.createLink();

/**
 * Create Image
 * @type {[type]}
 */
$element.init({
   id 		 	    :  id_element.e,
   class        :  'img-thumbnail',
   src  	      :  'https://randomuser.me/api/portraits/med/women/40.jpg',
   alt  	      :  'Image-User',
   name         :  'Lorem Ipsum',
   width        :  100,
   height       :  100,
   space        :  '<hr>'
});

$element.createImage();

/**
 * Create Custom Element
 */
$element.init({
	custom:'<garuda-token>Auto : <strong>#token#</strong> </garuda-token>',
	space :'</br><hr>'
});

$element.createCustom();

/**
 * Create Dropdown
 * @type {[type]}
 */
$element.init({
	id       : id_element.h,
	class    :'form-control',
	data     : [
		'Green','Blue','Red','Yellow','Pink','Black'
	],
	space    : '<hr>'
});

$element.createDropDown();

/**
 * Create Canvas
 * @type {[type]}
 */
$element.init({
  id       : id_element.i,
  width    : 310,
  height   : 30
});

$element.createCanvas();

/**
* Render all to $app
*/
 _writeLog($element.getHtml,false);
$element.render($app);

// =========================================================================================

var count_data = 25;

$getDataUser = __({
  url:"https://randomuser.me/api/?results="+count_data
});

/**
 * Get data with AJAX
 */
$getDataUser.request($=>{
	var $o = JSON.parse($);
	if ($o)
		var object = $o.results,
		    dataUser = [];
		for (var i = 0 ; i < object.length ; i++ )
		{
			  var username = object[i].name,
			      fullname = username.first +' ' + username.last,
			      email    = object[i].email,
			      foto     = object[i].picture;
			  dataUser[i]  = [ i+1, fullname, email,'<img src="'+foto.medium+'"></img>' ]; 
		} 
		/**
		* Create Table
		*/
	 $element.init({
			id       : id_element.f,
			class    : 'table',
			field    : [ 'No','Name','Email','Foto' ],
			data     : dataUser
		});
		$element.createTable();

		/**
		 * Render to $app_table
		 */
    _writeLog($element.getHtml,false);
		$element.render($app_table);
});

// =========================================================================================


