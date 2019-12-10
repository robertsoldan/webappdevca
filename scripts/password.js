function passwordCheck(){
    var pw = prompt('STAFF ONLY\nPlease enter employee ID:');
    if (pw === "0123456789A" || pw === "0123456789B" || pw === "0123456789C" || pw === "0123456789D"){
        window.location.replace('/manage');
    } else if (pw !== "0123456789A" || pw !== "0123456789B" || pw !== "0123456789C" || pw !== "0123456789D"){
        alert("Access denied.");
    }
}