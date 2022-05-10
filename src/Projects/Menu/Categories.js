import React from 'react'

const Categories = ({ filterItems, categories }) => {
    return (
        <div className='mb-16 flex justify-center'>
            {categories.map(category => <FilterButton
                key={category}
                name={category}
                filterItems={filterItems}
            />)}
        </div>
    )
}

const FilterButton = ({ name, filterItems }) => {
    return <button type='button' className='bg-transparent border-transparent text-base capitalize my-0 mx-2 tracking-wide
    py-1 px-3 text-amber-600 cursor-pointer transition-all duration-300 ease-linear rounded
    hover:bg-amber-600 hover:text-white' onClick={() => filterItems(name)}>
        {name}
    </button>
}

export default Categories