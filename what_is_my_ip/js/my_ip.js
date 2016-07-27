function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
        	var ip = xhr.responseText.match(/\d+\.\d+\.\d+\.\d+/g);
            callback(ip);
        }
    }
    xhr.send();
}

httpRequest('http://1212.ip138.com/ic.asp', function(ip){
    document.getElementById('ip_div').innerText = ip;
});