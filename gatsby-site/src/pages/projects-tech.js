import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ProjectsTech = () => (
  <Layout>
    <h1>Projects</h1>
      <h3><a href="https://pc-wizard.herokuapp.com" target="_blank">PC Wizard</a></h3>
      <h3><a href="https://spark-lines.herokuapp.com/" target="_blank">Spark Lines</a></h3>
      <h3><a href="https://terminal-hacker.netlify.com/" target="_blank">Terminal Hacker</a></h3>
      <h3><a href="https://afternoon-citadel-73979.herokuapp.com" target="_blank">Marvel Character Finder</a></h3>

    <h1>Tech</h1>
      <p>HTML5, CSS3, JavaScript, Node, Express, React, Ruby, Ruby on Rails, Git, Adobe Suite, Capture One</p>

    <Link to="/">Home</Link>
    <Link to ="/contact/">Contact</Link>
  </Layout>

)

export default ProjectsTech
