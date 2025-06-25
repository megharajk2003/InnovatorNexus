import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'gmail';
const EMAILJS_TEMPLATE_ID_CONTACT = 'admin_mail';
const EMAILJS_TEMPLATE_ID_CAREERS = 'admin_mail';
const EMAILJS_PUBLIC_KEY = 'ejspucaxOGA1LuWup';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  serviceInterest?: string;
  message: string;
}

export interface JobApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter?: string;
  resumeFileName?: string;
}

export const sendContactEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      to_name: "Admin",
      from_name: `${data.firstName} ${data.lastName}`,
      user_email: data.email,
      mobile: data.company || 'Not specified',
      message: `Service Interest: ${data.serviceInterest || 'Not specified'}\n\nMessage:\n${data.message}`,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    return true;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return false;
  }
};

export const sendJobApplicationEmail = async (data: JobApplicationData): Promise<boolean> => {
  try {
    const templateParams = {
      to_name: "Admin",
      from_name: `${data.firstName} ${data.lastName}`,
      user_email: data.email,
      mobile: data.phone,
      message: `Job Application for: ${data.position}\n\nExperience: ${data.experience}\n\nCover Letter:\n${data.coverLetter || 'Not provided'}\n\nResume: ${data.resumeFileName || 'Not uploaded'}`,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CAREERS,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    return true;
  } catch (error) {
    console.error('Failed to send job application email:', error);
    return false;
  }
};