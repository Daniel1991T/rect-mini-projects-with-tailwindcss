import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading';

const SingleCocktail = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        setLoading(true)
        async function getCocktail() {
            try {
                const { data } =
                    await axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                if (data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                        strIngredient6,
                        strIngredient7,
                        strIngredient8,
                        strIngredient9,
                        strIngredient10,
                    } = data.drinks[0]
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                        strIngredient6,
                        strIngredient7,
                        strIngredient8,
                        strIngredient9,
                        strIngredient10,
                    ]
                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    }
                    setCocktail(newCocktail)
                } else {
                    setCocktail(null)
                }
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        getCocktail()
    }, [id])

    if (loading) {
        return <Loading />
    }

    if (!cocktail) {
        return <h2>no cocktail to display</h2>
    }
    const { name, image, category, info, glass, instructions, ingredients } = cocktail;
    return (
        <section className='text-center py-20 px-0'>
            <Link to='/projects/cocktails/' className='btn-cocktail btn-cocktail-primary' >back home</Link>
            <h2 className='text-4xl capitalize tracking-[0.3rem] text-center mb-14 mt-4'>{name}</h2>
            <div className='w-[85vw] max-w-6xl my-0 mx-auto text-left lg:grid
            lg:gap-3 lg:grid-cols-[2fr,_3fr] lg:items-center'>
                <img src={image} alt={name} className='w-full rounded' />
                <div className='pt-8 lg:pt-0'>
                    <p className='capitalize font-bold leading-7'>
                        <span className='bg-yellowLight py-1 mr-2 px-2 rounded text-greenDark'>name :</span> {name}
                    </p>
                    <p className='capitalize font-bold leading-7'>
                        <span className='bg-yellowLight py-1 mr-2 px-2 rounded text-greenDark'>category :</span> {category}
                    </p>
                    <p className='capitalize font-bold leading-7'>
                        <span className='bg-yellowLight py-1 mr-2 px-2 rounded text-greenDark'>info :</span> {info}
                    </p>
                    <p className='capitalize font-bold leading-7'>
                        <span className='bg-yellowLight py-1 mr-2 px-2 rounded text-greenDark'>glass :</span> {glass}
                    </p>
                    <p className='capitalize font-bold leading-7'>
                        <span className='bg-yellowLight py-1 mr-2 px-2 rounded text-greenDark'>instruction :</span> {instructions}
                    </p>
                    <p className='capitalize font-bold leading-7'>
                        <span className='bg-yellowLight py-1 mr-2 px-2 rounded text-greenDark'>ingredients :</span>
                        {ingredients.map((item, index) => {
                            return item ? <span className='mr-05'> {item},</span> : null
                        })}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SingleCocktail