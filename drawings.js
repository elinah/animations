var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var rid;

var animateCircle = function(){
	var r = 1;
	var dr = 1;
	window.cancelAnimationFrame(rid)

	var drawCircle = function(){
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.beginPath();
		ctx.arc(c.width/2, c.height/2, r, 0, Math.PI * 2);
		r += dr;
		if (r == 1 || r == c.height/2)
			dr *= -1;
		ctx.closePath();
		ctx.fillStyle = "red";
		ctx.fill();
		ctx.stroke();
		rid = window.requestAnimationFrame( drawCircle );
	};
	drawCircle();
};

var animateDVD = function(){
	var x = Math.floor(Math.random() * 400);
	var y = Math.floor(Math.random() * 249);
	var dx = 1;
	var dy = 1;
	window.cancelAnimationFrame(rid)

	var drawDVD = function(){
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.beginPath();
		var img = new Image();
		img.src = "DVD_logo.png"
		ctx.drawImage(img, x, y, 100, 51);
		x += dx;
		y += dy;
		if (x == 0 || x == c.width-100)
			dx *= -1;
		if (y == 0 || y == c.height-51)
			dy *= -1;
		ctx.closePath();
		ctx.fillStyle = "red";
		ctx.stroke();
		rid = window.requestAnimationFrame( drawDVD );
	};
	drawDVD();
};

var stopIt = function(){
	window.cancelAnimationFrame(rid);
};

var sb = document.getElementById("stop");
sb.addEventListener("click", stopIt);

var cb = document.getElementById("circle");
cb.addEventListener("click", animateCircle)

var db = document.getElementById("dvd");
db.addEventListener("click", animateDVD)