import {ImageSourcePropType} from 'react-native';

type ImageProp = {
  groceryicon: ImageSourcePropType;
  ecommerceicon: ImageSourcePropType;
  caricon: ImageSourcePropType;
};
export const Images: ImageProp = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  groceryicon: require('../assets/grocery.png'),
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  ecommerceicon: require('../assets/online-shop.png'),
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  caricon: require('../assets/shipping.png'),
};
