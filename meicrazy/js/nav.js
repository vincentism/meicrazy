document.write(
'			<div class="bef-nav">'+
'			<div class="left"><img id="logo" src="/images/logo.png" alt=""/></div>'+
'			<div style="" class="loginSet btn-group right" role="group" aria-label="...">'+
'				<button type="button" onclick="javascript:window.location.href=\'/beta/login.html\'" id="background" class="personalInfo btn btn-default btnBc">登陆</button>'+
'				<button type="button" onclick="javascript:window.location.href=\'/beta/register.html\'" id="background" class="personalInfo btn btn-default btnBc">注册</button>'+
'			</div>'+
'			<div class="logoutSet btn-group right" role="group" aria-label="...">'+
'				<button type="button" onclick="window.location.href=\'personalInfo.html\'" id="userNickName background" class="personalInfo btn btn-default btnBc"><script>document.write($.cookie().userName);</script></button>'+
'				<button type="button" onclick="logout();" id="logout background" class="personalInfo btn btn-default btnBc">注销</button>'+
'			</div>'+
'			<div class="blankbar"></div>'+
'		<script>'+
'			var flag=$.cookie().flag;	'+
'			if (flag=="true"){'+
'				$(".loginSet").hide();'+
'				$(".logoutSet").show();'+
'			}else{'+
'				$(".loginSet").show();'+
'				$(".logoutSet").hide();'+
'			}'+
'		</script>'+
'		<nav>'+
'		  <div class="container-fluid" id="nav">'+
'			  <ul class="mainNav">'+
'				<li class="standardLi"><a href="index.html">首页</a></li>'+
'				<li class="standardLi"><a href="wom-headlines.html">口碑</a></li>'+
'				<li class="standardLi"><a href="trialist.html">试用</a></li>'+
'				<li class="optionalLi"><a href="articlelist.html">美肤必看</a></li>'+
'			<!-- 	<li class="optionalLi"><a href="personalInfo.html">个人信息</a></li>'+
'				<li class="optionalLi"><a href="bag.html">化妆包</a></li> -->' +

'				<li  class="standardLi dropdown">'+
'				  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">更多<span class="caret"></span></a>'+
'				   <ul class="dropdown-menu" role="menu">'+
'				<!--	<li class="dropLi" dropoptionalLi style="text-align:left;"><a style="font-size:1.2em;padding-left:0.6em;color:#ff3366;" href="personalInfo.html">个人信息</a></li>-->'+
'					<li class="dropLi dropoptionalLi" style="text-align:left;"><a style="font-size:1.2em;padding-left:0.6em;color:#ff3366;" href="articlelist.html">美肤必看</a></li>'+
'				<!--	<li class="dropLi" dropoptionalLi style="text-align:left;"><a style="font-size:1.2em;padding-left:0.6em;color:#ff3366;" href="bag.html">化妆包</a></li>-->'+
'                   <li class="dropLi" dropoptionalLi style="text-align:left;"><a style="font-size:1.2em;padding-left:0.6em;color:#ff3366;" href="downloadIndex.html">APP下载</a></li>'+
'					'+
'				  </ul>'+
'				</li>'+
'			  </ul>'+
'			  <ul class="subNav">'+
'				<li class="standardLi downloadBtn"><a href="downloadIndex.html"><span class="glyphicon glyphicon-phone"></span>APP下载</a></li>'+
'			  </ul>'+
'             <div class="blankbar"></div>'+
'		  </div><!-- /.container-fluid -->'+
'		</nav>'+
'		</div>'
);