import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'

import { serverConfig } from '../config';

export const mailer = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: serverConfig.mailer.email,
    pass: serverConfig.mailer.pass,
  }
}));
