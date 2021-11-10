import React, {useState,useEffect} from 'react';
import{animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaSoundcloud, FaYoutube } from 'react-icons/fa';
import {SocialIconLink, SocialIcons, Img ,SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink} from './FooterElements.js';
import myImage from '../../images/SNOW.png';

const Footer = ({toggle}) => {

    const [scrollFoo, setScrollFoo] = useState(false);

    const changeFoo = () => {
        if(window.scrollY >= 80){
            setScrollFoo(true);
        }else {
            setScrollFoo(false);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll',changeFoo)
    }, []);

    const toggleHome = () => {

        scroll.scrollToTop();


    };
    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                        <Img src={myImage}/>
                        </SocialLogo>
                        <WebsiteRights>SNOW © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Soundcloud"><FaSoundcloud /></SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
