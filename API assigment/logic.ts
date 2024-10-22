const form = document.getElementById('contactForm') as HTMLFormElement;

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  // Get form data
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const contact = (document.getElementById('contact') as HTMLInputElement).value;
  const subject = (document.getElementById('subject') as HTMLInputElement).value;
  const message = (document.getElementById('message') as HTMLTextAreaElement).value;

  // Validate form fields
  if (!name || !email || !contact || !subject || !message) {
    alert("All fields are required.");
    return;
  }

  // Push data to API
  const data = {
    name,
    email,
    contact,
    subject,
    message
  };

  try {
    const response = await fetch('https://6714ef82690bf212c76304fd.mockapi.io/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Error in submitting form');
    }

    alert('Form submitted successfully!');
    form.reset();
  } catch (error) {
    alert('Failed to submit form: ' + error.message);
  }
});
