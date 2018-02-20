import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from "gatsby-image"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class LessonsPage extends React.Component {
	render() {
		const totalCount = this.props.data.lessons.totalCount
		const lessons = this.props.data.lessons.edges
		return (
			<div>
			  <h1>Lessons</h1>
			  <p>Here you can view { totalCount } lessons:</p>
			  <ul>
			  	{lessons.map(({ node }, i) => (
	          <li key={ node.id }>
	          	{node.image && 
	          		<Img resolutions={node.image.resolutions} />
	          	}
	          	{ node.title }
	          </li>
	        ))}
			  </ul>
			</div>
		)
	}
}

export default LessonsPage

LessonsPage.propTypes = propTypes

export const pageQuery = graphql`
	query PageQuery {
	  lessons: allContentfulCategory(filter: { node_locale: { eq: "en-US" } }) {
	    totalCount
	    edges {
	      node {
	      	id
	        title
	        slug
	        image {
	          resolutions(width: 500) {
	            ...GatsbyContentfulResolutions            
	          }
	        }
	      }
	    }
	  }
	}
`
