function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var nest = document.getElementById('nested');
  var tar = nest.getElementsByClassName('target');
  return tar;
}