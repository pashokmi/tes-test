import {createEvent, createStore, createEffect} from 'effector'


const getPostsFx = createEffect(async () => {
    const req = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    return req.json()
})
getPostsFx()


export const deletePost = createEvent("delete todo");
export const editPost = createEvent("edit post");

export const $posts = createStore([])
    .on(getPostsFx.doneData, (_, posts) => posts)

$posts
    .on(editPost, (state, payload) => {
        const change = state.find((post) => post.id === payload.id)
        change.title = payload.title
        return state.map(todo => ({
            ...todo
        }))
    })
    .on(deletePost, (state, id) =>
        state.filter((i) => i.id !== id)
    );


