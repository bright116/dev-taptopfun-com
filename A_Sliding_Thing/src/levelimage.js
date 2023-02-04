var LEVELIMAGES = [];
var SURFACE = document.createElement("canvas");

function getLevelImage(levelgrid) {
    SURFACE.width = WIDTH * CELL + 10;
    SURFACE.height = HEIGHT * CELL + 10;
    
    var tempctx = ctx;
    
    ctx = SURFACE.getContext("2d");
    ctx.clearRect(0, 0, SURFACE.width, SURFACE.height);
    
    var dx = 5;
    var dy = 5;
    
    var lw = Math.floor(CELL / 1.0);
    
    ctx.lineWidth = lw;
    
    for (var i = 0; i < Math.floor(WIDTH * CELL / lw); i++) {
        //ctx.strokeStyle = i % 2 === 0 ? "rgb(120, 150, 60)" : "rgb(140, 160, 60)";
        ctx.strokeStyle = i % 2 === 0 ? "rgb(120, 170, 60)" : "rgb(130, 180, 60)";//"rgb(140, 180, 60)";
        drawLine(lw / 2 + dx + i * lw, dy, lw / 2 + dx + i * lw, dy + HEIGHT * CELL);
    }
    
    ctx.globalAlpha = 0.8;
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black"; //"white";
    //ctx.strokeRect(dx - 1, dy - 1, WIDTH * CELL + 2, HEIGHT * CELL + 2);
    ctx.globalAlpha = 1;
    
    // WALLS 
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.fillStyle = "rgb(180, 100, 60)";
    
    var sh = 4;
    var s = 0;
    
    for (var i = 0; i < levelgrid.grid.length + WIDTH; i++) {
        var wall = i >= levelgrid.grid.length ? true : levelgrid.grid[i];
        var ix = i % WIDTH;
        var iy = Math.floor(i / WIDTH);
        
        if (wall) {
            ctx.globalAlpha = 0.2 * 1;
            ctx.fillStyle = "black";
            if (ix < WIDTH - 1 && iy < HEIGHT) {
                ctx.fillRect(dx + ix * CELL + s + sh, dy + iy * CELL + s + sh, CELL - 2 * s, CELL - 2 * s);
            }
            ctx.globalAlpha = 1;
            
            ctx.fillStyle = WALLCOL;//"rgb(150, 110, 40)";//"rgb(180, 100, 60)";//"rgb(120, 150, 60)";//"rgb(166, 128, 53)";
            ctx.fillRect(dx + ix * CELL + s, dy + iy * CELL + s, CELL - 2 * s, CELL - 2 * s);
            
            if (OUTLINE) {
                ctx.globalAlpha = 0.3;
                
                if (ix < WIDTH - 1 && !levelgrid.get(ix + 1, iy)) {
                    drawLine(dx + (ix + 1) * CELL, dy + (iy + 0) * CELL, dx + (ix + 1) * CELL, dy + (iy + 1) * CELL);
                }
                
                if (ix > 0 && !levelgrid.get(ix - 1, iy)) {
                    drawLine(dx + (ix - 0) * CELL, dy + (iy + 0) * CELL, dx + (ix - 0) * CELL, dy + (iy + 1) * CELL);
                }
                
                if (iy < HEIGHT - 1 && !levelgrid.get(ix, iy + 1)) {
                    drawLine(dx + (ix + 0) * CELL, dy + (iy + 1) * CELL, dx + (ix + 1) * CELL, dy + (iy + 1) * CELL);
                }
                
                if (iy > 0 && !levelgrid.get(ix, iy - 1)) {
                    drawLine(dx + (ix + 0) * CELL, dy + (iy - 0) * CELL, dx + (ix + 1) * CELL, dy + (iy - 0) * CELL);
                }
                
                ctx.globalAlpha = 1;
            }
            //*/
        }
    }
    
    ctx = tempctx;
    
    var image = new Image();
    image.src = SURFACE.toDataURL();
    return image;
}
