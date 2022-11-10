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
botonguardado.forEach(addtofavoritosCelu => {
    addtofavoritosCelu.addEventListener('click', addToFavoritosClickedCelu)
})

function addToFavoritosClickedCelu(event){
    const button = event.target;
    const cardcelu = button.closest('.cardcelu')
    console.log(cardcelu)

    const imgcelu = card.querySelector('.imgindumentaria').src;
    const titlemodal = card.querySelector('.lead').textContent;
    const pmodalcelu = card.querySelector('.pmodalcelu').textContent;




    addcardtofavoritosCelu(imgcelu, titlemodal, pmodalcelu)
}
//



function addcardtofavoritosCelu(imgcelu, titlemodal, pmodalcelu){



    console.log(imgcelu)
    console.log( titlemodal)
    console.log(pmodalcelu)
    let favoritoscardCelu = document.createElement('div');
    const favoritosCardContentCelu = `
    <div class="cardcelu">
          <button class="opnmodal" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalcelu8">
            <img class="imgindumentaria" src="${imgcelu}" alt="indumentaria">
          </button>

          <div class="modal fade" id="exampleModalcelu8" tabindex="-1" aria-labelledby="exampleModalceluLabel8" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel"></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img class="${imgcelu}" src="./img indumentaria/buz und.jpg" alt="indumentaria">
                  <br><br>
                  <h4 class="lead">${titlemodal}/h4>
                  <button class="botonguardadoCelu">
                  </button>
                  <p class="pmodalcelu">${pmodalcelu}</p>
                  <a href="https://undefinedba.com" id="btnmodalcelu" class="btn btn-primary" target="_blank"> Sitio Web</a>
                  <p></p>
                  <a href="https://www.instagram.com/undefined_ba/" id="btnmodalcelu" class="btn btn-primary" target="_blank">Instagram</a>
                  <button class="btn_eliminar_de_favs"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                  </svg></button>
                </div>
              </div>
            </div>
          </div>
        </div>`;





    favoritoscardCelu.innerHTML = favoritosCardContentCelu;
    favoitoscontainer.append(favoritoscardCelu);

    favoritoscardCelu.querySelector('.btn_eliminar_de_favs').addEventListener('click', deleteCardFavCelu)

    

    
}


function deleteCardFavCelu(event){
    const buttonClikedCelu = event.target;
    buttonClikedCelu.closest('.cardcelu').remove();

}


