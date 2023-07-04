import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const SubjectsPage = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${config.apiUrl}/curriculums`);
      setSubjects(response.data[1].subjects);
    };

    fetchData();
  }, []);

  function SubjectRow(props) {
    const { subject } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow key={subject.data.id}>
          <TableCell>
            <IconButton size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {subject.data.id}
          </TableCell>
          <TableCell>{subject.data.volume}</TableCell>
          <TableCell>{subject.data.category}</TableCell>
          <TableCell>{subject.data.parent}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Details
                </Typography>
                <p>Aine maht: <strong>{subject.data.volume} EAP</strong></p>
                <p>Aine lühikirjeldus:</p>
                {subject.data.description}
                <p>Toimumise aeg: <strong>{subject.data.parent}</strong></p>
                
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <>
      <h1>Subjects</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nimi</TableCell>
              <TableCell>EAP</TableCell>
              <TableCell>Moodul</TableCell>
              <TableCell>Semester</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjects.map((subject) => (
              <SubjectRow key={subject.data.id} subject={subject} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SubjectsPage;
