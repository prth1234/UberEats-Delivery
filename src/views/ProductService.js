
const products = [
    { id: 0, name: 'Masala Dosa', category: 'South Indian', price: 7.99, image: 'masala_dosa.jpg', inventoryStatus: 'INSTOCK', rating: 4.8 },
    { id: 1, name: 'Chole Bhature', category: 'North Indian', price: 8.49, image: 'chole_bhature.jpg', inventoryStatus: 'INSTOCK', rating: 4.5 },
    { id: 2, name: 'Haldiram\'s Bhujia', category: 'Indian Snacks', price: 5.99, image: 'haldiram_bhujia.jpg', inventoryStatus: 'INSTOCK', rating: 4.6 },
    { id: 3, name: 'Pizza Margherita', category: 'Italian', price: 12.99, image: 'pizza_margherita.jpg', inventoryStatus: 'INSTOCK', rating: 4.9 },
    { id: 4, name: 'Sushi Rolls', category: 'Japanese', price: 14.99, image: 'sushi_rolls.jpg', inventoryStatus: 'INSTOCK', rating: 4.7 },
    { id: 5, name: 'Chicken Biryani', category: 'Indian', price: 10.99, image: 'chicken_biryani.jpg', inventoryStatus: 'INSTOCK', rating: 4.8 },
    { id: 6, name: 'Hamburger', category: 'Fast Food', price: 6.99, image: 'hamburger.jpg', inventoryStatus: 'INSTOCK', rating: 4.5 },
    { id: 7, name: 'Pad Thai Noodles', category: 'Thai', price: 9.99, image: 'pad_thai_noodles.jpg', inventoryStatus: 'INSTOCK', rating: 4.6 },
    { id: 8, name: 'Falafel Wrap', category: 'Middle Eastern', price: 8.99, image: 'falafel_wrap.jpg', inventoryStatus: 'INSTOCK', rating: 4.4 },
    { id: 9, name: 'Pancakes', category: 'Breakfast', price: 5.49, image: 'pancakes.jpg', inventoryStatus: 'INSTOCK', rating: 4.7 },
    { id: 10, name: 'Chicken Shawarma', category: 'Middle Eastern', price: 9.99, image: 'chicken_shawarma.jpg', inventoryStatus: 'INSTOCK', rating: 4.6 },
    { id: 11, name: 'Pasta Carbonara', category: 'Italian', price: 11.49, image: 'pasta_carbonara.jpg', inventoryStatus: 'INSTOCK', rating: 4.8 },
    { id: 12, name: 'Mango Lassi', category: 'Beverages', price: 3.99, image: 'mango_lassi.jpg', inventoryStatus: 'INSTOCK', rating: 4.9 },
    { id: 13, name: 'Fish Tacos', category: 'Mexican', price: 9.49, image: 'fish_tacos.jpg', inventoryStatus: 'INSTOCK', rating: 4.7 },
    { id: 14, name: 'Caprese Salad', category: 'Salads', price: 6.49, image: 'caprese_salad.jpg', inventoryStatus: 'INSTOCK', rating: 4.5 },
    { id: 15, name: 'Vegetable Fried Rice', category: 'Chinese', price: 8.99, image: 'vegetable_fried_rice.jpg', inventoryStatus: 'INSTOCK', rating: 4.6 },
    { id: 16, name: 'Cheeseburger', category: 'Fast Food', price: 7.49, image: 'cheeseburger.jpg', inventoryStatus: 'INSTOCK', rating: 4.5 },
    { id: 17, name: 'Chicken Caesar Salad', category: 'Salads', price: 9.49, image: 'chicken_caesar_salad.jpg', inventoryStatus: 'INSTOCK', rating: 4.6 },
    { id: 18, name: 'Chicken Wings', category: 'Appetizers', price: 10.99, image: 'chicken_wings.jpg', inventoryStatus: 'INSTOCK', rating: 4.8 },
    { id: 19, name: 'Tom Yum Soup', category: 'Thai', price: 5.99, image: 'tom_yum_soup.jpg', inventoryStatus: 'INSTOCK', rating: 4.7 },
  ];
  // Service functions
export const ProductService = {
    // Simulate fetching products from an API
    async getProducts() {
      // Simulate async behavior with a setTimeout
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 1000); // Simulate 1 second delay
      });
    },
  };