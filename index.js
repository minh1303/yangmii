let images = document.querySelectorAll("img");
for (let image of images) {
    const viewer = new Viewer(image, {
        toolbar:false
    });
    image.addEventListener("click" , () => {
        viewer.show()
        console.log(viewer)
    })
}