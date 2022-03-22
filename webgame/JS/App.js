
let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    resizeTo: window
});
app.renderer.view.style.position = "absolute";

// add eventListener für resize, App rendered nur dann mit wenn man die Seite ladet/neu ladet
document.body.appendChild(app.view);

// *----------------------------------------------------------------*
// *----------------------------------------------------------------*
// *----------------------------------------------------------------*


let containerUpgradeShop = new PIXI.Container();
app.stage.addChild(containerUpgradeShop);

containerUpgradeShop.x = (window.innerWidth - window.innerWidth / 5);
containerUpgradeShop.y = 0;

let objTopRight = new PIXI.Graphics();
objTopRight.beginFill(0xf58952);
// drawRect (x,y,w,h) ---> Param 1 = x-Coordinate, Param 2 = y-Coordinate, Param 3 = width, Param 4 = height
objTopRight.drawRect(0, 0, window.innerWidth / 5, window.innerHeight / 8);
objTopRight.endFill();
containerUpgradeShop.addChild(objTopRight);

let textUpgradeShop = new PIXI.Text('Upgrade Shop', { fontFamily: 'Helvetica', fontSize: 32, fill: 0x000000 });
textUpgradeShop.anchor.set(0.5, 0.5);
textUpgradeShop.x = containerUpgradeShop.width / 2;
textUpgradeShop.y = containerUpgradeShop.height / 2;
containerUpgradeShop.addChild(textUpgradeShop);


// *----------------------------------------------------------------*
// *----------------------------------------------------------------*
// *----------------------------------------------------------------*

let containerProduction = new PIXI.Container();
app.stage.addChild(containerProduction);

containerProduction.x = 0;
containerProduction.y = 0;

let objMiddleLeftTitle = new PIXI.Graphics();
objMiddleLeftTitle.beginFill(0xfffb12);
objMiddleLeftTitle.drawRect(0, 0, window.innerWidth / 4, window.innerHeight / 8);
objMiddleLeftTitle.endFill();
containerProduction.addChild(objMiddleLeftTitle);

let textProductionTitle = new PIXI.Text('Production', { fontFamily: 'Helvetica', fontSize: 32, fill: 0x000000 });
textProductionTitle.anchor.set(0.5, 0.5);
textProductionTitle.x = objMiddleLeftTitle.width / 2;
textProductionTitle.y = objMiddleLeftTitle.height / 2;
containerProduction.addChild(textProductionTitle);
textProductionTitle.interactive = true;
textProductionTitle.cursor = "text";

let objMiddleLeft = new PIXI.Graphics();
objMiddleLeft.beginFill(0xffb8b8);
objMiddleLeft.drawRect(0, objMiddleLeftTitle.height, objMiddleLeftTitle.width, window.innerHeight - objMiddleLeftTitle.height - window.innerHeight / 15);
objMiddleLeft.endFill();
containerProduction.addChild(objMiddleLeft);
// // *----------------------------------------------------------------*

let containerCoin = new PIXI.Container();
app.stage.addChild(containerCoin);

containerCoin.x = objMiddleLeftTitle.width;
containerCoin.y = 0;

let objMiddle = new PIXI.Graphics();
objMiddle.beginFill(0xa4e5f9);
objMiddle.drawRect(0, 0, window.innerWidth - objMiddleLeftTitle.width - objTopRight.width, window.innerHeight - window.innerHeight / 15);
objMiddle.endFill();
containerCoin.addChild(objMiddle);

let coin = new PIXI.Sprite.from("pictures/muenze.png");
coin.anchor.set(0.5);
coin.x = containerCoin.width / 2;
coin.y = containerCoin.height / 2;
containerCoin.addChild(coin);

coin.interactive = true;
coin.buttonMode = true;
coin.on('pointerdown', onClick);

let counter = 0;

let textCounter = new PIXI.Text("Münzen: " + counter, { fontFamily: 'Helvetica', fontSize: 32, fill: 0x000000 });

textCounter.anchor.set(0.5, 0.5);
textCounter.x = containerCoin.width / 2;
textCounter.y = containerCoin.height / 13;
containerCoin.addChild(textCounter);

function onClick(){  
    counter++;
    textCounter.text = "Münzen: " + counter;
}



// // *----------------------------------------------------------------*

let containerShop = new PIXI.Container();
app.stage.addChild(containerShop);

containerShop.x = (window.innerWidth - window.innerWidth / 5);
containerShop.y = objTopRight.height;

let objMiddleRightTitle = new PIXI.Graphics();
objMiddleRightTitle.beginFill(0x39c107);
objMiddleRightTitle.drawRect(0, 0, window.innerWidth / 5, window.innerHeight / 6);
objMiddleRightTitle.endFill();
containerShop.addChild(objMiddleRightTitle);

let objMiddleRight = new PIXI.Graphics();
objMiddleRight.beginFill(0xf63939);
objMiddleRight.drawRect(0, objMiddleRightTitle.height, window.innerWidth / 5, window.innerHeight - objMiddleRightTitle.height - objTopRight.height - window.innerHeight / 15);
objMiddleRight.endFill();
containerShop.addChild(objMiddleRight);

// // *----------------------------------------------------------------*
// // *----------------------------------------------------------------*
// // *----------------------------------------------------------------*

let containerBottom = new PIXI.Container();
app.stage.addChild(containerBottom);

containerBottom.x = 0;
containerBottom.y = window.innerHeight - window.innerHeight / 15;

let objBottom = new PIXI.Graphics();
objBottom.beginFill(0xfefdc2);
objBottom.drawRect(0, 0, window.innerWidth, window.innerHeight / 15);
objBottom.endFill();
containerBottom.addChild(objBottom);

app.renderer.resize(window.innerWidth, window.innerHeight);

