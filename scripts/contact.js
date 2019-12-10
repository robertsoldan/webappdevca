function validateContactForm(){

    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var email = document.getElementById("Email").value;
    var email2 = document.getElementById("CheckEmail").value;
    var robo = document.getElementById("Robo").value;

    // Reset alerts
    document.getElementById("alertfName").innerHTML = "";
    document.getElementById("alertlName").innerHTML = "";
    document.getElementById("alertCheckEmail").innerHTML = "";
    document.getElementById("alertEmail").innerHTML = "";
    document.getElementById("alertRobo").innerHTML = "";

    // Validate first name contains only letters
    if (/[0-9]/.test(fName)){
        document.getElementById("alertfName").innerHTML = "Input invalid.";
    
    // Validate last name contains only letters
    } else if (/[0-9]/.test(lName)){
        document.getElementById("alertlName").innerHTML = "Input invalid.";
    
    // Validate email contains @
    } else if (!(/@/.test(email))){
        document.getElementById("alertEmail").innerHTML = "Email must contain '@'.";
    
    // Validate email 2 match
    } else if (email != "" && email2 != ""){
        if (email != email2){
            document.getElementById("alertCheckEmail").innerHTML = "Emails don't match.";
        }

    // Validate Robot
    } else if (robo != 9 && robo != ""){
        document.getElementById("alertRobo").innerHTML = "Oops! Try again...";

    // Submission once all conditions evaluate FALSE
    } else {
        document.forms["contactForm"].submit();
    }

}
