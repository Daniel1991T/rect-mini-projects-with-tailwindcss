import React, { useEffect, useState } from 'react'
import Alert from './Alert';
import ListItems from './ListItems';

const getLocalStorage = () => {
    let list = localStorage.getItem('list')
    if (!list) {
        return []
    }
    return JSON.parse(list)
}

const GroceryBud = () => {
    const [name, setName] = useState('');
    const [groceryList, setGroceryList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({
        show: false, message: '', type: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            showAlert(true,
                'please enter value',
                'danger'
            )
            return
        } else if (name && isEditing) {
            setGroceryList(groceryList.map(item => {
                if (item.id === editId) {
                    return { ...item, title: name }
                }
                return item
            }))
            showAlert(true, 'success', 'item is edited')
            setEditId(null)
            setIsEditing(false)
            setName('')
            return
        }
        showAlert(true, 'success', 'item added to the list')
        const newItem = { id: new Date().getTime().toString(), title: name }
        setGroceryList([...groceryList, newItem])
        setName('')
    }

    const showAlert = (show = false, type = "", message = "") => {
        setAlert({ show, message, type })
    }

    const clearList = () => {
        showAlert(true, 'danger', 'empty list')
        setGroceryList([])
    }

    const removeItem = (id) => {
        showAlert(true, 'danger', 'item removed')
        setGroceryList(groceryList.filter(item => item.id !== id))
    }

    const editItem = (id) => {
        const specificItem = groceryList.find(item => item.id === id);
        setIsEditing(true)
        setEditId(id)
        setName(specificItem.title)
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(groceryList))
    }, [groceryList])

    return (
        <main className='flex justify-center w-full min-h-screen bg-slate-100'>
            <section className='bg-white py-20 rounded flex flex-col items-center px-4
            shadow-md shadow-white hover:shadow-gray-400  mx-auto max-w-xl mt-32 mb-auto w-[90vw]'>
                <form className='text-center text-cyan-700 w-full' onSubmit={handleSubmit}>
                    {alert.show && <Alert {...alert} removeAlert={showAlert} groceryList={groceryList} />}
                    <h3 className='font-bold text-2xl md:text-3xl'>Grocery bud</h3>
                    <div className='flex justify-center'>
                        <input type="text"
                            placeholder='e.g egg'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='p-1 pl-4 bg-gray-100 rounded-tl rounded-bl-none w-full
                        border-transparent outline-cyan-700 placeholder:text-gray-600 text-base flex-auto text-gray-800' />
                        <button type="submit" className='bg-cyan-300 border-transparent flex-[0_0_5rem] grid
                        items-center p-1 capitalize tracking-[2px] rounded-tr rounded-br cursor-pointer
                        transition-all duration-300 ease-linear text-sm text-cyan-700 hover:text-white hover:bg-cyan-700 '>
                            {isEditing ? 'edit' : 'submit'}
                        </button>
                    </div>
                </form>
                {groceryList.length > 0 && (
                    <div className='mt-8 flex flex-col w-full'>
                        <ListItems items={groceryList} removeItem={removeItem} editItem={editItem} />
                        <button className='capitalize w-40 h-6 grid items-center
                    bg-transparent border-transparent text-red-500 my-0 mx-auto
                    text-sm tracking-[0.1rem] cursor-pointer transition-all 
                    duration-300 ease-linear mt-5 hover:text-red-800'
                            onClick={clearList}
                        >clear items</button>
                    </div>
                )}
            </section>
        </main>
    )
}

export default GroceryBud