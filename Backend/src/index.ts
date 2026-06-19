import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Supabase Setup
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'Backend is running' });
});

// Contact Form Schema
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(10),
});

app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const validatedData = contactSchema.parse(req.body);
    
    // For now, just log the data and echo back
    // Later we can integrate Resend or save to Supabase
    console.log('Received contact inquiry:', validatedData);
    
    res.status(200).json({ 
      success: true, 
      message: 'Inquiry received successfully!' 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.flatten().fieldErrors });
    }
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
