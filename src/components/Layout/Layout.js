import React from 'react'
import Header from '../Header/Header'

function Layout({ title, children }) {
  return (
    <div className='layout'>
      <Header />
      <main className='layout__main'>
        <h1 className='layout__main--title'>{title}</h1>
        <section className='layout__main--content'>{children}</section>
      </main>
    </div>
  )
}

export default Layout