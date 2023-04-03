
import ItemCard from '../components/itemCard';
import { useSelector} from 'react-redux'

function StorePage() {

  const listings = useSelector(store => store.product.products)

  return (
    <>

      { 
      
        listings && listings.map((listing)=>{
            return(
              <ItemCard key={listing.name} item = {listing}/>
            )
        }) 

      }
      
    </>

  );
}

export default StorePage;
