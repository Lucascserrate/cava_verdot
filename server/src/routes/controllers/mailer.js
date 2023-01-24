const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "cava.verdot2@gmail.com",
    pass: "peiotiphayefehvc",
  },
});

/*  transport.verify().then(() => {
  console.log("Lista la configuracion para enviar correos");
});  */

const mailActivateAccount = async (name, email) => {
  await transport.sendMail({
    from: "Cava Verdot <cava.verdot@gmail.com>",
    to: email,
    subject: "Activa tu cuenta en E-commerce cava",
    html: `
            <h2>Hola ${name}</h2>
            <h4>Gracias por registrarte en nuestra pagina</h4>
            <hr />
            
            <div>                        
              <p>Atentamente</p>
              <p>Tus amigos de cava</p>
            </div>        
          `,
  });
};

const pago = async (name, email) => {
  await transport.sendMail({
    from: "Cava Verdot <cava.verdot@gmail.com>",
    to: email,
    subject: "PAGO EXITOSO",
    html: `
            <h2>Hola ${name}</h2>
            <h1>Muchas gracias por tu compra.</h1>
            <hr />            
            <div>                        
              <p>Atentamente</p>
              <p>Tus amigos de cava</p>
            </div>        
         `,
  });
};

const datos = async (name, email) => {
  await transport.sendMail({
    from: "Cava Verdot <cava.verdot@gmail.com>",
    to: email,
    subject: "DATOS ACTUALIZADOS",
    html: `
            <h2>Hola ${name}</h2>
            <h1>Tus datos fueron actualizados de forma correcta.</h1>
            <hr />            
            <div>                        
              <p>Atentamente</p>
              <p>Tus amigos de cava</p>
            </div>        
         `,
  });
};
const baja = async (name, email) => {
  await transport.sendMail({
    from: "Cava Verdot <cava.verdot@gmail.com>",
    to: email,
    subject: "BAJA CONFIRMADA",
    html: `
            <h2>Hola ${name}</h2>
            <h1>La baja se proceso de manera correcta</h1>
            <hr />            
            <div>                        
              <p>Atentamente</p>
              <p>Tus amigos de cava</p>
            </div>        
         `,
  });
};

const news = async (name, email, mensaje) => {
  await transport.sendMail({
    from: "Cava Verdot <cava.verdot@gmail.com>",
    to: email,
    subject: "Buenas Noticias y descuentos ",
    html: `
            <h2>Hola ${name}</h2>
            <h3>${mensaje}</h3>
            <hr />            
            <div>                        
              <p>Atentamente</p>
              <p>Tus amigos de cava</p>
            </div>        
         `,
  });
};

const welcome = async (name, email) => {
  await transport.sendMail({
    from: "Cava Verdot <cava.verdot@gmail.com>",
    to: email,
    subject: "Bienvenido",
    html: `
          <h2>Hola ${name}</h2>            
          <hr />            
          <h4> Gracias por validarte, para terminar de registrarte ingresa al siguiente enlace: </h4>
          <Link> https://cava-verdot.vercel.app/register </Link>
          <div>                        
            <p>Atentamente</p>
            <p>Tus amigos de cava</p>
          </div>        
       `,
  });
};

// ruta put con query confirmación alta (ok), confimación baja, get confirmación y detalle de compra,  post newsletters/ofertas/noticias.

module.exports = { mailActivateAccount, pago, datos, baja, news, welcome };
