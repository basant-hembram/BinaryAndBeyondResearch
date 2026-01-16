import { useState } from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

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

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    userType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Validation functions
  const validateName = (name: string): boolean => {
    return /^[A-Za-z\s]+$/.test(name);
  };

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const digitsOnly = phone.replace(/[^0-9]/g, '');
    return /^[0-9\s\-\+\(\)]+$/.test(phone) && digitsOnly.length >= 10;
  };

  // Check if form is valid
  const isFormValid = (): boolean => {
    return (
      formData.firstName.trim() !== '' &&
      validateName(formData.firstName) &&
      formData.lastName.trim() !== '' &&
      validateName(formData.lastName) &&
      formData.email.trim() !== '' &&
      validateEmail(formData.email) &&
      formData.phone.trim() !== '' &&
      validatePhone(formData.phone) &&
      formData.userType !== '' &&
      formData.message.trim() !== '' &&
      formData.agreeToPolicy &&
      Object.values(errors).every(error => error === '')
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          userType: formData.userType,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          userType: '',
          message: '',
          agreeToPolicy: false,
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

    // Validate on change
    if (name === 'firstName' || name === 'lastName') {
      if (value && !validateName(value)) {
        setErrors({
          ...errors,
          [name]: 'Only alphabets and spaces are allowed',
        });
      } else {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    } else if (name === 'email') {
      if (value && !validateEmail(value)) {
        setErrors({
          ...errors,
          email: 'Please enter a valid email address',
        });
      } else {
        setErrors({
          ...errors,
          email: '',
        });
      }
    } else if (name === 'phone') {
      if (value && !validatePhone(value)) {
        const digitsOnly = value.replace(/[^0-9]/g, '');
        const errorMsg = digitsOnly.length < 10 
          ? 'Phone number must be at least 10 digits' 
          : 'Please enter a valid phone number';
        setErrors({
          ...errors,
          phone: errorMsg,
        });
      } else {
        setErrors({
          ...errors,
          phone: '',
        });
      }
    }
  };

  return (
    <div>
      <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-2">
        Get in <span className="text-[#E6AF1C] font-semibold">touch</span>
      </h2>
      <p className="text-[#575455] text-[18px] lg:text-[20px] mb-8">Our friendly team would love to hear from you.</p>

      {submitStatus.type && (
        <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <p className={`text-sm ${submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
            {submitStatus.message}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[#344054] text-[16px] mb-2">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-[16px] py-[12px] border-2 ${errors.firstName ? 'border-red-500' : 'border-[#e6af1c80]'} rounded-[8px] focus:outline-none focus:border-[#E6AF1C] bg-white`}
              required
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-[#344054] text-[16px] mb-2">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-[16px] py-[12px] border-2 ${errors.lastName ? 'border-red-500' : 'border-[#e6af1c80]'} rounded-[8px] focus:outline-none focus:border-[#E6AF1C] bg-white`}
              required
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="block text-[#344054] text-[16px] mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-[16px] py-[12px] border-2 ${errors.email ? 'border-red-500' : 'border-[#e6af1c80]'} rounded-[8px] focus:outline-none focus:border-[#E6AF1C] bg-white`}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-[#344054] text-[16px] mb-2">
            Phone number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent focus:border-[#E6AF1C] border-none focus:outline-none text-gray-700 pr-8 appearance-none cursor-pointer z-10">
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
              className={`w-full pl-24 pr-[16px] py-[12px] border-2 ${errors.phone ? 'border-red-500' : 'border-[#e6af1c80]'} rounded-[8px] focus:outline-none bg-white`}
              required
            />
          </div>
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-[#344054] text-[16px] mb-2">
            User Type <span className="text-red-500">*</span>
          </label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="w-full px-[16px] py-[12px] border-2 border-[#e6af1c80] focus:border-[#E6AF1C] rounded-[8px] focus:outline-none bg-white text-gray-500"
            required
          >
            <option value="">Select User Type</option>
            <option value="investor">Investor</option>
            <option value="distributor">Distributor</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-[#344054] text-[16px] mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            placeholder=""
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-[16px] py-[12px] border-2 border-[#e6af1c80] focus:border-[#E6AF1C] rounded-[8px] focus:outline-none resize-none bg-white"
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
            <Link to="/privacy-policy" className="text-gray-600 underline hover:text-[#01A382]">
              privacy policy
            </Link>
            . <span className="text-red-500">*</span>
          </label>
        </div>

        <Button 
          type="submit" 
          className="w-full h-[48px] bg-[#01A382] hover:bg-[#018f72] text-white py-[12px] text-base font-medium rounded-[10px] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!isFormValid() || isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
