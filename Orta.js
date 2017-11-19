document.getElementById("1").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("3").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("4").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("5").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("7").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("8").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("9").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("11").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("13").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("14").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("17").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("18").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("20").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("21").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("24").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("25").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("26").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("27").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("29").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("30").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("31").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("32").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("33").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("36").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("37").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("39").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("40").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("41").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("42").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("43").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("45").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("46").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("49").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("50").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("51").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("52").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("53").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("55").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("56").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("57").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("58").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("61").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("62").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("64").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("65").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("68").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("69").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("71").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("73").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("74").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("75").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("77").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("78").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("79").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("81").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("kontrol").addEventListener("click",function(){Kontrol()});
var Orta='060509800002006910000400000100020076000000000270030001000007000058100600009205030';
var Orta_Cevap='367842591519376482842915763185936274924751638376284591623458719847193265159627438';
var kontrol=false;
var puzzle;
var count =0;
var i= 0;
var dizi1 = new Array(9);
var dizi2 = new Array(9);
var dizi3 = new Array(9);
var dizi4 = new Array(9);
var dizi5 = new Array(9);
var dizi6 = new Array(9);
var dizi7 = new Array(9);
var dizi8 = new Array(9);
var dizi9 = new Array(9);

function KontrolEt(obj,id) {
  if (obj.value==='0') {
    obj.value='';
  }
  if (isNaN(obj.value)===true || obj.value<0 || obj.value>9) {
    alert('Lütfen 1-9 arasında değer giriniz...');
    obj.value='';
  }	

  IdAta();
	if(obj.value==1)
	{
		for(i=0; i<81; i++)
		{
			if(dizi1[i]==obj.id)
			{
				kontrol = true;
				count+=1;
				document.getElementById(obj.id).style.color="#339933"; 
				break;
			}
			else
			{
				kontrol=false;
				document.getElementById(obj.id).style.color="#FF0000";		
			}
		}
	}
	if(obj.value==2)
	{
		for(i=0; i<81; i++)
		{
			if(dizi2[i]==obj.id)
			{
				kontrol = true;
				count+=1;
				document.getElementById(obj.id).style.color="#339933";
				break;
			}
			else
			{
				kontrol=false;
				document.getElementById(obj.id).style.color="#FF0000";		
			}
		}
	}
	if(obj.value==3)
	{
		for(i=0; i<81; i++)
		{
			if(dizi3[i]==obj.id)
			{
				kontrol = true;
				count+=1;
				document.getElementById(obj.id).style.color="#339933";
				break;
			}
			else
			{
				kontrol=false;
				document.getElementById(obj.id).style.color="#FF0000";		
			}
		}
		
	}
	if(obj.value==4)
	{
		for(i=0; i<81; i++)
		{
			if(dizi4[i]==obj.id)
			{
				kontrol = true;
				count+=1;
				document.getElementById(obj.id).style.color="#339933";
				break;
			}
			else
			{
				kontrol=false;
				document.getElementById(obj.id).style.color="#FF0000";		
			}
		}
	}
	if(obj.value==5)
	{
		for(i=0; i<81; i++)
		{
			if(dizi5[i]==obj.id)
			{
				kontrol = true;
				count+=1;
				document.getElementById(obj.id).style.color="#339933";
				break;
			}
			else
			{
				kontrol=false;
				document.getElementById(obj.id).style.color="#FF0000";		
			}
		}
	}
	if(obj.value==6)
	{
		for(i=0; i<81; i++)
		{
			if(dizi6[i]==obj.id)
			{
				kontrol = true;
				count +=1;
				document.getElementById(obj.id).style.color="#339933";
				break;
			}
			else
			{
				kontrol=false;
				document.getElementById(obj.id).style.color="#FF0000";		
			}
		}
	}
	if(obj.value==7)
	{
		for(i=0; i<81; i++)
		{
			if(dizi7[i]==obj.id)
			{
				kontrol = true;
				count+=1;
				document.getElementById(obj.id).style.color="#339933";
				break;
			}
			else
			{
				kontrol=false;
				document.getElementById(obj.id).style.color="#FF0000";		
			}
		}
	}
	if(obj.value==8)
	{
		for(i=0; i<81; i++)
		{
			if(dizi8[i]==obj.id)
			{
				kontrol = true;
				count+=1;
				document.getElementById(obj.id).style.color="#339933";
				break;
			}
			else
			{
				kontrol=false;
				document.getElementById(obj.id).style.color="#FF0000";		
			}
		}
	}
	if(obj.value==9)
	{
		for(i=0; i<81; i++)
		{
			if(dizi9[i]==obj.id)
			{
				kontrol = true;
				count+=1;
				document.getElementById(obj.id).style.color="#339933";
				break;
			}
				else
			{
				kontrol=false;
				document.getElementById(obj.id).style.color="#FF0000";		
			}
		}
	
	}
  
}
function IdAta()
{
	var cevap = Orta_Cevap;
	var sonuc = cevap.split("");

	var temp = 0;
	for(i=0; i<81; i++)
	{
		temp = sonuc[i];
		if(temp==1)
			dizi1[i] = i+1;
		else if(temp==2)
			dizi2[i]=i+1;
		else if(temp==3)
			dizi3[i]=i+1;
		else if(temp==4)
			dizi4[i]=i+1;
		else if(temp==5)
			dizi5[i]=i+1;
		else if(temp==6)
			dizi6[i]=i+1;
		else if(temp==7)
			dizi7[i]=i+1;
		else if(temp==8)
			dizi8[i]=i+1;
		else if(temp==9)
			dizi9[i]=i+1;
	}
}

function Kontrol()
{
	if(count >= 55)
	{
		alert("Tebrikler");
	}
	else 
	{
		alert("Tekrar deneyiniz");
	}
	
}

