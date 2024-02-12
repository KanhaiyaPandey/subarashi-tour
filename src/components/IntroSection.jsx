

const IntroSection = () => {
  return (
    <section className="intro" data-scroll-section>

    <h1 className="left-h1" data-scroll data-scroll-direction="horizontal"
     data-scroll-speed="-4" data-scroll-class="appear"
     data-scroll-repeat="true">Beautiful Holiday Destinations</h1>

    <div className="recommendations-container">
                  <div className="recommendations">
                      <ul className="recommendations_list">
                          <li className="recommendations__items"><a href="#" className="recommendations__links txt_md_black">Popular</a></li>
                          <li className="recommendations__items"><a href="#" className="recommendations__links txt_md_grey">Adventure</a></li>
                          <li className="recommendations__items"><a href="#" className="recommendations__links txt_md_grey">Beach</a></li>
                      </ul>
                      <div className="active_container">
                          <span className="active"></span>
                      </div>
                  </div>
                  <div className="recommendations__controls">
                      <span className="control_left"><i className="fa fa-angle-left" aria-hidden="true"></i></span>
                      <span className="control_right"><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                  </div>
              </div>

              <div className="location_preview">

              <div className="preview" data-scroll data-scroll-speed="-1" >
                      <img src="https://images.pexels.com/photos/7057954/pexels-photo-7057954.jpeg?auto=compress&cs=tinysrgb&w=600" alt="bswb"/>
                      <div className="preview__details">
                          <span className="preview__details__text">
                              <p className="preview__details__text__top txt_lg_white">Nusa Penida</p>
                              <p className="preview__details__text__top txt_lg_white"><i className="fa fa-star" aria-hidden="true"></i> 4.7</p>
                          </span>
                          <p className="preview__details__text__bottom txt_lg_white"><i className="fa fa-map-marker" aria-hidden="true"></i> Bali, Indonesia</p>
                      </div>
                  </div>

               
                  <div className="preview" data-scroll data-scroll-speed="1">
                      <img src="https://images.unsplash.com/photo-1532186651327-6ac23687d189?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt=""/>
                      <div className="preview__details">
                          <span className="preview__details__text">
                              <p className="preview__details__text__top txt_lg_white">Labuan Bajo</p>
                              <p className="preview__details__text__top txt_lg_white"><i className="fa fa-star" aria-hidden="true"></i> 4.8</p>
                          </span>
                          <p className="preview__details__text__bottom txt_lg_white"><i className="fa fa-map-marker" aria-hidden="true"></i> NTT, Indonesia</p>
                      </div>
                  </div>

                  <div className="preview" data-scroll data-scroll-speed="-1">
                      <img src="https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                      <div className="preview__details">
                          <span className="preview__details__text">
                              <p className="preview__details__text__top txt_lg_white">Sukasada</p>
                              <p className="preview__details__text__top txt_lg_white"><i className="fa fa-star" aria-hidden="true"></i> 4.5</p>
                          </span>
                          <p className="preview__details__text__bottom txt_lg_white"><i className="fa fa-map-marker" aria-hidden="true"></i> Bali, Indonesia</p>
                      </div>
                  </div>

                  <div className="preview" data-scroll data-scroll-speed="1">
                      <img src="https://images.pexels.com/photos/12323346/pexels-photo-12323346.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                      <div className="preview__details">
                          <span className="preview__details__text">
                              <p className="preview__details__text__top txt_lg_white">Gili Island</p>
                              <p className="preview__details__text__top txt_lg_white"><i className="fa fa-star" aria-hidden="true"></i> 4.7</p>
                          </span>
                          <p className="preview__details__text__bottom txt_lg_white"><i className="fa fa-map-marker" aria-hidden="true"></i> Lombok, Indonesia</p>
                      </div>
                  </div>

      </div>   
    </section>
  )
}

export default IntroSection