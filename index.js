const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

addBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(4)

    const text=input.value;
    const li=document.createElement('li');
    const p=document.createElement('p');
    p.textContent=text;

    ul.appendChild(li);
    li.appendChild(p);

})