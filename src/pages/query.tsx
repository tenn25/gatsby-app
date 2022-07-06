import React from 'react'
import { Link, graphql } from 'gatsby';



const Query = ( {data} ) => {
    //dataの内容を表示してみる
    console.log(data);
    return(
        <React.Fragment>
        <h2>{data.site.siteMetadata.title}</h2>
        <div>{data.site.siteMetadata.description}</div>
        <Link to="/">Back to home</Link>
      </React.Fragment>
    )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`

export default Query