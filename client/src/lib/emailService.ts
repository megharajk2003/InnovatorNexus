import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_innovator_nexus';
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_contact_form';
const EMAILJS_TEMPLATE_ID_CAREERS = 'template_careers_form';
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';

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
      to_email: 'team.innovatorsnexus@gmail.com',
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      company: data.company || 'Not specified',
      service_interest: data.serviceInterest || 'Not specified',
      message: data.message,
      reply_to: data.email,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
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
      to_email: 'team.innovatorsnexus@gmail.com',
      applicant_name: `${data.firstName} ${data.lastName}`,
      applicant_email: data.email,
      applicant_phone: data.phone,
      position: data.position,
      experience: data.experience,
      cover_letter: data.coverLetter || 'Not provided',
      resume_filename: data.resumeFileName || 'Not uploaded',
      reply_to: data.email,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CAREERS,
      templateParams
    );

    return true;
  } catch (error) {
    console.error('Failed to send job application email:', error);
    return false;
  }
};