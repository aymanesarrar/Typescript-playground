// /**
//  * Create a promise that resolves after some time
//  * @param n - The time to wait in milliseconds
//  */
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo1 = {
    title: "organize desk",
    description: "clear clutter"
};
const todo2 = updateTodo(todo1, {
    description: "throw out trash",
    title: "clean room"
});
console.log(todo2, todo1);
