html5gen is a lightweight HTML5 markup generator

You can build HTML programatically using javascript, writing it in a fashion that very closely resembles the markup of pure HTML that you are already familiar with. Because the framework is lightweight, you are free to keep it in its minimalistic form, or you may extend it easily such as adding templating functionality.

Example Usage:
	document.write(
		div( { "id": "content" }, [
			h1( { "id": "title" }, [ "Links" ]),
			ul( { "id": "list", "class": "list" },[
				li([ 
					"Search Engine: ",
					a( { "href": "http://www.google.com" }, [ "Google" ] )
				]),
				li([ 
					"Social Network: ",
					a( { "href": "http://www.facebook.com" }, [ "Facebook" ] ) 
				])
			])
		])
	);
	
Output:
	<div id="content">
		<h1 id="title">Links</h1>
		<ul id="list" class="list">
			<li>Search Engine: <a href="http://www.google.com">Google</a></li>
			<li>Social Network: <a href="http://www.facebook.com">Facebook</a></li>
		</ul>
	</div>