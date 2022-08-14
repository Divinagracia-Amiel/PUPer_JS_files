var form = document.getElementById('login');
var guest = false;
sessionStorage.setItem('guest', guest);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("working");
    var username = document.getElementById('nameInput').value;
    sessionStorage.setItem('loginuser', username);
    var password = document.getElementById('signupPass').value;
    var checking = validLogin(username, password);
    if (checking == true) {
        alert('Login Successful!'); 
        window.location = 'homepage.html';
    }
    else {
        document.getElementById('check').innerHTML = "<p>Invalid Input. Wrong Username or Password</p>"
    }
});

function loginGuest() {
    var guest = true;
    sessionStorage.setItem('guest', guest);
}