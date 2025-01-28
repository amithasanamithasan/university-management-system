import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'amit35-1773@diu.edu.bd',
      pass: 'tapv lmgn uyzh cbbw',
    },
  });

  await transporter.sendMail({
    from: 'amit35-1773@diu.edu.bd', // sender address
    to, //reciver address
    subject: 'Please you want Reset your password change  within ten mins!', // Subject line
    text: 'Forget Password! Do you have write Password', // plain text body
    html,
  });
};
