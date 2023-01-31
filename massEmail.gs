function massEmail() {
  var form = FormApp.getActiveForm();
  var formResponses = form.getResponses();
  var totalResponses = formResponses.length
  var zoomLink ='https://ucsd.zoom.us/my/chatgptcses';
  for (var i=0; i<formResponses.length/2; i++){
    var fResponse = formResponses[i];
    var bResponse = formResponses[totalResponses-i-1];
    var fEmail = fResponse.getRespondentEmail();
    var bEmail = bResponse.getRespondentEmail()
    GmailApp.sendEmail(fEmail, "CSES and Chat GPT Q&A Update", "Hi all,\nTo everyone that joined the meeting today, we apologize for the miscommunication. To clarify, the event is tomorrow the 31st. We have updated the zoom link as well so more people will be able to join. Here is the zoom link:\n" + zoomLink + "\nWe hope that you enjoy the event tomorrow :)\nBest,\nCSES");
    GmailApp.sendEmail(bEmail, "CSES and Chat GPT Q&A Update", "Hi all,\nTo everyone that joined the meeting today, we apologize for the miscommunication. To clarify, the event is tomorrow the 31st. We have updated the zoom link as well so more people will be able to join. Here is the zoom link:\n" + zoomLink + "\nWe hope that you enjoy the event tomorrow :)\nBest,\nCSES");
  }
}