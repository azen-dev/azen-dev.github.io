import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Дозволяємо Vite підхоплювати env-змінні з префіксом NEXT_PUBLIC_
  // (щоб не перейменовувати вже створені GitHub Actions secrets),
  // а також стандартний VITE_ на майбутнє.
  envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
});
