function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  //var nest = document.getElementById('nested');
  //var tar = nest.children;
  return document.getElementById('nested').querySelector('div div div div.target');
}