var login = document.getElementById('login');
var register = document.getElementById('register');
var signin = document.getElementById('Signin');
var signup = document.getElementById('Signup');
signin.classList.add('active');

function openTab(tab){
    
    if(tab == 'Signin'){
        login.style.opacity = '1';
        login.style.height = 'auto';
        register.style.opacity = '0';
        signin.classList.add('active');
        signup.classList.remove('active');
    }
    else if(tab == 'Signup'){
        login.style.opacity = '0';
        login.style.height = '0';
        register.style.opacity = '1';
        register.style.visibility = 'visible';
        signin.classList.remove('active');
        signup.classList.add('active');
    }
}