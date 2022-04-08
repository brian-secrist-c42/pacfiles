function FindProxyForURL(url, host) {
if (host == "download.dev.core.cloud.code42.com") {return "PROXY 172.16.76.13:3128";}
if (host == "core-int.cloud.code42.com") {return "PROXY 172.16.76.9:3128";}
}