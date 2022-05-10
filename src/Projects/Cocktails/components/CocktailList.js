import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import Cocktail from './Cocktail'

const CocktailList = () => {
    const { cocktails, loading } = useGlobalContext()

    if (loading) {
        return <Loading />
    }
    console.log(cocktails);
    if (cocktails.length < 1) {
        return <h2 className='text-4xl capitalize tracking-[2px] text-center mb-14 mt-4'>
            no cocktails matched your search criteria
        </h2>
    }

    return (
        <section className='py-5 px-0'>
            <h2 className='text-4xl capitalize tracking-[2px] text-center mb-14 mt-4'>cocktails</h2>
            <div className="w-[85vw] my-0 mx-auto max-w-6xl grid justify-center gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {cocktails.map(item => {
                    return <Cocktail key={item.id} {...item} />
                })}
            </div>
        </section>
    )
}

export default CocktailList