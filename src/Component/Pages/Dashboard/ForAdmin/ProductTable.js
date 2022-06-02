import React from "react";
import { Link } from "react-router-dom";

const ProductTable = ({ tool, i }) => {
  const { image, name, price, min_quantity, avail_quantity } = tool;
  return (
    <tr>
      <th>
        <label>
          <span>{i + 1}</span>
        </label>
      </th>
      <td class="flex items-center space-x-3 ">
        <img
          src={image}
          className="w-12 h-12"
          alt="Avatar Tailwind CSS Component"
        />
        <p>
          <span class="font-bold">{name}</span>
        </p>
      </td>
      <td>
        ${price}
        <br />
      </td>
      <td>{avail_quantity}</td>
      <td>{min_quantity}</td>
      <td>
        <Link to="edit" className="underline font-semibold btn-link ">
          EDIT
        </Link>
      </td>
      <td>
        <button className="btn btn-sm btn-error ">DELETE</button>
      </td>
    </tr>
  );
};

export default ProductTable;
