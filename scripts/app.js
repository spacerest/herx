function randomFill(){
	var red = Math.floor(Math.random()*255);
	var green = Math.floor(Math.random()*255);
	var blue = Math.floor(Math.random()*255);
	return "rgb(" + red + "," + green + "," + blue + ")";
}	
function corner(){
    var corners = []
    for (var i = 0; i<3; i++){
        corners[i]=Math.floor((Math.random()*4)+1)
        while (corners[i]===corners[i-1]||corners[i]===corners[i-2]){
            corners[i]=Math.floor((Math.random()*4)+1)
        }
    }
        return corners;
}
function xPoint(cornerArray,x){
    var xCoord = []
    for(var j in cornerArray){
        if (cornerArray[j]===1){
            xCoord[j] = Math.floor(Math.random()*(x/4))+0.5;
        } else if (cornerArray[j]===2){
            xCoord[j] = Math.floor(Math.random()*(x*3/4))+0.5;
        } else if (cornerArray[j]===3){
            xCoord[j] = Math.floor(Math.random()*(x/4))+0.5;
        } else {
            xCoord[j] = Math.floor(Math.random()*(x*3/4))+0.5;
        }
    }
    return xCoord;
}

function yPoint(cornerArray,y){
    var yCoord = [];
    for(var j in cornerArray){
        if (cornerArray[j]===1){
            yCoord[j] = Math.floor(Math.random()*(y/4))+0.5;
        } else if (cornerArray[j]===2){
            yCoord[j] = Math.floor(Math.random()*(y/4))+0.5;
        } else if (cornerArray[j]===3){
            yCoord[j] = Math.floor(Math.random()*(y*3/4))+0.5;
        } else {
            yCoord[j] = Math.floor(Math.random()*(y*3/4))+0.5;
        }
    }
    return yCoord;
}

function triCoords(ctx){
	var rounds = 0;	
	for (var i = -10; i < 5000; i+=36){
		rounds += 1;	
		ctx.fillStyle = randomFill();
		var cornerArray = corner();
		var x = 36;
		var y = 36;
		var xCoord = xPoint(cornerArray,x);
		var yCoord = yPoint(cornerArray,y);
		ctx.moveTo(xCoord[0]+rounds*36,yCoord[0]);
		ctx.lineTo(xCoord[1]+rounds*36,yCoord[1]);
		ctx.lineTo(xCoord[2]+rounds*36,yCoord[2]);
		ctx.closePath();
		ctx.fill();
	}		
}

function triDesign(){
	var tri = document.getElementById("tri");
	if (tri.getContext){
		var ctx = tri.getContext("2d");
		/*draw up-down lines down the strip*/
		ctx.beginPath();
		/*for (var i = -20; i<5000; i+=36){
			ctx.moveTo(i,0);
			ctx.lineTo(i,36);
			ctx.stroke();*/
				
		triCoords(ctx);
	
				
	}
}

