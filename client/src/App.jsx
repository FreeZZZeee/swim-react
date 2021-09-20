import React from "react";
import {logo, icons, categories} from './data'

function App() {
    return (
        <div className="App">
            <div className="banner" id={'head'}>
                <div className="header">
                    <div className="header-left">
                        <div className="w3layouts-logo">
                            <h1>
                                <a href={'#head'}>{logo.title}</a>
                            </h1>
                        </div>
                        <div className="agileinfo-social-grids">

                            <ul>
                                {icons.map((icon) => (
                                    <li key={icon._id}><a href={icon.href}><i className={icon.class}></i></a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="top-nav">
                        {categories.map(({navbarHeader, navBarNav}, key) => (
                            <nav key={`categories-${key}`} className="navbar navbar-default">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                            data-target="#bs-example-navbar-collapse-1">

                                        {navbarHeader.map((navBarSpan) => (
                                            <span key={navBarSpan._id}
                                                  className={navBarSpan.class}>{navBarSpan.title}</span>
                                        ))
                                        }
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        {navBarNav.map((navBarLink) => (
                                            <li key={navBarLink._id}><a className={navBarLink.class}
                                                   href={navBarLink.href}>{navBarLink.title}</a></li>
                                        ))}
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                            </nav>
                        ))}
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="banner-info">
                    <div className="container">
                        <h3>A new generation in learn to</h3>
                        <h2>swim classNamees</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere tempor quam, vitae
                            vestibulum lacus placerat non. Donec volutpat odio sed neque molestie elementum quis nec
                            nisi. Phasellus elit leo, lobortis non massa in, elementum maximus urna.</p>
                        <div className="w3-button">
                            <a href="/#" className="hvr-sweep-to-bottom" data-toggle="modal" data-target="#myModal">Read
                                More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about" id="about">
                <div className="container">
                    <div className="about-heading">
                        <h3>About Us</h3>
                        <p>Cras cursus, nunc sit amet aliquam maximus</p>
                    </div>
                    <div className="w3l-about-grids">
                        <div className="col-md-6 w3ls-about-left">
                            <div className="agileits-icon-grid">
                                <div className="icon-left hvr-radial-out">
                                    <i className="fa fa-cog" aria-hidden="true"></i>
                                </div>
                                <div className="icon-right">
                                    <h5>Suspendisse consectetur dapibus volutpat.</h5>
                                    <p>Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam
                                        erat at lectus ullamcorper, nec interdum neque hendrerit.</p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="agileits-icon-grid">
                                <div className="icon-left hvr-radial-out">
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                </div>
                                <div className="icon-right">
                                    <h5>Lorem ipsum dolor sit amet</h5>
                                    <p>Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam
                                        erat at lectus ullamcorper, nec interdum neque hendrerit.</p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="agileits-icon-grid">
                                <div className="icon-left hvr-radial-out">
                                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                </div>
                                <div className="icon-right">
                                    <h5>Suspendisse consectetur dapibus volutpat.</h5>
                                    <p>Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam
                                        erat at lectus ullamcorper, nec interdum neque hendrerit.</p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="col-md-6 w3ls-about-right">
                            <div className="w3ls-about-right-img">

                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="gallery" id="gallery">
                <div className="container">
                    <div className="about-heading">
                        <h3>Our Gallery</h3>
                        <p>Cras cursus, nunc sit amet aliquam maximus</p>
                    </div>
                </div>
                <div className="gallery-grids">
                    <div className="gallery-top-grids">
                        <div className="col-sm-3 gallery-grids-left">
                            <div className="gallery-grid">
                                <a className="example-image-link" href="images/g1.jpg" data-lightbox="example-set"
                                   data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
                                    <img src="images/g1.jpg" alt=""/>
                                    <div className="captn">
                                        <h4>Swim Care</h4>
                                        <p>Aliquam non</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-3 gallery-grids-left">
                            <div className="gallery-grid">
                                <a className="example-image-link" href="images/g2.jpg" data-lightbox="example-set"
                                   data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
                                    <img src="images/g2.jpg" alt=""/>
                                    <div className="captn">
                                        <h4>Swim Care</h4>
                                        <p>Aliquam non</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-3 gallery-grids-left">
                            <div className="gallery-grid">
                                <a className="example-image-link" href="images/g3.jpg" data-lightbox="example-set"
                                   data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
                                    <img src="images/g3.jpg" alt=""/>
                                    <div className="captn">
                                        <h4>Swim Care</h4>
                                        <p>Aliquam non</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-3 gallery-grids-left">
                            <div className="gallery-grid">
                                <a className="example-image-link" href="images/g4.jpg" data-lightbox="example-set"
                                   data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
                                    <img src="images/g4.jpg" alt=""/>
                                    <div className="captn">
                                        <h4>Swim Care</h4>
                                        <p>Aliquam non</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="gallery-top-grids">
                        <div className="col-sm-3 gallery-grids-left">
                            <div className="gallery-grid">
                                <a className="example-image-link" href="images/g5.jpg" data-lightbox="example-set"
                                   data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
                                    <img src="images/g5.jpg" alt=""/>
                                    <div className="captn">
                                        <h4>Swim Care</h4>
                                        <p>Aliquam non</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-3 gallery-grids-left">
                            <div className="gallery-grid">
                                <a className="example-image-link" href="images/g6.jpg" data-lightbox="example-set"
                                   data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
                                    <img src="images/g6.jpg" alt=""/>
                                    <div className="captn">
                                        <h4>Swim Care</h4>
                                        <p>Aliquam non</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-3 gallery-grids-left">
                            <div className="gallery-grid">
                                <a className="example-image-link" href="images/g7.jpg" data-lightbox="example-set"
                                   data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
                                    <img src="images/g7.jpg" alt=""/>
                                    <div className="captn">
                                        <h4>Swim Care</h4>
                                        <p>Aliquam non</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-3 gallery-grids-left">
                            <div className="gallery-grid">
                                <a className="example-image-link" href="images/g8.jpg" data-lightbox="example-set"
                                   data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
                                    <img src="images/g8.jpg" alt=""/>
                                    <div className="captn">
                                        <h4>Swim Care</h4>
                                        <p>Aliquam non</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="gallery-top-grids">
                        <div className="col-sm-3 gallery-grids-left">
                            <div className="gallery-grid">
                                <a className="example-image-link" href="images/g9.jpg" data-lightbox="example-set"
                                   data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
                                    <img src="images/g9.jpg" alt=""/>
                                    <div className="captn">
                                        <h4>Swim Care</h4>
                                        <p>Aliquam non</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-3 gallery-grids-left">
                            <div className="gallery-grid">
                                <a className="example-image-link" href="images/g10.jpg" data-lightbox="example-set"
                                   data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
                                    <img src="images/g10.jpg" alt=""/>
                                    <div className="captn">
                                        <h4>Swim Care</h4>
                                        <p>Aliquam non</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-3 gallery-grids-left">
                            <div className="gallery-grid">
                                <a className="example-image-link" href="images/g1.jpg" data-lightbox="example-set"
                                   data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
                                    <img src="images/g1.jpg" alt=""/>
                                    <div className="captn">
                                        <h4>Swim Care</h4>
                                        <p>Aliquam non</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-3 gallery-grids-left">
                            <div className="gallery-grid">
                                <a className="example-image-link" href="images/g.jpg" data-lightbox="example-set"
                                   data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
                                    <img src="images/g2.jpg" alt=""/>
                                    <div className="captn">
                                        <h4>Swim Care</h4>
                                        <p>Aliquam non</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                    <script src="js/lightbox-plus-jquery.min.js"></script>
                </div>
            </div>
            <div className="team" id="team">
                <div className="container">
                    <div className="about-heading">
                        <h3>Our Team</h3>
                        <p>Cras cursus, nunc sit amet aliquam maximus</p>
                    </div>
                    <div className="agileinfo-team-grids">
                        <div className="col-md-3 wthree-team-grid">
                            <img src="images/t1.jpg" alt=""/>
                            <h4>Mary Jane</h4>
                            <p>Vestibulum</p>
                            <div className="team-social-grids">
                                <ul>
                                    <li><a href="/#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="/#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="/#"><i className="fa fa-rss"></i></a></li>
                                    <li><a href="/#"><i className="fa fa-vk"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 wthree-team-grid">
                            <img src="images/t2.jpg" alt=""/>
                            <h4>Peter Parker</h4>
                            <p>Vestibulum</p>
                            <div className="team-social-grids">
                                <ul>
                                    <li><a href="/#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="/#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="/#"><i className="fa fa-rss"></i></a></li>
                                    <li><a href="/#"><i className="fa fa-vk"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 wthree-team-grid">
                            <img src="images/t3.jpg" alt=""/>
                            <h4>Jennifer Watson</h4>
                            <p>Vestibulum</p>
                            <div className="team-social-grids">
                                <ul>
                                    <li><a href="/#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="/#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="/#"><i className="fa fa-rss"></i></a></li>
                                    <li><a href="/#"><i className="fa fa-vk"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 wthree-team-grid">
                            <img src="images/t4.jpg" alt=""/>
                            <h4>Steven Wilson</h4>
                            <p>Vestibulum</p>
                            <div className="team-social-grids">
                                <ul>
                                    <li><a href="/#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="/#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="/#"><i className="fa fa-rss"></i></a></li>
                                    <li><a href="/#"><i className="fa fa-vk"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="services" id="services">
                <div className="container">
                    <div className="about-heading">
                        <h3>Our Services</h3>
                        <p>Cras cursus, nunc sit amet aliquam maximus</p>
                    </div>
                    <div className="w3-agileits-services-grids">
                        <div className="col-md-6 w3-agileits-services-left">
                            <div className="services-info">
                                <div className="slider">
                                    <div className="callbacks_container">
                                        <ul className="rslides" id="slider4">
                                            <li>
                                                <div className="w3ls-text">
                                                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Praesent maximus metus nec mattis tempus.</h5>
                                                    <p>Donec feugiat tellus sem, laoreet iaculis orci lobortis vel. Sed
                                                        sed luctus orci, at lacinia risus. Ut porttitor ante ac
                                                        tincidunt elementum. Curabitur ex dolor, condimentum vitae nunc
                                                        vel, pulvinar semper justo.<span>Vestibulum ex lectus, posuere eu viverra at, mattis et enim. Nam efficitur sem et lectus fringilla, at pharetra nulla luctus.</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="w3ls-text">
                                                    <h5>Aliquam id felis id mi ultrices rhoncus. Quisque pellentesque
                                                        felis vel magna faucibus, sed pharetra ex porta.</h5>
                                                    <p>Nullam maximus dolor sed velit gravida, quis vestibulum eros
                                                        sagittis. Nulla ultricies metus a turpis pretium volutpat. Cras
                                                        consectetur tempus lectus id accumsan. Vivamus gravida justo
                                                        mattis ex pretium, <span>eu sollicitudin tortor ullamcorper. Quisque vitae diam molestie, tincidunt velit vitae, viverra nisl. Mauris ultrices commodo.</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="w3ls-text">
                                                    <h5>Etiam eu est aliquet orci suscipit egestas sed ut leo. Ut
                                                        ultrices neque vel mi venenatis</h5>
                                                    <p>Ut porttitor, ante at tincidunt eleifend, quam massa laoreet
                                                        odio, eu tincidunt lorem mauris ut velit. Etiam tempor nibh ut
                                                        odio pellentesque, lacinia placerat dui hendrerit. Integer mi
                                                        lorem, consequat non malesuada et,<span>pellentesque eget nisl. Praesent sed dui ac lectus vehicula molestie. Etiam maximus ultrices dolor, sit amet tincidunt</span>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 w3-agileits-services-right">
                            <div className="services-right-grids">
                                <div className="col-sm-6 services-right-grid">
                                    <div className="services-icon hvr-radial-in">
                                        <i className="fa fa-anchor" aria-hidden="true"></i>
                                    </div>
                                    <div className="services-icon-info">
                                        <h5>Phasellus suscipit</h5>
                                    </div>
                                </div>
                                <div className="col-sm-6 services-right-grid">
                                    <div className="services-icon hvr-radial-in">
                                        <i className="fa fa-comment" aria-hidden="true"></i>
                                    </div>
                                    <div className="services-icon-info">
                                        <h5>Phasellus suscipit</h5>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="services-right-grids">
                                <div className="col-sm-6 services-right-grid">
                                    <div className="services-icon hvr-radial-in">
                                        <i className="fa fa-heartbeat" aria-hidden="true"></i>
                                    </div>
                                    <div className="services-icon-info">
                                        <h5>Phasellus suscipit</h5>
                                    </div>
                                </div>
                                <div className="col-sm-6 services-right-grid">
                                    <div className="services-icon hvr-radial-in">
                                        <i className="fa fa-magnet" aria-hidden="true"></i>
                                    </div>
                                    <div className="services-icon-info">
                                        <h5>Phasellus suscipit</h5>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="services-right-grids">
                                <div className="col-sm-6 services-right-grid">
                                    <div className="services-icon hvr-radial-in">
                                        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                    </div>
                                    <div className="services-icon-info">
                                        <h5>Phasellus suscipit</h5>
                                    </div>
                                </div>
                                <div className="col-sm-6 services-right-grid">
                                    <div className="services-icon hvr-radial-in">
                                        <i className="fa fa-heartbeat" aria-hidden="true"></i>
                                    </div>
                                    <div className="services-icon-info">
                                        <h5>Phasellus suscipit</h5>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="news" id="news">
                <div className="container">
                    <div className="about-heading">
                        <h3>News & Events</h3>
                        <p>Cras cursus, nunc sit amet aliquam maximus</p>
                    </div>
                    <div className="agile-news-grids">
                        <div className="agile-news-grid">
                            <div className="col-md-6 agile-news-left">
                                <div className="col-md-6 news-left-img">
                                    <div className="news-left-text">
                                        <h5>Swim Care</h5>
                                    </div>
                                </div>
                                <div className="col-md-6 news-grid-info-bottom">
                                    <div className="news-left-top-text">
                                        <a href="/#" data-toggle="modal" data-target="#myModal">Cras efficitur nunc at
                                            erat ullamcorper blandit.</a>
                                    </div>
                                    <div className="date-grid">
                                        <div className="admin">
                                            <a href="/#"><i className="fa fa-user" aria-hidden="true"></i> Admin</a>
                                        </div>
                                        <div className="time">
                                            <p><i className="fa fa-calendar" aria-hidden="true"></i> May 09,2016</p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="news-grid-info-bottom-text">
                                        <p>Aliquam erat volutpat. Duis vulputate tempus laoreet. Integer viverra
                                            eleifend neque, eget dictum lectus. Quisque eu tempor dolor.</p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="col-md-6 agile-news-left">
                                <div className="col-md-6 news-left-img news-left-img1">
                                    <div className="news-left-text">
                                        <h5>Swim Care</h5>
                                    </div>
                                </div>
                                <div className="col-md-6 news-grid-info-bottom">
                                    <div className="news-left-top-text">
                                        <a href="/#" data-toggle="modal" data-target="#myModal">Cras efficitur nunc at
                                            erat ullamcorper blandit.</a>
                                    </div>
                                    <div className="date-grid">
                                        <div className="admin">
                                            <a href="/#"><i className="fa fa-user" aria-hidden="true"></i> Admin</a>
                                        </div>
                                        <div className="time">
                                            <p><i className="fa fa-calendar" aria-hidden="true"></i> Aug 01,2016</p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="news-grid-info-bottom-text">
                                        <p>Aliquam erat volutpat. Duis vulputate tempus laoreet. Integer viverra
                                            eleifend neque, eget dictum lectus. Quisque eu tempor dolor.</p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="agile-news-grid">
                            <div className="col-md-6 agile-news-left">
                                <div className="col-md-6 news-left-img news-left-img2">
                                    <div className="news-left-text">
                                        <h5>Swim Care</h5>
                                    </div>
                                </div>
                                <div className="col-md-6 news-grid-info-bottom">
                                    <div className="news-left-top-text">
                                        <a href="/#" data-toggle="modal" data-target="#myModal">Cras efficitur nunc at
                                            erat ullamcorper blandit.</a>
                                    </div>
                                    <div className="date-grid">
                                        <div className="admin">
                                            <a href="/#"><i className="fa fa-user" aria-hidden="true"></i> Admin</a>
                                        </div>
                                        <div className="time">
                                            <p><i className="fa fa-calendar" aria-hidden="true"></i> Sept 24,2016</p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="news-grid-info-bottom-text">
                                        <p>Aliquam erat volutpat. Duis vulputate tempus laoreet. Integer viverra
                                            eleifend neque, eget dictum lectus. Quisque eu tempor dolor.</p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="col-md-6 agile-news-left">
                                <div className="col-md-6 news-left-img news-left-img3">
                                    <div className="news-left-text">
                                        <h5>Swim Care</h5>
                                    </div>
                                </div>
                                <div className="col-md-6 news-grid-info-bottom">
                                    <div className="news-left-top-text">
                                        <a href="/#" data-toggle="modal" data-target="#myModal">Cras efficitur nunc at
                                            erat ullamcorper blandit.</a>
                                    </div>
                                    <div className="date-grid">
                                        <div className="admin">
                                            <a href="/#"><i className="fa fa-user" aria-hidden="true"></i> Admin</a>
                                        </div>
                                        <div className="time">
                                            <p><i className="fa fa-calendar" aria-hidden="true"></i> June 17,2016</p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="news-grid-info-bottom-text">
                                        <p>Aliquam erat volutpat. Duis vulputate tempus laoreet. Integer viverra
                                            eleifend neque, eget dictum lectus. Quisque eu tempor dolor.</p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="modal about-modal fade" id="myModal" tabIndex="-1" role="dialog">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span></button>
                                        <h4 className="modal-title">Swim Care</h4>
                                    </div>
                                    <div className="modal-body">
                                        <div className="agileits-w3layouts-info">
                                            <img src="images/a1.jpg" alt=""/>
                                            <p>Duis venenatis, turpis eu bibendum porttitor, sapien quam ultricies
                                                tellus, ac rhoncus risus odio eget nunc. Pellentesque ac fermentum diam.
                                                Integer eu facilisis nunc, a iaculis felis. Pellentesque pellentesque
                                                tempor enim, in dapibus turpis porttitor quis. Suspendisse ultrices
                                                hendrerit massa. Nam id metus id tellus ultrices ullamcorper. Cras
                                                tempor massa luctus, varius lacus sit amet, blandit lorem. Duis auctor
                                                in tortor sed tristique. Proin sed finibus sem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial">
                <div className="container">
                    <div className="about-heading testimonial-heading">
                        <h3>Testimonial</h3>
                        <p>Cras cursus, nunc sit amet aliquam maximus</p>
                    </div>
                    <div className="testimonial-grid">
                        <div className="slider">
                            <div className="callbacks_container">
                                <ul className="rslides" id="slider3">
                                    <li>
                                        <div className="testimonial-top">
                                            <i className="fa fa-quote-right" aria-hidden="true"></i>
                                            <p>Donec feugiat tellus sem, laoreet iaculis orci lobortis vel. Sed sed
                                                luctus orci, at lacinia risus. Ut porttitor ante ac tincidunt elementum.
                                                Curabitur ex dolor, condimentum vitae nunc vel, pulvinar semper justo.
                                                Vestibulum et aliquet magna, maximus dapibus enim. Vestibulum ex lectus,
                                                posuere eu viverra at, mattis et enim. Nam efficitur sem et lectus
                                                fringilla, at pharetra nulla luctus. Nunc cursus, augue ac ultricies
                                                volutpat, neque erat congue justo, ac pretium tellus eros a neque.
                                                Integer ipsum sem, consectetur a mollis ac, cursus eu ipsum.</p>
                                            <h5>John Smith <span>- Founder</span></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="testimonial-top">
                                            <i className="fa fa-quote-right" aria-hidden="true"></i>
                                            <p>Pellentesque urna ex, ultricies a nunc at, pretium maximus nisi.
                                                Vestibulum non auctor diam. Mauris eget consectetur mauris. Aenean leo
                                                elit, accumsan vel elit vitae, mattis ultricies lacus. Cras consectetur
                                                justo lorem, sed dictum sapien eleifend at.Donec sed orci a dui aliquam
                                                tempor. Praesent in ipsum ut nunc porttitor lacinia.Donec eu sapien et
                                                arcu dictum rutrum.Ut laoreet vitae augue at accumsan. Nam pharetra
                                                sagittis purus et condimentum. Vestibulum cursus porttitor pretium.In
                                                egestas finibus rutrum. Nulla facilisi.</p>
                                            <h5>Divide Rule <span>- CEO</span></h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subscribe">
                <div className="container">
                    <div className="about-heading agile-subscribe-heading">
                        <h3>Subscribe with Us</h3>
                        <p>Cras cursus, nunc sit amet aliquam maximus</p>
                    </div>
                    <div className="subscribe-grid">
                        <form action="#" method="post">
                            <input type="text" placeholder="Subscribe" name="Subscribe" required=""/>
                            <button className="btn1"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="map">
                <iframe title={'title'}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366417.1205943117!2d-118.4272152627014!3d34.0091834751898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1472444937012"
                        style={{border: 0}} allowFullScreen></iframe>
            </div>
            <div className="contact" id="contact">
                <div className="container">
                    <div className="about-heading">
                        <h3>Contact Us</h3>
                        <p>Cras cursus, nunc sit amet aliquam maximus</p>
                    </div>
                    <div className="address">
                        <div className="col-sm-4 address-grids">
                            <h4>Address :</h4>
                            <p>Eiusmod Tempor inc<br/>
                                <span>1St Golden Place,</span>
                                Los Angeles 1256
                            </p>
                        </div>
                        <div className="col-sm-4 address-grids">
                            <h4>Phone :</h4>
                            <p>+2 123 456 789</p>
                            <p>+2 987 654 321</p>
                        </div>
                        <div className="col-sm-4 address-grids">
                            <h4>Email :</h4>
                            <p><a href="mailto:example@email.com">mail@example.com</a></p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="contact-infom">
                        <h4>Miscellaneous Information</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sheets containing Lorem Ipsum
                            passages,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.It was popularised in the
                            1960s with the release of Letraset
                            and more recently with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum.</p>
                    </div>
                    <div className="contact-form">
                        <h4>Contact Form</h4>
                        <form action="#" method="post">
                            <input type="text" placeholder="Name" required=""/>
                            <input type="email" placeholder="Email" required=""/>
                            <input type="text" placeholder="Telephone" required=""/>
                            <textarea placeholder="Message" required=""></textarea>
                            <button className="btn1 hvr-sweep-to-bottom">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-grids">
                            <div className="col-md-3 footer-grid">
                                <div className="footer-logo">
                                    <h3><a href="index.html">Swim Care</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget egestas erat.
                                        In hac habitasse platea dictumst.</p>
                                </div>
                            </div>
                            <div className="col-md-3 footer-grid">
                                <h3>Navigation</h3>
                                <ul>
                                    <li><a href="#about" className="scroll">About</a></li>
                                    <li><a href="#gallery" className="scroll">Gallery</a></li>
                                    <li><a href="#team" className="scroll">Team</a></li>
                                    <li><a href="#services" className="scroll">Services</a></li>
                                    <li><a href="#news" className="scroll">News</a></li>
                                    <li><a href="#contact" className="scroll">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 footer-list">
                                <h3>Latest Posts</h3>
                                <ul>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> Vestibulum ante ipsum
                                    </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> Phasellus at eros</li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> Mauris eleifend aliquet
                                    </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> Aliquam vitae tristique
                                    </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> Pellentesque lobortis
                                    </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> className aptent taciti
                                    </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> Mauris eleifend aliquet
                                    </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> Aliquam vitae tristique
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 agile-footer-grid">
                                <h3>Twitter Posts</h3>
                                <ul className="w3agile_footer_grid_list">
                                    <li>Ut aut reiciendis voluptatibus <a href="/#">http://lkj.ewr.com</a> alias, ut
                                        aut.
                                        <span><i className="fa fa-twitter" aria-hidden="true"></i> 02 days ago</span>
                                    </li>
                                    <li>Itaque earum rerum hic tenetur a sapiente <a
                                        href="/#">http://uiubajaj.com</a> ut aut.
                                        <span><i className="fa fa-twitter" aria-hidden="true"></i> 03 days ago</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <p>© 2017 Swim Care. All rights reserved | Design by <a href="http://w3layouts.com">W3layouts</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
