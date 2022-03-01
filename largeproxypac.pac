function FindProxyForURL(url,host) {
var me=myIpAddress();
var resolved_ip = dnsResolve(host);
if (host == "127.0.0.1") {return "DIRECT";}
if (host == "localhost") {return "DIRECT";}
if (isPlainHostName(host)) {return "DIRECT";}
if (url.substring(0,37) == "http://lyncdiscoverinternal.intel.com") {return "DIRECT";}
if (!resolved_ip) {return "PROXY proxy-us.intel.com:912";}
if (host == "atlassian-domain-for-localhost-connections-only.com") {return "DIRECT";}
if ((host == "shz11c-dlb101a.ice.intel.com") || (host == "shz11c-dlb101b.ice.intel.com")) {return "PROXY child-prc.intel.com:912";}
if (dnsDomainIs(host,".ice.intel.com") && ( shExpMatch(url, "*dlb*.ice.intel.com*") || shExpMatch(url, "*zlb*.ice.intel.com*") || shExpMatch(url, "*dcb*.ice.intel.com*") )) {return "PROXY proxy-chain.intel.com:912";}
if (host == "dsalocal.intel.com") {return "DIRECT";}
if (dnsDomainIs(host,".pwccomperio.com")) {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".cefswa.ubs.com")) {return "PROXY proxy-us.intel.com:912";}
if (dnsDomainIs(host,".komputronik.pl")) {return "PROXY proxy-im.intel.com:912";}
if (host == "datatransfer.microsoft.com") {return "PROXY proxy-im.intel.com:912";}
if (host == "65.52.92.72") {return "PROXY proxy-im.intel.com:912";}
if (host == "65.52.92.73") {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".interactivebrokers.com")) {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".carnegiespeech.com")) {return "PROXY proxy-im.intel.com:912";}
if (host == "epa.gov") {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".insourcers.riahome.com")) {return "PROXY proxy-im.intel.com:912";}
if (host == "164.57.159.147") {return "PROXY proxy-im.intel.com:912";}
if (host == "rstransport.thomson.com") {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".impinj.com")) {return "PROXY proxy-ir.intel.com:912";}
if (dnsDomainIs(host,".fas109.com")) {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".onesourcelogin.com")) {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".taxstreampro.com")) {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".thomson.com")) {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".thomsonreuters.com")) {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".gofileroomlogin.com")) {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".2o7.net")) {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".pre1-ias.intel.com")) {return "PROXY proxy-us.intel.com:912";}
if (dnsDomainIs(host,".test-ias.intel.com")) {return "PROXY proxy-us.intel.com:912";}
if (dnsDomainIs(host,".ibf-motors.ru")) {return "PROXY proxy-us.intel.com:912";}
if (dnsDomainIs(host,".lanyon.com")) {return "PROXY proxy-us.intel.com:912";}
if (dnsDomainIs(host,".ariba.com")) {return "PROXY proxy-jf.intel.com:912";}
if (dnsDomainIs(host,".wan.intel.com") && shExpMatch(host, "fiis??nt?.*")) {return "PROXY ftpgw.fm.intel.com:911";}
if (dnsDomainIs(host,".wan.intel.com") && ( shExpMatch(host, "fm??sas?.*") || shExpMatch(host, "fm??sas??nic2.*") )) {return "PROXY proxy-us.intel.com:912";}
if (dnsDomainIs(host,".primecontract.com")) {return "PROXY proxy-fm.intel.com:912";}
if ((host == "softwarecentral.fm.intel.com") || (host == "softwarecentral.intel.com") || (host == "softwarecentral-devcur.intel.com")  || (host == "softwarecentral-devnew.intel.com")  || (host == "softwarecentral-intcur.intel.com")  || (host == "softwarecentral-intnew.intel.com")  || (host == "softwarecentral-preprod.intel.com") || (host ==  "softwarecentral-devcur.intel.com")  ||  (host == "ubitcentral.intel.com") || (host == "ubitcentral-devcur.intel.com")  || (host == "ubitcentral-devnew.intel.com")  || (host == "ubitcentral-intcur.intel.com")  || (host == "ubitcentral-intnew.intel.com")  || (host == "ubitcentral-preprod.intel.com")) {return "DIRECT";}
if (isInNet(resolved_ip, "192.55.48.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.49.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.50.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.51.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.64.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.65.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.66.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.67.0", "255.255.255.0") || isInNet(resolved_ip, "134.191.204.0", "255.255.252.0")) {return "PROXY proxy-jf.intel.com:912";}
if (isInNet(resolved_ip, "198.175.72.0", "255.255.248.0") || isInNet(resolved_ip, "198.175.112.0", "255.255.252.0")) {return "PROXY proxy-fm.intel.com:912";}
if (isInNet(resolved_ip, "192.102.200.0", "255.255.252.0")) {return "PROXY proxy-iind.intel.com:912";}
if (isInNet(resolved_ip, "134.191.240.0", "255.255.252.0")) {return "PROXY proxy-ir.intel.com:912";}
if (isInNet(resolved_ip, "134.191.236.0", "255.255.252.0")) {return "PROXY proxy-iil.intel.com:912";}
if (dnsDomainIs(host,".idmanagedsolutions.com")) {return "PROXY proxy-us.intel.com:912";}
if (dnsDomainIs(host,".lloydstsb.co.uk")) {return "PROXY proxy-ir.intel.com:912";}
if (dnsDomainIs(host,".usbank.com")) {return "PROXY proxy-fm.intel.com:912";}
if (host == "portal.hilan.co.il") {return "DIRECT";}
if (host == "tunnel.hilan.co.il") {return "DIRECT";}
if (host == "rds.inteleic.com") {return "PROXY proxy-us.intel.com:912";}
if (dnsDomainIs(host,".salesforceliveagent.com")) {return "PROXY proxy-im.intel.com:912";}
if (host == "salesforceliveagent.com") {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".highcharts.com")) {return "PROXY proxy-ir.intel.com:912";}
if (dnsDomainIs(host,".piercetransit.org")) {return "PROXY proxy-ir.intel.com:912";}
if (host == "ebwww-vip1.ebrary.com") {return "PROXY proxy-us.intel.com:912";}
if (host == "ebwww-rdr-int-vip1.ebrary.com") {return "PROXY proxy-us.intel.com:912";}
if (dnsDomainIs(host,".impinj.com")) {return "PROXY proxy-us.intel.com:912";}
if (host == "ccuapi.akamai.com") {return "PROXY proxy-us.intel.com:912";}
if (isInNet(resolved_ip, "128.94.80.0", "255.255.255.0") || isInNet(resolved_ip, "128.94.188.0", "255.255.252.0") || isInNet(resolved_ip, "128.94.192.0", "255.255.248.0") || isInNet(resolved_ip, "128.94.202.0", "255.255.254.0") || isInNet(resolved_ip, "135.15.32.0", "255.255.240.0") || isInNet(resolved_ip, "135.15.120.0", "255.255.255.0") || isInNet(resolved_ip, "135.15.210.0", "255.255.254.0") || isInNet(resolved_ip, "135.36.70.0", "255.255.254.0") || isInNet(resolved_ip, "135.149.16.0", "255.255.240.0") || isInNet(resolved_ip, "135.149.116.0", "255.255.252.0") || isInNet(resolved_ip, "155.62.84.0", "255.255.255.0")) {return "DIRECT";}
if (host == "b.corp.google.com") {return "PROXY proxy-us.intel.com:912";}
if (host == "rtc.intel.com") {return "DIRECT";}
if (host == "jfrailvoaweb01.jfrail.intel.com") {return "PROXY child-jf.intel.com:912";}
if (host == "jfrailvoaweb02.jfrail.intel.com") {return "PROXY proxy-chain.intel.com:912";}
if (host == "ecrvintoaweb01.jfrailint.intel.com") {return "PROXY proxy-chain.intel.com:912";}
if (host == "ecrvintopla01.jfrailint.intel.com") {return "PROXY proxy-chain.intel.com:912";}
if (host == "murailvrsgplm01.jfrail.intel.com") {return "PROXY proxy-chain.intel.com:912";}
if (host == "jfrailwcpdm01.jfrail.intel.com") {return "PROXY proxy-chain.intel.com:912";}
if (host == "jfwc.intel.com") {return "PROXY proxy-chain.intel.com:912";}
if (host == "pdm.intel.com") {return "PROXY proxy-chain.intel.com:912";}
if ((host == "funcqa-moss.amr.ith.intel.com") || (host == "qatest-moss.amr.ith.intel.com") || (host == "moss.amr.ith.intel.com") || (host == "moss.gar.ith.intel.com") || (host == "moss.ger.ith.intel.com") || (host == "eam.intel.com") || (host == "mqcs-dev.intel.com") || (host == "mqcs-qa.intel.com") || (host == "mqcs-dr.intel.com") || (host == "mqcs.intel.com") || (host == "mqcstest.intel.com") || (host == "icmtl-amr.intel.com") || (host == "icmtl-is.intel.com") || (host == "icmtl-pg.intel.com") || (host == "icmtl-ir.intel.com") || (host == "mqcs-dev.intel.com")) {return "DIRECT";}
if (dnsDomainIs(host,".amr.corp.intel.com") || dnsDomainIs(host,".ccr.corp.intel.com") || dnsDomainIs(host,".ger.corp.intel.com") || dnsDomainIs(host,".gar.corp.intel.com") || dnsDomainIs(host,".ch.intel.com") || dnsDomainIs(host,".cps.intel.com") || dnsDomainIs(host,".ir.intel.com") || dnsDomainIs(host,".lc.intel.com") || dnsDomainIs(host,".png.intel.com") || dnsDomainIs(host,".rr.intel.com") || dnsDomainIs(host,".me-corp.lan")) {return "DIRECT";}
if (isInNet(resolved_ip, "198.175.111.0", "255.255.255.0") || isInNet(resolved_ip, "143.182.177.0", "255.255.255.0") || isInNet(resolved_ip, "134.191.195.0", "255.255.255.0") || isInNet(resolved_ip, "134.191.216.0", "255.255.252.0") || isInNet(resolved_ip, "134.191.213.0", "255.255.255.0")) {return "PROXY proxy-us.intel.com:912";}
if (isInNet(resolved_ip, "10.0.0.0", "255.0.0.0") || isInNet(resolved_ip, "128.215.0.0", "255.255.0.0") || isInNet(resolved_ip, "132.233.0.0", "255.255.0.0") || isInNet(resolved_ip, "134.134.0.0", "255.255.0.0")) {return "DIRECT";}
if (isInNet(resolved_ip, "134.191.0.0", "255.255.0.0") || isInNet(resolved_ip, "137.57.0.0", "255.255.0.0") || isInNet(resolved_ip, "137.102.0.0", "255.255.0.0") || isInNet(resolved_ip, "140.248.0.0", "255.255.0.0") || isInNet(resolved_ip, "143.181.0.0", "255.255.0.0")) {return "DIRECT";}
if (isInNet(resolved_ip, "143.182.0.0", "255.255.0.0") || isInNet(resolved_ip, "143.183.0.0", "255.255.0.0") || isInNet(resolved_ip, "143.184.0.0", "255.255.0.0") || isInNet(resolved_ip, "143.185.0.0", "255.255.0.0") || isInNet(resolved_ip, "163.33.0.0", "255.255.0.0")) {return "DIRECT";}
if (isInNet(resolved_ip, "172.16.0.0", "255.255.0.0") || isInNet(resolved_ip, "172.17.0.0", "255.255.0.0") || isInNet(resolved_ip, "172.18.0.0", "255.255.0.0") || isInNet(resolved_ip, "172.19.0.0", "255.255.0.0") || isInNet(resolved_ip, "172.20.0.0", "255.255.0.0") || isInNet(resolved_ip, "172.21.0.0", "255.255.0.0") || isInNet(resolved_ip, "172.22.0.0", "255.255.0.0") || isInNet(resolved_ip, "172.23.0.0", "255.255.0.0") || isInNet(resolved_ip, "172.24.0.0", "255.255.0.0") || isInNet(resolved_ip, "172.25.0.0", "255.255.0.0") || isInNet(resolved_ip, "172.26.0.0", "255.255.0.0") || isInNet(resolved_ip, "172.27.0.0", "255.255.0.0") || isInNet(resolved_ip, "172.28.0.0", "255.255.0.0") || isInNet(resolved_ip, "172.29.0.0", "255.255.0.0") || isInNet(resolved_ip, "172.30.0.0", "255.255.0.0") || isInNet(resolved_ip, "172.31.0.0", "255.255.0.0") || isInNet(resolved_ip, "198.175.96.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.97.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.98.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.99.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.100.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.101.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.102.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.103.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.104.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.105.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.106.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.107.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.108.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.109.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.110.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.111.0", "255.255.255.0")) {return "DIRECT";}
if (isInNet(resolved_ip, "192.102.184.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.185.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.186.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.187.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.192.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.193.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.194.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.195.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.196.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.197.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.198.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.199.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.204.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.205.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.206.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.207.0", "255.255.255.0")) {return "DIRECT";}
if (isInNet(resolved_ip, "192.102.208.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.209.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.210.0", "255.255.255.0") || isInNet(resolved_ip, "192.102.211.0", "255.255.255.0") || isInNet(resolved_ip, "192.132.4.0", "255.255.255.0") || isInNet(resolved_ip, "192.168.0.0", "255.255.0.0") || isInNet(resolved_ip, "192.198.128.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.129.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.130.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.131.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.132.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.133.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.134.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.135.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.136.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.137.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.138.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.139.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.140.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.141.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.142.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.143.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.144.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.145.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.146.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.147.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.148.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.149.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.150.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.151.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.152.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.153.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.154.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.155.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.156.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.157.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.158.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.159.0", "255.255.255.0")) {return "DIRECT";}
if (isInNet(resolved_ip, "192.198.160.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.161.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.162.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.163.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.164.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.165.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.166.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.167.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.168.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.169.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.170.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.171.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.172.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.173.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.174.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.175.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.176.0", "255.255.255.0") || isInNet(resolved_ip, "192.198.177.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.64.128", "255.255.255.128") || isInNet(resolved_ip, "198.175.65.128", "255.255.255.128")) {return "DIRECT";}
if (isInNet(resolved_ip, "192.52.54.0", "255.255.255.0") || isInNet(resolved_ip, "192.52.55.0", "255.255.255.0") || isInNet(resolved_ip, "192.52.56.0", "255.255.255.0") || isInNet(resolved_ip, "192.52.57.0", "255.255.255.0") || isInNet(resolved_ip, "192.52.58.0", "255.255.255.0") || isInNet(resolved_ip, "192.52.59.0", "255.255.255.0") || isInNet(resolved_ip, "192.52.60.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.32.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.33.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.34.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.35.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.36.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.37.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.38.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.39.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.40.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.41.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.42.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.43.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.44.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.45.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.46.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.47.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.52.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.53.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.54.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.55.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.56.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.57.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.58.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.59.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.60.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.61.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.62.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.63.0", "255.255.255.0")) {return "DIRECT";}
if (isInNet(resolved_ip, "192.55.64.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.65.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.66.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.67.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.68.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.69.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.70.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.71.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.72.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.73.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.75.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.76.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.77.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.78.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.79.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.80.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.81.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.82.0", "255.255.255.0") || isInNet(resolved_ip, "192.55.83.0", "255.255.255.0") || isInNet(resolved_ip, "192.82.151.0", "255.255.255.0") || isInNet(resolved_ip, "194.234.12.0", "255.255.255.0") || isInNet(resolved_ip, "194.234.13.0", "255.255.255.0") || isInNet(resolved_ip, "194.234.14.0", "255.255.255.0") || isInNet(resolved_ip, "194.234.15.0", "255.255.255.0")) {return "DIRECT";}
if (isInNet(resolved_ip, "194.234.16.0", "255.255.255.0") || isInNet(resolved_ip, "194.234.17.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.116.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.117.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.118.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.119.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.120.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.121.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.122.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.123.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.68.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.69.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.70.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.71.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.91.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.93.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.94.0", "255.255.255.0") || isInNet(resolved_ip, "198.175.95.0", "255.255.255.0")) {return "DIRECT";}
if (isInNet(resolved_ip, "198.93.84.0", "255.255.255.0") || isInNet(resolved_ip, "198.93.85.0", "255.255.255.0") || isInNet(resolved_ip, "198.93.86.0", "255.255.255.0") || isInNet(resolved_ip, "198.93.87.0", "255.255.255.0") || isInNet(resolved_ip, "204.30.136.0", "255.255.255.0") || isInNet(resolved_ip, "204.30.137.0", "255.255.255.0") || isInNet(resolved_ip, "204.30.138.0", "255.255.255.0") || isInNet(resolved_ip, "204.30.139.0", "255.255.255.0") || isInNet(resolved_ip, "209.162.77.128", "255.255.255.192")) {return "DIRECT";}
if (isInNet(resolved_ip, "156.153.216.0", "255.255.255.0") || isInNet(resolved_ip, "156.153.217.0", "255.255.255.0") || isInNet(resolved_ip, "156.153.218.0", "255.255.255.0") || isInNet(resolved_ip, "156.153.219.0", "255.255.255.0") || isInNet(resolved_ip, "156.153.220.0", "255.255.255.0") || isInNet(resolved_ip, "156.153.221.0", "255.255.255.0") || isInNet(resolved_ip, "156.153.222.0", "255.255.255.0") || isInNet(resolved_ip, "156.153.223.0", "255.255.255.0") || isInNet(resolved_ip, "156.153.224.0", "255.255.255.0") || isInNet(resolved_ip, "156.153.225.0", "255.255.255.0") || isInNet(resolved_ip, "156.153.226.0", "255.255.255.0") || isInNet(resolved_ip, "156.153.227.0", "255.255.255.0") || isInNet(resolved_ip, "156.153.228.0", "255.255.255.0") || isInNet(resolved_ip, "156.153.229.0", "255.255.255.0") || isInNet(resolved_ip, "156.153.230.0", "255.255.255.0") || isInNet(resolved_ip, "156.153.231.0", "255.255.255.0")) {return "DIRECT";}
if (isInNet(resolved_ip, "100.64.0.0", "255.192.0.0")) {return "DIRECT";}
if (isInNet(resolved_ip, "72.5.65.0", "255.255.255.0") || isInNet(resolved_ip, "74.201.114.0", "255.255.255.0") || isInNet(resolved_ip, "38.99.71.0", "255.255.255.0") || isInNet(resolved_ip, "38.107.71.0", "255.255.255.0") || isInNet(resolved_ip, "198.105.200.0", "255.255.255.0") || isInNet(resolved_ip, "198.105.201.0", "255.255.255.0")) {return "DIRECT";}
if (host == "169.254.169.254") {return "DIRECT";}
if (host == "160.50.252.23") {return "DIRECT";}
if (host == "160.50.252.20") {return "DIRECT";}
if (host == "160.50.250.20") {return "DIRECT";}
if (host == "160.50.35.28") {return "DIRECT";}
if (host == "160.50.35.31") {return "DIRECT";}
if (host == "160.50.127.24") {return "DIRECT";}
if (host == "160.50.93.18") {return "DIRECT";}
if (host == "160.50.95.205") {return "DIRECT";}
if (host == "160.46.184.140") {return "DIRECT";}
if (host == "160.46.184.75") {return "DIRECT";}
if (host == "160.46.240.170") {return "DIRECT";}
if (host == "160.46.113.36") {return "DIRECT";}
if (host == "160.50.192.7") {return "DIRECT";}
if (host == "160.50.181.47") {return "DIRECT";}
if (host == "160.50.74.133") {return "DIRECT";}
if (host == "160.50.95.13") {return "DIRECT";}
if (dnsDomainIs(host,".hewitt.com")) {return "PROXY proxy-us.intel.com:912";}
if (dnsDomainIs(host,".lastpass.com")) {return "PROXY proxy-us.intel.com:912";}
if (dnsDomainIs(host,".xmarks.com")) {return "PROXY proxy-us.intel.com:912";}
if (dnsDomainIs(host,".onit.com")) {return "PROXY proxy-us.intel.com:912";}
if (dnsDomainIs(host,".aka.idf.il")) {return "PROXY proxy-ir.intel.com:912";}
if (dnsDomainIs(host,".scotiaweb.com.mx")) {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".banorte.com")) {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".nextel.com.mx")) {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".smc.mcafeeebc.com")) {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".smcebc.intelsecurity.com")) {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".bwellapp.co.il")) {return "PROXY proxy-im.intel.com:912";}
if (host == "visitor.ntoperations.ru") {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".nextit.com")) {return "PROXY proxy-im.intel.com:912";}
if (host == "partsurfer.hpe.com") {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".partsurfer.hpe.com")) {return "PROXY proxy-im.intel.com:912";}
if (host == "crashplan.com") {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".crashplan.com")) {return "PROXY proxy-im.intel.com:912";}
if (host == "client.kontiki.com") {return "DIRECT";}
if (host == "duosecurity.com") {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".duosecurity.com")) {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".shnpoc.net")) {return "PROXY proxy-fm.intel.com:912";}
if (isInNet(resolved_ip, "160.46.113.0", "255.255.255.0") || isInNet(resolved_ip, "148.59.144.64", "255.255.255.192") || isInNet(resolved_ip, "148.59.144.128", "255.255.255.192") || isInNet(resolved_ip, "134.86.169.0", "255.255.255.192")) {return "DIRECT";}
if (dnsDomainIs(host,".il.alm-sg.com")) {return "PROXY proxy-ir.intel.com:912";}
if (host == "local.connectme.us") {return "DIRECT";}
if (host == "custftp3.nai.com") {return "PROXY proxy-us.intel.com:912";}
if (host == "vpn.labcollab.net") {return "DIRECT";}
if (host == "vpn-uswest.labcollab.net") {return "PROXY proxy-us.intel.com:912";}
if (host == "vpn-useast.labcollab.net") {return "PROXY proxy-us.intel.com:912";}
if (host == "adfs.lasso.labcollab.net") {return "PROXY proxy-us.intel.com:912";}
if (host == "portal-uswest.labcollab.net") {return "PROXY proxy-us.intel.com:912";}
if (host == "portal-useast.labcollab.net") {return "PROXY proxy-us.intel.com:912";}
if (host == "portal-hongkong.labcollab.net") {return "PROXY proxy-us.intel.com:912";}
if (host == "portal-singapore.labcollab.net") {return "PROXY proxy-us.intel.com:912";}
if (dnsDomainIs(host,".labcollab.net")) {return "DIRECT";}
if (dnsDomainIs(host,".lab126.a2z.com")) {return "DIRECT";}
if (host == "intelpd.pvcloud.com") {return "PROXY proxy-us.intel.com:912";}
if (host == "intelpd-sb.pvcloud.com") {return "PROXY proxy-us.intel.com:912";}
if (host == "workspace.openconnectivity.org") {return "PROXY proxy-fm.intel.com:912";}
if (host == "brainspace.com") {return "PROXY proxy-im.intel.com:912";}
if (dnsDomainIs(host,".brainspace.com")) {return "PROXY proxy-im.intel.com:912";}
if ((host == "radar-webservices-alt.apple.com") || (host == "bugreport.apple.com") || (host == "rdr-prod-ext.apple.com") || (host == "rdr-prod.apple.com") || (host == "radar-webservices.apple.com") || (host == "reporting-radar-ext.apple.com") || (host == "resources-radar-ext.apple.com") || (host == "nwk-gnv-cdn.apple.com") || (host == "nwk-gnv-proxy-cdn.apple.com") || (host == "geneva.cdn-apple.com.akadns.net") || (host == "atlasserver.igb.apple.com") || (host == "ray.apple.com") || (host == "ixtapa.apple.com") || (host == "idmsac.corp.apple.com")) {return "DIRECT";}
if (host == "wsproxy.devicecloud.ca") {return "DIRECT";}
if (host == "rulings.cbp.gov") {return "PROXY proxy-us.intel.com:912";}
if (host == "hts.usitc.gov") {return "PROXY proxy-us.intel.com:912";}
if (host == "shwebex.spreadtrum.com") {return "PROXY proxy-us.intel.com:912";}
if (host == "dev.teams.microsoft.com") {return "PROXY proxy-us.intel.com:912";}
if (host == "www.w3.org") {return "PROXY proxy-fm.intel.com:912";}
if (host == "remotedesktop.google.com") {return "PROXY proxy-iboss.intel.com:912";}
if (host == "localhost.ixstack.net") {return "DIRECT";}
if (host == "localhost.intelgeospatial.com") {return "DIRECT";}
if (host == "node-cluster130625-swg.ibosscloud.com") {return "DIRECT";}
if (host == "cdn.odc.officeapps.live.com") {return "PROXY proxy-us.intel.com:912";}
if (dnsDomainIs(host,"outlook.office365.com") || dnsDomainIs(host,"outlook.office.com") || dnsDomainIs(host,"intel-my.sharepoint.com") || dnsDomainIs(host,"intel-files.sharepoint.com") || dnsDomainIs(host,"intel-myfiles.sharepoint.com") || dnsDomainIs(host,"nexus.officeapps.live.com") || dnsDomainIs(host,"autodiscover.intel.mail.onmicrosoft.com") || dnsDomainIs(host,"autodiscover-s.outlook.com") || dnsDomainIs(host,"intel.sharepoint.com") || dnsDomainIs(host,"odc.officeapps.live.com") || dnsDomainIs(host,"nexusrules.officeapps.live.com") || dnsDomainIs(host,"roaming.officeapps.live.com") || dnsDomainIs(host,"roaming.officeapps.live.com") || dnsDomainIs(host,"office15client.microsoft.com") || dnsDomainIs(host,"api.onedrive.com") || dnsDomainIs(host,"teams.microsoft.com") || dnsDomainIs(host,"broadcast.skype.com") || dnsDomainIs(host,".lync.com") || dnsDomainIs(host,".teams.microsoft.com") || dnsDomainIs(host,".broadcast.skype.com") || dnsDomainIs(host,".skypeforbusiness.com")) {return "DIRECT";}
if ((host == "wc1.kontiki.com") || (host == "eu1.kontiki.com") || (host == "ec.kontiki.com") || (host == "ec.live.kontiki.com") || (host == "ec.hls.kontiki.com")) {return "DIRECT";}
if ((host == "amrcmcmg01.intel.com") || (host == "garcmcmg01.intel.com") || (host == "gercmcmg01.intel.com") || (host == "amrcmcmg01.blob.core.windows.net") || (host == "amrcmcmg01.table.core.windows.net") || (host == "garcmcmg01.blob.core.windows.net") || (host == "garcmcmg01.table.core.windows.net") || (host == "gercmcmg01.blob.core.windows.net") || (host == "gercmcmg01.table.core.windows.net") || (host == "40.112.128.213") || (host == "168.63.250.155") || (host == "40.113.66.254")) {return "DIRECT";}
if (host == "syte.mobileye.com") {return "DIRECT";}
return "PROXY proxy.qa.code42.com:3128";
}
