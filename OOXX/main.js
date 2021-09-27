$("html").keypress(function(event){
	if(event.which == 13){
		window.location.reload();
	}
});
for(var i = 7;i>=1;i-=3){
	$("tbody").append("<tr class=\""+i+"\"></tr>");
	for(var ii = 0;ii<=2;ii++){
		$("."+i+"").append("<td id=\""+(i+ii)+"\"></td>");
	}
}
function on(){
	$("td").click(function(){
		if($(this).text()==""){
			$("td").off("click");
			$(this).text("O");
			fight($(this).attr("id"));
		}
	});
}
var count = 0;
var arr = Array(10);
var check = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var check2 = [1,3,7,9,2,4,6,8,5];
function fight(num){
	num/=1;
	arr[num]="O";
	count++;
	if(count == 1){
		if(num==5){
			put(1);
			on();
			return;
		}else{
			put(5);
			on();
			return;
		}
	}else if(!win()){
		for(var i = 0;i<check.length;i++){
			var a,b,c;
			a = arr[check[i][0]];
			b = arr[check[i][1]];
			c = arr[check[i][2]];
			if(a=="X"&&b=="X"){
				if(c==undefined){
					put(check[i][2]);
					win();
					return;
				}
			}else if(c=="X"&&b=="X"){
				if(a==undefined){
					put(check[i][0]);
					win();
					return;
				}
			}else if(a=="X"&&c=="X"){
				if(b==undefined){
					put(check[i][1]);
					win();
					return;
				}
			}
		}
		for(var i = 0;i<check.length;i++){
			var a,b,c;
			a = arr[check[i][0]];
			b = arr[check[i][1]];
			c = arr[check[i][2]];
			if(a=="O"&&b=="O"){
				if(c==undefined){
					put(check[i][2]);
					on();
					return;
				}
			}else if(c=="O"&&b=="O"){
				if(a==undefined){
					put(check[i][0]);
					on();
					return;
				}
			}else if(a=="O"&&c=="O"){
				if(b==undefined){
					put(check[i][1]);
					on();
					return;
				}
			}
		}
		if(count == 2){
			if((arr[1]=="O"&&arr[9]=="O")||(arr[3]=="O"&&arr[7]=="O")){
				put(2);
				on();
				return;
			}else if((arr[8]=="O"&&arr[6]=="O")){
				put(9);
				on();
				return;
			}
		}
		for(var i = 0;i<check2.length;i++){
			if(arr[check2[i]]!="O"&&arr[check2[i]]!="X"){
				put(check2[i]);
				on();
				return;
			}
		}
	}
}
function put(num){
	$("#"+num).text("X");
	arr[num]="X";
}
function win(){
	for(var i = 0;i<check.length;i++){
		var a,b,c;
		a = arr[check[i][0]];
		b = arr[check[i][1]];
		c = arr[check[i][2]];
		if(a == "O"&&b == "O"&&c == "O"){
			swal({
				title:"You win!",
				icon:"success"
			});
			return true;
		}
		if(a == "X"&&b == "X"&&c == "X"){
			swal({
				title:"輸電腦啦!",
				text:"哈哈哈你居然輸電腦",
				icon:"error"
			});
			return true;
		}
	}
	if(count == 5){
		swal({
			title:"Flat!",
			icon:"warning"
		});
	}
	return false;
}
on();