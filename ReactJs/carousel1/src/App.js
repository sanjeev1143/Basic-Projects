import React from "react";
import './App.css';
import Carousel from "react-elastic-carousel";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() {
  return (

    <div className="App">
      <h1 style={{ textAlign: "center" }}>Example 1</h1>
      <br /><br /><br /><br /><br />

      <div className="eg1">





        <Carousel breakPoints={breakPoints}>
          <div className="eg1Items">
            <h3 className="label">Pre Owned</h3>
            <img className="items" src={require("./Images/img1.jpg")} alt="pic1" />
            <div className="price">
              <h4>Grand Theft Auto</h4>
              <h4>₹1099</h4>
            </div>
          </div>
          <div className="eg1Items">
            <h3 className="label">Pre Owned</h3>
            <img className="items" src={require("./Images/img2.jpg")} alt="pic1" />
            <div className="price">
              <h4>Grand Theft Auto</h4>
              <h4>₹1099</h4>
            </div>
          </div>
          <div className="eg1Items">
            <h3 className="label">Pre Owned</h3>
            <img className="items" src={require("./Images/img3.jpg")} alt="pic1" />
            <div className="price">
              <h4>Grand Theft Auto</h4>
              <h4>₹1099</h4>
            </div></div>
          <div className="eg1Items">
            <h3 className="label2">Sell</h3>
            <img className="items" src={require("./Images/img4.jpg")} alt="pic1" />
            <div className="price">
              <h4>Grand Theft Auto</h4>
              <h4>₹1099</h4>
            </div></div>
          <div className="eg1Items">
            <h3 className="label">Pre Owned</h3>
            <img className="items" src={require("./Images/img5.jpg")} alt="pic1" />
            <div className="price">
              <h4>Grand Theft Auto</h4>
              <h4>₹1099</h4>
            </div></div>
          <div className="eg1Items">
            <h3 className="label">Pre Owned</h3>
            <img className="items" src={require("./Images/img6.jpg")} alt="pic1" />
            <div className="price">
              <h4>Grand Theft Auto</h4>
              <h4>₹1099</h4>
            </div></div>
          <div className="eg1Items">
            <h3 className="label2">Sell</h3>
            <img className="items" src={require("./Images/img7.jpg")} alt="pic1" />
            <div className="price">
              <h4>Grand Theft Auto</h4>
              <h4>₹1099</h4>
            </div></div>
          <div className="eg1Items">
            <h3 className="label">Pre Owned</h3>
            <img className="items" src={require("./Images/img8.jpg")} alt="pic1" />
            <div className="price">
              <h4>Grand Theft Auto</h4>
              <h4>₹1099</h4>
            </div></div>
          <div className="eg1Items">
            <h3 className="label2">Sell</h3>
            <img className="items" src={require("./Images/img9.jpg")} alt="pic1" />
            <div className="price">
              <h4>Grand Theft Auto</h4>
              <h4>₹1099</h4>
            </div></div>

        </Carousel>
      </div>
      <div className="eg2">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 3"></button>
          </div>


          <h1 style={{ textAlign: "center" }} >Example 2</h1>
          <br />
          <br />
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={require("./Images/img1.jpg")} class="d-block w-100 imageseg1" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={require("./Images/img2.jpg")} class="d-block w-100 imageseg1" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={require("./Images/img3.jpg")} class="d-block w-100 imageseg1" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={require("./Images/img4.jpg")} class="d-block w-100 imageseg1" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={require("./Images/img5.jpg")} class="d-block w-100 imageseg1" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={require("./Images/img6.jpg")} class="d-block w-100 imageseg1" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={require("./Images/img7.jpg")} class="d-block w-100 imageseg1" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={require("./Images/img8.jpg")} class="d-block w-100 imageseg1" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={require("./Images/img9.jpg")} class="d-block w-100 imageseg1" alt="..." />
            </div>

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br />
      <h1 style={{ textAlign: "center" }} >Example 3</h1>

      <br />
      <br />

      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require("./Images/img1.jpg")} class="d-block w-100 imageseg1" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("./Images/img2.jpg")} class="d-block w-100 imageseg1" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("./Images/img3.jpg")} class="d-block w-100 imageseg1" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("./Images/img4.jpg")} class="d-block w-100 imageseg1" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("./Images/img5.jpg")} class="d-block w-100 imageseg1" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("./Images/img6.jpg")} class="d-block w-100 imageseg1" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("./Images/img7.jpg")} class="d-block w-100 imageseg1" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("./Images/img8.jpg")} class="d-block w-100 imageseg1" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("./Images/img9.jpg")} class="d-block w-100 imageseg1" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br />
    </div >
  );
}

export default App;
