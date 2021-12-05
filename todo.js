window.onload=function(){
    let newtask=document.getElementById('newtask')
    let addtask=document.getElementById('addtask')
    let todolist=document.getElementById('todolist')
// its a  a good method
    addtask.onclick=function(){
        let li=document.createElement('li')
        li.innerText=newtask.value
        todolist.appendChild(li)
        newtask.value=""

    
    //alternate method not good 
   /* addtask.onclick=function(){
    todolist.innerHTML+=`<li> ${newtask.value} </li>`
    }*/

let xbtn=document.createElement('button')
xbtn.innerText='❌' 
xbtn.onclick=function(event){
    console.log(event.target.parentElement)
    event.target.parentElement.remove()
}
li.appendChild(xbtn)
let upbtn=document.createElement('button')
upbtn.innerText='⬆️'
upbtn.onclick=function(event){
    //console.log(event.target.parentElement)
    //console.log(event.target.parentElement.parentElement.Sibling)
    event.target.parentElement.parentElement.insertBefore(event.target.parentElement,event.target.parentElement.previousElementSibling)
}
li.appendChild(upbtn)
let downbtn=document.createElement('button')
downbtn.innerText='⬇️'
downbtn.onclick=function(event){
    console.log(event.target.parentElement)
    console.log(event.target.parentElement.nextElementSibling)
    if(event.target.parentElement.nextElementSibling!=null)
    event.target.parentElement.parentElement.insertBefore(event.target.parentElement.nextElementSibling,event.target.parentElement)
}
li.appendChild(downbtn)

}
}

