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