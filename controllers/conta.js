var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

// enviar email
exports.email = function (req, res) {
  var transport = nodemailer.createTransport(smtpTransport({
    host: 'mail.smtp2go.com',
    port: 2525,
    auth: {
        user: 'beto+mastertech@anderick.com',
        pass: 'HxF20bLnIdBL'
    }
  }))

  var mail = {
      from: 'teste@mastertech.tech',
      to: 'beto@anderick.com',
      subject: "Assunto",
      text: "Hello Mastertech!",
      html: "<b>Hello!</b><p>Mastertech</p>"
  }

  transport.sendMail(mail, function(error, response){
      if(error){
          console.log(error);
      }else{
          console.log("Mensagem enviada");
      }

      transport.close();
  });
};
