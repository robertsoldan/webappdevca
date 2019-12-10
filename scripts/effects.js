// displays the additional text about the location and see less button, see more disappears
$(document).ready(function() {
    $("#show1").click(function() {
        $("#rome2").show();
        $("#show1").hide();
        $("#hide1").show();
    })
});

/* hides the additional text about the location and see less button, 
see more appears */
$(document).ready(function() {
    $("#hide1").click(function() {
        $("#rome2").hide();
        $("#show1").show();
        $("#hide1").hide();
    })
});

/* the additional text about the location and see less fade in, 
see more disappears */
$(document).ready(function() {
    $("#show2").click(function() {
        $("#paris2").fadeIn(3000);
        $("#show2").hide();
        $("#hide2").fadeIn(3000);
    })
});

/* the additional text about the location fades out, 
see less button disappears, see more fades in */
$(document).ready(function() {
    $("#hide2").click(function() {
        $("#paris2").fadeOut(3000);
        $("#show2").fadeIn(3000);
        $("#hide2").hide();
    })
});

/* the additional text about the location 
and see less button slide down, see more disappears */
$(document).ready(function() {
    $("#show3").click(function() {
        $("#london2").slideDown(3000);
        $("#show3").hide();
        $("#hide3").slideDown(3000);
    })
});

/* the additional text about the location slides up, 
see less button disappears, see more slides down */
$(document).ready(function() {
    $("#hide3").click(function() {
        $("#london2").slideUp(3000);
        $("#show3").slideDown(3000);
        $("#hide3").hide();
    })
});

/* the additional text about the location fades in,
see less button slides down, see more disappears */
$(document).ready(function() {
    $("#show4").click(function() {
        $("#moscow2").fadeIn(3000);
        $("#show4").hide();
        $("#hide4").slideDown(3000);
    })
});

/* the additional text about the location slides up, 
see less button disappears, see more fades in */
$(document).ready(function() {
    $("#hide4").click(function() {
        $("#moscow2").slideUp(3000);
        $("#show4").fadeIn(3000);
        $("#hide4").hide();
    })
});

// redirects user to a booking page for Rome, pulled from JSON file
function book1() {
    window.location.replace("/book/1")
}


// redirects user to a booking page for Paris, pulled from JSON file
function book2() {
    window.location.replace("/book/2")
}

// redirects user to a booking page for London, pulled from JSON file
function book3() {
    window.location.replace("/book/3")
}

// redirects user to a booking page for Moscow, pulled from JSON file
function book4() {
    window.location.replace("/book/4")
}