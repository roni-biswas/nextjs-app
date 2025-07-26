import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      {children}
    </div>
  );
};

export default AuthLayout;
