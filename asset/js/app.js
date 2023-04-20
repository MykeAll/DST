const submit_button = document.querySelector(".button");

// all input data received this variables
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const cpass = document.getElementById("cpass");

const usersList = JSON.parse(localStorage.getItem("users")) || []
// submit_button.onclick = () => {
    // alert('hello world')
submit_button.onclick = (e) => {
    e.preventDefault();

    const user = {
        id: usersList.length+1,
        firstName : fname.value,
        lastName : lname.value,
        email : email.value,
        password : pass.value

    }
    

    // now store this data in your web browser store
   /* localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);
    */

    // window.localStorage.setItem("locateData", JSON.stringify(nameData))

    // now write some condition
    if(fname.value == "" || lname.value == "" || email.value == "" || pass.value == "" || cpass.value == ""){
        // let's change this alert system
        // alert("Input field has no value");
        swal("Opps..!", "Input field has no value!", "error");
    }
    else {
        if(pass.value !== cpass.value){
            // alert("password not matching");
            swal("Opps..!", "Password does not matching!", "error");
        }
        else{
            usersList.push(user)
    localStorage.setItem("users", JSON.stringify(usersList))
            // alert('registration successful');
            // swal("Good job!", "Registration successful", "success");
            swal({
                title: "Good job!",
                text: "Registration Successful!",
                icon: "success",
                button: "Continue",
                html:  '<a href="/login.html">Login</a>'
            }).then((result) => {
                window.location.href = "/login.html";
            })
        }
    }
}



     // LOGIN FORM


const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();

    // cautch the value which is type user login page
    const emailAddress = document.getElementById("login_email");
    const passWord = document.getElementById("login_pass");

    // let's get value in localStorage which store user in registration form
    // const Email =  localStorage.getItem("Email");
    // const Password =  localStorage.getItem("Password");

   console.log(emailAddress.value, passWord.value);
    let user = usersList.find(user => user.email == emailAddress.value
    )
    console.log(user);

    if(emailAddress == "" && passWord == ""){
        swal("Opps..!", "Input field has no value!", "error");
    }
    else {
        if(emailAddress.value == user.email && passWord.value == user.password){

            // swal("Good job!", "Login successful", "success");
            swal({
                title: "Good job!",
                text: "Login Successful!",
                icon: "success",
                button: "Continue",
                html:  '<a href="/market.html">Login</a>'
            }).then((result) => {
                window.location.href = "/market.html";
            })
                // html: '<a href="index.html">Login</a>'

                /*.then((button) => {
                    if (button) {
                        swal({
                            // content: '(backtick)<a href="index.html">Login</a>(backtick)'
                        html: `<a href="index.html">Login</a>`
                    })
                    }
             });*/


        }
    else {
        swal("Opps..!", "Something is wrong!", "error");
        }
    }
}
