import mongoose from 'mongoose';

const homeSchema = new mongoose.Schema({
    robotId: String,
    sessionId: String,
    homeId: String,
    startTime: String,
    endTime: String,
    count: Number
}, { timestamps: true });

export default mongoose.model('wifi_measures', homeSchema);
