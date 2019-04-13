import './app.styl'
import React from 'react'
import Loading from '_loading'
import axios from 'axios'
import Gallery from '../components/Gallery';

const PerPage = 30
const ClientID = '47da73da2b740608b32dd1d201e72606000e8db1df885e6f2c72843cddca23a8'

const URL = 'https://api.unsplash.com/photos'

export default class App extends React.Component {
  constructor() {
    super()
    this.page = 1
    this.state = {
      photos: [],
      showLoading: true,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    axios.get(URL, {
      params: {
        page: this.page++,
        per_page: PerPage,
        client_id: ClientID,
      },
    }).then(res => {
      this.setState({
        showLoading: false,
        photos: this.state.photos.concat(res.data),
      })
    })
  }

  render() {
    return (
      <div className="main">
        <h1 className="gallery__header">
          React Unsplash Like Grid Gallery Demo
        </h1>

        {
          this.state.showLoading ? <Loading /> : this.renderGrid
        }

        {
          !this.state.showLoading &&
          <Gallery
            images={
              this.state.photos.map(photo => (
                {src: photo.urls.regular, height: photo.height, width: photo.width})
              )}
            columns={3}
          />
        }
        
      </div>
    )
  }
}

