import { GOOGLE } from '../common';

export const getGoogleCoordinates = async () => {
  const data = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=Kharkivsʹkyy Natsionalʹnyy Universytet Radioelektroniky Харківський національний університет радіоелектроніки,+CA&key=${GOOGLE.KEY}`);
  return await data.json();
};
