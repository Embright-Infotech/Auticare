function sendMail() {
  var payload = {
    name: document.getElementById("contact-name").value,
    mail: document.getElementById("contact-mail").value,
    phone: document.getElementById("contact-number").value,
    subject: document.getElementById("contact-subject").value,
    message: document.getElementById("contact-message").value,
  };
  emailjs.send("service_x7wi6cl", "template_01ovtlw", payload).then(
    function (response) {
      alert("Mail has been sent successfully");
    },
    function (error) {
      alert("Couldn't send the mail due to some error");
    }
  );
}
