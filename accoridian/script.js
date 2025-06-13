const faqs = [
    { question: "What is JavaScript?", answer: "JavaScript is used to make websites interactive." },
    { question: "What is an accordion?", answer: "An accordion lets users expand and collapse sections of content." },
    { question: "Can I open multiple sections?", answer: "Yes, if your code allows it." },
    {
    question: "Can multiple accordion panels be open at once?",
    answer: "Yes, depending on the logic. You can allow one or multiple panels to stay open based on your JavaScript implementation."
  },
  {
    question: "How can I animate accordion transitions?",
    answer: "Use CSS transitions with max-height, opacity, or transform properties for smooth expanding/collapsing effects."
  }
];

const accordianContainer = document.querySelector('.accordian-container')

faqs.forEach((accordina) => {
    // accordianContainer.innerHTML = ""
    accordianContainer.innerHTML += `
    <div class="accordians">
                <div class="question">
                    ${accordina.question}
                    <i class="icon fa-solid fa-angle-down"></i>
                </div>
                <div class="answer">${accordina.answer}
                </div>
            </div>
    `
})

const accordians = document.querySelectorAll('.accordians');

accordians.forEach((accordian) =>{
    const icon = accordian.querySelector('.icon')
    const answer = accordian.querySelector('.answer')

    accordian.addEventListener('click' ,()=>{
        const isActive = icon.classList.contains('active')
        // console.log(answer.scrollHeight)
        accordians.forEach((item) =>{
            item.querySelector('.icon').classList.remove('active')
            item.querySelector('.answer').style.maxHeight=null
        })

        if(!isActive){
            icon.classList.add('active')
            answer.style.maxHeight = answer.scrollHeight + 'px'
        }
    })
})

