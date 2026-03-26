/**
 * Service to handle image uploads to Cloudinary.
 */

const CLOUD_NAME = "davr0covk"; // Replace with your actual Cloudinary Cloud Name
const UPLOAD_PRESET = "MADR-Fashion";

export interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
  [key: string]: any;
}

export const cloudinaryService = {
  /**
   * Uploads a file to Cloudinary using an unsigned preset.
   */
  uploadImage: async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to upload image to Cloudinary');
    }

    const data: CloudinaryResponse = await response.json();
    return data.secure_url;
  },
};
