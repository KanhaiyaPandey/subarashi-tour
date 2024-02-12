

const OfferSection = () => {
  return (

    <section data-scroll-section>
        <h1 className="centered-h1" data-scroll data-scroll-direction="horizontal"
         data-scroll-speed="-3" data-scroll-class="appear" data-scroll-repeat="true">Special Offers</h1>

              <div className="centered-recommendations-container">
              <div className="recommendations">
                  <ul className="recommendations_list">
                     <li className="recommendations__items"><a href="#" className="recommendations__links txt_md_black">Family</a></li>
                     <li className="recommendations__items"><a href="#" className="recommendations__links txt_md_grey">Couple</a></li>
                     <li className="recommendations__items"><a href="#" className="recommendations__links txt_md_grey">Team</a></li>
                 </ul>
            <div className="active_container">
               <span className="active"></span>
             </div>
             </div>
             </div>

            <div className="special-offers-container">
               <span className="control_left modify_control"><i className="fa fa-angle-left" aria-hidden="true"></i></span>
               <div className="special-offers-preview-container">
               <div className="preview modify_preview" data-scroll data-scroll-speed="0.5">
                      <img src="https://images.unsplash.com/photo-1592529754743-91e25c7b9b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt=""/>
                        <div className="preview__details modify_preview__details">
                           <h3 className="txt_lg_white modify_text">Lombok, Indonesia</h3>
                              <p className="preview__details__text__bottom modify_preview__details__text__bottom txt_lg_white">6 Day 5 Nights</p>
                                <span className="preview__details__text">
                               <p className="preview__details__text__top txt_lg_white">$450/person</p>
                              <p className="preview__details__text__top txt_lg_white"><i className="fa fa-star modify_i" aria-hidden="true"></i> 4.7</p>
                            </span>
                       </div>
                  </div> 
                
                  <div className="preview modify_preview" data-scroll data-scroll-speed="1">
                              <img src="https://images.unsplash.com/photo-1584999675865-41e544a9d067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt=""/>
                              <div className="preview__details modify_preview__details">
                                  <h3 className="txt_lg_white modify_text">Yogyakarta, Indonesia</h3>
                                  <p className="preview__details__text__bottom modify_preview__details__text__bottom txt_lg_white">7 Day 6 Nights</p>
                                  <span className="preview__details__text">
                                      <p className="preview__details__text__top txt_lg_white">$390/person</p>
                                      <p className="preview__details__text__top txt_lg_white"><i className="fa fa-star modify_i" aria-hidden="true"></i> 4.7</p>
                                  </span>
                              </div>
                          </div> 

                          <div className="preview modify_preview" data-scroll data-scroll-speed="1.5">
                              <img src="https://images.unsplash.com/photo-1581974206967-93856b25aa13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1036&q=80" alt=""/>
                              <div className="preview__details modify_preview__details">
                                  <h3 className="txt_lg_white modify_text">Bali, Indonesia</h3>
                                  <p className="preview__details__text__bottom modify_preview__details__text__bottom txt_lg_white">6 Day 5 Nights</p>
                                  <span className="preview__details__text">
                                      <p className="preview__details__text__top txt_lg_white">$430/person</p>
                                      <p className="preview__details__text__top txt_lg_white"><i className="fa fa-star modify_i" aria-hidden="true"></i> 4.7</p>
                                  </span>
                              </div>
                          </div> 
                  
               </div>
               <span className="control_right modify_control"><i className="fa fa-angle-right" aria-hidden="true"></i></span>
            </div>

    </section>
  )
}

export default OfferSection