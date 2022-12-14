import React, { useRef, useState } from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import "./App.css";
import { Accordion, Card } from "react-bootstrap";
import "animate.css/animate.min.css";
import Texto from "./Texto";
import heroesrun from "./assets/Logos_HeroesRun-04.png";
import frase from "./assets/Frase.png";
import concept11 from "./assets/concept11.png";
import Concept4 from "./assets/Concept4.png";
import ss from "./assets/SS.png";
import concept6 from "./assets/Concept6.png";
import botonweb2 from "./assets/botonweb2.png";
import botonweb from "./assets/botonweb.png";
import legal from "./assets/LEGAL.png";
import uniceffrase2 from "./assets/unicef-frase-2.svg";
import calendario from "./assets/calendario.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import imagenFondoNegro1 from "./assets/imagenFondoNegro1.svg";
import imagenFondoNegro2 from "./assets/imagenFondoNegro2.svg";
import imagenFondoNegro3 from "./assets/imagenFondoNegro3.svg";
import imagenFondoNegro4 from "./assets/imagenFondoNegro4.svg";
import unicef_kit from "./assets/unicef_kit.svg";
import polera_batman from "./assets/polera_batman.jpg";
import polera_liga from "./assets/polera_liga.jpg";
import polera_superman from "./assets/polera_superman.jpg";
import polera_wonderwoman from "./assets/polera_wonderwoman.jpg";
import preguntas from "./assets/faqs.svg";
import Acordion from "./Acordion";
function App() {
  const ref1 = useRef(null);
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  const on_click = () => {
    window.location.href =
      "https://ticketplus.cl/events/unicef-heroes-run-wonder-woman";
  };
  const on_click2 = () => {
    window.location.href =
      "https://ticketplus.cl/events/unicef-heroes-run-batman";
  };
  const on_click3 = () => {
    window.location.href =
      "https://ticketplus.cl/events/unicef-heroes-run-superman";
  };
  const on_click4 = () => {
    window.location.href =
      "https://ticketplus.cl/events/unicef-heroes-run-La-Liga-de-la-Justicia";
  };

  return (
    <ScrollContainer>
      <div className="row intro">
        {/* fin nav */}
        {/*       animation={batch(StickyIn(), FadeIn(), ZoomIn())} */}
        <div className="col-xs-12 col-sm-5 col-md-5 container">
          <img src={heroesrun} className="w-full display-block" alt="" />
        </div>
        <div className="col-xs-12 col-sm-4 col-sm-offset-3 col-md-4 col-md-offset-3 blue-bg mt-3">
          <img
            src={frase}
            className="w-full display-block "
            style={{ width: "300px", heigth: "100%" }}
            alt=""
          />
        </div>
        {/* main images */}

        <div className="row center-xs p-x-0 mb-5 ">
          <div className="col-xs-12 col-sm-6 col-md-3 p-x-0">
            <img src={concept11} className="w-full display-block" alt="" />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 p-x-0">
            <img src={Concept4} className="w-full display-block" alt="" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 p-x-0">
            <img src={ss} className="w-full display-block" alt="" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 p-x-0">
            <img src={concept6} className="w-full display-block" alt="" />
          </div>
        </div>

        <div className="container text-center my-5  ">
          <div className="row">
            <div className="col-md-12">
              <img src={uniceffrase2} />
            </div>
            {/*mucho texto */}
            <AnimationOnScroll animateIn="animate__bounceIn">
              <h4 className="mt-3 container">
                Entre diciembre de 2022 y febrero de 2023, por primera vez en
                Chile, las ciudades de Santiago, La Serena, Villarrica y Vi??a
                del Mar recibir??n a miles de superh??roes sin capa que
                participar??n de la corrida ???UNICEF Heroes Run??? con distancias de
                2 y 5 km, en una iniciativa de UNICEF que busca sensibilizar, y
                promover los derechos de la infancia. Deportistas, aficionados,
                familias, ni??os y ni??as de todo el pa??s podr??n ser parte de esta
                actividad solidaria que servir?? para recaudar fondos y seguir
                financiando los proyectos que UNICEF implementa en Chile y en el
                mundo. Se trata de cuatro corridas, en cuatro ciudades de Chile,
                inspiradas en distintos personajes de la ???Liga de la Justicia???
                de DC Comics los que correr??n para defender los derechos de
                todos los ni??os, ni??as y adolescentes. Es as??, como la primera
                corrida ser?? presentada por la{" "}
                <b>
                  Mujer Maravilla (Wonder Woman), la que se realizar?? el pr??ximo
                  11 de diciembre en Santiago,
                </b>{" "}
                en el Ciudad Empresaria, Huechuraba a las 8:30 hrs, en circuitos
                de 2k y 5k. El{" "}
                <b>
                  22 de enero del 2023 nos trasladamos a Villarrica, para la
                  corrida que ser?? presentada por Batman. Mientras que el 5 de
                  febrero de 2023 en El Faro de La Serena,
                </b>{" "}
                estar?? ser?? el turno del hombre de acero <b>Superman</b> y para
                finalizar el <b>19 de febrero,</b> 2023 en el{" "}
                <b>Sporting de Vi??a del Mar,</b> con la corrida que reunir?? a
                todos los superh??roes de DC en la <b>Liga de la Justicia.</b>{" "}
                Comprando tu inscripci??n en Ticketplus estar??s apoyando el
                trabajo continuo de UNICEF en favor de los derechos de los
                ni??os, ni??as y adolescentes, que permitir?? seguir respondiendo a
                las necesidades de la infancia en Chile y el mundo. Conoce aqu??
                todo lo que hemos hecho en el 2021. Cada inscripci??n permite a
                UNICEF llevar programas de protecci??n, salud, educaci??n y
                respuesta a las emergencias globales para ni??os, ni??as y
                adolescentes.
              </h4>
            </AnimationOnScroll>
            {/* fin mucho texto */}
          </div>
        </div>

        {/* background negro */}
        <div
          className="container text-center fondoNegro mt-5"
          style={{ backgroundImage: "black" }}
        >
          <div className="row">
            <div className="col-md-12">
              <img src={calendario} />
            </div>
          </div>

          <div className="container text-center">
            <div className="row my-4">
              <div className="col-md-6 pop">
                <img
                  src={imagenFondoNegro1}
              
                  style={{ width: "80%" , marginTop: "20px" }}
                  onClick={() => {
                    on_click();

                  }}
                />
              </div>
              <div className="col-md-6 pop ">
                <img
                  src={imagenFondoNegro2}
                  style={{ width: "80%", marginTop: "20px"  }}
                  onClick={() => {
                    on_click2();
                  }}
                />
              </div>
            </div>
            <div className="row my-4">
              <div className="col-md-6 pop">
                <img
                  src={imagenFondoNegro3}
                  style={{ width: "80%", marginTop: "20px" }}
                  onClick={() => {
                    on_click3();
                  }}
                />
              </div>
              <div className="col-md-6 pop">
                <img
                  src={imagenFondoNegro4}
                  style={{ width: "80%", marginTop: "20px"  }}
                  onClick={() => {
                    on_click4();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 container">
          <img src={unicef_kit} style={{ width: "70%" }} />
        </div>
        {/* make a 4 images */}
        <div className="container text-center my-5">
          <div className="d-md-flex ">
            <div className="col-xs-12 col-md-6">
              <img src={polera_wonderwoman} style={{ width: "100%" }} />
            </div>
            <div className="col-xs-12 col-md-6">
              <img src={polera_batman} style={{ width: "100%" }} />
            </div>
          </div>
          
 
        
          <div className="d-md-flex my-3">
            <div className="col-xs-12 col-md-6">
              <img src={polera_superman} style={{ width: "100%" }} />
            </div>
               
            <div className="col-xs-12   col-md-6">
              <img src={polera_liga} style={{ width: "100%" }} />
            </div>
          </div>


        </div>
        {/* footer  */}

        {/*Faqs section*/}
      
          <div className="row fondoNegro">
            <div className="col-md-12">
              <img src={preguntas} />
              <Acordion/> 
            </div>
          </div>
          {/*make accordion*/}

   
      </div>
    </ScrollContainer>
  );
}

export default App;
