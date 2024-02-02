function navbar_foot(){
    let nav = `<img src="https://www.freeiconspng.com/thumbs/logo-design/rainbow-logo-design-transparent-0.png" alt="">
    <nav>
        <a href="Question1.html">Home</a>
        <a href="product.html" target="_blank">Product</a>
        <a href="contact.html" target="_blank">Contact US</a>
        <a href="" target="_blank">Blog</a>
    </nav>`

    document.getElementById("headernav").innerHTML = nav

    let foot = `<img src="https://www.freeiconspng.com/thumbs/logo-design/rainbow-logo-design-transparent-0.png" alt="">
    <input type="text" placeholder="Enter Your E-mail">
    <button>Subscribe</button>
    <ul>
        <b><a href="">Partnership</a></b>
        <a href="">Websites</a>
        <a href="">Social Media</a>
    </ul>
    <ul>
        <b><a href="">About</a></b>
        <a href="">Our Project</a>
        <a href="">Careers</a>
    </ul>`

    document.getElementById("foot").innerHTML = foot
}

export {navbar_foot}