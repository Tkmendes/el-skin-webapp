import NotFoundSVG from "../Imagens/not_found.svg"


export default function NotFound(){
        return(
            <div style={{marginTop: "50px"}}>
                <img src={NotFoundSVG} alt="NotFound"/>        
            </div>
        )
}