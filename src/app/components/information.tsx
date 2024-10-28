"use client"
import Image from "next/image";
import { Navbar } from "./header";
import { useState, useEffect } from "react";
import Colors from "../colors";
import Footer from "./footer";
import {Accordion, AccordionGroup, AccordionSummary, AccordionDetails} from '@mui/joy';



const information = [{lang:'en', header:'Find Inspiration and Grow Spiritually',description:'Discover a new way to meditate and grow in your faith with our app. \nSpecifically designed for Christians, this tool offers a daily devotional and a questionnaire to help you reflect and delve deeper into God\'s word. Plus, you can study with multiple versions of the Bible, perfect for detailed and enriching analysis.', char:[{head:'Daily Devotional:',text:'Start your day with an inspiring reflection.',img:"/src/img/reflexiones.jpeg"},{head:'Meditation Questionnaire:',text:'Dive deeper into biblical teachings with thought-provoking questions.',img:"/src/img/devocional.jpeg"},{head:'Multiple Bible Versions:',text:'Access various translations for a more comprehensive study.',img:"/src/img/versions.jpeg"},{head:'Intuitive Interface:',text:'Enjoy a seamless user experience focused on your spiritual growth.',img:"/src/img/interfaz.jpeg"}]},
{lang:'es', header:'Encuentra Inspiración y Crece Espiritualmente',description:'Descubre una nueva forma de meditar y crecer en tu fe con nuestra aplicación. \nDiseñada especialmente para cristianos de cualquier denominación, esta herramienta te ofrece un devocional diario y un cuestionario que te ayudará a reflexionar y profundizar en la palabra de Dios. Además, podrás estudiar con múltiples versiones de la Biblia, perfectas para un análisis detallado y enriquecedor.', char:[{head:'Devocional Diario:',text:'Comienza tu día con una reflexión inspiradora.',img:"/src/img/reflexiones.jpeg"},{head:'Cuestionario de Meditación:',text:'Profundiza en las enseñanzas bíblicas con preguntas que te harán pensar.',img:"/src/img/devocional.jpeg"},{head:'Varias Versiones de la Biblia:',text:'Accede a diversas traducciones para un estudio más completo.',img:"/src/img/versions.jpeg"},{head:'Interfaz Intuitiva:',text:'Disfruta de una experiencia de usuario fluida y centrada en tu crecimiento espiritual.',img:"/src/img/versions.jpeg"}]},
{lang:'fr', header:'Find Inspiration and Grow Spiritually',description:'Discover a new way to meditate and grow in your faith with our app. Specifically designed for Christians, this tool offers a daily devotional and a questionnaire to help you reflect and delve deeper into God\'s word. Plus, you can study with multiple versions of the Bible, perfect for detailed and enriching analysis.', char:[{head:'Daily Devotional:',text:'Start your day with an inspiring reflection.',img:"/src/img/reflexiones.jpeg"},{head:'Meditation Questionnaire:',text:'Dive deeper into biblical teachings with thought-provoking questions.',img:"/src/img/devocional.jpeg"},{head:'Multiple Bible Versions:',text:'Access various translations for a more comprehensive study.',img:"/src/img/versions.jpeg"},{head:'Intuitive Interface:',text:'Enjoy a seamless user experience focused on your spiritual growth.',img:"/src/img/versions.jpeg"}]}
];

export default function InformationScreen({theme,lang}:{theme:string,lang:string}){

    const [info, setInfo] = useState(information[1]);

    useEffect(()=>{
        setInfo(lang=='en'?information[0]: lang=='es'?information[1]:information[2]);
    },[lang]);
  
    return(
        <div id="about" style={{height:'100%', backgroundColor:theme=='dark'?"rgba(0,0,0,0.2":"rgba(255,255,255,0.4"}}>
            <div className="py-10 p-5 mx-3 sm:p-10">
                <p className="hidden med:relative py-1 text-med leading-6 " style={{color:theme=='dark'?Colors.textDark:Colors.textLight}}>{info.header}</p>
                <h1 className="text-center text-3xl mt-10 font-bold tracking-tight sm:text-4xl" style={{color:Colors.red, fontWeight:'900', marginTop:70, textShadow:'0px 0px 5px rgba(255, 255, 255, 0.12)'}}>Mi Tiempo Con Dios</h1>
                <p className="text-justify relative py-1 text-lg p-5 leading-6 my-5" style={{color:theme=='dark'?Colors.textDark:Colors.textLight}}>{info.description}</p>

                <h1 className="p-5 text-2xl font-bold tracking-tight font-lg" style={{color:Colors.red, fontWeight:'900', textShadow:'0px 0px 5px rgba(255, 255, 255, 0.12)'}}>Características:</h1>
                <div className="px-5">
                <AccordionGroup>
                    { info.char.map((ch, index)=>{
                        return(
                        <Accordion key={index}>
                            <AccordionSummary>
                                <p style={{color: Colors.red, fontWeight:600, fontSize:"1.2rem"}}>
                                    {ch.head}
                                </p>
                            </AccordionSummary>
                            <AccordionDetails sx={{color: theme=='dark'?Colors.textDark:Colors.textLight, margin: '1vw', fontSize:'1.1rem'}}>
                                {ch.text}
                                <Image src={require(`/src/img/versions.jpeg`)} width={200} height={600} alt="Imagen Screenshot"></Image>
                            </AccordionDetails>
                        </Accordion>
                        )})
                    } 
                </AccordionGroup>
                </div>
                
            </div>
        </div>
    )
}