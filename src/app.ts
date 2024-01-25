import dotenv from 'dotenv';
import app from './api';

dotenv.config();

const PORT = process.env.PORT ?? 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
