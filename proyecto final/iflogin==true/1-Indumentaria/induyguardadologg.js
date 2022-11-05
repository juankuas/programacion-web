
 function guardar1 (){
    document.getElementById("btn_a_guadrar_activo_1").id="btn_a_guardar_inactivo_1" 
    document.getElementById("btn_ya_guardado_inactivo_1").id="btn_ya_guardado_activo_1"
}






const favoitoscontainer = document.querySelector(".favoitoscontainer");


const botonguardado = document.querySelectorAll(".botonguardado");
botonguardado.forEach(addtofavoritos => {
    addtofavoritos.addEventListener('click', addToFavoritosClickedCompu)
})

function addToFavoritosClickedCompu(event){
    const button = event.target;
    const card = button.closest('.card')
    const cardcelu = button.closest('.cardcelu')
    console.log(card)
    console.log(cardcelu)

    const img = card.querySelector('.card-img-top').src;
    const cardtitle = card.querySelector('.card-title').textContent;
    const cardtext = card.querySelector('.card-text').textContent;



    addcardtofavoritosCompu(img, cardtitle, cardtext)

}

function addcardtofavoritosCompu(img, cardtitle, cardtext){
    console.log(img)
    console.log( cardtitle )
    console.log(cardtext )
    let favoritoscard = document.createElement('div');
    const favoritosCardContent = `
    <div class="card" style="width: 18rem;" id="card1">
          
          <img src="${img}" id="imgcompucardfav" alt="Ropa">
      
        <div class="card-body">
          <h5 class="card-title">${cardtitle} </h5>


          <p class="card-text">${cardtext}</p>
          <a id="webinstabut" href="https://undefinedba.com" class="btn btn-outline-primary" target="_blank"><p id="webinstap">Sitio Web</p></a>
          <a id="webinstabut" href="https://www.instagram.com/undefined_ba/" class="btn btn-outline-primary" target="_blank"><p id="webinstap">Instagram</p></a>
          <button class="btn_eliminar_de_favs"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
        </svg></button>
        </div>
    </div>`;





    favoritoscard.innerHTML = favoritosCardContent;
    favoitoscontainer.append(favoritoscard);

    favoritoscard.querySelector('.btn_eliminar_de_favs').addEventListener('click', deleteCardFav)
    
}


function deleteCardFav(event){
    const buttonCliked = event.target;
    buttonCliked.closest('.card').remove();
}


