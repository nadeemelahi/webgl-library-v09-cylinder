/* author nadeem elahi
 * nadeem@webscripts.biz 
 * nadeem.elahi@gmail.com 
 * */
function generate3Darray( data, ilim, jlim, klim ){
	var idx, jdx, kdx;

	for ( kdx = 0 ; kdx < klim ; kdx ++ ) {

		data[kdx] = [];

		for ( jdx = 0 ; jdx < jlim ; jdx ++ ) {

			data[kdx][jdx] = [];

			for ( idx = 0 ; idx < ilim ; idx ++ ) {

				data[kdx][jdx][idx] = [];

			}
		}
	}

}
