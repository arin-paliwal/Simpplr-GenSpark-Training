import React, { lazy, Suspense } from 'react'

const ToDoApp = lazy(() => import ('TodoAppInHost/TodoApp'))

const ProductList = () => {
  return (
    <div className='todo-list-container'>
        <Suspense fallback={null}>
            <ToDoApp/>
        </Suspense>
    </div>
  )
}

export default ProductList
