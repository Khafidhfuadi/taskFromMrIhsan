import React from "react";
import Webdes from "./table/Webdes";
import Webdev from "./table/Webdev";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-primary my-3">Price List</h2>
        <table class="table table-bordered table-warning">
          <thead>
            <tr style={{ background: "#0277BD" }}>
              <th className="text-white" scope="col">
                Category
              </th>
              <th className="text-white" scope="col">
                Features
              </th>
              <th className="text-white" scope="col">
                US$
              </th>
            </tr>
          </thead>
          <Webdes />
          <Webdev />
        </table>
      </div>
    );
  }
}

export default Home;
