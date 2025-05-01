import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home() {

    return (
      <>
      <div className="header-section">
      <div className="head-item0">
        <p className="head-text1">fırsatı kaçırma</p>
        <p className="head-text2">KOD ACIKTIRIR <br/> PİZZA, DOYURUR</p>
        <Link to="/orderpage" className="btn0">ACIKTIM</Link>
      </div> 
      </div>
      </>
    )
  }
  
export default Home;