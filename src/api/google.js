const google = {
  getCoordinates: async (apiKey) => {
    let data = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=Харьковский+национальный+университет+радиоэлектроники,+CA&key=${apiKey}`);
    return await data.json();
  }
};

export default google;

