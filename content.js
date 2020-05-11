console.log("內插腳本載入"); //id=col-xs-24 ico ico-clock -time
//button id= btn btn-white btn-lg btn-block
//$(".btn.btn-white.btn-lg.btn-block").get(0).click();
//sidebar class=col-md-8 col-sm-6

$(".col-xs-24.ico.ico-clock.-time").each(function(index){
    
    var str=$(this).text();
    var num=str.match(/\d+/g);
    
    var starthour= parseInt(num[0]); 
    var startmin=parseInt(num[1]);
    var endhour=parseInt(num[2]);
    var endmin=parseInt(num[3]);
    var rod=0;

    if (num[2] != null)
    { 
        var min = endmin - startmin;
					
	    if(min<0) //進位
	    {
	    	var rod = 1;
		    var min = 60+min; 
	    }
	    var hour= endhour-starthour-rod;
	    if(hour<0) //case加班到隔天 2400+(下班-加班)
	    {
	    	hour+=24;
        }

        var overhour = hour-10; 
	    var overmin  = Math.floor(min/30)*30; //加班以半小時為單位
        var overtime = overhour*100+min; //用hhmm判斷
    
        $(this).append('<div class="overtime" id="date'+index+'" >'+
                        hour.toLocaleString('en-US', {minimumIntegerDigits:2})+":"+min.toLocaleString('en-US', {minimumIntegerDigits:2})
                     +"</div>");

        if(overtime>=30)//case超過加班時數
        {
            $("#date"+index).css('color', 'red');
        }
        else
        {
            $("#date"+index).css('color', 'blue');
        }
    }
    else
    {
        return;
    }
});

$(".col-md-8.col-sm-6").append('<div class="overtimeBar"></div>');