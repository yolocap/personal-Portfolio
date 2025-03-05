document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("h1OvRkStlxT-HeBrm"); // Ensure EmailJS is initialized

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents form from refreshing the page

        // Get input values
        var email = document.querySelector(".field.email input").value;
        var to_name = document.querySelector(".field.name input").value;
        var message = document.querySelector(".field.textarea textarea").value;

        // Validate form
        if (!email || !to_name || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Create email parameters (MUST match your EmailJS template)
        var templateParams = {
            email: email,  // Matches "{{email}}" in EmailJS
            to_name: to_name, // Matches "{{to_name}}" in EmailJS
            message: message, // Matches "{{message}}" in EmailJS
            reply_to: email  // Matches "{{reply_to}}" in EmailJS (optional)
        };

        // Send email using EmailJS
        emailjs.send("service_cg7f7bc", "template_ag1kiwq", templateParams)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Message Sent Successfully!");
                document.getElementById("contact-form").reset(); // Clear form after sending
            })
            .catch(function(error) {
                console.error("EmailJS Error:", error);
                alert("Failed to send message. Please check the console for details.");
            });
    });
});






$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// Read More Button
document.getElementById("readMoreBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Stops page from scrolling up

    var moreText = document.getElementById("moreContent");
    var btnText = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        btnText.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "Read More";
    }
});

