window.onload = choosePic;

var myPix = new Array('alvan-nee-qOZWvDXtLE8-unsplash.jpg', 'caleb-woods-W5tN-lEQn_0-unsplash.jpg', 'dog1.jpg', 'florencia-potter-yxmNWxi3wCo-unsplash.jpg', 'ivan-stern-DI9Y5eg00uk-unsplash.jpg', 'jeremy-stenuit-QisRqkmc7RY-unsplash.jpg', 'josh-rakower-zBsXaPEBSeI-unsplash.jpg', 'laula-co-muj17G6lMjU-unsplash.jpg', 'leon-rojas-LLSpY0OsEqA-unsplash.jpg', 'leslie-joseph-u7C7stnwvDU-unsplash.jpg', 'matthew-henry-U5rMrSI7Pn4-unsplash.jpg', 'natasa-mirkovic-4MF_iNmHW_w-unsplash.jpg', 'nathaly-wild1-nsx00QMeOyg-unsplash.jpg', 'tallie-robinson-iaJOGNL_Rvk-unsplash.jpg', 'zach-lucero-jYBtuN6aKg0-unsplash.jpg')

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("cute-canvas").src ="../photos/"+myPix[randomNum];
}