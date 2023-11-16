
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 5000,
          },
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            // when window width is >= 640px
            660: {
                slidesPerView: 0.5,
                spaceBetween: 30,
            },

            680: {
                slidesPerView: 4.5,
            },
        },
    });

const showNavbar = ()=>{
    alert("r");
}
let products = [];
showNav.addEventListener("click",showNavbar)


const getAllProducts = async()=>{

    const {data} =await  axios.get("https://dummyjson.com/products");
    products = data.products;
    console.log(products);
    displayProduct();
}

const displayProduct = ()=>{
    const result= products.map( (ele)=>{
        return `<div class="swiper-slide">
        <div class="product-container">
            <img src="${ele.thumbnail}" />

            <div class="product-overlay">
                <div class="overlay-row">
                    <span>NEW</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                        fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M10.577 5.76422C10.2546 6.07365 9.74543 6.07365 9.42299 5.76422L8.84599 5.2105C8.17064 4.56239 7.25828 4.16667 6.24999 4.16667C4.17893 4.16667 2.49999 5.8456 2.49999 7.91667C2.49999 9.90219 3.57482 11.5417 5.12646 12.8888C6.67943 14.237 8.53616 15.1312 9.64553 15.5876C9.87749 15.683 10.1225 15.683 10.3545 15.5876C11.4638 15.1312 13.3206 14.237 14.8735 12.8888C16.4252 11.5417 17.5 9.90218 17.5 7.91667C17.5 5.8456 15.8211 4.16667 13.75 4.16667C12.7417 4.16667 11.8294 4.56239 11.154 5.2105L10.577 5.76422ZM10 4.00798C9.02675 3.074 7.7054 2.5 6.24999 2.5C3.25845 2.5 0.833328 4.92512 0.833328 7.91667C0.833328 13.2235 6.64195 16.1542 9.01149 17.1289C9.64963 17.3914 10.3504 17.3914 10.9885 17.1289C13.358 16.1542 19.1667 13.2235 19.1667 7.91667C19.1667 4.92512 16.7415 2.5 13.75 2.5C12.2946 2.5 10.9732 3.074 10 4.00798Z"
                            fill="#6C7275" />
                    </svg>

                </div>
                <button>Add To Cart</button>
            </div>
        </div>
        <div class="product-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                fill="none">
                <path
                    d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                    fill="#343839" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                fill="none">
                <path
                    d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                    fill="#343839" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                fill="none">
                <path
                    d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                    fill="#343839" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                fill="none">
                <path
                    d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                    fill="#343839" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                fill="none">
                <path
                    d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                    fill="#343839" />
            </svg>

            <p>${ele.title}</p>
            <p>$${ele.price}</p>

        </div>
    </div>`
    } )

    document.querySelector("#product").innerHTML=result;

}
getAllProducts();
