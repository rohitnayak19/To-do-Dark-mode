let task = []
const btn = document.querySelector("#btn");
const list = document.querySelector("#taskList")
const toggleTheme = document.getElementById("toggleTheme");


window.addEventListener("DOMContentLoaded",() =>{
    const stored = localStorage.getItem('theme');
    if(stored==="dark"){
        document.body.classList.add('dark-mode')
        toggleTheme.innerText="Light"
    } else{
        toggleTheme.innerText="Dark"
    }
})

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains('dark-mode')
  localStorage.setItem("theme",isDark ? "dark":"light")

  toggleTheme.innerText =isDark ? "Light":"Dark"
});

document.querySelector("#inputText").addEventListener('keydown', (e) =>{
    if(e.key==='Enter'){
        addTask()
    }
})

function addTask(){
const inputText= document.querySelector("#inputText");
    const taskText = inputText.value.trim();
    const time = new Date().toLocaleString()
    if(taskText === "") return
    task.push({text:taskText,done:false,time})
    
    inputText.value=""
    displayTask()
}

btn.addEventListener('click', addTask)

function deleteTask(index){
    task.splice(index,1)
    displayTask()
}

function toggleTask(index){
    task[index].done = !task[index].done;
    displayTask()
}

function notask(){
    list.style.textAlign="center"
    list.innerHTML = `
    <img src="176171-1.jpg" alt="No Tasks" width="120" style="margin-bottom: 10px; opacity: 0.6;" />
    <div>No tasks yet. Add one!</div>
  `;
}

function displayTask(){
    list.innerHTML="";
    if(task.length === 0){
        notask()
    } else{
        task.forEach((task,index) =>{
            const li = document.createElement('li');
            li.classList.add("task")
            li.innerHTML = `
            <input type="checkbox" ${task.done ? 'checked': ''} onchange="toggleTask(${index})">
            ${index+1}<span style="text-decoration:${task.done ? 'line-through' : 'none'}"> ${task.text}</span> 
            <div>
            <span style="color:#a5a6ad;font-size:12px;font-style:italic;margin-right:10px;">Added at : ${task.time}</span>
            <button onclick="deleteTask(${index})">Delete</button>
            </div>`;
            list.appendChild(li)
        })
    }
}

displayTask()
