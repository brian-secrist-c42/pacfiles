/*  */
function FindProxyForURL(url, host) {
	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	sleep(5000);
	return "PROXY 172.16.76.9:3128";
}