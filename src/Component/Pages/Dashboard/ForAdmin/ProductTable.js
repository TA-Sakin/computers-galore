import React from "react";
import { Link } from "react-router-dom";

const ProductTable = ({ tool, i, setDeleteProduct }) => {
  const { image, name, price, min_quantity, avail_quantity } = tool;
  const onClickDelete = () => {
    setDeleteProduct(tool);
  };
  return (
    <tr>
      <th>
        <label>
          <span>{i + 1}</span>
        </label>
      </th>
      <td className="flex items-center space-x-3 ">
        <img
          src={image}
          className="w-12 h-12"
          alt="Avatar Tailwind CSS Component"
        />
        <p>
          <span className="font-bold">{name}</span>
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
        <label
          htmlFor="my-modal-6"
          className="btn btn-warning btn-sm"
          onClick={onClickDelete}
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductTable;
