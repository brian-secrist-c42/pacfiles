/*THISISGARBAGE*/
function FindProxyForURL(url, host) {
if (host == "127.0.0.1") {return "DIRECT";}
if (host == "localhost") {return "DIRECT";}
return "PROXY proxy.qa.code42.com:3128; DIRECT";
}
