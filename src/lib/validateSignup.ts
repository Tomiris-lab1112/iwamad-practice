export type SignupValues = { 
  fullName: string; 
  email: string; 
  tickets: string 
};

export type SignupErrors = Partial<Record<keyof SignupValues, string>>;

export function validateSignup(values: SignupValues, seatsLeft: number): SignupErrors {
  const errors: SignupErrors = {};

  if (values.fullName.trim().length < 2) {
    errors.fullName = 'Enter your full name';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(values.email)) {
    errors.email = 'Enter a valid email, like name@example.com';
  }

  const numTickets = Number(values.tickets);
  if (!Number.isInteger(numTickets) || numTickets < 1 || numTickets > 4) {
    errors.tickets = 'Choose 1 to 4 tickets';
  } else if (numTickets > seatsLeft) {
    errors.tickets = `Only ${seatsLeft} seats left`;
  }

  return errors;
}