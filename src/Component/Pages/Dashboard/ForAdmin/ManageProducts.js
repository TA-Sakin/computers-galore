import React, { useEffect, useState } from "react";
import useTools from "../../../../hooks/useTools";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import ProductTable from "./ProductTable";
import axios from "axios";
import OrderTable from "../MyOrder/OrderTable";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading";
import DeleteProduct from "./DeleteProduct";

const ManageProducts = () => {
  const [tools, isLoading, refetch] = useTools();
  const [deleteProduct, setDeleteProduct] = useState(null);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-2xl my-3">Manage all products {tools.length}</h3>
      <Link to="add" className="btn bg-black my-3 text-white rounded-none">
        <IoMdAdd className="text-2xl mr-2 font-bold"></IoMdAdd> Add New Product
      </Link>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="font-bold text-lg">#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Minimum Orderable</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, i) => (
              <ProductTable
                tool={tool}
                i={i}
                key={tool._id}
                setDeleteProduct={setDeleteProduct}
              ></ProductTable>
            ))}
          </tbody>
        </table>
      </div>
      {deleteProduct && (
        <DeleteProduct
          setDeleteProduct={setDeleteProduct}
          deleteProduct={deleteProduct}
          refetch={refetch}
        ></DeleteProduct>
      )}
    </div>
  );
};

export default ManageProducts;
