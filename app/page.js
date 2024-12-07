
import { getTodos } from "@/actions";
import CreateTodo from "@/components/create-todo";
import Todo from "@/components/todo";

export default async function Home() {
  const todos = await getTodos();
  console.log(todos)


  return (
    <div>
      <nav className="bg-[#dfc5fe] h-[50px] p-3 sticky">
        <h1 className="text-2xl font-semibold text-gray-800">Todo</h1>
      </nav>
      <main className="flex min-h-screen flex-col items-center p-24 bg-white text-black shadow-sm border-sky-100 border-2">
        <h1 className="text-xl font-semibold">CRUD Using Next.js and MongoDB</h1>

        <CreateTodo />

        <section className="mt-20">
          <div>Todos</div>

          <div>
            {todos && todos.map(todo => {
              const { _id, text } = todo;
              return <Todo text={text} key={_id.toString()} id={_id.toString()} />
            })}
          </div>
        </section>
      </main>
    </div>

  );
}
