function displayField(id) {
    $("#edit" + id).fadeOut(0);
    $("#" + id).fadeIn(500);
}

function checkEmail(email, id) {
    console.log(email);
    console.log(id);

    if(email === this.$("#emailcheck" + id).val()) {
        window.location.replace('/commentsedit/' + id);
        console.log("yea");
    } else alert("Sorry, this doesnt seem to be correct");
}

function showComment() {
    $("#commentform").css("height", "1px").show().animate({height:"600px"}, 500);
    $("#showcommentbtn").hide();
}

function submitForm() {
    $("#commentform").animate({height:"0px"}, 2000)
}