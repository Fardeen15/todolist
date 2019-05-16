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
        <td><button onclick="addData()" class=" btn-outline-secondary jsBtn">Add Data</button></td>
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
                <td><button onclick="goto(${i})" class=" btn-outline-secondary jsBtn">view Detail</button></td>
                </tr>`
    }
}
function addData() {
    window.location.href = "index.html";
}
function removeSelectedRow(i) {
    console.log(i);
    obj2.splice(i, 1);
    localStorage.setItem("data", JSON.stringify(obj2));
    // table1.innerHTML = "";
    data();
}
var index;

function editHtmlTbleSelectedRow(i) {
    index = i;
    localStorage.setItem("editData", JSON.stringify(i));
    window.location.href = "index.html"
}
function edit() {
    var index = JSON.parse(localStorage.getItem("editData"));
    obj2;
    console.log(document.getElementById("fname"));
    document.getElementById("fname").value = obj2[index].name;
    document.getElementById("lname").value = obj2[index].lname;
    document.getElementById("age").value = obj2[index].age;

}
function update() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    var obj = JSON.parse(localStorage.getItem("data"));
    if (obj === null) {
        obj = [];
    }
    var obj1 = new Constructor(fname, lname, age);
    obj.splice(index, 1, obj1);
    localStorage.setItem("data", JSON.stringify(obj))
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
    localStorage.removeItem("editData")
    viewList();
    data();
}
function viewDetail() {
    var indx = JSON.parse(localStorage.getItem("updateData"));
    var name = obj2[indx].name;
    var sname = obj2[indx].lname;
    var age = obj2[indx].age;
    document.getElementById("name").innerHTML = name;
    document.getElementById("lname").innerHTML = sname;
    document.getElementById("age").innerHTML = age;
}
// var indx;
function goto(i) {
    // indx = i;
    localStorage.setItem("updateData", JSON.stringify(i));
    window.location.href = "detail.html"
}
