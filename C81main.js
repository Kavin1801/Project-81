canvas=document.getElementById("myCanvas");
color="red";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth=4;
ctx.rect(20, 60, 750, 400);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth=10;
ctx.arc(150, 210, 100, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth=10;
ctx.arc(400, 210, 100, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth=10;
ctx.arc(650, 210, 100, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth=10;
ctx.arc(275, 300, 100, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth=10;
ctx.arc(530, 300, 100, 0, 2 * Math.PI);
ctx.stroke();