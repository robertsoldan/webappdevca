function validateContactForm(){

    // Validate first name contains only letters
    var fName = document.getElementById("fName").value;
    if (/[0-9]/.test(fName)){
        document.getElementById("alertfName").innerHTML = "Input invalid.";
    }

    // Validate last name contains only letters
    var lName = document.getElementById("lName").value;
    if (/[0-9]/.test(lName)){
        document.getElementById("alertlName").innerHTML = "Input invalid.";
    }

    // Validate email contains @ 
	var email = document.getElementById("Email").value;
	if (!(/@/.test(email))){
		document.getElementById("alertEmail").innerHTML = "Email must contain @";
	}

    // Validate email 2 match
	var email1 = document.getElementById("Email").value;
	var email2 = document.getElementById("CheckEmail").value;
	if (email1 == email2){
        document.getElementById("alertCheckEmail").innerHTML = "Emails don't match.";
    }

    // Validate Robot
    var robo = document.getElementById("Robo").value;
    if (robo != 9){
        document.getElementById("alertRobo").innerHTML = "Oops! Try again...";
    }

}
