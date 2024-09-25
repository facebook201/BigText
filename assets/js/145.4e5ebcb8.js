(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{752:function(v,_,t){"use strict";t.r(_);var e=t(30),r=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[_("code",[v._v("HTTP")]),v._v("可以说是前端需要掌握的一块领域，知识点其实很多，写这篇文章的初衷其实也是自己想梳理一下"),_("code",[v._v("HTTP")]),v._v("包含哪些内容，并记录下来，供自己以后学习参考。")]),v._v(" "),_("h3",[v._v("1、HTTP是什么？")]),v._v(" "),_("p",[_("code",[v._v("HTTP")]),v._v("被设计于20世纪90年代初期，是一种可扩展的协议，是应用层的协议。"),_("code",[v._v("HTTP")]),v._v("协议（"),_("code",[v._v("HyperText Transfer Protocol")]),v._v("，超文本传输协议）是因特网上应用最为广泛的一种网络传输协议，所有的WWW文件都必须遵守这个标准。HTTP是一个基于TCP/IP通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）。它是在 Web 上进行数据交换的基础，是一种 "),_("code",[v._v("client-server")]),v._v(" 协议。客户端和服务端通过交换各自的消息进行交互。由像浏览器这样的客户端发出的消息叫做 "),_("code",[v._v("requests")]),v._v("，被服务端响应的消息叫做 "),_("code",[v._v("responses")]),v._v("。")]),v._v(" "),_("h3",[v._v("2、HTTP的组成及其特点？")]),v._v(" "),_("p",[_("code",[v._v("HTTP")]),v._v("由两部分组成，"),_("strong",[v._v("客户端请求消息和服务端响应消息（请求报文和响应报文）")]),v._v(" 。客户端发送一个HTTP请求到服务器的请求消息包括以下格式："),_("strong",[v._v("请求行（"),_("code",[v._v("request line")]),v._v(",包括请求方法、"),_("code",[v._v("url")]),v._v("）、请求头部（"),_("code",[v._v("header")]),v._v("）、空行和请求数据("),_("code",[v._v("queryString")]),v._v(")")]),v._v(" 四个部分组成。HTTP响应也由四个部分组成，分别是："),_("strong",[v._v("状态行、消息报头、空行和响应正文。")])]),v._v(" "),_("p",[_("strong",[v._v("http1.0特点")])]),v._v(" "),_("ul",[_("li",[v._v("1、"),_("strong",[v._v("简单快速：")]),v._v(" 客户向服务器请求服务时，只需传送请求方法和路径（"),_("code",[v._v("url")]),v._v("和"),_("code",[v._v("method")]),v._v("）。由于 "),_("code",[v._v("HTTP")]),v._v(" 协议简单，使得 "),_("code",[v._v("HTTP")]),v._v(" 服务器的程序规模小，因而通信速度很快。")]),v._v(" "),_("li",[v._v("2、"),_("strong",[v._v("灵活： "),_("code",[v._v("HTTP")]),v._v(" 允许传输任意类型的数据对象")]),v._v("。正在传输的类型由 Content-Type 加以标记。")]),v._v(" "),_("li",[v._v("3、"),_("strong",[v._v("无连接：无连接的含义是限制每次链接只处理一个请求")]),v._v("。服务器处理完客户的请求，并收到客户的应答后，即断开链接，采用这种方式可以节省传输时间")]),v._v(" "),_("li",[v._v("4、"),_("strong",[v._v("无状态：")]),v._v(" "),_("code",[v._v("HTTP")]),v._v(" 协议是无状态协议。"),_("strong",[v._v("无状态是指协议对于事物处理没有记忆能力")]),v._v("。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能会导致每次连接传送的数据量增大。")])]),v._v(" "),_("p",[_("strong",[v._v("http1.x特点")])]),v._v(" "),_("ul",[_("li",[v._v("长连接：新增"),_("code",[v._v("Connection字段")]),v._v("，可以设置"),_("code",[v._v("keep-alive")]),v._v("值保持连接不断开。数据传输完成保持"),_("code",[v._v("tcp")]),v._v("连接不断开,继续用这个通道传输数据。")]),v._v(" "),_("li",[v._v("管道化：基于长连接，管道化可以不等第一个请求响应继续发送后面的请求，但是响应的顺序还是按照请求的顺序返回。无法解决对头阻塞的问题。")]),v._v(" "),_("li",[v._v("缓存处理：新增字段"),_("code",[v._v("cache-control")]),v._v("。")]),v._v(" "),_("li",[v._v("断点传输：在上传/下载资源时，如果资源过大，将其分割为多个部分，分别上传/下载，如果遇到网络故障，可以从已经上传/下载好的地方继续请求，不用从头开始，提高效率。是通过在"),_("code",[v._v("HEADER")]),v._v("里面的这个参数实现的。客户端发请求时对应的是 "),_("code",[v._v("Range")]),v._v(" 服务器端响应时对应的是 "),_("code",[v._v("Content-Range")]),v._v("。")])]),v._v(" "),_("p",[_("strong",[v._v("http2特点")])]),v._v(" "),_("ul",[_("li",[v._v("二进制分帧：将所有传输的信息分割为更小的消息和帧,并对它们采用二进制格式的编码。")]),v._v(" "),_("li",[v._v("多路复用：基于二进制分帧，在同一域名下所有访问都是从同一个"),_("code",[v._v("tcp")]),v._v("连接中走，"),_("code",[v._v("http")]),v._v("消息被分解为独立的帧，乱序发送，服务端根据标识符和首部将消息重新组装起来。")]),v._v(" "),_("li",[v._v("头部压缩")]),v._v(" "),_("li",[v._v("服务器推送：服务器可以额外的向客户端推送资源，而无需客户端明确的请求。\n"),_("h3",[v._v("4、HTTP状态码")]),v._v("\n下面列举的是一些可能进程被用到的状态码。")])]),v._v(" "),_("p",[_("strong",[v._v("1XX-消息")])]),v._v(" "),_("p",[v._v("  这一类型的状态码，代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束。")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("状态码")]),v._v(" "),_("th",[v._v("英文意思")]),v._v(" "),_("th",[v._v("解释")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("100")]),v._v(" "),_("td",[v._v("Continue")]),v._v(" "),_("td",[v._v("客户端应当继续发送请求。这个临时响应是用来通知客户端它的部分请求已经被服务器接收，且仍未被拒绝。客户端应当继续发送请求的剩余部分，或者如果请求已经完成，忽略这个响应。")])]),v._v(" "),_("tr",[_("td",[v._v("101")]),v._v(" "),_("td",[v._v("Switching Protocols")]),v._v(" "),_("td",[v._v("服务器已经理解了客户端的请求，并将通过Upgrade 消息头通知客户端采用不同的协议来完成这个请求。只有在切换新的协议更有好处的时候才应该采取类似措施")])]),v._v(" "),_("tr",[_("td",[v._v("102")]),v._v(" "),_("td",[v._v("processing")]),v._v(" "),_("td",[v._v("代表处理将被继续执行")])])])]),v._v(" "),_("p",[_("strong",[v._v("2XX-成功")])]),v._v(" "),_("p",[v._v("  这一类型的状态码，代表请求已成功被服务器接收、理解、并接受。")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("状态码")]),v._v(" "),_("th",[v._v("英文意思")]),v._v(" "),_("th",[v._v("解释")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("200")]),v._v(" "),_("td",[v._v("Ok")]),v._v(" "),_("td",[_("strong",[v._v("请求已成功")]),v._v("，请求所希望的响应头或数据体将随此响应返回。出现此状态码是表示正常状态。")])]),v._v(" "),_("tr",[_("td",[v._v("201")]),v._v(" "),_("td",[v._v("Created")]),v._v(" "),_("td",[_("strong",[v._v("请求已经被实现，而且有一个新的资源已经依据请求的需要而建立")]),v._v("，且其 URI 已经随Location 头信息返回。假如需要的资源无法及时建立的话，应当返回 '202 Accepted'。")])]),v._v(" "),_("tr",[_("td",[v._v("202")]),v._v(" "),_("td",[v._v("Accepted")]),v._v(" "),_("td",[_("strong",[v._v("服务器已接受请求，但尚未处理")]),v._v("。返回202状态码的响应的目的是允许服务器接受其他过程的请求（例如某个每天只执行一次的基于批处理的操作），而不必让客户端一直保持与服务器的连接直到批处理操作全部完成。")])]),v._v(" "),_("tr",[_("td",[v._v("203")]),v._v(" "),_("td",[v._v("Non-Authoritative Information")]),v._v(" "),_("td",[_("strong",[v._v("服务器已成功处理了请求，但返回的实体头部元信息不是在原始服务器上有效的确定集合，而是来自本地或者第三方的拷贝。")])])]),v._v(" "),_("tr",[_("td",[v._v("204")]),v._v(" "),_("td",[v._v("No Content")]),v._v(" "),_("td",[_("strong",[v._v("服务器成功处理了请求，但不需要返回任何实体内容，并且希望返回更新了的元信息。")]),v._v(" 由于204响应被禁止包含任何消息体，因此它始终以消息头后的第一个空行结尾。")])]),v._v(" "),_("tr",[_("td",[v._v("205")]),v._v(" "),_("td",[v._v("Reset Content")]),v._v(" "),_("td",[_("strong",[v._v("服务器成功处理了请求，且没有返回任何内容")]),v._v("。但是与204响应不同，返回此状态码的响应"),_("strong",[v._v("要求请求者重置文档视图")]),v._v("。该响应主要是被用于接受用户输入后，立即重置表单，以便用户能够轻松地开始另一次输入。与204响应一样，该响应也被禁止包含任何消息体，且以消息头后的第一个空行结束。")])]),v._v(" "),_("tr",[_("td",[v._v("206")]),v._v(" "),_("td",[v._v("Partial Content")]),v._v(" "),_("td",[v._v("服务器已经成功处理了部分 GET 请求。类似于 FlashGet 或者迅雷这类的 HTTP下载工具都是使用此类响应实现断点续传或者将一个大文档分解为多个下载段同时下载。")])]),v._v(" "),_("tr",[_("td",[v._v("207")]),v._v(" "),_("td",[v._v("Multi-Status")]),v._v(" "),_("td",[v._v("代表之后的消息体将是一个XML消息，并且可能依照之前子请求数量的不同，包含一系列独立的响应代码。")])])])]),v._v(" "),_("p",[_("strong",[v._v("3XX-重定向")])]),v._v(" "),_("p",[v._v("  这类状态码代表需要客户端采取进一步的操作才能完成请求。通常，这些状态码用来重定向，后续的请求地址（重定向目标）在本次响应的 Location 域中指明。")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("状态码")]),v._v(" "),_("th",[v._v("英文意思")]),v._v(" "),_("th",[v._v("解释")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("300")]),v._v(" "),_("td",[v._v("Multiple Choices")]),v._v(" "),_("td",[_("strong",[v._v("被请求的资源有一系列可供选择的回馈信息")]),v._v("，每个都有自己特定的地址和浏览器驱动的商议信息。用户或浏览器能够自行选择一个首选的地址进行重定向。")])]),v._v(" "),_("tr",[_("td",[v._v("301")]),v._v(" "),_("td",[v._v("Moved Permanently")]),v._v(" "),_("td",[_("strong",[v._v("被请求的资源已永久移动到新位置(一般用于域名的转移)")])])]),v._v(" "),_("tr",[_("td",[v._v("302")]),v._v(" "),_("td",[v._v("Move Temporarily")]),v._v(" "),_("td",[v._v("(一般用于服务器的负载均衡)请求的资源临时从不同的 URI响应请求。"),_("strong",[v._v("由于这样的重定向是临时的，客户端应当继续向原有地址发送以后的请求。")]),v._v(" 如果这不是一个 GET 或者 HEAD 请求，那么浏览器禁止自动进行重定向，除非得到用户的确认。 "),_("strong",[v._v("只有在Cache-Control或Expires中进行了指定的情况下，这个响应才是可缓存的")]),v._v("。")])]),v._v(" "),_("tr",[_("td",[v._v("303")]),v._v(" "),_("td",[v._v("See Other")]),v._v(" "),_("td",[_("strong",[v._v("对应当前请求的响应可以在另一个 URL 上被找到")]),v._v("，而且客户端应当采用 GET 的方式访问那个资源。这个方法的存在主要是为了允许由脚本激活的POST请求输出重定向到一个新的资源。这个新的 URI 不是原始资源的替代引用。同时，303响应禁止被缓存。当然，第二个请求（重定向）可能被缓存。")])]),v._v(" "),_("tr",[_("td",[v._v("304")]),v._v(" "),_("td",[v._v("Not Modified")]),v._v(" "),_("td",[_("strong",[v._v("如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码")]),v._v("。304响应禁止包含消息体，因此始终以消息头后的第一个空行结尾。 该响应必须包含以下的头信息：Date、ETag 和/或 Content-Location、Expires, Cache-Control，和/或Vary")])]),v._v(" "),_("tr",[_("td",[v._v("305")]),v._v(" "),_("td",[v._v("Use Proxy")]),v._v(" "),_("td",[v._v("被请求的资源必须通过指定的代理才能被访问")])])])]),v._v(" "),_("p",[_("strong",[v._v("4XX-请求错误")])]),v._v(" "),_("p",[v._v("  这类的状态码代表了客户端看起来可能发生了错误，妨碍了服务器的处理。")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("状态码")]),v._v(" "),_("th",[v._v("英文意思")]),v._v(" "),_("th",[v._v("解释")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("400")]),v._v(" "),_("td",[v._v("Bad Request")]),v._v(" "),_("td",[v._v("1、语义有误，当前请求无法被服务器理解。2、请求参数有误。")])]),v._v(" "),_("tr",[_("td",[v._v("401")]),v._v(" "),_("td",[v._v("Unauthorized")]),v._v(" "),_("td",[v._v("当前请求需要用户验证。该响应必须包含一个适用于被请求资源的 WWW-Authenticate 信息头用以询问用户信息。")])]),v._v(" "),_("tr",[_("td",[v._v("403")]),v._v(" "),_("td",[v._v("Forbidden")]),v._v(" "),_("td",[v._v("服务器已经理解请求，但是拒绝执行它。")])]),v._v(" "),_("tr",[_("td",[v._v("404")]),v._v(" "),_("td",[v._v("Not Found")]),v._v(" "),_("td",[v._v("请求失败，请求所希望得到的资源未被在服务器上发现。")])]),v._v(" "),_("tr",[_("td",[v._v("405")]),v._v(" "),_("td",[v._v("Method Not Allowed")]),v._v(" "),_("td",[v._v("请求行中指定的请求方法不能被用于请求相应的资源。")])]),v._v(" "),_("tr",[_("td",[v._v("406")]),v._v(" "),_("td",[v._v("Not Acceptable")]),v._v(" "),_("td",[_("strong",[v._v("请求的资源的内容特性无法满足请求头中的条件，因而无法生成响应实体。")])])]),v._v(" "),_("tr",[_("td",[v._v("407")]),v._v(" "),_("td",[v._v("Proxy Authentication Required")]),v._v(" "),_("td",[v._v("客户端必须在代理服务器上进行身份验证。代理服务器必须返回一个 Proxy-Authenticate 用以进行身份询问。")])]),v._v(" "),_("tr",[_("td",[v._v("408")]),v._v(" "),_("td",[v._v("Request Timeout")]),v._v(" "),_("td",[v._v("请求超时。客户端没有在服务器预备等待的时间内完成一个请求的发送。客户端可以随时再次提交这一请求而无需进行任何更改。")])]),v._v(" "),_("tr",[_("td",[v._v("409")]),v._v(" "),_("td",[v._v("Method Not Allowed")]),v._v(" "),_("td",[v._v("由于和被请求的资源的当前状态之间存在冲突，请求无法完成。用户被认为能够解决冲突，并且会重新提交新的请求。")])]),v._v(" "),_("tr",[_("td",[v._v("411")]),v._v(" "),_("td",[v._v("Length Required")]),v._v(" "),_("td",[v._v("服务器拒绝在没有定义 Content-Length 头的情况下接受请求。在添加了表明请求消息体长度的有效 Content-Length 头之后，客户端可以再次提交该请求。")])]),v._v(" "),_("tr",[_("td",[v._v("413")]),v._v(" "),_("td",[v._v("Request Entity Too Large")]),v._v(" "),_("td",[v._v("服务器拒绝处理当前请求，因为该请求提交的实体数据大小超过了服务器愿意或者能够处理的范围。")])]),v._v(" "),_("tr",[_("td",[v._v("414")]),v._v(" "),_("td",[v._v("Request-URI Too Long")]),v._v(" "),_("td",[v._v("请求的URI 长度超过了服务器能够解释的长度，因此服务器拒绝对该请求提供服务。这比较少见，通常的情况包括："),_("strong",[v._v("1、本应使用POST方法的表单提交变成了GET方法，导致查询字符串（Query String）过长。2、重定向URI “黑洞”，例如每次重定向把旧的 URI 作为新的 URI 的一部分，导致在若干次重定向后 URI 超长。")])])]),v._v(" "),_("tr",[_("td",[v._v("415")]),v._v(" "),_("td",[v._v("Unsupported Media Type")]),v._v(" "),_("td",[v._v("对于当前请求的方法和所请求的资源，请求中提交的实体并不是服务器中所支持的格式，因此请求被拒绝。")])])])]),v._v(" "),_("p",[_("strong",[v._v("5XX-服务器错误")])]),v._v(" "),_("p",[v._v("  这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("状态码")]),v._v(" "),_("th",[v._v("英文意思")]),v._v(" "),_("th",[v._v("解释")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("500")]),v._v(" "),_("td",[v._v("Internal Server Error")]),v._v(" "),_("td",[v._v("一般来说，这个问题都会在服务器端的源代码出现错误时出现。")])]),v._v(" "),_("tr",[_("td",[v._v("501")]),v._v(" "),_("td",[v._v("Not Implemented")]),v._v(" "),_("td",[v._v("服务器无法识别请求的方法，并且无法支持其对任何资源的请求。")])]),v._v(" "),_("tr",[_("td",[v._v("502")]),v._v(" "),_("td",[v._v("Bad Gateway")]),v._v(" "),_("td",[v._v("作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。")])]),v._v(" "),_("tr",[_("td",[v._v("503")]),v._v(" "),_("td",[v._v("Service Unavailable")]),v._v(" "),_("td",[v._v("由于临时的服务器维护或者过载，服务器当前无法处理请求。注意：503状态码的存在并不意味着服务器在过载的时候必须使用它。某些服务器只不过是希望拒绝客户端的连接。")])]),v._v(" "),_("tr",[_("td",[v._v("504")]),v._v(" "),_("td",[v._v("Gateway Timeout")]),v._v(" "),_("td",[v._v("作为网关或者代理工作的服务器尝试执行请求时，未能及时从上游服务器（URI标识出的服务器，例如HTTP、FTP、LDAP）或者辅助服务器（例如DNS）收到响应。")])]),v._v(" "),_("tr",[_("td",[v._v("505")]),v._v(" "),_("td",[v._v("HTTP Version Not Supported")]),v._v(" "),_("td",[v._v("服务器不支持，或者拒绝支持在请求中使用的 HTTP 版本")])]),v._v(" "),_("tr",[_("td",[v._v("506")]),v._v(" "),_("td",[v._v("Use Proxy")]),v._v(" "),_("td",[v._v("被请求的资源必须通过指定的代理才能被访问")])])])]),v._v(" "),_("h3",[v._v("10、http2的多路复用 ")]),v._v(" "),_("ul",[_("li",[v._v("HTTP2采用二进制传输，取代了"),_("code",[v._v("HTTTP1.x")]),v._v("的文本格式，二进制格式解析更高效。")]),v._v(" "),_("li",[v._v("多路复用替代了"),_("code",[v._v("HTTP1.x")]),v._v("的序列和阻赛机制，所有的相同域名请求都通过同一个"),_("code",[v._v("TCP")]),v._v("连接并发完成。")]),v._v(" "),_("li",[_("code",[v._v("HTTP2")]),v._v("同域名下所有通信都在单个连接上完成，消除了因多个"),_("code",[v._v("TCP")]),v._v("连接而带来的延时和内存消耗。单个连接上可以并行交错的请求和响应，之间互不干扰。")])]),v._v(" "),_("p",[v._v("参考文档："),_("br"),v._v(" "),_("a",{attrs:{href:"https://juejin.im/post/5a1d4e546fb9a0450f21af23",target:"_blank",rel:"noopener noreferrer"}},[v._v("1、HTTP----HTTP缓存机制"),_("OutboundLink")],1),_("br"),v._v(" "),_("a",{attrs:{href:"https://juejin.im/post/5a0ce1d95188253e24708454",target:"_blank",rel:"noopener noreferrer"}},[v._v("2、程序员都该懂点 HTTP"),_("OutboundLink")],1),_("br"),v._v(" "),_("a",{attrs:{href:"https://aotu.io/notes/2016/09/22/http-caching/?o2src=juejin&o2layout=compat",target:"_blank",rel:"noopener noreferrer"}},[v._v("3、HTTP 缓存"),_("OutboundLink")],1),_("br"),v._v(" "),_("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ",target:"_blank",rel:"noopener noreferrer"}},[v._v("4、LTTP缓存-MDN"),_("OutboundLink")],1),_("br"),v._v(" "),_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI3NzIzMzg3Mw==&mid=100000054&idx=1&sn=71f6c214f3833d9ca20b9f7dcd9d33e4#rd",target:"_blank",rel:"noopener noreferrer"}},[v._v("5、99%的人都理解错了HTTP中GET与POST的区别"),_("OutboundLink")],1),_("br"),v._v(" "),_("a",{attrs:{href:"https://muyiy.vip/question/network/117.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("6、介绍下 http1.0、1.1、2.0 协议的区别？"),_("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=r.exports}}]);