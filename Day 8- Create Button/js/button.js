function incrementValue() {
    var valueBtn = document.getElementById("btn").innerHTML;
    
    valueBtn = parseInt(valueBtn) + 1;
    document.getElementById("btn").innerHTML = valueBtn;
}