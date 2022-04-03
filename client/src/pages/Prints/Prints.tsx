import { useParams } from "react-router-dom";
import { usePrints } from "../../hooks/fetchPrints";
import { PrintCard } from "./PrintCard";
import Masonry from "@mui/lab/Masonry";
import { Box } from "@mui/material";

export const Prints: React.FC = () => {
  let { id } = useParams();

  const { list } = usePrints();
  const { data, status } = list(id || "1");

  console.log("data", data);
  return (
    <Box>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <Masonry columns={3} spacing={2} sx={{ marginTop: 2 }}>
          {data.records.map((print, index) => (
            <div key={index}>
              <PrintCard print={print} />
            </div>
          ))}
        </Masonry>
      )}
    </Box>
  );
};
