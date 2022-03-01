function FindProxyForURL(url, host) {
if (host == "download.dev.core.cloud.code42.com") {return "PROXY 172.16.76.9:3128";}
if (host == "console.core-int.cloud.code42.com") {return "PROXY 172.16.76.12:3128";}
}