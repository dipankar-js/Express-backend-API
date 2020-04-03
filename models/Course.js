const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: [true, 'Please add a course title']
	},
	description: {
		type: String,
		required: [true, 'Please add a description']
	},
	weeks: {
		type: String,
		required: [true, 'Please add no of weeks']
	},
	tuition: {
		type: Number,
		required: [true, 'Please add a tution const']
	},
	minimumSkill: {
		type: String,
		required: [true, 'Please add minimum skills'],
		enum: ['beginner', 'intermediate', 'advance']
	},
	scholarshipAvailable: {
		type: Boolean,
		default: false
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	bootcamp: {
		type: mongoose.Schema.ObjectId,
		ref: 'Bootcamp',
		required: true
	}
});

// Static method to get avg of course tutions
CourseSchema.statics.getAverageCost = async function(bootcampId) {
	const obj = await this.aggregate([
		{
			$match: { bootcamp: bootcampId }
		},
		{
			$group: {
				_id: '$bootcamp',
				averageCost: { $avg: '$tuition' }
			}
		}
	]);

	//console.log(obj);
	try {
		await this.model('Bootcamp').findByIdAndUpdate(bootcampId, {
			averageCost: Math.ceil(obj[0].averageCost / 10) * 10
		});
	} catch (error) {
		console.log(error);
	}
};

// Call getAverageCost after save
CourseSchema.post('save', function() {
	this.constructor.getAverageCost(this.bootcamp);
});

// Call getAverageCost before remove
CourseSchema.pre('remove', function() {
	this.constructor.getAverageCost(this.bootcamp);
});
module.exports = mongoose.model('Course', CourseSchema);
