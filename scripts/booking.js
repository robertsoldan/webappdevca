function checkForm() {
    // checking that the users enters full name
    x = document.getElementById("fullName").value;
    if (x == "") {
        document.getElementById("checkName").innerHTML = "The field must not be empty"
    } else if (/\s+/.test(x)) {
        document.getElementById("checkName").innerHTML = "Input correct"
    } else {
        document.getElementById("checkName").innerHTML = "You need to enter your first name and the last name"
    }

    // checking the validity of an email address
    y = document.getElementById("email").value;
    testY = (/@/.test(y));

    if (testY == false) {
        document.getElementById("checkEmail").innerHTML = "The email address is invalid"
    } else if (testY == true) {
        document.getElementById("checkEmail").innerHTML = "Email address correct!"
    }

    // checking if the user do maths - real person validation
    z = document.getElementById("robo").value;
    if (z == 2020) {
        document.getElementById("checkRobo").innerHTML = "Thanks for verifying."
    } else {
        document.getElementById("checkRobo").innerHTML = "Try again."
    }

    /* check if all the items have validated, if true, it collapses
     the form and the information about the trip, shows the confirmation page*/
    if (/\s+/.test(x) && testY == true && z == 2020) {
        var a = document.getElementById("hideform");
        var b = document.getElementById("hidetrip");
        var c = document.getElementById("fireworks");
        if (a.style.display === "block") {
            a.style.display = "none";
        } else {
            a.style.display = "block";
        }
        if (b.style.display === "block") {
            b.style.display = "none";
        } else {
            b.style.display = "block";
        }
        if (c.style.display === "none") {
            c.style.display = "block";
        } else {
            c.style.display = "none";
        }
    }
}