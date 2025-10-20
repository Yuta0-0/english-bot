const express = require('express');
const app = express();

// Middleware to parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ========== COMPLETE ENGLISH LEARNING BOT CLASS ==========
class EnglishLearningBot {
    constructor() {
        this.users = new Map();
        this.lessons = this.createLessons();
        this.lessonKeywords = this.createLessonKeywords();
        this.totalMainLessons = 23;
    }

    createLessonKeywords() {
        return {
            // Core Lessons 1-5
            'alphabet': 1, 'letters': 1, 'vid1': 1,
            'subject': 2, 'subject pronouns': 2, 'i you he': 2, 'vid2': 2,
            'object': 3, 'object pronouns': 3, 'me you him': 3, 'vid3': 3,
            'verb to be': 4, 'am is are': 4, 'vid4': 4,
            'numbers': 5, 'counting': 5, 'vid5': 5,
            
            // Lessons 6-10
            'possessive adjective': 6, 'my your his': 6, 'vid6': 6,
            'possessive pronouns': 7, 'mine yours his': 7, 'vid7': 7,
            'demonstrative adjective': 8, 'this that these': 8, 'vid8': 8,
            'demonstrative pronouns': 9, 'this that these those': 9, 'vid9': 9,
            'reflexive': 10, 'myself yourself': 10, 'vid10': 10,
            
            // Lessons 11-15
            'verb to be tenses': 11, 'am was will': 11, 'vid11': 11,
            'days': 12, 'week': 12, 'monday sunday': 12, 'vid12': 12,
            'to be to do': 13, 'being been doing done': 13, 'vid13': 13,
            'articles': 14, 'a an the': 14, 'vid14': 14,
            'i me my': 15, 'i me my mine': 15, 'vid15': 15,
            
            // Lessons 16-20
            'you your': 16, 'you you your': 16, 'vid16': 16,
            'he him his': 17, 'he his him': 17, 'vid17': 17,
            'she her': 18, 'she her her': 18, 'vid18': 18,
            'it its': 19, 'it it its': 19, 'vid19': 19,
            'we us our': 20, 'we our us': 20, 'vid20': 20,
            
            // Lessons 21-23
            'they them their': 21, 'they their them': 21, 'vid21': 21,
            'questions': 22, 'negatives': 22, 'question negative': 22, 'vid22': 22,
            'modal verbs': 23, 'auxiliary': 23, 'can will must': 23, 'vid23': 23,
            
            // Revision sessions
            'revision 1': 24, 'review 1': 24, 'test 1': 24,
            'revision 2': 25, 'review 2': 25, 'test 2': 25,
            'revision 3': 26, 'review 3': 26, 'test 3': 26,
            'final revision': 27, 'final test': 27, 'exam': 27
        };
    }

    createLessons() {
        return {
            // ========== CORE LESSONS 1-5 ==========
            1: [ // Alphabet
                { question: "🔤 Which letter comes after 'A'?", answer: "b" },
                { question: "🔤 Which letter comes after 'B'?", answer: "c" },
                { question: "🔤 Which letter comes before 'D'?", answer: "c" },
                { question: "🔤 Which letter is between 'E' and 'G'?", answer: "f" },
                { question: "🔤 What's the first letter?", answer: "a" },
                { question: "🔤 What's the last letter?", answer: "z" },
                { question: "🔤 Which letter comes after 'X'?", answer: "y" }
            ],
            2: [ // Subject Pronouns
                { question: "👤 ___ am a student", answer: "i" },
                { question: "👤 ___ is my friend", answer: "he" },
                { question: "👤 ___ is a teacher", answer: "she" },
                { question: "👤 ___ are learning", answer: "we" },
                { question: "👤 ___ are my friends", answer: "they" },
                { question: "👤 ___ is a book", answer: "it" },
                { question: "👤 ___ are smart", answer: "you" }
            ],
            3: [ // Object Pronouns
                { question: "🎯 She gave ___ a book", answer: "me" },
                { question: "🎯 I saw ___ yesterday", answer: "him" },
                { question: "🎯 Tell ___ the truth", answer: "me" },
                { question: "🎯 We called ___", answer: "them" },
                { question: "🎯 He helped ___", answer: "us" },
                { question: "🎯 I like ___", answer: "her" },
                { question: "🎯 Look at ___", answer: "it" }
            ],
            4: [ // Verb To Be
                { question: "🔄 I ___ happy", answer: "am" },
                { question: "🔄 She ___ a doctor", answer: "is" },
                { question: "🔄 They ___ students", answer: "are" },
                { question: "🔄 We ___ friends", answer: "are" },
                { question: "🔄 He ___ tall", answer: "is" },
                { question: "🔄 It ___ cold", answer: "is" },
                { question: "🔄 You ___ welcome", answer: "are" }
            ],
            5: [ // Numbers 1-1000
                { question: "🔢 Write '25' in words", answer: "twenty five" },
                { question: "🔢 What is '100' in words?", answer: "one hundred" },
                { question: "🔢 Write '999' in words", answer: "nine hundred ninety nine" },
                { question: "🔢 What is '50' in words?", answer: "fifty" },
                { question: "🔢 Write '750' in words", answer: "seven hundred fifty" },
                { question: "🔢 What is '300' in words?", answer: "three hundred" },
                { question: "🔢 Write '1,000' in words", answer: "one thousand" }
            ],

            // ========== LESSONS 6-10 ==========
            6: [ // Possessive Adjectives
                { question: "📝 This is ___ book", answer: "my" },
                { question: "📝 That is ___ car", answer: "your" },
                { question: "📝 This is ___ house", answer: "his" },
                { question: "📝 That is ___ bag", answer: "her" },
                { question: "📝 This is ___ school", answer: "our" },
                { question: "📝 That is ___ garden", answer: "their" },
                { question: "📝 This is ___ tail", answer: "its" }
            ],
            7: [ // Possessive Pronouns
                { question: "📝 The book is ___", answer: "mine" },
                { question: "📝 The car is ___", answer: "yours" },
                { question: "📝 The house is ___", answer: "his" },
                { question: "📝 The bag is ___", answer: "hers" },
                { question: "📝 The school is ___", answer: "ours" },
                { question: "📝 The garden is ___", answer: "theirs" },
                { question: "📝 This seat is ___", answer: "yours" }
            ],
            8: [ // Demonstrative Adjectives
                { question: "👉 ___ book is interesting", answer: "this" },
                { question: "👉 ___ books are heavy", answer: "these" },
                { question: "👉 ___ car is fast", answer: "that" },
                { question: "👉 ___ houses are big", answer: "those" },
                { question: "👉 ___ phone is mine", answer: "this" },
                { question: "👉 ___ dogs are friendly", answer: "those" },
                { question: "👉 ___ student is smart", answer: "that" }
            ],
            9: [ // Demonstrative Pronouns
                { question: "👉 ___ is my book", answer: "this" },
                { question: "👉 ___ are my friends", answer: "these" },
                { question: "👉 ___ is your car", answer: "that" },
                { question: "👉 ___ are their houses", answer: "those" },
                { question: "👉 ___ is delicious", answer: "this" },
                { question: "👉 ___ are expensive", answer: "those" },
                { question: "👉 ___ is difficult", answer: "that" }
            ],
            10: [ // Reflexive Pronouns
                { question: "🔄 I hurt ___", answer: "myself" },
                { question: "🔄 She taught ___", answer: "herself" },
                { question: "🔄 He built it ___", answer: "himself" },
                { question: "🔄 We enjoyed ___", answer: "ourselves" },
                { question: "🔄 They prepared ___", answer: "themselves" },
                { question: "🔄 You should believe in ___", answer: "yourself" },
                { question: "🔄 The cat cleaned ___", answer: "itself" }
            ],

            // ========== LESSONS 11-15 ==========
            11: [ // Verb To Be Tenses
                { question: "⏰ I ___ happy now (present)", answer: "am" },
                { question: "⏰ She ___ here yesterday (past)", answer: "was" },
                { question: "⏰ They ___ late tomorrow (future)", answer: "will be" },
                { question: "⏰ We ___ students (present)", answer: "are" },
                { question: "⏰ He ___ sick last week (past)", answer: "was" },
                { question: "⏰ I ___ there soon (future)", answer: "will be" },
                { question: "⏰ It ___ cold now (present)", answer: "is" }
            ],
            12: [ // Days of the Week
                { question: "📅 Day after Monday?", answer: "tuesday" },
                { question: "📅 Day before Sunday?", answer: "saturday" },
                { question: "📅 First day of week?", answer: "monday" },
                { question: "📅 Day between Tuesday and Thursday?", answer: "wednesday" },
                { question: "📅 Day after Friday?", answer: "saturday" },
                { question: "📅 Weekend days?", answer: "saturday sunday" },
                { question: "📅 Middle day of week?", answer: "wednesday" }
            ],
            13: [ // To Be & To Do
                { question: "🔄 I have ___ waiting", answer: "been" },
                { question: "🔄 She is ___ her homework", answer: "doing" },
                { question: "🔄 He has ___ his work", answer: "done" },
                { question: "🔄 They are ___ students", answer: "being" },
                { question: "🔄 We have ___ our best", answer: "done" },
                { question: "🔄 You are ___ great", answer: "being" },
                { question: "🔄 I am ___ dinner", answer: "doing" }
            ],
            14: [ // Articles
                { question: "📖 I saw ___ elephant", answer: "an" },
                { question: "📖 ___ sun is bright", answer: "the" },
                { question: "📖 She has ___ apple", answer: "an" },
                { question: "📖 ___ moon is beautiful", answer: "the" },
                { question: "📖 He is ___ honest man", answer: "an" },
                { question: "📖 ___ Earth is round", answer: "the" },
                { question: "📖 I need ___ pen", answer: "a" }
            ],
            15: [ // I/Me/My
                { question: "👤 ___ am learning (subject)", answer: "i" },
                { question: "👤 She told ___ (object)", answer: "me" },
                { question: "👤 This is ___ book (possessive)", answer: "my" },
                { question: "👤 ___ like English", answer: "i" },
                { question: "👤 Give it to ___", answer: "me" },
                { question: "👤 That is ___ car", answer: "my" },
                { question: "👤 ___ and John are friends", answer: "i" }
            ],

            // ========== LESSONS 16-20 ==========
            16: [ // You/You/Your
                { question: "👤 ___ are nice (subject)", answer: "you" },
                { question: "👤 I see ___ (object)", answer: "you" },
                { question: "👤 Is this ___ pen? (possessive)", answer: "your" },
                { question: "👤 ___ speak well", answer: "you" },
                { question: "👤 I help ___", answer: "you" },
                { question: "👤 That is ___ book", answer: "your" },
                { question: "👤 ___ are smart", answer: "you" }
            ],
            17: [ // He/His/Him
                { question: "👤 ___ is tall (subject)", answer: "he" },
                { question: "👤 That is ___ book (possessive)", answer: "his" },
                { question: "👤 I called ___ (object)", answer: "him" },
                { question: "👤 ___ runs fast", answer: "he" },
                { question: "👤 This is ___ car", answer: "his" },
                { question: "👤 She likes ___", answer: "him" },
                { question: "👤 ___ is my brother", answer: "he" }
            ],
            18: [ // She/Her/Her
                { question: "👤 ___ is smart (subject)", answer: "she" },
                { question: "👤 I see ___ (object)", answer: "her" },
                { question: "👤 That is ___ bag (possessive)", answer: "her" },
                { question: "👤 ___ sings well", answer: "she" },
                { question: "👤 He helps ___", answer: "her" },
                { question: "👤 This is ___ house", answer: "her" },
                { question: "👤 ___ is a doctor", answer: "she" }
            ],
            19: [ // It/It's/Its
                { question: "👤 ___ is raining", answer: "it" },
                { question: "👤 I see ___", answer: "it" },
                { question: "👤 The dog ate ___ food", answer: "its" },
                { question: "👤 ___ is cold today", answer: "it" },
                { question: "👤 The cat washed ___ face", answer: "its" },
                { question: "👤 ___ is time to go", answer: "it" },
                { question: "👤 The tree lost ___ leaves", answer: "its" }
            ],
            20: [ // We/Our/Us
                { question: "👥 ___ are friends (subject)", answer: "we" },
                { question: "👥 This is ___ house (possessive)", answer: "our" },
                { question: "👥 She told ___ (object)", answer: "us" },
                { question: "👥 ___ learn English", answer: "we" },
                { question: "👥 That is ___ car", answer: "our" },
                { question: "👥 He helps ___", answer: "us" },
                { question: "👥 ___ are students", answer: "we" }
            ],

            // ========== LESSONS 21-23 ==========
            21: [ // They/Their/Them
                { question: "👥 ___ are coming (subject)", answer: "they" },
                { question: "👥 That is ___ house (possessive)", answer: "their" },
                { question: "👥 I see ___ (object)", answer: "them" },
                { question: "👥 ___ are happy", answer: "they" },
                { question: "👥 This is ___ book", answer: "their" },
                { question: "👥 She knows ___", answer: "them" },
                { question: "👥 ___ are my friends", answer: "they" }
            ],
            22: [ // Questions & Negatives
                { question: "❓ ___ you like coffee? (do/does)", answer: "do" },
                { question: "❓ I ___ like tea (negative)", answer: "don't" },
                { question: "❓ ___ she speak English? (do/does)", answer: "does" },
                { question: "❓ He ___ play football (negative)", answer: "doesn't" },
                { question: "❓ ___ they live here? (do/does)", answer: "do" },
                { question: "❓ We ___ understand (negative)", answer: "don't" },
                { question: "❓ ___ it work? (do/does)", answer: "does" }
            ],
            23: [ // Auxiliary & Modal Verbs
                { question: "🔧 I ___ speak English (can/could)", answer: "can" },
                { question: "🔧 You ___ study now (should/shall)", answer: "should" },
                { question: "🔧 She ___ come tomorrow (may/might)", answer: "may" },
                { question: "🔧 We ___ help you (can/could)", answer: "can" },
                { question: "🔧 They ___ arrive late (may/might)", answer: "might" },
                { question: "🔧 He ___ finish his work (must/have to)", answer: "must" },
                { question: "🔧 I ___ go now (have to/must)", answer: "have to" }
            ],

            // ========== REVISION SESSIONS ==========
            24: this.createRevisionQuestions(1, 8),   // Lessons 1-8
            25: this.createRevisionQuestions(9, 16),  // Lessons 9-16
            26: this.createRevisionQuestions(17, 23), // Lessons 17-23
            27: this.createRevisionQuestions(1, 23)   // All lessons
        };
    }

    createRevisionQuestions(startLesson, endLesson) {
        const questions = [];
        for (let i = startLesson; i <= endLesson; i++) {
            const lesson = this.lessons[i];
            if (lesson && lesson.length > 0) {
                // Take 2-3 questions from each lesson for revision
                const sampleSize = Math.min(3, lesson.length);
                for (let j = 0; j < sampleSize; j++) {
                    if (j < lesson.length) {
                        questions.push({
                            ...lesson[j],
                            lesson: i
                        });
                    }
                }
            }
        }
        return questions;
    }

    handleMessage(userId, message) {
        if (!this.users.has(userId)) {
            this.users.set(userId, {
                currentLesson: 0,
                currentQuestion: 0,
                score: 0,
                completedLessons: new Set()
            });
        }

        const user = this.users.get(userId);
        const cleanMessage = message.toLowerCase().trim();

        if (cleanMessage === 'menu') {
            return this.showMainMenu(user);
        }

        // Handle revision sessions
        if (cleanMessage.includes('revision') || cleanMessage.includes('review') || cleanMessage.includes('test')) {
            const completed = user.completedLessons.size;
            if (completed >= 8 && cleanMessage.includes('1')) {
                return this.startLesson(userId, 24);
            } else if (completed >= 16 && cleanMessage.includes('2')) {
                return this.startLesson(userId, 25);
            } else if (completed >= 23 && cleanMessage.includes('3')) {
                return this.startLesson(userId, 26);
            } else if (completed >= 23 && (cleanMessage.includes('final') || cleanMessage.includes('exam'))) {
                return this.startLesson(userId, 27);
            } else {
                return this.showRevisionMenu(user);
            }
        }

        const lessonNumber = this.getLessonByKeyword(cleanMessage);
        if (lessonNumber) {
            return this.startLesson(userId, lessonNumber);
        }

        if (user.currentLesson > 0 && user.currentQuestion >= 0) {
            return this.checkAnswer(userId, cleanMessage);
        }

        return this.showMainMenu(user);
    }

    getLessonByKeyword(message) {
        for (const [keyword, lessonNumber] of Object.entries(this.lessonKeywords)) {
            if (message.includes(keyword)) {
                return lessonNumber;
            }
        }
        return null;
    }

    showMainMenu(user) {
        const completed = user.completedLessons.size;
        const progress = Math.round((completed / this.totalMainLessons) * 100);
        
        let menu = `🏫 *ENGLISH LEARNING BOT - 23 LESSONS* 🏫

*Core Lessons (1-5):*
• "alphabet" - Letters A-Z
• "subject" - Subject Pronouns  
• "object" - Object Pronouns
• "verb to be" - Am/Is/Are
• "numbers" - Numbers 1-1000

*Grammar Lessons (6-15):*
• "possessive adjective" - My/Your/His
• "possessive pronouns" - Mine/Yours/His
• "demonstrative adjective" - This/That/These
• "demonstrative pronouns" - This/That/These/Those
• "reflexive" - Myself/Yourself
• "verb to be tenses" - Present/Past/Future
• "days" - Days of the Week
• "to be to do" - Being/Been/Doing/Done
• "articles" - A/An/The
• "i me my" - I/Me/My usage

*Usage Lessons (16-23):*
• "you your" - You/Your usage
• "he him his" - He/Him/His usage  
• "she her" - She/Her usage
• "it its" - It/Its usage
• "we us our" - We/Us/Our usage
• "they them their" - They/Them/Their
• "questions" - Questions & Negatives
• "modal verbs" - Can/Will/Must etc.

📊 *Progress: ${completed}/${this.totalMainLessons} lessons (${progress}%)*

Type any lesson name or "menu" for help!`;

        return menu;
    }

    showRevisionMenu(user) {
        const completed = user.completedLessons.size;
        let menu = `📚 *REVISION SESSIONS* 📚\n\n`;

        if (completed >= 8) {
            menu += `• "revision 1" - Lessons 1-8\n`;
        }
        if (completed >= 16) {
            menu += `• "revision 2" - Lessons 9-16\n`;
        }
        if (completed >= 23) {
            menu += `• "revision 3" - Lessons 17-23\n`;
            menu += `• "final revision" - All 23 lessons\n`;
        }

        if (menu === `📚 *REVISION SESSIONS* 📚\n\n`) {
            menu += `Complete more lessons to unlock revision sessions!\n`;
            menu += `Currently completed: ${completed}/23 lessons`;
        }

        menu += `\nType "menu" for main menu`;
        return menu;
    }

    startLesson(userId, lessonNum) {
        const user = this.users.get(userId);
        user.currentLesson = lessonNum;
        user.currentQuestion = 0;
        user.score = 0;

        const lesson = this.lessons[lessonNum];
        const totalQuestions = lesson.length;
        
        if (lessonNum >= 24) {
            const revisionNames = {
                24: "Lessons 1-8 Revision",
                25: "Lessons 9-16 Revision", 
                26: "Lessons 17-23 Revision",
                27: "FINAL EXAM - All Lessons"
            };
            return `📚 *${revisionNames[lessonNum]}* (${totalQuestions} questions)\n\n${this.getCurrentQuestion(userId)}`;
        } else {
            return `🎯 *Starting Lesson ${lessonNum}* (7 questions)\n\n${this.getCurrentQuestion(userId)}`;
        }
    }

    getCurrentQuestion(userId) {
        const user = this.users.get(userId);
        const lesson = this.lessons[user.currentLesson];
        const question = lesson[user.currentQuestion];
        const totalQuestions = lesson.length;
        
        return `📝 *Question ${user.currentQuestion + 1}/${totalQuestions}*\n${question.question}\n\n*Type your answer:*`;
    }

    checkAnswer(userId, userAnswer) {
        const user = this.users.get(userId);
        const lesson = this.lessons[user.currentLesson];
        const currentQuestion = lesson[user.currentQuestion];
        const correctAnswer = currentQuestion.answer.toLowerCase().trim();
        const totalQuestions = lesson.length;

        const cleanUserAnswer = userAnswer.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase().trim();
        const cleanCorrectAnswer = correctAnswer.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase().trim();

        if (cleanUserAnswer === cleanCorrectAnswer) {
            user.score++;
            user.currentQuestion++;

            if (user.currentQuestion >= totalQuestions) {
                // Mark regular lessons as completed
                if (user.currentLesson >= 1 && user.currentLesson <= 23) {
                    user.completedLessons.add(user.currentLesson);
                }
                
                let completionMsg = `✅ *CORRECT!* 🎉\n\n`;
                
                if (user.currentLesson >= 24) {
                    const revisionNames = {
                        24: "Lessons 1-8 Revision",
                        25: "Lessons 9-16 Revision",
                        26: "Lessons 17-23 Revision", 
                        27: "FINAL EXAM"
                    };
                    completionMsg += `🎊 *${revisionNames[user.currentLesson]} Completed!*\n`;
                } else {
                    completionMsg += `🎊 *Lesson ${user.currentLesson} Completed!*\n`;
                }
                
                completionMsg += `📊 Score: ${user.score}/${totalQuestions}\n\n`;
                
                user.currentLesson = 0;
                user.currentQuestion = 0;
                
                const completed = user.completedLessons.size;
                if (completed >= 23 && user.currentLesson <= 23) {
                    completionMsg += "🎉 CONGRATULATIONS! You completed ALL 23 lessons! 🎉\n";
                    completionMsg += "Type 'final revision' for the ultimate test!";
                } else if (completed >= 8 || completed >= 16) {
                    completionMsg += `Great progress! ${completed}/23 lessons done.\n`;
                    completionMsg += "Type 'revision' for practice tests!";
                } else {
                    completionMsg += "Type 'menu' for more lessons!";
                }
                
                return completionMsg;
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
    
    try {
        res.set('Content-Type', 'text/xml');
        res.send(`
            <Response>
                <Message>${reply}</Message>
            </Response>
        `);
    } catch (error) {
        console.error('Error sending response:', error);
        res.set('Content-Type', 'text/xml');
        res.send(`
            <Response>
                <Message>Sorry, something went wrong!</Message>
            </Response>
        `);
    }
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
