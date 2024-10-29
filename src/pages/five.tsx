
export default function ProblemsPage() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 h-screen">
      <div className="bg-gray-50 rounded-3xl shadow-md p-4 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-5/6">
        <h1 className="text-[3vw] text-center font-serif">921. Minimum Add to Make Parentheses Valid</h1>
        <p className="text-center mt-5">Essentially the way you solve the problem is by using a stack</p>
        <p className="text-center mt-5">If you get an open Parentheses then you add it to the stack but when you get a closed Parentheses you have to do check the following</p>
        <p className="text-center mt-5">If the last character in the stack is an open Parentheses then you pop, else you add the closed Parenthesis </p>
        <p className="text-center mt-5">You return the length of the stack at the end</p>

      <div className="flex justify-center mt-20">
        <a href="https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-400 to-red-500 rounded-lg shadow-md p-2 text-white">
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
