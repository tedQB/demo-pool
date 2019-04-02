import React from "react";
import { Map, List } from "immutable";

function MapDemo() {
  console.log(
    Map()
      .set(List.of(1), "list-of-one")
      .get(List.of(1))
  );
  console.log(
    Map()
      .set(NaN, "NaN")
      .get(NaN)
  );
  console.log(
    Map()
      .set(undefined, "undefined")
      .get(undefined)
  );
  console.log(
    Map()
      .set(null, "null")
      .get(null)
  );

  console.log(List([, , , ,]).toJS());

  return <p>Map</p>;
}
export default MapDemo;
