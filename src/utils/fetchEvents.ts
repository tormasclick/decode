export const fetchEvents = async () => {
    const url = "https://decode.tormasclick.co.ke/wp-json/tribe/events/v1/events";
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch events.");
      const data = await response.json();
      return data.events; // Returns an array of events
    } catch (error) {
      console.error("Error fetching events:", error);
      return [];
    }
  };