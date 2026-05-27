"use server";

export type ContactState = {
  success: boolean;
  error?: string;
} | null;

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // Wire up an email service here (e.g. Resend: resend.emails.send({...}))
  console.log("Contact form submission:", { name, email, phone, message });

  return { success: true };
}
