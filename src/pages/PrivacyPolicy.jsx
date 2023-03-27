import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-lg leading-relaxed mb-8">
          At [Company Name], we take your privacy seriously. This Privacy Policy
          explains how we collect, use, and disclose your personal information
          when you use our tour listing app and related services (the
          "Services").
        </p>
        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
        <p className="text-lg leading-relaxed mb-8">
          We collect information about you when you use our Services, including:
        </p>
        <ul className="list-disc list-inside mb-8">
          <li>
            Your name, email address, and phone number when you create an
            account
          </li>
          <li>Your payment information when you make a booking</li>
          <li>Your location data when you use our app</li>
          <li>
            Information about the tours, guides, hotels, cars, and other
            services you book through our app
          </li>
          <li>
            Information about your interactions with our app, such as your
            search queries and booking history
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
        <p className="text-lg leading-relaxed mb-8">
          We use your personal information to provide and improve our Services,
          including:
        </p>
        <ul className="list-disc list-inside mb-8">
          <li>Processing your bookings and payments</li>
          <li>Communicating with you about your bookings and our Services</li>
          <li>Providing customer support</li>
          <li>Improving our app and Services</li>
          <li>Personalizing your experience with our app</li>
          <li>Complying with legal obligations</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">
          How We Share Your Information
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          We may share your personal information with third-party service
          providers who help us provide and improve our Services, such as
          payment processors, customer support providers, and analytics
          providers. We may also share your information with our partners, such
          as tour operators, guides, hotels, and car rental companies, to
          facilitate your bookings and provide you with the best possible
          experience.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          We may also share your information with law enforcement or other third
          parties if we believe that disclosure is necessary to comply with a
          legal obligation, protect our rights or property, or prevent fraud or
          other illegal activity.
        </p>
        <h2 className="text-2xl font-bold mb-4">Your Choices</h2>
        <p className="text-lg leading-relaxed mb-8">
          You can control the information we collect about you and how we use it
          by adjusting your account settings and preferences. You can also opt
          out of receiving promotional emails from us by following the
          instructions in the email. Please note that even if you opt out of
          receiving promotional emails, we may still send you transactional or
          administrative messages related to your bookings or our Services.
        </p>
        <h2 className="text-2xl font-bold mb-4">Security</h2>
        <p className="text-lg leading-relaxed mb-8">
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or electronic storage is completely
          secure, so we cannot guarantee the absolute security of your
          information.
        </p>
        <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
        <p className="text-lg leading-relaxed mb-8">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable laws. If we make material changes to
          this Policy, we will notify you by email or by posting a noticeon our
          website. We encourage you to review this Policy periodically for any
          changes.
        </p>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg leading-relaxed mb-8">
          If you have any questions or concerns about our Privacy Policy or our
          practices regarding your personal information, please contact us at
          [contact email].
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
