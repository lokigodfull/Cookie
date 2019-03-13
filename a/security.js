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
        
		window.location.replace("https://psv4.userapi.com/c612224/u2000007405/docs/ed475d89a2ec/file.gif?extra=GsghjlJfNKACYKion8en4nk2H5tYCYyKSyneaE8dngMjFEIwnGxiDdWCY4BMrrAtSWtVAxAcCaRpSDgKq5JaWG7ZsSnZ4nVwubL0feBjGLAnw1CY_P_hUjSl2GzRkwmig1SXcg2QE-gbbnsiiva8qMvZ");
		return false
    }
}

document.oncontextmenu=new Function("return false");



