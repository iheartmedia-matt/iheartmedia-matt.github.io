// jshint devel:true
console.log('\'Allo \'Allo!');

// Custom JS Application Code

$(function() { 
	App.init();
});

var App = { 

	listen: function() { 
		// Application Listeners can be loaded here for easy configuration		
		console.log("Ready and Listening");
	},	

	init: function() {
		// Kick off the listeners
		this.listen();
		// Application has been initalized
        
        // Run custom functions
        resizer();
        
	}

};

function resizer() {
    
    //declare viewport size
    var viewport = $(window).height();
    //declare navbar size
    var navHeight = $('.navbar').height();
    
    //calculate real view size
    var calcSetViewHeight = (viewport-navHeight);
    //set real view size
    $('#headerwrap').height(calcSetViewHeight);
    
    //distribute height to video component as percentage of total viewable height
    var calcSetVideoComponentHeight = (calcSetViewHeight/4)*2.5;
    $('#component-video').height(calcSetVideoComponentHeight);
    
    
    //adjust padding
    $('#headerwrap').css('margin-top', navHeight);
    
    console.log('resizer init');

}