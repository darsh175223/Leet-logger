
export default function ProblemsPage() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 h-screen">
      <div className="bg-gray-50 rounded-3xl shadow-md p-4 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-5/6">
        <h1 className="text-[3vw] text-center font-serif">Tips and Things Learned</h1>
        <p className="text-center mt-5">In order to heapify a min heap, these are the things learned</p>
        <ul className="list-disc list-inside text-center mt-2 text-[.8vw]">
          <li>To declare a heap, you do this:  heapq.heapify(array_name)</li>
          <li>To pop from a heap, you do this:  n = heapq.heappop(array_name)</li>
          <li>To push to a heap, you do this:  heapq.heappush(array_name, num)</li>
        </ul>



      </div>
    </div>
  );
}
