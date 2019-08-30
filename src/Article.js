import React from 'react';
import './Article.css';


class Article extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {

    return (



      <div className="ArticlePage">

      <div className="article">
        <h1 className="articleTitle">Obstetric Violence</h1>
        <h2 >By:<span className="articleWriter" >Editor</span></h2>
        <h3 className="articleDate">01/12/2019</h3>
        <h4 ><span className="articlePath1">Woman</span>\<span className="articlePath2">Obstetric Violence</span></h4>
        <img src="messi4.png"></img>
        <p>“By slapping her lap, the patient will know that you truly care for her” - From a qualitative study on social norms and acceptability of the mistreatment of women during childbirth in Abuja, Nigeria. For many women childbirth is a period associated with suffering, pain, humiliation, violation and even death. Yes, women get violated in labor rooms. It might be appalling, but it is happening. Obstetric violence is one of the various types of Violence against Women (VAW). Women in childbirth can be subjected to various types of violence, such as disrespect, verbal insults, physical violence, discrimination based on race, socioeconomic status, age and others. Forced medical procedures (such as unnecessary caesarean section, episiotomy or vaginal examination) or detention in facilities for failure to pay, are forms of obstetric violence. Unfortunately, it is a neglected type of Violence against Women, and lack of information and awareness about the issue complicates it and makes it harder to prevent and eradicate.<br/>Obstetric violence is an intersection between various factors. Social norms play an important role in the acceptance of Violence against Women, and usually women remain silent about the violence they face in hospitals because they consider it "normal". This is because of the stereotype of how midwives are rude and violent, and getting screamed at or beaten by a midwife is normal and no one usually talks about it. In addition, women are ignorant about their rights as patients. On the other hand, women's silence about their experiences and ignorance about their rights gives the medical staff, especially the midwives, the space to be abusive. Similarly, women’s passive acceptance of mistreatment and violence by health workers may be amplified by the social norms in patriarchal societies. Women’s obedience of men in patriarchal societies may also influence their perceptions about their interactions with other people who are considered "superior" to them; such as health care providers, even if the provider was a female. And let us not forget that some doctors and other health care providers work in bad environments and overcrowded hospitals with insufficient staff, which affects the patient-doctor relationship, where the doctor is not able to provide the patient with the care and the treatment they need. Non-Governmental Organizations and initiatives should work on advocating, raising awareness, encouraging and promoting actions towards awareness and action within the society. Action upon obstetric violence should be according to the circumstances, taking into account local, cultural, religious and legal frameworks. NGOs and initiatives should also include, promote and raise awareness about sexual and reproductive health rights within schools, especially among young girls exposed to higher risks of early marriages. Raising awareness about obstetric violence and making it more noticeable is important to end it as one of the forms of Violence against Women. Understanding the underlying causes of obstetric violence is also essential to eradicating it from the roots.</p>
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

export default Article;