import React from 'react';
import './Section.css';


class Section extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {

    return (



      <div className="Section">

        <div className="mainNew">

          <div className="coverPhoto"><img src='messi3.jpg'></img></div>

          <div className="titleContainer">
            <p className="sliderTitle">Trending</p>
            <div className="dash"></div>
            <div className="daash"></div>
          </div>

          <div className="metaData">
            <p className="titleData">Obstetric Violence</p>
            <p className="writerData">By:Editor</p>
            <p className="breifData">Understanding the underlying causes of obstetric violence is also essential to eradicating it from the roots.<br /> <br />“By slapping her lap, the patient will know that you truly care for her” - From a qualitative study on social norms and acceptability of the mistreatment of women during childbirth in Abuja, Nigeria.</p>
            <p className="fullArticle">...Read More...</p>
          </div>

        </div>

        <div className="moreArticles">
      <div className="Title">
        <p>Other Articles</p>
        <hr></hr>
      </div>

      <div className="firstArticle">
      <div className="ArticlePhoto">
          <img src="Intersection 19@2x.png" />
        </div>
        <div className="ArticleBio">
          <h1>Kemiyondo Coutinho & Eleanor Nabwiso: Shaping Ugandan Cinema in the Diaspora and at Home</h1>
          <h2>By: Sarah Biryomumaisho</h2>
          <h3>Several women have joined the Ugandan film industry either as actresses, producers and writers, we speak to two to learn about their journeys.</h3>
          <h4>...Read More...</h4>
          <hr></hr>
        </div>
      </div>
      <div className="secondArticle">
      <div className="ArticlePhoto">
          <img src="Intersection 19@2x 2.png" />
        </div>
        <div className="ArticleBio">
          <h1>Should Women be Paid for Housework?</h1>
          <h2>By: Sarah Biryomumaisho</h2>
          <h3>The campaign, #UnpaidCareWork was started in Uganda and has now spread across the world, with women asking that their contribution through this work be included in the country’s GDP.</h3>
          <h4>...Read More...</h4>
          <hr></hr>
        </div>
      </div>
      <div className="thirdArticle">
      <div className="ArticlePhoto">
          <img src="Intersection 19@2x 2.png" />
        </div>
        <div className="ArticleBio">
          <h1>Should Women be Paid for Housework?</h1>
          <h2>By: Sarah Biryomumaisho</h2>
          <h3>The campaign, #UnpaidCareWork was started in Uganda and has now spread across the world, with women asking that their contribution through this work be included in the country’s GDP.</h3>
          <h4>...Read More...</h4>
          <hr></hr>
        </div>
      </div>
      <div className="fourthArticle">
      <div className="ArticlePhoto">
          <img src="Intersection 19@2x 2.png" />
        </div>
        <div className="ArticleBio">
          <h1>Should Women be Paid for Housework?</h1>
          <h2>By: Sarah Biryomumaisho</h2>
          <h3>The campaign, #UnpaidCareWork was started in Uganda and has now spread across the world, with women asking that their contribution through this work be included in the country’s GDP.</h3>
          <h4>...Read More...</h4>
          <hr></hr>
        </div>
      </div>
      <p className='moreNews'>Older Articles</p>
      </div>

      </div>

    );
  }
}

export default Section;