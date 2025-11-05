import React from 'react'
import "./Header_Quiz.css";

function Header_Quiz() {
    return (
        <>
            <section class="section event" id="event" aria-label="event">
                <div class="container">

                    <h2 class="h2 section-title">Let’s Start Quiz With EduLearn</h2>

                    <ul class="grid-list">
                        <li>
                            <div class="event-card">

                                <figure class="card-banner">
                                    <img src="/images/1 (1).jpg" width="370" height="250" loading="lazy"
                                        alt="Innovation & Technological Entrepreneurship Team" class="img-cover" />
                                </figure>
                                <div class="card-content">
                                    <address class="card-address">
                                        <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                                        <span class="span">HTML</span>
                                    </address>
                                    <h3 class="h3">
                                        <a href="#" class="card-title">HTML is easy to learn - You will enjoy it!</a>
                                    </h3>
                                    <a href="./HTML_Quiz" class="btn-continue">Start Quiz</a>
                                </div>
                            </div>
                        </li>


                        <li>
                            <div class="event-card">
                                <figure class="card-banner">
                                    <img src="./images/2 (1).jpg" width="370" height="250" loading="lazy"
                                        alt="Innovation & Technological Entrepreneurship Team" class="img-cover" />
                                </figure>
                                <div class="card-content">
                                    <address class="card-address">
                                        <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                                        <span class="span">CSS</span>
                                    </address>
                                    <h3 class="h3">
                                        <a href="#" class="card-title">This tutorial will teach you CSS from basic to advanced</a>
                                    </h3>
                                    <a href="./CSS_Quiz" class="btn-continue">Start Quiz</a>
                                </div>
                            </div>
                        </li>


                        <li>
                            <div class="event-card">
                                <figure class="card-banner">
                                    <img src="/images/3 (3).jpg" width="370" height="250" loading="lazy"
                                        alt="Innovation & Technological Entrepreneurship Team" class="img-cover" />
                                </figure>
                                <div class="card-content">
                                    <address class="card-address">
                                        <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                                        <span class="span">JAVASCRIPT</span>
                                    </address>
                                    <h3 class="h3">
                                        <a href="#" class="card-title">This tutorial will teach you JavaScript from basic to advanced.</a>
                                    </h3>
                                    <a href="#" class="btn-continue">Start Quiz</a>
                                </div>
                            </div>
                        </li>


                        <li>
                            <div class="event-card">
                                <figure class="card-banner">
                                    <img src="./images/2 (1).jpg" width="370" height="250" loading="lazy"
                                        alt="Innovation & Technological Entrepreneurship Team" class="img-cover" />
                                </figure>
                                <div class="card-content">
                                    <address class="card-address">
                                        <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                                        <span class="span">JAVA</span>
                                    </address>
                                    <h3 class="h3">
                                        <a href="#" class="card-title">This tutorial will teach you Java is a popular programming language from basic to advanced.</a>
                                    </h3>
                                    <a href="#" class="btn-continue">Start Quiz</a>
                                </div>
                            </div>
                        </li>


                        <li>
                            <div class="event-card">
                                <figure class="card-banner">
                                    <img src="./images/2 (1).jpg" width="370" height="250" loading="lazy"
                                        alt="Innovation & Technological Entrepreneurship Team" class="img-cover" />
                                </figure>
                                <div class="card-content">
                                    <address class="card-address">
                                        <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                                        <span class="span">PHP</span>
                                    </address>
                                    <h3 class="h3">
                                        <a href="#" class="card-title">PHP is easy to learn and runs efficiently on the server side scripting</a>
                                    </h3>
                                    <a href="#" class="btn-continue">Start Quiz</a>
                                </div>
                            </div>
                        </li>


                        <li>
                            <div class="event-card">
                                <figure class="card-banner">
                                    <img src="./images/2 (1).jpg" width="370" height="250" loading="lazy"
                                        alt="Innovation & Technological Entrepreneurship Team" class="img-cover" />
                                </figure>
                                <div class="card-content">
                                    <address class="card-address">
                                        <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                                        <span class="span">React js</span>
                                    </address>
                                    <h3 class="h3">
                                        <a href="#" class="card-title">This tutorial will teach you React is a JavaScript library for building user interfaces                                      
                                        </a>
                                    </h3>
                                    <a href="#" class="btn-continue">Start Quiz</a>
                                </div>
                            </div>
                        </li>


                    </ul>

                </div>
            </section>

        </>
    )
}

export default Header_Quiz;
