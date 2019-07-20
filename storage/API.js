//routes
// class Task {
//     constructor() {
//         this.tasks = [],
//         this.taskId = 0;
//     }

//     async find(params) {
//         return this.tasks;
//     }

//     async get(id, params) {
//         const task = this.tasks.find(task=> task.id === parseInt(id, 10));

//         if(!task) {
//             throw new Error(`Task with id ${id} not found!`)
//         }
//         return task;
//     }

//     async create (data, params) {
//         const task = Object.assign({
//             id: ++this.currentId
//         }, data);

//         this.tasks.push(task);

//         return task;
//         }
//     async patch(id, data, params) {
//         const task = await this.get(id);
//         return Object.assign(task, data)
//     }
// }


// app.use("tasks", new Task());