import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  //input: 'https://localhost:44315/swagger/v1/swagger.json',
  input: '',
  output: './api/rest',
  client: 'axios',
  schemas: false,
  useOptions: true,
  name: 'RestClient',
});
