var dup = 0;

function fun(x) {
    var bt = x.innerHTML;
    var btO = x.value;

    var equal = document.getElementById('mainInput').value;


    if (bt == "=") {
        document.getElementById('mainDis').innerHTML = "= " + eval(equal);
    }

    else if (btO == "+" || btO == "-" || btO == "/" || btO == "*") {
        if (dup == 0) {

            document.getElementById('mainInput').value += btO;
            dup = 1;
        }
    }
    else if (bt == "AC") {
        document.getElementById('mainInput').value = "";
        document.getElementById('mainDis').innerHTML = "";
    }
    else {
        document.getElementById('mainInput').value += bt;
        dup = 0;
    }

}
