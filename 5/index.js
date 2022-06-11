let images = ['https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg',
'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg',
'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg',
'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg',
'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg',
'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg',
'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'];



for(let i=0 ; i < images.length ; i++){
        let img = document.createElement('img');
        img.src = images[i];
        document.querySelector('#pic').appendChild(img);
    
}