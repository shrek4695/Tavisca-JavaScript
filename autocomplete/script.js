var names = ["ragul", "rajpreet", "pallvi", "neha", "ankita", "raja", "shreea", "smriti", "shrijeet", "ayush", "swapnil", "nihit", "bhargavi", "anushka", "swinal", "utkarsh", "saurabh", "paarth", "vishwas", "mohit", "gurbaksh", "ashwarya"];
function suggest() {
    document.getElementById("suggestion").innerHTML = "";
    names.sort();
    if (document.getElementById("input-area").value == "") {
        document.getElementById("suggestion").innerHTML = "";
    }
    else {
        var i;
        var c = 0;
        var text = "";
        var j = document.getElementById("input-area").value;
        j = j.toLowerCase();
        for (i = 0; i < names.length; i++) {
            if (names[i].includes(j)) {
                c++;
                var selectList = document.createElement("li");
                selectList.setAttribute("id", i + 1);
                selectList.innerHTML = names[i].toUpperCase();
                selectList.setAttribute("onclick", "c(this.innerHTML)");
                document.getElementById("suggestion").appendChild(selectList);
                document.getElementById("suggestion").style.visibility = "visible";
            }
        }

        if (c == 0)
        {
            document.getElementById("suggestion").innerHTML = "<li>MATCH NOT FOUND</li>";
        }
    }
}
function c(e) {
    document.getElementById("input-area").value = e.toUpperCase();
    document.getElementById("suggestion").style.visibility = "hidden";
}
function styling(e) {
    document.getElementById("suggestion").style.visibility = "hidden";
    if (event.target.type != "text") {
        document.getElementById("suggestion").style.visibility = "hidden";
    }
    else {
        document.getElementById("suggestion").style.visibility = "visible";
    }
}