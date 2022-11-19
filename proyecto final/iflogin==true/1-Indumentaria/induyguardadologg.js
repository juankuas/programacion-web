/*
 function guardar1 (){
    document.getElementById("btn_a_guadrar_activo_1").id="btn_a_guardar_inactivo_1" 
    document.getElementById("btn_ya_guardado_inactivo_1").id="btn_ya_guardado_activo_1"
}
*/





let favoitoscontainer = document.querySelector(".favoitoscontainer");


let botonguardado = document.querySelectorAll(".botonguardado");
botonguardado.forEach(addtofavoritos => {
    addtofavoritos.addEventListener('click', addToFavoritosClickedCompu)
})

function addToFavoritosClickedCompu(event){
    let button = event.target;
    let card = button.closest('.card')
    console.log(card)

    let img = card.querySelector('.card-img-top').src;
    let cardtitle = card.querySelector('.card-title').textContent;
    let cardtext = card.querySelector('.card-text').textContent;

    const favoritosCardText = favoitoscontainer.getElementsByClassName("card-text");

    for (var i = 0; i < favoritosCardText.length; i++) {
        if (favoritosCardText[i].innerText === cardtext) return;
    }

    // for (let currentCardText of favoritosCardText) {
    //     if (currentCardText.innerText === cardtext) return;
    // }                                                              " For raro q me explico un amigo"

    let hrefweb = card.querySelector('#webbut').getAttribute('href')
    let hrefinsta = card.querySelector('#instabut').getAttribute('href')


    
    

    //card.querySelector('.paddfavs').className = "paddfavsNOT", esto es viejo, capaz lo vuelvo a usar (no creo)




    addcardtofavoritosCompu(img, cardtitle, cardtext, hrefweb, hrefinsta)


}

function addcardtofavoritosCompu(img, cardtitle, cardtext, hrefweb, hrefinsta){



    console.log(img)
    console.log( cardtitle )
    console.log(cardtext )
    let favoritoscard = document.createElement('div');
    const favoritosCardContent = `
    <div class="card" style="width: 18rem;">
          
          <img src="${img}" id="imgcompucardfav" alt="Ropa">
      
        <div class="card-body">
          <h5 class="card-title">${cardtitle} </h5>


          <p class="card-text">${cardtext}</p>
          <a id="webbut" href="${hrefweb}" class="btn btn-outline-primary" target="_blank"><p id="webinstap">Sitio Web</p></a>
          <a id="instabut" href="${hrefinsta}" class="btn btn-outline-primary" target="_blank"><p id="webinstap">Instagram</p></a>
          <button class="btn_eliminar_de_favs"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
        </svg></button>
        </div>
    </div>`;





    favoritoscard.innerHTML = favoritosCardContent;
    favoitoscontainer.append(favoritoscard);

    favoritoscard.querySelector('.btn_eliminar_de_favs').addEventListener('click', deleteCardFavCompu)

    

    
}


function deleteCardFavCompu(event){
    const buttonCliked = event.target;
    buttonCliked.closest('.card').remove();

}



// celu
let botonguardadoCelu = document.querySelectorAll(".botonguardadoCelu");
botonguardadoCelu.forEach(addtofavoritosCelu => {
    addtofavoritosCelu.addEventListener('click', addToFavoritosClickedCelu)
})

function addToFavoritosClickedCelu(event){
    const buttonCelu = event.target;
    const cardcelu = buttonCelu.closest('.cardcelu')
    console.log(cardcelu)

    let imgcelu = cardcelu.querySelector('.imgindumentaria').src;
    let titlemodal = cardcelu.querySelector('.lead').textContent;
    let pmodalcelu = cardcelu.querySelector('.pmodalcelu').textContent;
    let CeluWebHref = cardcelu.querySelector('#CeluWebHref').getAttribute('href')
    let CeluInstaHref = cardcelu.querySelector('#CeluInstaHref').getAttribute('href')
    

    const favoritosCardTextCelu = favoitoscontainer.getElementsByClassName("pmodalcelu");

    for (var i = 0; i < favoritosCardTextCelu.length; i++) {
        if (favoritosCardTextCelu[i].innerText === pmodalcelu) return;
    }


    addcardtofavoritosCelu(imgcelu, titlemodal, pmodalcelu, CeluInstaHref, CeluWebHref)
}
//



function addcardtofavoritosCelu(imgcelu, titlemodal, pmodalcelu){



    console.log(imgcelu)
    console.log(titlemodal)
    console.log(pmodalcelu)
    let favoritoscardCelu = document.createElement('div');
    const favoritosCardContentCelu = `
    <div class="cardcelufav" style="width: 18rem; heigth:22rem;">
          
      <img src="${imgcelu}" class="imgcardfav" alt="Ropa">

      <div class="card-bodyfav">
        <h5 class="card-title">${titlemodal} </h5>


        <p class="card-text">${pmodalcelu}</p>
        <a id="webbut" href="${CeluWebHref}" class="btn btn-outline-primary" target="_blank"><p id="webinstap">Sitio Web</p></a>
        <a id="instabut" href="${CeluInstaHref}" class="btn btn-outline-primary" target="_blank"><p id="webinstap">Instagram</p></a>
        <button class="btn_eliminar_de_favs"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
        </svg></button>
      </div>
    </div>


`;

        





    favoritoscardCelu.innerHTML = favoritosCardContentCelu;
    favoitoscontainer.append(favoritoscardCelu);

    favoritoscardCelu.querySelector('.btn_eliminar_de_favs').addEventListener('click', deleteCardFavCelu)

    

    
}


function deleteCardFavCelu(event){
    const buttonClikedCelu = event.target;
    buttonClikedCelu.closest('.cardcelufav').remove();

}


