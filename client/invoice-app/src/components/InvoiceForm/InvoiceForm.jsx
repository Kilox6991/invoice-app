import Drawer from "@mui/material/Drawer";

import AddressForm from "./AddressForm"; // Asumiendo que has corregido el nombre del componente
import ClientForm from "./ClientForm";
import DateForm from "./DateForm";
import ItemListForm from "./ItemListForm";

function InvoiceForm({ onClose }) {
  return (
    <Drawer anchor="left" open={true} onClose={onClose} ModalProps={{ sx: {} }}>
      <div style={{ width: 719, padding: 56 }}>
        {/* Contenido del formulario */}
        <h2 style={{ marginBottom: "46px" }}>New Invoice</h2>
        <form>
          <AddressForm />
          <ClientForm />
          <DateForm />
          <ItemListForm />
        </form>
      </div>
    </Drawer>
  );
}

export default InvoiceForm;
