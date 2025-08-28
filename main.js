var velocidad= 1

var angulo= 0

var girando= false

var pocion, pocionI

var pintura, pinturaI

var ground, ground1, ground2, ground3, ground4, ground5

var barragroup

function preload() {
    pinturaI= loadImage("pintura amarilla.png")
    humanoI= loadImage("persona humana.webp")
    pocionI= loadImage("pocion.webp")
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    pintura=createSprite(200, 300, 50, 50)
    pintura.y= Math.round(random(10, 600))
    pintura.x= Math.round(random(10, 1500))
    pintura.addImage(pinturaI)
    pintura.scale=0.3 

    pocion=createSprite(250, 595, 20, 20)
    pocion.addImage(pocionI)
    pocion.scale=0.2

    barragroup= createGroup()

    ground=createSprite(90, 650, 2000, 30)
    ground.shapeColor="purple"
}

function draw() {
    background(125, 171, 255)
    if(keyIsDown(LEFT_ARROW)){pocion.x=pocion.x-13} 
    if(keyIsDown(RIGHT_ARROW)){pocion.x=pocion.x+13}
    if(keyIsDown(UP_ARROW)){pocion.y=pocion.y-13}  
    if(keyIsDown(DOWN_ARROW)){pocion.y=pocion.y+13} 
    if(keyDown("space")){pocion.velocityY=-10}
    pocion.velocityY=pocion.velocityY+0.5
    if (pocion.overlap(pintura)){ 
        pocion.destroy()
        girando= true
    }
if(girando){ 
        pintura.rotation += velocidad
    }
    barras()
    drawSprites()
    pocion.collide(ground)
    pocion.collide(barragroup)
}

function barras(){
    if (frameCount %40===0){
        var barra= createSprite(290, 600, 150, 30)
    barra.shapeColor="purple"
    barra.y=Math.round(random(10, 500)) 
    barra.x=Math.round(random(10, 1500))
    barragroup.add(barra)

}
}
