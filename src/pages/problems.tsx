
export default function ProblemsPage() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 h-screen">
      <div className="bg-gray-50 rounded-3xl shadow-md p-4 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-5/6">
        <h1 className="text-[3vw] text-center font-serif">Problem Set</h1>
      <div className="flex justify-center mt-4 space-x-4">
        <button className="bg-gradient-to-r from-rose-400 to-red-500 rounded-lg shadow-md p-2 text-white" onClick={() => window.location.href='/one'}>
          1995
        </button>
        <button className="bg-gradient-to-r from-rose-400 to-red-500 rounded-lg shadow-md p-2 text-white" onClick={() => window.location.href='/two'}>
          917
        </button>
        <button className="bg-gradient-to-r from-rose-400 to-red-500 rounded-lg shadow-md p-2 text-white" onClick={() => window.location.href='/three'}>
          1138
        </button>
        <button className="bg-gradient-to-r from-rose-400 to-red-500 rounded-lg shadow-md p-2 text-white" onClick={() => window.location.href='/four'}>
          2530
        </button>
        <button className="bg-gradient-to-r from-rose-400 to-red-500 rounded-lg shadow-md p-2 text-white" onClick={() => window.location.href='/five'}>
          921
        </button>
        <button className="bg-gradient-to-r from-rose-400 to-red-500 rounded-lg shadow-md p-2 text-white" onClick={() => window.location.href='/six'}>
          2938
        </button>
      </div>


      </div>
    </div>
  );
}
