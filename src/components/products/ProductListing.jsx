// components/ProductListingClient.js
import { useContext, useEffect, useState } from 'react';
import { productTableHeaders } from "@/utils/config";
import Table from "../Table";
import { GlobalContext } from '@/context';
import { useSession } from 'next-auth/react';

export default function ProductListingClient() {
  const [allProducts, setAllProducts] = useState([]);
  const {submit, setSubmit} = useContext(GlobalContext)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:3000/api/product/allProduct', {
        method: "GET",
        cache: "no-store",
      });
      const data = await res.json();
      setAllProducts(data);
    }

    fetchData();
  }, [submit]);
  console.log(allProducts)
  return (
    
    <Table
      data={allProducts.data && allProducts && allProducts.data.length ? allProducts.data.map(item => ({
        ...item,
        revenue: parseInt(item.price * item.sales)
      })) : []}
      tableHeaderText={"All Products Overview"}
      tableHeaderCells={productTableHeaders}
    />
  );
}
