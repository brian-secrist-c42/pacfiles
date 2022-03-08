function FindProxyForURL(url, host)
{
                var lhost = host.toLowerCase();
                host = lhost;
                if (
                                (host == "autodiscover.ll.mit.edu") ||
                                (host == "ll.mit.edu") ||
                                isPlainHostName(host) ||
                                shExpMatch(host, "10.*.*.*") ||
                                dnsDomainIs(host, ".llan") ||
                                dnsDomainIs(host, ".local") ||
                                (url.substring(0,3) == "ftp")
                )
                                return "DIRECT";
                else
                                return "PROXY 172.16.76.12:3128";
}