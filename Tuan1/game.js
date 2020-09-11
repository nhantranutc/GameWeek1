var button = document.getElementById("guessButton");
var message = document.getElementById("message");
var past = document.getElementById("past");
var count = 10;
	
button.addEventListener('click', function(){
	var random = Math.floor(Math.random()*10);
    var input = document.getElementById("number");
    if(!input.value){
    	alert("Vui lòng nhập số, không được để trống");
    }else{
    	count --;
    	if(count < 0){
    		alert("Bạn đã hết số lượt đoán");
    		button.disabled  = true;
    		setTimeout(function(){
    			location.reload();
			}, 5000);
    	}else{
    		if(random == parseInt(input.value)){
    			message.innerHTML = "Xin chúc mừng!! Bạn đã đoán đúng. Bạn còn "+ count + " lần đoán";
    			message.style.background = "green";
    			button.disabled  = true;
    			setTimeout(function(){
    				location.reload();
				}, 5000);
    		}else if(random > parseInt(input.value)){
				message.innerHTML = "Xin lỗi, dự đoán của bạn quá thấp. Bạn còn "+ count + " lần đoán";
				message.style.background = "red";
    		}else{
    			message.innerHTML = "Xin lỗi bạn đoán quá cao. Bạn còn "+ count + " lần đoán";
    			message.style.background = "red";
    		}
    		past.append(input.value+ " ") ;
    	}
    	
    }
    
});