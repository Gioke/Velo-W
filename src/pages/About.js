import React from 'react';
import { Morgan, Deschee, Vdbparts, Shimano, Minerva, Dewo, Codagex, Verwimp, Cema } from '../components/PartnerData';
import '../styles/about.css';

export const About = () => {
    return (
        <>
            <div className="about-text">
                <h1 className="text-xl font-bold text-2xl underline decoration-amber-500 flex justify-center mt-3">About Vélo-W:</h1>
                <br/>
                <p className="p-2">Hey, <br/>
                    <br/>
                    Al van jongs af aan was ik gebeten door het fietsen. Op latere leeftijd werd die microbe op amateurgebied een tijdje competitief in het wegwielrennen, cyclocross en mountenbiken. <br/>  Naast het rijden zelf moet er natuurlijk ook aan de fiets gewerkt worden. Aldoende leert men, vooral met het eigen materiaal en de nodige interesse.
                    <br/>
                    Met de jaren heb ik me verdiept in de techniek van de fietsen. Alsook zijn we nog steeds bezig met opleidingen te volgen. Er is veel veranderd in de fietswereld en dit zal nog blijven evolueren. <br/>
                    In combinatie met een vaste job als opbouwer/carrossier van bedrijfswagens hebben we beslist om een onderneming op te starten in het herstellen en verkopen van fietsen. <br/>
                    Heeft jou fiets een onderhoud nodig of een herstelling? Aarzel dan niet om ons te contacteren of kom even langs wij herstellen alle fietsen. <br/>
                    <br/>
                    Onze werkplaats is ook voorziend voor mindervalide fietsen en ook voor bakfietsen. <br/>
                    Of bent u op zoek naar een nieuwe kinderfiets, stadsfiets, Ebike of mtb.
                    Alsook 2de hands fietsen kan je bij ons soms vinden. <br/>
                    We helpen u graag verder. <br/>
                    <br/>

                    Groetjes Wouter </p>
            </div>
            <br/>
            <div>
                <h1 className="text-xl font-bold underline decoration-amber-500 p-2">Partners:</h1>
            </div>
            <div className="partners">
                <a href="https://www.morganblue.net/" target="_blank" rel="noreferrer" ><img src={ Morgan } alt="logo morgan blue"/></a>
                <a href="https://www.descheemaeker.be/nl" target="_blank" rel="noreferrer" ><img src={ Deschee } alt="Logo descheemaeker"/></a>
                <a href="https://www.vdbparts.be/" target="_blank" rel="noreferrer" > <img src={ Vdbparts } alt="Logo VdbParts"/></a>
                <a href="https://bike.shimano.com/nl-NL/home.html" target="_blank" rel="noreferrer" ><img src={ Shimano } alt="Logo Shimano"/></a>
                <a href="https://minerva-cycling.be/nl/" target="_blank" rel="noreferrer" ><img src={ Minerva } alt="Logo Minerva"/></a>
                <a href="https://www.dewo-europe.com/" target="_blank" rel="noreferrer" ><img src={ Dewo } alt=" Logo Dewo-Europe"/></a>
                <a href="https://codagex.be/websolutions/default.aspx" target="_blank" rel="noreferrer" ><img src={ Codagex } alt="Logo Codagex"/></a>
                <a href="https://www.verwimp.nl/nl" target="_blank" rel="noreferrer" ><img src={ Verwimp } alt="Logo Verwimp"/></a>
                <a href="https://www.cemabearing.be/index.php?route=common/home" target="_blank" rel="noreferrer" ><img src={ Cema } alt="Logo Cema Bearing"/></a>
            </div>
        </>
    )
}