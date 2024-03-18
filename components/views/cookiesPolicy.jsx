import Link from "next/link";
export default async function CookiesPolicy() {
  return (
    <div className="flex flex-col w-full text-justify container mx-auto my-24 gap-4 px-8 font-notosans">
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-12 justify-center">
          <h3 className="text-primary-300 text-2xl font-horizon">
            POLÍTICA DE COOKIES
          </h3>
        </div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <p className="text-primary-100 text-lg">
            Nuestro sitio web www.marinateixidor.com utiliza “cookies” con la
            finalidad de poder recabar información acerca del uso que realiza
            quien accede a la página web, con el objetivo de analizar sus
            hábitos de navegación para así facilitarle la misma y poder
            distinguirlo de otros usuarios y usuarias.
          </p>
          <p className="text-primary-100 text-lg">
            En cumplimiento con lo previsto en el artículo 22.2 de la Ley
            34/2002, de 11 de julio, de Servicios de la Sociedad de la
            Información y de Comercio Electrónico (LSSICE), la presente Política
            de Cookies tiene como finalidad informar al usuario/a sobre la
            recogida y tratamiento de cookies.
          </p>
          <p className="text-primary-100 text-lg">
            Contiene información anónima, como un identificador único, el nombre
            del sitio web y algunos dígitos y números.
          </p>
          <p className="text-primary-100 text-lg">
            Determinadas cookies pueden recabar datos de carácter personal, como
            tu ubicación. En estos casos, tus datos personales serán tratados de
            acuerdo con nuestra{" "}
            <span>
              <Link
                href={`/p-politica`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span className="hover:font-bold hover:active:scale-95 cursor-pointer text-primary-100 italic underline whitespace-nowrap">
                  {" "}
                  Política de Privacidad.{" "}
                </span>{" "}
              </Link>{" "}
            </span>
          </p>
          <p className="text-primary-100 text-lg">
            En COSMIC RACCOON utilizamos cookies para personalizar las
            aplicaciones y servicios, mejorar el contenido y la experiencia,
            medir la efectividad de la aplicación y promover la confianza y la
            seguridad.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-6 justify-center">
          <h4 className="text-primary-300 text-xl font-horizon">
            ¿Qué son las cookies?
          </h4>
        </div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <p className="text-primary-100 text-lg">
            Las cookies son pequeños archivos que contienen una serie de
            caracteres (texto) que se envían a tu explorador desde el servidor
            de un sitio web. La cookie puede tener un identificador único pero
            no contiene información de identificación personal, como su nombre o
            dirección de correo electrónico. COSMIC RACCOON puede usar cookies
            cuando visitas su sitio web o visitas otros sitios web donde COSMIC
            RACCOON publicita. El explorador de Internet del usuario/a de esta
            página web almacena la cookie en el disco duro de su equipo
            informático y el sitio web puede acceder a ella durante la siguiente
            visita. Otros sitios web también pueden enviar cookies a tu
            explorador pero éste no permitirá que esos sitios web vean la
            información de la cookie de COSMIC RACCOON.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-6 justify-center">
          <h4 className="text-primary-300 text-xl font-horizon">
            Cookies utilizadas en este sitio web
          </h4>
        </div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <p className="text-primary-100 text-lg">
            Este sitio web utiliza cookies propias técnicas para las cuales no
            se precisa la obtención del consentimiento del usuario/a, ya que
            están excluidas del ámbito de aplicación del art. 22.2 de la Ley
            34/2002, de 11 de julio, de Servicios de la Sociedad de la
            Información y de Comercio Electrónico. Sin embargo, este sitio web
            también tiene instaladas cookies que requieren el consentimiento de
            los usuarios/as. A continuación, siguiendo las directrices de la
            Agencia Española de Protección de Datos, procedemos a detallar el
            uso de cookies mediante su identificación y explicando su tipología
            y función, a fin de informarte con la máxima exactitud posible.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-6 justify-center">
          <h4 className="text-primary-300 text-xl font-horizon">
            Desactivación y eliminación de cookies
          </h4>
        </div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <p className="text-primary-100 text-lg">
            El usuario/a puede configurar la instalación de las cookies durante
            el proceso de configuración del sitio web y es consciente de que
            deshabilitar las cookies y la tecnología similar puede afectar al
            uso normal de la misma y los servicios proporcionados. Puedes
            permitir, bloquear o eliminar las cookies instaladas en tu equipo
            mediante la configuración de las opciones del navegador instalado en
            tu ordenador. La forma de deshabilitar las cookies es diferente para
            cada navegador, pero normalmente puede hacerse desde el menú
            Herramientas u Opciones. También puede consultarse el menú de Ayuda
            del navegador, donde puedes encontrar instrucciones. El usuario/a
            podrá en cualquier momento elegir qué cookies quiere que funcionen
            en este sitio web.
          </p>
          <p className="text-primary-100 text-lg">
            Para deshabilitar las cookies, el usuario/a deberá seguir las
            instrucciones de cada navegador. Por ejemplo:
          </p>
          <p className="text-primary-100 text-lg pl-8">
            <span>
              <Link
                href={`http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span className="hover:font-bold hover:active:scale-95 cursor-pointer text-primary-100 italic underline whitespace-nowrap">
                  - Microsoft Internet Explorer o Microsoft Edge
                </span>{" "}
              </Link>{" "}
            </span>
          </p>
          <p className="text-primary-100 text-lg pl-8">
            <span>
              <Link
                href={`http://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span className="hover:font-bold hover:active:scale-95 cursor-pointer text-primary-100 italic underline whitespace-nowrap">
                  - Mozilla Firefox
                </span>{" "}
              </Link>{" "}
            </span>
          </p>
          <p className="text-primary-100 text-lg pl-8">
            <span>
              <Link
                href={`https://support.google.com/accounts/answer/61416?hl=es`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span className="hover:font-bold hover:active:scale-95 cursor-pointer text-primary-100 italic underline whitespace-nowrap">
                  - Google Chrome
                </span>{" "}
              </Link>{" "}
            </span>
          </p>
          <p className="text-primary-100 text-lg pl-8">
            <span>
              <Link
                href={`https://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies/`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span className="hover:font-bold hover:active:scale-95 cursor-pointer text-primary-100 italic underline whitespace-nowrap">
                  {" "}
                  - Safari
                </span>{" "}
              </Link>{" "}
            </span>
          </p>
          <p className="text-primary-100 text-lg pl-8">
            <span>
              <Link
                href={`https://help.opera.com/Linux/10.60/es-ES/cookies.html`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span className="hover:font-bold hover:active:scale-95 cursor-pointer text-primary-100 italic underline whitespace-nowrap">
                  -Opera
                </span>{" "}
              </Link>{" "}
            </span>
          </p>
          <p className="text-primary-100 text-lg">
            Por favor, consulta las instrucciones y manuales de tu navegador
            para ampliar esta información.
          </p>
          <p className="text-primary-100 text-lg">
            El usuario/a también puede gestionar el almacenamiento de cookies en
            su navegador a través de herramientas como:
          </p>
          <p className="text-primary-100 text-lg pl-8">
            <span>
              <Link
                href={`https://www.ghostery.com/`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span className="hover:font-bold hover:active:scale-95 cursor-pointer text-primary-100 italic underline whitespace-nowrap">
                  - Ghostery
                </span>
              </Link>{" "}
            </span>
          </p>
          <p className="text-primary-100 text-lg">
            Los navegadores web son las herramientas encargadas de almacenar las
            cookies y desde allí el usuario/a debe ejercitar su derecho a
            eliminar o desactivar las mismas. Por tanto, COSMIC RACCOON no puede
            garantizar la correcta manipulación de las cookies por parte de los
            navegadores mencionados.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-4 mt-8 text-lg">
        <div className="flex w-full my-6 justify-center">
          <h4 className="text-primary-300 text-xl font-horizon">
            Cambios en la Política de Cookies
          </h4>
        </div>
        <div className="flex flex-col w-full items-start mt-4 gap-4">
          <p className="text-primary-100 text-lg">
            COSMIC RACCOON utiliza plugins de redes sociales, que permiten
            acceder a las mismas a partir del Sitio Web.
          </p>
          {/* <p className="text-primary-100 dark:text-white text-lg">
              El usuario debe referirse a las mismas para informarse y, en su
              caso, requerir información sobre el tratamiento de sus datos
              personales:
            </p>
            <p className="text-primary-100 dark:text-white text-lg pl-8">
              <span className="bg-red-600">
                - LinkedIn: https://www.linkedin.com/legal/cookie-policy
              </span>
            </p> */}

          <p className="text-primary-100 text-lg">
            Es posible que la presente Política de Cookies sufra modificaciones
            en un futuro, por ello es aconsejable que cada vez que el usuario/a
            acceda a esta página web, consulte nuevamente esta política con el
            objetivo de estar informado adecuadamente sobre las actualizaciones
            que se han producido.
          </p>
        </div>
      </div>
    </div>
  );
}
