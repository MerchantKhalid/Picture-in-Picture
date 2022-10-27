const videoElement = document.getElementById('video')
const button= document.getElementById('button')

//prompt to select media stream,pass to videoElement and then play
async function selectMediaStream(){
    try{
        // user has selected which screen or window they want to share
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        // passing mediaStream into videoObject
        videoElement.srcObject = mediaStream;
        // loading metadata
        videoElement.onloadedmetadata = ()=>{
            // play video
            videoElement.play();
        }


    }catch(error){
        
    }
} 
button.addEventListener('click',async ()=>{
    button.disabled=true;
    await videoElement.requestPictureInPicture()
    button.disabled= false


});



selectMediaStream()