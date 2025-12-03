$(document).ready(function () {
     $(".copy-btn").click(function () {
        let codeText = $(this).siblings("code").text().trim();

        navigator.clipboard.writeText(codeText).then(() => {
            let btn = $(this);
            btn.text("Copied!");

            setTimeout(() => {
                btn.text("Copy");
            }, 1500);
        });
    });

    function changeBanner(src) {
        const banner = document.getElementById("bannerImg");

        banner.classList.add("fade-out");

        setTimeout(() => {
            banner.src = src;
            banner.classList.remove("fade-out");
        }, 300);
    }

    $("#themeToggle").on("click", function () {
        const body = $("body");

        if (body.hasClass("ares-theme")) {
            body.removeClass("ares-theme").addClass("legacy-theme");
            changeBanner("/assets/images/legacy.jpg");
        } else {
            body.removeClass("legacy-theme").addClass("ares-theme");
            changeBanner("/assets/images/ares.webp");
        }
    });

});
