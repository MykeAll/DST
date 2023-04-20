const submit_button = document.querySelector(".button");
// submit_button.onclick = () => {
submit_button.onclick = (e) => {
    e.preventDefault();

    // all input data received this variables
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    // now store this data in your web browser store
    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);

    // now write some condition
    if(fname == "" && lname == "" && email == "" && pass == "" && cpass == ""){
        // let's change this alert system
        alert("Input field has no value");

    }
    else {
        if(pass !== cpass){
            alert("password not matching");
        }
        else{
            alert('registration successful');
        }
    }
}



     // LOGIN FORM


const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();

    // cautch the value which is type user login page
    const emailAddress = document.getElementById("Email").value;
    const passWord = document.getElementById("pass").value;

    // let's get value in localStorage which store user in registration form
    const Email =  localStorage.getItem("Email");
    const Password =  localStorage.getItem("Password");


    if(emailAddress == "" && passWord == ""){
        alert("Input field has no value");
    }
    else {
        if(emailAddress == Email && passWord == Password){
            alert('registration successful');
        }
    else {
        alert('Something is wrong!');
        }
    }
}







//////////////////////////////////////////////////


const submit_button = document.querySelector(".button");
// submit_button.onclick = () => {
submit_button.onclick = (e) => {
    e.preventDefault();

    // all input data received this variables
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    // now store this data in your web browser store
    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);

    // now write some condition
    if(fname == "" && lname == "" && email == "" && pass == "" && cpass == ""){
        // let's change this alert system
        // alert("Input field has no value");
        swal("Opps..!", "Input field has no value!", "error");
    }
    else {
        if(pass !== cpass){
            // alert("password not matching");
            swal("Opps..!", "Password does not matching!", "error");
        }
        else{
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
    const emailAddress = document.getElementById("Email").value;
    const passWord = document.getElementById("pass").value;

    // let's get value in localStorage which store user in registration form
    const Email =  localStorage.getItem("Email");
    const Password =  localStorage.getItem("Password");


    if(emailAddress == "" && passWord == ""){
        swal("Opps..!", "Input field has no value!", "error");
    }
    else {
        if(emailAddress == Email && passWord == Password){
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
