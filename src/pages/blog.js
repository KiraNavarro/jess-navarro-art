import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'




// markup
const Blog = ({ data }) => {
    console.log(data);
    return (
      <Layout 
          pageTitle='Blog'
          pageHeading='Blog'
      >
        <ul>
            {
                data.allFile.nodes.map(node => (
                <li key={node.name}>
                    {node.name}
                </li>
                ))
            }
        </ul>
      </Layout>
    )
}
  
export const query = graphql `
    query {
        allFile(
            filter: {
                sourceInstanceName: {eq: "blog"}
            }) 
            {
            nodes {
                name
                absolutePath
            }
        }
    }
    `;

export default Blog
  