const nodemailer = require("nodemailer");

	const transport = nodemailer.createTransport({
		host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
        	user: "cava.verdot@gmail.com",
        	pass: "nijdtowgznsaevsg"

        }
    });

    transport.verify().then(() => {
        console.log("Lista la configuracion para enviar correos");
      });
  

const mailActivateAccount = async (name, email) => {
    await transport.sendMail({
      from: "PF-Henry <cava.verdot@gmail.com>",
      to: email,
      subject: "Activa tu cuenta en E-commerce cava",
      html: `
            <h2>Hola usuario ${name}</h2>
            <h4>Gracias por registrarte en nuestra pagina</h4>
            <hr />
            <div>                        
              <p>Atentamente</p>
              <p>Tus amigos de cava</p>
            </div>        
          `,
    });
  };


  module.exports = {mailActivateAccount}
