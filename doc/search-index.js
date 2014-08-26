var searchIndex = {};
searchIndex['iron'] = {"items":[[0,"","iron","The main crate for the Iron library."],[1,"Request","","The `Request` given to all `Middleware`."],[11,"url","","The requested URL.",0],[11,"remote_addr","","The originating address of the request.",0],[11,"headers","","The request headers.",0],[11,"body","","The request body.",0],[11,"method","","The request method.",0],[11,"extensions","","Extensible storage for data passed between middleware.",0],[1,"Url","","HTTP/HTTPS URL type for Iron."],[11,"scheme","","The lower-cased scheme of the URL, typically \"http\" or \"https\".",1],[11,"host","","The host field of the URL, probably a domain.",1],[11,"port","","The connection port.",1],[11,"path","","The URL path, the resource to be accessed.",1],[11,"username","","The URL username field, from the userinfo section of the URL.",1],[11,"password","","The URL password field, from the userinfo section of the URL.",1],[11,"query","","The URL query string.",1],[11,"fragment","","The URL fragment.",1],[1,"Response","","The response representation given to `Middleware`"],[11,"body","","The body of the response.",2],[11,"headers","","The headers of the response.",2],[11,"status","","The response status-code.",2],[11,"extensions","","A TypeMap to be used as an extensible storage for data\nassociated with this Response.",2],[1,"ChainBuilder","","The default Chain used in Iron."],[1,"Iron","","The primary entrance point to `Iron`, a `struct` to instantiate a new server."],[11,"handler","","Iron contains a `Handler`, which it uses to create responses for client\nrequests.",3],[4,"IronResult","",""],[6,"BeforeMiddleware","","`BeforeMiddleware` are fired before a `Handler` is called inside of a Chain."],[9,"before","","Do whatever work this middleware should do with a `Request` object.",4],[10,"catch","","Try to `catch` an error thrown by this Middleware or a previous `BeforeMiddleware`.",4],[6,"AfterMiddleware","","`AfterMiddleware` are fired after a `Handler` is called inside of a Chain."],[9,"after","","Do whatever work this middleware needs to do with both a `Request` and `Response` objects.",5],[10,"catch","","Try to catch an error thrown by previous `AfterMiddleware`, the `Handler`, or a previous\n`BeforeMiddleware`.",5],[6,"AroundMiddleware","","AroundMiddleware are used to wrap and replace the `Handler` in a Chain."],[9,"with_handler","","Incorporate another `Handler` into this `AroundMiddleware`.",6],[6,"Handler","","`Handler`s are responsible for handling requests by creating Responses from Requests."],[9,"call","","Produce a `Response` from a Request, with the possibility of error.",7],[10,"catch","","If `Handler`'s call method produces an Err, then this method is called\nto produce a `Response` and possibly handle the error.",7],[6,"Chain","","Chain's hold `BeforeMiddleware`, a `Handler`, and `AfterMiddleware` and are responsible\nfor correctly dispatching a `Request` through them."],[9,"new","","Create a new Chain from a `Handler`.",8],[9,"link","","Link both a before and after middleware to the chain at once.",8],[9,"link_before","","Link a `BeforeMiddleware` to the Chain.",8],[9,"link_after","","Link a `AfterMiddleware` to the Chain.",8],[9,"around","","Wrap the Chain's `Handler` using an AroundMiddleware.",8],[10,"new","typemap","Create a new, empty TypeMap.",9],[10,"insert","","Insert a value into the map with a specified key type.",9],[10,"find","","Find a value in the map and get a reference to it.",9],[10,"find_mut","","Find a value in the map and get a mutable reference to it.",9],[10,"contains","","Check if a key has an associated value stored in the map.",9],[10,"remove","","Remove a value from the map.",9],[10,"len","","",9],[10,"is_empty","","",9],[10,"clear","","",9],[1,"TypeMap","iron","A map keyed by types."],[0,"status","",""],[2,"Status","iron::status","HTTP status code"],[12,"Continue","","",10],[12,"SwitchingProtocols","","",10],[12,"Processing","","",10],[12,"Ok","","",10],[12,"Created","","",10],[12,"Accepted","","",10],[12,"NonAuthoritativeInformation","","",10],[12,"NoContent","","",10],[12,"ResetContent","","",10],[12,"PartialContent","","",10],[12,"MultiStatus","","",10],[12,"AlreadyReported","","",10],[12,"ImUsed","","",10],[12,"MultipleChoices","","",10],[12,"MovedPermanently","","",10],[12,"Found","","",10],[12,"SeeOther","","",10],[12,"NotModified","","",10],[12,"UseProxy","","",10],[12,"SwitchProxy","","",10],[12,"TemporaryRedirect","","",10],[12,"PermanentRedirect","","",10],[12,"BadRequest","","",10],[12,"Unauthorized","","",10],[12,"PaymentRequired","","",10],[12,"Forbidden","","",10],[12,"NotFound","","",10],[12,"MethodNotAllowed","","",10],[12,"NotAcceptable","","",10],[12,"ProxyAuthenticationRequired","","",10],[12,"RequestTimeout","","",10],[12,"Conflict","","",10],[12,"Gone","","",10],[12,"LengthRequired","","",10],[12,"PreconditionFailed","","",10],[12,"RequestEntityTooLarge","","",10],[12,"RequestUriTooLong","","",10],[12,"UnsupportedMediaType","","",10],[12,"RequestedRangeNotSatisfiable","","",10],[12,"ExpectationFailed","","",10],[12,"ImATeapot","","",10],[12,"AuthenticationTimeout","","",10],[12,"UnprocessableEntity","","",10],[12,"Locked","","",10],[12,"FailedDependency","","",10],[12,"MethodFailure","","",10],[12,"UnorderedCollection","","",10],[12,"UpgradeRequired","","",10],[12,"PreconditionRequired","","",10],[12,"TooManyRequests","","",10],[12,"RequestHeaderFieldsTooLarge","","",10],[12,"UnavailableForLegalReasons","","",10],[12,"InternalServerError","","",10],[12,"NotImplemented","","",10],[12,"BadGateway","","",10],[12,"ServiceUnavailable","","",10],[12,"GatewayTimeout","","",10],[12,"HttpVersionNotSupported","","",10],[12,"VariantAlsoNegotiates","","",10],[12,"InsufficientStorage","","",10],[12,"LoopDetected","","",10],[12,"NotExtended","","",10],[12,"NetworkAuthenticationRequired","","",10],[12,"UnregisteredStatus","","",10],[0,"method","iron",""],[2,"Method","iron::method","HTTP methods, as defined in RFC 2616, §5.1.1."],[12,"Options","","",11],[12,"Get","","",11],[12,"Head","","",11],[12,"Post","","",11],[12,"Put","","",11],[12,"Delete","","",11],[12,"Trace","","",11],[12,"Connect","","",11],[12,"Patch","","",11],[12,"ExtensionMethod","","",11],[6,"Plugin","iron","An interface for plugins that cache values between calls."],[9,"get","","Return a copy of the plugin's produced value.",12],[9,"get_ref","","Return a reference to the plugin's produced value.",12],[9,"get_mut","","Return a mutable reference to the plugin's produced value.",12],[6,"Error","",""],[9,"name","","",13],[9,"description","","",13],[9,"cause","","",13],[9,"unwrap","","",13],[9,"abstract","","",13],[6,"ErrorRefExt","",""],[9,"is","","",14],[9,"downcast","","",14]],"paths":[[1,"Request"],[1,"Url"],[1,"Response"],[1,"Iron"],[6,"BeforeMiddleware"],[6,"AfterMiddleware"],[6,"AroundMiddleware"],[6,"Handler"],[6,"Chain"],[1,"TypeMap"],[2,"Status"],[2,"Method"],[6,"Plugin"],[6,"Error"],[6,"ErrorRefExt"]]};
searchIndex['urlencoded'] = {"items":[[0,"","urlencoded","URL Encoded Plugin for Iron."],[1,"UrlEncodedQuery","","Plugin for `Request` that extracts URL encoded data from the URL query string."],[1,"UrlEncodedBody","","Plugin for `Request` that extracts URL encoded data from the request body."],[4,"QueryMap","","Hashmap mapping strings to vectors of strings."],[10,"eval","","",0],[10,"eval","","",1]],"paths":[[1,"UrlEncodedQuery"],[1,"UrlEncodedBody"]]};

searchIndex['staticfile'] = {"items":[[0,"","staticfile","Static file-serving middleware."],[1,"Static","","The static file-serving `Middleware`."],[10,"clone","","",0],[10,"new","","Create a new instance of `Static` with a given root path.",0],[10,"favicon","","Create a favicon server from the given filepath.",0],[10,"enter","","",0]],"paths":[[1,"Static"]]};

searchIndex['mount'] = {"items":[[0,"","mount","`Mount` provides mounting middleware for the Iron framework."],[1,"Mount","","`Mount` is a simple mounting middleware."],[1,"OriginalUrl","","Exposes the original, unmodified path to be stored in `Request::extensions`."]],"paths":[]};

searchIndex['lib'] = {"items":[[0,"","lib","`Mount` provides mounting middleware for the Iron framework."],[1,"Mount","","`Mount` is a simple mounting middleware."],[1,"OriginalUrl","","Exposes the original, unmodified path to be stored in `Request::extensions`."]],"paths":[]};

initSearch(searchIndex);
