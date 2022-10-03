let sunCount = 0;
let waterCount = 0;
let sunBtnClick = document.querySelector(".sunBtn");
let waterBtnClick = document.querySelector(".waterBtn");
let loveBtnClick = document.querySelector(".loveBtn");

sunBtnClick.addEventListener('click', function() {
    // event.preventDefault();
        if (waterCount > 0) {
            waterCount -= 1;
            document.querySelector('.waterBtn').innerHTML = 'Water x' + waterCount;
        }
        sunCount += 1;
        console.log('sun count is' + sunCount);
        document.querySelector('.element').innerHTML = `<img src="sunny.png" alt="sun image">`;
        document.querySelector('.sunBtn').innerHTML = 'Sun x' + sunCount;
        if (sunCount > 3) {
            document.querySelector('.message').innerHTML = `<h1 class="warning">Uh-oh,<br>I've dried out!</h1>`;
            // $('.plant').addClass('plantFell');
        } else {
            // document.querySelector('.element').fadeOut();
            // document.querySelector('.element').fadeIn();
            // $('.plant').removeClass('plantFell');
            document.querySelector('.message').innerHTML = `<h1>Ah, thank you!</h1>`;
        }
    });

waterBtnClick.addEventListener('click', function() {
    // event.preventDefault();
    if (sunCount > 0) {
        sunCount -= 1;
        document.querySelector('.sunBtn').innerHTML = 'Sun x' + sunCount;
    }
    waterCount += 1;
    console.log('water count is' + waterCount);
    document.querySelector('.element').innerHTML = `<img src="rain.png" alt="raindrop image">`;
    document.querySelector('.waterBtn').innerHTML = 'Water x' + waterCount;
        if (waterCount > 3) {
            document.querySelector('.message').innerHTML = `<h1 class="warning">Uh-oh,<br>that's too much water!</h1>`;
            // $('.plant').addClass('plantFell');
        } else {
            // document.querySelector('.element').fadeOut();
            // document.querySelector('.element').fadeIn();
            // $('.plant').removeClass('plantFell');
            document.querySelector('.message').innerHTML = `<h1>Ah, thank you!</h1>`;
        }
    });

loveBtnClick.addEventListener('click', function() {
    if (sunCount > 3) {
        sunCount -= 1;
        document.querySelector('.sunBtn').innerHTML = 'Sun x' + sunCount;
    }
    if (waterCount > 3) {
        waterCount -= 1;
        document.querySelector('.waterBtn').innerHTML = 'Water x' + waterCount;
    }
    console.log('loveBtn clicked');
    // $('.plant').removeClass('plantFell');
    document.querySelector('.element').innerHTML = `<img src="heart.png" alt="heart image">`;
    // $('.element').fadeOut();
    // $('.element').fadeIn();
    document.querySelector('.message').innerHTML = `<h1>Ah, thank you<br>for sending love!</h1>`;
})
