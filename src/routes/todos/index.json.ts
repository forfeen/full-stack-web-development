import type { RequestHandler } from "@sveltejs/kit";
// @type {import('@sveltejs/kit').RequestHandler}
// TODO: Persist in database
let todos: Todo[] = [];

export const get: RequestHandler = () => {
  return {
    status: 200,
    body: todos
  }
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export const post:RequestHandler<{}, FormData> = (request) => {
	todos.push({
                created_at: new Date(),
                text: "Study prog 1",
                done: false });

    return {
        status: 303,
        headers: {
        location: "/"
    }
}
}
// export const post: RequestHandler<{}, FormData> = (request) => {    
    
//     todos.push({
//         created_at: new Date(),
//         text: body.get("text"),
//         done: false
//   });

//   return {
//     status: 303,
//     headers: {
//       location: "/"
//     }
//   }
// }