import './App.css';
import Navbar from './component/Navbar.js'
import PreNavbar from './component/PreNavbar';
import data from './data/data.json'
import Slider from './component/Slider';
import Offers from './component/Offers.js'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Heading from './component/Heading'
import StartProduct from './component/StarProduct.js'
import HotAccesoriesMenu from './component/HotAccesoriesMenu.js'
import HotAccessories from './component/HotAccesories.js';
import ProductReviews from './component/ProductReviews'
import Videos from './component/Videos.js'
import Banner from './component/Banner.js'
import Footer from './component/Footer'
import NavOption from './component/NavOption'



function App() {

  return (

    <Router>
      <PreNavbar />
      <Navbar />
      <NavOption miPhones={data.miPhones} redmiPhone={data.redmiPhones} tv={data.tv}
      laptop={data.laptop} fitlifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text={"STAR PRODUCT"} />
      < StartProduct starProduct={data.starProduct} />
      <Heading text={"HOT ACCESORIES"} />
      <HotAccesoriesMenu />

       <Routes>
            
        <Route exact path='/music' element={
           < HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} 
        />

     
      <Route exact path="/smartDevice" element={
        <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}
        />
     

      <Route exact path="/home" element={
        < HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}
      />

      <Route exact path="/lifestyle" element={
        <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />}
      />

      <Route exact path="/mobileAccessories" element={
        <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}
      />
       </Routes>

      <Heading text={"PRODUCT REVIEWS"} />

    <ProductReviews productReviews={data.productReviews}/>

      <Heading text={"VIDEOS"} />
     <Videos  videos={data.videos}/>
      <Heading text={"IN THE PRESS"} />
      <Banner banner={data.banner} />

      <Footer footer={data.footer}/>
    </Router >  );
}

export default App;
