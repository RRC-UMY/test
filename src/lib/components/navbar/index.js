import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import '../../../App.js'
import $ from "jquery";

export function NavBar() {

    var  nav = document.getElementById('nav');
      
    window.onscroll = function(){

        if (window.pageYOffset >100) {

            $("nav").addClass("bg-light");
            $("nav").addClass("navbar-light");
            $("nav").removeClass("navbar-dark");

        }
        else{
            $("nav").removeClass("bg-light");
            $("nav").addClass("navbar-dark");
        }
    }

    return (
        <nav id="nav" class="navbar navbar-expand-lg navbar-dark fixed-top">
            <Link class="navbar-brand " to="/">Navbar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">

                    <Link class="nav-link" to="/Form"> <li class="nav-item active ">Add</li></Link>
                    <Link class="nav-link" to="/List"><li class="nav-item">List </li></Link>

                </ul>
                <span class="navbar-text">
                    Navbar text with an inline element</span>
            </div>
        </nav>);

}
