import { useQuery } from "@apollo/client";
import { roomFindManyGql } from "../../gql";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function RoomList() {
  const { loading, error, data } = useQuery(roomFindManyGql);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  data;
  return (
    <div className="body">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>createdAt</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">deletedAt</TableCell>
              <TableCell align="right">description Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">id</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">updatedAt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.room.findMany.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.createdAt}</TableCell>
                <TableCell align="right">{row.deletedAt}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.updatedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default RoomList;
