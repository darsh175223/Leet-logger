import Link from "next/link"


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">LeetCode Storage</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-blue-400">About</Link></li>
              <li><Link href="/problems" className="hover:text-blue-400 transition-colors">Problems</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">About LeetCode Storage</h2>
          <p className="mb-6 text-lg">
            LeetCode Storage is a personal project designed to help me keep track of the LeetCode problems I've solved.
            It serves as a digital journal of my coding journey and a quick reference for revisiting problems.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Features</h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Store and categorize solved LeetCode problems</li>
            <li>Add personal notes and insights for each problem</li>
            <li>Track problem difficulty and topics</li>
            <li>Search and filter functionality for easy access</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-4">Why I Built This</h3>
          <p className="mb-6 text-lg">
            As I progressed through my LeetCode journey, I realized the importance of not just solving problems,
            but also retaining the knowledge and strategies I learned. This platform allows me to document my
            thought process and revisit problems efficiently, enhancing my learning experience.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 sm:mb-0">&copy; 2024 LeetCode Storage. All rights reserved.</p>
          <div className="flex space-x-4">
           
          </div>
        </div>
      </footer>
    </div>
  )
}