const components = {}

components.header = `
    <section class = "header-container"> 
        <div class = "header">
            <img class = "logo" id = "logo" src = "../imgs/logo.png">
            <form class = "search-tool">
                <input id = "search-box" type = "text" placeholder = "Bạn tìm gì...">
                <button id ="search-btn" type = "submit">
                    <i class = "fa fa-search"></i>
                </button>
            </form>
            <div class = "cart">
                <img id = "cart-btn" src = "../imgs/cart.png">
            </div>
        </div>
        <div class = "navbar">
            <ul class = "ul">
                <span class = "navbar-item">
                    <a id = "home">TRANG CHỦ</a>
                </span>
                <span class = "navbar-item" id = "racket">
                    VỢT CẦU LÔNG
                </span>
                <span class = "navbar-item" id = "shoes">
                    GIÀY CẦU LÔNG
                </span>
                <span class = "navbar-item" id = "shirt">
                    ÁO CẦU LÔNG
                </span>
                <span class = "navbar-item" id = "policy">
                    <a id = "policy">CHÍNH SÁCH</a>
                </span>
                <span class = "navbar-item">
                    <a id = "contact">LIÊN HỆ</a>
                </span>
            </ul>
        </div>
    </section>
`
components.body = `
    <section class = "body-container">
        <p class = "content">
            <img class = "advertise" src = "../imgs/center.jpg">
        </p>
        <p class = "contact">
            <i class="far fa-headphones-alt"></i>
            <div>
                <h3>
                    Hotline (08-17h trừ CN và chiều thứ 7)
                </h3>
            </div>  
        </p>
    </section>
`
components.footer = `
    <section class = "footer-container">
        <div class = "about-store">
            Hệ thống của hàng:
            <li>
                VNB Quận 10 -	0932 610 008
                    17 Hòa Hưng, Phường 12, Quận 10, TP. HCM
            </li>
            <li>
                VNB Tân Bình -	0903 525 963
                409 Nguyễn Trọng Tuyển, P.2, Q.Tân Bình, TPHCM
            </li>
        </div>
        <div class = "customer-care">
            Chăm sóc khách hàng
            <li>
                Tư vấn: 0387504432
                (08-17h, CN và chiều thứ 7 nghỉ)
            </li>
            <li>
                Mua sỉ: 012345678
                (08-17h, CN và chiều thứ 7 nghỉ)
            </li>
            <li>
                Than phiền dịch vụ: 043473423
            </li>
        </div>
    </section>
`