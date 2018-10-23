import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello!</h1>
    <p>lorem ipsum</p>
    <p>dolor sint amet.</p>
    <Link to="/projects/">Projects</Link>
    <Link to ="/contact/">Contact</Link>
  </Layout>
)

export default IndexPage
