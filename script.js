
//  intial variables  
const button = document.getElementById("btnclick");
const videoElement = document.getElementById("video");

// prompt to select media stream pass to videos element then play 

async function selectMediaStream(){
  try{
   const mediaStream= await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream
    videoElement.onloadedmetadata = ()=>{
       videoElement.play();
   }

  }catch (error){
      console.log('whoops, eror here , ', error)
  }

}


//  adding event listener on the button on click 
button.addEventListener("click", async ()=>{
    console.log("clicked")
    //  disable button 
    button.disabled= true;
    // start picture in picture 
    await videoElement.requestPictureInPicture()
    //enable button
    button.disabled = false;

});


// on laod 
selectMediaStream()