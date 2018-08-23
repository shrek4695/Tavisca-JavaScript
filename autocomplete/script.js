var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
var currentindex;
var maxindex;

function suggest() {
    document.getElementById("suggestion").innerHTML = "";
    names.sort();
    if (document.getElementById("input-area").value == "") {
        document.getElementById("suggestion").innerHTML = "";
        document.getElementById("suggestion").style.visibility = "hidden";
    }
    else {
        var index;
        var counter = 0;
        document.getElementById("input-area").style.backgroundColor = "#f4f5c8";
        var searchval = document.getElementById("input-area").value;
        searchval = searchval.toLowerCase();
        for (index = 0; index < names.length; index++) {
            if (names[index].toLowerCase().includes(searchval)) {
                counter++;
                var selectList = document.createElement("li");
                selectList.setAttribute("id", counter);
                selectList.setAttribute("class", "ondeselect");
                selectList.innerHTML = names[index];
                selectList.setAttribute("onclick", "c(this.innerHTML)");
                document.getElementById("suggestion").appendChild(selectList);
                document.getElementById("suggestion").style.visibility = "visible";
            }
        }
        currentindex = 0;
        maxindex = document.getElementsByTagName("li").length;
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

function focusout(e) {
    document.getElementById("suggestion").style.visibility = "hidden";
    if (event.target.type != "text") {
        document.getElementById("suggestion").style.visibility = "hidden";
        document.getElementById("input-area").style.backgroundColor = "#ffffff";
    }
    else {
        if (document.getElementById("input-area").value == "") {
            document.getElementById("suggestion").style.visibility = "hidden";
        }
        else {
        document.getElementById("suggestion").style.visibility = "visible";
        document.getElementById("input-area").style.backgroundColor = "#f4f5c8";
        }
    }
}

function completeclear() {
    document.getElementById("input-area").value = "";
    document.getElementById("suggestion").innerHTML = "";
}

function navigate() {
    var k = event.keyCode;
    if (k != 13 && k != 38 && k != 40) {
        suggest();
    }
    else {

        if (k == 13 && currentindex >= 1) {
            var itemvalue = document.getElementById(currentindex).innerHTML;
            c(itemvalue);
        }
        else if (k == 38 && currentindex >= 2) {
            document.getElementById(currentindex).className = "deselect";
            currentindex--;
            document.getElementById(currentindex).className = "onselect";
            document.getElementById(currentindex).scrollIntoView(false);

        }
        else if (k == 40 && currentindex < maxindex) {
            if (currentindex > 0) {
                document.getElementById(currentindex).className = "deselect";
            }
            currentindex++;
            document.getElementById(currentindex).className = "onselect";
            document.getElementById(currentindex).scrollIntoView(false);
        }
    }
 }