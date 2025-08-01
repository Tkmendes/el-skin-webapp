import { render, screen } from "@testing-library/react";
import About from "./About";

describe('Testar página about', ()=>{
    test('renders about pge', async() => { 
        render(<About/>);
        const AboutPage = await screen.getByText('Sobre a AL SKIN');
        expect(AboutPage).toBeInTheDocument();


    })
});