/**
 * Service to handle product-related backend API calls.
 */

const BASE_URL = 'http://localhost:8080/api/products';

export interface ProductData {
  name: string;
  imageUrl: string;
}

export const productService = {
  /**
   * Saves product data to the backend database.
   */
  createProduct: async (product: ProductData) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error('Failed to save product to database');
    }

    return await response.json();
  },
};
