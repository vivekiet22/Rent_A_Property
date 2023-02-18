import React, { useState,useEffect } from "react";

const Filter = ({ properties, setFilteredProperties }) => {
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  useEffect(() => {
    updateFilteredProperties();
  
  }, [bedrooms,price,location,propertyType])
    
  
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const updateFilteredProperties = () => {
    let filteredProperties = properties.filter((property) => {
      if (price !== "" && property.price > parseInt(price)) {
        return false;
      }
      if (bedrooms !== "" && property.bedrooms !== parseInt(bedrooms)) {
        return false;
      }
      if (
        location !== "" &&
        `${property.address.toLowerCase()}, ${property.city.toLowerCase()}., ${property.state.toLowerCase()}`.indexOf(
          location.toLowerCase()
        ) === -1
      ) {
        return false;
      }
      if (
        propertyType !== "" &&
        property.type.toLowerCase() !== propertyType.toLowerCase()
      ) {
        return false;
      }
      return true;
    });
    setFilteredProperties(filteredProperties);
  };

  return (
    <div style={{backgroundColor:'#ffffff',padding:"1rem"}} className="d-flex w-100 flex-wrap my-3">
      <label style={{borderRight:"1px solid #ffdada",fontWeight:"300"}} for="location" className=" flex-fill mx-3">
        Location
      <br/>
      <input style={{borderColor:"transparent",fontWeight:"700"}}  type="text" value={location} name="location" onChange={handleLocationChange} />
      </label>
      
      
       <label for="price" style={{borderRight:"1px solid #ffdada",fontWeight:"300"}} className="flex-fill mx-3">Price
    <br/> 
      <select style={{borderColor:"transparent",fontWeight:"700"}} id="price" 
          value={price}
          onChange={handlePriceChange} name="price"> 
      <option value="1000">&#60;1000</option> 
      <option value="2000">&#60;2000</option> 
      <option value="3000">&#60;3000</option> 
      <option value="4000">&#60;4000</option> 
      <option value="5000">&#60;5000</option> 
      <option value="6000">&#60;6000</option> 
      <option value="">All</option> 
      </select>  
      </label>



    
      <label for="bedrooms" style={{borderRight:"1px solid #ffdada",fontWeight:"300"}} className=" flex-fill mx-3">Bedrooms
    <br/> 
      <select style={{borderColor:"transparent",fontWeight:"700"}} id="bedrooms" 
          value={bedrooms}
          onChange={handleBedroomsChange} name="bedrooms"> 
      <option value="1">1</option> 
      <option value="2">2</option> 
      <option value="3">3</option> 
      <option value="4">4</option> 
      <option value="5">5</option> 
      <option value="6">6</option> 
      <option value="">All</option> 
      </select> 

      </label>


    <label for="property" style={{borderRight:"1px solid #ffdada",fontWeight:"300"}} className=" flex-fill mx-3">Property Type
    <br/> 
    <select style={{borderColor:"transparent",fontWeight:"700"}} id="property" 
          value={propertyType}
          onChange={handlePropertyTypeChange} name="property"> 
    <option value="Apartment">Apartment</option> 
    <option value="House">House</option> 
    <option value="">All</option> 
    </select>   
   
    </label>
      <button type="button" class="btn  btn-primary  flex-fill mx-3" onClick={updateFilteredProperties}>Search</button>
    </div>
  )
}

export default Filter;