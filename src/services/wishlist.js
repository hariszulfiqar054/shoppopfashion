import axios from 'axios';

export const addWishList = async (product_id) => {
  console.log('-------------',product_id)
  try {
    const response = await axios.post(
      'https://spflaunchpad.com/affiliate/api/user/wishlist/create',
      {product_id},
    );
    if (response?.data?.success) {
      alert('Item successfully added to wishlist');
    } else alert('Error while adding item into wishlist');
  } catch (error) {
    alert(error?.message);
  }
};
