import React, { useState } from 'react';
import { useTableData } from '../hooks/useTableData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

export default function DynamicTable({ jsonUrl }) {
  const { data: tableData, loading, error } = useTableData(jsonUrl); // Usando o hook para buscar os dados do JSON

  // Renderiza o cabeçalho baseado nas chaves do primeiro objeto no JSON
  const headers = tableData.length > 0 ? Object.keys(tableData[0]) : [];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Número de linhas por página

  if (loading) return <div>Loading...</div>; // Mensagem de loading
  if (error) return <div>Error: {error.message}</div>; // Mensagem de erro

  // Calcula os dados a serem exibidos na página atual
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reseta para a primeira página ao mudar o número de linhas por página
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedRows = tableData.slice(startIndex, endIndex);

  return (
    <Paper>
      <TableContainer>
        <Table sx={{ minWidth: 1000 }} aria-label="dynamic table">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header} sx={{ fontSize: '10px' }}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {headers.map((header) => (
                  <TableCell key={header + rowIndex} sx={{ fontSize: '10px' }}>
                    {row[header]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]} // Opções de linhas por página
        component="div"
        count={tableData.length} // Total de linhas no dataset
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
