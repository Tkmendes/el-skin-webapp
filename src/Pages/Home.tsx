
import BannerContainer from "../Components/BannerSection/BannerContainer";
import ProductGrid from "../Components/ProductGrid/productGrid";



function Home(){

    return(
        <div data-testid="home-page">
            <BannerContainer/>
            <ProductGrid/>
          
            
        </div>
    )
}

export default Home