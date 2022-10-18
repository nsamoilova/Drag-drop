const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend)

for(const placeholder of placeholders){
    placeholder.addEventListener('dragover',dragover)
    placeholder.addEventListener('dragenter',dragenter)
    placeholder.addEventListener('dragleave',dragleave)
    placeholder.addEventListener('drop',dragdrop)
}

function dragstart(e) {
    e.target.classList.add('hold')
    setTimeout(() =>
        e.target.classList.add('hide'),0)
    
}

function dragend(e) {
    // e.target.className = 'item'
    e.target.classList.remove('hold','hide')
  
}

function dragover(e){
 e.preventDefault()
}

function dragenter(e){
    e.target.classList.add('hoverd')

}

function dragleave(e){
    e.target.classList.remove('hoverd')
}

function dragdrop(e){
 e.target.classList.remove('hoverd')
 e.target.append(item)
}