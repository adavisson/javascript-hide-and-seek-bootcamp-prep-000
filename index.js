function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var nest = document.getElementById('nested');
  var tar = nest.querySelector('target');
  return tar;
}