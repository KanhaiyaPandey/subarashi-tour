

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
            </div>

    </section>
  )
}

export default OfferSection