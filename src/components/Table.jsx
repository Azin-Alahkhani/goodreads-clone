import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Button,
  IconButton,
  Divider,
} from "@mui/material";

import { Link } from "react-router-dom";


const TableComponent = ({books=[], cols = []}) => {
    
    return (
       <Box>
        {books.length > 0 &&
         <TableContainer
              component={Paper}
              x={{
                minWidth: 740,
                borderCollapse: "separate",
                borderSpacing: 0,
                "& td, & th": {
                  borderBottom: "1px solid #ddd",
                  borderRight: "none",
                  borderLeft: "none",
                },
                "& thead tr": {
                  backgroundColor: "transparent",
                },
                "& tbody tr:last-child td": {
                  borderBottom: "none",
                },
              }}
            >
          <Table size="small">
                <TableHead>
                    {cols.map((col) => (
                      <TableCell key={col.id} variant="head">
                        <Typography variant="caption">{col.label}</Typography>
                      </TableCell>
                    ))}
            
                </TableHead>

                <TableBody>
                  {books.map((book, index) => (
                    <TableRow
                      key={index}
                      sx={{ borderBottom: "1px solid #ddd" }}
                    >
                        {cols.map((col) => (
                          <TableCell key={col.id} component={Link} to={`/book/${book.id}`}  sx={{":hover": {color: "darkgreen"}}}>
                            {col.id === "cover" ? (
                              book.cover ? (
                                <img
                                  src={book.cover}
                                  alt="img"
                                  style={{ width: "50px", height: "auto" }}
                                />
                              ) : null
                            ) : col.id === "title" ? (
                              <Typography variant="caption">{book.title}</Typography>
                            ) : col.id === "author" ? (
                              <Typography variant="caption">{book.author}</Typography>
                            ) : col.id === "avgRating" ? (
                              <Typography variant="caption">
                                {"★".repeat(book.avgRating)}
                              </Typography>
                            ) : col.id === "myRating" ? (
                              <Typography variant="caption">
                                {"★".repeat(book.myRating)}
                              </Typography>
                            ) : col.id === "shelves" ? (
                              <Typography variant="caption">
                                {book.shelves.join(", ")}
                              </Typography>
                            ) : col.id === "reviews" ? (
                              <Typography variant="caption">
                                {book.reviews}
                              </Typography>
                            ) : col.id === "dateRead" ? (
                              <Typography variant="caption">
                                {book.dateRead}
                              </Typography>
                            ) : col.id === "dateAdded" ? (
                              <Typography variant="caption">
                                {book.dateAdded}
                              </Typography>
                            ) : null}
                            
                          </TableCell>
                        ))}
                    {/* <TableCell xs={1} sx={{display:"flex",flexDirection:"column", justifyContent:"space-between"}}>
                        <Button type="text" variant="text" color="inherit" sx={{color:"black",fontSize:"10px", textTransform: "none", '&:hover': { color: "black" }}} >
                        edit
                        </Button>
                         <Button type="text" variant="text" color="inherit" sx={{color:"black",fontSize:"10px", textTransform: "none", '&:hover': { color: "black" }}} >
                        delete
                        </Button>
                     </TableCell>*/}
                    </TableRow>
                   
                  ))}
                </TableBody>
              </Table>
            </TableContainer>}</Box>
    );
}

export default TableComponent;