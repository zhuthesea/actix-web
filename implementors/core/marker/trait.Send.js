(function() {var implementors = {};
implementors["actix_web"] = [{text:"impl&lt;T, B&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/struct.App.html\" title=\"struct actix_web::App\">App</a>&lt;T, B&gt;",synthetic:true,types:["actix_web::app::App"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/struct.HttpRequest.html\" title=\"struct actix_web::HttpRequest\">HttpRequest</a>",synthetic:true,types:["actix_web::request::HttpRequest"]},{text:"impl&lt;T&nbsp;=&nbsp;ResourceEndpoint&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/struct.Resource.html\" title=\"struct actix_web::Resource\">Resource</a>&lt;T&gt;",synthetic:true,types:["actix_web::resource::Resource"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/struct.Route.html\" title=\"struct actix_web::Route\">Route</a>",synthetic:true,types:["actix_web::route::Route"]},{text:"impl&lt;T&nbsp;=&nbsp;ScopeEndpoint&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/struct.Scope.html\" title=\"struct actix_web::Scope\">Scope</a>&lt;T&gt;",synthetic:true,types:["actix_web::scope::Scope"]},{text:"impl&lt;F, I, S, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/struct.HttpServer.html\" title=\"struct actix_web::HttpServer\">HttpServer</a>&lt;F, I, S, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix_web::server::HttpServer"]},{text:"impl&lt;A, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix_web/enum.Either.html\" title=\"enum actix_web::Either\">Either</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix_web::responder::Either"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/dev/struct.AppService.html\" title=\"struct actix_web::dev::AppService\">AppService</a>",synthetic:true,types:["actix_web::config::AppService"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/dev/struct.AppConfig.html\" title=\"struct actix_web::dev::AppConfig\">AppConfig</a>",synthetic:true,types:["actix_web::config::AppConfig"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/web/struct.ServiceConfig.html\" title=\"struct actix_web::web::ServiceConfig\">ServiceConfig</a>",synthetic:true,types:["actix_web::config::ServiceConfig"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/web/struct.Data.html\" title=\"struct actix_web::web::Data\">Data</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["actix_web::data::Data"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix_web/error/enum.UrlGenerationError.html\" title=\"enum actix_web::error::UrlGenerationError\">UrlGenerationError</a>",synthetic:true,types:["actix_web::error::UrlGenerationError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix_web/error/enum.UrlencodedError.html\" title=\"enum actix_web::error::UrlencodedError\">UrlencodedError</a>",synthetic:true,types:["actix_web::error::UrlencodedError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix_web/error/enum.JsonPayloadError.html\" title=\"enum actix_web::error::JsonPayloadError\">JsonPayloadError</a>",synthetic:true,types:["actix_web::error::JsonPayloadError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix_web/error/enum.PathError.html\" title=\"enum actix_web::error::PathError\">PathError</a>",synthetic:true,types:["actix_web::error::PathError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix_web/error/enum.QueryPayloadError.html\" title=\"enum actix_web::error::QueryPayloadError\">QueryPayloadError</a>",synthetic:true,types:["actix_web::error::QueryPayloadError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix_web/error/enum.ReadlinesError.html\" title=\"enum actix_web::error::ReadlinesError\">ReadlinesError</a>",synthetic:true,types:["actix_web::error::ReadlinesError"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/guard/struct.AnyGuard.html\" title=\"struct actix_web::guard::AnyGuard\">AnyGuard</a>",synthetic:true,types:["actix_web::guard::AnyGuard"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/guard/struct.AllGuard.html\" title=\"struct actix_web::guard::AllGuard\">AllGuard</a>",synthetic:true,types:["actix_web::guard::AllGuard"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/dev/struct.ConnectionInfo.html\" title=\"struct actix_web::dev::ConnectionInfo\">ConnectionInfo</a>",synthetic:true,types:["actix_web::info::ConnectionInfo"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/middleware/struct.Compress.html\" title=\"struct actix_web::middleware::Compress\">Compress</a>",synthetic:true,types:["actix_web::middleware::compress::Compress"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/middleware/struct.Condition.html\" title=\"struct actix_web::middleware::Condition\">Condition</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix_web::middleware::condition::Condition"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/middleware/struct.DefaultHeaders.html\" title=\"struct actix_web::middleware::DefaultHeaders\">DefaultHeaders</a>",synthetic:true,types:["actix_web::middleware::defaultheaders::DefaultHeaders"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/middleware/struct.Logger.html\" title=\"struct actix_web::middleware::Logger\">Logger</a>",synthetic:true,types:["actix_web::middleware::logger::Logger"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/middleware/struct.NormalizePath.html\" title=\"struct actix_web::middleware::NormalizePath\">NormalizePath</a>",synthetic:true,types:["actix_web::middleware::normalize::NormalizePath"]},{text:"impl&lt;B&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/middleware/errhandlers/struct.ErrorHandlers.html\" title=\"struct actix_web::middleware::errhandlers::ErrorHandlers\">ErrorHandlers</a>&lt;B&gt;",synthetic:true,types:["actix_web::middleware::errhandlers::ErrorHandlers"]},{text:"impl&lt;B&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix_web/middleware/errhandlers/enum.ErrorHandlerResponse.html\" title=\"enum actix_web::middleware::errhandlers::ErrorHandlerResponse\">ErrorHandlerResponse</a>&lt;B&gt;",synthetic:true,types:["actix_web::middleware::errhandlers::ErrorHandlerResponse"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/dev/struct.ResourceMap.html\" title=\"struct actix_web::dev::ResourceMap\">ResourceMap</a>",synthetic:true,types:["actix_web::rmap::ResourceMap"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>",synthetic:true,types:["actix_web::service::ServiceRequest"]},{text:"impl&lt;B&nbsp;=&nbsp;<a class=\"enum\" href=\"actix_web/dev/enum.Body.html\" title=\"enum actix_web::dev::Body\">Body</a>&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;B&gt;",synthetic:true,types:["actix_web::service::ServiceResponse"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/dev/struct.WebService.html\" title=\"struct actix_web::dev::WebService\">WebService</a>",synthetic:true,types:["actix_web::service::WebService"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/test/struct.TestRequest.html\" title=\"struct actix_web::test::TestRequest\">TestRequest</a>",synthetic:true,types:["actix_web::test::TestRequest"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/web/struct.Form.html\" title=\"struct actix_web::web::Form\">Form</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix_web::types::form::Form"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/web/struct.FormConfig.html\" title=\"struct actix_web::web::FormConfig\">FormConfig</a>",synthetic:true,types:["actix_web::types::form::FormConfig"]},{text:"impl&lt;U&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/dev/struct.UrlEncoded.html\" title=\"struct actix_web::dev::UrlEncoded\">UrlEncoded</a>&lt;U&gt;",synthetic:true,types:["actix_web::types::form::UrlEncoded"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/web/struct.Json.html\" title=\"struct actix_web::web::Json\">Json</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix_web::types::json::Json"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/web/struct.JsonConfig.html\" title=\"struct actix_web::web::JsonConfig\">JsonConfig</a>",synthetic:true,types:["actix_web::types::json::JsonConfig"]},{text:"impl&lt;U&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/dev/struct.JsonBody.html\" title=\"struct actix_web::dev::JsonBody\">JsonBody</a>&lt;U&gt;",synthetic:true,types:["actix_web::types::json::JsonBody"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/web/struct.Path.html\" title=\"struct actix_web::web::Path\">Path</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix_web::types::path::Path"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/web/struct.PathConfig.html\" title=\"struct actix_web::web::PathConfig\">PathConfig</a>",synthetic:true,types:["actix_web::types::path::PathConfig"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/web/struct.Payload.html\" title=\"struct actix_web::web::Payload\">Payload</a>",synthetic:true,types:["actix_web::types::payload::Payload"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/web/struct.PayloadConfig.html\" title=\"struct actix_web::web::PayloadConfig\">PayloadConfig</a>",synthetic:true,types:["actix_web::types::payload::PayloadConfig"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/web/struct.Query.html\" title=\"struct actix_web::web::Query\">Query</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix_web::types::query::Query"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/web/struct.QueryConfig.html\" title=\"struct actix_web::web::QueryConfig\">QueryConfig</a>",synthetic:true,types:["actix_web::types::query::QueryConfig"]},{text:"impl&lt;T&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix_web/dev/struct.Readlines.html\" title=\"struct actix_web::dev::Readlines\">Readlines</a>&lt;T&gt;",synthetic:true,types:["actix_web::types::readlines::Readlines"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()