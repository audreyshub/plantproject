sunCount = 0;
waterCount = 0;

function sunBtnClick() {
    $('.sunBtn').click(event => {
        event.preventDefault();
        waterCount = 0;
        sunCount += 1;
        console.log(`sun count is ${sunCount}`);
        $('.element').html(`<img src="sun.png" alt="sun image">`);
        if (sunCount > 2) {
            $('.message').html(`<h1 class="warning">Uh-oh,<br>I've dried out!</h1>`);
            $('.plant').addClass('plant-fell');
        } else {
            $('.plant').removeClass('plant-fell');
            $('.message').html(`<h1>Ah, thank you!</h1>`);
        }
    })
};

function waterBtnClick() {
    $('.waterBtn').click(event => {
        event.preventDefault();
        sunCount = 0;
        waterCount += 1;
        console.log(`water count is ${waterCount}`);
        $('.element').html(`<img src="rain.png" alt="raindrop image">`);
        if (waterCount > 2) {
            $('.message').html(`<h1 class="warning">Uh-oh,<br>that's too much water!</h1>`);
            $('.plant').addClass('plant-fell');
        } else {
            $('.plant').removeClass('plant-fell');
            $('.message').html(`<h1>Ah, thank you!</h1>`);
        }
    })
};

function loveBtnClick() {
    $('.loveBtn').click(event => {
        event.preventDefault();
        sunCount = 0;
        waterCount = 0;
        console.log('loveBtn clicked');
        $('.plant').removeClass('plant-fell');
        $('.element').html(`<img src="heart.png" alt="heart image">`);
        $('.message').html(`<h1>Ah, thank you<br>for sending love!</h1>`);
    })
};

$(sunBtnClick);
$(waterBtnClick);
$(loveBtnClick);
