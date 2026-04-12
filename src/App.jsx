import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Layout from './Layout.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}
