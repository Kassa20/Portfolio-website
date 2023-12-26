const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

function sendEmail()
{
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value, 
        message : document.getElementById("message").value
    }
    emailjs.send("service_thvqurl", "template_qwk25y6", params).then(function (res) {
        alert("Thanks for contacting me! ");
    })
}

