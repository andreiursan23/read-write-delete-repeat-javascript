# Read Write Delete Repeat

## Story

A big hackathon will start in a few weeks.
You will participate with another friend who is a back end developer.
The theme of the hackathon is “read, write, delete, repeat”, so you will need to practice the http methods.

## What are you going to learn?

- Http get method
- Http post method
- Http delete method
- react components
- react use effect hook
- react use state hook

## Tasks

1. Display all the tasks in the database using a `GET` fetch to `http://localhost:6789/tasks/`
    - When the page loads a list of tasks is displayed
    - Each task is rendered in a react component which receives as parameters the task object and the delete task event handler

2. A new task can be added by making a `POST` request to `localhost:6789/tasks` with the body content `{ title: [newTask] }` where `newTask` is the new task name
    - When the user enters text in the input box with the placeholder `enter new task` and presses the button with the label `add task` a new task is added to the database located in the file `back-end/storage/db.json`
    - After a new task is added to the database the it is displayed among the existing tasks in the frontend without needing to reload the page
    - The `enter new task` input and the `add task` button are extracted in a separate react component which receives as parameter the `createTask` function from `App.js`
    - (optional) When the `add task` button is clicked the text inside the `enter new task` input is cleared
    - (optional) No task is added when clicking the `add task` button if the input is empty

3. An existing task can be deleted by making a `DELETE` request to the route `localhost:6789/tasks/${taskId}` where `taskId` is the `id` of the task being deleted
    - When the user presses the `delete` button associated with a task, that task is removed from the database located in the file `back-end/storage/db.json`
    - After a task is remove from the database it is no longer displayed among the existing tasks in the frontend (without the need to refresh the page)

## General requirements

None

## Hints

- once you start the project you first need to install the react library with `npm install` inside the folder `front-end`
- once all the react libraries are installed, you can start the project with `npm start` inside the folder `front-end`
- you need to start the server if you want to get data from it
- you can do that by going into the `back-end` folder in a terminal and typing `npm install`
- once all the server libraries are installed, you can start the server with `npm start` inside the folder `back-end`
- you can get the registered todos if you send a `GET` request to the route `http://localhost:6789/tasks`.
- you can add new todos to the system if you send a `POST` request to the route `http://localhost:6789/tasks` with the `body {title: [todo_title]}`.
- you can delete a todo by sending a `DELETE` request to the route `http://localhost:6789/tasks/[id_of_the_todo_to_delete]`.

## Background materials

- <i class="far fa-exclamation"></i> [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- <i class="far fa-exclamation"></i> [Fetch API](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
- <i class="far fa-book-open"></i> [Fetch API overview](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- <i class="far fa-book-open"></i> [Functional Components](https://www.robinwieruch.de/react-function-component#react-stateless-function-component)
- <i class="far fa-book-open"></i> [Display lists in React](https://scotch.io/starters/react/handling-lists-in-react-jsx)
