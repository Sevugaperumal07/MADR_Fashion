/**
 * Custom hook to manage the state and logic for image uploading and product creation.
 */

import { useState } from 'react';
import { cloudinaryService } from '../services/cloudinary.service';
import { productService } from '../services/product.service';

export const useUploadImage = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  /**
   * Validates file size and uploads to Cloudinary, then returns the URL.
   */
  const uploadAndSaveProduct = async (file: File): Promise<string | null> => {
    // 1. Reset state
    setIsUploading(true);
    setError(null);
    setSuccess(false);

    // 2. File Validation
    if (!file.type.startsWith('image/')) {
      setError('Selected file must be an image.');
      setIsUploading(false);
      return null;
    }

    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      setError('File is too large. Max size is 2MB.');
      setIsUploading(false);
      return null;
    }

    try {
      // 3. Service Call: Upload to Cloudinary
      const imageUrl = await cloudinaryService.uploadImage(file);
      
      if (!imageUrl) {
        throw new Error('No image URL returned from Cloudinary');
      }

      // 4. Update Success State
      setSuccess(true);
      return imageUrl;
    } catch (err: any) {
      console.error('Upload Process Error:', err);
      setError(err.message || 'An unexpected error occurred during upload.');
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    uploadAndSaveProduct,
    isUploading,
    error,
    success,
    setSuccess,
  };
};
