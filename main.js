Webcam.set({
    width: 310,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');