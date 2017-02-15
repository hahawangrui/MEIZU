$(window).scroll(function(){
	var st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
//	alert(st);
	var ol1=document.getElementById('list1');
	var ol2=document.getElementById('list2');
	var ol3=document.getElementById('list3');
	var ovt1=document.getElementById('vt');
	var ovt2=document.getElementById('vt1');
	var ovt3=document.getElementById('vt2');
	if(st>800){
		ol1.className='up5';
		ol2.className='up6';
		ol3.className='up7';
	};
	if(st>1572){
		ovt1.className='up8'
	}
	if(st>2772){
		ovt2.className='up9'
	}
	if(st>4072){
		ovt3.className='up10'
	}
});
window.onload=function(){
	var trunon=document.getElementById('play-button');
	var cover=document.getElementById('cover');
	var videos=document.getElementById('video');
	var trunon1=document.getElementById('play-button1');
	var cover1=document.getElementById('cover1');
	var videos1=document.getElementById('video1');
	var trunon2=document.getElementById('play-button2');
	var cover2=document.getElementById('cover2');
	var videos2=document.getElementById('video2');
	trunon.onclick=function(){
		cover.style.display='none';
		videos.play();
	};
	trunon1.onclick=function(){
		cover1.style.display='none';
		videos1.play();
	};
	trunon2.onclick=function(){
		cover2.style.display='none';
		videos2.play();
	};
}
