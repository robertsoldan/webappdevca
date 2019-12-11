function passwordCheck(){
    var pw = prompt("STAFF ONLY\nPlease enter employee ID:\n...but because this is only a project, let's just say password is:\nI love donuts!");
    if (pw === "I love donuts!"){
        window.location.replace('/manage');
    } else {
        alert("Access denied.");
    }
}