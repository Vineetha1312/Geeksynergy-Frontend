import {Component} from 'react'

import MovieItem from '../MovieItem'
import './index.css'

class MoviesRoute extends Component {
  state = {blogsList: []}

  componentDidMount() {
    this.getBlogsList()
  }
  /*
  getMoviesList = async () => {
    const data = {name: 'Vineetha B', password: 'Vineetha123'}
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }

    const response = await fetch('https://hoblist.com/api/movieList', options)

    const responseData = await response.json()
    console.log(responseData)
  } 

  */

  // i worked using above url but unfortunately i cant get the moviesList so for using instead of that url iam using below url

  getBlogsList = async () => {
    const url = 'https://apis.ccbp.in/blogs'
    const response = await fetch(url)
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogsList: formattedData})
  }

  render() {
    const {blogsList} = this.state
    return (
      <div className="movies-container">
        <h1 className="movies-heading">Blogs List</h1>
        <ul className="blogs-list">
          {blogsList.map(eachBlogItem => (
            <MovieItem key={eachBlogItem.id} blogItemDetails={eachBlogItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default MoviesRoute
