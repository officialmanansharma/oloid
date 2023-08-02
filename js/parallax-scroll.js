// Function to load images with parallax scrolling effect
function loadParallaxImages() {
  const videoWrappers = document.querySelectorAll(".video-wrapper");
  const windowHeight = window.innerHeight;

  videoWrappers.forEach((wrapper, index) => {
    const rect = wrapper.getBoundingClientRect();
    const folderName = getFolderName(index);

    // Calculate the scroll progress within the video wrapper
    const scrollProgress = Math.min(Math.max((rect.bottom - windowHeight) / rect.height, 0), 1);

    // Calculate the frame number based on scroll progress and total frames
    const totalFrames = parseInt(wrapper.getAttribute("data-total-frames"), 10);
    const frameNumber = Math.floor(scrollProgress * (totalFrames - 1)) + 1;

    const imageUrl = `css/images/animation/${folderName}/${frameNumber}.webp`;
    const lazyVideo = wrapper.querySelector(".theme-lazy-video");

    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      lazyVideo.style.backgroundImage = `url('${imageUrl}')`;
    };
  });
}

// Determine the appropriate folder name based on the index
function getFolderName(index) {
  const imageFolders = ["animation-1", "animation-2", "animation-3", "animation-4", "animation-5"];
  return imageFolders[index % imageFolders.length];
}

// Attach the scroll event listener
window.addEventListener("scroll", loadParallaxImages);
