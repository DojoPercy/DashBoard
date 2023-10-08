"use client";

import { useContext, useState } from "react";
import Button from "../FromControls/button";
import Modal from "../modal/page";
import { productFormControls } from "@/utils/config";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { GlobalContext } from "@/context";

const intialFormData = {
  name: "",
  price: "",
  visitors: 0,
  sales: 0,
  month: "",
};

const ProductLayout = ({ productListingPage}) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(intialFormData);
  const {submit, setSubmit} = useContext(GlobalContext);
  const router = useRouter();
  async function handleAddProduct() {
    const res = await fetch("/api/product/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data && data.success) {
      setShowModal(false);
      setFormData(intialFormData);
      setSubmit(true);
      router.refresh()
    }
    else{
      setSubmit(false);
      setShowModal(false);
      setFormData(intialFormData);
    }
  }

  return (
    <>
      <Button text={"Add Now Product"} onClick={() => setShowModal(true)} />
      {productListingPage}
      <Modal
        show={showModal}
        setShow={setShowModal}
        formData={formData}
        setFormData={setFormData}
        formControls={productFormControls}
        onAdd={handleAddProduct}
      />
    </>
  );
};

export default ProductLayout;
