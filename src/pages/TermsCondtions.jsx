import React from 'react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-md border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Terms & Conditions</h1>

        <div className="space-y-5 text-gray-700 max-h-[70vh] overflow-y-auto pr-2">
          <p>
            Welcome to our website. By accessing and using this site, you accept the following terms and conditions. Please read them carefully.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
          <p>
            By registering or using any of our services, you agree to be bound by these terms and all applicable laws and regulations.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">2. User Responsibilities</h2>
          <p>
            You agree to use our site in a responsible manner and not for any illegal activities. You must not attempt to gain unauthorized access to any part of our website.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">3. Privacy Policy</h2>
          <p>
            Your privacy is important to us. We ensure that all your personal information is kept secure and confidential as described in our privacy policy.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">4. Limitation of Liability</h2>
          <p>
            We are not liable for any direct or indirect damages arising from your use of the site or inability to access our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">5. Changes to Terms</h2>
          <p>
            We reserve the right to update or change these terms at any time without notice. Continued use of the site means you accept the updated terms.
          </p>

          <p>
            If you have any questions about these Terms, please contact us before continuing to use the site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
