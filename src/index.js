import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
/*import {createStore} from "redux";

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
    console.log("action::{}", action);
    switch (action.type) {
        case ADD_TODO:
            return [{text: action.text, id: Date.now()}, ...state];
        case DELETE_TODO:
            let result = state.filter(toDo => toDo.id !== action.id);
            console.log("result::{}", result);
            return result;
        default:
            return [];

    }
};
console.log("reducer::{}", reducer);
const store = createStore(reducer);
console.log("store::{}", store);
store.subscribe(() => {
    console.log(store.getState());
});


/!*  const createToDo = toDo => {
      const li = document.createElement('li');
      li.innerText = toDo;
      ul.appendChild(li);
  }*!/

const onSubmit = e => {
    console.log("onbSubmit::", e);
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    // store.dispatch({type: ADD_TODO, text: toDo});
    dispatchAddToDo(toDo);
    paintToDos();
    // createToDo(toDo);
}
const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(toDo => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.innerText = 'DEL';
        btn.addEventListener('click', dispatchDeleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    });
}

store.subscribe(paintToDos);


const addToDo = text => {
    return {
        type: ADD_TODO,
        text: text
    }
}

const deleteToDo = id => {
    return {
        type: DELETE_TODO,
        id: id
    }
}

const dispatchAddToDo = text => {
    store.dispatch(addToDo(text));
}

const dispatchDeleteToDo = e => {
    console.log(e.target.parentNode.id);
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id));
}

form.addEventListener("submit", onSubmit);*/


/*
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


const ADD = "ADD";
const MINUS = "MINUS";

//reducer, change data, whatever returns, it will be my application data
const countModifier = (count = 0, action) => {
    console.log("count, action::", count, action);
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
/!*    if(action.type === "ADD") {
        console.log("they are telling me to add one");
        return count + 1;
    } else if(action.type === "MINUS") {
        return count - 1;
    } else {
        return count
    }
    return count;*!/
};

const countStore = createStore(countModifier);
number.innerText = 0;
const onChange = () => {
    number.innerText = countStore.getState();
    console.log("onChange::", countStore.getState());
}

countStore.subscribe(onChange);

const handleAdd = () => {
    countStore.dispatch({type: "ADD"})
}

const handleMinus = () => {
    countStore.dispatch({type: "MINUS"})
}

//sending message
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

console.log(countStore.getState());
*/



/*
let count = 0;

number.innerText = count;

const updateText = () => {
    number.innerText = count;
}

const handleAdd = () => {
    count += 1;
    updateText();
}

const handleMinus = () => {
    count -= 1;
    updateText();
}
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);*/
