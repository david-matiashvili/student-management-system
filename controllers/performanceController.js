import { PerformanceModel } from '../models/performanceModel.js';

export const getStudentPerformance = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await PerformanceModel.getPerformanceByStudentId(id);
        if (!rows.length) return res.status(404).json({ message: 'No performance data found' });
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
