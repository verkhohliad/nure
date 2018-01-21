

function getSpecialities(req, res, next) {
  const log = 'get specialities';
  console.log(log);


  res.json({ log });
}


exports.getSpecialities = getSpecialities;
