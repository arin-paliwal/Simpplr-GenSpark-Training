import React, { lazy, Suspense, useEffect, useState } from 'react'

const CardDetails = lazy(() => import ("DetailCardInHost/CardDetails"))
const CardShort = lazy(() => import ("ShortCardInHost/CardShort"))

const FoodList = () => {
    const [detailItems, setDetailItems] = useState([])
    const [shortItems, setShortItems] = useState([])

    useEffect(()=>{
        fetch(`https://dummyjson.com/recipes?limit=5&select=id,name,image,cuisine,rating`)
            .then(response => response.json())
            .then(data => setDetailItems(data.recipes))
    },[])

    useEffect(()=>{
        fetch(`https://dummyjson.com/recipes?limit=5&select=id,name,image`)
            .then(response => response.json())
            .then(data => setShortItems(data.recipes))
    },[])

  return (
    <React.Fragment>
        <div className='short-list-container'>
            <Suspense fallback={<p>Loading...</p>}>
                {shortItems.length && shortItems.map((item) => {
                    return <CardShort key={item.id} data={item}></CardShort>
                })}
            </Suspense>
        </div>
        <div className='detail-list-container'>
            <Suspense fallback={<p>Loading...</p>}>
                {detailItems.length && detailItems.map((item) => {
                    return <CardDetails key={item.id} data={item}></CardDetails>
                })}
            </Suspense>
        </div>
    </React.Fragment>
  )
}

export default FoodList