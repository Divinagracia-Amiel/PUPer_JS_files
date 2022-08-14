window.addEventListener('load', (event) => {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://192.168.254.111/cordova/validation.php', true);
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            sessionStorage.setItem('DB_data', data);
            console.log(data);           
            }
        }
    request.send();
});