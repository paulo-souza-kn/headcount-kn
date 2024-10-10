import React, { useState, useEffect } from 'react';
import { useTableData } from '../hooks/useTableData';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

export default function DynamicTable({ jsonUrl }) {
  const { data: tableData, loading, error } = useTableData(jsonUrl);
  const [selectedRowId, setSelectedRowId] = useState();
  const navigate = useNavigate();

  // Gera as colunas da tabela com base nos dados
  const columns = tableData.length > 0
    ? Object.keys(tableData[0]).map((header) => ({
        field: header,
        headerName: header,
        flex: 1,
        minWidth: 150,
        headerAlign: 'center',
        align: 'center',
      }))
    : [];

  // Mapeia os dados para as linhas do DataGrid
  const rows = tableData.map((row) => ({
    id: row.id, // Usa o ID real do seu objeto de dados
    ...row,
  }));

  // Efeito para monitorar a seleção da linha
  useEffect(() => {
  }, [selectedRowId]);

  const handleSelectionChange = (newSelection) => {
    const selectedId = newSelection.length > 0 ? newSelection[0] : null;
    setSelectedRowId(selectedId);
  }

  // Função para redirecionar para a página de edição
  const handleEdit = () => {
    if (selectedRowId) {
      navigate(`/edit/${selectedRowId}`);
    } else {
      alert('Por favor, selecione uma linha para editar.');
    }
  };

  if (loading) return <div>Loading...</div>; // Mensagem de loading
  if (error) return <div>Error: {error.message}</div>; // Mensagem de erro

  return (
    <Paper sx={{ height: 1000, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 20, 50]}
        checkboxSelection={true}
        onRowSelectionModelChange={handleSelectionChange} // Atualiza o estado com o ID selecionado
        sx={{ border: 0 }}
      />
      <button onClick={handleEdit}>Editar</button> {/* Botão para editar */}
    </Paper>
  );
}
