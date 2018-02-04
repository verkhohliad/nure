export const getCoordinates = async (apiKey) => {
   return new Promise(resolve => {
     fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=Харьковский+национальный+университет+радиоэлектроники,+CA&key=${apiKey}`)
       .then(res => res.json())
       .then(data => resolve(data));
   })
};
