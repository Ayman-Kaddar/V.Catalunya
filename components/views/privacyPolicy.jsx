import Link from "next/link";
const PrivPolicy = () => {
  return (
    <div className="flex flex-col w-full text-justify container mx-auto my-24 gap-4 px-8 font-notosans">
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-12 justify-center">
          <h3 className=" text-primary-300 text-2xl font-horizon uppercase text-center">
            Política de privacidad
          </h3>
        </div>
        <div className="flex flex-col w-full items-center gap-4 text-lg">
          <div className="text-primary-100">
            COSMIC RACCOON informa sobre su Política de Privacidad respecto del
            tratamiento y protección de los datos de carácter personal de
            usuarios/as que puedan ser recabados durante la navegación o
            contratación de servicios a través del sitio web
            www.marinateixidor.com.
          </div>
          <div className="text-primary-100">
            En este sentido, COSMIC RACCOON garantiza el cumplimiento de la
            normativa vigente en materia de protección de datos personales,
            reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de
            Protección de Datos Personales y de Garantía de Derechos Digitales
            (LOPDGDD). Cumple también con el Reglamento (UE) 2016/679 del
            Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a
            la protección de las personas físicas en lo que respecta al
            tratamiento de datos personales y a la libre circulación de estos
            datos (RGPD).
          </div>
          <div className="text-primary-100">
            El uso de sitio Web implica la aceptación de la presente Política de
            Privacidad así como de las condiciones señaladas en el{" "}
            <span>
              <Link
                href={`/aviso-legal`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span className="hover:font-bold hover: active:scale-95 cursor-pointer text-primary-100 text-normal font-normal italic underline whitespace-nowrap">
                  Aviso Legal.
                </span>{" "}
              </Link>{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-6 justify-center">
          <h4 className="text-primary-300  text-xl font-horizon text-center">
            Principios aplicados en el tratamiento de datos
          </h4>
        </div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <div className="text-primary-100">
            En el tratamiento de los datos personales, COSMIC RACCOON aplicará
            los siguientes principios:
          </div>
          <div className="text-primary-100 pl-8">
            - Principio de licitud, lealtad y transparencia: COSMIC RACCOON
            siempre requerirá el consentimiento para el tratamiento de los datos
            personales, que puede ser para uno o varios fines específicos, sobre
            los que informará previamente con absoluta transparencia.
          </div>
          <div className="text-primary-100 pl-8">
            - Principio de minimización de datos: COSMIC RACCOON solicitará solo
            los datos estrictamente necesarios para el fin o los fines
            solicitados.
          </div>
          <div className="text-primary-100 pl-8">
            - Principio de limitación del plazo de conservación: Los datos se
            mantendrán durante el tiempo estrictamente necesario para el fin o
            los fines del tratamiento.
          </div>
          <div className="text-primary-100 pl-8">
            - COSMIC RACCOON informará del plazo de conservación correspondiente
            según la finalidad. En el caso de suscripciones, COSMIC RACCOON
            revisará periódicamente las listas y eliminará aquellos registros
            inactivos durante un tiempo considerable.
          </div>
          <div className="text-primary-100 pl-8">
            - Principio de integridad y confidencialidad: Los datos serán
            tratados de tal manera que la seguridad, confidencialidad e
            integridad siempre esté garantizada.
          </div>
          <div className="text-primary-100 pl-8">
            - COSMIC RACCOON toma las precauciones necesarias para evitar el
            acceso no autorizado o uso indebido de los datos de sus usuarios por
            parte de terceros.
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-6 justify-center">
          <h4 className="text-primary-300  text-xl font-horizon text-center">
            Categorías de datos personales
          </h4>
        </div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <div className="text-primary-100">
            Las categorías de datos personales que trata COSMIC RACCOON son:
          </div>
          <div className="text-primary-100 pl-8">
            - Datos relacionados con la identidad: nombre y apellidos, dirección
            de facturación, dirección de correo electrónico, nº de teléfono,
            etc.
          </div>
          <div className="text-primary-100 pl-8">
            - Datos relativos al seguimiento del servicio: historial,
            utilización de un código promocional, etc.
          </div>
          <div className="text-primary-100 pl-8">
            - Datos relativos al pago: modo de pago, datos de la tarjeta de
            pago, nº de operación.
          </div>
          <div className="text-primary-100">
            Al navegar por www.marinateixidor.com pueden recogerse datos no
            identificativos, como la dirección IP, geolocalización, un registro
            de cómo se utilizan los servicios y sitios, hábitos de navegación y
            otros datos que no pueden utilizarse para identificarle.
          </div>
          <div className="text-primary-100">
            El sitio web utiliza los siguientes servicios de análisis de
            terceros:
          </div>
          <div className="text-primary-100 pl-8">
            <Link
              href={`https://analytics.google.com`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <span className="hover:font-bold hover:active:scale-95 cursor-pointer text-primary-100 italic underline whitespace-nowrap">
                Google Analytics
              </span>{" "}
            </Link>
          </div>
          <div className="text-primary-100">
            COSMIC RACCOON utiliza dicha información para obtener datos
            estadísticos, analizar tendencias, administrar el sitio web,
            estudiar patrones de navegación y recopilar información demográfica.
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-6 justify-center">
          <h4 className="text-primary-300 text-xl font-horizon text-center">
            Obtención de datos personales
          </h4>
        </div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <div className="text-primary-100 text-left">
            Se proporcionan datos personales a COSMIC RACCOON:
          </div>
          <div className="text-primary-100 pl-8">
            - Al contactar a través de formularios o enviar un correo
            electrónico.
          </div>
          <div className="text-primary-100 pl-8">
            - Al suscribirse a una lista de correo electrónico.
          </div>
          <div className="text-primary-100">
            El usuario del sitio web se compromete a que los datos facilitados a
            COSMIC RACCOON sean correctos, completos, exactos y vigentes, así
            como a mantenerlos debidamente actualizados. El usuario del sitio
            web es el único responsable de la veracidad y corrección de los
            datos que remita al sitio, exonerando a COSMIC RACCOON de cualquier
            responsabilidad al respecto.
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-6 justify-center">
          <h4 className="text-primary-300  text-xl font-horizon text-center">
            Finalidad del tratamiento de datos personales
          </h4>
        </div>
        <div className="text-primary-500  text-xl"></div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <div className="text-primary-100">
            Cuando el usuario se conecta con el sitio web para mandar un correo
            a COSMIC RACCOON o realiza una suscripción, está facilitando
            información de carácter personal de la que el responsable es COSMIC
            RACCOON. Dicha información puede incluir datos de carácter personal
            como el nombre y apellidos, la dirección física, la dirección de
            correo electrónico, el número de teléfono u otra información
            personal. Al facilitar esta información, consiente que la
            información sea recopilada, utilizada, gestionada y almacenada por
            COSMIC RACCOON, sólo como se describe en el{" "}
            <span>
              {" "}
              <Link
                href={`/aviso-legal`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span className="hover:font-bold hover: active:scale-95 cursor-pointer text-primary-100 text-lg font-normal italic underline whitespace-nowrap">
                  Aviso Legal
                </span>{" "}
              </Link>{" "}
            </span>{" "}
            y en la presente{" "}
            <span>
              {" "}
              <Link
                href={`/p-politica`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span className="hover:font-bold hover: active:scale-95 cursor-pointer text-primary-100 text-lg font-normal italic underline whitespace-nowrap">
                  Política de Privacidad
                </span>{" "}
              </Link>{" "}
            </span>
          </div>
          <div className="text-primary-100">
            Los datos personales y la finalidad del tratamiento por parte de
            COSMIC RACCOON varían según el sistema de recogida de la
            información:
          </div>
          <div className="text-primary-100 pl-8">
            - Formularios de contacto: COSMIC RACCOON solicita datos personales
            entre los que pueden estar: nombre y apellidos, empresa y dirección
            de correo electrónico con la finalidad de responder a las consultas.
            Por ejemplo, COSMIC RACCOON utiliza tales datos para responder a los
            mensajes, dudas, comentarios o inquietudes relacionados con la
            información publicada en el sitio web, los servicios que se prestan
            a través del sitio web, el tratamiento de los datos personales,
            cuestiones referentes a los textos legales incluidos en el sitio
            web, así como cualquier otra consulta que pueda tener y que no esté
            sujeta a las condiciones del sitio web o de la contratación.
          </div>
          <div className="text-primary-100">
            Existen otras finalidades por las que COSMIC RACCOON trata los datos
            personales:
          </div>
          <div className="text-primary-100 pl-8">
            - Para garantizar el cumplimiento de las condiciones recogidas en el{" "}
            <span>
              {" "}
              <Link
                href={`/aviso-legal`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span className="hover:font-bold hover: active:scale-95 cursor-pointer text-primary-100  text-lg font-normal italic underline whitespace-nowrap">
                  Aviso Legal
                </span>{" "}
              </Link>{" "}
            </span>{" "}
            y en la ley aplicable. Esto puede incluir el desarrollo de
            herramientas y algoritmos que ayuden a este sitio web a garantizar
            la confidencialidad de los datos personales que recoge.
          </div>
          <div className="text-primary-100 pl-8">
            - Para apoyar y mejorar los servicios que ofrece este sitio web.
          </div>
          <div className="text-primary-100 pl-8">
            - Para analizar la navegación. COSMIC RACCOON recoge otros datos no
            identificativos que se obtienen mediante el uso de cookies que se
            descargan en el ordenador al navegar por el sitio web{" "}
            <span>
              {" "}
              <Link
                href={`/c-politica`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span className="hover:font-bold hover: active:scale-95 cursor-pointer text-primary-100  text-lg font-normal italic underline whitespace-nowrap">
                  Política de Cookies.
                </span>{" "}
              </Link>{" "}
            </span>{" "}
          </div>
          <div className="text-primary-100 pl-8">
            - Para gestionar las redes sociales. COSMIC RACCOON tiene presencia
            en redes sociales. Si se hace seguidor en las redes sociales de
            COSMIC RACCOON, el tratamiento de los datos personales se regirá por
            este apartado, así como por aquellas condiciones de uso, políticas
            de privacidad y normativas de acceso que pertenezcan a la red social
            que proceda en cada caso y que ha aceptado previamente.
          </div>
          <div className="text-primary-100">
            COSMIC RACCOON tratará los datos personales con la finalidad de
            administrar correctamente su presencia en la red social, informarle
            de las actividades, productos o servicios, así como para cualquier
            otra finalidad que permitan las normativas de las redes sociales.
          </div>
          <div className="text-primary-100">
            Los datos recogidos por COSMIC RACCOON se utilizan para dar a
            conocer y promocionar actividades y servicios o bien para responder
            a su solicitud o consulta a la mayor brevedad posible. La base de la
            legitimación del tratamiento es porque el usuario la proporciona
            informada y libremente con tales finalidades.
          </div>
          <div className="text-primary-100">
            Para otros tratamientos o finalidades relacionados con la prestación
            de nuestros servicios o el desarrollo de nuestra actividad, puedes
            solicitar más información en info@COSMIC RACCOON.com.
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-6 justify-center">
          <h4 className="text-primary-300  text-xl font-horizon text-center">
            Destinatarios de datos personales
          </h4>
        </div>
        <div className="text-primary-500  text-xl"></div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <div className="text-primary-100 pl-8">
            - Google Analytics es un servicio de analítica web prestado por
            Google, Inc., una compañía de Delaware cuya oficina principal está
            en 1600 Amphitheatre Parkway, Mountain View (California), CA 94043,
            Estados Unidos (“Google”). Encontrará más información en:
            <Link
              href={`https://analytics.google.com`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <span className="hover:font-bold hover: active:scale-95 cursor-pointer text-primary-100  text-lg font-normal italic underline whitespace-nowrap">
                https://analytics.google.com
              </span>{" "}
            </Link>
          </div>
          <div className="text-primary-100">
            Google Analytics utiliza “cookies” para ayudar a COSMIC RACCOON a
            analizar el uso y el tráfico del sitio web. La información que
            genera la cookie acerca del uso del sitio web (incluyendo la
            dirección IP) será directamente transmitida y archivada por Google
            en los servidores de Estados Unidos.
          </div>
          <div className="text-primary-100">
            Dado que utilizamos los servicios de algunos proveedores en Estados
            Unidos, le informamos de que algunos datos de los que somos
            responsables pueden transferirse a dicho país, pero dentro del
            programa <span className="italic">Privacy Shield</span> de la Unión
            Europea.
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-6 justify-center">
          <h4 className="text-primary-300 text-xl font-horizon text-center">
            Seguridad de los datos personales
          </h4>
        </div>
        <div className="text-primary-500  text-xl"></div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <div className="text-primary-100">
            COSMIC RACCOON garantiza que los datos personales son tratados de
            manera lícita, leal y transparente, y son recogidos con fines
            determinados, explícitos y legítimos, manteniéndose limitados a
            dichos fines y, si fuera necesario, actualizados. No se permitirá la
            identificación de los interesados durante más tiempo del necesario y
            se garantizará su seguridad con las medidas técnicas y organizativas
            adecuadas.
          </div>
          <div className="text-primary-100">
            Para proteger los datos personales, COSMIC RACCOON toma todas las
            precauciones razonables y sigue las mejores prácticas para evitar su
            pérdida, mal uso, acceso indebido, divulgación, alteración o
            destrucción.
          </div>
          <div className="text-primary-100">
            El sitio web está alojado en VERCEL. Puede consultar su{" "}
            <Link
              href={`https://vercel.com/legal/privacy-policy`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <span className="hover:font-bold hover:active:scale-95 cursor-pointer text-primary-100 italic underline whitespace-nowrap">
                Política de Privacidad
              </span>{" "}
            </Link>{" "}
            para tener más información.
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-6 justify-center">
          <h4 className="text-primary-300  text-xl font-horizon text-center">
            Conservación de datos personales
          </h4>
        </div>
        <div className="text-primary-500  text-xl"></div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <div className="text-primary-100">
            Los datos personales que proporciones a COSMIC RACCOON pueden ser
            conservados hasta que solicites su supresión. Una vez que los datos
            no son necesarios para los fines con los que fueron recogidos, se
            conservarán a disposición de las administraciones públicas
            competentes durante los plazos legales de conservación, es decir,
            mientras una ley pueda exigir su presentación. Expirados estos
            plazos, serán suprimidos.
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-6 justify-center">
          <h4 className="text-primary-300  text-xl font-horizon text-center">
            Aceptación y consentimiento
          </h4>
        </div>
        <div className="text-primary-500  text-xl"></div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <div className="text-primary-100">
            Como usuario del sitio web reconoces haber sido informado de las
            condiciones sobre protección de datos de carácter personal, aceptas
            y consientes el tratamiento de los mismos en la forma y para las
            finalidades indicadas en la presente Política de Privacidad.
          </div>
          <div className="text-primary-100">
            COSMIC RACCOON no recopila ni trata datos de menores. Los servicios
            disponibles en este sitio se dirigen exclusivamente a personas
            mayores de edad.
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-6 justify-center">
          <h4 className="text-primary-300  text-xl font-horizon">
            Revocabilidad
          </h4>
        </div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <div className="text-primary-100">
            Puedes ejercitar en todo momento, en los términos establecidos en la
            legislación vigente, los derechos de acceso, rectificación o
            supresión de datos, solicitar que se limite el tratamiento, oponerte
            al mismo, solicitar la portabilidad de sus datos, así como revocar
            el consentimiento prestado, derechos reconocidos en la normativa de
            protección de datos de carácter personal, presentando una copia de
            un documento identificativo en nuestra dirección del{" "}
            <span>
              {" "}
              <Link
                href={`/aviso-legal`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span className="hover:font-bold hover:active:scale-95 cursor-pointer text-primary-100 italic underline whitespace-nowrap">
                  Aviso Legal.
                </span>{" "}
              </Link>{" "}
            </span>{" "}
          </div>
          <div>
            <div className="text-primary-100">
              <div>
                Puedes encontrar más información sobre tus derechos o presentar
                una reclamación ante la autoridad de control competente en la
                Agencia Española de Protección de Datos:
              </div>
              <div>
                - Web:
                <Link
                  href={`https://www.agpd.es`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <span className="hover:font-bold hover:active:scale-95 cursor-pointer text-primary-100 italic underline whitespace-nowrap">
                    https://www.agpd.es
                  </span>{" "}
                </Link>{" "}
              </div>
              <div>- Dirección: C/ Jorge Juan, 6. 28001, Madrid</div>
              <div>- Teléfono: (901 100 099 - 912 663 517)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-6 justify-center">
          <h4 className="text-primary-300  text-xl font-horizon">
            Cambios en la Política de Privacidad
          </h4>
        </div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <div className="text-primary-100">
            COSMIC RACCOON se reserva el derecho a modificar la presente
            Política de Privacidad para adaptarla a novedades legislativas o
            jurisprudenciales, así como a nuevas prácticas industriales o
            mercantiles.
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-6 justify-center">
          <h4 className="text-primary-300  text-xl font-horizon"></h4>
        </div>
        <div className="text-primary-500  text-xl"></div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <div className="text-primary-100"></div>
          <div className="text-primary-100 pl-8"></div>
          <div className="text-primary-100"></div>
          <div className="text-primary-100"></div>
        </div>
      </div> */}
    </div>
  );
};
export default PrivPolicy;
