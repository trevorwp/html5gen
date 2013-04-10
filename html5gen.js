/*	
Copyright (C) 2013 Trevor Paesl

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


Example Usage:
	document.write(
		div( { "id": "content" },
		[
			h1( { "id": "title" }, [ "Links" ]),
			ul( { "id": "list", "class": "list" },[
				li([ 
					"Search Engine: ",
					a( { "href": "http://www.google.com" }, [ "Google" ] ),
				] ),
				li([ 
					"Social Network: ",
					a( { "href": "http://www.facebook.com" }, [ "Facebook" ] ),
				] )
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
*/
function a(p,c){return render(p,c,"a");}
function abbr(p,c){return render(p,c,"abbr");}
function address(p,c){return render(p,c,"address");}
function area(p,c){return render(p,c,"area");}
function article(p,c){return render(p,c,"article");}
function aside(p,c){return render(p,c,"aside");}
function audio(p,c){return render(p,c,"audio");}
function b(p,c){return render(p,c,"b");}
function base(p,c){return render(p,c,"base");}
function bdi(p,c){return render(p,c,"bdi");}
function bdo(p,c){return render(p,c,"bdo");}
function blockquote(p,c){return render(p,c,"blockquote");}
function body(p,c){return render(p,c,"body");}
function br(p,c){return render(p,c,"br");}
function button(p,c){return render(p,c,"button");}
function canvas(p,c){return render(p,c,"canvas");}
function caption(p,c){return render(p,c,"caption");}
function cite(p,c){return render(p,c,"cite");}
function code(p,c){return render(p,c,"code");}
function col(p,c){return render(p,c,"col");}
function colgroup(p,c){return render(p,c,"colgroup");}
function command(p,c){return render(p,c,"command");}
function datalist(p,c){return render(p,c,"datalist");}
function dd(p,c){return render(p,c,"dd");}
function del(p,c){return render(p,c,"del");}
function details(p,c){return render(p,c,"details");}
function dfn(p,c){return render(p,c,"dfn");}
function dialog(p,c){return render(p,c,"dialog");}
function div(p,c){return render(p,c,"div");}
function dl(p,c){return render(p,c,"dl");}
function dt(p,c){return render(p,c,"dt");}
function em(p,c){return render(p,c,"em");}
function embed(p,c){return render(p,c,"embed");}
function fieldset(p,c){return render(p,c,"fieldset");}
function figcaption(p,c){return render(p,c,"figcaption");}
function figure(p,c){return render(p,c,"figure");}
function footer(p,c){return render(p,c,"footer");}
function form(p,c){return render(p,c,"form");}
function h1(p,c){return render(p,c,"h1");}
function h2(p,c){return render(p,c,"h2");}
function h3(p,c){return render(p,c,"h3");}
function h4(p,c){return render(p,c,"h4");}
function h5(p,c){return render(p,c,"h5");}
function h6(p,c){return render(p,c,"h6");}
function head(p,c){return render(p,c,"head");}
function header(p,c){return render(p,c,"header");}
function hgroup(p,c){return render(p,c,"hgroup");}
function hr(p,c){return render(p,c,"hr");}
function html(p,c){return render(p,c,"html");}
function i(p,c){return render(p,c,"i");}
function iframe(p,c){return render(p,c,"iframe");}
function img(p,c){return render(p,c,"img");}
function input(p,c){return render(p,c,"input");}
function ins(p,c){return render(p,c,"ins");}
function kbd(p,c){return render(p,c,"kbd");}
function keygen(p,c){return render(p,c,"keygen");}
function label(p,c){return render(p,c,"label");}
function legend(p,c){return render(p,c,"legend");}
function li(p,c){return render(p,c,"li");}
function link(p,c){return render(p,c,"link");}
function map(p,c){return render(p,c,"map");}
function mark(p,c){return render(p,c,"mark");}
function menu(p,c){return render(p,c,"menu");}
function meta(p,c){return render(p,c,"meta");}
function meter(p,c){return render(p,c,"meter");}
function nav(p,c){return render(p,c,"nav");}
function noscript(p,c){return render(p,c,"noscript");}
function object(p,c){return render(p,c,"object");}
function ol(p,c){return render(p,c,"ol");}
function optgroup(p,c){return render(p,c,"optgroup");}
function option(p,c){return render(p,c,"option");}
function output(p,c){return render(p,c,"output");}
function p(p,c){return render(p,c,"p");}
function param(p,c){return render(p,c,"param");}
function pre(p,c){return render(p,c,"pre");}
function progress(p,c){return render(p,c,"progress");}
function q(p,c){return render(p,c,"q");}
function rp(p,c){return render(p,c,"rp");}
function rt(p,c){return render(p,c,"rt");}
function ruby(p,c){return render(p,c,"ruby");}
function s(p,c){return render(p,c,"s");}
function samp(p,c){return render(p,c,"samp");}
function script(p,c){return render(p,c,"script");}
function section(p,c){return render(p,c,"section");}
function select(p,c){return render(p,c,"select");}
function small(p,c){return render(p,c,"small");}
function source(p,c){return render(p,c,"source");}
function span(p,c){return render(p,c,"span");}
function strike(p,c){return render(p,c,"strike");}
function strong(p,c){return render(p,c,"strong");}
function style(p,c){return render(p,c,"style");}
function sub(p,c){return render(p,c,"sub");}
function summary(p,c){return render(p,c,"summary");}
function sup(p,c){return render(p,c,"sup");}
function table(p,c){return render(p,c,"table");}
function tbody(p,c){return render(p,c,"tbody");}
function td(p,c){return render(p,c,"td");}
function textarea(p,c){return render(p,c,"textarea");}
function tfoot(p,c){return render(p,c,"tfoot");}
function th(p,c){return render(p,c,"th");}
function thead(p,c){return render(p,c,"thead");}
function time(p,c){return render(p,c,"time");}
function title(p,c){return render(p,c,"title");}
function tr(p,c){return render(p,c,"tr");}
function track(p,c){return render(p,c,"track");}
function u(p,c){return render(p,c,"u");}
function ul(p,c){return render(p,c,"ul");}
//function var(p,c){return render(p,c,"var");} //registered keyword
function video(p,c){return render(p,c,"video");}
function wbr(p,c){return render(p,c,"wbr");}

function render(properties, contentArray, tag) {
	//If first parameter is an array and there is no second parameter, then the properties parameter was omitted so shift the values around accordingly
	if ( properties instanceof Array && !contentArray )
	{
		contentArray = properties;
		properties = null;
	}
	//Compile element contents
	var innerContent="";
	var props="";
	if(contentArray && contentArray instanceof Array) {
		for(var i in contentArray) { 
			if(contentArray.hasOwnProperty(i)){
				innerContent = innerContent + contentArray[i]; 
			}
		}	
	}
	//Compile element properties
	if(properties) {
		for (var key in properties) {
			var keyValue = key + (properties[key] ? "=\"" + properties[key] + "\"" : ""); //keyValue = key + the value (if there is one)
			props = props + " " + keyValue;
		}
	}
	return "<" + tag + props + ">" + innerContent + "</" + tag + ">";
}