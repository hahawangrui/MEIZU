$(window).scroll(function () { 
	var odiv=document.getElementById('content');
	var ofix=document.getElementById('mask');
	var oshadow=document.getElementById('shadow');
	var oscreen=document.getElementById('screen-text');
	var oh11=oscreen.getElementsByTagName('h1');
	var op1=oscreen.getElementsByTagName('p');
	var onet=document.getElementById('net-title');
	var oh12=onet.getElementsByTagName('h1');
	var op2=onet.getElementsByTagName('p');
	var ol1=document.getElementById('yidong');
	var ol2=document.getElementById('liantong');
	var ol3=document.getElementById('dianxin');
	var ocard=document.getElementById('card-cao');
	var ocpu=document.getElementById('cpu-text');
	var oh13=ocpu.getElementsByTagName('h1');
	var op3=ocpu.getElementsByTagName('p');
	var obattary=document.getElementById('battary-text');
	var oh14=obattary.getElementsByTagName('h1');
	var op4=obattary.getElementsByTagName('p');
	var obf=document.getElementById('bf-text');
	var oh15=obf.getElementsByTagName('h1');
	var op5=obf.getElementsByTagName('p');
	var obfp=document.getElementById('bf-pic');
	var oimg=obfp.getElementsByTagName('img');
	var ocam=document.getElementById('cam-text');
	var oh16=ocam.getElementsByTagName('h1');
	var op6=ocam.getElementsByTagName('p');
	var camp=document.getElementById('cam-pic');
	var ofp=document.getElementById('fp-text');
	var oh17=ofp.getElementsByTagName('h1');
	var op7=ofp.getElementsByTagName('p');
		var st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
//		alert(st);
		if(st>200){
			odiv.style.display="block";
			ofix.style.position='fixed';
			ofix.style.top='-45px';
		};
		if(st<200){
			odiv.style.display="none";
			ofix.style.position='absolute';
			ofix.style.top='80px';
		};
		if(st>300){
			oshadow.style.opacity='0.218';
		};
		if(st<300){
			oshadow.style.opacity='0.118';
		};
		if(st>400){
			oshadow.style.opacity='0.318';
		};
		if(st<400){
			oshadow.style.opacity='0.218';
		};
		if(st>500){
			oshadow.style.opacity='0.618';
		};
		if(st<500){
			oshadow.style.opacity='0.318';
		};
		if(st>600){
			oshadow.style.opacity='0.718';
		};
		if(st<600){
			oshadow.style.opacity='0.618';
		};
		if(st>700){
			oshadow.style.opacity='0.818';
		};
		if(st<700){
			oshadow.style.opacity='0.718';
		};
		if(st>2048){
			oh11[0].className='up9';
			op1[0].className='up10';
		};
		if(st<2048){
			oh11[0].className='';
			op1[0].className='';
		};
		if(st>2550){
			oh12[0].className='up7';
			op2[0].className='up8';
			ol1.className='up15';
			ol2.className='up16';
			ol3.className='up17';
			ocard.className='card';
		};
		if(st<2550){
			oh12[0].className='';
			op2[0].className='';
			ol1.className='';
			ol2.className='';
			ol3.className='';
			ocard.className='';
		};
		if(st>3509){
			oh13[0].className='up18';
			op3[0].className='up19';
		};
		if(st<3509){
			oh13[0].className='';
			op3[0].className='';
		};
		if(st>4508){
			oh14[0].className='up20';
			op4[0].className='up21';
		};
		if(st<4508){
			oh14[0].className='';
			op4[0].className='';
		};
		if(st>5306){
			oh15[0].className='up22';
			op5[0].className='up23';
		};
		if(st<5306){
			oh15[0].className='';
			op5[0].className='';
		};
		if(st>5506){
			oimg[0].className='bfp';
		};
		if(st<5506){
			oimg[0].className='';
		};
		if(st>6006){
			oh16[0].className='up24';
			op6[0].className='up25';
		};
		if(st<6006){
			oh16[0].className='';
			op6[0].className='';
		};
		if(st>6506){
			camp.className='up26';
		};
		if(st<6506){
			camp.className='';
		};
		if(st>7006){
			oh17[0].className='up27';
			op7[0].className='up28';
		};
		if(st<7006){
			oh17[0].className='';
			op7[0].className='';
		};
});
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
	var os=document.getElementById('pm-shadow');
	var op=document.getElementById('parameter');
	var ops=op.getElementsByTagName('p');
	var ohs=op.getElementsByTagName('h2');
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
	os.onmouseover=function(){
		os.className='para';
		ops[0].style.color='white';
		ohs[0].style.color='white';
	};
	os.onmouseleave=function(){
		os.className='';
		ops[0].style.color='#999';
		ohs[0].style.color='#26a9d1';
	};
	ops[0].onmouseover=function(){
		os.className='para';
		ops[0].style.color='white';
		ohs[0].style.color='white';
	};
	ohs[0].onmouseover=function(){
		os.className='para';
		ops[0].style.color='white';
		ohs[0].style.color='white';
	};
}
