import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'

export default nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: 'gmkifi@gmail.com',
    pass: 'k9atadm0f1pj'
  }
}))
