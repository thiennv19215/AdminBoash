import React from 'react'

const Listproduct = ({data}) => {
  return (
    <>
      
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-green-700 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-green-600 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
              {data?.map(item => {
                return <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.title}
                </th>
                <td className="px-6 py-4">
                  {item.brand}
                </td>
                <td className="px-6 py-4">
                  {item.category}
                </td>
                <td className="px-6 py-4">
                  {item.price}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
              </tr>
              })}
          
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Listproduct