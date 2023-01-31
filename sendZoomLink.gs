function sendZoomLink() {
  // Get the form responses
  var form = FormApp.getActiveForm();
  var formResponses = form.getResponses();
  
  // Get the last response
  var lastResponse = formResponses[formResponses.length - 1];
  
  // Get the email address of the form responder
  var email = lastResponse.getRespondentEmail();
  
  // Your Zoom link
  var zoomLink = "https://ucsd.zoom.us/my/chatgptcses";
  
  // Send the email
  GmailApp.sendEmail(email, "CSES and Chat GPT Q&A Zoom Link", "Here is the link for our Zoom meeting: " + zoomLink + ". Stay updated with all our events by following us on Insta @cses_ucsd");
}
