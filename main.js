// Show loader for 3 seconds then hide
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 3000); // 3000ms = 3s
});

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');
  var result = document.getElementById('formResult');
  if (form) {
    form.onsubmit = function(e) {
      e.preventDefault();
      var name = form.querySelector('input[placeholder="Your Name"]').value;
      var lastname = form.querySelector('input[placeholder="Last Name"]').value;
      var email = form.querySelector('input[placeholder="Your Email"]').value;
      var phone = form.querySelector('input[placeholder="Phone Number"]').value;
      var message = form.querySelector('textarea').value;
      result.innerHTML =
        "<b>Contact Received:</b><br>" +
        "<b>Name:</b> " + name + "<br>" +
        "<b>Last Name:</b> " + lastname + "<br>" +
        "<b>Email:</b> " + email + "<br>" +
        "<b>Phone:</b> " + phone + "<br>" +
        "<b>Message:</b> " + message;
      result.style.display = "block";
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.innerText = "Submitted!";
        btn.style.background = "#1abc9c";
      }
      form.reset();
      setTimeout(function() {
        if (btn) {
          btn.disabled = false;
          btn.innerText = "Submit now";
          btn.style.background = "#27AE60";
        }
        result.style.display = "none";
      }, 2500);
    };
  }
});