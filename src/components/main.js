import React from 'react';
import '../css/main.css';
import gif from '../hb.svg';
import etoile1 from '../etoile1.svg';
import etoile2 from '../etoile2.svg';
import '../main.scss';
import coeur from '../img/f623e82cfc59f0d468a3128ae3b92c2d.png'


const Main = () => {
    return (
        <main>
            <div class="row ">
                <div class="col custom-bg h-767">
                    <div class='d-flex'>
                        <div class="">
                            <img src={etoile1} />
                        </div>
                        <img src={etoile2} />
                        <img src={etoile2} />
                        <img src={gif} class="rotate" />
                    </div>
                    <p class="name">Romain Marcelli</p>
                </div>
                <div class="col">
                    <div class='bg-white border border-dark border-2 h-767 rounded right1'>

                        <p class="txt">I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.</p>
                        <p>- MICHAEL JORDAN</p>

                    </div>
                    <div class="border border-dark">
                        <img src={coeur} />
                    </div>
                </div>
            </div>

            {/* Ajoutez d'autres éléments d'en-tête ici */}
        </main>
    );
};

export default Main;