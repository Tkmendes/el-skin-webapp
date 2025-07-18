import HeaderComponents from "../Componentes/Header/headerComponents";
import BannerContainer from "../Componentes/BannerSection/BannerContainer";
import ProductGrid from "../Componentes/ProductGrid/productGrid";
import Footer from "../Componentes/Footer/footer";


function Home(){

    return(
        <div>
            <HeaderComponents/>
            <BannerContainer/>
            <ProductGrid/>
            <Footer/>
            
        </div>
    )
}

export default Home