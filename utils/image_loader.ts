// utils/imageLoader.js

const imageLoader = (image_url:string) => {
    return require(`../public${image_url}`); // Fallback image
}
  
export default imageLoader;
  