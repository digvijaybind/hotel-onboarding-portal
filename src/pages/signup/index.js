import React from 'react';
import SignupComponent from '../../components/signup';

/**
 * Signup Page Component.
 *
 * The Signup page is responsible for rendering the SignupComponent,
 * which facilitates user registration. This page serves as the
 * interface for new users to create their accounts.
 */
const SignupPage = () => {
  return (
    <div>
      {/* Render the SignupComponent to handle the registration process */}
      <SignupComponent />
    </div>
  );
};

export default SignupPage;
