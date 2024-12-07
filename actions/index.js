"use server"
import client from '@/db'
import { revalidatePath } from 'next/cache';
import { ObjectId } from 'mongodb'
const db = await client.db('next-todo')

export async function getTodos() {
    try {
        const todos = await db.collection('todos').find().toArray();
        console.log(todos)
        return todos
    } catch (error) {
        console.log(error)
    }
}


export async function createTodo(text) {
    const todo = await db.collection('todos').insertOne({
        text
    })
    console.log(todo);

    revalidatePath('/')
}


export async function deleteTodo(id) {
    await db.collection("todos").findOneAndDelete({ _id: ObjectId.createFromHexString(id) })
    revalidatePath('/')
}


export async function updateTodo(id, newText) {
    await db.collection("todos").findOneAndUpdate({ _id: ObjectId.createFromHexString(id) }, { $set: { text: newText } })

    revalidatePath('/')

}