import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";
import { pdfjs } from 'react-pdf';
import Header from "module/BasicLayout/Header"
import Footer from "./component/footer"

const CheckCertificate = () => {
  const { query } = useRouter();
  const hash = query.hash;
  console.log(hash)
  var baseUrlArweave = 'https://arweave.net/'
  var abc = `<iframe`
  const [newHTML, setNewHTML] = useState('');
  const CheckHash = async (_hash: any) => {
    if(_hash) {
      console.log(_hash)
      var form = new FormData();
      form.append("tokenClaim", _hash);
      await fetch(`https://tokun.us/certificate/readQR`, {
        method: "POST",
        body: form,
        redirect: "follow",
      })
      .then((resp) => {
        console.log(resp);
        return resp.text();
      })
      .then(function (html) {
        // Initialize the DOM parser
        var parser = new DOMParser();
      //   html = (html.replace(/abbr[\s\S]*?/, "embed"));
      //   html = (html.replace(/<\/abbr[\s\S]*?/, "</iframe"));

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");
        // You can now even select part of that html as you would in the regular DOM
        // Example:
        setNewHTML(doc.querySelector("body").innerHTML.replace("class", "className"));
      //   setNewHTML(doc.querySelector("body").innerHTML);
        // setNewHTML(newHTML.replace(/<img[\s\S]*?\/>/, "<aa>"));

      }).catch((reason) => {
        console.log(reason);
      });
    }
      
  };

  // const hash = 'WyJRdHlXQlNoUGVSdUFGVFJ3azlCWFdCVWRXSU1OcksyTWh4WC03Z0Fyb0JZIiwxNCwiMHhBMUQyNzhBNzEyMzlhMDI2MzRiYzEyNUY4QmMzNzFGNjg0ZThjNjFlIl0.ZQuiHA.x90Shz3cHh6ierj3s0Z8j3bP-OM'
  

  const SafeHTML = newHTML;
  useEffect(() => {
    CheckHash(hash)
  },[hash]);

  return (
    <>
        {/* <Document file={{url: 'https://arweave.net/88Y2eIU4oNYxueS8ejxmAWNeafOCRIAOdWbHMBhIF9g'}} >
            <Page pageNumber={2} />
        </Document> */}
        <Header />
        <div class="p-[2rem] mx-auto max-w-[1280px]" dangerouslySetInnerHTML={{ __html: SafeHTML }} ></div>
        <footer>
            <Footer />
        </footer>
    </>
   
)
};

export default CheckCertificate;
