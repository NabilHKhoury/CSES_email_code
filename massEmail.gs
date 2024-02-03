function massEmail(var message, var event) {
  var form = FormApp.getActiveForm();
  var formResponses = form.getResponses();
  var totalResponses = formResponses.length
  var zoomLink ='https://ucsd.zoom.us/my/chatgptcses';
  for (var i=0; i<formResponses.length/2; i++){
    var fResponse = formResponses[i];
    var bResponse = formResponses[totalResponses-i-1];
    var fEmail = fResponse.getRespondentEmail();
    var bEmail = bResponse.getRespondentEmail()
    GmailApp.sendEmail(fEmail, event,message);
    GmailApp.sendEmail(bEmail, event, message);
  }
}