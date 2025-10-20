const express = require('express');
const app = express();

// Middleware to parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ========== ENGLISH LEARNING BOT CLASS ==========
class EnglishLearningBot {
    constructor() {
        this.users = new Map();
        this.lessons = this.createLessons();
        this.lessonKeywords = this.createLessonKeywords();
    }

    createLessonKeywords() {
        return {
            'alphabet': 1, 'pronouns': 1, 'vid1': 1,
            'numbers': 2, 'counting': 2, 'vid2': 2,
            'possessive': 3, 'my mine': 3, 'vid3': 3,
            'demonstrative': 4, 'this that': 4, 'vid4': 4,
            'reflexive': 5, 'myself': 5, 'vid5': 5,
            'verb to be': 6, 'am is are': 6, 'vid6': 6,
            'days': 7, 'week': 7, 'vid7': 7,
            'to do': 8, 'doing done': 8, 'vid8': 8,
            'articles': 9, 'a an the': 9, 'vid9': 9,
            'i me my': 10, 'vid10': 10,
            'you your': 11, 'vid11': 11,
            'he him his': 12, 'vid12': 12,
            'she her': 13, 'vid13': 13,
            'it its': 14, 'vid14': 14,
            'we us our': 15, 'vid15': 15,
            'they them their': 16, 'vid16': 16,
            'questions': 17, 'negatives': 17, 'vid17': 17,
            'modal verbs': 18, 'auxiliary': 18, 'vid18': 18
        };
    }

    createLessons() {
        return {
            1: [
                { question: "🔤 ALPHABET: Which letter comes after 'A'?", answer: "b" },
                { question: "👤 SUBJECT PRONOUN: Complete: ___ am learning English", answer: "i" },
                { question: "🎯 OBJECT PRONOUN: She gave ___ a book", answer: "me" },
                { question: "🔤 VERB TO BE: I ___ a student", answer: "am" },
                { question: "👥 SUBJECT PRONOUN: ___ are my friends (they/them)", answer: "they" },
                { question: "🎯 OBJECT PRONOUN: The teacher called ___ (he/him)", answer: "him" },
                { question: "🔤 VERB TO BE: We ___ happy today", answer: "are" }
            ],
            2: [
                { question: "🔢 Write '25' in words", answer: "twenty five" },
                { question: "🔢 What is 'one hundred' in digits?", answer: "100" },
                { question: "🔢 Write '999' in words", answer: "nine hundred ninety nine" },
                { question: "🔢 What is 'fifty' in digits?", answer: "50" },
                { question: "🔢 Write '750' in words", answer: "seven hundred fifty" },
                { question: "🔢 What is 'three hundred' in digits?", answer: "300" },
                { question: "🔢 Write '1,000' in words", answer: "one thousand" }
            ],
            // Add more lessons here following the same pattern
            3: [
                { question: "📝 This is ___ book (my/mine)", answer: "my" },
                { question: "📝 The book is ___ (my/mine)", answer: "mine" },
                { question: "📝 That is ___ car (their/theirs)", answer: "their" },
                { question: "📝 The car is ___ (their/theirs)", answer: "theirs" },
                { question: "📝 Is this ___ pen? (your/yours)", answer: "your" },
                { question: "📝 Yes, it's ___ (my/mine)", answer: "mine" },
                { question: "📝 These books are ___ (our/ours)", answer: "our" }
            ]
        };
    }

    handleMessage(userId, message) {
        if (!this.users.has(userId)) {
            this.users.set(userId, {
                currentLesson: 0,
                currentQuestion: 0,
                score: 0
            });
        }

        const user = this.users.get(userId);
        const cleanMessage = message.toLowerCase().trim();

        // Handle menu command
        if (cleanMessage === 'menu') {
            return this.showMainMenu();
        }

        // Handle lesson activation by keywords
        const lessonNumber = this.getLessonByKeyword(cleanMessage);
        if (lessonNumber) {
            return this.startLesson(userId, lessonNumber);
        }

        // Handle answer checking
        if (user.currentLesson > 0 && user.currentQuestion >= 0) {
            return this.checkAnswer(userId, cleanMessage);
        }

        return this.showMainMenu();
    }

    getLessonByKeyword(message) {
        for (const [keyword, lessonNumber] of Object.entries(this.lessonKeywords)) {
            if (message.includes(keyword)) {
                return lessonNumber;
            }
        }
        return null;
    }

    showMainMenu() {
        return `🏫 *ENGLISH LEARNING BOT* 🏫

*Available Lessons (Send the keyword):*

• "alphabet" - Alphabet & Pronouns (7 Qs)
• "numbers" - Numbers 1-1000 (7 Qs) 
• "possessive" - My/Mine, Your/Yours (7 Qs)
• "menu" - Show this menu

*Type "menu" anytime to see options!*`;
    }

    startLesson(userId, lessonNum) {
        const user = this.users.get(userId);
        user.currentLesson = lessonNum;
        user.currentQuestion = 0;
        user.score = 0;

        const lesson = this.lessons[lessonNum];
        return `🎯 *Starting Lesson ${lessonNum}* (7 questions)\n\n${this.getCurrentQuestion(userId)}`;
    }

    getCurrentQuestion(userId) {
        const user = this.users.get(userId);
        const lesson = this.lessons[user.currentLesson];
        const question = lesson[user.currentQuestion];
        return `📝 *Question ${user.currentQuestion + 1}/7*\n${question.question}\n\n*Type your answer:*`;
    }

    checkAnswer(userId, userAnswer) {
        const user = this.users.get(userId);
        const lesson = this.lessons[user.currentLesson];
        const currentQuestion = lesson[user.currentQuestion];
        const correctAnswer = currentQuestion.answer.toLowerCase().trim();

        const cleanUserAnswer = userAnswer.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase().trim();
        const cleanCorrectAnswer = correctAnswer.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase().trim();

        if (cleanUserAnswer === cleanCorrectAnswer) {
            user.score++;
            user.currentQuestion++;

            if (user.currentQuestion >= 7) {
                const completionMsg = `✅ *CORRECT!* 🎉\n\n🎊 *Lesson ${user.currentLesson} Completed!*\n📊 Score: ${user.score}/7\n\n`;
                user.currentLesson = 0;
                user.currentQuestion = 0;
                return completionMsg + "Type 'menu' for more lessons!";
            }

            return `✅ *CORRECT!* 🎉\nScore: ${user.score}/${user.currentQuestion}\n\n${this.getCurrentQuestion(userId)}`;
        } else {
            return `❌ *INCORRECT!* 😔\nCorrect answer: *${currentQuestion.answer}*\n\nPlease try again:\n\n${this.getCurrentQuestion(userId)}`;
        }
    }
}

// ========== SERVER SETUP ==========
const bot = new EnglishLearningBot();

// Webhook for WhatsApp
app.post('/webhook', (req, res) => {
    console.log('📱 Received message:', req.body);
    
    const incomingMsg = req.body.Body;
    const from = req.body.From;
    
    console.log(`Message from ${from}: ${incomingMsg}`);
    
    const reply = bot.handleMessage(from, incomingMsg);
    
    // Twilio expects TwiML response
    res.set('Content-Type', 'text/xml');
    res.send(`
        <Response>
            <Message>${reply}</Message>
        </Response>
    `);
});

// Health check endpoint
app.get('/', (req, res) => {
    res.send('🤖 English Learning Bot is running! Send a WhatsApp message to test.');
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Bot server running on port ${PORT}`);
});
