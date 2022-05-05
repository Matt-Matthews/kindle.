var login = document.getElementById('login');
var register = document.getElementById('register');
var signin = document.getElementById('Signin');
var signup = document.getElementById('Signup');
var logo_ = document.getElementById('logo-container');
signin.classList.add('active');
logo_.style.bottom = '30%';
function openTab(tab){
    
    if(tab == 'Signin'){
        login.style.opacity = '1';
        login.style.height = 'auto';
        login.style.display = 'block';
        register.style.opacity = '0';

        signin.classList.add('active');
        signup.classList.remove('active');
        logo_.style.bottom = '30%';
    }
    else if(tab == 'Signup'){
        login.style.opacity = '0';
        login.style.height = '0';
        login.style.display = 'none';
        register.style.opacity = '1';
        register.style.visibility = 'visible';

        signin.classList.remove('active');
        signup.classList.add('active');
        logo_.style.bottom = '0%';
    }
}