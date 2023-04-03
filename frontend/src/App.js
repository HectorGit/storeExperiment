import * as React from 'react';
import StorePage from './pages/storePage';
import { Provider } from 'react-redux';
import { store as ProductStore } from '../src/redux/productStore'

function App() {

  return (
    <Provider store={ProductStore}>
      <StorePage/>
    </Provider>
  );
}

export default App;