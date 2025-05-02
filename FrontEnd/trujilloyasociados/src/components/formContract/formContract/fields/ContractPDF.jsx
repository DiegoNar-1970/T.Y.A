import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';
import img from '../../../../assets/images/background.jpeg';
// Estilos para el documento
const styles = StyleSheet.create({
  page: {
    padding: 40,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    marginTop:70,
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 10,
    marginBottom: 5,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  center: {
    textAlign: 'center',
  },
  clauseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  clauseTitleP2: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'uppercase',
    marginTop:50
    
  },
  clauseTitleP3: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'uppercase',
    marginTop:50
    
  },
  signatureSection: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  signatureBlock: {
    width: '45%',
    marginTop: 10,
  },
  signatureLine: {
    borderTop: '1px solid black',
    width: '100%',
    marginTop: 30,
  },
});

const ContractPDF = ({ data }) => {
  const {
    num_contract,
    demandados,
    demandantes,
    executive,
    montoLetras,
    paiment,
    porcentage_honorario,
    observation,
    type_of_pai,
    contract_type,
    email,
  } = data;

  return (
    <Document>
      {/* Página 1 */}
      <Page size="A4" style={styles.page}>
        <Image src={img} style={styles.backgroundImage} />
        <View style={styles.section}>
          <Text style={styles.title}>
            CONTRATO DE PRESTACIÓN DE SERVICIOS JURIDICOS PROFESIONALES
          </Text>
          <Text style={[styles.text, styles.center, styles.bold]}>({num_contract})</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>
            {demandantes.map((demandante, index) => (
              <React.Fragment key={index}>
                <Text style={styles.bold}>{demandante.name}</Text>, mayor y vecina/o de esta ciudad,
                identificada con {demandante.typeDoc} N° <Text style={styles.bold}>{demandante.doc}</Text>
                {index < demandantes.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
            {demandantes.length === 0 && ' y'}
              y TRUJILLO Y ASOCIADOS LAW GROUP identificado con Nit <Text style={styles.bold}>24.309.970-5</Text>, quien para los fines de este contrato se
            denominará EL MANDATARIO, hemos celebrado el contrato de prestación de
            servicios profesionales que consignamos mediante las siguientes cláusulas:
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.clauseTitle}>PRIMERA. OBJETO DEL CONTRATO</Text>
          <Text style={styles.text}>
            El mandatario se compromete a realizar la labor contratada de manera diligente y oportuna, a
            prestar asesoría jurídica en todo momento al mandante en los siguientes asuntos:
            Demanda juzgado civil contra de{' '}
            {demandados.map((demandado, index) => (
              <React.Fragment key={index}>
                <Text style={styles.bold}>{demandado.name}</Text> con NIT <Text style={styles.bold}>{demandado.typeDoc}</Text>{' '}
                <Text style={styles.bold}>{demandado.doc}</Text>
                {index < demandados.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.clauseTitle}>SEGUNDA: OBLIGACIONES DE LAS PARTES</Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>a) DEL MANDANTE:</Text> Para que EL MANDATARIO, pueda cumplir bien, fiel y cabalmente con las labores
            profesionales encomendadas, EL MANDANTE, pondrá a su disposición todos los
            documentos, para que así EL MANDATARIO, pueda desarrollar con eficiencia su
            gestión. <Text style={styles.bold}>Parágrafo:</Text> De ninguna manera las relaciones contractuales entre EL
            MANDANTE Y EL MANDATARIO serán de carácter laboral, porque no están
            involucrados en la prestación de los servicios contratados, dependencia,
            subordinación y remuneración fija, habida cuenta además, que es una profesión
            liberal la de EL MANDATARIO, que ejercerá bajo su única y exclusiva
            responsabilidad, conservando desde luego su autonomía en cuanto a modo, tiempo,
            sistema y/o forma de realizar su actividad en las gestiones y/o acciones
            profesionales que le encomienda EL MANDANTE. <Text style={styles.bold}>b)- POR PARTE DEL
            MANDATARIO:</Text> Será responsable igualmente de prestar una asesoría oportuna,
            locuaz, eficiente, diligente.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.clauseTitle}>TERCERA: VALOR SERVICIOS JURIDICOS PROFESIONALES CONTRATADOS.</Text>
          <Text style={styles.text}>
            Los contratantes de consumo hemos pactado como valor para
            la atención de los negocios relacionados en la cláusula primera de este contrato la
            suma de $<Text style={styles.bold}>{paiment}</Text> (<Text style={styles.bold}>{montoLetras}</Text>) si el proceso termina de manera favorable
            en sentencia judicial o por medio de conciliación, se cancelará adicionalmente por
            parte del MANDANTE la suma del <Text style={styles.bold}>{porcentage_honorario}%</Text> sobre las
            pretensiones obtenidas en la demanda. <Text style={styles.bold}>Parágrafo:</Text> Las costas procesales y
            agencias en derecho que se generen, serán para EL MANDANTE, y cobrados por
            el mismo.
          </Text>
        </View>
      </Page>

      {/* Página 2 */}
      <Page size="A4" style={styles.page}>
        <Image src={img} style={styles.backgroundImage} />
        <View style={styles.section}>
          <Text style={styles.clauseTitleP2}>CUARTA: COLABORACION DEL MANDANTE</Text>
          <Text style={styles.text}>
            EL MANDANTE se obliga para con EL MANDATARIO a prestarle toda la colaboración debida, necesaria y oportuna
            para iniciar y llevar a término todas las acciones y gestiones para cuyo fin se ha
            celebrado el presente contrato de prestación de servicios jurídicos profesionales,
            comparecer EL MANDANTE ante cualquier autoridad que ordene su comparecencia
            en la fecha y hora señaladas, presentar las pruebas en el momento oportuno que
            se le requiera por EL MANDATARIO y en términos generales ser muy diligente
            con el fin de llevar a feliz término el proceso como consecuencia de las acciones
            coercitivas emprendidas por EL MANDATARIO, en procura del éxito del proceso.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.clauseTitle}>QUINTA CLAUSULA PENAL:</Text>
          <Text style={styles.text}>
            En el evento, en que UNA DE LAS PARTES tome la decisión de no continuar con el objetivo de la cláusula primera, sin razón o causa
            alguna, y sin consentir mutuo acuerdo, este pagara la otra parte una suma de
            quinientos mil pesos m/cte. $ 500.000 como clausula penal.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.clauseTitle}>SEXTA: TÉRMINO PARA EL CUMPLIMIENTO DEL PRESENTE CONTRATO DE PRESTACION DE SERVICIOS JURIDICOS PROFESIONALES.</Text>
          <Text style={styles.text}>
            Las partes han acordado como tiempo o término o plazo para el cabal cumplimiento del presente
            contrato el que sea necesario para iniciar y llevar a término la gestión encomendada,
            exigiendo DEL MANDATARIO total diligencia y cuidado en los asuntos
            encomendados.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.clauseTitle}>SEPTIMA:</Text>
          <Text style={styles.text}>
            Deja expresa constancia EL MANDATARIO, que en ningún momento
            garantiza resultados favorables en las acciones y gestiones para las cuales se ha
            celebrado este contrato, pero "EL MANDATARIO, garantiza entereza, lealtad,
            pulcritud, honradez, honorabilidad y profesionalismo en la prestación de dichos
            servicios, defendiendo de acuerdo a su leal saber y entender los intereses de EL
            MANDANTE, por encima de cualquier interés particular o de terceros.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.clauseTitle}>OCTAVA:</Text>
          <Text style={styles.text}>
            Cumplidas las acciones y gestiones encomendadas en cada caso, de
            conformidad con la CLAUSULA TERCERA de este contrato de prestación de
            servicios jurídicos profesionales, EL MANDANTE, procederá en forma inmediata a
            pagar todas las sumas de dinero real y efectivamente adeudadas. Dichas sumas de
            dinero pueden corresponder a los siguientes conceptos: <Text style={styles.bold}>a.-Todas las sumas de</Text>
            dinero a que tenga derecho legalmente de acuerdo con los valores que se
            determininen de conformidad con la cláusula TERCERA del presente contrato de
            prestación de servicios jurídicos profesionales.
          </Text>
        </View>
      </Page>

      {/* Página 3 */}
      <Page size="A4" style={styles.page}>
        <Image src={img} style={styles.backgroundImage} />
        <View style={styles.section}>
          <Text style={styles.clauseTitleP3}>NOVENA: TITULO EJECUTIVO.</Text>
          <Text style={styles.text}>
            Las partes contratantes determinan que este contrato presta mérito ejecutivo. Este contrato contiene obligaciones, claras,
            expresas y actualmente exigibles conforme su ritualidad, siendo entendido que es
            ley para las partes.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.clauseTitle}>DECIMA:</Text>
          <Text style={styles.text}>
            Para llevar la representación de EL MANDANTE, EL MANDATARIO,
            podrá contratar los servicios profesionales de otro u otros abogados a su cargo y
            sin relación o vínculo laboral alguno con EL MANDANTE, que serán elegidos por
            EL MANDATARIO.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.clauseTitle}>DECIMA PRIMERA: SE DARÁ POR TERMINADO EL PRESENTE CONTRATO POR:</Text>
          <Text style={styles.text}>
            a- Por incumplimiento de las obligaciones por cualquiera de las partes; b- Por
            el logro del objeto contratado, c- Por decisión unilateral y justificada de una de las
            partes, manifestada a la otra de manera expresa, d- Por imposibilidad justificada de
            cumplir las gestiones encomendadas, e- Por fuerza mayor o caso fortuito.
          </Text>
          <Text style={styles.text}>
            Este documento se elaboró en tres (3) hojas útiles para las partes, un ejemplar para
            EL MANDANTE Y UN EJEMPLAR PARA EL MANDATARIO y prestan mérito
            ejecutivo.
          </Text>
          <Text style={styles.text}>
            Este documento fue leído en todas y cada una de sus partes por los que lo
            celebraran y en constancia de su aprobación lo firman las partes.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.clauseTitle}>DECIMA SEGUNDA:</Text>
          <Text style={styles.text}>
            EL MANDANTE no podrá presentar documentos, desistimientos,
            transacciones, así como cualquier otro documento sin la respectiva revisión y aprobación
            de EL MANDATARIO, así mismo, no podrá realizar conciliaciones extrajudiciales sin el
            conocimiento y aprobación de EL MANDATARIO, esto con el fin de asegurar la
            transparencia del proceso, y evitar que, por la falta de asesoría jurídica, se pueda dilatar,
            entorpecer o cometer errores el proceso.
          </Text>
          <Text style={styles.text}>
            En el caso en que EL MANDANTE, realice alguna de las acciones mencionadas, sin
            consentimiento del MANDANTE, se dará por terminado el presente contrato y el
            MANDANTE, deberá pagar los valores contemplados en la cláusula tercera titulada VALOR
            SERVICIOS JURIDICOS PROFESIONALES CONTRATADOS.
          </Text>
        </View>

        <View style={styles.signatureSection}>
          <View style={styles.signatureBlock}>
            <Text style={styles.text}>EL MANDANTE:</Text>
            {demandantes.map((demandante, index) => (
              <React.Fragment key={index}>
                <Text style={[styles.text, styles.bold]}>{demandante.name},</Text>
                <Text style={styles.text}>{demandante.typeDoc} {demandante.doc}</Text>
              </React.Fragment>
            ))}
            <View style={styles.signatureLine} />
          </View>

          <View style={styles.signatureBlock}>
            <Text style={styles.text}>TRUJILLO Y ASOCIADOS LAW GROUP</Text>
            <Text style={[styles.text, styles.bold]}>MARTHA SOFIA OSPINA GIRALDO.</Text>
            <Text style={styles.text}>Representante legal.</Text>
            <Text style={styles.text}>C.C. 24.309.970</Text>
            <View style={styles.signatureLine} />
          </View>
        </View>
      </Page>

      {/* Página 4 - Autorización de datos */}
      <Page size="A4" style={styles.page}>
        <Image src={img} style={styles.backgroundImage} />
        <View style={[styles.section, { marginTop: 5}]}>
          <Text style={[styles.title, { fontSize: 16 }]}>AUTORIZACIÓN USO DE DATOS</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>
            Yo{' '}
            {demandantes.map((demandante, index) => (
              <React.Fragment key={index}>
                <Text style={styles.bold}>{demandante.name}</Text>, mayor y vecina/o de esta ciudad,
                identificada con {demandante.typeDoc} N° <Text style={styles.bold}>{demandante.doc}</Text>,{' '}
                {index < demandantes.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
            {demandantes.length === 0 && ' y'}
            , actuando en nombre propio, manifiesto en forma espontánea y libre de todo
            apremio que conforme a la <Text style={styles.bold}>Ley 1581 de 2012 y sus decretos reglamentarios</Text>,
            autorizo a TRUJILLO Y ASOCIADOS LAW GROUP, con Nit <Text style={styles.bold}>24.309.970-5</Text> para el
            tratamiento y manejo de mis datos personales el cual consiste en recolectar,
            almacenar, usar, analizar, circular, actualizar y cruzar información propia, con el fin
            de facilitar el servicio jurídico que presta. Además de mis nombres, apellidos y
            documento de identidad, los datos personales que se someten a tratamiento son los
            adicionales consignados en el presente documento.
          </Text>
          <Text style={styles.text}>
            Declaro que soy responsable de la veracidad de los datos suministrados. Así
            mismo autorizo a <Text style={styles.bold}>TRUJILLO Y ASOCIADOS LAW GROUP</Text> a efectuar sus
            procedimientos de notificación y comunicación a la dirección de correspondencia
            y/o correo electrónico por mis referidos.
          </Text>
          <Text style={styles.text}>
            Declaro que he sido informado(a) de los derechos que me asisten como titular de
            los datos personales y de la identificación, teléfono del responsable del tratamiento
            de mis datos de conformidad con la ley 1581 de 2012 y Decretos reglamentarios.
          </Text>
          <Text style={styles.text}>
            Esta autorización no implica el tratamiento y manejo de datos sensibles.
          </Text>
        </View>

        <View style={[styles.signatureSection, { marginTop: 10 }]}>
          <View style={styles.signatureBlock}>
            <Text style={styles.text}>EL MANDANTE:</Text>
            {demandantes.map((demandante, index) => (
              <React.Fragment key={index}>
                <Text style={[styles.text, styles.bold]}>{demandante.name}</Text>
                <Text style={styles.text}>{demandante.typeDoc} {demandante.doc}{index < demandantes.length - 1 ? ',' : ''}</Text>
              </React.Fragment>
            ))}
            <View style={styles.signatureLine} />
          </View>

          <View style={styles.signatureBlock}>
            <Text style={styles.text}>TRUJILLO Y ASOCIADOS LAW GROUP</Text>
            <Text style={[styles.text, styles.bold]}>MARTHA SOFIA OSPINA GIRALDO.</Text>
            <Text style={styles.text}>Representante legal.</Text>
            <Text style={styles.text}>C.C. 24.309.970</Text>
            <View style={styles.signatureLine} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ContractPDF;