/* метод открытия и закрытия модального окна*/
function setDisplayStyleModal(modal,e)
{				
	e.preventDefault();
	
	if(modal.classList.contains("modal-show"))
		{		  
			modal.classList.remove("modal-show");
		}
	else 
		{	
			modal.classList.add("modal-show");			
		}	
}
/*метод создание события нажатия кнопки "закрыть"*/
function closeModalEvent(modal)
{
	var btnclose = modal.querySelectorAll(".js-close");

  for (var i = 0; i < btnclose.length; i++) 
		{
    	btnclose[i].addEventListener("click",function(e){
				setDisplayStyleModal(modal,e);
			});
  	}
}

/* Модальное окно покупки */
var modalbuy = document.getElementById("modal-buy"); 

if(modalbuy)
{
	  closeModalEvent(modalbuy);
		var buybtn = document.querySelectorAll(".btn-buy");

    for (var i = 0; i < buybtn.length; i++) 
		{
    	buybtn[i].addEventListener("click",function(e){
				setDisplayStyleModal(modalbuy,e);
			});
  	}
}

/* Модальное окно карта */
var modalmap = document.getElementById("modal-map"); 
if(modalmap)
{
	closeModalEvent(modalmap);
	var btnmap = document.querySelector(".contacts>a.map");

	btnmap.addEventListener("click",function(e){
			setDisplayStyleModal(modalmap,e);
	});
}

/* Модальное окно написать нам */

var modalwrite = document.getElementById("modal-write");

if(modalwrite)
{
	var btnwrite = document.querySelector(".js-btn-write");
	var first_name = modalwrite.querySelector("input[name='first-name']");
	var email = modalwrite.querySelector("input[name='email']");
	var text = modalwrite.querySelector("#text");
	var formwrite = modalwrite.querySelector("form");
	var storage = "";
	if('undefined'!=typeof(localStorage)){
		storage = localStorage.getItem("first_name");
	}

  formwrite.addEventListener("submit", function(e) {
        if (!first_name.value) {
          e.preventDefault();
          console.log("Нужно ввести Имя"); 
        } else {
					console.log("Запись first_name"); 
          if('undefined'!=typeof(localStorage)) {localStorage.setItem("first_name", first_name.value)};
        }
      });

	
	/*Создание события нажатия на кнопку закрыть*/
	closeModalEvent(modalwrite);
	
	/*Создание события открытия и закрытия формы*/
	
	btnwrite.addEventListener("click", function(e){
		setDisplayStyleModal(modalwrite,e);
        if (storage) {
          first_name.value = storage;
					email.focus();
        }
				else
				{
					first_name.focus();																 
				}
	});	
}
 
window.addEventListener("keydown", function(e) {
        if (e.keyCode === 27) {
          
					var popup = document.querySelectorAll(".modal");

					for (var i = 0; i < popup.length; i++) 
						{
							if (popup[i].classList.contains("modal-show")) {
								popup[i].classList.remove("modal-show");
          		}						
						}
        }
      });






