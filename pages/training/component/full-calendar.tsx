import React from 'react'
import 'regenerator-runtime/runtime'
import { useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';

function GlobalFilter({
preGlobalFilteredRows,
globalFilter,
setGlobalFilter,
}) 
{
 const count = preGlobalFilteredRows.length
 const [value, setValue] = React.useState(globalFilter)
 const onChange = useAsyncDebounce(value => {
   setGlobalFilter(value || undefined)
 }, 200)

 return (
   <span>
     Search:{' '}
     <input
       value={value || ""}
       onChange={e => {
         setValue(e.target.value);
         onChange(e.target.value);
       }}
       placeholder={`${count} records...`}
       style={{
         fontSize: '1.1rem',
         border: '0',
       }}
     />
   </span>
 )
}

// Define a default UI for filtering
function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
    }) {
        const count = preFilteredRows.length

        return (
        <input
            value={filterValue || ''}
            onChange={e => {
            setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }}
            placeholder={`Search..`}
        />
        )
    }

function Example() {

 const data = React.useMemo(
     () => [
       {
         col1: 'Oil and Gas',
         col2: 'Root Cause Analysis for Boilers and Steam Cycle Failures - Virtual Instructor Led Training (VILT)',
         col3: '23 august 2023',
         col4: '739',
         
       },
       {
         col1: 'Oil and Gas',
         col2: 'Root Cause Analysis for Boilers and Steam Cycle Failures - Virtual Instructor Led Training (VILT)',
         col3: '23 august 2023',
         col4: '740',
         
       },
       {
         col1: 'Oil and Gas',
         col2: 'Root Cause Analysis for Boilers and Steam Cycle Failures - Virtual Instructor Led Training (ABC)',
         col3: '23 august 2023',
         col4: '743',
         
       },
       {
         col1: 'Coal',
         col2: 'Root Cause Analysis for Boilers and Steam Cycle Failures - Virtual Instructor Led Training (ABC)',
         col3: '23 august 2023',
         col4: '738',
         
       },
       {
         col1: 'Coal',
         col2: 'Root Cause Analysis for Boilers and Steam Cycle Failures - Virtual Instructor Led Training (VILT)',
         col3: '23 august 2023',
         col4: '739',
         
       },
     ],
     []
 )

 const columns = React.useMemo(
     () => [
       {
         Header: 'Category',
         accessor: 'col1', // accessor is the "key" in the data
       },
       {
         Header: 'Tittle',
         accessor: 'col2',
       },
       {
         Header: 'Date',
         accessor: 'col3',
       },
       {
         Header: 'Venue',
         accessor: 'col4',
       },
     ],
     []
 )

 const defaultColumn = React.useMemo(
   () => ({
     // Let's set up our default Filter UI
     Filter: DefaultColumnFilter,
   }),
   []
 )

 const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   prepareRow,
   state,
   visibleColumns,
   preGlobalFilteredRows,
   setGlobalFilter,
 } = useTable(
   {
     columns,
     data,
     defaultColumn, // Be sure to pass the defaultColumn option
   },
   useFilters,
   useGlobalFilter,
   useSortBy
 );

 return (
        <>
        <div className="flex justify-between h-20 text-white bg-peach items-center px-4">
            <a href="/home-demo" type="button" className='text-center inline-flex gap-4 font-medium group hover:scale-110'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </span>
                <p className='mobile:hidden'>Previous</p>
            </a>
            <div className='text-[24px]'>July 2022</div>
            <a href="/home-demo" type="button" className='text-center inline-flex gap-4 font-medium group hover:scale-110'>
                <p className='mobile:hidden'>Next</p>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </span>
            </a>
        </div>
        <br /><br />

        <div className='max-w-7xl mx-auto'>
        <table {...getTableProps()} style={{ border: 'solid 1px black', width:'100%' }}>
            <thead className='text-left'>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        style={{
                            borderBottom: 'solid 3px red',
                            color: 'black',
                        }}
                    >
                        {column.render('Header')}
                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                    </th>
                ))}
                </tr>
            ))}
            <br /><br />
            <tr>
            <th
                colSpan={visibleColumns.length}
                style={{
                textAlign: 'left',
                }}
            >
                <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
                />
            </th>
            </tr>
            </thead>
            <br />
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                    return (
                        <td
                            {...cell.getCellProps()}
                            style={{
                                padding: '10px',
                                border: 'solid 1px gray',
                            }}
                        >
                            {cell.render('Cell')}
                        </td>
                    )
                    })}
                </tr>
            )
            })}
            </tbody>
        </table>
        </div>

        </>

    )
}

export default Example