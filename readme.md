#Simple NodeJS DNS Server

Requirements:

* nodejs needs to be installed. On debian, use aptitude install nodejs or download via nodejs.org
* native-dns. This can be installed using npm install on the command line, assuming you have npm installed (http://npmjs.org)

Running the test:

    #Terminal 1 - Type :-
    ~> cd /path/to/Simple-NodeJS-DNS-Server
    ~> node dns-server-test.js
    #output
    Listening on 53
    
&nbsp;

    #Terminal 2 - Type :-
    ~> dig www.facebook.com @127.0.0.1
    ~> dig test.dns @127.0.0.1
    
    #output
    ; <<>> DiG 9.8.1-P1 <<>> test.dns @127.0.0.1
    ;; global options: +cmd
    ;; Got answer:
    ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 3435
    ;; flags: qr rd; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 0
    ;; WARNING: recursion requested but not available

    ;; QUESTION SECTION:
    ;test.dns.			IN	A

    ;; ANSWER SECTION:
    test.dns.		30	IN	A	127.1.2.1
    test.dns.		30	IN	A	127.1.2.2
    test.dns.		30	IN	A	127.1.2.3

    ;; Query time: 5 msec
    ;; SERVER: 127.0.0.1#53(127.0.0.1)
    ;; WHEN: Fri Aug 24 01:44:00 2012
    ;; MSG SIZE  rcvd: 74
    
