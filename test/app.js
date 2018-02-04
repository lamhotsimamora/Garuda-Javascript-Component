b_login.when('click',$=>{
	_a("Hello !");
});


t_username.when('keyup',$=>{
	_a(t_username.getValue);
});

my_canvas.drawText({
	text:"Garuda Javascript"
});

$element = new GarudaComponent();


$element.init({
  id:'my_list',
  data:[
  	'A','B'
  ]
});
