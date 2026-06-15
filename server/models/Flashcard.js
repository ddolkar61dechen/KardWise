import mongoose from 'mongoose'

const flashcardSchema = new mongoose.Schema({


    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,

    },

    question: {
        type: String,
        required: true,
        minlength: 5,
        trim: true,
    },

    answer: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
    },

    difficulty: {
        type: String,
        required: true,
        enum: ['easy', 'medium', 'hard']
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Flashcard = mongoose.model('Flashcard', flashcardSchema) 
export default Flashcard
