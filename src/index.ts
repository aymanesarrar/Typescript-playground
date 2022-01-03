// /**
//  * Create a promise that resolves after some time
//  * @param n - The time to wait in milliseconds
//  */

// function timeout(n: number) {
// 	return new Promise(resolve => setTimeout(resolve, n));
// }

// /**
//  * Add three numbers
//  * @param a - The first number
//  * @param b - The second number
//  */

// export async function addNumbers(a: number, b: number): Promise<number> {
// 	await timeout(500);
// 	return a + b;
// }

// // == Run the program == //
// ;(async () => {
// 	const result = await addNumbers(3, 4);
// 	console.log(result);
// })();

// between 500 and 1000
// const RANDOM_WAIT_TIME = Math.floor(Math.random() * 500) + 500;
// let startTime = new Date();
// console.log(typeof startTime.toISOString().slice(0,4));
// let endTime

// setTimeout(() => {
// 	endTime = 0;
// 	endTime = new Date();
// }, RANDOM_WAIT_TIME);

interface Todo {
	title?: string;
	description?: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
	return {...todo, ...fieldsToUpdate};
}
const todo1 = {
	title: "organize desk",
	description: "clear clutter"
};

const todo2 = updateTodo(todo1, {
	description: "throw out trash",
	title: "clean room"
})

console.log(todo2, todo1);