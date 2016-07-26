alert('Hello!');

document.querySelector('div').onclick=function() {
    alert('always hit me in the face stupid.');
};

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/cat.png') {
        myImage.setAttribute('src',"Images/dog.png");
    } else {
        myImage.setAttribute('src',"Images/cat.png");
    } ;
}


