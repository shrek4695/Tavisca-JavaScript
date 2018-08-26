
var a = "";
function val(event) {
    var Fname = document.forms["register"]["Fname"].value;
    var Lname = document.forms["register"]["Lname"].value;
    var number = document.forms["register"]["Number"].value;
    var Email = document.forms["register"]["Email"].value;
    var City = document.forms["register"]["City"].value;
    var Gender = document.forms["register"]["Gender"].value;
    var alphabhet = /^[a-z|A-Z]*$/;
    var num = /^[0-9]*$/;
    var mail = /^[a-zA-Z0-9]+[a-zA-Z0-9._]*@([a-zA-Z]{2,})\.([a-zA-Z]+)$/;
    if (Fname == "" )
    {
        disp("Enter First Name");
        return false;
    }
    else if (!(alphabhet.test(Fname)))
    {
        disp("First Name Invalid");
            return false;
    }
    else if (!(alphabhet.test(Lname)))
    {
        disp("Last Name Invalid");
        return false;
    }
    else if (number == "")
    {
        disp("Enter Phone Number");
        return false;
    }
    else if (number.length != 10 || !num.test(number))
    {
        disp("Invalid Phone Number");
        return false;
    }
    else if (Email == "")
    {
        disp("Enter Email")
        return false;
    }
    else if (!(mail.test(Email))) {
        disp("Invalid Email");
        return false;
    }
    else if (City == "") {
        disp("Enter City");
        return false;
    }
    else if (Gender == "")
    {
        disp("Select Your Gender");
        return false;
    }
    else
    {
        return true;
    }
        
}
function disp(a) {
    document.forms["register"]["Error-Display"].value = a;
    document.forms["register"]["Error-Display"].style.visibility = "visible";
}
