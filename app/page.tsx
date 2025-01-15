import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl font-bold mb-4">The best journal app, period.</h1>
        <p className="text-2xl text-white/60 mb-4">
          This is the best app for tracking your mood trough out your life. All you have to do is be honest.
        </p>
        <div>
          <Link href="/journal">
            <button className="bg-blue-600 p-4 rounded-lg text-xl py-2">get started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
