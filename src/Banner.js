import Character from './Character';
import Description from './Description';
import Episode from './Episodes';
import Footer from './Footer';
import Header from './Header';
import bannerImage from './banner.9f438b62ba343f3875bd.jpg' 

const Banner = () => {
  return (

    <div>
     
      <Header/>
      <div className="banner-cont">
        <img src={bannerImage} alt="Logo" />
      </div>
      <Description/>
      <Character/>
      <Episode/>
      <Footer/>

    </div>
    
  )
}

export default Banner;