//include zoom link in mesage if necessary. 
function sendZoomLink(var message, var event) {

  // Get the form responses
  var form = FormApp.getActiveForm();
  var formResponses = form.getResponses();
  
  // Get the last response
  var lastResponse = formResponses[formResponses.length - 1];
  
  // Get the email address of the form responder
  var email = lastResponse.getRespondentEmail();
  
  
  // Send the email
  GmailApp.sendEmail(email, event, message);
}
