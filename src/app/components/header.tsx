"use client"
import next from "next";
import Image from "next/image";
import "../styles/header.css";
import { useEffect, useState } from "react";
import {Language, Menu as MenuIcon, DarkMode, LightMode, Style } from '@mui/icons-material';
import {Dropdown, MenuButton, Menu, MenuItem, Box, Drawer, Button ,List, Divider, ListItem, ListItemButton, ModalClose, DialogTitle} from '@mui/joy';
import Colors from '../colors';

type LangFunction = (lang: string) => void;

interface NavbarProps {
    lang: string; // Especifica el tipo de la prop lang como string
    selectLang: LangFunction;
    theme: string;
    changeTheme: ()=>void;
  }

export function Navbar({ lang, selectLang, theme, changeTheme }:NavbarProps){

    const [openMenu, setOpenMenu] = useState(false);

    
    const selectEs = () => {
        console.log('es');
        selectLang('es');
      };
    
    const selectEn = () => {
        console.log('en');
        selectLang('en');
      };

    const selectFr = () => {
        console.log('fr');
        selectLang('fr');
      };


    function openNav() {
        setOpenMenu(true);
        };

    function closeNav() {
        setOpenMenu(false);
    };


    return(
        <>
        <div className="container w-full">
           <div className="flex flex-row flex-no-wrap justify-between align-center fixed top-0 left-0 right-0" style={{zIndex:99, backgroundColor:theme=='dark'?Colors.bgDark:Colors.bgLight}}>
                <div className="px-4 py-1">
                    <a href="/">
                        <Image id="logonav w-18 h-18" className="logo-img" width= {50} height={50} src={require('../favicon.ico')} alt="Imagen de logo Mi Tiempo con Dios" priority/>
                    </a>
                </div>
                <div className={theme=='dark'?'menu_nav_dark':'menu_nav_light'}>
                    <ul className="hidden sm:flex flex-row justify-around flex-nowrap">
                        <li className="p-4  text-lg"><a className={`${theme=='dark'?'text-textDark':'text-textLight'} hover:text-redCustom font-medium hover:font-semibold`}  href="#home">{lang=='en'?"Home":lang=='fr'?"Accueil":"Inicio"}</a></li>
                        <li className="p-4 text-lg"><a href="#about" className={`${theme=='dark'?'text-textDark':'text-textLight'} hover:text-redCustom font-medium hover:font-semibold`}>{lang=='en'?"About":lang=='fr'?"Á propos":"Acerca de"}</a></li>
                        <li className="p-4 text-lg"><a href="https://archive.org/download/mi-tiempo-con-dios-v-1-0-1/MiTiempoConDios-V1-0-1.apk" className={`${theme=='dark'?'text-textDark':'text-textLight'} hover:text-redCustom font-medium hover:font-semibold`}>{lang=='en'?"Download":lang=='fr'?"Décharge":"Descargar"}</a></li>
                        <li className="p-4 text-lg"><a href="#contactme" className={`${theme=='dark'?'text-textDark':'text-textLight'} hover:text-redCustom font-medium hover:font-semibold`}>{lang=='en' ? 'Contact Me': (lang=='fr')?'Contactez-nous':'Contactame'}</a></li>
                    </ul>
                </div>
                <div className="px-4 py-1 hidden sm:flex">
                    <Button variant="plain" className='hover:opacity-50' onClick={changeTheme}>
                        {theme=='dark'?<LightMode style={{color:Colors.textDark}}/>:<DarkMode style={{color:Colors.textLight}}/>}
                    </Button>

                    <Dropdown>                        
                        <MenuButton variant="plain" className='hover:opacity-50'><Language style={{color:theme=='dark'?Colors.textDark:Colors.textLight}} /></MenuButton>
                        <Menu>
                            <MenuItem onClick={selectEs}>ES</MenuItem>
                            <MenuItem onClick={selectEn}>EN</MenuItem>
                            <MenuItem onClick={selectFr}>FR</MenuItem>
                        </Menu>
                    </Dropdown>                    
                </div>

                <div className="inline p-4 sm:hidden">
                    <Box sx={{ display: 'flex' }}>
                        
                        <Button variant="plain" className='hover:opacity-50' onClick={changeTheme}>
                        {theme=='dark'?<LightMode style={{color:Colors.textDark}}/>:<DarkMode style={{color:Colors.textLight}}/>}
                        </Button>
                        <Button variant="plain" className='hover:opacity-50' onClick={() => setOpenMenu(true)}>
                            <MenuIcon style={{fontSize:25, color:theme=='dark'?Colors.textDark:Colors.textLight}}/>
                        </Button>
                        <Drawer open={openMenu} anchor="right" variant="plain" color="neutral" onClose={() => setOpenMenu(false)}>
                            <ModalClose />
                            <Button variant="plain" className='hover:opacity-50' onClick={changeTheme}>
                                {theme=='dark'?<LightMode style={{color:'#ffffff'}}/>:<DarkMode style={{color:'#000000'}}/>}
                            </Button>
                            <DialogTitle>Mi Tiempo Con Dios</DialogTitle>
                            <List>
                                <ListItem>
                                    <ListItemButton>
                                        <a href="#">{"About"}</a>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <a href="https://archive.org/download/mi-tiempo-con-dios-v-1-0-1/MiTiempoConDios-V1-0-1.apk">{lang=='en'?"Download":lang=='fr'?"Download":"Descargar"}</a>
                                    </ListItemButton>                                    
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <a href="#">{lang=='en' ? 'Contact Me': (lang=='fr')?'Contactez mo':'Contactame'}</a>
                                    </ListItemButton>
                                </ListItem>
                                <Divider/>
                                    <ListItem >                                      
                                        <Button onClick={selectEs}>ES</Button>
                                        <Button onClick={selectEn}>EN</Button>
                                        <Button onClick={selectFr}>FR</Button>
                                    </ListItem>
                            </List>
                        </Drawer>
                    </Box>                        
                </div>



            </div>
             
        </div>
        </>
    )
}
