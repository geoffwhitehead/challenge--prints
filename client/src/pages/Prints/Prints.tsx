import { useParams, useNavigate } from "react-router-dom";
import { usePrints } from "../../hooks/fetchPrints";
import { PrintCard } from "./PrintCard";
import Masonry from "@mui/lab/Masonry";
import { Box, Pagination } from "@mui/material";
import { ChangeEvent } from "react";

export const Prints: React.FC = () => {
  let { pageId } = useParams();

  let pageNumber = pageId || "1";

  const { list } = usePrints();
  const { data, status } = list(pageNumber);
  const navigate = useNavigate();

  const handleOnChange = (event: ChangeEvent<unknown>, page: number) => {
    navigate(`/prints/${page}`);
  };

  return (
    <Box>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 3,
              paddingBottom: 3,
            }}
          >
            <Pagination
              count={data.info.pages}
              variant="outlined"
              color="primary"
              page={data.info.page}
              sx={{
                alignSelf: "center",
              }}
              onChange={handleOnChange}
            />
          </Box>
          <Masonry columns={3} spacing={2}>
            {data.records.map((print, index) => (
              <div key={index}>
                <PrintCard print={print} />
              </div>
            ))}
          </Masonry>
        </>
      )}
    </Box>
  );
};
