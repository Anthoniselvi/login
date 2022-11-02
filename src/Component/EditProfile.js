import React from "react";
import "./EditProfile.css";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

function EditProfile() {
  return (
    <div className="container">
      <div className="editprofile-container">
        <div className="editprofile-header">
          <AiFillCloseCircle />
          <h2>Edit Profile</h2>
          <AiFillCheckCircle />
        </div>
        <div className="editprofile-body">
          <div className="editprofile-image">
            <FaUserAlt />
          </div>
          <div className="editprofile-personalinfo">
            <h4>Personal Information</h4>
            <table>
              <tr className="editprofile-tablerow">
                <td>Name</td>
                <td className="editprofile-answer">Anthoniselvi</td>
              </tr>
              <tr className="editprofile-tablerow">
                <td>Username</td>
                <td className="editprofile-answer">gsnathira</td>
              </tr>
              <tr className="editprofile-tablerow">
                <td>Bio</td>
                <td className="editprofile-answer">
                  earbu eawreur reaehacbrh aeregrg
                </td>
              </tr>
            </table>
          </div>
          <div className="editprofile-privateinfo">
            <h4>Private Information</h4>
            <table>
              <tr className="editprofile-tablerow">
                <td>Email</td>
                <td className="editprofile-answer">selvi@gmail.com</td>
              </tr>
              <tr className="editprofile-tablerow">
                <td>Phone</td>
                <td className="editprofile-answer">91-5488586778</td>
              </tr>
              <tr className="editprofile-tablerow">
                <td>Gender</td>
                <td className="editprofile-answer">Female</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
