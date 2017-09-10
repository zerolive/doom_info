var columns = httpGet('https://api.trello.com/1/boards/RuyMGJ9R/lists');

columns.forEach(function(column){
  column.cards = []
  cards.forEach(function(card){
    if(card.idList === column.id){
      column.cards.push(card)
    }
  });
});
