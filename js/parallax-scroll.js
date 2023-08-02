// // Function to load images with parallax scrolling effect
// function loadParallaxImages() {
//     const videoWrappers = document.querySelectorAll(".video-wrapper");
//     const baseImagePath = "css/images/animation/";
//     const imageFolders = ["animation-1", "animation-2", "animation-3", "animation-4", "animation-5"]; // Add your folder names here
  
//     videoWrappers.forEach((wrapper, index) => {
//       const partNumber = index + 1;
//       const totalFrames = parseInt(wrapper.getAttribute("data-total-frames"), 10);
  
//       const folderIndex = index % imageFolders.length;
//       const folderName = imageFolders[folderIndex];
//       const imagePath = `${baseImagePath}/${folderName}/`;
  
//       for (let i = 1; i <= totalFrames; i++) {
//         const imageUrl = `${imagePath}${i}.webp`;
//         const image = new Image();
//         image.src = imageUrl;
//         image.onload = () => {
//           const lazyVideo = wrapper.querySelector(".theme-lazy-video");
//           lazyVideo.style.backgroundImage = `url('${imageUrl}')`;
//         };
//       }
//     });
//   }
  
//   // Call the function to load images with parallax scrolling effect
  
//   window.addEventListener("scroll", loadParallaxImages);


// Function to load images with parallax scrolling effect
function loadParallaxImages() {
  const videoWrappers = document.querySelectorAll(".video-wrapper");

  // Use a debounce function to limit the frequency of image loading
  let timeout;
  function debounce(func, wait) {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  }

  // Load images when the user scrolls
  debounce(() => {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;

    videoWrappers.forEach((wrapper, index) => {
      const rect = wrapper.getBoundingClientRect();
      if (rect.top - windowHeight <= 0 && rect.bottom >= 0) {
        loadImagesForWrapper(wrapper, index);
      }
    });
  }, 100);
}

// Load images for a specific wrapper
function loadImagesForWrapper(wrapper, index) {
  const totalFrames = parseInt(wrapper.getAttribute("data-total-frames"), 10);
  const folderName = getFolderName(index);
  const lazyVideo = wrapper.querySelector(".theme-lazy-video");

  for (let i = 1; i <= totalFrames; i++) {
    const imageUrl = `css/images/animation/${folderName}/${i}.webp`;
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      lazyVideo.style.backgroundImage = `url('${imageUrl}')`;
    };
  }
}

// Determine the appropriate folder name based on the index
function getFolderName(index) {
  const imageFolders = ["animation-1", "animation-2", "animation-3", "animation-4", "animation-5"];
  return imageFolders[index % imageFolders.length];
}

// Attach the scroll event listener
window.addEventListener("scroll", loadParallaxImages);
