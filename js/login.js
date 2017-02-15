window.onload=function(){
	var oa1=document.getElementById('meizuid');
	var oa2=document.getElementById('massage');
	var oa3=document.getElementById('meizuid1');
	var oa4=document.getElementById('massage1');
	var oform1=document.getElementById('log-box');
	var oform2=document.getElementById('log-box2');
	var ophone=document.getElementById('two-code');
	var ophone1=document.getElementById('two-code2');
	var opc=document.getElementById('pc');
	var ocodebox=document.getElementById('code-pics');
	oa2.onmouseover=function(){
		oform1.style.display='none';
		oform2.style.display='block';
	};
	oa3.onmouseover=function(){
		oform2.style.display='none';
		oform1.style.display='block';
	};
	ophone.onmouseover=function(){
		ocodebox.style.display='block';
	};
	ophone1.onmouseover=function(){
		ocodebox.style.display='block';
	};
	opc.onmouseover=function(){
		ocodebox.style.display='none';
	};
}
