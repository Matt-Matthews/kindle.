const login = document.getElementById('login');
const register = document.getElementById('register');
const signin = document.getElementById('Signin');
const signup = document.getElementById('Signup');
const logo_ = document.getElementById('logo-container');
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

// the real data 


//the user data


const userName = document.getElementById('name');
const email = document.getElementById('email');
const surname = document.getElementById('surname');
const passwrd = document.getElementById('password');
const cPasswrd = document.getElementById('cPassword');
const phoneNo = document.getElementById('phoneNumber');
let user = [];
const errMsg = document.getElementById('regErrMsg');


document.querySelector('#img').addEventListener("change", function(){
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        sessionStorage.setItem('img', reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});

function createUser(){

    if(userName.value !='' && surname.value!=''&& email.value!=''&& phoneNo.value!=''&& img.value!=''&& passwrd.value!='' &&cPasswrd!=''){
        if(passwrd.value == cPasswrd.value){

            user.push(userName.value, surname.value, email.value, phoneNo.value, passwrd.value);
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


const logErrMsg = document.getElementById('logErrMsg');
const userPasswd = document.getElementById('userPassword');
const userEmail = document.getElementById('userEmail');
const welcomeName = document.getElementsByClassName('welcomeName');
const ppic = document.getElementsByClassName('profileImg');

function logUser(){

    if(userEmail.value != '' && userPasswd.value != ''){
        if(userEmail.value ==user[2] && userPasswd.value == user[4]){
        
            sessionStorage.setItem('name', user[0]);
            window.location.href = 'landingPage.html';
            


        } else {
            logErrMsg.innerHTML = 'wrong email or password, or user does not exist!';
        }

    }
    else{
        logErrMsg.innerHTML = 'Insert your email and password!';
    }
}


