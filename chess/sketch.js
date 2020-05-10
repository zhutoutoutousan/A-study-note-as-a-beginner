function setup() {
    createCanvas(800,800);
    htmlStuff();

    // load all chess pieces images
    for(let i = 1; i< 10; i++){
        image.push(loadImage())
    }
    
}