

function show_image(src, width, height,alt) {
    // Create a new image element
    let img = document.createElement("img");

    // Set the source, width, 
    // height, and alt attributes
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // Append the image element
    // to the body of the document
    document.body.appendChild(img);
}


let nb_click = 0










// Example usage:

