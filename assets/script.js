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

     $("#themeToggle").click(function () {

        $("body").toggleClass("ares-theme");

        if ($("body").hasClass("ares-theme")) {
            $(this).text("Legacy Mode");
            $("#bannerImg").attr("src", "/assets/images/ares.webp");
        } else {
            $(this).text("Ares Mode");
            $("#bannerImg").attr("src", "/assets/images/legacy.jpg");
        }

    });
});
