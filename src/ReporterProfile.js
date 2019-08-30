import React from 'react';
import './ReporterProfile.css';

function ReporterProfile() {
  return (
    <div className="ReporterProfile">
      <div className="profile">
        <div className="profilePhoto">
          <img src="Intersection 2@2x.png" />
        </div>
        <div className="profileBio">
          <h1>Sarah Biryomumaisho</h1>
          <h2>Sarah Biryomumaisho is a Ugandan journalist, voice over artist, social media manager/influencer and blogger. Sarah worked with 4 major radio stations as a senior News Editor, English News Anchor and presenter for the past 8 years. She is currently a voice over artist, correspondent and News Editor at Hotshot Limited, a media and production house in Kampala. She is also currently the Managing Director of Andariya in Uganda.</h2>
        </div>
      </div>
      
      <div className="ReporterArticles">
      <div className="Title">
        <p>Sarah Biryomumaisho's Articles</p>
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
      </div>
    </div>
  );
}

export default ReporterProfile;
