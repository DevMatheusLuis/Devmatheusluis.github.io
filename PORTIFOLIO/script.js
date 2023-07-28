


function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML ='';
        arrTexto.forEach((letra , i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra;
            }, 75 * i)
        });
    }

    const titulo = document.querySelector(' .digitando');
    ativaLetra(titulo);
}

escrevendoLetra()



function menuMobol(){
        const ativaMenu = document.querySelector('.fa-bars');
    const navMenu =document.querySelector('header .navegacao-primaria')

 ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
 }) ;
}

menuMobol()



function sobreMim(){

    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li');
    const divEducacao = document.querySelectorAll('.Educacao_content div');
    const liEducacao = document.querySelectorAll('.Educacao_content div');
    
    
    divExperiencia[0].classList.add('ativo')
    divEducacao[0].classList.add('ativo')
    liExperiencia[0].classList.add('ativo')
    liEducacao[0].classList.add('ativo')

    
   function slideShow(index){
    divExperiencia.forEach((div)=>{
        div.classList.remove('ativo');
    });
    divExperiencia[index].classList.add('ativo');
    liExperiencia[index].classList.add('ativo');
   }

    function slideShow2 (index){
        divEducacao.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liEducacao.forEach((botao)=>{
            div.classList.remove('ativo');
        })
        divEducacao[index].classList.add('ativo');
        liEducacao[index].classList.add('ativo');
    }

   liExperiencia.forEach((event,index)=>{
      event.addEventListener('click', ()=>{
        slideShow(index)
      });
    });

    liEducacao.forEach((event,index)=>{
        event.addEventListener('click',()=>{
            slideShow2(index)
        });
    });
}
sobreMim();

const listaAll = document.querySelectorAll('.projetos_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects_models ul li');
const buttonAll = document.querySelectorAll('.projects_models .all');

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    });
    buttonGeral[index].classList.add('ativo');
}

buttonGeral.forEach((event,index)=>{
    event.addEventListener('click',()=>{
        removeClick(index)
    })
})


function showlista(lista, buttom = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    })
    if(buttom == 'design'){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
    }

    if(buttom == 'graphic'){
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
    }

    if(buttom == 'Website'){
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }

    if(buttom == 'all'){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
}





buttonGeral.forEach((item)=>{
    item.addEventListener('click' , (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')){
            showlista(listaAll);
        }
        if(currentButton.classList.contains('design')){
            showlista(listaAll, "design");
        }

        if(currentButton.classList.contains('Graphic')){
            showlista(listaAll, "graphic");
        }

        if(currentButton.classList.contains('Website')){
            showlista(listaAll, "Website");
        }    
    })
})

