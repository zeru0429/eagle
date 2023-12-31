import React from 'react'
import PrintProvider, { Print} from 'react-easy-print';
import { Router } from 'react-router-dom';
const PrintPage = () => {
  return (
  <>
<PrintProvider>

  {/* <Router>
    <Layout>                  // */}
      ...                     //
        <div>                 //
          <h1>some page</h1>  //
          {/* <Header/>           // invisible in the print mode
          <Modal>             // */}
            <Print name="foo">
              <span>          //
                details       // visible in the print and non-print modes
              </span>         //
            </Print>
          {/* </Modal>            // */}
        </div>                // invisible in the print mode
      ...                     //
    {/* </Layout>                 //
  </Router> */}
</PrintProvider>
  </>
  )
}

export default PrintPage