import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch } from "react-redux";
import userSlice from "../../redux/userSilce";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
function SidebarCart({ open, handleClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    note: "",
  });

  const validate = Yup.object().shape({
    name: Yup.string().required("This field is required! "),
    address: Yup.string().required("This field is required!"),
    phone: Yup.string()
      .required("This field is required! ")
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Phone is not true"),
  });

  const handleSubmit = (value) => {
    alert(`Success! Name : ${value.name}`);
    setForm({
      name: "",
      address: "",
      phone: "",
      note: "",
    });
    dispatch(userSlice.actions.checkout());
    navigate("/");
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <div className="tablet:w-[460px] shadow-primary bg-white float-right border-none p-7 relative rounded-lg mobie:w-[95%]">
          <HighlightOffIcon
            onClick={handleClose}
            className="absolute right-5 top-5 cursor-pointer"
          />
          <Formik
            initialValues={form}
            enableReinitialize="true"
            validationSchema={validate}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ errors, touched }) => (
              <Form className="form">
                <div className="tablet:w-[80%] flex tablet:flex-row tablet:items-center tablet:justify-between mb-4 mobie:flex-col mobie:items-start">
                  <label className="font-semibold tracking-wider" htmlFor="">
                    Name
                  </label>
                  <div>
                    <Field
                      className={
                        errors.name && touched.name
                          ? "border-2 py-3 px-3 rounded-lg border-price"
                          : "border-2 py-3 px-3 rounded-lg"
                      }
                      placeholder="Enter your name"
                      name="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, [e.target.name]: e.target.value })
                      }
                    />
                    {errors.name && touched.name ? (
                      <div className="mt-2 font-normal text-xs tracking-widest text-price">
                        {errors.name}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="tablet:w-[80%] flex tablet:flex-row tablet:items-center tablet:justify-between mb-4  mobie:flex-col mobie:items-start">
                  <label className="font-semibold tracking-wider" htmlFor="">
                    Address
                  </label>
                  <div>
                    <Field
                      className={
                        errors.address && touched.address
                          ? "border-2 py-3 px-3 rounded-lg border-price"
                          : "border-2 py-3 px-3 rounded-lg"
                      }
                      placeholder="Your Address"
                      name="address"
                      value={form.address}
                      onChange={(e) =>
                        setForm({ ...form, [e.target.name]: e.target.value })
                      }
                    />
                    {errors.address && touched.address ? (
                      <div className="mt-2 font-normal text-xs tracking-widest text-price">
                        {errors.address}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="tablet:w-[80%] tablet:flex tablet:flex-row tablet:items-center tablet:justify-between mb-4  mobie:flex-col mobie:items-start">
                  <label className="font-semibold tracking-wider" htmlFor="">
                    Phone
                  </label>
                  <div>
                    <Field
                      className={
                        errors.phone && touched.phone
                          ? "border-2 py-3 px-3 rounded-lg border-price"
                          : "border-2 py-3 px-3 rounded-lg"
                      }
                      placeholder="Phone Number"
                      name="phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, [e.target.name]: e.target.value })
                      }
                    />
                    {errors.phone && touched.phone ? (
                      <div className="mt-2 font-normal text-xs tracking-widest text-price">
                        {errors.phone}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="tablet:w-[80%] flex tablet:flex-row tablet:items-center tablet:justify-between mb-4 mobie:flex-col">
                  <label className="font-semibold tracking-wider" htmlFor="">
                    Note
                  </label>
                  <Field
                    className="border-2 py-3 px-3 rounded-lg"
                    placeholder="typing note..."
                    name="note"
                    value={form.note}
                    onChange={(e) =>
                      setForm({ ...form, [e.target.name]: e.target.value })
                    }
                  />
                </div>

                <button
                  className="py-2 px-3 bg-primary rounded-md text-white mobie:w-full"
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </div>
  );
}

export default SidebarCart;
