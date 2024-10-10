import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTableData } from '../components/hooks/useTableData';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function EditPage() {
  const { id } = useParams(); // Obtém o ID da URL
  const { data: tableData, loading, error } = useTableData('http://localhost:3000/headcount'); // Substitua pelo seu endpoint
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate(); // Hook para navegação

  // Carrega os dados do item a ser editado
  useEffect(() => {
    if (!loading && !error && tableData) {
      const itemToEdit = tableData.find((item) => item.id === parseInt(id));
      if (itemToEdit) {
        setFormData(itemToEdit); // Define os dados do item no estado do formulário
      }
    }
  }, [loading, error, tableData, id]);

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Função para salvar as alterações
  const handleSave = () => {
    // Aqui você deve implementar a lógica para salvar os dados editados
    // Isso pode incluir uma chamada para uma API ou atualização de estado global
    console.log('Dados salvos:', formData);
    navigate('/'); // Redireciona após salvar (ou para outra página)
  };

  if (loading) return <div>Loading...</div>; // Mensagem de loading
  if (error) return <div>Error: {error.message}</div>; // Mensagem de erro
  if (!formData) return <div>No data found for this ID.</div>; // Mensagem se nenhum dado for encontrado

  return (
    <Paper sx={{ padding: 2 }}>
      <h2>Edit Item</h2>
      {Object.keys(formData).map((key) => (
        <TextField
          key={key}
          label={key}
          name={key}
          value={formData[key] || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      ))}
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Paper>
  );
}
