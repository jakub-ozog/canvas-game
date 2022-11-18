window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    //Resizing
    // window.addEventListener('resize', ) - in order to keep window resized

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;


    // ctx.strokeStyle = "red";
    // ctx.lineWidth = 5;
    // ctx.strokeRect(100, 100, 200, 500);
    //
    // ctx.strokeStyle = "blue";
    // ctx.lineWidth = 2;
    // ctx.strokeRect(200, 200, 200, 500);

    // ctx.beginPath()
    // ctx.moveTo(100, 100)
    // ctx.lineTo(200, 100)
    // ctx.lineTo(200, 350)
    // ctx.closePath()
    // ctx.stroke()

    //variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e)
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    //event listeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);


});

