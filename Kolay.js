document.getElementById("2").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("3").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("4").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("6").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("7").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("9").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("11").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("13").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("15").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("16").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("17").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("18").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("20").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("22").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("24").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("25").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("26").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("28").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("29").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("30").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("31").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("32").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("33").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("34").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("38").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("39").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("41").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("43").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("44").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("48").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("49").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("50").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("51").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("52").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("53").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("54").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("56").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("57").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("58").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("60").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("62").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("64").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("65").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("66").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("67").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("69").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("71").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("73").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("75").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("76").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("78").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("79").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("80").onblur=function(){KontrolEt(this,this.id)};
document.getElementById("kontrol").addEventListener("click",function(){Kontrol()});

var Kolay='700305201080090060050000004000400620000709000065002000100000090030080040504906002';
var Kolay_Cevap='796482351345197628281563974817243965453769812629158437128639574574281936396745812';
var kontrol=false;
var puzzle=0;
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
	var cevap = Kolay_Cevap;
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
	if(count >= 53)
	{
		alert("Tebrikler");
	}
	else 
	{
		alert("Tekrar deneyiniz");
	}
	
}
