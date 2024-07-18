import CircularProgress from "@mui/material/CircularProgress";

export default function Loader({ size, color }) {
  return (
    <div>
      <CircularProgress size={size} color={color} />
    </div>
  );
}
