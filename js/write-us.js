function setDisplayStyleModal(id_modal)
{	
		
	var modal = document.querySelector("#"+id_modal);
	
	if(modal.style.display=="none" || modal.style.display=="")
			modal.style.display = "block";
	else 
			modal.style.display = "none";
	
	return false;
}


var buybtn = document.querySelectorAll(".btn-buy");

for (var i = 0; i < buybtn.length; i++) {
	buybtn[i].addEventListener("click",function(e){
		setDisplayStyleModal('modal-buy');
	});
}