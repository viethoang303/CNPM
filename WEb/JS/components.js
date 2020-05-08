const components = {}
components.navBarTop = `
    <div class="top-nav-bar">
        <div class="search-box">
            <i class="fa fa-bars" id="menu-btn"></i>
            <i class="fa fa-times" id="close-btn"></i>

            <a><img src="../images/orange-logo.png" class="logo" id = "logo"></a>
            <input id="myInput" type="text" class="form-control" placeholder="Search" value="">
            <select id="sel" size="2"></select>
            <span class="input-group-text"><i class="fa fa-search"></i></span>
        </div>
        <div class="menu-bar">
            <ul>
                <li class="bar" id="cart"><a><i class="fa fa-shopping-basket"></i>cart</a>
                    <span id="quantity" style="color: white;">0</span>
                </li>
                <li class="bar"><a>About</a></li>
                <li class="bar" id="sign-up"><a id = "log-in-btn">Log In</a></li>
                <li class="bar" id = "sign-up-btn"><a>Sign Up</a></li>
            </ul
        </div>
    </div>
    </div>
    <div class="sign-up-box">
        <div class="container">
            <form id="form-group" action="">
                <span class="fa fa-close fa-2x" id="off"></span>
                <div class="form-group">
                    <label for="username">Email:</label>
                    <input type="text" name="email" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password">
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
    
`

components.cartNotify = `
    <div class="side pb-2">
        <a class="close-side"><i class="fa fa-times fa-2x"></i></a>
        <div class="cart-box" style="list-style-type: none;">
            <ul class="cart-list">
                <li class="total ">
                    <span style="font-size: large;"><strong>Total: </strong></span>
                    <h5 class="float-right " style="font-size: larger;">0</h5>
                </li>
            </ul>
        </div>
        <div class="text-center">
            <button id="complete" class="btn btn-primary"><a>Go to Checkout</a></button>
        </div>
    </div>
`

components.navBar = `
    <section class="header ">
        <div class="side-menu" id="side-menu">
            <ul>
                <li>Vợt Cầu Lông <i class="fa fa-angle-right "></i>
                    <ul>
                        <li id = "Yonex"> Yonex</li>
                        <li id = "Forza"> Linning</li>
                        <li> Forza</li>
                        <li> Victor</li>
                    </ul>
                </li>

                <li>Giày Cầu Lông<i class="fa fa-angle-right "></i>
                    <ul>
                        <li> Menu-2</li>
                        <li> Menu-2</li>
                        <li> Menu-2</li>
                        <li> Menu-2</li>
                    </ul>
                </li>

                <li>Áo Cầu Lông <i class="fa fa-angle-right "></i>
                    <ul>
                        <li> Menu-3</li>
                        <li> Menu-3</li>
                        <li> Menu-3</li>
                        <li> Menu-3</li>
                    </ul>
                </li>

                <li>Ba Lô Cầu Lông <i class="fa fa-angle-right "></i>
                    <ul>
                        <li> Menu-4</li>
                        <li> Menu-4</li>
                        <li> Menu-4</li>
                        <li> Menu-4</li>
                    </ul>
                </li>

                <li>Phụ Kiện Cầu Lông <i class="fa fa-angle-right "></i>
                    <ul>
                        <li> Menu-5</li>
                        <li> Menu-5</li>
                        <li> Menu-5</li>
                        <li> Menu-5</li>
                    </ul>
                </li>

                <li>Túi Vợt Cầu Lông <i class="fa fa-angle-right "></i>
                    <ul>
                        <li> Menu-6</li>
                        <li> Menu-6</li>
                        <li> Menu-6</li>
                        <li> Menu-6</li>
                    </ul>
                </li>

                <li>Giày Running <i class="fa fa-angle-right "></i>
                    <ul>
                        <li> Menu-7</li>
                        <li> Menu-7</li>
                        <li> Menu-7</li>
                        <li> Menu-7</li>
                    </ul>
                </li>

                <li>Thảm Cầu Lông<i class="fa fa-angle-right "></i>
                    <ul>
                        <li> Menu-8</li>
                        <li> Menu-8</li>
                        <li> Menu-8</li>
                        <li> Menu-8</li>
                    </ul>
                </li>

                <li>Tin Tức <i class="fa fa-angle-right "></i>
                    <ul>
                        <li> Menu-9</li>
                        <li> Menu-9</li>
                        <li> Menu-9</li>
                        <li> Menu-9</li>
                    </ul>
                </li>

                <li>Liên Hệ <i class="fa fa-angle-right "></i>
                    <ul>
                        <li> Menu-10</li>
                        <li> Menu-10</li>
                        <li> Menu-10</li>
                        <li> Menu-10</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="slider">
            <div id="slider" class="carousel slide carousel-fade" data-ride="carousel" data-interval="4000"
                data-pause="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../images/img-1.jpeg" class="d-block w-100">
                    </div>
                    <div class="carousel-item">
                        <img src="../images/img-2.jpeg" class="d-block w-100">
                    </div>
                    <div class="carousel-item">
                        <img src="../images/img-3.jpeg" class="d-block w-100">
                    </div>
                    <div class="carousel-item">
                        <img src="../images/img-4.jpeg" class="d-block w-100">
                    </div>
                </div>
                <ol class="carousel-indicators">
                    <li data-target="#slider" data-slide-to="0" class="active"></li>
                    <li data-target="#slider" data-slide-to="1"></li>
                    <li data-target="#slider" data-slide-to="2"></li>
                    <li data-target="#slider" data-slide-to="3"></li>
                </ol>
                <!-- Left and right controls -->
                <a class="carousel-control-prev" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next"  data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>

    </section>
`
components.categories=`
    <section class="featured-categories ">
        <div class="container-lg ">
            <div class="row ">
                <div class="col-sm-4 ">
                    <img width="280" height="210" src="../images/categories1.jpeg ">
                </div>
                <div class="col-sm-4 ">
                    <img width="280" height="210" src="../images/categories2.jpeg ">
                </div>
                <div class="col-sm-4 ">
                    <img width="280" height="210" src="../images/categories3.jpeg ">
                </div>
            </div>
        </div>
    </section>
`
components.footer = `
    <section class="footer" id="info">
        <div class="secondary">
            <div class="container text-center ">
                <div class="row">
                    <div class="col-md-4">
                        <h4>Useful Links</h4>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>Return Policy</p>
                        <p>Discount Coupons</p>
                    </div>

                    <div class="col-md-4">
                        <h4>Company</h4>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Career</p>
                        <p>Affiliate</p>
                    </div>

                    <div class="col-md-4">
                        <h4>Customer care</h4>
                        <p>Help center</p>
                        <p>Shopping guide</p>
                        <p>Refund policy</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="primary">
            <div class="container text-center">
                <div class="row  ">
                    <div class="col-md-12">
                        <h5>FOLLOW US</h5>
                        <div class="icon">
                            <a title="conect with us on Facebook" id="icon"><i class="fa fa-facebook-official"></i></a>
                            <a title="conect with us on Linkedin" id="icon"><i class="fa fa-linkedin"></i></a>
                            <a title="conect with us on Instagram" id="icon"><i class="fa fa-instagram"></i></a>
                            <a title="conect with us on Twitter" id="icon"><i class="fa fa-twitter" size=3em></i></a>
                        </div>
                        <p>Use of this website constitutes acceptance of the Smart Insights Terms and Privacy Policy
                            including cookie-use
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
`
components.signUp = `
<div class="sign-box">
<h1 class="signup-title"> Sign up now </h1>
<form class="signup-form" id = "form-register">
    <div>
        <label class="input-label">Email</label>
        <input type="email" class="input-username" name="email" placeholder="Your email">
        <div id = "email-error"></div>
    </div>
    <div>
        <label class="input-label">Password</label>
        <input type="password" class="input-pass" name = "password" placeholder="Your password">
        <div id = "password-error"></div>
    </div>
    <div>
        <label class="input-label">Name </label>
        <input type="text" class="input-firstname" name = "firstname" placeholder="First name">
        <div id = "firstname-error"></div>
        <input type="text" class="input-lastname" name = "lastname" placeholder="Last name">
        <div id = "lastname-error"></div>
    </div>
    <label class="input-label">Address</label>
    <input type="text" class="input-address" placeholder="Your address">
    <p class="warning-text">(Make sure your address is correct, or else you cant recive your orders)</p>
    <div>
        <label class="input-label"> Birthday</label>
        <span class="input-birth">
            <select name="month" id="month">
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
            </select> 
        </span>
        <span>
            <select name="day" id="day">
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
        </span>
        <span>
            <select name="year" id="year">
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
                <option value="1919">1919</option>
                <option value="1918">1918</option>
                <option value="1917">1917</option>
                <option value="1916">1916</option>
                <option value="1915">1915</option>
                <option value="1914">1914</option>
                <option value="1913">1913</option>
                <option value="1912">1912</option>
                <option value="1911">1911</option>
                <option value="1910">1910</option>
                <option value="1909">1909</option>
                <option value="1908">1908</option>
                <option value="1907">1907</option>
                <option value="1906">1906</option>
                <option value="1905">1905</option>
                <option value="1904">1904</option>
                <option value="1903">1903</option>
                <option value="1902">1902</option>
                <option value="1901">1901</option>
                <option value="1900">1900</option>
            </select>
        </span>
    </div>

    <label class="input-label" id="gender"> Gender:
        <span>
            <input id="male" class="gender" type="radio" name="male-female">Male
            <input id="female" class="gender" type="radio" name="male-female">Female
        </span>
    </label>
    <div>
        <label class="input-label"> Phone</label>
        <input type="tel" class="input-phone" placeholder="Your phone number">
    </div>
    <div>
        <input type="submit" class="sign-button" id="register-btn" value="Submit" />
        <button id = "register-btn">Submit</button>
    </div>
    <div>
        <hr class="hrr">
        <p class="or">Already have an account? <a>Sign in here</a>.</p>
    </div>
</form>
</div>
`
components.showProduct = `
<section class="on-sale">
    <div class="container-md">
        <div id="filter">
            <button class="btn btn-primary filter-button" data-filter="all">All</button>
            <button class="btn btn-default filter-button" data-filter="votcaulong">Vợt Cầu Lông</button>
            <button class="btn btn-default filter-button" data-filter="giaycaulong">Giày Cầu Lông</button>
            <button class="btn btn-default filter-button" data-filter="trangphuccaulong">Trang Phục Cầu Lông</button>
            <button class="btn btn-default filter-button" data-filter="balo">Ba Lô Cầu Lông</button>
            <button class="btn btn-default filter-button" data-filter="phukien">Phụ kiện</button>
        
        </div>
        <br>
        <div class = "row" id = "show-product">

        </div>
    </div>
</section>
`
components.info = `
    <section class="single-product" id = "info-of-product">
        
    </section>
`