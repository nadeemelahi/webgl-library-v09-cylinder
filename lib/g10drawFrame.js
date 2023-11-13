// author: Ned - Nadeem Elahi nadeem@webscripts.biz

ngl.setShaderProgByIndex( 0 );

var dim3d = 3;

ngl.loadAttribute(colours, "colour", dim3d);
ngl.loadAttribute(verts, "vert", dim3d);

function draw_verts_colours(){

	data.load_tsrp();

	ngl.draw(0,vertsCnt);

}

var speed = 100,
	angleIncr = 0.5;

drawFrame(); 
function drawFrame(){

	ngl.clear();

	draw_verts_colours();
	
	animateXYrotation();
}

function animateXYrotation(){

	data.xAngle = data.xAngle + angleIncr; 
	data.yAngle = data.yAngle + angleIncr;

	if(data.xAngle > 360) data.xAngle = 0;
	if(data.yAngle > 360) data.yAngle = 0;

	data.load_tsrp();

	setTimeout(drawFrame, speed);
}
