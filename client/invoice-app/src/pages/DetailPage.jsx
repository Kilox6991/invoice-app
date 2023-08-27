import InfoInvoice from "../components/DetailPage/InfoInvoice/InfoInvoice";
import Stack from "@mui/material/Stack";
import Item from "@mui/material/ListItem";

function DetailPage() {
  return (
    <Stack>
      <Item>Status Bar</Item>
      <Item>
        <InfoInvoice />
        {/* Items */}
      </Item>
    </Stack>
  );
}

export default DetailPage;
