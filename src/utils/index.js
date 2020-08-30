/**
 * 
 * @param {url} string 
 * @param {cb} fn() callback for the return of converted image 
 */
export const convertImageToBase64 = (url, cb) => {
    let canvas = document.createElement('canvas');
    const img = new Image();
    img.setAttribute('crossorigin', 'anonymous');
    /**
     * For CORS issue
     * 
     * If img.src = url doesn't work use this
     * 
     * img.src = 'https://cors-anywhere.herokuapp.com/' + url;
     */
    img.src = url;

    img.onload = () => {
        canvas.height = img.height;
        canvas.width = img.width;
        const context = canvas.getContext('2d');
        context.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL('image/png');
        canvas = null;
        cb(dataURL);
    };
}