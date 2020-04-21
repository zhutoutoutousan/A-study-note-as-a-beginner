interface RectrangleOptions{
    width: number;
    length: number;
    height?: number;
}

function drawRectangle(options) {
    let width = options.width;
    let length = options.length;

    if(options.height){
        let height = options.height;
    }
    // Draw logic
}

drawRectangle({
    width: 100,
    length: 50,
    height: "123"
})