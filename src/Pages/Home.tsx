import HeaderComponents from "../Componentes/Header/headerComponents";
import BannerContainer from "../Componentes/BannerSection/BannerContainer";
import ProductGrid from "../Componentes/ProductGrid/productGrid";


function Home(){

    return(
        <div>
            <HeaderComponents/>
            <BannerContainer/>
            <ProductGrid/>
            
        </div>
    )
}

export default Home