import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='py-5 px-0 mt-4 pb-0'>
      <form onSubmit={onSubmit} className='w-[85vw] my-0 mx-auto bg-mainWhite max-w-6xl py-8 px-10 capitalize rounded shadow-[2px_5px_3px_0px_rgba(0,_0,_0,_0.5)]'>
        <div className="form-control">
          <label className='block mb-5 font-bold tracking-[0.25rem] text-greenDark' htmlFor="name">Search your favorite cocktail</label>
          <input
            onChange={searchCocktail}
            className='w-full border-none border-transparent bg-mainBg rounded p-2 text-xl'
            type="text" id='name'
            ref={searchValue} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm