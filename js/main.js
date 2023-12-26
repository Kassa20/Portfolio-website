const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

function sendEmail()
{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ykassa47@gmail.com",
        Password : "password",
        To : 'ykassa47@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}