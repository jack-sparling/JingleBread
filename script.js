
function validate(){
    if (document.forms[0].myName.value == ""){
        alert("Please enter your name.");
        return false;
    }
    else if (document.forms[0].myEmail.value == ""){
        alert("Please enter your email.");
        return false;
    }
    else if (document.forms[0].myComment.value == ""){
        alert("Please enter your order information.");
        return false;
    }
    return true;
}