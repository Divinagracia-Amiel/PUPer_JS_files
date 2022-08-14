var guest_status = sessionStorage.getItem('guest');
if (guest_status == 'true'){
    document.getElementById('userDisplayHeader').innerHTML = "Guest";
}
else {
    var student_id = sessionStorage.getItem('student_id');
    document.getElementById('userDisplayHeader').innerHTML = student_id;
}