/*  */
function FindProxyForURL(url, host) {
	function sleep(milliseconds) {
		const date = Date.now();
		let currentDate = null;
		do {
			currentDate = Date.now();
		} while (currentDate - date < milliseconds);
	}
	sleep(5000);
	return "PROXY 172.16.76.9:3128";
}