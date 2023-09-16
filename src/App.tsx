import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from './components/ui/toaster';
import AddTodo from './components/AddTodo/AddTodo';
import TotalItems from './components/TotalItems/TotalItems';
import Filter from './components/Filter/Filter';
import DeleteTodos from './components/DeleteTodos/DeleteTodos';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className='flex flex-col w-full items-center gap-6'>
        <Header />
        <Filter />
        <TotalItems />
        <TodoList />
        <AddTodo />
        <DeleteTodos />
      </main>
      <Toaster />
    </ThemeProvider>
  )
}

export default App
