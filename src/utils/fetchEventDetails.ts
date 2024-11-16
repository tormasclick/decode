export const fetchEventDetails = async (eventId: number) => {
    const response = await fetch(`${process.env.WORDPRESS_API_URL}/events/${eventId}`);
    const data = await response.json();
  
    // Assuming the event has fields like `start_date`, `end_date`, `organizer`, etc.
    return {
      id: data.id,
      title: data.title.rendered,
      description: data.content.rendered,
      start_date: data.start_date,
      end_date: data.end_date,
      time: data.time,
      organizer: data.organizer,
      phone: data.phone,
      email: data.email,
      venue: data.venue,
      address: data.address,
      image: { url: data.image.url }, // Replace with your image field
    };
  };