function flakeFall(){if(!getRefToDivNest("snFlkDiv0")){return}var e=0,t=0,n=0,r=0;if(typeof window.innerWidth=="number"){e=window.innerWidth;t=window.innerHeight}else{if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){e=document.documentElement.clientWidth;t=document.documentElement.clientHeight}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){e=document.body.clientWidth;t=document.body.clientHeight}}}if(typeof window.pageYOffset=="number"){n=pageYOffset;r=pageXOffset}else{if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){n=document.body.scrollTop;r=document.body.scrollLeft}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){n=document.documentElement.scrollTop;r=document.documentElement.scrollLeft}}}for(var i=0;i<numFlakes;i++){if(ycoords[i]*t>t-pictureHeight){ycoords[i]=0}var s=getRefToDivNest("snFlkDiv"+i);if(!s){return}if(s.style){s=s.style}var o=document.childNodes?"px":0;s.top=Math.round(ycoords[i]*t)+n+o;s.left=Math.round(xcoords[i]*e-pictureWidth/2+e/((numFlakes+1)*4)*(Math.sin(lrFlakes*ycoords[i])-Math.sin(3*lrFlakes*ycoords[i])))+r+o;ycoords[i]+=downSpeed}}function getRefToDivNest(e){if(document.layers){return document.layers[e]}if(document[e]){return document[e]}if(document.getElementById){return document.getElementById(e)}if(document.all){return document.all[e]}return false}var pictureSrc="http://1.bp.blogspot.com/-aZQXzUqSw5E/VKdQ-NZEaxI/AAAAAAAAB9U/3Cj3b3PLygk/s1600/hoa-mai.png";var pictureWidth=20;var pictureHeight=20;var numFlakes=10;var downSpeed=.01;var lrFlakes=10;if(typeof numFlakes!="number"||Math.round(numFlakes)!=numFlakes||numFlakes<1){numFlakes=10}for(var x=0;x<numFlakes;x++){if(document.layers){document.write('<layer id="snFlkDiv'+x+'"><imgsrc="'+pictureSrc+'" height="'+pictureHeight+'"width="'+pictureWidth+'" alt="*" border="0"></layer>')}else{document.write('<div style="position:absolute;"id="snFlkDiv'+x+'"><img src="'+pictureSrc+'"height="'+pictureHeight+'" width="'+pictureWidth+'" alt="*"border="0"></div>')}}var xcoords=new Array,ycoords=new Array,snFlkTemp;for(var x=0;x<numFlakes;x++){xcoords[x]=(x+1)/(numFlakes+1);do{snFlkTemp=Math.round((numFlakes-1)*Math.random())}while(typeof ycoords[snFlkTemp]=="number");ycoords[snFlkTemp]=x/numFlakes}window.setInterval("flakeFall();",100)