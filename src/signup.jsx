import React, { useState } from "react";
import "./signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    name: "",
    phone: "",
  });

  const isFormValid =
    formData.id.trim() !== "" &&
    formData.password.trim() !== "" &&
    formData.name.trim() !== "" &&
    formData.phone.trim() !== "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    console.log("회원가입 정보:", formData);
  };

  return (
    <div className="signup-wrapper">
      <main className="signup-page">
        <h1 className="signup-title">회원가입</h1>

        <form className="signup-form-wrapper" onSubmit={handleSubmit}>
          <div className="signup-form">
            <div className="signup-field">
              <label className="signup-label">아이디</label>
              <input
                className="signup-input"
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
            </div>

            <div className="signup-field">
              <label className="signup-label">비밀번호</label>
              <input
                className="signup-input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="signup-field">
              <label className="signup-label">이름</label>
              <input
                className="signup-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="signup-field">
              <label className="signup-label">전화번호</label>
              <input
                className="signup-input"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            className="signup-button"
            type="submit"
            disabled={!isFormValid}
          >
            회원가입하기
          </button>
        </form>
      </main>
    </div>
  );
}

export default Signup;