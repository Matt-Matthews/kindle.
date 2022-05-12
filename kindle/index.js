const login = document.getElementById('login');         //variables for the forms
const register = document.getElementById('register');
const signin = document.getElementById('Signin');
const signup = document.getElementById('Signup');
const logo_ = document.getElementById('logo-container');
signin.classList.add('active');
logo_.style.bottom = '30%';

function sigInTab(){            //function to open the login form tab

    login.style.opacity = '1';
    login.style.height = 'auto';
    login.style.display = 'block';
    register.style.opacity = '0';
        
    signin.classList.add('active');
    signup.classList.remove('active');
    logo_.style.bottom = '30%';
}

function signUpTab(){               //function to open the register form tab

    login.style.opacity = '0';
    login.style.height = '0';
    login.style.display = 'none';
    register.style.opacity = '1';
    register.style.visibility = 'visible';

    signin.classList.remove('active');
    signup.classList.add('active');
    logo_.style.bottom = '0%';
}

signUpTab();                //open the register form tab on start

function openTab(tab){          //onclick function to open the register or login form tab
    
    if(tab === 'Signin'){
        sigInTab();
    }
    else if(tab === 'Signup'){
        signUpTab();
    }
} 

//the user data


const userName = document.getElementById('name'); //variables for the input fields
const email = document.getElementById('email');
const surname = document.getElementById('surname');
const passwrd = document.getElementById('password');
const cPasswrd = document.getElementById('cPassword');
const phoneNo = document.getElementById('phoneNumber');
let user = [];
const errMsg = document.getElementById('regErrMsg');


document.querySelector('#img').addEventListener("change", function(){       //listen the file input
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        sessionStorage.setItem('img', reader.result);               //store the image file in a sessionStorage
    });
    reader.readAsDataURL(this.files[0]);
});

function createUser(){          //create user data and store in an array

    if(userName.value !='' && surname.value!=''&& email.value!=''&& phoneNo.value!=''&& img.value!=''&& passwrd.value!='' &&cPasswrd!=''){  //check if the fields are not empty
        if(passwrd.value == cPasswrd.value){        //checks if the new password is the same as the confirm password

            user.push(userName.value, surname.value, email.value, phoneNo.value, passwrd.value);            //store the user data into an array
            errMsg.innerHTML = 'user created successfully';
            
            sigInTab();         //goes to the login form tab after storing the data 
        }
        else{
            errMsg.innerHTML = 'Password do not match!';
            //user.splice(0, user.length);
        }
    }
    else{
        errMsg.innerHTML = 'The form is incomplete!'
        //user.splice(0, user.length);
    }
}


const logErrMsg = document.getElementById('logErrMsg');
const userPasswd = document.getElementById('userPassword');
const userEmail = document.getElementById('userEmail');
const welcomeName = document.getElementsByClassName('welcomeName');
const ppic = document.getElementsByClassName('profileImg');

function logUser(){                 //check the user data and compare it with the data from the array

    if(userEmail.value != '' && userPasswd.value != ''){            //check if the fields are not empty
        if(userEmail.value ==user[2] && userPasswd.value == user[4]){   //validate the user data
        
            sessionStorage.setItem('name', user[0]);            //store the user data into a session storage
            sessionStorage.setItem('surname', user[1]);
            sessionStorage.setItem('email', user[2]);
            sessionStorage.setItem('phoneNo', user[3]);
            sessionStorage.setItem('passwrd', user[4]);

            window.location.href = 'landingPage.html';          //navigate to the landing page
            


        } else {
            logErrMsg.innerHTML = 'wrong email or password, or user does not exist!';          //return this message if the user data does not match with the input
        }

    }
    else{
        logErrMsg.innerHTML = 'Insert your email and password!';                //return this message if the input fieldss are empty
    }
}


