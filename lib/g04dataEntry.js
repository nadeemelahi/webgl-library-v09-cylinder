// author: Ned - Nadeem Elahi nadeem@webscripts.biz

function d2r(deg){ return deg * Math.PI / 180; }

var vertsCircle = [];
var divisions = 9;
var angle = 360 / divisions;
var rcosa, rsina;
// radius = 1
// 360 / 5 = 72
// center 
vertsCircle.push(0); vertsCircle.push(0);

vertsCircle.push(1); vertsCircle.push(0); // 0

function pushXYbyAngle( verts , idx , angle ){

	rcosa = Math.cos ( d2r( idx * angle ) );
	rsina = Math.sin ( d2r( idx * angle ) );
	verts.push( rcosa ); 
	verts.push( rsina ); 

}

for( var idx = 1 ; idx < divisions ; idx ++ ){
	pushXYbyAngle( vertsCircle , idx , angle );
}

var vertsIn = vertsCircle;

var vertsFront = [];
var vertsBack = [];
convert2Dto3D(vertsFront, vertsIn, -1); 
convert2Dto3D(vertsBack, vertsIn,  1); 
var vertsCube = [];
vertsCube = vertsFront.concat(vertsBack);

var indicesCylinder = [];
genCylinderByNumberOfDivisions( indicesCylinder , divisions);

var indices = indicesCylinder;

var verts = [];
genVertsByIndices(indices, verts, vertsCube);


var vertsCnt = verts.length / 3;

// 5 divisions, 5 top, 5 bottom, 5*2 sides
// 6 divisions, 6 top, 6 bottom, 6*2 sides
// x divisions, x top, x bottom, 2*x sides`

var coloursIn = [

	0.1 , 0.1 , 0.0 , // light yellow 
	0.2 , 0.2 , 0.0 , // light yellow 
	0.3 , 0.3 , 0.0 , // light yellow 
	0.4 , 0.4 , 0.0 , // light yellow 
	0.5 , 0.5 , 0.0 , // light yellow 
	0.6 , 0.6 , 0.0 , // light yellow 
	0.7 , 0.7 , 0.0 , // light yellow 
	0.8 , 0.8 , 0.0 , // light yellow 
	0.9 , 0.9 , 0.0 , // light yellow 

	0.0 , 0.1 , 0.1 , // light yellow 
	0.0 , 0.2 , 0.2 , // light yellow 
	0.0 , 0.3 , 0.3 , // light yellow 
	0.0 , 0.4 , 0.4 , // light yellow 
	0.0 , 0.5 , 0.5 , // 
	0.0 , 0.6 , 0.6 , // 
	0.0 , 0.7 , 0.7 , // 
	0.0 , 0.8 , 0.8 , // 
	0.0 , 0.9 , 0.9 , // 

	// 5 edge face
	0.1 , 0.1 , 0.1 , // light gray 
	0.1 , 0.1 , 0.1 , // light gray 

	0.2 , 0.2 , 0.2 , // light gray 
	0.2 , 0.2 , 0.2 , // light gray 

	0.3 , 0.3 , 0.3 , // light gray 
	0.3 , 0.3 , 0.3 , // light gray 

	0.4 , 0.4 , 0.4 , // light gray 
	0.4 , 0.4 , 0.4 , // light gray 

	0.5 , 0.5 , 0.5 , // light gray 
	0.5 , 0.5 , 0.5 , // light gray 

	0.6 , 0.6 , 0.6 , // light gray 
	0.6 , 0.6 , 0.6 , // light gray 

	0.7 , 0.7 , 0.7 , // light gray 
	0.7 , 0.7 , 0.7 , // light gray 

	0.8 , 0.8 , 0.8 , // light gray 
	0.8 , 0.8 , 0.8 , // light gray 

	0.9 , 0.9 , 0.9 , // light gray 
	0.9 , 0.9 , 0.9 , // light gray 
];

var colours = [];

genThriceColoursArray( colours , coloursIn ) ;




