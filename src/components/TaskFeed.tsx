import EmptyFeed from './EmptyFeed'
import HeaderFeed from './HeaderFeed'

export default function TaskFeed() {
  return (
    <section className="mt-24 w-full space-y-8">
      <HeaderFeed />
      <div className="min-h-0 rounded-lg border-t-2 border-gray-400 ">
        <EmptyFeed />
      </div>
    </section>
  )
}
