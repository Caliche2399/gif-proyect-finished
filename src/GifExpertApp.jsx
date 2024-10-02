import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Marvel', 'Star Wars', 'One Punch', 'Dragon Ball'])

    const onAddCategory = (newCategory)=> {
        console.log(newCategory)

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1> GifExpertApp</h1>

            <AddCategory
                onNewCategory= {(event => onAddCategory(event))}
            />

            {categories.map( category => (
                
                <GifGrid key={category} category={category}/>
                /*(
                <div key={category}>
                    <li>{category}</li>
                </div>)*/
            )) }
        </>
    )
}
