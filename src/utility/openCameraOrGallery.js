import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export const openCameraOrGallery = async (useCamera = true) => {
  try {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: useCamera ? CameraSource.Camera : CameraSource.Photos,
      allowEditing: false, // we'll crop manually
      quality: 90,
    });

    return image.dataUrl; // you can render this in <img src />
  } catch (err) {
    console.error('Image selection failed:', err);
    return null;
  }
};
