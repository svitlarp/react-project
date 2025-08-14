// import axios from "axios";
// import "./TodosList.css";


// export default async function TodosList() {
//     const resp = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
//         .then((response) => {
//             console.log(response.data);

//             const taskId = response.data.id;
//             const taskTitle = response.data.title;
//             const taskIsComplited = response.data.completed;
//             return {
//                 id: taskId,
//                 title: taskTitle,
//                 completed: taskIsComplited,
//             }
//         })
//         .catch(err => console.log(err));

//     return (
//         <div className="todos">
//             <ul className="todos-list">
//                 <li>Id: { resp.taskId}</li>
//                 <li>Title: { resp.taskTitle}</li>
//                 <li>Complited: { resp.taskIsComplited}</li>
//             </ul>
//         </div>
//     )
// } 


