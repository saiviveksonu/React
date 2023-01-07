let taskInputref = React.createRef();
function createReactForm() {
    const [tasks, setTasks] = React.useState([]);
    function handleSubmit(e) {
        e.preventDefault();
        setTasks([...tasks, taskInputref.current.value]);
        taskInputref.current.value = '';
    }
    const taskInput = React.createElement('input', { type: "text", name: "task", ref: taskInputref })
    const taskLabel = React.createElement('label', { htmlFor: "task" })
    const taskInputParent = React.createElement("div", {}, [taskInput, taskLabel])
    const tasksubmitButton = React.createElement("input", { type: "submit", value: "Add Task",className:"btn" })
    const taskSubmitButtonPrent = React.createElement("div", {}, tasksubmitButton)
    const taskform = React.createElement('form', { onSubmit: handleSubmit, className: "task-form" }, [taskInputParent, taskSubmitButtonPrent])
    const taskList = React.createElement("ul", {}, tasks.map((task, index) => React.createElement("li", { key: index }, task)))
    const parentDiv=React.createElement("div",{},[taskform,taskList])
    return parentDiv
}

ReactDOM.render(React.createElement(createReactForm), document.querySelector("#root"));



