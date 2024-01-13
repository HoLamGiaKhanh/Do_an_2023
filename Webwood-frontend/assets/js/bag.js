$(document).ready(function () {
    const quantityInput = $(".product-quantity__input");
    const btnPlus = $(".btn-plus");
    const btnMinus = $(".btn-minus");

    btnPlus.each(function (index) {
        const quantity = quantityInput.eq(index);
        const minus = btnMinus.eq(index);

        quantity.on("input", function () {
            quantity.attr("value", $(this).val());
        });

        $(this).on("click", function () {
            var currentValue = parseInt(quantity.val());
            if (isNaN(currentValue)) {
                currentValue = 1;
            }
            quantity.val((currentValue + 1).toString());
        });

        minus.on("click", function () {
            var currentValue = parseInt(quantity.val());
            if (isNaN(currentValue)) {
                quantity.val("1");
            }
            if (currentValue > 1) {
                quantity.val((currentValue - 1).toString());
            }
        });
    });
});


// Card Slider similar product
$(document).ready(function () {
    var multipleCardCarousel = document.querySelector("#carouselSimilarProduct-bag");

    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
        wrap: false
    });

    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var numVisibleCards = 1.75;
    var scrollPosition = 0;

    $("#carouselSimilarProduct-bag .carousel-control-prev").addClass('disabled')

    if (window.matchMedia("(min-width: 900px)").matches) {
        numVisibleCards = 4;
    }

    $("#carouselSimilarProduct-bag .carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * numVisibleCards) {
            scrollPosition += cardWidth;
            $("#carouselSimilarProduct-bag .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                600
            );
            if (scrollPosition > 0) {
                $("#carouselSimilarProduct-bag .carousel-control-prev").removeClass('disabled');
            }
            if (scrollPosition > carouselWidth - cardWidth * numVisibleCards) {
                $("#carouselSimilarProduct-bag .carousel-control-next").addClass('disabled');
            }
        }
    });

    $("#carouselSimilarProduct-bag .carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $("#carouselSimilarProduct-bag .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                600
            );
            if (scrollPosition <= 0) {
                $("#carouselSimilarProduct-bag .carousel-control-prev").addClass('disabled')
            }
            if (scrollPosition < carouselWidth - cardWidth * numVisibleCards) {
                $("#carouselSimilarProduct-bag .carousel-control-next").removeClass('disabled')
            }
        }
    });
});
