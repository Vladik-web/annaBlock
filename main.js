const form = document.querySelector('.form');
const range = document.querySelectorAll('.range');
const text = document.querySelectorAll('.text');
const blocks = document.querySelector('.blocks');
const button = document.querySelector('button');

const obj = {
    w: 0,
    h: 0,
}
function check(){
    if(obj.w !== 0 && obj.h !== 0){
        button.removeAttribute('disabled')
    }
}
const init = () =>{
    range.forEach((item, index)=>{
        item.addEventListener('input', ()=>{
            const parent = item.parentElement;
            const elem = parent.querySelector('.text');
            elem.value = item.value;
            if(index === 0){
                obj.w = parseInt(item.value);
            }else{
                obj.h = parseInt(item.value);
            }
            check();
        })
    })
    
    text.forEach((item, index)=>{
        item.addEventListener('input', ()=>{
            const parent = item.parentElement;
            const elem = parent.querySelector('.range');
            elem.value = item.value;    
            if(index === 0){
                obj.w = parseInt(item.value);
            }else{
                obj.h = parseInt(item.value);
            }
            check();
        })
    })
    button.addEventListener('click', ()=>{
      
            
            let block = document.createElement('div');
            block.className = 'block';
            block.style.width = obj.w + 'px';
            block.style.height = obj.h + 'px';
            block.style.border = '1px solid red';
            block.innerText = 'w: ' +obj.w + ' ' +'h: ' +obj.h;
            blocks.insertAdjacentElement('beforeend', block);
        
    });
}
window.addEventListener('DOMContentLoaded', init);