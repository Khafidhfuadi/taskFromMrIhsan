import React, { Component } from "react";

class Webdes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Website Design Packages",
      dataTable: [
        {
          category: "Website Home Page Design (PSD)",
          features: "up to 3 design concepts and unlimited versions",
          us: "$90 USD"
        },
        {
          category: "Starter Package",
          features: "up to 5 static HTML Packages",
          us: "$190 USD"
        },
        {
          category: "Additional Webpages",
          features: "Static HTML Output",
          us: "$10 USD each"
        },
        {
          category: "Wordpress Theme",
          features: "Design and Conversion",
          us: "$120 USD"
        },
        {
          category: "Joomla Template",
          features: "Design and Conversion",
          us: "$120 USD"
        }
      ]
    };
  }
  render() {
    return (
      <tbody>
        <tr style={{ background: "#FF9800" }}>
          <th colspan="3" className="text-white">
            {this.state.title}
          </th>
        </tr>
        {this.state.dataTable.map((tables, index) => (
          <tr>
            <td>{tables.category}</td>
            <td>{tables.features}</td>
            <td>{tables.us}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default Webdes;
