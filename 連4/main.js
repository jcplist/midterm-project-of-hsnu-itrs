$("html").keypress(function(event){
	if(event.which == 13){
		window.location.reload();
	}
});
for(var i = 5;i>=0;i--){
	$("tbody").append("<tr id=\""+i+"\"></tr>");
	for(var ii = 0;ii<7;ii++){
		$("#"+i).append("<td class=\""+ii+"\"></td>");
	}
}
var all = Array(7);
for(var i = 0;i<7;i++){
	all[i] = Array(7);
	all[i][6] = 0;
}
var count = 0;
var O = true;
function on(){
	$("td").click(function(){
		if(all[$(this).attr("class")/1][6]<6){
			$("td").off("click");
			all[$(this).attr("class")/1][all[$(this).attr("class")/1][6]] = O?"O":"X";
			$($($("tbody").find("#"+all[$(this).attr("class")/1][6])).find("."+$(this).attr("class"))).text(O?"O":"X");
			all[$(this).attr("class")/1][6]++;
			O = O?false:true;
			count++;
			fight($(this).attr("class")/1,all[$(this).attr("class")/1][6]-1,O?"X":"O");
		}
	});
}
function fight(x,y,a){
	var c = 1;
	var y1 = y+1;
	while(y1<6&&all[x][y1]==a){
		c++;
		y1++;
	}
	y1 = y-1;
	while(y1>=0&&all[x][y1]==a){
		c++;
		y1--;
	}
	if(c>=4){
		swal({
			title:a+" wins!",
			icon:"success",
		});
		return;
	}
	c = 1;
	var x1 = x+1;
	while(x1<7&&all[x1][y]==a){
		c++;
		x1++;
	}
	x1 = x-1;
	while(x1>=0&&all[x1][y]==a){
		c++;
		x1--;
	}
	if(c>=4){
		swal({
			title:a+" wins!",
			icon:"success",
		});
		return;
	}
	c = 1;
	x1 = x+1;
	y1 = y+1;
	while(x1<7&&y1<6&&all[x1][y1]==a){
		c++;
		x1++;
		y1++;
	}
	x1 = x-1;
	y1 = y-1;
	while(x1>=0&&y1>=0&&all[x1][y1]==a){
		c++;
		x1--;
		y1--;
	}
	if(c>=4){
		swal({
			title:a+" wins!",
			icon:"success",
		});
		return;
	}
	c = 1;
	x1 = x+1;
	y1 = y-1;
	while(x1<7&&y1>=0&&all[x1][y1]==a){
		c++;
		x1++;
		y1--;
	}
	x1 = x-1;
	y1 = y+1;
	while(x1>=0&&y1<6&&all[x1][y1]==a){
		c++;
		x1--;
		y1++;
	}
	if(c>=4){
		swal({
			title:a+" wins!",
			icon:"success",
		});
		return;
	}
	if(count >= 42){
		swal({
			title:"Flat!",
			icon:"warning",
		});
		return;
	}
	on();
}
on();