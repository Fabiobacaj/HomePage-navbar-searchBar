
const MENU = {
      icon: document.getElementById('menu-icon'),
      slider: document.getElementById('menu-slider')
};


const SEARCH = {
    icon:  document.getElementById('search-icon'), //icona dove vado acliccare
    slider: document.getElementById('search-slider'), // lo slide che mi fa apparire quando clicco l'icona
    input: document.getElementById('search-input'), //l'input all'interno dello slider
    result: document.getElementById('search-result') // i risultati della mia search
};

const CONTENT = [
    'Contenuto letteratura e filosofia',
    'Contenuto informatica e matematica',
    'Contenuto informatica e altro..'
];

//Event LISTENERs 
SEARCH.icon.addEventListener('click',toggleSearch);
SEARCH.input.addEventListener('keyup',searchAction);
MENU.icon.addEventListener('click',toggleMenu);


//funzione Ricerca
function searchAction(e){
    const { input , slider } = SEARCH;
    const ENTER = 13, ESCAPE = 27;
    
    if(e.keyCode == ENTER){
        searchFn(input.value); // qui va a richiamare un'altra funzione.
        input.value = '';
        
        }if(e.keyCode == ESCAPE){
            slider.classList.replace('attiva','chiudi');   
        } 
    }
    
    function searchFn(str){
        let result = [];
        SEARCH.result.textContent ='';
        CONTENT.forEach(item=>{
            if(item.indexOf(str) !== -1){
                result.push(item)
            }
        });
        if (result.length === 0){
      return setResultItem('nessun Risultato');
    }
    result.forEach(ris => setResultItem(ris));
};

function setResultItem(ris){
    let newResult = document.createElement('p');
    newResult.appendChild(document.createTextNode(ris));
    SEARCH.result.appendChild(newResult);
}


function toggleSearch(){
    const { slider,input } = SEARCH
    slider.classList.toggle('chiudi')
    slider.classList.toggle('attiva')
    if(slider.classList.contains('attiva')){
        input.focus();
    }
}
// funzioni menu
function toggleMenu(){
    const { icon,slider } = MENU
    icon.classList.toggle('trasforma')
    slider.classList.toggle('chiudi')
    slider.classList.toggle('attiva')
}

