// import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from './components/ui/toaster';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header/>
      <TodoList />
      <AddTodo/>
      <Toaster/>
    </ThemeProvider>
  )
}

export default App
