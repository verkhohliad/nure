import to from 'await-to-js';
import httpError from 'http-errors';
import Joi from 'joi';
import path from 'path';

import { OlympiadUsers } from '../../db/collections';
import { OlympiadUserSchema } from '../../db/schemas/olympiadUser';
import { mailer } from '../../utils';

export const getOlympiadUsers = async (req, res, next) => {
  const [err, result] = await to(OlympiadUsers.find().toArray());
  if (err) return next(err);

  res.json({
    success: true,
    result,
  })
};

export const getOlympiadUser = async (req, res, next) => {
  res.status(404).send();
};

export const deleteOlympiadUser = async (req, res, next) => {
  res.status(404).send();
};

export const createOlympiadUser = async (req, res, next) => {
  let [err1, body] = await to(Joi.validate(req.body, OlympiadUserSchema));
  if (err1) return next(httpError(422, err1));

  const [err5, result] = await to(OlympiadUsers.update({ email: body.email }, body, { upsert: true }));
  if (err5) return next(err5);

  const attachments = [{
    filename: 'instruction.doc',
    path: path.join(__dirname, '../../files/olympiad/instruction.doc'),
  }];

  body.subjects.forEach(subject => {
    attachments.push({
      filename: `${subject}.doc`,
      path: path.join(__dirname, `../../files/olympiad/${subject}.doc`)
    });
  });

  const mailOptions = {
    from: '"Nure Olumpiad" <olimp@nure.ua>',
    to: body.email,
    subject: 'Olympiad registration ✔',
    html: '<h1>Congratulations, You have been registered for the Olympiad!</h1><hr/>',
    attachments
  };

  mailer.sendMail(mailOptions, (error, info) => error ? console.log('Mail did not send: ', error) : console.log('Mail send: ', info));

  const [err3, user] = await to(OlympiadUsers.findOne({ email: body.email }));
  if (err3) return next(err3);

  res.json({
    success: true,
    result: user,
  })
};

export const updateOlympiadUser = async (req, res, next) => {
  res.status(404).send();
};
