import mongoose from 'mongoose'

const studySessionSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },

    difficulty: {
        type: String,
        required: true,
        enum: ['easy', 'medium', 'hard'],
    },

    practicedAt: {
        type: Date,
        default: Date.now,
    },
})

const StudySession = mongoose.model('StudySession', studySessionSchema)
export default StudySession