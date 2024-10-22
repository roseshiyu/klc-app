export default function Custom404() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">此路不通</h1>
        <p className="mt-4 text-gray-500">【约翰福音14章6节】耶稣说：“我就是道路、真理、生命。要不是藉着我，没有人能到父那里去。</p>
        <a
          href="/"
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          回到神的家
        </a>
      </div>
    </div>
  )
}