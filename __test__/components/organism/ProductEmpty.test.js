
import { cleanup , render } from '@testing-library/react-native';

describe('ProductEmpty component', () => {
    afterEach(cleanup);
  it('renders correctly with message', () => {
    const message = 'No hay productos en el carrito'; 
  })
})