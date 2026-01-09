const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Program = require('./models/Program');
const Trainer = require('./models/Trainer');
const Membership = require('./models/Membership');

dotenv.config();

connectDB();

const programs = [
    // Programs list (Keeping it robust)
    {
        title: 'Advanced Hypertrophy',
        description: 'Scientific approach to muscle growth focusing on volume, intensity, and progressive overload. Ideal for those looking to maximize size.',
        duration: '75 mins',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
        intensity: 'High',
        schedule: 'Mon, Tue, Thu, Fri - 6:00 PM',
        benefits: ['Maximum Muscle Gain', 'Improved Strength', 'Metabolic Boost', 'Expert Spotting']
    },
    {
        title: 'Morning Flow Yoga',
        description: 'Start your day with intention. A mix of Hatha and Vinyasa to wake up the body and mind. Perfect for stress relief and flexibility.',
        duration: '60 mins',
        image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=1200',
        intensity: 'Low',
        schedule: 'Daily - 7:00 AM',
        benefits: ['Mental Clarity', 'Enhanced Flexibility', 'Stress Reduction', 'Better Posture']
    },
    {
        title: 'HIIT Shred',
        description: 'Maximum calorie burn in minimum time. Intervals of high intensity followed by short rest. Not for the faint of heart.',
        duration: '45 mins',
        image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80&w=1200',
        intensity: 'Very High',
        schedule: 'Mon, Wed, Fri - 5:30 PM',
        benefits: ['Rapid Fat Loss', 'Cardiovascular Health', 'Afterburn Effect', 'Time Efficient']
    },
    {
        title: 'Functional CrossFit',
        description: 'Prepare for the unknown. Compound movements performed at high intensity for total fitness. Community driven workouts.',
        duration: '60 mins',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
        intensity: 'High',
        schedule: 'Daily - 6:00 AM & 6:00 PM',
        benefits: ['Full Body Conditioning', 'Functional Strength', 'Community Support', 'Variety']
    },
    {
        title: 'Boxing Technique',
        description: 'Master the sweet science. Footwork, head movement, and combinations for agility and power. Gloves required.',
        duration: '60 mins',
        image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=1200',
        intensity: 'High',
        schedule: 'Tue, Thu - 7:00 PM',
        benefits: ['Self Defense', 'Agility & Coordination', 'Stress Release', 'Upper Body Toning']
    },
    {
        title: 'Core & Pilates',
        description: 'Strengthen your powerhouse. Improve posture, stability, and core strength through controlled movements.',
        duration: '45 mins',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200',
        intensity: 'Medium',
        schedule: 'Mon, Wed - 8:00 AM',
        benefits: ['Rock Solid Core', 'Back Pain Relief', 'Improved Balance', 'Lean Muscle']
    },
    {
        title: 'Powerlifting 101',
        description: 'Focus on the three big lifts: Squat, Bench, and Deadlift. Learn proper technique to move heavy weight safely.',
        duration: '90 mins',
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1200',
        intensity: 'High',
        schedule: 'Sat - 10:00 AM',
        benefits: ['Raw Strength', 'Bone Density', 'Confidence', 'Technique Mastery']
    },
    {
        title: 'Zumba Dance',
        description: 'Ditch the workout, join the party. Latin rhythms and easy-to-follow moves create a dynamic fitness program.',
        duration: '50 mins',
        image: 'https://images.unsplash.com/photo-1535743686920-55e4145369b9?auto=format&fit=crop&q=80&w=1200',
        intensity: 'Medium',
        schedule: 'Fri - 7:00 PM',
        benefits: ['Fun Atmosphere', 'Calorie Burning', 'Coordination', 'Social Interaction']
    }
];

const trainers = [
    {
        name: 'Marcus "The Titan"',
        specialization: 'Bodybuilding & Strength',
        experience: '12 Years',
        bio: 'Former Mr. Olympia competitor dedicated to sculpting physiques. I adhere to a strict philosophy of "Form follows Function".',
        image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800',
        certifications: ['IFBB Pro', 'NASM Certified', 'Nutrition Specialist'],
        rating: 4.9,
        socials: { instagram: 'marcus_fit', twitter: 'titan_lifts' }
    },
    {
        name: 'Elena Rodriguez',
        specialization: 'Yoga & Holistic Health',
        experience: '8 Years',
        bio: 'Certified in Rishikesh, bringing authentic practice to the modern world. My goal is to help you find inner peace and outer strength.',
        image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
        certifications: ['RYT 500', 'Mindfulness Coach', 'Reiki Master'],
        rating: 5.0,
        socials: { instagram: 'elena_yoga', linkedin: 'elena-rodriguez' }
    },
    {
        name: 'Coach Carter',
        specialization: 'Boxing & Athletics',
        experience: '15 Years',
        bio: 'Golden Gloves champion who treats every client like a contender. We train hard, we fight hard, and we win.',
        image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=800',
        certifications: ['USA Boxing Coach', 'CSCS', 'First Aid'],
        rating: 4.8,
        socials: { twitter: 'coach_carter', instagram: 'carter_boxing' }
    },
    {
        name: 'Sarah Connor',
        specialization: 'CrossFit & Conditioning',
        experience: '6 Years',
        bio: 'Specialist in functional fitness and high-stress conditioning. Preparing you for whatever life throws at you.',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800',
        certifications: ['CrossFit L3', 'Gymnastics Cert', 'Mobility Specialist'],
        rating: 4.9,
        socials: { instagram: 'sarah_cf', linkedin: 'sarah-connor' }
    },
    {
        name: 'David Chen',
        specialization: 'Calisthenics & Mobility',
        experience: '5 Years',
        bio: 'Master your own bodyweight. I teach gravity-defying moves and deep flexibility protocols.',
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
        certifications: ['Bar Brothers Cert', 'Yoga Alliance', 'Physiotherapy Assistant'],
        rating: 4.7,
        socials: { instagram: 'chen_cali', twitter: 'david_moves' }
    },
    {
        name: 'Jessica Jones',
        specialization: 'HIIT & Weight Loss',
        experience: '7 Years',
        bio: 'High energy, high impact. I help clients shred fat and build confidence through dynamic interval training.',
        image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800',
        certifications: ['ACE Personal Trainer', 'Precision Nutrition', 'Group Fitness'],
        rating: 4.8,
        socials: { instagram: 'jess_hiit', twitter: 'jessica_j' }
    }
];

const memberships = [
    {
        name: 'Standard',
        price: 29.99,
        features: ['Access to Gym Equipment', 'Locker Room Access', 'Free WiFi']
    },
    {
        name: 'Premium',
        price: 49.99,
        features: ['All Standard Features', 'Group Classes', 'Sauna Access', '1 Guest Pass/Month']
    },
    {
        name: 'Elite',
        price: 79.99,
        features: ['All Premium Features', 'Personal Trainer (2x/month)', 'Nutrition Plan', 'Unlimited Guest Passes']
    }
];

const importData = async () => {
    try {
        await Program.deleteMany();
        await Trainer.deleteMany();
        await Membership.deleteMany();

        await Program.insertMany(programs);
        await Trainer.insertMany(trainers);
        await Membership.insertMany(memberships);

        console.log('Data Imported successfully!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
