$(document).ready(function() {
    $("#commentform").hide();
    $(".editcheck").hide();
});

function displayField(id) {
    $("#edit" + id).fadeOut(0);
    $("#" + id).fadeIn(200);
}

function checkEmail(email, id) {
    console.log(email);
    console.log(id);

    if(email === this.$("#emailcheck" + id).val()) {
        $("#commentform").hide();
        $("#" + id).hide();
        window.location.replace('/commentsedit/' + id);
    } else alert("Sorry, this doesnt seem to be correct");
}

function showComment() {
    $("#commentform").css("height", "1px").show().animate({height:"600px"}, 500);
    $("#showcommentbtn").hide();
}

function validateSubmitForm() {
    var name = $("input[name=name]").val();
    var email = $("input[name=email]").val();
    var location = $("input[name=location]").val();

    // Reset alerts
    $("#name").text("");
    $("#email").text("");
    $("#location").text("");

    // Validate first name contains only letters
    if (/[0-9]/.test(name) || name === ''){
        document.getElementById("name").innerHTML = "Input invalid.";
    
        // Validate email contains 
    } else if (!(/@/.test(email))){
        document.getElementById("email").innerHTML = "Email must contain '@'.";
    
    // Validate location name contains only letters
    } else if (/[0-9]/.test(location) || location === ''){
        document.getElementById("location").innerHTML = "Input invalid.";
    
    // Submission once all conditions evaluate FALSE
    } else if($('textarea[name=comment]').val() === '') {
        document.getElementById("comment").innerHTML = "Please leave a comment!";
    } else {
        document.forms["commentForm"].submit();
        $("#commentform").hide();
        return true;
    }
}