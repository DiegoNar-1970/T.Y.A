import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';
import backgroundImage from '../../../assets/images/background.jpeg';

// Estilos optimizados para 4 páginas
const styles = StyleSheet.create({
  page: {
    padding: 30,
    position: 'relative',
    fontFamily: 'Helvetica',
    fontSize: 10,
    paddingTop:80
  },
  backgroundImage: {
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    textTransform: 'uppercase',
  },
  section: {
    marginBottom: 10,
  },
  text: {
    fontSize: 11,
    marginBottom: 8,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
  },
  clauseTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 12,
    textTransform: 'uppercase',
  },
  listItem: {
    fontSize: 11,
    marginBottom: 5,
    marginLeft: 10,
    textIndent: -10,
    paddingLeft: 10,
  },
  signatureSection: {
    marginTop: 30,
    display: 'flex',
    direction: 'column',
    width: '100%',
  },
  signatureBlock: {
    width: '45%',
    marginTop: 20,
  },
  signatureLine: {
    borderTop: '1px solid black',
    width: '100%',
    marginTop: 30,
  },
  authorizationTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  pageBreak: {
    marginBottom: 20,
  }
});

const SubsanacionContractPDF = ({data}) => {

  const {
    client_name='',
    client_doc='',
    num_radicado='',
    paiment='',
    montoLetras='',
    service='',
    alcance='',
    responsability='' 
  } = data || {};


  return (
    <Document>
      {/* Página 1 - Contrato principal */}
      <Page size="A4" style={styles.page}>
        <Image src={backgroundImage} style={styles.backgroundImage} />
        
        <View style={styles.section}>
          <Text style={styles.title}>CONTRATO DE PRESTACIÓN DE SERVICIOS</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.text}>
            <Text style={styles.bold}>Entre:</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Trujillo y Asociados Law Group</Text>, sociedad legalmente constituida bajo las leyes
            de la República de Colombia, con NIT No. 24.309.970-5, en adelante "EL
            PROVEEDOR", y <Text style={styles.bold}>{client_name.toUpperCase()}</Text>, identificado con cédula de ciudadanía No.
            <Text style={styles.bold}>{client_doc}</Text> en adelante "EL CLIENTE".
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.text}>
            <Text style={styles.bold}>Preámbulo:</Text>
          </Text>
          <Text style={styles.text}>
            EL PROVEEDOR se dedica a ofrecer servicio de {service}{''} ante Superintendencia
            de Industria y Comercio (SIC). El CLIENTE ha expresado su interés en recibir dicho
            servicio, por lo que ambas partes acuerdan suscribir este contrato bajo los
            siguientes términos y condiciones
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.clauseTitle}>CLÁUSULAS:</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.clauseTitle}>1. OBJETO DEL CONTRATO:</Text>
          <Text style={styles.text}>
            EL PROVEEDOR se compromete a ofrecer al CLIENTE un servicio de {service}
            relacionados con el proceso del CLIENTE ante la Superintendencia de Industria y
            Comercio (SIC) específicamente el relacionado con el radicado <Text style={styles.bold}>{num_radicado}</Text>,
            La subsanación de la demanda no constituye una asesoría jurídica y tampoco
            <Text style={styles.bold}> es una representación legal</Text>
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.clauseTitle}>2. ALCANCE DEL SERVICIO:</Text>
          <Text style={styles.text}>
            EL PROVEEDOR se compromete a:
          </Text>
          <Text style={styles.text}>
            {alcance}
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.clauseTitle}>3. PLAZO DEL SERVICIO:</Text>
          <Text style={styles.text}>
            Este contrato tendrá vigencia desde el momento de la aceptación o firma y hasta el
            momento de {service} ante la superintendencia de industria y comercio (SIC).
          </Text>
        </View>
        
        
      </Page>

      {/* Página 2 - Continuación de cláusulas */}
      <Page size="A4" style={styles.page}>
        <Image src={backgroundImage} style={styles.backgroundImage} />
        <View style={styles.section}>
          <Text style={styles.clauseTitle}>4. VALOR Y FORMA DE PAGO:</Text>
          <Text style={styles.text}>
            El CLIENTE se compromete a pagar al PROVEEDOR la suma de <Text style={styles.bold}>${paiment}</Text>
            <Text style={styles.bold}> {montoLetras.toUpperCase()} </Text> que se deberán cancelar al momento de radicar la subsanación
            ante la Superintendencia de Industria y Comercio.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.clauseTitle}>5. OBLIGACIONES DEL CLIENTE:</Text>
          <Text style={styles.text}>
            El CLIENTE se compromete a:
          </Text>
          <Text style={styles.listItem}>
            • Proveer información precisa y actualizada sobre el proceso que se sigue ante
            la SIC, incluyendo el número de expediente y cualquier documento relevante
            que sea necesario para cumplir la labor encomendada al momento de la firma
            del contrato.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.clauseTitle}>6. OBLIGACIONES DEL PROVEEDOR:</Text>
          <Text style={styles.text}>
            El PROVEEDOR se compromete a:
          </Text>
          <Text style={styles.listItem}>
            • Brindar el servicio de notificación del estado de la demanda conforme a lo
            estipulado en la cláusula 2.
          </Text>
          <Text style={styles.listItem}>
            • Mantener la confidencialidad de la información proporcionada por el
            CLIENTE y no utilizarla para fines distintos a los establecidos en este
            contrato.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.clauseTitle}>7. CONFIDENCIALIDAD:</Text>
          <Text style={styles.text}>
            Ambas partes se comprometen a mantener la confidencialidad de toda la
            información relacionada con el servicio contratado, así como de cualquier dato
            personal o de carácter sensible proporcionado durante la vigencia del contrato. Esta
            obligación permanecerá vigente incluso después de la terminación del contrato.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.clauseTitle}>8. TERMINACIÓN DEL CONTRATO:</Text>
          <Text style={styles.text}>
            Este contrato podrá ser terminado en cualquiera de los siguientes casos:
          </Text>
          <Text style={styles.listItem}>
            • Por acuerdo mutuo entre las partes.
          </Text>
          <Text style={styles.listItem}>
            • Por incumplimiento de cualquiera de las partes de las obligaciones
            establecidas en el presente contrato, previa notificación escrita a la parte
            incumplida.
          </Text>
        </View>
        

      </Page>

      {/* Página 3 - Firmas */}
      <Page size="A4" style={styles.page}>
        <Image src={backgroundImage} style={styles.backgroundImage} />
        <View style={styles.section}>
          <Text style={styles.clauseTitle}>9. RESPONSABILIDAD:</Text>
          <Text style={styles.text}>
            El PROVEEDOR no será responsable de asegurar una respuesta favorable,
            únicamente se hará cargo de {responsability} sin garantizar la continuidad del
            proceso ante la Superintendencia de Industria y Comercio (SIC).
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.clauseTitle}>10. CLAUSULA COMPROMISORIA:</Text>
          <Text style={styles.text}>
            Cualquier conflicto que se deba resolver en relación con el presente contrato, se
            deberá llevar primeramente ante un centro de Arbitraje, si el conflicto en cuestión
            no es resuelto, se podrá acudir a la jurisdicción ordinaria.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.text}>
            En constancia de lo anterior, se firma por las partes
          </Text>
        </View>
        
        <View style={styles.signatureSection}>
          <View style={styles.signatureBlock}>
            <Text style={styles.text}>EL CLIENTE:</Text>
            <Text style={[styles.text, styles.bold]}>{client_name}</Text>
            <Text style={styles.text}>C.C {client_doc}</Text>
            <View style={styles.signatureLine} />
          </View>
          
          <View style={styles.signatureBlock}>
            <Text style={styles.text}>ACEPTO:</Text>
            <Text style={[styles.text, styles.bold]}>TRUJILLO Y ASOCIADOS LAW GROUP</Text>
            <Text style={[styles.text, styles.bold]}>MARTHA SOFIA OSPINA TRUJILLO</Text>
            <Text style={styles.text}>Representante legal.</Text>
            <Text style={styles.text}>C.C. 24.309.970</Text>
            <View style={styles.signatureLine} />
          </View>
        </View>
        
      </Page>
        
      {/* Página 4 - Continuación autorización */}
      <Page size="A4" style={styles.page}>
        <Image src={backgroundImage} style={styles.backgroundImage} />
        
        <View style={styles.section}>
          <Text style={styles.authorizationTitle}>AUTORIZACIÓN USO DE DATOS</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.text}>
            Yo <Text style={styles.bold}>{client_name}</Text>, mayor y vecina/o de esta ciudad, identificada con cédula de
            ciudadanía N° <Text style={styles.bold}>{client_doc}</Text>, actuando en nombre propio, manifiesto en forma
            espontánea y libre de todo apremio que conforme a la Ley 1581 de 2012 y sus
            decretos reglamentarios, autorizo a TRUJILLO Y ASOCIADOS LAW GROUP, con
            Nit 24.309.970-5 para el tratamiento y manejo de mis datos personales el cual
            consiste en recolectar, almacenar, usar, analizar, circular, actualizar y cruzar
            información propia, con el fin de facilitar el servicio jurídico que presta. Además de
            mis nombres, apellidos y documento de identidad, los datos personales que se
            someten a tratamiento son los adicionales consignados en el presente documento.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>
            Declaro que soy responsable de la veracidad de los datos suministrados. Así
            mismo autorizo a <Text style={styles.bold}>TRUJILLO Y ASOCIADOS LAW GROUP</Text> a efectuar sus procedimientos de notificación y comunicación a la dirección de correspondencia y/o correo electrónico por mi referidos.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.text}>
            Declaro que he sido informado(a) de los derechos que me asisten como titular de los datos personales y de la identificación, teléfono del responsable del tratamiento de mis datos de conformidad con la ley 1581 de 2012 y Decretos reglamentarios.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.text}>
            Esta autorización no implica el tratamiento y manejo de datos sensibles.
          </Text>
        </View>
        
        <View style={styles.signatureSection}>
          <View style={styles.signatureBlock}>
            <Text style={styles.text}>EL CLIENTE:</Text>
            <Text style={[styles.text, styles.bold]}>{client_name}</Text>
            <Text style={styles.text}>C.C {client_doc}</Text>
            <View style={styles.signatureLine} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default SubsanacionContractPDF;