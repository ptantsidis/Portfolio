submitBtn = $("#submit");
let searchInput = $("#email");
let email = "";

submitBtn.on("click", function (event) {
    event.preventDefault();
    console.log("click")
    // valid email with api eventually
    emailSend = (searchInput.val());
    if (emailSend == "") {
        alert("Try Again");
        
    }
})