var fname;
var lname;
var age;
function Constructor(name, sname, age) {
    this.name = name;
    this.lname = sname;
    this.age = age
}
function addHtmlTableRow() {
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    age = document.getElementById("age").value;
    var obj = JSON.parse(localStorage.getItem("data"));
    if (obj === null) {
        obj = [];
    }
    var obj1 = new Constructor(fname, lname, age);
    obj.push(obj1);
    localStorage.setItem("data", JSON.stringify(obj))
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
    // console.log(obj)
}

function viewList() {
    window.location.href = "table.html"
}

var obj2 = JSON.parse(localStorage.getItem("data"));
// console.log(obj2)

function data() {
    var table1 = document.getElementById("table");
    table1.innerHTML = `
    <tr>
        <th>s.no</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
    </tr>

    `
    for (var i = 0; i < obj2.length; i++) {
        // console.log(obj2[i].name)
        table1.innerHTML +=
            `<tr>
                <td>${i + 1}</td>
                <td>${obj2[i].name}</td>
                <td>${obj2[i].lname}</td>
                <td>${obj2[i].age}</td>
                <td><button onclick="removeSelectedRow(${i})" class=" btn-outline-secondary jsBtn">Remove</button></td>
                <td><button onclick="editHtmlTbleSelectedRow(${i})" class=" btn-outline-secondary jsBtn">Edit</button></td>
            </tr>`
    }
}
function removeSelectedRow(i) {
    console.log(i);
    obj2.splice(i, 1);
    localStorage.setItem("data", JSON.stringify(obj2));
    // table1.innerHTML = "";
    data();
}
var index;
function goto(){
}

function editHtmlTbleSelectedRow(i){
    index = i;
    localStorage.setItem("editData", JSON.stringify(i));
    window.location.href = "index.html"
}
function edit(){
   var index = JSON.parse(localStorage.getItem("editData"));
    obj2;
    console.log(document.getElementById("fname"));
    document.getElementById("fname").value = obj2[index].name;
    document.getElementById("lname").value = obj2[index].lname;
    document.getElementById("age").value = obj2[index].age;
}
function update(i){
  index = i;
}
 