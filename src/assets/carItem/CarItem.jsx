const  CarItem= ({marke, farbe, modell, produktionsjahr, ps}) => {
    return ( 
        <>
            <h1>Das ist ein CarItem Component</h1>
            <div>
            <h2>Farbe:{farbe}</h2>
            <h2>Marke:{marke}</h2>
            <h2>Model:{modell}</h2>
            <p>Produktionsjahr:{produktionsjahr}</p>
            <p>PS:{ps}</p>

        </div>
        </>
     );
}
 
export default CarItem;