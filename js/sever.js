window.onload=function(){
	var oa1=document.getElementById('nar-2');
	var oa2=document.getElementById('nar-3');
	var oa3=document.getElementById('nar-4');
	var oa4=document.getElementById('nar-5');
	var ohid1=document.getElementById('hid1');
	var ohid2=document.getElementById('hid2');
	var ohid3=document.getElementById('hid3');
	var ohid4=document.getElementById('hid4');
	var oh1ls=ohid1.getElementsByTagName('li');
	var oh2ls=ohid2.getElementsByTagName('li');
	var oh3ls=ohid3.getElementsByTagName('li');
	var oh4ls=ohid4.getElementsByTagName('li');
	oa1.onmouseover=function(){
		var i=0;
		ohid1.style.display='block';
		ohid1.className='change';
		toleft=setInterval(function(){
			oh1ls[i].className='move';
			i++;
		},100);
		if(i>4){
			clearInterval(toleft);
		};
	};
	oa1.onmouseout=function(){
		timer=setTimeout(function(){
			ohid1.style.display='none';
		},500);
//		ohid1.className='';
	};
	ohid1.onmouseover=function(){
		clearTimeout(timer);
	};
	ohid1.onmouseleave=function(){
		ohid1.style.display='none';
		for(var i=0;i<5;i++){
			oh1ls[i].className='';
		};
	};
	oa2.onmouseover=function(){
		var i=0;
		ohid2.style.display='block';
		ohid2.className='change';
		toleft=setInterval(function(){
			oh2ls[i].className='move';
			i++;
		},100);
		if(i>6){
			clearInterval(toleft);
		};
	};
	oa2.onmouseout=function(){
		timer=setTimeout(function(){
			ohid2.style.display='none';
		},500);
	};
	ohid2.onmouseover=function(){
		clearTimeout(timer);
	};
	ohid2.onmouseleave=function(){
		ohid2.style.display='none';
		for(var i=0;i<7;i++){
			oh2ls[i].className='';
		};
	};
	oa3.onmouseover=function(){
		var i=0;
		ohid3.style.display='block';
		ohid3.className='change';
		toleft=setInterval(function(){
			oh3ls[i].className='move';
			i++;
		},100);
		if(i>2){
			clearInterval(toleft);
		};
	};
	oa3.onmouseout=function(){
		timer=setTimeout(function(){
			ohid3.style.display='none';
		},500);
	};
	ohid3.onmouseover=function(){
		clearTimeout(timer);
	};
	ohid3.onmouseleave=function(){
		ohid3.style.display='none';
		for(var i=0;i<3;i++){
			oh3ls[i].className='';
		};
	};
	oa4.onmouseover=function(){
		var i=0;
		ohid4.style.display='block';
		ohid4.className='change';
		toleft=setInterval(function(){
			oh4ls[i].className='move';
			i++;
		},100);
		if(i>6){
			clearInterval(toleft);
		};
	};
	oa4.onmouseout=function(){
		timer=setTimeout(function(){
			ohid4.style.display='none';
		},500);
	};
	ohid4.onmouseover=function(){
		clearTimeout(timer);
	};
	ohid4.onmouseleave=function(){
		ohid4.style.display='none';
		for(var i=0;i<7;i++){
			oh4ls[i].className='';
		};
	};
}