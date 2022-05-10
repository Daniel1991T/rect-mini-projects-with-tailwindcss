import React, { useEffect, useState } from 'react'
import Categories from './Categories';
import items from './data'
import MenuList from './MenuList';



const Menu = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const allCategories = new Set(items.map(item => item.category))
        setCategories(["all", ...allCategories])
    }, []);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items)
            return
        }
        const filterItems = items.filter(item => item.category === category)
        setMenuItems(filterItems)
    }

    return (
        <main className='bg-slate-100 min-h-screen'>
            <section className='w-[90vw] my-0 mx-auto max-w-6xl py-20 px-0'>
                <div className='text-center mb-8'>
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories filterItems={filterItems} categories={categories} />
                <MenuList items={menuItems} />
            </section>
        </main>
    )
}

export default Menu