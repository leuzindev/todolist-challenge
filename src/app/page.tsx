import { Header } from '@/components/Header'
import SearchForm from '@/components/SearchForm'
import TaskFeed from '@/components/TaskFeed'

export default function Home() {
  return (
    <main className=" min-h-screen w-screen bg-gray-600">
      <Header />
      <div className="m-auto w-1/2">
        <SearchForm />
        <TaskFeed />
      </div>
    </main>
  )
}
