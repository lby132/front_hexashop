import '../../components/css/templatemo-hexashop.css';

const MainPage = () => {
    return (
        <>
        <div className="main-banner" id="top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-content">
                            <div className="thumb">
                                <div className="inner-content">
                                    <h4>We Are Hexashop</h4>
                                    <span>Awesome, clean &amp; creative HTML5 Template</span>
                                    <div className="main-border-button">
                                        <a href="#">Purchase Now!</a>
                                    </div>
                                </div>
                                <img src={require('../../images/left-banner-image.jpg')}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-content">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Women</h4>
                                                <span>Best Clothes For Women</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Women</h4>
                                                    <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit
                                                        incid.</p>
                                                    <div className="main-border-button">
                                                        <a href="#">Discover More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={require("../../images/baner-right-image-01.jpg")}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Men</h4>
                                                <span>Best Clothes For Men</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Men</h4>
                                                    <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit
                                                        incid.</p>
                                                    <div className="main-border-button">
                                                        {/*<a href="#">Discover More</a>*/}
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={require("../../images/baner-right-image-02.jpg")}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Kids</h4>
                                                <span>Best Clothes For Kids</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Kids</h4>
                                                    <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit
                                                        incid.</p>
                                                    <div className="main-border-button">
                                                        {/*<a href="#">Discover More</a>*/}
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={require("../../images/baner-right-image-03.jpg")}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Accessories</h4>
                                                <span>Best Trend Accessories</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Accessories</h4>
                                                    <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit
                                                        incid.</p>
                                                    <div className="main-border-button">
                                                        {/*<a href="#">Discover More</a>*/}
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={require("../../images/baner-right-image-04.jpg")}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script src="assets/js/jquery-2.1.0.min.js"></script>

        <script src="assets/js/popper.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>

        <script src="assets/js/owl-carousel.js"></script>
        <script src="assets/js/accordions.js"></script>
        <script src="assets/js/datepicker.js"></script>
        <script src="assets/js/scrollreveal.min.js"></script>
        <script src="assets/js/waypoints.min.js"></script>
        <script src="assets/js/jquery.counterup.min.js"></script>
        <script src="assets/js/imgfix.min.js"></script>
        <script src="assets/js/slick.js"></script>
        <script src="assets/js/lightbox.js"></script>
        <script src="assets/js/isotope.js"></script>

        <script src="assets/js/custom.js"></script>

        {/*<script>*/}

        {/*    $(function() {*/}
        {/*    var selectedClass = "";*/}
        {/*    $("p").click(function(){*/}
        {/*    selectedClass = $(this).attr("data-rel");*/}
        {/*    $("#portfolio").fadeTo(50, 0.1);*/}
        {/*    $("#portfolio div").not("."+selectedClass).fadeOut();*/}
        {/*    setTimeout(function() {*/}
        {/*    $("."+selectedClass).fadeIn();*/}
        {/*    $("#portfolio").fadeTo(50, 1);*/}
        {/*}, 500);*/}

        {/*});*/}
        {/*});*/}

        {/*</script>*/}
        </>
    );
}

export default MainPage;
