import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'

export default nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: '@gmail.com',
    pass: ''
  }
}))
