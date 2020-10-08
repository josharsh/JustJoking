var token_ 
var userName = "clientID"; 
var passWord = "secretKey";
var request = new XMLHttpRequest(); 
//Will create API to store information
function getToken(clientID, clientSecret) {
    var key;           
    request.open("POST", true); 
    request.setRequestHeader("Content-type", "application/json");
    request.send("grant_type=client_credentials&client_id="+clientID+"&"+"client_secret="+clientSecret); 
    request.onreadystatechange = function () {
        if (request.readyState == request.DONE) {
            var response = request.responseText;
            var obj = JSON.parse(response); 
            key = obj.access_token; 
            token_ = key; 
        }
    }
}

getToken(userName, passWord);
