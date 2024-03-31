import inquirer from "inquirer";

//interfaces
//arry
//function
//operator

//interface
interface TodoItem {
  task: string;
  completed: boolean;
}
//arry
let todoList: TodoItem[] = [];

//function
async function mainMenu() {
  const { action } = await inquirer.prompt({
    type: "list",
    name: "action",
    message: "what would you like to do",
    choices: [
      "Add Task",
      "view Task",
      "Mark as complete",
      "Delete Task",
      "Exit",
    ],
  });

  switch (action) {
    case "Add Task":
      await addTask();
      break;
    case "view Task":
      await viewList();
      break;
    case "Mark as complete":
      await markascomplete();
      break;
    case "Delete Task":
      break;
    case "Exit":
      console.log("good bye");
      return;
  }mainMenu();
}


let addTask = async () => {
  let { task } = await inquirer.prompt({
    type: "input",
    name: "task",
    message: "Enter the task",
  });
  todoList.push({ task, completed: false });
  console.log("task Added successfully");
};

let viewList = () => {
  console.log("**** To Do List ****");
  todoList.forEach((item, index) => {
    console.log(`${index + 1}.[${item.completed ? "x" : ""}]${item.task}`);
  });
  console.log("********************");
};
let markascomplete = async () => {
  let { index } = await inquirer.prompt({
    type: "list",
    name: "index",
    message: "Which task do you want to mark as completed?",
  
  });
    if (index < 1 || index > todoList.length) {
      console.log('Invalid task number. Please try again.');
      return;
    }
  
    todoList[index - 1].completed = true;
    console.log('Task marked as completed!');
  };
  
  
  const deleteTask = async () => {
      const { index } = await inquirer.prompt({
        type: 'number',
        name: 'index',
        message: 'Enter the task number to delete:',
      });
    
      if (index < 1 || index > todoList.length) {
        console.log('Invalid task number. Please try again.');
        return;
      }
    
      todoList.splice(index - 1, 1);
      console.log('Task deleted successfully!');
    };
    mainMenu();
  
