function validateContactForm(){

    // Validate first name contains only letters
    var fName = document.getElementById("fName").value;
    if (/[0-9]/.test(fName)){
        document.getElementById("alertfName").innerHTML = "Input invalid.";
    } else {
        document.getElementById("alertfName").innerHTML = "";
    }

    // Validate last name contains only letters
    var lName = document.getElementById("lName").value;
    if (/[0-9]/.test(lName)){
        document.getElementById("alertlName").innerHTML = "Input invalid.";
    } else {
        document.getElementById("alertlName").innerHTML = "";
    }

    // Validate email contains @ 
	var email = document.getElementById("Email").value;
	if (!(/@/.test(email))){
		document.getElementById("alertEmail").innerHTML = "Email must contain '@'.";
	} else {
        document.getElementById("alertEmail").innerHTML = "";
    }

    // Validate email 2 match
	var email1 = document.getElementById("Email").value;
	var email2 = document.getElementById("CheckEmail").value;
	if (email1 != "" && email2 != ""){
        if (email1 != email2){
            document.getElementById("alertCheckEmail").innerHTML = "Emails don't match.";
        } else {
            document.getElementById("alertCheckEmail").innerHTML = "";
        }
    } else {
        document.getElementById("alertCheckEmail").innerHTML = "";
    }

    // Validate Robot
    var robo = document.getElementById("Robo").value;
    if (robo != 9 && robo != ""){
        document.getElementById("alertRobo").innerHTML = "Oops! Try again...";
    } else {
        document.getElementById("alertRobo").innerHTML = "";
    }

}
