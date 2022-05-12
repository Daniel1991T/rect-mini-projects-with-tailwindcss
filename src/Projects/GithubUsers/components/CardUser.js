import React from 'react'

const CardUser = ({ login, avatar_url, html_url }) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='rounded-full w-24' src={avatar_url} alt={login} /></figure>
            <div className="card-body">
                <h2 className="card-title text-mainWhite">{login}</h2>
                <div className="card-actions justify-end">
                    <a href={html_url} className="btn bg-cyan-700 text-mainWhite">view profile</a>
                </div>
            </div>
        </div>
    )
}

export default CardUser