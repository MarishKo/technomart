
	var link=document.querySelector(".write-us");
	var popup=document.querySelector(".modal-content");
	var close=document.querySelector(".modal-content-close");
	var login=popup.querySelector('[name="login"]');
	var mail=popup.querySelector('[name="mail"]');
	var form=popup.querySelector("form");
	var cancel=popup.querySelector(".btn-cancel");
	var storage = localStorage.getItem("login");
	
	
	link.addEventListener("click",function(event){
	event.preventDefault();
	popup.classList.add("modal-content-show");
	if(storage){
	login.value=storage;
	mail.focus();
	}else{
	login.focus();
	}
	});
	
	close.addEventListener("click",function(event){
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	});
	
	
	
	form.addEventListener("submit",function(event){
	if(!(login.value && mail.value)){
	if(popup.classList.contains("modal-error")){
	event.preventDefault();
	popup.classList.remove("modal-error");
	}
	else{
	event.preventDefault();
	popup.classList.add("modal-error");
	}}
	else{
	LocalStorage.setItem("login", login.value);
	}
	});
	
	cancel.addEventListener("click",function(event){
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-error");
	});
	
	window.addEventListener("keydown",function(event){
	if (event.keyCode==27){
	if (popup.classList.contains("modal-content-show")){
	popup.classList.remove("modal-content-show")}}});
	
	