const todos = [
    {
        id: 1,
        title: 'Go to school',
        completed: true
    },
    {
        id: 1,
        title: 'Go to museum',
        completed: true
    },
    {
        id: 1,
        title: 'Go shopping',
        completed: false
    }
]

for(let todo of todos) {
    if(todo.completed === true) {
        console.log(todo.title);
    }
}