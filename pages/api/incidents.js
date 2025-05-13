import mongoose from 'mongoose';
 
const IncidentSchema = new mongoose.Schema({
  bruker: String,
  problem: String,
  kategori: String,
  konsekvens: String,
  prioritet: String,
  tiltak: String,
}, { timestamps: true });
 
const Incident = mongoose.models.Incident || mongoose.model('Incident', IncidentSchema);
 
export default async function handler(req, res) {
  await mongoose.connect(process.env.MONGODB_URI);
 
  if (req.method === 'POST') {
    const incident = await Incident.create(req.body);
    res.status(201).json(incident);
  } else if (req.method === 'GET') {
    const incidents = await Incident.find({}).sort({ createdAt: -1 });
    res.status(200).json(incidents);
  }
}