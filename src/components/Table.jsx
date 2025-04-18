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
import ViewListIcon from "@mui/icons-material/ViewList";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { Link } from "react-router-dom";
//import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";

const TableComponent = ({books=[]}) => {
    return (
       <>
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
                  <TableRow>
                    <TableCell variant="head">
                      <Typography variant="caption">Cover</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">Title</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">Author</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">Avg Rating</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">My Rating</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">Shelves</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">Reviews</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">Date Read</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">Date Added</Typography>
                    </TableCell>
                    {/* <TableCell><Typography variant="caption">Actions</Typography></TableCell> */}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {books.map((book, index) => (
                    <TableRow
                      key={index}
                      sx={{ borderBottom: "1px solid #ddd" }}
                    >
                      <TableCell component={Link} to={`/book/${book.id}`}  sx={{":hover": {color: "darkgreen"}}}>
                        {book.cover ? <img
                          src={book.cover}
                          alt="img"
                          style={{ width: "50px", height: "auto" }}
                        /> : null}
                      </TableCell>
                      <TableCell component={Link} to={`/book/${book.id}`}  sx={{":hover": {color: "darkgreen"}}}>
                        <Typography variant="caption">{book.title}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">{book.author}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">
                          {"★".repeat(book.avgRating)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">
                          {"★".repeat(book.myRating)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">
                          {book.shelves.join(", ")}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">
                          {book.reviews}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">
                          {book.dateRead}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">
                          {book.dateAdded}
                        </Typography>
                      </TableCell>
                       <TableCell>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button size="small">Edit</Button>
                <Button size="small">Delete</Button>
              </Box>
            </TableCell> 
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>}</>
    );
}

export default TableComponent;