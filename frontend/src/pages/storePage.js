
import ItemCard from '../components/itemCard';

function StorePage() {

  const listings = [
    {
      name: 'Book',
      cost: 50,
      image: 'https://picsum.photos/100/100',
    },
    {
      name: 'Lamp',
      cost: 75,
      image: 'https://picsum.photos/101/101',
    },
    {
      name: 'Couch',
      cost: 200,
      image: 'https://picsum.photos/102/102',
    }
  ];

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
