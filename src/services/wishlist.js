import axios from 'axios';

export const addWishList = async (product_id) => {
  try {
    // console.log('------>', axios.defaults.headers.Authorization);
    const response = await axios.post(
      'https://spotpopfashion.com/affiliate/api/user/wishlist/create',
      {product_id},
    );
    if (response?.data?.success) {
      alert('Item successfully added to wishlist');
    } else alert('Error while adding item into wishlist');
  } catch (error) {
    alert(error?.message);
  }
};
