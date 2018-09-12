
//store an interval in a variable
var pause=3000;
//create an intialize counter
var n=0;
//create an array
var imgs=new Array("/assets/images/bookrelease0.JPG","/assets/images/bookrelease1.JPG","/assets/images/bookrelease2.JPG","/assets/images/bookrelease3.JPG","/assets/images/bookrelease4.JPG");
var preload = new Array();

for(var i = 0; i <=imgs.lenght; i++)
        {
                preload[i]=new Image();
                preload[i].src=imgs[i];
        }
        
        // a function to display each picture for the set interval
        function rotate()
        {
                n=Math.round(10*Math.random())%10;
                document.images.pic.src=imgs[n];
                setTimeout("rotate()",pause);
        }
        
        //specify the onload event
        window.onLoad=rotate(); 


