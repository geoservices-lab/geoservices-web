import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import Header from "module/BasicLayout/Header"
import Footer from 'module/BasicLayout/Footer'

const CheckCertificate = () => {
  const { query } = useRouter();
  const hash = query.hash;
  const [newHTML, setNewHTML] = useState('');
  const [conditionA, setConditionA] = useState('');
  const CheckHash = async (_hash: any) => {
    if(_hash) {
      var form = new FormData();
      form.append("tokenClaim", _hash);
      await fetch(`https://tokun.us/certificate/readQR`, {
        method: "POST",
        body: form,
        redirect: "follow",
      })
      .then((resp) => {
        return resp.text();
      })
      .then(function (html) {
        // Initialize the DOM parser
        var parser = new DOMParser()

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");
        // You can now even select part of that html as you would in the regular DOM
        // Example:
        setNewHTML(doc.querySelector("body").innerHTML.replace("class", "className"));
      }).catch((reason) => {
        console.log(reason);
      });
    }
  };
  const SafeHTML = newHTML;
  useEffect(() => {
    CheckHash(hash)
  },[hash]);

  useEffect(()=>{
    const iframeContent = document.querySelector("iframe");    
    const iframeTag = document.getElementById('ifrm')
    console.log(iframeContent);
    console.log(JSON.stringify(iframeContent))
    console.log(String(JSON.stringify(iframeContent)))
    setConditionA(String(JSON.stringify(iframeContent)))
    console.log(iframeTag)
    if(conditionA != 'null') {
      const a = iframeContent?.innerHTML
      console.log(a);
    }

    if(conditionA != 'null' || conditionA !=  '{}') {
      console.log('the result not showing, but this is still loading')  
      
    }
    if((conditionA != 'null' || conditionA != '{}') && iframeTag != null) {
      
      var isLoadingButtonNotLoaded = document.getElementById('loadingbtn')
      console.log('the result not showing')
      console.log('Iframe Need To Reload')
      const maxAttempts = 20; // Define the maximum number of attempts
      let attempts = 0;
      var isStop = false
      const checkIframe = () => {
        if(attempts < maxAttempts && !isStop){
            attempts++;
          try{
            if ( isLoadingButtonNotLoaded != null) {
              console.log("Show loading button")
              document.getElementById("notloadingbtn").classList.add('hidden');
              document.getElementById("loadingbtn").classList.remove('hidden');
            }

            document.getElementById('ifrm').src = document.getElementById('ifrm').src;
            var iframe = JSON.stringify(document.querySelector('iframe').contentWindow.document)
            setTimeout(checkIframe, 1000);
          }catch(error){
            console.log(error);
            // IF SHOW THIS ERROR MEANS THE FILE SUCCESSFULL LOADED ////////////
            // OMException: Failed to read a named property 'document' from 'Window': Blocked a frame with origin "http://localhost:3000" from accessing a cross-origin frame.
            ////////////////////////////////////////////////////////////////////

            // IF SHOW THIS ERROR MEANS THE FILE BLOCKED BY CSP ///////////////
            // DOMException: Permission denied to access property "document" on cross-origin object
            //////////////////////////////////////////////////////////////////////

            // Force to reload when blocked by CSP
            if (String(error).includes('Permission denied to access property "document"')) { 
              setTimeout(checkIframe, 1000);
            }
            isStop = true;
            var ad = document.getElementById("notloadingbtn")
            if ( ad != null) {
              console.log("Show 'Show Certificate' button")
              document.getElementById("loadingbtn").classList.add('hidden');
              document.getElementById("notloadingbtn").classList.remove('hidden');
            }
          }
        } else {
          if ( document.getElementById("notloadingbtn").classList.contains('hidden')) {
            console.log("Show 'Show Certificate' button")
            document.getElementById("loadingbtn").classList.add('hidden');
            document.getElementById("notloadingbtn").classList.remove('hidden');
          }
          console.log('Max attempts reached. Failed to load')
        }
      }
      checkIframe();

    }
  })
  return (
    <>
        <Header />
        <div class="p-[2rem] mx-auto max-w-[1280px]" dangerouslySetInnerHTML={{ __html: SafeHTML }} ></div>
        <footer>
            <Footer />
        </footer>
    </>
)
};

export default CheckCertificate;
