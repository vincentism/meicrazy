
document.write(
    '<meta charset="utf-8">'+
   	'<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
   	'<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">'+
    '<!-- jQuery necessary for Bootstrap\'s JavaScript plugins) -->'+
    '<script src="js/jquery-1.11.2.min.js"></script>'+
    '<!-- Include all compiled plugins (below), or include individual files as needed -->'+
    '<script src="js/bootstrap.min.js"></script>'+
    '<script src="js/jquery.cookie.js"></script>'+
	'<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">'+
    '<!-- Bootstrap -->'+
	'<script src="js/jquery.bxslider.min.js"></script>'+
	'<script src="js/plupload.full.min.js"></script>'+
	'<script src="js/jquery.md5.js"></script>'+	
	'<script src="js/bootstrap-select.js"></script>'+	
	'<script src="js/jquery-ui.min.js"></script>'+	
	'<script src="js/qiniu.js"></script>'+
	'<script src="js/jquery.raty.min.js"></script>      '+
	'<link href="css/bootstrap.min.css" rel="stylesheet">'+
	'<link href="css/adaptive.css" rel="stylesheet" />'+
	'<link href="css/jquery.bxslider.css" rel="stylesheet" />'+
    '<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->'+
    '<!-- WARNING: Respond.js doesn\'t work if you view the page via file:// -->'+
    '<!--[if lt IE 9]>'+
    '  <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>'+
    '  <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>'+
    '<![endif]-->'+
    '<script>'+
'		function logout(){'+
	'		var data = {p0:$.cookie("userId"),p1:\'1\'}; '+
	'		$.getJSON("http://120.27.30.130:8080/api/logout", data, function(modelStr){'+
	'			var model=$.parseJSON(modelStr);'+
	'			if(model.status==0){'+
	'				$.cookie("flag",false);'+
	'				window.location.href="./login.html";'+
	'			}'+
	'		});'+
	'	}'+
	'</script>');

		 
		
	
