var cards = httpGet('https://api.trello.com/1/boards/RuyMGJ9R/cards');

cards.forEach(function(card) {
  var attachment = httpGet('https://api.trello.com/1/cards/'+ card.id +'/attachments/'+ card.idAttachmentCover)
    card.image = attachment.url
});
