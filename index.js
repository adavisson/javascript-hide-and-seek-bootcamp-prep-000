function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  //var nest = document.getElementById('nested');
  //var tar = nest.children;
  return document.getElementById('nested').querySelector('div div div div.target');
}

function increaseRankBy(n){
  const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list');
  
  for (let i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + 1;
  }
}

function deepestChild(){
  var element = document.getElementById('grand-node');
  
  function iterate(element){
    if(element{
      iterate(element.querySelector('div'));
    }else
    return element;
  }
  
  var child = iterate(element);
  return child;
}