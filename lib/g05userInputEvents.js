// author: nadeem@webscripts.biz
// DEPENDS matTSR{}

new function(){
	var isDragging = false,
		pvmx , pvmy, // pv -previous  mx -mouse x location 
		rotdamp = 80 ; // scale down the amount of rotation 

	// mouse
	//
	function mouseDown(e){ 
		if(!e) var e = window.event;
		isDragging = true; 
		pvmx = e.clientX ;
		pvmy = e.clientY ;
	}
	function mouseMove(e){
		if(!isDragging) return;
		if(!e) var e = window.event;
		// dragging on x should rotate y and vice versa
		data.yAngle += (e.clientX - pvmx) / rotdamp;
		data.xAngle += (e.clientY - pvmy) / rotdamp;
	}
	function mouseUp(e){ isDragging = false; }

	// fullscreen canvas so window.clientX = canvas.clientX
	window.addEventListener("mousedown", mouseDown, false);
	window.addEventListener("mouseup", mouseUp, false);
	window.addEventListener("mouseout", mouseUp, false);
	window.addEventListener("mousemove", mouseMove, false);


	// touch screen

	function touchStart(e){ 
		if(!e) var e = window.event;
		isDragging = true; 
		pvmx = e.touches[0].clientX ;
		pvmy = e.touches[0].clientY ;
	}
	function touchMove(e){
		if(!isDragging) return;
		if(!e) var e = window.event;
		// dragging on x should rotate y and vice versa
		data.yAngle += (e.touches[0].clientX - pvmx) / rotdamp;
		data.xAngle += (e.touches[0].clientY - pvmy) / rotdamp;
	}
	function touchEnd(e){ isDragging = false; }


	window.addEventListener("touchstart", touchStart, false);
	window.addEventListener("touchend", touchEnd, false);
	window.addEventListener("touchcancel", touchEnd, false);
	window.addEventListener("touchmove", touchMove, false);
};

var range = new function(){
	var rangeInput = document.getElementById("rangeInput");
	function rangeSlide(e){
		if(!e) var e = window.event;
		currentColour = this.value / 100 ;
	}
	rangeInput.addEventListener("input", rangeSlide, false);

	this.setPosition = function(percent){
		rangeInput.value = percent;
	}
};

new function(){


	var sideBarVisible = 1; 

	var sidebar = document.getElementById("sidebar");

	function showSidebar(){
		sidebar.style.width = "250px";
		sideBarVisible = 1;
	}

	function hideSidebar(){
		sidebar.style.width = "0";
		sideBarVisible = 0;
	}

	function clickh(e){
		if( !e ) var e = window.event;

		if( e.target.id == "sidebarBtn" ) {

			showSidebar();

		} else if( sideBarVisible ) {

			hideSidebar();

		}
	}

	window.addEventListener("click", clickh, false);
};


