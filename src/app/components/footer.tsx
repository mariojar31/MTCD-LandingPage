import Colors from "../colors";
import {Mail, Instagram, YouTube ,GitHub, Book} from '@mui/icons-material';



export default function Footer({theme,lang, openModal}:{theme:string,lang:string, openModal:()=>void}){

    return(
        <div>
            <div id="contactme" className="text-center" style={{backgroundColor:theme=='dark'?Colors.bgDark:Colors.bgLight}}>
                <div className="text-lg text-center px-5 py-3" style={{color:theme=='dark'?Colors.textDark:Colors.textLight}}>
                    <div><b>{'¿Deséas contactarnos?'}</b></div>
                    <button className="py-1 px-4 border border-textLight rounded-full bg-textDark font-semibold text-textLight m-2 hover:text-redCustom hover:border-redCustom" onClick={openModal}>Dejanos un Mensaje</button>
                </div>
                
            </div>
            <div className="flex flex-col md:flex-row justify-center pt-5">
                <div className="flex flex-col justify-center" style={{width:'48vw'}}>
                    <p className="text-right pr-5 text-textLight"><b>Info: </b> </p>
                    <p className="text-right pr-5 text-textLight"><Mail></Mail> appmitiempocondios@gmail.com</p>
                    <p className="text-right pr-5 text-textLight">Cel: (+57) 3004398648</p>
                    <br />
                    <p className="text-right pr-5 text-textLight"><b>Developed By: </b> </p>
                    <p className="text-right pr-5 text-textLight">MarioDev</p>

                </div>
                <div style={{width: 1, backgroundColor:theme=='dark'?Colors.textLight:Colors.textDark}}>
                    
                </div>
                <div className="flex flex-col" style={{width:'48vw', height:"100%"}}>
                    <p className="text-left pl-5 text-textLight"><b>Navegación: </b> </p>
                    <a href="/"><p className="pl-5 text-textLight">Home</p></a>
                    <a href="/information"><p className="pl-5 text-textLight">About</p></a>
                    <a href="https://archive.org/download/mi-tiempo-con-dios-v-1-0-1/MiTiempoConDios-V1-0-1.apk"><p className="pl-5 text-textLight">Download</p></a>
                    <div className="flex flex-row mt-2">
                        <a href="/"><p className="pl-5 text-textLight"><GitHub></GitHub></p></a>
                        <a href="/"><p className="pl-5 text-textLight"><Instagram></Instagram></p></a>
                        <a href="/"><p className="pl-5 text-textLight"><YouTube></YouTube></p></a>
                        <a href="/"><p className="pl-5 text-textLight"><Book></Book></p></a>
                    </div>
                   
                    

                </div>
            </div>
            <p className="text-center m-3 p-3" style={{color:Colors.textLight, fontWeight:'600'}}>{'\u00A9 2024 MiTiempoConDios.'}</p>
        </div>
    )
}