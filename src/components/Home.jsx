import { Link } from "react-router-dom";

function Home() {

    return (
      <main>
      <div className="header-section">
      <div className="head-item0">
        <p className="head-text1">fırsatı kaçırma</p>
        <p className="head-text2">KOD ACIKTIRIR <br/> PİZZA, DOYURUR</p>
        <Link to="/orderpage" className="btn0">ACIKTIM</Link>
      </div> 
      </div>
      <div className="nav-items">
        <nav>
          <a href=""><img src="images/iteration-2-images/icons/1.svg" alt="" />Yeni! Kore</a>
          <a href=""><img src="images/iteration-2-images/icons/2.svg" alt="" />Pizza</a>
          <a href=""><img src="images/iteration-2-images/icons/3.svg" alt="" />Burger</a>
          <a href=""><img src="images/iteration-2-images/icons/4.svg" alt="" />Kızartmalar</a>
          <a href=""><img src="images/iteration-2-images/icons/5.svg" alt="" />Fast food</a>
          <a href=""><img src="images/iteration-2-images/icons/6.svg" alt="" />Gazlı İçecek</a>
        </nav>
      <div className="card-section">
          <div className="card0">
              <h1>Özel <br/> Lezzetus</h1>
              <p>Position:Absolute Acı Burger</p>
              <a className="btn">SİPARİŞ VER</a>
          </div>
          <div className="corner-cards">
              <div className="card1">
                <p>Hackathlon <br/> Burger Menu</p>
                <a className="btn">SİPARİŞ VER</a>
              </div>
              <div className="card2">
                <p><span id="card2-text">Çoooook</span> hızlı <br/> npm gibi kurye</p>
                <a className="btn">SİPARİŞ VER</a>
              </div>
          </div>
      </div>
      </div>
      <p id="encoksatan">en çok paketlenen menüler</p>
      <h2 id="aciktiran">Acıktıran Kodlara Doyuran Lezzetler</h2>
      <div className="nav-items">
        <nav>
          <a href=""><img src="images/iteration-2-images/icons/1.svg" alt=""/>Ramen</a>
          <a href=""><img src="images/iteration-2-images/icons/2.svg" alt=""/>Pizza</a>
          <a href=""><img src="images/iteration-2-images/icons/3.svg" alt=""/>Burger</a>
          <a href=""><img src="images/iteration-2-images/icons/4.svg" alt=""/>French Fries</a>
          <a href=""><img src="images/iteration-2-images/icons/5.svg" alt=""/>Fast food</a>
          <a href=""><img src="images/iteration-2-images/icons/6.svg" alt=""/>Soft Drinks</a>
        </nav>
      </div>
      <div className="food-section">
        <div className="food-items">
          <img src="images/iteration-2-images/pictures/food-1.png" alt=""/>
          <h3>Terminal Pizza</h3>
          <div className="food-price">
              <p>4.9</p>
              <p>(200)</p>
              <h3>60₺</h3>
          </div>
        </div>
        <div className="food-items">
          <img src="images/iteration-2-images/pictures/food-2.png" alt=""/>
          <h3>Position Absolute Acı Pizza</h3>
          <div className="food-price">
            <p>4.9</p>
            <p>(200)</p>
            <h3>60₺</h3>
        </div>
        </div>
        <div className="food-items">
          <img src="images/iteration-2-images/pictures/food-3.png" alt=""/>
          <h3>useEffect Tavuklu Burger</h3>
          <div className="food-price">
            <p>4.9</p>
            <p>(200)</p>
            <h3>60₺</h3>
        </div>
        </div>
      </div>
      </main>
    )
  }
  
export default Home;