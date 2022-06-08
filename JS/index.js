function addData()
{
    var data = JSON.parse(localStorage.getItem("userData"))
    var name = document.getElementById("userName").value
    var age = document.getElementById("userAge").value
    var email = document.getElementById("userEmail").value
    // if(data!="" && age!= "" && email!="" && !email.includes('@'))
    // {
        var body={
            userName: name,
            age: age,
            email: email
        }
        data.push(body)
        localStorage.setItem("userData",JSON.stringify(data))
    // }
    
}