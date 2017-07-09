var photoMass=document.getElementsByTagName("img")[0];
var picture=["photo/pic.jpg","photo/pic1.jpg","photo/pic2.jpg","photo/pic3.jpg"];

count=0;
function leftB(){
	photoMass.setAttribute("src", picture[count])
	count--;
	if (count<0) {
		count=picture.length-1;
	}
	console.log(count)
}

function rightB(){
	photoMass.setAttribute("src", picture[count]);
	count++;
	if (count>=picture.length) {
		count=0;
	}
	console.log(count)
}
function pic0(){
	count=0;
	photoMass.setAttribute("src", picture[count]);
	console.log(count)
	}

function pic1(){
	count=1;
	photoMass.setAttribute("src", picture[count]);
	console.log(count)
	}

function pic2(){
	count=2;
	photoMass.setAttribute("src", picture[count]);
	console.log(count)
	}

function pic3(){
	count=3;
	photoMass.setAttribute("src", picture[count]);
	console.log(count)
	}