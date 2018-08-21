var data = "";
function read(a)
{
    var screenlocation = document.getElementsByClassName("input-screen")[0];
    data = document.getElementsByClassName("input-screen")[0].value;
    document.getElementsByClassName("input-screen")[0].value = data + a;
}
function clean() {
    document.getElementsByClassName("input-screen")[0].value = "";
}
function completeclean() {
    document.getElementsByClassName("input-screen")[0].value = "";
    document.getElementsByClassName("result-screen")[0].innerHTML = "Result :";
}
function compute() {
    try {
        data = document.getElementsByClassName("input-screen")[0].value;
        data = eval(data);
        if (isNaN(data))
            throw new Exception("Infinity Error");
        document.getElementsByClassName("result-screen")[0].innerHTML = "Result :" + data;
        clean();
    }
    catch (Exception)
    {
        document.getElementsByClassName("result-screen")[0].innerHTML = "Error";
        clean();
    }
}
function keyboard(event) {
    var keyval = event.keyCode ;
    if (keyval == 13) {
        compute();
    }
}