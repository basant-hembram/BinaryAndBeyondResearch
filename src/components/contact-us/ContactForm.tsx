import { useState } from 'react';
import { Button } from '../ui/button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    userType: '',
    message: '',
    agreeToPolicy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  return (
    <div>
      <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-2">
        Get in <span className="text-[#E6AF1C] font-semibold">touch</span>
      </h2>
      <p className="text-[#575455] text-[18px] lg:text-[20px] mb-8">Our friendly team would love to hear from you.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[#344054] text-[16px] mb-2">First name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-[16px] py-[12px] border-2 border-[#E6AF1C] rounded-[8px] focus:outline-none bg-white"
              required
            />
          </div>
          <div>
            <label className="block text-[#344054] text-[16px] mb-2">Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-[16px] py-[12px] border-2 border-[#E6AF1C] rounded-[8px] focus:outline-none bg-white"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[#344054] text-[16px] mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-[16px] py-[12px] border-2 border-[#E6AF1C] rounded-[8px] focus:outline-none bg-white"
            required
          />
        </div>

        <div>
          <label className="block text-[#344054] text-[16px] mb-2">Phone number</label>
          <div className="relative">
            <select className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none text-gray-700 pr-8 appearance-none cursor-pointer z-10">
              <option value="IN">IN</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
            </select>
            <svg className="absolute left-12 top-1/2 transform -translate-y-1/2 pointer-events-none z-10" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="tel"
              name="phone"
              placeholder="+91 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-24 pr-[16px] py-[12px] border-2 border-[#E6AF1C] rounded-[8px] focus:outline-none bg-white"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[#344054] text-[16px] mb-2">User Type</label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="w-full px-[16px] py-[12px] border-2 border-[#E6AF1C] rounded-[8px] focus:outline-none bg-white text-gray-500"
            required
          >
            <option value="">Select User Type</option>
            <option value="investor">Investor</option>
            <option value="distributor">Distributor</option>
            <option value="partner">Partner</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-[#344054] text-[16px] mb-2">Message</label>
          <textarea
            name="message"
            placeholder=""
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-[16px] py-[12px] border-2 border-[#E6AF1C] rounded-[8px] focus:outline-none resize-none bg-white"
            required
          ></textarea>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="agreeToPolicy"
            id="agreeToPolicy"
            checked={formData.agreeToPolicy}
            onChange={handleChange}
            className="mt-1 w-4 h-4"
            required
          />
          <label htmlFor="agreeToPolicy" className="text-sm text-gray-600">
            You agree to our friendly{' '}
            <a href="#" className="text-gray-600 underline hover:text-[#01A382]">
              privacy policy
            </a>
            .
          </label>
        </div>

        <Button type="submit" className="w-full h-[48px] bg-[#01A382] hover:bg-[#018f72] text-white py-[12px] text-base font-medium rounded-[10px]">
          Send message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
