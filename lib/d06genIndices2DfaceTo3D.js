/* author nadeem elahi
 * nadeem@webscripts.biz 
 * nadeem.elahi@gmail.com 
 * */

function genCylinderByNumberOfDivisions(indicesOut , size){

	var idx; 

	// top face
	function genCylinderTop(indices , size){

		// triangle fan
		for ( idx = 1 ; idx < size; idx ++ ){
			indices.push( 0 );
			indices.push( idx );
			indices.push( idx + 1 );
		}

		// closing it out
		indices.push( 0 );
		indices.push( idx );
		indices.push( 1 );

	}

	var indicesTop = [];
	genCylinderTop( indicesTop , size );
	// print3D( indicesTop ) ;
	

	// bottom will be same geometry 
	// just offset each index by size
	function doubleBottomFromTop( indicesBottom , indicesTop , offset ){ 

		var len = indicesTop.length;

		for ( idx = 0 ; idx < len ; idx ++ ){

			indicesBottom [ idx ] = indicesTop [ idx ] + offset;

		}

	}

	var offset = size + 1;
	var indicesBottom = [];
	doubleBottomFromTop( indicesBottom , indicesTop , offset );
	// console.log("--------");
	// print3D( indicesBottom ) ;

	function reverseTriangleOrdering( indicesReversed , indicesIn ){

		var len = indicesIn.length;

		for ( idx = 0 ; idx < len ; idx += 3 ){

			indicesReversed [ idx ] = indicesIn [ idx ] ;
			indicesReversed [ idx + 1 ] = indicesIn [ idx + 2 ] ;
			indicesReversed [ idx + 2 ] = indicesIn [ idx + 1 ] ;

		}
	}

	var indicesBottomReversed = [];
	reverseTriangleOrdering ( indicesBottomReversed , indicesBottom );

	// console.log("--------");
	// print3D( indicesBottomReversed ) ;

	var topEdges = [] , bottomEdges = [] ;

	function makeEdgesList( edges, first , last ){
		
		for ( idx = first ; idx <= last ; idx ++ ) {

			edges.push( idx );
		}
		edges.push( first );
	}

	// console.log("--------");

	makeEdgesList( topEdges, 1 , size );
	// console.log( topEdges );

	makeEdgesList( bottomEdges , ( size + 2 ) , ( 2 * size + 1 ) );
	// console.log( bottomEdges );
	
	function generateEdgeFacesIndices( edgesFacesIndices , topEdges , bottomEdges , size ) {

		for ( idx = 0; idx < size ; idx ++ ){

			edgesFacesIndices.push( bottomEdges [ idx ] );
			edgesFacesIndices.push( bottomEdges [ idx + 1 ] );
			edgesFacesIndices.push( topEdges [ idx ] );

			edgesFacesIndices.push( bottomEdges [ idx + 1 ] );
			edgesFacesIndices.push( topEdges [ idx + 1 ] );
			edgesFacesIndices.push( topEdges [ idx ] );
		}

	}

	var edgesFacesIndices = []; 
	generateEdgeFacesIndices( edgesFacesIndices , topEdges , bottomEdges , size ) ;
	// print3D( edgesFacesIndices ) ;

	var tmp = indicesTop.concat( indicesBottomReversed );
	tmp = tmp.concat( edgesFacesIndices );
	var len = tmp.length;
	for( idx = 0; idx < len; idx++) {

		indicesOut[idx] = tmp[idx];
	}
}

// test
//var size = 5, indicesCylinder = [];
//genCylinderByNumberOfDivisions( indicesCylinder , size );
