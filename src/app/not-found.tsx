import NotFoundSVG from "../Imagens/not_found.svg"


export default function NotFound() {
    return (
        <div style={{ marginTop: "50px", width: "100%", display: "flex", justifyContent: "center" }}>
            <img style={{ maxWidth: "100%", height: "auto" }} src={NotFoundSVG.src} alt="NotFound" />
        </div>
    )
}