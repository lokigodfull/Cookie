


document.ondragstart = test;
document.onselectstart = test;
document.oncontextmenu = test;
function test() {
return false;
}
document.oncontextmenu;
function catchControlKeys(event){
var code=event.keyCode ? event.keyCode : event.which ? event.which : null;
if (event.ctrlKey){
// Ctrl+U
if (code == 117) return false;
if (code == 85) return false;
// Ctrl+C
if (code == 99) return false;
if (code == 67) return false;
// Ctrl+A
if (code == 97) return false;
if (code == 65) return false;
}
}

/* Paste */

document.onkeydown = function(event) {
    if (event.ctrlKey && (event.keyCode == 85) || (event.ctrlKey && event.shiftKey && (event.keyCode == 73)) || event.keyCode == 123 || event.keyCode == 122 || event.keyCode == 112 || (event.ctrlKey && (event.keyCode == 83))) {
        
		window.location.replace("check_secure.html");
		return false
    }
}

document.oncontextmenu=new Function("return false");



