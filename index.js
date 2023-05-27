const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

const valorOriginal= empty.textContent;

addBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    const text=input.value;


    if (text !=="" && text !==' '){
        console.log("bien");
        const li=document.createElement('li');
        const p=document.createElement('p');
        p.textContent=text;
    
        ul.appendChild(li);
        li.appendChild(addDeleteBtn());
        li.appendChild(p);
    
        input.value="";
        empty.style.display="none";
    }
    else (text =="" && text ==' ')
    console.log('error');
    empty.textContent="No es posible crear una tarea vacia.";

})


   


function addDeleteBtn(){
    const deleteBtn= document.createElement('button');

    deleteBtn.textContent="X";
    deleteBtn.className="delete-btn";

    deleteBtn.addEventListener('click',(e)=>{
        const li= e.target.parentElement; /*el padre es el li que contiene al button*/
        ul.removeChild(li);


        const lis= document.querySelectorAll('li');
        if(lis.length===0){
            empty.style.display="block";
            empty.textContent= valorOriginal;

        }

    });
return deleteBtn;






}