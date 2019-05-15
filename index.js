
var obj = [];

function Constructor(name, lname, age) {
    this.name = name;
    this.lname = lname;
    this.age = age;
}
var fname;
var lname;
var age;
function addHtmlTableRow() {
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    age = document.getElementById("age").value;
    var obj1 = new Constructor(fname, lname, age);
    obj.push(obj1)
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
    localStorage.setItem("data", JSON.stringify(obj));
  
}

function viewList() {
    window.location.href = "table.html";
}
