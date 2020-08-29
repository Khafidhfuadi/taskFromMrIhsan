import React, { Component } from "react";

class Webdev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Website Development/Programming Packages",
      dataTable: [
        {
          category:
            "Custom web Application Development (including Dating Website)",
          features: "PHP/MySQL Solution",
          us: "$8 USD/hour"
        },
        {
          category: "E-commerce Webshop Module Development",
          features:
            "Shopping Cart, Admin Panel Support, Platforms -onCommerce / Virtuemart",
          us: "$590 USD"
        },
        {
          category: "Forum Integrations and Custon Skinning",
          features: "SMF / PHBB Platform",
          us: "$150 USD"
        },
        {
          category: "Blog Installation and Custom Setup",
          features: "Wordpress Platform",
          us: "$150 USD"
        },
        {
          category: "CMS (Content Management) Integration",
          features: "Joomla / Wordpress Platform",
          us: "$100 USD"
        }
      ]
    };
  }
  render() {
    return (
      <tbody>
        <tr style={{ backgroundColor: "#ff9800" }}>
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

export default Webdev;
