import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ProjectsTech = () => (
  <Layout>
    <h1>Projects</h1>
      <h3><a href="https://pc-wizard.herokuapp.com" target="_blank">PC Wizard</a></h3>
        <p>PC Wizard helps people build computers. Users can view information on different types of computer components, as well as information regarding specific computer parts (series, price, RAM slots, etc). <strong>Built with:</strong> Rails, Devise, and Bulma.</p>

      <h3><a href="https://spark-lines.herokuapp.com/" target="_blank">Spark Lines</a></h3>
      <p>Spark Lines is a single-page news aggregator. Users can also submit their own articles. <strong>Built with:</strong> Node, Express, PostgreSQL, and NewsAPI.</p>

      <h3><a href="https://terminal-hacker.netlify.com/" target="_blank">Terminal Hacker</a></h3>
      <p>This is a recreation of the terminal hacking mini game from the Fallout series. <strong>Built with:</strong> HTML, CSS, and JavaScript.</p>

      <h3><a href="https://afternoon-citadel-73979.herokuapp.com" target="_blank">Marvel Character Finder</a></h3>
      <p>Allows users to create accounts, view information on over a thousand characters, and add characters to their favorites list. <strong>Built with:</strong> Marvel API, React, Express, Node, PostgreSQL, and Bootstrap.</p>

    <h1>Tech</h1>
      <p>HTML5, CSS3, JavaScript, Node, Express, React, Ruby, Ruby on Rails, Git, Adobe Suite, Capture One, Sketch</p>

    <Link to="/">Home</Link>
    <Link to ="/contact/">Contact</Link>
  </Layout>

)

export default ProjectsTech
