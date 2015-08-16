	var change=document.querySelectorAll(".buy");
	var pushcart=document.querySelector(".modal-cart");
	var cartclose=document.querySelector(".modal-cart-close");
	var shop=document.querySelector(".shopping");
	var issue=document.querySelector(".issue-order")
	

	for(var x=0; x<change.length; x++){
	change[x].addEventListener("click", function(event) {
    event.preventDefault();
	pushcart.classList.add("modal-cart-show");
  });
}

	
	cartclose.addEventListener("click",function(event){
	event.preventDefault();
	pushcart.classList.remove("modal-cart-show");
	});
	
	shop.addEventListener("click",function(event){
	event.preventDefault();
	pushcart.classList.remove("modal-cart-show");
	});
	
	issue.addEventListener("click",function(event){
	event.preventDefault();
	pushcart.classList.remove("modal-cart-show");
	});
	
	window.addEventListener("keydown",function(event){
	if (event.keyCode==27){
	if (pushcart.classList.contains("modal-cart-show")){
	pushcart.classList.remove("modal-cart-show")}}});
	
	
	