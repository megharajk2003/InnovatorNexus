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
    // Send first email to admin
    const adminResponse = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      {
        to_name: "Admin",
        from_name: `${data.firstName} ${data.lastName}`,
        user_email: data.email,
        mobile: data.company || 'Not specified',
        message: `Service Interest: ${data.serviceInterest || 'Not specified'}\n\nMessage:\n${data.message}`,
      },
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email to admin sent successfully!', adminResponse.status, adminResponse.text);

    // Send confirmation email to user
    const userResponse = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_response_email', // User confirmation template
      {
        to_name: `${data.firstName} ${data.lastName}`,
        user_email: data.email,
        reply_to: "team.innovatorsnexus@gmail.com",
        message: "Thank you for reaching out! We will get back to you shortly.",
      },
      EMAILJS_PUBLIC_KEY
    );

    console.log('Confirmation email to user sent successfully!', userResponse.status, userResponse.text);
    return true;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return false;
  }
};

export const sendJobApplicationEmail = async (data: JobApplicationData): Promise<boolean> => {
  try {
    // Send job application to admin
    const adminResponse = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CAREERS,
      {
        to_name: "Admin",
        from_name: `${data.firstName} ${data.lastName}`,
        user_email: data.email,
        mobile: data.phone,
        message: `Job Application for: ${data.position}\n\nExperience: ${data.experience}\n\nCover Letter:\n${data.coverLetter || 'Not provided'}\n\nResume: ${data.resumeFileName || 'Not uploaded'}`,
      },
      EMAILJS_PUBLIC_KEY
    );

    console.log('Job application sent to admin successfully!', adminResponse.status, adminResponse.text);

    // Send confirmation email to applicant
    const userResponse = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_response_email', // User confirmation template
      {
        to_name: `${data.firstName} ${data.lastName}`,
        user_email: data.email,
        reply_to: "team.innovatorsnexus@gmail.com",
        message: "Thank you for your job application! We will review your application and get back to you soon.",
      },
      EMAILJS_PUBLIC_KEY
    );

    console.log('Confirmation email to applicant sent successfully!', userResponse.status, userResponse.text);
    return true;
  } catch (error) {
    console.error('Failed to send job application email:', error);
    return false;
  }
};