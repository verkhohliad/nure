import { GOOGLE } from '../common/constants';

export const getGoogleCoordinates = async () => {
  const data = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=Харьковский+национальный+университет+радиоэлектроники,+CA&key=${GOOGLE.KEY}`);
  return await data.json();
};
