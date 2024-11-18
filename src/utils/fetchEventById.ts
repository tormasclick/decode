// src/utils/fetchEventById.ts
export const fetchEventById = async (eventId: string) => {
    const res = await fetch(`https://decode.tormasclick.co.ke/wp-json/tribe/events/v1/events/${eventId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch event');
    }
    const data = await res.json();
    return data;
};