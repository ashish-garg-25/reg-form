var userData = JSON.parse(localStorage.getItem("userData"))
userData.forEach(element => {
    var table = document.getElementById("studentTable")
    console.log(table)
    var row = `
    <tr>
    <td>${element.userName}</td>
    <td>${element.age}</td>
    <td>${element.email}</td>
   </tr>
    `
    table.innerHTML+=row
});