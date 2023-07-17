export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export const addTodo = (id, todo) => {
    let task = {
        id: id,
        task: todo
    }

    return {
        type: ADD_TODO,
        payload: task
    }

}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export const editTodo = (id, updatedText,edit) => ({
    type: EDIT_TODO,
    payload: { id, updatedText,edit },
});

