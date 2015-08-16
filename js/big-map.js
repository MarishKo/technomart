﻿	var mapOpen=document.querySelector(".open-map");
	var mapPopup=document.querySelector(".modal-content-map");
	var mapClose=document.querySelector(".modal-map-close");
	var Yamap=document.querySelector(".ya-map");
	var Yamapclose=Yamap.querySelector(".yandex-map-close");
	
	mapOpen.addEventListener("click",function(event){
	event.preventDefault();
	mapPopup.classList.add("modal-content-show");
	});
	
	mapClose.addEventListener("click",function(event){
	event.preventDefault();
	mapPopup.classList.remove("modal-content-show");
	});
	
	Yamapclose.addEventListener("click",function(event){
	event.preventDefault();
	mapPopup.classList.remove("modal-content-show");
	});
	
	window.addEventListener("keydown",function(event){
	if (event.keyCode==27){
	if (mapPopup.classList.contains("modal-content-show")){
	mapPopup.classList.remove("modal-content-show")}}});