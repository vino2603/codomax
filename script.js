const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === ""){
        alert("Please enter your name.");
        return;
    }

    if(email === ""){
        alert("Please enter your email.");
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){
        alert("Please enter a valid email.");
        return;
    }

    if(subject === ""){
        alert("Please enter the subject.");
        return;
    }

    if(message === ""){
        alert("Please enter your message.");
        return;
    }

    alert("Message sent successfully!");

    form.reset();

});