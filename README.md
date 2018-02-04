# Garuda-Javascript-Component


## Demo
https://lamhotsimamora.github.io/Garuda-Javascript-Component/

### Easy create element like input , combobox, radio , button, table, dropdown, and image


### Features
- Auto create id of element
- Multiple component
- Fast and Easy

### Syntax , Properties & Method
```
$element = new GarudaComponent();

$element.init({
   id 		 	:  String/Int,
   placeholder  :  String,
   class        :  String,
   type         :  String,
   value        :  String,
   name         :  String,
   src          :  String,
   alt          :  String,
   width        :  Int,
   height       :  Int,
   href         :  String,
   custom       :  String,
   field        :  Array,
   data         :  Array
});

$element.createInput();
$element.createButton();
$element.createImage();
$element.createTable();
$element.createLink();
$element.createDropDown();

$element.render($object);
```
