import React from 'react';
import Title from '../Components/Title';
import Categories from '../Components/Categories';
import MenuItem from '../Components/MenuItems';
import portfolios from '../Components/allportfolio';
import { useState } from 'react';

// repeat data
// const allCategories = ['All', ...portfolios.map(item => item.category)]; 
// unique data
const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];
// console.log(allCategories);

function PortfolioPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolios'} span={'Portfolios'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories}/>
                <MenuItem menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfolioPage;
