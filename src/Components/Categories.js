import React from 'react'
import { NavLink } from 'react-router-dom'




function Categories({filter, categories}) {
    return (
        <div className="buttons">
            {/* <h1 onClick={()=>filter('Animation')}>Animation</h1> */}
            {
                categories.map((cat, i)=>{
                    // return <NavLink key={i} onClick={()=> filter(cat)}>{cat}</NavLink>
                    return <button type="button"className="btn-port"  onClick={()=> filter(cat)} key={i}>{cat}</button>
                })
            }
        </div>
    )
}
 
export default Categories;
