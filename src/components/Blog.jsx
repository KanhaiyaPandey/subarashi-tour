

const Blog = () => {
  return (
    <section data-scroll-section id="pin">
    <h1 className="centered-h1" data-scroll data-scroll-direction="horizontal"
     data-scroll-speed="-3" data-scroll-class="appear" data-scroll-repeat="true">From the Blog</h1>

    <div className="blog">
    <div className="video" data-scroll data-scroll-sticky data-scroll-target="#pin">
         <div className="video_preview">
          <img src="https://images.unsplash.com/photo-1583396618422-597b2755de83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1048&q=80" alt=""/>
             </div>
           <div className="video_preview_description">
            <h1 className="txt_md_black">Bedugul Bali! the Wonderful god  place in the world</h1>
             <p className="txt_md_grey">Bedugul is one of the most famous place in Bali Indonesia, Bedugul is a tourism area located in the middle of the island of Bali. The Bedugul tourism area is very well known as te best place for family vacation in Bali. Offers natural attractions, Such as large plantation areas, lake views and the beauty of Hindu Temple architecture.</p>
            <a href="#" className="txt_lg_black" ><i>Read more</i> <i className="fa fa-angle-right" aria-hidden="true"></i></a>
         </div>
       </div>
     
       <div className="blogpost">
         <div className="blogpost_preview">
     <div className="blogpost_preview_img">
         <img src="https://images.unsplash.com/photo-1581775231124-4f70b143b85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt=""/>
         </div>
          <div className="blogpost_preview_txt">
      <h3 className="txt_md_black">The most wonderful underwater</h3>
        <p className="txt_md_grey">@monicafer</p>
        </div>
         </div>
         
         <div className="blogpost_preview">
          <div className="blogpost_preview_img">
             <img src="https://images.unsplash.com/photo-1523539693385-e5e891eb4465?ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80" alt=""/>
          </div>
          <div className="blogpost_preview_txt">
             <h3 className="txt_md_black">The most Beautiful wet grassland</h3>
                <p className="txt_md_grey">@david_underson</p>
          </div>
          </div>

          <div className="blogpost_preview">
            <div className="blogpost_preview_img">
                <img src="https://images.unsplash.com/photo-1576878176876-517cdb8006ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""/>
            </div>
            <div className="blogpost_preview_txt">
             <h3 className="txt_md_black">Relax and feel the nature, unforgettable waterfall</h3>
             <p className="txt_md_grey">@lara.watson</p>  
            </div>
            </div>

            <div className="blogpost_preview">
             <div className="blogpost_preview_img">
                <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1023&q=80" alt=""/>
             </div>
            <div className="blogpost_preview_txt">
             <h3 className="txt_md_black">Beautiful panorama, with fresh air relax holiday</h3>
              <p className="txt_md_grey">@natasha.alexander</p>
           </div>
          </div>

       </div>

    </div>

    </section>
  )
}

export default Blog