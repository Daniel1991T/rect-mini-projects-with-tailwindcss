import React, { useState } from 'react'
import { useGithubContext } from '../context/context';
import Alert from './Alert';

const SearchUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchUsers, setError } = useGithubContext()

  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log('submit');
    if (!searchTerm) {
      setError('empty value')
      return
    }
    searchUsers(searchTerm)
  }
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Alert />
      <form className='form-control' onSubmit={(e) => handlerSubmit(e)}>
        <div className="input-group">
          <input type="text" placeholder='Search User' className='input input-bordered' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button type='submit' className='btn btn-square'>
            Go
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchUsers