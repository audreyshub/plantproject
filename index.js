sunCount = 0;
waterCount = 0;

function sunBtnClick() {
    $('.sunBtn').click(event => {
        event.preventDefault();
        if (waterCount > 0) {
            waterCount -= 1;
            $('.waterBtn').html(`Water<span> x${waterCount}</span>`);
        }
        sunCount += 1;
        console.log(`sun count is ${sunCount}`);
        $('.element').html(`<img src="sun.png" alt="sun image">`);
        $('.sunBtn').html(`Sun<span> x${sunCount}</span>`);
        if (sunCount > 3) {
            $('.message').html(`<h1 class="warning">Uh-oh,<br>I've dried out!</h1>`);
            // $('.plant').addClass('plantFell');
        } else {
            $('.element').fadeOut();
            $('.element').fadeIn();
            // $('.plant').removeClass('plantFell');
            $('.message').html(`<h1>Ah, thank you!</h1>`);
        }
    })
};

function waterBtnClick() {
    $('.waterBtn').click(event => {
        event.preventDefault();
        if (sunCount > 0) {
            sunCount -= 1;
            $('.sunBtn').html(`Sun<span> x${sunCount}</span>`);
        }
        waterCount += 1;
        console.log(`water count is ${waterCount}`);
        $('.element').html(`<img src="rain.png" alt="raindrop image">`);
        $('.waterBtn').html(`Water<span> x${waterCount}</span>`);
        if (waterCount > 3) {
            $('.message').html(`<h1 class="warning">Uh-oh,<br>that's too much water!</h1>`);
            // $('.plant').addClass('plantFell');
        } else {
            $('.element').fadeOut();
            $('.element').fadeIn();
            // $('.plant').removeClass('plantFell');
            $('.message').html(`<h1>Ah, thank you!</h1>`);
        }
    })
};

function loveBtnClick() {
    $('.loveBtn').click(event => {
        event.preventDefault();
        if (sunCount > 3) {
            sunCount -= 1;
            $('.sunBtn').html(`Sun<span> x${sunCount}</span>`);
        }
        if (waterCount > 3) {
            waterCount -= 1;
            $('.waterBtn').html(`Water<span> x${waterCount}</span>`);
        }
        console.log('loveBtn clicked');
        // $('.plant').removeClass('plantFell');
        $('.element').html(`<img src="heart.png" alt="heart image">`);
        $('.element').fadeOut();
        $('.element').fadeIn();
        $('.message').html(`<h1>Ah, thank you<br>for sending love!</h1>`);
    })
};

$(sunBtnClick);
$(waterBtnClick);
$(loveBtnClick);
