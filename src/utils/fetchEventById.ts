export const fetchEventById = async (eventId: string) => {
    const url = `https://decode.tormasclick.co.ke/wp-json/tribe/events/v1/events/${eventId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch event details.");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching event details:", error);
      return null;
    }
  };