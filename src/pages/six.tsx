
export default function ProblemsPage() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 h-screen">
      <div className="bg-gray-50 rounded-3xl shadow-md p-4 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-5/6">
        <h1 className="text-[3vw] text-center font-serif">2938. Separate Black and White Balls</h1>
        <p className="text-center mt-5">Essentially the way you solve the problem is by a 2 pointers approach</p>
        <p className="text-center mt-5">The left pointer points to the first index which has a "1" and the right pointer iterates through the array</p>
        <p className="text-center mt-5">If the first "1" is found then a boolean, blackFound, is set from False to True and the left pointer is set to that index allowing the swaps to be caclulated </p>
        <p className="text-center mt-5">Next if the right pointer finds a 0, it adds right_index - left_index to the value of swaps</p>
        <p className="text-center mt-5">Return the value of swaps at the end</p>

      <div className="flex justify-center mt-20">
        <a href="https://leetcode.com/problems/separate-black-and-white-balls/description/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-400 to-red-500 rounded-lg shadow-md p-2 text-white">
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
