import React, {useState, useEffect} from 'react';
import {Dropdown, MenuButton, Menu, MenuItem, Box, Drawer, Button ,List, Divider, ListItem, ListItemButton, ModalClose, DialogTitle} from '@mui/joy';
import Image from 'next/image';
import Colors from '../colors';


const Intro =({lang, theme}:{lang:string, theme:string})=>{
  
  

    return(
        <>
            <Box id='home' height='auto' width='95vw' padding='3vw' display='flex'>
                <div className='flex flex-col-reverse items-end md:flex-row md:items-center justify-end w-full' style={{marginInlineEnd:'10vw', marginTop:'5vw'}}>
                    <div className="max-w-2xl">
                        
                        <div className="text-right">

                            <div className="relative py-1 text-lg leading-6 " style={{color:theme=='dark'?Colors.textDark:Colors.textLight}}>
                                App devocional
                            </div>
                            <h1 className="text-2xl font-bold tracking-tight sm:text-2xl" style={{color:Colors.red, fontWeight:'900'}}>Mi Tiempo Con Dios</h1>
                            <p className="text-lg md:flex mt-6 leading-8" style={{color:theme=='dark'?Colors.textDark:Colors.textLight}}>Una herramienta que te ayudará a fortalecer tu relación con Dios.</p>

                            <a href='https://archive.org/download/mi-tiempo-con-dios-v-1-0-1/MiTiempoConDios-V1-0-1.apk'>
                                <Button variant="plain" className='hover:opacity-70' style={{padding:5, borderRadius:15, backgroundColor:Colors.red, paddingInline:30, paddingTop:8, paddingBottom:8, marginTop:20, marginBottom:20, width:250}}>
                                    <h1 className='text-xl' style={{color:Colors.textDark}}>Descargar Apk</h1>
                                </Button>
                            </a>
                            <div className="mt-10 flex items-end justify-end gap-x-6">
                                <a href="./information" className="text-sm font-semibold leading-6" style={{color:Colors.red, fontWeight:'900'}}>Learn more <span aria-hidden="true">→</span></a>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='justify-end'>
                        <Image src={require('/src/img/mockup.png')} alt='App Screenshot' className='m-3 sm:m-10' style={{borderRadius:50, minWidth: 200, minHeight:200, width:'25vw', height:'25vw'}} width={700} height={700}/>
                    </div>
                </div>    
            </Box>
        </>
    )
}

export default Intro;


