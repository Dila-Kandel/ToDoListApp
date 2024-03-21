export let todolist =JSON.parse(localStorage.getItem('todolist'));

if(!todolist){todolist=[{task:'kkkkk',
duedate:'98877',
state:'1'}];}


export function  addTolist(newTodoText,dueDate){

  todolist.push({task:newTodoText,
  duedate:dueDate,
state:'1'})

  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('todolist', JSON.stringify(todolist));
}


export function removeFromList(task,duetime){

  const newList=[];
todolist.forEach((listItem) =>{
  if (listItem.task !== task && listItem.duedate!== duetime){
    newList.push(listItem);

    console.log(listItem);
  }
  });
  todolist= newList;

  saveToStorage();

}

export function removeChecked(state){

  
todolist.forEach((listItem) =>{
  
  if (listItem==state){
    const index = Array.from(listItem.parentElement.children).indexOf(listItem);
    todolist[index].state = 0;
    
  }});
  saveToStorage();


}
