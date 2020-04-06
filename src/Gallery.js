import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';

export default class Gallery extends Component {
  state = {
    data: null,
    images: []
  }

  constructor(props) {
    super(props)

    this.state = {

    }

    this.imageGalleryRef = React.createRef()
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }


  componentDidMount() {
    fetch('/data/product.json')
      .then(resp => resp.json())
      .then(data => this.setState({
        data,
        images: data.images.map((img) => ({
          original: img,
          thumbnail: img
        }))
      }))
  }

  handleMouseEnter() {
    this.imageGalleryRef.current.play()
  }

  handleMouseLeave() {
    this.imageGalleryRef.current.pause()
  }

  render() {
    const { images } = this.state

    return (
      <React.Fragment>

        <div>
          <ImageGallery
            ref={this.imageGalleryRef}
            items={images}
            thumbnailPosition="left"
            showFullscreenButton={false}
            useBrowserFullscreen={false}
            showPlayButton={false}
            autoPlay={true}
            disableArrowKeys={true}
            showNav={false}
          />
        </div>
        <div className="row">
          <div className="col col-4">
            <div
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <ImageGallery
                ref={this.imageGalleryRef}
                items={images}
                showThumbnails={false}
                showFullscreenButton={false}
                useBrowserFullscreen={false}
                showPlayButton={false}
                autoPlay={false}
                disableArrowKeys={true}
                showNav={false}
                slideInterval={1000}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
