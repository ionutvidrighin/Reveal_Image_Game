document.addEventListener('DOMContentLoaded', () => {

    const squares = [
        {   name: 'bucket',
            img: 'imgs/bucket.png'
        },
        {   name: 'deer',
            img: 'imgs/deer.png'
        },
        {   name: 'dog',
            img: 'imgs/dog.png'
        },
        {   name: 'money',
            img: 'imgs/money.png'
        },
        {   name: 'penguin',
            img: 'imgs/penguin.png'
        },
        {   name: 'thor',
            img: 'imgs/thor.png'
        },
        {   name: 'tiger',
            img: 'imgs/tiger.png'
        },
        {   name: 'toy',
            img: 'imgs/toy.png'
        },

        {   name: 'bucket',
            img: 'imgs/bucket.png'
        },
        {   name: 'deer',
            img: 'imgs/deer.png'
        },
        {   name: 'dog',
            img: 'imgs/dog.png'
        },
        {   name: 'money',
            img: 'imgs/money.png'
        },
        {   name: 'penguin',
            img: 'imgs/penguin.png'
        },
        {   name: 'thor',
            img: 'imgs/thor.png'
        },
        {   name: 'tiger',
            img: 'imgs/tiger.png'
        },
        {   name: 'toy',
            img: 'imgs/toy.png'
        }
    ];

    //gsap.fromTo('.guess', {opacity: 0, scale: 0}, {scale: 3, opacity: 1, repeat: 1, yoyo: true, yoyoEase: true, duration: 2});
    TweenMax.staggerTo(".guess", 1, {
        cycle: {
          y: [-80, 80],
          rotation: [-40, 20, 40, -20]
        },
        ease: Back.easeInOut,
        stagger: {
          from: "center",
          amount: 0.5
        },
        scale: 1.6, 
        transformOrigin: "center center",
        yoyo: true,
        yoyoEase: true,
        repeat: 1,
        repeatDelay: 0.4
      }); 
    
    squares.sort(() => 0.5 - Math.random())

    console.log(squares)

    const result = document.querySelector('#congrats');
    const score = document.querySelector('#score_track');
    let bodyDOM = document.querySelector('body');

    
    let selectedSquare = [];
    let selectedSquareId = [];
    let win = [];

    function insertImage() {
        const grid = document.querySelector('.container');
        for (let i = 0; i < squares.length; i++){
        const image = document.createElement('img');
        image.setAttribute('src', 'imgs/white.png')
        //image.setAttribute('class', 'all_squares')
        image.setAttribute('data-id', i);
        image.addEventListener('click', flipSquare);
        grid.appendChild(image);
       } 
    }

    function flipSquare()  {
       let squareId = this.getAttribute('data-id');
       // console.log(squares[squareId].name)
        selectedSquare.push(squares[squareId].name);
        selectedSquareId.push(squareId)
        this.setAttribute('src', squares[squareId].img)

       // console.log(selectedSquare)

        if (selectedSquareId.length === 2) {
            setTimeout(ifMatch, 300)
        }
        //console.log(selectedSquareId)
    }

    function ifMatch() {
        let allImgs = document.querySelectorAll('img');
        const option1 = selectedSquareId[0];
        const option2 = selectedSquareId[1];

        if (option1 === option2) {
            alert('You clicked same image')
            allImgs[option1].setAttribute('src', 'imgs/white.png');
            allImgs[option2].setAttribute('src', 'imgs/white.png');
            //console.log(selectedSquareId);
        } else if (selectedSquare[0] === selectedSquare[1]){
            swal({
                title: "Great!",
                text: "You guessed it!",
                icon: "imgs/smile.png"
              });
            allImgs[option1].setAttribute('src', 'imgs/discovered.png');
            allImgs[option2].setAttribute('src', 'imgs/discovered.png');
            allImgs[option1].removeEventListener('click', flipSquare);
            allImgs[option2].removeEventListener('click', flipSquare);
            win.push(selectedSquare);
        } else {
            allImgs[option1].setAttribute('src', 'imgs/white.png');
            allImgs[option2].setAttribute('src', 'imgs/white.png');
            swal({
                title: "Ohhh..",
                text: "You just missed it",
                icon: "imgs/sad.png",
              });

        }
        selectedSquare = [];
        selectedSquareId = [];
        score.textContent = ' ' + win.length;
        console.log(win)
        console.log(win.length)

        const youRock = document.querySelector('#rock');
        if (win.length === 4) {
            setTimeout( () => {
                gsap.fromTo('#rock', {opacity: 0, scale: 0}, {scale: 2, opacity: 1, repeat: 1, yoyo: true, yoyoEase: true, duration: 2});
                youRock.removeAttribute('id');
            }, 450)
        }

        const congrats = ['Congrats!!', 'Congrats!!', 'You Won!!!', 'Congrats!!', 'Congrats!!'];

        if (win.length === 8) {
            let scoreText = document.querySelector('.score');
            scoreText.style.opacity = "0";
            score.style.opacity = "0";
            result.textContent = 'Congrats!!     You Won the game !'
            const revealTitle = document.querySelector('.reveal_title');
            const revealImgs = document.querySelector('.reveal');
            revealTitle.style.opacity = "0";
            revealImgs.style.opacity = "0";

            setTimeout ( () => {
                for (let i = 0; i < congrats.length; i++) {
                    let newText = document.createElement('h1');
                    newText.textContent = congrats[i];
                    newText.setAttribute('class', 'congrats' + i);
                    bodyDOM.appendChild(newText);
                    gsap.fromTo('.congrats0', {opacity: 0, scale: 0}, {scale: 2, opacity: 1, repeat: -1, yoyo: true, yoyoEase: true, duration: 2});
                    gsap.fromTo('.congrats1', {opacity: 0, scale: 0}, {scale: 2, opacity: 1, repeat: -1, yoyo: true, yoyoEase: true, duration: 2});
                    gsap.fromTo('.congrats2', {opacity: 0, scale: 0}, {scale: 2, opacity: 1, repeat: -1, yoyo: true, yoyoEase: true, duration: 2});
                    gsap.fromTo('.congrats3', {opacity: 0, scale: 0}, {scale: 2, opacity: 1, repeat: -1, yoyo: true, yoyoEase: true, duration: 2});
                    gsap.fromTo('.congrats4', {opacity: 0, scale: 0}, {scale: 2, opacity: 1, repeat: -1, yoyo: true, yoyoEase: true, duration: 2});
                } 
            }, 600)
            
        }
    }
  
    insertImage();

})

