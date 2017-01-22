$( function() {
    $( ".datepicker" ).datepicker();
	$('.timepicker-one').timepicker();
	
	
	$('.Select_Schedule').on('change', function(){
      
	  if($(this).val()=='one'){
		$(".dateSchedule").show;
		$(".timeBlock").show();
		$(".timeOne").show();
		$(".timeTwo").hide();
		$(".timeThree").hide();
	  }
	  else if($(this).val()=='two'){
		$(".dateSchedule").show();
		$(".timeBlock").show();
		$(".timeOne, .timeTwo").show();
		$(".timeThree").hide();
	  }
	  else if($(this).val()=='three'){
		$(".dateSchedule").show();
		$(".timeBlock").show();
		$(".timeOne, .timeTwo, .timeThree").show();

	  }
	  else
	  {
		  
	  }
});


	
  } );
