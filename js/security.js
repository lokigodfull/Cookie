function slyLink() {
var istS = 'Источник информации:';
var copyR = '© Автор';
var body_element = document.getElementsByTagName('body')[0];
var choose;
choose = window.getSelection();
var myLink = document.location.href;
var authorLink = "" + istS + ' ' + ""+myLink+"" + copyR;
var copytext = choose + authorLink;
var addDiv = document.createElement('div');
addDiv.style.position='absolute';
addDiv.style.left='-99999px';
body_element.appendChild(addDiv);
addDiv.innerHTML = copytext;
choose.selectAllChildren(addDiv);
window.setTimeout(function() {
body_element.removeChild(addDiv);
},0);
}
document.oncopy = slyLink;