
export default function ProblemsPage() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 h-screen">
      <div className="bg-gray-50 rounded-3xl shadow-md p-4 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-5/6">
        <h1 className="text-[3vw] text-center font-serif">1975. Maximum Matrix Sum</h1>
        <p className="text-center mt-5">The intuition to get the max sum is that if the # of negative numbers is even then you could technically cancel out the negatives</p>
        <p className="text-center mt-5">In addition if the # of negative numbers is odd then you have 2n + 1 negative numbers which can be reduced to 1 since we know that even numbers cancel out</p>
        <p className="text-center mt-5">So basically if the count is even then get the absolute value sum of all elements otherwise get the substract that sum by 2 times the abs() of the min number</p>


      <div className="flex justify-center mt-20">
        <a href="https://leetcode.com/problems/maximum-matrix-sum/description/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-400 to-red-500 rounded-lg shadow-md p-2 text-white">
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
