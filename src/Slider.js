import React from 'react';
import './Slider.css';


class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      metaData:[{
        imgUrl:"messi.jpg",
        catagoryData:"Film",
        writerData:"Sarah Biryomumaisho",
        titleData:"Kemiyondo Coutinho & Eleanor Nabwiso",
        breifData:"Shaping Ugandan Cinema in the Diaspora and at Home"
      },
      {
        imgUrl:"messi2.jpeg",
        catagoryData:"kora",
        writerData:"Youssef Ilsaqa",
        titleData:"messi The GOAT",
        breifData:"messi score hatrick to night"
      },
      {
        imgUrl:"messi3.jpg",
        catagoryData:"Film",
        writerData:"Sarah Biryomumaisho",
        titleData:"Kemiyondo Coutinho & Eleanor Nabwiso",
        breifData:"Shaping Ugandan Cinema in the Diaspora and at Home"
      },
      {
        imgUrl:"messi4.png",
        catagoryData:"Film",
        writerData:"Sarah Biryomumaisho",
        titleData:"Kemiyondo Coutinho & Eleanor Nabwiso",
        breifData:"Shaping Ugandan Cinema in the Diaspora and at Home"
      },
      {
        imgUrl:"messi5.jpg",
        catagoryData:"Film",
        writerData:"Sarah Biryomumaisho",
        titleData:"Kemiyondo Coutinho & Eleanor Nabwiso",
        breifData:"Shaping Ugandan Cinema in the Diaspora and at Home"
      }
    ]
    };
  }


  render() {

    setTimeout(()=>{
      let tempArray= this.state.metaData;
      let firstItem=this.state.metaData[0];
      tempArray.shift();
      tempArray.push(firstItem);
      this.setState({
        metaData:tempArray
      })
    }, 5000);

    return (
      
      

      <div className="slider">

        <div className="coverPhoto"><img src={this.state.metaData[0].imgUrl}></img></div>

        <div className="titleContainer">
          <p className="sliderTitle">Top Stories</p>
          <div className="dash"></div>
          <div className="daash"></div>
        </div>
        
        <div className="metaData">
          <p className="catagoryData">{this.state.metaData[0].catagoryData}</p>
          <p className="writerData">By:{this.state.metaData[0].writerData}</p>
          <p className="titleData">{this.state.metaData[0].titleData}:</p>
          <p className="breifData">{this.state.metaData[0].breifData} </p>
          <p className="fullArticle">Read More ...</p>
        </div>

        <div className="moreNews">

          <div className="smallNews">
            <div className="img"><img src={this.state.metaData[1].imgUrl}></img></div>
            <div className="metaData">
              <p className="catagoryData">{this.state.metaData[1].catagoryData}</p>
              <p className="brief">{this.state.metaData[1].breifData}</p>
              <p className="writerData">By:{this.state.metaData[1].writerData}</p>
            </div>
          </div>

          <div className="smallNews">
            <div className="img"><img src={this.state.metaData[2].imgUrl}></img></div>
            <div className="metaData">
              <p className="catagoryData">{this.state.metaData[2].catagoryData}</p>
              <p className="brief">{this.state.metaData[2].breifData}</p>
              <p className="writerData">By:{this.state.metaData[2].writerData}</p>
            </div>
          </div>

          <div className="smallNews">
            <div className="img"><img src={this.state.metaData[3].imgUrl}></img></div>
            <div className="metaData">
              <p className="catagoryData">{this.state.metaData[3].catagoryData}</p>
              <p className="brief">{this.state.metaData[3].breifData}</p>
              <p className="writerData">By:{this.state.metaData[3].writerData}</p>
            </div>
          </div>

          <div className="smallNews">
            <div className="img"><img src={this.state.metaData[4].imgUrl}></img></div>
            <div className="metaData">
              <p className="catagoryData">{this.state.metaData[4].catagoryData}</p>
              <p className="brief">{this.state.metaData[4].breifData}</p>
              <p className="writerData">By:{this.state.metaData[4].writerData}</p>
            </div>
          </div>

        </div>

      </div>

    );
  }
}

export default Slider;