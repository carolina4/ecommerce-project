import React from 'react';
import { SHOP_DATA } from '../../helpers/shop-data';
import CollectionPreview from '../../components/preview-collection/preview-collection.component'

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return <div className='shop-page'>
      {
        this.state.collections.map(({ id, ...otherCollectionPros}) => (
          <CollectionPreview key={id} {...otherCollectionPros} />
        ))
      }
    </div>;
  }
}

export default ShopPage;
