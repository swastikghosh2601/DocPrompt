import React from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom"; // ✅ import

export default function SymptomForm() {
  const [duration, setDuration] = React.useState("");
  const [severity, setSeverity] = React.useState("");
  const [file, setFile] = React.useState(null);
  const [symptoms, setSymptoms] = React.useState("");

  const navigate = useNavigate(); // ✅ hook

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy triage result for now (later connect to backend / AI)
    const triageResult = {
      condition: "Possible Flu",
      advice: "Rest, drink fluids, and consult a doctor if symptoms persist.",
      inputs: {
        symptoms,
        duration,
        severity,
        image: file?.name || "No image uploaded",
      },
    };

    // ✅ navigate to result page with state
    navigate("/triage-result", { state: { result: triageResult } });
  };

  return (
    <Container maxWidth="md" disableGutters={false} sx={{ mt: "80px" }}>
      <Paper elevation={3} sx={{ width: "100%", p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Describe Your Symptoms
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter your symptoms..."
            multiline
            rows={3}
            fullWidth
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            variant="outlined"
            sx={{ mb: 3 }}
          />

          <Box display="flex" gap={2} sx={{ mb: 3 }}>
            <FormControl fullWidth>
              <InputLabel>Duration</InputLabel>
              <Select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                label="Duration"
              >
                <MenuItem value="1-2 days">1-2 days</MenuItem>
                <MenuItem value="1 week">1 week</MenuItem>
                <MenuItem value="2+ weeks">2+ weeks</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Severity</InputLabel>
              <Select
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
                label="Severity"
              >
                <MenuItem value="Mild">Mild</MenuItem>
                <MenuItem value="Moderate">Moderate</MenuItem>
                <MenuItem value="Severe">Severe</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button
            variant="outlined"
            component="label"
            startIcon={<CloudUploadIcon />}
            sx={{ mb: 3 }}
          >
            Upload Image
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          {file && <Typography>Selected: {file.name}</Typography>}

          <Box mt={3}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
