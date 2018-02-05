$element = new GarudaComponent();


$element.init({
	id:'my_text1',
	autocomplete:'off',
	min:15,
	max:25,
	type:'text',
	placeholder:'Username',
	class:'form-control',
	readonly:true
});


$element.createInput();

$element.init({
	id:'my_text2',
	type:'date',
	value:'2018-01-01',
	space:'<hr>'
});

$element.createInput();

$element.init({
	id:'my_text3',
	autocomplete:'on',
	type:'number',
	placeholder:'Age',
	class:'form-control',
	maxlength:2,
	max:2
});

$element.createInput();

$element.render('app');