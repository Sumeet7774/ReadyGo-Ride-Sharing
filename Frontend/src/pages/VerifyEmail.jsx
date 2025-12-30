/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (isNaN(value) || value.length > 1) return; // Ensure only one digit
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus next input
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');

    // Simulate verifying OTP (replace with actual API call)
    const isValidOtp = enteredOtp === '1234'; // Replace this with server-side OTP verification logic

    if (isValidOtp) {
      setIsVerified(true);
      alert('Email verified successfully!');
      navigate('/dashboard'); // Navigate to the dashboard or another page after successful verification
    } else {
      alert('Invalid OTP. Please try again.');
      setOtp(['', '', '', '']);
      document.getElementById('otp-0').focus();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-amber-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/85 backdrop-blur-md rounded-2xl shadow-soft border border-gray-100 p-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold">
            <i className="ri-mail-line"></i>
            Verify your email
          </div>
          <h1 className="text-2xl font-bold mt-4 text-gray-900">Enter the 4-digit code</h1>
          <p className="text-sm text-gray-600 mt-2">
            We’ve sent an OTP to your email. Please enter it below.
          </p>
        </div>

        <form onSubmit={handleOtpSubmit} className="flex justify-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 text-lg text-center w-14 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          ))}
        </form>

        <button
          type="submit"
          onClick={handleOtpSubmit}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold shadow-md hover:from-primary-700 hover:to-primary-800 transition-colors"
        >
          Verify Email
        </button>

        <p className="text-xs text-center text-gray-500 mt-4">
          Didn’t get the code? Check spam or request again.
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;