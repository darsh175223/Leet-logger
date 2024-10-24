
export default function ProblemsPage() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 h-screen">
      <div className="bg-gray-50 rounded-3xl shadow-md p-4 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-5/6">
        <h1 className="text-[3vw] text-center font-serif">1995. Count Special Quadruplets</h1>
        <p className="text-center mt-5">The solution involves iterating backwards and flipping the question focus from being a+b+c=d to a+b=d-c</p>
        <p className="text-center mt-5">So you create a hashmap to store values for d-c and check if values a+b equal a value in that hashmap</p>
      <div className="flex justify-center mt-20">
        <a href="https://leetcode.com/problems/count-special-quadruplets/description/?envType=problem-list-v2&envId=hash-table" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-400 to-red-500 rounded-lg shadow-md p-2 text-white">
          Go to Question
        </a>
      <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg shadow-md p-2 text-white ml-4" onClick={() => window.location.href='/problems'}>
        Go back
      </button>
      </div>

      </div>
    </div>
  )
}
