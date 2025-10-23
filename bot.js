const express = require('express');
const app = express();

// Middleware to parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================== COMPLETE ENGLISH LEARNING BOT CLASS ==================
class EnglishLearningBot {
    constructor() {
        this.users = new Map();
        this.totalMainLessons = 23;

        // Initialize in correct order
        this.lessonKeywords = this.createLessonKeywords();
        this.dailyChallenges = this.createDailyChallenges();
        this.lessons = this.createLessons();
    }

    createDailyChallenges() {
        const challenges = [
            { id: 1, question: "🔤 Spell 'beautiful'", answer: "beautiful", points: 10 },
            { id: 2, question: "🔄 Use 'have been' in a sentence", answer: "i have been learning", points: 15 },
            { id: 3, question: "📝 What's the past tense of 'go'?", answer: "went", points: 10 },
            { id: 4, question: "🔢 Write 247 in words", answer: "two hundred forty seven", points: 12 },
            { id: 5, question: "👥 Complete: ___ are my friends", answer: "they", points: 8 },
            { id: 6, question: "📚 What's the plural of 'child'?", answer: "children", points: 10 },
            { id: 7, question: "🔤 Spell 'necessary'", answer: "necessary", points: 12 }
        ];
        const today = new Date().getDate() % challenges.length;
        return challenges[today];
    }

    createLessonKeywords() {
        return {
            'alphabet': 1, 'letters': 1, 'vid1': 1,
            'subject': 2, 'subject pronouns': 2, 'i you he': 2, 'vid2': 2,
            'object': 3, 'object pronouns': 3, 'me you him': 3, 'vid3': 3,
            'verb to be': 4, 'am is are': 4, 'vid4': 4,
            'numbers': 5, 'counting': 5, 'vid5': 5,
            'possessive adjective': 6, 'my your his': 6, 'vid6': 6,
            'possessive pronouns': 7, 'mine yours his': 7, 'vid7': 7,
            'demonstrative adjective': 8, 'this that these': 8, 'vid8': 8,
            'demonstrative pronouns': 9, 'this that these those': 9, 'vid9': 9,
            'reflexive': 10, 'myself yourself': 10, 'vid10': 10,
            'verb to be tenses': 11, 'am was will': 11, 'vid11': 11,
            'days': 12, 'week': 12, 'monday sunday': 12, 'vid12': 12,
            'to be to do': 13, 'being been doing done': 13, 'vid13': 13,
            'articles': 14, 'a an the': 14, 'vid14': 14,
            'i me my': 15, 'i me my mine': 15, 'vid15': 15,
            'you your': 16, 'you you your': 16, 'vid16': 16,
            'he him his': 17, 'he his him': 17, 'vid17': 17,
            'she her': 18, 'she her her': 18, 'vid18': 18,
            'it its': 19, 'it it its': 19, 'vid19': 19,
            'we us our': 20, 'we our us': 20, 'vid20': 20,
            'they them their': 21, 'they their them': 21, 'vid21': 21,
            'questions': 22, 'negatives': 22, 'question negative': 22, 'vid22': 22,
            'modal verbs': 23, 'auxiliary': 23, 'can will must': 23, 'vid23': 23,
            'revision 1': 24, 'review 1': 24, 'test 1': 24,
            'revision 2': 25, 'review 2': 25, 'test 2': 25,
            'revision 3': 26, 'review 3': 26, 'test 3': 26,
            'final revision': 27, 'final test': 27, 'exam': 27,
            'daily': 28, 'challenge': 28, 'daily challenge': 28,
            'leaderboard': 30, 'rank': 30, 'top': 30,
            'progress': 31, 'stats': 31, 'statistics': 31,
            'study group': 32, 'community': 32, 'group': 32,
            'practice': 33, 'quick': 33, 'quick practice': 33
        };
    }

    createLessons() {
        // Get the current daily challenge safely
        const currentDailyChallenge = this.dailyChallenges || 
            { question: "🔤 Spell 'wonderful'", answer: "wonderful", points: 10 };

        return {
            1: [{ question: "🔤 Which letter comes after 'A'?", answer: "b" }],
            2: [{ question: "👤 ___ am studying English", answer: "i" }],
            3: [{ question: "🎯 Sarah gave book to ___", answer: "me" }],
            4: [{ question: "🔄 I ___ happy now", answer: "am" }],
            5: [{ question: "🔢 Write 25 in words", answer: "twenty five" }],
            6: [{ question: "📝 This is ___ book", answer: "my" }],
            7: [{ question: "📝 This book is ___", answer: "mine" }],
            8: [{ question: "👉 ___ book is interesting", answer: "this" }],
            9: [{ question: "👉 ___ is my book", answer: "this" }],
            10: [{ question: "🔄 I hurt ___", answer: "myself" }],
            11: [{ question: "⏰ I ___ happy now", answer: "am" }],
            12: [{ question: "📅 Day after Monday?", answer: "tuesday" }],
            13: [{ question: "🔄 I have ___ waiting", answer: "been" }],
            14: [{ question: "📖 I saw ___ elephant", answer: "an" }],
            15: [{ question: "👤 ___ am learning", answer: "i" }],
            16: [{ question: "👤 ___ are nice", answer: "you" }],
            17: [{ question: "👤 ___ is tall", answer: "he" }],
            18: [{ question: "👤 ___ is smart", answer: "she" }],
            19: [{ question: "👤 ___ is raining", answer: "it" }],
            20: [{ question: "👥 ___ are friends", answer: "we" }],
            21: [{ question: "👥 ___ are coming", answer: "they" }],
            22: [{ question: "❓ ___ you like coffee?", answer: "do" }],
            23: [{ question: "🔧 I ___ speak English", answer: "can" }],
            24: [{ question: "🔤 Revision 1: Which is correct - 'a apple' or 'an apple'?", answer: "an apple" }],
            25: [{ question: "🔤 Revision 2: Complete: She ___ going to school", answer: "is" }],
            26: [{ question: "🔤 Revision 3: What are subject pronouns?", answer: "i you he she it we they" }],
            27: [{ question: "🔤 Final Revision: Make a sentence with 'I', 'am', and 'student'", answer: "i am a student" }],
            28: [{ question: currentDailyChallenge.question, answer: currentDailyChallenge.answer }],
            30: [{ question: "📊 View leaderboard", answer: "view" }],
            31: [{ question: "📈 View your progress", answer: "view" }],
            32: [{ question: "👥 Join study community", answer: "join" }],
            33: [
                { question: "⚡ Quick practice session", answer: "start" },
                { question: "🔤 Letter after 'A'?", answer: "b" },
                { question: "👤 ___ am student", answer: "i" },
                { question: "🔄 Past tense of go?", answer: "went" },
                { question: "📝 This is ___ book", answer: "my" },
                { question: "🔢 Write 15 in words", answer: "fifteen" }
            ]
        };
    }

    // ================== USER HANDLING ==================
    getUser(userId) {
        if (!this.users.has(userId)) {
            this.users.set(userId, {
                currentLesson: 0,
                currentQuestion: 0,
                score: 0,
                totalScore: 0,
                correctAnswers: 0,
                totalAnswers: 0,
                completedLessons: new Set(),
                streak: 0,
                lastActive: new Date()
            });
        }
        return this.users.get(userId);
    }

    handleMessage(userId, message) {
        const user = this.getUser(userId);
        const lower = message.toLowerCase().trim();

        // Help command
        if (lower === 'help' || lower === 'menu' || lower === 'start') {
            return this.showMainMenu();
        }

        // Progress command
        if (lower === 'progress' || lower === 'stats') {
            return this.showProgress(userId);
        }

        // Leaderboard command
        if (lower === 'leaderboard' || lower === 'rank') {
            return this.showLeaderboard();
        }

        // Community command
        if (lower === 'community' || lower === 'group') {
            return this.showCommunity();
        }

        // Lesson keyword detection
        const lessonNum = this.getLessonByKeyword(lower);
        if (lessonNum) {
            user.currentLesson = lessonNum;
            user.currentQuestion = 0;
            const lesson = this.lessons[lessonNum];
            if (lesson && lesson[0]) {
                return `📚 LESSON ${lessonNum} 📚\n\n${lesson[0].question}\n\n*Type your answer:*`;
            }
        }

        // Quick practice mode
        if (lower === 'quick practice' || lower === 'practice') {
            return this.startQuickPractice(userId);
        }

        // Daily challenge
        if (lower === 'daily' || lower === 'daily challenge') {
            return this.startDailyChallenge(userId);
        }

        // Answer checking
        if (user.currentLesson > 0) {
            return this.checkAnswer(userId, lower);
        }

        return this.showMainMenu();
    }

    showMainMenu() {
        return `📚 *ENGLISH LEARNING BOT* 📚

🔤 *Core Lessons (1-23):*
• "alphabet" - English letters
• "numbers" - Counting
• "subject pronouns" - I, you, he, she
• "verb to be" - am, is, are
• "days" - Days of the week
• "questions" - Asking questions
• "modal verbs" - can, will, must

🔄 *Practice Modes:*
• "quick practice" - Rapid exercises
• "daily challenge" - Today's special challenge
• "revision 1" - Review lessons 1-8
• "revision 2" - Review lessons 9-16  
• "revision 3" - Review lessons 17-23
• "final revision" - Complete review

📊 *Progress & Social:*
• "progress" - Your learning stats
• "leaderboard" - Top rankings
• "community" - Study groups

💡 *Tip:* Type any lesson name to start learning!`;
    }

    startQuickPractice(userId) {
        const user = this.getUser(userId);
        user.currentLesson = 33;
        user.currentQuestion = 0;
        user.score = 0;

        const lesson = this.lessons[33];
        if (lesson && lesson[0]) {
            return `⚡ *QUICK PRACTICE MODE* ⚡
Answer as fast as you can!

${lesson[0].question}

*Type your answer:*`;
        }
        return "Quick practice is currently unavailable. Try another lesson!";
    }

    startDailyChallenge(userId) {
        const user = this.getUser(userId);
        user.currentLesson = 28;
        user.currentQuestion = 0;
        user.score = 0;

        const challenge = this.dailyChallenges;
        return `📅 *DAILY CHALLENGE* 📅
        
${challenge.question}

*Prize: ${challenge.points} points!*

*Type your answer:*`;
    }

    checkAnswer(userId, answer) {
        const user = this.getUser(userId);
        const lesson = this.lessons[user.currentLesson];
        
        if (!lesson || !lesson[user.currentQuestion]) {
            return `⚠️ Lesson not found. Type "menu" to return.`;
        }

        const currentQ = lesson[user.currentQuestion];
        const correctAnswer = currentQ.answer.toLowerCase().trim();
        user.totalAnswers++;

        // Normalize answers for comparison
        const normalizedAnswer = answer.toLowerCase().trim().replace(/\s+/g, ' ');
        const normalizedCorrect = correctAnswer.toLowerCase().trim().replace(/\s+/g, ' ');

        if (normalizedAnswer === normalizedCorrect) {
            user.correctAnswers++;
            
            // Calculate points based on lesson type
            let points = 10;
            if (user.currentLesson === 28) { // Daily challenge
                points = this.dailyChallenges.points;
            }
            
            user.score += points;
            user.totalScore += points;
            user.currentQuestion++;

            if (user.currentQuestion >= lesson.length) {
                user.completedLessons.add(user.currentLesson);
                const completionMessage = `✅ Correct! +${points} points!\n🎉 Lesson complete! You earned ${user.score} points.\n\nType "menu" to continue.`;
                user.currentLesson = 0;
                user.currentQuestion = 0;
                return completionMessage;
            }

            return `✅ Correct! +${points} points!\n\n${lesson[user.currentQuestion].question}`;
        } else {
            return `❌ Incorrect. Try again!\n\n${currentQ.question}`;
        }
    }

    getLessonByKeyword(message) {
        return this.lessonKeywords[message] || null;
    }

    showProgress(userId) {
        const user = this.getUser(userId);
        const completionRate = user.totalAnswers > 0 
            ? Math.round((user.correctAnswers / user.totalAnswers) * 100) 
            : 0;
        
        return `📊 *YOUR PROGRESS*

✅ Completed Lessons: ${user.completedLessons.size}
🎯 Correct Answers: ${user.correctAnswers}/${user.totalAnswers}
📈 Accuracy: ${completionRate}%
🏆 Total Score: ${user.totalScore}
🔥 Current Streak: ${user.streak} days

💡 Keep going! You're doing great!`;
    }

    showLeaderboard() {
        return `🏆 *LEADERBOARD* 🏆

🥇 User123 - 1,250 points
🥇 LearnMaster - 980 points  
🥉 EnglishPro - 850 points
4.  GrammarGuru - 720 points
5.  WordWizard - 680 points

💪 Complete lessons to climb the ranks!`;
    }

    showCommunity() {
        return `👥 *STUDY COMMUNITY* 👥

🌐 Join our groups:
• Telegram: t.me/englishlearners
• Discord: discord.gg/english
• WhatsApp: +1234567890

📚 Study together and improve faster!
Share tips and help each other learn.`;
    }
}

// ================== APP ROUTE ==================
const bot = new EnglishLearningBot();

app.post('/message', (req, res) => {
    try {
        const { userId, message } = req.body;
        
        if (!userId || !message) {
            return res.status(400).json({ 
                error: "Missing userId or message" 
            });
        }

        const reply = bot.handleMessage(userId, message);
        res.json({ reply });
        
    } catch (error) {
        console.error('Error processing message:', error);
        res.status(500).json({ 
            error: "Internal server error" 
        });
    }
});

// Root route
app.get('/', (req, res) => {
    res.json({ 
        status: 'English Learning Bot is running!',
        endpoints: {
            postMessage: 'POST /message',
            body: { userId: 'string', message: 'string' }
        }
    });
});

// ================== SERVER START ==================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ English Learning Bot running on port ${PORT}`));
