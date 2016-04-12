var searchIndex = {};
searchIndex['dns_parser'] = {"items":[[3,"Question","dns_parser","A parsed chunk of data in the Query section of the packet",null,null],[12,"qname","","",0,null],[12,"qtype","","",0,null],[12,"qclass","","",0,null],[3,"ResourceRecord","","A single DNS record",null,null],[12,"name","","",1,null],[12,"cls","","",1,null],[12,"ttl","","",1,null],[12,"data","","",1,null],[3,"Packet","","Parsed DNS packet",null,null],[12,"header","","",2,null],[12,"questions","","",2,null],[12,"answers","","",2,null],[12,"nameservers","","",2,null],[12,"additional","","",2,null],[3,"Name","","The DNS name as stored in the original packet",null,null],[12,"labels","","",3,null],[12,"original","","This is the original buffer size. The compressed names in original\nare calculated in this buffer",3,null],[3,"Header","","Represents parsed header of the packet",null,null],[12,"id","","",4,null],[12,"query","","",4,null],[12,"opcode","","",4,null],[12,"authoritative","","",4,null],[12,"truncated","","",4,null],[12,"recursion_desired","","",4,null],[12,"recursion_available","","",4,null],[12,"response_code","","",4,null],[12,"questions","","",4,null],[12,"answers","","",4,null],[12,"nameservers","","",4,null],[12,"additional","","",4,null],[3,"Builder","","Allows to build a DNS packet",null,null],[12,"buf","","",5,null],[4,"Type","","The TYPE value according to RFC 1035",null,null],[13,"A","","a host addresss",6,null],[13,"NS","","an authoritative name server",6,null],[13,"MF","","a mail forwarder (Obsolete - use MX)",6,null],[13,"CNAME","","the canonical name for an alias",6,null],[13,"SOA","","marks the start of a zone of authority",6,null],[13,"MB","","a mailbox domain name (EXPERIMENTAL)",6,null],[13,"MG","","a mail group member (EXPERIMENTAL)",6,null],[13,"MR","","a mail rename domain name (EXPERIMENTAL)",6,null],[13,"NULL","","a null RR (EXPERIMENTAL)",6,null],[13,"WKS","","a well known service description",6,null],[13,"PTR","","a domain name pointer",6,null],[13,"HINFO","","host information",6,null],[13,"MINFO","","mailbox or mail list information",6,null],[13,"MX","","mail exchange",6,null],[13,"TXT","","text strings",6,null],[13,"AAAA","","IPv6 host address (RFC 2782)",6,null],[13,"SRV","","service record (RFC 2782)",6,null],[13,"OPT","","EDNS0 options (RFC 6891)",6,null],[4,"QueryType","","The QTYPE value according to RFC 1035",null,null],[13,"A","","a host addresss",7,null],[13,"NS","","an authoritative name server",7,null],[13,"MF","","a mail forwarder (Obsolete - use MX)",7,null],[13,"CNAME","","the canonical name for an alias",7,null],[13,"SOA","","marks the start of a zone of authority",7,null],[13,"MB","","a mailbox domain name (EXPERIMENTAL)",7,null],[13,"MG","","a mail group member (EXPERIMENTAL)",7,null],[13,"MR","","a mail rename domain name (EXPERIMENTAL)",7,null],[13,"NULL","","a null RR (EXPERIMENTAL)",7,null],[13,"WKS","","a well known service description",7,null],[13,"PTR","","a domain name pointer",7,null],[13,"HINFO","","host information",7,null],[13,"MINFO","","mailbox or mail list information",7,null],[13,"MX","","mail exchange",7,null],[13,"TXT","","text strings",7,null],[13,"AAAA","","IPv6 host address (RFC 2782)",7,null],[13,"SRV","","service record (RFC 2782)",7,null],[13,"AXFR","","A request for a transfer of an entire zone",7,null],[13,"MAILB","","A request for mailbox-related records (MB, MG or MR)",7,null],[13,"MAILA","","A request for mail agent RRs (Obsolete - see MX)",7,null],[13,"All","","A request for all records",7,null],[4,"Class","","The CLASS value according to RFC 1035",null,null],[13,"IN","","the Internet",8,null],[13,"CS","","the CSNET class (Obsolete - used only for examples in some obsolete\nRFCs)",8,null],[13,"CH","","the CHAOS class",8,null],[13,"HS","","Hesiod [Dyer 87]",8,null],[4,"QueryClass","","The QCLASS value according to RFC 1035",null,null],[13,"IN","","the Internet",9,null],[13,"CS","","the CSNET class (Obsolete - used only for examples in some obsolete\nRFCs)",9,null],[13,"CH","","the CHAOS class",9,null],[13,"HS","","Hesiod [Dyer 87]",9,null],[13,"Any","","Any class",9,null],[4,"ResponseCode","","The RCODE value according to RFC 1035",null,null],[13,"NoError","","",10,null],[13,"FormatError","","",10,null],[13,"ServerFailure","","",10,null],[13,"NameError","","",10,null],[13,"NotImplemented","","",10,null],[13,"Refused","","",10,null],[13,"Reserved","","",10,null],[4,"Opcode","","The OPCODE value according to RFC 1035",null,null],[13,"StandardQuery","","",11,null],[13,"InverseQuery","","",11,null],[13,"ServerStatusRequest","","",11,null],[13,"Reserved","","",11,null],[4,"Error","","Error parsing DNS packet",null,null],[13,"HeaderTooShort","","",12,null],[13,"UnexpectedEOF","","",12,null],[13,"WrongRdataLength","","",12,null],[13,"ReservedBitsAreNonZero","","",12,null],[13,"UnknownLabelFormat","","",12,null],[13,"InvalidQueryType","","",12,null],[13,"InvalidQueryClass","","",12,null],[13,"InvalidType","","",12,null],[13,"InvalidClass","","",12,null],[13,"LabelIsNotAscii","","",12,null],[13,"WrongState","","",12,null],[4,"RRData","","The enumeration that represents known types of DNS resource records data",null,null],[13,"CNAME","","",13,null],[13,"A","","",13,null],[13,"AAAA","","",13,null],[13,"SRV","","",13,null],[12,"priority","dns_parser::RRData","",13,null],[12,"weight","","",13,null],[12,"port","","",13,null],[12,"target","","",13,null],[13,"MX","dns_parser","",13,null],[12,"preference","dns_parser::RRData","",13,null],[12,"exchange","","",13,null],[13,"Unknown","dns_parser","",13,null],[0,"enums","","",null,null],[4,"Type","dns_parser::enums","The TYPE value according to RFC 1035",null,null],[13,"A","","a host addresss",6,null],[13,"NS","","an authoritative name server",6,null],[13,"MF","","a mail forwarder (Obsolete - use MX)",6,null],[13,"CNAME","","the canonical name for an alias",6,null],[13,"SOA","","marks the start of a zone of authority",6,null],[13,"MB","","a mailbox domain name (EXPERIMENTAL)",6,null],[13,"MG","","a mail group member (EXPERIMENTAL)",6,null],[13,"MR","","a mail rename domain name (EXPERIMENTAL)",6,null],[13,"NULL","","a null RR (EXPERIMENTAL)",6,null],[13,"WKS","","a well known service description",6,null],[13,"PTR","","a domain name pointer",6,null],[13,"HINFO","","host information",6,null],[13,"MINFO","","mailbox or mail list information",6,null],[13,"MX","","mail exchange",6,null],[13,"TXT","","text strings",6,null],[13,"AAAA","","IPv6 host address (RFC 2782)",6,null],[13,"SRV","","service record (RFC 2782)",6,null],[13,"OPT","","EDNS0 options (RFC 6891)",6,null],[4,"QueryType","","The QTYPE value according to RFC 1035",null,null],[13,"A","","a host addresss",7,null],[13,"NS","","an authoritative name server",7,null],[13,"MF","","a mail forwarder (Obsolete - use MX)",7,null],[13,"CNAME","","the canonical name for an alias",7,null],[13,"SOA","","marks the start of a zone of authority",7,null],[13,"MB","","a mailbox domain name (EXPERIMENTAL)",7,null],[13,"MG","","a mail group member (EXPERIMENTAL)",7,null],[13,"MR","","a mail rename domain name (EXPERIMENTAL)",7,null],[13,"NULL","","a null RR (EXPERIMENTAL)",7,null],[13,"WKS","","a well known service description",7,null],[13,"PTR","","a domain name pointer",7,null],[13,"HINFO","","host information",7,null],[13,"MINFO","","mailbox or mail list information",7,null],[13,"MX","","mail exchange",7,null],[13,"TXT","","text strings",7,null],[13,"AAAA","","IPv6 host address (RFC 2782)",7,null],[13,"SRV","","service record (RFC 2782)",7,null],[13,"AXFR","","A request for a transfer of an entire zone",7,null],[13,"MAILB","","A request for mailbox-related records (MB, MG or MR)",7,null],[13,"MAILA","","A request for mail agent RRs (Obsolete - see MX)",7,null],[13,"All","","A request for all records",7,null],[4,"Class","","The CLASS value according to RFC 1035",null,null],[13,"IN","","the Internet",8,null],[13,"CS","","the CSNET class (Obsolete - used only for examples in some obsolete\nRFCs)",8,null],[13,"CH","","the CHAOS class",8,null],[13,"HS","","Hesiod [Dyer 87]",8,null],[4,"QueryClass","","The QCLASS value according to RFC 1035",null,null],[13,"IN","","the Internet",9,null],[13,"CS","","the CSNET class (Obsolete - used only for examples in some obsolete\nRFCs)",9,null],[13,"CH","","the CHAOS class",9,null],[13,"HS","","Hesiod [Dyer 87]",9,null],[13,"Any","","Any class",9,null],[4,"Opcode","","The OPCODE value according to RFC 1035",null,null],[13,"StandardQuery","","",11,null],[13,"InverseQuery","","",11,null],[13,"ServerStatusRequest","","",11,null],[13,"Reserved","","",11,null],[4,"ResponseCode","","The RCODE value according to RFC 1035",null,null],[13,"NoError","","",10,null],[13,"FormatError","","",10,null],[13,"ServerFailure","","",10,null],[13,"NameError","","",10,null],[13,"NotImplemented","","",10,null],[13,"Refused","","",10,null],[13,"Reserved","","",10,null],[11,"clone","dns_parser","",6,{"inputs":[{"name":"type"}],"output":{"name":"type"}}],[11,"assert_receiver_is_total_eq","","",6,null],[11,"eq","","",6,{"inputs":[{"name":"type"},{"name":"type"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"type"},{"name":"type"}],"output":{"name":"bool"}}],[11,"fmt","","",6,{"inputs":[{"name":"type"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"querytype"}],"output":{"name":"querytype"}}],[11,"assert_receiver_is_total_eq","","",7,null],[11,"eq","","",7,{"inputs":[{"name":"querytype"},{"name":"querytype"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"querytype"},{"name":"querytype"}],"output":{"name":"bool"}}],[11,"fmt","","",7,{"inputs":[{"name":"querytype"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",8,{"inputs":[{"name":"class"}],"output":{"name":"class"}}],[11,"assert_receiver_is_total_eq","","",8,null],[11,"eq","","",8,{"inputs":[{"name":"class"},{"name":"class"}],"output":{"name":"bool"}}],[11,"ne","","",8,{"inputs":[{"name":"class"},{"name":"class"}],"output":{"name":"bool"}}],[11,"fmt","","",8,{"inputs":[{"name":"class"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",9,{"inputs":[{"name":"queryclass"}],"output":{"name":"queryclass"}}],[11,"assert_receiver_is_total_eq","","",9,null],[11,"eq","","",9,{"inputs":[{"name":"queryclass"},{"name":"queryclass"}],"output":{"name":"bool"}}],[11,"ne","","",9,{"inputs":[{"name":"queryclass"},{"name":"queryclass"}],"output":{"name":"bool"}}],[11,"fmt","","",9,{"inputs":[{"name":"queryclass"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",11,{"inputs":[{"name":"opcode"}],"output":{"name":"opcode"}}],[11,"assert_receiver_is_total_eq","","",11,null],[11,"eq","","",11,{"inputs":[{"name":"opcode"},{"name":"opcode"}],"output":{"name":"bool"}}],[11,"ne","","",11,{"inputs":[{"name":"opcode"},{"name":"opcode"}],"output":{"name":"bool"}}],[11,"fmt","","",11,{"inputs":[{"name":"opcode"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",10,{"inputs":[{"name":"responsecode"}],"output":{"name":"responsecode"}}],[11,"assert_receiver_is_total_eq","","",10,null],[11,"eq","","",10,{"inputs":[{"name":"responsecode"},{"name":"responsecode"}],"output":{"name":"bool"}}],[11,"ne","","",10,{"inputs":[{"name":"responsecode"},{"name":"responsecode"}],"output":{"name":"bool"}}],[11,"fmt","","",10,{"inputs":[{"name":"responsecode"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",11,{"inputs":[{"name":"opcode"},{"name":"u16"}],"output":{"name":"opcode"}}],[11,"into","","",11,{"inputs":[{"name":"opcode"}],"output":{"name":"u16"}}],[11,"from","","",10,{"inputs":[{"name":"responsecode"},{"name":"u8"}],"output":{"name":"responsecode"}}],[11,"into","","",10,{"inputs":[{"name":"responsecode"}],"output":{"name":"u8"}}],[11,"parse","","",7,{"inputs":[{"name":"querytype"},{"name":"u16"}],"output":{"name":"result"}}],[11,"parse","","",9,{"inputs":[{"name":"queryclass"},{"name":"u16"}],"output":{"name":"result"}}],[11,"parse","","",6,{"inputs":[{"name":"type"},{"name":"u16"}],"output":{"name":"result"}}],[11,"parse","","",8,{"inputs":[{"name":"class"},{"name":"u16"}],"output":{"name":"result"}}],[0,"structs","","",null,null],[3,"Packet","dns_parser::structs","Parsed DNS packet",null,null],[12,"header","","",2,null],[12,"questions","","",2,null],[12,"answers","","",2,null],[12,"nameservers","","",2,null],[12,"additional","","",2,null],[3,"Question","","A parsed chunk of data in the Query section of the packet",null,null],[12,"qname","","",0,null],[12,"qtype","","",0,null],[12,"qclass","","",0,null],[3,"ResourceRecord","","A single DNS record",null,null],[12,"name","","",1,null],[12,"cls","","",1,null],[12,"ttl","","",1,null],[12,"data","","",1,null],[11,"fmt","dns_parser","",2,{"inputs":[{"name":"packet"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"question"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"resourcerecord"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"name","","",null,null],[3,"Name","dns_parser::name","The DNS name as stored in the original packet",null,null],[12,"labels","","",3,null],[12,"original","","This is the original buffer size. The compressed names in original\nare calculated in this buffer",3,null],[11,"clone","dns_parser","",3,{"inputs":[{"name":"name"}],"output":{"name":"name"}}],[11,"fmt","","",3,{"inputs":[{"name":"name"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"scan","","",3,null],[11,"byte_len","","",3,{"inputs":[{"name":"name"}],"output":{"name":"usize"}}],[11,"fmt","","",3,{"inputs":[{"name":"name"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"parser","","",null,null],[11,"parse","","",2,null],[0,"error","","",null,null],[4,"Error","dns_parser::error","Error parsing DNS packet",null,null],[13,"HeaderTooShort","","",12,null],[13,"UnexpectedEOF","","",12,null],[13,"WrongRdataLength","","",12,null],[13,"ReservedBitsAreNonZero","","",12,null],[13,"UnknownLabelFormat","","",12,null],[13,"InvalidQueryType","","",12,null],[13,"InvalidQueryClass","","",12,null],[13,"InvalidType","","",12,null],[13,"InvalidClass","","",12,null],[13,"LabelIsNotAscii","","",12,null],[13,"WrongState","","",12,null],[11,"fmt","dns_parser","",12,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",12,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",12,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"cause","","",12,{"inputs":[{"name":"error"}],"output":{"name":"option"}}],[0,"header","","",null,null],[3,"Header","dns_parser::header","Represents parsed header of the packet",null,null],[12,"id","","",4,null],[12,"query","","",4,null],[12,"opcode","","",4,null],[12,"authoritative","","",4,null],[12,"truncated","","",4,null],[12,"recursion_desired","","",4,null],[12,"recursion_available","","",4,null],[12,"response_code","","",4,null],[12,"questions","","",4,null],[12,"answers","","",4,null],[12,"nameservers","","",4,null],[12,"additional","","",4,null],[0,"flag","","",null,null],[17,"QUERY","dns_parser::header::flag","",null,null],[17,"OPCODE_MASK","","",null,null],[17,"AUTHORITATIVE","","",null,null],[17,"TRUNCATED","","",null,null],[17,"RECURSION_DESIRED","","",null,null],[17,"RECURSION_AVAILABLE","","",null,null],[17,"RESERVED_MASK","","",null,null],[17,"RESPONSE_CODE_MASK","","",null,null],[11,"clone","dns_parser","",4,{"inputs":[{"name":"header"}],"output":{"name":"header"}}],[11,"assert_receiver_is_total_eq","","",4,null],[11,"eq","","",4,{"inputs":[{"name":"header"},{"name":"header"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"header"},{"name":"header"}],"output":{"name":"bool"}}],[11,"fmt","","",4,{"inputs":[{"name":"header"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"parse","","",4,null],[11,"write","","Write a header to a buffer slice",4,null],[11,"set_truncated","","",4,null],[11,"size","","",4,{"inputs":[{"name":"header"}],"output":{"name":"usize"}}],[0,"rrdata","","",null,null],[4,"RRData","dns_parser::rrdata","The enumeration that represents known types of DNS resource records data",null,null],[13,"CNAME","","",13,null],[13,"A","","",13,null],[13,"AAAA","","",13,null],[13,"SRV","","",13,null],[12,"priority","dns_parser::rrdata::RRData","",13,null],[12,"weight","","",13,null],[12,"port","","",13,null],[12,"target","","",13,null],[13,"MX","dns_parser::rrdata","",13,null],[12,"preference","dns_parser::rrdata::RRData","",13,null],[12,"exchange","","",13,null],[13,"Unknown","dns_parser::rrdata","",13,null],[11,"fmt","dns_parser","",13,{"inputs":[{"name":"rrdata"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"parse","","",13,null],[0,"builder","","",null,null],[3,"Builder","dns_parser::builder","Allows to build a DNS packet",null,null],[12,"buf","","",5,null],[11,"new_query","dns_parser","Creates a new query",5,{"inputs":[{"name":"builder"},{"name":"u16"},{"name":"bool"}],"output":{"name":"builder"}}],[11,"new_response","","Creates a new response",5,{"inputs":[{"name":"builder"},{"name":"u16"},{"name":"responsecode"},{"name":"bool"},{"name":"bool"},{"name":"bool"}],"output":{"name":"builder"}}],[11,"add_question","","Adds a question to the packet",5,{"inputs":[{"name":"builder"},{"name":"str"},{"name":"querytype"},{"name":"queryclass"}],"output":{"name":"builder"}}],[11,"add_answer","","Adds an answer to the packet",5,{"inputs":[{"name":"builder"},{"name":"str"},{"name":"type"},{"name":"class"},{"name":"u32"},{"name":"u32"}],"output":{"name":"builder"}}],[11,"write_name","","",5,{"inputs":[{"name":"builder"},{"name":"str"}],"output":null}],[11,"build","","Returns the final packet",5,{"inputs":[{"name":"builder"}],"output":{"name":"result"}}]],"paths":[[3,"Question"],[3,"ResourceRecord"],[3,"Packet"],[3,"Name"],[3,"Header"],[3,"Builder"],[4,"Type"],[4,"QueryType"],[4,"Class"],[4,"QueryClass"],[4,"ResponseCode"],[4,"Opcode"],[4,"Error"],[4,"RRData"]]};
initSearch(searchIndex);
