'use client '


const Table = ({data = [], tableHeaderText, tableHeaderCells= []}) => {
    console.log(data);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2 shadow mt-4 sm:px-7 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black ">{tableHeaderText}</h4>
      <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 sm:grid-cols-5">

            {
              tableHeaderCells && tableHeaderCells.length ?
              tableHeaderCells.map((item)=> <div className="p-3 text0center xl:pl-5 " key={item.id}>{item.label}</div>):
              null
            }

          </div>
              {
                data && data.length ?
                data.map(item=> <div className="grid grid-cols-3 border-b border-stroke sm:grid-cols-5" key={item._id}>
                  {
                    tableHeaderCells.map((tableCell)=>(
                      <div
                      key={`${item._id}${tableCell.id}`}
                      className="flex items-center justify-center p-3 xl:p-6"
                      >
                          <p>
                            {item[tableCell.id]}
                          </p>
                      </div>
                    ))
                  }
                </div>):
                null
              }

      </div>
    </div>
  )
}

export default Table