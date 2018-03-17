var ii = $('.post-body img').length
var listx=[]

for (var i = 0; i<ii; i++) {
var iii = [$('.post-body img').eq(i).attr('title'),$('.post-body img').eq(i).attr('src')]
listx.push(iii)
}

if(listx.length>0) $('.main').html('')

for (var i = 0; i<listx.length; i++) {
var img = listx[i][1]
var ttl = (listx[i][0]==null) ? 'set:':listx[i][0];
$('.main').append('<div class="col s12 center"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" style="min-height: 100px;" src="'+img+'"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4 truncate" style="font-size: 18px;">'+ttl+'</span></div><div class="card-reveal"><span class="card-title grey-text text-darken-4" style="font-size: 18px;">Select Server : <i class="material-icons right">close</i></span><div id="serverlist" tag="0" data-url="'+img+'"><br><br><a class="btn" href="#" tag="0">SERVER 1</a><br><br><a class="btn" href="#" tag="0">SERVER 2</a><br><br><a class="btn" href="#" tag="0">SERVER 3</a></div></div></div></div>')
}


$('#serverlist a').on('click', function(event){
event.preventDefault()
var b = $(this)
if(b.attr('tag')=='0') {
var i = b.parent().attr('tag')
if(i!="2") b.attr('tag', '1')
var ready = parseInt(i)+1
if(ready==3) {
window.location = 'set:'+b.parent().attr('data-url')
Android.Event('set',b.parent().attr('data-url'),'')
} else {
b.parent().attr('tag',ready)
Android.Alert('Server Error, Try Another!')
}
} else {
Android.Alert('Server Error, Try Another!')
}
})