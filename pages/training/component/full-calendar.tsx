import React, {useEffect, useState} from 'react'
import 'regenerator-runtime/runtime'
import { useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
import dayjs from "dayjs";
import Link from 'next/link';

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

function Calendar() {
    const year =  new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(year);
    const [data, setProductData] = useState([]);

    const callAPI = async (setProductData: Function) => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "training"]`);
            const data = await res.json();
            const currentPage = data.result.filter((item: any) => {
                return item.start_date.includes(selectedYear);
            });
            setProductData(currentPage);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callAPI(setProductData);
    }, [selectedYear]);

 const columns = React.useMemo(
     () => [
       {
         Header: 'Category',
         accessor: 'type', // accessor is the "key" in the data
       },
       {
         Header: 'Title',
         accessor: 'title',
       },
       {
         Header: 'Date',
         accessor: 'start_date',
       },
       {
         Header: 'Venue',
         accessor: 'venue',
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

    const handleNext = () => {
        setSelectedYear(selectedYear + 1);
    }

    const handlePrev = () => {
        setSelectedYear(selectedYear - 1);
    }

    const renderMobileEvents = () => (
        data && data.map((item, index) => (
            <Link href={`/training/${item.title.replace(' ', '-')}`}>
                <div className={'desktop:hidden mx-6 mb-4 p-4 bg-[#f5f5f5] rounded-xl border border-[#d5d5d5]'}>
                    <span className={'text-12 inline-block bg-peach text-white py-2 px-4 mb-2 rounded-2xl'}>
                        {item.type === 'oil' ? 'Oil and Gas' : 'Coal and Minerals'}
                    </span>
                    <div className={'font-bold'}>
                        {item.title}
                    </div>
                    <div>
                        {dayjs(item.start_date).format('DD MMM YYYY')}
                    </div>
                    <div>
                        {item.venue}
                    </div>
                </div>
            </Link>
        ))
    )

 return (
        <>
        <div className="flex justify-between h-20 text-white bg-peach items-center px-4">
            <button onClick={() => handlePrev()} type="button" className='text-center inline-flex gap-4 font-medium group hover:scale-110'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </span>
                <p className='mobile:hidden'>Previous</p>
            </button>
            <div className='text-[24px]'>{selectedYear}</div>
            <button onClick={() => handleNext()} type="button" className='text-center inline-flex gap-4 font-medium group hover:scale-110'>
                <p className='mobile:hidden'>Next</p>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </span>
            </button>
        </div>
        <br /><br />

        <div className='max-w-7xl mx-auto'>
        <table {...getTableProps()} className={'desktop:border border-black'} style={{ width:'100%' }}>
            <thead className='text-left'>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()} className={'mobile:hidden'}>
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
            <br className={'mobile:hidden'}/><br className={'mobile:hidden'}/>
            <tr>
            <th
                className={'pl-6 desktop:p-3'}
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
            <tbody {...getTableBodyProps()} className={'mobile:hidden'}>
            {rows.map(row => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {

                        const mapCell = () => {
                            if (cell.value === 'oil') {
                                return 'Oil and Gas';
                            } else if (cell.value === 'coal') {
                                return 'Coal and Minerals';
                            } else if (cell.column.id === 'start_date' && cell.value) {
                                return dayjs(cell.value).format('DD MMM YYYY')
                            } else if (cell.column.id === 'title') {
                              return (
                                <Link href={`/training/${cell.value.replace(' ', '-')}`}>
                                    <span className={'text-link underline cursor-pointer'}>
                                        {cell.value}
                                    </span>
                                </Link>
                              )
                            } else {
                                return cell.render('Cell')
                            }
                        }

                        return (
                            <td
                                {...cell.getCellProps()}
                                style={{
                                    padding: '10px',
                                    border: 'solid 1px gray',
                                }}
                            >
                                {mapCell()}
                            </td>
                        )
                    })}
                </tr>
            )
            })}
            </tbody>
            {renderMobileEvents()}
        </table>
        </div>

        </>

    )
}

export default Calendar;
