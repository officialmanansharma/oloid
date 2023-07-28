// Function to load images with parallax scrolling effect
function loadParallaxImages() {
    const videoWrappers = document.querySelectorAll(".video-wrapper");
    const baseImagePath = "css/images/animation/";
    const imageFolders = ["animation-1", "animation-2", "animation-3", "animation-4", "animation-5"]; // Add your folder names here
  
    videoWrappers.forEach((wrapper, index) => {
      const partNumber = index + 1;
      const totalFrames = parseInt(wrapper.getAttribute("data-total-frames"), 10);
  
      const folderIndex = index % imageFolders.length;
      const folderName = imageFolders[folderIndex];
      const imagePath = `${baseImagePath}/${folderName}/`;
  
      for (let i = 1; i <= totalFrames; i++) {
        const imageUrl = `${imagePath}${i}.webp`;
        const image = new Image();
        image.src = imageUrl;
        image.onload = () => {
          const lazyVideo = wrapper.querySelector(".theme-lazy-video");
          lazyVideo.style.backgroundImage = `url('${imageUrl}')`;
        };
      }
    });
  }
  
  // Call the function to load images with parallax scrolling effect
  loadParallaxImages();
  