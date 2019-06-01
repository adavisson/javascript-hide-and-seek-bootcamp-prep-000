function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var target = document.getElementById('nested');
  target = target.getElementsbyClassName('target');
  return target;
}