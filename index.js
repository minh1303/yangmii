let images = document.querySelectorAll("img");
for (let image of images) {
    if (image.id == "logoimg") continue
    const viewer = new Viewer(image, {
        toolbar:false,
        title: false,
    navbar: false});
    image.addEventListener("click" , () => {
        viewer.show()
        console.log(viewer)
    })
}