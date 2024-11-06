var check = function () {
    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
    }
}

function myFunction() {
    const inpObj = document.getElementById("contactForm");
    if (!inpObj.checkValidity()) {
        document.getElementById("succesMessage").innerHTML = inpObj.validationMessage;
    } else {

        document.getElementById("succesMessage").innerHTML = alert("Επιτυχης Καταχωριση!");
    }
}
function mysecFunction() {
    var inputObj = document.getElementById("signupForm");
    if (!inputObj.checkValidity()) {
        document.getElementById("succesMessage").innerHTML = inpObj.validationMessage;
    } else {

        document.getElementById("succesMessage").innerHTML = alert("Επιτυχης Εγγραφη!");
    }
}





document.addEventListener("DOMContentLoaded", function () {


    var navbarLinks = document.querySelectorAll(".navbar-link");

    navbarLinks.forEach(function (link, index) {
        setTimeout(function () {
            link.classList.add("show");
        }, index * 100);
    });

    var articles = document.querySelectorAll("#article-adsaueb, #article-categories, #aboutus, #contactform");

    articles.forEach(function (article) {
        article.addEventListener("mouseover", function () {
            article.style.transform = "scale(1.1)";
        });

        article.addEventListener("mouseout", function () {
            article.style.transform = "scale(1)";
        });
    });

    var categories = document.querySelectorAll("#houses-categ, #cars-categ, #tools-categ, #jobs-categ");

    categories.forEach(function (category) {
        category.addEventListener("mouseover", function () {
            category.style.transform = "scale(1.1)";
        });

        category.addEventListener("mouseout", function () {
            category.style.transform = "scale(1)";
        });
    });

    var sidebar = document.querySelector(".sidebar");

    sidebar.addEventListener("mouseover", function () {
        sidebar.style.transform = "scale(1.1)";
    });

    sidebar.addEventListener("mouseout", function () {
        sidebar.style.transform = "scale(1)";
    });


});

