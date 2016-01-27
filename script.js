$(document).ready(function(){

var hammertime = new Hammer("article", myOptions);
hammertime.on('pan', function(ev) {
    console.log(ev);
});
});