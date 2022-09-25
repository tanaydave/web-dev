function PORTFOLIO() {
    var name =
        document.forms.MyForm.Name.value;
    var email =
        document.forms.MyForm.EMail.value;
    var phone =
        document.forms.MyForm.Telephone.value;

    var myEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var myPhone = /^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
    var myName = /\d+$/g;                                    // Javascript reGex for Name validation

    if (name == "" || myName.test(name)) {
        window.alert("Please enter your name properly.");
        name.focus();
        return false;
    }



    if (email == "" || !myEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }


    if (phone == "" || !myPhone.test(phone)) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }



    return true;
}

        



      