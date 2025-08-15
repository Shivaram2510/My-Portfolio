#!/usr/bin/env node

// Simple development server script for client-only portfolio
import { spawn } from 'child_process';

const vite = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  stdio: 'inherit',
  shell: true
});

vite.on('error', (error) => {
  console.error('Failed to start development server:', error);
  process.exit(1);
});

vite.on('close', (code) => {
  console.log('Development server stopped with code:', code);
  process.exit(code);
});

// Handle termination signals
process.on('SIGTERM', () => {
  vite.kill('SIGTERM');
});

process.on('SIGINT', () => {
  vite.kill('SIGINT');
});