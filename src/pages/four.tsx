
export default function ProblemsPage() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 h-screen">
      <div className="bg-gray-50 rounded-3xl shadow-md p-4 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-5/6">
        <h1 className="text-[3vw] text-center font-serif">2530. Maximal Score After Applying K Operations</h1>
        <p className="text-center mt-5">Essentially the way you solve the problem is by making a max heap and there's definetly some tricks involved</p>
        <p className="text-center mt-5">For example you had to heapify the max_heap by using the heapq function and store the numbers as negative</p>
        <p className="text-center mt-5">This is becuase python only has a built in min heap function not max heap so that's why we had to store it as negative numbers</p>
        <p className="text-center mt-5">Also I learned that in order to do heapification you need to followin this format: heapq.heapify(name_of_array)</p>

      <div className="flex justify-center mt-20">
        <a href="https://leetcode.com/problems/maximal-score-after-applying-k-operations" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-400 to-red-500 rounded-lg shadow-md p-2 text-white">
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
