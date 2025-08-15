export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const validateContactForm = (data: ContactMessage): string[] => {
  const errors: string[] = [];
  
  if (!data.name || data.name.length < 2) {
    errors.push("Name must be at least 2 characters");
  }
  
  if (!data.email || !data.email.includes("@")) {
    errors.push("Please enter a valid email address");
  }
  
  if (!data.subject || data.subject.length < 5) {
    errors.push("Subject must be at least 5 characters");
  }
  
  if (!data.message || data.message.length < 10) {
    errors.push("Message must be at least 10 characters");
  }
  
  return errors;
};