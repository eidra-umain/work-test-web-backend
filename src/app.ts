import dotenv from 'dotenv';
import app from '../app/api';

dotenv.config();

const PORT = process.env.PORT ?? 80;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
