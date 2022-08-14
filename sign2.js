var form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("working");
    var username = document.getElementById('nameInput').value;
    var password = document.getElementById('signupPass').value;
    var student_num = sessionStorage.getItem('student_num');
    var checking = validUsername(username);
    if (checking == true) {
        formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('student_num', student_num);
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                alert(request.responseText);
            }
        }
        request.open('POST', 'http://192.168.254.111/cordova/sign2.php', false);
        request.send(formData);

        window.location = "sign3.html";
    } 
    else {
        document.getElementById('check').innerHTML = "<p>Invalid Input. Existing Username</p>"
    }
});