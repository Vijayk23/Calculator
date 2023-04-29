function display(val) {
    document.getElementById("textval").value += val;
}

function clr() {
    document.getElementById("textval").value = "";
}

function del() {
    document.getElementById("textval").value = document.getElementById("textval").value.slice(0, -1) ;
}

function eql(){

    try{

        document.getElementById("textval").value = eval(document.getElementById("textval").value);
    }

    catch(err){
        alert('invalid')
    }


}