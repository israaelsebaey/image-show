// select elements
var myImg=document.getElementById('myImg');
var btnprev=document.getElementById('btnprev');
var btnstart=document.getElementById('btnstart');
var btnend=document.getElementById('btnend');
var btnnext=document.getElementById('btnnext');
var zoom=document.getElementById('zoom');
var topImgs=document.getElementById('imgs').children;

// array of images
var arrImages=['../images/3.jpg','../images/16.jpg','../images/21.jpg','../images/23.jpg','../images/20.jpg','../images/22.jpg','../images/17.jpg'];
var i=0;
function next(){
    i++;
    if(i>=arrImages.length){
        i=0;
    }
    myImg.src=arrImages[i];
    console.log(arrImages[i]);
}
btnnext.addEventListener('click',next);
var t;
btnstart.addEventListener('click',function(){
     t=setInterval(next,700);
})
btnend.addEventListener('click',function(){
    clearInterval(t);
})
function prev(){
    i--;
    if(i<0){
        i=arrImages.length-1;
    }
    myImg.src=arrImages[i];
}
btnprev.addEventListener('click',prev);

// hover effect
for(var j=0;j<topImgs.length;j++){
//    console.log(topImgs[i]);
   topImgs[j].addEventListener('mouseenter',function(){
      console.log(this.name);
      myImg.src=`../images/${this.name}`
   })  
}

// scale effect
zoom.addEventListener('mousemove',function(e){
    var clientX=e.clientX-card.offsetLeft;
    var clientY=e.clientY-card.offsetTop;
    var mWidth=card.offsetWidth;
    var mHeight=card.offsetHeight;
    clientX=clientX/mWidth*100;
    clientY=clientY/mHeight*100;
    myImg.style.transform=`translate(-${clientX}%,-${clientY}%) scale(2)`;
})
zoom.addEventListener('mouseleave',function(){
    myImg.style.transform=' scale(1)';
})
