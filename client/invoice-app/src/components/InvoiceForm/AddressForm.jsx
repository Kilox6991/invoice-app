//Street Adress, City, Post Code, Country
function AddressFrom() {
    return(
        <div style={{marginBottom:"46px"}}>
            <div style={{marginBottom:"26px"}}>
            <label htmlFor="streetAddress" style={{color:"#7C5DFA"}}>Bill to</label>
            </div>
            <div>
                <div style={{ marginBottom: "12px"}} >
                    <label htmlFor="" style={{color:"#7E88C3"}}>Street Address</label>
                    {/* Faltan los errores */}
                </div>
                <input type="text" id="streetAddress" name="streetAddress"
                style={{
                    width: "504px",
                    height: "48px", 
                    padding: "8px", 
                    border: "1px solid #DFE3FA", 
                    borderRadius: "4px",
                    fontWeight:"bold"
                }}
                />
            </div>
            <div style={{marginTop:"25px",display:"flex", padding:0}}>
                <div>
                    <label htmlFor="cityFrom" style={{color:"#7E88C3"}}>City</label>
                    <input type="text" id="cityFrom" name="cityFrom"
                    style={{
                        width:"152px",
                        height:"46px",
                        gap:"24px",
                        border: "1px solid #DFE3FA",
                    }}
                    />
                    {/* Faltan los errores */}
                </div>
                <div>
                    <label htmlFor="postCodeFrom" style={{color:"#7E88C3"}}>Post Code</label>
                    <input type="text" id="postCodeFrom" name="postCodeFrom"
                    style={{
                        width:"152px",
                        height:"46px",
                        gap:"24px",
                        border: "1px solid #DFE3FA",
                    }}/>
                    {/* Faltan los errores */}
                </div>
                <div>
                    <label htmlFor="countryFrom" style={{color:"#7E88C3"}}>Country</label>
                    <input type="text" id="countryFrom" name="countryFrom"
                    style={{
                        width:"152px",
                        height:"46px",
                        gap:"24px",
                        border: "1px solid #DFE3FA",
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default AddressFrom;
