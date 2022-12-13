import mongoose from 'mongoose'

const admissionSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Admission = mongoose.model('Admission', admissionSchema)

export default Admission
