
export default function ProblemsPage() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 h-screen">
      <div className="bg-gray-50 rounded-3xl shadow-md p-4 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-5/6">
        <h1 className="text-[3vw] text-center font-serif">1957. Delete Characters to Make Fancy String</h1>
        <p className="text-center mt-5">Bascially to solve this problem you use a 2 pointer approach where you check if 2 adjacent indices have the same value</p>
        <p className="text-center mt-5">If so then check the index to the right of it is the same. And if so then delete the character</p>
        <p className="text-center mt-5">Else you increment the left and right pointer by 1</p>


      <div className="flex justify-center mt-20">
        <a href="https://leetcode.com/problems/delete-characters-to-make-fancy-string/description/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-400 to-red-500 rounded-lg shadow-md p-2 text-white">
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
