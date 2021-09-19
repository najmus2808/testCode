import React from "react";
import img from "../images/vector.svg";
import BasicButtons from "./Mybutton";

const Modal = () => {
  const lockStyles = {
    width: "80px",
    height: "80px",
    background: "#FEE0B3",
    borderRadius: "100px",
    margin: "0px auto",
  };

  const imgStyle = {
    position: "relative",
    left: "31%",
    right: "16.67%",
    top: "21.17%",
    bottom: "8.33%",
  };

  const inputStyle = {
    width: "40px",
    height: "40px",
    background: "#FFFFFF",
    borderRadius: "4px",
    marginLeft: "5px",
    marginRight: "5px",
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Forget Password
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div style={lockStyles}>
                <img style={imgStyle} src={img} alt="" />
              </div>
              <div className="text-center">
                <div style={{ fontSize: "15px" }}>
                  We send a verification code to you email. If
                </div>
                <div style={{ fontSize: "15px" }}>
                  your didn’t receive the email? <a href="https://">Resend</a>
                </div>
              </div>
              <div className="text-center" style={{ marginTop: "10px" }}>
                <input
                  style={inputStyle}
                  placehold="Email address"
                  type="text"
                />
                <input
                  style={inputStyle}
                  placehold="Email address"
                  type="text"
                />
                <input
                  style={inputStyle}
                  placehold="Email address"
                  type="text"
                />
                <input
                  style={inputStyle}
                  placehold="Email address"
                  type="text"
                />
                <input
                  style={inputStyle}
                  placehold="Email address"
                  type="text"
                />
                <input
                  style={inputStyle}
                  placehold="Email address"
                  type="text"
                />
              </div>
            </div>
            <div style={{ marginBottom: "85px" }} className="text-center">
              <BasicButtons label="Verify" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
