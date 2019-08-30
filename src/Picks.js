import React from 'react';
import './Picks.css';


function Picks() {

  return (

    <div className="picks">

      <div className="Title">
        <p>Today's Picks</p>
        <hr></hr>
      </div>

      <div className="firstNew">
        <div className="coverPhoto"><img src="messi5.jpg"></img>
          <div className="metaData">
            <div className="topMeta">
              <p className="catagoryMeta">Women</p>
              <p className="headMeta">Obstetric Violence</p>
            </div>
            <div className="bottomMeta">
              <p>Understanding the underlying causes of obstetric violence is also essential to eradicating it from the roots.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="secondNew">
        <div className="coverPhoto"><img src="messi5.jpg"></img>
          <div className="metaData">
            <div className="topMeta">
              <p className="catagoryMeta">Film</p>
              <p className="headMeta">A Multilayered Approach to Filmmaking</p>
            </div>
            <div className="bottomMeta">
              <p>Marwa Zein, a multiple award winning director and the maker of “Khartoum Offside” made headlines in February 2019 after being selected for screening the film at the 69th Berlin International Film Festival (Berlinale)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="thirdNew">
        <div className="coverPhoto"><img src="messi5.jpg"></img>
          <div className="metaData">
            <div className="topMeta">
              <p className="catagoryMeta">Film</p>
              <p className="headMeta">A Multilayered Approach to Filmmaking</p>
            </div>
            <div className="bottomMeta">
              <p>Andariya will continue to support the arts and culture through various means</p>            
            </div>
          </div>
        </div>
      </div>

      <div className="fourthNew">
        <div className="coverPhoto"><img src="messi5.jpg"></img>
          <div className="metaData">
            <div className="topMeta">
              <p className="catagoryMeta">Film</p>
              <p className="headMeta">A Multilayered Approach to Filmmaking</p>
            </div>
            <div className="bottomMeta">
              <p>When our vernacular contains the word "Rajala" (derived from Rajil: man) that is quite literally used as a dare, it means that men trying to demonstrate fearlessness is a cultural truth.</p>            
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Picks;