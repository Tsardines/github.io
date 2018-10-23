import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <h1>Contact</h1>
     <h3><a href="mailto:hjsulcer@gmail.com" target="_blank">Send me an email!</a></h3>
    <h3><a href="https://github.com/Tsardines" target="_blank">GitHub</a></h3>
    <h3><a href="https://www.linkedin.com/in/haley-sulcer/" target="_blank">LinkedIn</a></h3>
    <h3><a href="https://500px.com/hjs342" target="_blank">Photography</a></h3>
    <Link to="/">Home</Link>
    <Link to="/projects/">Projects</Link>
  </Layout>
)

export default Contact
