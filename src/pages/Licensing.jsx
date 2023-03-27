import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Licensing = () => {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Licensing</h1>
        <p className="text-lg leading-relaxed mb-8">
          This page outlines the licensing terms and conditions for [Software
          Name] (the "Software"). By using the Software, you agree to be bound
          by these terms and conditions.
        </p>
        <h2 className="text-2xl font-bold mb-4">License Grant</h2>
        <p className="text-lg leading-relaxed mb-8">
          [Company Name] grants you a non-exclusive, non-transferable license to
          use the Software for your personal or business use, subject to the
          terms and conditions of this agreement.
        </p>
        <h2 className="text-2xl font-bold mb-4">Restrictions</h2>
        <p className="text-lg leading-relaxed mb-8">
          You may not copy, modify, distribute, sell, or transfer the Software
          or any portion thereof without the prior written consent of [Company
          Name]. You may not reverse engineer, decompile, or disassemble the
          Software or attempt to derive the source code from the Software.
        </p>
        <h2 className="text-2xl font-bold mb-4">Ownership</h2>
        <p className="text-lg leading-relaxed mb-8">
          The Software and all intellectual property rights therein are and
          shall remain the property of [Company Name]. The Software is protected
          by copyright and other intellectual property laws.
        </p>
        <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranty</h2>
        <p className="text-lg leading-relaxed mb-8">
          The Software is provided "as is" without warranty of any kind, either
          express or implied, including, but not limited to, the implied
          warranties of merchantability and fitness for a particular purpose.
          [Company Name] does not warrant that the Software will meet your
          requirements or that the operation of the Software will be
          uninterrupted or error-free.
        </p>
        <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
        <p className="text-lg leading-relaxed mb-8">
          In no event shall [Company Name] be liable for any direct, indirect,
          incidental, special, or consequential damages arising out of or in
          connection with the use or inability to use the Software, even if
          [Company Name] has been advised of the possibility of such damages.
        </p>
        <h2 className="text-2xl font-bold mb-4">Termination</h2>
        <p className="text-lg leading-relaxed mb-8">
          This license agreement is effective until terminated. [Company Name]
          may terminate this agreement at any time if you breach any of its
          terms and conditions. Upon termination, you must immediately cease all
          use of the Software and destroy all copies of the Software in your
          possession.
        </p>
        <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
        <p className="text-lg leading-relaxed mb-8">
          This agreement shall be governed by and construed in accordance with
          the laws of [State/Country], without giving effect to its conflict of
          law provisions.
        </p>
        <h2 className="text-2xl font-bold mb-4">Entire Agreement</h2>
        <p className="text-lg leading-relaxed mb-8">
          This agreement constitutes the entire agreement between you and
          [Company Name] with respect to the Software and supersedes all prior
          or contemporaneous communications and proposals, whether oral or
          written, between you and [Company Name] with respect to the Software.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Licensing;
