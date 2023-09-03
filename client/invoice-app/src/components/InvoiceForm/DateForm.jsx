//Invoice Date, Payment Terms, Proyect Description
function DateForm() {
    return(
        <div style={{marginBottom:"46px"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{display:"flex",flexDirection: "column" }}>
                <label htmlFor="invoiceDate" style={{ color: "#7E88C3" }}>Invoice Date</label>
                <input type="date" id="invoiceDate" 
                style={{
                    width: "152px",
                    height: "46px",
                    gap: "24px",
                    border: "1px solid #DFE3FA",
                  }}/>
            </div>
            <div style={{display:"flex",flexDirection: "column" }}>
                <label htmlFor="paymentTerms" style={{ color: "#7E88C3" }}>Payment Terms</label>
                <input type="select" id="paymentTerms"
                style={{
                    width: "152px",
                    height: "46px",
                    gap: "24px",
                    border: "1px solid #DFE3FA",
                  }}/>
            </div>
            </div>
            <div>
                <label htmlFor="description" style={{ color: "#7E88C3" }}>Project Description</label>
                <input type="text" id="description" 
                style={{
                    width: "504px",
                    height: "48px",
                    gap: "24px",
                    border: "1px solid #DFE3FA",
                  }}/>
            </div>
        </div>
    )
}

export default DateForm
