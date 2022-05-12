import React, { useEffect, useState } from 'react'
import { useGithubContext } from '../context/context'
import CardUser from './CardUser';
import Loading from './Loading';

const NEXT_BTN = 'NEXT_BTN';
const PREV_BTN = 'PREV_BTN';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const { githubUsers, isLoading } = useGithubContext()

    useEffect(() => {
        if (isLoading) {
            setPage(0)
            return;
        }
        setUsers(githubUsers[page])
    }, [githubUsers, isLoading, page]);

    // useEffect(() => {
    //     setUsers(githubUsers[page])
    // }, [page, githubUsers])


    if (isLoading) {
        return <Loading />
    }

    const handleNextPervBtn = (type) => {
        if (type === NEXT_BTN) {
            setPage(oldPage => {
                let newPage = oldPage + 1;
                if (newPage > githubUsers.length - 1) {
                    newPage = 0
                }
                return newPage
            })
        } else if (type === PREV_BTN) {
            setPage(oldPage => {
                let newPage = oldPage - 1;
                if (newPage < 0) {
                    newPage = githubUsers.length - 1;
                }
                return newPage
            })
        }
    }

    return (
        <section className='w-full max-w-5xl items-center flex-col justify-center space-y-2'>
            <div className='grid grid-cols-1 md:grid-rows-2 lg:grid-cols-3 gap-3'>
                {users?.map(user => {
                    return <CardUser key={user.id} {...user} />
                })}
            </div>
            <div className='flex w-full items-center justify-center py-8'>
                {(!isLoading && users) && <div className='btn-group'>
                    <button className='btn' onClick={() => handleNextPervBtn(PREV_BTN)}>prev</button>
                    {githubUsers.map((_, index) => {
                        return <button onClick={() => setPage(index)}
                            key={index}
                            className={`btn ${page === index && 'btn-active'}`}>
                            {index + 1}
                        </button>
                    })}
                    <button className='btn' onClick={() => handleNextPervBtn(NEXT_BTN)}>next</button>
                </div>}
            </div>
        </section>
    )
}

export default UserList