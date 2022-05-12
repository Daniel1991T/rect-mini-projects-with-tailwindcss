import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Accordion from './Projects/Accordion/Accordion';
import BirthdayRemainder from './Projects/BirthdayRemainder/BirthdayRemainder';
import CocktailsApp from './Projects/Cocktails/CocktailsApp';
import { AboutCocktail, ErrorCocktail, HomeCocktail, SingleCocktail } from './Projects/Cocktails/pages'
import ColorGenerator from './Projects/ColorGenerator/ColorGenerator';
import GithubUserApp from './Projects/GithubUsers/GithubUserApp';
import { AboutGithubSearch, HomeGithubSearch } from './Projects/GithubUsers/pages';
import GroceryBud from './Projects/GroceryBud/GroceryBud';
import LoremIpsum from './Projects/LoremIpsum/LoremIpsum';
import Menu from './Projects/Menu/Menu';
import Navbar from './Projects/Navbar.js/Navbar';
import Reviews from './Projects/Reviews/Reviews';
import Slider from './Projects/Slider/Slider';
import Tabs from './Projects/Tabs/Tabs';
import Tours from './Projects/Tours/Tours';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='projects/birthday-remainder' element={<BirthdayRemainder />} />
        <Route path='projects/tours' element={<Tours />} />
        <Route path='projects/reviews' element={<Reviews />} />
        <Route path='projects/accordion' element={<Accordion />} />
        <Route path='projects/menu' element={<Menu />} />
        <Route path='projects/tabs' element={<Tabs />} />
        <Route path='projects/slider' element={<Slider />} />
        <Route path='projects/lorem-ipsum' element={<LoremIpsum />} />
        <Route path='projects/color-generator' element={<ColorGenerator />} />
        <Route path='projects/grocery-bud' element={<GroceryBud />} />
        <Route path='projects/navbar' element={<Navbar />} />
        <Route path='projects/cocktails/*' element={<CocktailsApp />} >
          <Route index element={<HomeCocktail />} />
          <Route path='about' element={<AboutCocktail />} />
          <Route path='cocktail/:id' element={< SingleCocktail />} />
          <Route path='*' element={<ErrorCocktail />} />
        </Route>
        <Route path='/projects/github-users/*' element={<GithubUserApp />} >
          <Route index element={<HomeGithubSearch />} />
          <Route path='about' element={<AboutGithubSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
