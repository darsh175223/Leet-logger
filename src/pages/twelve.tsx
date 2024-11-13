
export default function ProblemsPage() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 h-screen">
      <div className="bg-gray-50 rounded-3xl shadow-md p-4 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-5/6">
        <h1 className="text-[3vw] text-center font-serif">729. My Calendar I</h1>
        <p className="text-center mt-5">Bascially to solve this problem, you use a BST instead of a list to store the booking intervals </p>
        <p className="text-center mt-5">You have to check if a new even's start and end collide with any existing events by searching the BST which makes it O(log(n))</p>
        <p className="text-center mt-5">If there is a collision then you return False</p>


      <div className="flex justify-center mt-20">
        <a href="https://leetcode.com/problems/my-calendar-i/description/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-400 to-red-500 rounded-lg shadow-md p-2 text-white">
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
