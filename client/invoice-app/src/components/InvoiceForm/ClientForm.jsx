//Client Name, Client Email, Streed Address, City, Post Code, Country
function ClientForm() {
  return (
    <div style={{ marginBottom: "46px" }}>
      <div style={{ marginBottom: "12px" }}>
        <label htmlFor="streetAddressClient" style={{ color: "#7C5DFA" }}>
          Bill From
        </label>
      </div>
      <div>
        <div>
          <label htmlFor="nameClient" style={{ color: "#7E88C3" }}>
            Client's Name
          </label>
          <div>
            <input
              type="text"
              id="nameClient"
              name="nameClient"
              style={{
                width: "504px",
                height: "48px",
                padding: "8px",
                border: "1px solid #DFE3FA",
                borderRadius: "4px",
                fontWeight: "bold",
              }}
            />
            {/* Faltan errores */}
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="emailClient" style={{ color: "#7E88C3" }}>
              Client's Email
            </label>
            {/* errores */}
          </div>
          <input
            type="email"
            placeholder="e.g. email@example.com"
            id="emailClient"
            name="emailClient"
            style={{
              width: "504px",
              height: "48px",
              padding: "8px",
              border: "1px solid #DFE3FA",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          />
        </div>
        <div>
          <label htmlFor="streetAddressClient" style={{ color: "#7E88C3" }}>
            Street Address
          </label>
          {/* Faltan los errores */}
        </div>
        <input
          type="text"
          id="streetAddressClient"
          name="streetAddressClient"
          style={{
            width: "504px",
            height: "48px",
            padding: "8px",
            border: "1px solid #DFE3FA",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        />
      </div>
      <div style={{ marginTop: "25px", display: "flex"}}>
        <div>
          <label htmlFor="cityTo" style={{ color: "#7E88C3" }}>
            City
          </label>
          <input
            type="text"
            id="cityTo"
            name="cityTo"
            style={{
              width: "152px",
              height: "46px",
              gap: "24px",
              border: "1px solid #DFE3FA",
            }}
          />
          {/* Faltan los errores */}
        </div>
        <div>
          <label htmlFor="postCodeTo" style={{ color: "#7E88C3" }}>
            Post Code
          </label>
          <input
            type="text"
            id="postCodeTo"
            name="postCodeTo"
            style={{
              width: "152px",
              height: "46px",
              gap: "24px",
              border: "1px solid #DFE3FA",
            }}
          />
          {/* Faltan los errores */}
        </div>
        <div>
          <label htmlFor="countryTo" style={{ color: "#7E88C3" }}>
            Country
          </label>
          <input
            type="text"
            id="countryTo"
            name="countryTo"
            style={{
              width: "152px",
              height: "46px",
              gap: "24px",
              border: "1px solid #DFE3FA",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ClientForm;
