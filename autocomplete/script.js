var names = ["ragul", "rajpreet", "pallvi", "neha", "ankita", "raja", "shreea", "smriti", "shrijeet", "ayush", "swapnil", "nihit", "bhargavi", "anushka", "swinal", "utkarsh", "saurabh", "paarth", "vishwas", "mohit", "gurbaksh", "ashwarya"];
function suggest() {
    document.getElementById("suggestion").innerHTML = "";
    names.sort();
    if (document.getElementById("input-area").value == "") {
        document.getElementById("suggestion").innerHTML = "";
    }
    else {
        var index;
        var counter = 0;
        document.getElementById("input-area").style.backgroundColor = "#e5d997";
        var searchval = document.getElementById("input-area").value;
        searchval = searchval.toLowerCase();
        for (index = 0; index < names.length; index++) {
            if (names[index].includes(searchval)) {
                counter++;
                var selectList = document.createElement("li");
                selectList.setAttribute("id", index + 1);
                selectList.innerHTML = names[index].toUpperCase();
                selectList.setAttribute("onclick", "c(this.innerHTML)");
                document.getElementById("suggestion").appendChild(selectList);
                document.getElementById("suggestion").style.visibility = "visible";
            }
        }
        if (counter == 0) {
            document.getElementById("suggestion").innerHTML = "<li>MATCH NOT FOUND</li>";
        }
    }
}
function c(e) {
    document.getElementById("input-area").value = e.toUpperCase();
    document.getElementById("suggestion").style.visibility = "hidden";
    document.getElementById("input-area").style.backgroundColor = "#ffffff";
}
function styling(e) {
    document.getElementById("suggestion").style.visibility = "hidden";
    if (event.target.type != "text") {
        document.getElementById("suggestion").style.visibility = "hidden";
        document.getElementById("input-area").style.backgroundColor = "#ffffff";
    }
    else {
        document.getElementById("suggestion").style.visibility = "visible";
        document.getElementById("input-area").style.backgroundColor = "#e5d997";
    }
}