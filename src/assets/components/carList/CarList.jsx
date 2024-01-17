import CarItem from "../../carItem/CarItem";
import  {v4 as uuidv4 } from "uuid"

const CarList = ({cars}) => {
    console.log(cars)
    return ( 
    <>

        {/* <div>
            <h2>Farbe:{props.cars[0].farbe}</h2>
            <h2>Marke:{props.cars[0].marke}</h2>
            <h2>Model:{props.cars[0].modell}</h2>
            <p>Produktionsjahr:{props.cars[0].produktionsjahr}</p>
            <p>PS:{props.cars[0].ps}</p>

        </div> */}
        <h1>Das ist CarList Component</h1>

        {cars.map((car, index) => {
           return (    <CarItem 
            key={index}
            marke={car.marke}
            farbe={car.farbe}
            modell={car.modell}
            produktionsjahr={car.produktionsjahr}
            ps={car.ps}
            />)
         
        
    })}
       
    </>

     );
}
 
export default CarList;