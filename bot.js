const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

class UltimateEnglishBot {
    constructor() {
        this.users = new Map();
        this.lessons = this.createLessons();
        this.lessonKeywords = this.createLessonKeywords();
        this.totalMainLessons = 23;
        this.achievements = this.createAchievements();
        this.dailyChallenges = this.createDailyChallenges();
    }

    createAchievements() {
        return {
            'first_lesson': { name: "🚀 First Steps", desc: "Complete your first lesson" },
            'grammar_master': { name: "📚 Grammar Master", desc: "Complete all grammar lessons" },
            'perfect_score': { name: "🏆 Perfect Score", desc: "Get 100% on any lesson" },
            'week_streak': { name: "🔥 7-Day Streak", desc: "Practice for 7 consecutive days" },
            'speed_demon': { name: "⚡ Speed Demon", desc: "Complete a lesson in under 2 minutes" },
            'community_help': { name: "👥 Community Helper", desc: "Help 3 other students" }
        };
    }

    createDailyChallenges() {
        const challenges = [
            { id: 1, question: "🔤 Spell 'beautiful'", answer: "beautiful", points: 10 },
            { id: 2, question: "🔄 Use 'have been' in a sentence", answer: "i have been learning", points: 15 },
            { id: 3, question: "📝 What's the past tense of 'go'?", answer: "went", points: 10 },
            { id: 4, question: "🔢 Write 247 in words", answer: "two hundred forty seven", points: 12 },
            { id: 5, question: "👥 Complete: ___ are my friends", answer: "they", points: 8 }
        ];
        // Rotate daily - same challenge for everyone each day
        const today = new Date().getDate() % challenges.length;
        return challenges[today];
    }

    createLessonKeywords() {
        return {
            // [Keep all your existing keywords...]
            'alphabet': 1, 'subject': 2, 'object': 3, 'verb to be': 4, 'numbers': 5,
            'possessive adjective': 6, 'possessive pronouns': 7, 'demonstrative adjective': 8,
            'demonstrative pronouns': 9, 'reflexive': 10, 'verb to be tenses': 11,
            'days': 12, 'to be to do': 13, 'articles': 14, 'i me my': 15,
            'you your': 16, 'he him his': 17, 'she her': 18, 'it its': 19,
            'we us our': 20, 'they them their': 21, 'questions': 22, 'modal verbs': 23,
            'revision 1': 24, 'revision 2': 25, 'revision 3': 26, 'final revision': 27,
            
            // NEW FEATURES:
            'daily challenge': 28, 'challenge': 28,
            'achievements': 29, 'badges': 29,
            'leaderboard': 30, 'rank': 30,
            'progress': 31, 'stats': 31,
            'study group': 32, 'community': 32,
            'practice': 33, 'quick practice': 33
        };
    }

    createLessons() {
        // [Keep all your existing lessons...]
        const lessons = {
            1: [ /* alphabet */ ],
            2: [ /* subject pronouns */ ],
            // ... all 23 lessons
            24: [ /* revision 1 */ ],
            25: [ /* revision 2 */ ],
            26: [ /* revision 3 */ ],
            27: [ /* final revision */ ],
            
            // NEW FEATURE LESSONS:
            28: [this.dailyChallenges], // Daily challenge
            29: [], // Achievements (special)
            30: [], // Leaderboard (special)
            31: [], // Progress stats (special)
            32: [], // Study groups (special)
            33: this.createQuickPractice() // Quick practice
        };
        return lessons;
    }

    createQuickPractice() {
        // Mixed questions from all lessons for quick review
        return [
            { question: "🔤 Letter after 'A'?", answer: "b" },
            { question: "👤 ___ am student", answer: "i" },
            { question: "🎯 Give to ___", answer: "me" },
            { question: "🔄 I ___ happy", answer: "am" },
            { question: "🔢 25 in words", answer: "twenty five" }
        ];
    }

    handleMessage(userId, message) {
        if (!this.users.has(userId)) {
            this.initializeUser(userId);
        }

        const user = this.users.get(userId);
        const cleanMessage = message.toLowerCase().trim();

        user.lastActive = new Date();

        // 🎯 ENHANCED MENU WITH ALL FEATURES
        if (this.isMenuCommand(cleanMessage)) {
            return this.showEnhancedMenu(user);
        }

        // 🆕 DAILY CHALLENGE
        if (cleanMessage.includes('challenge') || cleanMessage.includes('daily')) {
            return this.startDailyChallenge(userId);
        }

        // 🆕 ACHIEVEMENTS
        if (cleanMessage.includes('achievement') || cleanMessage.includes('badge')) {
            return this.showAchievements(user);
        }

        // 🆕 LEADERBOARD
        if (cleanMessage.includes('leaderboard') || cleanMessage.includes('rank')) {
            return this.showLeaderboard();
        }

        // 🆕 PROGRESS STATS
        if (cleanMessage.includes('progress') || cleanMessage.includes('stat')) {
            return this.showProgressStats(user);
        }

        // 🆕 STUDY GROUPS
        if (cleanMessage.includes('group') || cleanMessage.includes('community')) {
            return this.showStudyGroups(user);
        }

        // 🆕 QUICK PRACTICE
        if (cleanMessage.includes('practice') || cleanMessage.includes('quick')) {
            return this.startQuickPractice(userId);
        }

        // [Keep existing lesson/revision handling...]
        if (cleanMessage.includes('revision')) {
            return this.handleRevisions(user, cleanMessage, userId);
        }

        const lessonNumber = this.getLessonByKeyword(cleanMessage);
        if (lessonNumber) {
            return this.startLesson(userId, lessonNumber);
        }

        if (user.currentLesson > 0) {
            return this.checkAnswer(userId, cleanMessage);
        }

        return this.showEnhancedMenu(user);
    }

    initializeUser(userId) {
        this.users.set(userId, {
            currentLesson: 0,
            currentQuestion: 0,
            score: 0,
            totalScore: 0,
            completedLessons: new Set(),
            achievements: new Set(),
            streak: 0,
            lastActive: new Date(),
            joinDate: new Date(),
            correctAnswers: 0,
            totalAnswers: 0
        });
    }

    isMenuCommand(message) {
        const commands = ['lessons', 'menu', 'more', 'options', 'help', 'start', 'features'];
        return commands.includes(message);
    }

    showEnhancedMenu(user) {
        const completed = user.completedLessons.size;
        const progress = Math.round((completed / this.totalMainLessons) * 100);
        const streak = user.streak;
        const totalScore = user.totalScore;

        return `🏰 *ENGLISH LEARNING EMPIRE* 🏰

📚 *Core Lessons* (23 complete lessons)
• "alphabet" - "subject" - "object" - "verb to be" - "numbers"
• "possessive adjective" - "possessive pronouns" - and 16 more!

🎮 *Game Features* (FREE!):
• "daily challenge" - 🎯 Today's special challenge (+${this.dailyChallenges.points}pts)
• "achievements" - 🏆 Unlock badges & rewards
• "leaderboard" - 📊 See top students
• "progress" - 📈 Your learning stats
• "practice" - ⚡ 5-minute quick review

👥 *Community*:
• "study group" - 👥 Join learning community

📊 *Your Progress*:
• Lessons: ${completed}/23 (${progress}%)
• Streak: ${streak} days 🔥
• Total Points: ${totalScore} ⭐
• Accuracy: ${user.totalAnswers > 0 ? Math.round((user.correctAnswers/user.totalAnswers)*100) : 0}%

💡 *Tip*: Type any feature name to start!`;
    }

    startDailyChallenge(userId) {
        const user = this.users.get(userId);
        user.currentLesson = 28;
        user.currentQuestion = 0;
        user.score = 0;

        return `🎯 *DAILY CHALLENGE* 🎯
+${this.dailyChallenges.points} points!

${this.dailyChallenges.question}

*Type your answer:*`;
    }

    showAchievements(user) {
        let achievementsMsg = `🏆 *YOUR ACHIEVEMENTS* 🏆\n\n`;
        
        let unlockedCount = 0;
        for (const [achievementId, achievement] of Object.entries(this.achievements)) {
            if (user.achievements.has(achievementId)) {
                achievementsMsg += `✅ ${achievement.name}\n   ${achievement.desc}\n\n`;
                unlockedCount++;
            } else {
                achievementsMsg += `🔒 ${achievement.name}\n   ${achievement.desc}\n\n`;
            }
        }

        achievementsMsg += `Unlocked: ${unlockedCount}/${Object.keys(this.achievements).length}`;
        return achievementsMsg;
    }

    showLeaderboard() {
        // Simple leaderboard based on total scores
        const topUsers = Array.from(this.users.entries())
            .map(([id, user]) => ({ id, score: user.totalScore }))
            .sort((a, b) => b.score - a.score)
            .slice(0, 5);

        let leaderboard = `🏆 *TOP LEARNERS* 🏆\n\n`;
        
        topUsers.forEach((user, index) => {
            const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '📚';
            leaderboard += `${medal} Student ${user.id.slice(-4)}: ${user.score} pts\n`;
        });

        leaderboard += `\n💪 Keep learning to climb the ranks!`;
        return leaderboard;
    }

    showProgressStats(user) {
        const accuracy = user.totalAnswers > 0 ? Math.round((user.correctAnswers/user.totalAnswers)*100) : 0;
        const daysLearning = Math.floor((new Date() - user.joinDate) / (1000*60*60*24)) + 1;

        return `📊 *YOUR LEARNING STATS* 📊

📚 Progress: ${user.completedLessons.size}/23 lessons
🎯 Accuracy: ${accuracy}%
🔥 Current Streak: ${user.streak} days
⭐ Total Points: ${user.totalScore}
📅 Days Learning: ${daysLearning} days
🏆 Achievements: ${user.achievements.size} unlocked

💡 *Tip*: Practice daily to improve your stats!`;
    }

    showStudyGroups(user) {
        return `👥 *STUDY COMMUNITY* 👥

*Available Groups:*
• 🇬🇧 Beginner English Club
• 📚 Grammar Masters  
• 💬 Conversation Practice
• 🎯 Exam Preparation

*Community Features:*
• Share learning tips
• Ask questions
• Practice together
• Motivate each other

💡 *How to join*: Just keep learning! You're automatically part of our community.`;

    }

    startQuickPractice(userId) {
        const user = this.users.get(userId);
        user.currentLesson = 33;
        user.currentQuestion = 0;
        user.score = 0;

        return `⚡ *QUICK PRACTICE* ⚡
5 questions • Mixed topics • Fast review

${this.getCurrentQuestion(userId)}`;
    }

    checkAnswer(userId, userAnswer) {
        const user = this.users.get(userId);
        const lesson = this.lessons[user.currentLesson];
        
        // Handle daily challenge specially
        if (user.currentLesson === 28) {
            return this.checkDailyChallenge(user, userAnswer, userId);
        }

        // [Keep existing answer checking logic...]
        // But ENHANCE with:
        user.totalAnswers++;
        
        if (/* correct answer */) {
            user.correctAnswers++;
            user.totalScore += 10; // Points for correct answers
            this.checkAchievements(user); // Check for new achievements
            this.updateStreak(user); // Update daily streak
        }

        // [Rest of existing checkAnswer logic...]
    }

    checkDailyChallenge(user, userAnswer, userId) {
        const cleanAnswer = userAnswer.toLowerCase().trim();
        const cleanCorrect = this.dailyChallenges.answer.toLowerCase().trim();

        if (cleanAnswer === cleanCorrect) {
            user.totalScore += this.dailyChallenges.points;
            user.achievements.add('speed_demon'); // Unlock achievement
            
            return `🎉 *CHALLENGE COMPLETED!* 🎉
+${this.dailyChallenges.points} points! ⭐

🏆 Achievement Unlocked: Speed Demon!

Type "menu" for more features!`;
        } else {
            return `❌ Not quite! The answer was: *${this.dailyChallenges.answer}*

💡 Try again tomorrow for a new challenge!
Type "menu" for other features.`;
        }
    }

    checkAchievements(user) {
        // Check and unlock achievements based on user progress
        if (user.completedLessons.size >= 1 && !user.achievements.has('first_lesson')) {
            user.achievements.add('first_lesson');
        }
        
        if (user.streak >= 7 && !user.achievements.has('week_streak')) {
            user.achievements.add('week_streak');
        }
        
        // Add more achievement checks...
    }

    updateStreak(user) {
        const today = new Date().toDateString();
        const lastActive = user.lastActive.toDateString();
        
        if (today !== lastActive) {
            user.streak++;
        }
    }

    // [Keep all your existing methods...]
    getLessonByKeyword(message) {
        for (const [keyword, lessonNumber] of Object.entries(this.lessonKeywords)) {
            if (message.includes(keyword)) {
                return lessonNumber;
            }
        }
        return null;
    }

    getCurrentQuestion(userId) {
        const user = this.users.get(userId);
        const lesson = this.lessons[user.currentLesson];
        const question = lesson[user.currentQuestion];
        const totalQuestions = lesson.length;
        
        return `📝 *Question ${user.currentQuestion + 1}/${totalQuestions}*\n${question.question}\n\n*Type your answer:*`;
    }

    // [Rest of your existing methods...]
}

// Server setup (same as before)
const bot = new UltimateEnglishBot();

app.post('/webhook', (req, res) => {
    const incomingMsg = req.body.Body;
    const from = req.body.From;
    
    const reply = bot.handleMessage(from, incomingMsg);
    
    try {
        res.set('Content-Type', 'text/xml');
        res.send(`
            <Response>
                <Message>${reply}</Message>
            </Response>
        `);
    } catch (error) {
        res.set('Content-Type', 'text/xml');
        res.send(`
            <Response>
                <Message>Sorry, something went wrong!</Message>
            </Response>
        `);
    }
});

app.get('/', (req, res) => {
    res.send('🤖 Ultimate English Bot is running!');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 ULTIMATE BOT running on port ${PORT}`);
});
