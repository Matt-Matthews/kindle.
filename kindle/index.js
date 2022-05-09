var login = document.getElementById('login');
var register = document.getElementById('register');
var signin = document.getElementById('Signin');
var signup = document.getElementById('Signup');
var logo_ = document.getElementById('logo-container');
signin.classList.add('active');
logo_.style.bottom = '30%';

function sigInTab(){

    login.style.opacity = '1';
    login.style.height = 'auto';
    login.style.display = 'block';
    register.style.opacity = '0';
        
    signin.classList.add('active');
    signup.classList.remove('active');
    logo_.style.bottom = '30%';
}

function signUpTab(){

    login.style.opacity = '0';
    login.style.height = '0';
    login.style.display = 'none';
    register.style.opacity = '1';
    register.style.visibility = 'visible';

    signin.classList.remove('active');
    signup.classList.add('active');
    logo_.style.bottom = '0%';
}

signUpTab();

function openTab(tab){
    
    if(tab === 'Signin'){
        sigInTab();
    }
    else if(tab === 'Signup'){
        signUpTab();
    }
}


var userName = document.getElementById('name');
var email = document.getElementById('email');
var surname = document.getElementById('surname');
var passwrd = document.getElementById('password');
var cPasswrd = document.getElementById('cPassword');
var phoneNo = document.getElementById('phoneNumber');
var img = document.getElementById('img');
var user = [];
var errMsg = document.getElementById('regErrMsg');


function createUser(){

    if(userName.value !='' && surname.value!=''&& email.value!=''&& phoneNo.value!=''&& img.value!=''&& passwrd.value!='' &&cPasswrd!=''){
        if(passwrd.value == cPasswrd.value){

            user.push(userName.value, surname.value, email.value, phoneNo.value, img.value, passwrd.value);
            errMsg.innerHTML = 'user created successfully';
            sigInTab();
        }
        else{
            errMsg.innerHTML = 'Password do not match!';
            user.splice(0, user.length);
        }
    }
    else{
        errMsg.innerHTML = 'The form is incomplete!'
        user.splice(0, user.length);
    }
}


var logErrMsg = document.getElementById('logErrMsg');
var userPasswd = document.getElementById('userPassword');
var userEmail = document.getElementById('userEmail');
var welcomeName = document.getElementsByClassName('welcomeName');
var ppic = document.getElementsByClassName('profileImg');

function logUser(){

    if(userEmail.value != '' && userPasswd.value != ''){
        if(userEmail.value ==user[2] && userPasswd.value == user[5]){
        
            sessionStorage.setItem('user', user);
            window.location.href = 'landingPage.html';


        } else {
            logErrMsg.innerHTML = 'wrong email or password, or user does not exist!';
        }

    }
    else{
        logErrMsg.innerHTML = 'Insert your email and password!';
    }
}



    var userData = sessionStorage.getItem('user');
    console.log(userData);
    welcomeName.innerHTML = userData[0];
    ppic.src = userData[4];
    sessionStorage.clear();

