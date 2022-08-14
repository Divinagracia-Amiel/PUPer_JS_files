function validation(mail, student_id) {
    var email = mail;
    var student_num = student_id;
    var data = JSON.parse(sessionStorage.getItem('DB_data'));

    for (i = 0; i < data.length; i++) {
        var db_email = data[i].email;
        var db_student_id = data[i].student_id;

        if (email == db_email || student_num == db_student_id) {
            return false;
        }
    }
    return true;
}

function validUsername(name) {
    var userName = name;
    var data = JSON.parse(sessionStorage.getItem('DB_data'));

    for (i = 0; i < data.length; i++) {
        var db_user = data[i].userName;

        if (userName == db_user) {
            return false;
        }
    }
    return true;
}

function validLogin(name, pass) {
    var userName = name;
    var signPass = pass;
    var data = JSON.parse(sessionStorage.getItem('DB_data'));

    for (i = 0; i < data.length; i++) {
        var db_user = data[i].userName;
        var db_pass = data[i].signupPass;
        var db_studid = data[i].student_id;
        sessionStorage.setItem('student_id', db_studid);
        if (userName == db_user && signPass == db_pass && userName != '' && signPass != '') {
            return true;
        }
    }
    return false;
}