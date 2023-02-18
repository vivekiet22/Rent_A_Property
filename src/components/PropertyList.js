import React, { useState } from "react";
import Filter from "./Filter";
import PropertyCard from "./PropertyCard";

const PropertyList = ({ properties }) => {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  return (
    <>
    
      <div className="container">
        <Filter
          properties={properties}
          setFilteredProperties={setFilteredProperties}
        />
      </div>
      {filteredProperties.length>0?
      (<div className="container">
        <div className="row">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
         
        </div>
      </div>):(<h2 >No match found</h2>)
}
    </>
  )
};

export default PropertyList;
