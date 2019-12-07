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