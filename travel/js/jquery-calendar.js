var UIJQueryUI = function () {

    
    var handleDatePickers = function () {
     
	    $(".ui_date_picker_trigger input").datepicker({constrainInput: false});
	    $(".ui_date_picker_trigger .add-on").click(function(){
	    	$(".ui_date_picker_trigger input").datepicker("show");
	    });
    }

    var handleDialogs = function () {

    	// basic dialog1
    	$( "#dialog_basic1" ).dialog({
		      autoOpen: false,
		      dialogClass: 'ui-dialog-yellow',
		      show: {
		        effect: "blind",
		        duration: 500
		      },
		      hide: {
		        effect: "explode",
		        duration: 500
		      }
	    });
	 
    }

    return {
        //main function to initiate the module
        init: function () {
            handleDatePickers();
            handleDialogs();
        }

    };

}();