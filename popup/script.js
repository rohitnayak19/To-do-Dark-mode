class Model {
    constructor(modelId) {
        this.model = document.querySelector(modelId)
    }

    open() {
        this.model.classList.remove('hidden')
    }
    close() {
        this.model.classList.add('hidden')
    }
}

const model = new Model('.popup');
document.querySelector('button').addEventListener('click', (e) => {
    e.stopPropagation()
    if (e.target.classList.contains('open')) {
        model.open()
        e.target.classList.remove('open')
        e.target.classList.add('close')
        document.querySelector('button').textContent = 'Close'
    } else {
        model.close()
        e.target.classList.add('open')
        e.target.classList.remove('close')
        document.querySelector('button').textContent = 'Open'
    }
})

document.querySelector('.closeBtn').addEventListener('click', (e) => {
    model.close()
    document.querySelector('button').classList.add('open')
     document.querySelector('button').classList.remove('close')
    document.querySelector('button').textContent = 'Open'
})

document.addEventListener('click', (e) =>{
   const popup = document.querySelector('.popup');
  const clickInside = popup.contains(e.target)
  
  if(!clickInside){
    model.close()
    document.querySelector('button').classList.add('open')
     document.querySelector('button').classList.remove('close')
    document.querySelector('button').textContent = 'Open'
  }
})