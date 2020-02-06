import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Auth from '../Auth'
import Search from '../Search'
import Background from '../../assets/main.bg.jpg';

var sectionStyle = {
  width: "100%",
  height: "670px",
  backgroundImage: `url(${Background})`
};

export default function Layout(props) {
    return (
        <div>
            <Header/>
            <section style={ sectionStyle }>
                {props.children}
            </section>
            <Footer/>
        </div>
    )
}
