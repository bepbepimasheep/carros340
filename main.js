// 2. Crie uma referência para o canvas no arquivo main.js.
canvas = document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

// 3.Dê uma altura e largura específicas para a imagem do carro.
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_width=75;
greencar_height=100;

// 4.Defina a posição inicial para a imagem de um carro.
greencar_x=5;
greencar_y=225;


// 5.Use a função 'add()' para fazer upload de imagens de carros e de fundo na tela.
function add(){
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src =background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src =background_image;

}
// 6.Defina as funções 'uploadBackground' e 'uploadgreencar'.
function uploadBackground(){
	ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);
}

function uploadgreencar(){
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y, greencar_width,greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		 uploadBackground();
		 uploadgreencar();
		
	}
}

function down()
{
	if(greencar_y <=350)
	{
		greencar_y =greencar_y+ 10;
		uploadBackground();
		uploadgreencar();
		
	}
}

function left()
{
	if(greencar_x >= 0)
	{
		greencar_x =greencar_x - 10;
		uploadBackground();
		 uploadgreencar();
		
	}
}

function right()
{
	if(greencar_x <= 750)
	{
		greencar_x =greencar_x + 10;
		uploadBackground();
		uploadgreencar();
		
   }
}
