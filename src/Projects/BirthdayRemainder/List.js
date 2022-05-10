import React from 'react';

const List = ({ people }) => {
    return (
        <>
            {people.map(person => {
                return (
                    <article key={person.id} className="grid grid-cols-2 gap-x-3 mb-6 items-center">
                        <img className='w-20 h-20 object-cover rounded-[50%] shadow-white' src={person.image} alt={person.name} />
                        <div>
                            <h4 className='mb-1'>{person.name}</h4>
                            <p className='mb-0'>{person.age} years</p>
                        </div>
                    </article>
                )
            })}
        </>
    );
};

export default List;