import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../assets/contact_form_banner.png";
import ContactFormImg from "../assets/contact_form_img.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Enquiry = () => {
    useEffect(() => {
        document.title = "Enquiry | IWEX Infomatics";
      }, []);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        organization: "",
        serviceRequirement: "",
        notes: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phone: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <>
            <Navbar />
            <section className="relative">
                <img src={Banner} alt="Enquiry Banner" className="w-full h-auto" />
                <div className="relative max-w-7xl mx-auto text-center px-6">
                </div>
            </section>
            <section id="enquiry" className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 items-start">
                    <form
                        onSubmit={handleSubmit}
                        className="col-span-12 md:col-span-8 space-y-6 bg-white p-8 rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                            Register
                        </h2>
                        <p className="text-gray-600 text-center">Welcome to iWEX Infomatics!</p>
                        <p className="text-gray-600 mb-6">
                            If you wish to join our ERPNext Training Sessions and/or to avail our ERPNext Support Services, fill out this form and someone from our team will be in touch with you at the earliest.
                        </p>
                        <hr className="border-gray-700 font-semibold" />
                        <label className="block text-gray-700 font-semibold">About yourself</label>

                        <div className="grid md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-700"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email ID"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-700"
                                required
                            />
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="Country"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-700"
                            />
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-700"
                                required
                            />
                            <PhoneInput
                                country={"in"}
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                inputClass="!w-full !border !border-gray-300 !rounded-md !py-3 !px-4 !text-gray-800 !focus:outline-none !focus:border-blue-700"
                                buttonClass="!bg-white"
                            />
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="City/Town"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-700"
                            />
                        </div>
                        <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder="Organization Name"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-700"
                        />
                        <div className="grid md:grid-cols-1 gap-4">
                            <label className="block text-gray-700 font-semibold">Notes</label>
                            <select
                                name="serviceRequirement"
                                value={formData.serviceRequirement}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-700"
                                required
                            >
                                <option value="">Select Service Requirement</option>
                                <option value="ERPNext Training">ERPNext Training</option>
                                <option value="ERPNext Support">ERPNext Support</option>
                                <option value="Both">Both</option>
                            </select>

                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Describe your requirements here"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-700"
                            />
                            <label className="block text-gray-700 font-semibold">Notes</label>
                            <textarea name="notes" value={formData.notes} onChange={handleChange} rows="5" placeholder="Describe your requirements here" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-700" />

                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white font-semibold py-3 rounded-md hover:bg-blue-800 transition"
                        >
                            Submit Registration
                        </button>
                    </form>
                    <div className="col-span-12 md:col-span-4 flex flex-col items-center space-y-6">
                        <div className="flex flex-col items-center">
                            <img src={ContactFormImg} alt="Process" className="w-70 h-70" />
                        </div>
                        <div className="max-w-6xl mx-auto text-center px-6 space-y-8">
                            <div className="border rounded-lg p-8 shadow hover:shadow-lg transition">
                                <FaMapMarkerAlt className="text-blue-700 text-3xl mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Address</h3>
                                <p className="text-gray-600">
                                    IWEX Infomatics Pvt Ltd,<br />
                                    #XXI/152, Panadans,<br />
                                    Cochin University Post,<br />
                                    India - 682022
                                </p>
                            </div>
                            <div className="border rounded-lg p-8 shadow hover:shadow-lg transition">
                                <FaEnvelope className="text-blue-700 text-3xl mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                                <p className="text-gray-600">Drop us an email at <a href="mailto:emails@iwex.in"><b>emails@iwex.in</b></a> and we'll get back to you in 24 hours.</p>
                            </div>
                            <div className="border rounded-lg p-8 shadow hover:shadow-lg transition">
                                <FaPhoneAlt className="text-blue-700 text-3xl mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                                <p>Give us a ring. Our Experts are standing by Monday to Friday from 9.30am to 7.30pm IST.</p>
                                <p className="text-gray-600">
                                    <a href="tel:+919744783338" className="hover:underline">
                                        +91 97447 83338
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Enquiry;
